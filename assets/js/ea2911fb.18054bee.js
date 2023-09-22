"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16226],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});t(67294);var r=t(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={},l="Troubleshooting",p={unversionedId:"troubleshooting",id:"version-21.3.3/troubleshooting",title:"Troubleshooting",description:"Chromium currently does not provide arm64 binaries for Linux. There are only",source:"@site/versioned_docs/version-21.3.3/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/troubleshooting",draft:!1,tags:[],version:"21.3.3",frontMatter:{},sidebar:"docs",previous:{title:"Chromium Support",permalink:"/chromium-support"},next:{title:"Contributing",permalink:"/contributing"}},s={},u=[{value:"<code>Cannot find module &#39;puppeteer-core/internal/...&#39;</code>",id:"cannot-find-module-puppeteer-coreinternal",level:2},{value:"<code>Could not find expected browser locally</code>",id:"could-not-find-expected-browser-locally",level:2},{value:"Chrome headless doesn&#39;t launch on Windows",id:"chrome-headless-doesnt-launch-on-windows",level:2},{value:"Chrome doesn&#39;t launch on Linux",id:"chrome-doesnt-launch-on-linux",level:2},{value:"Chrome headless disables GPU compositing",id:"chrome-headless-disables-gpu-compositing",level:2},{value:"Setting Up Chrome Linux Sandbox",id:"setting-up-chrome-linux-sandbox",level:2},{value:"recommended Enable user namespace cloning",id:"recommended-enable-user-namespace-cloning",level:3},{value:"alternative Setup setuid sandbox",id:"alternative-setup-setuid-sandbox",level:3},{value:"Running Puppeteer on Travis CI",id:"running-puppeteer-on-travis-ci",level:2},{value:"Running Puppeteer on WSL (Windows subsystem for Linux)",id:"running-puppeteer-on-wsl-windows-subsystem-for-linux",level:2},{value:"Running Puppeteer on CircleCI",id:"running-puppeteer-on-circleci",level:2},{value:"Running Puppeteer in Docker",id:"running-puppeteer-in-docker",level:2},{value:"Running on Alpine",id:"running-on-alpine",level:3},{value:"Running Puppeteer on GitlabCI",id:"running-puppeteer-on-gitlabci",level:2},{value:"Tips",id:"tips",level:4},{value:"Running Puppeteer in the cloud",id:"running-puppeteer-in-the-cloud",level:2},{value:"Running Puppeteer on Google App Engine",id:"running-puppeteer-on-google-app-engine",level:3},{value:"Running Puppeteer on Google Cloud Functions",id:"running-puppeteer-on-google-cloud-functions",level:3},{value:"Running Puppeteer on Google Cloud Run",id:"running-puppeteer-on-google-cloud-run",level:3},{value:"Running Puppeteer on Heroku",id:"running-puppeteer-on-heroku",level:3},{value:"Running Puppeteer on AWS Lambda",id:"running-puppeteer-on-aws-lambda",level:3},{value:"Running Puppeteer on AWS EC2 instance running Amazon-Linux",id:"running-puppeteer-on-aws-ec2-instance-running-amazon-linux",level:3},{value:"Code Transpilation Issues",id:"code-transpilation-issues",level:2}],c={toc:u};function d(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"troubleshooting"}),"Troubleshooting"),(0,r.kt)("admonition",o({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"Chromium currently does not provide arm64 binaries for Linux. There are only\nbinaries for\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://pptr.dev/contributing#macos-arm-and-custom-executables"}),"Mac ARM with experimental support from Puppeteer"),".")),(0,r.kt)("h2",o({},{id:"cannot-find-module-puppeteer-coreinternal"}),(0,r.kt)("inlineCode",{parentName:"h2"},"Cannot find module 'puppeteer-core/internal/...'")),(0,r.kt)("p",null,"This can occur is your Node.js version is lower than 14 or you are using a\ncustom resolver (such as\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://www.npmjs.com/package/jest-resolve"}),(0,r.kt)("inlineCode",{parentName:"a"},"jest-resolve")),"). For the former,\nwe do not support deprecated versions of Node.js. For the latter, usually\nupgrading the resolver (or its parent module such as ",(0,r.kt)("inlineCode",{parentName:"p"},"jest"),") will work (e.g.\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/issues/9121"}),"https://github.com/puppeteer/puppeteer/issues/9121"),")"),(0,r.kt)("h2",o({},{id:"could-not-find-expected-browser-locally"}),(0,r.kt)("inlineCode",{parentName:"h2"},"Could not find expected browser locally")),(0,r.kt)("p",null,"Starting from v19.0.0, Puppeteer will download browsers into\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/.cache/puppeteer")," using\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://nodejs.org/api/os.html#oshomedir"}),(0,r.kt)("inlineCode",{parentName:"a"},"os.homedir"))," for better caching\nbetween Puppeteer upgrades. Generally the home directory is well-defined (even\non Windows), but occasionally the home directory may not be available. In this\ncase, we provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"PUPPETEER_CACHE_DIR")," variable which allows you to change\nthe installation directory."),(0,r.kt)("p",null,"For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"PUPPETEER_CACHE_DIR=$(pwd) npm install puppeteer\nPUPPETEER_CACHE_DIR=$(pwd) node <script-path>\n")),(0,r.kt)("p",null,"You can also create a configuration file named ",(0,r.kt)("inlineCode",{parentName:"p"},".puppeteerrc.cjs")," (or\n",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer.config.cjs"),") at the root of your application with the contents"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const {join} = require('path');\n\n/**\n * @type {import(\"puppeteer\").Configuration}\n */\nmodule.exports = {\n  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),\n};\n")),(0,r.kt)("p",null,"You will need to reinstall ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," in order for the configuration to take\neffect. See ",(0,r.kt)("a",o({parentName:"p"},{href:"./guides/configuration"}),"Configuring Puppeteer")," for more\ninformation."),(0,r.kt)("h2",o({},{id:"chrome-headless-doesnt-launch-on-windows"}),"Chrome headless doesn't launch on Windows"),(0,r.kt)("p",null,"Some ",(0,r.kt)("a",o({parentName:"p"},{href:"https://support.google.com/chrome/a/answer/7532015"}),"chrome policies")," might\nenforce running Chrome/Chromium with certain extensions."),(0,r.kt)("p",null,"Puppeteer passes ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable-extensions")," flag by default and will fail to launch\nwhen such policies are active."),(0,r.kt)("p",null,"To work around this, try running without the flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"const browser = await puppeteer.launch({\n  ignoreDefaultArgs: ['--disable-extensions'],\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Context:\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/issues/3681#issuecomment-447865342"}),"issue 3681"),".")),(0,r.kt)("h2",o({},{id:"chrome-doesnt-launch-on-linux"}),"Chrome doesn't launch on Linux"),(0,r.kt)("p",null,"Make sure all the necessary dependencies are installed. You can run ",(0,r.kt)("inlineCode",{parentName:"p"},"ldd chrome\n| grep not")," on a Linux machine to check which dependencies are missing. The\ncommon ones are provided below. Also, see\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://source.chromium.org/chromium/chromium/src/+/main:chrome/installer/linux/debian/dist_package_versions.json"}),"https://source.chromium.org/chromium/chromium/src/+/main:chrome/installer/linux/debian/dist_package_versions.json"),"\nfor the up-to-date list of dependencies declared by the Chrome installer."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Debian (e.g. Ubuntu) Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"ca-certificates\nfonts-liberation\nlibasound2\nlibatk-bridge2.0-0\nlibatk1.0-0\nlibc6\nlibcairo2\nlibcups2\nlibdbus-1-3\nlibexpat1\nlibfontconfig1\nlibgbm1\nlibgcc1\nlibglib2.0-0\nlibgtk-3-0\nlibnspr4\nlibnss3\nlibpango-1.0-0\nlibpangocairo-1.0-0\nlibstdc++6\nlibx11-6\nlibx11-xcb1\nlibxcb1\nlibxcomposite1\nlibxcursor1\nlibxdamage1\nlibxext6\nlibxfixes3\nlibxi6\nlibxrandr2\nlibxrender1\nlibxss1\nlibxtst6\nlsb-release\nwget\nxdg-utils\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"CentOS Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"alsa-lib.x86_64\natk.x86_64\ncups-libs.x86_64\ngtk3.x86_64\nipa-gothic-fonts\nlibXcomposite.x86_64\nlibXcursor.x86_64\nlibXdamage.x86_64\nlibXext.x86_64\nlibXi.x86_64\nlibXrandr.x86_64\nlibXScrnSaver.x86_64\nlibXtst.x86_64\npango.x86_64\nxorg-x11-fonts-100dpi\nxorg-x11-fonts-75dpi\nxorg-x11-fonts-cyrillic\nxorg-x11-fonts-misc\nxorg-x11-fonts-Type1\nxorg-x11-utils\n")),(0,r.kt)("p",null,"After installing dependencies you need to update ",(0,r.kt)("inlineCode",{parentName:"p"},"nss")," library using this\ncommand"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"yum update nss -y\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Check out discussions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/puppeteer/puppeteer/issues/290"}),"#290")," - Debian\ntroubleshooting ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/puppeteer/puppeteer/issues/391"}),"#391")," - CentOS\ntroubleshooting ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/puppeteer/puppeteer/issues/379"}),"#379")," - Alpine\ntroubleshooting ",(0,r.kt)("br",null)))),(0,r.kt)("h2",o({},{id:"chrome-headless-disables-gpu-compositing"}),"Chrome headless disables GPU compositing"),(0,r.kt)("p",null,"Chrome/Chromium requires ",(0,r.kt)("inlineCode",{parentName:"p"},"--enable-gpu")," to\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://crbug.com/1416283"}),"enable GPU acceleration in headless mode"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"const browser = await puppeteer.launch({\n  headless: true,\n  args: ['--enable-gpu'],\n});\n")),(0,r.kt)("h2",o({},{id:"setting-up-chrome-linux-sandbox"}),"Setting Up Chrome Linux Sandbox"),(0,r.kt)("p",null,"In order to protect the host environment from untrusted web content, Chrome uses\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://chromium.googlesource.com/chromium/src/+/HEAD/docs/linux/sandboxing.md"}),"multiple layers of sandboxing"),".\nFor this to work properly, the host should be configured first. If there's no\ngood sandbox for Chrome to use, it will crash with the error\n",(0,r.kt)("inlineCode",{parentName:"p"},"No usable sandbox!"),"."),(0,r.kt)("p",null,"If you ",(0,r.kt)("strong",{parentName:"p"},"absolutely trust")," the content you open in Chrome, you can launch\nChrome with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-sandbox")," argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"const browser = await puppeteer.launch({\n  args: ['--no-sandbox', '--disable-setuid-sandbox'],\n});\n")),(0,r.kt)("admonition",o({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"Running without a sandbox is ",(0,r.kt)("strong",{parentName:"p"},"strongly discouraged"),". Consider configuring a\nsandbox instead.")),(0,r.kt)("p",null,"There are 2 ways to configure a sandbox in Chromium."),(0,r.kt)("h3",o({},{id:"recommended-enable-user-namespace-cloning"}),"[recommended]"," Enable ",(0,r.kt)("a",o({parentName:"h3"},{href:"http://man7.org/linux/man-pages/man7/user_namespaces.7.html"}),"user namespace cloning")),(0,r.kt)("p",null,"User namespace cloning is only supported by modern kernels. Unprivileged user\nnamespaces are generally fine to enable, but in some cases they open up more\nkernel attack surface for (unsandboxed) non-root processes to elevate to kernel\nprivileges."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"sudo sysctl -w kernel.unprivileged_userns_clone=1\n")),(0,r.kt)("h3",o({},{id:"alternative-setup-setuid-sandbox"}),"[alternative]"," Setup ",(0,r.kt)("a",o({parentName:"h3"},{href:"https://chromium.googlesource.com/chromium/src/+/HEAD/docs/linux/suid_sandbox_development.md"}),"setuid sandbox")),(0,r.kt)("p",null,"The setuid sandbox comes as a standalone executable and is located next to the\nChromium that Puppeteer downloads. It is fine to re-use the same sandbox\nexecutable for different Chromium versions, so the following could be done only\nonce per host environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# cd to the downloaded instance\ncd <project-dir-path>/node_modules/puppeteer/.local-chromium/linux-<revision>/chrome-linux/\nsudo chown root:root chrome_sandbox\nsudo chmod 4755 chrome_sandbox\n# copy sandbox executable to a shared location\nsudo cp -p chrome_sandbox /usr/local/sbin/chrome-devel-sandbox\n# export CHROME_DEVEL_SANDBOX env variable\nexport CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox\n")),(0,r.kt)("p",null,"You might want to export the ",(0,r.kt)("inlineCode",{parentName:"p"},"CHROME_DEVEL_SANDBOX")," env variable by default. In\nthis case, add the following to the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".zshenv"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"export CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox\n")),(0,r.kt)("h2",o({},{id:"running-puppeteer-on-travis-ci"}),"Running Puppeteer on Travis CI"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udc4b We ran our tests for Puppeteer on Travis CI until v6.0.0 (when we've\nmigrated to GitHub Actions) - see our historical\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/blob/v5.5.0/.travis.yml"}),(0,r.kt)("inlineCode",{parentName:"a"},".travis.yml")," (v5.5.0)"),"\nfor reference.")),(0,r.kt)("p",null,"Tips-n-tricks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Xvfb"}),"xvfb")," service should be launched in order\nto run Chromium in non-headless mode"),(0,r.kt)("li",{parentName:"ul"},"Runs on Xenial Linux on Travis by default"),(0,r.kt)("li",{parentName:"ul"},"Runs ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install")," by default"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," is cached by default")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".travis.yml")," might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-yml"}),"language: node_js\nnode_js: node\nservices: xvfb\nscript:\n  - npm test\n")),(0,r.kt)("h2",o({},{id:"running-puppeteer-on-wsl-windows-subsystem-for-linux"}),"Running Puppeteer on WSL (Windows subsystem for Linux)"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/issues/1837"}),"this thread")," with some\ntips specific to WSL. In a nutshell, you need to install missing dependencies by\neither:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",o({parentName:"li"},{href:"https://learn.microsoft.com/en-us/windows/wsl/tutorials/gui-apps#install-google-chrome-for-linux"}),"Installing Chrome on WSL to install all dependencies")),(0,r.kt)("li",{parentName:"ol"},"Installing required dependencies manually:\n",(0,r.kt)("inlineCode",{parentName:"li"},"sudo apt install libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2"),".")),(0,r.kt)("admonition",o({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"The list of required dependencies might get outdated and depend on what you\nalready have installed.")),(0,r.kt)("h2",o({},{id:"running-puppeteer-on-circleci"}),"Running Puppeteer on CircleCI"),(0,r.kt)("p",null,"Running Puppeteer smoothly on CircleCI requires the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start with a\n",(0,r.kt)("a",o({parentName:"li"},{href:"https://circleci.com/docs/2.0/circleci-images/#nodejs"}),"NodeJS image")," in your\nconfig like so:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",o({parentName:"pre"},{className:"language-yaml"}),"docker:\n  - image: circleci/node:14 # Use your desired version\n    environment:\n      NODE_ENV: development # Only needed if puppeteer is in `devDependencies`\n"))),(0,r.kt)("li",{parentName:"ol"},"Dependencies like ",(0,r.kt)("inlineCode",{parentName:"li"},"libXtst6")," probably need to be installed via ",(0,r.kt)("inlineCode",{parentName:"li"},"apt-get"),", so\nuse the\n",(0,r.kt)("a",o({parentName:"li"},{href:"https://circleci.com/orbs/registry/orb/threetreeslight/puppeteer"}),"threetreeslight/puppeteer"),"\norb\n(",(0,r.kt)("a",o({parentName:"li"},{href:"https://circleci.com/orbs/registry/orb/threetreeslight/puppeteer#quick-start"}),"instructions"),"),\nor paste parts of its\n",(0,r.kt)("a",o({parentName:"li"},{href:"https://circleci.com/orbs/registry/orb/threetreeslight/puppeteer#orb-source"}),"source"),"\ninto your own config."),(0,r.kt)("li",{parentName:"ol"},"Lastly, if you\u2019re using Puppeteer through Jest, then you may encounter an\nerror spawning child processes:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",o({parentName:"pre"},{}),"[00:00.0]  jest args: --e2e --spec --max-workers=36\nError: spawn ENOMEM\n   at ChildProcess.spawn (internal/child_process.js:394:11)\n")),"This is likely caused by Jest autodetecting the number of processes on the\nentire machine (",(0,r.kt)("inlineCode",{parentName:"li"},"36"),") rather than the number allowed to your container (",(0,r.kt)("inlineCode",{parentName:"li"},"2"),").\nTo fix this, set ",(0,r.kt)("inlineCode",{parentName:"li"},"jest --maxWorkers=2")," in your test command.")),(0,r.kt)("h2",o({},{id:"running-puppeteer-in-docker"}),"Running Puppeteer in Docker"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udc4b We used ",(0,r.kt)("a",o({parentName:"p"},{href:"https://cirrus-ci.org/"}),"Cirrus Ci")," to run our tests for Puppeteer\nin a Docker container until v3.0.x - see our historical\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/blob/v3.0.1/.ci/node12/Dockerfile.linux"}),(0,r.kt)("inlineCode",{parentName:"a"},"Dockerfile.linux")," (v3.0.1)"),"\nfor reference. Starting from v16.0.0 we are shipping a Docker image via the\nGitHub registry. The Dockerfile is located\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/blob/main/docker/Dockerfile"}),"here")," and\nthe usage instructions are in the\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer#running-in-docker"}),"README.md"),". The\ninstructions below might be still helpful if you are building your own image.")),(0,r.kt)("p",null,"Getting headless Chrome up and running in Docker can be tricky. The bundled\nChromium that Puppeteer installs is missing the necessary shared library\ndependencies."),(0,r.kt)("p",null,"To fix, you'll need to install the missing dependencies and the latest Chromium\npackage in your Dockerfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-Dockerfile"}),"FROM node:14-slim\n\n# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)\n# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer\n# installs, work.\nRUN apt-get update \\\n    && apt-get install -y wget gnupg \\\n    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \\\n    && sh -c 'echo \"deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main\" >> /etc/apt/sources.list.d/google.list' \\\n    && apt-get update \\\n    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \\\n      --no-install-recommends \\\n    && rm -rf /var/lib/apt/lists/*\n\n# If running Docker >= 1.13.0 use docker run's --init arg to reap zombie processes, otherwise\n# uncomment the following lines to have `dumb-init` as PID 1\n# ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.2/dumb-init_1.2.2_x86_64 /usr/local/bin/dumb-init\n# RUN chmod +x /usr/local/bin/dumb-init\n# ENTRYPOINT [\"dumb-init\", \"--\"]\n\n# Uncomment to skip the chromium download when installing puppeteer. If you do,\n# you'll need to launch puppeteer with:\n#     browser.launch({executablePath: 'google-chrome-stable'})\n# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true\n\n# Install puppeteer so it's available in the container.\nRUN npm init -y &&  \\\n    npm i puppeteer \\\n    # Add user so we don't need --no-sandbox.\n    # same layer as npm install to keep re-chowned files from using up several hundred MBs more space\n    && groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \\\n    && mkdir -p /home/pptruser/Downloads \\\n    && chown -R pptruser:pptruser /home/pptruser \\\n    && chown -R pptruser:pptruser /node_modules \\\n    && chown -R pptruser:pptruser /package.json \\\n    && chown -R pptruser:pptruser /package-lock.json\n\n# Run everything after as non-privileged user.\nUSER pptruser\n\nCMD [\"google-chrome-stable\"]\n")),(0,r.kt)("p",null,"Build the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"docker build -t puppeteer-chrome-linux .\n")),(0,r.kt)("p",null,"Run the container by passing ",(0,r.kt)("inlineCode",{parentName:"p"},'node -e "<yourscript.js content as a string>"')," as\nthe command:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),' docker run -i --init --rm --cap-add=SYS_ADMIN \\\n   --name puppeteer-chrome puppeteer-chrome-linux \\\n   node -e "`cat yourscript.js`"\n')),(0,r.kt)("p",null,"There's a full example at ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/ebidel/try-puppeteer"}),"https://github.com/ebidel/try-puppeteer")," that shows how\nto run this Dockerfile from a webserver running on App Engine Flex (Node)."),(0,r.kt)("h3",o({},{id:"running-on-alpine"}),"Running on Alpine"),(0,r.kt)("p",null,"The\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://pkgs.alpinelinux.org/package/edge/community/x86_64/chromium"}),"newest Chromium package"),"\nsupported on Alpine is 100, which corresponds to\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/releases/tag/v13.5.0"}),"Puppeteer v13.5.0"),"."),(0,r.kt)("p",null,"Example Dockerfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-Dockerfile"}),"FROM alpine\n\n# Installs latest Chromium (100) package.\nRUN apk add --no-cache \\\n      chromium \\\n      nss \\\n      freetype \\\n      harfbuzz \\\n      ca-certificates \\\n      ttf-freefont \\\n      nodejs \\\n      yarn\n\n...\n\n# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.\nENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser\n\n# Puppeteer v13.5.0 works with Chromium 100.\nRUN yarn add puppeteer@13.5.0\n\n# Add user so we don't need --no-sandbox.\nRUN addgroup -S pptruser && adduser -S -G pptruser pptruser \\\n    && mkdir -p /home/pptruser/Downloads /app \\\n    && chown -R pptruser:pptruser /home/pptruser \\\n    && chown -R pptruser:pptruser /app\n\n# Run everything after as non-privileged user.\nUSER pptruser\n\n...\n")),(0,r.kt)("h2",o({},{id:"running-puppeteer-on-gitlabci"}),"Running Puppeteer on GitlabCI"),(0,r.kt)("p",null,"This is very similar to some of the instructions above, but require a bit\ndifferent configuration to finally achieve success."),(0,r.kt)("p",null,"Usually the issue looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"Error: Failed to launch chrome! spawn /usr/bin/chromium-browser ENOENT\n")),(0,r.kt)("p",null,"You need to patch two places:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Your ",(0,r.kt)("inlineCode",{parentName:"li"},"gitlab-ci.yml")," config"),(0,r.kt)("li",{parentName:"ol"},"Arguments' list when launching pupepeteer")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"gitlab-ci.yml")," we need to install some packages to make it possible to\nlaunch headless Chrome in your docker env:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-yml"}),"before_script:\n  - apt-get update\n  - apt-get install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2\n    libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4\n    libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0\n    libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1\n    libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1\n    libxss1 libxtst6 ca-certificates fonts-liberation libnss3 lsb-release\n    xdg-utils wget\n")),(0,r.kt)("p",null,"Next, you have to use ",(0,r.kt)("inlineCode",{parentName:"p"},"'--no-sandbox'")," mode and also\n",(0,r.kt)("inlineCode",{parentName:"p"},"'--disable-setuid-sandbox'")," when launching Puppeteer. This can be done by\npassing them as an arguments to your ",(0,r.kt)("inlineCode",{parentName:"p"},".launch()")," call:\n",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });"),"."),(0,r.kt)("h4",o({},{id:"tips"}),"Tips"),(0,r.kt)("p",null,"By default, Docker runs a container with a ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/shm")," shared memory space 64MB.\nThis is ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/c0b/chrome-in-docker/issues/1"}),"typically too small"),"\nfor Chrome and will cause Chrome to crash when rendering large pages. To fix,\nrun the container with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run --shm-size=1gb")," to increase the size of\n",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". Since Chrome 65, this is no longer necessary. Instead, launch the\nbrowser with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable-dev-shm-usage")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"const browser = await puppeteer.launch({\n  args: ['--disable-dev-shm-usage'],\n});\n")),(0,r.kt)("p",null,"This will write shared memory files into ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". See\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=736452"}),"crbug.com/736452"),"\nfor more details."),(0,r.kt)("p",null,"Seeing other weird errors when launching Chrome? Try running your container with\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker run --cap-add=SYS_ADMIN")," when developing locally. Since the Dockerfile\nadds a ",(0,r.kt)("inlineCode",{parentName:"p"},"pptr")," user as a non-privileged user, it may not have all the necessary\nprivileges."),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/Yelp/dumb-init"}),"dumb-init")," is worth checking out if you're\nexperiencing a lot of zombies Chrome processes sticking around. There's special\ntreatment for processes with PID=1, which makes it hard to terminate Chrome\nproperly in some cases (e.g. in Docker)."),(0,r.kt)("h2",o({},{id:"running-puppeteer-in-the-cloud"}),"Running Puppeteer in the cloud"),(0,r.kt)("h3",o({},{id:"running-puppeteer-on-google-app-engine"}),"Running Puppeteer on Google App Engine"),(0,r.kt)("p",null,"The Node.js runtime of the\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://cloud.google.com/appengine/docs/standard/nodejs/"}),"App Engine standard environment"),"\ncomes with all system packages needed to run Headless Chrome."),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer"),", simply list the module as a dependency in your\n",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," and deploy to Google App Engine. Read more about using\n",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," on App Engine by following\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://cloud.google.com/appengine/docs/standard/nodejs/using-headless-chrome-with-puppeteer"}),"the official tutorial"),"."),(0,r.kt)("h3",o({},{id:"running-puppeteer-on-google-cloud-functions"}),"Running Puppeteer on Google Cloud Functions"),(0,r.kt)("p",null,"You can try running Puppeteer on\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://cloud.google.com/functions/docs/"}),"Google Cloud Functions")," but we have\nbeen getting reports that newest runtimes don't have all dependencies to run\nChromium."),(0,r.kt)("p",null,"If you encounter problems due to missing Chromium dependencies, consider using\nGoogle Cloud Run instead where you can provide a custom Dockerfile with all\ndependencies. Also, see our\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/pkgs/container/puppeteer"}),"official Docker image"),"."),(0,r.kt)("h3",o({},{id:"running-puppeteer-on-google-cloud-run"}),"Running Puppeteer on Google Cloud Run"),(0,r.kt)("p",null,"The default Node.js runtime of\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://cloud.google.com/run/docs/"}),"Google Cloud Run")," does not come with the\nsystem packages needed to run Headless Chrome. You will need to set up your own\n",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and\n",(0,r.kt)("a",o({parentName:"p"},{href:"#chrome-headless-doesnt-launch-on-unix"}),"include the missing dependencies"),"."),(0,r.kt)("h3",o({},{id:"running-puppeteer-on-heroku"}),"Running Puppeteer on Heroku"),(0,r.kt)("p",null,"Running Puppeteer on Heroku requires some additional dependencies that aren't\nincluded on the Linux box that Heroku spins up for you. To add the dependencies\non deploy, add the Puppeteer Heroku buildpack to the list of buildpacks for your\napp under Settings > Buildpacks."),(0,r.kt)("p",null,"The url for the buildpack is\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/jontewks/puppeteer-heroku-buildpack"}),"https://github.com/jontewks/puppeteer-heroku-buildpack")),(0,r.kt)("p",null,"Ensure that you're using ",(0,r.kt)("inlineCode",{parentName:"p"},"'--no-sandbox'")," mode when launching Puppeteer. This\ncan be done by passing it as an argument to your ",(0,r.kt)("inlineCode",{parentName:"p"},".launch()")," call:\n",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer.launch({ args: ['--no-sandbox'] });"),"."),(0,r.kt)("p",null,"When you click add buildpack, simply paste that url into the input, and click\nsave. On the next deploy, your app will also install the dependencies that\nPuppeteer needs to run."),(0,r.kt)("p",null,"If you need to render Chinese, Japanese, or Korean characters you may need to\nuse a buildpack with additional font files like\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/CoffeeAndCode/puppeteer-heroku-buildpack"}),"https://github.com/CoffeeAndCode/puppeteer-heroku-buildpack")),(0,r.kt)("p",null,"There's also another\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://timleland.com/headless-chrome-on-heroku/"}),"simple guide")," from @timleland\nthat includes a sample project:\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://timleland.com/headless-chrome-on-heroku/"}),"https://timleland.com/headless-chrome-on-heroku/"),"."),(0,r.kt)("h3",o({},{id:"running-puppeteer-on-aws-lambda"}),"Running Puppeteer on AWS Lambda"),(0,r.kt)("p",null,"AWS Lambda ",(0,r.kt)("a",o({parentName:"p"},{href:"https://docs.aws.amazon.com/lambda/latest/dg/limits.html"}),"limits"),"\ndeployment package sizes to ~50MB. This presents challenges for running headless\nChrome (and therefore Puppeteer) on Lambda. The community has put together a few\nresources that work around the issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/sparticuz/chromium"}),"https://github.com/sparticuz/chromium")," (a vendor and framework agnostic library that supports modern versions of ",(0,r.kt)("inlineCode",{parentName:"li"},"chromium"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/alixaxel/chrome-aws-lambda"}),"https://github.com/alixaxel/chrome-aws-lambda")," (supports up to puppeteer 10.1 - outdated)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/adieuadieu/serverless-chrome/blob/HEAD/docs/chrome.md"}),"https://github.com/adieuadieu/serverless-chrome/blob/HEAD/docs/chrome.md"),"\n(serverless plugin - outdated)")),(0,r.kt)("h3",o({},{id:"running-puppeteer-on-aws-ec2-instance-running-amazon-linux"}),"Running Puppeteer on AWS EC2 instance running Amazon-Linux"),(0,r.kt)("p",null,"If you are using an EC2 instance running amazon-linux in your CI/CD pipeline,\nand if you want to run Puppeteer tests in amazon-linux, follow these steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To install Chromium, you have to first enable ",(0,r.kt)("inlineCode",{parentName:"p"},"amazon-linux-extras")," which\ncomes as part of\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://aws.amazon.com/premiumsupport/knowledge-center/ec2-enable-epel/"}),"EPEL (Extra Packages for Enterprise Linux)"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"sudo amazon-linux-extras install epel -y\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, install Chromium:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"sudo yum install -y chromium\n")))),(0,r.kt)("p",null,"Now Puppeteer can launch Chromium to run your tests. If you do not enable EPEL\nand if you continue installing chromium as part of ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install"),", Puppeteer\ncannot launch Chromium due to unavailablity of ",(0,r.kt)("inlineCode",{parentName:"p"},"libatk-1.0.so.0")," and many more\npackages."),(0,r.kt)("h2",o({},{id:"code-transpilation-issues"}),"Code Transpilation Issues"),(0,r.kt)("p",null,"If you are using a JavaScript transpiler like babel or TypeScript, calling\n",(0,r.kt)("inlineCode",{parentName:"p"},"evaluate()")," with an async function might not work. This is because while\n",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype.toString()")," to serialize functions while\ntranspilers could be changing the output code in such a way it's incompatible\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer"),"."),(0,r.kt)("p",null,"Some workarounds to this problem would be to instruct the transpiler not to mess\nup with the code, for example, configure TypeScript to use latest ecma version\n(",(0,r.kt)("inlineCode",{parentName:"p"},'"target": "es2018"'),"). Another workaround could be using string templates\ninstead of functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"await page.evaluate(`(async() => {\n   console.log('1');\n})()`);\n")))}d.isMDXComponent=!0}}]);