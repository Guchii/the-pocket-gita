(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[544],{4953:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explore",function(){return t(6972)}])},138:function(e,n,t){"use strict";var r=t(5893),a=t(7294),c=t(4040);n.Z=function(e){var n=e.className,t=(0,a.useState)(!1),l=t[0],s=t[1];return(0,a.useEffect)((function(){setTimeout((function(){s(!0)}),5e3)}),[]),(0,r.jsxs)("div",{className:"".concat(n," flex flex-col w-full justify-center items-center text-center"),children:[(0,r.jsx)(c.DotLoader,{color:"white",css:{marginBottom:"80px"}}),(0,r.jsx)("p",{className:"font-bold text-2xl",children:"Fetching data from our API"}),l&&(0,r.jsx)("p",{className:"font-bold text-lg w-1/2 mt-10",children:"Our server may be on a cold start, please be patient it'll become responsive in no time"})]})}},6972:function(e,n,t){"use strict";t.r(n);var r=t(5893),a=t(1163),c=t(138),l=t(218),s=t(9539);function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,c=[],l=!0,s=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(c.push(r.value),!n||c.length!==n);l=!0);}catch(o){s=!0,a=o}finally{try{l||null==t.return||t.return()}finally{if(s)throw a}}return c}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=function(e){var n=e.chap,t=e.name,a=e.name_meaning,c=e.clickHandler;return(0,r.jsxs)("div",{onClick:function(){return c(n)},className:"bg-yellow-300 duration-200 active:translate-y-1 text-black font-bold text-2xl h-36 rounded-xl shadow-xl p-4 cursor-pointer grid grid-cols-[100px_1fr]",children:[(0,r.jsx)("span",{className:"self-center row-span-2 text-7xl w-full text-center",children:n}),(0,r.jsx)("span",{className:"text-xl self-end",children:t}),(0,r.jsx)("span",{className:"text-sm",children:a})]})};n.default=function(e){var n=e.className,t=i((0,l.Z)("chapters"),3),o=t[0],f=t[1],d=(t[2],i((0,s.Z)(f,8),2)),m=d[0],p=d[1],x=(0,a.useRouter)(),h=function(e){return x.push("/chapter/".concat(e))};return o?(0,r.jsx)(c.Z,{className:n}):(0,r.jsxs)("div",{className:n,children:[(0,r.jsx)("div",{className:"h-5/6 grid grid-cols-2 grid-flow-row gap-10",children:m.map((function(e){return(0,r.jsx)(u,{chap:e.chapter_number,name:e.name,name_meaning:e.name_meaning,clickHandler:h},e.id)}))}),(0,r.jsxs)("div",{className:"h-1/6 flex justify-between items-center",children:[(0,r.jsx)("button",{className:"font-bold",onClick:function(){return p(-1)},children:"prev page"}),(0,r.jsx)("button",{className:"font-bold",onClick:function(){return p(1)},children:"next page"})]})]})}},9539:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e,n){var t=(0,r.useState)(1),a=t[0],c=t[1],l=a*n,s=l-n;return[e.slice(s,l),function(e){c(a+e)}]}}},function(e){e.O(0,[40,774,888,179],(function(){return n=4953,e(e.s=n);var n}));var n=e.O();_N_E=n}]);