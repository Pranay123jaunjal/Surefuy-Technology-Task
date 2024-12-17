const Hotel = require("../models/hotel")

exports.addHotel = async (req, res) => {
  const { name, address, logo } = req.body;

  try {
    const newHotel = new Hotel({ name, address, logo });
    await newHotel.save();
    res.status(201).json({ message: 'Hotel added successfully', hotel: newHotel });
  } catch (err) {
    res.status(500).json({ message: 'Error adding hotel', error: err.message });
  }
};

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching hotels' });
  }
};
