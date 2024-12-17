const qrcode = require('qrcode');

exports.generateQRCode = async (req, res) => {
  const { hotelId } = req.params;

  try {
    const qrData = `${process.env.BASE_URL}/hotel/${hotelId}`;
    const qrCodeImage = await qrcode.toDataURL(qrData);
    res.json({ qrCode: qrCodeImage });
  } catch (err) {
    res.status(500).json({ message: 'Error generating QR Code' });
  }
};
