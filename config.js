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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_45_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwLFxuICAgICAgICA2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3LFxuICAgICAgICA0MixcbiAgICAgICAgOTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3LFxuICAgICAgICA0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY0LFxuICAgICAgICA1NSxcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDg0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcwLFxuICAgICAgICA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxL2RBcnROb0l3OWMyVzBrWFpEWU9qTnlXRHU3R2NhWUJjTHo0dGdIaEVNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMzQyNTI2MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRCMjYyQTVENTU0NjgyMEVFRjhDRDI1QkZGMEU1QTBBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjA2OTkzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuRzd3MVlNTFJFV0NJRHlHNFJGVHVBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ5ZjhmODAyLTg5NzktNDkwMS04YzI5LWJkZTA2MjBmNTk2YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICA1MSxcbiAgICAgIDIyMyxcbiAgICAgIDUyLFxuICAgICAgMTE4LFxuICAgICAgNzMsXG4gICAgICA0MCxcbiAgICAgIDU2LFxuICAgICAgMTY3LFxuICAgICAgNjQsXG4gICAgICA2NCxcbiAgICAgIDE2MixcbiAgICAgIDI0NSxcbiAgICAgIDIzMyxcbiAgICAgIDE5MyxcbiAgICAgIDIwMyxcbiAgICAgIDEsXG4gICAgICA0MixcbiAgICAgIDIxMSxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICA2NSxcbiAgICAgIDE1LFxuICAgICAgMTEwLFxuICAgICAgMTc4LFxuICAgICAgMTA1LFxuICAgICAgMjcsXG4gICAgICAxNzEsXG4gICAgICAxMjMsXG4gICAgICAxMTUsXG4gICAgICAyMjYsXG4gICAgICAyNTAsXG4gICAgICAyNDIsXG4gICAgICAyMzksXG4gICAgICA4MixcbiAgICAgIDYwLFxuICAgICAgNDMsXG4gICAgICAxOTAsXG4gICAgICAxNyxcbiAgICAgIDMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZTSzdaVkpXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM0MjUyNjMwOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjE5NjMyNTkwODkxMTY6MjBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiKkRQTUVESUEgMO+4j+KDozLvuI/ig6MqXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXI5OU4wRUVLam5rclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMYXNnNnBSU1puNjZxNEwydFd0VUtsdXFOSUZia21iN05mNmE3bE9ndmtFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1NY0s4dVE0K0FPUEpUbmhKYi9Ga2gxK3FJaHNCTFFSUlNZZEFBNVE4WGtnUGRBd2tMZG9IRDErV2lBOEFVc1cwU2N2VmhIMjByZkxJcUpMUTRkcEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhRd2pWZDczZ09VNDQ4VjY3OXl3RUJvRFh3YUNmS0YzY3QyNGRKdXdhSUZtOW44TVB6T3hxbTM4ZVRUTHU3d3FtS1h5Rnh4MzQrYk5ENXhRaGVUR2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzQyNTI2MzA6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDY5OTMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkV6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFORXouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4VWNCZk9hUDBzN1Q1REVFZ01kTW5GdjJRemVDbVRXbFhINlR3UUlQQmE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNzA2OTM1NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIwNjk2OTg2MDRcIn0iCn0="  // PUT your SESSION_ID 


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
