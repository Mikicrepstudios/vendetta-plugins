(function(e,i){"use strict";const{FormText:o}=i.Forms;function a(){return React.createElement(o,null,"No settings for now")}var r={onLoad:function(){const{metro:d,commands:c,logger:u}=vendetta,{sendBotMessage:t}=d.findByProps("sendBotMessage");this.onUnload=c.registerCommand({execute:function(l,n){try{t(n.channel.id,"Test")}catch(s){u.error(s),t(n.channel.id,"Command failed to run: "+s.message)}},name:"ip",displayName:"ip",description:"Fetch IP address",options:Array.from({length:1}).fill({required:!0,type:3,name:"ipaddress",displayName:"ipaddress",description:"Write IP address you want to fetch",displayDescritpion:"Write IP address you want to fetch"}),applicationId:-1,inputType:1,type:1})},settings:a};return e.default=r,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta.ui.components);
