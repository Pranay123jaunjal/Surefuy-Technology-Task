const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  address: { type: String, required: true },
  purpose: { type: String, enum: ['Business', 'Personal', 'Tourist'] },
  stayDates: { from: Date, to: Date },
  email: { type: String, required: true },
  idProofNumber: { type: String, required: true },
});

module.exports = mongoose.model('Guest', GuestSchema);
