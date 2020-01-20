import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGOLAB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
});

const clientesSchema = new mongoose.Schema({
	nombre: String,
	apellidos: String,
	email: String,
	job: String,
	project: String
});

const Clientes = mongoose.model('lakmiClientes', clientesSchema);

export { Clientes };
