(this.webpackJsonpm3yoyo=this.webpackJsonpm3yoyo||[]).push([[0],{368:function(e,t,n){e.exports=n(485)},373:function(e,t,n){},374:function(e,t,n){},485:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),i=n.n(r),l=(n(373),n(360)),c=n(203),u=(n(374),n(342)),s=n(352),d=n.n(s),m=n(201),f=n.n(m),g=n(353),p=n.n(g),h=function(){var e,t=Object(a.useState)(!1),n=Object(c.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(null),m=Object(c.a)(s,2),g=m[0],h=m[1],w=Object(a.useState)(null),v=Object(c.a)(w,2),E=v[0],b=v[1];Object(a.useEffect)((function(){f.a.has("m3uOriginal")&&(i(!0),O())}),[]);var O=function(){var e=f.a.get("m3uOriginal"),t=new Set;t.add("sort");var n=[];e.segments.forEach((function(e,a){e.inf&&Object.keys(e.inf).forEach((function(e){t.add(e)})),n.push(Object(l.a)({sort:a,url:e.url},e.inf))})),t.delete("duration");var a=[];t.forEach((function(e){"tvgLogo"===e?a.push({title:e,field:e,render:function(e){return o.a.createElement("img",{src:e.tvgLogo,style:{width:70}})}}):a.push({title:e,field:e})})),h(a),b(n)},y=function(t){var n=e.result,a=new d.a;a.read(n);var o=a.getResult();o&&(f()("m3uOriginal",o),i(!0),O())};return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},!r&&o.a.createElement(u.a,{onChange:function(t){console.log(t),(e=new FileReader).onloadend=y,e.readAsText(t[0])},acceptedFiles:["audio/x-mpegurl","audio/mpegurl"],filesLimit:1,dropzoneText:"To get started, add your playlist file here",useChipsForPreview:!0})),o.a.createElement("main",null,g&&E&&o.a.createElement(p.a,{title:"Playlist",columns:g,data:E,options:{padding:"dense",pageSize:100,draggable:!1,pageSizeOptions:[20,40,60,80,100]},detailPanel:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"URL: ",e.url),o.a.createElement("p",null,"Duration: ",e.duration))},editable:{onRowAdd:function(e){return new Promise((function(e,t){setTimeout((function(){e()}),1e3)}))},onRowUpdate:function(e,t){return new Promise((function(e,t){setTimeout((function(){e()}),1e3)}))},onRowDelete:function(e){return new Promise((function(t,n){setTimeout((function(){console.log(e.sort);t()}),100)}))}}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=n(516);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w.a,null),o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[368,1,2]]]);
//# sourceMappingURL=main.d681cea2.chunk.js.map