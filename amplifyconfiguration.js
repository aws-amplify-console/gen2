const amplifyConfig = {
  "aws_user_pools_id": "us-west-2_7Z4Gi8505",
  "aws_user_pools_web_client_id": "51oj71rh127kbfoarl2djqcr",
  "aws_cognito_region": "us-west-2",
  "aws_appsync_graphqlEndpoint": "https://2mth6ceyrrbbtlfdqpuicw5oly.appsync-api.us-west-2.amazonaws.com/graphql",
  "aws_appsync_region": "us-west-2",
  "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
  "aws_appsync_additionalAuthenticationTypes": "AWS_IAM",
  "modelIntrospection": {
    "version": 1,
    "models": {
      "Todo": {
        "name": "Todo",
        "fields": {
          "id": {
            "name": "id",
            "isArray": false,
            "type": "ID",
            "isRequired": true,
            "attributes": []
          },
          "name": {
            "name": "name",
            "isArray": false,
            "type": "String",
            "isRequired": true,
            "attributes": []
          },
          "createdAt": {
            "name": "createdAt",
            "isArray": false,
            "type": "AWSDateTime",
            "isRequired": false,
            "attributes": [],
            "isReadOnly": true
          },
          "updatedAt": {
            "name": "updatedAt",
            "isArray": false,
            "type": "AWSDateTime",
            "isRequired": false,
            "attributes": [],
            "isReadOnly": true
          }
        },
        "syncable": true,
        "pluralName": "Todos",
        "attributes": [
          {
            "type": "model",
            "properties": {}
          },
          {
            "type": "auth",
            "properties": {
              "rules": [
                {
                  "allow": "private",
                  "operations": [
                    "create",
                    "update",
                    "delete",
                    "read"
                  ]
                }
              ]
            }
          }
        ],
        "primaryKeyInfo": {
          "isCustomPrimaryKey": false,
          "primaryKeyFieldName": "id",
          "sortKeyFieldNames": []
        }
      }
    },
    "enums": {},
    "nonModels": {}
  },
  "aws_user_files_s3_bucket_region": "us-west-2",
  "aws_user_files_s3_bucket": "amplify-test-samsara-app-amplifystorageamplifysto-1t1ztpsqognzq"
}
export default amplifyConfig;

        