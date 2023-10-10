import { defineData } from '../../lib/dataFactory';

const schema = `
  type Todo @model @auth(rules: [{ allow: private }]) {
    id: ID!
    name: String!
  }
`;

export const data = defineData({ schema });
