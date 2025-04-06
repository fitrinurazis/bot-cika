const { getAIResponse } = require("../services/aiService");
const {
  getRandomRomanticGreeting,
  getRandomEhemResponse,
  getRandomRomanticFood,
  getRandomRomanticDrink,
  getRandomRomanticSleep,
  getRandomRomanticBathe,
  getRandomRomanticLove,
  getRandomBot,
  getRandomKenalan,
  getRandomRomanticResponse,
} = require("../utils/responses");

// Daftar kata kunci untuk pertanyaan sensitif
const sensitiveKeywords = [
  "ehem",
  "seks",
  "cinta",
  "kelon",
  "restoran",
  "kawin",
  "makan",
  "minum",
  "mandi",
  "tidur",
  "salken",
  "bot",
];

// Perintah untuk interaksi dengan AI
const handleAI = async (client, message) => {
  try {
    const query = message.body.toLowerCase();

    // Jika pesan hanya berisi "/ai", "/cika", atau "/sayang", bot memberikan respons romantis
    if (
      query === "/beb" ||
      query === "/cika" ||
      query === "/sayang" ||
      query === "/fitnas" ||
      query === "/ika" ||
      query === "/ehem"
    ) {
      const romanticGreeting = getRandomRomanticGreeting();
      client.sendMessage(message.from, romanticGreeting);
      return;
    }

    // Jika pesan mengandung salah satu kata tersebut, tetapi diikuti oleh teks lain
    // Bersihkan input dari kata pemicu
    const cleanedQuery = query
      .replace(/\/beb/g, "")
      .replace(/\/cika/g, "")
      .replace(/\/ehem/g, "")
      .replace(/\/fitnas/g, "")
      .replace(/\/ika/g, "")
      .replace(/\/sayang/g, "")
      .trim();

    // Cek apakah pertanyaan termasuk dalam kategori sensitif
    if (containsSensitiveKeyword(cleanedQuery)) {
      const humanResponse = getHumanResponse(cleanedQuery);
      client.sendMessage(message.from, humanResponse);
    } else if (cleanedQuery) {
      const aiResponse = await getAIResponse(cleanedQuery);
      const romanticResponse = getRandomRomanticResponse(aiResponse);
      client.sendMessage(message.from, romanticResponse);
    }
  } catch (error) {
    console.error("Error saat berinteraksi dengan AI:", error);
    client.sendMessage(
      message.from,
      "Maaf, aku sedang tidak bisa berpikir. 😢"
    );
  }
};

// Fungsi untuk memeriksa apakah pertanyaan mengandung kata kunci sensitif
const containsSensitiveKeyword = (query) => {
  return sensitiveKeywords.some((keyword) =>
    query.toLowerCase().includes(keyword)
  );
};

// Fungsi untuk memberikan respons yang lebih manusiawi
const getHumanResponse = (query) => {
  if (
    query.includes("ehem") ||
    query.includes("seks") ||
    query.includes("kawin") ||
    query.includes("kelon")
  ) {
    return getRandomEhemResponse();
  } else if (query.includes("makan")) {
    return getRandomRomanticFood();
  } else if (query.includes("minum")) {
    return getRandomRomanticDrink();
  } else if (query.includes("tidur")) {
    return getRandomRomanticSleep();
  } else if (query.includes("mandi")) {
    return getRandomRomanticBathe();
  } else if (query.includes("cinta")) {
    return getRandomRomanticLove();
  } else if (query.includes("salken")) {
    return getRandomKenalan();
  } else if (query.includes("bot")) {
    return getRandomBot();
  } else {
    return "Hmm, aku tidak bisa memberikan jawaban pasti tentang itu, tapi aku ingin tahu pandanganmu!";
  }
};

module.exports = { handleAI };
