/*! For license information please see feb23592.4ef706f8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13846],{5737:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=r(85893),n=r(11151);const t={sidebar_label:"Cookie"},d="Cookie interface",c={id:"api/puppeteer.cookie",title:"Cookie interface",description:"Represents a cookie object.",source:"@site/versioned_docs/version-22.14.0/api/puppeteer.cookie.md",sourceDirName:"api",slug:"/api/puppeteer.cookie",permalink:"/api/puppeteer.cookie",draft:!1,unlisted:!1,tags:[],version:"22.14.0",frontMatter:{sidebar_label:"Cookie"},sidebar:"api",previous:{title:"ContinueRequestOverrides",permalink:"/api/puppeteer.continuerequestoverrides"},next:{title:"CookieParam",permalink:"/api/puppeteer.cookieparam"}},o={},l=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"cookie-interface",children:"Cookie interface"}),"\n",(0,s.jsx)(i.p,{children:"Represents a cookie object."}),"\n",(0,s.jsx)(i.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"export interface Cookie\n"})}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(i.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(i.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(i.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(i.p,{children:"Description"})}),(0,s.jsx)("th",{children:(0,s.jsx)(i.p,{children:"Default"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"domain",children:"domain"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"Cookie domain."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"expires",children:"expires"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"number"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(i.p,{children:["Cookie expiration date as the number of seconds since the UNIX epoch. Set to ",(0,s.jsx)(i.code,{children:"-1"})," for session cookies"]})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"httponly",children:"httpOnly"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"True if cookie is http-only."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"name",children:"name"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"Cookie name."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"partitionkey",children:"partitionKey"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"Cookie partition key. The site of the top-level URL the browser was visiting at the start of the request to the endpoint that set the cookie. Supported only in Chrome."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"partitionkeyopaque",children:"partitionKeyOpaque"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"True if cookie partition key is opaque. Supported only in Chrome."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"path",children:"path"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"Cookie path."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"priority",children:"priority"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"/api/puppeteer.cookiepriority",children:"CookiePriority"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"Cookie Priority. Supported only in Chrome."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"sameparty",children:"sameParty"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"True if cookie is SameParty. Supported only in Chrome."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"samesite",children:"sameSite"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"/api/puppeteer.cookiesamesite",children:"CookieSameSite"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"Cookie SameSite type."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"secure",children:"secure"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"True if cookie is secure."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"session",children:"session"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"True in case of session cookie."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"size",children:"size"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"number"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"Cookie size."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"sourcescheme",children:"sourceScheme"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"/api/puppeteer.cookiesourcescheme",children:"CookieSourceScheme"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"Cookie source scheme type. Supported only in Chrome."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"value",children:"value"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(i.p,{children:"Cookie value."})}),(0,s.jsx)("td",{})]})]})]})]})}function p(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},75251:(e,i,r)=>{var s=r(67294),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,r){var s,t={},l=null,h=null;for(s in void 0!==r&&(l=""+r),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(h=i.ref),i)d.call(i,s)&&!o.hasOwnProperty(s)&&(t[s]=i[s]);if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===t[s]&&(t[s]=i[s]);return{$$typeof:n,type:e,key:l,ref:h,props:t,_owner:c.current}}i.Fragment=t,i.jsx=l,i.jsxs=l},85893:(e,i,r)=>{e.exports=r(75251)},11151:(e,i,r)=>{r.d(i,{Z:()=>c,a:()=>d});var s=r(67294);const n={},t=s.createContext(n);function d(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);