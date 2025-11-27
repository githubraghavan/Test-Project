import mongoose, { Schema, models } from 'mongoose';

const expenseSchema = new Schema({
    expense_date: { type: Date, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    payment_method: { type: String },
    status: { type: String, enum: ['PENDING', 'PAID', 'CANCELLED'], default: 'PENDING' }
},
{
  timestamps: true,
});

// Add indexes for frequently queried fields
expenseSchema.index({ expense_date: 1 });
expenseSchema.index({ category: 1 });
expenseSchema.index({ status: 1 });
expenseSchema.index({ createdAt: 1 });
expenseSchema.index({ updatedAt: 1 });

export const Expense = models.Expense || mongoose.model('Expense', expenseSchema);