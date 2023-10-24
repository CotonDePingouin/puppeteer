"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(n),y=p,d=f["".concat(u,".").concat(y)]||f[y]||l[y]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function y(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>s});n(67294);var r=n(3905);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}const a={sidebar_label:"PuppeteerNodeLaunchOptions"},i="PuppeteerNodeLaunchOptions type",u={unversionedId:"api/puppeteer.puppeteernodelaunchoptions",id:"version-21.4.1/api/puppeteer.puppeteernodelaunchoptions",title:"PuppeteerNodeLaunchOptions type",description:"Utility type exposed to enable users to define options that can be passed to puppeteer.launch without having to list the set of all types.",source:"@site/versioned_docs/version-21.4.1/api/puppeteer.puppeteernodelaunchoptions.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernodelaunchoptions",permalink:"/api/puppeteer.puppeteernodelaunchoptions",draft:!1,tags:[],version:"21.4.1",frontMatter:{sidebar_label:"PuppeteerNodeLaunchOptions"},sidebar:"api",previous:{title:"PuppeteerLifeCycleEvent",permalink:"/api/puppeteer.puppeteerlifecycleevent"},next:{title:"Quad",permalink:"/api/puppeteer.quad"}},c={},s=[{value:"Signature:",id:"signature",level:4}],l={toc:s};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",p({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"puppeteernodelaunchoptions-type"}),"PuppeteerNodeLaunchOptions type"),(0,r.kt)("p",null,"Utility type exposed to enable users to define options that can be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer.launch")," without having to list the set of all types."),(0,r.kt)("h4",p({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-typescript"}),"export type PuppeteerNodeLaunchOptions = BrowserLaunchArgumentOptions &\n  LaunchOptions &\n  BrowserConnectOptions;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"References:")," ",(0,r.kt)("a",p({parentName:"p"},{href:"/api/puppeteer.browserlaunchargumentoptions"}),"BrowserLaunchArgumentOptions"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"/api/puppeteer.launchoptions"}),"LaunchOptions"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"/api/puppeteer.browserconnectoptions"}),"BrowserConnectOptions")))}f.isMDXComponent=!0}}]);