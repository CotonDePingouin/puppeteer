"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={},p="Puppeteer Angular Schematic",i={unversionedId:"integrations/ng-schematics",id:"version-21.4.1/integrations/ng-schematics",title:"Puppeteer Angular Schematic",description:"Adds Puppeteer-based e2e tests to your Angular project.",source:"@site/versioned_docs/version-21.4.1/integrations/ng-schematics.md",sourceDirName:"integrations",slug:"/integrations/ng-schematics",permalink:"/integrations/ng-schematics",draft:!1,tags:[],version:"21.4.1",frontMatter:{},sidebar:"docs",previous:{title:"Integrations",permalink:"/category/integrations"},next:{title:"Chromium Support",permalink:"/chromium-support"}},s={},u=[{value:"Getting started",id:"getting-started",level:2},{value:"Options",id:"options",level:3},{value:"Creating a single test file",id:"creating-a-single-test-file",level:2},{value:"Running test server and dev server at the same time",id:"running-test-server-and-dev-server-at-the-same-time",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Sandbox",id:"sandbox",level:3},{value:"Unit Testing",id:"unit-testing",level:3},{value:"Migrating from Protractor",id:"migrating-from-protractor",level:2},{value:"Browser",id:"browser",level:3},{value:"Query Selectors",id:"query-selectors",level:3}],c={toc:u};function d(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"puppeteer-angular-schematic"}),"Puppeteer Angular Schematic"),(0,a.kt)("p",null,"Adds Puppeteer-based e2e tests to your Angular project."),(0,a.kt)("h2",r({},{id:"getting-started"}),"Getting started"),(0,a.kt)("p",null,"Run the command below in an Angular CLI app directory and follow the prompts."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note this will add the schematic as a dependency to your project.")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"ng add @puppeteer/ng-schematics\n")),(0,a.kt)("p",null,"Or you can use the same command followed by the ",(0,a.kt)("a",r({parentName:"p"},{href:"#options"}),"options")," below."),(0,a.kt)("p",null,"Currently, this schematic supports the following test runners:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://jasmine.github.io/"}),(0,a.kt)("strong",{parentName:"a"},"Jasmine"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://jestjs.io/"}),(0,a.kt)("strong",{parentName:"a"},"Jest"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://mochajs.org/"}),(0,a.kt)("strong",{parentName:"a"},"Mocha"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://nodejs.org/api/test.html"}),(0,a.kt)("strong",{parentName:"a"},"Node Test Runner")))),(0,a.kt)("p",null,"With the schematics installed you can run E2E tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"ng e2e\n")),(0,a.kt)("h3",r({},{id:"options"}),"Options"),(0,a.kt)("p",null,"When adding schematics to your project you can to provide following options:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Option"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--testRunner")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The testing framework to install along side Puppeteer."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"jasmine"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"jest"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"mocha"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},'"node"')),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true"))))),(0,a.kt)("h2",r({},{id:"creating-a-single-test-file"}),"Creating a single test file"),(0,a.kt)("p",null,"Puppeteer Angular Schematic exposes a method to create a single test file."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),'ng generate @puppeteer/ng-schematics:test "<TestName>"\n')),(0,a.kt)("h3",r({},{id:"running-test-server-and-dev-server-at-the-same-time"}),"Running test server and dev server at the same time"),(0,a.kt)("p",null,"By default the E2E test will run the app on the same port as ",(0,a.kt)("inlineCode",{parentName:"p"},"ng start"),".\nTo avoid this you can specify the port the an the ",(0,a.kt)("inlineCode",{parentName:"p"},"angular.json"),"\nUpdate either ",(0,a.kt)("inlineCode",{parentName:"p"},"e2e")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer")," (depending on the initial setup) to:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "e2e": {\n    "builder": "@puppeteer/ng-schematics:puppeteer",\n    "options": {\n      "commands": [...],\n      "devServerTarget": "sandbox:serve",\n      "testRunner": "<TestRunner>",\n      "port": 8080\n    },\n    ...\n}\n')),(0,a.kt)("p",null,"Now update the E2E test file ",(0,a.kt)("inlineCode",{parentName:"p"},"utils.ts")," baseUrl to:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const baseUrl = 'http://localhost:8080';\n")),(0,a.kt)("h2",r({},{id:"contributing"}),"Contributing"),(0,a.kt)("p",null,"Check out our ",(0,a.kt)("a",r({parentName:"p"},{href:"https://pptr.dev/contributing"}),"contributing guide")," to get an overview of what you need to develop in the Puppeteer repo."),(0,a.kt)("h3",r({},{id:"sandbox"}),"Sandbox"),(0,a.kt)("p",null,"For easier development we provide a script to auto-generate the Angular project to test against. Simply run:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm run sandbox -- --init\n")),(0,a.kt)("p",null,"After that to run ",(0,a.kt)("inlineCode",{parentName:"p"},"@puppeteer/ng-schematics")," against the Sandbox Angular project run:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm run sandbox\n# or to auto-build and then run schematics\nnpm run sandbox -- --build\n")),(0,a.kt)("p",null,"To run the creating of single test schematic:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm run sandbox:test\n")),(0,a.kt)("p",null,"To create a multi project workspace use the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm run sandbox -- --init --multi\n")),(0,a.kt)("h3",r({},{id:"unit-testing"}),"Unit Testing"),(0,a.kt)("p",null,"The schematics utilize ",(0,a.kt)("inlineCode",{parentName:"p"},"@angular-devkit/schematics/testing")," for verifying correct file creation and ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," updates. To execute the test suit:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm run test\n")),(0,a.kt)("h2",r({},{id:"migrating-from-protractor"}),"Migrating from Protractor"),(0,a.kt)("h3",r({},{id:"browser"}),"Browser"),(0,a.kt)("p",null,"Puppeteer has its own ",(0,a.kt)("a",r({parentName:"p"},{href:"https://pptr.dev/api/puppeteer.browser"}),(0,a.kt)("inlineCode",{parentName:"a"},"browser"))," that exposes different API compared to the one exposed by Protractor."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n\n  it('should work', () => {\n    const page = await browser.newPage();\n\n    // Query elements\n    const element = await page.$('my-component');\n\n    // Do actions\n    await element.click();\n  });\n\n  await browser.close();\n})();\n")),(0,a.kt)("h3",r({},{id:"query-selectors"}),"Query Selectors"),(0,a.kt)("p",null,"Puppeteer supports multiple types of selectors, namely, the CSS, ARIA, text, XPath and pierce selectors.\nThe following table shows Puppeteer's equivalents to ",(0,a.kt)("a",r({parentName:"p"},{href:"https://www.protractortest.org/#/api?view=ProtractorBy"}),"Protractor By"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For improved reliability and reduced flakiness try our\n",(0,a.kt)("strong",{parentName:"p"},"Experimental")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://pptr.dev/guides/locators"}),"Locators API"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"By"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Protractor code"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Puppeteer querySelector"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"CSS (Single)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$(by.css('<CSS>'))")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"page.$('<CSS>')"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"CSS (Multiple)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$$(by.css('<CSS>'))")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"page.$$('<CSS>')"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Id"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$(by.id('<ID>'))")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"page.$('#<ID>')"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"CssContainingText"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$(by.cssContainingText('<CSS>', '<TEXT>'))")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"page.$('<CSS> ::-p-text(<TEXT>)')")," `")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"DeepCss"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$(by.deepCss('<CSS>'))")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"page.$(':scope >>> <CSS>')"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"XPath"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$(by.xpath('<XPATH>'))")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"page.$('::-p-xpath(<XPATH>)')"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"JS"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$(by.js('document.querySelector(\"<CSS>\")'))")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"page.evaluateHandle(() => document.querySelector('<CSS>'))"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For advanced use cases such as Protractor's ",(0,a.kt)("inlineCode",{parentName:"p"},"by.addLocator")," you can check Puppeteer's ",(0,a.kt)("a",r({parentName:"p"},{href:"https://pptr.dev/guides/query-selectors#custom-selectors"}),"Custom selectors"),".")))}d.isMDXComponent=!0}}]);