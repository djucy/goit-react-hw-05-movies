"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[478],{478:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(982),o=r(885),a=r(791),c=r(501),u=r(577),s="SearchMovieForm_searchbar__W7MeV",i="SearchMovieForm_searchForm__XEN1f",m="SearchMovieForm_searchForm__button__UqM2h",h="SearchMovieForm_searchForm__button__label__kRULR",l="SearchMovieForm_searchForm__input__SCBSH",_=r(184);function f(e){var t=e.onSubmit,r=(0,a.useState)(""),n=(0,o.Z)(r,2),c=n[0],f=n[1];return(0,_.jsx)("div",{className:s,children:(0,_.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===c.trim())return u.Am.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430!",{theme:"colored"});t(c),f("")},className:i,children:[(0,_.jsx)("button",{type:"submit",className:m,children:(0,_.jsx)("span",{className:h,children:"Search"})}),(0,_.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:c,onChange:function(e){f(e.target.value.toLowerCase())},className:l})]})})}var S=r(224),v=r(295),p=r(894);function b(){var e=(0,a.useState)([]),t=(0,o.Z)(e,2),r=t[0],u=t[1],s=(0,a.useState)(1),i=(0,o.Z)(s,2),m=i[0],h=i[1],l=(0,c.lr)(),b=(0,o.Z)(l,2),d=b[0],F=b[1],x=d.get("query");(0,a.useEffect)((function(){x&&(u([]),S.D3(x,m).then((function(e){u((function(t){return[].concat((0,n.Z)(t),(0,n.Z)(e))}))})))}),[x,m]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f,{onSubmit:function(e){F({query:"".concat(e)})}}),r&&(0,_.jsx)(v.Z,{filmes:r}),20===r.length&&(0,_.jsx)(p.Z,{onLoadMore:function(){h((function(e){return e+1}))}})]})}}}]);
//# sourceMappingURL=478.a07e87ab.chunk.js.map