import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema, 'Customer');

export default Customer;
