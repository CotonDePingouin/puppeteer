/*! For license information please see 2b72b8a8.ffd80b7b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29981],{5316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var s=r(85893),n=r(11151);const a={sidebar_label:"Page.$"},i="Page.$() method",l={id:"api/puppeteer.page._",title:"Page.$() method",description:"Finds the first element that matches the selector. If no element matches the selector, the return value resolves to null.",source:"@site/versioned_docs/version-23.0.2/api/puppeteer.page._.md",sourceDirName:"api",slug:"/api/puppeteer.page._",permalink:"/api/puppeteer.page._",draft:!1,unlisted:!1,tags:[],version:"23.0.2",frontMatter:{sidebar_label:"Page.$"},sidebar:"api",previous:{title:"Page",permalink:"/api/puppeteer.page"},next:{title:"Page.$$",permalink:"/api/puppeteer.page.__"}},o={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"page-method",children:"Page.$() method"}),"\n",(0,s.jsxs)(t.p,{children:["Finds the first element that matches the selector. If no element matches the selector, the return value resolves to ",(0,s.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  $<Selector extends string>(\n    selector: Selector\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"selector"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Selector"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(t.p,{children:["Promise<",(0,s.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,s.jsx)(t.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>> | null>"]}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["Shortcut for ",(0,s.jsx)(t.a,{href:"/api/puppeteer.frame._",children:"Page.mainFrame().$(selector)"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},75251:(e,t,r)=>{var s=r(67294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var s,a={},p=null,c=null;for(s in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:p,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=p,t.jsxs=p},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var s=r(67294);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);