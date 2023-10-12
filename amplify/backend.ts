import { Backend } from '@aws-amplify/backend';
import { data } from './data/resource.js';
import { auth } from './auth/resource.js';
import { storage } from './storage/resource.js';

new Backend({ auth, data, storage });
