(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),o=n(6),r=n(8),i=n(1),a=(n(13),n(14),n(0)),u=function(t){var e=t.goods;return Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsx)("li",{"data-cy":"Good",children:t},t)}))})},l=n(4),b=n.n(l),d="alphabet",j="length",h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(t){var e=t.sortField,n=t.setSortField,s=t.isReversed,c=t.setIsReversed,o=e||s;return Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{type:"button",className:"button is-info ".concat(b()({"is-light":e!==d})),onClick:function(){return n(d)},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",className:"button is-success ".concat(b()({"is-light":e!==j})),onClick:function(){return n(j)},children:"Sort by length"}),Object(a.jsx)("button",{type:"button",className:"button is-warning ".concat(b()({"is-light":!s})),onClick:function(){return c((function(t){return!t}))},children:"Reverse"}),o&&Object(a.jsx)("button",{onClick:function(){n(""),c(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]})};var f=function(){var t=Object(i.useState)(""),e=Object(o.a)(t,2),n=e[0],s=e[1],c=Object(i.useState)(!1),l=Object(o.a)(c,2),b=l[0],f=l[1],p=function(t,e,n){var s=Object(r.a)(t);return e&&s.sort((function(t,n){switch(e){case d:return t.localeCompare(n);case j:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(h,n,b);return Object(a.jsxs)("div",{className:"section content",children:[Object(a.jsx)(g,{sortField:n,setSortField:s,isReversed:b,setIsReversed:f}),Object(a.jsx)(u,{goods:p})]})};c.a.render(Object(a.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.33487adf.chunk.js.map