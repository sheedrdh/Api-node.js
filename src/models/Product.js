const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
        },
        price: {
            type: Number,
            required: [true, 'Please add a price'],
            default: 0,
        },
        countInStock: {
            type: Number,
            required: [true, 'Please add stock count'],
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);
