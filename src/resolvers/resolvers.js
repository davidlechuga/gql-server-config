import mongoose from 'mongoose';
import { Clientes } from '../lib/db';


// son los mismos resolver que exportamos, pero YA CON sintaxis de "GRAPHQL-TOOLS"
export const resolvers = {
    Query: {

        getCliente: ({ id }) => {
            return new Cliente(id, clienteDB[id]);
            
        },
        
    },

    Mutation: {
        // 1) generamos clientes con MUTATION que viene del Schema , y
        // 2 ) id's dinamicos cada vez que se creen nuevos registros.
        crearCliente: (root, { input }) => {
            const nuevoCliente = new Clientes({
                id: id,
                nombre: nombre,
                apellidos: apellidos,
                email: email,
                job: job,
                project: project
                
            });
            // el id tambien se requiere, mongo lo agrega con un ._id
            nuevoCliente.id = nuevoCliente._id;
            // insertar registros a la base de datos
            return new Promise((resolve, reject) => {
                nuevoCliente.save((error) => {
                    if (error) reject(error)
                    else resolve(nuevoCliente)
                })
            })

        },
    }
};
