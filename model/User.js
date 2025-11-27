import mongoose, { Schema, models } from 'mongoose';

const userSchema = new Schema({
    mobile_number: String,
    password:String,
    first_name:String,
    last_name:String,
    role:String,
    status:String
},
{
  timestamps: true,
});

// Add indexes for frequently queried fields
userSchema.index({ mobile_number: 1 });

export const User = models.User || mongoose.model('User', userSchema);
