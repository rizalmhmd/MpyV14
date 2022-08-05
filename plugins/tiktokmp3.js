let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
await conn.sendFile(m.chat, link, 'tt.audio', m)
}

handler.help = ['tiktokmp3 <url>']
handler.tags = ['downloader']
handler.command = /^tiktokmp3$/i

module.exports = handler
