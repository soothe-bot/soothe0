# SOOTHE BOT

<div align="center">
  <img width="80%" src="https://i.imgur.com/F3OaHIC.png">
</div> 

# Advance Discord Music Bot

a discord music bot with many commands , buttons , 24/7 , autoresume ,etc

## **Installation | How to use the Bot**

**1.** Install Latest LTS [NodeJS](https://nodejs.org/en/)

**2.** Download this repo and unzip it | or git clone it

**3.** Fill in everything in **`settings/config.js`**

### _Modify - config.js_

```javascript
{
  TOKEN: "BOT_TOKEN",
  PREFIX: "BOT_PREFIX",
  mongodb : "MONGO_URL"
}
```

### _Modify - .env_

_*Rename `.env.example` to `.env.` and configure it*_

```env
TOKEN=
PREFIX=
MONGO_URL=
GUILD_ID=
VOTE_URL=
DISCORD_SERVER=
INVITE_URL=
COLOR=
WRONGCOLOR=
DONATE=
AUTHOR=
WEBSITE=
INSTAGRAM=
PORT=
```

**4.** Now Let's Update Node Version. copy and paste in shell **`npm i --save-dev node@latest && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH`**

**5.** after Fill everything in config Type in shall **`npm install`**

**6.** now we need to install to additional packages **.** <br/>

1.  `npm install @discordjs/opus` - for better audio quality **.** <br/>
2.  `npm install zlib-sync@latest` - for WebSocket data compression and inflation **.** <br/>
3.  `npm install erlpack@latest` - for significantly faster WebSocket **.** <br/>

**7.** start the bot with **`node index.js`**

## Music Bot Features

- Easy to use Music Bot
- Support Youtube , Spotify , Soundcloud , etc 700+ websites
- Slash commands support
- Dashboard support
- Message commands support
- Stable & up to date with discord.js v14
- Support 24/7 in voice channel
- Support autoresume system
- Support music request channel system
- Support more filters
- Support dj system
- Work on replit and others vps

### 🐳 Docker

available:
- `lrmn/soothe:latest`: latest versions

## 💫 Deploy

[![Run on Repl.it](https://repl.it/badge/github/soothe-bot/soothe)](https://replit.com/@LRMN/soothe)
[![Run on Hop.io](https://res.cloudinary.com/lrmn/image/upload/c_scale,w_80/v1685977085/lzZYjpqm_400x400_kwtfxu.png)](https://hop.io)

## Feedback

If you have any feedback, please reach out to us at [Discord Server](https://discord.gg/WFfjrQxnfH)


## License

[MIT](https://choosealicense.com/licenses/mit/)
