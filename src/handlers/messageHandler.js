const { handleGetId } = require("../commands/getid");
const { handleSticker } = require("../commands/sticker");
const { handleImage } = require("../commands/image");
const { handleAI } = require("../commands/ai");
const { GRUP_TARGETS } = process.env;

// Handler utama untuk pesan
const messageHandler = async (client, message) => {
  const sender = message.from;
  const query = message.body.toLowerCase();

  // Perbaikan pengecekan grup target
  const grupTargets = GRUP_TARGETS ? GRUP_TARGETS.split(",") : [];
  const isGroupTarget = grupTargets.includes(sender);
  const isPrivateChat = !message.from.includes("@g.us");

  // Handle perintah getid
  if (query === "/getid") {
    await handleGetId(client, message);
    return;
  }

  // Handle perintah stiker
  if (query.startsWith("/stiker")) {
    await handleSticker(client, message);
    return;
  }

  // Handle perintah gambar
  if (query.startsWith("/gambar") || query.startsWith("/pedo")) {
    await handleImage(client, message);
    return;
  }

  // Handle perintah AI
  if (
    (isGroupTarget || isPrivateChat) &&
    (query === "/beb" ||
      query === "/cika" ||
      query === "/sayang" ||
      query === "/fitnas" ||
      query === "/ika" ||
      query === "/ehem" ||
      query.includes("/beb") ||
      query.includes("/cika") ||
      query.includes("/fitnas") ||
      query.includes("/ehem") ||
      query.includes("/ika") ||
      query.includes("/sayang"))
  ) {
    await handleAI(client, message);
    return;
  }
};

module.exports = messageHandler;
