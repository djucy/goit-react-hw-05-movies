"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[718],{894:function(n,e,t){t.d(e,{Z:function(){return a}});var r="Button_button__wiIYs",o=t(184);function a(n){var e=n.onLoadMore;return(0,o.jsx)("button",{type:"button",onClick:e,className:r,children:"Download more"})}},295:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(504),o=t(871),a="FilmList_image__EaCd0",c="FilmList_list__C2ysn",i="FilmList_item__uEK9y",u="FilmList_title__gplOY",s=t(184);function l(n){var e=n.filmes,t=(n.value,(0,o.TH)()),l=(0,o.s0)();return console.log(t),console.log(l),console.log(e.length),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{className:c,children:e.map((function(n){var e=n.id,t=n.poster_path,o=n.title;return(0,s.jsx)(r.rU,{to:{pathname:"/movies/".concat(e)},className:i,children:(0,s.jsxs)("li",{id:e,children:[(0,s.jsx)("img",{src:t?"https://image.tmdb.org/t/p/original".concat(t):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:o,className:a}),(0,s.jsx)("p",{className:u,children:o})]},e)},e)}))})})}},224:function(n,e,t){t.d(e,{YF:function(){return a},D3:function(){return c},Pg:function(){return i},M1:function(){return u},q5:function(){return s}});var r="https://api.themoviedb.org/3",o="e32d0a5f8ee39ad2c612579abb31460d";function a(n){return fetch("".concat(r,"/trending/movie/day?api_key=").concat(o,"&page=").concat(n)).then((function(n){return n.ok?n.json():Promise.rejected(new Error("Please, try again"))})).then((function(n){return n.results}))}function c(n,e){return fetch(" ".concat(r,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=").concat(e,"&include_adult=false ")).then((function(n){return n.ok?n.json():Promise.rejected(new Error("Please, try again"))})).then((function(n){return n.results}))}function i(n){return fetch(" ".concat(r,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.rejected(new Error("Please, try again"))}))}function u(n){return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.rejected(new Error("Please, try again"))})).then((function(n){return n.cast}))}function s(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(n){return n.ok?n.json():Promise.rejected(new Error("Please, try again"))})).then((function(n){return n.results}))}},718:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r=t(982),o=t(885),a=t(791),c=t(577),i=t(184);function u(n){var e=n.onSubmit,t=(0,a.useState)(""),r=(0,o.Z)(t,2),u=r[0],s=r[1];return(0,i.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),""===u.trim())return c.Am.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430!",{theme:"colored"});e(u),s(""),console.log("movie")},children:[(0,i.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:u,onChange:function(n){s(n.target.value.toLowerCase())}}),(0,i.jsx)("button",{type:"submit",children:"GO!"})]})}var s=t(224),l=t(295),f=t(894);function m(){var n=(0,a.useState)([]),e=(0,o.Z)(n,2),t=e[0],c=e[1],m=(0,a.useState)(""),d=(0,o.Z)(m,2),h=d[0],g=d[1],p=(0,a.useState)(1),v=(0,o.Z)(p,2),y=v[0],_=v[1];(0,a.useEffect)((function(){""!==h&&(c([]),s.D3(h,y).then((function(n){c((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n))}))})))}),[h,y]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{onSubmit:function(n){return g(n)}}),t&&(0,i.jsx)(l.Z,{filmes:t}),20===t.length&&(0,i.jsx)(f.Z,{onLoadMore:function(){console.log("tap"),_((function(n){return n+1}))}})]})}},982:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(907);var o=t(181);function a(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,o.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=718.483a3912.chunk.js.map