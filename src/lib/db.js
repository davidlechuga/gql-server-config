import mongoose, { mongo } from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://lakmi:david2001@lakmicontact-arnoh.mongodb.net/test', { useNewUrlParser: true , useUnifiedTopology: true });


const clientesSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    email: String,
    job: String,
    project: String
})

const Clientes = mongoose.model('lakmiClientes', clientesSchema)

export { Clientes }

