"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[638],{639:function(e,n,t){t.d(n,{a:function(){return u}});var r=t(691),a="Loader_loader__+lRPl",c=t(184);function u(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(r.Nx,{width:"200",color:"#4fa94d",className:a})})}},638:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(433),a=t(861),c=t(439),u=t(757),s=t.n(u),i=t(791),o=t(689),f=t(735),l=t(639),p="Review_review__LSO8F",v="Review_reviewList__H0IS2",d="Review_reviewItem__NIZyG",h="Review_reviewAuthor__Y4JIT",w="Review_reviewContent__MiHJ5",_=t(184);var m=function(){var e=(0,i.useState)([]),n=(0,c.Z)(e,2),t=n[0],u=n[1],m=(0,i.useState)("idle"),x=(0,c.Z)(m,2),g=x[0],Z=x[1],k=(0,o.UO)().movieId;return(0,i.useEffect)((function(){function e(){return(e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z("loading"),e.prev=1,e.next=4,(0,f.dk)(k);case 4:n=e.sent,u((0,r.Z)(n)),Z("fulfilled"),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(1),Z("rejected"),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[k]),(0,r.Z)(t).length>0?(0,_.jsxs)("div",{className:p,children:["loading"===g&&(0,_.jsx)(l.a,{}),(0,_.jsx)("ul",{className:v,children:t.map((function(e){return(0,_.jsxs)("li",{className:d,children:[(0,_.jsxs)("h3",{className:h,children:["Author: ",e.author]}),(0,_.jsx)("p",{className:w,children:e.content})]},e.id)}))})]}):(0,_.jsx)("h2",{children:"We don`t have any reviews for this movie."})}},735:function(e,n,t){t.d(n,{KE:function(){return o},a1:function(){return p},dk:function(){return v},iD:function(){return f},mK:function(){return l}});var r=t(861),a=t(757),c=t.n(a),u=t(912),s="https://api.themoviedb.org/3",i="api_key=adefcfc38a20bb4e0e69bacf747b4806",o=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/trending/all/day?").concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/search/movie?").concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n,";"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(n,"?").concat(i));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(n,"/credits?").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(n,"/reviews?").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=638.7f57aa99.chunk.js.map