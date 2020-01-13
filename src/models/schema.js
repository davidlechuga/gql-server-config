// resolvers para los clientes creados
import { resolvers } from '../resolvers/resolvers';
// importar lo que esta dentro de este archivo
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';


const typeDefs = importSchema('src/models/schema.graphql');
//crear el schema
const schema = makeExecutableSchema({ typeDefs, resolvers })




export {schema}