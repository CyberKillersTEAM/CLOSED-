/**
========================================================
      
      
========================================================
 Copyright (C) 2022.                                                                                        
 Licensed under the  GPL-3.0 License;                                                      
 You may not use this file except in compliance with the License.    
 It is supplied in the hope that it may be useful                                     
 * @project_name : QUEEN-SENU-MD                                                                   
 * @author : CyberKillersTEAM <https://github.com/CyberKillersTEAM>   
 * @description : QUEEN-SENU-MD ,A Multi-functional whatsapp bot.       
 * @version 1.0.0                                                                                             
 ========================================================
 **/
 
const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '```ᴘɪɴɢ Qᴜᴇᴇɴ-Sᴇɴᴜ-ᴍᴅ..```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '_QᴜᴇᴇɴSᴇɴᴜ ᴘᴏɴɢ_\n *' + (final - inital) + ' ms* ', edit: key});
    }
);
