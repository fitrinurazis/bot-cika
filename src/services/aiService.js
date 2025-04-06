const axios = require("axios");
require("dotenv").config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = process.env.GEMINI_API_URL;

// Fungsi untuk mendapatkan jawaban dari AI
const getAIResponse = async (query) => {
  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: query,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Memeriksa apakah respons memiliki struktur yang diharapkan
    if (response.data.candidates && response.data.candidates.length > 0) {
      // Periksa struktur respons
      const aiText = response.data.candidates[0].content; // Ambil teks dari kandidat pertama
      if (aiText && aiText.parts && aiText.parts[0].text) {
        return aiText.parts[0].text.trim(); // Mengembalikan teks yang telah dibersihkan
      } else {
        console.warn("Unexpected response structure:", response.data);
        return "Maaf, aku tidak bisa memberikan jawaban saat ini. 😔";
      }
    } else {
      console.warn("Unexpected response structure:", response.data);
      return "Maaf, aku tidak bisa memberikan jawaban saat ini. 😔";
    }
  } catch (error) {
    console.error(
      "Error with Gemini API:",
      error.response ? error.response.data : error.message
    );
    return "Maaf, aku sedang tidak bisa berpikir. 😢";
  }
};

module.exports = { getAIResponse };
