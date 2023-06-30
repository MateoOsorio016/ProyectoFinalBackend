const {Schema, model}=require('mongoose')

const PedidoSchema=Schema({
    Nit:{
        type:Number,
        unique:true,
        required:[true, "el nit es obligatorio"]
    },
    Proveedor:{
        type:String,
        required:[true, "el proveedor es obligatorio"]
    },
    Producto:{
        type:String
    },
    Cantidad:{
        type:Number,
        required:[true, "la cantidad es obligatoria"]
    },
    Monto:{
        type:Number
    },
    Fecha:{
        type:Date,
        default: new Date()
    },
    Factura:{
        type:String,
        required:[true, "el factura es obligatorio"]
    },
        Telefono:{
        type:Number,
        required:[true, "el telefono es obligatorio"]
    },
    
    Total:{
        type: Number,
        min: [1, 'El total debe ser mayor a 0']
    },
     Categoria:{
        type:String,
        enum:['Molido', 'Grano'],
        required:[true, 'La categoria es obligatoria']
    }
    Estado:{
        type:String,
        enum:['Activo', 'Inactivo'],
        required:[true, 'El estado es obligatorio']
    }
});
    PedidoSchema.pre('save', function (next) {
    
    this.Total = this.Cantidad * this.Monto ; // Sumar el Subtotal y la cantidad del IVA al Subtotal
    next();
});
module.exports = model('Pedido',PedidoSchema)
