/*! For license information please see 36298f1b.6f26ced9.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33706],{78985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(85893),s=n(11151);const i={sidebar_label:"HTTPRequest.enqueueInterceptAction"},o="HTTPRequest.enqueueInterceptAction() method",a={id:"api/puppeteer.httprequest.enqueueinterceptaction",title:"HTTPRequest.enqueueInterceptAction() method",description:"Adds an async request handler to the processing queue. Deferred handlers are not guaranteed to execute in any particular order, but they are guaranteed to resolve before the request interception is finalized.",source:"@site/versioned_docs/version-23.0.2/api/puppeteer.httprequest.enqueueinterceptaction.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.enqueueinterceptaction",permalink:"/api/puppeteer.httprequest.enqueueinterceptaction",draft:!1,unlisted:!1,tags:[],version:"23.0.2",frontMatter:{sidebar_label:"HTTPRequest.enqueueInterceptAction"},sidebar:"api",previous:{title:"HTTPRequest.continueRequestOverrides",permalink:"/api/puppeteer.httprequest.continuerequestoverrides"},next:{title:"HTTPRequest.failure",permalink:"/api/puppeteer.httprequest.failure"}},u={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"httprequestenqueueinterceptaction-method",children:"HTTPRequest.enqueueInterceptAction() method"}),"\n",(0,r.jsx)(t.p,{children:"Adds an async request handler to the processing queue. Deferred handlers are not guaranteed to execute in any particular order, but they are guaranteed to resolve before the request interception is finalized."}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class HTTPRequest {\n  enqueueInterceptAction(\n    pendingHandler: () => void | PromiseLike<unknown>\n  ): void;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"pendingHandler"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"() => void | PromiseLike<unknown>"})}),(0,r.jsx)("td",{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"void"})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},75251:(e,t,n)=>{var r=n(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,p=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:p,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);