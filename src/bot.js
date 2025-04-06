const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const messageHandler = require("./handlers/messageHandler");
require("dotenv").config();

// Inisialisasi client WhatsApp
const client = new Client({
  authStrategy: new LocalAuth(), // Untuk menyimpan sesi agar tidak perlu scan QR setiap kali
});

// Fungsi untuk menginisialisasi bot
const initializeBot = () => {
  // Generate QR code di terminal
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  // Log saat bot terhubung
  client.on("ready", async () => {
    console.log("Bot is ready!");

    try {
      // Mengambil daftar semua chat yang ada
      const chats = await client.getChats();

      // Filter chat yang merupakan grup
      const groupChats = chats.filter((chat) => chat.isGroup);

      if (groupChats.length > 0) {
        console.log("Daftar ID Grup:");
        groupChats.forEach((group) => {
          console.log(
            `Nama Grup: ${group.name}, ID Grup: ${group.id._serialized}`
          );
        });
      } else {
        console.log("Bot belum bergabung dengan grup WhatsApp manapun.");
      }
    } catch (error) {
      console.error("Error saat mengambil daftar grup:", error);
    }
  });

  // Mendengarkan pesan yang masuk
  client.on("message", async (message) => {
    await messageHandler(client, message);
  });

  // Memulai bot
  client.initialize();
};

module.exports = { initializeBot, client };
