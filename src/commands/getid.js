// Perintah untuk mendapatkan ID grup
const handleGetId = async (client, message) => {
  try {
    // Cek apakah pesan berasal dari grup
    if (message.from.includes("@g.us")) {
      const chat = await message.getChat();
      client.sendMessage(
        message.from,
        `ID Grup ini adalah: ${chat.id._serialized}`
      );
    } else {
      client.sendMessage(
        message.from,
        "Perintah ini hanya bisa digunakan dalam grup."
      );
    }
  } catch (error) {
    console.error("Error saat mendapatkan ID grup:", error);
    client.sendMessage(
      message.from,
      "Terjadi kesalahan saat mengambil ID grup."
    );
  }
};

module.exports = { handleGetId };
