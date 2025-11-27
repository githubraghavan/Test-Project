import mongoose, { Schema, models } from 'mongoose';

const productsSchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    brand_id: { type: Schema.Types.ObjectId, ref: 'Brand' }, // use ObjectId if referencing Brand
    uom_id: { type: Schema.Types.ObjectId, ref: 'UOM' },     // use ObjectId if referencing UOM
    brand_name: { type: String }, // optional cache field
    uom_name: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number },
    description: { type: String },
    status: { type: String, enum: ['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'], default: 'ACTIVE' },
  }, {
    timestamps: true,
  });

// Add indexes for frequently queried fields
productsSchema.index({ name: 1 });
productsSchema.index({ code: 1 }, { unique: true });
productsSchema.index({ brand_id: 1 });
productsSchema.index({ uom_id: 1 });
productsSchema.index({ status: 1 });
productsSchema.index({ createdAt: 1 });
productsSchema.index({ updatedAt: 1 });

export const Products = models.Products || mongoose.model('Products', productsSchema);
