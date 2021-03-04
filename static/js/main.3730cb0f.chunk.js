(this["webpackJsonplottery-app"]=this["webpackJsonplottery-app"]||[]).push([[0],{11:function(t,e,a){t.exports=a(20)},16:function(t,e,a){},18:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(4),l=a.n(s),c=(a(16),a(8)),o=a(5),i=a(6),m=a(10),u=a(9),d=(a(17),a(18),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("a",{href:"https://gh28942.github.io/lottery-simulator/overview.html",class:"mr-4 align-self-center"},r.a.createElement("img",{src:"./logo112.png",alt:"lotto logo",height:"40",width:"40"})),r.a.createElement("h1",null,"Austrian Lottery Simulator")))}),f=function(t){var e=t.numberOfTips,a=t.getAllTips,n=t.getAllWins;return r.a.createElement("div",{className:"display-board"},r.a.createElement("h4",null,"Tips on your ticket"),r.a.createElement("div",{className:"number"},e),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"btn"},r.a.createElement("button",{type:"button",onClick:function(t){return a()},className:"btn btn-warning"},"View ticket")),r.a.createElement("div",{className:"btn float-right"},r.a.createElement("button",{type:"button",onClick:function(t){return n()},className:"btn btn-warning"},"View wins")))))},h=function(t){var e=t.onChangeForm,a=t.createTip,n=t.deleteTicket,s=t.startCalc,l=t.randomNums,c=t.resetGame;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 mrgnbtm"},r.a.createElement("h2",null,"Fill out your lottery ticket "),r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"text-center"},"1"))),r.a.createElement("input",{type:"text",onChange:function(t){return e(t)},className:"form-control",name:"one",id:"one",placeholder:"1 - 45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"2"))),r.a.createElement("input",{type:"text",onChange:function(t){return e(t)},className:"form-control",name:"two",id:"two",placeholder:"1 - 45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword2"},"3"))),r.a.createElement("input",{type:"number",onChange:function(t){return e(t)},className:"form-control",name:"three",id:"three",placeholder:"1 - 45",min:"1",max:"45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword3"},"4"))),r.a.createElement("input",{type:"number",onChange:function(t){return e(t)},className:"form-control",name:"four",id:"four",placeholder:"1 - 45",min:"1",max:"45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword4"},"5"))),r.a.createElement("input",{type:"number",onChange:function(t){return e(t)},className:"form-control",name:"five",id:"five",placeholder:"1 - 45",min:"1",max:"45"})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("label",{htmlFor:"exampleInputPassword6"},"6"))),r.a.createElement("input",{type:"number",onChange:function(t){return e(t)},className:"form-control",name:"six",id:"six",placeholder:"1 - 45",min:"1",max:"45"}))),r.a.createElement("div",{className:"d-flex justify-content-center mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 col-12 d-flex justify-content-center"},r.a.createElement("button",{type:"button",onClick:function(t){return a()},className:"btn btn-secondary mx-2 mb-2"},"Add tip"),r.a.createElement("button",{type:"button",onClick:function(t){return l()},className:"btn btn-secondary mx-2 mb-2"},"Add random tip"),r.a.createElement("button",{type:"button",onClick:function(t){return n()},className:"btn btn-secondary mx-2 mb-2"},"Delete all")),r.a.createElement("div",{className:"col-md-4 col-12 d-flex justify-content-center"},r.a.createElement("button",{type:"button",onClick:function(t){return s()},className:"btn btn-danger ml-lg-5 mr-2 mb-2"},"Start"),r.a.createElement("button",{type:"button",onClick:function(t){return c()},className:"btn btn-danger mx-2 mb-2"},"Reset"))))))))},p=a(1),b=a.n(p),y=a(2);function g(t){return N.apply(this,arguments)}function N(){return(N=Object(y.a)(b.a.mark((function t(e){var a,n,r,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="<b>Please add a few tips to your ticket.</b>",0!==e.flat(1).length){for(a="<table>",n=0;n<e.length;n++)if("undefined"!==typeof(r=e[n])[0]){for(a+="<tr><th>#"+n+": </th>",s=0;s<r.length;s++)a+="<th>"+r[s]+"</th>";a+="</tr>"}a+="</table>"}return t.next=4,a;case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t){return v.apply(this,arguments)}function v(){return(v=Object(y.a)(b.a.mark((function t(e){var a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="<b>No luck yet!</b>",0!==e.flat(1).length){for(a="<table>",n=0;n<e.length;n++)a+=0===n?"<tr><th>Matching numbers</th><th>Amount</th></tr>":"<tr><th>"+n+": </th><th>"+e[n]+"</th></tr>";a+="</table>"}return t.next=4,a;case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e){return k.apply(this,arguments)}function k(){return(k=Object(y.a)(b.a.mark((function t(e,a){var n,r,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[parseInt(a.one),parseInt(a.two),parseInt(a.three),parseInt(a.four),parseInt(a.five),parseInt(a.six)],r=0;case 2:if(!(r<n.length)){t.next=11;break}if(!(!n[r]||n[r]<1||n[r]>45)){t.next=8;break}return alert("Invalid numbers detected!"),t.next=7,[e,!1];case 7:return t.abrupt("return",t.sent);case 8:r++,t.next=2;break;case 11:return s=!1,n.sort((function(t,e){return t-e})),S(n)?alert("Identical numbers detected!"):C(e,n)?alert("Identical tip detected!"):(s=!0,e.push(n)),t.next=16,[e,s];case 16:return t.abrupt("return",t.sent);case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return T.apply(this,arguments)}function T(){return(T=Object(y.a)(b.a.mark((function t(e){var a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=[0,0,0,0,0,0],n=[0,0,0,0,0,0];A(a)||C(e,a);)(a=n.map((function(t,e,a){return Math.floor(45*Math.random())+1}))).sort((function(t,e){return t-e}));return e.push(a),t.next=6,e;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t){return new Set(t).size!==t.length}function A(t){return t.some((function(e,a){return t.indexOf(e)!==a}))}function C(t,e){for(var a=0;a<t.length;a++){for(var n=!1,r=0;r<t[a].length;r++){if(t[a][r]!==e[r]){n=!1;break}n=!0}if(n)return!0}return!1}function I(t,e,a,n){return D.apply(this,arguments)}function D(){return(D=Object(y.a)(b.a.mark((function t(e,a,n,r){var s,l,c,o,i,m,u,d,f,h,p;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(s=[0,0,0,0,0,0],l=[0,0,0,0,0,0],c=!1,e=O(e),o={weekday:"long",year:"numeric",month:"long",day:"numeric"},i=e.toLocaleDateString(void 0,o);A(s);)s=l.map((function(t,e,a){return Math.floor(12*Math.random())+1}));for(s.sort((function(t,e){return t-e})),m=0,u=0;u<a.length;u++){for(d=a[u],f=0,h=0;h<d.length;h++)d[h]===s[h]&&f++;m<f&&(m=f),r[f]+=1}return 6===m?c=!0:m>2&&((p=document.getElementById("snackbar")).className="show",setTimeout((function(){p.className=p.className.replace("show","")}),3e3),n=m+" numbers!"),t.next=13,j(100);case 13:return t.next=15,[s,n,c,e,i,r];case 15:return t.abrupt("return",t.sent);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t){for(var e=100;2!==e&&6!==e;)e=t.getDay(),t.setDate(t.getDate()+1);return t}function j(t){return new Promise((function(e){return setTimeout(e,t)}))}var W=a(22),M=a(23),P=a(7),F=a.n(P),L=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=e.call.apply(e,[this].concat(s))).state={yourNums:{},ticketNums:[[]],numberOfTips:0,ticketsAsStr:"<b>Please add a few tips to your ticket.</b>",lottoNum1:1,lottoNum2:2,lottoNum3:3,lottoNum4:4,lottoNum5:5,lottoNum6:6,drawingNumber:0,significantWinText:" ",wonLottery:!1,winsAsStr:"<b>No luck yet!</b>",winsAsArray:[0,0,0,0,0,0,0],currDate:new Date,currDateStr:"today",costsSnapshot:0,timeBegin:(new Date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),timeSnapshot:"",gameStarted:!1,costPerTicket:1.2},t.createTip=function(e){!1===t.state.gameStarted?w(t.state.ticketNums,t.state.yourNums).then((function(e){!0===e[1]&&t.setState({ticketNums:e[0].slice(),numberOfTips:t.state.numberOfTips+1})})):alert("Modifying the ticket isn't allowed once the simulation has started.")},t.randomNums=function(e){!1===t.state.gameStarted?x(t.state.ticketNums).then((function(e){t.setState({ticketNums:e.slice(),numberOfTips:t.state.numberOfTips+1})})):alert("Modifying the ticket isn't allowed once the simulation has started.")},t.deleteTicket=function(){!1===t.state.gameStarted?t.setState({ticketNums:[[]],numberOfTips:0}):alert("Modifying the ticket isn't allowed once the simulation has started.")},t.getAllTips=function(){g(t.state.ticketNums).then((function(e){t.setState({ticketsAsStr:e});var a=document.getElementById("myModal"),n=document.getElementById("closeTips");a.style.display="block",n.onclick=function(){a.style.display="none"},window.onclick=function(t){t.target===a&&(a.style.display="none")}}))},t.getAllWins=function(){E(t.state.winsAsArray).then((function(e){t.setState({winsAsStr:e,costsSnapshot:(t.state.drawingNumber*(t.state.ticketNums.length-1)*t.state.costPerTicket).toFixed(2),timeSnapshot:t.state.currDateStr});var a=document.getElementById("winsModal"),n=document.getElementById("closeWins");a.style.display="block",n.onclick=function(){a.style.display="none"},window.onclick=function(t){t.target===a&&(a.style.display="none")}}))},t.startCalcInit=function(){t.state.gameStarted?alert("The simulation has already started!"):(t.startConfetti(),t.startCalc(t.state.currDate,t.state.ticketNums,t.state.significantWinText,t.state.winsAsArray))},t.startCalc=function(){I(t.state.currDate,t.state.ticketNums,t.state.significantWinText,t.state.winsAsArray).then((function(e){t.state.numberOfTips>0?(t.setState({gameStarted:!0,drawingNumber:t.state.drawingNumber+1,significantWinText:e[1],lottoNum1:e[0][0],lottoNum2:e[0][1],lottoNum3:e[0][2],lottoNum4:e[0][3],lottoNum5:e[0][4],lottoNum6:e[0][5],currDate:e[3],currDateStr:e[4],winsAsArray:e[5],wonLottery:e[2]}),!1===t.state.wonLottery?t.startCalc(t.state.currDate,t.state.ticketNums,t.state.significantWinText,t.state.winsAsArray,!1):(t.setState({wonLottery:!1}),alert("You won the Jackpot!"))):alert("Please get a ticket first.")}))},t.resetGame=function(){t.setState({ticketNums:[[]],numberOfTips:0,ticketsAsStr:"<b>Please add a few tips to your ticket.</b>",lottoNum1:1,lottoNum2:2,lottoNum3:3,lottoNum4:4,lottoNum5:5,lottoNum6:6,drawingNumber:0,significantWinText:" ",wonLottery:!1,winsAsStr:"<b>No luck yet!</b>",winsAsArray:[0,0,0,0,0,0,0],currDate:new Date,currDateStr:"today",costsSnapshot:0,timeBegin:(new Date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),timeSnapshot:"",gameStarted:!1})},t.startConfetti=function(){var t=Object(W.a)(),e=t.width,a=t.height,n=Object(M.a)(4e3),s=Object(c.a)(n,1)[0];return r.a.createElement(F.a,{width:e,height:a,recycle:!s()})},t.onChangeForm=function(e){var a=t.state.yourNums;"one"===e.target.name?a.one=e.target.value:"two"===e.target.name?a.two=e.target.value:"three"===e.target.name?a.three=e.target.value:"four"===e.target.name?a.four=e.target.value:"five"===e.target.name?a.five=e.target.value:"six"===e.target.name&&(a.six=e.target.value),t.setState({yourNums:a})},t}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("div",{className:"container mrgnbtm"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(h,{ticket:this.state.yourNums,onChangeForm:this.onChangeForm,createTip:this.createTip,deleteTicket:this.deleteTicket,startCalc:this.startCalcInit,resetGame:this.resetGame,randomNums:this.randomNums})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(f,{numberOfTips:this.state.numberOfTips,getAllTips:this.getAllTips,getAllWins:this.getAllWins}))),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"Drawing number: ",this.state.drawingNumber)),r.a.createElement("div",{className:"col-md-3 text-md-center text-right"},"Costs: \u20ac ",(this.state.drawingNumber*(this.state.ticketNums.length-1)*this.state.costPerTicket).toFixed(2),",-"),r.a.createElement("div",{className:"col-md-3 text-right"},this.state.currDateStr)),r.a.createElement("div",{className:"row mt-4 mb-5"},r.a.createElement("div",{className:"container mb-5"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum1),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum2),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum3),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum4),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum5),r.a.createElement("button",{type:"button",class:"btn btn-default btn-circle btn-xl"},this.state.lottoNum6))))),r.a.createElement("div",{id:"snackbar"},this.state.significantWinText),r.a.createElement("div",{id:"myModal",class:"modal"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h2",null,"Lottery Ticket"),r.a.createElement("span",{class:"close",id:"closeTips"},"\xd7")),r.a.createElement("div",{class:"modal-body"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.ticketsAsStr}}),r.a.createElement("p",null,"This is your lottery ticket. It does cost ",((this.state.ticketNums.length-1)*this.state.costPerTicket).toFixed(2)," euros. Take good care of it and don't lose it. Good luck!"),r.a.createElement("p",null,r.a.createElement("b",null,"Disclaimer:")," This program does only simulate a lottery game. This website is not affiliated with any lottery game company. It is merely a simulation and no real money is used in it.")))),r.a.createElement("div",{id:"winsModal",class:"modal"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h2",null,"Wins"),r.a.createElement("span",{class:"close",id:"closeWins"},"\xd7")),r.a.createElement("div",{class:"modal-body"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.winsAsStr}}),r.a.createElement("p",null,"All winnings achieved so far (from ",this.state.timeBegin," to ",this.state.timeSnapshot,") are listed here. You have spent \u20ac ",this.state.costsSnapshot,",- so far."),r.a.createElement("p",null,r.a.createElement("b",null,"Disclaimer:")," This program does only simulate a lottery game. This website is not affiliated with any lottery game company. It is merely a simulation and no real money is used in it.")))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.3730cb0f.chunk.js.map