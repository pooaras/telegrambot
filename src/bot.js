const telebot=require('node-telegram-bot-api')
require('dotenv').config()
Token=process.env.token
const bot=new telebot(Token,{polling:true})


bot.on('message',(message)=>{
    let chat_id=message.from.id;
    if(message.text.toLowerCase()=='hi'){
    bot.sendMessage(chat_id,'hi '+message.chat.first_name);
    }
});
