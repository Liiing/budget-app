(this.webpackJsonpbudgetary=this.webpackJsonpbudgetary||[]).push([[0],{34:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(25),i=n.n(c),r=n(8),o=n.n(r),l=n(16),u=n(3),d=(n(43),n.p+"static/media/piggy-bank-euro.0201ba45.svg"),j=(n(44),n(1));var b=function(){return Object(j.jsxs)("div",{className:"logo-box",children:[Object(j.jsx)("div",{className:"logo-img-box",children:Object(j.jsx)("img",{className:"logo-svg",src:d,alt:"piggy bank"})}),Object(j.jsxs)("div",{className:"logo-text",children:[Object(j.jsx)("h1",{className:"app-name",children:"Budgetary"}),Object(j.jsx)("h3",{className:"slogan-text",children:"Keep track of your Finances"})]})]})},m=(n(46),function(e){var t=e.type,n=e.form,a=e.onChange,s=e.label,c=e.style,i=e.onFocus,r=e.onBlur;return Object(j.jsxs)("div",{className:"input-box",style:c,children:["password"===t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:"material-icons lock-icon",children:"lock"}),Object(j.jsx)("input",{className:"password-input",type:"password",form:n,onChange:a,onFocus:i,onBlur:r,required:!0})]}),"email"===t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:"material-icons user-icon",children:"person"}),Object(j.jsx)("input",{className:"username-input",type:"text",form:n,onChange:a,required:!0})]}),"confirm"===t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:"material-icons lock-icon",children:"lock"}),Object(j.jsx)("input",{className:"password-input confirm",type:"password",form:n,onChange:a,onFocus:i,onBlur:r,required:!0})]}),Object(j.jsx)("span",{className:"floating-label",children:s})]})}),O=n(20);n(47),n(49),n(72);O.a.initializeApp({apiKey:"AIzaSyDFfBHJPnormfyFlRSbdM360FsUWgbKt3Y",authDomain:"btary-app.firebaseapp.com",databaseURL:"https://btary-app-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"btary-app",storageBucket:"btary-app.appspot.com",messagingSenderId:"898811137304",appId:"1:898811137304:web:abcfec0e9fe36676e7e26d",measurementId:"G-FHSCTD4XJ8"}),O.a.analytics();var h=O.a.auth(),p=O.a.database(),x=(O.a,s.a.createContext()),f=function(){return Object(a.useContext)(x)},v=function(e){var t=e.children,n=Object(a.useState)(),s=Object(u.a)(n,2),c=s[0],i=s[1],r=Object(a.useState)(!0),o=Object(u.a)(r,2),l=o[0],d=o[1];Object(a.useEffect)((function(){return h.onAuthStateChanged((function(e){i(e),d(!1)}))}),[]);var b={currentUser:c,login:function(e,t){return h.signInWithEmailAndPassword(e,t)},signup:function(e,t){return h.createUserWithEmailAndPassword(e,t)},logout:function(){return h.signOut()},resetPassword:function(e){h.sendPasswordResetEmail(e)},sendEmailVerification:function(){c.sendEmailVerification()}};return Object(j.jsx)(x.Provider,{value:b,children:!l&&t})},g=n(7),y=n(9);n(53);var N=function(e){var t=e.onLogin,n=void 0!==t&&t,s=e.resendVerificationEmail,c=Object(a.useState)(!1),i=Object(u.a)(c,2),r=i[0],o=i[1];return Object(j.jsxs)("div",{className:"email-verification-info-box",children:[Object(j.jsx)("h3",{children:"Verify Email"}),!n&&Object(j.jsx)("p",{children:"We have send you an email to verify your address. You must verify your email before using budgetary."}),n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"Please verify your email before using budgetary."}),!r&&Object(j.jsx)("u",{onClick:function(){s(o)},children:"Resend Email"}),r&&Object(j.jsx)("p",{children:"Verification Email has been resend."})]})]})};n(54);var w=function(e){var t=e.children,n=e.onClose;return Object(j.jsx)("div",{className:"modal-box-background",children:Object(j.jsxs)("div",{className:"modal-box",children:[Object(j.jsx)("div",{className:"close-button-container",children:Object(j.jsx)("span",{className:"close-button",onClick:n,children:"\xd7"})}),Object(j.jsx)("div",{className:"modal-box-content",children:t})]})})};n(55);var S=function(e){var t,n,a=e.errorCode,s=e.styling;switch(a){case"auth/invalid-email":n="Invalid Email",t="The email is not valid.",s="invalid-email-box";break;case"auth/wrong-password":n="Wrong Password",t="The password is not correct.",s="wrong-password-box";break;case"auth/email-already-in-use":n="Email already in use",t="The email is already registered.",s="email-already-exists-box";break;case"auth/missing-fields":n="Fields missing",t="Not all fields are filled.",s="fiels-missing-box";break;case"auth/password-insufficient":n="Password doesn't meet requirements",t="Your password doesn't meet the minimum requirements.",s="password-weak-box";break;case"auth/too-many-attempts":n="Too many attempts",t="Please wait before trying to resend the verification mail",s="too-many-attempts-box";break;default:n="Error!",t="Something went wrong.",s="error-box"}return Object(j.jsxs)("div",{className:s,children:[Object(j.jsx)("div",{className:"error-icon"}),Object(j.jsxs)("div",{className:"error-text",children:[n&&Object(j.jsx)("h3",{children:n}),t&&Object(j.jsx)("p",{children:t})]})]})};function k(e){var t=e.onClose,n=Object(a.useState)(),s=Object(u.a)(n,2),c=s[0],i=s[1],r=Object(a.useState)(!1),d=Object(u.a)(r,2),b=d[0],m=d[1],O=f().resetPassword;function h(){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(c);case 3:m(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Something went wrong...");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(j.jsxs)(w,{onClose:t,children:[Object(j.jsx)("h2",{children:"Reset Password"}),Object(j.jsx)("p",{children:"Please enter your email address and we will send you an email with instructions to set a new password."}),Object(j.jsxs)("div",{className:"password-reset-box",onSubmit:h,children:[Object(j.jsxs)("div",{className:"email-input",children:[Object(j.jsx)("label",{children:"Email:"}),Object(j.jsx)("input",{className:"username-input",type:"email",onChange:function(e){var t=e.target.value;return i(t)},required:!0})]}),Object(j.jsxs)("div",{className:"button-container",children:[!b&&Object(j.jsx)("button",{onClick:function(){return h()},children:"Reset Password"}),b&&Object(j.jsx)("p",{children:"Email has been sent."})]})]})]})}var E=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),r=i[0],d=i[1],O=Object(a.useState)(!1),h=Object(u.a)(O,2),p=h[0],x=h[1],v=Object(a.useState)(!1),w=Object(u.a)(v,2),E=w[0],C=w[1],A=Object(a.useState)(!1),L=Object(u.a)(A,2),F=L[0],B=L[1],D=Object(a.useState)(""),G=Object(u.a)(D,2),I=G[0],P=G[1],U=Object(a.useState)(!1),M=Object(u.a)(U,2),T=M[0],R=M[1],V=Object(g.g)(),W=f(),_=W.login,q=W.logout;function X(){return(X=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),x(!0),C(!1),P(""),R(!1),e.prev=5,e.next=8,_(n,r).then((function(e){e.user.emailVerified?R(!0):(C(!0),q())})).catch((function(e){P(e.code)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),P("auth/unknown-error");case 13:T&&V.push("/dashboard"),x(!1);case 15:case"end":return e.stop()}}),e,null,[[5,10]])})))).apply(this,arguments)}function H(){return(H=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(n,r).then((function(e){e.user.sendEmailVerification().then((function(){t(!0),q()})).catch((function(){P("auth/too-many-attempts"),q()}))})).catch((function(e){P(e.code)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),P("auth/unknown-error");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("div",{className:"logo-container",children:Object(j.jsx)(b,{})}),Object(j.jsxs)("div",{className:"login-container",children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"form-box",children:Object(j.jsxs)("form",{className:"login-form",onSubmit:function(e){return X.apply(this,arguments)},children:[Object(j.jsx)(m,{type:"email",form:"login-form",label:"email",onChange:function(e){var t=e.target.value;return s(t)}}),Object(j.jsx)(m,{type:"password",form:"login-form",label:"password",onChange:function(e){var t=e.target.value;return d(t)}}),Object(j.jsx)("div",{className:"forgot-password-container",children:Object(j.jsx)("p",{className:"forgot-password",onClick:function(){B(!0)},children:"forgot password"})}),I&&Object(j.jsx)(S,{errorCode:I}),E&&!I&&Object(j.jsx)(N,{resendVerificationEmail:function(e){return H.apply(this,arguments)},onLogin:!0}),Object(j.jsx)("input",{className:"login-button",type:"submit",value:"Login",disabled:p}),Object(j.jsx)("div",{className:"sign-up-container",children:Object(j.jsx)(y.b,{to:"/signup",children:"SIGN UP"})})]})})]}),F&&Object(j.jsx)(k,{onClose:function(){B(!1)}})]})};n(34),n(60),n(61),n(62);var C=function(){var e=f(),t=(e.currentUser,e.logout),n=Object(g.g)(),s=Object(a.useState)(""),c=Object(u.a)(s,2),i=(c[0],c[1]);function r(){return(r=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(""),e.prev=1,e.next=4,t();case 4:n.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),i("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(j.jsx)("button",{className:"logout",onClick:function(){return r.apply(this,arguments)},children:"Logout"})};var A=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],s=t[1];return Object(j.jsxs)("div",{className:"settings",children:[Object(j.jsx)("div",{onClick:function(){s(!n)},className:"settings-opener"}),Object(j.jsx)("div",{className:"settings-wrapper ".concat(n?"open":"closed"),children:Object(j.jsxs)("div",{className:"settings-window",children:[Object(j.jsx)(C,{}),Object(j.jsx)("button",{onClick:function(){return s(!1)},className:"close-settings",children:"X"})]})})]})},L=(n(63),n(14));var F=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],s=t[1],c=!1,i=Object(a.useState)(!1),r=Object(u.a)(i,2),d=r[0],b=r[1],m=Object(a.useState)(!1),O=Object(u.a)(m,2),x=O[0],f=O[1],v=Object(a.useState)("New monthly budget"),g=Object(u.a)(v,2),y=g[0],N=g[1],w=Object(L.b)(),S=Object(L.c)((function(e){return e.moneyActivityList})),k=(a.useRef,HTMLInputElement,h.currentUser.uid),E=p.ref("users/"+k);function C(){return(C=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){E.on("value",(function(t){var n=t.val();e(n.baseBudget)}))})),e.next=3,n;case 3:a=e.sent,w({type:"baseBudget/setBaseBudget",baseBudget:a}),s(a),t();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){var e=0,t=0;return S.forEach((function(n){"sub"===n.type?e+=n.amount:t+=n.amount})),n+t-e}function F(){if(!d){if(0===n||""===n||void 0===n)return!1;N("Current Budget"),f(!0)}}function B(){s(),b(!0),f(!1)}return Object(a.useEffect)((function(){d||function(e){C.apply(this,arguments)}(F)})),Object(j.jsxs)("div",{className:"budget-container ".concat(x?"saved":"not-saved"),children:[Object(j.jsx)("button",{className:"edit-budget",onClick:function(){return B()},children:"Edit"}),Object(j.jsxs)("form",{className:"budget-form floating-inputs ".concat(x?"saved":"not-saved"),onSubmit:function(e){e.preventDefault(),f(!0),function(){if(b(!1),isNaN(n))return alert("input is not a number"),!1;p.ref("users/"+k).update({baseBudget:parseFloat(n)})}()}.bind(this),children:[Object(j.jsx)("input",{name:"budget",type:"text",className:"budget",value:d?void 0:0!==n&&""!==n&&void 0!==n?A().toFixed(2)+" \u20ac":n,onBlur:function(e){var t=e.target.value;return s(t)},required:!0}),Object(j.jsx)("button",{type:"submit",className:"save-budget",children:"Save"}),Object(j.jsx)("span",{className:"budget-label",children:y}),Object(j.jsxs)("div",{className:"diff-container",children:[Object(j.jsx)("input",{value:function(){if(0!==n&&""!==n&&void 0!==n){var e=A();return e>n?(c=!0,"+ "+(e-n).toFixed(2)):n>e?(c=!1,"- "+(n-e).toFixed(2)):(c=!0,0)}return n}(),className:"budget-diff ".concat(c?"diff-green":"diff-red")}),Object(j.jsx)("span",{className:"budget-label",children:"Difference of base budget"})]})]}),Object(j.jsx)("button",{onClick:function(){return B()},children:"EDIT"})]})};n(64);var B=function(){var e=new Date,t=String(e.getMonth()+1).padStart(2,"0")+e.getFullYear(),n=h.currentUser.uid,s=p.ref("users/"+n+"/expenses/"+t),c=Object(L.b)(),i=Object(L.c)((function(e){return e.moneyActivityList})),r=Object(a.useState)(!1),o=Object(u.a)(r,2),l=o[0],d=o[1],b=Object(a.useState)(""),m=Object(u.a)(b,2),O=(m[0],m[1]);return Object(a.useEffect)((function(){!function(e){var t=[];s.on("value",(function(n){var a=n.val();null!==a&&""!==a&&0!==a?(Object.keys(a).forEach((function(e){t.push(a[e])})),e({type:"moneyActitivtyList/updateList",list:t}),t=[],d(!1)):d(!0)}))}(c),setTimeout((function(){O("Updated")}),100)}),[c]),Object(j.jsxs)("div",{className:"list-container",children:[Object(j.jsxs)("div",{className:"list-titles",children:[Object(j.jsx)("div",{className:"list-title",children:"Amount"}),Object(j.jsx)("div",{className:"list-title",children:"Description"}),Object(j.jsx)("div",{className:"list-title",children:"Date"}),Object(j.jsx)("div",{className:"list-title",children:"Monthly"})]}),l?Object(j.jsx)("p",{children:"no entries yet"}):i.map((function(e){return Object(j.jsxs)("div",{className:"entry-container",children:[Object(j.jsx)("div",{className:"list-item amount-container ".concat("sub"===e.type?"expense":"credit"),children:"sub"===e.type?"- "+e.amount.toFixed(2):"+ "+e.amount.toFixed(2)}),Object(j.jsx)("div",{className:"list-item description-container",children:e.description}),Object(j.jsx)("div",{className:"list-item date-container",children:e.date}),Object(j.jsx)("div",{className:"list-item is-monthly-container",children:e.isMonthly.toString()})]},e.id)}))]})};n(65);var D=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(!1),i=Object(u.a)(c,2),r=i[0],o=i[1],l=Object(a.useState)(!1),d=Object(u.a)(l,2),b=d[0],m=d[1],O=Object(a.useState)(""),x=Object(u.a)(O,2),f=x[0],v=x[1],g=Object(a.useState)(""),y=Object(u.a)(g,2),N=y[0],w=y[1],S=Object(a.useState)(""),k=Object(u.a)(S,2),E=k[0],C=k[1],A=h.currentUser.uid,L=new Date,F=String(L.getDate()).padStart(2,"0"),B=String(L.getMonth()+1).padStart(2,"0"),D=L.getFullYear(),G=L.getHours(),I=L.getMinutes(),P=L.getSeconds(),U=L.getMilliseconds();L=F+"/"+B+"/"+D;var M=F+B+D+G+I+P+U,T=B+D,R=p.ref("users/"+A+"/expenses/"+T+"/"+M),V=function(e,t){C(t),s(e),o(!0)};return Object(j.jsxs)("div",{className:"button-and-new-money-activity-container",children:[Object(j.jsx)("div",{className:"new-credit-entry",children:Object(j.jsx)("button",{className:"new-credit-entry-button",onClick:function(){return V("Add as monthly credit entry","add")}})}),Object(j.jsx)("div",{className:"new-expense",children:Object(j.jsx)("button",{className:"new-expense-button",onClick:function(){return V("Add as monthly expense","sub")}})}),Object(j.jsx)("div",{className:"new-money-activity-wrapper ".concat(r?"showNewMoneyActivitiyWindow":"hideNewMoneyActivitiyWindow"),children:Object(j.jsxs)("div",{className:"new-money-activity-container",children:[Object(j.jsx)("span",{className:"window-title",children:"Add New Money Activity"}),Object(j.jsx)("button",{className:"close",onClick:function(){return o(!1)},children:"X"}),Object(j.jsxs)("div",{className:"text-input-box",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",className:"money",onChange:function(e){var t=e.target.value;return v(t)},required:!0}),Object(j.jsx)("span",{className:"floating-label",children:"amount"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",className:"description",onChange:function(e){var t=e.target.value;return w(t)},required:!0}),Object(j.jsx)("span",{className:"floating-label",children:"description"})]})]}),Object(j.jsx)("input",{defaultChecked:b,onChange:function(){return m(!b)},type:"checkbox",className:"checkbox"}),Object(j.jsx)("label",{htmlFor:"checkbox",children:n}),Object(j.jsx)("div",{className:"save-container",children:Object(j.jsx)("button",{onClick:function(){return R.set({type:E,amount:parseFloat(f),description:N,isMonthly:b,date:L,id:M}),void o(!1)},className:"save",children:"Save"})})]})})]})};var G=function(){var e=Object(a.useState)("false"),t=Object(u.a)(e,2),n=t[0],s=t[1];return Object(j.jsxs)("div",{className:"dashboard mobile-dash ".concat(n?"closed":"active"),children:[Object(j.jsx)("div",{className:"sidebar mobile ".concat(n?"closed":"active"),children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"menu-burger",onClick:function(){s(!n)},children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{})]}),Object(j.jsxs)("div",{className:"dashboard-views",children:[Object(j.jsx)(y.c,{activeClassName:"active",to:"/dashboard",children:"D"}),Object(j.jsx)(y.c,{activeClassName:"active",to:"/savings",children:"S"})]}),Object(j.jsx)(A,{})]})}),Object(j.jsxs)("div",{className:"main-section",children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"main-dashboard",children:[Object(j.jsxs)("div",{className:"budget-and-new-money-activity-container",children:[Object(j.jsx)(D,{}),Object(j.jsx)(F,{})]}),Object(j.jsx)(B,{})]})]})]})};n(66),n(67);var I=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(0),i=Object(u.a)(c,2),r=i[0],o=i[1],l=Object(a.useState)(""),d=Object(u.a)(l,2),b=d[0],m=d[1],O=Object(a.useState)(!1),x=Object(u.a)(O,2),f=x[0],v=x[1],g=h.currentUser.uid,y=new Date,N=String(y.getDate()).padStart(2,"0"),w=String(y.getMonth()+1).padStart(2,"0"),S=y.getFullYear(),k=y.getHours(),E=y.getMinutes(),C=y.getSeconds(),A=y.getMilliseconds();y=N+"/"+w+"/"+S;var L=N+w+S+k+E+C+A,F=w+S,B=p.ref("users/"+g+"/goals/"+L),D=p.ref("users/"+g+"/expenses/"+F+"/"+L);function G(){B.set({goalName:b,goalAmount:parseFloat(n),monthlyGoalAmount:r,date:y,id:L}),D.set({type:"sub",amount:parseFloat(r),description:b,isMonthly:!0,date:y,id:L}),v(!1)}return Object(j.jsxs)("div",{className:"button-and-new-goal-container",children:[Object(j.jsx)("div",{className:"new-goal-entry",children:Object(j.jsx)("button",{className:"new-goal-button",onClick:function(){return v(!0)},children:"+ New Goal"})}),Object(j.jsx)("div",{className:"new-goal-wrapper ".concat(f?"showNewGoalWindow":"hideNewGoalWindow"),children:Object(j.jsxs)("div",{className:"new-goal-container",children:[Object(j.jsx)("span",{className:"window-title",children:"New Goal"}),Object(j.jsx)("button",{className:"close",onClick:function(){return v(!1)},children:"X"}),Object(j.jsxs)("div",{className:"text-input-box",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",className:"goal-description",onChange:function(e){var t=e.target.value;return m(t)},required:!0}),Object(j.jsx)("span",{className:"floating-label",children:"Goal Name"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",className:"goalAmount",onChange:function(e){var t=e.target.value;return s(t)},required:!0}),Object(j.jsx)("span",{className:"floating-label",children:"Goal Amount"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",className:"monthlyAmount",onChange:function(e){var t=e.target.value;return o(t)},required:!0}),Object(j.jsx)("span",{className:"floating-label",children:"Monthly Amount"})]})]}),Object(j.jsx)("div",{className:"save-container",children:Object(j.jsx)("button",{onClick:function(){return G()},className:"save",children:"SAVE"})})]})})]})};n(68);var P=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(!0),i=Object(u.a)(c,2),r=i[0],o=i[1],l=h.currentUser.uid,d=Object(L.b)(),b=Object(L.c)((function(e){return e.baseBudget})),m=p.ref("users/"+l+"/goals/");console.log(b);var O=Object(a.useState)(""),x=Object(u.a)(O,2),f=(x[0],x[1]);return Object(a.useEffect)((function(){!function(e){var t=[];m.on("value",(function(n){var a=n.val();console.log(a),void 0!==a&&""!==a&&0!==a&&null!==a?(console.log("WEGNIOWEGNIWGENWIEGO"),Object.keys(a).forEach((function(e){t.push(a[e]),console.log(t)})),e({type:"savingsList/updateList",list:t}),s(t),t=[],o(!1),console.log(r)):(o(!0),console.log(b))}))}(d),setTimeout((function(){f("Updated")}),100)}),[d]),Object(j.jsx)("div",{className:"goals-wrapper",children:r?Object(j.jsx)("p",{children:"no entries yet"}):n.map((function(e){return Object(j.jsxs)("div",{className:"goal",children:[Object(j.jsxs)("div",{className:"goal-body",children:[Object(j.jsx)("h5",{className:"goal-card-titles",children:"Goal Name"}),e.goalName]}),Object(j.jsxs)("div",{className:"goal-body",children:[Object(j.jsx)("h5",{className:"goal-card-titles",children:"Goal"}),e.goalAmount," \u20ac"]}),Object(j.jsxs)("div",{className:"goal-body",children:[Object(j.jsx)("h5",{className:"goal-card-titles",children:"Monthly goal"}),e.monthlyGoalAmount," \u20ac"]}),Object(j.jsxs)("div",{className:"goal-body",children:[Object(j.jsx)("h5",{className:"goal-card-titles",children:"Goal reached in"}),(t=e.goalAmount,n=e.monthlyGoalAmount,parseInt(t/n))," month(s)."]}),Object(j.jsxs)("div",{className:"goal-body",children:[Object(j.jsx)("h5",{className:"goal-card-titles",children:"Set on"}),e.date]})]},e.id);var t,n}))})};var U=function(){var e=Object(a.useState)("false"),t=Object(u.a)(e,2),n=t[0],s=t[1];return Object(j.jsxs)("div",{className:"dashboard saving mobile-dash ".concat(n?"closed":"active"),children:[Object(j.jsx)("div",{className:"sidebar mobile ".concat(n?"closed":"active"),children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"menu-burger",onClick:function(){s(!n)},children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{})]}),Object(j.jsxs)("div",{className:"dashboard-views",children:[Object(j.jsx)(y.c,{activeClassName:"active",to:"/dashboard",children:"D"}),Object(j.jsx)(y.c,{activeClassName:"active",to:"/savings",children:"S"})]}),Object(j.jsx)(A,{})]})}),Object(j.jsxs)("div",{className:"main-section",children:[Object(j.jsx)(b,{}),Object(j.jsx)(I,{}),Object(j.jsx)(P,{})]})]})},M=(n(69),new RegExp("^(.){8,}$")),T=new RegExp("[!@#$%^&*(),.?\":{}|<>-_'/\\=\xa7;`\xb4+~]","g"),R=new RegExp("[A-Z\xc4\xdc\xd6]"),V=new RegExp("[0-9]"),W=function(e,t){return e===t&&(!!M.test(e)&&(!!T.test(e)&&(!!R.test(e)&&!!V.test(e))))},_=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),r=i[0],d=i[1],O=Object(a.useState)(""),h=Object(u.a)(O,2),x=h[0],v=h[1],g=Object(a.useState)(!1),w=Object(u.a)(g,2),k=w[0],E=w[1],C=Object(a.useState)(!1),A=Object(u.a)(C,2),L=A[0],F=A[1],B=Object(a.useState)(!1),D=Object(u.a)(B,2),G=D[0],I=D[1],P=Object(a.useState)(""),U=Object(u.a)(P,2),M=U[0],T=U[1],R=f(),V=R.signup,_=R.logout;function q(e){return X.apply(this,arguments)}function X(){return(X=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.ref("users/"+t).set({baseBudget:0,budget:0,expenses:{},goals:{},History:{}}).then((function(){_()})).catch((function(e){alert(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return n?!!r&&!!x:(T("auth/missing-email"),!1)}function Y(){return(Y=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),T(""),a=!0,H()||(T("auth/missing-fields"),a=!1),!W(r,x)&&a&&(T("auth/password-insufficient"),a=!1),!a){e.next=16;break}return e.prev=6,E(!0),e.next=10,V(n,r).then((function(e){e.user.sendEmailVerification(),q(e.user.uid),I(!0)})).catch((function(e){return T(e.code)}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),T("auth/unknown-error");case 15:E(!1);case 16:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("div",{className:"logo-container",children:Object(j.jsx)(b,{})}),Object(j.jsxs)("div",{className:"signup-container",children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"form-box",children:Object(j.jsxs)("form",{className:"signup-form",onSubmit:function(e){return Y.apply(this,arguments)},children:[Object(j.jsx)(m,{type:"email",form:"signup-form",label:"email",onChange:function(e){var t=e.target.value;return s(t)}}),Object(j.jsx)(m,{type:"password",form:"signup-form",label:"password",onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},onChange:function(e){var t=e.target.value;return d(t)}}),Object(j.jsxs)("div",{className:"password-rules-container ".concat(L?"showPasswordRules":"hidePasswordRules"),children:[Object(j.jsx)("h3",{children:"Your password must contain at least:"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"8 charaters"}),Object(j.jsx)("li",{children:"one capitalized letter"}),Object(j.jsx)("li",{children:"one number"}),Object(j.jsx)("li",{children:"one special charater"})]})]}),Object(j.jsx)(m,{type:"confirm",form:"signup-form",label:"confirm password",onChange:function(e){var t=e.target.value;return v(t)}}),M&&Object(j.jsx)(S,{errorCode:M,styling:M}),G&&!M&&Object(j.jsx)(N,{}),Object(j.jsx)("input",{className:"signup-button",type:"submit",value:"Sign Up",disabled:k}),Object(j.jsx)("div",{className:"sign-up-container",children:Object(j.jsx)(y.b,{to:"/budget-app/login",children:"Login"})})]})})]})]})},q=(n(70),n(17)),X=n(28);function H(e){var t=e.component,n=Object(X.a)(e,["component"]),a=f().currentUser,s=!!a&&a.emailVerified;return Object(j.jsx)(g.b,Object(q.a)(Object(q.a)({},n),{},{render:function(e){return s?Object(j.jsx)(t,Object(q.a)({},e)):Object(j.jsx)(g.a,{to:"/login"})}}))}function Y(e){var t=e.component,n=Object(X.a)(e,["component"]),a=f().currentUser,s=!!a&&a.emailVerified;return Object(j.jsx)(g.b,Object(q.a)(Object(q.a)({},n),{},{render:function(e){return s?Object(j.jsx)(g.a,{to:"/dashboard"}):Object(j.jsx)(t,Object(q.a)({},e))}}))}var J=n(23),z=n(33),K=n(37),$=Object(K.createLogger)(),Z={moneyActivityList:[],goalList:[],baseBudget:0};function Q(e,t){var n=Object(J.a)(e.moneyActivityList);return n=t,e.moneyActivityList=n,e}function ee(e,t){var n=Object(J.a)(e.moneyActivityList);return n.push(t),e.moneyActivityList=n,e}function te(e,t){var n=Object(J.a)(e.moneyActivityList),a=function(e,t){return e.moneyActivityList.findIndex((function(e){return e.id===t}))}(e,t);return n.splice(a,1),e.moneyActivityList=n,e}function ne(e,t){var n=Object(J.a)(e.goalList);return n=t,e.goalList=n,e}function ae(e,t){return Object(q.a)(Object(q.a)({},e),{},{baseBudget:t})}var se=Object(z.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"moneyEntry/addEntry":return ee(e);case"moneyEntry/deleteEntry":return te(e,t.id);case"moneyActitivtyList/updateList":return console.log("LIST"),Q(e,t.list);case"goalList/updateList":return ne(e,t.list);case"baseBudget/setBaseBudget":return console.log("SET BUDGET"),ae(e,t.baseBudget);default:return console.warn("Action not found.",t),e}}),Object(z.a)($),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),ce=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(ce,"px"));var ie=document.getElementById("root")||document.createElement("div");i.a.render(Object(j.jsx)(y.a,{basename:"/budget-app",children:Object(j.jsx)(v,{children:Object(j.jsx)(L.a,{store:se,children:Object(j.jsxs)(g.d,{children:[Object(j.jsx)(Y,{exact:!0,path:"/login",component:E}),Object(j.jsx)(Y,{exact:!0,path:"/signup",component:_}),Object(j.jsx)(H,{path:"/dashboard",component:G}),Object(j.jsx)(H,{path:"/savings",component:U}),Object(j.jsx)(H,{path:"/",children:Object(j.jsx)(g.a,{to:"/dashboard"})})]})})})}),ie)}},[[71,1,2]]]);
//# sourceMappingURL=main.b556d588.chunk.js.map