(this["webpackJsonpbase-app"]=this["webpackJsonpbase-app"]||[]).push([[0],{36:function(e,t,a){e.exports={selectOtherDigitButton:"scss_selectOtherDigitButton__2vxfg",msgsContainer:"scss_msgsContainer__I4kQf",weekMsgsContainer:"scss_weekMsgsContainer__2c6DL",digitButton:"scss_digitButton__1C6dw"}},48:function(e,t,a){e.exports={selectedCity:"scss_selectedCity__pyIRS"}},73:function(e,t,a){e.exports=a(87)},78:function(e,t,a){},79:function(e,t,a){},83:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(78),a(79),a(142)),i=a(17),s=a(12),u="deft.soluciones@gmail.com",m="?subject=Reporte%de%20un%20problema",d="?subject=Quiero%20contactar%20con%20ustedes",p={CALI:"Cali",BOGOTA:"Bogot\xe1"},y={CALI:"https://twitter.com/AlcaldiaDeCali",BOGOTA:"https://twitter.com/Bogota"},E={CALI:{"20/08/01":[1,3,5,7,9],"20/08/02":[0,2,4,6,8],"20/08/03":[1,3,5,7,9],"20/08/04":[0,2,4,6,8],"20/08/05":[1,3,5,7,9],"20/08/06":[0,2,4,6,8],"20/08/07":[1,3,5,7,9],"20/08/08":[0,2,4,6,8],"20/08/09":[1,3,5,7,9],"20/08/10":[0,2,4,6,8],"20/08/11":[1,3,5,7,9],"20/08/12":[0,2,4,6,8],"20/08/13":[1,3,5,7,9],"20/08/14":[0,2,4,6,8],"20/08/15":[1,3,5,7,9],"20/08/16":[0,2,4,6,8],"20/08/17":[1,3,5,7,9],"20/08/18":[0,2,4,6,8],"20/08/19":[1,3,5,7,9],"20/08/20":[0,2,4,6,8],"20/08/21":[1,3,5,7,9],"20/08/22":[0,2,4,6,8],"20/08/23":[1,3,5,7,9],"20/08/24":[0,2,4,6,8],"20/08/25":[1,3,5,7,9],"20/08/26":[0,2,4,6,8],"20/08/27":[1,3,5,7,9],"20/08/28":[0,2,4,6,8],"20/08/29":[1,3,5,7,9],"20/08/30":[0,2,4,6,8],"20/08/31":[1,3,5,7,9]},BOGOTA:{"20/08/05":[1,3,5,7,9],"20/08/06":[0,2,4,6,8],"20/08/07":[1,3,5,7,9],"20/08/08":[0,2,4,6,8],"20/08/09":[1,3,5,7,9]}},f={CALI:{"20/07/31":[2,0]},BOGOTA:{}},h={CALI:{0:[],1:[3,4],2:[5,6],3:[7,8],4:[9,0],5:[1,2],6:[]},BOGOTA:{0:[],1:[0,2,4,6,8],2:[1,3,5,7,9],3:[0,2,4,6,8],4:[1,3,5,7,9],5:[0,2,4,6,8],6:[]}},v=function(e,t,a){if("person"===e)return E[t][a]||null;if("vehicle"===e){var n=f[t][a]||null;if(!n){var r=a.split("/").map((function(e,t){return parseInt(e)+(0===t?2e3:0)})),o=Object(s.a)(r,3),c=o[0],l=o[1],i=o[2],u=new Date(c,l-1,i);n=h[t][u.getDay()]}return n?[0,1,2,3,4,5,6,7,8,9].filter((function(e){return!n.includes(e)})):null}return null},g=function(e,t,a,n){var r,o;null!==e?function(e){localStorage.setItem("id",e+"")}(e):localStorage.removeItem("id"),null!==t?function(e){localStorage.setItem("plate",e+"")}(t):localStorage.removeItem("plate"),null!==a?(r=a,localStorage.setItem("placityte",r)):localStorage.removeItem("placityte"),null!==n?(o=n?"dark":"light",localStorage.setItem("theme",o)):localStorage.removeItem("theme")},b=a(65),O=a(128),N=r.a.createContext((function(){})),C=function(e){var t=Object(b.a)({});return r.a.createElement(N.Provider,{value:function(){}},r.a.createElement(O.a,{theme:t},e.children))},D=Object(b.a)({palette:{type:"dark",primary:{main:"#3949ab"},secondary:{main:"#40c4ff"},text:{secondary:"#e0e0e0"}}}),I=Object(b.a)({palette:{primary:{main:"#3949ab"},secondary:{main:"#3949ab"},text:{secondary:"#e0e0e0"}}}),k={title:"Pico y C\xe9dula",pickLastCCNumber:"Seleccione el \xfaltimo d\xedgito de su c\xe9dula",pickLastPlateNumber:"Seleccione el \xfaltimo d\xedgito de su placa",pickAnotherLastNumber:"Seleccionar otro d\xedgito",reportIssue:"Reportar un problema",contact:"Cont\xe1ctenos",infoSource:"Fuente",default:"\xaf\\_(\u30c4)_/\xaf"},w=function(e){return k[e]||k.default},S=a(88),x=a(133),G=a(134),j=a(132),R=a(129),T=function(){var e=Object(n.useState)("CALI"),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!0),l=Object(s.a)(c,2),i=l[0],p=l[1],E=Object(n.useState)(null),f=Object(s.a)(E,2),h=f[0],v=f[1],b=Object(n.useState)("UNDEFINED"),N=Object(s.a)(b,2),C=N[0],k=N[1],T=Object(n.useState)([]),A=Object(s.a)(T,2),L=A[0],B=A[1],W=Object(n.useState)(null),_=Object(s.a)(W,2),F=_[0],M=_[1],P=Object(n.useState)("UNDEFINED"),U=Object(s.a)(P,2),Y=U[0],z=U[1],H=Object(n.useState)([]),J=Object(s.a)(H,2),Q=J[0],V=J[1],$=function(){var e=function(){var e=localStorage.getItem("id");return e?parseInt(e):null}(),t=function(){var e=localStorage.getItem("plate");return e?parseInt(e):null}(),a=localStorage.getItem("placityte")||"CALI",n="dark"===localStorage.getItem("theme");v(e),M(t),o(a),p(n),null!==e&&k(pe(e,"person",a)),null!==e&&B(ye(e,"person",a)),null!==t&&z(pe(t,"vehicle",a)),null!==t&&V(ye(t,"vehicle",a))};return Object(n.useEffect)((function(){return $()}),[]),Object(n.useEffect)((function(){g(h,F,a,i)})),r.a.createElement(O.a,{theme:i?D:I},r.a.createElement(R.a,null),r.a.createElement("div",{className:"App"},r.a.createElement(oe,{currentCity:a,darkMode:i,setDarkMode:p,setCurrentCity:o,personIDNumber:h,vehicleIDNumber:F}),r.a.createElement(j.a,{container:!0,spacing:0},r.a.createElement(j.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{paddingTop:"25px"}},r.a.createElement(Ee,{entity:"person",IDNumber:h,canGoOutToday:C,canGoOutWeek:L,currentCity:a,setIDNumber:v,setCanGoOutToday:k,setCanGoOutWeek:B}),r.a.createElement(x.a,{variant:"middle"})),r.a.createElement(j.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{paddingTop:"25px"}},r.a.createElement(Ee,{entity:"vehicle",IDNumber:F,canGoOutToday:Y,canGoOutWeek:Q,currentCity:a,setIDNumber:M,setCanGoOutToday:z,setCanGoOutWeek:V}),r.a.createElement(x.a,{variant:"middle"}))),r.a.createElement(S.a,{style:{paddingTop:"20px",paddingBottom:"5px"}},r.a.createElement(G.a,{href:"mailto:".concat(u).concat(m),color:"secondary"},w("reportIssue"))," | ",r.a.createElement(G.a,{href:y[a],color:"secondary",target:"_blank",rel:"noopener"},w("infoSource"))," | ",r.a.createElement(G.a,{href:"mailto:".concat(u).concat(d),color:"secondary"},w("contact")))))},A=(a(83),a(135)),L=a(136),B=a(137),W=a(30),_=a.n(W),F=a(46),M=a.n(F),P=a(23),U=a.n(P),Y=a(31),z=a.n(Y),H=function(e){return{YES:"#009933",NO:"#b00020",ERROR:"#cc6600",UNDEFINED:"#1976d0"}[e]},J=function(e){return r.a.createElement(A.a,{style:(t=e.canGoOut,{border:{YES:"3px solid "+H(t),NO:"3px solid "+H(t),ERROR:"3px solid "+H(t),UNDEFINED:"3px solid "+H(t)}[t],display:"inline-block",margin:"25px 40px",height:"160px",width:"200px",transition:"all .5s ease",WebkitTransition:"all .5s ease",MozTransition:"all .5s ease"})},r.a.createElement(L.a,{style:{height:"100%"}},r.a.createElement(S.a,{style:{color:H(e.canGoOut)}},function(e,t){var a={fontSize:"80px"};return{YES:{person:r.a.createElement(_.a,{style:a}),vehicle:r.a.createElement(_.a,{style:a})},NO:{person:r.a.createElement(z.a,{style:a}),vehicle:r.a.createElement(z.a,{style:a})},ERROR:{person:r.a.createElement(M.a,{style:a}),vehicle:r.a.createElement(U.a,{style:a})},UNDEFINED:{person:r.a.createElement(U.a,{style:a}),vehicle:r.a.createElement(U.a,{style:a})}}[e][t]}(e.canGoOut,e.entity)),r.a.createElement(B.a,{style:{padding:"0px"}},r.a.createElement(S.a,{gutterBottom:!0,variant:"h6"},e.text))));var t},Q=a(140),V=a(48),$=a.n(V),q=a(143),K=a(144),X=a(138),Z=a(139),ee=a(89),te=a(64),ae=a.n(te),ne=a(63),re=a.n(ne),oe=function(e){return r.a.createElement(X.a,{position:"sticky"},r.a.createElement(Z.a,null,r.a.createElement(S.a,{variant:"h5",style:{color:"white"}},w("title")),e.darkMode?r.a.createElement(ee.a,{style:{marginLeft:"auto",color:"white"},onClick:function(){e.setDarkMode(!1)}},r.a.createElement(re.a,null)):r.a.createElement(ee.a,{style:{marginLeft:"auto",color:"white"},onClick:function(){e.setDarkMode(!0)}},r.a.createElement(ae.a,null)),r.a.createElement(q.a,{value:e.currentCity,style:{marginLeft:"auto",color:"white"},onChange:function(t){e.setCurrentCity(t.target.value)},className:$.a.selectedCity},Object.entries(p).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return r.a.createElement(K.a,{key:a,value:a,className:$.a.cityContainer},n)})))),r.a.createElement(Q.a,{in:null!==e.personIDNumber||null!==e.vehicleIDNumber},r.a.createElement(S.a,{variant:"subtitle1",color:"textSecondary",style:{width:"fit-content",paddingLeft:"20px",lineHeight:"20px"}},null!==e.personIDNumber?"C\xe9dula: ..."+e.personIDNumber:"",null!==e.personIDNumber&&null!==e.vehicleIDNumber?" | ":"",null!==e.vehicleIDNumber?"Placa: ..."+e.vehicleIDNumber:"")))},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e||new Date,a=function(e){return e<10?"0"+e:e>=100?""+(e-2e3):""+e},n="".concat(a(t.getFullYear()),"/").concat(a(t.getMonth()+1),"/").concat(a(t.getDate()));return n},le={0:"Domingo",1:"Lunes",2:"Martes",3:"Mi\xe9rcoles",4:"Jueves",5:"Viernes",6:"S\xe1bado"},ie=[1,2,3,4,5,6,7,8,9,0],se=a(141),ue=a(36),me=a.n(ue),de=function(e,t,a,n){return function(r){n.set(e),n.day(pe(e,t,a)),n.week(ye(e,t,a))}},pe=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=v(t,a,n||ce());return r?r.some((function(t){return t===e}))?"YES":"NO":"ERROR"},ye=function(e,t,a){var n=function(){for(var e=new Date,t=e.getDate(),a=[],n=0;n<=6;n++)a.push(ce(new Date(e.setDate(t+n))));return a}(),r=(new Date).getDay(),o=[];return n.forEach((function(n){o.push({canGoOut:pe(e,t,a,n),day:le[r%7],date:n}),r+=1})),o},Ee=function(e){return r.a.createElement("div",null,r.a.createElement(Q.a,{in:null===e.IDNumber},r.a.createElement(S.a,{variant:"h6",color:"textPrimary"},{person:w("pickLastCCNumber"),vehicle:w("pickLastPlateNumber")}[e.entity])),r.a.createElement(Q.a,{in:null!==e.IDNumber},r.a.createElement(ee.a,{color:"secondary",onClick:function(){e.setIDNumber(null),e.setCanGoOutToday("UNDEFINED"),e.setCanGoOutWeek([])},className:me.a.selectOtherDigitButton,variant:"outlined",component:"span"},r.a.createElement(S.a,{variant:"body1",color:"textPrimary"},w("pickAnotherLastNumber")))),r.a.createElement(Q.a,{in:null===e.IDNumber},r.a.createElement(r.a.Fragment,null,ie.map((function(t,a){return function(e,t,a,n,o){return r.a.createElement(r.a.Fragment,null,t%3===0?r.a.createElement("br",null):"",r.a.createElement(ee.a,{key:t,className:me.a.digitButton,onClick:de(e,a,n,{set:o.setIDNumber,day:o.setCanGoOutToday,week:o.setCanGoOutWeek}),color:"secondary",variant:"outlined",component:"span"},e))}(t,a,e.entity,e.currentCity,{setIDNumber:e.setIDNumber,setCanGoOutToday:e.setCanGoOutToday,setCanGoOutWeek:e.setCanGoOutWeek})})))),r.a.createElement("div",null,r.a.createElement(J,{canGoOut:e.canGoOutToday,entity:e.entity,text:(t=e.canGoOutToday,a=e.entity,{YES:{person:"Puedes salir",vehicle:"Puedes conducir"},NO:{person:"Qu\xe9date en casa",vehicle:"NO puedes conducir"},ERROR:{person:"No encontramos informaci\xf3n actual",vehicle:"No encontramos informaci\xf3n actual"},UNDEFINED:{person:"Seleccione un d\xedgito",vehicle:"Seleccione un d\xedgito"}}[t][a])})),r.a.createElement("div",{className:me.a.msgsContainer},v(e.entity,e.currentCity,ce())?r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{variant:"body1",color:"textPrimary",style:{paddingBottom:"10px"}},function(e,t){return{person:"Hoy pueden salir en ".concat(t," las personas cuyos n\xfameros de c\xe9dula terminen en "),vehicle:"Hoy pueden rodar en ".concat(t," los veh\xedculos cuyas placas terminen en ")}[e]}(e.entity,e.currentCity)),r.a.createElement(se.a,{color:"secondary",variant:"text",size:"large"},(v(e.entity,e.currentCity,ce())||[]).map((function(e,t){return r.a.createElement(ee.a,{style:{display:"block"},color:"secondary",key:t},e)})))):r.a.createElement(S.a,{variant:"body1",color:"textPrimary",style:{paddingBottom:"10px"}},function(e,t){return{person:"No hay datos para pico y c\xe9dula en ".concat(t," el d\xeda de hoy"),vehicle:"No hay datos para pico y placa en ".concat(t," el d\xeda de hoy")}[e]}(e.entity,e.currentCity))),r.a.createElement(Q.a,{in:e.canGoOutWeek.length>0},r.a.createElement("div",{className:me.a.weekMsgsContainer},r.a.createElement(se.a,{color:"secondary",variant:"text",size:"small",style:{width:"350px"}},e.canGoOutWeek.map((function(t,a){return r.a.createElement(ee.a,{style:{display:"block"},color:"secondary",key:a},t.day.slice(0,3)," ",t.date.slice(3).split("/").reverse().join("/"),r.a.createElement(S.a,{style:{color:H(t.canGoOut)}},function(e,t){return{YES:{person:r.a.createElement(_.a,null),vehicle:r.a.createElement(_.a,null)},NO:{person:r.a.createElement(z.a,null),vehicle:r.a.createElement(z.a,null)},ERROR:{person:r.a.createElement(M.a,null),vehicle:r.a.createElement(U.a,null)},UNDEFINED:{person:r.a.createElement(U.a,null),vehicle:r.a.createElement(U.a,null)}}[e][t]}(t.canGoOut,e.entity)))}))))));var t,a},fe=Object(i.a)(),he=function(){return r.a.createElement(l.b,{history:fe},r.a.createElement("div",null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"*",component:T}))))},ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null,r.a.createElement(he,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/picoycedula",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/picoycedula","/service-worker.js");ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ge(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ge(t,e)}))}}()}},[[73,1,2]]]);
//# sourceMappingURL=main.77f7b407.chunk.js.map