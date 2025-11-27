import mongoose, { Schema, models } from 'mongoose';

const counterSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
},
{
  timestamps: true,
});

// Add indexes for frequently queried fields
counterSchema.index({ _id: 1 });
counterSchema.index({ createdAt: 1 });
counterSchema.index({ updatedAt: 1 });

export const Counter = models.Counter || mongoose.model('Counter', counterSchema);
