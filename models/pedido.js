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
        type:String,
        required:[true, "el prodcuto es obligatorio"]
    },
    Cantidad:{
        type:Number,
        required:[true, "la cantidad es obligatoria"]
    },
    Monto:{
        type:Number,
        required:[true, "El monto es obligatorio"]
    },
    Fecha:{
        type:Date,
        required:[true, "el fecha es obligatoria"]
    },
    Factura:{
        type:String,
        required:[true, "el factura es obligatorio"]
    },
    Total:{
        type: number
    },
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
