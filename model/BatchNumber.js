import mongoose, { Schema, models } from 'mongoose';

const batchNumberSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
},
{
  timestamps: true,
});

// Add indexes for frequently queried fields
batchNumberSchema.index({ _id: 1 });
batchNumberSchema.index({ createdAt: 1 });
batchNumberSchema.index({ updatedAt: 1 });

export const BatchNumber = models.BatchNumber || mongoose.model('BatchNumber', batchNumberSchema);
