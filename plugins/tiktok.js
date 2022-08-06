let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
let res = await fetch(`https://api.xteam.xyz/dl/tiktok?url=${args[0]}&APIKEY=9db5a5373433c015`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { caption, name, thumb_img, link_dl1, } = json.result
await conn.sendFile(m.chat, link_dl1, 'tt.mp4', `
𝙉𝙖𝙢𝙖 : *${name}*
𝘾𝙖𝙥𝙩𝙞𝙤𝙣 : *${caption}*
𝙇𝙞𝙣𝙠 : ${link_dl1}
`.trim(), m)
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^tiktok$/i

module.exports = handler
