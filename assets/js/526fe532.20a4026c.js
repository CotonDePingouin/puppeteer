"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14198],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||p;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={sidebar_label:"BrowserContext"},i="BrowserContext class",l={unversionedId:"api/puppeteer.browsercontext",id:"version-21.3.3/api/puppeteer.browsercontext",title:"BrowserContext class",description:"BrowserContext represents individual sessions within a browser.",source:"@site/versioned_docs/version-21.3.3/api/puppeteer.browsercontext.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext",permalink:"/api/puppeteer.browsercontext",draft:!1,tags:[],version:"21.3.3",frontMatter:{sidebar_label:"BrowserContext"},sidebar:"api",previous:{title:"Browser.wsEndpoint",permalink:"/api/puppeteer.browser.wsendpoint"},next:{title:"BrowserContext.browser",permalink:"/api/puppeteer.browsercontext.browser"}},s={},u=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],c={toc:u};function d(e){var{components:t}=e,r=p(e,["components"]);return(0,a.kt)("wrapper",n({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"browsercontext-class"}),"BrowserContext class"),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.browsercontext"}),"BrowserContext")," represents individual sessions within a ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.browser"}),"browser"),"."),(0,a.kt)("p",null,"When a ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.browser"}),"browser")," is launched, it has a single ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.browsercontext"}),"browser context")," by default. Others can be created using ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.browser.createincognitobrowsercontext"}),"Browser.createIncognitoBrowserContext()"),"."),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.browsercontext"}),"BrowserContext")," ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.eventemitter"}),"emits")," various events which are documented in the ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.browsercontextevent"}),"BrowserContextEvent")," enum."),(0,a.kt)("p",null,"If a ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.page"}),"page")," opens another ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.page"}),"page"),", e.g. using ",(0,a.kt)("inlineCode",{parentName:"p"},"window.open"),", the popup will belong to the parent ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.page.browsercontext"}),"page's browser context"),"."),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"export declare abstract class BrowserContext extends EventEmitter<BrowserContextEvents>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.eventemitter"}),"EventEmitter"),"<",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.browsercontextevents"}),"BrowserContextEvents"),">"),(0,a.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"BrowserContext")," class."),(0,a.kt)("h2",n({},{id:"example"}),"Example"),(0,a.kt)("p",null,"Creating an incognito ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.browsercontext"}),"browser context"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"// Create a new incognito browser context\nconst context = await browser.createIncognitoBrowserContext();\n// Create a new page inside context.\nconst page = await context.newPage();\n// ... do stuff with page ...\nawait page.goto('https://example.com');\n// Dispose context once it's no longer needed.\nawait context.close();\n")),(0,a.kt)("h2",n({},{id:"properties"}),"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"closed"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"readonly")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Whether this ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext"}),"browser context")," is closed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"readonly")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"string ","|"," undefined"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Identifier for this ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext"}),"browser context"),".")))),(0,a.kt)("h2",n({},{id:"methods"}),"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Method"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext.browser"}),"browser()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Gets the ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browser"}),"browser")," associated with this ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext"}),"browser context"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext.clearpermissionoverrides"}),"clearPermissionOverrides()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Clears all permission overrides for this ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext"}),"browser context"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext.close"}),"close()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Closes this ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext"}),"browser context")," and all associated ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.page"}),"pages"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext.isincognito"}),"isIncognito()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("p",null,"Whether this ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext"}),"browser context")," is incognito."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browser.defaultbrowsercontext"}),"default browser context")," is the only non-incognito browser context."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext.newpage"}),"newPage()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.page"}),"page")," in this ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext"}),"browser context"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext.overridepermissions"}),"overridePermissions(origin, permissions)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Grants this ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext"}),"browser context")," the given ",(0,a.kt)("code",null,"permissions")," within the given ",(0,a.kt)("code",null,"origin"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext.pages"}),"pages()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Gets a list of all open ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.page"}),"pages")," inside this ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext"}),"browser context"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext.targets"}),"targets()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Gets all active ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.target"}),"targets")," inside this ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext"}),"browser context"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext.waitfortarget"}),"waitForTarget(predicate, options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("p",null,"Waits until a ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.target"}),"target")," matching the given ",(0,a.kt)("code",null,"predicate")," appears and returns it."),(0,a.kt)("p",null,"This will look all open ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.browsercontext"}),"browser contexts"),"."))))))}d.isMDXComponent=!0}}]);