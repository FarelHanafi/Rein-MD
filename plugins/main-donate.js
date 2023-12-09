
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *ᴅᴏɴᴀᴛɪᴏɴ*
ʏᴏᴜ ᴄᴀɴ ᴅᴏɴᴀᴛᴇ ɪꜰ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ʜᴇʟᴘ ᴋᴇᴇᴘ ᴛʜᴇ ʙᴏᴛ ᴀᴄᴛɪᴠᴇ

▢ *DANA*
• *Number :* ${dana}
`
let img = qris
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
