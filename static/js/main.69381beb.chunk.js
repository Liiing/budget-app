(this.webpackJsonpbudgetary=this.webpackJsonpbudgetary||[]).push([[0],{101:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},157:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},472:function(e,t,n){},473:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),a=n(66),i=n.n(a),r=n(10),o=n.n(r),l=n(26),u=n(6),j=(n(154),n.p+"static/media/piggy-bank-euro.0201ba45.svg"),d=(n(155),n(1));var b=function(){return Object(d.jsxs)("div",{className:"logo-box",children:[Object(d.jsx)("div",{className:"logo-img-box",children:Object(d.jsx)("img",{className:"logo-svg",src:j,alt:"piggy bank"})}),Object(d.jsxs)("div",{className:"logo-text",children:[Object(d.jsx)("h1",{className:"app-name",children:"Budgetary"}),Object(d.jsx)("h3",{className:"slogan-text",children:"Keep track of your Finances"})]})]})},m=(n(157),function(e){var t=e.type,n=e.form,s=e.onChange,c=e.label,a=e.style,i=e.onFocus,r=e.onBlur;return Object(d.jsxs)("div",{className:"input-box",style:a,children:["password"===t&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"material-icons lock-icon",children:"lock"}),Object(d.jsx)("input",{className:"password-input",type:"password",form:n,onChange:s,onFocus:i,onBlur:r,required:!0})]}),"email"===t&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"material-icons user-icon",children:"person"}),Object(d.jsx)("input",{className:"username-input",type:"text",form:n,onChange:s,required:!0})]}),"confirm"===t&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"material-icons lock-icon",children:"lock"}),Object(d.jsx)("input",{className:"password-input",type:"password",form:n,onChange:s,onFocus:i,onBlur:r,required:!0})]}),Object(d.jsx)("span",{className:"floating-label",children:c})]})}),O=n(45);n(158),n(160),n(474);O.a.initializeApp({apiKey:"AIzaSyDFfBHJPnormfyFlRSbdM360FsUWgbKt3Y",authDomain:"btary-app.firebaseapp.com",databaseURL:"https://btary-app-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"btary-app",storageBucket:"btary-app.appspot.com",messagingSenderId:"898811137304",appId:"1:898811137304:web:abcfec0e9fe36676e7e26d",measurementId:"G-FHSCTD4XJ8"}),O.a.analytics();var p=O.a.auth(),h=O.a.database(),f=(O.a,c.a.createContext()),x=function(){return Object(s.useContext)(f)},v=function(e){var t=e.children,n=Object(s.useState)(),c=Object(u.a)(n,2),a=c[0],i=c[1],r=Object(s.useState)(!0),o=Object(u.a)(r,2),l=o[0],j=o[1];Object(s.useEffect)((function(){return p.onAuthStateChanged((function(e){i(e),j(!1)}))}),[]);var b={currentUser:a,login:function(e,t){return p.signInWithEmailAndPassword(e,t)},signup:function(e,t){return p.createUserWithEmailAndPassword(e,t)},logout:function(){return p.signOut()},resetPassword:function(e){p.sendPasswordResetEmail(e)},updateEmail:function(e){a.updateEmail(e)},updatePassword:function(e){a.updatePassword(e)},sendEmailVerification:function(){a.sendEmailVerification()}};return Object(d.jsx)(f.Provider,{value:b,children:!l&&t})},g=n(8),y=n(14);n(162);var N=function(e){var t=e.onLogin,n=void 0!==t&&t,c=e.resendVerificationEmail,a=Object(s.useState)(!1),i=Object(u.a)(a,2),r=i[0],o=i[1];return Object(d.jsxs)("div",{className:"email-verification-info-box",children:[Object(d.jsx)("h3",{children:"Verify Email"}),!n&&Object(d.jsx)("p",{children:"We have send you an email to verify your address. You must verify your email before using budgetary."}),n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Please verify your email before using budgetary."}),!r&&Object(d.jsx)("u",{onClick:function(){c(o)},children:"Resend Email"}),r&&Object(d.jsx)("p",{children:"Verification Email has been resend."})]})]})};n(163);var w=function(e){var t=e.children,n=e.onClose;return Object(d.jsx)("div",{className:"modal-box-background",children:Object(d.jsxs)("div",{className:"modal-box",children:[Object(d.jsx)("div",{className:"close-button-container",children:Object(d.jsx)("span",{className:"close-button",onClick:n,children:"\xd7"})}),Object(d.jsx)("div",{className:"modal-box-content",children:t})]})})};n(164);var S=function(e){var t,n;switch(e.errorCode){case"auth/invalid-email":n="Invalid Email",t="The email is not valid.";break;case"auth/wrong-password":n="Wrong Password",t="The password is not correct.";break;case"auth/email-already-in-use":n="",t="The email is already registered.";break;case"auth/missing-fields":n="Fields missing",t="Not all fields are filled.";break;case"auth/password-insufficient":n="Password doesn't meet requirements",t="Your password doesn't meet the minimum requirements.";break;default:n="Error!",t="Something went wrong."}return Object(d.jsxs)("div",{className:"error-box",children:[n&&Object(d.jsx)("h3",{children:n}),t&&Object(d.jsx)("p",{children:t})]})};function k(e){var t=e.onClose,n=Object(s.useState)(),c=Object(u.a)(n,2),a=c[0],i=c[1],r=Object(s.useState)(!1),j=Object(u.a)(r,2),b=j[0],m=j[1],O=x().resetPassword;function p(){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Trying to reset password..."),e.prev=1,console.log("starting..."),e.next=5,O(a);case 5:console.log("finished..."),m(!0),console.log("changed text..."),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert("Something went wrong...");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(d.jsxs)(w,{onClose:t,children:[Object(d.jsx)("h2",{children:"Reset Password"}),Object(d.jsx)("p",{children:"Please enter your email address and we will send you an email with instructions to set a new password."}),Object(d.jsxs)("div",{className:"password-reset-box",onSubmit:p,children:[Object(d.jsxs)("div",{className:"email-input",children:[Object(d.jsx)("label",{children:"Email:"}),Object(d.jsx)("input",{className:"username-input",type:"email",onChange:function(e){var t=e.target.value;return i(t)},required:!0})]}),Object(d.jsxs)("div",{className:"button-container",children:[!b&&Object(d.jsx)("button",{onClick:function(){return p()},children:"Reset Password"}),b&&Object(d.jsx)("p",{children:"Email has been sent."})]})]})]})}var C=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(u.a)(a,2),r=i[0],j=i[1],O=Object(s.useState)(!1),p=Object(u.a)(O,2),h=p[0],f=p[1],v=Object(s.useState)(!1),w=Object(u.a)(v,2),C=w[0],E=w[1],A=Object(s.useState)(!1),F=Object(u.a)(A,2),L=F[0],P=F[1],D=Object(s.useState)(""),R=Object(u.a)(D,2),U=R[0],B=R[1],I=Object(s.useState)(!1),V=Object(u.a)(I,2),_=V[0],M=V[1],T=Object(g.g)(),q=x(),W=q.login,X=q.logout;function H(){return(H=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),E(!1),B(""),M(!1),e.prev=5,e.next=8,W(n,r).then((function(e){e.user.emailVerified?M(!0):(E(!0),X())})).catch((function(e){B(e.code)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),B("auth/unknown-error");case 13:_&&T.push("/dashboard"),f(!1);case 15:case"end":return e.stop()}}),e,null,[[5,10]])})))).apply(this,arguments)}function Y(){return(Y=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(n,r).then((function(e){e.user.sendEmailVerification(),t(!0),X()})).catch((function(e){B(e.code)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),B("auth/unknown-error");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("div",{className:"logo-container",children:Object(d.jsx)(b,{})}),Object(d.jsxs)("div",{className:"login-container",children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{className:"form-box",children:Object(d.jsxs)("form",{className:"login-form",onSubmit:function(e){return H.apply(this,arguments)},children:[Object(d.jsx)(m,{type:"email",form:"login-form",label:"email",onChange:function(e){var t=e.target.value;return c(t)}}),Object(d.jsx)(m,{type:"password",form:"login-form",label:"password",onChange:function(e){var t=e.target.value;return j(t)}}),Object(d.jsx)("div",{className:"forgot-password-container",children:Object(d.jsx)("p",{className:"forgot-password",onClick:function(){P(!0)},children:"forgot password"})}),U&&Object(d.jsx)(S,{errorCode:U}),C&&Object(d.jsx)(N,{resendVerificationEmail:function(e){return Y.apply(this,arguments)},onLogin:!0}),Object(d.jsx)("input",{className:"login-button",type:"submit",value:"Login",disabled:h}),Object(d.jsx)("div",{className:"sign-up-container",children:Object(d.jsx)(y.b,{to:"/signup",children:"SIGN UP"})})]})})]}),L&&Object(d.jsx)(k,{onClose:function(){P(!1)}})]})};n(101),n(169),n(170),n(171);var E=function(){var e=x(),t=(e.currentUser,e.logout),n=Object(g.g)(),c=Object(s.useState)(""),a=Object(u.a)(c,2),i=(a[0],a[1]);function r(){return(r=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(""),e.prev=1,e.next=4,t();case 4:n.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),i("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(d.jsx)("button",{className:"logout",onClick:function(){return r.apply(this,arguments)},children:"Logout"})};var A=function(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{className:"settings",children:[Object(d.jsx)("div",{onClick:function(){c(!n)},className:"settings-opener"}),Object(d.jsx)("div",{className:"settings-wrapper ".concat(n?"open":"closed"),children:Object(d.jsxs)("div",{className:"settings-window",children:[Object(d.jsx)(E,{}),Object(d.jsx)("button",{onClick:function(){return c(!1)},className:"close-settings",children:"X"})]})})]})},F=(n(172),n(39));var L=function(){var e=Object(s.useState)(),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(),i=Object(u.a)(a,2),r=i[0],j=i[1],b=Object(s.useState)(!1),m=Object(u.a)(b,2),O=m[0],f=m[1],x=Object(s.useState)("New monthly budget"),v=Object(u.a)(x,2),g=v[0],y=v[1],N=Object(F.c)((function(e){return e.moneyActivityList})),w=(s.useRef,HTMLInputElement,p.currentUser.uid),S=h.ref("users/"+w),k=!1;function C(){return(C=Object(l.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){S.on("value",(function(t){var n=t.val();e(n.baseBudget)}))})),e.next=3,n;case 3:s=e.sent,c(s),t();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){var e=0,t=0;return N.forEach((function(n){"sub"===n.type?e+=n.amount:t+=n.amount})),n+t-e}function A(){if(0===n||""===n||void 0===n)return!1;y("Current Budget"),f(!0)}return Object(s.useEffect)((function(){!function(e){C.apply(this,arguments)}(A)})),Object(d.jsx)("div",{className:"budget-container",children:Object(d.jsxs)("form",{className:"budget-form floating-inputs ".concat(O?"saved":"not-saved"),onSubmit:function(e){e.preventDefault(),f(!0),r=parseFloat(r),isNaN(r)?alert("input is not a number"):h.ref("users/"+w).set({baseBudget:parseFloat(r)})}.bind(this),children:[Object(d.jsx)("input",{name:"budget",type:"text",className:"budget",value:0!==n&&""!==n&&void 0!==n?E().toFixed(2)+" \u20ac":r,onBlur:function(e){var t=e.target.value;return j(t)},required:!0}),Object(d.jsx)("button",{type:"submit",className:"save-budget",children:"Save"}),Object(d.jsx)("span",{className:"budget-label",children:g}),Object(d.jsxs)("div",{className:"diff-container",children:[Object(d.jsx)("input",{value:function(){if(0!==n&&""!==n&&void 0!==n){var e=E();return e>n?(k=!0,"+ "+(e-n).toFixed(2)):n>e?(k=!1,"- "+(n-e).toFixed(2)):(k=!0,0)}return r}(),className:"budget-diff ".concat(k?"diff-green":"diff-red")}),Object(d.jsx)("span",{className:"budget-label",children:"Difference of base budget"})]})]})})};n(173);var P=function(){var e=new Date,t=String(e.getMonth()+1).padStart(2,"0")+e.getFullYear(),n=p.currentUser.uid,c=h.ref("users/"+n+"/expenses/"+t),a=Object(F.b)(),i=Object(F.c)((function(e){return e.moneyActivityList})),r=Object(s.useState)(!1),o=Object(u.a)(r,2),l=o[0],j=o[1],b=Object(s.useState)(""),m=Object(u.a)(b,2),O=(m[0],m[1]);return Object(s.useEffect)((function(){!function(e){var t=[];c.on("value",(function(n){var s=n.val();null!==s&&""!==s&&0!==s?(Object.keys(s).forEach((function(e){t.push(s[e]),console.log(t)})),e({type:"moneyActitivtyList/updateList",list:t}),t=[],j(!1)):j(!0)}))}(a),setTimeout((function(){O("Updated")}),100)}),[a]),Object(d.jsxs)("div",{className:"list-container",children:[Object(d.jsxs)("div",{className:"list-titles",children:[Object(d.jsx)("div",{className:"list-title",children:"Amount"}),Object(d.jsx)("div",{className:"list-title",children:"Description"}),Object(d.jsx)("div",{className:"list-title",children:"Date"}),Object(d.jsx)("div",{className:"list-title",children:"Monthly"})]}),l?Object(d.jsx)("p",{children:"no entries yet"}):i.map((function(e){return Object(d.jsxs)("div",{className:"entry-container",children:[Object(d.jsx)("div",{className:"list-item amount-container ".concat("sub"===e.type?"expense":"credit"),children:"sub"===e.type?"- "+e.amount.toFixed(2):"+ "+e.amount.toFixed(2)}),Object(d.jsx)("div",{className:"list-item description-container",children:e.description}),Object(d.jsx)("div",{className:"list-item date-container",children:e.date}),Object(d.jsx)("div",{className:"list-item is-monthly-container",children:e.isMonthly.toString()})]},e.id)}))]})};n(174);var D=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),i=Object(u.a)(a,2),r=i[0],o=i[1],l=Object(s.useState)(!1),j=Object(u.a)(l,2),b=j[0],m=j[1],O=Object(s.useState)(""),f=Object(u.a)(O,2),x=f[0],v=f[1],g=Object(s.useState)(""),y=Object(u.a)(g,2),N=y[0],w=y[1],S=Object(s.useState)(""),k=Object(u.a)(S,2),C=k[0],E=k[1],A=p.currentUser.uid,F=new Date,L=String(F.getDate()).padStart(2,"0"),P=String(F.getMonth()+1).padStart(2,"0"),D=F.getFullYear(),R=F.getHours(),U=F.getMinutes(),B=F.getSeconds(),I=F.getMilliseconds();F=L+"/"+P+"/"+D;var V=L+P+D+R+U+B+I,_=P+D,M=h.ref("users/"+A+"/expenses/"+_+"/"+V),T=function(e,t){E(t),c(e),o(!0)};return Object(d.jsxs)("div",{className:"button-and-new-money-activity-container",children:[Object(d.jsx)("div",{className:"new-credit-entry",children:Object(d.jsx)("button",{className:"new-credit-entry-button",onClick:function(){return T("Add as monthly credit entry","add")}})}),Object(d.jsx)("div",{className:"new-expense",children:Object(d.jsx)("button",{className:"new-expense-button",onClick:function(){return T("Add as monthly expense","sub")}})}),Object(d.jsx)("div",{className:"new-money-activity-wrapper ".concat(r?"showNewMoneyActivitiyWindow":"hideNewMoneyActivitiyWindow"),children:Object(d.jsxs)("div",{className:"new-money-activity-container",children:[Object(d.jsx)("span",{className:"window-title",children:"Add New Money Activity"}),Object(d.jsx)("button",{className:"close",onClick:function(){return o(!1)},children:"X"}),Object(d.jsxs)("div",{className:"text-input-box",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",className:"money",onChange:function(e){var t=e.target.value;return v(t)},required:!0}),Object(d.jsx)("span",{className:"floating-label",children:"amount"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",className:"description",onChange:function(e){var t=e.target.value;return w(t)},required:!0}),Object(d.jsx)("span",{className:"floating-label",children:"description"})]})]}),Object(d.jsx)("input",{defaultChecked:b,onChange:function(){return m(!b)},type:"checkbox",className:"checkbox"}),Object(d.jsx)("label",{htmlFor:"checkbox",children:n}),Object(d.jsx)("div",{className:"save-container",children:Object(d.jsx)("button",{onClick:function(){return M.set({type:C,amount:parseFloat(x),description:N,isMonthly:b,date:F,id:V}),void o(!1)},className:"save",children:"Save"})})]})})]})};var R=function(){console.log("test");var e=Object(s.useState)("false"),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{className:"dashboard mobile-dash ".concat(n?"closed":"active"),children:[Object(d.jsx)("div",{className:"sidebar mobile ".concat(n?"closed":"active"),children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"menu-burger",onClick:function(){c(!n)},children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]}),Object(d.jsxs)("div",{className:"dashboard-views",children:[Object(d.jsx)(y.c,{activeClassName:"active",to:"/dashboard",children:"D"}),Object(d.jsx)(y.c,{activeClassName:"active",to:"/savings",children:"S"})]}),Object(d.jsx)(A,{})]})}),Object(d.jsxs)("div",{className:"main-section",children:[Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"main-dashboard",children:[Object(d.jsxs)("div",{className:"budget-and-new-money-activity-container",children:[Object(d.jsx)(D,{}),Object(d.jsx)(L,{})]}),Object(d.jsx)(P,{})]})]})]})};n(175);var U=function(){var e=Object(s.useState)("false"),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{className:"dashboard saving mobile-dash ".concat(n?"closed":"active"),children:[Object(d.jsx)("div",{className:"sidebar mobile ".concat(n?"closed":"active"),children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"menu-burger",onClick:function(){c(!n)},children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]}),Object(d.jsxs)("div",{className:"dashboard-views",children:[Object(d.jsx)(y.c,{activeClassName:"active",to:"/dashboard",children:"D"}),Object(d.jsx)(y.c,{activeClassName:"active",to:"/savings",children:"S"})]}),Object(d.jsx)(A,{})]})}),Object(d.jsx)("div",{className:"main-section",children:Object(d.jsx)(b,{})})]})},B=(n(176),new RegExp("^(.){8,}$")),I=new RegExp("[!@#$%^&*(),.?\":{}|<>-_'/\\=\xa7;`\xb4+~]","g"),V=new RegExp("[A-Z\xc4\xdc\xd6]"),_=new RegExp("[0-9]"),M=function(e,t){return e===t&&(!!B.test(e)&&(!!I.test(e)&&(!!V.test(e)&&!!_.test(e))))},T=(n(177),function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(u.a)(a,2),r=i[0],j=i[1],O=Object(s.useState)(""),p=Object(u.a)(O,2),f=p[0],v=p[1],g=Object(s.useState)(!1),w=Object(u.a)(g,2),k=w[0],C=w[1],E=x(),A=E.signup,F=E.logout,L=Object(s.useState)(!1),P=Object(u.a)(L,2),D=P[0],R=P[1],U=Object(s.useState)(!1),B=Object(u.a)(U,2),I=B[0],V=B[1],_=Object(s.useState)(""),T=Object(u.a)(_,2),q=T[0],W=T[1];function X(e){return H.apply(this,arguments)}function H(){return(H=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,h.ref("users/"+t).on("value",(function(e){n=!e.exists()})),n&&h.ref("users/"+t).set({baseBudget:0,budget:0,expenses:{},goals:{},History:{}});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return n?!!r&&!!f:(W("auth/missing-email"),!1)}function J(){return(J=Object(l.a)(o.a.mark((function e(t){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),W(""),s=!0,Y()||(W("auth/missing-fields"),s=!1),!M(r,f)&&s&&(W("auth/password-insufficient"),s=!1),!s){e.next=16;break}return e.prev=6,C(!0),e.next=10,A(n,r).then((function(e){e.user.sendEmailVerification(),X(e.user.uid),F(),V(!0)})).catch((function(e){return W(e.code)}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),W("auth/unknown-error");case 15:C(!1);case 16:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("div",{className:"logo-container",children:Object(d.jsx)(b,{})}),Object(d.jsxs)("div",{className:"signup-container",children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{className:"form-box",children:Object(d.jsxs)("form",{className:"signup-form",onSubmit:function(e){return J.apply(this,arguments)},children:[Object(d.jsx)(m,{type:"email",form:"signup-form",label:"email",onChange:function(e){var t=e.target.value;return c(t)}}),Object(d.jsx)(m,{type:"password",form:"signup-form",label:"password",onFocus:function(){return R(!0)},onBlur:function(){return R(!1)},onChange:function(e){var t=e.target.value;return j(t)}}),Object(d.jsxs)("div",{className:"password-rules-container ".concat(D?"showPasswordRules":"hidePasswordRules"),children:[Object(d.jsx)("h3",{children:"Your password must contain at least:"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"8 charaters"}),Object(d.jsx)("li",{children:"one capitalized letter"}),Object(d.jsx)("li",{children:"one number"}),Object(d.jsx)("li",{children:"one special charater"})]})]}),Object(d.jsx)(m,{type:"confirm",form:"signup-form",label:"confirm password",onChange:function(e){var t=e.target.value;return v(t)}}),q&&Object(d.jsx)(S,{errorCode:q}),I&&Object(d.jsx)(N,{}),Object(d.jsx)("input",{className:"signup-button",type:"submit",value:"Sign Up",disabled:k}),Object(d.jsx)("div",{className:"sign-up-container",children:Object(d.jsx)(y.b,{to:"/budget-app/login",children:"Login"})})]})})]})]})}),q=(n(472),n(34)),W=n(69);function X(e){var t=e.component,n=Object(W.a)(e,["component"]),s=x().currentUser,c=!!s&&s.emailVerified;return Object(d.jsx)(g.b,Object(q.a)(Object(q.a)({},n),{},{render:function(e){return c?Object(d.jsx)(t,Object(q.a)({},e)):Object(d.jsx)(g.a,{to:"/login"})}}))}function H(e){var t=e.component,n=Object(W.a)(e,["component"]),s=x().currentUser,c=!!s&&s.emailVerified;return Object(d.jsx)(g.b,Object(q.a)(Object(q.a)({},n),{},{render:function(e){return c?Object(d.jsx)(g.a,{to:"/dashboard"}):Object(d.jsx)(t,Object(q.a)({},e))}}))}var Y=n(72),J=n(98),z=n(149),K=Object(z.createLogger)(),G={moneyActivityList:[]};function $(e,t){var n=Object(Y.a)(e.moneyActivityList);return n=t,e.moneyActivityList=n,e}function Z(e,t){var n=Object(Y.a)(e.moneyActivityList);return n.push(t),e.moneyActivityList=n,e}function Q(e,t){var n=Object(Y.a)(e.moneyActivityList),s=function(e,t){return e.moneyActivityList.findIndex((function(e){return e.id===t}))}(e,t);return n.splice(s,1),e.moneyActivityList=n,e}var ee=Object(J.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"moneyEntry/addEntry":return Z(e);case"moneyEntry/deleteEntry":return Q(e,t.id);case"moneyActitivtyList/updateList":return $(e,t.list);default:return console.warn("Action not found.",t),e}}),Object(J.a)(K),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),te=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(te,"px"));var ne=document.getElementById("root")||document.createElement("div");i.a.render(Object(d.jsx)(y.a,{basename:"/budget-app",children:Object(d.jsx)(v,{children:Object(d.jsx)(F.a,{store:ee,children:Object(d.jsxs)(g.d,{children:[Object(d.jsx)(H,{exact:!0,path:"/login",component:C}),Object(d.jsx)(H,{exact:!0,path:"/signup",component:T}),Object(d.jsx)(X,{path:"/dashboard",component:R}),Object(d.jsx)(X,{path:"/savings",component:U}),Object(d.jsx)(X,{path:"/",children:Object(d.jsx)(g.a,{to:"/dashboard"})})]})})})}),ne)}},[[473,1,2]]]);
//# sourceMappingURL=main.69381beb.chunk.js.map