(this["webpackJsonpbase-app"]=this["webpackJsonpbase-app"]||[]).push([[0],{36:function(e,t,a){e.exports={selectOtherDigitButton:"scss_selectOtherDigitButton__2vxfg",msgsContainer:"scss_msgsContainer__I4kQf",weekMsgsContainer:"scss_weekMsgsContainer__2c6DL",digitButton:"scss_digitButton__1C6dw"}},48:function(e,t,a){e.exports={selectedCity:"scss_selectedCity__pyIRS"}},73:function(e,t,a){e.exports=a(87)},78:function(e,t,a){},79:function(e,t,a){},83:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(78),a(79),a(142)),i=a(17),s=a(14),u="deft.soluciones@gmail.com",m="?subject=Reporte%de%20un%20problema",d="?subject=Quiero%20contactar%20con%20ustedes",p={CALI:"Cali"},y={CALI:"https://twitter.com/AlcaldiaDeCali"},E=function(e,t,a,n){var r,o;null!==e?function(e){localStorage.setItem("id",e+"")}(e):localStorage.removeItem("id"),null!==t?function(e){localStorage.setItem("plate",e+"")}(t):localStorage.removeItem("plate"),null!==a?(r=a,localStorage.setItem("placityte",r)):localStorage.removeItem("placityte"),null!==n?(o=n?"dark":"light",localStorage.setItem("theme",o)):localStorage.removeItem("theme")},f=a(65),h=a(128),v=r.a.createContext((function(){})),g=function(e){var t=Object(f.a)({});return r.a.createElement(v.Provider,{value:function(){}},r.a.createElement(h.a,{theme:t},e.children))},b=Object(f.a)({palette:{type:"dark",primary:{main:"#3949ab"},secondary:{main:"#40c4ff"},text:{secondary:"#e0e0e0"}}}),O=Object(f.a)({palette:{primary:{main:"#3949ab"},secondary:{main:"#3949ab"},text:{secondary:"#e0e0e0"}}}),N={title:"Pico y C\xe9dula",pickLastCCNumber:"Seleccione el \xfaltimo d\xedgito de su c\xe9dula",pickLastPlateNumber:"Seleccione el \xfaltimo d\xedgito de su placa",pickAnotherLastNumber:"Seleccionar otro d\xedgito",reportIssue:"Reportar un problema",contact:"Cont\xe1ctenos",infoSource:"Fuente",default:"\xaf\\_(\u30c4)_/\xaf"},C=function(e){return N[e]||N.default},D=a(88),k=a(133),I=a(134),w=a(132),S=a(129),x=function(){var e=Object(n.useState)("CALI"),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!0),l=Object(s.a)(c,2),i=l[0],p=l[1],f=Object(n.useState)(null),v=Object(s.a)(f,2),g=v[0],N=v[1],x=Object(n.useState)("UNDEFINED"),j=Object(s.a)(x,2),G=j[0],R=j[1],L=Object(n.useState)([]),W=Object(s.a)(L,2),_=W[0],T=W[1],A=Object(n.useState)(null),M=Object(s.a)(A,2),F=M[0],P=M[1],B=Object(n.useState)("UNDEFINED"),U=Object(s.a)(B,2),Y=U[0],z=U[1],H=Object(n.useState)([]),J=Object(s.a)(H,2),Q=J[0],V=J[1],$=function(){var e=function(){var e=localStorage.getItem("id");return e?parseInt(e):null}(),t=function(){var e=localStorage.getItem("plate");return e?parseInt(e):null}(),a=localStorage.getItem("placityte")||"CALI",n="dark"===localStorage.getItem("theme");N(e),P(t),o(a),p(n),null!==e&&R(ue(e,"person",a)),null!==e&&T(me(e,"person",a)),null!==t&&z(ue(t,"vehicle",a)),null!==t&&V(me(t,"vehicle",a))};return Object(n.useEffect)((function(){return $()}),[]),Object(n.useEffect)((function(){E(g,F,a,i)})),r.a.createElement(h.a,{theme:i?b:O},r.a.createElement(S.a,null),r.a.createElement("div",{className:"App"},r.a.createElement(te,{currentCity:a,darkMode:i,setDarkMode:p,setCurrentCity:o,personIDNumber:g,vehicleIDNumber:F}),r.a.createElement(w.a,{container:!0,spacing:0},r.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{paddingTop:"25px"}},r.a.createElement(de,{entity:"person",IDNumber:g,canGoOutToday:G,canGoOutWeek:_,currentCity:a,setIDNumber:N,setCanGoOutToday:R,setCanGoOutWeek:T}),r.a.createElement(k.a,{variant:"middle"})),r.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6,lg:6,style:{paddingTop:"25px"}},r.a.createElement(de,{entity:"vehicle",IDNumber:F,canGoOutToday:Y,canGoOutWeek:Q,currentCity:a,setIDNumber:P,setCanGoOutToday:z,setCanGoOutWeek:V}),r.a.createElement(k.a,{variant:"middle"}))),r.a.createElement(D.a,{style:{paddingTop:"20px",paddingBottom:"5px"}},r.a.createElement(I.a,{href:"mailto:".concat(u).concat(m),color:"secondary"},C("reportIssue"))," | ",r.a.createElement(I.a,{href:y[a],color:"secondary",target:"_blank",rel:"noopener",onClick:function(e){return e.preventDefault()}},C("infoSource"))," | ",r.a.createElement(I.a,{href:"mailto:".concat(u).concat(d),color:"secondary"},C("contact")))))},j=(a(83),a(135)),G=a(136),R=a(137),L=a(30),W=a.n(L),_=a(46),T=a.n(_),A=a(23),M=a.n(A),F=a(31),P=a.n(F),B=function(e){return{YES:"#009933",NO:"#b00020",ERROR:"#cc6600",UNDEFINED:"#1976d0"}[e]},U=function(e){return r.a.createElement(j.a,{style:(t=e.canGoOut,{border:{YES:"3px solid "+B(t),NO:"3px solid "+B(t),ERROR:"3px solid "+B(t),UNDEFINED:"3px solid "+B(t)}[t],display:"inline-block",margin:"20px 40px",height:"150px",width:"200px",transition:"all .5s ease",WebkitTransition:"all .5s ease",MozTransition:"all .5s ease"})},r.a.createElement(G.a,{style:{height:"100%"}},r.a.createElement(D.a,{style:{color:B(e.canGoOut)}},function(e,t){var a={fontSize:"80px"};return{YES:{person:r.a.createElement(W.a,{style:a}),vehicle:r.a.createElement(W.a,{style:a})},NO:{person:r.a.createElement(P.a,{style:a}),vehicle:r.a.createElement(P.a,{style:a})},ERROR:{person:r.a.createElement(T.a,{style:a}),vehicle:r.a.createElement(M.a,{style:a})},UNDEFINED:{person:r.a.createElement(M.a,{style:a}),vehicle:r.a.createElement(M.a,{style:a})}}[e][t]}(e.canGoOut,e.entity)),r.a.createElement(R.a,null,r.a.createElement(D.a,{gutterBottom:!0,variant:"h6",component:"h2"},e.text))));var t},Y=a(140),z=a(48),H=a.n(z),J=a(143),Q=a(144),V=a(138),$=a(139),q=a(89),K=a(64),X=a.n(K),Z=a(63),ee=a.n(Z),te=function(e){return r.a.createElement(V.a,{position:"sticky"},r.a.createElement($.a,null,r.a.createElement(D.a,{variant:"h5",style:{color:"white"}},C("title")),e.darkMode?r.a.createElement(q.a,{style:{marginLeft:"auto",color:"white"},onClick:function(){e.setDarkMode(!1)}},r.a.createElement(ee.a,null)):r.a.createElement(q.a,{style:{marginLeft:"auto",color:"white"},onClick:function(){e.setDarkMode(!0)}},r.a.createElement(X.a,null)),r.a.createElement(J.a,{value:e.currentCity,style:{marginLeft:"auto",color:"white"},onChange:function(t){e.setCurrentCity(t.target.value)},className:H.a.selectedCity},Object.entries(p).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return r.a.createElement(Q.a,{key:a,value:a,className:H.a.cityContainer},n)})))),r.a.createElement(Y.a,{in:null!==e.personIDNumber||null!==e.vehicleIDNumber},r.a.createElement(D.a,{variant:"subtitle1",color:"textSecondary",style:{width:"fit-content",paddingLeft:"20px",lineHeight:"20px"}},null!==e.personIDNumber?"C\xe9dula: ..."+e.personIDNumber:"",null!==e.personIDNumber&&null!==e.vehicleIDNumber?" | ":"",null!==e.vehicleIDNumber?"Placa: ..."+e.vehicleIDNumber:"")))},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e||new Date,a=function(e){return e<10?"0"+e:e>=100?""+(e-2e3):""+e},n="".concat(a(t.getFullYear()),"/").concat(a(t.getMonth()+1),"/").concat(a(t.getDate()));return n},ne={0:"Domingo",1:"Lunes",2:"Martes",3:"Mi\xe9rcoles",4:"Jueves",5:"Viernes",6:"S\xe1bado",7:"Domingo"},re=[1,2,3,4,5,6,7,8,9,0],oe=a(141),ce=a(36),le=a.n(ce),ie={person:{CALI:{"20/08/01":[1,3,5,7,9],"20/08/02":[0,2,4,6,8],"20/08/03":[1,3,5,7,9],"20/08/04":[0,2,4,6,8],"20/08/05":[1,3,5,7,9],"20/08/06":[0,2,4,6,8],"20/08/07":[1,3,5,7,9],"20/08/08":[0,2,4,6,8],"20/08/09":[1,3,5,7,9],"20/08/10":[0,2,4,6,8],"20/08/11":[1,3,5,7,9],"20/08/12":[0,2,4,6,8],"20/08/13":[1,3,5,7,9],"20/08/14":[0,2,4,6,8],"20/08/15":[1,3,5,7,9],"20/08/16":[0,2,4,6,8],"20/08/17":[1,3,5,7,9],"20/08/18":[0,2,4,6,8],"20/08/19":[1,3,5,7,9],"20/08/20":[0,2,4,6,8],"20/08/21":[1,3,5,7,9],"20/08/22":[0,2,4,6,8],"20/08/23":[1,3,5,7,9],"20/08/24":[0,2,4,6,8],"20/08/25":[1,3,5,7,9],"20/08/26":[0,2,4,6,8],"20/08/27":[1,3,5,7,9],"20/08/28":[0,2,4,6,8],"20/08/29":[1,3,5,7,9],"20/08/30":[0,2,4,6,8],"20/08/31":[1,3,5,7,9]}},vehicle:{CALI:{"20/07/31":[2,0]}}},se=function(e,t,a,n){return function(r){n.set(e),n.day(ue(e,t,a)),n.week(me(e,t,a))}},ue=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=ie[t][a][n||ae()];return r?r.some((function(t){return t===e}))?"YES":"NO":"ERROR"},me=function(e,t,a){var n=function(){for(var e=new Date,t=e.getDate(),a=[],n=0;n<=6;n++)a.push(ae(new Date(e.setDate(t+n))));return a}(),r=(new Date).getDay(),o=[];return n.forEach((function(n){o.push({canGoOut:ue(e,t,a,n),day:ne[r%7],date:n}),r+=1})),o},de=function(e){return r.a.createElement("div",null,r.a.createElement(Y.a,{in:null===e.IDNumber},r.a.createElement(D.a,{variant:"h6",color:"textPrimary"},{person:C("pickLastCCNumber"),vehicle:C("pickLastPlateNumber")}[e.entity])),r.a.createElement(Y.a,{in:null!==e.IDNumber},r.a.createElement(q.a,{color:"secondary",onClick:function(){e.setIDNumber(null),e.setCanGoOutToday("UNDEFINED"),e.setCanGoOutWeek([])},className:le.a.selectOtherDigitButton,variant:"outlined",component:"span"},r.a.createElement(D.a,{variant:"body1",color:"textPrimary"},C("pickAnotherLastNumber")))),r.a.createElement(Y.a,{in:null===e.IDNumber},r.a.createElement(r.a.Fragment,null,re.map((function(t,a){return function(e,t,a,n,o){return r.a.createElement(r.a.Fragment,null,t%3===0?r.a.createElement("br",null):"",r.a.createElement(q.a,{key:t,className:le.a.digitButton,onClick:se(e,a,n,{set:o.setIDNumber,day:o.setCanGoOutToday,week:o.setCanGoOutWeek}),color:"secondary",variant:"outlined",component:"span"},e))}(t,a,e.entity,e.currentCity,{setIDNumber:e.setIDNumber,setCanGoOutToday:e.setCanGoOutToday,setCanGoOutWeek:e.setCanGoOutWeek})})))),r.a.createElement("div",null,r.a.createElement(U,{canGoOut:e.canGoOutToday,entity:e.entity,text:(t=e.canGoOutToday,a=e.entity,{YES:{person:"Puedes salir",vehicle:"Puedes conducir"},NO:{person:"Qu\xe9date en casa",vehicle:"NO puedes conducir"},ERROR:{person:"No encontramos informaci\xf3n actual",vehicle:"No encontramos informaci\xf3n actual"},UNDEFINED:{person:"Seleccione un d\xedgito",vehicle:"Seleccione un d\xedgito"}}[t][a])})),r.a.createElement("div",{className:le.a.msgsContainer},ie[e.entity][e.currentCity][ae()]?r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{variant:"body1",color:"textPrimary",style:{paddingBottom:"10px"}},function(e,t){return{person:"Hoy pueden salir en ".concat(t," las personas cuyos n\xfameros de c\xe9dula terminen en "),vehicle:"Hoy pueden rodar en ".concat(t," los veh\xedculos cuyas placas terminen en ")}[e]}(e.entity,e.currentCity)),r.a.createElement(oe.a,{color:"secondary",variant:"text",size:"large"},ie[e.entity][e.currentCity][ae()].map((function(e,t){return r.a.createElement(q.a,{style:{display:"block"},color:"secondary",key:t},e)})))):r.a.createElement(D.a,{variant:"body1",color:"textPrimary",style:{paddingBottom:"10px"}},function(e,t){return{person:"No hay datos para pico y c\xe9dula en ".concat(t," el d\xeda de hoy"),vehicle:"No hay datos para pico y placa en ".concat(t," el d\xeda de hoy")}[e]}(e.entity,e.currentCity))),r.a.createElement(Y.a,{in:e.canGoOutWeek.length>0},r.a.createElement("div",{className:le.a.weekMsgsContainer},r.a.createElement(oe.a,{color:"secondary",variant:"text",size:"small",style:{width:"350px"}},e.canGoOutWeek.map((function(t,a){return r.a.createElement(q.a,{style:{display:"block"},color:"secondary",key:a},t.day.slice(0,3)," ",t.date.slice(3),r.a.createElement(D.a,{style:{color:B(t.canGoOut)}},function(e,t){return{YES:{person:r.a.createElement(W.a,null),vehicle:r.a.createElement(W.a,null)},NO:{person:r.a.createElement(P.a,null),vehicle:r.a.createElement(P.a,null)},ERROR:{person:r.a.createElement(T.a,null),vehicle:r.a.createElement(M.a,null)},UNDEFINED:{person:r.a.createElement(M.a,null),vehicle:r.a.createElement(M.a,null)}}[e][t]}(t.canGoOut,e.entity)))}))))));var t,a},pe=Object(i.a)(),ye=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.b,{history:pe},r.a.createElement("div",null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"*",component:x})))))},Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null,r.a.createElement(ye,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/picoycedula",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/picoycedula","/service-worker.js");Ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):fe(t,e)}))}}()}},[[73,1,2]]]);
//# sourceMappingURL=main.e73c0d23.chunk.js.map