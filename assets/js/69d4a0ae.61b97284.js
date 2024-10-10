/*! For license information please see 69d4a0ae.61b97284.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6093],{19126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var s=t(74848),r=t(28453);const o={},a="Screenshots",c={id:"guides/screenshots",title:"Screenshots",description:"For capturing screenshots use Page.screenshot().",source:"@site/versioned_docs/version-23.5.2/guides/screenshots.md",sourceDirName:"guides",slug:"/guides/screenshots",permalink:"/guides/screenshots",draft:!1,unlisted:!1,tags:[],version:"23.5.2",frontMatter:{},sidebar:"docs",previous:{title:"Headless mode",permalink:"/guides/headless-modes"},next:{title:"PDF generation",permalink:"/guides/pdf-generation"}},i={},p=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"screenshots",children:"Screenshots"})}),"\n",(0,s.jsxs)(n.p,{children:["For capturing screenshots use ",(0,s.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page.screenshot",children:(0,s.jsx)(n.code,{children:"Page.screenshot()"})}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const browser = await puppeteer.launch();\nconst page = await browser.newPage();\nawait page.goto('https://news.ycombinator.com', {\n  waitUntil: 'networkidle2',\n});\nawait page.screenshot({\n  path: 'hn.png',\n});\n\nawait browser.close();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also capture a screenshot of a specific element using ",(0,s.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.screenshot",children:(0,s.jsx)(n.code,{children:"ElementHandle.screenshot()"})}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const fileElement = await page.waitForSelector('div');\nawait fileElement.screenshot({\n  path: 'div.png',\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.screenshot",children:(0,s.jsx)(n.code,{children:"ElementHandle.screenshot()"})})," tries to scroll the element into view\nif it is hidden."]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var s=t(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var s,o={},p=null,d=null;for(s in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,s)&&!i.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:p,ref:d,props:o,_owner:c.current}}n.Fragment=o,n.jsx=p,n.jsxs=p},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);