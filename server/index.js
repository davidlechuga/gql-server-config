import express from 'express';
// requerimos Apollo server para hacer la configuracion con sus dos parametros.
// 1) parametro , importamos el schema
import { typeDefs } from './src/models/schema'
// 2) parametro importamos resolvers.
import {resolvers} from './src/resolvers/resolvers'
import { ApolloServer } from 'apollo-server-express';


const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app })
app.listen({ port: 4004 }, () => console.log(`El servidor esta corriendo http://localhost:4004${server.graphqlPath}`));


