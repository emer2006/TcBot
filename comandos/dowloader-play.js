/*import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[βππππβ] NOMBRE DE LA CANCION FALTANTE, POR FAVOR INGRESE EL COMANDO MAS EL NOMBRE/TITULO DE UNA CANCIΓN*\n\n*β’ EJEMPLO:*\n*${usedPrefix + command} Phonk*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3 ${urll}`, buttonText: { displayText: 'πΆ ππ¨πππ’ πΆ' }, type: 1 },
{ buttonId: `#ytmp4 ${urll}`, buttonText: { displayText: 'π¦ π©ππππ’ π¦' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: 'π π ππ¦ π₯ππ¦π¨ππ§πππ’π¦  π' }, type: 1 }, ]    
let texto1 = `
βββββββββ°  *π°*  β±βββββββ¬£
β *TITULO | TITLE*
β ${title}
βββββββββββββββββ
β *DESCRIPCIΓN  | DESCRIPTION*
β ${description}
βββββββββββββββββ
β *PUBLICADO | PUBLISHE*
β ${publishedTime}
βββββββββββββββββ
β *DURACION | DURATION*
β ${durationH}
βββββββββββββββ
β *VISTAS | VIEWS*
β ${viewH}
βββββββββββββββββ
β *URL*
β ${urll}
βββββββββ° *${vs}* β±βββββββ¬£`.trim()
let buttonMessage = { "document": { url: "https://wa.me/593959425715" }, "fileName": 'β’ ποΈ Κα΄α΄Κα΄α΄α΄α΄α΄α΄Κ α΄α΄ Κα΄α΄α΄α΄Κα΄', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/DIEGO-OFC/DORRAT-BOT-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `β’ *TITULO:* ${title}\nβ’ *PUBLICADO:* ${published}\nβ’ *VISTAS:* ${views}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: 'β±οΈ π ππ¦ π₯ππ¦π¨ππ§πππ’π¦'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*α΄Ι΄α΄ Ιͺα΄Ι΄α΄α΄ α΄α΄α΄Ιͺα΄, α΄Ι’α΄α΄Κα΄α΄ α΄Ι΄ α΄α΄α΄α΄Ι΄α΄α΄...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[β] ERROR, POR FAVOR INTΓNTELO DE NUEVO*'}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
// handler.register = true
handler.dorracoins = 100
//handler.limit = 5
export default handler*/
const _0x5daa01=_0x11b8;(function(_0x5da5b5,_0x25583e){const _0x583b95=_0x11b8,_0x3c38ee=_0x5da5b5();while(!![]){try{const _0x3e95b8=parseInt(_0x583b95(0x189))/0x1*(parseInt(_0x583b95(0x166))/0x2)+parseInt(_0x583b95(0x192))/0x3*(parseInt(_0x583b95(0x180))/0x4)+-parseInt(_0x583b95(0x188))/0x5*(parseInt(_0x583b95(0x17a))/0x6)+parseInt(_0x583b95(0x18e))/0x7*(-parseInt(_0x583b95(0x18f))/0x8)+-parseInt(_0x583b95(0x17d))/0x9+-parseInt(_0x583b95(0x168))/0xa*(-parseInt(_0x583b95(0x163))/0xb)+-parseInt(_0x583b95(0x193))/0xc*(-parseInt(_0x583b95(0x181))/0xd);if(_0x3e95b8===_0x25583e)break;else _0x3c38ee['push'](_0x3c38ee['shift']());}catch(_0x107141){_0x3c38ee['push'](_0x3c38ee['shift']());}}}(_0xc628,0xf3067));import{youtubeSearch,youtubedl,youtubedlv2,youtubedlv3}from'@bochilteam/scraper';let handler=async(_0x52257b,{conn:_0xa59f48,command:_0x57df8,text:_0x10023f,usedPrefix:_0x5d5e8d})=>{const _0x1badca=_0x11b8;if(!_0x10023f)throw _0x1badca(0x17c)+(_0x5d5e8d+_0x57df8)+_0x1badca(0x16b);try{let _0x1fc25d=(await youtubeSearch(_0x10023f))[_0x1badca(0x179)][0x0];if(!_0x1fc25d)throw _0x1badca(0x17e);let {title:_0x540143,description:_0x1706d6,thumbnail:_0x153d07,videoId:_0x924eeb,durationH:_0x5b2e51,viewH:_0x23be09,publishedTime:_0x19a4f4}=_0x1fc25d;const _0x29fc2d='https://www.youtube.com/watch?v='+_0x924eeb;let _0xd57714=_0x1badca(0x16f)+_0x540143+_0x1badca(0x178)+_0x1706d6+'\x0aβββββββββββββββββ\x0aβ\x20*PUBLICADO\x20|\x20PUBLISHE*\x0aβ\x20'+_0x19a4f4+_0x1badca(0x176)+_0x5b2e51+_0x1badca(0x16e)+_0x23be09+_0x1badca(0x190)+_0x1fc25d[_0x1badca(0x18b)]+_0x1badca(0x173)+vs+_0x1badca(0x16d);_0xa59f48['sendButton'](_0x52257b['chat'],_0x1badca(0x16f)+_0x540143+_0x1badca(0x178)+_0x1706d6+_0x1badca(0x165)+_0x19a4f4+_0x1badca(0x176)+_0x5b2e51+_0x1badca(0x16e)+_0x23be09+'\x0aβββββββββββββββββ\x0aβ\x20*URL*\x0aβ\x20'+_0x1fc25d[_0x1badca(0x18b)]+_0x1badca(0x173)+vs+'*\x20β±βββββββ¬£',author['trim'](),await(await _0xa59f48['getFile'](_0x153d07))[_0x1badca(0x177)],[_0x1badca(0x169),_0x5d5e8d+'getvid\x20'+_0x29fc2d+'\x20360'],![],{'quoted':_0x52257b,'document':{'url':_0x1badca(0x16c)},'mimetype':global[_0x1badca(0x182)],'fileName':'ππ π¦ππ¦ππ\x20βπππͺ','fileLength':0x25e546dd9aaaa,'pageCount':0x29a,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':''+_0x29fc2d,'title':_0x1badca(0x170),'body':wm,'sourceUrl':_0x1badca(0x18d),'thumbnail':await(await _0xa59f48[_0x1badca(0x191)](_0x153d07))[_0x1badca(0x177)]}}});const _0x58d7aa=await await youtubedlv2(_0x29fc2d)['catch'](async _0x24b93f=>await youtubedl(_0x29fc2d))[_0x1badca(0x175)](async _0x3726d8=>await youtubedlv3(_0x29fc2d)),_0x1b87bf=await _0x58d7aa[_0x1badca(0x16a)][_0x1badca(0x194)][_0x1badca(0x17f)]();let _0x27d999={'audio':{'url':_0x1b87bf},'mimetype':_0x1badca(0x18c),'fileName':''+_0x540143,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':_0x29fc2d,'title':_0x540143,'body':wm,'sourceUrl':_0x29fc2d,'thumbnail':await(await _0xa59f48['getFile'](_0x153d07))[_0x1badca(0x177)]}}};return _0xa59f48['sendMessage'](_0x52257b[_0x1badca(0x18a)],_0x27d999,{'quoted':_0x52257b});}catch{throw _0x1badca(0x174);}};handler[_0x5daa01(0x185)]=[_0x5daa01(0x17b)][_0x5daa01(0x186)](_0x55544f=>_0x55544f+_0x5daa01(0x184)),handler['tags']=[_0x5daa01(0x164)],handler[_0x5daa01(0x187)]=/^play$/i,handler['dorracoins']=0x5,handler[_0x5daa01(0x172)]=0x0,handler[_0x5daa01(0x183)]=!![];function _0x11b8(_0x408a74,_0x1be5ed){const _0xc628c8=_0xc628();return _0x11b8=function(_0x11b8fd,_0x34d203){_0x11b8fd=_0x11b8fd-0x162;let _0x1f57ae=_0xc628c8[_0x11b8fd];return _0x1f57ae;},_0x11b8(_0x408a74,_0x1be5ed);}export default handler;function pickRandom(_0x425c29){const _0x1c3542=_0x5daa01;return _0x425c29[Math[_0x1c3542(0x171)](_0x425c29[_0x1c3542(0x167)]*Math[_0x1c3542(0x162)]())];}function _0xc628(){const _0x5e636e=['3wUWeYk','chat','url','audio/mp4','https://github.com/DIEGO-OFC/DORRAT-BOT-MD','694505cxgDwt','48tXQdhS','\x0aβββββββββββββββββ\x0aβ\x20*URL*\x0aβ\x20','getFile','1227sfFWye','1238196hzcNHv','128kbps','random','2372293YZAdgH','downloader','\x0aβββββββββββββββββ\x0aβ\x20*PUBLICADO\x20|\x20PUBLISHE*\x0aβ\x20','494674xtxRuf','length','30oIyyyg','π½VIDEO','audio','\x20Phonk*','https://wa.me/12522518391','*\x20β±βββββββ¬£\x0aβ°βββββββββ¬£','\x0aβββββββββββββββ\x0aβ\x20*VISTAS\x20|\x20VIEWS*\x0aβ\x20','βββββββββ°\x20\x20*π°*\x20\x20β±βββββββ¬£\x0aβ\x20*TITULO\x20|\x20TITLE*\x0aβ\x20','β°\x20Enviando\x20audio','floor','exp','\x0aβββββββββ°\x20*','*[β]\x20ERROR,\x20INTENTA\x20DE\x20NUEVO*','catch','\x0aβββββββββββββββββ\x0aβ\x20*DURACION\x20|\x20DURATION*\x0aβ\x20','data','\x0aβββββββββββββββββ\x0aβ\x20*DESCRIPCIΓN\x20\x20|\x20DESCRIPTION*\x0aβ\x20','video','18fZwWbE','play','*[βππππβ]\x20NOMBRE\x20DE\x20LA\x20CANCION\x20FALTANTE,\x20POR\x20FAVOR\x20INGRESE\x20EL\x20COMANDO\x20MAS\x20EL\x20NOMBRE/TITULO\x20DE\x20UNA\x20CANCIΓN*\x0a\x0a*β’\x20EJEMPLO:*\x0a*','2712609jtrpVQ','*El\x20video\x20no\x20se\x20encontrΓ³,\x20intente\x20ingresar\x20el\x20nombre\x20original\x20de\x20la\x20canciΓ³n\x20o\x20video*','download','16556SGYMbg','65IoYDTq','dpdf','limit','\x20<pencarian>','help','map','command','2842740wfEFNm'];_0xc628=function(){return _0x5e636e;};return _0xc628();}
