import mongoose, { Schema, models } from 'mongoose';

const uomSchema = new Schema({
    code:String,
    name: String,
    description:String,
    status:String
},
{
  timestamps: true,
});

// Add indexes for frequently queried fields
uomSchema.index({ code: 1 });
uomSchema.index({ name: 1 });
uomSchema.index({ status: 1 });
uomSchema.index({ createdAt: 1 });
uomSchema.index({ updatedAt: 1 });

export const Uom = models.UOM || mongoose.model('UOM', uomSchema);
