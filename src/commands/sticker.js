const { MessageMedia } = require("whatsapp-web.js");

// Perintah untuk membuat stiker
const handleSticker = async (client, message) => {
  try {
    if (message.hasMedia) {
      const media = await message.downloadMedia();

      // Pastikan media berhasil diunduh
      if (media) {
        // Periksa apakah media adalah gambar atau video
        if (
          media.mimetype.startsWith("image") ||
          media.mimetype.startsWith("video")
        ) {
          const sticker = new MessageMedia(media.mimetype, media.data);
          await client.sendMessage(message.from, sticker, {
            sendMediaAsSticker: true,
          });
        } else {
          client.sendMessage(
            message.from,
            "Kirimkan gambar atau video untuk dijadikan stiker."
          );
        }
      } else {
        client.sendMessage(
          message.from,
          "Gagal mengunduh media. Coba kirimkan ulang."
        );
      }
    } else {
      client.sendMessage(
        message.from,
        "Kirimkan gambar atau video dengan perintah /stiker."
      );
    }
  } catch (error) {
    console.error("Error saat membuat stiker:", error);
    client.sendMessage(message.from, "Terjadi kesalahan saat membuat stiker.");
  }
};

module.exports = { handleSticker };
