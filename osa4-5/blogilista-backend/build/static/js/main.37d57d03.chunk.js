(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{26:function(e,t,a){e.exports=a(52)},31:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),s=(a(31),a(15)),u=a(2),i=a.n(u),o=a(4),m=a(5),p=a(6),d=function(e){var t=e.handleLike,a=e.blog,c=e.user,l=e.remove,s=Object(n.useState)(!1),u=Object(m.a)(s,2),d=u[0],f=u[1],v=function(){f(!d)},g=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(a.id);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(a.id);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d?r.a.createElement("div",{className:"blog"},r.a.createElement("div",{className:"title-and-showbutton-div"},r.a.createElement("h2",null,a.title),r.a.createElement(p.a,{variant:"secondary",className:"btn-sm",style:{float:"right",verticalAlign:"text-top"},onClick:v},"Hide")),r.a.createElement("p",null,"Author: ",a.author),r.a.createElement("p",null,"URL: ",r.a.createElement("a",{href:"https://".concat(a.url)},a.url)),r.a.createElement("p",{className:"blog-likes"},"Likes: ",a.likes,r.a.createElement(p.a,{variant:"success",className:"like-button btn-sm",onClick:g},"Like")),r.a.createElement("p",null,"Added By: ",a.user.username),c.username===a.user.username?r.a.createElement(p.a,{variant:"danger",size:"sm",onClick:b},"Remove"):""):r.a.createElement("div",{className:"blog blogHidden"},r.a.createElement("h5",null,a.title),r.a.createElement(p.a,{style:{float:"right",verticalAlign:"middle"},variant:"info",className:"btn-sm",onClick:v},"Show"))},f=a(25),v=function(e){var t=e.message,a=e.style;return null===t?null:r.a.createElement(f.a,{id:"notification",variant:a},t)},g=function(e){var t=e.handleLogin,a=e.username,n=e.setUsername,c=e.password,l=e.setPassword;return r.a.createElement("div",{className:"loginFormDiv"},r.a.createElement("form",{onSubmit:t,className:"loginInputBox"},r.a.createElement("div",{className:"formInputDiv"},r.a.createElement("h6",{className:"inputText"},"Username:"),r.a.createElement("input",{type:"text",value:a,name:"Username",onChange:function(e){var t=e.target;return n(t.value)},id:"username",className:"loginInputField inputField"})),r.a.createElement("div",{className:"formInputDiv"},r.a.createElement("h6",{className:"inputText"},"Password:"),r.a.createElement("input",{type:"password",value:c,name:"Password",onChange:function(e){var t=e.target;return l(t.value)},id:"password",className:"loginInputField inputField"})),r.a.createElement(p.a,{className:"btn-sm",type:"submit",id:"login-button"},"Login")))},b=function(e){var t=e.createBlog,a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],s=c[1],u=Object(n.useState)(""),i=Object(m.a)(u,2),o=i[0],d=i[1],f=Object(n.useState)(""),v=Object(m.a)(f,2),g=v[0],b=v[1];return r.a.createElement("div",{className:"blogFormDiv"},r.a.createElement("h3",{className:"blogFormTitle"},"Add New Blog:"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:l,author:o,url:g}),s(""),d(""),b("")},id:"BlogForm",className:"blogInputBox"},r.a.createElement("div",{className:"formInputDiv"},r.a.createElement("h6",{className:"inputText"},"Title:"),r.a.createElement("input",{type:"text",value:l,name:"BlogTitle",id:"BlogTitle",onChange:function(e){s(e.target.value)},className:"blogInputField inputField"})),r.a.createElement("div",{className:"formInputDiv"},r.a.createElement("h6",{className:"inputText"},"Author:"),r.a.createElement("input",{type:"text",value:o,name:"BlogAuthor",id:"BlogAuthor",onChange:function(e){d(e.target.value)},className:"blogInputField inputField"})),r.a.createElement("div",{className:"formInputDiv"},r.a.createElement("h6",{className:"inputText"},"URL:"),r.a.createElement("input",{type:"text",value:g,name:"BlogUrl",id:"BlogUrl",onChange:function(e){b(e.target.value)},className:"blogInputField inputField"})),r.a.createElement(p.a,{variant:"success",type:"submit",className:"btn-sm"},"Save Blog")))},h=r.a.forwardRef((function(e,t){var a=Object(n.useState)(!1),c=Object(m.a)(a,2),l=c[0],s=c[1],u={display:l?"none":""},i={display:l?"":"none"},o=function(){s(!l)};return Object(n.useImperativeHandle)(t,(function(){return{toggleVisibility:o}})),r.a.createElement("div",null,r.a.createElement("div",{style:u},r.a.createElement(p.a,{variant:"primary",className:"btn-sm",onClick:o},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement(p.a,{variant:"secondary",className:"btn-sm",onClick:o},"Cancel")))}));h.displayName="Togglable";var E=h,w=a(9),O=a.n(w),y=null,N={getAll:function(){return O.a.get("/api/blogs").then((function(e){return e.data}))},create:function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:y}},e.next=3,O.a.post("/api/blogs",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(o.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.put("".concat("/api/blogs","/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),remove:function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:y}},e.next=3,O.a.delete("".concat("/api/blogs","/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){y="bearer ".concat(e)}},j={login:function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(m.a)(l,2),f=u[0],h=u[1],w=Object(n.useState)(""),O=Object(m.a)(w,2),y=O[0],k=O[1],x=Object(n.useState)(null),B=Object(m.a)(x,2),S=B[0],A=B[1],I=Object(n.useState)(null),L=Object(m.a)(I,2),F=L[0],T=L[1],C=Object(n.useState)("success"),D=Object(m.a)(C,2),U=D[0],R=D[1],J=Object(n.useRef)();Object(n.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getAll();case 2:t=(t=e.sent).sort((function(e,t){return e.likes<t.likes?1:-1})),c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);A(t),N.setToken(t.token)}}),[]);var P=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.login({username:f,password:y});case 4:a=e.sent,window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(a)),N.setToken(a.token),A(a),h(""),k(""),G("success","Logged in succesfully!",5e3),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),G("danger","Login failed: Incorrect credentials",5e3);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem("loggedBlogAppUser"),A(null),G("success","Logged out succesfully!",5e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J.current.toggleVisibility(),e.next=3,N.create(t);case 3:n=e.sent,c(a.concat(n)),G("success",'New blog with title "'.concat(n.title,'" added!'),5e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.find((function(e){return e.id===t})).title,!window.confirm('Do you really want to delete "'.concat(n,'"?'))){e.next=6;break}return e.next=4,N.remove(t);case 4:c(a.filter((function(e){return e.id!==t}))),G("success",'Successfully removed "'.concat(n,'"'),5e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.find((function(e){return e.id===t})),r=Object(s.a)({},n,{likes:n.likes+1,user:n.user.id}),e.next=4,N.update(t,r);case 4:l=e.sent,c(a.map((function(e){return e.id!==t?e:Object(s.a)({},l,{user:e.user})})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e,t,a){R(e),T(t),K(a)},K=function(e){return setTimeout((function(){T(null)}),e)};return r.a.createElement("div",{className:"boxDiv"},r.a.createElement("h1",null,"Blog App"),r.a.createElement(v,{message:F,style:U}),null===S?r.a.createElement("div",null,r.a.createElement("h3",null,"Log in to Blog App"),r.a.createElement(E,{buttonLabel:"Login"},r.a.createElement(g,{handleLogin:P,username:f,password:y,setUsername:h,setPassword:k}))):r.a.createElement("div",null,r.a.createElement("div",{className:"loggedInDiv subdiv-1"},r.a.createElement("p",null,"Logged in as ",S.name),r.a.createElement(p.a,{variant:"danger",className:"btn-sm",onClick:z},"Log Out")),r.a.createElement("br",null),r.a.createElement(E,{buttonLabel:"Add New Blog",ref:J},r.a.createElement(b,{createBlog:H})),r.a.createElement("br",null),r.a.createElement("div",{className:"allBlogs subdiv-1"},r.a.createElement("h3",null,"All Blogs:"),r.a.createElement("div",{id:"blogs-listed"},a.map((function(e){return r.a.createElement(d,{key:e.id,handleLike:q,blog:e,user:S,remove:V})}))))))};l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.37d57d03.chunk.js.map