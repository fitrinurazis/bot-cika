// Daftar jawaban acak untuk topik sensitif seperti "ehem" (seks)
const ehemResponses = [
  "Mau gaya kodok atau yang lain om ? 😉",
  "Hmm, rasanya ini obrolan yang seru, tapi bagaimana kalau kita bicarakan hal lain dulu? 😅",
  "Gass, mau diamana? 😍",
  "Ayo om, mau gaya kodok atau heikopter? 😄 ",
  "Topik seperti ini memang menarik, tapi yuk kita lanjut ke hal-hal yang lebih seru! 😄",
  "Oh, sepertinya kamu penasaran! Apa ada hal lain yang ingin kamu bicarakan juga? 😇",
  "Dasar peedo pikiranyan ehemmm mulu 😡",
  "Wah, pertanyaan ini cukup dalam! Kita harus ngobrol lebih lanjut suatu hari nanti. 😊",
  "Ah, topik yang sangat pribadi! Mungkin kita bisa bahas hal-hal lain yang menarik? 😄",
  "Hmm, pembicaraan ini bisa jadi panjang! Apa kamu siap mendiskusikannya? 😏",
  "Ehem... pembicaraan seperti ini selalu menarik, ya? 😏",
  "Ehem mulu, birahi kah om 🤗?",
];

// Daftar jawaban romantis dan ajakan
const romanticGreetings = [
  "💖 Hei sayang, ada yang bisa aku bantu? 😊",
  "🌹 Kamu terlihat begitu mempesona hari ini! Ada yang ingin kita obrolin? 😘",
  "💘 Halo cintaku, apa yang bisa kubantu untukmu? 😍",
  "✨ Hai manis, apa kabar? Ada yang ingin kita bicarakan? 💕",
  "😍 Aku di sini untukmu, sayang. Apa yang bisa kubantu hari ini? 🌸",
  "🌷 Hai cinta, kalau ada apa-apa langsung saja bilang ya, aku siap mendengarkan! 💖",
  "💐 Halo sayang, aku rindu obrolan kita. Ada yang bisa kubantu? 😘",
  "💖 Hei cantik, aku selalu di sini untukmu! Ada yang ingin kamu tanyakan? 😍",
  "✨ Hai sayangku, aku siap mendengar dan membantu apapun yang kamu butuhkan. 🌹",
  "💘 Apa kabar, sayang? Aku selalu ada buat kamu. Ingin ngobrol atau ada yang perlu bantuan? 😘",
];

// Daftar jawaban romantis makan
const romanticFood = [
  "Makan bareng kamu pasti rasanya lebih enak, sayang. 🍽️",
  "Aku siap makan apa pun asalkan bersamamu. 😘",
  "Makan yuk, biar kita tambah kuat cinta-cintaan. 💕",
  "Kamu selalu bikin aku lapar, lapar cinta. 😍",
  "Makan sama kamu bikin hati ini kenyang juga. ❤️",
  "Apa pun makanannya, yang penting ada kamu. 😘",
  "Kita makan bareng, biar tambah lengket kaya lem. 😄",
  "Makan yuk, aku siap jadi teman makan setiamu. 🍽️",
  "Makan apa aja, asal kamu yang suapin. 😉",
  "Mau makan apa? Aku cuma mau kamu aja. 😋",
  "Makan bareng kamu selalu bikin selera makan tambah besar. 🍽️",
  "Kalau makan sama kamu, semua makanan jadi terasa lebih enak. 😋",
  "Yuk, kita makan bareng. Makanan jadi lebih lezat kalau dimakan sama yang tersayang. ❤️",
  "Kamu mau makan apa hari ini? Aku siap nemenin! 🍕",
  "Makan sama kamu tuh seperti merasakan surga di lidah. 😘",
  "Nggak penting makan apa, yang penting sama kamu. 🍲",
  "Lagi laper ya? Yuk kita makan, biar kenyang dan bahagia bareng. 😊",
  "Apa yang paling kamu pengen makan sekarang? Aku siap masakin buat kamu. 👨‍🍳",
  "Kalau makan sambil tatap mata kamu, rasanya lebih kenyang. 😍",
  "Makan yuk, biar nggak cuma hati aja yang kenyang. ❤️",
  "Makan malam bareng kamu? Aku pasti nggak bakal nolak! 🍽️",
  "Kamu suka makan apa? Aku suka apa yang kamu suka. 😘",
  "Yuk kita coba makanan baru bareng, pasti seru! 🍜",
  "Makan siang sama kamu selalu jadi highlight hariku. 🥰",
  "Aku bawa makanan favoritmu nih, siap-siap ya! 🍱",
  "Makan adalah kebahagiaan, apalagi kalau bareng kamu. 🍝",
  "Nggak ada yang lebih indah dari makan malam romantis berdua. 💕",
  "Kalau sama kamu, nasi goreng pun jadi makanan mewah. 🍛",
  "Makan bareng kamu bikin aku lupa diet. 😅",
  "Aku lapar, tapi lebih lapar sama perhatianmu. 😏",
];

// Daftar jawaban romantis minum
const romanticDrink = [
  "Minum dulu yuk, biar rasa rindu kita nggak kering. 💧",
  "Segarnya air nggak ada apa-apanya dibanding cinta kamu. 😘",
  "Minum bareng kamu aja udah bikin hati ini adem. 🌹",
  "Minum dulu, biar cintamu makin deras seperti air. 💦",
  "Mau minum apa? Yang pasti aku haus cintamu. 😍",
  "Minuman paling enak tuh teh cinta dari kamu. 🍵",
  "Ayo kita minum, biar rindu ini larut bersamamu. 😘",
  "Satu teguk cinta kamu bikin hati adem banget. 💕",
  "Minum yuk, cinta kita harus selalu terhidrasi. 😘",
  "Haus ya? Aku juga haus perhatian kamu. 😍",
  "Udah minum hari ini? Biar tetap sehat buat aku. 💧",
  "Minum air putih dulu, sayang, biar tetap segar dan fit. 🥤",
  "Kalau minum teh sama kamu, teh ini jadi terasa lebih manis. 🍵",
  "Aku siap bikinin kamu kopi atau teh, apa yang kamu mau? ☕",
  "Minum dulu yuk, biar semangatnya nggak hilang. 💪",
  "Minum bareng kamu rasanya lebih menyegarkan. 💧",
  "Jangan lupa minum air putih biar nggak dehidrasi, ya sayang. 😘",
  "Aku selalu inget kamu, apalagi pas lagi minum jus favoritmu. 🍹",
  "Minum air dulu yuk, sambil ngobrolin hal-hal manis sama kamu. 😍",
  "Minum yang manis-manis sambil tatap mata kamu, ah... sempurna. 🥤",
  "Minum yuk, biar badannya tetap bugar buat jalan bareng aku. 💕",
  "Udah minum vitamin juga? Biar kamu selalu sehat buat kita. 🌸",
  "Apa minuman favoritmu? Aku akan bikinin kapan pun kamu mau. 🍶",
  "Nggak ada yang lebih menyegarkan selain minum sambil lihat senyuman kamu. 😍",
  "Minum es teh sama kamu selalu bikin hati adem. 🍹",
  "Minuman dingin pas sama hatiku yang hangat pas deket kamu. ☕",
  "Kalau minuman ini nggak cukup buat hilangin haus, aku ada buat ngisi hatimu. 😘",
  "Biar nggak pusing, minum dulu yuk yang segar-segar. 💧",
  "Minum cokelat panas sambil ngobrol bareng kamu tuh enak banget. 🍫",
  "Mau minum apa, sayang? Aku siap buat pesen yang kamu suka. 🍷",
];

// Daftar jawaban romantis tidur
const romanticSleep = [
  "Tidur yuk, biar mimpi kita ketemu. 😘",
  "Bobo yuk, biar kita ketemu di alam mimpi. 💫",
  "Aku siap tidur kalau ada pelukan virtual dari kamu. 🤗",
  "Selamat tidur, semoga mimpi indah kita selamanya. 🌙",
  "Tidur yuk, biar rinduku ketemu sama kamu di mimpi. 😴",
  "Semoga malam ini mimpi kita penuh cinta. 🌟",
  "Selamat malam, aku mimpiin kamu tiap malam. 😘",
  "Malam ini, tidurku pasti nyenyak karena ada kamu di pikiran. 💕",
  "Tidur yuk, cinta kita tetap terjaga meski tertidur. ❤️",
  "Bobo dulu ya, nanti aku jemput di mimpi. 🌙",
  "Tidur yuk, biar mimpi indah kita lanjut sampai besok. 😴",
  "Selamat tidur sayang, mimpi indah ya. Aku akan jaga mimpimu. 🌙",
  "Tidur sama kamu di pikiran bikin aku tenang. 😘",
  "Udah waktunya istirahat, sayang. Biar kamu bangun dengan senyum. 💤",
  "Aku bakal selalu jadi selimutmu, yang ngasih rasa hangat. 😍",
  "Tidur yuk, biar besok kita bisa petualangan bareng lagi. 🌙",
  "Kamu harus tidur yang nyenyak, biar mimpi ketemu aku. 😘",
  "Jangan lupa bobo cantik ya, aku udah nunggu kamu di mimpi. 💤",
  "Kamu istirahat dulu ya, biar besok semangat bareng aku. 🌸",
  "Semoga tidurmu nyenyak malam ini, dan kita ketemu di mimpi. 🥰",
  "Tidur yuk, biar aku bisa nemenin kamu di mimpi indahmu. 🌠",
  "Kalau aku jadi bantal, kamu pasti tidur nyenyak tiap malam. 😌",
  "Selamat malam, cinta. Aku bakal jagain mimpimu sampai pagi. 💫",
  "Tidur yang nyenyak ya, besok aku bakal kangen kamu lagi. ❤️",
  "Sebelum tidur, jangan lupa inget aku ya. 😘",
  "Tidur cepat biar kita bisa ngobrol lebih banyak besok pagi. 😴",
  "Semoga tidurmu nyenyak kayak nyamannya hatiku pas deket kamu. 🛌",
  "Biar kita pisah sekarang, tapi aku bakal temenin kamu di mimpi. 🌟",
  "Udah malam, sayang. Tidur yuk, mimpi kita pasti indah. 💤",
  "Aku bakal mimpiin kamu tiap malam, kamu mimpikan aku juga ya. 🌙",
];

// Daftar jawaban romantis mandi
const romanticBathe = [
  "Mandi biar segar, segar seperti cinta kita. 💧",
  "Udah mandi? Kamu pasti tambah cantik dan segar. 😘",
  "Mandi biar rindu ini nggak terlalu panas. 😄",
  "Segarnya mandi cuma kalah sama segarnya cinta kamu. 💕",
  "Mandi dulu, nanti kita ketemu lagi ya, sayang. 😘",
  "Kamu udah mandi belum? Karena cinta ini udah bersih dan jernih. 💧",
  "Mandi biar segar, seperti perasaan ini buat kamu. 😍",
  "Kalau kamu udah mandi, aku bakal cinta kamu lebih bersih lagi. 🛁",
  "Setelah mandi, cinta kita pasti tambah wangi. 🌸",
  "Mandi dulu ya, biar cinta kita segar lagi. 💖",
];

// Daftar jawaban romantis cinta
const romanticLove = [
  "Aku cinta kamu, lebih dari yang bisa diungkapkan kata-kata. ❤️",
  "Cinta ini buat kamu, nggak akan luntur selamanya. 💕",
  "Cinta kita tak bisa diukur, hanya bisa dirasakan. 😘",
  "Kamu adalah cinta yang selalu aku tunggu. 😍",
  "Cinta kamu bikin hidup ini terasa sempurna. 💖",
  "Aku cinta kamu seperti angin yang selalu ada, meski nggak terlihat. 🌬️",
  "Cinta ini seperti api, semakin lama semakin membara. 🔥",
  "Cinta kita akan bertahan selamanya, aku yakin itu. ❤️",
  "Aku cinta kamu, sekarang, besok, dan selamanya. 💕",
  "Kamu adalah cinta yang nggak bisa aku lepaskan. 😘",
];

// Daftar jawaban bot
const bot = [
  "Aku adalah bot yang bisa membantu kamu. 🤖",
  "Aku bot bisa membantu kamu dengan berbagai cara. 💻",
];

// Daftar jawaban kenalan
const kenalan = [
  "Halo, aku adalah bot yang bisa membantu kamu. 🤖",
  "Aku adalah bot yang bisa membantu kamu dengan berbagai cara. 💻",
];

// Array kata-kata romantis yang akan dipilih secara acak
const romanticPhrases = [
  "❤️ Kamu selalu di pikiranku, sayang. 😘",
  "💖 Setiap kata dari mulutmu adalah puisi, manis. 🌹",
  "🌷 Hatiku bergetar setiap kali kamu dekat, sayang. 💕",
  "😍 Kamu adalah bintang terindah di langitku. ✨",
  "🌹 Dunia terasa lebih indah bersamamu. 💖",
  "💘 Cintaku padamu tak terbatas. 😘",
  "💫 Kamu adalah inspirasiku setiap hari, sayang. 🌹",
  "💖 Denganmu, hidupku jadi penuh warna. 🎨",
  "💐 Kamu adalah alasan aku tersenyum setiap hari. 😍",
  "❤️ Hidup ini indah karena kamu ada. 😘",
  "🌸 Kamu selalu membuat hariku lebih cerah. ☀️",
  "😍 Tak ada yang lebih manis daripada senyumanmu. 💘",
  "🌷 Kamu adalah alasan jantungku berdetak lebih kencang. ❤️",
  "🌹 Kamu adalah keajaiban yang selalu aku syukuri. 💫",
  "💖 Hatiku milikmu selamanya, sayang. 💘",
  "✨ Cintamu adalah cahaya yang menuntunku. 💕",
  "💫 Kamu adalah mimpiku yang menjadi nyata. 😘",
  "💖 Denganmu, setiap momen terasa sempurna. 🌷",
  "🌹 Aku akan mencintaimu sampai akhir waktu. ❤️",
  "💘 Tak ada yang lebih indah dari kita, sayang. 😍",
];

// Fungsi untuk memilih respons acak dari daftar jawaban
const getRandomEhemResponse = () => {
  return ehemResponses[Math.floor(Math.random() * ehemResponses.length)];
};

// Fungsi untuk memilih kata-kata romantis dan ajakan secara acak
const getRandomRomanticGreeting = () => {
  return romanticGreetings[
    Math.floor(Math.random() * romanticGreetings.length)
  ];
};

// Fungsi untuk memilih kata-kata romantis makan secara acak
const getRandomRomanticFood = () => {
  return romanticFood[Math.floor(Math.random() * romanticFood.length)];
};

// Fungsi untuk memilih kata-kata romantis minum secara acak
const getRandomRomanticDrink = () => {
  return romanticDrink[Math.floor(Math.random() * romanticDrink.length)];
};

// Fungsi untuk memilih kata-kata romantis tidur secara acak
const getRandomRomanticSleep = () => {
  return romanticSleep[Math.floor(Math.random() * romanticSleep.length)];
};

// Fungsi untuk memilih kata-kata romantis mandi secara acak
const getRandomRomanticBathe = () => {
  return romanticBathe[Math.floor(Math.random() * romanticBathe.length)];
};

// Fungsi untuk memilih kata-kata romantis cinta secara acak
const getRandomRomanticLove = () => {
  return romanticLove[Math.floor(Math.random() * romanticLove.length)];
};

// Fungsi untuk memilih kata-kata bot secara acak
const getRandomBot = () => {
  return bot[Math.floor(Math.random() * bot.length)];
};

// Fungsi untuk memilih kata-kata kenalan secara acak
const getRandomKenalan = () => {
  return kenalan[Math.floor(Math.random() * kenalan.length)];
};

// Fungsi untuk memilih kata-kata romantis secara acak
const getRandomRomanticResponse = (aiResponse) => {
  const randomPhrase =
    romanticPhrases[Math.floor(Math.random() * romanticPhrases.length)];
  return `${randomPhrase} ${aiResponse}`;
};

module.exports = {
  getRandomEhemResponse,
  getRandomRomanticGreeting,
  getRandomRomanticFood,
  getRandomRomanticDrink,
  getRandomRomanticSleep,
  getRandomRomanticBathe,
  getRandomRomanticLove,
  getRandomBot,
  getRandomKenalan,
  getRandomRomanticResponse,
};
