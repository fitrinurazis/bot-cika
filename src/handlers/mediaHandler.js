const { MessageMedia } = require("whatsapp-web.js");
const { recognizeText } = require("../services/ocrService");
const { getAIResponse } = require("../services/aiService");

// Handler untuk media (gambar, video)
const handleMedia = async (client, message) => {
  try {
    const media = await message.downloadMedia();
    return media;
  } catch (error) {
    console.error("Error saat mengunduh media:", error);
    return null;
  }
};

// Handler untuk menganalisis gambar dengan OCR
const handleImageOCR = async (client, message) => {
  try {
    const media = await message.downloadMedia();
    if (media && media.mimetype.startsWith("image")) {
      const buffer = Buffer.from(media.data, "base64");
      const text = await recognizeText(buffer);
      return text;
    }
    return null;
  } catch (error) {
    console.error("Error saat menganalisis gambar dengan OCR:", error);
    return null;
  }
};

module.exports = {
  handleMedia,
  handleImageOCR,
};
