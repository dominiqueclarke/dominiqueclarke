(this["webpackJsonpbob-ross-portfolio"]=this["webpackJsonpbob-ross-portfolio"]||[]).push([[0],[,,,,function(e,n,t){var a={"./background1.jpg":28,"./background2.jpg":29,"./background3.jpg":30,"./background4.jpg":31,"./background5.jpg":32,"./background6.jpg":33,"./background7.jpg":34,"./background8.jpg":35,"./brush-stroke.svg":11,"./cursor.svg":36,"./headshot.jpg":5};function r(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=4},function(e,n,t){e.exports=t.p+"static/media/headshot.e66f53c2.jpg"},,,,,,function(e,n,t){e.exports=t.p+"static/media/brush-stroke.19e2c74b.svg"},,,,,,,function(e,n,t){e.exports=t(37)},,,,,function(e,n,t){},,,function(e,n,t){},function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/background1.11b4fbef.jpg"},function(e,n,t){e.exports=t.p+"static/media/background2.a327e0b1.jpg"},function(e,n,t){e.exports=t.p+"static/media/background3.fd5164dc.jpg"},function(e,n,t){e.exports=t.p+"static/media/background4.9f549f68.jpg"},function(e,n,t){e.exports=t.p+"static/media/background5.64bc8b58.jpg"},function(e,n,t){e.exports=t.p+"static/media/background6.78f191fe.jpg"},function(e,n,t){e.exports=t.p+"static/media/background7.bc88d166.jpg"},function(e,n,t){e.exports=t.p+"static/media/background8.62eb9595.jpg"},function(e,n,t){e.exports=t.p+"static/media/cursor.da6fe4d3.svg"},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(12),i=t.n(o),c=t(17),s=(t(9),t(10),[{asset:"background1.jpg",artistName:"Europeana",artistLink:"https://unsplash.com/@europeana"},{asset:"background2.jpg",artistName:"Steve Johnson",artistLink:"https://unsplash.com/@steve_j"},{asset:"background3.jpg",artistName:"Daniel Olah",artistLink:"https://unsplash.com/@danesduet"},{asset:"background4.jpg",artistName:"Orlova Maria",artistLink:"https://unsplash.com/@orlovamaria"},{asset:"background5.jpg",artistName:"Geordanna Cordero",artistLink:"https://unsplash.com/@geordannatheartist"},{asset:"background6.jpg",artistName:"Europeana",artistLink:"https://unsplash.com/@europeana"},{asset:"background7.jpg",artistName:"Europeana",artistLink:"https://unsplash.com/@europeana"},{asset:"background8.jpg",artistName:"Geordanna Cordero",artistLink:"https://unsplash.com/@geordannatheartist"}]),l=t(1),u=(t(23),t(2));function d(){var e=Object(u.a)(["\n    background: url(",") no-repeat center\n        center/cover;\n    display: block;\n    position: fixed;\n    top: 0;\n    z-index: -1;\n    ::after {\n        content: url(",");\n    }\n"]);return d=function(){return e},e}var p=l.b.canvas(d(),(function(e){return e.theme.currentArt}),(function(e){return e.theme.nextArt}));var m=function(){return Object(a.useEffect)((function(){!function(){var e=document.getElementById("art").getContext("2d");function n(n,t){e.beginPath(),e.arc(n,t,100,0,2*Math.PI),e.fillStyle="#000",e.globalCompositeOperation="destination-out",e.fill()}e.canvas.width=window.innerWidth,e.canvas.height=window.innerHeight,e.fillStyle="white",e.fillRect(0,0,window.innerWidth,window.innerHeight),document.body.addEventListener("mousemove",(function(e){n(e.clientX,e.clientY)}),!1),document.body.addEventListener("touchmove",(function(e){e.preventDefault(),e.targetTouches[0]&&n(e.clientX,e.clientY)}),!1)}()}),[]),r.a.createElement(p,{id:"art"})};function g(){var e=Object(u.a)(["\n    position: relative;\n    width: 100%;\n    margin: 0 auto;\n    padding: 0 0 40px;\n"]);return g=function(){return e},e}var f=l.b.div(g());function h(e){var n=e.children,t=e.className;return r.a.createElement(f,{className:t},n)}var b=t(16),v=t.n(b);t(26);function k(e){var n=e.children,t=e.className,a=e.element,o=e.size;return r.a.createElement(a,{className:v()("body-copy","".concat("body-copy","--").concat(o),t)},n)}function x(){var e=Object(u.a)(['\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n        url("','");\n    border: none;\n    color: white;\n    font-family: "Permanent Marker";\n    font-weight: 600;\n    letter-spacing: 5px;\n    padding: 20px;\n']);return x=function(){return e},e}k.defaultProps={size:"m",element:"span"};var w=l.b.button(x(),(function(e){return e.theme.currentArt}));function j(e){var n=e.children,t=e.onClick;return r.a.createElement(w,{onClick:t},n)}t(27);function E(e){var n=e.children,t=e.element,a=e.size;return r.a.createElement(t,{className:"heading heading--".concat(a)},n)}function y(){var e=Object(u.a)(["\n    background-color: white;\n    border: 2px solid;\n    border-image: url(",") 1 1 1 1 repeat;\n    cursor: auto;\n    padding: 30px;\n"]);return y=function(){return e},e}E.defaultProps={size:"s"};var N=l.b.div(y(),(function(e){return e.theme.currentArt}));function A(e){var n=e.className,t=e.children,a=e.heading;return r.a.createElement(N,{className:"".concat(n)},a?r.a.createElement(E,{element:"h2",size:"l"},a):null,t)}function I(){var e=Object(u.a)(["\n    margin-bottom: 20px;\n"]);return I=function(){return e},e}function O(){var e=Object(u.a)(["\n    bottom: 20px;\n    position: fixed;\n    right: 20px;\n    width: 200px;\n    z-index: 2;\n"]);return O=function(){return e},e}var C=l.b.div(O()),L=Object(l.b)(k)(I());function z(e){var n=e.currentArtistLink,t=e.currentArtistName,a=e.onUpdateArt;return r.a.createElement(C,null,r.a.createElement(A,null,r.a.createElement(L,{element:"p"},"Photo by ",r.a.createElement("a",{href:n},t)," ","on ",r.a.createElement("a",{href:"https://unsplash.com/"},"Unsplash"),"."),r.a.createElement(j,{onClick:a},"Update Artwork")))}var D=t(5),S=t.n(D);function M(){var e=Object(u.a)(['\n    position: relative;\n    padding: 10px;\n    ::before {\n        position: absolute;\n        display: block;\n        bottom: -5px;\n        right: 0;\n        content: "";\n        width: 100%;\n        height: 100%;\n        background-image: url(',");\n        background-size: 100%;\n        z-index: -1;\n    }\n"]);return M=function(){return e},e}function T(){var e=Object(u.a)(['\n    flex: 2 0 0;\n    z-index: 1;\n    font-size: 68px;\n    text-align: right;\n    font-family: "Permanent Marker";\n    padding: 10px;\n']);return T=function(){return e},e}function P(){var e=Object(u.a)(['\n    flex: 1 2 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    h1 {\n        font-size: 20px;\n        font-family: "Montserrat";\n        text-align: center;\n    }\n\n    img {\n        border-radius: 50%;\n        margin-bottom: 20px;\n        width: 200px;\n    }\n']);return P=function(){return e},e}function W(){var e=Object(u.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 550px;\n"]);return W=function(){return e},e}var U=l.b.div(W()),J=l.b.div(P()),R=l.b.div(T()),B=l.b.span(M(),t(11));function F(){return r.a.createElement("header",null,r.a.createElement(A,null,r.a.createElement(U,{class:"header-content"},r.a.createElement(J,{class:"header-item"},r.a.createElement("img",{alt:"headshot",src:S.a}),r.a.createElement("h1",null,"Dominique Clarke: Front End Engineer")),r.a.createElement(R,{class:"tagline header-item"},r.a.createElement("div",null,"I make"),r.a.createElement("div",null,r.a.createElement(B,null,"happy")),r.a.createElement("div",null,"web apps")))))}function G(){return r.a.createElement(A,{heading:"Delight Driven Development"},r.a.createElement(k,{element:"p",size:"l"},"As a front end engineer, it's my joy to delight users. Few things make me happier than when a user says \"oh, wow, cool!\" In the pursuit of building functional and beautiful software that users love, I am continuously expanding my knowledge of development, design, and product management, and team leadership. I have worked on numerous front end projects and a hand full of back-end applications for an enterprise Fortune 500 company and a quickly scaling Deloitte Fast 500 startup. I am most proficient with JavaScript, React, Redux, HTML and SCSS, which I've used to build scalable, performant, accessible, and beautiful user interfaces for enterprise web applications. I've also contributed back end .NET code. Below you can see samples of personal projects built with Angular, Node.js, Mongo, Express, and a few extras like Mapbox and Pixi.js. Additionally I've worked with Java and Spring. While I enjoy learning new technologies, I also enjoy teaching technologies I'm familiar with. In my current role as a Software Developer for Think Company, I mentor junior devs and give talks on the latest front end technologies at our UI Guild. As a technical instructor for Zip Code Wilmington, I helped students from non-technical backgrounds achieve their dreams of becoming professional software developers by developing and delivering curriculum focused on Java, Spring, Angular 2+, test-driven development, design patterns, cloud applications and best practices for writing clean code. In the past as a co-organizer and teacher for Girl Develop It, I helped equip adult women with new tech skills and introduce them to careers they'll love. I still enjoy delivering talks to the greater tech community, and recently gave a talk on Breaking Into Tech for Women Who Code Dallas. As a member of a development team, I hope to learn and to teach, to mentor and be mentored, working collaboratively to build useful, elegant and visually stunning web applications that people enjoy using day after day."))}console.warn(s);var q=function(){var e=Object(a.useState)({index:0,next:t(4)("./".concat(ART[1].asset)),current:t(4)("./".concat(ART[0].asset)),currentArtistName:s[0].artistName,currentArtistLink:s[0].artistLink,accentColors:s[0].accentColors}),n=Object(c.a)(e,2),o=n[0],i=n[1],u=o.accentColors,d=o.current,p=o.next;return r.a.createElement(l.a,{theme:{accentColors:u,currentArt:d,nextArt:p}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content-container"},r.a.createElement(h,{className:"header-block"},r.a.createElement(F,null)),r.a.createElement(h,null,r.a.createElement(G,null)),r.a.createElement(z,{currentArtistLink:o.currentArtistLink,currentArtistName:o.currentArtistName,onUpdateArt:function(){i((function(e){var n=e.index,a=n===s.length-1?0:n+1,r=s[a],i=o.next,c=r.artistName,l=r.artistLink,u=a===s.length-1?0:a+1;return{index:a,next:t(4)("./".concat(ART[u].asset)),current:i,currentArtistLink:l,currentArtistName:c,accentColors:r.accentColors}}))}}))),r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.0e990451.chunk.js.map