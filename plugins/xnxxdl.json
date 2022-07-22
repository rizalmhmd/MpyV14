let axios = require('axios');
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.xnxx.com/video-15anr32b/petite_japanese_cutie_gets_fucked_in_the_bathroom`
    let res = (await axios.get(API('males', '/xnxxdl', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
   conn.sendFile(m.chat, res.files.high, `*Judul:* ${res.title}\n${res.info ? `*Durasi:* ${res.duration}` : '\n' }`.trim(), 'Cara simpan digalery:\n1. Download dulu videonya\n2. Buka terus klik titik 3 pojok kanan atas\n3. lalu klik simpan!', m)
  }
  
  
  handler.command = handler.help = ['dlbokep']
  handler.tags = ['asupan']
  handler.premium = true
  handler.register = true
  handler.limit = 1
  module.exports = handler
