(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{218:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(244),a(687)),c=a(692),o=a(693),i=a(680),u=a(269),s=a.n(u),d=a(248),m=a(488),f=a.n(m),p=a(489),h=a.n(p),g=a(490),E=a.n(g),w=a(491),b=a.n(w),C=a(492),v=a.n(C),x=a(493),y=a.n(x),k=a(236);t.default=function(){return r.a.createElement(d.a,null,r.a.createElement(l.a,null,r.a.createElement(c.a,{padded:!0,centered:!0,stackable:!0},r.a.createElement(c.a.Row,{columns:"equal"},r.a.createElement(c.a.Column,null,r.a.createElement(o.a,{as:"h1"},"Selection"))),r.a.createElement(c.a.Row,{columns:"equal"},r.a.createElement(c.a.Column,null,r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),r.a.createElement(c.a.Row,{columns:"equal"},r.a.createElement(c.a.Column,null,r.a.createElement(o.a,null,"Garage"))),r.a.createElement(c.a.Row,{centered:!0,columns:"equal"},r.a.createElement(c.a.Column,{textAlign:"center"},r.a.createElement(s.a,{swipe:!0,direction:"left",to:"/steps/2?selection="+k.b.twoCar+"&theme=1&color=1&floor=1"},r.a.createElement(i.a,{size:"huge",src:f.a,centered:!0}),r.a.createElement(o.a,null,k.a[k.b.twoCar]))),r.a.createElement(c.a.Column,{textAlign:"center"},r.a.createElement(s.a,{swipe:!0,direction:"left",to:"/steps/2?selection="+k.b.threeCar+"&theme=1&color=1&floor=1"},r.a.createElement(i.a,{size:"huge",src:h.a,centered:!0}),r.a.createElement(o.a,null,k.a[k.b.threeCar]))),r.a.createElement(c.a.Column,{textAlign:"center"},r.a.createElement(s.a,{swipe:!0,direction:"left",to:"/steps/2?selection="+k.b.fourCar+"&theme=1&color=1&floor=1"},r.a.createElement(i.a,{size:"huge",src:E.a,centered:!0}),r.a.createElement(o.a,null,k.a[k.b.fourCar])))),r.a.createElement(c.a.Row,{columns:"equal"},r.a.createElement(c.a.Column,null,r.a.createElement(o.a,null,"Closet"))),r.a.createElement(c.a.Row,{columns:"equal"},r.a.createElement(c.a.Column,{textAlign:"center"},r.a.createElement(s.a,{swipe:!0,direction:"left",to:"/steps/2?selection="+k.b.walkincloset1+"&color=1&door=1"},r.a.createElement(i.a,{size:"huge",src:b.a,centered:!0}),r.a.createElement(o.a,null,k.a[k.b.walkincloset1]))),r.a.createElement(c.a.Column,{textAlign:"center"},r.a.createElement(s.a,{swipe:!0,direction:"left",to:"/steps/2?selection="+k.b.walkincloset2+"&color=1&door=1"},r.a.createElement(i.a,{size:"huge",src:v.a,centered:!0}),r.a.createElement(o.a,null,k.a[k.b.walkincloset2]))),r.a.createElement(c.a.Column,{textAlign:"center"},r.a.createElement(s.a,{swipe:!0,direction:"left",to:"/steps/2?selection="+k.b.reachincloset1+"&color=1&door=1"},r.a.createElement(i.a,{size:"huge",src:y.a,centered:!0}),r.a.createElement(o.a,null,k.a[k.b.reachincloset1])))))))}},236:function(e,t,a){"use strict";var n;a.d(t,"b",function(){return r}),a.d(t,"a",function(){return l});var r={twoCar:"2car",threeCar:"3car",fourCar:"4car",walkincloset1:"walk1",walkincloset2:"walk2",reachincloset1:"reach1"},l=((n={})[r.twoCar]="2 Car Carage",n[r.threeCar]="3 Car Carage",n[r.fourCar]="4 Car Carage",n[r.walkincloset1]="Walk In Closet #1",n[r.walkincloset2]="Walk In Closet #2",n[r.reachincloset1]="Reach In Closet #1",n)},237:function(e,t,a){var n;e.exports=(n=a(256))&&n.default||n},244:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return s}),a.d(t,"StaticQuery",function(){return m}),a.d(t,"useStaticQuery",function(){return f}),a.d(t,"prefetchPathname",function(){return u});var n=a(0),r=a.n(n),l=a(77),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withAssetPrefix",function(){return l.withAssetPrefix}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"parsePath",function(){return l.parsePath}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var o=a(237),i=a.n(o);a.d(t,"PageRenderer",function(){return i.a});var u=a(12).default.enqueue,s=r.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(d,{data:t,query:a,render:n||l,staticQueryData:e})})},f=function(e){r.a.useContext;var t=r.a.useContext(s);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},248:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(216);t.a=function(e){var t=e.children;return r.a.createElement("div",{style:{backgroundColor:"white",height:"100vh"}},r.a.createElement("style",null,"\n      .tl-edges {\n        height:100vh;\n        overflow-x: initial!important;\n      }"),r.a.createElement("main",null,t))}},256:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),l=a(104);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},488:function(e,t,a){e.exports=a.p+"static/2car-t1-c1-f1-f420bef02578a855f0c7f10c34488719.jpg"},489:function(e,t,a){e.exports=a.p+"static/3car-t1-c1-f1-0b553d1a8e89136d8e3a0e49df851ea5.jpg"},490:function(e,t,a){e.exports=a.p+"static/4car-t1-c1-f1-7233ddc48f76e5052b4f8d6e257a860b.jpg"},491:function(e,t,a){e.exports=a.p+"static/walk1-d1-c1-e017a3e27595b861bb32c763b065ab2b.jpg"},492:function(e,t,a){e.exports=a.p+"static/walk2-d1-c1-feee7c185e6a0da70f86aa8a23205905.jpg"},493:function(e,t,a){e.exports=a.p+"static/reach1-d1-c1-0c5c3d3dd20470f1054c6c27682072b9.jpg"}}]);
//# sourceMappingURL=component---src-pages-steps-1-js-08d82ed5e812103a9635.js.map