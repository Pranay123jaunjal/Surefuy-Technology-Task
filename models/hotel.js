const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  logo: { type: String }, // File path
  qrCode: { type: String }, // QR Code image path
});

module.exports = mongoose.model('Hotel', HotelSchema);
