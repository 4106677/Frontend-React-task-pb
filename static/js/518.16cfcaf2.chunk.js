"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{240:function(e,t,n){n.d(t,{Ek:function(){return f},lp:function(){return l},oe:function(){return u}});var r=n(861),c=n(757),a=n.n(c),o=n(912),u=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r,c,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"d4683b09d0c94ec0aebf0b2e043decbf",r="https://api.opencagedata.com/geocode/v1/json?q=".concat(t,"+").concat(n,"&key=").concat("d4683b09d0c94ec0aebf0b2e043decbf","&language=en"),e.next=4,o.Z.get(r);case 4:return c=e.sent,u=c.data,e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s=new Headers;s.append("apikey","Ooj3b5wNKzWoS6CAI2yX4lmGJDbhW6fB");var i={method:"GET",redirect:"follow",headers:s},f=function(e){var t=e.split(" ");console.log(t);var n=t[1],r=t[3],c=t[0];return fetch("https://api.apilayer.com/exchangerates_data/convert?to=".concat(r,"&from=").concat(n,"&amount=").concat(c),i).then((function(e){return e.json()}))},l=function(){return fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=USD,GBP,EUR&base=UAH",i).then((function(e){return e.json()}))}},518:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(439),c=n(184),a=function(e){var t=e.onSubmit;return(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(e.currentTarget.elements.currency.value),e.currentTarget.reset()},children:[(0,c.jsxs)("label",{children:["Enter text for exchange rate",(0,c.jsx)("input",{type:"text",name:"currency"})]}),(0,c.jsx)("button",{type:"submit",children:"Submit"})]})},o=n(791),u=n(240),s=function(){var e=(0,o.useState)(null),t=(0,r.Z)(e,2),n=t[0],s=t[1],i=(0,o.useState)(""),f=(0,r.Z)(i,2),l=f[0],d=f[1],p=(0,o.useState)(""),h=(0,r.Z)(p,2),m=h[0],b=h[1];(0,o.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords;(0,u.oe)(t.latitude,t.longitude).then((function(e){return s(e.results[0].annotations.currency.iso_code)}))}),(function(e){console.warn("ERROR(".concat(e.code,"): ").concat(e.message)),s("USD")}),{enableHighAccuracy:!0,maximumAge:0})}),[]);return(0,o.useEffect)((function(){l&&(0,u.Ek)(l).then((function(e){var t=e.result;return b(t)}))}),[l]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{children:["Your currency: ",n]}),(0,c.jsx)(a,{onSubmit:function(e){d(e)}}),(0,c.jsxs)("p",{children:["Your input data: ",l]}),(0,c.jsxs)("p",{children:["Exchange result: ",m]})]})}}}]);
//# sourceMappingURL=518.16cfcaf2.chunk.js.map