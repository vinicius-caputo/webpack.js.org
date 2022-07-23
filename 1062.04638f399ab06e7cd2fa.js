"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1062],{1062:function(e,a,n){n.r(a),n(7378);var t=n(2682);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(this,arguments)}function p(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",s({components:a},n),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.kt)("p",{parentName:"aside"},"This guide extends on code examples found in the ",(0,t.kt)("a",{href:"/guides/output-management",parentName:"p"},"Output Management")," guide.")),(0,t.kt)("p",null,"Progressive Web Applications (or PWAs) are web apps that deliver an experience similar to native applications. There are many things that can contribute to that. Of these, the most significant is the ability for an app to be able to function when ",(0,t.kt)("strong",{parentName:"p"},"offline"),". This is achieved through the use of a web technology called ",(0,t.kt)("a",{href:"https://developers.google.com/web/fundamentals/primers/service-workers/",parentName:"p"},"Service Workers"),"."),(0,t.kt)("p",null,"This section will focus on adding an offline experience to our app. We'll achieve this using a Google project called ",(0,t.kt)("a",{href:"https://github.com/GoogleChrome/workbox",parentName:"p"},"Workbox")," which provides tools that help make offline support for web apps easier to setup."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"we-dont-work-offline-now",parentName:"h2"}),"We Don't Work Offline Now",(0,t.kt)("a",{href:"#we-dont-work-offline-now","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"So far, we've been viewing the output by going directly to the local file system. Typically though, a real user accesses a web app over a network; their browser talking to a ",(0,t.kt)("strong",{parentName:"p"},"server")," which will serve up the required assets (e.g. ",(0,t.kt)("inlineCode",{parentName:"p"},".html"),", ",(0,t.kt)("inlineCode",{parentName:"p"},".js"),", and ",(0,t.kt)("inlineCode",{parentName:"p"},".css")," files)."),(0,t.kt)("p",null,"So let's test what the current experience is like using a server with more basic features. Let's use the ",(0,t.kt)("a",{href:"https://www.npmjs.com/package/http-server",parentName:"p"},"http-server")," package: ",(0,t.kt)("inlineCode",{parentName:"p"},"npm install http-server --save-dev"),". We'll also amend the ",(0,t.kt)("inlineCode",{parentName:"p"},"scripts")," section of our ",(0,t.kt)("inlineCode",{parentName:"p"},"package.json")," to add in a ",(0,t.kt)("inlineCode",{parentName:"p"},"start")," script:"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"package.json")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},"{\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," ...\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},' "scripts": {\n')),(0,t.kt)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},'    "build": "webpack"\n')),(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},'    "build": "webpack",\n'),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},'    "start": "http-server dist"\n')),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," },\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," ...\n")),"}")),(0,t.kt)("p",null,"Note: ",(0,t.kt)("a",{href:"/configuration/dev-server/",parentName:"p"},"webpack DevServer")," writes in-memory by default. We'll need to enable ",(0,t.kt)("a",{href:"/configuration/dev-server/#devserverdevmiddleware",parentName:"p"},"devserverdevmiddleware.writeToDisk")," option in order for http-server to be able to serve files from ",(0,t.kt)("inlineCode",{parentName:"p"},"./dist")," directory."),(0,t.kt)("p",null,"If you haven't previously done so, run the command ",(0,t.kt)("inlineCode",{parentName:"p"},"npm run build")," to build your project. Then run the command ",(0,t.kt)("inlineCode",{parentName:"p"},"npm start"),". This should produce the following output:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-bash",parentName:"pre"},(0,t.kt)("span",{className:"token operator",parentName:"code"},">")," http-server dist\n\nStarting up http-server, serving dist\nAvailable on:\n  http://xx.x.x.x:8080\n  http://127.0.0.1:8080\n  http://xxx.xxx.x.x:8080\nHit CTRL-C to stop the server")),(0,t.kt)("p",null,"If you open your browser to ",(0,t.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")," (i.e. ",(0,t.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1"),") you should see your webpack application being served from the ",(0,t.kt)("inlineCode",{parentName:"p"},"dist")," directory. If you stop the server and refresh, the webpack application is no longer available."),(0,t.kt)("p",null,"This is what we aim to change. Once we reach the end of this module we should be able to stop the server, hit refresh and still see our application."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"adding-workbox",parentName:"h2"}),"Adding Workbox",(0,t.kt)("a",{href:"#adding-workbox","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Let's add the Workbox webpack plugin and adjust the ",(0,t.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-bash",parentName:"pre"},(0,t.kt)("span",{className:"token function",parentName:"code"},"npm")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"install")," workbox-webpack-plugin --save-dev")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," const path = require('path');\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," const HtmlWebpackPlugin = require('html-webpack-plugin');\n")),(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"}," const WorkboxPlugin = require('workbox-webpack-plugin');\n")),"\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," module.exports = {\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   entry: {\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     app: './src/index.js',\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     print: './src/print.js',\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   },\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   plugins: [\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     new HtmlWebpackPlugin({\n")),(0,t.kt)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"       title: 'Output Management',\n")),(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"       title: 'Progressive Web Application',\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     }),\n")),(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"     new WorkboxPlugin.GenerateSW({\n"),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"       // these options encourage the ServiceWorkers to get in there fast\n"),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},'       // and not allow any straggling "old" SWs to hang around\n'),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"       clientsClaim: true,\n"),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"       skipWaiting: true,\n"),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"     }),\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   ],\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   output: {\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     filename: '[name].bundle.js',\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     path: path.resolve(__dirname, 'dist'),\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     clean: true,\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   },\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," };")))),(0,t.kt)("p",null,"With that in place, let's see what happens when we do an ",(0,t.kt)("inlineCode",{parentName:"p"},"npm run build"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-bash",parentName:"pre"},(0,t.kt)("span",{className:"token punctuation",parentName:"code"},".."),".\n                  Asset       Size  Chunks                    Chunk Names\n          app.bundle.js     ",(0,t.kt)("span",{className:"token number",parentName:"code"},"545")," kB    ",(0,t.kt)("span",{className:"token number",parentName:"code"},"0"),", ",(0,t.kt)("span",{className:"token number",parentName:"code"},"1"),"  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"emitted",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),"  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"big",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),"  app\n        print.bundle.js    ",(0,t.kt)("span",{className:"token number",parentName:"code"},"2.74")," kB       ",(0,t.kt)("span",{className:"token number",parentName:"code"},"1"),"  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"emitted",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),"         print\n             index.html  ",(0,t.kt)("span",{className:"token number",parentName:"code"},"254")," bytes          ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"emitted",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),"\nprecache-manifest.b5ca1c555e832d6fbf9462efd29d27eb.js  ",(0,t.kt)("span",{className:"token number",parentName:"code"},"268")," bytes          ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"emitted",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),"\n      service-worker.js       ",(0,t.kt)("span",{className:"token number",parentName:"code"},"1")," kB          ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"emitted",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},".."),".")),(0,t.kt)("p",null,"As you can see, we now have 2 extra files being generated; ",(0,t.kt)("inlineCode",{parentName:"p"},"service-worker.js")," and the more verbose ",(0,t.kt)("inlineCode",{parentName:"p"},"precache-manifest.b5ca1c555e832d6fbf9462efd29d27eb.js"),". ",(0,t.kt)("inlineCode",{parentName:"p"},"service-worker.js")," is the Service Worker file and ",(0,t.kt)("inlineCode",{parentName:"p"},"precache-manifest.b5ca1c555e832d6fbf9462efd29d27eb.js")," is a file that ",(0,t.kt)("inlineCode",{parentName:"p"},"service-worker.js")," requires so it can run. Your own generated files will likely be different; but you should have a ",(0,t.kt)("inlineCode",{parentName:"p"},"service-worker.js")," file there."),(0,t.kt)("p",null,"So we're now at the happy point of having produced a Service Worker. What's next?"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"registering-our-service-worker",parentName:"h2"}),"Registering Our Service Worker",(0,t.kt)("a",{href:"#registering-our-service-worker","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Let's allow our Service Worker to come out and play by registering it. We'll do that by adding the registration code below:"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"index.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," import _ from 'lodash';\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," import printMe from './print.js';\n")),"\n",(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"}," if ('serviceWorker' in navigator) {\n"),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"   window.addEventListener('load', () => {\n"),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"     navigator.serviceWorker.register('/service-worker.js').then(registration => {\n"),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"       console.log('SW registered: ', registration);\n"),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"     }).catch(registrationError => {\n"),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"       console.log('SW registration failed: ', registrationError);\n"),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"     });\n"),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"   });\n"),(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"}," }")))),(0,t.kt)("p",null,"Once more ",(0,t.kt)("inlineCode",{parentName:"p"},"npm run build")," to build a version of the app including the registration code. Then serve it with ",(0,t.kt)("inlineCode",{parentName:"p"},"npm start"),". Navigate to ",(0,t.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")," and take a look at the console. Somewhere in there you should see:"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-bash",parentName:"pre"},"SW registered")),(0,t.kt)("p",null,"Now to test it. Stop your server and refresh your page. If your browser supports Service Workers then you should still be looking at your application. However, it has been served up by your Service Worker and ",(0,t.kt)("strong",{parentName:"p"},"not")," by the server."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"conclusion",parentName:"h2"}),"Conclusion",(0,t.kt)("a",{href:"#conclusion","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"You have built an offline app using the Workbox project. You've started the journey of turning your web app into a PWA. You may now want to think about taking things further. A good resource to help you with that can be found ",(0,t.kt)("a",{href:"https://developers.google.com/web/progressive-web-apps/",parentName:"p"},"here"),"."))}p.isMDXComponent=!0,a.default=p}}]);