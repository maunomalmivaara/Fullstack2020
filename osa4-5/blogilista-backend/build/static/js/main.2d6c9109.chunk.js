(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),u=n.n(c),o=(n(22),n(6)),l=n(1),s=n.n(l),i=n(2),p=n(3),f=function(e){var t=e.handleLike,n=e.blog,c=e.user,u=e.remove,o=Object(a.useState)(!1),l=Object(p.a)(o,2),f=l[0],m=l[1],d=function(){m(!f)},b=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n.id);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(n.id);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return f?r.a.createElement("div",{className:"blog"},r.a.createElement("h4",null,n.title),r.a.createElement("button",{onClick:d},"Hide"),r.a.createElement("p",null,"Author: ",n.author),r.a.createElement("p",null,"URL: ",r.a.createElement("a",{href:"https://".concat(n.url)},n.url)),r.a.createElement("p",null,"Likes: ",n.likes,r.a.createElement("button",{onClick:b},"Like")),r.a.createElement("p",null,"Added By: ",n.user.username),c.username===n.user.username?r.a.createElement("button",{onClick:v},"Remove"):""):r.a.createElement("div",{className:"blog"},r.a.createElement("h4",null,n.title),r.a.createElement("button",{onClick:d},"Show"))},m=function(e){var t=e.message,n=e.style,a={color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"},c=Object(o.a)({},a,{color:"green"}),u=Object(o.a)({},a,{color:"blue"}),l="success"===n?c:"error"===n?a:u;return null===t?null:r.a.createElement("div",{style:l},t)},d=function(e){var t=e.handleLogin,n=e.username,a=e.setUsername,c=e.password,u=e.setPassword;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"Username:",r.a.createElement("input",{type:"text",value:n,name:"Username",onChange:function(e){var t=e.target;return a(t.value)}})),r.a.createElement("div",null,"Password:",r.a.createElement("input",{type:"password",value:c,name:"Password",onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement("button",{className:"btn",type:"submit"},"Login"))},b=function(e){var t=e.createBlog,n=Object(a.useState)(""),c=Object(p.a)(n,2),u=c[0],o=c[1],l=Object(a.useState)(""),s=Object(p.a)(l,2),i=s[0],f=s[1],m=Object(a.useState)(""),d=Object(p.a)(m,2),b=d[0],v=d[1];return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h3",null,"Add New Blog:"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:u,author:i,url:b}),o(""),f(""),v("")},id:"BlogForm"},r.a.createElement("div",null,"Title:",r.a.createElement("input",{type:"text",value:u,name:"BlogTitle",id:"BlogTitle",onChange:function(e){o(e.target.value)}})),r.a.createElement("div",null,"Author:",r.a.createElement("input",{type:"text",value:i,name:"BlogAuthor",id:"BlogAuthor",onChange:function(e){f(e.target.value)}})),r.a.createElement("div",null,"URL:",r.a.createElement("input",{type:"text",value:b,name:"BlogUrl",id:"BlogUrl",onChange:function(e){v(e.target.value)}})),r.a.createElement("button",{type:"submit"},"Save Blog")))},v=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),c=Object(p.a)(n,2),u=c[0],o=c[1],l={display:u?"none":""},s={display:u?"":"none"},i=function(){o(!u)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:i}})),r.a.createElement("div",null,r.a.createElement("div",{style:l},r.a.createElement("button",{onClick:i},e.buttonLabel)),r.a.createElement("div",{style:s},e.children,r.a.createElement("button",{onClick:i},"Cancel")))}));v.displayName="Togglable";var g=v,h=n(5),E=n.n(h),w=null,O={getAll:function(){return E.a.get("/api/blogs").then((function(e){return e.data}))},create:function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:w}},e.next=3,E.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(i.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.put("".concat("/api/blogs","/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:w}},e.next=3,E.a.delete("".concat("/api/blogs","/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){w="bearer ".concat(e)}},j={login:function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),l=Object(p.a)(u,2),v=l[0],h=l[1],E=Object(a.useState)(""),w=Object(p.a)(E,2),y=w[0],k=w[1],x=Object(a.useState)(null),S=Object(p.a)(x,2),B=S[0],L=S[1],A=Object(a.useState)(null),C=Object(p.a)(A,2),U=C[0],N=C[1],T=Object(a.useState)("success"),I=Object(p.a)(T,2),R=I[0],D=I[1],J=Object(a.useRef)();Object(a.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getAll();case 2:t=e.sent,n=t.sort((function(e,t){return e.likes>t.likes?1:-1})),c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);L(t),O.setToken(t.token)}}),[]);var P=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.login({username:v,password:y});case 4:n=e.sent,window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(n)),O.setToken(n.token),L(n),h(""),k(""),q("success","Logged in succesfully!",5e3),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),q("error","Login failed: Incorrect credentials",5e3);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem("loggedBlogAppUser"),L(null),q("success","Logged out succesfully!",5e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J.current.toggleVisibility(),e.next=3,O.create(t);case 3:a=e.sent,c(n.concat(a)),q("success","New blog with title ".concat(a.title," added!"),5e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.find((function(e){return e.id===t})).title,!window.confirm('Do you really want to delete "'.concat(a,'"?'))){e.next=6;break}return e.next=4,O.remove(t);case 4:c(n.filter((function(e){return e.id!==t}))),q("success",'Successfully removed "'.concat(a,'"'),5e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.find((function(e){return e.id===t})),r=Object(o.a)({},a,{likes:a.likes+1,user:a.user.id}),e.next=4,O.update(t,r);case 4:u=e.sent,c(n.map((function(e){return e.id!==t?e:Object(o.a)({},u,{user:e.user})})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e,t,n){D(e),N(t),G(n)},G=function(e){return setTimeout((function(){N(null)}),e)};return r.a.createElement("div",{className:"boxDiv"},r.a.createElement("h1",null,"Blog App"),r.a.createElement(m,{message:U,style:R}),null===B?r.a.createElement("div",null,r.a.createElement("h3",null,"Log in to Blog App"),r.a.createElement(g,{buttonLabel:"Login"},r.a.createElement(d,{handleLogin:P,username:v,password:y,setUsername:h,setPassword:k}))):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"Logged in as ",B.name),r.a.createElement("button",{onClick:z},"Log Out")),r.a.createElement(g,{buttonLabel:"Add New Blog",ref:J},r.a.createElement(b,{createBlog:H})),r.a.createElement("div",null,r.a.createElement("h3",null,"All Blogs:"),n.map((function(e){return r.a.createElement(f,{key:e.id,handleLike:F,blog:e,user:B,remove:V})})))))};u.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2d6c9109.chunk.js.map