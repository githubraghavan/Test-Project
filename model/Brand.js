import mongoose, { Schema, models } from 'mongoose';

const brandSchema = new Schema({
    name: String,
    code:String,
    description:String,
    status:String
},
{
  timestamps: true,
});

// Add indexes for frequently queried fields
brandSchema.index({ name: 1 });
brandSchema.index({ code: 1 });
brandSchema.index({ status: 1 });
brandSchema.index({ createdAt: 1 });
brandSchema.index({ updatedAt: 1 });

export const Brand = models.Brand || mongoose.model('Brand', brandSchema);
