(this["webpackJsonpreact-notes-extended"]=this["webpackJsonpreact-notes-extended"]||[]).push([[0],{43:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c,a,r=n(1),s=n(0),o=n.n(s),i=n(14),u=n.n(i),l=(n(43),n(17)),j=n(2),b=function(){return Object(r.jsxs)("nav",{className:"navbar navbar-dark navbar-expand-lg bg-primary",children:[Object(r.jsx)("div",{className:"navbar-brand",children:"Notes App"}),Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{className:"nav-link",to:"/",exact:!0,children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{className:"nav-link",to:"/about",children:"About"})})]})]})},d=n(68),O=Object(s.createContext)(),p=function(){var e=Object(s.useContext)(O),t=e.alert,n=e.hide;return Object(r.jsx)(d.a,{in:t.visible,timeout:{enter:500,exit:350},classNames:"alert",mountOnEnter:!0,unmountOnExit:!0,children:Object(r.jsxs)("div",{className:"alert alert-".concat(t.type||"warning"," alert-dismissible"),children:[t.text,Object(r.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:n,children:Object(r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})},h=n(13),x=Object(s.createContext)(),m=function(){var e=Object(s.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],a=Object(s.useContext)(O),o=Object(s.useContext)(x);return Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),n.trim()?(o.addNote(n.trim()).then((function(){a.show("The note was successfully created","success")})).catch((function(){a.show("Something went wrong","danger")})),c("")):a.show("Enter the note title")},children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter note title",value:n,onChange:function(e){return c(e.target.value)},maxLength:144})})})},f=function(){return Object(r.jsx)("div",{className:"text-center",children:Object(r.jsx)("div",{className:"spinner-border",role:"status",children:Object(r.jsx)("span",{className:"sr-only",children:"Loading..."})})})},v=n(69),N=function(e){var t=e.notes,n=e.onRemove;return Object(r.jsx)(v.a,{component:"ul",className:"list-group",children:t.map((function(e){return Object(r.jsx)(d.a,{classNames:"note",timeout:300,children:Object(r.jsxs)("li",{className:"list-group-item note",children:[Object(r.jsx)("div",{className:"note-text",children:e.title}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-danger b-text",onClick:function(){return n(e.id)},children:"\xd7"})]})},e.id)}))})},y=function(){var e=Object(s.useContext)(x),t=e.loading,n=e.notes,c=e.fetchNotes,a=e.removeNote;return Object(s.useEffect)((function(){c()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{}),Object(r.jsx)("hr",{}),t?Object(r.jsx)(f,{}):0===n.length?Object(r.jsx)("h3",{className:"text-center",children:"There are no notes yet"}):Object(r.jsx)(N,{notes:n,onRemove:a})]})},g=function(){return Object(r.jsx)("div",{className:"jumbotron",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{className:"display-4",children:"Notes up"}),Object(r.jsx)("p",{className:"lead",children:"Notes up Notes up Notes up Notes up Notes up Notes up Notes up Notes up Notes up"})]})})},w="SHOW_ALERT",E="HIDE_ALERT",C="SHOW_LOADER",T="ADD_NOTE",k="REMOVE_NOTE",L="FETCH_NOTES",D=n(8),A=n(3),F=(c={},Object(D.a)(c,w,(function(e,t){var n=t.payload;return Object(A.a)(Object(A.a)({},n),{},{visible:!0})})),Object(D.a)(c,E,(function(e){return Object(A.a)(Object(A.a)({},e),{},{visible:!1})})),Object(D.a)(c,"DEFAULT",(function(e){return e})),c),S=function(e,t){return(F[t.type]||F.DEFAULT)(e,t)},R=function(e){var t=e.children,n=Object(s.useReducer)(S,{visible:!1}),c=Object(h.a)(n,2),a=c[0],o=c[1];return Object(r.jsx)(O.Provider,{value:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";o({type:w,payload:{text:e,type:t}})},hide:function(){return o({type:E})},alert:a},children:t})},_=n(12),H=n.n(_),P=n(19),U=n(20),I=n.n(U),J=n(35),B=(a={},Object(D.a)(a,C,(function(e){return Object(A.a)(Object(A.a)({},e),{},{loading:!0})})),Object(D.a)(a,T,(function(e,t){var n=t.payload;return Object(A.a)(Object(A.a)({},e),{},{notes:[].concat(Object(J.a)(e.notes),[n])})})),Object(D.a)(a,L,(function(e,t){var n=t.payload;return Object(A.a)(Object(A.a)({},e),{},{notes:n,loading:!1})})),Object(D.a)(a,k,(function(e,t){var n=t.payload;return Object(A.a)(Object(A.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==n}))})})),Object(D.a)(a,"DEFAULT",(function(e){return e})),a),M=function(e,t){return(B[t.type]||B.DEFAULT)(e,t)},W="https://tyooma-notes-extended.firebaseio.com",V=function(e){var t=e.children,n=function(){return j({type:C})},c=function(){var e=Object(P.a)(H.a.mark((function e(){var t,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.next=3,I.a.get("".concat(W,"/notes.json"));case 3:t=e.sent,console.log(t),t.data?(c=Object.keys(t.data).map((function(e){return Object(A.a)(Object(A.a)({},t.data[e]),{},{id:e})})),j({type:L,payload:c})):j({type:L,payload:[]});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(P.a)(H.a.mark((function e(t){var n,c,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={title:t,date:(new Date).toJSON()},e.prev=1,e.next=4,I.a.post("".concat(W,"/notes.json"),n);case 4:c=e.sent,a=Object(A.a)(Object(A.a)({},n),{},{id:c.data.name}),j({type:T,payload:a}),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(P.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.delete("".concat(W,"/notes/").concat(t,".json"));case 2:j({type:k,payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=Object(s.useReducer)(M,{notes:[],loading:!1}),u=Object(h.a)(i,2),l=u[0],j=u[1];return Object(r.jsx)(x.Provider,{value:{showLoader:n,addNote:a,fetchNotes:c,removeNote:o,loading:l.loading,notes:l.notes},children:t})};var q=function(){return Object(r.jsx)(V,{children:Object(r.jsx)(R,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(b,{}),Object(r.jsxs)("div",{className:"container pt-4",children:[Object(r.jsx)(p,{}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{path:"/",exact:!0,component:y}),Object(r.jsx)(j.a,{path:"/about",exact:!0,component:g})]})]})]})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};u.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(q,{})}),document.getElementById("root")),z()}},[[67,1,2]]]);
//# sourceMappingURL=main.e2dd0414.chunk.js.map