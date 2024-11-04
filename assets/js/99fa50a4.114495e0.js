/*! For license information please see 99fa50a4.114495e0.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4410],{87169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var s=r(74848),n=r(28453);const i={sidebar_label:"Page.type"},a="Page.type() method",p={id:"api/puppeteer.page.type",title:"Page.type() method",description:"Sends a keydown, keypress/input, and keyup event for each character in the text.",source:"@site/versioned_docs/version-23.7.0/api/puppeteer.page.type.md",sourceDirName:"api",slug:"/api/puppeteer.page.type",permalink:"/api/puppeteer.page.type",draft:!1,unlisted:!1,tags:[],version:"23.7.0",frontMatter:{sidebar_label:"Page.type"},sidebar:"api",previous:{title:"Page.title",permalink:"/api/puppeteer.page.title"},next:{title:"Page.url",permalink:"/api/puppeteer.page.url"}},d={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"pagetype-method",children:"Page.type() method"})}),"\n",(0,s.jsxs)(t.p,{children:["Sends a ",(0,s.jsx)(t.code,{children:"keydown"}),", ",(0,s.jsx)(t.code,{children:"keypress/input"}),", and ",(0,s.jsx)(t.code,{children:"keyup"})," event for each character in the text."]}),"\n",(0,s.jsxs)(t.p,{children:["To press a special key, like ",(0,s.jsx)(t.code,{children:"Control"})," or ",(0,s.jsx)(t.code,{children:"ArrowDown"}),", use ",(0,s.jsx)(t.a,{href:"/api/puppeteer.keyboard.press",children:"Keyboard.press()"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  type(\n    selector: string,\n    text: string,\n    options?: Readonly<KeyboardTypeOptions>,\n  ): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"selector"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"text"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"A text to type into a focused element."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["Readonly<",(0,s.jsx)(t.a,{href:"/api/puppeteer.keyboardtypeoptions",children:"KeyboardTypeOptions"}),">"]})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"(Optional)"})," have property ",(0,s.jsx)(t.code,{children:"delay"})," which is the Time to wait between key presses in milliseconds. Defaults to ",(0,s.jsx)(t.code,{children:"0"}),"."]})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"await page.type('#mytextarea', 'Hello');\n// Types instantly\nawait page.type('#mytextarea', 'World', {delay: 100});\n// Types slower, like a user\n"})})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},21020:(e,t,r)=>{var s=r(96540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var s,i={},o=null,l=null;for(s in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,s)&&!d.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:n,type:e,key:o,ref:l,props:i,_owner:p.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>p});var s=r(96540);const n={},i=s.createContext(n);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);