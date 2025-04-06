const Tesseract = require("tesseract.js");

// Fungsi untuk mengenali teks dalam gambar menggunakan OCR
const recognizeText = async (buffer) => {
  try {
    const result = await Tesseract.recognize(buffer, "eng", {
      logger: (info) => console.log(info),
    });

    return result.data.text.trim();
  } catch (error) {
    console.error("Error during OCR:", error);
    throw error;
  }
};

module.exports = { recognizeText };
