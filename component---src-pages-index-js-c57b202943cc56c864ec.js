(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{132:function(e,a,t){"use strict";t.r(a);var n=t(6),i=t.n(n),o=t(0),r=t.n(o),c=t(222),d=(t(286),t(287)),m=t(154),l=t(152),s=t(220),p=t(135),u=t(174),y=p.a.li.withConfig({displayName:"CardsGridItem__StyledItem",componentId:"sc-1wj8mbx-0"})(["text-align:center;padding:25px;box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);background:white;width:auto;margin:15px;flex-basis:0;flex:1;"]),g=p.a.div.withConfig({displayName:"CardsGridItem__IconContainer",componentId:"sc-1wj8mbx-1"})([""]),w=p.a.span.withConfig({displayName:"CardsGridItem__StyledIcon",componentId:"sc-1wj8mbx-2"})(["color:#4064d7;font-size:4em;"]),h=p.a.div.withConfig({displayName:"CardsGridItem__CardContent",componentId:"sc-1wj8mbx-3"})([""]),z=p.a.h3.withConfig({displayName:"CardsGridItem__CardContentHeading",componentId:"sc-1wj8mbx-4"})(["font-size:1.35em;"]),f=p.a.p.withConfig({displayName:"CardsGridItem__CardContentText",componentId:"sc-1wj8mbx-5"})([""]),x=function(e){return r.a.createElement(y,{"data-aos":"flip-left","data-aos-delay":"250"},r.a.createElement(g,null,r.a.createElement(w,null,r.a.createElement(u.a,{icon:e.value.icon}))),r.a.createElement(h,null,r.a.createElement(z,null,e.value.title),r.a.createElement(f,null,e.value.text)))},b=p.a.ul.withConfig({displayName:"CardsGrid__CardsGridList",componentId:"ncuy9i-0"})(["display:flex;margin:100px 0;padding:0;flex-wrap:wrap;margin-left:-15px;margin-right:-15px;"]),I=function(e){function a(){return e.apply(this,arguments)||this}return i()(a,e),a.prototype.render=function(){var e=this.props.gridData.map(function(e,a){return r.a.createElement(x,{key:a,value:e})});return r.a.createElement(b,null,e)},a}(o.Component),v=t(221),k=t(155),j=t(195);t.d(a,"default",function(){return E}),c.b.add(d.e,d.j,d.k,d.a,d.b,d.o,d.h,d.c,d.q,d.d,d.i,d.f,d.l,d.m,d.g,d.n,d.p);var E=function(e){function a(){return e.apply(this,arguments)||this}i()(a,e);var n=a.prototype;return n.componentDidMount=function(){try{var e="undefined"!=typeof window,a=e?t(288):void 0,n=e?t(289):void 0;e&&new n('a[href*="#"]',{speed:400,offset:25});a.init({duration:1200,once:!0})}catch(e){console.error(e)}},n.render=function(){return r.a.createElement("div",null,r.a.createElement(l.a,{props:this.props}),r.a.createElement(m.d,null,r.a.createElement(m.b,{id:"intro-section","data-aos":"fade-up"},"Potrzebujesz zarządzania z gwarancją czynszu?"),r.a.createElement(m.c,{"data-aos":"fade-up","data-aos-delay":"50"},"Jeśli na któreś z poniższych pytań odpowiadasz twierdząco odezwij sie do nas! Jesteśmy pewni, że mozemy Ci pomóc."),r.a.createElement(s.a,{gridData:j.b}),r.a.createElement(m.b,{"data-aos":"fade-up"},"Mamy na to sposób"),r.a.createElement(m.c,{"data-aos":"fade-up","data-aos-delay":"50"},"Zobacz co możemy zrobić dla Ciebie i twojego mieszkania."),r.a.createElement(v.a,{listData:j.c}),r.a.createElement(m.b,{"data-aos":"fade-up"},"Dlaczego wybrac Rentiamo?"),r.a.createElement(m.c,{"data-aos":"fade-up","data-aos-delay":"50"},"Jeśli na któreś z poniższych pytań odpowiadasz twierdząco odezwij sie do nas! Jesteśmy pewni, że mozemy Ci pomóc."),r.a.createElement(I,{gridData:j.a})),r.a.createElement(k.a,null))},a}(r.a.Component)},136:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return y}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return u});var n=t(0),i=t.n(n),o=t(4),r=t.n(o),c=t(134),d=t.n(c);t.d(a,"Link",function(){return d.a}),t.d(a,"withPrefix",function(){return c.withPrefix}),t.d(a,"navigate",function(){return c.navigate}),t.d(a,"push",function(){return c.push}),t.d(a,"replace",function(){return c.replace}),t.d(a,"navigateTo",function(){return c.navigateTo});var m=t(137),l=t.n(m);t.d(a,"PageRenderer",function(){return l.a});var s=t(28);t.d(a,"parsePath",function(){return s.a});var p=i.a.createContext({}),u=function(e){return i.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},137:function(e,a,t){var n;e.exports=(n=t(148))&&n.default||n},148:function(e,a,t){"use strict";t.r(a);t(29);var n=t(0),i=t.n(n),o=t(4),r=t.n(o),c=t(46),d=t(2),m=function(e){var a=e.location,t=d.default.getResourcesForPathnameSync(a.pathname);return i.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};m.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=m},149:function(e,a,t){e.exports=t.p+"static/hero-image-3fd64915f8626f3ec2c627deda7027e5.jpg"},150:function(e,a){e.exports="data:image/png;base64,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"},152:function(e,a,t){"use strict";var n=t(0),i=t.n(n),o=t(136),r=t(135),c=r.a.ul.withConfig({displayName:"Navigation__NavigationWrapper",componentId:"sc-1pfzmb8-0"})(["width:100%;display:flex;margin:0;padding:0;@media (min-width:768px){max-width:400px;}"]),d=r.a.li.withConfig({displayName:"Navigation__NavigationItem",componentId:"sc-1pfzmb8-1"})(["padding:15px;text-decoration:none;list-style-type:none;width:100%;text-align:center;&:last-child{@media (min-width:768px){padding-right:0;}}"]),m=Object(r.a)(o.Link).withConfig({displayName:"Navigation__StyledLink",componentId:"sc-1pfzmb8-2"})(["color:#434343;text-decoration:none;font-weight:700;&:hover{color:#4064d7;}"]),l=function(e){return i.a.createElement(c,null,i.a.createElement(d,null,i.a.createElement(m,{to:"/o-nas",activeStyle:{color:"#4064d7"}},"O nas")),i.a.createElement(d,null,i.a.createElement(m,{to:"/oferta",activeStyle:{color:"#4064d7"}},"Oferta")),i.a.createElement(d,null,i.a.createElement(m,{to:"/pokoje",activeStyle:{color:"#4064d7"}},"Pokoje")),i.a.createElement(d,null,i.a.createElement(m,{to:"/kontakt",activeStyle:{color:"#4064d7"}},"Kontakt")))},s=t(149),p=t.n(s),u=t(150),y=t.n(u),g=r.a.div.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1r6rb97-0"})(["width:100%;background-image:",";min-height:",";background-position:center;background-repeat:no-repeat;background-size:cover;position:relative;"],function(e){return e.isHeroVisible?"url("+p.a+")":"none"},function(e){return e.isHeroVisible?"100vh":"none"}),w=r.a.div.withConfig({displayName:"Header__HeaderBar",componentId:"sc-1r6rb97-1"})(["width:100%;margin:auto;max-width:1200px;@media (min-width:768px){display:flex;align-items:center;justify-content:space-between;padding:0 15px;}"]),h=r.a.h1.withConfig({displayName:"Header__LogoWrapper",componentId:"sc-1r6rb97-2"})(["margin:15px 0;max-height:50px;"]),z=Object(r.a)(o.Link).withConfig({displayName:"Header__LogoLink",componentId:"sc-1r6rb97-3"})(["color:black;text-decoration:none;max-width:150px;display:block;margin:15px auto 0;@media (min-width:768px){margin:unset;}"]),f=r.a.div.withConfig({displayName:"Header__HeaderTextContainer",componentId:"sc-1r6rb97-4"})(["display:",";margin-top:100px;@media (min-width:768px){max-width:450px;}@media (min-width:1200px){max-width:550px;margin-top:200px;}"],function(e){return e.isVisible?"block":"none"}),x=r.a.h2.withConfig({displayName:"Header__HeaderHeading",componentId:"sc-1r6rb97-5"})(["color:#434343;font-weight:900;@media (min-width:768px){font-size:180%}@media (min-width:1200px){font-size:300%}"]),b=r.a.p.withConfig({displayName:"Header__HeaderSubheading",componentId:"sc-1r6rb97-6"})(["color:#434343;margin:20px 0 40px;@media (min-width:1200px){font-size:120%}"]),I=r.a.a.withConfig({displayName:"Header__HeaderCtaBtn",componentId:"sc-1r6rb97-7"})(["border:2px solid #434343;background:transparent;border-radius:25px;padding:12px 25px;color:#434343;text-transform:uppercase;font-weight:700;text-decoration:none;font-size:0.9em;&:hover{color:white;background:#4064d7;border-color:#4064d7;}"]),v=r.a.img.withConfig({displayName:"Header__StyledRentiamoLogo",componentId:"sc-1r6rb97-8"})([""]);a.a=function(e){var a=e.props;return i.a.createElement(g,{isHeroVisible:!(!a||"/*"!==a.path)},i.a.createElement(w,null,i.a.createElement(h,null,i.a.createElement(z,{to:"/"},i.a.createElement(v,{src:y.a}))),i.a.createElement(l,null)),i.a.createElement("div",{style:{maxWidth:"1200px",margin:"auto",padding:"0 15px"}},i.a.createElement(f,{isVisible:!(!a||"/*"!==a.path)},i.a.createElement(x,{"data-aos":"fade-up"},"Zarządzanie najmem z gwarancją czynszu"),i.a.createElement(b,{"data-aos":"fade-up","data-aos-delay":"250"},"Wynajmiemy mieszkanie na długi termin i zajmiemy się najmem za Ciebie!"),i.a.createElement(I,{href:"#intro-section","data-aos":"fade-down","data-aos-delay":"500"},"Sprawdź"))))}},154:function(e,a,t){"use strict";t.d(a,"d",function(){return i}),t.d(a,"b",function(){return o}),t.d(a,"c",function(){return r}),t.d(a,"f",function(){return c}),t.d(a,"i",function(){return d}),t.d(a,"g",function(){return m}),t.d(a,"h",function(){return l}),t.d(a,"e",function(){return s}),t.d(a,"a",function(){return p});var n=t(135),i=n.a.div.withConfig({displayName:"styles__StyledWrapper",componentId:"o4nlj0-0"})(["width:100%;max-width:1200px;margin:0 auto;padding:0 15px;"]),o=n.a.h2.withConfig({displayName:"styles__SectionHeading",componentId:"o4nlj0-1"})(["text-align:center;color:black;font-size:1.75em;margin:100px auto 0;color:black;&:after{content:'';display:block;width:100px;height:1px;background:#4064d7;margin:30px auto;}@media (min-width:768px){font-size:2.5em;max-width:650px;}"]),r=n.a.p.withConfig({displayName:"styles__SectionSubheading",componentId:"o4nlj0-2"})(["text-align:center;color:#545454;font-size:14px;margin:20px auto;color:black;@media (min-width:768px){max-width:550px;font-size:16px;}"]),c=n.a.h2.withConfig({displayName:"styles__SubpageHeading",componentId:"o4nlj0-3"})(["text-align:center;color:black;font-size:1.75em;margin:100px auto 0;color:white;&:after{content:'';display:block;width:100px;height:1px;background:#4064d7;margin:30px auto;}@media (min-width:768px){font-size:2.5em;max-width:650px;}"]),d=n.a.p.withConfig({displayName:"styles__SubpageSubheading",componentId:"o4nlj0-4"})(["text-align:center;color:#545454;font-size:14px;margin:20px auto;color:white;@media (min-width:768px){max-width:550px;font-size:16px;}"]),m=n.a.div.withConfig({displayName:"styles__SubpageHero",componentId:"o4nlj0-5"})(["width:100%;min-height:300px;background-position:center;background-repeat:no-repeat;background-size:cover;position:relative;background-image:",";&:after{background-image:linear-gradient(180deg,#3a3a3a 0%,#1d1d23 100%);opacity:0.5;content:'';display:block;width:100%;height:100%;position:absolute;}@media (min-width:768px){min-height:500px;}"],function(e){return e.image?"url("+e.image+")":"none"}),l=n.a.div.withConfig({displayName:"styles__SubpageIntroText",componentId:"o4nlj0-6"})(["width:100%;position:absolute;top:150px;@media (min-width:768px){top:170px;}"]),s=n.a.div.withConfig({displayName:"styles__SubpageContent",componentId:"o4nlj0-7"})(["margin:50px 0;"]),p=n.a.p.withConfig({displayName:"styles__EmptyInfo",componentId:"o4nlj0-8"})(["font-size:1.75em;font-weight:700;text-align:center;"])},155:function(e,a,t){"use strict";var n=t(0),i=t.n(n),o=t(135),r=o.a.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1g0xvwb-0"})(["width:100%;text-align:center;@media (min-width:768px){text-align:unset;}"]),c=o.a.div.withConfig({displayName:"Footer__FooterCtaWrapper",componentId:"sc-1g0xvwb-1"})(["background:#4064d7;color:white;"]),d=o.a.div.withConfig({displayName:"Footer__FooterCopyrightWrapper",componentId:"sc-1g0xvwb-2"})(["background-color:#3a3a3a;color:white;padding:25px 15px;"]),m=o.a.div.withConfig({displayName:"Footer__FooterCtaText",componentId:"sc-1g0xvwb-3"})(["@media (min-width:768px){width:60%;}"]),l=o.a.h3.withConfig({displayName:"Footer__FooterCtaHeading",componentId:"sc-1g0xvwb-4"})(["color:white;font-size:1.75em;"]),s=o.a.p.withConfig({displayName:"Footer__FooterCtaSubheading",componentId:"sc-1g0xvwb-5"})(["color:white;font-size:16px;margin-bottom:25px;"]),p=o.a.a.withConfig({displayName:"Footer__FooterCtaBtn",componentId:"sc-1g0xvwb-6"})(["color:white;display:block;border-radius:25px;border:2px solid white;padding:12px 25px;text-decoration:none;letter-spacing:3px;font-weight:600;font-size:0.9em;margin-bottom:25px;&:hover{background:white;color:#4064d7;}@media (min-width:768px){margin-bottom:0;}"]),u=o.a.div.withConfig({displayName:"Footer__FooterInnerWrapper",componentId:"sc-1g0xvwb-7"})(["max-width:1200px;margin:auto;@media (min-width:1255px){padding:0 15px;}"]),y=o.a.div.withConfig({displayName:"Footer__FooterCtaInnerWrapper",componentId:"sc-1g0xvwb-8"})(["display:flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:5px 15px;max-width:1200px;margin:auto;@media (min-width:768px){flex-wrap:nowrap;justify-content:space-between;}"]);a.a=function(e){e.props;return i.a.createElement(r,null,i.a.createElement(c,null,i.a.createElement(y,null,i.a.createElement(m,null,i.a.createElement(l,{"data-aos":"fade-in"},"Chciałbyś z nami współpracować?"),i.a.createElement(s,{"data-aos":"fade-in"},"Myślisz, że wynajem z gwarancją czynszu to coś dla Ciebie? Masz pytania o szczegóły współpracy? A może szukasz partnera biznesowego? Zadzwoń.")),i.a.createElement(p,{href:"tel:695931615","data-aos":"zoom-in"},"695 931 615"))),i.a.createElement(d,null,i.a.createElement(u,null,"Rentiamo - zarządzanie nieruchomościami z gwarancją czynszu dla właściciela. Copyright©2018")))}},195:function(e,a,t){"use strict";t.d(a,"b",function(){return o}),t.d(a,"c",function(){return r}),t.d(a,"a",function(){return c});var n=t(196),i=t.n(n),o=[{icon:"globe",title:"Mieszkasz poza Poznaniem?",text:"Większość naszych Klientów mieszka poza Poznaniem, znaczna część poza granicami Polski. Dzieki naszej usłudze nie muszą martwić sie o mieszkanie oraz najemców."},{icon:"exclamation",title:"Masz problemy z najemcami?",text:"Wielu naszych klientów zajmowało się osobiście swoim mieszkaniem, ale napotkali na problemy, które naraziły ich na stres i brak przychodów."},{icon:"house-damage",title:"Nie znasz się na wynajmie?",text:"Bardziej liczną grupą stanowią Właściciele, którzy mają ciekawsze sprawy niż wynajem mieszkań. Można zarabiać na najmie nie znając się na nim!"},{icon:"clock",title:"Chcesz mieć wiecej czasu?",text:"Nasi Klienci to ludzie ceniący sobie ognisko domowe i czas spędzony z najbliższymi. Oddając nam w opiekę swoje mieszkanie mogą cieszyć się wolnym czasem!"},{icon:"users",title:"Chcesz znaleźć najemców?",text:"Zaangażowany Zespół i współpraca z biurami nieruchomości są źródłem naszego wspólnego sukcesu!"},{icon:"city",title:"Nie znasz poznańskiego rynku?",text:"Rynek nieruchomości jest niezwykle lokalny, trudno być ekspertem na terenie całego kraju i znać się na wszystkim. Jesteśmy w Poznaniu i tutejszy rynek najmu nie ma przed nami tajemnic!"}],r=[{icon:i.a,text:"Twoją nieruchomość wynajmiemy na kilka lat."},{icon:i.a,text:"Odświeżymy mieszkanie, jeśli jest to potrzebne."},{icon:i.a,text:"Doskonale zaaranżujemy Twoje mieszkanie."},{icon:i.a,text:"Przeprowadzimy profesjonalny homestaging."},{icon:i.a,text:"Odpowiednio zweryfikujemy potencjalnych najemców."},{icon:i.a,text:"Podpiszemy szczegółowy protokół zdawczo-odbiorczy i umowę chroniącą Twoje mieszkanie."},{icon:i.a,text:"Podpiszemy umowy z dostawcami mediów i będziemy na bieżąco opłacać rachunki."},{icon:i.a,text:"Będziemy dokonywali napraw usterek w Twoim mieszkaniu."},{icon:i.a,text:"Regularne przeprowadzanie oględzin, pozwoli nam skontrolować stan techniczny i sanitarny."},{icon:i.a,text:"Wyręczymy Cię ze wszystkich obowiązków, którymi obciążona jest osoba wynajmująca mieszkanie."}],c=[{icon:"smile",title:"Komfort",text:"Dzięki podjęciu współpracy z naszą firmą nie stracisz czasu na przygotowanie mieszkania, znalezienie najemców, czy naprawianie usterek. Podczas trwania umowy najmu będziesz mógł cieszyć się stabilnym i regularnym dochodem."},{icon:"lock",title:"Bezpieczeństwo",text:"Bierzemy na siebie pełną odpowiedzialność za Twoje mieszkanie. Dokonujemy regularnych oględzin, podczas których kontrolujemy stan techniczny i sanitarny. Twoje mieszkanie będzie pod stałą opieką."},{icon:"award",title:"Gwarancja czynszu",text:"Gwarantujemy comiesięczne, terminowe płatności czynszu niezależnie od tego jak szybko znajdziemy najemców Twojej nieruchomości"},{icon:"chart-line",title:"Profesjonalizm",text:"Do swojej pracy podchodzimy z całkowitym zaangażowaniem. Dokładamy wszelkich starań, żeby właściciele nieruchomości byli zadowoleni ze świadczonych przez nas usług."}]},196:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjaGVjayIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWNoZWNrIGZhLXctMTYgIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiM0MDY0ZDciIGQ9Ik0xNzMuODk4IDQzOS40MDRsLTE2Ni40LTE2Ni40Yy05Ljk5Ny05Ljk5Ny05Ljk5Ny0yNi4yMDYgMC0zNi4yMDRsMzYuMjAzLTM2LjIwNGM5Ljk5Ny05Ljk5OCAyNi4yMDctOS45OTggMzYuMjA0IDBMMTkyIDMxMi42OSA0MzIuMDk1IDcyLjU5NmM5Ljk5Ny05Ljk5NyAyNi4yMDctOS45OTcgMzYuMjA0IDBsMzYuMjAzIDM2LjIwNGM5Ljk5NyA5Ljk5NyA5Ljk5NyAyNi4yMDYgMCAzNi4yMDRsLTI5NC40IDI5NC40MDFjLTkuOTk4IDkuOTk3LTI2LjIwNyA5Ljk5Ny0zNi4yMDQtLjAwMXoiPjwvcGF0aD48L3N2Zz4NCg=="},220:function(e,a,t){"use strict";var n=t(6),i=t.n(n),o=t(0),r=t.n(o),c=t(135),d=t(174),m=c.a.div.withConfig({displayName:"SimpleGridItem__IconContainer",componentId:"sc-8vcxam-0"})([""]),l=c.a.span.withConfig({displayName:"SimpleGridItem__StyledIcon",componentId:"sc-8vcxam-1"})(["color:#4064d7;font-size:4em;"]),s=c.a.div.withConfig({displayName:"SimpleGridItem__SimpleGridContent",componentId:"sc-8vcxam-2"})([""]),p=c.a.h3.withConfig({displayName:"SimpleGridItem__SimpleGridContentHeading",componentId:"sc-8vcxam-3"})(["font-size:1.35em;"]),u=c.a.p.withConfig({displayName:"SimpleGridItem__SimpleGridContentText",componentId:"sc-8vcxam-4"})([""]),y=c.a.li.withConfig({displayName:"SimpleGridItem__StyledItem",componentId:"sc-8vcxam-5"})(["text-align:center;flex-basis:0;flex:100%;margin-bottom:50px;@media (min-width:500px){flex:50%;}@media (min-width:768px){flex:33.33%;margin-bottom:unset;padding:25px;}&:last-child{margin-bottom:unset;}"]),g=function(e){return r.a.createElement(y,{"data-aos":"fade-up","data-delay":"250"},r.a.createElement(m,null,r.a.createElement(l,null,r.a.createElement(d.a,{icon:e.value.icon}))),r.a.createElement(s,null,r.a.createElement(p,null,e.value.title),r.a.createElement(u,null,e.value.text)))};t.d(a,"a",function(){return h});var w=c.a.ul.withConfig({displayName:"SimpleGrid__SimpleGridList",componentId:"yhmno8-0"})(["display:flex;margin:100px 0;padding:0;flex-wrap:wrap;"]),h=function(e){function a(){return e.apply(this,arguments)||this}return i()(a,e),a.prototype.render=function(){var e=this.props.gridData.map(function(e,a){return r.a.createElement(g,{key:a,value:e})});return r.a.createElement(w,null,e)},a}(o.Component)},221:function(e,a,t){"use strict";var n=t(6),i=t.n(n),o=t(0),r=t.n(o),c=t(135),d=c.a.li.withConfig({displayName:"SimpleListItem__StyledItem",componentId:"sc-1md1dph-0"})(["display:flex;color:black;padding:15px;text-decoration:none;list-style-type:none;width:100%;align-items:center;@media (min-width:768px){width:50%;}"]),m=c.a.img.withConfig({displayName:"SimpleListItem__StyledIcon",componentId:"sc-1md1dph-1"})(["display:block;height:20px;width:20px;margin-right:15px;"]),l=function(e){return r.a.createElement(d,{"data-aos":"fade-right"},r.a.createElement(m,{src:e.value.icon}),r.a.createElement("p",null,e.value.text))};t.d(a,"a",function(){return p});var s=c.a.ul.withConfig({displayName:"SimpleList__StyledList",componentId:"sc-1y41emo-0"})(["width:100%;display:flex;flex-wrap:wrap;margin:0;padding:0;"]),p=function(e){function a(){return e.apply(this,arguments)||this}return i()(a,e),a.prototype.render=function(){var e=this.props.listData.map(function(e,a){return r.a.createElement(l,{key:a,value:e})});return r.a.createElement(s,null,e)},a}(o.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-c57b202943cc56c864ec.js.map