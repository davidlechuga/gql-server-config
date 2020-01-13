//importa schema con gql-import
import { importSchema } from 'graphql-import';


const typeDefs = importSchema('src/models/schema.graphql');





export {typeDefs}