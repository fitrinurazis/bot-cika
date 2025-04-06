const { getAIResponse } = require("../services/aiService");
const { recognizeText } = require("../services/ocrService");

// Perintah untuk analisis gambar
const handleImage = async (client, message) => {
  try {
    if (message.hasMedia) {
      const media = await message.downloadMedia();
      if (media.mimetype.startsWith("image")) {
        const buffer = Buffer.from(media.data, "base64");

        // Gunakan OCR untuk mengenali teks dalam gambar
        const text = await recognizeText(buffer);

        if (text) {
          const aiResponse = await getAIResponse(text);
          client.sendMessage(message.from, aiResponse);
        } else {
          client.sendMessage(
            message.from,
            "Maaf, saya tidak bisa menemukan teks dalam gambar tersebut."
          );
        }
      } else {
        client.sendMessage(
          message.from,
          "Kirimkan gambar dengan perintah /gambar."
        );
      }
    } else {
      client.sendMessage(
        message.from,
        "Kirimkan gambar dengan perintah /gambar."
      );
    }
  } catch (error) {
    console.error("Error saat menganalisis gambar:", error);
    client.sendMessage(
      message.from,
      "Maaf, ada kesalahan saat membaca gambar tersebut."
    );
  }
};

module.exports = { handleImage };
