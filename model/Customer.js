import mongoose, { Schema, models } from 'mongoose';

const customerSchema = new Schema({
    full_name:String,
    mobile_number: String,
    email:String,
    address:String,
    zip_code:String,
    status:String
},
{
  timestamps: true,
});

// Add indexes for frequently queried fields
customerSchema.index({ full_name: 1 });
customerSchema.index({ mobile_number: 1 });
customerSchema.index({ email: 1 });
customerSchema.index({ zip_code: 1 });
customerSchema.index({ status: 1 });
customerSchema.index({ createdAt: 1 });
customerSchema.index({ updatedAt: 1 });

export const Customer = models.Customer || mongoose.model('Customer', customerSchema);
