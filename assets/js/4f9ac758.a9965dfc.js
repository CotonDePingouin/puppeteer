/*! For license information please see 4f9ac758.a9965dfc.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50950],{6265:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var s=t(85893),n=t(11151);const l={sidebar_label:"Page.select"},c="Page.select() method",i={id:"api/puppeteer.page.select",title:"Page.select() method",description:"Triggers a change and input event once all the provided options have been selected. If there's no ` element matching selector`, the method throws an error.",source:"@site/versioned_docs/version-22.14.0/api/puppeteer.page.select.md",sourceDirName:"api",slug:"/api/puppeteer.page.select",permalink:"/api/puppeteer.page.select",draft:!1,unlisted:!1,tags:[],version:"22.14.0",frontMatter:{sidebar_label:"Page.select"},sidebar:"api",previous:{title:"Page.screenshot_1",permalink:"/api/puppeteer.page.screenshot_1"},next:{title:"Page.setBypassCSP",permalink:"/api/puppeteer.page.setbypasscsp"}},a={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"pageselect-method",children:"Page.select() method"}),"\n",(0,s.jsxs)(r.p,{children:["Triggers a ",(0,s.jsx)(r.code,{children:"change"})," and ",(0,s.jsx)(r.code,{children:"input"})," event once all the provided options have been selected. If there's no ",(0,s.jsx)(r.code,{children:"<select>"})," element matching ",(0,s.jsx)(r.code,{children:"selector"}),", the method throws an error."]}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  select(selector: string, ...values: string[]): Promise<string[]>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"selector"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["A ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"Selector"})," to query the page for"]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"values"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string[]"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Values of options to select. If the ",(0,s.jsx)(r.code,{children:"<select>"})," has the ",(0,s.jsx)(r.code,{children:"multiple"})," attribute, all values are considered, otherwise only the first one is taken into account."]})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<string[]>"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["Shortcut for ",(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.select",children:"page.mainFrame().select()"})]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"page.select('select#colors', 'blue'); // single selection\npage.select('select#colors', 'red', 'green', 'blue'); // multiple selections\n"})})]})}function p(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,r,t)=>{var s=t(67294),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var s,l={},o=null,d=null;for(s in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,s)&&!a.hasOwnProperty(s)&&(l[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===l[s]&&(l[s]=r[s]);return{$$typeof:n,type:e,key:o,ref:d,props:l,_owner:i.current}}r.Fragment=l,r.jsx=o,r.jsxs=o},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>c});var s=t(67294);const n={},l=s.createContext(n);function c(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);