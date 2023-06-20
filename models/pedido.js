const {Schema, model}=require('mongoose')

const PedidoSchema=Schema({
    Nit:{
        type:Number,
        unique:true,
        required:[true, "el nit es obligatorio"]
    },
    Fecha:{
        type:Date,
        required:[true, "el fecha es obligatoria"]
    },
    Factura:{
        type:String,
        required:[true, "el factura es obligatorio"]
    },
    Estado:{
        type:String,
        enum:['Activo', 'Inactivo'],
        required:[true, 'El estado es obligatorio']
    }
})
module.exports = model('Pedido',PedidoSchema)