import mongoose, { Schema, models } from 'mongoose';

const inventorySchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  product_name: { type: String }, // optional, for denormalized quick access
  brand_id: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
  brand_name: { type: String },
  batch_number: { type: String , required: true},
  uom_id: { type: Schema.Types.ObjectId, ref: 'UOM', required: true },
  uom_name: { type: String },
  quantity: { type: Number, required: true }, 
  purchased_quantity: { type: Number, required: true }, // changed from String to Number
  price: { type: Number, required: true },        // changed from String to Number
  price_per_unit: { type: Number, required: true },
  status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' },
}, {
  timestamps: true,
});

// Add indexes for frequently queried fields
inventorySchema.index({ product_id: 1 });
inventorySchema.index({ batch_number: 1 });
inventorySchema.index({ product_name: 1 });
inventorySchema.index({ brand_id: 1 });
inventorySchema.index({ uom_id: 1 });
inventorySchema.index({ status: 1 });
inventorySchema.index({ createdAt: 1 });
inventorySchema.index({ updatedAt: 1 });

export const Inventory = models.Inventory || mongoose.model('Inventory', inventorySchema);
