(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),m=a(8),o=a(1),u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Page not found"))},s=a(10),i=a.n(s),p=a(17),E=a(19),h=a(13),d=a(3),f=a.n(d),b=(f.a.number.isRequired,f.a.string.isRequired,f.a.string.isRequired,f.a.number.isRequired,f.a.number.isRequired,f.a.string,f.a.string,f.a.string.isRequired,function(e){var t=e.id,a=e.name,n=e.sex,l=e.born,c=e.died,m=e.father,o=e.mother;return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",{scope:"row"},t),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,m),r.a.createElement("td",null,o))}),g=function(e){var t=e.people;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"table-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Sex"),r.a.createElement("th",{scope:"col"},"Born"),r.a.createElement("th",{scope:"col"},"Died"),r.a.createElement("th",{scope:"col"},"Father"),r.a.createElement("th",{scope:"col"},"Mother"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:e.slug,className:"table-info"},r.a.createElement(b,{id:t+1,name:e.name,sex:e.sex,born:e.born,died:e.died,father:e.father,mother:e.mother}))}))))},v=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{father:e.fatherName,mother:e.motherName})}))}));case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"People page"),r.a.createElement(g,{people:a}))},N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Home page"))},x=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("ul",{className:"nav nav-pills"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link",to:"/",exact:!0},"Homepage")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link",to:"/people"},"People"))))},j=(a(31),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0},r.a.createElement(N,null)),r.a.createElement(o.b,{path:"/people"},r.a.createElement(v,null)),r.a.createElement(o.a,{path:"/home",to:"/"}),r.a.createElement(u,null)))});c.a.render(r.a.createElement(m.a,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1145661a.chunk.js.map