(this["webpackJsonplottery-app"]=this["webpackJsonplottery-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},15:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(5),l=a.n(s),c=(a(15),a(6)),o=a(7),i=a(9),m=a(8),u=(a(16),a(17),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("a",{href:"https://gh28942.github.io/lottery-simulator/overview.html",class:"mr-4 align-self-center"},r.a.createElement("img",{src:"./logo112.png",alt:"lotto logo",height:"40",width:"40"})),r.a.createElement("h1",null,"Austrian Lottery Simulator")))}),d=function(e){var t=e.numberOfTips,a=e.getAllTips,n=e.getAllWins;return r.a.createElement("div",{className:"display-board"},r.a.createElement("h4",null,"Tips on your ticket"),r.a.createElement("div",{className:"number"},t),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"btn"},r.a.createElement("button",{type:"button",onClick:function(e){return a()},className:"btn btn-warning"},"View ticket")),r.a.createElement("div",{className:"btn float-right"},r.a.createElement("button",{type:"button",onClick:function(e){return n()},className:"btn btn-warning"},"View wins")))))},f=function(e){var t=e.onChangeForm,a=e.createTip,n=e.deleteTicket,s=e.startCalc,l=e.randomNums,c=e.resetGame;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 mrgnbtm"},r.a.createElement("h2",null,"Fill out your lottery ticket "),r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"text-center"},"1"))),r.a.createElement("input",{type:"text",onChange:function(e){return t(e)},className:"form-control",name:"one",id:"one",placeholder:"1 - 45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"2"))),r.a.createElement("input",{type:"text",onChange:function(e){return t(e)},className:"form-control",name:"two",id:"two",placeholder:"1 - 45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword2"},"3"))),r.a.createElement("input",{type:"number",onChange:function(e){return t(e)},className:"form-control",name:"three",id:"three",placeholder:"1 - 45",min:"1",max:"45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword3"},"4"))),r.a.createElement("input",{type:"number",onChange:function(e){return t(e)},className:"form-control",name:"four",id:"four",placeholder:"1 - 45",min:"1",max:"45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword4"},"5"))),r.a.createElement("input",{type:"number",onChange:function(e){return t(e)},className:"form-control",name:"five",id:"five",placeholder:"1 - 45",min:"1",max:"45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword6"},"6"))),r.a.createElement("input",{type:"number",onChange:function(e){return t(e)},className:"form-control",name:"six",id:"six",placeholder:"1 - 45",min:"1",max:"45"}))),r.a.createElement("div",{className:"d-flex justify-content-center mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 col-12 d-flex justify-content-center"},r.a.createElement("button",{type:"button",onClick:function(e){return a()},className:"btn btn-secondary mx-2 mb-2"},"Add tip"),r.a.createElement("button",{type:"button",onClick:function(e){return l()},className:"btn btn-secondary mx-2 mb-2"},"Add random tip"),r.a.createElement("button",{type:"button",onClick:function(e){return n()},className:"btn btn-secondary mx-2 mb-2"},"Delete all")),r.a.createElement("div",{className:"col-md-4 col-12 d-flex justify-content-center"},r.a.createElement("button",{type:"button",onClick:function(e){return s()},className:"btn btn-danger ml-lg-5 mr-2 mb-2"},"Start"),r.a.createElement("button",{type:"button",onClick:function(e){return c()},className:"btn btn-danger mx-2 mb-2"},"Reset"))))))))},h=a(1),p=a.n(h),b=a(3);function y(e){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(p.a.mark((function e(t){var a,n,r,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="<b>Please add a few tips to your ticket.</b>",0!==t.flat(1).length){for(a="<table>",n=0;n<t.length;n++)if("undefined"!==typeof(r=t[n])[0]){for(a+="<tr><th>#"+n+": </th>",s=0;s<r.length;s++)a+="<th>"+r[s]+"</th>";a+="</tr>"}a+="</table>"}return e.next=4,a;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return E.apply(this,arguments)}function E(){return(E=Object(b.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="<b>No luck yet!</b>",0!==t.flat(1).length){for(a="<table>",n=0;n<t.length;n++)a+=0===n?"<tr><th>Matching numbers</th><th>Amount</th></tr>":"<tr><th>"+n+": </th><th>"+t[n]+"</th></tr>";a+="</table>"}return e.next=4,a;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return w.apply(this,arguments)}function w(){return(w=Object(b.a)(p.a.mark((function e(t,a){var n,r,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[parseInt(a.one),parseInt(a.two),parseInt(a.three),parseInt(a.four),parseInt(a.five),parseInt(a.six)],r=0;case 2:if(!(r<n.length)){e.next=11;break}if(!(!n[r]||n[r]<1||n[r]>12)){e.next=8;break}return alert("Invalid numbers detected!"),e.next=7,[t,!1];case 7:return e.abrupt("return",e.sent);case 8:r++,e.next=2;break;case 11:return s=!1,n.sort((function(e,t){return e-t})),T(n)?alert("Identical numbers detected!"):A(t,n)?alert("Identical tip detected!"):(s=!0,t.push(n)),e.next=16,[t,s];case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=[0,0,0,0,0,0],n=[0,0,0,0,0,0];S(a)||A(t,a);)(a=n.map((function(e,t,a){return Math.floor(12*Math.random())+1}))).sort((function(e,t){return e-t}));return t.push(a),e.next=6,t;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return new Set(e).size!==e.length}function S(e){return e.some((function(t,a){return e.indexOf(t)!==a}))}function A(e,t){for(var a=0;a<e.length;a++){for(var n=!1,r=0;r<e[a].length;r++){if(e[a][r]!==t[r]){n=!1;break}n=!0}if(n)return!0}return!1}function I(e,t,a,n){return C.apply(this,arguments)}function C(){return(C=Object(b.a)(p.a.mark((function e(t,a,n,r){var s,l,c,o,i,m,u,d,f,h,b,y,g;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s=[0,0,0,0,0,0],l=[0,0,0,0,0,0],c=!1,t=D(t),o={weekday:"long",year:"numeric",month:"long",day:"numeric"},i=t.toLocaleDateString(void 0,o);S(s);)s=l.map((function(e,t,a){return Math.floor(12*Math.random())+1}));for(s.sort((function(e,t){return e-t})),m=0,u=0;u<a.length;u++){for(d=a[u],f=0,h=0;h<d.length;h++)d[h]===s[h]&&f++;m<f&&(m=f),r[f]+=1}return b=3e3,y="",6===m&&(c=!0,b=24e3,y=" Jackpot!"),m>2&&((g=document.getElementById("snackbar")).className="show",setTimeout((function(){g.className=g.className.replace("show","")}),b),n=m+" numbers!"+y),e.next=16,O(100);case 16:return e.next=18,[s,n,c,t,i,r];case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){for(var t=100;2!==t&&6!==t;)t=e.getDay(),e.setDate(e.getDate()+1);return e}function O(e){return new Promise((function(t){return setTimeout(t,e)}))}var j=a(2),W=a.n(j),M=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={yourNums:{},ticketNums:[[]],numberOfTips:0,ticketsAsStr:"<b>Please add a few tips to your ticket.</b>",lottoNum1:1,lottoNum2:2,lottoNum3:3,lottoNum4:4,lottoNum5:5,lottoNum6:6,drawingNumber:0,significantWinText:" ",wonLottery:!1,winsAsStr:"<b>No luck yet!</b>",winsAsArray:[0,0,0,0,0,0,0],currDate:new Date,currDateStr:"today",costsSnapshot:0,timeBegin:(new Date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),timeSnapshot:"",gameStarted:!1,costPerTicket:1.2,completed:!1},e.createTip=function(t){!1===e.state.gameStarted?v(e.state.ticketNums,e.state.yourNums).then((function(t){!0===t[1]&&e.setState({ticketNums:t[0].slice(),numberOfTips:e.state.numberOfTips+1})})):alert("Modifying the ticket isn't allowed once the simulation has started.")},e.randomNums=function(t){!1===e.state.gameStarted?k(e.state.ticketNums).then((function(t){e.setState({ticketNums:t.slice(),numberOfTips:e.state.numberOfTips+1})})):alert("Modifying the ticket isn't allowed once the simulation has started.")},e.deleteTicket=function(){!1===e.state.gameStarted?e.setState({ticketNums:[[]],numberOfTips:0}):alert("Modifying the ticket isn't allowed once the simulation has started.")},e.getAllTips=function(){y(e.state.ticketNums).then((function(t){e.setState({ticketsAsStr:t});var a=document.getElementById("myModal"),n=document.getElementById("closeTips");a.style.display="block",n.onclick=function(){a.style.display="none"},window.onclick=function(e){e.target===a&&(a.style.display="none")}}))},e.getAllWins=function(){N(e.state.winsAsArray).then((function(t){e.setState({winsAsStr:t,costsSnapshot:(e.state.drawingNumber*(e.state.ticketNums.length-1)*e.state.costPerTicket).toFixed(2),timeSnapshot:e.state.currDateStr});var a=document.getElementById("winsModal"),n=document.getElementById("closeWins");a.style.display="block",n.onclick=function(){a.style.display="none"},window.onclick=function(e){e.target===a&&(a.style.display="none")}}))},e.startCalcInit=function(){e.state.gameStarted?alert("The simulation has already started!"):e.startCalc(e.state.currDate,e.state.ticketNums,e.state.significantWinText,e.state.winsAsArray)},e.startCalc=function(){I(e.state.currDate,e.state.ticketNums,e.state.significantWinText,e.state.winsAsArray).then((function(t){e.state.numberOfTips>0?(e.setState({gameStarted:!0,drawingNumber:e.state.drawingNumber+1,significantWinText:t[1],lottoNum1:t[0][0],lottoNum2:t[0][1],lottoNum3:t[0][2],lottoNum4:t[0][3],lottoNum5:t[0][4],lottoNum6:t[0][5],currDate:t[3],currDateStr:t[4],winsAsArray:t[5],wonLottery:t[2]}),!1===e.state.wonLottery?e.startCalc(e.state.currDate,e.state.ticketNums,e.state.significantWinText,e.state.winsAsArray,!1):(e.setState({completed:!0}),e.setState({wonLottery:!1}),new Audio("firework_explosion_fizz_002.mp3").play(),new Audio("victory.mp3").play())):alert("Please get a ticket first.")}))},e.resetGame=function(){e.setState({ticketNums:[[]],numberOfTips:0,ticketsAsStr:"<b>Please add a few tips to your ticket.</b>",lottoNum1:1,lottoNum2:2,lottoNum3:3,lottoNum4:4,lottoNum5:5,lottoNum6:6,drawingNumber:0,significantWinText:" ",wonLottery:!1,winsAsStr:"<b>No luck yet!</b>",winsAsArray:[0,0,0,0,0,0,0],currDate:new Date,currDateStr:"today",costsSnapshot:0,timeBegin:(new Date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),timeSnapshot:"",gameStarted:!1,completed:!1})},e.onChangeForm=function(t){var a=e.state.yourNums;"one"===t.target.name?a.one=t.target.value:"two"===t.target.name?a.two=t.target.value:"three"===t.target.name?a.three=t.target.value:"four"===t.target.name?a.four=t.target.value:"five"===t.target.name?a.five=t.target.value:"six"===t.target.name&&(a.six=t.target.value),e.setState({yourNums:a})},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement("div",{className:"container mrgnbtm"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(f,{ticket:this.state.yourNums,onChangeForm:this.onChangeForm,createTip:this.createTip,deleteTicket:this.deleteTicket,startCalc:this.startCalcInit,resetGame:this.resetGame,randomNums:this.randomNums})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(d,{numberOfTips:this.state.numberOfTips,getAllTips:this.getAllTips,getAllWins:this.getAllWins}))),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"Drawing number: ",this.state.drawingNumber)),r.a.createElement("div",{className:"col-md-3 text-md-center text-right"},"Costs: \u20ac ",(this.state.drawingNumber*(this.state.ticketNums.length-1)*this.state.costPerTicket).toFixed(2),",-"),r.a.createElement("div",{className:"col-md-3 text-right"},this.state.currDateStr)),r.a.createElement("div",{className:"row mt-4 mb-5"},r.a.createElement("div",{className:"container mb-5"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement(W.a,{active:this.state.completed}),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum1),r.a.createElement(W.a,{active:this.state.completed}),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum2),r.a.createElement(W.a,{active:this.state.completed}),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum3),r.a.createElement(W.a,{active:this.state.completed}),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum4),r.a.createElement(W.a,{active:this.state.completed}),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum5),r.a.createElement(W.a,{active:this.state.completed}),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum6),r.a.createElement(W.a,{active:this.state.completed}))))),r.a.createElement("div",{id:"snackbar"},this.state.significantWinText),r.a.createElement("div",{id:"myModal",class:"modal"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h2",null,"Lottery Ticket"),r.a.createElement("span",{class:"close",id:"closeTips"},"\xd7")),r.a.createElement("div",{class:"modal-body"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.ticketsAsStr}}),r.a.createElement("p",null,"This is your lottery ticket. It does cost ",((this.state.ticketNums.length-1)*this.state.costPerTicket).toFixed(2)," euros. Take good care of it and don't lose it. Good luck!"),r.a.createElement("p",null,r.a.createElement("b",null,"Disclaimer:")," This program does only simulate a lottery game. This website is not affiliated with any lottery game company. It is merely a simulation and no real money is used in it.")))),r.a.createElement("div",{id:"winsModal",class:"modal"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h2",null,"Wins"),r.a.createElement("span",{class:"close",id:"closeWins"},"\xd7")),r.a.createElement("div",{class:"modal-body"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.winsAsStr}}),r.a.createElement("p",null,"All winnings achieved so far (from ",this.state.timeBegin," to ",this.state.timeSnapshot,") are listed here. You have spent \u20ac ",this.state.costsSnapshot,",- so far."),r.a.createElement("p",null,r.a.createElement("b",null,"Disclaimer:")," This program does only simulate a lottery game. This website is not affiliated with any lottery game company. It is merely a simulation and no real money is used in it.")))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.d63de57e.chunk.js.map