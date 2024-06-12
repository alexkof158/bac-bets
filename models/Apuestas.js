


const { Schema, model } = require('mongoose')


const ApuestaSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cuota: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    stake: {
        type: String,
        required: true
    },


})

module.exports = model('Apuestas', ApuestaSchema)


