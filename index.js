import express from 'express';
// conectar graphql con express una vez 1) levantado servidor de app , y creado el schema.
import graphqlHTTP from 'express-graphql';
//importamos el schema
import {schema} from './src/models/schema'


const app = express();
// creamos una app con express en puerto 8000
app.get("/", (request, response) => {
    response.send('all ok')
});


// creamos una nueva ruta montada de app
app.use('/graphql', graphqlHTTP({
    //schema a utilizar cuando estemos en esta url
    schema,
    //inicializar graphql
    graphiql: true 
}));


app.listen(8000, () => console.log('server listening'));
