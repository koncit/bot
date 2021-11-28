const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { pinterest } = require('./lib/pinterest')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const client = new WAConnection()

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
autorespon = false
playmusic = false
baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || false
}
offline = false
publik = false
waktuafk = 'Nothing'
alasanafk = 'Nothing'
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NamaOwner = settings.NamaOwner
Nogpy = 081261973803 
Noovo = 081261973803 
Nodana = 081261973803
Norek = 1248887865
multi = true
nopref = false

// APIKEY
HunterApi = settings.HunterApi

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = denz = async (denz, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = denz.user
		m = simple.smsg(denz, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		denz.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./denz.jpg')
		cmhit.push(command)
        mess = {
			wait: 'Wait a minute',
			success: 'Success',
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Error'
			},
			only: {
				group: 'Only for within the group!',
				ownerG: 'Only for group owners!',
				ownerB: 'Only for bot owners!',
				admin: 'Only for group admins!',
				Badmin: 'Make the bot a group admin!'
			}
		}
		const botNumber = denz.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? denz.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? denz.user.jid : denz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? denz.user.name : conts.notify || conts.vname || conts.name || '-'
		const totalchat = await denz.chats.all()
		const groupMetadata = isGroup ? await denz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (antibot === true) return
		const katalog = (teks) => {
             res = denz.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© MAN Batam_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             denz.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = denz.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `${NamaBot}`, "footerText": "*_© MAN Batam_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            denz.relayWAMessage(grup)
        }
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const sekarang = new Date().getTime();
			//-
			//WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Midnight"; break;
                case 1: jamss = "Midnight"; break;
                case 2: jamss = "Midnight"; break;
                case 3: jamss = "Midnight"; break;
                case 4: jamss = "Midnight"; break;
                case 5: jamss = "Dawn"; break;
                case 6: jamss = "Morning"; break;
                case 7: jamss = "Morning"; break;
                case 8: jamss = "Morning"; break;
                case 9: jamss = "Morning"; break;
                case 10: jamss = "Morning"; break;
                case 11: jamss = "Afternoon"; break;
                case 12: jamss = "Zuhur"; break;
                case 13: jamss = "Afternoon"; break;
                case 14: jamss = "Afternoon"; break;
                case 15: jamss = "Asr"; break;
                case 16: jamss = "Afternoon"; break;
                case 17: jamss = "Evening"; break;
                case 18: jamss = "Maghrib"; break;
                case 19: jamss = "Isya"; break;
                case 20: jamss = "Night"; break;
                case 21: jamss = "Night"; break;
                case 22: jamss = "Midnight"; break;
                case 23: jamss = "Midnight"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
 // FAKE REPLY BY YOGI PEWE
// PRODUCT
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": dfrply //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan} ${pushname}`, //Kasih namalu
                            orderTitle: `${tampilUcapan} ${pushname}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await denz.relayWAMessage(
        denz.prepareMessageFromContent(
          target,
          denz.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
denz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await denz.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
denz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await denz.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
denz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await denz.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
denz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
 if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© MAN Batam_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === denz.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© MAN Batam_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					denz.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        denz.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        denz.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await denz.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        denz.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			denz.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:"",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/6281261973803?text=Assalamualaikum`}}})
		}
		const simir = (teks) => {
			denz.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			denz.sendMessage(hehe, teks, text, { quoted: tok, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? denz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : denz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
denz.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
denz.sendMessage(from, hasil, type, options).catch(e => {
denz.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					denz.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await denz.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				denz.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
           if (budo.startsWith(`>`)){
           	if (!isOwner) return
				const sep = budo.split("\n")
                let exc = budo.replace(sep[0]+"\n", "")
                const print = function(budo){
                    denz.sendMessage(from, util.format(budo))
                }
                console.log(exc)
                eval("(async () => {try{"+exc+"}catch(e){denz.sendMessage(from,  e.toString())}})()")
			}
			if (budo.startsWith(`$`)){
				if (!isOwner) return
				const sep = budo.split("\n")
                let exc = budo.replace(sep[0]+"\n", "")
                exec(exc, (err, stdout) => {
					if (err) return denz.sendMessage(from, `root @dcode-denpa:~ ${err}`, text, { quoted: mek })
					if (stdout) {
						denz.sendMessage(from, stdout, text)
					}
				})
			}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					denz.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					denz.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					denz.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				denz.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    denz.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (bad.includes(messagesD)) {
				reply('_Jangan Toxic!_')
				}
				if (m.message && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
m.reply('Troli Detected\n\n' + require('util').format(m.key))
await denz.modifyChat(m.chat, 'delete', {
 includeStarred: false
})
}
if (!isGroup && !isCmd && !command && !mek.key.fromMe && !autorespon) {
numd = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
                     sami = simi.success
                        denz.sendMessage(from, `_${sami}_`, text, {thumbnail: ofrply, sendEphemeral: true, quoted:mek, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
if (!settings.autoread) {
denz.chatRead(from)
}
if (!settings.autocomposing) {
denz.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
denz.updatePresence(from, Presence.recording)
}
   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]

        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply stickernya bgsd!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
        case 'menu':
        case 'help':
        case 'assalamualaikum':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `┌───「 \`\`\`${NamaBot}\`\`\` 」
│
├───「 \`\`\`INFO USER\`\`\` 」
│
├ _Status : ${isOwner ? 'Owner' : 'User'}_
├ _Nama : ${pushname}_
├ _Bio : ${stst}_
├ _Nomor : @${stod.split('@')[0]}_
├ _Info Nomor : ${num.line_type} - ${num.country_name} - ${num.carrier}_
│
└───「 \`\`\`${NamaBot}\`\`\` 」`
sendButLocation(from, `${menu}`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}sewa1`,buttonText:{displayText:'LINK LOMBA 📋'},type:1},{buttonId:`${prefix}jadibot`,buttonText:{displayText:'SOSMED 🌐'},type:1},{buttonId:`${prefix}gw1`,buttonText:{displayText:'OWNER 👨‍💻'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'topup':
        case 'topup':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `┌───「 \`\`\`${NamaBot}\`\`\` 」
│
├ _Creator : ${NamaOwner}_
├ _Battery : ${baterai.battery}_
├ _Mode : ${publik ? 'Public' : 'Self'}_
├ _Total Hit : ${cmhit.length}_
├ _Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}_
│
├───「 \`\`\`INFO BOT\`\`\` 」
│
├ _Nama Bot : ${NamaBot}_
├ _Nama Owner : ${NamaOwner}_
├ _Nomor Owner : @${otod.split('@')[0]}_
├ _Auto Composing : ${settings.autocomposing}_
├ _Auto Recording : ${settings.autorecording}_
│
├───「 \`\`\`INFO USER\`\`\` 」
│
├ _Status : ${isOwner ? 'Owner' : 'User'}_
├ _Nama : ${pushname}_
├ _Bio : ${stst}_
├ _Nomor : @${stod.split('@')[0]}_
├ _Info Nomor : ${num.line_type} - ${num.country_name} - ${num.carrier}_
│
└───「 \`\`\`${NamaBot}\`\`\` 」`
sendButLocation(from, `*_Hay ${pushname}_ 🌹*\n\nBerikut list menu yang tersedia di ${NamaBot}`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}listdm`,buttonText:{displayText:'📋 LIST DIAMOND'},type:1},{buttonId:`${prefix}member`,buttonText:{displayText:'💳 MEMBERSHIP'},type:1},{buttonId:`${prefix}info`,buttonText:{displayText:'❗ INFO'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'info':
        case 'pwoww':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `┌───「 \`\`\`${NamaBot}\`\`\` 」
│
├ _Creator : ${NamaOwner}_
├ _Battery : ${baterai.battery}_
├ _Mode : ${publik ? 'Public' : 'Self'}_
├ _Total Hit : ${cmhit.length}_
├ _Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}_
│
├───「 \`\`\`INFO BOT\`\`\` 」
│
├ _Nama Bot : ${NamaBot}_
├ _Nama Owner : ${NamaOwner}_
├ _Nomor Owner : @${otod.split('@')[0]}_
├ _Auto Composing : ${settings.autocomposing}_
├ _Auto Recording : ${settings.autorecording}_
│
├───「 \`\`\`INFO USER\`\`\` 」
│
├ _Status : ${isOwner ? 'Owner' : 'User'}_
├ _Nama : ${pushname}_
├ _Bio : ${stst}_
├ _Nomor : @${stod.split('@')[0]}_
├ _Info Nomor : ${num.data.carrier.type} - ${num.data.carrier.name}_
│
└───「 \`\`\`${NamaBot}\`\`\` 」`
sendButLocation(from, `*❗ INFO*\n\nWaktu Buka Jam 09:00 - 22:00`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}gw1`,buttonText:{displayText:'👥 GRUB'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
//sewa bot
case 'sewa':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_ *Panduan Registrasi*\n\n1. Silahkan pilih menu lomba yang tersedia\n\n2. Pilih Metode Pembayaran\n\n3.Tranfer ke no Rekening : 1248887865\nAtas Nama : *FATHIYA ZARINE DECA*\n\nTekan *YA* jika sudah paham`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}sewa1`,buttonText:{displayText:'💞Ya'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'gc':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `*_Hay ${pushname}_* 🥰\n\nSilahkan pilih ingin buka / tutup grub`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}opengc`,buttonText:{displayText:'BUKA'},type:1},{buttonId:`${prefix}closegc`,buttonText:{displayText:'TUTUP'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'sewa1':
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: '*_© MAN Batam_*',
 description: `*LINK LOMBA*\n _Hai ${pushname}_ \n*Panduan Registrasi*\n\n1. Silahkan klik garis 3 dibawah *KLIK DISINI* , kemudian pilih lomba-lomba yang tersedia\n\n2. Pilih Metode Pembayaran (Transfer BANK Via DANA & OVO)\n\n3. Tranfer ke no Rekening : 1248887865\nAtas Nama : *FATHIYA ZARINE DECA*\nBank *BNI*\n\n4. ❗Ketik ( .menu ) untuk memunculkan ulang MENU BOT❗\n _wajib menggunakan tanda titik,contoh : .menu_`,
 sections: [
                     {
                      "title": `${jmn} - ${week} ${weton} - ${calender}`,
 rows: [
                          {
                              "title": "📖tilawah",
                              "rowId": ""
                           },
                           {
                              "title": "💃tarikreasi",
                              "rowId": ""
                           },
                           {
                              "title": "💡rank1",
                              "rowId": ""
                           },
                           {
                              "title": "📸fotografi",
                              "rowId": ""
                           },
                           {
                              "title": "🖼️poster",
                              "rowId": ""
                           },
                           {
                              "title": "🕴️lkbbFavor",
                              "rowId": ""
                           },
                           {
                              "title": "🏅olimpiade",
                              "rowId": ""
                           },
                           {
                              "title": "📹videokreatif",
                              "rowId": ""
                           },
                           {
                              "title": "🎮mobilelegends",
                              "rowId": ""
                           },
                           {
                              "title": "🇮🇩lgb",
                              "rowId": ""
                           },
                           {
                              "title": "🎙️podcast",
                              "rowId": ""
                           },
                           {
                              "title": "🗣️speech",
                              "rowId": ""
                           },
                           {
                              "title": "📰newsanchor",
                              "rowId": ""
                           },
                           {
                              "title": "👱ownerbot",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case '📖tilawah':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba Tilawah :\n\nSMP/MTs : Rp.45.000 / Orang\nSMA/SMK/MA : Rp.50.000 / Orang\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo14`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana14`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '📰newsanchor':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba News Anchor :\nRp.30.000 / TIM\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo1`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana1`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '🗣️speech':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba Speech :\nRp.30.0000 / TIM\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo2`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana2`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '🎙️podcast':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba Podcast :\nRp.45.000 / Orang\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo3`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana3`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '🇮🇩lgb':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba Lipat Gebrak Bendera :\nRp.180.000 / TIM\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo4`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana4`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '🎮mobilelegends':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba Mobile Legends :\nRp.40.000 / TIM\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo5`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana5`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '📹videokreatif':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba Video Kreatif (PRAMUKA) :\nRp.25.000 / TIM\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo6`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana6`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '🏅olimpiade':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba Olimpiade :\nGel 1 Rp.30.000 / Orang\nGel 2 Rp.40.000 / Orang\nGel 3 Rp.50.000 / Orang\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo7`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana7`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '🕴️lkbbfavor':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba LkbbFavor :\nRp.270.000 / TIM\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo8`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana8`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '🖼️poster':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba Digital Poster (PRAMUKA) :\nRp.25.000 / TIM\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo9`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana9`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '📸fotografi':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba Fotografi :\nRp.45.000 / Orang\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo10`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana10`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '🎥musicvideo':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba Music Video : Rp.0\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo11`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana11`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '💡rank1':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba Rank 1 (PRAMUKA) :\nRp.25.000 / Orang\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo12`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana12`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '💃tarikreasi':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `_Hai ${pushname}_\n\nBiaya Registrasi Lomba Tari Kreasi :\nRp.50.000 / TIM\n\nSilahkan pilih metode pembayaran`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}ovo13`,buttonText:{displayText:'OVO 💸'},type:1},{buttonId:`${prefix}dana13`,buttonText:{displayText:'DANA 💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '👍':
listMsg = {
 buttonText: 'OWNER 👨‍💻',
 footerText: '*_© MAN Batam_*',
 description: `*Hai ${pushname}* \n\nsilahkan tekan "OWNER" untuk menuju ke nomer owner`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "owner 👨‍💻",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
//ayam
case 'bcsticker':
        case 'bcstik':
					if (!issendMessage) return replyByRimuru(mess.only.userB) 
			        if (!isOwner) return reply (mess.only.ownerB)
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
						bc = await nayla.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nayla.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						reply('Suksess broadcast')
					}
					break
/// ayam
case 'command':
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: '*_© MAN Batam_*',
 description: `_*Hay kak @${stod.split('@')[0]}*_ 😄\n\n Silahkan pilih *Link Pendaftaran* disini`,
 sections: [
                     {
                      "title": `${jmn} - ${week} ${weton} - ${calender}`,
 rows: [
                          {
                              "title": "OwnerBot",
                              "rowId": ""
                           },
                           {
                              "title": "Tilawah",
                              "rowId": ""
                           },
                           {
                              "title": "TariKreasi",
                              "rowId": ""
                           },
                           {
                              "title": "Rank1",
                              "rowId": ""
                           },
                           {
                              "title": "MusicVideo",
                              "rowId": ""
                           },
                           {
                              "title": "Fotografi",
                              "rowId": ""
                           },
                           {
                              "title": "Poster",
                              "rowId": ""
                           },
                           {
                              "title": "LkbbFavor",
                              "rowId": ""
                           },
                           {
                              "title": "Olimpiade",
                              "rowId": ""
                           },
                           {
                              "title": "VideoKreatif",
                              "rowId": ""
                           },
                           {
                              "title": "MobileLegends",
                              "rowId": ""
                           },
                           {
                              "title": "LGB",
                              "rowId": ""
                           },
                           {
                              "title": "VideoEssay",
                              "rowId": ""
                           },
                           {
                              "title": "Speech",
                              "rowId": ""
                           },
                           {
                              "title": "NewsAnchor",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
sendButLocation(from, `Hai ${pushname} ☺️`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}sewa`,buttonText:{displayText:'Panduan TF Registrasi💸'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'gw1':
menu = `*Hai ${pushname}*

───────────────────
♡ۣۜۜ፝͜͜͡͡✿ *OWNER BOT* ♡ۣۜۜ፝͜͜͡͡✿
───────────────────
*Jika ada kendala silahkan hubungi nomor di bawah ini*
───────────────────
Razul M.A.S
https://wa.me/6281261973803
───────────────────
`
katalog(menu)
break
//Nomer Dnaa yaa
case 'dana1':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 📰News Anchor
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 📰News Anchor\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'dana2':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🗣️Speech
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                             "title": "🛒Kirim Bukti\n\n*Lomba :* 🗣️Speech\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'dana3':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🎙️ Podcast
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🎙️ Podcast\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'dana4':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🇮🇩Lipat Gebrak Bendera
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🇮🇩Lipat Gebrak Bendera\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'dana5':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🎮Mobile Legends
║ • _Biaya : IDR 40.000
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🎮Mobile Legends\n*Biaya :* IDR 40.000\n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'dana6':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 📹Video Kreatif
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 📹Video Kreatif\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'dana7':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🏅Olimpiade
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🏅Olimpiade\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'dana8':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🕴️LKBBFAVOR
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🕴️LKBBFAVOR\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'dana9':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Nominal : 🖼️Poster
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🖼️Poster\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'dana10':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Nominal : 📸Fotografi
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 📸Fotografi\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'dana11':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🎥Music Video
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🎥Music Video\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'dana12':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 💡Rank 1
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 💡Rank 1\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'dana13':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Nominal : 💃Tari Kreasi
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 💃Tari Kreasi\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'dana14':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Nominal : 📖Tilawah
║ • _Biaya : 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 📖Tilawah\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
//ovo 
case 'ovo1':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 📰News Anchor
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 📰News Anchor\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ovo2':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🗣️Speech
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🗣️Speech\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781 _",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ovo3':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🎙️ Podcast
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🎙️ Podcast\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781 _",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ovo4':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🇮🇩Lipat Gebrak Bendera
║ • _Biaya : 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🇮🇩Lipat Gebrak Bendera\n*Biaya :* IDR \n\nSilahkan kirim Bukti pembayaran ke wa.me//6281367072781",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ovo5':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🎮Mobile Legends
║ • _Biaya : IDR 40.000
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🎮Mobile Legends\n*Biaya :* IDR 40.000\n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ovo6':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 📹Video Kreatif
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 📹Video Kreatif\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ovo7':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🏅Olimpiade
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🏅Olimpiade\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ovo8':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Nominal : 🕴️LKBBFAVOR
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🕴️LKBBFAVOR\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ovo9':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🖼️Poster
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🖼️Poster\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ovo10':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Nominal : 📸Fotografi
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 📸Fotografi\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ovo11':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 🎥Music Video
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 🎥Music Video\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ovo12':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Lomba : 💡Rank 1
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 💡Rank 1\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ovo13':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Nominal : 💃Tari Kreasi
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 💃Tari Kreasi\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ovo14':
 listMsg = {
 buttonText: 'Kirim Bukti Transfer',
 footerText: '▌│█║▌║▌║║▌║▌║█│▌\n▌│█║▌║▌║║▌║▌║█│▌',
 description: `╔════════════════════
║ • _Nama : ${pushname}_
║ • _Nomor : ${sender.split("@")[0]}_
╠════════════════════
║ • _Nominal : 📖Tilawah
║ • _Biaya : IDR 
╠════════════════════
║ *Transfer Rek : ${Norek}*
║ An. *FATHIYA ZARINE DECA*
║ *BANK BNI*
╚════════════════════
*[❗] Sertakan Bukti Pembayaran*
-------------------------------------------------------
*「 ${NamaBot} 」*`,
 sections: [
                     {
                      "title": `NOMOR REKENING : ${Norek}`,
 rows: [
                           {
                              "title": "🛒Kirim Bukti\n\n*Lomba :* 📖Tilawah\n*Biaya :* IDR \n\n_Silahkan kirim Bukti pembayaran ke wa.me//6281367072781_",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
denz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'ownermenu':
        case '0':
        stod = `${sender}`
       stst = await denz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `0`
sendButLocation(from, `Lu Bukan Owner BOT`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}sewa`,buttonText:{displayText:'SEWA 🎟️'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'DONASI ♨️'},type:1},{buttonId:`${prefix}listdm`,buttonText:{displayText:'TOP UP 💎'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'razul':
menu = `❏ 「 \`\`\`MENU OWNER\`\`\` 」
├────────────────────
├ ${prefix}stopjadibot
├ ${prefix}autorespon [ _on/off_ ]
├ ${prefix}bc [ _teks/reply gif/image/video with caption_ ]
├ ${prefix}tobc [ _reply sticker/audio with caption_ ]
├ ${prefix}return [ _javascript_ ]
├ ${prefix}clearall
├ ${prefix}delchat
├ ${prefix}mute
├ ${prefix}unmute
├ ${prefix}public
├ ${prefix}self
├ ${prefix}spam [ _teks|jumlah_ ]
├ ${prefix}demoteall
├ ${prefix}promoteall
├ ${prefix}addcmd [ _teks reply stc_ ]
├ ${prefix}delcmd [ _reply stc_ ]
├ ${prefix}listcmd
├ ${prefix}spamsw [ _teks|jumlah_ ]
├ ${prefix}upswteks [ _teks_ ]
├ ${prefix}upswlokasi [ _teks_ ]
├ ${prefix}upswaudio [ _reply audio_ ]
├ ${prefix}upswvoice [ _reply audio_ ]
├ ${prefix}upswsticker [ _reply sticker_ ]
├ ${prefix}upswimage [ _reply image with caption_ ]
├ ${prefix}upswgif [ _reply gif with caption_ ]
├ ${prefix}upswvideo [ _reply video with caption_ ]
├ ${prefix}shutdown
├ ${prefix}offline [ _alasan_ ]
├ ${prefix}online
├ ${prefix}exif [ _nama|author_ ]
├ ${prefix}setprofile [ _reply image_ ]
├ ${prefix}setname [ _teks_ ]
├ ${prefix}setprefix [ _multi/nopref_ ]
├ ${prefix}setbio [ _teks_ ]
├ ${prefix}addsticker [ _nama_ ]
├ ${prefix}delsticker [ _nama_ ]
├ ${prefix}addvn [ _nama_ ]
├ ${prefix}delvn [ _nama_ ]
├ ${prefix}addimage [ _nama_ ]
├ ${prefix}delimage [ _nama_ ]
├ ${prefix}bug [ _jumlah_ ]
├ ${prefix}bugpc2 [ _jumlah_ ]
├ ${prefix}bugtroli2 [ _jumlah_ ]
├ ${prefix}bugpc
├ ${prefix}bugcombine
├ ${prefix}bugtroli
├ ${prefix}buglokasi
├ ${prefix}bughole
├ ${prefix}leave
├ ${prefix}restart
├ ${prefix}join [ _link group_ ]
├ ${prefix}addrespon [ _tanya|jawab_ ]
└ ${prefix}delrespon [ _nama_ ]`
katalog(menu)
sendButLocation(from, `Hai ${pushname} shilahkan di pilih menu nya ☺️`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}sewa`,buttonText:{displayText:'SEWA 🎟️'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'DONASI ♨️'},type:1},{buttonId:`${prefix}topup`,buttonText:{displayText:'TOP UP 💎'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case '💳min':
menu = `❏ 「 \`\`\`MENU OWNER\`\`\` 」
├────────────────────
├ ${prefix}stopjadibot
├ ${prefix}autorespon [ _on/off_ ]
├ ${prefix}bc [ _teks/reply gif/image/video with caption_ ]
├ ${prefix}tobc [ _reply sticker/audio with caption_ ]
├ ${prefix}return [ _javascript_ ]
├ ${prefix}clearall
├ ${prefix}delchat
├ ${prefix}mute
├ ${prefix}unmute
├ ${prefix}public
├ ${prefix}self
├ ${prefix}spam [ _teks|jumlah_ ]
├ ${prefix}demoteall
├ ${prefix}promoteall
├ ${prefix}addcmd [ _teks reply stc_ ]
├ ${prefix}delcmd [ _reply stc_ ]
├ ${prefix}listcmd
├ ${prefix}spamsw [ _teks|jumlah_ ]
├ ${prefix}upswteks [ _teks_ ]
├ ${prefix}upswlokasi [ _teks_ ]
├ ${prefix}upswaudio [ _reply audio_ ]
├ ${prefix}upswvoice [ _reply audio_ ]
├ ${prefix}upswsticker [ _reply sticker_ ]
├ ${prefix}upswimage [ _reply image with caption_ ]
├ ${prefix}upswgif [ _reply gif with caption_ ]
├ ${prefix}upswvideo [ _reply video with caption_ ]
├ ${prefix}shutdown
├ ${prefix}offline [ _alasan_ ]
├ ${prefix}online
├ ${prefix}exif [ _nama|author_ ]
├ ${prefix}setprofile [ _reply image_ ]
├ ${prefix}setname [ _teks_ ]
├ ${prefix}setprefix [ _multi/nopref_ ]
├ ${prefix}setbio [ _teks_ ]
├ ${prefix}addsticker [ _nama_ ]
├ ${prefix}delsticker [ _nama_ ]
├ ${prefix}addvn [ _nama_ ]
├ ${prefix}delvn [ _nama_ ]
├ ${prefix}addimage [ _nama_ ]
├ ${prefix}delimage [ _nama_ ]
├ ${prefix}bug [ _jumlah_ ]
├ ${prefix}bugpc2 [ _jumlah_ ]
├ ${prefix}bugtroli2 [ _jumlah_ ]
├ ${prefix}bugpc
├ ${prefix}bugcombine
├ ${prefix}bugtroli
├ ${prefix}buglokasi
├ ${prefix}bughole
├ ${prefix}leave
├ ${prefix}restart
├ ${prefix}join [ _link group_ ]
├ ${prefix}addrespon [ _tanya|jawab_ ]
└ ${prefix}delrespon [ _nama_ ]`
katalog(menu)
sendButLocation(from, `Hai ${pushname} shilahkan di pilih menu nya ☺️`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}sewa`,buttonText:{displayText:'SEWA 🎟️'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'DONASI ♨️'},type:1},{buttonId:`${prefix}topup`,buttonText:{displayText:'TOP UP 💎'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'downloadmenu':
menu = `❏ 「 \`\`\`MENU DOWNLOAD\`\`\` 」
├────────────────────
├ ${prefix}infogempa
├ ${prefix}herolist
├ ${prefix}herodetail [ _hero_ ]
├ ${prefix}google [ _search_ ]
├ ${prefix}gimage [ _search_ ]
├ ${prefix}wiki [ _search_ ]
├ ${prefix}mediafire [ _link_ ]
├ ${prefix}ytsearch [ _judul_ ]
├ ${prefix}ytmp4 [ _link yt_ ]
├ ${prefix}ytmp3 [ _link yt_ ]
├ ${prefix}play [ _judul lagu_ ]
├ ${prefix}video [ _judul video_ ]
├ ${prefix}tinyurl [ _link_ ]
├ ${prefix}fetch [ _link_ ]
├ ${prefix}igdl [ _link_ ]
├ ${prefix}tiktokdl [ _link_ ]
├ ${prefix}pinterest [ _search_ ]
├ ${prefix}lirik [ _judul_ ]
├ ${prefix}tourl [ _reply image/video_ ]
├ ${prefix}resepmasakan [ _judul_ ]
├ ${prefix}artimimpi [ _teks_ ]
├ ${prefix}bilangangka [ _angka_ ]
├ ${prefix}kalkulator [ _angka_ ]
├ ${prefix}fancytext [ _teks_ ]
├ ${prefix}githubstalk [ _username_ ]
├ ${prefix}translate [ _kodebhs|teks_ ]
└ ${prefix}ss [ _link_ ]`
katalog(menu)
sendButLocation(from, `Hai ${pushname} shilahkan di pilih menu nya ☺️`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}sewa`,buttonText:{displayText:'SEWA 🎟️'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'DONASI ♨️'},type:1},{buttonId:`${prefix}topup`,buttonText:{displayText:'TOP UP 💎'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'makermenu':
menu = `❏ 「 \`\`\`MENU MAKER\`\`\` 」
├────────────────────
├ ${prefix}matrix [ _teks_ ]
├ ${prefix}googletxt [ _teks_ ]
├ ${prefix}spiderman [ _teks_ ]
├ ${prefix}express [ _teks_ ]
├ ${prefix}dance [ _teks_ ]
├ ${prefix}blackbird [ _teks_ ]
├ ${prefix}halloween [ _teks_ ]
├ ${prefix}vampire [ _teks_ ]
├ ${prefix}codetxt [ _teks_ ]
├ ${prefix}text3d [ _teks_ ]
└ ${prefix}warrior [ _teks_ ]`
katalog(menu)
sendButLocation(from, `Hai ${pushname} shilahkan di pilih menu nya ☺️`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}sewa`,buttonText:{displayText:'SEWA 🎟️'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'DONASI ♨️'},type:1},{buttonId:`${prefix}topup`,buttonText:{displayText:'TOP UP 💎'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'groupmenu':
menu = `❏ 「 \`\`\`MENU GROUP\`\`\` 」
├────────────────────
├ ${prefix}getpict [ _@tag_ ]
├ ${prefix}getname [ _reply target_ ]
├ ${prefix}getbio [ _reply target_ ]
├ ${prefix}promote [ _@tag_ ]
├ ${prefix}demote [ _@tag_ ]
├ ${prefix}antilink [ _1/0_ ]
├ ${prefix}creategrup [ _nama|@tag_ ]
├ ${prefix}tictactoe [ _@tag_ ]
├ ${prefix}delttt
├ ${prefix}getpp
├ ${prefix}kick [ _@tag_ ]
├ ${prefix}add [ _nomor_ ]
├ ${prefix}getdeskgc
├ ${prefix}sider [ _reply pesan bot_ ]
├ ${prefix}setnamegc [ _teks_ ]
├ ${prefix}setdeskgc [ _teks_ ]
├ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
├ ${prefix}kontak [ _@tag|nama_ ]
├ ${prefix}kontag [ _@tag|nama_ ]
├ ${prefix}gc
├ ${prefix}resetlinkgc
├ ${prefix}linkgrup
├ ${prefix}hidetag [ _teks_ ]
└ ${prefix}totag [ _reply media_ ]`
katalog(menu)
sendButLocation(from, `Hai ${pushname} shilahkan di pilih menu nya ☺️`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}sewa`,buttonText:{displayText:'SEWA 🎟️'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'DONASI ♨️'},type:1},{buttonId:`${prefix}topup`,buttonText:{displayText:'TOP UP 💎'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'othermenu':
menu = `❏ 「 \`\`\`MENU OTHER\`\`\` 」
├────────────────────
├ ${prefix}jadibot
├ ${prefix}caripesan [ _teks|jumlah_ ]
├ ${prefix}slots
├ ${prefix}suit [ _gunting/batu/kertas_ ]
├ ${prefix}tag [ _nomor_ ]
├ ${prefix}tagme
├ ${prefix}tts [ _kodebhs teks_ ]
├ ${prefix}readmore [ _teks1|teks2_ ]
├ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
├ ${prefix}chat [ _nomor|teks_ ]
├ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
├ ${prefix}listimage
├ ${prefix}liststicker
├ ${prefix}listvn
├ ${prefix}listgrup
├ ${prefix}baileys [ _reply message_ ]
├ ${prefix}q [ _reply message_ ]
├ ${prefix}getcaption [ _reply message_ ]
├ ${prefix}pantun
├ ${prefix}tospam [ _reply audio/sticker/image|jumlah_ ]
├ ${prefix}sharelock [ _teks1|teks2_ ]
├ ${prefix}sticker
├ ${prefix}stickerwm [ _nama|author_ ]
├ ${prefix}takestick [ _nama|author_ ]
├ ${prefix}colong [ _reply sticker_ ]
├ ${prefix}dadu
├ ${prefix}semoji [ _emoji_ ]
├ ${prefix}attp [ _teks_ ]
├ ${prefix}toimg
├ ${prefix}tomp3 [ _reply video_ ]
├ ${prefix}tomp4 [ _reply sticker gif_ ]
├ ${prefix}robot [ _reply audio_ ]
├ ${prefix}balik [ _reply audio_ ]
├ ${prefix}bass [ _reply audio_ ]
├ ${prefix}gemuk [ _reply audio_ ]
├ ${prefix}detikvn [ _reply audio caption angka_ ]
└ ${prefix}detikvideo [ _reply video caption angka_ ]`
katalog(menu)
sendButLocation(from, `Hai ${pushname} shilahkan di pilih menu nya ☺️`, "*_© MAN Batam_*", {jpegThumbnail:ofrply}, [{buttonId:`${prefix}sewa`,buttonText:{displayText:'SEWA 🎟️'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'DONASI ♨️'},type:1},{buttonId:`${prefix}topup`,buttonText:{displayText:'TOP UP 💎'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'jadibot':
menu = `Kunjungi Instagram :

╭━━━━━━━━━━━━━━━━━━━━━
│➣ https://instagram.com/manbatam1
│➣https://instagram.com/osimmanbatam
╰━━━━━━━━━━━━━━━━━━━━━`
katalog(menu)
sendButLocation(from, `Hai ${pushname} ☺️`, "*_© MAN Batam_*", [{buttonId:`${prefix}sewa1`,buttonText:{displayText:'📋LINK LOMBA'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'stopjadibot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
try {
reply('Oke')
fs.unlinkSync(`./sampah/${sender}.json`)
client.close()
} catch {
reply('Oke')
client.close()
}
break
case 'ownerbot':
	case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of ownerNumber) {
const vname = denz.contacts[i] != undefined ? denz.contacts[i].vname || denz.contacts[i].notify : undefined
ini_list.push({
"displayName": `Developer ${NamaBot}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Razul;;;\nFN:${vname ? `${vname}` : `${denz.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
denz.sendMessage(from, {
"displayName": `Developer ${NamaBot}`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
}
reply(teksnyee)
break
				case 'script1':
		case 'sc1':
		case 'sourcecode1':
		denz.sendMessage(from, { text: "https://instagram/xsxsxxss.15", matchedText: 'https://instagram/xsxsxxss.15', description: "", title: "don't click here !!!", jpegThumbnail: ofrply }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
       case 'debug':
			 res = await denz.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋,\n\n${jmn} - ${week} ${weton} - ${calender}`,
							"hydratedFooterText": `${NamaBot}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
denz.relayWAMessage(res)
break
case 'debug2':
   res = await denz.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} 👋,\n\n${jmn} - ${week} ${weton} - ${calender}`,
    "hydratedFooterText": `${NamaBot}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script ${NamaBot}`,
          "url": "https://github.com/dcode-denpa"
        },
        "index": 0
      }
    ]
  }
}
}, {})
denz.relayWAMessage(res)
break
case 'ig':
case 'igdl':
case 'instagram':
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
if (!c) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
                    case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await denz.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'viewonce':
res = await denz.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": dfrply,
"viewOnce": true
}
}
}
}, {}) 
denz.relayWAMessage(res)
break
case 'pinterest':
if (!c) return reply('yg mau di cari apa?')
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
})
break
case 'isbaileys': 
case 'bail': 
case 'baileys':
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'q': 
    if (!m.quoted) return reply('reply pesan!')
    let qse = denz.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await qse.quoted.copyNForward(m.chat, true)
break
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
  const txs = denz.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${denz.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
  case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await denz.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
denz.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
  case 'get':
case 'fetch':
            if(!c) return reply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
            case 'autorespon':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
           if (c === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else {
                    reply(mess.error.api)
                }
                break
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
                }
                break
        case 'test':
				case 'cek':
				case 'tes':
				runtime = process.uptime()
				reply(`- Active!\n${waktu(runtime)}`)
				break
				case 'tictactoe':
case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
denz.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break
                case 'delttt':
                case 'delttc':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
				case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await denz.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await denz.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				denz.sendMessage(from, buffer, image, {quoted: mek})
		} else {
		}
			  break
				case 'public':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			publik = true
				reply('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				publik = false
				reply('Sukses mengubah mode public ke self')
			break
		case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
				case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
				case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
if (Number(filesize) >= 30000) return reply(`*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}

_File sedang dikirim, Silahkan tunggu beberapa menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
				case 'kalkulator':
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				case 'translate':
				if (args.length < 1) return reply('Teksnya?')
				crew = body.slice(11)
trans = crew.split("|")[0];
late = crew.split("|")[1];
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/translate?lang=${trans}&text=${late}&apikey=${HunterApi}`, {method: 'get'})
				teks = anu.text
reply(teks)
break
		case 'artimimpi':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
				case 'fancytext':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'lirik':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
				case 'bilangangka':
				if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'pantun':
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pantun?apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'resepmasakan':
				if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					denz.sendMessage(from, buff, image, {quoted: ftok, caption: hasilresep})
					break 
					case 'githubstalk':
					if (args.length < 1) return reply('Usernamenya?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${HunterApi}`, {method: 'get'})
					gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.avatar_url)
					denz.sendMessage(from, buff, image, {quoted: ftok, caption: gstalk})
					break 
					case 'infogempa':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${HunterApi}`, {method: 'get'})
					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					denz.sendMessage(from, buff, image, {quoted: ftok, caption: gempa})
					break 
				case 'dadu':
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			denz.sendMessage(from, damdu, sticker, {quoted: mek})
			break
				case 'robot':
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await denz.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await denz.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await denz.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await denz.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break
case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await denz.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  denz.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  denz.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await denz.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  denz.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await denz.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  denz.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await denz.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  denz.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	case 'halloween':
	if (!arg) return reply(from, `Penggunaan ${prefix}halloween teks`, mek)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${arg}&apikey=${HunterApi}`)
   break
   case 'vampire':
   if (!arg) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${arg}&apikey=${HunterApi}`)
   break
   case 'codetxt':
   if (!arg) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${arg}&apikey=${HunterApi}`)
   break
case 'matrix':
				if (!arg) return reply(from, `Penggunaan ${prefix}matrix teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${arg}&apikey=${HunterApi}`)
				break
				case 'googletxt':
				if (!arg) return reply(from, `Penggunaan ${prefix}googletxt teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=${HunterApi}`)
				break
				case 'spiderman':
				if (!arg) return reply(from, `Penggunaan ${prefix}sipderman teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=${HunterApi}`)
				break
				case 'express':
				if (!arg) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=${HunterApi}`)
				break
				case 'dance':
				if (!arg) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${arg}&apikey=${HunterApi}`)
				break
				case 'blackbird':
				if (!arg) return reply(from, `Penggunaan ${prefix}blackbird teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${arg}&apikey=${HunterApi}`)
				break
				case 'text3d':
				if (!arg) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${arg}&apikey=${HunterApi}`)
				break
				case 'warrior':
				if (!arg) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${arg}&apikey=${HunterApi}`)
				break
				case 'd':
				case 'del':
				case 'delete':
					denz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await denz.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    denz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(meidia)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'delchat':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                denz.modifyChat(from, ChatModification.delete)
                break
				case 'clearall':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					anu = await denz.chats.all()
					denz.setMaxListeners(10)
					for (let _ of anu) {
						denz.deleteChat(_.jid)
					}
					reply('Sukses membersihkan semua pesan')
					break
					case 'mute':
			    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
					case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
reply(`_Restarting ${NamaBot}_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
				case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await denz.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await denz.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						denz.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
				 case 'antilink':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						denz.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
				case 'tinyurl':
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'sharelock':
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
denz.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break
case 'tts':
					if (args.length < 1) return denz.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return denz.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								denz.sendMessage(from, buff, audio, { duration: 359996400, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					break
				case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    denz.groupDemoteAdmin(from, [demote])
						reply('Sukses demote admin')
						break
					case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    denz.groupMakeAdmin(from, [promote])
						reply('Sukses promote member')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await denz.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					denz.sendMessage(from, yeh, text, { quoted: mek })
					break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         denz.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
					case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   reply(`Sukses membuka grup ${groupName}`)
						denz.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						reply(`Sukses menutup grup ${groupName}`)
						denz.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'spam':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					denz.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                denz.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                denz.groupMakeAdmin(from, members_id)
                break
				case 'setnamegc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					denz.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
					break					
				case 'setdeskgc':
				case 'setdescgc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					denz.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
					break
				case 'setprofile':
				case 'setpp':
				denz.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await denz.downloadAndSaveMediaMessage(enmediau)
					await denz.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				denz.updatePresence(from, Presence.composing)
				denz.groupLeave(from)
						break
				case 'bc':
					denz.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await denz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
					case 'spamsw':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					denz.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
				case 'upswteks':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    denz.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    denz.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NamaBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await denz.downloadMediaMessage(encmedia)
						denz.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await denz.downloadMediaMessage(encmedia)
						denz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await denz.downloadMediaMessage(encmedia)
						denz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await denz.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    denz.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    denz.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    denz.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				return denz.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				case 'tomp4':
					if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await denz.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
					denz.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await denz.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						denz.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
				case 'suit':
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
		    case 'slot':
            case 'slots':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            denz.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
				case 'kontak':
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
				if (!isGroup) return reply(mess.only.group)
				argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'getdeskgc':
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await denz.groupMetadata(anu)
				denz.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
					case 'getbio':
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await denz.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
                    case 'getname':
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = denz.contacts[ambl] != undefined ? denz.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : denz.contacts[ambl].notify || denz.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
				case 'getpict':
				case 'getpic':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await denz.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            denz.sendMessage(from, pict, image, {quoted: mek})
            break
				case 'chat':
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            denz.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
				case 'attp':
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ${NamaBot}`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					denz.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
				case 'semoji':
			if (args === 0) return reply('emojinya?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('gagal'))
           })
    	   break
				case 'tag':
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					denz.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					denz.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
				case 'join':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				 if (args.length < 1) return ephe('Link nya mana?')
					denz.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses bergabung dalam group')
break
				case 'totag':
			if (!isGroup) return reply(mess.only.group)
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await denz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await denz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            denz.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await denz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await denz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            denz.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await denz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await denz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            denz.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await denz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await denz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            denz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await denz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await denz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            denz.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await denz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await denz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            denz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
				case 'status':
case 'stats':
				var groups = denz.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = denz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					const totalChat = await denz.chats.all()
					const latensi = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = denz.user.phone
					stamtus = `⍟ ────────────────── ⍟

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalChat.length}
Speed : ${latensi.toFixed(4)} second
Runtime : ${kyun(uptime)}
Baterai : ${baterai.battery}
Charged : ${baterai.isCharge}
Mode : ${publik ? 'public' : 'self'}
Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${denz.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${denz.user.phone.wa_version}
Os Version: ${denz.user.phone.os_version}

⍟ ────────────────── ⍟`
reply(stamtus)
break
				case 'tobc':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				denz.updatePresence(from, Presence.composing)
					anu = await denz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
					case 'fdeface':
var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                mediad = await denz.downloadAndSaveMediaMessage(encmediad)
                                ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
                                denz.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break
                                break
					case 'online':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				reply('Fitur OFFLINE diaktifkan')
				break
           case 'fitnahpc':
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    denz.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
            case 'hidetag':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
            case 'fitnah':
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				denz.sendMessage(from, cs[2], MessageType.text, target)
				break
              case 'hacked':
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   denz.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                denz.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                denz.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                denz.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
				break
                case 'ytmp4':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'ytsearch':
            if (!args.length) return reply('Judulnya apa kak?')
            try {
            	reply(mess.wait)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `┌ ◪ *YOUTUBE SEARCH*
└ *Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
┌ ❏ *Judul:* ${items[i].title}
├ ❏ *Id:* ${items[i].id}
├ ❏ *Ditonton:* ${items[i].views}
├ ❏ *Durasi:* ${items[i].duration}
└ ❏ *Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await denz.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
├ ${prefix}ytmp3 [link yt] = Audio
└ ${prefix}ytmp4 [link yt] = Video`})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
					case 'ytmp3':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *YTmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
					        })
						} catch (err) {
							reply(mess.error.api)
						}
						break
                    case 'play':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
                            const playy = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulaikah = playy.data.result[0].url
                            try {
                                reply(mess.wait)
                                yta(mulaikah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *PLAYmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
                                    sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
                            case 'video':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
                            const playi = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulaihah = playi.data.result[0].url
                            try {
                                reply(mess.wait)
                                ytv(mulaihah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *PLAYmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP4\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
                                    sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
                    case 'exif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
				case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await denz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											denz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await denz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											denz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'stickerwm':
					case 'swm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await denz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											denz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await denz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											denz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'takestick':
					case 'take':
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await denz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							denz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
			case 'speed':
			case 'ping':
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Speed: ${latensyi.toFixed(4)} Second`)
					break
				case 'return':
				if (!isOwner) return reply(mess.only.ownerB)
					return denz.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					if (err) return denz.sendMessage(from, `root @dcode-denpa:~ ${err}`, text, { quoted: mek })
                 break
                 case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							denz.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
				case 'ss':
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`)
					break
				break
				case 'addsticker':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await denz.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					denz.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 reply(`Sukses menghapus sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'stickerlist':
				case 'liststicker':
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					denz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					case 'addvn':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await denz.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					denz.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'vnlist':
				case 'listvn':
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					denz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
				case 'addimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Nama image nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await denz.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					denz.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 reply(`Sukses menghapus image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
					teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
					denz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
				case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await denz.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				denz.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'runtime':
				runtime = process.uptime()
				reply(`Runtime : ${waktu(runtime)}`)
				break
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					denz.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setname':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                denz.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
			case 'add':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			add = mek.message.extendedTextMessage.contextInfo.participant
		    denz.groupAdd(from, [add])
				reply('Sukses menambahkan peserta')
				break
				case 'kick':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    denz.groupRemove(from, [kick])
						reply('Sukses mengeluarkan peserta')
                    break
                    case 'creategroup':
			case 'creategrup':
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					denz.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
			case 'addrespon':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
		default:break
		}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  denz.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
denz.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
denz.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 denz.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
denz.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
 denz.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     denz.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer MAN BATAM BOT",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:"https://wa.me/6281261973803?text=Assalamualaikum"}}})
	}
    }
    }
    }
    }
    }
    }
