// creamos una clase para cuando se cree un nuevo registro guardaremos el objeto en una DB
class Cliente {
    constructor(id, { nombre, apellidos, email, job, project })
    {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.job = job;
        this.project = project;
    }
}

//iniciaizamos DB vacio
const clienteDB = {};

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
        crearCliente: ({ input }) => {
            const id = require('crypto')
                .randomBytes(10)
                .toString('hex');
            clienteDB[id] = input;
        // fuardamos nuevo cliente con id e input
        return new Cliente(id,input)    
    }

    }
}
