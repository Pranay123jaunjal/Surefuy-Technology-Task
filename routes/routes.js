const express = require('express');
const { addHotel, getAllHotels } = require('../controllers/adminController');
const { addGuest } = require('../controllers/guestController');
const { generateQRCode } = require('../controllers/qrControllers');
const router = express.Router();

// hotel routes 

router.post('/add-hotel', addHotel);
router.get('/hotels', getAllHotels);

// qr routes


router.get('/generate-qr/:hotelId', generateQRCode);

// guest routes

router.post('/add-guest', addGuest);



module.exports={router}