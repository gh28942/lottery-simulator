(this["webpackJsonplottery-app"]=this["webpackJsonplottery-app"]||[]).push([[0],{10:function(t,e,n){t.exports=n(19)},15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=(n(15),n(5)),l=n(6),c=n(9),m=n(8),u=(n(16),n(17),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("a",{href:"https://gh28942.github.io/lottery-simulator/overview.html",class:"mr-4 align-self-center"},r.a.createElement("img",{src:"./logo112.png",alt:"lotto logo",height:"40",width:"40"})),r.a.createElement("h1",null,"Austrian Lottery Simulator")))}),d=function(t){var e=t.numberOfTips,n=t.getAllTips,a=t.getAllWins;return r.a.createElement("div",{className:"display-board"},r.a.createElement("h4",null,"Tips on your ticket"),r.a.createElement("div",{className:"number"},e),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"btn"},r.a.createElement("button",{type:"button",onClick:function(t){return n()},className:"btn btn-warning"},"View ticket")),r.a.createElement("div",{className:"btn float-right"},r.a.createElement("button",{type:"button",onClick:function(t){return a()},className:"btn btn-warning"},"View wins")))))},h=function(t){var e=t.onChangeForm,n=t.createTip,a=t.deleteTicket,i=t.startCalc,o=t.randomNums,s=t.resetGame;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 mrgnbtm"},r.a.createElement("h2",null,"Fill out your lottery ticket "),r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"text-center"},"1"))),r.a.createElement("input",{type:"text",onChange:function(t){return e(t)},className:"form-control",name:"one",id:"one",placeholder:"1 - 45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"2"))),r.a.createElement("input",{type:"text",onChange:function(t){return e(t)},className:"form-control",name:"two",id:"two",placeholder:"1 - 45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword2"},"3"))),r.a.createElement("input",{type:"number",onChange:function(t){return e(t)},className:"form-control",name:"three",id:"three",placeholder:"1 - 45",min:"1",max:"45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword3"},"4"))),r.a.createElement("input",{type:"number",onChange:function(t){return e(t)},className:"form-control",name:"four",id:"four",placeholder:"1 - 45",min:"1",max:"45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword4"},"5"))),r.a.createElement("input",{type:"number",onChange:function(t){return e(t)},className:"form-control",name:"five",id:"five",placeholder:"1 - 45",min:"1",max:"45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword6"},"6"))),r.a.createElement("input",{type:"number",onChange:function(t){return e(t)},className:"form-control",name:"six",id:"six",placeholder:"1 - 45",min:"1",max:"45"}))),r.a.createElement("div",{className:"d-flex justify-content-center mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 col-12 d-flex justify-content-center"},r.a.createElement("button",{type:"button",onClick:function(t){return n()},className:"btn btn-secondary mx-2 mb-2"},"Add tip"),r.a.createElement("button",{type:"button",onClick:function(t){return o()},className:"btn btn-secondary mx-2 mb-2"},"Add random tip"),r.a.createElement("button",{type:"button",onClick:function(t){return a()},className:"btn btn-secondary mx-2 mb-2"},"Delete all")),r.a.createElement("div",{className:"col-md-4 col-12 d-flex justify-content-center"},r.a.createElement("button",{type:"button",onClick:function(t){return i()},className:"btn btn-danger ml-lg-5 mr-2 mb-2"},"Start"),r.a.createElement("button",{type:"button",onClick:function(t){return s()},className:"btn btn-danger mx-2 mb-2"},"Reset"))))))))},f=n(1),p=n.n(f),b=n(2);function g(t){return w.apply(this,arguments)}function w(){return(w=Object(b.a)(p.a.mark((function t(e){var n,a,r,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n="<b>Please add a few tips to your ticket.</b>",0!==e.flat(1).length){for(n="<table>",a=0;a<e.length;a++)if("undefined"!==typeof(r=e[a])[0]){for(n+="<tr><th>#"+a+": </th>",i=0;i<r.length;i++)n+="<th>"+r[i]+"</th>";n+="</tr>"}n+="</table>"}return t.next=4,n;case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return v.apply(this,arguments)}function v(){return(v=Object(b.a)(p.a.mark((function t(e){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n="<b>No luck yet!</b>",0!==e.flat(1).length){for(n="<table>",a=0;a<e.length;a++)n+=0===a?"<tr><th>Matching numbers</th><th>Amount</th></tr>":"<tr><th>"+a+": </th><th>"+e[a]+"</th></tr>";n+="</table>"}return t.next=4,n;case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t,e){return E.apply(this,arguments)}function E(){return(E=Object(b.a)(p.a.mark((function t(e,n){var a,r,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=[parseInt(n.one),parseInt(n.two),parseInt(n.three),parseInt(n.four),parseInt(n.five),parseInt(n.six)],r=0;case 2:if(!(r<a.length)){t.next=11;break}if(!(!a[r]||a[r]<1||a[r]>45)){t.next=8;break}return alert("Numbers outside the limit detected!"),t.next=7,[e,!1];case 7:return t.abrupt("return",t.sent);case 8:r++,t.next=2;break;case 11:return i=!1,a.sort((function(t,e){return t-e})),A(a)?alert("Identical numbers detected!"):S(e,a)?alert("Identical tip detected!"):(i=!0,e.push(a)),t.next=16,[e,i];case 16:return t.abrupt("return",t.sent);case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(p.a.mark((function t(e){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=[0,0,0,0,0,0],a=[0,0,0,0,0,0];T(n)||S(e,n);)(n=a.map((function(t,e,n){return Math.floor(45*Math.random())+1}))).sort((function(t,e){return t-e}));return e.push(n),t.next=6,e;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(t){return new Set(t).size!==t.length}function T(t){return t.some((function(e,n){return t.indexOf(e)!==n}))}function S(t,e){for(var n=0;n<t.length;n++){for(var a=!1,r=0;r<t[n].length;r++){if(t[n][r]!==e[r]){a=!1;break}a=!0}if(a)return!0}return!1}function I(t,e,n,a){return C.apply(this,arguments)}function C(){return(C=Object(b.a)(p.a.mark((function t(e,n,a,r){var i,o,s,l,c,m,u,d,h,f,b;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=[0,0,0,0,0,0],o=[0,0,0,0,0,0],s=!1,e=M(e),l={weekday:"long",year:"numeric",month:"long",day:"numeric"},c=e.toLocaleDateString(void 0,l);T(i);)i=o.map((function(t,e,n){return Math.floor(12*Math.random())+1}));for(i.sort((function(t,e){return t-e})),m=0,u=0;u<n.length;u++){for(d=n[u],h=0,f=0;f<d.length;f++)d[f]===i[f]&&h++;m<h&&(m=h),r[h]+=1}return 6===m?s=!0:m>2&&((b=document.getElementById("snackbar")).className="show",setTimeout((function(){b.className=b.className.replace("show","")}),3e3),a=m+" numbers!"),t.next=13,D(100);case 13:return t.next=15,[i,a,s,e,c,r];case 15:return t.abrupt("return",t.sent);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(t){for(var e=100;2!==e&&6!==e;)e=t.getDay(),t.setDate(t.getDate()+1);return t}function D(t){return new Promise((function(e){return setTimeout(e,t)}))}var F=n(7),W=n.n(F),O=function(t){Object(c.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={yourNums:{},ticketNums:[[]],numberOfTips:0,ticketsAsStr:"<b>Please add a few tips to your ticket.</b>",lottoNum1:1,lottoNum2:2,lottoNum3:3,lottoNum4:4,lottoNum5:5,lottoNum6:6,drawingNumber:0,significantWinText:" ",wonLottery:!1,winsAsStr:"<b>No luck yet!</b>",winsAsArray:[0,0,0,0,0,0,0],currDate:new Date,currDateStr:"today",costsSnapshot:0,timeBegin:(new Date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),timeSnapshot:"",gameStarted:!1,costPerTicket:1.2},t.createTip=function(e){!1===t.state.gameStarted?N(t.state.ticketNums,t.state.yourNums).then((function(e){!0===e[1]&&t.setState({ticketNums:e[0].slice(),numberOfTips:t.state.numberOfTips+1})})):alert("Modifying the ticket isn't allowed once the simulation has started.")},t.randomNums=function(e){!1===t.state.gameStarted?k(t.state.ticketNums).then((function(e){t.setState({ticketNums:e.slice(),numberOfTips:t.state.numberOfTips+1})})):alert("Modifying the ticket isn't allowed once the simulation has started.")},t.deleteTicket=function(){!1===t.state.gameStarted?t.setState({ticketNums:[[]],numberOfTips:0}):alert("Modifying the ticket isn't allowed once the simulation has started.")},t.getAllTips=function(){g(t.state.ticketNums).then((function(e){t.setState({ticketsAsStr:e});var n=document.getElementById("myModal"),a=document.getElementById("closeTips");n.style.display="block",a.onclick=function(){n.style.display="none"},window.onclick=function(t){t.target===n&&(n.style.display="none")}}))},t.getAllWins=function(){y(t.state.winsAsArray).then((function(e){t.setState({winsAsStr:e,costsSnapshot:(t.state.drawingNumber*(t.state.ticketNums.length-1)*t.state.costPerTicket).toFixed(2),timeSnapshot:t.state.currDateStr});var n=document.getElementById("winsModal"),a=document.getElementById("closeWins");n.style.display="block",a.onclick=function(){n.style.display="none"},window.onclick=function(t){t.target===n&&(n.style.display="none")}}))},t.startCalcInit=function(){t.state.gameStarted?alert("The simulation has already started!"):(W()(),t.startCalc(t.state.currDate,t.state.ticketNums,t.state.significantWinText,t.state.winsAsArray))},t.startCalc=function(){I(t.state.currDate,t.state.ticketNums,t.state.significantWinText,t.state.winsAsArray).then((function(e){t.state.numberOfTips>0?(t.setState({gameStarted:!0,drawingNumber:t.state.drawingNumber+1,significantWinText:e[1],lottoNum1:e[0][0],lottoNum2:e[0][1],lottoNum3:e[0][2],lottoNum4:e[0][3],lottoNum5:e[0][4],lottoNum6:e[0][5],currDate:e[3],currDateStr:e[4],winsAsArray:e[5],wonLottery:e[2]}),!1===t.state.wonLottery?t.startCalc(t.state.currDate,t.state.ticketNums,t.state.significantWinText,t.state.winsAsArray,!1):(t.setState({wonLottery:!1}),alert("You won the Jackpot!"))):alert("Please get a ticket first.")}))},t.resetGame=function(){t.setState({ticketNums:[[]],numberOfTips:0,ticketsAsStr:"<b>Please add a few tips to your ticket.</b>",lottoNum1:1,lottoNum2:2,lottoNum3:3,lottoNum4:4,lottoNum5:5,lottoNum6:6,drawingNumber:0,significantWinText:" ",wonLottery:!1,winsAsStr:"<b>No luck yet!</b>",winsAsArray:[0,0,0,0,0,0,0],currDate:new Date,currDateStr:"today",costsSnapshot:0,timeBegin:(new Date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),timeSnapshot:"",gameStarted:!1})},t.onChangeForm=function(e){var n=t.state.yourNums;"one"===e.target.name?n.one=e.target.value:"two"===e.target.name?n.two=e.target.value:"three"===e.target.name?n.three=e.target.value:"four"===e.target.name?n.four=e.target.value:"five"===e.target.name?n.five=e.target.value:"six"===e.target.name&&(n.six=e.target.value),t.setState({yourNums:n})},t}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement("div",{className:"container mrgnbtm"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(h,{ticket:this.state.yourNums,onChangeForm:this.onChangeForm,createTip:this.createTip,deleteTicket:this.deleteTicket,startCalc:this.startCalcInit,resetGame:this.resetGame,randomNums:this.randomNums})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(d,{numberOfTips:this.state.numberOfTips,getAllTips:this.getAllTips,getAllWins:this.getAllWins}))),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"Drawing number: ",this.state.drawingNumber)),r.a.createElement("div",{className:"col-md-3 text-md-center text-right"},"Costs: \u20ac ",(this.state.drawingNumber*(this.state.ticketNums.length-1)*this.state.costPerTicket).toFixed(2),",-"),r.a.createElement("div",{className:"col-md-3 text-right"},this.state.currDateStr)),r.a.createElement("div",{className:"row mt-4 mb-5"},r.a.createElement("div",{className:"container mb-5"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum1),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum2),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum3),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum4),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum5),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum6))))),r.a.createElement("div",{id:"snackbar"},this.state.significantWinText),r.a.createElement("div",{id:"myModal",class:"modal"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h2",null,"Lottery Ticket"),r.a.createElement("span",{class:"close",id:"closeTips"},"\xd7")),r.a.createElement("div",{class:"modal-body"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.ticketsAsStr}}),r.a.createElement("p",null,"This is your lottery ticket. It does cost ",((this.state.ticketNums.length-1)*this.state.costPerTicket).toFixed(2)," euros. Take good care of it and don't lose it. Good luck!"),r.a.createElement("p",null,r.a.createElement("b",null,"Disclaimer:")," This program does only simulate a lottery game. This website is not affiliated with any lottery game company. It is merely a simulation and no real money is used in it.")))),r.a.createElement("div",{id:"winsModal",class:"modal"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h2",null,"Wins"),r.a.createElement("span",{class:"close",id:"closeWins"},"\xd7")),r.a.createElement("div",{class:"modal-body"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.winsAsStr}}),r.a.createElement("p",null,"All winnings achieved so far (from ",this.state.timeBegin," to ",this.state.timeSnapshot,") are listed here. You have spent \u20ac ",this.state.costsSnapshot,",- so far."),r.a.createElement("p",null,r.a.createElement("b",null,"Disclaimer:")," This program does only simulate a lottery game. This website is not affiliated with any lottery game company. It is merely a simulation and no real money is used in it.")))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e){var n={maxCount:150,speed:2,frameInterval:15,alpha:1,gradient:!1,start:null,stop:null,toggle:null,pause:null,resume:null,togglePause:null,remove:null,isPaused:null,isRunning:null};!function(){n.start=h,n.stop=f,n.toggle=function(){a?f():h()},n.pause=m,n.resume=u,n.togglePause=function(){r?u():m()},n.isPaused=function(){return r},n.remove=function(){n.stop(),r=!1,o=[]},n.isRunning=function(){return a};var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,e=["rgba(30,144,255,","rgba(107,142,35,","rgba(255,215,0,","rgba(255,192,203,","rgba(106,90,205,","rgba(173,216,230,","rgba(238,130,238,","rgba(152,251,152,","rgba(70,130,180,","rgba(244,164,96,","rgba(210,105,30,","rgba(220,20,60,"],a=!1,r=!1,i=Date.now(),o=[],s=0,l=null;function c(t,a,r){return t.color=e[Math.random()*e.length|0]+(n.alpha+")"),t.color2=e[Math.random()*e.length|0]+(n.alpha+")"),t.x=Math.random()*a,t.y=Math.random()*r-r,t.diameter=10*Math.random()+5,t.tilt=10*Math.random()-10,t.tiltAngleIncrement=.07*Math.random()+.05,t.tiltAngle=Math.random()*Math.PI,t}function m(){r=!0}function u(){r=!1,d()}function d(){if(!r)if(0===o.length)l.clearRect(0,0,window.innerWidth,window.innerHeight),null;else{var e=Date.now(),m=e-i;(!t||m>n.frameInterval)&&(l.clearRect(0,0,window.innerWidth,window.innerHeight),function(){var t,e=window.innerWidth,r=window.innerHeight;s+=.01;for(var i=0;i<o.length;i++)t=o[i],!a&&t.y<-15?t.y=r+100:(t.tiltAngle+=t.tiltAngleIncrement,t.x+=Math.sin(s)-.5,t.y+=.5*(Math.cos(s)+t.diameter+n.speed),t.tilt=15*Math.sin(t.tiltAngle)),(t.x>e+20||t.x<-20||t.y>r)&&(a&&o.length<=n.maxCount?c(t,e,r):(o.splice(i,1),i--))}(),function(t){for(var e,a,r,i,s=0;s<o.length;s++){if(e=o[s],t.beginPath(),t.lineWidth=e.diameter,r=e.x+e.tilt,a=r+e.diameter/2,i=e.y+e.tilt+e.diameter/2,n.gradient){var l=t.createLinearGradient(a,e.y,r,i);l.addColorStop("0",e.color),l.addColorStop("1.0",e.color2),t.strokeStyle=l}else t.strokeStyle=e.color;t.moveTo(a,e.y),t.lineTo(r,i),t.stroke()}}(l),i=e-m%n.frameInterval),requestAnimationFrame(d)}}function h(t,e,i){var s=window.innerWidth,m=window.innerHeight;window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,n.frameInterval)};var u=document.getElementById("confetti-canvas");null===u?((u=document.createElement("canvas")).setAttribute("id","confetti-canvas"),u.setAttribute("style","display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),document.body.prepend(u),u.width=s,u.height=m,window.addEventListener("resize",(function(){u.width=window.innerWidth,u.height=window.innerHeight}),!0),l=u.getContext("2d")):null===l&&(l=u.getContext("2d"));var h=n.maxCount;if(e)if(i)if(e==i)h=o.length+i;else{if(e>i){var p=e;e=i,i=p}h=o.length+(Math.random()*(i-e)+e|0)}else h=o.length+e;else i&&(h=o.length+i);for(;o.length<h;)o.push(c({},s,m));a=!0,r=!1,d(),t&&window.setTimeout(f,t)}function f(){a=!1}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.dfff3845.chunk.js.map