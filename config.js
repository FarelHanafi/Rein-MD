/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['62881026950162', 'ʀᴇɪɴ-ᴍᴅ', true],
  ['6281026950162']
] // Nomor Owner

global.mods = ['62881026950162'] 
global.prems = ['62881026950162', '6281026950162']

// apikey
global.lann = 'ERrlH55Y'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': 'apikeylu'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = 'ʀᴇɪɴ-ᴍᴅ' // nama owner
global.nomor = '6281026950162' // nomor owner
global.nans = 'ʀᴇɪɴ-ᴍᴅ' // nama bot 
global.thumb = 'https://telegra.ph/file/ebcf6929b1d8fd598289f.png' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com' // link group yang ada di menu

// Sticker wm
global.packname = 'ʀᴇɪɴ-ᴍᴅ' 
global.author = 'ʀᴇɪɴ-ᴍᴅ' 
global.fgig = 'https://saweria.co/rein122' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/OnlyRein' // bebas tapi jangan kosong
global.fgyt = 'https://saweria.co/rein122' // bebas tapi jangan kosong
global.fgpyp = 'https://saweria.co/rein122' // bebas tapi jangan kosong
global.fglog = 'https://telegra.ph/file/ebcf6929b1d8fd598289f.png'

// Other
global.dana = '6281026950162'
global.qris = 'https://saweria.co/rein122'
global.web = 'https://saweria.co/rein122'
global.email = 'farelcuy122@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ ʀᴇɪɴ'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})