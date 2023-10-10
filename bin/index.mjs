import child_process from 'child_process';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { CloudFormationClient, DescribeStacksCommand } from '@aws-sdk/client-cloudformation';
import fs from 'fs';
import { execaCommandSync } from 'execa';

const region = 'us-east-1';
const appId = process.argv[3];
const branch = process.argv[5];

function generateIntrospectionSchema() {
    execaCommandSync(`npx amplify generate graphql-client-code --appId ${appId}  --branch ${branch} --format introspection --modelTarget typescript --out ./`);
    return fs.readFileSync(`./model-introspection.json`, { encoding: 'utf-8' });
}


async function uploadToS3(bucketName, schema) {
    const s3client = new S3Client({ region });
    s3client.send(new PutObjectCommand({
        Bucket: bucketName,
        Key: 'model-introspection-schema.json',
        Body: schema
    }))
}

async function getBucketName() {
    const stackName = `amplify-${appId}-${branch}`;
    const cfnClient = new CloudFormationClient({ region });
    const { Stacks } = await cfnClient.send(new DescribeStacksCommand({
        StackName: stackName
    }));
    let bucketName;
    if (Stacks) {
        const schemaUri = Stacks[0].Outputs?.find(output => output.OutputKey === 'amplifyApiModelSchemaS3Uri')?.OutputValue;
        bucketName = schemaUri?.slice(5, schemaUri?.lastIndexOf('/'));

    } else {
        throw new Error(`Stack not found: ${stackName}`);
    }
    if (!bucketName) {
        throw new Error('Could not retrieve bucket name from stack output');
    }
    return bucketName;
}

const introspectionSchema = generateIntrospectionSchema();
const bucketName = await getBucketName();
console.log(bucketName);
await uploadToS3(bucketName, introspectionSchema);
console.log('Successfully generated and uploaded model introspection schema to S3 bucket');