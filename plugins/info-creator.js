function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${nama}\nitem1.TEL;waid=${nomor}:${nomor}\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:${web}\nEMAIL;Email Owner:${email}\nORG: NOT A BOT + NOT CALL\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['main']

handler.command = /^(owner|creator)$/i

export default handler