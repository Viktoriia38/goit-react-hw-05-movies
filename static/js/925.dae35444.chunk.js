"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[925],{639:function(e,t,r){r.d(t,{a:function(){return s}});var n=r(691),c="Loader_loader__+lRPl",a=r(184);function s(){return(0,a.jsx)("div",{className:c,children:(0,a.jsx)(n.Nx,{width:"200",color:"#4fa94d",className:c})})}},925:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{default:function(){return O}});var s=r(861),i=r(439),o=r(757),u=r.n(o),l=r(791),p=r(87),d=r(689),f=r(735),v=r(639),h="MovieDescription_description__Oagse",x="MovieDescription_descriptionLink__Lb3OE",m="MovieDescription_descriptionPoster__7Fnb+",j="MovieDescription_descriptionPosterImage__hhAzs",_="MovieDescription_descriptionText__bxl7+",g="MovieDescription_descriptionTitle__awXto",b="MovieDescription_extraDescription__ssC3t",w=r(184);var O=function(){var e,t,r=(0,l.useState)({}),n=(0,i.Z)(r,2),c=n[0],o=n[1],O=(0,l.useState)("idle"),y=(0,i.Z)(O,2),k=y[0],D=y[1],Z=(0,d.UO)().movieId,P=(0,d.TH)();return(0,l.useEffect)((function(){function e(){return(e=(0,s.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D("loading"),e.prev=1,e.next=4,(0,f.mK)(Z);case 4:t=e.sent,o(a({},t)),D("fulfilled"),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(1),D("rejected"),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[Z]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:x,children:(0,w.jsx)(p.rU,{to:null!==(e=null===(t=P.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:"Go back"})}),(0,w.jsxs)("div",{className:h,children:["loading"===k&&(0,w.jsx)(v.a,{}),(0,w.jsx)("div",{className:m,children:Boolean(c.poster_path)&&(0,w.jsx)("img",{className:j,src:"https://image.tmdb.org/t/p/w500/"+c.poster_path,alt:""})}),(0,w.jsxs)("div",{className:_,children:[(0,w.jsxs)("h1",{className:g,children:[c.title,(0,w.jsxs)("span",{children:[" ",c.release_date]})]}),(0,w.jsxs)("p",{children:["User score: ",(0,w.jsx)("span",{children:c.vote_average})]}),(0,w.jsx)("h2",{children:"Overview"}),(0,w.jsx)("p",{children:c.overview}),(0,w.jsx)("h2",{children:"Genres"}),c.genres&&c.genres.map((function(e){return"".concat(e.name," ")}))]})]}),(0,w.jsxs)("div",{className:b,children:[(0,w.jsx)("h3",{children:"Additional information"}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)(p.OL,{state:P.state,to:"/movies/".concat(Z,"/cast"),children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(p.OL,{state:P.state,to:"/movies/".concat(Z,"/reviews"),children:"Review"})})]}),(0,w.jsx)(d.j3,{})]})]})}},735:function(e,t,r){r.d(t,{KE:function(){return u},a1:function(){return d},dk:function(){return f},iD:function(){return l},mK:function(){return p}});var n=r(861),c=r(757),a=r.n(c),s=r(912),i="https://api.themoviedb.org/3",o="api_key=adefcfc38a20bb4e0e69bacf747b4806",u=function(){var e=(0,n.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/trending/all/day?").concat(o));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/search/movie?").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t,";"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(t,"?").concat(o));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(t,"/credits?").concat(o,"&language=en-US"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(t,"/reviews?").concat(o,"&language=en-US&page=1"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=925.dae35444.chunk.js.map