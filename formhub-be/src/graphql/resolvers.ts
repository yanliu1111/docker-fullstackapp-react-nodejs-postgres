import GraphQLJSON from 'graphql-type-json';
import { GraphQLDateTime } from 'graphql-iso-date';
import db from '../modules/db';
const resolvers = {
  DateTime: GraphQLDateTime,
  JSON: GraphQLJSON,
  Query: {
    submissions: () => {
      return db.submission.findMany({ orderBy: { submissionAt: 'desc' } });
    },
  },
};
export default resolvers;