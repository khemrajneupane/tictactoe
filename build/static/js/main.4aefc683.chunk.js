(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),s=t.n(c),l=(t(9),t(10),t(11),t(1)),o=function(){var e=Object(n.useState)("X"),a=Object(l.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(!1),o=Object(l.a)(s,2),i=o[0],u=o[1],d=Object(n.useState)(""),m=Object(l.a)(d,2),v=m[0],q=m[1],E=Object(n.useState)(Array(9).fill("")),f=Object(l.a)(E,2),g=f[0],w=f[1],b=Object(n.useState)(0),h=Object(l.a)(b,2),O=h[0],j=h[1],N=Object(n.useState)(""),p=Object(l.a)(N,2),S=p[0],k=p[1];console.log("board",g);var T=function(){for(var e=[[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]],a=0;a<e.length;a++)if(g[e[a][0]]===g[e[a][1]]&&g[e[a][1]]===g[e[a][2]])return g[e[a][0]];if(8===O)return"draw"};return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,"TicTacToe"),v&&"draw"!==v?r.a.createElement("div",null,"The winner is ",v,S?r.a.createElement("div",null,S):null):null,v&&"draw"===v?r.a.createElement("div",null,"the game is a draw"):null,r.a.createElement("div",{id:"blocks",onClick:function(e){return function(e){""!==g[e.target.dataset.square]||v?v&&k("Game ended! ".concat(v," won!")):(g[e.target.dataset.square]=t,e.target.innerText=t,w(g),c("X"===t?"O":"X"),j(O+1)),console.log(e.target.dataset.square);var a=T();"X"===a?(u(!i),q("X"),console.log("hi winner")):"O"===a?(u(!i),q("O"),console.log("hi loser")):"draw"===a&&(u(!i),q("draw"))}(e)}},r.a.createElement("div",{className:"square","data-square":"0"}),r.a.createElement("div",{className:"square","data-square":"1"}),r.a.createElement("div",{className:"square","data-square":"2"}),r.a.createElement("div",{className:"square","data-square":"3"}),r.a.createElement("div",{className:"square","data-square":"4"}),r.a.createElement("div",{className:"square","data-square":"5"}),r.a.createElement("div",{className:"square","data-square":"6"}),r.a.createElement("div",{className:"square","data-square":"7"}),r.a.createElement("div",{className:"square","data-square":"8"})),r.a.createElement("div",null))};var i=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.4aefc683.chunk.js.map