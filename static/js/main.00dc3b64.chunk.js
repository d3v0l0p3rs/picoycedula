(this["webpackJsonpbase-app"]=this["webpackJsonpbase-app"]||[]).push([[0],{14:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return m}));var a=n(12),r="deft.soluciones@gmail.com",c={issue:"?subject=Reporte%de%20un%20problema",contact:"?subject=Quiero%20contactar%20con%20ustedes"},o={CALI:"Cali",BOGOTA:"Bogot\xe1"},l={CALI:"https://twitter.com/AlcaldiaDeCali",BOGOTA:"https://twitter.com/Bogota"},i={CALI:{"20/08/01":[1,3,5,7,9],"20/08/02":[0,2,4,6,8],"20/08/03":[1,3,5,7,9],"20/08/04":[0,2,4,6,8],"20/08/05":[1,3,5,7,9],"20/08/06":[0,2,4,6,8],"20/08/07":[1,3,5,7,9],"20/08/08":[0,2,4,6,8],"20/08/09":[1,3,5,7,9],"20/08/10":[0,2,4,6,8],"20/08/11":[1,3,5,7,9],"20/08/12":[0,2,4,6,8],"20/08/13":[1,3,5,7,9],"20/08/14":[0,2,4,6,8],"20/08/15":[1,3,5,7,9],"20/08/16":[0,2,4,6,8],"20/08/17":[1,3,5,7,9],"20/08/18":[0,2,4,6,8],"20/08/19":[1,3,5,7,9],"20/08/20":[0,2,4,6,8],"20/08/21":[1,3,5,7,9],"20/08/22":[0,2,4,6,8],"20/08/23":[1,3,5,7,9],"20/08/24":[0,2,4,6,8],"20/08/25":[1,3,5,7,9],"20/08/26":[0,2,4,6,8],"20/08/27":[1,3,5,7,9],"20/08/28":[0,2,4,6,8],"20/08/29":[1,3,5,7,9],"20/08/30":[0,2,4,6,8],"20/08/31":[1,3,5,7,9]},BOGOTA:{"20/08/05":[1,3,5,7,9],"20/08/06":[0,2,4,6,8],"20/08/07":[1,3,5,7,9],"20/08/08":[0,2,4,6,8],"20/08/09":[1,3,5,7,9]}},s={CALI:{"20/07/31":[2,0]},BOGOTA:{}},u={CALI:{0:[],1:[3,4],2:[5,6],3:[7,8],4:[9,0],5:[1,2],6:[]},BOGOTA:{0:[],1:[0,2,4,6,8],2:[1,3,5,7,9],3:[0,2,4,6,8],4:[1,3,5,7,9],5:[0,2,4,6,8],6:[]}},m=function(e,t,n){if("person"===e)return i[t][n]||null;if("vehicle"===e){var r=s[t][n]||null;if(!r){var c=n.split("/").map((function(e,t){return parseInt(e)+(0===t?2e3:0)})),o=Object(a.a)(c,3),l=o[0],m=o[1],d=o[2],p=new Date(l,m-1,d);r=u[t][p.getDay()]}return r?[0,1,2,3,4,5,6,7,8,9].filter((function(e){return!r.includes(e)})):null}return null}},38:function(e,t,n){"use strict";var a=n(63);n.o(a,"cities")&&n.d(t,"cities",(function(){return a.cities}));var r=n(64);n.o(r,"cities")&&n.d(t,"cities",(function(){return r.cities}));var c=n(14);n.d(t,"cities",(function(){return c.a}))},39:function(e,t,n){e.exports={selectOtherDigitButton:"scss_selectOtherDigitButton__2vxfg",msgsContainer:"scss_msgsContainer__I4kQf",weekMsgsContainer:"scss_weekMsgsContainer__2c6DL",digitButton:"scss_digitButton__1C6dw"}},53:function(e,t,n){e.exports={selectedCity:"scss_selectedCity__pyIRS"}},63:function(e,t){},64:function(e,t){},81:function(e,t,n){e.exports=n(95)},86:function(e,t,n){},87:function(e,t,n){},91:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),l=(n(86),n(87),n(149)),i=n(19),s=n(12),u=n(14),m=function(e,t,n,a){var r,c;null!==e?function(e){localStorage.setItem("id",e+"")}(e):localStorage.removeItem("id"),null!==t?function(e){localStorage.setItem("plate",e+"")}(t):localStorage.removeItem("plate"),null!==n?(r=n,localStorage.setItem("placityte",r)):localStorage.removeItem("placityte"),null!==a?(c=a?"dark":"light",localStorage.setItem("theme",c)):localStorage.removeItem("theme")},d=n(72),p=n(135),y=r.a.createContext((function(){})),f=function(e){var t=Object(d.a)({});return r.a.createElement(y.Provider,{value:function(){}},r.a.createElement(p.a,{theme:t},e.children))},E=Object(d.a)({palette:{type:"dark",primary:{main:"#3949ab"},secondary:{main:"#40c4ff"},text:{secondary:"#e0e0e0"}}}),v=Object(d.a)({palette:{primary:{main:"#3949ab"},secondary:{main:"#3949ab"},text:{secondary:"#e0e0e0"}}}),h=n(38),b={title:"Pico y C\xe9dula",pickLastCCNumber:"Seleccione el \xfaltimo d\xedgito de su c\xe9dula",pickLastPlateNumber:"Seleccione el \xfaltimo d\xedgito de su placa",pickAnotherLastNumber:"Seleccionar otro d\xedgito",reportIssue:"Reportar un problema",contact:"Cont\xe1ctenos",infoSource:"Fuente",default:"\xaf\\_(\u30c4)_/\xaf"},g=function(e){return b[e]||b.default},O=n(96),N=n(140),C=n(141),k=n(139),D=n(136),I=function(){var e=Object(a.useState)("CALI"),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!0),l=Object(s.a)(o,2),i=l[0],d=l[1],y=Object(a.useState)(null),f=Object(s.a)(y,2),h=f[0],b=f[1],I=Object(a.useState)("UNDEFINED"),S=Object(s.a)(I,2),w=S[0],j=S[1],x=Object(a.useState)([]),G=Object(s.a)(x,2),R=G[0],L=G[1],T=Object(a.useState)(null),A=Object(s.a)(T,2),B=A[0],W=A[1],_=Object(a.useState)("UNDEFINED"),F=Object(s.a)(_,2),M=F[0],P=F[1],U=Object(a.useState)([]),Y=Object(s.a)(U,2),z=Y[0],H=Y[1],J=function(){var e=function(){var e=localStorage.getItem("id");return e?parseInt(e):null}(),t=function(){var e=localStorage.getItem("plate");return e?parseInt(e):null}(),n=localStorage.getItem("placityte")||"CALI",a="dark"===localStorage.getItem("theme");b(e),W(t),c(n),d(a),null!==e&&j(le(e,"person",n)),null!==e&&L(ie(e,"person",n)),null!==t&&P(le(t,"vehicle",n)),null!==t&&H(ie(t,"vehicle",n))};return Object(a.useEffect)((function(){return J()}),[]),Object(a.useEffect)((function(){m(h,B,n,i)})),r.a.createElement(p.a,{theme:i?E:v},r.a.createElement(D.a,null),r.a.createElement("div",{className:"App"},r.a.createElement(X,{currentCity:n,darkMode:i,setDarkMode:d,setCurrentCity:c,personIDNumber:h,vehicleIDNumber:B}),r.a.createElement(k.a,{container:!0,spacing:0},r.a.createElement(k.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{paddingTop:"25px"}},r.a.createElement(ue,{entity:"person",IDNumber:h,canGoOutToday:w,canGoOutWeek:R,currentCity:n,setIDNumber:b,setCanGoOutToday:j,setCanGoOutWeek:L}),r.a.createElement(N.a,{variant:"middle"})),r.a.createElement(k.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{paddingTop:"25px"}},r.a.createElement(ue,{entity:"vehicle",IDNumber:B,canGoOutToday:M,canGoOutWeek:z,currentCity:n,setIDNumber:W,setCanGoOutToday:P,setCanGoOutWeek:H}),r.a.createElement(N.a,{variant:"middle"}))),r.a.createElement(O.a,{style:{paddingTop:"20px",paddingBottom:"5px"}},r.a.createElement(C.a,{href:"mailto:".concat(u.b).concat(u.e.issue),color:"secondary"},g("reportIssue"))," | ",r.a.createElement(C.a,{href:u.d[n],color:"secondary",target:"_blank",rel:"noopener"},g("infoSource"))," | ",r.a.createElement(C.a,{href:"mailto:".concat(u.b).concat(u.e.contact),color:"secondary"},g("contact")))))},S=(n(91),n(142)),w=n(143),j=n(144),x=n(32),G=n.n(x),R=n(49),L=n.n(R),T=n(25),A=n.n(T),B=n(33),W=n.n(B),_=function(e){return{YES:"#009933",NO:"#b00020",ERROR:"#cc6600",UNDEFINED:"#1976d0"}[e]},F=function(e){return r.a.createElement(S.a,{style:(t=e.canGoOut,{border:{YES:"3px solid "+_(t),NO:"3px solid "+_(t),ERROR:"3px solid "+_(t),UNDEFINED:"3px solid "+_(t)}[t],display:"inline-block",margin:"25px 40px",height:"160px",width:"200px",transition:"all .5s ease",WebkitTransition:"all .5s ease",MozTransition:"all .5s ease"})},r.a.createElement(w.a,{style:{height:"100%"}},r.a.createElement(O.a,{style:{color:_(e.canGoOut)}},function(e,t){var n={fontSize:"80px"};return{YES:{person:r.a.createElement(G.a,{style:n}),vehicle:r.a.createElement(G.a,{style:n})},NO:{person:r.a.createElement(W.a,{style:n}),vehicle:r.a.createElement(W.a,{style:n})},ERROR:{person:r.a.createElement(L.a,{style:n}),vehicle:r.a.createElement(A.a,{style:n})},UNDEFINED:{person:r.a.createElement(A.a,{style:n}),vehicle:r.a.createElement(A.a,{style:n})}}[e][t]}(e.canGoOut,e.entity)),r.a.createElement(j.a,{style:{padding:"0px"}},r.a.createElement(O.a,{gutterBottom:!0,variant:"h6"},e.text))));var t},M=n(147),P=n(53),U=n.n(P),Y=n(150),z=n(152),H=n(145),J=n(146),Q=n(97),V=n(71),$=n.n(V),q=n(70),K=n.n(q),X=function(e){return r.a.createElement(H.a,{position:"sticky"},r.a.createElement(J.a,null,r.a.createElement(O.a,{variant:"h5",style:{color:"white"}},g("title")),e.darkMode?r.a.createElement(Q.a,{style:{marginLeft:"auto",color:"white"},onClick:function(){e.setDarkMode(!1)}},r.a.createElement(K.a,null)):r.a.createElement(Q.a,{style:{marginLeft:"auto",color:"white"},onClick:function(){e.setDarkMode(!0)}},r.a.createElement($.a,null)),r.a.createElement(Y.a,{value:e.currentCity,style:{marginLeft:"auto",color:"white"},onChange:function(t){e.setCurrentCity(t.target.value)},className:U.a.selectedCity},Object.entries(u.a).map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return r.a.createElement(z.a,{key:n,value:n,className:U.a.cityContainer},a)})))),r.a.createElement(M.a,{in:null!==e.personIDNumber||null!==e.vehicleIDNumber},r.a.createElement(O.a,{variant:"subtitle1",color:"textSecondary",style:{width:"fit-content",paddingLeft:"20px",lineHeight:"20px"}},null!==e.personIDNumber?"C\xe9dula: ..."+e.personIDNumber:"",null!==e.personIDNumber&&null!==e.vehicleIDNumber?" | ":"",null!==e.vehicleIDNumber?"Placa: ..."+e.vehicleIDNumber:"")))},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e||new Date,n=function(e){return e<10?"0"+e:e>=100?""+(e-2e3):""+e},a="".concat(n(t.getFullYear()),"/").concat(n(t.getMonth()+1),"/").concat(n(t.getDate()));return a},ee={0:"Domingo",1:"Lunes",2:"Martes",3:"Mi\xe9rcoles",4:"Jueves",5:"Viernes",6:"S\xe1bado"},te=[1,2,3,4,5,6,7,8,9,0],ne=n(151),ae=n(148),re=n(39),ce=n.n(re),oe=function(e,t,n,a){return function(r){a.set(e),a.day(le(e,t,n)),a.week(ie(e,t,n))}},le=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=Object(u.c)(t,n,a||Z());return r?r.some((function(t){return t===e}))?"YES":"NO":"ERROR"},ie=function(e,t,n){var a=function(){for(var e=new Date,t=e.getDate(),n=[],a=0;a<=6;a++)n.push(Z(new Date(e.setDate(t+a))));return n}(),r=(new Date).getDay(),c=[];return a.forEach((function(a){c.push({canGoOut:le(e,t,n,a),day:ee[r%7],date:a}),r+=1})),c},se=function(e,t,n,a,r){a(e.currentTarget),r(t),n(!0)},ue=function(e){var t,n,c=Object(a.useState)(!1),o=Object(s.a)(c,2),l=o[0],i=o[1],m=Object(a.useState)(""),d=Object(s.a)(m,2),p=d[0],y=d[1],f=Object(a.useState)(null),E=Object(s.a)(f,2),v=E[0],b=E[1];return r.a.createElement("div",null,r.a.createElement(M.a,{in:null===e.IDNumber},r.a.createElement(O.a,{variant:"h6",color:"textPrimary"},{person:g("pickLastCCNumber"),vehicle:g("pickLastPlateNumber")}[e.entity])),r.a.createElement(M.a,{in:null!==e.IDNumber},r.a.createElement(Q.a,{color:"secondary",onClick:function(){e.setIDNumber(null),e.setCanGoOutToday("UNDEFINED"),e.setCanGoOutWeek([])},className:ce.a.selectOtherDigitButton,variant:"outlined",component:"span"},r.a.createElement(O.a,{variant:"body1",color:"textPrimary"},g("pickAnotherLastNumber")))),r.a.createElement(M.a,{in:null===e.IDNumber},r.a.createElement(r.a.Fragment,null,te.map((function(t,n){return function(e,t,n,a,c){return r.a.createElement(r.a.Fragment,null,t%3===0?r.a.createElement("br",null):"",r.a.createElement(Q.a,{key:t,className:ce.a.digitButton,onClick:oe(e,n,a,{set:c.setIDNumber,day:c.setCanGoOutToday,week:c.setCanGoOutWeek}),color:"secondary",variant:"outlined",component:"span"},e))}(t,n,e.entity,e.currentCity,{setIDNumber:e.setIDNumber,setCanGoOutToday:e.setCanGoOutToday,setCanGoOutWeek:e.setCanGoOutWeek})})))),r.a.createElement("div",null,r.a.createElement(F,{canGoOut:e.canGoOutToday,entity:e.entity,text:(t=e.canGoOutToday,n=e.entity,{YES:{person:"Puedes salir",vehicle:"Puedes conducir"},NO:{person:"Qu\xe9date en casa",vehicle:"NO puedes conducir"},ERROR:{person:"No encontramos informaci\xf3n actual",vehicle:"No encontramos informaci\xf3n actual"},UNDEFINED:{person:"Seleccione un d\xedgito",vehicle:"Seleccione un d\xedgito"}}[t][n])})),r.a.createElement("div",{className:ce.a.msgsContainer},Object(u.c)(e.entity,e.currentCity,Z())?r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{variant:"body1",color:"textPrimary",style:{paddingBottom:"10px"}},function(e,t){return{person:"Hoy pueden salir en ".concat(h.cities[t]," las personas cuyos n\xfameros de c\xe9dula terminen en "),vehicle:"Hoy pueden rodar en ".concat(h.cities[t]," los veh\xedculos cuyas placas terminen en ")}[e]}(e.entity,e.currentCity)),r.a.createElement(ae.a,{color:"secondary",variant:"text",size:"large"},(Object(u.c)(e.entity,e.currentCity,Z())||[]).map((function(t,n){return r.a.createElement(Q.a,{style:{display:"block"},color:"secondary",key:n,onClick:function(t){se(t,function(e){return{person:"Las personas con c\xe9dulas terminadas en estos n\xfameros pueden salir hoy",vehicle:"Los veh\xedculos con placas terminadas en estos n\xfameros NO pueden salir hoy"}[e]}(e.entity),i,b,y)}},t)})))):r.a.createElement(O.a,{variant:"body1",color:"textPrimary",style:{paddingBottom:"10px"}},function(e,t){return{person:"No hay datos para pico y c\xe9dula en ".concat(h.cities[t]," el d\xeda de hoy"),vehicle:"No hay datos para pico y placa en ".concat(h.cities[t]," el d\xeda de hoy")}[e]}(e.entity,e.currentCity))),r.a.createElement(M.a,{in:e.canGoOutWeek.length>0},r.a.createElement("div",{className:ce.a.weekMsgsContainer},r.a.createElement(ae.a,{color:"secondary",variant:"text",size:"small",style:{width:"350px"}},e.canGoOutWeek.map((function(t,n){return r.a.createElement(Q.a,{style:{display:"block"},color:"secondary",key:n,onClick:function(n){se(n,function(e,t,n,a,r){var c=n.split("/").reverse().join("/");if(c=c.slice(0,6)+"20"+c.slice(6),"ERROR"===t)return"No hay informaci\xf3n disponible para el d\xeda ".concat(c," (").concat(a,") en ").concat(r);var o={person:"salir",vehicle:"manejar"}[e];return"Usted ".concat("YES"===t?"S\xcd":"NO"," puede ").concat(o," el d\xeda ").concat(c," (").concat(a,") en ").concat(r)}(e.entity,t.canGoOut,t.date,t.day,e.currentCity),i,b,y)}},t.day.slice(0,3)," ",t.date.slice(3).split("/").reverse().join("/"),r.a.createElement(O.a,{style:{color:_(t.canGoOut)}},function(e,t){return{YES:{person:r.a.createElement(G.a,null),vehicle:r.a.createElement(G.a,null)},NO:{person:r.a.createElement(W.a,null),vehicle:r.a.createElement(W.a,null)},ERROR:{person:r.a.createElement(L.a,null),vehicle:r.a.createElement(A.a,null)},UNDEFINED:{person:r.a.createElement(A.a,null),vehicle:r.a.createElement(A.a,null)}}[e][t]}(t.canGoOut,e.entity)))}))),r.a.createElement(ne.a,{open:l,anchorEl:v,onClose:function(){!function(e,t,n){t(null),n(""),e(!1)}(i,b,y)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},p))))},me=Object(i.a)(),de=function(){return r.a.createElement(l.b,{history:me},r.a.createElement("div",null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"*",component:I}))))},pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null,r.a.createElement(de,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/picoycedula",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/picoycedula","/service-worker.js");pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ye(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ye(t,e)}))}}()}},[[81,1,2]]]);
//# sourceMappingURL=main.00dc3b64.chunk.js.map