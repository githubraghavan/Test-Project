import mongoose, { Schema, models } from 'mongoose';

const orderSchema = new Schema({
    order_number: String,
    customer_id:String,
    customer_name:String,
    sub_total:String,
    discount:String,
    courier_charge:String,
    courier_company:String,
    courier_tracking_id:String,
    total:Number,
    payment_status:String,
    order_date:String,
    order_items:[{
        product_id:String,
        product_name:String,
        inventory_id:String,
        batch_number:String,
        uom_id:String,
        uom_name:String,
        quantity:Number,
        price:Number,
        total:Number
    }],
    status:String
},
{
  timestamps: true,
});

// Add indexes for frequently queried fields
orderSchema.index({ product_id: 1 });
orderSchema.index({ brand_id: 1 });
orderSchema.index({ uom_id: 1 });
orderSchema.index({ status: 1 });
orderSchema.index({ order_number: 1 });


export const Order = models.Order || mongoose.model('Order', orderSchema);
