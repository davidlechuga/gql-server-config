import mongoose from 'mongoose';
import { Clientes } from '../lib/db';
import { rejects } from 'assert';

// son los mismos resolver que exportamos, pero YA CON sintaxis de "GRAPHQL-TOOLS"
export const resolvers = {
	Query: {
		getCliente: (root, { id }) => {
			return new Promise((resolve, reject) => {
				Clientes.findById(id, (error, cliente) => {
					if (error) rejects(error);
					else resolve(cliente);
				});
			});
		},

		getClientes: (root, { limite }) => {
			return Clientes.find({}).limit(limite);
		}
	},

	Mutation: {
		// 1) generamos clientes con MUTATION que viene del Schema , y
		// 2 ) id's dinamicos cada vez que se creen nuevos registros.
		crearCliente: (root, { input }) => {
			const nuevoCliente = new Clientes({
				id: input.id,
				nombre: input.nombre,
				apellidos: input.apellidos,
				email: input.email,
				job: input.job,
				project: input.project
			});
			// el id tambien se requiere, mongo lo agrega con un ._id
			nuevoCliente.id = nuevoCliente._id;
			// insertar registros a la base de datos
			return new Promise((resolve, reject) => {
				nuevoCliente.save((error) => {
					if (error) reject(error);
					else resolve(nuevoCliente);
				});
			});
		},

		actualizarCliente: (root, { input }) => {
			return new Promise((resolve, reject) => {
				Clientes.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, cliente) => {
					if (error) reject(error);
					else resolve(cliente);
				});
			});
		},
		eliminarCliente: (root, { id }) => {
			return new Promise((resolve, reject) => {
				Clientes.findOneAndRemove({ _id: id }, (error) => {
					if (error) reject(error);
					else resolve('se elimino correctamente');
				});
			});
		}
	}
};
