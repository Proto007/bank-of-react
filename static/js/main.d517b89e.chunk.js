(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{42:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(33),a=n.n(s),r=(n(42),n(34)),i=n(24),o=n(19),u=n(8),d=n(9),b=n(10),j=n(11),l=n(21),m=n.n(l),h=n(12),p=n(2),O=n(0),x=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"topnav",children:[Object(O.jsx)(h.b,{to:"/userProfile",children:"Profile"}),Object(O.jsx)(h.b,{to:"/login",children:"Login"}),Object(O.jsx)(h.b,{to:"/credits",children:"Credits"}),Object(O.jsx)(h.b,{to:"/debits",children:"Debits"}),Object(O.jsx)("div",{className:"topnav-right",children:Object(O.jsx)(h.b,{to:"/",children:Object(O.jsx)("img",{src:"/logo192.png",alt:"react-logo",width:"25",height:"25"})})})]})}}]),n}(c.Component),f=x,g=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{}),Object(O.jsx)("h1",{className:"page-title",children:"Bank of React"}),Object(O.jsx)("div",{className:"big-icon",children:Object(O.jsx)("img",{src:"/logo512.png",alt:"big-logo"})})]})}}]),n}(c.Component),v=g,N=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{}),Object(O.jsx)("h1",{className:"page-title",children:"User Profile"}),Object(O.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(O.jsxs)("div",{children:["Member Since: ",this.props.memberSince]})]})}}]),n}(c.Component),A=N,S=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(o.a)({},e.state.user),c=t.target.name,s=t.target.value;n[c]=s;var a=new Date;n.memberSince=a.getMonth()+1+"/"+a.getDate()+"/"+a.getFullYear(),e.setState({user:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:"",memberSince:""},redirect:!1},e}return Object(d.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(O.jsx)(p.Redirect,{to:"/userProfile"}):Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{}),Object(O.jsx)("h1",{className:"page-title",children:"Login"}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(O.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password"})]}),Object(O.jsx)("button",{children:"Log In"})]})]})}}]),n}(c.Component),k=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"balance",children:Object(O.jsxs)("h2",{children:["Balance: ",this.props.accountBalance.toFixed(2),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Credits: ",this.props.creditsAmount.toFixed(2),Object(O.jsx)("br",{}),"Debits: ",this.props.debitsAmount.toFixed(2)]})})}}]),n}(c.Component),B=k,y=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{}),Object(O.jsx)(B,{accountBalance:e.accountBalance,creditsAmount:e.creditsAmount,debitsAmount:e.debitsAmount}),Object(O.jsx)("h1",{className:"debit-credit-title",children:"Debits"}),e.debits.map((function(e){var t=e.date.slice(0,10);return Object(O.jsxs)("li",{className:"items-list",children:[e.amount," ",e.description," ",t]},e.id)})),Object(O.jsxs)("form",{className:"add-form",onSubmit:e.addDebit,children:[Object(O.jsx)("input",{type:"text",name:"description"}),Object(O.jsx)("input",{type:"number",step:.01,name:"amount"}),Object(O.jsx)("button",{type:"submit",children:"Add Debit"})]})]})},C=n(23),D=n.n(C),w=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{}),Object(O.jsx)(B,{accountBalance:e.accountBalance,creditsAmount:e.creditsAmount,debitsAmount:e.debitsAmount}),Object(O.jsx)("h1",{className:"debit-credit-title",children:"Credits"}),e.credits.map((function(e){var t=e.date.slice(0,10);return Object(O.jsxs)("li",{className:"items-list",children:[e.amount," ",e.description," ",t]},e.id)})),Object(O.jsxs)("form",{className:"add-form",onSubmit:e.addCredit,children:[Object(O.jsx)("input",{type:"text",name:"description"}),Object(O.jsx)("input",{type:"number",step:.01,name:"amount"}),Object(O.jsx)("button",{type:"submit",children:"Add Credit"})]})]})},F=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(o.a)({},e.state.currentUser);n.userName=t.userName,n.memberSince=t.memberSince,e.setState({currentUser:n})},e.addDebit=function(t){t.preventDefault();var n=t.target[0].value,c=t.target[1].value,s=new Date,a=s.getMonth()+1+"-"+s.getDate()+"-"+s.getFullYear(),r={id:e.state.debits.length+1,description:n,amount:c,date:a};e.setState({debits:[].concat(Object(i.a)(e.state.debits),[r]),accountBalance:e.state.accountBalance-Number(c),debitsAmount:e.state.debitsAmount+Number(c)})},e.addCredit=function(t){t.preventDefault();var n=t.target[0].value,c=t.target[1].value,s=new Date,a=s.getMonth()+1+"-"+s.getDate()+"-"+s.getFullYear(),r={id:e.state.credits.length+1,description:n,amount:c,date:a};e.setState({credits:[].concat(Object(i.a)(e.state.credits),[r]),accountBalance:e.state.accountBalance+Number(c),creditsAmount:e.state.creditsAmount+Number(c)})},e.state={currentUser:{userName:"Joe Smith",memberSince:"07/23/96"},accountBalance:0,creditsAmount:0,debitsAmount:0,debits:[],credits:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(m.a.mark((function e(){var t,n,c,s=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://moj-api.herokuapp.com/debits",t="https://moj-api.herokuapp.com/credits",e.prev=2,e.next=5,D.a.get("https://moj-api.herokuapp.com/debits");case 5:n=e.sent,console.log(n),this.setState({debits:n.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),e.t0.response&&(console.log(e.t0.response.data),console.log(e.t0.response.status));case 13:return e.prev=13,e.next=16,D.a.get(t);case 16:c=e.sent,console.log(c),this.setState({credits:c.data}),e.next=24;break;case 21:e.prev=21,e.t1=e.catch(13),e.t1.response&&(console.log(e.t1.response.data),console.log(e.t1.response.status));case 24:(function(){s.state.debits.map((function(e){return s.setState({accountBalance:s.state.accountBalance-Number(e.amount),debitsAmount:s.state.debitsAmount+Number(e.amount)})}))})(),function(){s.state.credits.map((function(e){return s.setState({accountBalance:s.state.accountBalance+Number(e.amount),creditsAmount:s.state.creditsAmount+Number(e.amount)})}))}();case 28:case"end":return e.stop()}}),e,this,[[2,10],[13,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(O.jsx)(h.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(p.Route,{exact:!0,path:"/",render:function(){return Object(O.jsx)(v,{})}}),Object(O.jsx)(p.Route,{exact:!0,path:"/userProfile",render:function(){return Object(O.jsx)(A,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(O.jsx)(p.Route,{exact:!0,path:"/login",render:function(){return Object(O.jsx)(S,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(O.jsx)(p.Route,{exact:!0,path:"/debits",render:function(){return Object(O.jsx)(y,{accountBalance:e.state.accountBalance,debits:e.state.debits,addDebit:e.addDebit,creditsAmount:e.state.creditsAmount,debitsAmount:e.state.debitsAmount})}}),Object(O.jsx)(p.Route,{exact:!0,path:"/credits",render:function(){return Object(O.jsx)(w,{accountBalance:e.state.accountBalance,credits:e.state.credits,addCredit:e.addCredit,creditsAmount:e.state.creditsAmount,debitsAmount:e.state.debitsAmount})}})]})})}}]),n}(c.Component),L=F,U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))},P=n(37),I=n.n(P);a.a.render(Object(O.jsx)(I.a,{basename:"/bank-of-react",children:Object(O.jsx)(L,{})}),document.getElementById("root")),U()}},[[74,1,2]]]);
//# sourceMappingURL=main.d517b89e.chunk.js.map