import { Backend } from '@aws-amplify/backend';
import { data } from './data/resource.js';
import { auth } from './auth/resource.js';

new Backend({ auth, data });
