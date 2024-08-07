const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349034252630";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = "SUHAIL_20_23_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU3LFxuICAgICAgICA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyLFxuICAgICAgICA3MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg1LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MixcbiAgICAgICAgMTI0LFxuICAgICAgICA4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDcwLFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5qUEpMZUp1THlHUUQyZzFxaUk0Znp2NE5VY2JOVU9PUkVrRDdlUmVzUUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlptNHNmcGFPU0dPUWpjV2p2ZlVPX1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2M0YjE5MjAtMzllMy00Zjg4LTkyZmEtYThlYzE1ZGM4NzAxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgNTksXG4gICAgICAyMyxcbiAgICAgIDUzLFxuICAgICAgMTY0LFxuICAgICAgMTA1LFxuICAgICAgNTEsXG4gICAgICAxMSxcbiAgICAgIDI0NCxcbiAgICAgIDE2MyxcbiAgICAgIDE1OCxcbiAgICAgIDk2LFxuICAgICAgMTk3LFxuICAgICAgMTg0LFxuICAgICAgMTcsXG4gICAgICA2NixcbiAgICAgIDAsXG4gICAgICAxNjMsXG4gICAgICAyNSxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgNDUsXG4gICAgICA0MSxcbiAgICAgIDk2LFxuICAgICAgMTIwLFxuICAgICAgMTQ1LFxuICAgICAgMTA5LFxuICAgICAgMjMwLFxuICAgICAgMTQ3LFxuICAgICAgMTA0LFxuICAgICAgNDMsXG4gICAgICAxMDMsXG4gICAgICAxNDIsXG4gICAgICAxMzcsXG4gICAgICAxMyxcbiAgICAgIDIyLFxuICAgICAgMTExLFxuICAgICAgMjA5LFxuICAgICAgMTI3LFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTFKN0FQMU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzQyNTI2MzA6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2MTk2MzI1OTA4OTExNjoyMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEUE1FRElBIDDvuI/ig6MgMu+4j+KDo1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ016OTlOMEVFTWl2ejdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTGFzZzZwUlNabjY2cTRMMnRXdFVLbHVxTklGYmttYjdOZjZhN2xPZ3ZrRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTWnc5K25iV0x5V0RYclU1QW9BWnV0Qnd4NURFeHowRlUyTlFKbzdrb09IVXJVaHkybTJUYUxORDdDeDFIWCs3VzZ1VnRsUGdrdGcrRUdaQXE1MTBBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsQ3ZlRDZRYyt1ZkN5clFZTnB3NmdGemcvL01XQlJ2VVNtMjJyOTJHYkZXLzJBb255NUNzblpDVkJmL3VOdko4T2NUd1lWMzYweXY5eUFEamdScXJEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM0MjUyNjMwOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzA2MjIyMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNDS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0NLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiajFZTXZwcHc1VWpVQkp1NXhtWTJsOHVVcmdxWVllQlUrbVRGUzZVSUF1VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjcwNjkzNTgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMwNjIyMjcyNjNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
