// Fungsi untuk menunda eksekusi (sleep)
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Fungsi untuk memformat waktu
const formatTime = (date) => {
  return date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Fungsi untuk memeriksa apakah string adalah URL valid
const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

// Fungsi untuk membersihkan teks dari karakter khusus
const cleanText = (text) => {
  return text.replace(/[^\w\s]/gi, "").trim();
};

module.exports = {
  sleep,
  formatTime,
  isValidUrl,
  cleanText,
};
