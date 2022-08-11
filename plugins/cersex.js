let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api-xcoders.xyz/api/random/cersex?apikey=xcoders')
  let cersex = await url.json()
let hasil = `
*Powered By ${global.wm}*

JUDUL : ${cersex.result.title}
TANGGAL : ${cersex.result.date}

${cersex.result.cerita}
`.trim()

  m.reply(hasil)
}
handler.help = ['cersex']
handler.tags = ['internet']
handler.command = /^cersex$/i
handler.limit = true

module.exports = handler
