(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n(7),i=n.n(c),s=(n(16),n(2)),u=n(9),j=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),i=c[0],j=c[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),j(""))},children:Object(a.jsx)("input",{onChange:function(e){j(e.target.value)},type:"text",value:i})})},o=n(10),d=n(6),f=n.n(d),l=n(8),p=function(){var e=Object(l.a)(f.a.mark((function e(t){var n,a,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://api.giphy.com/v1/gifs/search?api_key=dEbMsurtXCLZR6TFeNx06HVpKny9ysjJ&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){e.id;var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeInLeft",children:[Object(a.jsx)("img",{alt:t,src:n}),Object(a.jsx)("p",{children:t})]})},O=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),[e]),a}(t),c=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeInLeft",children:t}),i&&Object(a.jsx)("p",{children:"Loading"}),Object(a.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(a.jsx)(b,Object(o.a)({},e),e.id)}))})]})},h=function(){var e=Object(r.useState)(["One Punch"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(j,{setCategories:c}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(O,{category:e},e)}))})]})};i.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.869ba8d4.chunk.js.map