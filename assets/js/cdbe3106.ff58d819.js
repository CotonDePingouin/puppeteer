/*! For license information please see cdbe3106.ff58d819.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37284],{31804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(85893),a=r(11151);const s={sidebar_label:"Frame.addStyleTag"},d="Frame.addStyleTag() method",l={id:"api/puppeteer.frame.addstyletag",title:"Frame.addStyleTag() method",description:"Adds a HTMLStyleElement into the frame with the desired URL",source:"@site/versioned_docs/version-22.14.0/api/puppeteer.frame.addstyletag.md",sourceDirName:"api",slug:"/api/puppeteer.frame.addstyletag",permalink:"/api/puppeteer.frame.addstyletag",draft:!1,unlisted:!1,tags:[],version:"22.14.0",frontMatter:{sidebar_label:"Frame.addStyleTag"},sidebar:"api",previous:{title:"Frame.addScriptTag",permalink:"/api/puppeteer.frame.addscripttag"},next:{title:"Frame.addStyleTag_1",permalink:"/api/puppeteer.frame.addstyletag_1"}},i={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"frameaddstyletag-method",children:"Frame.addStyleTag() method"}),"\n",(0,n.jsxs)(t.p,{children:["Adds a ",(0,n.jsx)(t.code,{children:"HTMLStyleElement"})," into the frame with the desired URL"]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  addStyleTag(\n    options: Omit<FrameAddStyleTagOptions, 'url'>\n  ): Promise<ElementHandle<HTMLStyleElement>>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["Omit<",(0,n.jsx)(t.a,{href:"/api/puppeteer.frameaddstyletagoptions",children:"FrameAddStyleTagOptions"}),", 'url'>"]})}),(0,n.jsx)("td",{})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:["Promise<",(0,n.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<HTMLStyleElement>>"]}),"\n",(0,n.jsxs)(t.p,{children:["An ",(0,n.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"element handle"})," to the loaded ",(0,n.jsx)(t.code,{children:"<style>"})," element."]})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},75251:(e,t,r)=>{var n=r(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var n,s={},p=null,o=null;for(n in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(o=t.ref),t)d.call(t,n)&&!i.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:p,ref:o,props:s,_owner:l.current}}t.Fragment=s,t.jsx=p,t.jsxs=p},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>d});var n=r(67294);const a={},s=n.createContext(a);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);