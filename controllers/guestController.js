const Guest = require('../models/Guest');

exports.addGuest = async (req, res) => {
  const { hotelId, fullName, mobileNumber, address, purpose, stayDates, email, idProofNumber } = req.body;

  try {
    const newGuest = new Guest({
      hotelId,
      fullName,
      mobileNumber,
      address,
      purpose,
      stayDates,
      email,
      idProofNumber,
    });

    await newGuest.save();
    res.status(201).json({ message: 'Guest added successfully', guest: newGuest });
  } catch (err) {
    res.status(500).json({ message: 'Error adding guest', error: err.message });
  }
};
