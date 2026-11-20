import{A as e,C as t,D as n,E as r,O as i,S as a,T as o,_ as s,a as c,b as l,c as u,d,f,g as p,h as m,i as h,k as g,l as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T,v as E,w as D,x as O,y as k}from"./index-B8Mqm21X.js";var A=e(i(),1),ee=e=>e;function te(e,t=ee){let n=A.useSyncExternalStore(e.subscribe,A.useCallback(()=>t(e.getState()),[e,t]),()=>t(e.getInitialState()));return A.useDebugValue(n),n}var ne=e=>{let t=h(e),n=e=>te(t,e);return Object.assign(n,t),n},re=(e=>e?ne(e):ne),j=r(),ie=()=>{},ae={},oe={},se=null,ce={mark:ie,measure:ie};try{typeof window<`u`&&(ae=window),typeof document<`u`&&(oe=document),typeof MutationObserver<`u`&&(se=MutationObserver),typeof performance<`u`&&(ce=performance)}catch{}var{userAgent:le=``}=ae.navigator||{},ue=ae,M=oe,de=se,fe=ce;ue.document;var N=!!M.documentElement&&!!M.head&&typeof M.addEventListener==`function`&&typeof M.createElement==`function`,pe=~le.indexOf(`MSIE`)||~le.indexOf(`Trident/`),P=`classic`,me=`duotone`,F=`sharp`,he=`sharp-duotone`,I=[P,me,F,he],ge={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`}},_e={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},ve=[`kit`],ye=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,be=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,xe={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},Se={"Font Awesome 6 Free":{900:`fas`,400:`far`},"Font Awesome 6 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 6 Brands":{400:`fab`,normal:`fab`},"Font Awesome 6 Duotone":{900:`fad`},"Font Awesome 6 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 6 Sharp Duotone":{900:`fasds`}},Ce={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`}},we={classic:[`fas`,`far`,`fal`,`fat`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`]},Te={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`}},Ee={classic:{solid:`fas`,regular:`far`,light:`fal`,thin:`fat`,duotone:`fad`,brands:`fab`},sharp:{solid:`fass`,regular:`fasr`,light:`fasl`,thin:`fast`},"sharp-duotone":{solid:`fasds`}},De={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fad:`duotone`,"fa-duotone":`duotone`,fab:`brands`,"fa-brands":`brands`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`}},Oe=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`],ke=[1,2,3,4,5,6,7,8,9,10],Ae=ke.concat([11,12,13,14,15,16,17,18,19,20]),je={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Me=[...Object.keys(we),...Oe,`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`fw`,`inverse`,`layers-counter`,`layers-text`,`layers`,`li`,`pull-left`,`pull-right`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,je.GROUP,je.SWAP_OPACITY,je.PRIMARY,je.SECONDARY].concat(ke.map(e=>`${e}x`),Ae.map(e=>`w-${e}`)),Ne={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Pe={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},Fe={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Ie={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Le=`___FONT_AWESOME___`,Re=16,ze=`fa`,Be=`svg-inline--fa`,Ve=`data-fa-i2svg`,He=`data-fa-pseudo-element`,Ue=`data-fa-pseudo-element-pending`,We=`data-prefix`,Ge=`data-icon`,Ke=`fontawesome-i2svg`,qe=`async`,Je=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ye=(()=>{try{return!0}catch{return!1}})(),Xe=[P,F,he];function Ze(e){return new Proxy(e,{get(e,t){return t in e?e[t]:e[P]}})}var Qe={...De};Qe[P]={...De[P],..._e.kit,..._e[`kit-duotone`]};var $e=Ze(Qe),et={...Ee};et[P]={...et[P],...Ie.kit,...Ie[`kit-duotone`]};var tt=Ze(et),nt={...Te};nt[P]={...nt[P],...Fe.kit};var rt=Ze(nt),it={...Ce};it[P]={...it[P],...Pe.kit};var at=Ze(it),ot=ye,st=`fa-layers-text`,ct=be;Ze({...ge});var lt=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],ut=je,dt=new Set;Object.keys(tt[P]).map(dt.add.bind(dt)),Object.keys(tt[F]).map(dt.add.bind(dt)),Object.keys(tt[he]).map(dt.add.bind(dt));var ft=[...ve,...Me],pt=ue.FontAwesomeConfig||{};function mt(e){var t=M.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function ht(e){return e===``?!0:e===`false`?!1:e===`true`||e}M&&typeof M.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-auto-a11y`,`autoA11y`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(e=>{let[t,n]=e,r=ht(mt(t));r!=null&&(pt[n]=r)});var gt={styleDefault:`solid`,familyDefault:`classic`,cssPrefix:ze,replacementClass:Be,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pt.familyPrefix&&(pt.cssPrefix=pt.familyPrefix);var _t={...gt,...pt};_t.autoReplaceSvg||(_t.observeMutations=!1);var L={};Object.keys(gt).forEach(e=>{Object.defineProperty(L,e,{enumerable:!0,set:function(t){_t[e]=t,vt.forEach(e=>e(L))},get:function(){return _t[e]}})}),Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){_t.cssPrefix=e,vt.forEach(e=>e(L))},get:function(){return _t.cssPrefix}}),ue.FontAwesomeConfig=L;var vt=[];function yt(e){return vt.push(e),()=>{vt.splice(vt.indexOf(e),1)}}var bt=Re,xt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function St(e){if(!e||!N)return;let t=M.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;let n=M.head.childNodes,r=null;for(let e=n.length-1;e>-1;e--){let t=n[e],i=(t.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(i)>-1&&(r=t)}return M.head.insertBefore(t,r),e}var Ct=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function wt(){let e=12,t=``;for(;e-->0;)t+=Ct[Math.random()*62|0];return t}function Tt(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Et(e){return e.classList?Tt(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(e=>e)}function Dt(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Ot(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}="${Dt(e[n])}" `,``).trim()}function kt(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}: ${e[n].trim()};`,``)}function At(e){return e.size!==xt.size||e.x!==xt.x||e.y!==xt.y||e.rotate!==xt.rotate||e.flipX||e.flipY}function jt(e){let{transform:t,containerWidth:n,iconWidth:r}=e;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Mt(e){let{transform:t,width:n=Re,height:r=Re,startCentered:i=!1}=e,a=``;return i&&pe?a+=`translate(${t.x/bt-n/2}em, ${t.y/bt-r/2}em) `:i?a+=`translate(calc(-50% + ${t.x/bt}em), calc(-50% + ${t.y/bt}em)) `:a+=`translate(${t.x/bt}em, ${t.y/bt}em) `,a+=`scale(${t.size/bt*(t.flipX?-1:1)}, ${t.size/bt*(t.flipY?-1:1)}) `,a+=`rotate(${t.rotate}deg) `,a}var Nt=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Pt(){let e=ze,t=Be,n=L.cssPrefix,r=L.replacementClass,i=Nt;if(n!==e||r!==t){let a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Ft=!1;function It(){L.autoAddCss&&!Ft&&(St(Pt()),Ft=!0)}var Lt={mixout(){return{dom:{css:Pt,insertCss:It}}},hooks(){return{beforeDOMElementCreation(){It()},beforeI2svg(){It()}}}},Rt=ue||{};Rt[Le]||(Rt[Le]={}),Rt[Le].styles||(Rt[Le].styles={}),Rt[Le].hooks||(Rt[Le].hooks={}),Rt[Le].shims||(Rt[Le].shims=[]);var zt=Rt[Le],Bt=[],Vt=function(){M.removeEventListener(`DOMContentLoaded`,Vt),Ht=1,Bt.map(e=>e())},Ht=!1;N&&(Ht=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),Ht||M.addEventListener(`DOMContentLoaded`,Vt));function Ut(e){N&&(Ht?setTimeout(e,0):Bt.push(e))}function Wt(e){let{tag:t,attributes:n={},children:r=[]}=e;return typeof e==`string`?Dt(e):`<${t} ${Ot(n)}>${r.map(Wt).join(``)}</${t}>`}function Gt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Kt=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},qt=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Kt(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Jt(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Yt(e){let t=Jt(e);return t.length===1?t[0].toString(16):null}function Xt(e,t){let n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Zt(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Qt(e,t){let{skipHooks:n=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Zt(t);typeof zt.hooks.addPack==`function`&&!n?zt.hooks.addPack(e,Zt(t)):zt.styles[e]={...zt.styles[e]||{},...r},e===`fas`&&Qt(`fa`,t)}var{styles:$t,shims:en}=zt,tn={[P]:Object.values(rt[P]),[F]:Object.values(rt[F]),[he]:Object.values(rt[he])},nn=null,rn={},an={},on={},sn={},cn={},ln={[P]:Object.keys($e[P]),[F]:Object.keys($e[F]),[he]:Object.keys($e[he])};function un(e){return~ft.indexOf(e)}function dn(e,t){let n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!un(i)?i:null}var fn=()=>{let e=e=>qt($t,(t,n,r)=>(t[r]=qt(n,e,{}),t),{});rn=e((e,t,n)=>(t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(e=>typeof e==`number`).forEach(t=>{e[t.toString(16)]=n}),e)),an=e((e,t,n)=>(e[n]=n,t[2]&&t[2].filter(e=>typeof e==`string`).forEach(t=>{e[t]=n}),e)),cn=e((e,t,n)=>{let r=t[2];return e[n]=n,r.forEach(t=>{e[t]=n}),e});let t=`far`in $t||L.autoFetchSvg,n=qt(en,(e,n)=>{let r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});on=n.names,sn=n.unicodes,nn=bn(L.styleDefault,{family:L.familyDefault})};yt(e=>{nn=bn(e.styleDefault,{family:L.familyDefault})}),fn();function pn(e,t){return(rn[e]||{})[t]}function mn(e,t){return(an[e]||{})[t]}function hn(e,t){return(cn[e]||{})[t]}function gn(e){return on[e]||{prefix:null,iconName:null}}function _n(e){let t=sn[e],n=pn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function vn(){return nn}var yn=()=>({prefix:null,iconName:null,rest:[]});function bn(e){let{family:t=P}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=$e[t][e],r=tt[t][e]||tt[t][n],i=e in zt.styles?e:null;return r||i||null}var xn={[P]:Object.keys(rt[P]),[F]:Object.keys(rt[F]),[he]:Object.keys(rt[he])};function Sn(e){let{skipLookups:t=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n={[P]:`${L.cssPrefix}-${P}`,[F]:`${L.cssPrefix}-${F}`,[he]:`${L.cssPrefix}-${he}`},r=null,i=P,a=I.filter(e=>e!==me);a.forEach(t=>{(e.includes(n[t])||e.some(e=>xn[t].includes(e)))&&(i=t)});let o=e.reduce((e,o)=>{let s=dn(L.cssPrefix,o);if($t[o]?(o=tn[i].includes(o)?at[i][o]:o,r=o,e.prefix=o):ln[i].indexOf(o)>-1?(r=o,e.prefix=bn(o,{family:i})):s?e.iconName=s:o!==L.replacementClass&&!a.some(e=>o===n[e])&&e.rest.push(o),!t&&e.prefix&&e.iconName){let t=r===`fa`?gn(e.iconName):{},n=hn(e.prefix,e.iconName);t.prefix&&(r=null),e.iconName=t.iconName||n||e.iconName,e.prefix=t.prefix||e.prefix,e.prefix===`far`&&!$t.far&&$t.fas&&!L.autoFetchSvg&&(e.prefix=`fas`)}return e},yn());return(e.includes(`fa-brands`)||e.includes(`fab`))&&(o.prefix=`fab`),(e.includes(`fa-duotone`)||e.includes(`fad`))&&(o.prefix=`fad`),!o.prefix&&i===F&&($t.fass||L.autoFetchSvg)&&(o.prefix=`fass`,o.iconName=hn(o.prefix,o.iconName)||o.iconName),!o.prefix&&i===he&&($t.fasds||L.autoFetchSvg)&&(o.prefix=`fasds`,o.iconName=hn(o.prefix,o.iconName)||o.iconName),(o.prefix===`fa`||r===`fa`)&&(o.prefix=vn()||`fas`),o}var Cn=class{constructor(){this.definitions={}}add(){let e=[...arguments].reduce(this._pullDefinitions,{});Object.keys(e).forEach(t=>{this.definitions[t]={...this.definitions[t]||{},...e[t]},Qt(t,e[t]);let n=rt[P][t];n&&Qt(n,e[t]),fn()})}reset(){this.definitions={}}_pullDefinitions(e,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(t=>{let{prefix:r,iconName:i,icon:a}=n[t],o=a[2];e[r]||(e[r]={}),o.length>0&&o.forEach(t=>{typeof t==`string`&&(e[r][t]=a)}),e[r][i]=a}),e}},wn=[],Tn={},En={},Dn=Object.keys(En);function On(e,t){let{mixoutsTo:n}=t;return wn=e,Tn={},Object.keys(En).forEach(e=>{Dn.indexOf(e)===-1&&delete En[e]}),wn.forEach(e=>{let t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(e=>{typeof t[e]==`function`&&(n[e]=t[e]),typeof t[e]==`object`&&Object.keys(t[e]).forEach(r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){let t=e.hooks();Object.keys(t).forEach(e=>{Tn[e]||(Tn[e]=[]),Tn[e].push(t[e])})}e.provides&&e.provides(En)}),n}function kn(e,t){var n=[...arguments].slice(2);return(Tn[e]||[]).forEach(e=>{t=e.apply(null,[t,...n])}),t}function An(e){var t=[...arguments].slice(1);(Tn[e]||[]).forEach(e=>{e.apply(null,t)})}function jn(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return En[e]?En[e].apply(null,t):void 0}function Mn(e){e.prefix===`fa`&&(e.prefix=`fas`);let{iconName:t}=e,n=e.prefix||vn();if(t)return t=hn(n,t)||t,Gt(Nn.definitions,n,t)||Gt(zt.styles,n,t)}var Nn=new Cn,Pn={noAuto:()=>{L.autoReplaceSvg=!1,L.observeMutations=!1,An(`noAuto`)},config:L,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return N?(An(`beforeI2svg`,e),jn(`pseudoElements2svg`,e),jn(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,Ut(()=>{Fn({autoReplaceSvgRoot:t}),An(`watch`,e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e==`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:hn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=bn(e[0]);return{prefix:n,iconName:hn(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${L.cssPrefix}-`)>-1||e.match(ot))){let t=Sn(e.split(` `),{skipLookups:!0});return{prefix:t.prefix||vn(),iconName:hn(t.prefix,t.iconName)||t.iconName}}if(typeof e==`string`){let t=vn();return{prefix:t,iconName:hn(t,e)||e}}}},library:Nn,findIconDefinition:Mn,toHtml:Wt},Fn=function(){let{autoReplaceSvgRoot:e=M}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(Object.keys(zt.styles).length>0||L.autoFetchSvg)&&N&&L.autoReplaceSvg&&Pn.dom.i2svg({node:e})};function In(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(e=>Wt(e))}}),Object.defineProperty(e,"node",{get:function(){if(!N)return;let t=M.createElement(`div`);return t.innerHTML=e.html,t.children}}),e}function Ln(e){let{children:t,main:n,mask:r,attributes:i,styles:a,transform:o}=e;if(At(o)&&n.found&&!r.found){let{width:e,height:t}=n,r={x:e/t/2,y:.5};i.style=kt({...a,"transform-origin":`${r.x+o.x/16}em ${r.y+o.y/16}em`})}return[{tag:`svg`,attributes:i,children:t}]}function Rn(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:a}=e,o=a===!0?`${t}-${L.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:{...i,id:o},children:r}]}]}function zn(e){let{icons:{main:t,mask:n},prefix:r,iconName:i,transform:a,symbol:o,title:s,maskId:c,titleId:l,extra:u,watchable:d=!1}=e,{width:f,height:p}=n.found?n:t,m=r===`fak`,h=[L.replacementClass,i?`${L.cssPrefix}-${i}`:``].filter(e=>u.classes.indexOf(e)===-1).filter(e=>e!==``||!!e).concat(u.classes).join(` `),g={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":i,class:h,role:u.attributes.role||`img`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 ${f} ${p}`}},_=m&&!~u.classes.indexOf(`fa-fw`)?{width:`${f/p*16*.0625}em`}:{};d&&(g.attributes[Ve]=``),s&&(g.children.push({tag:`title`,attributes:{id:g.attributes[`aria-labelledby`]||`title-${l||wt()}`},children:[s]}),delete g.attributes.title);let v={...g,prefix:r,iconName:i,main:t,mask:n,maskId:c,transform:a,symbol:o,styles:{..._,...u.styles}},{children:y,attributes:b}=n.found&&t.found?jn(`generateAbstractMask`,v)||{children:[],attributes:{}}:jn(`generateAbstractIcon`,v)||{children:[],attributes:{}};return v.children=y,v.attributes=b,o?Rn(v):Ln(v)}function Bn(e){let{content:t,width:n,height:r,transform:i,title:a,extra:o,watchable:s=!1}=e,c={...o.attributes,...a?{title:a}:{},class:o.classes.join(` `)};s&&(c[Ve]=``);let l={...o.styles};At(i)&&(l.transform=Mt({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);let u=kt(l);u.length>0&&(c.style=u);let d=[];return d.push({tag:`span`,attributes:c,children:[t]}),a&&d.push({tag:`span`,attributes:{class:`sr-only`},children:[a]}),d}function Vn(e){let{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(` `)},a=kt(r.styles);a.length>0&&(i.style=a);let o=[];return o.push({tag:`span`,attributes:i,children:[t]}),n&&o.push({tag:`span`,attributes:{class:`sr-only`},children:[n]}),o}var{styles:Hn}=zt;function Un(e){let t=e[0],n=e[1],[r]=e.slice(4),i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${L.cssPrefix}-${ut.GROUP}`},children:[{tag:`path`,attributes:{class:`${L.cssPrefix}-${ut.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${L.cssPrefix}-${ut.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Wn={found:!1,width:512,height:512};function Gn(e,t){!Ye&&!L.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Kn(e,t){let n=t;return t===`fa`&&L.styleDefault!==null&&(t=vn()),new Promise((r,i)=>{if(n===`fa`){let n=gn(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&Hn[t]&&Hn[t][e]){let n=Hn[t][e];return r(Un(n))}Gn(e,t),r({...Wn,icon:L.showMissingIcons&&e&&jn(`missingIconAbstract`)||{}})})}var qn=()=>{},Jn=L.measurePerformance&&fe&&fe.mark&&fe.measure?fe:{mark:qn,measure:qn},Yn=`FA "6.6.0"`,Xn=e=>(Jn.mark(`${Yn} ${e} begins`),()=>Zn(e)),Zn=e=>{Jn.mark(`${Yn} ${e} ends`),Jn.measure(`${Yn} ${e}`,`${Yn} ${e} begins`,`${Yn} ${e} ends`)},Qn={begin:Xn,end:Zn},$n=()=>{};function er(e){return typeof(e.getAttribute?e.getAttribute(Ve):null)==`string`}function tr(e){let t=e.getAttribute?e.getAttribute(We):null,n=e.getAttribute?e.getAttribute(Ge):null;return t&&n}function nr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function rr(){return L.autoReplaceSvg===!0?cr.replace:cr[L.autoReplaceSvg]||cr.replace}function ir(e){return M.createElementNS(`http://www.w3.org/2000/svg`,e)}function ar(e){return M.createElement(e)}function or(e){let{ceFn:t=e.tag===`svg`?ir:ar}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e==`string`)return M.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(or(e,{ceFn:t}))}),n}function sr(e){let t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var cr={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(e=>{t.parentNode.insertBefore(or(e),t)}),t.getAttribute(Ve)===null&&L.keepOriginalSource){let e=M.createComment(sr(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~Et(t).indexOf(L.replacementClass))return cr.replace(e);let r=RegExp(`${L.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){let e=n[0].attributes.class.split(` `).reduce((e,t)=>(t===L.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(` `),e.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,e.toNode.join(` `))}let i=n.map(e=>Wt(e)).join(`
`);t.setAttribute(Ve,``),t.innerHTML=i}};function lr(e){e()}function ur(e,t){let n=typeof t==`function`?t:$n;if(e.length===0)n();else{let t=lr;L.mutateApproach===qe&&(t=ue.requestAnimationFrame||lr),t(()=>{let t=rr(),r=Qn.begin(`mutate`);e.map(t),r(),n()})}}var dr=!1;function fr(){dr=!0}function pr(){dr=!1}var mr=null;function hr(e){if(!de||!L.observeMutations)return;let{treeCallback:t=$n,nodeCallback:n=$n,pseudoElementsCallback:r=$n,observeMutationsRoot:i=M}=e;mr=new de(e=>{if(dr)return;let i=vn();Tt(e).forEach(e=>{if(e.type===`childList`&&e.addedNodes.length>0&&!er(e.addedNodes[0])&&(L.searchPseudoElements&&r(e.target),t(e.target)),e.type===`attributes`&&e.target.parentNode&&L.searchPseudoElements&&r(e.target.parentNode),e.type===`attributes`&&er(e.target)&&~lt.indexOf(e.attributeName))if(e.attributeName===`class`&&tr(e.target)){let{prefix:t,iconName:n}=Sn(Et(e.target));e.target.setAttribute(We,t||i),n&&e.target.setAttribute(Ge,n)}else nr(e.target)&&n(e.target)})}),N&&mr.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function gr(){mr&&mr.disconnect()}function _r(e){let t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce((e,t)=>{let n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function vr(e){let t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Sn(Et(e));return i.prefix||=vn(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=mn(i.prefix,e.innerText)||pn(i.prefix,Yt(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function yr(e){let t=Tt(e.attributes).reduce((e,t)=>(e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e),{}),n=e.getAttribute(`title`),r=e.getAttribute(`data-fa-title-id`);return L.autoA11y&&(n?t[`aria-labelledby`]=`${L.replacementClass}-title-${r||wt()}`:(t[`aria-hidden`]=`true`,t.focusable=`false`)),t}function br(){return{iconName:null,title:null,titleId:null,prefix:null,transform:xt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:r,rest:i}=vr(e),a=yr(e),o=kn(`parseNodeAttributes`,{},e),s=t.styleParser?_r(e):[];return{iconName:n,title:e.getAttribute(`title`),titleId:e.getAttribute(`data-fa-title-id`),prefix:r,transform:xt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a},...o}}var{styles:Sr}=zt;function Cr(e){let t=L.autoReplaceSvg===`nest`?xr(e,{styleParser:!1}):xr(e);return~t.extra.classes.indexOf(st)?jn(`generateLayersText`,e,t):jn(`generateSvgReplacementMutation`,e,t)}var wr=new Set;Xe.map(e=>{wr.add(`fa-${e}`)}),Object.keys($e[P]).map(wr.add.bind(wr)),Object.keys($e[F]).map(wr.add.bind(wr)),Object.keys($e[he]).map(wr.add.bind(wr)),wr=[...wr];function Tr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N)return Promise.resolve();let n=M.documentElement.classList,r=e=>n.add(`${Ke}-${e}`),i=e=>n.remove(`${Ke}-${e}`),a=L.autoFetchSvg?wr:Xe.map(e=>`fa-${e}`).concat(Object.keys(Sr));a.includes(`fa`)||a.push(`fa`);let o=[`.${st}:not([${Ve}])`].concat(a.map(e=>`.${e}:not([${Ve}])`)).join(`, `);if(o.length===0)return Promise.resolve();let s=[];try{s=Tt(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();let c=Qn.begin(`onTree`),l=s.reduce((e,t)=>{try{let n=Cr(t);n&&e.push(n)}catch(e){Ye||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise((e,n)=>{Promise.all(l).then(n=>{ur(n,()=>{r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(e=>{c(),n(e)})})}function Er(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Cr(e).then(e=>{e&&ur([e],t)})}function Dr(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Mn(t||{}),{mask:i}=n;return i&&=(i||{}).icon?i:Mn(i||{}),e(r,{...n,mask:i})}}var Or=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=xt,symbol:r=!1,mask:i=null,maskId:a=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:u={}}=t;if(!e)return;let{prefix:d,iconName:f,icon:p}=e;return In({type:`icon`,...e},()=>(An(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),L.autoA11y&&(o?l[`aria-labelledby`]=`${L.replacementClass}-title-${s||wt()}`:(l[`aria-hidden`]=`true`,l.focusable=`false`)),zn({icons:{main:Un(p),mask:i?Un(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:{...xt,...n},symbol:r,title:o,maskId:a,titleId:s,extra:{attributes:l,styles:u,classes:c}})))},kr={mixout(){return{icon:Dr(Or)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Tr,e.nodeCallback=Er,e}}},provides(e){e.i2svg=function(e){let{node:t=M,callback:n=()=>{}}=e;return Tr(t,n)},e.generateSvgReplacementMutation=function(e,t){let{iconName:n,title:r,titleId:i,prefix:a,transform:o,symbol:s,mask:c,maskId:l,extra:u}=t;return new Promise((t,d)=>{Promise.all([Kn(n,a),c.iconName?Kn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(c=>{let[d,f]=c;t([e,zn({icons:{main:d,mask:f},prefix:a,iconName:n,transform:o,symbol:s,maskId:l,title:r,titleId:i,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:i,styles:a}=e,o=kt(a);o.length>0&&(n.style=o);let s;return At(i)&&(s=jn(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Ar={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return In({type:`layer`},()=>{An(`beforeDOMElementCreation`,{assembler:e,params:t});let r=[];return e(e=>{Array.isArray(e)?e.map(e=>{r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${L.cssPrefix}-layers`,...n].join(` `)},children:r}]})}}}},jr={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return In({type:`counter`,content:e},()=>(An(`beforeDOMElementCreation`,{content:e,params:t}),Vn({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:[`${L.cssPrefix}-layers-counter`,...r]}})))}}}},Mr={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=xt,title:r=null,classes:i=[],attributes:a={},styles:o={}}=t;return In({type:`text`,content:e},()=>(An(`beforeDOMElementCreation`,{content:e,params:t}),Bn({content:e,transform:{...xt,...n},title:r,extra:{attributes:a,styles:o,classes:[`${L.cssPrefix}-layers-text`,...i]}})))}}},provides(e){e.generateLayersText=function(e,t){let{title:n,transform:r,extra:i}=t,a=null,o=null;if(pe){let t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();a=n.width/t,o=n.height/t}return L.autoA11y&&!n&&(i.attributes[`aria-hidden`]=`true`),Promise.resolve([e,Bn({content:e.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})])}}},Nr=RegExp(`"`,`ug`),Pr=[1105920,1112319],Fr={FontAwesome:{normal:`fas`,400:`fas`},...Se,...xe,...Ne},Ir=Object.keys(Fr).reduce((e,t)=>(e[t.toLowerCase()]=Fr[t],e),{}),Lr=Object.keys(Ir).reduce((e,t)=>{let n=Ir[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Rr(e){let t=e.replace(Nr,``),n=Xt(t,0),r=n>=Pr[0]&&n<=Pr[1],i=t.length===2&&t[0]===t[1];return{value:Yt(i?t[0]:t),isSecondary:r||i}}function zr(e,t){let n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Ir[n]||{})[i]||Lr[n]}function Br(e,t){let n=`${Ue}${t.replace(`:`,`-`)}`;return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();let a=Tt(e.children).filter(e=>e.getAttribute(He)===t)[0],o=ue.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(ct),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){let u=o.getPropertyValue(`content`),d=zr(s,l),{value:f,isSecondary:p}=Rr(u),m=c[0].startsWith(`FontAwesome`),h=pn(d,f),g=h;if(m){let e=_n(f);e.iconName&&e.prefix&&(h=e.iconName,d=e.prefix)}if(h&&!p&&(!a||a.getAttribute(We)!==d||a.getAttribute(Ge)!==g)){e.setAttribute(n,g),a&&e.removeChild(a);let o=br(),{extra:s}=o;s.attributes[He]=t,Kn(h,d).then(i=>{let a=zn({...o,icons:{main:i,mask:yn()},prefix:d,iconName:g,extra:s,watchable:!0}),c=M.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(c,e.firstChild):e.appendChild(c),c.outerHTML=a.map(e=>Wt(e)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Vr(e){return Promise.all([Br(e,`::before`),Br(e,`::after`)])}function Hr(e){return e.parentNode!==document.head&&!~Je.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(He)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function Ur(e){if(N)return new Promise((t,n)=>{let r=Tt(e.querySelectorAll(`*`)).filter(Hr).map(Vr),i=Qn.begin(`searchPseudoElements`);fr(),Promise.all(r).then(()=>{i(),pr(),t()}).catch(()=>{i(),pr(),n()})})}var Wr={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Ur,e}}},provides(e){e.pseudoElements2svg=function(e){let{node:t=M}=e;L.searchPseudoElements&&Ur(t)}}},Gr=!1,Kr={mixout(){return{dom:{unwatch(){fr(),Gr=!0}}}},hooks(){return{bootstrap(){hr(kn(`mutationObserverCallbacks`,{}))},noAuto(){gr()},watch(e){let{observeMutationsRoot:t}=e;Gr?pr():hr(kn(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},qr=e=>e.toLowerCase().split(` `).reduce((e,t)=>{let n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),Jr={mixout(){return{parse:{transform:e=>qr(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=qr(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:i}=e,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:{...a.outer},children:[{tag:`g`,attributes:{...a.inner},children:[{tag:t.icon.tag,children:t.icon.children,attributes:{...t.icon.attributes,...a.path}}]}]}}}},Yr={x:0,y:0,width:`100%`,height:`100%`};function Xr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Zr(e){return e.tag===`g`?e.children:[e]}On([Lt,kr,Ar,jr,Mr,Wr,Kr,Jr,{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-mask`),r=n?Sn(n.split(` `).map(e=>e.trim())):yn();return r.prefix||=vn(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:i,maskId:a,transform:o}=e,{width:s,icon:c}=r,{width:l,icon:u}=i,d=jt({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:{...Yr,fill:`white`}},p=c.children?{children:c.children.map(Xr)}:{},m={tag:`g`,attributes:{...d.inner},children:[Xr({tag:c.tag,attributes:{...c.attributes,...d.path},...p})]},h={tag:`g`,attributes:{...d.outer},children:[m]},g=`mask-${a||wt()}`,_=`clip-${a||wt()}`,v={tag:`mask`,attributes:{...Yr,id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`},children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Zr(u)},v]};return t.push(y,{tag:`rect`,attributes:{fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`,...Yr}}),{children:t,attributes:n}}}},{provides(e){let t=!1;ue.matchMedia&&(t=ue.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){let e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:{...n,d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`}});let i={...r,attributeName:`opacity`},a={tag:`circle`,attributes:{...n,cx:`256`,cy:`364`,r:`28`},children:[]};return t||a.children.push({tag:`animate`,attributes:{...r,attributeName:`r`,values:`28;14;28;28;14;28;`}},{tag:`animate`,attributes:{...i,values:`1;0;1;1;0;1;`}}),e.push(a),e.push({tag:`path`,attributes:{...n,opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`},children:t?[]:[{tag:`animate`,attributes:{...i,values:`1;0;0;0;0;1;`}}]}),t||e.push({tag:`path`,attributes:{...n,opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`},children:[{tag:`animate`,attributes:{...i,values:`0;0;1;1;0;0;`}}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Pn}),Pn.noAuto,Pn.config,Pn.library,Pn.dom;var Qr=Pn.parse;Pn.findIconDefinition,Pn.toHtml;var $r=Pn.icon;Pn.layer,Pn.text,Pn.counter;var ei=g(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),ti=g(((e,t)=>{var n=ei();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),ni=e(g(((e,t)=>{t.exports=ti()()}))());function ri(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ii(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ri(Object(n),!0).forEach(function(t){oi(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ri(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ai(e){"@babel/helpers - typeof";return ai=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ai(e)}function oi(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function si(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ci(e,t){if(e==null)return{};var n=si(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function li(e){return ui(e)||di(e)||fi(e)||mi()}function ui(e){if(Array.isArray(e))return pi(e)}function di(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function fi(e,t){if(e){if(typeof e==`string`)return pi(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`)return Array.from(e);if(n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pi(e,t)}}function pi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function mi(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hi(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,c=e.spin,l=e.spinPulse,u=e.spinReverse,d=e.pulse,f=e.fixedWidth,p=e.inverse,m=e.border,h=e.listItem,g=e.flip,_=e.size,v=e.rotation,y=e.pull,b=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":m,"fa-li":h,"fa-flip":g===!0,"fa-flip-horizontal":g===`horizontal`||g===`both`,"fa-flip-vertical":g===`vertical`||g===`both`},oi(t,`fa-${_}`,_!=null),oi(t,`fa-rotate-${v}`,v!=null&&v!==0),oi(t,`fa-pull-${y}`,y!=null),oi(t,`fa-swap-opacity`,e.swapOpacity),t);return Object.keys(b).map(function(e){return b[e]?e:null}).filter(function(e){return e})}function gi(e){return e-=0,e===e}function _i(e){return gi(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))}var vi=[`style`];function yi(e){return e.charAt(0).toUpperCase()+e.slice(1)}function bi(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=_i(t.slice(0,n)),i=t.slice(n+1).trim();return r.startsWith(`webkit`)?e[yi(r)]=i:e[r]=i,e},{})}function xi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t==`string`)return t;var r=(t.children||[]).map(function(t){return xi(e,t)}),i=Object.keys(t.attributes||{}).reduce(function(e,n){var r=t.attributes[n];switch(n){case`class`:e.attrs.className=r,delete t.attributes.class;break;case`style`:e.attrs.style=bi(r);break;default:n.indexOf(`aria-`)===0||n.indexOf(`data-`)===0?e.attrs[n.toLowerCase()]=r:e.attrs[_i(n)]=r}return e},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=ci(n,vi);return i.attrs.style=ii(ii({},i.attrs.style),o),e.apply(void 0,[t.tag,ii(ii({},i.attrs),s)].concat(li(r)))}var Si=!1;try{Si=!0}catch{}function Ci(){if(!Si&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function wi(e){if(e&&ai(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(Qr.icon)return Qr.icon(e);if(e===null)return null;if(e&&ai(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}function Ti(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?oi({},e,t):{}}var Ei={border:!1,className:``,mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:null,transform:null,swapOpacity:!1},Di=A.forwardRef(function(e,t){var n=ii(ii({},Ei),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,s=n.title,c=n.titleId,l=n.maskId,u=wi(r),d=Ti(`classes`,[].concat(li(hi(n)),li((o||``).split(` `)))),f=Ti(`transform`,typeof n.transform==`string`?Qr.transform(n.transform):n.transform),p=Ti(`mask`,wi(i)),m=$r(u,ii(ii(ii(ii({},d),f),p),{},{symbol:a,title:s,titleId:c,maskId:l}));if(!m)return Ci(`Could not find icon`,u),null;var h=m.abstract,g={ref:t};return Object.keys(n).forEach(function(e){Ei.hasOwnProperty(e)||(g[e]=n[e])}),Oi(h[0],g)});Di.displayName=`FontAwesomeIcon`,Di.propTypes={beat:ni.default.bool,border:ni.default.bool,beatFade:ni.default.bool,bounce:ni.default.bool,className:ni.default.string,fade:ni.default.bool,flash:ni.default.bool,mask:ni.default.oneOfType([ni.default.object,ni.default.array,ni.default.string]),maskId:ni.default.string,fixedWidth:ni.default.bool,inverse:ni.default.bool,flip:ni.default.oneOf([!0,!1,`horizontal`,`vertical`,`both`]),icon:ni.default.oneOfType([ni.default.object,ni.default.array,ni.default.string]),listItem:ni.default.bool,pull:ni.default.oneOf([`right`,`left`]),pulse:ni.default.bool,rotation:ni.default.oneOf([0,90,180,270]),shake:ni.default.bool,size:ni.default.oneOf([`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`]),spin:ni.default.bool,spinPulse:ni.default.bool,spinReverse:ni.default.bool,symbol:ni.default.oneOfType([ni.default.bool,ni.default.string]),title:ni.default.string,titleId:ni.default.string,transform:ni.default.oneOfType([ni.default.string,ni.default.object]),swapOpacity:ni.default.bool};var Oi=xi.bind(null,A.createElement),ki=`-ms-`,Ai=`-moz-`,ji=`-webkit-`,Mi=`comm`,Ni=`rule`,Pi=`decl`,Fi=`@import`,Ii=`@namespace`,Li=`@keyframes`,Ri=`@layer`,zi=Math.abs,Bi=String.fromCharCode,Vi=Object.assign;function Hi(e,t){return Ki(e,0)^45?(((t<<2^Ki(e,0))<<2^Ki(e,1))<<2^Ki(e,2))<<2^Ki(e,3):0}function Ui(e){return e.trim()}function Wi(e,t){return(e=t.exec(e))?e[0]:e}function R(e,t,n){return e.replace(t,n)}function Gi(e,t,n){return e.indexOf(t,n)}function Ki(e,t){return e.charCodeAt(t)|0}function qi(e,t,n){return e.slice(t,n)}function Ji(e){return e.length}function Yi(e){return e.length}function Xi(e,t){return t.push(e),e}function Zi(e,t){return e.map(t).join(``)}function Qi(e,t){return e.filter(function(e){return!Wi(e,t)})}var $i=1,ea=1,ta=0,na=0,ra=0,ia=``;function aa(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:$i,column:ea,length:o,return:``,siblings:s}}function oa(e,t){return Vi(aa(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function sa(e){for(;e.root;)e=oa(e.root,{children:[e]});Xi(e,e.siblings)}function ca(){return ra}function la(){return ra=na>0?Ki(ia,--na):0,ea--,ra===10&&(ea=1,$i--),ra}function ua(){return ra=na<ta?Ki(ia,na++):0,ea++,ra===10&&(ea=1,$i++),ra}function da(){return Ki(ia,na)}function fa(){return na}function pa(e,t){return qi(ia,e,t)}function ma(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ha(e){return $i=ea=1,ta=Ji(ia=e),na=0,[]}function ga(e){return ia=``,e}function _a(e){return Ui(pa(na-1,ba(e===91?e+2:e===40?e+1:e)))}function va(e){for(;(ra=da())&&ra<33;)ua();return ma(e)>2||ma(ra)>3?``:` `}function ya(e,t){for(;--t&&ua()&&!(ra<48||ra>102||ra>57&&ra<65||ra>70&&ra<97););return pa(e,fa()+(t<6&&da()==32&&ua()==32))}function ba(e){for(;ua();)switch(ra){case e:return na;case 34:case 39:e!==34&&e!==39&&ba(ra);break;case 40:e===41&&ba(e);break;case 92:ua();break}return na}function xa(e,t){for(;ua()&&e+ra!==57&&!(e+ra===84&&da()===47););return`/*`+pa(t,na-1)+`*`+Bi(e===47?e:ua())}function Sa(e){for(;!ma(da());)ua();return pa(e,na)}function Ca(e){return ga(wa(``,null,null,null,[``],e=ha(e),0,[0],e))}function wa(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=ua()){case 40:if(m!=108&&Ki(C,d-1)==58){Gi(C+=R(_a(v),`&`,`&\f`),`&\f`,zi(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=_a(v);break;case 9:case 10:case 13:case 32:C+=va(m);break;case 92:C+=ya(fa()-1,7);continue;case 47:switch(da()){case 42:case 47:Xi(Ea(xa(ua(),fa()),t,n,c),c),(ma(m||1)==5||ma(da()||1)==5)&&Ji(C)&&qi(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=Ji(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=R(C,/\f/g,``)),p>0&&(Ji(C)-d||h===0&&m===47)&&Xi(p>32?Da(C+`;`,r,n,d-1,c):Da(R(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(Xi(S=Ta(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)wa(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(Ki(C,3)===110)break;case 108:if(Ki(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?wa(e,S,S,r&&Xi(Ta(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):wa(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Ji(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&la()==125)continue}switch(C+=Bi(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Ji(C)-1)*_,_=1;break;case 64:da()===45&&(C+=_a(ua())),f=da(),u=d=Ji(y=C+=Sa(fa())),v++;break;case 45:m===45&&Ji(C)==2&&(h=0)}}return a}function Ta(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=Yi(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=qi(e,f+1,f=zi(g=o[h])),b=e;v<m;++v)(b=Ui(g>0?p[v]+` `+y:R(y,/&\f/g,p[v])))&&(c[_++]=b);return aa(e,t,n,i===0?Ni:s,c,l,u,d)}function Ea(e,t,n,r){return aa(e,t,n,Mi,Bi(ca()),qi(e,2,-2),0,r)}function Da(e,t,n,r,i){return aa(e,t,n,Pi,qi(e,0,r),qi(e,r+1,-1),r,i)}function Oa(e,t,n){switch(Hi(e,t)){case 5103:return ji+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ji+e+e;case 4855:return ji+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return Ai+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ji+e+Ai+e+ki+e+e;case 5936:switch(Ki(e,t+11)){case 114:return ji+e+ki+R(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return ji+e+ki+R(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return ji+e+ki+R(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return ji+e+ki+e+e;case 6165:return ji+e+ki+`flex-`+e+e;case 5187:return ji+e+R(e,/(\w+).+(:[^]+)/,ji+`box-$1$2`+ki+`flex-$1$2`)+e;case 5443:return ji+e+ki+`flex-item-`+R(e,/flex-|-self/g,``)+(Wi(e,/flex-|baseline/)?``:ki+`grid-row-`+R(e,/flex-|-self/g,``))+e;case 4675:return ji+e+ki+`flex-line-pack`+R(e,/align-content|flex-|-self/g,``)+e;case 5548:return ji+e+ki+R(e,`shrink`,`negative`)+e;case 5292:return ji+e+ki+R(e,`basis`,`preferred-size`)+e;case 6060:return ji+`box-`+R(e,`-grow`,``)+ji+e+ki+R(e,`grow`,`positive`)+e;case 4554:return ji+R(e,/([^-])(transform)/g,`$1`+ji+`$2`)+e;case 6187:return R(R(R(e,/(zoom-|grab)/,ji+`$1`),/(image-set)/,ji+`$1`),e,``)+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,ji+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,ji+`box-pack:$3`+ki+`flex-pack:$3`),/space-between/,`justify`)+ji+e+e;case 4200:if(!Wi(e,/flex-|baseline/))return ki+`grid-column-align`+qi(e,t)+e;break;case 2592:case 3360:return ki+R(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Wi(e.props,/grid-\w+-end/)})?~Gi(e+(n=n[t].value),`span`,0)?e:ki+R(e,`-start`,``)+e+ki+`grid-row-span:`+(~Gi(n,`span`,0)?Wi(n,/\d+/):Wi(n,/\d+/)-+Wi(e,/\d+/))+`;`:ki+R(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return Wi(e.props,/grid-\w+-start/)})?e:ki+R(R(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,ji+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ji(e)-1-t>6)switch(Ki(e,t+1)){case 109:if(Ki(e,t+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,`$1`+ji+`$2-$3$1`+Ai+(Ki(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Gi(e,`stretch`,0)?Oa(R(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return ki+n+`:`+r+s+(i?ki+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(Ki(e,t+6)===121)return R(e,`:`,`:`+ji)+e;break;case 6444:switch(Ki(e,Ki(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+ji+(Ki(e,14)===45?`inline-`:``)+`box$3$1`+ji+`$2$3$1`+ki+`$2box$3`)+e;case 100:return R(e,`:`,`:`+ki)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,`scroll-`,`scroll-snap-`)+e}return e}function ka(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Aa(e,t,n,r){switch(e.type){case Ri:if(e.children.length)break;case Fi:case Ii:case Pi:return e.return=e.return||e.value;case Mi:return``;case Li:return e.return=e.value+`{`+ka(e.children,r)+`}`;case Ni:if(!Ji(e.value=e.props.join(`,`)))return``}return Ji(n=ka(e.children,r))?e.return=e.value+`{`+n+`}`:``}function ja(e){var t=Yi(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ma(e){return function(t){t.root||(t=t.return)&&e(t)}}function Na(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Pi:e.return=Oa(e.value,e.length,n);return;case Li:return ka([oa(e,{value:R(e.value,`@`,`@`+ji)})],r);case Ni:if(e.length)return Zi(n=e.props,function(t){switch(Wi(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:sa(oa(e,{props:[R(t,/:(read-\w+)/,`:`+Ai+`$1`)]})),sa(oa(e,{props:[t]})),Vi(e,{props:Qi(n,r)});break;case`::placeholder`:sa(oa(e,{props:[R(t,/:(plac\w+)/,`:`+ji+`input-$1`)]})),sa(oa(e,{props:[R(t,/:(plac\w+)/,`:`+Ai+`$1`)]})),sa(oa(e,{props:[R(t,/:(plac\w+)/,ki+`input-$1`)]})),sa(oa(e,{props:[t]})),Vi(e,{props:Qi(n,r)});break}return``})}}function Pa(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Fa=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Ia=`active`,La=`data-styled-version`,Ra=`6.6.0`,za=`/*!sc*/
`,Ba=typeof window<`u`&&typeof document<`u`;if(!A.createContext)throw Pa(19);function Va(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Ha=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:Va(`REACT_APP_SC_DISABLE_SPEEDY`)??Va(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),Ua=`sc-keyframes-`,Wa=new Map,Ga=new Map,Ka=1,qa=e=>{if(Wa.has(e))return Wa.get(e);for(;Ga.has(Ka);)Ka++;let t=Ka++;return Wa.set(e,t),Ga.set(t,e),t},Ja=e=>Ga.get(e),Ya=(e,t)=>{Ka=t+1,Wa.set(e,t),Ga.set(t,e)},Xa=Object.freeze([]),Za=Object.freeze({});function Qa(e,t,n=Za){return e.theme!==n.theme&&e.theme||t||n.theme}var $a=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eo=/(^-|-$)/g;function to(e){return e.replace($a,`-`).replace(eo,``)}var no=/(a)(d)/gi,ro=e=>String.fromCharCode(e+(e>25?39:97));function io(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=ro(t%52)+n;return(ro(t%52)+n).replace(no,`$1-$2`)}var ao=5381,oo=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},so=e=>oo(ao,e);function co(e){return io(so(e)>>>0)}function lo(e){return e.displayName||e.name||`Component`}function uo(e){return typeof e==`string`&&!0}function fo(e){return uo(e)?`styled.${e}`:`Styled(${lo(e)})`}var po=Symbol.for(`react.memo`),mo=Symbol.for(`react.forward_ref`),ho={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},go={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vo={[mo]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[po]:_o};function yo(e){return(`type`in(t=e)&&t.type.$$typeof)===po?_o:`$$typeof`in e?vo[e.$$typeof]:ho;var t}var bo=Object.defineProperty,xo=Object.getOwnPropertyNames,So=Object.getOwnPropertySymbols,Co=Object.getOwnPropertyDescriptor,wo=Object.getPrototypeOf,To=Object.prototype;function Eo(e,t,n){if(typeof t!=`string`){let r=wo(t);r&&r!==To&&Eo(e,r,n);let i=xo(t).concat(So(t)),a=yo(e),o=yo(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in go||n&&n[s]||o&&s in o||a&&s in a)){let n=Co(t,s);try{bo(e,s,n)}catch{}}}}return e}function Do(e){return typeof e==`function`}var Oo=Symbol.for(`react.forward_ref`);function ko(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Oo&&`styledComponentId`in e}function Ao(e,t){return e&&t?e+` `+t:e||t||``}function jo(e,t){return e.join(t||``)}function Mo(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function No(e,t,n=!1){if(!n&&!Mo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=No(e[n],t[n]);else if(Mo(t))for(let n in t)e[n]=No(e[n],t[n]);return e}function Po(e,t){Object.defineProperty(e,"toString",{value:t})}var Fo=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Pa(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+za;return t}},Io=`style[${Fa}][${La}="${Ra}"]`,Lo=RegExp(`^${Fa}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Ro=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,zo=e=>{if(!e)return document;if(Ro(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Ro(t))return t}return document},Bo=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Vo=(e,t)=>{let n=(t.textContent??``).split(za),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Lo);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Ya(n,t),Bo(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Ho=e=>{let t=zo(e.options.target).querySelectorAll(Io);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Fa)!==Ia&&(Vo(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Uo=!1;function Wo(){if(!1!==Uo)return Uo;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Uo=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Uo=t.getAttribute(`content`)||void 0}return Uo=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Go=(e,t)=>{if(typeof document>`u`)throw Pa(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Fa}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Fa,Ia),i.setAttribute(La,Ra);let s=t||Wo();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Ko=class{constructor(e,t){this.element=Go(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Pa(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},qo=class{constructor(e,t){this.element=Go(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Jo=Ba,Yo={isServer:!Ba,useCSSOMInjection:!Ha},Xo=class e{static registerId(e){return qa(e)}constructor(e=Za,t={},n){this.options=Object.assign(Object.assign({},Yo),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ba&&Jo&&(Jo=!1,Ho(this)),Po(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Ja(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Fa+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Ba&&Ho(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Ba&&t.target!==this.options.target&&zo(this.options.target)!==zo(t.target)&&Ho(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Ko(t,n):new qo(t,n))(this.options),new Fo(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){qa(e),e.startsWith(Ua)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(qa(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(qa(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Zo=new WeakSet,Qo={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function $o(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Qo||e.startsWith(`--`)?String(t).trim():t+`px`}var es=47;function ts(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var ns=Symbol.for(`sc-keyframes`);function rs(e){return typeof e==`object`&&!!e&&ns in e}function is(e){return Do(e)&&!(e.prototype&&e.prototype.isReactComponent)}var as=e=>e==null||!1===e||e===``,os=Symbol.for(`react.client.reference`);function ss(e){return e.$$typeof===os}function cs(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!as(r)&&(Array.isArray(r)&&Zo.has(r)||Do(r)?t.push(ts(n)+`:`,r,`;`):Mo(r)?(t.push(n+` {`),cs(r,t),t.push(`}`)):t.push(ts(n)+`: `+$o(n,r)+`;`))}}function ls(e,t,n,r,i=[]){if(as(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return ss(e)?i:is(e)&&t?ls(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)ls(e[a],t,n,r,i);return i}return ko(e)?(i.push(`.${e.styledComponentId}`),i):rs(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):ss(e)?i:Mo(e)&&e.toString===Object.prototype.toString?(cs(e,i),i):(i.push(e.toString()),i)}var us=so(Ra),ds=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=oo(us,t),this.baseStyle=n,Xo.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(is(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=jo(ls(r,e,t,n)))}else i+=jo(ls(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=io(oo(oo(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Ao(r,a)}}return r}},fs=/&/g;function ps(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function ms(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==es||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===es&&(o=!1,c++);else if(l!==34&&l!==39||ps(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function hs(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&hs(a.children,t)}return e}function gs({options:e=Za,plugins:t=Xa}=Za){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(fs,r).replace(i,a))}),e.prefix&&o.push(Na),o.push(Aa);let s=[],c=ja(o.concat(Ma(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return ms(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||ps(e,o))if(s===0)if(t===es&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==es);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===es)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===es&&o+1<r&&e.charCodeAt(o+1)===es){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:ms(i)):l===0?e:ms(e)}(t),d=Ca(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=hs(d,e.namespace)),s=[],ka(d,c),s},u=e,d=ao;for(let e=0;e<t.length;e++)t[e].name||Pa(15),d=oo(d,t[e].name);return u!=null&&u.namespace&&(d=oo(d,u.namespace)),u!=null&&u.prefix&&(d=oo(d,`p`)),l.hash=d===ao?``:d.toString(),l}var _s=new Xo,vs=gs(),ys=A.createContext({shouldForwardProp:void 0,styleSheet:_s,stylis:vs,stylisPlugins:void 0});ys.Consumer;function bs(){return A.useContext(ys)}function xs(e){let t=bs(),{styleSheet:n}=t,r=A.useMemo(()=>{let t=n;return e.sheet?t=e.sheet:e.target?t=t.reconstructWithOptions(e.nonce===void 0?{target:e.target}:{target:e.target,nonce:e.nonce},!1):e.nonce!==void 0&&(t=t.reconstructWithOptions({nonce:e.nonce})),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.nonce,e.sheet,e.target,n]),i=A.useMemo(()=>e.stylisPlugins===void 0&&e.namespace===void 0&&e.enableVendorPrefixes===void 0?t.stylis:gs({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins??t.stylisPlugins}),[e.enableVendorPrefixes,e.namespace,e.stylisPlugins,t.stylis,t.stylisPlugins]),a=`shouldForwardProp`in e?e.shouldForwardProp:t.shouldForwardProp,o=e.stylisPlugins??t.stylisPlugins,s=A.useMemo(()=>({shouldForwardProp:a,styleSheet:r,stylis:i,stylisPlugins:o}),[a,r,i,o]);return A.createElement(ys.Provider,{value:s},e.children)}var Ss=A.createContext(void 0);Ss.Consumer;var Cs={};function ws(e,t){let n=typeof e==`string`?to(e):`sc`;Cs[n]=(Cs[n]||0)+1;let r=n+`-`+co(Ra+n+Cs[n]);return t?t+`-`+r:r}function Ts(e,t,n){let r=ko(e),i=e,a=!uo(e),{attrs:o=Xa,componentId:s=ws(t.displayName,t.parentComponentId),displayName:c=fo(e)}=t,l=t.displayName&&t.componentId?to(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new ds(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=A.useContext(Ss),u=bs(),d=e.shouldForwardProp||u.shouldForwardProp,f=Qa(t,l,a)||Za,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=Do(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=Ao(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=Ao(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,_=uo(g),v=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,_,m),y=Ao(o,s);return h&&(y+=` `+h),p.className&&(y+=` `+p.className),v[_&&g.includes(`-`)?`class`:`className`]=y,n&&(v.ref=n),(0,A.createElement)(g,v)}(m,e,t)}p.displayName=c;let m=A.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Ao(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)No(e,n,!0);return e}({},i.defaultProps,e):e}}),Po(m,()=>`.${m.styledComponentId}`),a&&Eo(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Es=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Ds(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Os=e=>(Zo.add(e),e);function ks(e,...t){if(Do(e)||Mo(e))return Os(ls(Ds(Xa,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?ls(n):Os(ls(Ds(n,t)))}function As(e,t,n=Za){if(!t)throw Pa(1,t);let r=(r,...i)=>e(t,n,ks(r,...i));return r.attrs=r=>As(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>As(e,t,Object.assign(Object.assign({},n),r)),r}var js=e=>As(Ts,e),Ms=js;Es.forEach(e=>{Ms[e]=js(e)}),`${Fa}`,`${Fa}`,`${Fa}`;var z={textWhite:`rgba(223, 223, 223, 1)`,textGrey:`rgba(156, 156, 156, 1)`,dangerRed:`rgba(243, 151, 143, 1)`,dangerRedPressed:`rgba(240, 97, 84,1)`,panelBackground:`rgba(38, 38, 38, 0.7)`,panelBorder:`rgba(61, 61, 63, 0.7)`,buttonBackground:`rgba(61, 61, 63, 0.6)`,buttonHovered:`rgba(61, 61, 63, 0.8)`,buttonPressed:`rgba(61, 61, 63, 1)`,gradientGrey:`linear-gradient(to bottom, #343434, #393939)`,gradientGreyTranslucent:`linear-gradient(to bottom, rgba(52, 52, 52, 0.75), rgba(57, 57, 57, 0.75))`,gradientLightGreyTranslucent:`linear-gradient(to bottom, rgba(75, 75, 75, 0.75), rgba(80, 80, 80, 0.75))`},B={height:`30px`,minWidth:`30px`,fontSize:`14px`,radiusMiddle:`3px`,radiusSolo:`10px`,radiusFirst:`10px 3px 3px 10px`,radiusLast:`3px 10px 10px 3px`,widthLong:`70px`,widthShort:`30px`,gap:`3px`},Ns=Ms.button`
	background: ${z.gradientGreyTranslucent};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${z.textWhite};
	border: 1px solid transparent;
	border-radius: ${B.radiusMiddle};
	font-size: ${B.fontSize};
	height: ${B.height};
	min-width: ${B.minWidth};
	transition: all 0.2s ease-in-out;
	text-transform: none;
	box-shadow: none;
	font-family: Arial, sans-serif;

	&:first-child {
		border-radius: ${({$reverse:e})=>e?B.radiusLast:B.radiusFirst};
	}

	&:last-child {
		border-radius: ${({$reverse:e})=>e?B.radiusFirst:B.radiusLast};
	}

	&:first-child:last-child {
		border-radius: ${B.radiusSolo};
	}
`,Ps=Ms.div`
	padding: 2px;
	display: flex;
	background-color: ${z.panelBackground};
	border: 1px solid ${z.panelBorder};
	backdrop-filter: blur(40px);
	-webkit-backdrop-filter: blur(40px);
	justify-content: center;
	pointer-events: all;
	border-radius: 14px;
	align-items: center;
	height: 24px;
`,Fs=Ms.button`
	background-color: transparent;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${z.textWhite};
	border-radius: 4px;
	font-size: 16px;
	height: 24px;
	min-width: 24px;
	transition: all 0.2s ease-in-out;
	text-transform: none;
	box-shadow: none;
	padding: 1px 5px;
	font-family: Arial, sans-serif;

	&:hover {
		background-color: ${z.buttonPressed};
	}

	&:active {
		background-color: ${z.buttonPressed};
	}

	&:focus {
		outline: none;
	}

	&:first-child {
		border-radius: 12px 4px 4px 12px;
	}

	&:last-child {
		border-radius: 4px 12px 12px 4px;
	}

	&:first-child:last-child {
		border-radius: 12px;
	}
`,Is=Ms.div`
	background-color: ${({$pressed:e})=>e?z.buttonPressed:z.buttonBackground};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${z.textWhite};
	border-radius: 8px;
	font-size: 14px;
	font-family: Arial, sans-serif;
	height: 30px;
	width: 30px;
	transition: all 0.2s ease-in-out;
`,Ls=Ms.div`
	display: flex;
	align-items: center;
	height: 30px;
	margin-bottom: 3px;
	justify-content: flex-start;
	flex-direction: ${({$reverse:e})=>e?`row-reverse`:`row`};

	&:last-child {
		margin-bottom: 0;
	}
`,Rs=Ms.div`
	display: flex;
	flex-direction: ${({$reverse:e})=>e?`row-reverse`:`row`};
	height: 100%;
	justify-content: space-between;
	align-items: center;
	margin: ${({$reverse:e})=>e?`0 5px 0 0`:`0 0 0 5px`};
	gap: 3px;
`;Ms.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
`,Ms.div`
	position: absolute;
	background-color: ${z.textWhite};
	border-radius: 50%;
	width: 36px;
	height: 36px;
	cursor: pointer;
	pointer-events: auto;
`;var zs=Ms.input.attrs({type:`range`})`
	-webkit-appearance: none;
	appearance: none;
	background: ${z.gradientGreyTranslucent};
	border: none;
	height: 100%;
	width: ${B.widthLong};
	cursor: pointer;
	margin: 0;
	transition: all 0.2s ease-in-out;
	border-radius: ${({$reverse:e})=>e?B.radiusFirst:B.radiusLast};

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 8px;
		height: 30px;
		background-color: ${z.textWhite};
		border-radius: ${B.radiusMiddle};
	}

	&::-moz-range-thumb {
		width: 10px;
		height: 30px;
		background-color: ${z.textWhite};
		border-radius: ${B.radiusMiddle};
	}

	&::-ms-thumb {
		width: 8px;
		height: 24px;
		background-color: ${z.textWhite};
		border-radius: ${B.radiusMiddle};
	}
`;Ms.div`
	display: flex;
	flex-direction: column;
	align-items: ${({$reverse:e})=>e?`flex-start`:`flex-end`};
	justify-content: center;
	margin: ${({$reverse:e})=>e?`2px -26px 0 0`:`2px 0 0 -26px`};
`,Ms.div`
	display: flex;
	flex-direction: ${({$reverse:e})=>e?`row-reverse`:`row`};
	align-items: center;
	justify-content: center;
`;var Bs=Ms(Di)`
	height: ${({$size:e=14})=>`${e}px`};
	min-height: ${({$size:e=14})=>`${e}px`};
	max-height: ${({$size:e=14})=>`${e}px`};
	width: ${({$size:e=14})=>`${e}px`};
	min-width: ${({$size:e=14})=>`${e}px`};
	max-width: ${({$size:e=14})=>`${e}px`};
	transform: ${({$reverse:e})=>e?`scaleX(-1)`:`unset`};
`,Vs=Ms(Di)`
	height: 18px;
	min-height: 18px;
	max-height: 18px;
	width: 18px;
	min-width: 18px;
	max-width: 18px;
	margin: 6px;
	transform: ${({$reverse:e})=>e?`scaleX(-1)`:`unset`};
`,Hs=Ms.div`
	position: fixed;
	padding: 5px;
	font-family: Arial, sans-serif;
	color: ${z.textWhite};
	pointer-events: all;
	background-color: ${z.panelBackground};
	border: 1px solid ${z.panelBorder};
	backdrop-filter: blur(40px);
	-webkit-backdrop-filter: blur(40px);
	border-radius: 12px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	display: flex;
	flex-direction: column;
`,Us=Ms.hr`
	width: ${({$horizontal:e=!0})=>e?`unset`:`1px`};
	height: ${({$horizontal:e=!0})=>e?`1px`:`unset`};
	background-color: ${z.panelBorder};
	margin: 5px 3px;
	border: none;
`,Ws=Ms.button`
	background-color: transparent;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${({$isRed:e})=>e?z.dangerRed:z.textWhite};
	font-size: 12px;
	padding: 3px;
	text-transform: none;
	box-shadow: none;

	&:hover {
		color: ${({$isRed:e})=>e?z.dangerRedPressed:`#ffffff`};
	}

	&:active {
		color: ${({$isRed:e})=>e?z.dangerRedPressed:`#ffffff`};
	}

	&:focus {
		outline: none;
	}
`,Gs=Ms.div`
	display: flex;
	flex-direction: row;
	gap: ${B.gap};
	height: 25px;
`,Ks=Ms.input.attrs({type:`text`})`
	width: 50px;
	outline: none;
	background: ${z.gradientGrey};
	border: 1px solid transparent;
	border-radius: 5px;
	height: 25px;
	color: ${z.textWhite};
	padding: 0 10px 0 5px;
	box-sizing: border-box;
	font-size: 10px;

	&:read-only {
		background: ${z.gradientGreyTranslucent};
	}

	&:invalid {
		background-color: ${z.dangerRed};
	}
`,qs=Ms.span`
	position: absolute;
	right: 5px;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	color: ${z.textGrey};
	font-size: 10px;
`,Js={prefix:`fas`,iconName:`right-from-bracket`,icon:[512,512,[`sign-out-alt`],`f2f5`,`M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z`]},Ys={prefix:`fas`,iconName:`fingerprint`,icon:[512,512,[],`f577`,`M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6c-15.2 5-18.7 23.7-8.3 35.9c7.1 8.3 18.8 10.8 29.4 7.9c10.6-2.9 21.8-4.4 33.4-4.4c70.7 0 128 57.3 128 128l0 24.9c0 25.2-1.5 50.3-4.4 75.3c-1.7 14.6 9.4 27.8 24.2 27.8c11.8 0 21.9-8.6 23.3-20.3c3.3-27.4 5-55 5-82.7l0-24.9c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4C93.7 178 80 215.4 80 256l0 24.9c0 24.2-2.6 48.4-7.8 71.9C68.8 368.4 80.1 384 96.1 384c10.5 0 19.9-7 22.2-17.3c6.4-28.1 9.7-56.8 9.7-85.8l0-24.9c0-27.2 8.5-52.4 22.9-73.1c7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96l0 24.9c0 35.9-4.6 71.5-13.8 106.1c-3.8 14.3 6.7 29 21.5 29c9.5 0 17.9-6.2 20.4-15.4c10.5-39 15.9-79.2 15.9-119.7l0-24.9c0-28.7 23.3-52 52-52s52 23.3 52 52l0 24.9c0 36.3-3.5 72.4-10.4 107.9c-2.7 13.9 7.7 27.2 21.8 27.2c10.2 0 19-7 21-17c7.7-38.8 11.6-78.3 11.6-118.1l0-24.9c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9l0-24.9z`]},Xs={prefix:`fas`,iconName:`caret-right`,icon:[256,512,[],`f0da`,`M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z`]},Zs={prefix:`fas`,iconName:`caret-left`,icon:[256,512,[],`f0d9`,`M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z`]},Qs={prefix:`fas`,iconName:`gamepad`,icon:[640,512,[],`f11b`,`M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z`]},$s={prefix:`fas`,iconName:`hand`,icon:[512,512,[129306,9995,`hand-paper`],`f256`,`M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 272c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208z`]},ec={prefix:`fas`,iconName:`plug`,icon:[384,512,[128268],`f1e6`,`M96 0C78.3 0 64 14.3 64 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c0 77.4 55 142 128 156.8l0 67.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-67.2C297 398 352 333.4 352 256l0-32c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z`]},tc={prefix:`fas`,iconName:`ban`,icon:[512,512,[128683,`cancel`],`f05e`,`M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z`]},nc={prefix:`fas`,iconName:`arrow-right-to-bracket`,icon:[512,512,[`sign-in`],`f090`,`M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z`]},rc={prefix:`fas`,iconName:`caret-up`,icon:[320,512,[],`f0d8`,`M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z`]},ic={prefix:`fas`,iconName:`rotate-left`,icon:[512,512,[`rotate-back`,`rotate-backward`,`undo-alt`],`f2ea`,`M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z`]},ac={prefix:`fas`,iconName:`circle-play`,icon:[512,512,[61469,`play-circle`],`f144`,`M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z`]},oc={prefix:`fas`,iconName:`person-shelter`,icon:[512,512,[],`e54f`,`M271.9 4.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128C6.2 137.9 0 148.5 0 160L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.4L256 68.9 448 178.6 448 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-11.5-6.2-22.1-16.1-27.8l-224-128zM256 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm-8 280l0-88 16 0 0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-174.5 26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3l-19.5 0c-32.4 0-62.1 17.8-77.5 46.3l-37.9 70.3c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L200 313.5 200 488c0 13.3 10.7 24 24 24s24-10.7 24-24z`]},sc={prefix:`fas`,iconName:`hand-scissors`,icon:[512,512,[],`f257`,`M40 208c-22.1 0-40 17.9-40 40s17.9 40 40 40l180.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 25.3 19.5 46 44.3 47.9c-7.7 8.5-12.3 19.8-12.3 32.1c0 26.5 21.5 48 48 48l32 0 64 0c70.7 0 128-57.3 128-128l0-113.1c0-40.2-16-78.8-44.4-107.3C444.8 76.8 413.9 64 381.7 64L336 64c-21.3 0-39.3 13.9-45.6 33.1l74.5 23.7c8.4 2.7 13.1 11.7 10.4 20.1s-11.7 13.1-20.1 10.4L288 129.9c0 0 0 .1 0 .1L84 65.8C62.9 59.2 40.5 70.9 33.8 92s5.1 43.5 26.2 50.2L269.5 208 40 208z`]},cc={prefix:`fas`,iconName:`street-view`,icon:[512,512,[],`f21d`,`M320 64A64 64 0 1 0 192 64a64 64 0 1 0 128 0zm-96 96c-35.3 0-64 28.7-64 64l0 48c0 17.7 14.3 32 32 32l1.8 0 11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5l38.7 0c16.3 0 30-12.3 31.8-28.5L318.2 304l1.8 0c17.7 0 32-14.3 32-32l0-48c0-35.3-28.7-64-64-64l-64 0zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z`]},lc={prefix:`fas`,iconName:`gear`,icon:[512,512,[9881,`cog`],`f013`,`M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z`]},uc={prefix:`fas`,iconName:`caret-down`,icon:[320,512,[],`f0d7`,`M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z`]},dc={prefix:`fas`,iconName:`delete-left`,icon:[576,512,[9003,`backspace`],`f55a`,`M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z`]},fc={prefix:`fas`,iconName:`bug`,icon:[512,512,[],`f188`,`M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z`]},pc={prefix:`fas`,iconName:`angle-up`,icon:[448,512,[8963],`f106`,`M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z`]},mc={prefix:`fas`,iconName:`chevron-left`,icon:[320,512,[9001],`f053`,`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z`]},hc={prefix:`fas`,iconName:`hand-lizard`,icon:[512,512,[],`f258`,`M0 112C0 85.5 21.5 64 48 64l112 0 80 0 46.5 0c36.8 0 71.2 18 92.1 48.2l113.5 164c13 18.7 19.9 41 19.9 63.8l0 12 0 16 0 48c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-13.8L273.9 352 240 352l-80 0-48 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l48 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-80 0L48 160c-26.5 0-48-21.5-48-48z`]},gc={prefix:`fas`,iconName:`chevron-right`,icon:[320,512,[9002],`f054`,`M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`]},_c={prefix:`fas`,iconName:`vr-cardboard`,icon:[640,512,[],`f729`,`M576 64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l120.4 0c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4L576 448c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64zM96 240a64 64 0 1 1 128 0A64 64 0 1 1 96 240zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z`]},vc={prefix:`fas`,iconName:`arrow-turn-down`,icon:[384,512,[`level-down`],`f149`,`M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z`]},yc={prefix:`fas`,iconName:`circle-xmark`,icon:[512,512,[61532,`times-circle`,`xmark-circle`],`f057`,`M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z`]},bc={prefix:`fas`,iconName:`video`,icon:[576,512,[`video-camera`],`f03d`,`M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z`]},V=B.height,xc={"x-button-left":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.55,d:`M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M16.529 16.1h-.893l-1.653-2.713-1.68 2.713h-.832l2.074-3.255-1.942-2.992h.875l1.531 2.45 1.54-2.45h.831l-1.933 2.975 2.082 3.272Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"y-button-left":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.55,d:`M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`m14.086 12.924 1.627-3.071h.849l-2.083 3.823V16.1h-.787v-2.389L11.61 9.853h.857l1.619 3.07Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"a-button-right":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.55,d:`M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`m15.975 16.1-.753-1.934h-2.476l-.744 1.934h-.796l2.441-6.274h.709l2.432 6.274h-.813Zm-1.69-4.524a29.052 29.052 0 0 1-.21-.63 5.175 5.175 0 0 0-.087-.306c-.029.117-.06.236-.096.359-.03.116-.061.224-.096.323-.03.1-.056.184-.079.254l-.709 1.89h1.978l-.7-1.89Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"b-button-right":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.55,d:`M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M13.876 9.853c.519 0 .954.05 1.304.148.355.1.62.263.796.49.18.228.271.531.271.91 0 .245-.047.464-.14.656a1.198 1.198 0 0 1-.402.473 1.62 1.62 0 0 1-.648.254v.043c.262.041.499.117.709.228.216.11.385.268.507.473.123.204.184.47.184.796 0 .379-.088.703-.262.971a1.663 1.663 0 0 1-.753.604c-.32.134-.706.201-1.155.201h-2.196V9.853h1.785Zm.157 2.66c.537 0 .905-.085 1.103-.254.198-.175.297-.432.297-.77 0-.344-.122-.59-.367-.735-.24-.152-.624-.228-1.155-.228h-1.033v1.986h1.155Zm-1.155.656v2.266h1.26c.555 0 .94-.108 1.155-.324.216-.216.324-.498.324-.849 0-.221-.05-.414-.149-.577-.093-.163-.254-.289-.481-.376-.222-.093-.525-.14-.91-.14h-1.199Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"thumbstick-left":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.5,d:`M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M12.642 17.325v-6.247h.787v5.547h2.73v.7h-3.517ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}})]}),"thumbstick-up-left":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:1.5,d:`M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.75,d:`M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"thumbstick-down-left":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:1.5,d:`M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.75,d:`M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"thumbstick-right-left":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:1.5,d:`M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.75,d:`M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"thumbstick-left-left":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:1.5,d:`M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.75,d:`M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"pose-left":()=>(0,j.jsx)(Vs,{icon:sc,$reverse:!0}),"pinch-left":()=>(0,j.jsx)(Vs,{icon:hc,$reverse:!0}),"thumbstick-right":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.7,d:`M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}})]}),"thumbstick-up-right":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:1.5,d:`M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.75,d:`M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"thumbstick-down-right":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:1.5,d:`M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.75,d:`M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"thumbstick-right-right":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:1.5,d:`M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.75,d:`M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"thumbstick-left-right":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:1.5,d:`M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.75,d:`M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"trigger-left":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.7,d:`M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M10.209 15.662V9.415h.787v5.548h2.73v.7H10.21Zm6.395 0h-.787v-5.556h-1.952v-.691h4.682v.691h-1.943v5.556Z`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}})]}),"trigger-right":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.7,d:`M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M11.42 9.415c.52 0 .945.067 1.277.201.339.129.59.324.753.587.163.262.245.592.245.988 0 .333-.061.61-.184.832-.122.221-.28.4-.472.533-.187.129-.385.23-.595.307l1.715 2.8h-.92l-1.513-2.582h-1.242v2.582h-.788V9.415h1.724Zm-.044.683h-.892v2.318h.936c.338 0 .615-.043.831-.131a.956.956 0 0 0 .473-.402c.105-.175.157-.394.157-.657 0-.274-.055-.493-.166-.656a.905.905 0 0 0-.49-.359c-.222-.075-.505-.114-.849-.114Zm5.74 5.564h-.787v-5.556h-1.951v-.691h4.681v.691h-1.942v5.556Z`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}})]}),"squeeze-left":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M7.525 7.875c-2.283 1.22-3.82 3.507-3.82 6.125s1.537 4.904 3.82 6.125C4.405 19.425 2.1 16.948 2.1 14s2.306-5.425 5.425-6.125Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.7,d:`M24.702 10.954a2.187 2.187 0 0 0-2.095-2.817H11.025a5.863 5.863 0 0 0 0 11.726h9.377c.966 0 1.818-.634 2.095-1.56l2.205-7.35Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M10.594 17.15v-6.248h.788v5.548h2.73v.7h-3.518Zm7.13-3.299h2.162v3.063c-.338.11-.68.192-1.024.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.567 2.567 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.55 4.55 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018.146-.017.277-.037.394-.06.123-.024.236-.047.341-.07V14.55h-1.373v-.7Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"squeeze-right":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M20.441 7.875c2.283 1.22 3.82 3.507 3.82 6.125s-1.537 4.904-3.82 6.125c3.12-.7 5.425-3.177 5.425-6.125s-2.305-5.425-5.425-6.125Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`path`,{stroke:`#fff`,strokeWidth:.7,d:`M3.264 10.954a2.187 2.187 0 0 1 2.095-2.817h11.582a5.862 5.862 0 0 1 0 11.726H7.564a2.188 2.188 0 0 1-2.095-1.56l-2.205-7.35Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M9.497 10.902c.519 0 .945.068 1.277.202.339.128.59.323.753.586.163.262.245.592.245.989 0 .332-.062.61-.184.83-.122.223-.28.4-.472.535-.187.128-.386.23-.595.306l1.714 2.8h-.918l-1.514-2.581H8.56v2.58h-.787v-6.247h1.724Zm-.044.683H8.56v2.319h.937c.338 0 .615-.044.831-.132a.956.956 0 0 0 .473-.402c.104-.175.157-.394.157-.656 0-.274-.055-.493-.166-.657a.905.905 0 0 0-.49-.358c-.222-.076-.505-.114-.849-.114Zm6.476 2.266h2.16v3.063c-.337.11-.679.192-1.023.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.568 2.568 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.551 4.551 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018a5.17 5.17 0 0 0 .394-.06c.123-.024.236-.047.341-.07V14.55H15.93v-.7Z`,style:{fill:`#fff`,fillOpacity:1}})]}),"thumbrest-left":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,d:`m20.01 15.768-4.242 4.242a5.5 5.5 0 1 1-7.778-7.778l4.242-4.242a5.5 5.5 0 1 1 7.778 7.778Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M11.172 16.828a1 1 0 0 0 1.414 0L15.414 14l.707.707-2.828 2.828a2 2 0 1 1-2.829-2.828l.708.707a1 1 0 0 0 0 1.414ZM12.586 14l2.828-2.829a1 1 0 1 1 1.414 1.415l.708.707a2 2 0 0 0-2.829-2.829l-2.828 2.829.707.707Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M15.414 16.828 18.243 14a3 3 0 0 0-2.289-5.117l-.869-.869a4 4 0 0 1 3.864 6.693l-2.828 2.828-.707-.707Zm-.707 2.122a4 4 0 1 1-5.657-5.657l4.243-4.243.707.707L9.757 14A3 3 0 1 0 14 18.242l.707.708Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}})]}),"thumbrest-right":({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:V,height:V,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`path`,{stroke:`#fff`,d:`m15.768 7.99 4.242 4.242a5.5 5.5 0 1 1-7.778 7.778L7.99 15.768a5.5 5.5 0 1 1 7.778-7.778Z`,style:{stroke:`#fff`,strokeOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M16.828 16.828a1 1 0 0 0 0-1.414L14 12.586l.707-.707 2.828 2.828a2 2 0 1 1-2.828 2.828l.707-.707a1 1 0 0 0 1.414 0ZM14 15.414l-2.828-2.828a1 1 0 0 1 1.414-1.414l.707-.708a2 2 0 0 0-2.829 2.829l2.829 2.828.707-.707Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,d:`M16.828 12.586 14 9.757a3 3 0 0 0-5.117 2.289l-.869.869a4 4 0 0 1 6.693-3.864l2.828 2.828-.707.707Zm2.122.707a4 4 0 1 1-5.657 5.657L9.05 14.707 9.757 14 14 18.243A3 3 0 1 0 18.243 14l.707-.707Z`,clipRule:`evenodd`,style:{fill:`#fff`,fillOpacity:1}})]}),"pose-right":()=>(0,j.jsx)(Vs,{icon:sc,$reverse:!1}),"pinch-right":()=>(0,j.jsx)(Vs,{icon:hc,$reverse:!1})},Sc=({buttonName:e,handedness:t})=>{let n=xc[`${e}-${t}`];return n?(0,j.jsx)(n,{}):(0,j.jsx)(`div`,{style:{width:B.height,height:B.height}})},Cc=({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:12,height:16,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`g`,{clipPath:`url(#a)`,children:(0,j.jsx)(`path`,{stroke:`#fff`,d:`M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5`,style:{stroke:`#fff`,strokeOpacity:1}})}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M.5 6.5H6v-6H5C2.237.5.5 2.237.5 5v1.5Z`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`defs`,{children:(0,j.jsx)(`clipPath`,{id:`a`,children:(0,j.jsx)(`path`,{fill:`#fff`,d:`M0 0h12v16H0z`,style:{fill:`#fff`,fillOpacity:1}})})})]}),wc=({scale:e=1.2})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:12,height:16,fill:`none`,transform:`scale(${e}, ${e})`,children:[(0,j.jsx)(`g`,{clipPath:`url(#a)`,children:(0,j.jsx)(`path`,{stroke:`#fff`,d:`M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5`,style:{stroke:`#fff`,strokeOpacity:1}})}),(0,j.jsx)(`path`,{fill:`#fff`,d:`M11.5 6.5H6v-6h1c2.762 0 4.5 1.737 4.5 4.5v1.5Z`,style:{fill:`#fff`,fillOpacity:1}}),(0,j.jsx)(`defs`,{children:(0,j.jsx)(`clipPath`,{id:`a`,children:(0,j.jsx)(`path`,{fill:`#fff`,d:`M0 0h12v16H0z`,style:{fill:`#fff`,fillOpacity:1}})})})]}),Tc=({size:e=14,color:t=z.textWhite})=>(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 14 14`,fill:`none`,children:(0,j.jsx)(`path`,{stroke:t,strokeWidth:1.5,d:`M7 13.037V5.512m-.324.289 6.3-2.275m-11.952 0 6.3 2.275m.23 6.937 4.233-1.528a1.627 1.627 0 0 0 1.076-1.53V4.396c0-.685-.43-1.297-1.076-1.53L7.553 1.339a1.63 1.63 0 0 0-1.106 0L2.213 2.867a1.627 1.627 0 0 0-1.075 1.53V9.68c0 .686.43 1.298 1.075 1.53l4.234 1.529a1.63 1.63 0 0 0 1.106 0Z`,style:{stroke:t,strokeOpacity:1}})}),Ec=({size:e=14,color:t=z.textWhite})=>(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 14 14`,fill:`none`,children:(0,j.jsx)(`path`,{stroke:t,strokeWidth:1.2,d:`M7 13.037V5.512M3.937 11.9V4.375m6.126 7.525V4.375M6.675 5.8l6.3-2.275m-9.275.962 6.3-2.275M1.024 3.526l6.3 2.275M6.85 9.388l6.3-2.275m-12.302 0 6.3 2.276m-3.15-7.176 6.3 2.276m-2.746 8.248 4.234-1.527a1.627 1.627 0 0 0 1.075-1.53V4.396c0-.685-.43-1.297-1.075-1.53L7.553 1.339a1.63 1.63 0 0 0-1.106 0L2.213 2.867a1.627 1.627 0 0 0-1.076 1.53V9.68c0 .686.43 1.298 1.076 1.53l4.234 1.529a1.63 1.63 0 0 0 1.106 0Z`,style:{stroke:t,strokeOpacity:1}})}),Dc=({size:e=14,color:t=z.textWhite})=>(0,j.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 14 14`,fill:`none`,children:(0,j.jsx)(`path`,{stroke:t,strokeWidth:1.2,d:`M1.225 8.225h11.55M2.1 5.075h9.8m-7 7L5.6 2.1m3.5 9.975L8.4 2.1m-5.708 9.712h8.617a1.75 1.75 0 0 0 1.696-2.183l-1.567-6.125a1.75 1.75 0 0 0-1.695-1.317H4.258c-.8 0-1.498.542-1.696 1.317L.996 9.629a1.75 1.75 0 0 0 1.696 2.183Z`,style:{stroke:t,strokeOpacity:1}})}),Oc=({size:e=14,color:t=z.textWhite})=>(0,j.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 14 14`,fill:`none`,children:[(0,j.jsx)(`path`,{fill:t,d:`M10.5 8.367a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z`,style:{fill:t,fillOpacity:1}}),(0,j.jsx)(`path`,{fill:t,fillRule:`evenodd`,d:`M0 5.8A2.8 2.8 0 0 1 2.8 3h8.4A2.8 2.8 0 0 1 14 5.8v2.8a2.8 2.8 0 0 1-2.8 2.8H9.526c-.619 0-1.184-.35-1.46-.903l-.108-.214a.933.933 0 0 0-.835-.516h-.246c-.354 0-.677.2-.835.516l-.107.214a1.633 1.633 0 0 1-1.461.903H2.8A2.8 2.8 0 0 1 0 8.6V5.8Zm4.9 1.167a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Zm8.367-.768a.268.268 0 0 0 .076-.292 2.942 2.942 0 0 0-.187-.407l-.055-.096a3.012 3.012 0 0 0-.262-.37.27.27 0 0 0-.29-.08l-.66.21a2.279 2.279 0 0 0-.522-.302l-.148-.676a.268.268 0 0 0-.215-.211 3.062 3.062 0 0 0-1.008.001.268.268 0 0 0-.215.21l-.148.677a2.28 2.28 0 0 0-.522.301l-.66-.21a.268.268 0 0 0-.29.081c-.096.116-.184.24-.262.37l-.056.096c-.072.13-.135.265-.187.406a.268.268 0 0 0 .076.292l.513.467a2.293 2.293 0 0 0 0 .603l-.513.467a.268.268 0 0 0-.076.291c.052.141.115.276.187.407l.056.096c.078.13.166.253.262.37a.27.27 0 0 0 .29.08l.66-.211c.158.122.333.224.52.3l.149.677a.268.268 0 0 0 .215.211 3.06 3.06 0 0 0 1.007 0 .268.268 0 0 0 .216-.21l.148-.677a2.28 2.28 0 0 0 .521-.301l.66.21c.105.033.22.004.29-.08.097-.117.184-.24.263-.37l.055-.097c.073-.13.135-.265.188-.406a.268.268 0 0 0-.076-.292l-.513-.466a2.299 2.299 0 0 0 0-.602l.513-.467Z`,clipRule:`evenodd`,style:{fill:t,fillOpacity:1}})]}),kc={KeyA:`A`,KeyB:`B`,KeyC:`C`,KeyD:`D`,KeyE:`E`,KeyF:`F`,KeyG:`G`,KeyH:`H`,KeyI:`I`,KeyJ:`J`,KeyK:`K`,KeyL:`L`,KeyM:`M`,KeyN:`N`,KeyO:`O`,KeyP:`P`,KeyQ:`Q`,KeyR:`R`,KeyS:`S`,KeyT:`T`,KeyU:`U`,KeyV:`V`,KeyW:`W`,KeyX:`X`,KeyY:`Y`,KeyZ:`Z`,Digit0:`0`,Digit1:`1`,Digit2:`2`,Digit3:`3`,Digit4:`4`,Digit5:`5`,Digit6:`6`,Digit7:`7`,Digit8:`8`,Digit9:`9`,Tab:(0,j.jsx)(Bs,{icon:nc}),Backspace:(0,j.jsx)(Bs,{icon:dc}),Enter:(0,j.jsx)(Bs,{style:{transform:`rotate(90deg)`},icon:vc}),ShiftLeft:(0,j.jsx)(Bs,{icon:pc}),ShiftRight:(0,j.jsx)(Bs,{icon:pc}),Space:` `,ArrowUp:(0,j.jsx)(Bs,{icon:rc}),ArrowDown:(0,j.jsx)(Bs,{icon:uc}),ArrowLeft:(0,j.jsx)(Bs,{icon:Zs}),ArrowRight:(0,j.jsx)(Bs,{icon:Xs}),Semicolon:`;`,Equal:`=`,Comma:`,`,Minus:`-`,Period:`.`,Slash:`/`,Backquote:"`",BracketLeft:`[`,Backslash:`\\`,BracketRight:`]`,Quote:`'`,MouseLeft:(0,j.jsx)(Cc,{}),MouseRight:(0,j.jsx)(wc,{})},Ac={left:{"thumbstick-up":`KeyW`,"thumbstick-down":`KeyS`,"thumbstick-left":`KeyA`,"thumbstick-right":`KeyD`,thumbstick:`KeyR`,"x-button":`KeyX`,"y-button":`KeyZ`,trigger:`KeyQ`,squeeze:`KeyE`,pinch:`MouseLeft`,pose:`KeyF`},right:{"thumbstick-up":`ArrowUp`,"thumbstick-down":`ArrowDown`,"thumbstick-left":`ArrowLeft`,"thumbstick-right":`ArrowRight`,thumbstick:`Slash`,"a-button":`Enter`,"b-button":`ShiftRight`,trigger:`MouseLeft`,squeeze:`MouseRight`,pinch:`MouseRight`,pose:`Backslash`}},jc=re(e=>({keyMap:Ac,bindKey:(t,n,r=`Unmapped`)=>e(e=>({keyMap:{...e.keyMap,[t]:{...e.keyMap[t],[n]:r}}}))})),Mc=Ms.div`
	display: flex;
	height: ${B.height};
	align-items: center;
	justify-content: space-between;
	margin-bottom: ${B.gap};

	&:last-child {
		margin-bottom: 0;
	}
`,Nc=({handedness:e,actions:t})=>{let{keyMap:n,bindKey:r}=jc(),[i,a]=(0,A.useState)(null),o=e=>{a({action:e})};return(0,A.useEffect)(()=>{let t=t=>{i&&kc[t.code]&&(r(e,i.action,t.code),a(null))},n=t=>{if(i){let n=t.button===0?`MouseLeft`:t.button===2?`MouseRight`:null;n&&kc[n]&&(r(e,i.action,n),a(null))}},o=e=>{e.preventDefault()};return window.addEventListener(`keydown`,t),window.addEventListener(`mousedown`,n),window.addEventListener(`contextmenu`,o),()=>{window.removeEventListener(`keydown`,t),window.removeEventListener(`mousedown`,n),window.removeEventListener(`contextmenu`,o)}},[i]),Object.keys(n[e]).filter(e=>t.includes(e)).map(t=>(0,j.jsxs)(Mc,{children:[(0,j.jsx)(Sc,{buttonName:t===`up`?`thumbstick`:t,handedness:e}),(0,j.jsxs)(Rs,{$reverse:!1,children:[(0,j.jsx)(Ns,{$reverse:!1,style:{width:`100px`,background:i&&i.action===t?z.gradientLightGreyTranslucent:z.gradientGreyTranslucent},onClick:()=>o(t),onContextMenu:e=>e.preventDefault(),children:n[e][t]}),(0,j.jsx)(Ns,{style:{width:B.widthShort},$reverse:!1,onClick:()=>r(e,t),onContextMenu:e=>e.preventDefault(),children:(0,j.jsx)(Di,{icon:tc})})]})]},t))},Pc=({xrController:e,buttonId:t,pointerLocked:n,mappedKey:r})=>{let[i,a]=(0,A.useState)(!1),[o,s]=(0,A.useState)(!1),[c,l]=(0,A.useState)(!1),[u,d]=(0,A.useState)(0),f=e.inputSource.handedness;return(0,A.useEffect)(()=>{let i=n=>{n.code===r&&(e.updateButtonValue(t,1),l(!0))},a=n=>{n.code===r&&(e.updateButtonValue(t,0),l(!1))},o=n=>{(r===`MouseLeft`&&n.button===0||r===`MouseRight`&&n.button===2)&&(e.updateButtonValue(t,1),l(!0))},s=n=>{(r===`MouseLeft`&&n.button===0||r===`MouseRight`&&n.button===2)&&(e.updateButtonValue(t,0),l(!1))};return n?r===`MouseLeft`||r===`MouseRight`?(window.addEventListener(`mousedown`,o),window.addEventListener(`mouseup`,s)):(window.addEventListener(`keydown`,i),window.addEventListener(`keyup`,a)):r===`MouseLeft`||r===`MouseRight`?(window.removeEventListener(`mousedown`,o),window.removeEventListener(`mouseup`,s)):(window.removeEventListener(`keydown`,i),window.removeEventListener(`keyup`,a)),()=>{r===`MouseLeft`||r===`MouseRight`?(window.removeEventListener(`mousedown`,o),window.removeEventListener(`mouseup`,s)):(window.removeEventListener(`keydown`,i),window.removeEventListener(`keyup`,a))}},[r,n,t,e]),(0,j.jsxs)(Ls,{$reverse:f===`right`,children:[(0,j.jsx)(Sc,{buttonName:t,handedness:f}),(0,j.jsx)(Rs,{$reverse:f===`right`,children:n?(0,j.jsx)(Is,{$pressed:c,children:kc[r]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Ns,{$reverse:f===`right`,style:{background:o?z.gradientLightGreyTranslucent:z.gradientGreyTranslucent,width:B.widthLong},onClick:()=>{s(!0),e.updateButtonValue(t,1),setTimeout(()=>{s(!1),e.updateButtonValue(t,0)},250)},children:`Press`}),(0,j.jsx)(Ns,{title:`Click to toggle touch state`,$reverse:f===`right`,style:{background:i?z.gradientLightGreyTranslucent:z.gradientGreyTranslucent,width:B.widthShort},onClick:()=>{a(!i),e.updateButtonTouch(t,!i)},children:(0,j.jsx)(Bs,{icon:Ys})}),(0,j.jsx)(zs,{$reverse:f===`right`,value:u,onChange:n=>{let r=Number(n.target.value);d(r),e.updateButtonValue(t,r/100)},min:`0`,max:`100`})]})})]})},Fc=({xrController:e,buttonId:t,pointerLocked:n,mappedKey:r})=>{let[i,a]=(0,A.useState)(!1),[o,s]=(0,A.useState)(!1),[c,l]=(0,A.useState)(!1),[u,d]=(0,A.useState)(!1),f=e.inputSource.handedness;return(0,A.useEffect)(()=>{let i=n=>{n.code===r&&(e.updateButtonValue(t,1),d(!0))},a=n=>{n.code===r&&(e.updateButtonValue(t,0),d(!1))};return n?(window.addEventListener(`keydown`,i),window.addEventListener(`keyup`,a)):(window.removeEventListener(`keydown`,i),window.removeEventListener(`keyup`,a)),()=>{window.removeEventListener(`keydown`,i),window.removeEventListener(`keyup`,a)}},[r,n,t,e]),(0,j.jsxs)(Ls,{$reverse:f===`right`,children:[(0,j.jsx)(Sc,{buttonName:t,handedness:f}),(0,j.jsx)(Rs,{$reverse:f===`right`,children:n?(0,j.jsx)(Is,{$pressed:u,children:kc[r]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Ns,{$reverse:f===`right`,style:{background:c?z.gradientLightGreyTranslucent:z.gradientGreyTranslucent,width:B.widthLong},onClick:()=>{l(!0),e.updateButtonValue(t,1),setTimeout(()=>{l(!1),e.updateButtonValue(t,0)},250)},children:`Press`}),(0,j.jsx)(Ns,{title:`Click to toggle touch state`,$reverse:f===`right`,style:{background:i?z.gradientLightGreyTranslucent:z.gradientGreyTranslucent,width:B.widthShort},onClick:()=>{a(!i),e.updateButtonTouch(t,!i)},children:(0,j.jsx)(Bs,{icon:Ys})}),(0,j.jsx)(Ns,{$reverse:f===`right`,style:{background:o?z.gradientLightGreyTranslucent:z.gradientGreyTranslucent,width:B.widthLong},onClick:()=>{s(!o),e.updateButtonValue(t,+!o)},children:`Hold`})]})})]})},Ic=Ms.div`
	display: flex;
	align-items: center;
	margin-bottom: ${B.gap};
`,Lc=`calc(2 * ${B.height} + ${B.gap})`,Rc=Ms.button`
	background: ${z.gradientGreyTranslucent};
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: ${Lc};
	height: ${Lc};
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
`,zc=Ms.div`
	position: absolute;
	font-size: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${z.textWhite};
	cursor: pointer;
	pointer-events: auto;
`,Bc=Ms(Ns)`
	width: ${B.widthLong};
	font-size: ${B.fontSize};

	${({$reverse:e})=>e?`
    &:first-child {
      border-radius: ${B.radiusLast};
    }

    &:last-child {
      border-radius: ${B.radiusFirst};
    }
  `:`
    &:first-child {
      border-radius: ${B.radiusFirst};
    }

    &:last-child {
      border-radius: ${B.radiusLast};
    }
  `}
`,Vc=({xrController:e,pointerLocked:t,buttonId:n,mappedKeyUp:r,mappedKeyDown:i,mappedKeyLeft:a,mappedKeyRight:o,mappedKeyPressed:s})=>{let c=(0,A.useRef)(null),[l,u]=(0,A.useState)(!1),[d,f]=(0,A.useState)(!1),[p,m]=(0,A.useState)(!1),[h,g]=(0,A.useState)(!1),[_,v]=(0,A.useState)({x:0,y:0}),[y,b]=(0,A.useState)({up:!1,down:!1,left:!1,right:!1,pressed:!1}),x=e.inputSource.handedness,S=()=>{if(c.current){let e=c.current.getBoundingClientRect();v({x:e.left+e.width/2,y:e.top+e.height/2}),u(!0)}},C=t=>{if(l&&c.current){let r=t.clientX-_.x,i=t.clientY-_.y,a=Math.sqrt(r*r+i*i),o,s;if(a<12)o=r,s=i;else{let e=Math.atan2(i,r);o=Math.cos(e)*12,s=Math.sin(e)*12}c.current.style.transform=`translate(${o}px, ${s}px)`;let l=o/12,u=s/12;e.updateAxes(n,l,u)}},w=()=>{u(!1),c.current&&(c.current.style.transform=`translate(0, 0)`,e.updateAxes(n,0,0))};return(0,A.useEffect)(()=>{let c=t=>{let c={...y};t.code===r&&(c.up=!0),t.code===i&&(c.down=!0),t.code===a&&(c.left=!0),t.code===o&&(c.right=!0),t.code===s&&(c.pressed=!0,e.updateButtonValue(n,1)),b(c),u(c)},l=t=>{let c={...y};t.code===r&&(c.up=!1),t.code===i&&(c.down=!1),t.code===a&&(c.left=!1),t.code===o&&(c.right=!1),t.code===s&&(c.pressed=!1,e.updateButtonValue(n,0)),b(c),u(c)},u=t=>{let r=!!t.right-+!!t.left,i=!!t.down-+!!t.up,a=Math.sqrt(r*r+i*i);if(a===0){e.updateAxes(n,0,0);return}let o=r/a,s=i/a;e.updateAxes(n,o,s)};return t?(window.addEventListener(`keydown`,c),window.addEventListener(`keyup`,l)):(window.removeEventListener(`keydown`,c),window.removeEventListener(`keyup`,l)),()=>{window.removeEventListener(`keydown`,c),window.removeEventListener(`keyup`,l)}},[r,i,a,o,t,y]),(0,A.useEffect)(()=>(document.addEventListener(`mousemove`,C),document.addEventListener(`mouseup`,w),()=>{document.removeEventListener(`mousemove`,C),document.removeEventListener(`mouseup`,w)}),[l,_]),t?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(Ls,{$reverse:x===`right`,children:[(0,j.jsx)(Sc,{buttonName:`thumbstick`,handedness:e.inputSource.handedness}),(0,j.jsxs)(Rs,{$reverse:x===`right`,children:[(0,j.jsx)(Is,{$pressed:y.up,children:kc[r]}),(0,j.jsx)(Is,{$pressed:y.pressed,children:kc[s]})]})]}),(0,j.jsx)(Ls,{$reverse:x===`right`,style:x===`right`?{marginRight:`2px`}:{marginLeft:`2px`},children:(0,j.jsxs)(Rs,{$reverse:!1,style:{margin:0},children:[(0,j.jsx)(Is,{$pressed:y.left,children:kc[a]}),(0,j.jsx)(Is,{$pressed:y.down,children:kc[i]}),(0,j.jsx)(Is,{$pressed:y.right,children:kc[o]})]})})]}):(0,j.jsx)(Ic,{style:{flexDirection:e.inputSource.handedness===`left`?`row`:`row-reverse`,alignItems:`flex-start`},children:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Sc,{buttonName:`thumbstick`,handedness:e.inputSource.handedness}),(0,j.jsx)(Rc,{style:{margin:`0 5px`},children:(0,j.jsx)(zc,{ref:c,onMouseDown:S,children:(0,j.jsx)(Bs,{icon:yc,$size:50})})}),(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:x===`right`?`start`:`end`},children:[(0,j.jsx)(Ns,{$reverse:x===`right`,style:{background:h?z.gradientLightGreyTranslucent:z.gradientGreyTranslucent,width:`calc(${B.widthLong} + ${B.widthShort} + ${B.gap})`,marginBottom:B.gap,borderRadius:B.radiusSolo},onClick:()=>{g(!0),e.updateButtonValue(n,1),setTimeout(()=>{g(!1),e.updateButtonValue(n,0)},250)},children:`Press`}),(0,j.jsxs)(Rs,{$reverse:x===`right`,children:[(0,j.jsx)(Bc,{title:`Click to toggle touch state`,$reverse:e.inputSource.handedness!==`left`,style:{background:d?z.gradientLightGreyTranslucent:z.gradientGreyTranslucent,width:B.widthShort},onClick:()=>{f(!d),e.updateButtonTouch(n,!d)},children:(0,j.jsx)(Bs,{icon:Ys})}),(0,j.jsx)(Bc,{$reverse:e.inputSource.handedness!==`left`,style:{background:p?z.gradientLightGreyTranslucent:z.gradientGreyTranslucent,width:B.widthLong},onClick:()=>{m(!p),e.updateButtonValue(n,+!p)},children:`Hold`})]})]})]})})};function Hc(e,t){let n=10**t;return Math.round(e*n)/n}var Uc=Ms.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	font-size: 12px;
`,Wc=({vector:e,label:t=``,icon:n,multiplier:r=1,precision:i=2,onValidInput:a=()=>{},marginBottom:o=`0`})=>{let[s,c]=(0,A.useState)({x:(e.x/r).toFixed(i),y:(e.y/r).toFixed(i),z:(e.z/r).toFixed(i)}),l=(0,A.useRef)({x:Hc(e.x/r,i),y:Hc(e.y/r,i),z:Hc(e.z/r,i)}),u=(0,A.useRef)(null),d=()=>{let t={x:Hc(e.x/r,i),y:Hc(e.y/r,i),z:Hc(e.z/r,i)},{x:n,y:a,z:o}=l.current;(t.x!==n||t.y!==a||t.z!==o)&&(l.current=t,c({x:t.x.toFixed(i),y:t.y.toFixed(i),z:t.z.toFixed(i)})),u.current=requestAnimationFrame(d)};(0,A.useEffect)(()=>(u.current=requestAnimationFrame(d),()=>{u.current&&cancelAnimationFrame(u.current)}),[e,r,i]);let f=t=>n=>{let i=n.target.value,o=parseFloat(i);c(e=>({...e,[t]:i})),isNaN(o)||(l.current[t]=o,e[t]=o*r,a())};return(0,j.jsxs)(Uc,{style:{marginBottom:o},children:[n?(0,j.jsx)(Bs,{icon:n,style:{marginRight:`5px`}}):(0,j.jsx)(`span`,{style:{marginRight:`5px`},children:t}),(0,j.jsx)(Gs,{children:[`x`,`y`,`z`].map(e=>(0,j.jsxs)(`div`,{style:{position:`relative`,display:`inline-block`,height:`25px`},children:[(0,j.jsx)(Ks,{value:s[e],onChange:f(e),className:parseFloat(s[e])===l.current[e]?void 0:`invalid`}),(0,j.jsx)(qs,{children:e.toUpperCase()})]},`${t}-${e}`))})]})};function Gc(e){let t=new Set;for(let n of e.axes)n&&n.id&&t.add(n.id);let n=e.buttons.filter(e=>e!==null).map(e=>({id:e.id,type:e.type,hasAxes:t.has(e.id)}));return n.sort((e,t)=>e.hasAxes&&!t.hasAxes?-1:!e.hasAxes&&t.hasAxes?1:0),n}var Kc=({controller:e,handle:t,handedness:n,pointerLocked:r})=>{let{keyMap:i}=jc(),[a,o]=A.useState(e.connected),[s,c]=A.useState(!1),l=Gc(e.gamepadConfig),u=l.flatMap(e=>e.hasAxes?[`${e.id}-left`,`${e.id}-right`,`${e.id}-up`,`${e.id}-down`,e.id]:e.id);return A.useEffect(()=>{r&&c(!1)},[r]),(0,j.jsxs)(Hs,{style:n===`left`?{left:`8px`,bottom:`8px`}:{right:`8px`,bottom:`8px`},children:[!r&&(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,justifyContent:`space-between`,alignItems:`center`},children:[(0,j.jsxs)(`div`,{style:{fontSize:`13px`,display:`flex`,flexDirection:`row`,alignItems:`center`},children:[(0,j.jsx)(Bs,{icon:Qs,style:{marginRight:`5px`}}),`Controller\xA0`,(0,j.jsxs)(`span`,{style:{fontWeight:`bold`},children:[`[`,n===`left`?`L`:`R`,`]`]})]}),(0,j.jsx)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:`1px`},children:a?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Ws,{title:`Click to ${s?`close`:`change`} key bindings`,onClick:()=>{c(!s)},children:(0,j.jsx)(Bs,{icon:lc})}),(0,j.jsx)(Ws,{title:`Click to disconnect ${n} controller`,$isRed:!0,onClick:()=>{e.connected=!1,o(!1)},children:(0,j.jsx)(Bs,{icon:yc})})]}):(0,j.jsx)(Ws,{title:`Click to reconnect ${n} controller`,onClick:()=>{e.connected=!0,o(!0)},style:{marginLeft:`5px`},children:(0,j.jsx)(Bs,{icon:ec})})})]})}),a&&!r&&(0,j.jsxs)(j.Fragment,{children:[!s&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Us,{}),(0,j.jsx)(Wc,{vector:t.position,label:`Position`,marginBottom:B.gap}),(0,j.jsx)(Wc,{vector:t.rotation,label:`Rotation`})]}),(0,j.jsx)(Us,{})]}),a&&(s?(0,j.jsx)(Nc,{handedness:n,actions:u}):l.map(t=>{let a=i[n];return t.hasAxes?(0,j.jsx)(Vc,{xrController:e,pointerLocked:r,buttonId:t.id,mappedKeyUp:i[n][`${t.id}-up`],mappedKeyDown:a[`${t.id}-down`],mappedKeyLeft:a[`${t.id}-left`],mappedKeyRight:a[`${t.id}-right`],mappedKeyPressed:a[t.id]},t.id):t.type===`analog`?(0,j.jsx)(Pc,{xrController:e,buttonId:t.id,mappedKey:a[t.id],pointerLocked:r},t.id):(0,j.jsx)(Fc,{xrController:e,buttonId:t.id,mappedKey:a[t.id],pointerLocked:r},t.id)}))]},n)},qc=`calc(${B.widthLong} + ${B.widthShort} + ${B.gap})`,Jc=({hand:e,pointerLocked:t,mappedKey:n})=>{let[r,i]=(0,A.useState)(!1),[a,o]=(0,A.useState)(!1),[s,c]=(0,A.useState)(0),l=e.inputSource.handedness;return(0,A.useEffect)(()=>{let r=t=>{t.code===n&&(e.updatePinchValue(1),o(!0))},i=t=>{t.code===n&&(e.updatePinchValue(0),o(!1))},a=t=>{(n===`MouseLeft`&&t.button===0||n===`MouseRight`&&t.button===2)&&(e.updatePinchValue(1),o(!0))},s=t=>{(n===`MouseLeft`&&t.button===0||n===`MouseRight`&&t.button===2)&&(e.updatePinchValue(0),o(!1))};return t?n===`MouseLeft`||n===`MouseRight`?(window.addEventListener(`mousedown`,a),window.addEventListener(`mouseup`,s)):(window.addEventListener(`keydown`,r),window.addEventListener(`keyup`,i)):n===`MouseLeft`||n===`MouseRight`?(window.removeEventListener(`mousedown`,a),window.removeEventListener(`mouseup`,s)):(window.removeEventListener(`keydown`,r),window.removeEventListener(`keyup`,i)),()=>{n===`MouseLeft`||n===`MouseRight`?(window.removeEventListener(`mousedown`,a),window.removeEventListener(`mouseup`,s)):(window.removeEventListener(`keydown`,r),window.removeEventListener(`keyup`,i))}},[n,t,e]),(0,j.jsxs)(Ls,{$reverse:l===`right`,children:[(0,j.jsx)(Vs,{icon:hc,$reverse:l===`left`}),(0,j.jsx)(Rs,{$reverse:l===`right`,children:t?(0,j.jsx)(Is,{$pressed:a,children:kc[n]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Ns,{$reverse:l===`right`,style:{background:r?z.gradientLightGreyTranslucent:z.gradientGreyTranslucent,width:B.widthLong},onClick:()=>{i(!0),e.updatePinchValue(1),setTimeout(()=>{i(!1),e.updatePinchValue(0)},250)},children:`Pinch`}),(0,j.jsx)(zs,{$reverse:l===`right`,value:s,onChange:t=>{let n=Number(t.target.value);c(n),e.updatePinchValue(n/100)},style:{width:qc},min:`0`,max:`100`})]})})]})},Yc=[`default`,`point`],Xc=`calc(2 * ${B.widthLong} - ${B.widthShort})`,Zc=({hand:e,pointerLocked:t,mappedKey:n})=>{let[r,i]=(0,A.useState)(e.poseId),[a,o]=(0,A.useState)(!1),s=e.inputSource.handedness,c=t=>{let n=(Yc.indexOf(e.poseId)+Yc.length+t)%Yc.length;i(Yc[n]),e.poseId=Yc[n]},l=s===`right`;return(0,A.useEffect)(()=>{let e=e=>{e.code===n&&(c(1),o(!0))},r=e=>{e.code===n&&o(!1)};return t?(window.addEventListener(`keydown`,e),window.addEventListener(`keyup`,r)):(window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,r)),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`keyup`,r)}},[n,t,e]),(0,j.jsxs)(Ls,{$reverse:l,children:[(0,j.jsx)(Vs,{icon:sc,$reverse:s===`left`}),(0,j.jsx)(Rs,{$reverse:l,children:t?(0,j.jsx)(Is,{$pressed:a,children:kc[n]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Ns,{$reverse:l,style:{width:B.widthShort},onClick:()=>{c(l?1:-1)},children:(0,j.jsx)(Bs,{icon:l?gc:mc})}),(0,j.jsxs)(Ns,{$reverse:l,style:{width:Xc},disabled:!0,children:[`Pose: `,r]}),(0,j.jsx)(Ns,{$reverse:l,style:{width:B.widthShort},onClick:()=>{c(l?-1:1)},children:(0,j.jsx)(Bs,{icon:l?mc:gc})})]})})]})},Qc=({hand:e,handle:t,handedness:n,pointerLocked:r})=>{let{keyMap:i}=jc(),[a,o]=A.useState(e.connected),[s,c]=A.useState(!1);return A.useEffect(()=>{r&&c(!1)},[r]),(0,j.jsxs)(Hs,{style:n===`left`?{left:`8px`,bottom:`8px`}:{right:`8px`,bottom:`8px`},children:[!r&&(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,justifyContent:`space-between`,alignItems:`center`},children:[(0,j.jsxs)(`div`,{style:{fontSize:`13px`,display:`flex`,flexDirection:`row`,alignItems:`center`},children:[(0,j.jsx)(Bs,{icon:$s,$reverse:n===`left`,style:{marginRight:`5px`}}),`Hand\xA0`,(0,j.jsxs)(`span`,{style:{fontWeight:`bold`},children:[`[`,n===`left`?`L`:`R`,`]`]})]}),(0,j.jsx)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:`1px`},children:a?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Ws,{title:`Click to ${s?`close`:`change`} key bindings`,onClick:()=>{c(!s)},children:(0,j.jsx)(Bs,{icon:lc})}),(0,j.jsx)(Ws,{title:`Click to disconnect ${n} controller`,$isRed:!0,onClick:()=>{e.connected=!1,o(!1)},children:(0,j.jsx)(Bs,{icon:yc})})]}):(0,j.jsx)(Ws,{title:`Click to reconnect ${n} controller`,onClick:()=>{e.connected=!0,o(!0)},style:{marginLeft:`5px`},children:(0,j.jsx)(Bs,{icon:ec})})})]})}),a&&!r&&(0,j.jsxs)(j.Fragment,{children:[!s&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Us,{}),(0,j.jsx)(Wc,{vector:t.position,label:`Position`,marginBottom:B.gap}),(0,j.jsx)(Wc,{vector:t.rotation,label:`Rotation`})]}),(0,j.jsx)(Us,{})]}),a&&(s?(0,j.jsx)(Nc,{handedness:n,actions:[`pose`,`pinch`]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Zc,{hand:e,pointerLocked:r,mappedKey:i[n].pose}),(0,j.jsx)(Jc,{hand:e,pointerLocked:r,mappedKey:i[n].pinch})]}))]},n)},$c=re(e=>({inputMode:`controller`,setInputMode:t=>e(()=>({inputMode:t}))})),el=({xrDevice:e,inputLayer:t,pointerLocked:n})=>{let{inputMode:r}=$c();return(0,j.jsx)(j.Fragment,{children:r===`controller`?Object.entries(e.controllers).map(([e,r])=>(0,j.jsx)(Kc,{controller:r,handle:t.transformHandles.get(e),handedness:e,pointerLocked:n},`controller-${e}`)):Object.entries(e.hands).map(([e,r])=>(0,j.jsx)(Qc,{hand:r,handle:t.transformHandles.get(e),handedness:e,pointerLocked:n},`hand-${e}`))})},tl=Ms.td`
	text-align: right;
	color: ${z.textWhite};
	padding: 0 8px 0 0;
	font-weight: bold;
`,nl=Ms.td`
	text-align: left;
	color: ${z.textGrey};
	padding: 0;
`,rl=[`meeting_room`,`living_room`,`music_room`,`office_large`,`office_small`],il=re(e=>({infoPanelOpen:!1,envDropDownOpen:!1,setInfoPanelOpen:t=>e(()=>({infoPanelOpen:t})),setEnvDropDownOpen:t=>e(()=>({envDropDownOpen:t}))}));function al(e){return e.split(`_`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}var ol=({xrDevice:e,inputLayer:t})=>{let[n,r]=A.useState(!!e.sem?.planesVisible),[i,a]=A.useState(!!e.sem?.boundingBoxesVisible),[o,s]=A.useState(!!e.sem?.meshesVisible),{inputMode:c,setInputMode:l}=$c(),{infoPanelOpen:u,setInfoPanelOpen:d,envDropDownOpen:f,setEnvDropDownOpen:p}=il();return(0,j.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,flexDirection:`row`,alignItems:`center`,gap:`6px`,padding:`8px`},children:[(0,j.jsx)(Ps,{children:(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:`1px`},children:[(0,j.jsx)(Fs,{title:`Click to reset device transforms`,onClick:()=>{t.resetDeviceTransforms()},children:(0,j.jsx)(Bs,{icon:ic,$size:16})}),(0,j.jsx)(Fs,{title:`Click to activate play mode`,onClick:()=>{t.lockPointer(),p(!1),d(!1)},children:(0,j.jsx)(Bs,{icon:ac,$size:16})}),(0,j.jsx)(Fs,{title:`Click to toggle input mode`,onClick:()=>{c===`controller`?(l(`hand`),e.primaryInputMode=`hand`):(l(`controller`),e.primaryInputMode=`controller`)},children:(0,j.jsx)(Bs,{icon:c===`controller`?Qs:$s,$size:16})}),e.sem&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Us,{$horizontal:!1}),(0,j.jsx)(Fs,{title:`Click to select/change emulated environment`,onClick:()=>p(!f),children:(0,j.jsx)(Bs,{icon:oc,$size:16})}),(0,j.jsx)(Fs,{title:`Click to toggle visibility of planes`,onClick:()=>{e.sem.planesVisible=!n,r(!n)},children:(0,j.jsx)(Dc,{size:16,color:n?z.textWhite:z.textGrey})}),(0,j.jsx)(Fs,{title:`Click to toggle visibility of bounding boxes`,onClick:()=>{e.sem.boundingBoxesVisible=!i,a(!i)},children:(0,j.jsx)(Tc,{size:16,color:i?z.textWhite:z.textGrey})}),(0,j.jsx)(Fs,{title:`Click to toggle visibility of meshes`,onClick:()=>{e.sem.meshesVisible=!o,s(!o)},children:(0,j.jsx)(Ec,{size:16,color:o?z.textWhite:z.textGrey})})]}),(0,j.jsx)(Us,{$horizontal:!1}),(0,j.jsx)(Fs,{title:`Click to exit XR session`,onClick:()=>{e.activeSession?.end()},children:(0,j.jsx)(Bs,{icon:Js,$size:16})})]})}),(0,j.jsx)(Ps,{children:(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:`1px`},children:[(0,j.jsx)(Fs,{title:`About IWER`,onClick:()=>{d(!u)},children:(0,j.jsx)(Oc,{size:16})}),(0,j.jsx)(Fs,{title:`Report issues`,onClick:()=>{window.open(`https://github.com/meta-quest/immersive-web-emulation-runtime/issues`,`_blank`)},children:(0,j.jsx)(Bs,{icon:fc,$size:16})})]})}),u&&(0,j.jsxs)(Hs,{style:{top:`50vh`,left:`50vw`,transform:`translate(-50%, -50%)`,maxWidth:`240px`,gap:`4px`},children:[(0,j.jsx)(`div`,{style:{display:`flex`,justifyContent:`end`},children:(0,j.jsx)(Ws,{$isRed:!0,onClick:()=>{d(!1)},children:(0,j.jsx)(Bs,{icon:yc})})}),(0,j.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,j.jsx)(Oc,{size:100})}),(0,j.jsxs)(`p`,{style:{textAlign:`center`,padding:`0 5px`,margin:`0`},children:[(0,j.jsx)(`b`,{children:`Immersive Web Emulation Runtime`}),` (IWER) is a free, open-source WebXR developer tool created by Meta Platforms, Inc.`]}),(0,j.jsx)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,display:`flex`,justifyContent:`center`,fontSize:`12px`,padding:`8px`},children:(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(tl,{children:`IWER`}),(0,j.jsxs)(nl,{children:[`v`,e.version]})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(tl,{children:`DevUI`}),(0,j.jsxs)(nl,{children:[`v`,e.devui.version]})]}),e.sem&&(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(tl,{children:`SEM`}),(0,j.jsxs)(nl,{children:[`v`,e.sem.version]})]})]})}),(0,j.jsx)(Ns,{style:{borderRadius:B.radiusSolo},onClick:()=>{window.open(`https://github.com/meta-quest/immersive-web-emulation-runtime/blob/main/LICENSE`,`_blank`)},children:`MIT License`}),(0,j.jsx)(Ns,{style:{borderRadius:B.radiusSolo},onClick:()=>{window.open(`https://github.com/meta-quest/immersive-web-emulation-runtime`,`_blank`)},children:`View Source on GitHub`})]}),f&&(0,j.jsx)(Hs,{style:{position:`absolute`,top:`40px`},children:rl.map(t=>(0,j.jsx)(`div`,{children:(0,j.jsx)(Fs,{style:{fontSize:`12px`,width:`100%`,justifyContent:`start`,borderRadius:`8px`},onClick:()=>{e.sem.loadDefaultEnvironment(t)},children:al(t)})},t))})]})},sl=Ms.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: ${B.gap};
	font-size: 12px;
`,cl=Ms.input.attrs({type:`range`})`
	-webkit-appearance: none;
	appearance: none;
	background: ${z.gradientGrey};
	border: 1px solid transparent;
	height: 25px;
	color: ${z.textWhite};
	width: ${B.widthLong};
	cursor: pointer;
	margin: 0;
	border-radius: 5px;
	padding: 0 10px 0 5px;
	box-sizing: border-box;
	font-size: 10px;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 8px;
		height: 25px;
		background-color: ${z.textWhite};
		border-radius: ${B.radiusMiddle};
	}

	&::-moz-range-thumb {
		width: 8px;
		height: 25px;
		background-color: ${z.textWhite};
		border-radius: ${B.radiusMiddle};
	}

	&::-ms-thumb {
		width: 8px;
		height: 25px;
		background-color: ${z.textWhite};
		border-radius: ${B.radiusMiddle};
	}
`,ll=({xrDevice:e,inputLayer:t,pointerLocked:n})=>{let[r,i]=A.useState(e.fovy);return(0,j.jsxs)(Hs,{style:{left:`8px`,top:`8px`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,justifyContent:`space-between`,alignItems:`center`,height:`20px`},children:[(0,j.jsxs)(`div`,{style:{fontSize:`13px`,display:`flex`,flexDirection:`row`,alignItems:`center`,justifyItems:`start`},children:[(0,j.jsx)(Bs,{icon:_c,style:{marginRight:`5px`}}),(0,j.jsx)(`div`,{style:{alignItems:`end`},children:e.name})]}),(0,j.jsx)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:`1px`}})]}),(0,j.jsx)(Us,{}),(0,j.jsx)(Wc,{vector:t.combinedCameraPosition,icon:cc}),!n&&(0,j.jsxs)(sl,{children:[(0,j.jsx)(Bs,{icon:bc,style:{marginRight:`5px`}}),(0,j.jsxs)(Gs,{children:[(0,j.jsxs)(`div`,{style:{position:`relative`,display:`inline-block`,height:`25px`},children:[(0,j.jsx)(Ks,{type:`text`,value:(r/Math.PI*180).toFixed(0)+`°`,readOnly:!0,style:{width:`73px`}}),(0,j.jsx)(qs,{children:`FOV-Y`})]}),(0,j.jsx)(`div`,{style:{position:`relative`,display:`inline-block`},children:(0,j.jsx)(cl,{value:r,onChange:t=>{let n=Number(t.target.value);i(n),e.fovy=n},min:Math.PI/6,max:Math.PI/1.5,step:Math.PI/48,style:{width:`80px`}})})]})]})]})},ul=1e3,dl=1001,fl=1002,pl=1003,ml=1004,hl=1005,gl=1006,_l=1007,vl=1008,yl=1009,bl=1014,xl=1015,Sl=1016,Cl=1020,wl=1023,Tl=1026,El=1027,Dl=2300,Ol=2301,kl=2302,Al=2400,jl=2401,Ml=2402,Nl=3200,Pl=3201,Fl=`srgb`,Il=`srgb-linear`,Ll=`display-p3`,Rl=`display-p3-linear`,zl=`linear`,Bl=`srgb`,Vl=`rec709`,Hl=7680,Ul=35044,Wl=2e3,Gl=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},Kl=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ql=Math.PI/180,Jl=180/Math.PI;function Yl(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Kl[e&255]+Kl[e>>8&255]+Kl[e>>16&255]+Kl[e>>24&255]+`-`+Kl[t&255]+Kl[t>>8&255]+`-`+Kl[t>>16&15|64]+Kl[t>>24&255]+`-`+Kl[n&63|128]+Kl[n>>8&255]+`-`+Kl[n>>16&255]+Kl[n>>24&255]+Kl[r&255]+Kl[r>>8&255]+Kl[r>>16&255]+Kl[r>>24&255]).toLowerCase()}function Xl(e,t,n){return Math.max(t,Math.min(n,e))}function Zl(e,t){return(e%t+t)%t}function Ql(e,t,n){return(1-n)*e+n*t}function $l(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function eu(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var tu=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xl(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nu=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ru.makeScale(e,t)),this}rotate(e){return this.premultiply(ru.makeRotation(-e)),this}translate(e,t){return this.premultiply(ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ru=new nu;function iu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function au(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ou(){let e=au(`canvas`);return e.style.display=`block`,e}var su={};function cu(e){e in su||(su[e]=!0,console.warn(e))}function lu(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var uu=new nu().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),du=new nu().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fu={[Il]:{transfer:zl,primaries:Vl,toReference:e=>e,fromReference:e=>e},[Fl]:{transfer:Bl,primaries:Vl,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Rl]:{transfer:zl,primaries:`p3`,toReference:e=>e.applyMatrix3(du),fromReference:e=>e.applyMatrix3(uu)},[Ll]:{transfer:Bl,primaries:`p3`,toReference:e=>e.convertSRGBToLinear().applyMatrix3(du),fromReference:e=>e.applyMatrix3(uu).convertLinearToSRGB()}},pu=new Set([Il,Rl]),mu={enabled:!0,_workingColorSpace:Il,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!pu.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=fu[t].toReference,i=fu[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return fu[e].primaries},getTransfer:function(e){return e===``?zl:fu[e].transfer}};function hu(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function gu(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var _u,vu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_u===void 0&&(_u=au(`canvas`)),_u.width=e.width,_u.height=e.height;let n=_u.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_u}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=au(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=hu(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(hu(t[e]/255)*255):t[e]=hu(t[e]);return{data:t,width:e.width,height:e.height}}else return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},yu=0,bu=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Yl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(xu(r[t].image)):e.push(xu(r[t]))}else e=xu(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function xu(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?vu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Su=0,Cu=class e extends Gl{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=dl,i=dl,a=gl,o=vl,s=wl,c=yl,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Yl(),this.name=``,this.source=new bu(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new tu(0,0),this.repeat=new tu(1,1),this.center=new tu(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nu,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ul:e.x-=Math.floor(e.x);break;case dl:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ul:e.y-=Math.floor(e.y);break;case dl:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Cu.DEFAULT_IMAGE=null,Cu.DEFAULT_MAPPING=300,Cu.DEFAULT_ANISOTROPY=1;var wu=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tu=class extends Gl{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wu(0,0,e,t),this.scissorTest=!1,this.viewport=new wu(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gl,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Cu(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new bu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Eu=class extends Tu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Du=class extends Cu{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pl,this.minFilter=pl,this.wrapR=dl,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ou=class extends Cu{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pl,this.minFilter=pl,this.wrapR=dl,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ku=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xl(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ju.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xl(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Au=new H,ju=new ku,Mu=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pu.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pu.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Pu):Pu.fromBufferAttribute(r,t),Pu.applyMatrix4(e.matrixWorld),this.expandByPoint(Pu);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Fu.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Fu.copy(e.boundingBox)),Fu.applyMatrix4(e.matrixWorld),this.union(Fu)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pu),Pu.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hu),Uu.subVectors(this.max,Hu),Iu.subVectors(e.a,Hu),Lu.subVectors(e.b,Hu),Ru.subVectors(e.c,Hu),zu.subVectors(Lu,Iu),Bu.subVectors(Ru,Lu),Vu.subVectors(Iu,Ru);let t=[0,-zu.z,zu.y,0,-Bu.z,Bu.y,0,-Vu.z,Vu.y,zu.z,0,-zu.x,Bu.z,0,-Bu.x,Vu.z,0,-Vu.x,-zu.y,zu.x,0,-Bu.y,Bu.x,0,-Vu.y,Vu.x,0];return!Ku(t,Iu,Lu,Ru,Uu)||(t=[1,0,0,0,1,0,0,0,1],!Ku(t,Iu,Lu,Ru,Uu))?!1:(Wu.crossVectors(zu,Bu),t=[Wu.x,Wu.y,Wu.z],Ku(t,Iu,Lu,Ru,Uu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pu).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pu).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nu[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nu[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nu[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nu[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nu[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nu[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nu[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nu[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nu),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Nu=[new H,new H,new H,new H,new H,new H,new H,new H],Pu=new H,Fu=new Mu,Iu=new H,Lu=new H,Ru=new H,zu=new H,Bu=new H,Vu=new H,Hu=new H,Uu=new H,Wu=new H,Gu=new H;function Ku(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Gu.fromArray(e,a);let o=i.x*Math.abs(Gu.x)+i.y*Math.abs(Gu.y)+i.z*Math.abs(Gu.z),s=t.dot(Gu),c=n.dot(Gu),l=r.dot(Gu);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var qu=new Mu,Ju=new H,Yu=new H,Xu=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?qu.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ju.subVectors(e,this.center);let t=Ju.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Ju,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ju.copy(e.center).add(Yu)),this.expandByPoint(Ju.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zu=new H,Qu=new H,$u=new H,ed=new H,td=new H,nd=new H,rd=new H,id=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zu)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zu.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zu.copy(this.origin).addScaledVector(this.direction,t),Zu.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qu.copy(e).add(t).multiplyScalar(.5),$u.copy(t).sub(e).normalize(),ed.copy(this.origin).sub(Qu);let i=e.distanceTo(t)*.5,a=-this.direction.dot($u),o=ed.dot(this.direction),s=-ed.dot($u),c=ed.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qu).addScaledVector($u,d),f}intersectSphere(e,t){Zu.subVectors(e.center,this.origin);let n=Zu.dot(this.direction),r=Zu.dot(Zu)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zu)!==null}intersectTriangle(e,t,n,r,i){td.subVectors(t,e),nd.subVectors(n,e),rd.crossVectors(td,nd);let a=this.direction.dot(rd),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ed.subVectors(this.origin,e);let s=o*this.direction.dot(nd.crossVectors(ed,nd));if(s<0)return null;let c=o*this.direction.dot(td.cross(ed));if(c<0||s+c>a)return null;let l=-o*ed.dot(rd);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ad=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/od.setFromMatrixColumn(e,0).length(),i=1/od.setFromMatrixColumn(e,1).length(),a=1/od.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cd,e,ld)}lookAt(e,t,n){let r=this.elements;return fd.subVectors(e,t),fd.lengthSq()===0&&(fd.z=1),fd.normalize(),ud.crossVectors(n,fd),ud.lengthSq()===0&&(Math.abs(n.z)===1?fd.x+=1e-4:fd.z+=1e-4,fd.normalize(),ud.crossVectors(n,fd)),ud.normalize(),dd.crossVectors(fd,ud),r[0]=ud.x,r[4]=dd.x,r[8]=fd.x,r[1]=ud.y,r[5]=dd.y,r[9]=fd.y,r[2]=ud.z,r[6]=dd.z,r[10]=fd.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],ne=r[3],re=r[7],j=r[11],ie=r[15];return i[0]=a*x+o*T+s*k+c*ne,i[4]=a*S+o*E+s*A+c*re,i[8]=a*C+o*D+s*ee+c*j,i[12]=a*w+o*O+s*te+c*ie,i[1]=l*x+u*T+d*k+f*ne,i[5]=l*S+u*E+d*A+f*re,i[9]=l*C+u*D+d*ee+f*j,i[13]=l*w+u*O+d*te+f*ie,i[2]=p*x+m*T+h*k+g*ne,i[6]=p*S+m*E+h*A+g*re,i[10]=p*C+m*D+h*ee+g*j,i[14]=p*w+m*O+h*te+g*ie,i[3]=_*x+v*T+y*k+b*ne,i[7]=_*S+v*E+y*A+b*re,i[11]=_*C+v*D+y*ee+b*j,i[15]=_*w+v*O+y*te+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=od.set(r[0],r[1],r[2]).length(),a=od.set(r[4],r[5],r[6]).length(),o=od.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],sd.copy(this);let s=1/i,c=1/a,l=1/o;return sd.elements[0]*=s,sd.elements[1]*=s,sd.elements[2]*=s,sd.elements[4]*=c,sd.elements[5]*=c,sd.elements[6]*=c,sd.elements[8]*=l,sd.elements[9]*=l,sd.elements[10]*=l,t.setFromRotationMatrix(sd),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Wl){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Wl){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},od=new H,sd=new ad,cd=new H(0,0,0),ld=new H(1,1,1),ud=new H,dd=new H,fd=new H,pd=new ad,md=new ku,hd=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Xl(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Xl(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Xl(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Xl(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Xl(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Xl(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return md.setFromEuler(this),this.setFromQuaternion(md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hd.DEFAULT_ORDER=`XYZ`;var gd=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},_d=0,vd=new H,yd=new ku,bd=new ad,xd=new H,Sd=new H,Cd=new H,wd=new ku,Td=new H(1,0,0),Ed=new H(0,1,0),Dd=new H(0,0,1),Od={type:`added`},kd={type:`removed`},Ad={type:`childadded`,child:null},jd={type:`childremoved`,child:null},Md=class e extends Gl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Yl(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new hd,r=new ku,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ad},normalMatrix:{value:new nu}}),this.matrix=new ad,this.matrixWorld=new ad,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yd.setFromAxisAngle(e,t),this.quaternion.multiply(yd),this}rotateOnWorldAxis(e,t){return yd.setFromAxisAngle(e,t),this.quaternion.premultiply(yd),this}rotateX(e){return this.rotateOnAxis(Td,e)}rotateY(e){return this.rotateOnAxis(Ed,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,t){return vd.copy(e).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Td,e)}translateY(e){return this.translateOnAxis(Ed,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bd.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xd.copy(e):xd.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Sd.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bd.lookAt(Sd,xd,this.up):bd.lookAt(xd,Sd,this.up),this.quaternion.setFromRotationMatrix(bd),r&&(bd.extractRotation(r.matrixWorld),yd.setFromRotationMatrix(bd),this.quaternion.premultiply(yd.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Od),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kd),jd.child=e,this.dispatchEvent(jd),jd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bd.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bd.multiply(e.parent.matrixWorld)),e.applyMatrix4(bd),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Od),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sd,e,Cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sd,wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++){let n=e[t];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Md.DEFAULT_UP=new H(0,1,0),Md.DEFAULT_MATRIX_AUTO_UPDATE=!0,Md.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nd=new H,Pd=new H,Fd=new H,Id=new H,Ld=new H,Rd=new H,zd=new H,Bd=new H,Vd=new H,Hd=new H,Ud=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nd.subVectors(e,t),r.cross(Nd);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Nd.subVectors(r,t),Pd.subVectors(n,t),Fd.subVectors(e,t);let a=Nd.dot(Nd),o=Nd.dot(Pd),s=Nd.dot(Fd),c=Pd.dot(Pd),l=Pd.dot(Fd),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Id)!==null&&Id.x>=0&&Id.y>=0&&Id.x+Id.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Id)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Id.x),s.addScaledVector(a,Id.y),s.addScaledVector(o,Id.z),s)}static isFrontFacing(e,t,n,r){return Nd.subVectors(n,t),Pd.subVectors(e,t),Nd.cross(Pd).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nd.subVectors(this.c,this.b),Pd.subVectors(this.a,this.b),Nd.cross(Pd).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Ld.subVectors(r,n),Rd.subVectors(i,n),Bd.subVectors(e,n);let s=Ld.dot(Bd),c=Rd.dot(Bd);if(s<=0&&c<=0)return t.copy(n);Vd.subVectors(e,r);let l=Ld.dot(Vd),u=Rd.dot(Vd);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Ld,a);Hd.subVectors(e,i);let f=Ld.dot(Hd),p=Rd.dot(Hd);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Rd,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return zd.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(zd,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Ld,a).addScaledVector(Rd,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gd={h:0,s:0,l:0},Kd={h:0,s:0,l:0};function qd(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Jd=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fl){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mu.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=mu.workingColorSpace){return this.r=e,this.g=t,this.b=n,mu.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=mu.workingColorSpace){if(e=Zl(e,1),t=Xl(t,0,1),n=Xl(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=qd(i,r,e+1/3),this.g=qd(i,r,e),this.b=qd(i,r,e-1/3)}return mu.toWorkingColorSpace(this,r),this}setStyle(e,t=Fl){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fl){let n=Wd[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hu(e.r),this.g=hu(e.g),this.b=hu(e.b),this}copyLinearToSRGB(e){return this.r=gu(e.r),this.g=gu(e.g),this.b=gu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fl){return mu.fromWorkingColorSpace(Yd.copy(this),e),Math.round(Xl(Yd.r*255,0,255))*65536+Math.round(Xl(Yd.g*255,0,255))*256+Math.round(Xl(Yd.b*255,0,255))}getHexString(e=Fl){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mu.workingColorSpace){mu.fromWorkingColorSpace(Yd.copy(this),t);let n=Yd.r,r=Yd.g,i=Yd.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=mu.workingColorSpace){return mu.fromWorkingColorSpace(Yd.copy(this),t),e.r=Yd.r,e.g=Yd.g,e.b=Yd.b,e}getStyle(e=Fl){mu.fromWorkingColorSpace(Yd.copy(this),e);let t=Yd.r,n=Yd.g,r=Yd.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Gd),this.setHSL(Gd.h+e,Gd.s+t,Gd.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gd),e.getHSL(Kd);let n=Ql(Gd.h,Kd.h,t),r=Ql(Gd.s,Kd.s,t),i=Ql(Gd.l,Kd.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yd=new Jd;Jd.NAMES=Wd;var Xd=0,Zd=class extends Gl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Yl(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jd(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hl,this.stencilZFail=Hl,this.stencilZPass=Hl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Qd=class extends Zd{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Jd(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hd,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$d=new H,ef=new tu,tf=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xl,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return cu(`THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ef.fromBufferAttribute(this,t),ef.applyMatrix3(e),this.setXY(t,ef.x,ef.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$d.fromBufferAttribute(this,t),$d.applyMatrix3(e),this.setXYZ(t,$d.x,$d.y,$d.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$d.fromBufferAttribute(this,t),$d.applyMatrix4(e),this.setXYZ(t,$d.x,$d.y,$d.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$d.fromBufferAttribute(this,t),$d.applyNormalMatrix(e),this.setXYZ(t,$d.x,$d.y,$d.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$d.fromBufferAttribute(this,t),$d.transformDirection(e),this.setXYZ(t,$d.x,$d.y,$d.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$l(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=eu(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$l(t,this.array)),t}setX(e,t){return this.normalized&&(t=eu(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$l(t,this.array)),t}setY(e,t){return this.normalized&&(t=eu(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$l(t,this.array)),t}setZ(e,t){return this.normalized&&(t=eu(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$l(t,this.array)),t}setW(e,t){return this.normalized&&(t=eu(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=eu(t,this.array),n=eu(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=eu(t,this.array),n=eu(n,this.array),r=eu(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=eu(t,this.array),n=eu(n,this.array),r=eu(r,this.array),i=eu(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},nf=class extends tf{constructor(e,t,n){super(new Uint16Array(e),t,n)}},rf=class extends tf{constructor(e,t,n){super(new Uint32Array(e),t,n)}},af=class extends tf{constructor(e,t,n){super(new Float32Array(e),t,n)}},of=0,sf=new ad,cf=new Md,lf=new H,uf=new Mu,df=new Mu,ff=new H,pf=class e extends Gl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Yl(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iu(e)?rf:nf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new nu().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sf.makeRotationFromQuaternion(e),this.applyMatrix4(sf),this}rotateX(e){return sf.makeRotationX(e),this.applyMatrix4(sf),this}rotateY(e){return sf.makeRotationY(e),this.applyMatrix4(sf),this}rotateZ(e){return sf.makeRotationZ(e),this.applyMatrix4(sf),this}translate(e,t,n){return sf.makeTranslation(e,t,n),this.applyMatrix4(sf),this}scale(e,t,n){return sf.makeScale(e,t,n),this.applyMatrix4(sf),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lf).negate(),this.translate(lf.x,lf.y,lf.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new af(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mu);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];uf.setFromBufferAttribute(n),this.morphTargetsRelative?(ff.addVectors(this.boundingBox.min,uf.min),this.boundingBox.expandByPoint(ff),ff.addVectors(this.boundingBox.max,uf.max),this.boundingBox.expandByPoint(ff)):(this.boundingBox.expandByPoint(uf.min),this.boundingBox.expandByPoint(uf.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xu);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(uf.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];df.setFromBufferAttribute(n),this.morphTargetsRelative?(ff.addVectors(uf.min,df.min),uf.expandByPoint(ff),ff.addVectors(uf.max,df.max),uf.expandByPoint(ff)):(uf.expandByPoint(df.min),uf.expandByPoint(df.max))}uf.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ff.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ff));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ff.fromBufferAttribute(a,t),o&&(lf.fromBufferAttribute(e,t),ff.add(lf)),r=Math.max(r,n.distanceToSquared(ff))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new tf(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new tu,f=new tu,p=new tu,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new tf(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ff.fromBufferAttribute(e,t),ff.normalize(),e.setXYZ(t,ff.x,ff.y,ff.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new tf(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},mf=new ad,hf=new id,gf=new Xu,_f=new H,vf=new H,yf=new H,bf=new H,xf=new H,Sf=new H,Cf=new tu,wf=new tu,Tf=new tu,Ef=new H,Df=new H,Of=new H,kf=new H,Af=new H,jf=class extends Md{constructor(e=new pf,t=new Qd){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Sf.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(xf.fromBufferAttribute(s,e),a?Sf.addScaledVector(xf,r):Sf.addScaledVector(xf.sub(t),r))}t.add(Sf)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gf.copy(n.boundingSphere),gf.applyMatrix4(i),hf.copy(e.ray).recast(e.near),!(gf.containsPoint(hf.origin)===!1&&(hf.intersectSphere(gf,_f)===null||hf.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(mf.copy(i).invert(),hf.copy(e.ray).applyMatrix4(mf),!(n.boundingBox!==null&&hf.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hf)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Nf(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Nf(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Nf(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Nf(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function Mf(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Af.copy(s),Af.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Af);return l<n.near||l>n.far?null:{distance:l,point:Af.clone(),object:e}}function Nf(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,vf),e.getVertexPosition(c,yf),e.getVertexPosition(l,bf);let u=Mf(e,t,n,r,vf,yf,bf,kf);if(u){i&&(Cf.fromBufferAttribute(i,s),wf.fromBufferAttribute(i,c),Tf.fromBufferAttribute(i,l),u.uv=Ud.getInterpolation(kf,vf,yf,bf,Cf,wf,Tf,new tu)),a&&(Cf.fromBufferAttribute(a,s),wf.fromBufferAttribute(a,c),Tf.fromBufferAttribute(a,l),u.uv1=Ud.getInterpolation(kf,vf,yf,bf,Cf,wf,Tf,new tu)),o&&(Ef.fromBufferAttribute(o,s),Df.fromBufferAttribute(o,c),Of.fromBufferAttribute(o,l),u.normal=Ud.getInterpolation(kf,vf,yf,bf,Ef,Df,Of,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let e={a:s,b:c,c:l,normal:new H,materialIndex:0};Ud.getNormal(vf,yf,bf,e.normal),u.face=e}return u}var Pf=class e extends pf{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new af(c,3)),this.setAttribute(`normal`,new af(l,3)),this.setAttribute(`uv`,new af(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ff(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function If(e){let t={};for(let n=0;n<e.length;n++){let r=Ff(e[n]);for(let e in r)t[e]=r[e]}return t}function Lf(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Rf(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:mu.workingColorSpace}var zf={clone:Ff,merge:If},Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hf=class extends Zd{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=Vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ff(e.uniforms),this.uniformsGroups=Lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Uf=class extends Md{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new ad,this.projectionMatrix=new ad,this.projectionMatrixInverse=new ad,this.coordinateSystem=Wl}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wf=new H,Gf=new tu,Kf=new tu,qf=class extends Uf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jl*2*Math.atan(Math.tan(ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wf.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wf.x,Wf.y).multiplyScalar(-e/Wf.z),Wf.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wf.x,Wf.y).multiplyScalar(-e/Wf.z)}getViewSize(e,t){return this.getViewBounds(e,Gf,Kf),t.subVectors(Kf,Gf)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ql*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Jf=-90,Yf=1,Xf=class extends Md{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qf(Jf,Yf,e,t);r.layers=this.layers,this.add(r);let i=new qf(Jf,Yf,e,t);i.layers=this.layers,this.add(i);let a=new qf(Jf,Yf,e,t);a.layers=this.layers,this.add(a);let o=new qf(Jf,Yf,e,t);o.layers=this.layers,this.add(o);let s=new qf(Jf,Yf,e,t);s.layers=this.layers,this.add(s);let c=new qf(Jf,Yf,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Zf=class extends Cu{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qf=class extends Eu{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?gl:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Pf(5,5,5),i=new Hf({name:`CubemapFromEquirect`,uniforms:Ff(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new jf(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=gl),new Xf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},$f=new H,ep=new H,tp=new nu,np=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=$f.subVectors(n,t).cross(ep.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($f),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tp.getNormalMatrix(e),r=this.coplanarPoint($f).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rp=new Xu,ip=new H,ap=class{constructor(e=new np,t=new np,n=new np,r=new np,i=new np,a=new np){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wl){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rp.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rp.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rp)}intersectsSprite(e){return rp.center.set(0,0,0),rp.radius=.7071067811865476,rp.applyMatrix4(e.matrixWorld),this.intersectsSphere(rp)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ip.x=r.normal.x>0?e.max.x:e.min.x,ip.y=r.normal.y>0?e.max.y:e.min.y,ip.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ip)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function op(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function sp(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n._updateRange,o=n.updateRanges;if(e.bindBuffer(r,t),a.count===-1&&o.length===0&&e.bufferSubData(r,0,i),o.length!==0){for(let t=0,n=o.length;t<n;t++){let n=o[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}a.count!==-1&&(e.bufferSubData(r,a.offset*i.BYTES_PER_ELEMENT,i,a.offset,a.count),a.count=-1),n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var cp=class e extends pf{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new af(p,3)),this.setAttribute(`normal`,new af(m,3)),this.setAttribute(`uv`,new af(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},U={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},W={common:{diffuse:{value:new Jd(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nu},alphaMap:{value:null},alphaMapTransform:{value:new nu},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nu}},envmap:{envMap:{value:null},envMapRotation:{value:new nu},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nu}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nu}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nu},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nu},normalScale:{value:new tu(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nu},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nu}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nu}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nu}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jd(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jd(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nu},alphaTest:{value:0},uvTransform:{value:new nu}},sprite:{diffuse:{value:new Jd(16777215)},opacity:{value:1},center:{value:new tu(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nu},alphaMap:{value:null},alphaMapTransform:{value:new nu},alphaTest:{value:0}}},lp={basic:{uniforms:If([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:U.meshbasic_vert,fragmentShader:U.meshbasic_frag},lambert:{uniforms:If([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new Jd(0)}}]),vertexShader:U.meshlambert_vert,fragmentShader:U.meshlambert_frag},phong:{uniforms:If([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new Jd(0)},specular:{value:new Jd(1118481)},shininess:{value:30}}]),vertexShader:U.meshphong_vert,fragmentShader:U.meshphong_frag},standard:{uniforms:If([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new Jd(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag},toon:{uniforms:If([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new Jd(0)}}]),vertexShader:U.meshtoon_vert,fragmentShader:U.meshtoon_frag},matcap:{uniforms:If([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:U.meshmatcap_vert,fragmentShader:U.meshmatcap_frag},points:{uniforms:If([W.points,W.fog]),vertexShader:U.points_vert,fragmentShader:U.points_frag},dashed:{uniforms:If([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:U.linedashed_vert,fragmentShader:U.linedashed_frag},depth:{uniforms:If([W.common,W.displacementmap]),vertexShader:U.depth_vert,fragmentShader:U.depth_frag},normal:{uniforms:If([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:U.meshnormal_vert,fragmentShader:U.meshnormal_frag},sprite:{uniforms:If([W.sprite,W.fog]),vertexShader:U.sprite_vert,fragmentShader:U.sprite_frag},background:{uniforms:{uvTransform:{value:new nu},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:U.background_vert,fragmentShader:U.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nu}},vertexShader:U.backgroundCube_vert,fragmentShader:U.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:U.cube_vert,fragmentShader:U.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:U.equirect_vert,fragmentShader:U.equirect_frag},distanceRGBA:{uniforms:If([W.common,W.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:U.distanceRGBA_vert,fragmentShader:U.distanceRGBA_frag},shadow:{uniforms:If([W.lights,W.fog,{color:{value:new Jd(0)},opacity:{value:1}}]),vertexShader:U.shadow_vert,fragmentShader:U.shadow_frag}};lp.physical={uniforms:If([lp.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nu},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nu},clearcoatNormalScale:{value:new tu(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nu},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nu},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nu},sheen:{value:0},sheenColor:{value:new Jd(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nu},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nu},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nu},transmissionSamplerSize:{value:new tu},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nu},attenuationDistance:{value:0},attenuationColor:{value:new Jd(0)},specularColor:{value:new Jd(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nu},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nu},anisotropyVector:{value:new tu},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nu}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag};var up={r:0,b:0,g:0},dp=new hd,fp=new ad;function pp(e,t,n,r,i,a,o){let s=new Jd(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new jf(new Pf(1,1,1),new Hf({name:`BackgroundCubeMaterial`,uniforms:Ff(lp.backgroundCube.uniforms),vertexShader:lp.backgroundCube.vertexShader,fragmentShader:lp.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),dp.copy(n.backgroundRotation),dp.x*=-1,dp.y*=-1,dp.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(dp.y*=-1,dp.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fp.makeRotationFromEuler(dp)),u.material.toneMapped=mu.getTransfer(r.colorSpace)!==Bl,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new jf(new cp(2,2),new Hf({name:`BackgroundMaterial`,uniforms:Ff(lp.background.uniforms),vertexShader:lp.background.vertexShader,fragmentShader:lp.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=mu.getTransfer(r.colorSpace)!==Bl,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(up,Rf(e)),r.buffers.color.setClear(up.r,up.g,up.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function mp(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function hp(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<a;t++)this.render(e[t],i[t]);else{o.multiDrawArraysWEBGL(r,e,0,i,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e];n.update(t,r,1)}}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e];for(let e=0;e<s.length;e++)n.update(t,r,s[e])}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function gp(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_TEXTURE_SIZE),h=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),g=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=p>0,x=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:h,maxAttributes:g,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:b,maxSamples:x}}function _p(e){let t=this,n=null,r=0,i=!1,a=!1,o=new np,s=new nu,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function vp(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304)if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}else{let a=r.image;if(a&&a.height>0){let o=new Qf(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}else return null}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var yp=class extends Uf{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bp=4,xp=[.125,.215,.35,.446,.526,.582],Sp=20,Cp=new yp,wp=new Jd,Tp=null,Ep=0,Dp=0,Op=!1,kp=(1+Math.sqrt(5))/2,Ap=1/kp,jp=[new H(-kp,Ap,0),new H(kp,Ap,0),new H(-Ap,0,kp),new H(Ap,0,kp),new H(0,kp,-Ap),new H(0,kp,Ap),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Mp=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Tp=this._renderer.getRenderTarget(),Ep=this._renderer.getActiveCubeFace(),Dp=this._renderer.getActiveMipmapLevel(),Op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tp,Ep,Dp),this._renderer.xr.enabled=Op,e.scissorTest=!1,Fp(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tp=this._renderer.getRenderTarget(),Ep=this._renderer.getActiveCubeFace(),Dp=this._renderer.getActiveMipmapLevel(),Op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gl,minFilter:gl,generateMipmaps:!1,type:Sl,format:wl,colorSpace:Il,depthBuffer:!1},r=Pp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Np(r)),this._blurMaterial=Ip(r,e,t)}return r}_compileMaterial(e){let t=new jf(this._lodPlanes[0],e);this._renderer.compile(t,Cp)}_sceneToCubeUV(e,t,n,r){let i=new qf(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(wp),s.toneMapping=0,s.autoClear=!1;let u=new Qd({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new jf(new Pf,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(wp),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Fp(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lp());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new jf(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Fp(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Cp)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=jp[(r-t-1)%jp.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new jf(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Sp-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Sp;m>Sp&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sp}`);let h=[],g=0;for(let e=0;e<Sp;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Fp(t,3*v*(r>_-bp?r-_+bp:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Cp)}};function Np(e){let t=[],n=[],r=[],i=e,a=e-bp+1+xp.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-bp?s=xp[o-e+bp-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new pf;h.setAttribute(`position`,new tf(f,3)),h.setAttribute(`uv`,new tf(p,2)),h.setAttribute(`faceIndex`,new tf(m,1)),t.push(h),i>bp&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Pp(e,t,n){let r=new Eu(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Fp(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ip(e,t,n){let r=new Float32Array(Sp),i=new H(0,1,0);return new Hf({name:`SphericalGaussianBlur`,defines:{n:Sp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lp(){return new Hf({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rp(){return new Hf({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bp(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Mp(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Mp(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Vp(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&cu(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Hp(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(iu(n)?rf:nf)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Up(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,s){if(s===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<s;t++)this.render(e[t]/o,i[t]);else{c.multiDrawElementsWEBGL(r,i,0,a,e,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e];n.update(t,r,1)}}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e];for(let e=0;e<c.length;e++)n.update(t,r,c[e])}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Wp(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Gp(e,t,n){let r=new WeakMap,i=new wu;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Du(h,p,m,u);g.type=xl,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new tu(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Kp(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var qp=class extends Cu{constructor(e,t,n,r,i,a,o,s,c,l=Tl){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===1026&&(n=bl),n===void 0&&l===1027&&(n=Cl),super(null,r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o===void 0?pl:o,this.minFilter=s===void 0?pl:s,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jp=new Cu,Yp=new qp(1,1);Yp.compareFunction=515;var Xp=new Du,Zp=new Ou,Qp=new Zf,$p=[],em=[],tm=new Float32Array(16),nm=new Float32Array(9),rm=new Float32Array(4);function im(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=$p[i];if(a===void 0&&(a=new Float32Array(i),$p[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function am(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function om(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function sm(e,t){let n=em[t];n===void 0&&(n=new Int32Array(t),em[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function cm(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function lm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(am(n,t))return;e.uniform2fv(this.addr,t),om(n,t)}}function um(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(am(n,t))return;e.uniform3fv(this.addr,t),om(n,t)}}function dm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(am(n,t))return;e.uniform4fv(this.addr,t),om(n,t)}}function fm(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(am(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),om(n,t)}else{if(am(n,r))return;rm.set(r),e.uniformMatrix2fv(this.addr,!1,rm),om(n,r)}}function pm(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(am(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),om(n,t)}else{if(am(n,r))return;nm.set(r),e.uniformMatrix3fv(this.addr,!1,nm),om(n,r)}}function mm(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(am(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),om(n,t)}else{if(am(n,r))return;tm.set(r),e.uniformMatrix4fv(this.addr,!1,tm),om(n,r)}}function hm(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function gm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(am(n,t))return;e.uniform2iv(this.addr,t),om(n,t)}}function _m(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(am(n,t))return;e.uniform3iv(this.addr,t),om(n,t)}}function vm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(am(n,t))return;e.uniform4iv(this.addr,t),om(n,t)}}function ym(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function bm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(am(n,t))return;e.uniform2uiv(this.addr,t),om(n,t)}}function xm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(am(n,t))return;e.uniform3uiv(this.addr,t),om(n,t)}}function Sm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(am(n,t))return;e.uniform4uiv(this.addr,t),om(n,t)}}function Cm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a=this.type===e.SAMPLER_2D_SHADOW?Yp:Jp;n.setTexture2D(t||a,i)}function wm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Zp,i)}function Tm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Qp,i)}function Em(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Xp,i)}function Dm(e){switch(e){case 5126:return cm;case 35664:return lm;case 35665:return um;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return hm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return ym;case 36294:return bm;case 36295:return xm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Em}}function Om(e,t){e.uniform1fv(this.addr,t)}function km(e,t){let n=im(t,this.size,2);e.uniform2fv(this.addr,n)}function Am(e,t){let n=im(t,this.size,3);e.uniform3fv(this.addr,n)}function jm(e,t){let n=im(t,this.size,4);e.uniform4fv(this.addr,n)}function Mm(e,t){let n=im(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Nm(e,t){let n=im(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Pm(e,t){let n=im(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Fm(e,t){e.uniform1iv(this.addr,t)}function Im(e,t){e.uniform2iv(this.addr,t)}function Lm(e,t){e.uniform3iv(this.addr,t)}function Rm(e,t){e.uniform4iv(this.addr,t)}function zm(e,t){e.uniform1uiv(this.addr,t)}function Bm(e,t){e.uniform2uiv(this.addr,t)}function Vm(e,t){e.uniform3uiv(this.addr,t)}function Hm(e,t){e.uniform4uiv(this.addr,t)}function Um(e,t,n){let r=this.cache,i=t.length,a=sm(n,i);am(r,a)||(e.uniform1iv(this.addr,a),om(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||Jp,a[e])}function Wm(e,t,n){let r=this.cache,i=t.length,a=sm(n,i);am(r,a)||(e.uniform1iv(this.addr,a),om(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Zp,a[e])}function Gm(e,t,n){let r=this.cache,i=t.length,a=sm(n,i);am(r,a)||(e.uniform1iv(this.addr,a),om(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Qp,a[e])}function Km(e,t,n){let r=this.cache,i=t.length,a=sm(n,i);am(r,a)||(e.uniform1iv(this.addr,a),om(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Xp,a[e])}function qm(e){switch(e){case 5126:return Om;case 35664:return km;case 35665:return Am;case 35666:return jm;case 35674:return Mm;case 35675:return Nm;case 35676:return Pm;case 5124:case 35670:return Fm;case 35667:case 35671:return Im;case 35668:case 35672:return Lm;case 35669:case 35673:return Rm;case 5125:return zm;case 36294:return Bm;case 36295:return Vm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Km}}var Jm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dm(t.type)}},Ym=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qm(t.type)}},Xm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Zm=/(\w+)(\])?(\[|\.)?/g;function Qm(e,t){e.seq.push(t),e.map[t.id]=t}function $m(e,t,n){let r=e.name,i=r.length;for(Zm.lastIndex=0;;){let a=Zm.exec(r),o=Zm.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Qm(n,l===void 0?new Jm(s,e,t):new Ym(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Xm(s),Qm(n,e)),n=e}}}var eh=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);$m(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function th(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var nh=37297,rh=0;function ih(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function ah(e){let t=mu.getPrimaries(mu.workingColorSpace),n=mu.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case Il:case Rl:return[r,`LinearTransferOETF`];case Fl:case Ll:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function oh(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ih(e.getShaderSource(t),r)}else return i}function sh(e,t){let n=ah(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function ch(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`OptimizedCineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function lh(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(fh).join(`
`)}function uh(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function dh(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function fh(e){return e!==``}function ph(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hh=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(e){return e.replace(hh,vh)}var _h=new Map;function vh(e,t){let n=U[t];if(n===void 0){let e=_h.get(t);if(e!==void 0)n=U[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return gh(n)}var yh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(e){return e.replace(yh,xh)}function xh(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Sh(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Ch(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function wh(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`;break}return t}function Th(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`;break}return t}function Eh(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`;break}return t}function Dh(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Oh(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ch(n),l=wh(n),u=Th(n),d=Eh(n),f=Dh(n),p=lh(n),m=uh(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(fh).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(fh).join(`
`),_.length>0&&(_+=`
`)):(g=[Sh(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(fh).join(`
`),_=[Sh(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:U.tonemapping_pars_fragment,n.toneMapping===0?``:ch(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,U.colorspace_pars_fragment,sh(`linearToOutputTexel`,n.outputColorSpace),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(fh).join(`
`)),o=gh(o),o=ph(o,n),o=mh(o,n),s=gh(s),s=ph(s,n),s=mh(s,n),o=bh(o),s=bh(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=th(i,i.VERTEX_SHADER,y),S=th(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=oh(i,x,`vertex`),r=oh(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new eh(i,h),T=dh(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,nh)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rh++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var kh=0,Ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jh(e),t.set(e,n)),n}},jh=class{constructor(e){this.id=kh++,this.code=e,this.usedTimes=0}};function Mh(e,t,n,r,i,a,o){let s=new gd,c=new Ah,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=lp[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let ee=e.getRenderTarget(),te=_.isInstancedMesh===!0,ne=_.isBatchedMesh===!0,re=!!a.map,j=!!a.matcap,ie=!!x,ae=!!a.aoMap,oe=!!a.lightMap,se=!!a.bumpMap,ce=!!a.normalMap,le=!!a.displacementMap,ue=!!a.emissiveMap,M=!!a.metalnessMap,de=!!a.roughnessMap,fe=a.anisotropy>0,N=a.clearcoat>0,pe=a.dispersion>0,P=a.iridescence>0,me=a.sheen>0,F=a.transmission>0,he=fe&&!!a.anisotropyMap,I=N&&!!a.clearcoatMap,ge=N&&!!a.clearcoatNormalMap,_e=N&&!!a.clearcoatRoughnessMap,ve=P&&!!a.iridescenceMap,ye=P&&!!a.iridescenceThicknessMap,be=me&&!!a.sheenColorMap,xe=me&&!!a.sheenRoughnessMap,Se=!!a.specularMap,Ce=!!a.specularColorMap,we=!!a.specularIntensityMap,Te=F&&!!a.transmissionMap,Ee=F&&!!a.thicknessMap,De=!!a.gradientMap,Oe=!!a.alphaMap,ke=a.alphaTest>0,Ae=!!a.alphaHash,je=!!a.extensions,Me=0;a.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:ne,batchingColor:ne&&_._colorsTexture!==null,instancing:te,instancingColor:te&&_.instanceColor!==null,instancingMorph:te&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Il,alphaToCoverage:!!a.alphaToCoverage,map:re,matcap:j,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:f&&le,emissiveMap:ue,normalMapObjectSpace:ce&&a.normalMapType===1,normalMapTangentSpace:ce&&a.normalMapType===0,metalnessMap:M,roughnessMap:de,anisotropy:fe,anisotropyMap:he,clearcoat:N,clearcoatMap:I,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,dispersion:pe,iridescence:P,iridescenceMap:ve,iridescenceThicknessMap:ye,sheen:me,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:Ce,specularIntensityMap:we,transmission:F,transmissionMap:Te,thicknessMap:Ee,gradientMap:De,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ke,alphaHash:Ae,combine:a.combine,mapUv:re&&h(a.map.channel),aoMapUv:ae&&h(a.aoMap.channel),lightMapUv:oe&&h(a.lightMap.channel),bumpMapUv:se&&h(a.bumpMap.channel),normalMapUv:ce&&h(a.normalMap.channel),displacementMapUv:le&&h(a.displacementMap.channel),emissiveMapUv:ue&&h(a.emissiveMap.channel),metalnessMapUv:M&&h(a.metalnessMap.channel),roughnessMapUv:de&&h(a.roughnessMap.channel),anisotropyMapUv:he&&h(a.anisotropyMap.channel),clearcoatMapUv:I&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:ge&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:be&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:xe&&h(a.sheenRoughnessMap.channel),specularMapUv:Se&&h(a.specularMap.channel),specularColorMapUv:Ce&&h(a.specularColorMap.channel),specularIntensityMapUv:we&&h(a.specularIntensityMap.channel),transmissionMapUv:Te&&h(a.transmissionMap.channel),thicknessMapUv:Ee&&h(a.thicknessMap.channel),alphaMapUv:Oe&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(ce||fe),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(re||Oe),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:re&&a.map.isVideoTexture===!0&&mu.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:je&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:je&&a.extensions.multiDraw===!0&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.skinning&&s.enable(4),t.morphTargets&&s.enable(5),t.morphNormals&&s.enable(6),t.morphColors&&s.enable(7),t.premultipliedAlpha&&s.enable(8),t.shadowMapEnabled&&s.enable(9),t.doubleSided&&s.enable(10),t.flipSided&&s.enable(11),t.useDepthPacking&&s.enable(12),t.dithering&&s.enable(13),t.transmission&&s.enable(14),t.sheen&&s.enable(15),t.opaque&&s.enable(16),t.pointsUvs&&s.enable(17),t.decodeVideoTexture&&s.enable(18),t.alphaToCoverage&&s.enable(19),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=lp[t];n=zf.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Oh(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Nh(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function Ph(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fh(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ih(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Ph),r.length>1&&r.sort(t||Fh),i.length>1&&i.sort(t||Fh)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Lh(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ih,e.set(t,[i])):n>=r.length?(i=new Ih,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Rh(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new H,color:new Jd};break;case`SpotLight`:n={position:new H,direction:new H,color:new Jd,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new Jd,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new Jd,groundColor:new Jd};break;case`RectAreaLight`:n={color:new Jd,position:new H,halfWidth:new H,halfHeight:new H};break}return e[t.id]=n,n}}}function zh(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tu};break;case`SpotLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tu};break;case`PointLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tu,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Bh=0;function Vh(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Hh(e){let t=new Rh,n=zh(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new ad,o=new ad;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Vh);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Bh++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Uh(e){let t=new Hh(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function Wh(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Uh(e),t.set(n,[a])):r>=i.length?(a=new Uh(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Gh=class extends Zd{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Nl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kh=class extends Zd{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},qh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yh(e,t,n){let r=new ap,i=new tu,a=new tu,o=new wu,s=new Gh({depthPacking:Pl}),c=new Kh,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Hf({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tu},radius:{value:4}},vertexShader:qh,fragmentShader:Jh}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new pf;m.setAttribute(`position`,new tf(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new jf(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:pl,magFilter:pl};d.map!==null&&d.map.dispose(),d.map=new Eu(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Eu(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Xh(e){function t(){let t=!1,n=new wu,r=null,i=new wu(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function n(){let t=!1,n=null,r=null,i=null;return{setTest:function(t){t?ue(e.DEPTH_TEST):M(e.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function r(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):M(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let i=new t,a=new n,o=new r,s=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new Jd(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=te>=1);let re=null,j={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new wu().fromArray(ie),se=new wu().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(e.DEPTH_TEST),a.setFunc(3),he(!1),I(1),ue(e.CULL_FACE),me(0);function ue(t){l[t]!==!0&&(e.enable(t),l[t]=!0)}function M(t){l[t]!==!1&&(e.disable(t),l[t]=!1)}function de(t,n){return u[t]===n?!1:(e.bindFramebuffer(t,n),u[t]=n,t===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=f,i=!1;if(t){r=d.get(n),r===void 0&&(r=[],d.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function N(t){return p===t?!1:(e.useProgram(t),p=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let P={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0){m===!0&&(M(e.BLEND),m=!1);return}if(m===!1&&(ue(e.BLEND),m=!0),t!==5){if(t!==h||u!==w){if((g!==100||y!==100)&&(e.blendEquation(e.FUNC_ADD),g=100,y=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}_=null,v=null,b=null,x=null,S.set(0,0,0),C=0,h=t,w=u}return}a||=n,o||=r,s||=i,(n!==g||a!==y)&&(e.blendEquationSeparate(pe[n],pe[a]),g=n,y=a),(r!==_||i!==v||o!==b||s!==x)&&(e.blendFuncSeparate(P[r],P[i],P[o],P[s]),_=r,v=i,b=o,x=s),(c.equals(S)===!1||l!==C)&&(e.blendColor(c.r,c.g,c.b,l),S.copy(c),C=l),h=t,w=!1}function F(t,n){t.side===2?M(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),a.setFunc(t.depthFunc),a.setTest(t.depthTest),a.setMask(t.depthWrite),i.setMask(t.colorWrite);let s=t.stencilWrite;o.setTest(s),s&&(o.setMask(t.stencilWriteMask),o.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),o.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):M(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){T!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),T=t)}function I(t){t===0?M(e.CULL_FACE):(ue(e.CULL_FACE),t!==E&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),E=t}function ge(t){t!==D&&(ee&&e.lineWidth(t),D=t)}function _e(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(O!==n||k!==r)&&(e.polygonOffset(n,r),O=n,k=r)):M(e.POLYGON_OFFSET_FILL)}function ve(t){t?ue(e.SCISSOR_TEST):M(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+A-1),re!==t&&(e.activeTexture(t),re=t)}function be(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+A-1:re);let i=j[r];i===void 0&&(i={type:void 0,texture:void 0},j[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function xe(){let t=j[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Me(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Ne(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Pe(t,n){let r=c.get(n);r===void 0&&(r=new WeakMap,c.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Fe(t,n){let r=c.get(n).get(t);s.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),s.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),l={},re=null,j={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new Jd(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:ue,disable:M,bindFramebuffer:de,drawBuffers:fe,useProgram:N,setBlending:me,setMaterial:F,setFlipSided:he,setCullFace:I,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:Ae,texImage3D:je,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:Me,viewport:Ne,reset:Ie}}function Zh(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new tu,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):au(`canvas`)}function h(e,t,n){let r=1,i=ve(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);d===void 0&&(d=m(n,a));let o=t?m(n,a):d;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function g(e){return e.generateMipmaps&&e.minFilter!==1003&&e.minFilter!==1006}function _(t){e.generateMipmap(t)}function v(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB&&i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),r===e.RGBA){let t=o?zl:mu.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function y(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function b(e,t){return g(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function x(e){let t=e.target;t.removeEventListener(`dispose`,x),C(t),t.isVideoTexture&&u.delete(t)}function S(e){let t=e.target;t.removeEventListener(`dispose`,S),T(t)}function C(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&w(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function w(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function T(t){let n=r.get(t);if(t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let E=0;function D(){E=0}function O(){let e=E;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),E+=1,e}function k(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function A(t,i){let a=r.get(t);if(t.isVideoTexture&&ge(t),t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{se(a,t,i);return}}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ee(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){se(a,t,i);return}n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){se(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){ce(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let re={[ul]:e.REPEAT,[dl]:e.CLAMP_TO_EDGE,[fl]:e.MIRRORED_REPEAT},j={[pl]:e.NEAREST,[ml]:e.NEAREST_MIPMAP_NEAREST,[hl]:e.NEAREST_MIPMAP_LINEAR,[gl]:e.LINEAR,[_l]:e.LINEAR_MIPMAP_NEAREST,[vl]:e.LINEAR_MIPMAP_LINEAR},ie={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ae(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,re[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,re[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,re[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,j[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,j[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ie[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function oe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,x));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=k(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&w(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function se(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=oe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=mu.getPrimaries(mu.workingColorSpace),r=o.colorSpace===``?null:mu.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=h(o.image,!1,i.maxTextureSize);p=_e(o,p);let m=a.convert(o.format,o.colorSpace),x=a.convert(o.type),S=v(o.internalFormat,m,x,o.colorSpace,o.isVideoTexture);ae(c,o);let C,w=o.mipmaps,T=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=b(o,p);if(o.isDepthTexture)S=y(o.format===El,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,S,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,x,null));else if(o.isDataTexture)if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,x,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,x,C.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height),D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,p.width,p.height,m,x,p.data)):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,x,p.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(C=w[t],o.format!==1023)if(m!==null)if(T){if(D)if(o.layerUpdates.size>0){for(let r of o.layerUpdates){let i=C.width*C.height;n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,r,C.width,C.height,1,m,C.data.slice(i*r,i*(r+1)),0,0)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,C.data,0,0)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,C.data,0,0);else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,x,C.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,m,x,C.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,x,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,x,C.data):m===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,C.data):n.compressedTexImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,C.data)}else if(o.isDataArrayTexture)if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,p.width,p.height,p.depth),D)if(o.layerUpdates.size>0){let t;switch(x){case e.UNSIGNED_BYTE:switch(m){case e.ALPHA:t=1;break;case e.LUMINANCE:t=1;break;case e.LUMINANCE_ALPHA:t=2;break;case e.RGB:t=3;break;case e.RGBA:t=4;break;default:throw Error(`Unknown texel size for format ${m}.`)}break;case e.UNSIGNED_SHORT_4_4_4_4:case e.UNSIGNED_SHORT_5_5_5_1:case e.UNSIGNED_SHORT_5_6_5:t=1;break;default:throw Error(`Unknown texel size for type ${x}.`)}let r=p.width*p.height*t;for(let t of o.layerUpdates)n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,t,p.width,p.height,1,m,x,p.data.slice(r*t,r*(t+1)));o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,x,p.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,S,p.width,p.height,p.depth,0,m,x,p.data);else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,S,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,x,p.data)):n.texImage3D(e.TEXTURE_3D,0,S,p.width,p.height,p.depth,0,m,x,p.data);else if(o.isFramebufferTexture){if(E)if(T)n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,S,t,r,0,m,x,null),t>>=1,r>>=1}}else if(w.length>0){if(T&&E){let t=ve(w[0]);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,x,C):n.texImage2D(e.TEXTURE_2D,t,S,m,x,C);o.generateMipmaps=!1}else if(T){if(E){let t=ve(p);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,x,p)}else n.texImage2D(e.TEXTURE_2D,0,S,m,x,p);g(o)&&_(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ce(t,o,s){if(o.image.length!==6)return;let c=oe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=mu.getPrimaries(mu.workingColorSpace),r=o.colorSpace===``?null:mu.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=h(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=_e(o,m[e]);let y=m[0],x=a.convert(o.format,o.colorSpace),S=a.convert(o.type),C=v(o.internalFormat,x,S,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=b(o,y);ae(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,y.width,y.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,x,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,x,S,i.data):x===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,x,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=ve(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,x,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,x,S,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,x,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,x,S,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,x,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,x,S,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,x,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,x,S,i.image[t])}}}g(o)&&_(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=v(o.internalFormat,d,f,o.colorSpace);if(!r.get(i).__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,r.get(o).__webglTexture,0,he(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,r.get(o).__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=y(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=he(n);I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=v(o.internalFormat,c,l,o.colorSpace),d=he(n);r&&I(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function M(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!r.get(i.depthTexture).__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),A(i.depthTexture,0);let a=r.get(i.depthTexture).__webglTexture,o=he(i);if(i.depthTexture.format===1026)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0);else if(i.depthTexture.format===1027)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0);else throw Error(`Unknown depthTexture format`)}function de(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);M(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]=e.createRenderbuffer(),ue(i.__webglDepthbuffer[r],t,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer=e.createRenderbuffer(),ue(i.__webglDepthbuffer,t,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function fe(t,n,i){let a=r.get(t);n!==void 0&&le(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&de(t)}function N(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,S);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&I(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=v(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=he(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ue(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ae(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)le(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);g(i)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a);n.bindTexture(e.TEXTURE_2D,o.__webglTexture),ae(e.TEXTURE_2D,a),le(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,e.TEXTURE_2D,0),g(a)&&_(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ae(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else le(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);g(i)&&_(r),n.unbindTexture()}t.depthBuffer&&de(t)}function pe(t){let i=t.textures;for(let a=0,o=i.length;a<o;a++){let o=i[a];if(g(o)){let i=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,a=r.get(o).__webglTexture;n.bindTexture(i,a),_(i),n.unbindTexture()}}}let P=[],me=[];function F(t){if(t.samples>0){if(I(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(P.length=0,me.length=0,P.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(P.push(l),me.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,P))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function he(e){return Math.min(i.maxSamples,e.samples)}function I(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ge(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function _e(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(mu.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function ve(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=A,this.setTexture2DArray=ee,this.setTexture3D=te,this.setTextureCube=ne,this.rebindTextures=fe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=le,this.useMultisampledRTT=I}function Qh(e,t){function n(n,r=``){let i,a=mu.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var $h=class extends qf{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},eg=class extends Md{constructor(){super(),this.isGroup=!0,this.type=`Group`}},tg={type:`move`},ng=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eg,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eg,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eg,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new eg;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ag=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Cu,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Hf({vertexShader:rg,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jf(new cp(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}},og=class extends Gl{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=new ag,h=t.getContextAttributes(),g=null,_=null,v=[],y=[],b=new tu,x=null,S=new qf;S.layers.enable(1),S.viewport=new wu;let C=new qf;C.layers.enable(2),C.viewport=new wu;let w=[S,C],T=new $h;T.layers.enable(1),T.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=v[e];return t===void 0&&(t=new ng,v[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=v[e];return t===void 0&&(t=new ng,v[e]=t),t.getGripSpace()},this.getHand=function(e){let t=v[e];return t===void 0&&(t=new ng,v[e]=t),t.getHandSpace()};function O(e){let t=y.indexOf(e.inputSource);if(t===-1)return;let n=v[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function k(){r.removeEventListener(`select`,O),r.removeEventListener(`selectstart`,O),r.removeEventListener(`selectend`,O),r.removeEventListener(`squeeze`,O),r.removeEventListener(`squeezestart`,O),r.removeEventListener(`squeezeend`,O),r.removeEventListener(`end`,k),r.removeEventListener(`inputsourceschange`,A);for(let e=0;e<v.length;e++){let t=y[e];t!==null&&(y[e]=null,v[e].disconnect(t))}E=null,D=null,m.reset(),e.setRenderTarget(g),f=null,d=null,u=null,r=null,_=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(g=e.getRenderTarget(),r.addEventListener(`select`,O),r.addEventListener(`selectstart`,O),r.addEventListener(`selectend`,O),r.addEventListener(`squeeze`,O),r.addEventListener(`squeezestart`,O),r.addEventListener(`squeezeend`,O),r.addEventListener(`end`,k),r.addEventListener(`inputsourceschange`,A),h.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){let n={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Eu(f.framebufferWidth,f.framebufferHeight,{format:wl,type:yl,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let n=null,a=null,o=null;h.depth&&(o=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=h.stencil?El:Tl,a=h.stencil?Cl:bl);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Eu(d.textureWidth,d.textureHeight,{format:wl,type:yl,depthTexture:new qp(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function A(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=y.indexOf(n);r>=0&&(y[r]=null,v[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=y.indexOf(n);if(r===-1){for(let e=0;e<v.length;e++)if(e>=y.length){y.push(n),r=e;break}else if(y[e]===null){y[e]=n,r=e;break}if(r===-1)break}let i=v[r];i&&i.connect(n)}}let ee=new H,te=new H;function ne(e,t,n){ee.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=ee.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),b=c*s/_*g,x=l*s/_*g;e.projectionMatrix.makePerspective(v,y,b,x,g,_),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;m.texture!==null&&(e.near=m.depthNear,e.far=m.depthFar),T.near=C.near=S.near=e.near,T.far=C.far=S.far=e.far,(E!==T.near||D!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),E=T.near,D=T.far,S.near=E,S.far=D,C.near=E,C.far=D,S.updateProjectionMatrix(),C.updateProjectionMatrix(),e.updateProjectionMatrix());let t=e.parent,n=T.cameras;re(T,t);for(let e=0;e<n.length;e++)re(n[e],t);n.length===2?ne(T,S,C):T.projectionMatrix.copy(S.projectionMatrix),j(e,T,t)};function j(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Jl*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(T)};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let n=!1;t.length!==T.cameras.length&&(T.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(_,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(_))}let o=w[r];o===void 0&&(o=new qf,o.layers.enable(r),o.viewport=new wu,w[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(T.matrix.copy(o.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),n===!0&&T.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&m.init(e,n,r.renderState)}}for(let e=0;e<v.length;e++){let t=y[e],n=v[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let oe=new op;oe.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},sg=new hd,cg=new ad;function lg(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Rf(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,sg.copy(o),sg.x*=-1,sg.y*=-1,sg.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(sg.y*=-1,sg.z*=-1),e.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(sg)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ug(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16;o!==0&&16-o<a.boundary&&(n+=16-o),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var dg=class{constructor(e={}){let{canvas:t=ou(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),p=new Int32Array(4),m=null,h=null,g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fl,this.toneMapping=0,this.toneMappingExposure=1;let v=this,y=!1,b=0,x=0,S=null,C=-1,w=null,T=new wu,E=new wu,D=null,O=new Jd(0),k=0,A=t.width,ee=t.height,te=1,ne=null,re=null,j=new wu(0,0,A,ee),ie=new wu(0,0,A,ee),ae=!1,oe=new ap,se=!1,ce=!1,le=new ad,ue=new H,M={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function fe(){return S===null?te:1}let N=n;function pe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r165`),t.addEventListener(`webglcontextlost`,Le,!1),t.addEventListener(`webglcontextrestored`,Re,!1),t.addEventListener(`webglcontextcreationerror`,ze,!1),N===null){let t=`webgl2`;if(N=pe(t,e),N===null)throw pe(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let P,me,F,he,I,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe;function Fe(){P=new Vp(N),P.init(),Me=new Qh(N,P),me=new gp(N,P,e,Me),F=new Xh(N),he=new Wp(N),I=new Nh,ge=new Zh(N,P,F,I,me,Me,he),_e=new vp(v),ve=new Bp(v),ye=new sp(N),Ne=new mp(N,ye),be=new Hp(N,ye,he,Ne),xe=new Kp(N,be,ye,he),ke=new Gp(N,me,ge),Ee=new _p(I),Se=new Mh(v,_e,ve,P,me,Ne,Ee),Ce=new lg(v,I),we=new Lh,Te=new Wh(P),Oe=new pp(v,_e,ve,F,xe,d,s),De=new Yh(v,xe,me),Pe=new ug(N,he,me,F),Ae=new hp(N,P,he),je=new Up(N,P,he),he.programs=Se.programs,v.capabilities=me,v.extensions=P,v.properties=I,v.renderLists=we,v.shadowMap=De,v.state=F,v.info=he}Fe();let Ie=new og(v,N);this.xr=Ie,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=P.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=P.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(e){e!==void 0&&(te=e,this.setSize(A,ee,!1))},this.getSize=function(e){return e.set(A,ee)},this.setSize=function(e,n,r=!0){if(Ie.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}A=e,ee=n,t.width=Math.floor(e*te),t.height=Math.floor(n*te),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(A*te,ee*te).floor()},this.setDrawingBufferSize=function(e,n,r){A=e,ee=n,te=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(T)},this.getViewport=function(e){return e.copy(j)},this.setViewport=function(e,t,n,r){e.isVector4?j.set(e.x,e.y,e.z,e.w):j.set(e,t,n,r),F.viewport(T.copy(j).multiplyScalar(te).round())},this.getScissor=function(e){return e.copy(ie)},this.setScissor=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),F.scissor(E.copy(ie).multiplyScalar(te).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(e){F.setScissorTest(ae=e)},this.setOpaqueSort=function(e){ne=e},this.setTransparentSort=function(e){re=e},this.getClearColor=function(e){return e.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(S!==null){let t=S.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=S.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Oe.getClearColor(),r=Oe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(f[0]=i,f[1]=a,f[2]=o,f[3]=r,N.clearBufferuiv(N.COLOR,0,f)):(p[0]=i,p[1]=a,p[2]=o,p[3]=r,N.clearBufferiv(N.COLOR,0,p))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Le,!1),t.removeEventListener(`webglcontextrestored`,Re,!1),t.removeEventListener(`webglcontextcreationerror`,ze,!1),we.dispose(),Te.dispose(),I.dispose(),_e.dispose(),ve.dispose(),xe.dispose(),Ne.dispose(),Pe.dispose(),Se.dispose(),Ie.dispose(),Ie.removeEventListener(`sessionstart`,Ke),Ie.removeEventListener(`sessionend`,qe),Je.stop()};function Le(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),y=!0}function Re(){console.log(`THREE.WebGLRenderer: Context Restored.`),y=!1;let e=he.autoReset,t=De.enabled,n=De.autoUpdate,r=De.needsUpdate,i=De.type;Fe(),he.autoReset=e,De.enabled=t,De.autoUpdate=n,De.needsUpdate=r,De.type=i}function ze(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Be(e){let t=e.target;t.removeEventListener(`dispose`,Be),Ve(t)}function Ve(e){He(e),I.remove(e)}function He(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Se.releaseProgram(e)}),e.isShaderMaterial&&Se.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=M);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=rt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ne.setup(i,r,s,n,c);let h,g=Ae;if(c!==null&&(h=ye.get(c),g=je,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh)i._multiDrawInstances===null?g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount):g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ue(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,et(e,t,n),e.side=0,e.needsUpdate=!0,et(e,t,n),e.side=2):et(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),h=Te.get(n),h.init(t),_.push(h),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),h.setupLights();let r=new Set;return e.traverse(function(e){let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ue(a,n,e),r.add(a)}else Ue(t,n,e),r.add(t)}),_.pop(),h=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){I.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}P.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let We=null;function Ge(e){We&&We(e)}function Ke(){Je.stop()}function qe(){Je.start()}let Je=new op;Je.setAnimationLoop(Ge),typeof self<`u`&&Je.setContext(self),this.setAnimationLoop=function(e){We=e,Ie.setAnimationLoop(e),e===null?Je.stop():Je.start()},Ie.addEventListener(`sessionstart`,Ke),Ie.addEventListener(`sessionend`,qe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(y===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(t),t=Ie.getCamera()),e.isScene===!0&&e.onBeforeRender(v,e,t,S),h=Te.get(e,_.length),h.init(t),_.push(h),le.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),oe.setFromProjectionMatrix(le),ce=this.localClippingEnabled,se=Ee.init(this.clippingPlanes,ce),m=we.get(e,g.length),m.init(),g.push(m),Ie.enabled===!0&&Ie.isPresenting===!0){let e=v.xr.getDepthSensingMesh();e!==null&&Ye(e,t,-1/0,v.sortObjects)}Ye(e,t,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,re),de=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,de&&Oe.addToRenderList(m,e),this.info.render.frame++,se===!0&&Ee.beginShadows();let n=h.state.shadowsArray;De.render(n,e,t),se===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=m.opaque,i=m.transmissive;if(h.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];Ze(r,i,e,a)}de&&Oe.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Xe(m,e,r,r.viewport)}}else i.length>0&&Ze(r,i,e,t),de&&Oe.render(e),Xe(m,e,t);S!==null&&(ge.updateMultisampleRenderTarget(S),ge.updateRenderTargetMipmap(S)),e.isScene===!0&&e.onAfterRender(v,e,t),Ne.resetDefaultState(),C=-1,w=null,_.pop(),_.length>0?(h=_[_.length-1],se===!0&&Ee.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,g.pop(),m=g.length>0?g[g.length-1]:null};function Ye(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)h.pushLight(e),e.castShadow&&h.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||oe.intersectsSprite(e)){r&&ue.setFromMatrixPosition(e.matrixWorld).applyMatrix4(le);let t=xe.update(e),i=e.material;i.visible&&m.push(e,t,i,n,ue.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||oe.intersectsObject(e))){let t=xe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ue.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ue.copy(e.boundingSphere.center)),ue.applyMatrix4(e.matrixWorld).applyMatrix4(le)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&m.push(e,t,s,n,ue.z,o)}}else i.visible&&m.push(e,t,i,n,ue.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ye(i[e],t,n,r)}function Xe(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;h.setupLightsView(n),se===!0&&Ee.setGlobalState(v.clippingPlanes,n),r&&F.viewport(T.copy(r)),i.length>0&&Qe(i,t,n),a.length>0&&Qe(a,t,n),o.length>0&&Qe(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Ze(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[r.id]===void 0&&(h.state.transmissionRenderTarget[r.id]=new Eu(1,1,{generateMipmaps:!0,type:P.has(`EXT_color_buffer_half_float`)||P.has(`EXT_color_buffer_float`)?Sl:yl,minFilter:vl,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mu.workingColorSpace}));let a=h.state.transmissionRenderTarget[r.id],o=r.viewport||T;a.setSize(o.z,o.w);let s=v.getRenderTarget();v.setRenderTarget(a),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),de?Oe.render(n):v.clear();let c=v.toneMapping;v.toneMapping=0;let l=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),h.setupLightsView(r),se===!0&&Ee.setGlobalState(v.clippingPlanes,r),Qe(e,n,r),ge.updateMultisampleRenderTarget(a),ge.updateRenderTargetMipmap(a),P.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,$e(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(ge.updateMultisampleRenderTarget(a),ge.updateRenderTargetMipmap(a))}v.setRenderTarget(s),v.setClearColor(O,k),l!==void 0&&(r.viewport=l),v.toneMapping=c}function Qe(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&$e(o,t,n,s,c,l)}}function $e(e,t,n,r,i,a){e.onBeforeRender(v,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(v,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=2):v.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(v,t,n,r,i,a)}function et(e,t,n){t.isScene!==!0&&(t=M);let r=I.get(e),i=h.state.lights,a=h.state.shadowsArray,o=i.state.version,s=Se.getParameters(e,i.state,a,t,n),c=Se.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?ve:_e).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Be),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return nt(e,s),u}else s.uniforms=Se.getUniforms(e),e.onBuild(n,s,v),e.onBeforeCompile(s,v),u=Se.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Ee.uniform),nt(e,s),r.needsLights=at(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=eh.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function nt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function rt(e,t,n,r,i){t.isScene!==!0&&(t=M),ge.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Il,c=(r.isMeshStandardMaterial?ve:_e).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(m=v.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,y=I.get(r),b=h.state.lights;if(se===!0&&(ce===!0||e!==w)){let t=e===w&&r.id===C;Ee.setState(r,e,t)}let x=!1;r.version===y.__version?y.needsLights&&y.lightsStateVersion!==b.state.version?x=!0:y.outputColorSpace===s?i.isBatchedMesh&&y.batching===!1||!i.isBatchedMesh&&y.batching===!0||i.isBatchedMesh&&y.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&y.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&y.instancing===!1||!i.isInstancedMesh&&y.instancing===!0||i.isSkinnedMesh&&y.skinning===!1||!i.isSkinnedMesh&&y.skinning===!0||i.isInstancedMesh&&y.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&y.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&y.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&y.instancingMorph===!1&&i.morphTexture!==null?x=!0:y.envMap===c?r.fog===!0&&y.fog!==a||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==Ee.numPlanes||y.numIntersection!==Ee.numIntersection)?x=!0:y.vertexAlphas===l&&y.vertexTangents===u&&y.morphTargets===d&&y.morphNormals===f&&y.morphColors===p&&y.toneMapping===m?y.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,y.__version=r.version);let T=y.currentProgram;x===!0&&(T=et(r,t,i));let E=!1,D=!1,O=!1,k=T.getUniforms(),A=y.uniforms;if(F.useProgram(T.program)&&(E=!0,D=!0,O=!0),r.id!==C&&(C=r.id,D=!0),E||w!==e){k.setValue(N,`projectionMatrix`,e.projectionMatrix),k.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(N,ue.setFromMatrixPosition(e.matrixWorld)),me.logarithmicDepthBuffer&&k.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),w!==e&&(w=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(N,i,`bindMatrix`),k.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(N,`boneTexture`,e.boneTexture,ge))}i.isBatchedMesh&&(k.setOptional(N,i,`batchingTexture`),k.setValue(N,`batchingTexture`,i._matricesTexture,ge),k.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(N,`batchingColorTexture`,i._colorsTexture,ge));let ne=n.morphAttributes;if((ne.position!==void 0||ne.normal!==void 0||ne.color!==void 0)&&ke.update(i,n,T),(D||y.receiveShadow!==i.receiveShadow)&&(y.receiveShadow=i.receiveShadow,k.setValue(N,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),D&&(k.setValue(N,`toneMappingExposure`,v.toneMappingExposure),y.needsLights&&it(A,O),a&&r.fog===!0&&Ce.refreshFogUniforms(A,a),Ce.refreshMaterialUniforms(A,r,te,ee,h.state.transmissionRenderTarget[e.id]),eh.upload(N,tt(y),A,ge)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(eh.upload(N,tt(y),A,ge),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(N,`center`,i.center),k.setValue(N,`modelViewMatrix`,i.modelViewMatrix),k.setValue(N,`normalMatrix`,i.normalMatrix),k.setValue(N,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Pe.update(n,T),Pe.bind(n,T)}}return T}function it(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function at(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(e,t,n){I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=n;let r=I.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||P.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){S=e,b=t,x=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=I.get(e);s.__useDefaultFramebuffer===void 0?s.__webglFramebuffer===void 0?ge.setupRenderTarget(e):s.__hasExternalTextures&&ge.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture):(F.bindFramebuffer(N.FRAMEBUFFER,null),r=!1);let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&ge.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,T.copy(e.viewport),E.copy(e.scissor),D=e.scissorTest}else T.copy(j).multiplyScalar(te).floor(),E.copy(ie).multiplyScalar(te).floor(),D=ae;if(F.bindFramebuffer(N.FRAMEBUFFER,i)&&r&&F.drawBuffers(e,i),F.viewport(T),F.scissor(E),F.setScissorTest(D),a){let r=I.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=I.get(e.texture),i=t||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}C=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){F.bindFramebuffer(N.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!me.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!me.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,Me.convert(s),Me.convert(c),a)}finally{let e=S===null?null:I.get(S).__webglFramebuffer;F.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){F.bindFramebuffer(N.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!me.textureFormatReadable(s))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!me.textureTypeReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){let e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,e),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,Me.convert(s),Me.convert(c),0),N.flush();let o=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await lu(N,o,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a)}finally{N.deleteBuffer(e),N.deleteSync(o)}return a}}finally{let e=S===null?null:I.get(S).__webglFramebuffer;F.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(console.warn(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ge.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(console.warn(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u;n===null?(a=e.image.width,o=e.image.height,s=0,c=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.min.x,c=n.min.y),r===null?(l=0,u=0):(l=r.x,u=r.y);let d=Me.convert(t.format),f=Me.convert(t.type);ge.setTexture2D(t,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let p=N.getParameter(N.UNPACK_ROW_LENGTH),m=N.getParameter(N.UNPACK_IMAGE_HEIGHT),h=N.getParameter(N.UNPACK_SKIP_PIXELS),g=N.getParameter(N.UNPACK_SKIP_ROWS),_=N.getParameter(N.UNPACK_SKIP_IMAGES),v=e.isCompressedTexture?e.mipmaps[i]:e.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,v.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,v.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,s),N.pixelStorei(N.UNPACK_SKIP_ROWS,c),e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,i,l,u,a,o,d,f,v.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,i,l,u,v.width,v.height,d,v.data):N.texSubImage2D(N.TEXTURE_2D,i,l,u,d,f,v),N.pixelStorei(N.UNPACK_ROW_LENGTH,p),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,m),N.pixelStorei(N.UNPACK_SKIP_PIXELS,h),N.pixelStorei(N.UNPACK_SKIP_ROWS,g),N.pixelStorei(N.UNPACK_SKIP_IMAGES,_),i===0&&t.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(console.warn(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.max.z-n.min.z,c=n.min.x,l=n.min.y,u=n.min.z),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Me.convert(t.format),g=Me.convert(t.type),_;if(t.isData3DTexture)ge.setTexture3D(t,0),_=N.TEXTURE_3D;else if(t.isDataArrayTexture||t.isCompressedArrayTexture)ge.setTexture2DArray(t,0),_=N.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let v=N.getParameter(N.UNPACK_ROW_LENGTH),y=N.getParameter(N.UNPACK_IMAGE_HEIGHT),b=N.getParameter(N.UNPACK_SKIP_PIXELS),x=N.getParameter(N.UNPACK_SKIP_ROWS),S=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,m.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,m.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,c),N.pixelStorei(N.UNPACK_SKIP_ROWS,l),N.pixelStorei(N.UNPACK_SKIP_IMAGES,u),e.isDataTexture||e.isData3DTexture?N.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):N.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m),N.pixelStorei(N.UNPACK_ROW_LENGTH,v),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,y),N.pixelStorei(N.UNPACK_SKIP_PIXELS,b),N.pixelStorei(N.UNPACK_SKIP_ROWS,x),N.pixelStorei(N.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&N.generateMipmap(_),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&ge.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ge.setTextureCube(e,0):e.isData3DTexture?ge.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ge.setTexture2DArray(e,0):ge.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){b=0,x=0,S=null,F.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Wl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=mu.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}},fg=class extends Md{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hd,this.environmentIntensity=1,this.environmentRotation=new hd,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},pg=class extends Zd{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Jd(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},mg=new H,hg=new H,gg=new ad,_g=new id,vg=new Xu,yg=new H,bg=new H,xg=class extends Md{constructor(e=new pf,t=new pg){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)mg.fromBufferAttribute(t,e-1),hg.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=mg.distanceTo(hg);e.setAttribute(`lineDistance`,new af(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vg.copy(n.boundingSphere),vg.applyMatrix4(r),vg.radius+=i,e.ray.intersectsSphere(vg)===!1)return;gg.copy(r).invert(),_g.copy(e.ray).applyMatrix4(gg);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Sg(this,e,_g,s,n,r);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Sg(this,e,_g,s,i,a);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Sg(this,e,_g,s,i,i+1);n&&t.push(n)}if(this.isLineLoop){let i=Sg(this,e,_g,s,r-1,n);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Sg(e,t,n,r,i,a){let o=e.geometry.attributes.position;if(mg.fromBufferAttribute(o,i),hg.fromBufferAttribute(o,a),n.distanceSqToSegment(mg,hg,yg,bg)>r)return;yg.applyMatrix4(e.matrixWorld);let s=t.ray.origin.distanceTo(yg);if(!(s<t.near||s>t.far))return{distance:s,point:bg.clone().applyMatrix4(e.matrixWorld),index:i,face:null,faceIndex:null,object:e}}var Cg=new H,wg=new H,Tg=class extends xg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Cg.fromBufferAttribute(t,e),wg.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Cg.distanceTo(wg);e.setAttribute(`lineDistance`,new af(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Eg=class e extends pf{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new H,p=new tu;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new af(s,3)),this.setAttribute(`normal`,new af(c,3)),this.setAttribute(`uv`,new af(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Dg=class extends Zd{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:``},this.type=`MeshMatcapMaterial`,this.color=new Jd(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new tu(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:``},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Og(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function kg(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ag=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},jg=class extends Ag{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case jl:i=e,o=2*t-n;break;case Ml:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case jl:a=e,s=2*n-t;break;case Ml:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Mg=class extends Ag{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ng=class extends Ag{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Pg=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Og(t,this.TimeBufferType),this.values=Og(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Og(e.times,Array),values:Og(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ng(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Dl:t=this.InterpolantFactoryMethodDiscrete;break;case Ol:t=this.InterpolantFactoryMethodLinear;break;case kl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dl;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&kg(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===kl,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Pg.prototype.TimeBufferType=Float32Array,Pg.prototype.ValueBufferType=Float32Array,Pg.prototype.DefaultInterpolation=Ol;var Fg=class extends Pg{constructor(e,t,n){super(e,t,n)}};Fg.prototype.ValueTypeName=`bool`,Fg.prototype.ValueBufferType=Array,Fg.prototype.DefaultInterpolation=Dl,Fg.prototype.InterpolantFactoryMethodLinear=void 0,Fg.prototype.InterpolantFactoryMethodSmooth=void 0;var Ig=class extends Pg{};Ig.prototype.ValueTypeName=`color`;var Lg=class extends Pg{};Lg.prototype.ValueTypeName=`number`;var Rg=class extends Ag{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ku.slerpFlat(i,0,a,c-o,a,c,s);return i}},zg=class extends Pg{InterpolantFactoryMethodLinear(e){return new Rg(this.times,this.values,this.getValueSize(),e)}};zg.prototype.ValueTypeName=`quaternion`,zg.prototype.InterpolantFactoryMethodSmooth=void 0;var Bg=class extends Pg{constructor(e,t,n){super(e,t,n)}};Bg.prototype.ValueTypeName=`string`,Bg.prototype.ValueBufferType=Array,Bg.prototype.DefaultInterpolation=Dl,Bg.prototype.InterpolantFactoryMethodLinear=void 0,Bg.prototype.InterpolantFactoryMethodSmooth=void 0;var Vg=class extends Pg{};Vg.prototype.ValueTypeName=`vector`;var Hg=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},Ug=class{constructor(e){this.manager=e===void 0?Hg:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ug.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Wg=`\\[\\]\\.:\\/`,Gg=RegExp(`[\\[\\]\\.:\\/]`,`g`),Kg=`[^\\[\\]\\.:\\/]`,qg=`[^`+Wg.replace(`\\.`,``)+`]`,Jg=`((?:WC+[\\/:])*)`.replace(`WC`,Kg),Yg=`(WCOD+)?`.replace(`WCOD`,qg),Xg=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Kg),Zg=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Kg),Qg=RegExp(`^`+Jg+Yg+Xg+Zg+`$`),$g=[`material`,`materials`,`bones`,`map`],e_=class{constructor(e,t,n){let r=n||t_.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},t_=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Gg,``)}static parseTrackName(e){let t=Qg.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);$g.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};t_.Composite=e_,t_.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},t_.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},t_.prototype.GetterByBindingType=[t_.prototype._getValue_direct,t_.prototype._getValue_array,t_.prototype._getValue_arrayElement,t_.prototype._getValue_toArray],t_.prototype.SetterByBindingTypeAndVersioning=[[t_.prototype._setValue_direct,t_.prototype._setValue_direct_setNeedsUpdate,t_.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[t_.prototype._setValue_array,t_.prototype._setValue_array_setNeedsUpdate,t_.prototype._setValue_array_setMatrixWorldNeedsUpdate],[t_.prototype._setValue_arrayElement,t_.prototype._setValue_arrayElement_setNeedsUpdate,t_.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[t_.prototype._setValue_fromArray,t_.prototype._setValue_fromArray_setNeedsUpdate,t_.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var n_=new ad,r_=class{constructor(e,t,n=0,r=1/0){this.ray=new id(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new gd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return n_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(n_),this}intersectObject(e,t=!0,n=[]){return a_(e,this,n,t),n.sort(i_),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)a_(e[r],this,n,t);return n.sort(i_),n}};function i_(e,t){return e.distance-t.distance}function a_(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)a_(r[e],t,n,!0)}}var o_=class extends Tg{constructor(e=10,t=10,n=4473924,r=8947848){n=new Jd(n),r=new Jd(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new pf;l.setAttribute(`position`,new af(s,3)),l.setAttribute(`color`,new af(c,3));let u=new pg({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`165`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`165`);var s_=new v,c_=new v,l_={x:`XYZ`,y:`YXZ`,z:`ZXY`};function u_(e,t,n,r,i,a){s_.copy(n),i!=null&&s_.premultiply(c_.copy(i).invert());let s=new o,c=new O,l=new o;s_.decompose(s,c,l),C_(s,r.initialTargetPosition,a.translate??!0);let u,d=a.rotate??!0;if(d===!1)c.copy(r.initialTargetQuaternion),u=r.initialTargetRotation.clone();else if(Array.isArray(d)||d===!0||typeof d!=`string`&&!Array.isArray(d)&&d.x===!0&&d.y===!0&&d.z===!0)u=new _().setFromQuaternion(c,r.initialTargetRotation.order);else if(typeof d==`string`){let e=l_[d];u=new _().setFromQuaternion(c,e);for(let t of e){let e=t.toLowerCase();e!==d&&(u[e]=0)}u.order=r.initialTargetRotation.order,c.setFromEuler(u)}else u=v_(c,r.initialTargetRotation,d);return typeof a.scale!=`object`||!a.scale.uniform?C_(l,r.initialTargetScale,a.scale??!0):w_(l,r.initialTargetScale,a.scale),{pointerAmount:t,position:s,quaternion:c,rotation:u,scale:l,time:e}}var d_=new l,f_=new o,p_=new o,m_=new o,h_=new O;function g_(e,t,n){return d_.normal.copy(e),d_.constant=0,__(f_,d_.normal),p_.copy(f_),p_.applyQuaternion(h_.copy(t).invert().premultiply(n)),d_.projectPoint(f_,f_).normalize(),d_.projectPoint(p_,p_).normalize(),(m_.crossVectors(f_,d_.normal).dot(p_)<0?1:-1)*f_.angleTo(p_)}function __(e,t){if(t.x===0){e.set(1,0,0);return}if(t.y===0){e.set(0,1,0);return}if(t.z===0){e.set(0,0,1);return}e.set(-t.y,t.x,0)}function v_(e,t,n){let r=``,i=``;for(let e of t.order)n[e.toLowerCase()]===!1?i+=e:r+=e;let a=r+i,o=new _().setFromQuaternion(e,a);for(let e of a){let r=e.toLowerCase();o[r]=T_(r,o[r],t[r],n)}return e.setFromEuler(o),o}var y_=new o,b_=new l,x_=new o,S_=new o;function C_(e,t,n){if(Array.isArray(n)){switch(n.length){case 0:e.copy(t);return;case 1:e.sub(t),U_(e,n[0]instanceof o?n[0]:y_.fromArray(n[0])),e.add(t);return;case 2:y_.crossVectors(n[0]instanceof o?n[0]:x_.fromArray(n[0]),n[1]instanceof o?n[1]:S_.fromArray(n[1])),b_.setFromNormalAndCoplanarPoint(y_,t),b_.projectPoint(e,e);return}return}e.x=T_(`x`,e.x,t.x,n),e.y=T_(`y`,e.y,t.y,n),e.z=T_(`z`,e.z,t.z,n)}function w_(e,t,n){if(Array.isArray(n))return;let r=-1/0,i=1/0;for(let e of[`x`,`y`,`z`]){let a=n[e],o=t[e];if(!Array.isArray(a)||o===0)continue;let s=a[0]/o,c=a[1]/o;r=Math.max(r,Math.min(s,c)),i=Math.min(i,Math.max(s,c))}if(r===-1/0&&i===1/0)return;let a=e.length()/t.length();e.copy(t).multiplyScalar(y(a,r,i))}function T_(e,t,n,r){if(typeof r==`boolean`)return r?t:n;if(typeof r==`string`)return r===e?t:n;let i=r[e];return i===!1?n:Array.isArray(i)?y(t,...i):t}function E_(e=!0,t,n,r,i,a){if(e){switch(t.length){case 0:case 3:return;case 1:V_(n,...t,r,i,a);return;case 2:B_(...t,n,r,i,a);return}throw Error(`space cannot be ${t.length}D but received (${t.map(e=>e.toArray().join(`/`)).join(`; `)})`)}}var D_={x:new o(1,0,0),y:new o(0,1,0),z:new o(0,0,1)};function O_(e,t,n,r,i){if(r!==!1){if(r===!0){e[0]=D_.x,e[1]=D_.y,e[2]=D_.z;return}if(typeof r==`string`){P_(e,t,n,r,i);return}if(Array.isArray(r)){for(let a of r)P_(e,t,n,a,i);return}r.x!==!1&&P_(e,t,n,`x`,i),r.y!==!1&&P_(e,t,n,`y`,i),r.z!==!1&&P_(e,t,n,`z`,i)}}var k_=new O,A_=new _,j_=new o,M_=new o,N_=new o;function P_(e,t,n,r,i){if(Array.isArray(r)?j_.set(...r):r instanceof o?j_.copy(r):j_.copy(D_[r]),i===`translate`){j_.applyQuaternion(t),I_(e,j_);return}if(i===`scale`){Array.isArray(r)?k_.identity():k_.setFromEuler(n),k_.premultiply(t),j_.applyQuaternion(k_),I_(e,j_);return}if(Array.isArray(r))A_.set(0,0,0);else{A_.copy(n);for(let e=2;e>=0;e--){let t=n.order[e].toLowerCase();if(A_[t]=0,t===r)break}}k_.setFromEuler(A_).premultiply(t),j_.normalize(),M_.set(0,1,0),j_.dot(M_)>.99&&M_.set(0,0,1),N_.crossVectors(j_,M_).normalize(),M_.copy(N_),N_.applyQuaternion(k_),I_(e,N_),N_.crossVectors(j_,M_).normalize(),N_.applyQuaternion(k_),I_(e,N_)}var F_=new o;function I_(e,t){if(e.length!==3){if(e.length===0){e.push(t.clone());return}if(e.length===1){Math.abs(e[0].dot(t))<.999&&e.push(t.clone());return}F_.crossVectors(e[0],e[1]),!(Math.abs(F_.dot(t))<.001)&&e.push(t.clone())}}var L_=new l,R_=new o,z_=new o;function B_(e,t,n,r,i,a){R_.crossVectors(e,t).normalize(),L_.setFromNormalAndCoplanarPoint(R_,n);let o=a==null?0:Math.abs(R_.dot(a));if(a==null||o<.01){L_.projectPoint(i,i);return}let s=-L_.distanceToPoint(r)/a.dot(L_.normal);if(s<0){L_.projectPoint(i,i);return}z_.copy(i),i.copy(r).addScaledVector(a,s)}function V_(e,t,n,r,i){let a=i==null?0:1-Math.abs(t.dot(i));if(i==null||a<.001){H_(r,e,t);return}z_.subVectors(n,e);let o=t.dot(i),s=t.dot(z_),c=i.dot(z_),l=1-o*o,u=(s-o*c)/l;if((o*s-c)/l<0){H_(r,e,t);return}z_.copy(r),r.copy(e).addScaledVector(t,u)}function H_(e,t,n){e.sub(t),U_(e,n),e.add(t)}function U_(e,t){let n=e.dot(t);e.copy(t).multiplyScalar(n)}var W_=new v,G_=new v,K_=new o,q_=new o,J_=new O,Y_=new o(1,1,1),X_=[];function Z_(e,t,n,r,i){return r==null?J_.identity():r.decompose(K_,J_,q_),X_.length=0,O_(X_,J_,n.initialTargetRotation,i.translate??!0,`translate`),G_.makeRotationFromQuaternion(J_.copy(t.initialPointerWorldQuaternion).invert()).multiply(W_.makeTranslation(K_.copy(t.initialPointerWorldPoint).negate())),n.initialTargetParentWorldMatrix!=null&&G_.multiply(n.initialTargetParentWorldMatrix),E_(i.projectRays,X_,t.initialPointerWorldPoint,t.pointerWorldOrigin,K_.copy(t.pointerWorldPoint),t.pointerWorldDirection),J_.copy(t.pointerWorldQuaternion),(i.rotate??!0)===!1&&J_.copy(t.initialPointerWorldQuaternion),W_.compose(K_,J_,Y_).multiply(G_).multiply(G_.compose(n.initialTargetPosition,n.initialTargetQuaternion,n.initialTargetScale)),u_(e,1,W_,n,r,i)}var Q_=new o,$_=new o,ev=new o,tv=new o,nv=new o,rv=new o,iv=new o,av=new v,ov=new v,sv=new v,cv=new O,lv=new O,uv=[];function dv(e,t,n,r,i,a){i==null?cv.identity():i.decompose(ev,cv,tv),uv.length=0,O_(uv,cv,r.initialTargetRotation,a.translate??!0,`translate`),O_(uv,cv,r.initialTargetRotation,a.rotate??!0,`rotate`),O_(uv,cv,r.initialTargetRotation,a.scale??!0,`scale`),E_(a.projectRays,uv,t.initialPointerWorldPoint,t.pointerWorldOrigin,ev.copy(t.pointerWorldPoint),t.pointerWorldDirection),E_(a.projectRays,uv,n.initialPointerWorldPoint,n.pointerWorldOrigin,tv.copy(n.pointerWorldPoint),n.pointerWorldDirection),Q_.copy(n.initialPointerWorldPoint).sub(t.initialPointerWorldPoint),$_.copy(tv).sub(ev),ev.copy(Q_),r.prevTwoPointerDeltaRotation!=null&&ev.applyQuaternion(r.prevTwoPointerDeltaRotation),ev.normalize(),tv.copy($_).normalize(),cv.setFromUnitVectors(ev,tv),r.prevTwoPointerDeltaRotation==null?r.prevTwoPointerDeltaRotation=new O:cv.multiply(r.prevTwoPointerDeltaRotation),r.prevTwoPointerDeltaRotation.copy(cv);let o=(g_(tv,t.prevPointerWorldQuaternion,t.pointerWorldQuaternion)+g_(tv,n.prevPointerWorldQuaternion,n.pointerWorldQuaternion))*.5+(r.prevAngle??0);if(r.prevAngle=o,cv.premultiply(lv.setFromAxisAngle(tv,o)),sv.compose(r.initialTargetPosition,r.initialTargetQuaternion,r.initialTargetScale),r.initialTargetParentWorldMatrix!=null&&sv.premultiply(r.initialTargetParentWorldMatrix),typeof a.scale==`object`&&(a.scale.uniform??!1))iv.setScalar($_.length()/Q_.length());else{sv.decompose(nv,lv,rv),ev.copy(Q_).applyQuaternion(lv.invert()).divide(rv),ev.x=Math.abs(ev.x),ev.y=Math.abs(ev.y),ev.z=Math.abs(ev.z);let e=Math.max(...ev.toArray());ev.divideScalar(e),iv.set(1,1,1),iv.addScaledVector(ev,$_.length()/Q_.length()-1)}return av.makeTranslation(ev.copy($_).multiplyScalar(.5).add(t.pointerWorldPoint)).multiply(ov.makeRotationFromQuaternion(cv)).multiply(ov.makeRotationFromQuaternion(lv.invert())).multiply(ov.makeScale(iv.x,iv.y,iv.z)).multiply(ov.makeRotationFromQuaternion(lv.invert())).multiply(ov.makeTranslation(ev.copy(Q_).multiplyScalar(.5).add(t.initialPointerWorldPoint).negate())).multiply(sv),u_(e,2,av,r,i,a)}var fv=new o,pv=new o,mv=new o,hv=new o,gv=new o,_v=new O,vv=new O,yv=new v,bv=new o,xv=[];function Sv(e,t,n,r,i,a){if(i==null?_v.identity():i.decompose(fv,_v,pv),xv.length=0,a.translate===`as-scale`&&O_(xv,_v,n.initialTargetRotation,a.scale??!0,`scale`),a.translate!=`as-scale`&&O_(xv,_v,n.initialTargetRotation,a.rotate??!0,`rotate`),yv.makeTranslation(n.initialTargetPosition),n.initialTargetParentWorldMatrix!=null&&yv.premultiply(n.initialTargetParentWorldMatrix),hv.setFromMatrixPosition(yv),E_(a.projectRays,xv,t.initialPointerWorldPoint,t.pointerWorldOrigin,hv,void 0),hv.negate().add(t.initialPointerWorldPoint),gv.setFromMatrixPosition(r),E_(a.projectRays,xv,t.initialPointerWorldPoint,t.pointerWorldOrigin,gv,void 0),E_(a.projectRays,xv,t.initialPointerWorldPoint,t.pointerWorldOrigin,pv.copy(t.pointerWorldPoint),t.pointerWorldDirection),gv.negate().add(pv),a.translate===`as-scale`?_v.copy(n.initialTargetQuaternion):(fv.copy(hv),n.prevTranslateAsDeltaRotation!=null&&fv.applyQuaternion(n.prevTranslateAsDeltaRotation),fv.normalize(),pv.copy(gv).normalize(),_v.setFromUnitVectors(fv,pv),n.prevTranslateAsDeltaRotation==null?n.prevTranslateAsDeltaRotation=new O:_v.multiply(n.prevTranslateAsDeltaRotation),n.prevTranslateAsDeltaRotation.copy(_v),n.initialTargetParentWorldMatrix!=null&&(vv.setFromRotationMatrix(n.initialTargetParentWorldMatrix),_v.multiply(vv.normalize()),_v.premultiply(vv.invert())),_v.multiply(n.initialTargetQuaternion)),a.translate===`as-rotate`)bv.set(1,1,1);else if(typeof a.scale==`object`&&(a.scale.uniform??!1))bv.setScalar(gv.length()/hv.length());else if(a.translate===`as-rotate-and-scale`){yv.compose(n.initialTargetPosition,n.initialTargetQuaternion,n.initialTargetScale),n.initialTargetParentWorldMatrix!=null&&yv.premultiply(n.initialTargetParentWorldMatrix),yv.decompose(pv,vv,mv),fv.copy(hv).applyQuaternion(vv.invert()).divide(mv),fv.x=Math.abs(fv.x),fv.y=Math.abs(fv.y),fv.z=Math.abs(fv.z);let e=Math.max(...fv.toArray());fv.divideScalar(e),bv.set(1,1,1),bv.addScaledVector(fv,gv.length()/hv.length()-1)}else n.initialTargetParentWorldMatrix==null?vv.copy(n.initialTargetQuaternion):(n.initialTargetParentWorldMatrix.decompose(fv,vv,pv),vv.multiply(n.initialTargetQuaternion)),fv.copy(hv).applyQuaternion(vv.invert()),i==null?vv.copy(n.initialTargetQuaternion):(i.decompose(pv,vv,mv),vv.multiply(n.initialTargetQuaternion)),pv.copy(gv).applyQuaternion(vv.invert()),bv.x=Math.abs(fv.x)<.001?1:Math.abs(pv.x/fv.x),bv.y=Math.abs(fv.y)<.001?1:Math.abs(pv.y/fv.y),bv.z=Math.abs(fv.z)<.001?1:Math.abs(pv.z/fv.z);return bv.multiply(n.initialTargetScale),yv.compose(n.initialTargetPosition,_v,bv),u_(e,1,yv,n,void 0,a)}var Cv=class{t1;t2;_position;_quaternion;_rotation;_scale;constructor(e,t){this.t1=e,this.t2=t}get time(){return this.t1.time-this.t2.time}get position(){return this._position??=this.t1.position.clone().sub(this.t2.position)}get quaternion(){return this._quaternion??=this.t2.quaternion.clone().invert().premultiply(this.t1.quaternion)}get rotation(){return this._rotation??=new _().setFromQuaternion(this.quaternion)}get scale(){return this._scale??=this.t1.scale.clone().sub(this.t2.scale)}},wv=class{cancel;previous;memo;event;initial;current;first;last;_delta;_offset;constructor(e){this.cancel=e}start(e,t){this.event=e,this.previous=void 0,this.current=t,this.initial=t,this.first=!0,this.last=!1,this.memo=void 0,this._delta=void 0,this._offset=void 0}update(e,t){this.event=e,this.previous=this.current,this.current=t,this.first=!1,this.last=!1,this._delta=void 0,this._offset=void 0}end(e){this.event=e,this.first=!1,this.last=!0,this._delta=void 0,this._offset=void 0}get delta(){if(this.previous!=null)return this._delta??=new Cv(this.current,this.previous)}get offset(){return this._offset??=new Cv(this.current,this.initial)}};function Tv(e,t){if(e.details.type===`sphere`)return!1;if(e.details.type===`lines`){let{line:n}=e.details;return t.copy(n.end).sub(n.start).normalize(),!0}return e.details.type===`screen-ray`?(t.copy(e.details.direction),!0):(t.set(0,0,-1).applyQuaternion(e.pointerQuaternion),!0)}var Ev=new o,Dv=class{target;getOptions;outputState;latestMoveEvent;inputState=new Map;capturedObjects=new Map;initialTargetPosition=new o;initialTargetQuaternion=new O;initialTargetRotation=new _;initialTargetScale=new o;initialTargetParentWorldMatrix;prevTwoPointerDeltaRotation;prevTranslateAsDeltaRotation;prevAngle;handlers={onPointerDown:this.onPointerDown.bind(this),onPointerMove:this.onPointerMove.bind(this),onPointerEnd:this.onPointerEnd.bind(this)};constructor(e,t=()=>({})){this.target=e,this.getOptions=t,this.outputState=new wv(this.cancel.bind(this))}firstOnPointer(e){let t=this.getTarget();if(t==null)return;let n=Tv(e,Ev)?Ev.clone():void 0;e.intersection.details.type,this.inputState.set(e.pointerId,{pointerWorldDirection:n,pointerWorldPoint:e.point,pointerWorldOrigin:e.pointerPosition,pointerWorldQuaternion:e.pointerQuaternion,initialPointerWorldPoint:e.point.clone(),initialPointerWorldDirection:n?.clone(),initialPointerWorldQuaternion:e.pointerQuaternion.clone(),prevPointerWorldQuaternion:e.pointerQuaternion}),this.save(),this.inputState.size===1&&this.outputState.start(e,{pointerAmount:1,time:e.timeStamp,position:this.initialTargetPosition.clone(),quaternion:this.initialTargetQuaternion.clone(),rotation:this.initialTargetRotation.clone(),scale:this.initialTargetScale.clone()}),this.outputState.memo=this.apply(t)}onPointerDown(e){this.getOptions().filter?.(e)!==!1&&(this.stopPropagation(e),this.capturePointer(e.pointerId,e.object)&&this.firstOnPointer(e))}onPointerMove(e){if(!this.capturedObjects.has(e.pointerId))return;this.stopPropagation(e);let t=this.inputState.get(e.pointerId);if(t==null){this.firstOnPointer(e);return}this.latestMoveEvent=e,t.pointerWorldPoint=e.point,t.prevPointerWorldQuaternion=t.pointerWorldQuaternion,t.pointerWorldQuaternion=e.pointerQuaternion,t.pointerWorldOrigin=e.pointerPosition,t.pointerWorldDirection!=null&&Tv(e,t.pointerWorldDirection)}cancel(){if(this.capturedObjects.size===0)return;for(let[e,t]of this.capturedObjects)t.releasePointerCapture(e);this.capturedObjects.clear(),this.inputState.clear(),this.outputState.end(void 0);let e=this.getTarget();e!=null&&this.apply(e)}onPointerEnd(e){let t=this.capturedObjects.get(e.pointerId);t!=null&&(this.stopPropagation(e),this.releasePointer(e.pointerId,t,e))}update(e){let t=this.getTarget();if(t==null||this.inputState.size===0||this.latestMoveEvent==null&&(this.getOptions().alwaysUpdate??!1)===!1)return;let n=this.getOptions(),r;if(n.translate===`as-rotate`||n.translate===`as-rotate-and-scale`||n.translate===`as-scale`){n.translate,this.prevTwoPointerDeltaRotation=void 0,this.prevAngle=void 0;let[i]=this.inputState.values(),a=t.matrixWorld,o=t.parent?.matrixWorld;r=Sv(e,i,this,a,o,n)}else if(this.inputState.size===1){this.prevTwoPointerDeltaRotation=void 0,this.prevAngle=void 0,this.prevTranslateAsDeltaRotation=void 0;let[i]=this.inputState.values();r=Z_(e,i,this,t.parent?.matrixWorld,n)}else{this.prevTranslateAsDeltaRotation=void 0;let[i,a]=this.inputState.values();r=dv(e,i,a,this,t.parent?.matrixWorld,n)}this.outputState.update(this.latestMoveEvent,r),this.outputState.memo=this.apply(t),this.latestMoveEvent=void 0}getTarget(){return this.target instanceof s?this.target:this.target?.current}capturePointer(e,t){if(this.capturedObjects.has(e))return!1;let{multitouch:n,translate:r}=this.getOptions();return((n??!0)===!1||typeof r==`string`)&&this.capturedObjects.size===1?!1:(this.capturedObjects.set(e,t),t.setPointerCapture(e),!0)}releasePointer(e,t,n){let r=this.getTarget();if(!(r==null||!this.capturedObjects.delete(e))){if(this.inputState.delete(e),t.releasePointerCapture(e),this.inputState.size>0){this.save();return}this.outputState.end(n),this.apply(r)}}stopPropagation(e){e==null||!(this.getOptions()?.stopPropagation??!0)||e.stopPropagation()}apply(e){return(this.getOptions().apply??kv)(this.outputState,e)}getState(){return this.inputState.size===0?void 0:this.outputState}save(){let e=this.getTarget();if(e!=null){e.updateWorldMatrix(!0,!1),this.prevAngle=void 0,this.prevTwoPointerDeltaRotation=void 0,this.prevTranslateAsDeltaRotation=void 0,this.initialTargetParentWorldMatrix=e.parent?.matrixWorld.clone(),e.matrixAutoUpdate?(this.initialTargetPosition.copy(e.position),this.initialTargetQuaternion.copy(e.quaternion),this.initialTargetRotation.copy(e.rotation),this.initialTargetScale.copy(e.scale)):(e.matrix.decompose(this.initialTargetPosition,this.initialTargetQuaternion,this.initialTargetScale),this.initialTargetRotation.setFromQuaternion(this.initialTargetQuaternion,e.rotation.order));for(let e of this.inputState.values())e.pointerWorldDirection!=null&&e.initialPointerWorldDirection?.copy(e.pointerWorldDirection),e.initialPointerWorldPoint.copy(e.pointerWorldPoint),e.initialPointerWorldQuaternion.copy(e.pointerWorldQuaternion)}}bind(e){let{onPointerDown:t,onPointerMove:n,onPointerEnd:r}=this.handlers;return e.addEventListener(`pointerdown`,t),e.addEventListener(`pointermove`,n),e.addEventListener(`pointercancel`,r),e.addEventListener(`pointerup`,r),()=>{e.removeEventListener(`pointerdown`,t),e.removeEventListener(`pointermove`,n),e.removeEventListener(`pointercancel`,r),e.removeEventListener(`pointerup`,r),this.cancel()}}capture(e,t){return this.capturePointer(e,t)?()=>this.releasePointer(e,t,void 0):Ov}};function Ov(){}function kv(e,t){t.position.copy(e.current.position),t.rotation.order=e.current.rotation.order,t.quaternion.copy(e.current.quaternion),t.scale.copy(e.current.scale)}var Av=class{target;getOptions;handles=[];hoveredTagMap=new Map;hoverSubscriptions=[];applySubscriptions=[];space;constructor(e,t){this.target=e,this.getOptions=t}getSpace(){return this.space??`world`}getTarget(){return this.target instanceof s?this.target:this.target.current}getHandleOptions(e,t){let n=this.getOptions?.(),r=t?.();return{...n,...r,apply:(t,i)=>(this.onApply(e,t,i),(r?.apply??n?.apply??kv)?.(t,i))}}registerHandle(e,t,n){let r={object:t,store:e,tag:n};this.handles.push(r);let i=e.bind(t),a=this.onPointerEnter.bind(this,n),o=this.onPointerLeave.bind(this);return t.addEventListener(`pointerenter`,a),t.addEventListener(`pointerleave`,o),()=>{let t=this.handles.indexOf(r);t!=-1&&this.handles.splice(t,1),i(),e.cancel()}}subscribeHover(e){return this.hoverSubscriptions.push(e),e(Array.from(this.hoveredTagMap.values())),()=>{let t=this.hoverSubscriptions.indexOf(e);t!==-1&&this.hoverSubscriptions.splice(t,1)}}subscribeApply(e){return this.applySubscriptions.push(e),()=>{let t=this.applySubscriptions.indexOf(e);t!==-1&&this.applySubscriptions.splice(t,1)}}update(e){for(let{store:t}of this.handles)t.update(e)}onPointerEnter(e,t){this.hoveredTagMap.set(t.pointerId,e),this.updateHover()}onPointerLeave(e){this.hoveredTagMap.delete(e.pointerId),this.updateHover()}updateHover(){let e=Array.from(this.hoveredTagMap.values());for(let t of this.hoverSubscriptions)t(e)}onApply(e,t,n){for(let r of this.applySubscriptions)r(e,t,n)}},jv={depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0};function Mv(e,t,n,{color:r,hoverColor:i,hoverOpacity:a,opacity:o,disabled:s=!1}){if(i==null&&a==null||s){t.color.set(r),t.opacity=o??1,s&&(t.opacity*=.5,t.color.lerp(new C(1,1,1),.5));return}return i??=r,e.subscribeHover(e=>{let s=e.some(e=>e.includes(n));t.color.set(s?i:r),t.opacity=(s?a:o)??1})}var Nv=new O,Pv=new b;Pv.setAttribute(`position`,new T([-1e3,0,0,1e3,0,0],3));var Fv=class extends x{context;rotationOffset;constructor(e,t){super(Pv),this.context=e,this.rotationOffset=t,this.renderOrder=1/0}update(){this.quaternion.setFromEuler(this.rotationOffset);let e=this.context.getTarget();this.context.getSpace()===`world`&&e!=null&&(e.getWorldQuaternion(Nv).invert(),this.quaternion.premultiply(Nv))}bind(e){this.material=new f({...jv,color:this.material.color??`white`,opacity:this.material.opacity??1});let t=this.context.subscribeHover(t=>{let n=t.some(t=>t.includes(e));this.visible=n}),n=this.context.subscribeApply((e,t)=>{if(t.last){this.position.set(0,0,0);return}this.position.copy(t.initial.position).sub(t.current.position);let n=this.context.getTarget();n!=null&&(Nv.copy(n.quaternion).invert(),this.position.applyQuaternion(Nv))});return()=>{this.material.dispose(),t(),n()}}},Iv=class extends d{context;axis;store;options;tag;constructor(e,t,n,r){super(),this.context=e,this.axis=t,this.tag=(n??``)+t,this.store=new Dv(e.target,()=>e.getHandleOptions(this.tag,r))}};function Lv(e,t=!0){if(t===!1)return{options:!1,disabled:!0};if(t===!0){let t={x:!1,y:!1,z:!1,e:!1};for(let n of e)t[n]=!0;return{options:t,disabled:!1}}if(t===`disabled`)return{options:{x:!0,y:!0,z:!0,e:!0},disabled:!0};if(typeof t==`string`)return{options:t===e&&{x:!1,y:!1,z:!1,e:!1,[e]:!0},disabled:!1};let n={x:!1,y:!1,z:!1,e:!1},r=!1;for(let i of e){let e=t[i]??!0;if(e===!1)return{options:!1,disabled:!0};e===`disabled`&&(r=!0,e=!0),n[i]=e}return{options:n,disabled:r}}var Rv=new o,zv=new o;function Bv(e,t,n,r){if(!n)return r;let i;return t instanceof k?i=(t.top-t.bottom)/t.zoom:(t.getWorldPosition(Rv),e.getWorldPosition(zv),i=Rv.distanceTo(zv)*Math.min(1.9*Math.tan(Math.PI*t.fov/360)/t.zoom,7)),i*r/4}var Vv=new u(0,.04,.1,12);Vv.translate(0,.05,0);var Hv=new u(.0075,.0075,.5,3);Hv.translate(0,.25,0);var Uv=new _(0,0,-Math.PI/2),Wv=new _(0,0,Math.PI/2),Gv=class extends Iv{invert;showArrowBody;constructor(e,t,n=``,r,i=!1,a=!0){super(e,t,n,()=>({scale:!1,rotate:!1,translate:r==null?this.options:[r],multitouch:!1})),this.invert=i,this.showArrowBody=a}bind(e,t,n){let{options:r,disabled:i}=Lv(this.axis,n);if(r===!1)return;this.options=r;let a=this.invert?Wv:Uv,o=new p(jv),s=Mv(this.context,o,this.tag,{color:e,hoverColor:t,disabled:i}),c=new m(Vv,o);c.renderOrder=1/0,c.position.x=this.invert?-.5:.5,c.rotation.copy(a),this.add(c);let l,d;if(this.showArrowBody){let t=new p(jv);l=Mv(this.context,t,this.tag,{color:e,hoverColor:16777024,disabled:i}),d=new m(Hv,t),d.renderOrder=1/0,d.rotation.copy(a),this.add(d)}let f=new m(new u(.13,0,.6,4));f.pointerEventsOrder=1/0,f.position.x=this.invert?-.3:.3,f.rotation.copy(a),f.visible=!1,this.add(f);let h=i?void 0:this.context.registerHandle(this.store,f,this.tag);return()=>{o.dispose(),h?.(),s?.(),l?.(),this.remove(c),d!=null&&this.remove(d),this.remove(f)}}},Kv=class extends Iv{constructor(e,t,n=``,r){super(e,t,n,()=>({translate:r??this.options,scale:!1,rotate:!1,multitouch:!1}))}bind(e,t,n){let{options:r,disabled:i}=Lv(this.axis,n);if(r===!1)return;this.options=r;let a=new p(jv),o=Mv(this.context,a,this.tag,{opacity:.5,hoverOpacity:1,color:e,hoverColor:t,disabled:i}),s=new m(new c(.2,.2,.01),a);s.renderOrder=1/0,s.pointerEventsOrder=1/0,s.position.set(.15,.15,0);let l=i?void 0:this.context.registerHandle(this.store,s,this.tag);return this.add(s),()=>{a.dispose(),s.geometry.dispose(),l?.(),o?.(),this.remove(s)}}};new o;var qv=new O;function Jv(e,t){let n=new m(new E(.01,2),new p(jv));n.renderOrder=1/0,n.visible=!1,e.add(n);let r=new m(new E(.01,2),new p(jv));r.renderOrder=1/0,r.visible=!1,e.add(r);let i=new b;i.setAttribute(`position`,new T([0,0,0,1,1,1],3));let a=new x(i,new f(jv));a.renderOrder=1/0,a.visible=!1,e.add(a);let o=t.subscribeApply((e,i)=>{r.position.set(0,0,0),n.position.copy(i.initial.position).sub(i.current.position);let o=t.getTarget();o!=null&&(qv.copy(o.quaternion).invert(),n.position.applyQuaternion(qv)),a.position.set(0,0,0),a.scale.copy(n.position),n.visible=!i.last,a.visible=!i.last,r.visible=!i.last});return()=>{n.geometry.dispose(),n.material.dispose(),r.geometry.dispose(),r.material.dispose(),a.geometry.dispose(),a.material.dispose(),e.remove(n),e.remove(r),e.remove(a),o()}}var Yv=class extends Iv{constructor(e){super(e,`xyz`,``,()=>({translate:this.options,scale:!1,rotate:!1,multitouch:!1}))}bind(e){let{options:t,disabled:n}=Lv(this.axis,e);if(t===!1)return;this.options=t;let r=new p(jv),i=Mv(this.context,r,this.tag,{color:16777215,hoverColor:16776960,opacity:.25,hoverOpacity:1,disabled:n}),a=new m(new E(.1,0),r);a.renderOrder=1/0,this.add(a);let o=new m(new E(.2,0));o.pointerEventsOrder=1/0,o.visible=!1,this.add(o);let s=n?void 0:this.context.registerHandle(this.store,o,this.tag);return()=>{r.dispose(),a.geometry.dispose(),o.geometry.dispose(),s?.(),i?.(),this.remove(a),this.remove(o)}}},Xv=new o,Zv=new O,Qv=new O,$v=new O().setFromEuler(new _(0,0,Math.PI/2)),ey=new O().setFromEuler(new _(0,-Math.PI/2,0)),ty=new O,ny=new O().setFromEuler(new _(0,-Math.PI/2,0)),ry=new O().setFromEuler(new _(Math.PI/2,0,0)),iy=class extends d{context;size;fixed;free;translationX;translationY;translationZ;translationNegX;translationNegY;translationNegZ;translationXY;translationYZ;translationXZ;scaleGroup=new d;xAxis=new o;yAxis=new o;zAxis=new o;negXAxis=new o;negYAxis=new o;negZAxis=new o;constructor(e,t,n){super(),this.context=e,this.size=t,this.fixed=n,this.add(this.scaleGroup),this.free=new Yv(this.context),this.scaleGroup.add(this.free),this.translationX=new Gv(this.context,`x`,void 0,this.xAxis),this.scaleGroup.add(this.translationX),this.translationY=new Gv(this.context,`y`,void 0,this.yAxis),this.scaleGroup.add(this.translationY),this.translationZ=new Gv(this.context,`z`,void 0,this.zAxis),this.scaleGroup.add(this.translationZ),this.translationNegX=new Gv(this.context,`x`,void 0,this.negXAxis,!0,!1),this.scaleGroup.add(this.translationNegX),this.translationNegY=new Gv(this.context,`y`,void 0,this.negYAxis,!0,!1),this.scaleGroup.add(this.translationNegY),this.translationNegZ=new Gv(this.context,`z`,void 0,this.negZAxis,!0,!1),this.scaleGroup.add(this.translationNegZ),this.translationXY=new Kv(this.context,`xy`,void 0,[this.xAxis,this.yAxis]),this.scaleGroup.add(this.translationXY),this.translationXZ=new Kv(this.context,`xz`,void 0,[this.xAxis,this.zAxis]),this.scaleGroup.add(this.translationXZ),this.translationYZ=new Kv(this.context,`yz`,void 0,[this.yAxis,this.zAxis]),this.scaleGroup.add(this.translationYZ)}update(e){this.updateWorldMatrix(!0,!1),this.xAxis.set(1,0,0),this.yAxis.set(0,1,0),this.zAxis.set(0,0,1),this.free.quaternion.identity(),this.translationX.quaternion.copy(Qv),this.translationY.quaternion.copy($v),this.translationZ.quaternion.copy(ey),this.translationNegX.quaternion.copy(Qv),this.translationNegY.quaternion.copy($v),this.translationNegZ.quaternion.copy(ey),this.translationXY.quaternion.copy(ty),this.translationYZ.quaternion.copy(ny),this.translationXZ.quaternion.copy(ry);let t=this.context.getSpace(),n=this.context.getTarget();t==`world`&&n!=null?(n.getWorldQuaternion(Zv).invert(),this.free.quaternion.premultiply(Zv),this.translationX.quaternion.premultiply(Zv),this.translationY.quaternion.premultiply(Zv),this.translationZ.quaternion.premultiply(Zv),this.translationNegX.quaternion.premultiply(Zv),this.translationNegY.quaternion.premultiply(Zv),this.translationNegZ.quaternion.premultiply(Zv),this.translationXY.quaternion.premultiply(Zv),this.translationYZ.quaternion.premultiply(Zv),this.translationXZ.quaternion.premultiply(Zv),n.parent!=null&&(n.parent.getWorldQuaternion(Zv).invert(),this.xAxis.applyQuaternion(Zv),this.yAxis.applyQuaternion(Zv),this.zAxis.applyQuaternion(Zv))):n!=null&&(this.xAxis.applyQuaternion(n.quaternion),this.yAxis.applyQuaternion(n.quaternion),this.zAxis.applyQuaternion(n.quaternion)),this.negXAxis.copy(this.xAxis).negate(),this.negYAxis.copy(this.yAxis).negate(),this.negZAxis.copy(this.zAxis).negate(),this.scaleGroup.scale.setScalar(1),n!=null&&(n.getWorldScale(Xv),this.scaleGroup.scale.divide(Xv)),this.scaleGroup.scale.multiplyScalar(Bv(this,e,this.fixed??!0,this.size??1))}bind(e){let t=Jv(this,this.context),n=this.translationX.bind(16711680,16776960,e),r=this.translationY.bind(65280,16776960,e),i=this.translationZ.bind(255,16776960,e),a=this.translationNegX.bind(16711680,16776960,e),o=this.translationNegY.bind(65280,16776960,e),s=this.translationNegZ.bind(255,16776960,e),c=this.translationXY.bind(255,16776960,e),l=this.translationYZ.bind(16711680,16776960,e),u=this.translationXZ.bind(65280,16776960,e),d=this.free.bind(e);return()=>{t(),n?.(),r?.(),i?.(),a?.(),o?.(),s?.(),c?.(),l?.(),u?.(),d?.()}}},ay=new _(0,0,-Math.PI/2),oy=new _(0,0,Math.PI/2),sy=class extends Iv{invert;showHandleLine;constructor(e,t,n=``,r=!1,i=!0){super(e,t,n,()=>({scale:this.options,rotate:!1,translate:`as-scale`,multitouch:!1})),this.invert=r,this.showHandleLine=i}bind(e,t,n){let{options:r,disabled:i}=Lv(this.axis,n);if(r===!1)return;this.options=r;let a=this.invert?oy:ay,o=new d;o.position.x=this.invert?-.5:.5,o.rotation.copy(a),this.add(o);let s=new p(jv),l=Mv(this.context,s,this.tag,{color:e,hoverColor:t,disabled:i}),f=new m(new c(.08,.08,.08),s);f.renderOrder=1/0,f.rotation.copy(a),o.add(f);let h,g,_;if(this.showHandleLine){_=new d,_.rotation.copy(a),this.add(_);let n=new p(jv);h=Mv(this.context,n,this.tag,{color:e,hoverColor:t,disabled:i}),g=new m(new u(.0075,.0075,.5,3),n),g.renderOrder=1/0,g.position.y=.25,_.add(g)}let v=new d;v.visible=!1,v.rotation.copy(a),v.position.x=this.invert?-.3:.3,this.add(v);let y=new m(new u(.2,0,.5,4));y.pointerEventsOrder=1/0,y.position.y=.04,v.add(y);let b=i?void 0:this.context.registerHandle(this.store,y,this.tag);return()=>{s.dispose(),y.geometry.dispose(),f.geometry.dispose(),g?.geometry.dispose(),b?.(),l?.(),h?.(),_!=null&&this.remove(_),this.remove(v),this.remove(o)}}},cy=class extends Iv{constructor(e,t,n=``){super(e,t,n,()=>({translate:`as-scale`,scale:this.options,rotate:!1,multitouch:!1}))}bind(e,t,n){let{options:r,disabled:i}=Lv(this.axis,n);if(r===!1)return;this.options=r;let a=new p(jv),o=Mv(this.context,a,this.tag,{opacity:.5,hoverOpacity:1,color:e,hoverColor:t,disabled:i}),s=new m(new c(.2,.2,.01),a);s.renderOrder=1/0,s.pointerEventsOrder=1/0,s.position.set(.15,.15,0);let l=i?void 0:this.context.registerHandle(this.store,s,this.tag);return this.add(s),()=>{a.dispose(),s.geometry.dispose(),l?.(),o?.(),this.remove(s)}}},ly=new _(0,0,-Math.PI/2),uy=new _(0,0,Math.PI/2),dy=class extends Iv{actualAxis;invert;constructor(e,t=``,n,r=!1){super(e,`xyz`,t,()=>({scale:{uniform:!0,...this.options},rotate:!1,translate:`as-scale`,multitouch:!1})),this.actualAxis=n,this.invert=r}bind(e,t,n){let{options:r,disabled:i}=Lv(this.actualAxis,n);if(r===!1)return;this.options=r;let a=this.invert?uy:ly,o=new d;o.position.x=this.invert?-.7:.7,o.rotation.copy(a),this.add(o);let s=new p(jv),l=Mv(this.context,s,this.tag,{color:e,hoverColor:t,opacity:.5,hoverOpacity:1,disabled:i}),u=new m(new c(.08,.08,.08),s);u.renderOrder=1/0,u.rotation.copy(a),o.add(u);let f=new m(new c(.15,.15,.15),s);f.visible=!1,f.pointerEventsOrder=1/0,f.rotation.copy(a),o.add(f);let h=i?void 0:this.context.registerHandle(this.store,f,this.tag);return()=>{s.dispose(),u.geometry.dispose(),h?.(),l?.(),this.remove(o)}}},fy=new o,py=class extends d{context;size;fixed;scaleX;scaleY;scaleZ;scaleNegX;scaleNegY;scaleNegZ;translationX;translationY;translationZ;translationNegX;translationNegY;translationNegZ;translationXY;translationYZ;translationXZ;constructor(e,t,n){super(),this.context=e,this.size=t,this.fixed=n,this.scaleX=new dy(this.context,void 0,`x`),this.add(this.scaleX),this.scaleY=new dy(this.context,void 0,`y`),this.scaleY.rotation.z=Math.PI/2,this.add(this.scaleY),this.scaleZ=new dy(this.context,void 0,`z`),this.scaleZ.rotation.y=-Math.PI/2,this.add(this.scaleZ),this.scaleNegX=new dy(this.context,void 0,`x`,!0),this.add(this.scaleNegX),this.scaleNegY=new dy(this.context,void 0,`y`,!0),this.scaleNegY.rotation.z=Math.PI/2,this.add(this.scaleNegY),this.scaleNegZ=new dy(this.context,void 0,`z`,!0),this.scaleNegZ.rotation.y=-Math.PI/2,this.add(this.scaleNegZ),this.translationX=new sy(this.context,`x`),this.add(this.translationX),this.translationY=new sy(this.context,`y`),this.translationY.rotation.z=Math.PI/2,this.add(this.translationY),this.translationZ=new sy(this.context,`z`),this.translationZ.rotation.y=-Math.PI/2,this.add(this.translationZ),this.translationNegX=new sy(this.context,`x`,void 0,!0,!1),this.add(this.translationNegX),this.translationNegY=new sy(this.context,`y`,void 0,!0,!1),this.translationNegY.rotation.z=Math.PI/2,this.add(this.translationNegY),this.translationNegZ=new sy(this.context,`z`,void 0,!0,!1),this.translationNegZ.rotation.y=-Math.PI/2,this.add(this.translationNegZ),this.translationXY=new cy(this.context,`xy`),this.add(this.translationXY),this.translationXZ=new cy(this.context,`xz`),this.translationXZ.rotation.x=Math.PI/2,this.add(this.translationXZ),this.translationYZ=new cy(this.context,`yz`),this.translationYZ.rotation.y=-Math.PI/2,this.add(this.translationYZ)}update(e){this.updateWorldMatrix(!0,!1),this.scale.setScalar(1);let t=this.context.getTarget();t!=null&&(t.getWorldScale(fy),this.scale.divide(fy)),this.scale.multiplyScalar(Bv(this,e,this.fixed??!0,this.size??1))}bind(e){let t=this.scaleX.bind(16777215,16776960,e),n=this.scaleY.bind(16777215,16776960,e),r=this.scaleZ.bind(16777215,16776960,e),i=this.scaleNegX.bind(16777215,16776960,e),a=this.scaleNegY.bind(16777215,16776960,e),o=this.scaleNegZ.bind(16777215,16776960,e),s=this.translationX.bind(16711680,16776960,e),c=this.translationY.bind(65280,16776960,e),l=this.translationZ.bind(255,16776960,e),u=this.translationNegX.bind(16711680,16776960,e),d=this.translationNegY.bind(65280,16776960,e),f=this.translationNegZ.bind(255,16776960,e),p=this.translationXY.bind(255,16776960,e),m=this.translationYZ.bind(16711680,16776960,e),h=this.translationXZ.bind(65280,16776960,e);return()=>{s?.(),c?.(),l?.(),u?.(),d?.(),f?.(),p?.(),m?.(),h?.(),t?.(),n?.(),r?.(),i?.(),a?.(),o?.()}}},my={x:{vector1:new o(0,0,-1),vector2:new o(0,-1,0),rotationOffset:new O,axis:[1,0,0]},y:{vector1:new o(0,0,-1),vector2:new o(-1,0,-1),rotationOffset:new O().setFromEuler(new _(0,0,Math.PI/2)),axis:[0,1,0]},z:{vector1:new o(-1,0,0),vector2:new o(0,-1,0),rotationOffset:new O().setFromEuler(new _(0,Math.PI/2,0)),axis:[0,0,1]}},hy=new o,gy=new o,_y=new o,vy=new o,yy=new O,by=class extends Iv{direction=new o(1,0,0);constructor(e,t,n=``){super(e,t,n,()=>({scale:!1,translate:`as-rotate`,rotate:[this.direction],multitouch:!1}))}update(e){let{rotationOffset:t,vector1:n,vector2:r}=my[this.axis];e.getWorldPosition(hy),this.getWorldPosition(gy).sub(hy),_y.copy(n),vy.copy(r);let i=this.context.getTarget(),a=this.context.getSpace();a===`local`&&i!=null&&(i.getWorldQuaternion(yy),_y.applyQuaternion(yy),vy.applyQuaternion(yy)),vy.crossVectors(_y,vy);let o=gy.dot(vy);vy.multiplyScalar(o),gy.sub(vy),this.quaternion.setFromUnitVectors(_y,gy.normalize()),a===`local`&&i!=null&&(i.getWorldQuaternion(yy),this.quaternion.multiply(yy)),this.quaternion.multiply(t),i?.parent==null?yy.identity():(i.parent.matrixWorld.decompose(hy,yy,gy),yy.invert(),this.quaternion.premultiply(yy)),this.store.getState()??(this.direction.fromArray(my[this.axis].axis),this.direction.applyQuaternion(a===`local`&&i!=null?i?.quaternion:yy)),i!=null&&this.quaternion.premultiply(yy.copy(i.quaternion).invert())}bind(e,n){let{options:r,disabled:i}=Lv(this.axis,n);if(r===!1)return;this.options=r;let a=new p(jv),o=Mv(this.context,a,this.tag,{color:e,hoverColor:16776960,disabled:i}),s=new m(jy(.5,.5),a);s.renderOrder=1/0,this.add(s);let c=new m(new t(.5,.1,4,24));c.visible=!1,c.pointerEventsOrder=1/0,c.rotation.set(0,-Math.PI/2,-Math.PI/2),this.add(c);let l=i?void 0:this.context.registerHandle(this.store,c,this.tag);return()=>{a.dispose(),c.geometry.dispose(),s.geometry.dispose(),l?.(),o?.(),this.remove(c),this.remove(s)}}},xy=new o,Sy=new o,Cy=new o(1,0,0),wy=new O,Ty=class extends Iv{constructor(e,t=``){super(e,`xyz`,t,()=>({scale:!1,translate:`as-rotate`,rotate:this.options,multitouch:!1}))}update(e){e.getWorldPosition(xy),this.getWorldPosition(Sy).sub(xy),this.quaternion.setFromUnitVectors(Cy,Sy.normalize());let t=this.context.getTarget();t?.parent!=null&&(t.parent.matrixWorld.decompose(xy,wy,Sy),wy.invert(),this.quaternion.premultiply(wy)),t!=null&&(wy.copy(t.quaternion).invert(),this.quaternion.premultiply(wy))}bind(e){let{options:t,disabled:n}=Lv(this.axis,e);if(t===!1)return;this.options=t;let r=new p(jv),i=Mv(this.context,r,this.tag,{color:16777215,hoverColor:16776960,opacity:.25,disabled:n}),o=new m(jy(.5,1),r);o.renderOrder=1/0,this.add(o);let s=new m(new a(.25,10,8));s.visible=!1,s.pointerEventsOrder=1/0,this.add(s);let c=n?void 0:this.context.registerHandle(this.store,s,this.tag);return()=>{this.pointerEvents=`none`,r.dispose(),s.geometry.dispose(),o.geometry.dispose(),c?.(),i?.(),this.remove(s),this.remove(o)}}},Ey=new o,Dy=new o,Oy=new o(1,0,0),ky=new O,Ay=class extends Iv{direction=new o(1,0,0);constructor(e,t=``){super(e,`e`,t,()=>({scale:!1,translate:`as-rotate`,rotate:[this.direction],multitouch:!1}))}update(e){e.getWorldPosition(Ey),this.getWorldPosition(this.direction).sub(Ey).normalize(),this.quaternion.setFromUnitVectors(Oy,this.direction);let t=this.context.getTarget();t?.parent!=null&&(t.parent.matrixWorld.decompose(Ey,ky,Dy),ky.invert(),this.quaternion.premultiply(ky),this.direction.applyQuaternion(ky)),t!=null&&(ky.copy(t.quaternion).invert(),this.quaternion.premultiply(ky)),this.direction.negate()}bind(e){let{options:n,disabled:r}=Lv(this.axis,e);if(n===!1)return;this.options=n;let i=new p(jv),a=Mv(this.context,i,this.tag,{color:16776960,hoverColor:16776960,opacity:.5,disabled:r}),o=new m(jy(.75,1),i);o.renderOrder=1/0,this.add(o);let s=new m(new t(.75,.1,2,24),new p({color:`white`}));s.visible=!1,s.rotation.y=Math.PI/2,s.pointerEventsOrder=1/0,this.add(s);let c=r?void 0:this.context.registerHandle(this.store,s,this.tag);return()=>{i.dispose(),s.geometry.dispose(),o.geometry.dispose(),c?.(),a?.(),this.remove(s),this.remove(o)}}};function jy(e,n){let r=new t(e,.0075,3,64,n*Math.PI*2);return r.rotateY(Math.PI/2),r.rotateX(Math.PI/2),r}var My=new o,Ny=class extends d{context;fixed;size;rotationX;rotationY;rotationZ;free;screen;constructor(e,t,n){super(),this.context=e,this.fixed=t,this.size=n,this.rotationX=new by(this.context,`x`),this.add(this.rotationX),this.rotationY=new by(this.context,`y`),this.add(this.rotationY),this.rotationZ=new by(this.context,`z`),this.add(this.rotationZ),this.free=new Ty(this.context),this.add(this.free),this.screen=new Ay(this.context),this.add(this.screen)}update(e){this.updateWorldMatrix(!0,!1),this.rotationX.update(e),this.rotationY.update(e),this.rotationZ.update(e),this.free.update(e),this.screen.update(e),this.scale.setScalar(1);let t=this.context.getTarget();t!=null&&(t.getWorldScale(My),this.scale.divide(My)),this.scale.multiplyScalar(Bv(this,e,this.fixed??!0,this.size??1))}bind(e){let t=this.rotationX.bind(16711680,e),n=this.rotationY.bind(65280,e),r=this.rotationZ.bind(255,e),i=this.screen.bind(e),a=this.free.bind(e);return()=>{t?.(),n?.(),r?.(),i?.(),a?.()}}},Py=new _,Fy=new _(0,0,Math.PI/2),Iy=new _(0,-Math.PI/2,0),Ly=class extends d{xAxisHighlight;yAxisHighlight;zAxisHighlight;handles;context;constructor(e){super(),this.context=new Av(this,e),this.xAxisHighlight=new Fv(this.context,Py),this.add(this.xAxisHighlight),this.yAxisHighlight=new Fv(this.context,Fy),this.add(this.yAxisHighlight),this.zAxisHighlight=new Fv(this.context,Iy),this.add(this.zAxisHighlight)}set space(e){this.context.space=e}get space(){return this.context.space}update(e,t){this.context.update(e),this.xAxisHighlight.update(),this.yAxisHighlight.update(),this.zAxisHighlight.update(),this.handles?.update(t)}bind(e,t){let n=this.xAxisHighlight.bind(`x`),r=this.yAxisHighlight.bind(`y`),i=this.zAxisHighlight.bind(`z`);switch(e){case`rotate`:this.handles=new Ny(this.context);break;case`scale`:this.handles=new py(this.context);break;case`translate`:this.handles=new iy(this.context);break}this.add(this.handles);let a=this.handles.bind(t);return()=>{this.handles!=null&&this.remove(this.handles),this.handles=void 0,a(),n(),r(),i()}}};new o(0,0,1),new o(0,1,0),new o,new o,new _,new O,new o,new O,new O,new D,new O,new o,new o,new o,new D,new D,new o,new o,new D,new D,new D,new D,new o,new o;var Ry=2,zy=class{constructor(e){this.xrDevice=e,this.combinedCameraPosition=new H,this.isPointerLocked=!1,this.vec3=new H,this.quat=new ku,this.keyState={ShiftLeft:!1,KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1},this.lastTime=0,this.scene=new fg,this.camera=new qf(50,window.innerWidth/window.innerHeight,.1,40),this.playerRig=new eg,this.cameraRig=new eg,this.scene.add(this.playerRig),this.playerRig.add(this.cameraRig),this.cameraRig.position.fromArray(e.position.vec3),this.cameraRig.quaternion.fromArray(e.quaternion.quat),this.cameraRig.add(this.camera),this.camera.position.x-=e.ipd/2;let t=new jf(new Eg(.25,.27,32),new Qd({color:16777215,side:0}));t.rotateX(-Math.PI/2),this.scene.add(t),this.renderer=new dg({alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.renderer.domElement.style.position=`fixed`,this.renderer.domElement.style.top=`50vh`,this.renderer.domElement.style.left=`50vw`,this.renderer.domElement.style.transform=`translate(-50%, -50%)`,this.transformHandles=new Map,[`left`,`right`].forEach(t=>{let n=new Ly;n.scale.setScalar(.1),n.position.fromArray(e.controllers[t].position.vec3),n.quaternion.fromArray(e.controllers[t].quaternion.quat),this.cameraRig.attach(n),n.userData={defaultPosition:n.position.toArray(),defaultQuaternion:n.quaternion.toArray()},n.userData.setMode=e=>{var t,r;(r=(t=n.userData).modeCleanup)==null||r.call(t),n.userData.modeCleanup=n.bind(e),n.userData.mode=e},n.userData.setMode(`translate`),n.space=`local`,this.transformHandles.set(t,n),n.addEventListener(`click`,()=>{n.userData.mode===`translate`?n.userData.setMode(`rotate`):n.userData.setMode(`translate`)})}),window.transformHandles=this.transformHandles,this.mouseMoveHandler=t=>{if(!this.isPointerLocked)return;let n=t.movementX||t.mozMovementX||t.webkitMovementX||0,r=t.movementY||t.mozMovementY||t.webkitMovementY||0;this.playerRig.rotation.y-=n*.002,this.cameraRig.rotation.x-=r*.002,e.quaternion.copy(this.cameraRig.getWorldQuaternion(new ku))},this.cameraRig.getWorldPosition(this.combinedCameraPosition),this.headsetDefaultPosition=this.cameraRig.position.clone(),this.headsetDefaultQuaternion=this.cameraRig.quaternion.clone(),this.forwardHtmlEvents=w(this.renderer.domElement,()=>this.camera,this.scene).update,document.addEventListener(`pointerlockchange`,this.pointerLockChangeHandler.bind(this),!1),document.addEventListener(`mozpointerlockchange`,this.pointerLockChangeHandler.bind(this),!1),document.addEventListener(`webkitpointerlockchange`,this.pointerLockChangeHandler.bind(this),!1),document.addEventListener(`keydown`,this.keyDownHandler.bind(this),!1),document.addEventListener(`keyup`,this.keyUpHandler.bind(this),!1)}lockPointer(){this.renderer.domElement.requestPointerLock=this.renderer.domElement.requestPointerLock||this.renderer.domElement.mozRequestPointerLock||this.renderer.domElement.webkitRequestPointerLock,this.renderer.domElement.requestPointerLock()}pointerLockChangeHandler(){this.isPointerLocked=document.pointerLockElement===this.renderer.domElement||document.mozPointerLockElement===this.renderer.domElement||document.webkitPointerLockElement===this.renderer.domElement,this.isPointerLocked?(document.addEventListener(`mousemove`,this.mouseMoveHandler,!1),Object.values(this.transformHandles).forEach(e=>{e.visible=!1})):(document.removeEventListener(`mousemove`,this.mouseMoveHandler,!1),Object.values(this.transformHandles).forEach(e=>{e.visible=!0}))}keyDownHandler(e){let{keyState:t}=this;e.code in t&&(t[e.code]=!0),t.ShiftLeft&&t.ArrowUp&&(this.cameraRig.position.y+=.05),t.ShiftLeft&&t.ArrowDown&&(this.cameraRig.position.y-=.05)}keyUpHandler(e){let{keyState:t}=this;e.code in t&&(t[e.code]=!1)}movePlayerRig(e){let{playerRig:t,keyState:n,vec3:r}=this;r.set(!!n.KeyD-+!!n.KeyA,0,!!n.KeyS-+!!n.KeyW),r.lengthSq()>0&&n.ShiftLeft&&(r.normalize().multiplyScalar(Ry*e).applyQuaternion(t.quaternion),t.position.add(r))}resetDeviceTransforms(){let{playerRig:e,cameraRig:t,transformHandles:n}=this;t.position.copy(this.headsetDefaultPosition),t.quaternion.copy(this.headsetDefaultQuaternion),e.position.set(0,0,0),e.quaternion.set(0,0,0,1),n.forEach(e=>{e.position.fromArray(e.userData.defaultPosition),e.quaternion.fromArray(e.userData.defaultQuaternion)})}syncDeviceTransforms(){let{xrDevice:e,cameraRig:t,transformHandles:n}=this;e.position.copy(t.getWorldPosition(this.vec3)),e.quaternion.copy(t.getWorldQuaternion(this.quat)),n.forEach((t,n)=>{let r=e.primaryInputMode===`controller`?e.controllers[n]:e.hands[n];r.position.copy(t.getWorldPosition(this.vec3)),r.quaternion.copy(t.getWorldQuaternion(this.quat))})}renderScene(e){let t=this.xrDevice.fovy/Math.PI*180,n=!1;this.camera.fov!==t&&(this.camera.fov=t,n=!0);let r=this.xrDevice.canvasDimensions;if(r){let e=this.renderer.domElement;(e.width!==r.width||e.height!==r.height)&&(this.camera.aspect=r.width/r.height,this.renderer.setSize(r.width,r.height),n=!0)}n&&this.camera.updateProjectionMatrix(),this.isPointerLocked?this.cameraRig.getWorldPosition(this.combinedCameraPosition):(this.cameraRig.position.y=this.combinedCameraPosition.y,this.playerRig.position.x=this.combinedCameraPosition.x,this.playerRig.position.z=this.combinedCameraPosition.z),this.forwardHtmlEvents(),this.transformHandles.forEach((t,n)=>{let r=!!this.xrDevice.controllers[n]?.connected;t.visible=r&&!this.isPointerLocked,r&&t.update(e,this.camera)});let i=Math.min((e-this.lastTime)/1e3,.1);this.movePlayerRig(i),this.syncDeviceTransforms(),this.renderer.render(this.scene,this.camera),this.lastTime=e}get domElement(){return this.renderer.domElement}dispose(){this.renderer.dispose(),document.removeEventListener(`pointerlockchange`,this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener(`mozpointerlockchange`,this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener(`webkitpointerlockchange`,this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener(`mousemove`,this.mouseMoveHandler,!1),document.removeEventListener(`keydown`,this.keyDownHandler.bind(this),!1),document.removeEventListener(`keyup`,this.keyUpHandler.bind(this),!1)}},By=`1.1.1`,Vy=e(n(),1),Hy=class{constructor(e){this.version=By,e.ipd=0,$c.getState().setInputMode(e.primaryInputMode),this.devUIContainer=document.createElement(`div`),this.devUIContainer.style.position=`fixed`,this.devUIContainer.style.width=`100vw`,this.devUIContainer.style.height=`100vh`,this.devUIContainer.style.top=`50vh`,this.devUIContainer.style.left=`50vw`,this.devUIContainer.style.transform=`translate(-50%, -50%)`,this.devUIContainer.style.pointerEvents=`none`;let t=this.devUIContainer.attachShadow({mode:`open`});this.inputLayer=new zy(e),(0,Vy.createRoot)(t).render((0,j.jsx)(Uy,{xrDevice:e,inputLayer:this.inputLayer,shadowRoot:t}));let n=()=>{let t=document.createElement(`div`);document.body.appendChild(t);let n=t.attachShadow({mode:`open`});(0,Vy.createRoot)(n).render((0,j.jsx)(Wy,{xrDevice:e,shadowRoot:n}))};document.body?n():window.onload=n}render(e){this.inputLayer.renderScene(e)}get devUICanvas(){return this.inputLayer.domElement}},Uy=({xrDevice:e,inputLayer:t,shadowRoot:n})=>{let[r,i]=(0,A.useState)(!1);return(0,A.useEffect)(()=>{let e=()=>{let e=document.pointerLockElement||document.mozPointerLockElement||document.webkitPointerLockElement;i(!!e)};return document.addEventListener(`pointerlockchange`,e,!1),document.addEventListener(`mozpointerlockchange`,e,!1),document.addEventListener(`webkitpointerlockchange`,e,!1),()=>{document.removeEventListener(`pointerlockchange`,e,!1),document.removeEventListener(`mozpointerlockchange`,e,!1),document.removeEventListener(`webkitpointerlockchange`,e,!1)}},[]),(0,j.jsx)(xs,{target:n,disableCSSOMInjection:!0,children:(0,j.jsxs)(`div`,{style:{width:`100vw`,height:`100vh`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`,pointerEvents:`none`},children:[(0,j.jsx)(ol,{xrDevice:e,inputLayer:t}),(0,j.jsx)(ll,{xrDevice:e,inputLayer:t,pointerLocked:r}),(0,j.jsx)(el,{xrDevice:e,inputLayer:t,pointerLocked:r})]})})},Wy=({xrDevice:e,shadowRoot:t})=>{let[n,r]=A.useState(e.sessionOffered&&!e.activeSession);return A.useEffect(()=>{setInterval(()=>{r(e.sessionOffered&&!e.activeSession)},1e3)},[]),(0,j.jsx)(xs,{target:t,disableCSSOMInjection:!0,children:(0,j.jsxs)(Ps,{style:{zIndex:899,position:`fixed`,top:n?`8px`:`-30px`,display:`flex`,flexDirection:`row`,alignItems:`center`,justifyItems:`space-between`,left:`50vw`,transform:`translateX(-50%)`,transition:`all 0.2s ease-in-out`,paddingLeft:`5px`,gap:`3px`},children:[(0,j.jsx)(Oc,{size:24}),(0,j.jsx)(Fs,{onClick:()=>{e.grantOfferedSession()},style:{fontSize:`16px`},children:`Enter XR`})]})})},Gy=typeof Float32Array<`u`?Float32Array:Array;Math.PI/180,180/Math.PI;function Ky(){var e=new Gy(9);return Gy!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function qy(){var e=new Gy(16);return Gy!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function Jy(e){var t=new Gy(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Yy(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Xy(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=new Gy(16);return g[0]=e,g[1]=t,g[2]=n,g[3]=r,g[4]=i,g[5]=a,g[6]=o,g[7]=s,g[8]=c,g[9]=l,g[10]=u,g[11]=d,g[12]=f,g[13]=p,g[14]=m,g[15]=h,g}function Zy(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Qy(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;return A?(A=1/A,e[0]=(s*k-c*O+l*D)*A,e[1]=(i*O-r*k-a*D)*A,e[2]=(h*C-g*S+_*x)*A,e[3]=(f*S-d*C-p*x)*A,e[4]=(c*E-o*k-l*T)*A,e[5]=(n*k-i*E+a*T)*A,e[6]=(g*b-m*C-_*y)*A,e[7]=(u*C-f*b+p*y)*A,e[8]=(o*O-s*E+l*w)*A,e[9]=(r*E-n*O-a*w)*A,e[10]=(m*S-h*b+_*v)*A,e[11]=(d*b-u*S-p*v)*A,e[12]=(s*T-o*D-c*w)*A,e[13]=(n*D-r*T+i*w)*A,e[14]=(h*y-m*x-g*v)*A,e[15]=(u*x-d*y+f*v)*A,e):null}function $y(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15],y=n[0],b=n[1],x=n[2],S=n[3];return e[0]=y*r+b*s+x*d+S*h,e[1]=y*i+b*c+x*f+S*g,e[2]=y*a+b*l+x*p+S*_,e[3]=y*o+b*u+x*m+S*v,y=n[4],b=n[5],x=n[6],S=n[7],e[4]=y*r+b*s+x*d+S*h,e[5]=y*i+b*c+x*f+S*g,e[6]=y*a+b*l+x*p+S*_,e[7]=y*o+b*u+x*m+S*v,y=n[8],b=n[9],x=n[10],S=n[11],e[8]=y*r+b*s+x*d+S*h,e[9]=y*i+b*c+x*f+S*g,e[10]=y*a+b*l+x*p+S*_,e[11]=y*o+b*u+x*m+S*v,y=n[12],b=n[13],x=n[14],S=n[15],e[12]=y*r+b*s+x*d+S*h,e[13]=y*i+b*c+x*f+S*g,e[14]=y*a+b*l+x*p+S*_,e[15]=y*o+b*u+x*m+S*v,e}function eb(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function tb(e,t,n){var r=n[0],i=n[1],a=n[2],o=Math.sqrt(r*r+i*i+a*a),s,c,l;return o<1e-6?null:(o=1/o,r*=o,i*=o,a*=o,s=Math.sin(t),c=Math.cos(t),l=1-c,e[0]=r*r*l+c,e[1]=i*r*l+a*s,e[2]=a*r*l-i*s,e[3]=0,e[4]=r*i*l-a*s,e[5]=i*i*l+c,e[6]=a*i*l+r*s,e[7]=0,e[8]=r*a*l+i*s,e[9]=i*a*l-r*s,e[10]=a*a*l+c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function nb(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=r+r,c=i+i,l=a+a,u=r*s,d=r*c,f=r*l,p=i*c,m=i*l,h=a*l,g=o*s,_=o*c,v=o*l;return e[0]=1-(p+h),e[1]=d+v,e[2]=f-_,e[3]=0,e[4]=d-v,e[5]=1-(u+h),e[6]=m+g,e[7]=0,e[8]=f+_,e[9]=m-g,e[10]=1-(u+p),e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function rb(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function ib(e,t){var n=t[0],r=t[1],i=t[2],a=t[4],o=t[5],s=t[6],c=t[8],l=t[9],u=t[10];return e[0]=Math.sqrt(n*n+r*r+i*i),e[1]=Math.sqrt(a*a+o*o+s*s),e[2]=Math.sqrt(c*c+l*l+u*u),e}function ab(e,t){var n=new Gy(3);ib(n,t);var r=1/n[0],i=1/n[1],a=1/n[2],o=t[0]*r,s=t[1]*i,c=t[2]*a,l=t[4]*r,u=t[5]*i,d=t[6]*a,f=t[8]*r,p=t[9]*i,m=t[10]*a,h=o+u+m,g=0;return h>0?(g=Math.sqrt(h+1)*2,e[3]=.25*g,e[0]=(d-p)/g,e[1]=(f-c)/g,e[2]=(s-l)/g):o>u&&o>m?(g=Math.sqrt(1+o-u-m)*2,e[3]=(d-p)/g,e[0]=.25*g,e[1]=(s+l)/g,e[2]=(f+c)/g):u>m?(g=Math.sqrt(1+u-o-m)*2,e[3]=(f-c)/g,e[0]=(s+l)/g,e[1]=.25*g,e[2]=(d+p)/g):(g=Math.sqrt(1+m-o-u)*2,e[3]=(s-l)/g,e[0]=(f+c)/g,e[1]=(d+p)/g,e[2]=.25*g),e}function ob(e,t,n,r){var i=t[0],a=t[1],o=t[2],s=t[3],c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=r[0],x=r[1],S=r[2];return e[0]=(1-(m+g))*b,e[1]=(f+y)*b,e[2]=(p-v)*b,e[3]=0,e[4]=(f-y)*x,e[5]=(1-(d+g))*x,e[6]=(h+_)*x,e[7]=0,e[8]=(p+v)*S,e[9]=(h-_)*S,e[10]=(1-(d+m))*S,e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function sb(e,t,n,r,i){var a=1/Math.tan(t/2);if(e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){var o=1/(r-i);e[10]=(i+r)*o,e[14]=2*i*r*o}else e[10]=-1,e[14]=-2*r;return e}var cb=sb;function G(){var e=new Gy(3);return Gy!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function lb(e){var t=new Gy(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function ub(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function db(e,t,n){var r=new Gy(3);return r[0]=e,r[1]=t,r[2]=n,r}function fb(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function pb(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function mb(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function hb(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function gb(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function _b(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function vb(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)}function yb(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function bb(e,t){var n=t[0],r=t[1],i=t[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function xb(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Sb(e,t,n){var r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2];return e[0]=i*c-a*s,e[1]=a*o-r*c,e[2]=r*s-i*o,e}function Cb(e,t,n,r){var i=t[0],a=t[1],o=t[2];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e[2]=o+r*(n[2]-o),e}function wb(e,t,n){var r=t[0],i=t[1],a=t[2],o=n[3]*r+n[7]*i+n[11]*a+n[15];return o||=1,e[0]=(n[0]*r+n[4]*i+n[8]*a+n[12])/o,e[1]=(n[1]*r+n[5]*i+n[9]*a+n[13])/o,e[2]=(n[2]*r+n[6]*i+n[10]*a+n[14])/o,e}function Tb(e,t,n){var r=n[0],i=n[1],a=n[2],o=n[3],s=t[0],c=t[1],l=t[2],u=i*l-a*c,d=a*s-r*l,f=r*c-i*s;return u+=u,d+=d,f+=f,e[0]=s+o*u+i*f-a*d,e[1]=c+o*d+a*u-r*f,e[2]=l+o*f+r*d-i*u,e}var Eb=hb,Db=ub;(function(){var e=G();return function(t,n,r,i,a,o){var s,c;for(n||=3,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}})();function Ob(){var e=new Gy(4);return Gy!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function kb(e){var t=new Gy(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Ab(e,t,n,r){var i=new Gy(4);return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function jb(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function Mb(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e}function Nb(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=n*n+r*r+i*i+a*a;return o>0&&(o=1/Math.sqrt(o)),e[0]=n*o,e[1]=r*o,e[2]=i*o,e[3]=a*o,e}function Pb(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function Fb(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*a+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*a+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*a+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*a+n[15]*o,e}(function(){var e=Ob();return function(t,n,r,i,a,o){var s,c;for(n||=4,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}})();function K(){var e=new Gy(4);return Gy!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function Ib(e,t,n){n*=.5;var r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function Lb(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=n[0],c=n[1],l=n[2],u=n[3];return e[0]=r*u+o*s+i*l-a*c,e[1]=i*u+o*c+a*s-r*l,e[2]=a*u+o*l+r*c-i*s,e[3]=o*u-r*s-i*c-a*l,e}function Rb(e,t,n,r){var i=t[0],a=t[1],o=t[2],s=t[3],c=n[0],l=n[1],u=n[2],d=n[3],f,p=i*c+a*l+o*u+s*d,m,h,g;return p<0&&(p=-p,c=-c,l=-l,u=-u,d=-d),1-p>1e-6?(f=Math.acos(p),m=Math.sin(f),h=Math.sin((1-r)*f)/m,g=Math.sin(r*f)/m):(h=1-r,g=r),e[0]=h*i+g*c,e[1]=h*a+g*l,e[2]=h*o+g*u,e[3]=h*s+g*d,e}function zb(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=n*n+r*r+i*i+a*a,s=o?1/o:0;return e[0]=-n*s,e[1]=-r*s,e[2]=-i*s,e[3]=a*s,e}function Bb(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function Vb(e,t){var n=t[0]+t[4]+t[8],r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var a=(i+1)%3,o=(i+2)%3;r=Math.sqrt(t[i*3+i]-t[a*3+a]-t[o*3+o]+1),e[i]=.5*r,r=.5/r,e[3]=(t[a*3+o]-t[o*3+a])*r,e[a]=(t[a*3+i]+t[i*3+a])*r,e[o]=(t[o*3+i]+t[i*3+o])*r}return e}var Hb=kb,Ub=Ab,Wb=jb,Gb=Mb,Kb=Pb,qb=Nb,Jb=function(){var e=G(),t=db(1,0,0),n=db(0,1,0);return function(r,i,a){var o=xb(i,a);return o<-.999999?(Sb(e,t,i),Db(e)<1e-6&&Sb(e,n,i),bb(e,e),Ib(r,e,Math.PI),r):o>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(Sb(e,i,a),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=1+o,qb(r,r))}}();(function(){var e=K(),t=K();return function(n,r,i,a,o,s){return Rb(e,r,o,s),Rb(t,i,a,s),Rb(n,e,t,2*s*(1-s)),n}})(),function(){var e=Ky();return function(t,n,r,i){return e[0]=r[0],e[3]=r[1],e[6]=r[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-n[0],e[5]=-n[1],e[8]=-n[2],qb(t,Vb(t,e))}}();var q=Symbol(`@iwer/action-player`),Yb=Symbol(`@iwer/xr-anchor`),Xb=Symbol(`@iwer/xr-controller`),J=Symbol(`@iwer/xr-device`),Zb=Symbol(`@iwer/xr-hand-input`),Qb=Symbol(`@iwer/xr-tracked-input`),$b=Symbol(`@iwer/xr-frame`),Y=Symbol(`@iwer/gamepad`),ex=Symbol(`@iwer/xr-system`),tx=Symbol(`@iwer/xr-input-source`),nx=Symbol(`@iwer/xr-webgl-layer`),rx=Symbol(`@iwer/xr-mesh`),ix=Symbol(`@iwer/xr-plane`),ax=Symbol(`@iwer/xr-joint-pose`),ox=Symbol(`@iwer/xr-pose`),sx=Symbol(`@iwer/xr-viewer-pose`),cx=Symbol(`@iwer/xr-rigid-transform`),lx=Symbol(`@iwer/xr-render-state`),X=Symbol(`@iwer/xr-session`),ux=Symbol(`@iwer/xr-joint-space`),dx=Symbol(`@iwer/xr-reference-space`),fx=Symbol(`@iwer/xr-space`),px=Symbol(`@iwer/xr-view`),mx=Symbol(`@iwer/xr-viewport`),hx=Symbol(`@iwer/xr-ray`),gx=Symbol(`@iwer/xr-depth-info`),_x=Symbol(`@iwer/xr-hit-test`),vx=G(),yx=class extends EventTarget{constructor(e,t){super(),this[fx]={parentSpace:e,offsetMatrix:t?Jy(t):qy(),emulated:!0}}},bx=class extends yx{constructor(){super(void 0,qy())}},xx=class{static updateOffsetPosition(e,t){let n=e[fx].offsetMatrix;eb(n,t)}static updateOffsetQuaternion(e,t){let n=e[fx].offsetMatrix;rb(vx,n),nb(n,t,vx)}static updateOffsetMatrix(e,t){let n=e[fx].offsetMatrix;Yy(n,t)}static calculateGlobalOffsetMatrix(e,t=qy()){let n=[],r=e;for(;r;)n.push(r),r=r[fx].parentSpace;Zy(t);for(let e=n.length-1;e>=0;e--)$y(t,t,n[e][fx].offsetMatrix);return t}},Sx;(function(e){e.None=``,e.Standard=`standard`,e.XRStandard=`xr-standard`})(Sx||={});var Cx=class{constructor(e,t){this[Y]={type:e,eventTrigger:t,pressed:!1,touched:!1,value:0,lastFrameValue:0,lastFramePressed:!1,pendingValue:null,thresholds:null,cancelRequested:!1,cancelGeneration:0}}get pressed(){return this[Y].pressed}get touched(){return this[Y].type===`manual`?this[Y].touched:this[Y].touched||this.pressed}get value(){return this[Y].value}},wx=class{constructor(){this.pressed=!1,this.touched=!1,this.value=0}},Tx=class{constructor(e=`vibration`){this[Y]={type:e,lastPulse:null}}get type(){return this[Y].type}pulse(e,t){return this[Y].lastPulse={value:e,duration:t,startTime:performance.now()},Promise.resolve(!0)}},Ex=class{constructor(e,t=``,n=-1,r=0){this[Y]={id:t,index:n,connected:!1,timestamp:performance.now(),mapping:e.mapping,buttonsMap:{},buttonsSequence:[],axesMap:{},axesSequence:[],hapticActuators:Array.from({length:Math.max(0,r)},()=>new Tx(`vibration`)),buttonsView:[],axesView:[],axesResolvers:[]},e.buttons.forEach(e=>{e===null?this[Y].buttonsSequence.push(null):(this[Y].buttonsSequence.push(e.id),this[Y].buttonsMap[e.id]=new Cx(e.type,e.eventTrigger??null))}),e.axes.forEach(e=>{e===null?this[Y].axesSequence.push(null):(this[Y].axesSequence.push(e.id+e.type),this[Y].axesMap[e.id]||(this[Y].axesMap[e.id]={x:0,y:0}))}),this[Y].buttonsView=this[Y].buttonsSequence.map(e=>e===null?new wx:this[Y].buttonsMap[e]),this[Y].axesResolvers=this[Y].axesSequence.map(e=>e===null?null:{axisId:e.substring(0,e.length-6),isY:e.substring(e.length-6)===`y-axis`}),this[Y].axesView=this[Y].axesResolvers.map(()=>null)}get id(){return this[Y].id}get index(){return this[Y].index}get connected(){return this[Y].connected}get timestamp(){return this[Y].timestamp}get mapping(){return this[Y].mapping}get axes(){let{axesView:e,axesResolvers:t,axesMap:n}=this[Y];for(let r=0;r<t.length;r++){let i=t[r];if(i===null)e[r]=null;else{let t=n[i.axisId];e[r]=i.isY?t.y:t.x}}return e}get buttons(){return this[Y].buttonsView}get hapticActuators(){return this[Y].hapticActuators}get vibrationActuator(){return this[Y].hapticActuators[0]??null}},Dx=(e,t)=>{switch(e){case`press`:return[`${t}start`];case`release`:return[t,`${t}end`];case`cancel`:return[`${t}end`];default:return[]}},Ox=(e,t,n)=>{let r=e[Y].thresholds;return r?t?n>r.release:n>=r.press:n>0},kx=(e,t)=>{e[Y].pendingValue=t},Ax=e=>{let t=e[Y];t.lastFramePressed&&(t.cancelRequested=!0),t.value=0,t.pendingValue=null,t.pressed=!1,t.cancelGeneration++},jx=e=>{Ax(e);let t=e[Y];t.cancelRequested=!1,t.lastFramePressed=!1,t.lastFrameValue=0},Mx=(e,t)=>{let n=e[Y];if(n.cancelRequested){n.pendingValue=t;return}if((n.pressed||n.lastFramePressed)&&!Ox(e,!0,t)){Ax(e),n.value=t;return}n.value=t,n.pendingValue=null,n.type!==`manual`&&(n.pressed=Ox(e,n.pressed,t))},Nx=e=>{let t=e[Y],n=t.lastFramePressed;return t.lastFrameValue=t.value,t.cancelRequested?(t.cancelRequested=!1,t.lastFramePressed=!1,n?`cancel`:null):(t.pendingValue!==null&&(t.value=t.pendingValue,t.pendingValue=null),t.type!==`manual`&&(t.pressed=Ox(e,t.pressed,t.value)),t.lastFramePressed=t.pressed,!n&&t.pressed?`press`:n&&!t.pressed?`release`:null)},Px=class e{constructor(e=0,t=0,n=0){this.vec3=db(e,t,n),this.tempVec3=G()}get x(){return this.vec3[0]}set x(e){this.vec3[0]=e}get y(){return this.vec3[1]}set y(e){this.vec3[1]=e}get z(){return this.vec3[2]}set z(e){this.vec3[2]=e}set(e,t,n){return pb(this.vec3,e,t,n),this}clone(){return new e(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}normalize(){return fb(this.tempVec3,this.vec3),bb(this.vec3,this.tempVec3),this}add(e){return fb(this.tempVec3,this.vec3),mb(this.vec3,this.tempVec3,e.vec3),this}applyQuaternion(e){return fb(this.tempVec3,this.vec3),Tb(this.vec3,this.tempVec3,e.quat),this}},Fx=class e{constructor(e=0,t=0,n=0,r=1){this.quat=Ub(e,t,n,r),this.tempQuat=K()}get x(){return this.quat[0]}set x(e){this.quat[0]=e}get y(){return this.quat[1]}set y(e){this.quat[1]=e}get z(){return this.quat[2]}set z(e){this.quat[2]=e}get w(){return this.quat[3]}set w(e){this.quat[3]=e}set(e,t,n,r){return Gb(this.quat,e,t,n,r),this}clone(){return new e(this.x,this.y,this.z,this.w)}copy(e){return Gb(this.quat,e.x,e.y,e.z,e.w),this}normalize(){return Wb(this.tempQuat,this.quat),qb(this.quat,this.tempQuat),this}invert(){return Wb(this.tempQuat,this.quat),Bb(this.quat,this.tempQuat),this}multiply(e){return Wb(this.tempQuat,this.quat),Lb(this.quat,this.tempQuat,e.quat),this}setFromAxisAngle(e,t){return Ib(this.quat,e.vec3,t),this}},Z;(function(e){e.Wrist=`wrist`,e.ThumbMetacarpal=`thumb-metacarpal`,e.ThumbPhalanxProximal=`thumb-phalanx-proximal`,e.ThumbPhalanxDistal=`thumb-phalanx-distal`,e.ThumbTip=`thumb-tip`,e.IndexFingerMetacarpal=`index-finger-metacarpal`,e.IndexFingerPhalanxProximal=`index-finger-phalanx-proximal`,e.IndexFingerPhalanxIntermediate=`index-finger-phalanx-intermediate`,e.IndexFingerPhalanxDistal=`index-finger-phalanx-distal`,e.IndexFingerTip=`index-finger-tip`,e.MiddleFingerMetacarpal=`middle-finger-metacarpal`,e.MiddleFingerPhalanxProximal=`middle-finger-phalanx-proximal`,e.MiddleFingerPhalanxIntermediate=`middle-finger-phalanx-intermediate`,e.MiddleFingerPhalanxDistal=`middle-finger-phalanx-distal`,e.MiddleFingerTip=`middle-finger-tip`,e.RingFingerMetacarpal=`ring-finger-metacarpal`,e.RingFingerPhalanxProximal=`ring-finger-phalanx-proximal`,e.RingFingerPhalanxIntermediate=`ring-finger-phalanx-intermediate`,e.RingFingerPhalanxDistal=`ring-finger-phalanx-distal`,e.RingFingerTip=`ring-finger-tip`,e.PinkyFingerMetacarpal=`pinky-finger-metacarpal`,e.PinkyFingerPhalanxProximal=`pinky-finger-phalanx-proximal`,e.PinkyFingerPhalanxIntermediate=`pinky-finger-phalanx-intermediate`,e.PinkyFingerPhalanxDistal=`pinky-finger-phalanx-distal`,e.PinkyFingerTip=`pinky-finger-tip`})(Z||={});var Ix=class extends Map{},Lx;(function(e){e.None=`none`,e.Left=`left`,e.Right=`right`})(Lx||={});var Rx;(function(e){e.Gaze=`gaze`,e.TrackedPointer=`tracked-pointer`,e.Screen=`screen`,e.TransientPointer=`transient-pointer`})(Rx||={});var zx=class extends Array{},Bx=class{constructor(e,t,n,r,i,a,o){this[tx]={handedness:e,targetRayMode:t,targetRaySpace:r,gripSpace:a,profiles:n,gamepad:i,hand:o}}get handedness(){return this[tx].handedness}get targetRayMode(){return this[tx].targetRayMode}get targetRaySpace(){return this[tx].targetRaySpace}get gripSpace(){return this[tx].gripSpace}get profiles(){return this[tx].profiles}get gamepad(){return this[tx].gamepad}get hand(){return this[tx].hand}},Vx=class extends yx{constructor(e,t,n){super(t,n),this[ux]={jointName:e,radius:0}}get jointName(){return this[ux].jointName}},Hx=class extends Event{constructor(e,t){if(super(e,t),!t.frame)throw Error(`XRInputSourceEventInit.frame is required`);if(!t.inputSource)throw Error(`XRInputSourceEventInit.inputSource is required`);this.frame=t.frame,this.inputSource=t.inputSource}},Ux={[Lx.Left]:{position:new Px(-.25,1.5,-.4),quaternion:new Fx},[Lx.Right]:{position:new Px(.25,1.5,-.4),quaternion:new Fx},[Lx.None]:{position:new Px(.25,1.5,-.4),quaternion:new Fx}},Wx=class{constructor(e){this[Qb]={inputSource:e,position:Ux[e.handedness].position.clone(),quaternion:Ux[e.handedness].quaternion.clone(),connected:!0,lastFrameConnected:!1,inputSourceChanged:!0}}get position(){return this[Qb].position}get quaternion(){return this[Qb].quaternion}get inputSource(){return this[Qb].inputSource}get connected(){return this[Qb].connected}set connected(e){this[Qb].connected=e;let t=this[Qb].inputSource.gamepad;t&&(t[Y].connected=e)}updateTargetRaySpace(){let e=this[Qb].inputSource.targetRaySpace;nb(e[fx].offsetMatrix,this[Qb].quaternion.quat,this[Qb].position.vec3)}onFrameStart(e){var t;this.updateTargetRaySpace();let n=e.session,r=this[Qb].inputSource;(t=r.gamepad)==null||t.buttons.forEach(t=>{if(t instanceof Cx){let i=Nx(t),a=t[Y].eventTrigger;if(i&&a)for(let t of Dx(i,a))n.dispatchEvent(new Hx(t,{frame:e,inputSource:r}))}}),this[Qb].inputSourceChanged=this.connected!==this[Qb].lastFrameConnected,this[Qb].lastFrameConnected=this.connected}},Gx={index:[Z.IndexFingerMetacarpal,Z.IndexFingerPhalanxProximal,Z.IndexFingerPhalanxIntermediate,Z.IndexFingerPhalanxDistal,Z.IndexFingerTip],middle:[Z.MiddleFingerMetacarpal,Z.MiddleFingerPhalanxProximal,Z.MiddleFingerPhalanxIntermediate,Z.MiddleFingerPhalanxDistal,Z.MiddleFingerTip],ring:[Z.RingFingerMetacarpal,Z.RingFingerPhalanxProximal,Z.RingFingerPhalanxIntermediate,Z.RingFingerPhalanxDistal,Z.RingFingerTip],pinky:[Z.PinkyFingerMetacarpal,Z.PinkyFingerPhalanxProximal,Z.PinkyFingerPhalanxIntermediate,Z.PinkyFingerPhalanxDistal,Z.PinkyFingerTip]},Kx=[Z.ThumbMetacarpal,Z.ThumbPhalanxProximal,Z.ThumbPhalanxDistal,Z.ThumbTip],qx=180/Math.PI,Jx=Math.PI/180,Yx=e=>{for(let t of[Kx,...Object.values(Gx)]){let n=t.indexOf(e);if(n>=0)return n===0?Z.Wrist:t[n-1]}throw Error(`No parent for ${e}`)},Xx=(e,t)=>{let n=qy();Qy(n,e.jointTransforms[Yx(t)].offsetMatrix),$y(n,n,e.jointTransforms[t].offsetMatrix);let r=n[1],i=n[5],a=n[8],o=n[9],s=n[10],c=Math.asin(-Math.min(Math.max(o,-1),1)),l=Math.abs(o)>=.9999999;return{translation:rb(G(),n),rotation:ab(K(),n),yaw:(l?Math.atan2(-n[2],n[0]):Math.atan2(a,s))*qx,pitch:c*qx,roll:l?0:Math.atan2(r,i)*qx}},Zx=K(),Qx=K(),$x=K(),eS=(e,t,n)=>{Ib(Qx,[0,1,0],e*Jx),Ib(Zx,[1,0,0],t*Jx),Ib($x,[0,0,1],n*Jx);let r=Lb(K(),Qx,Zx);return Lb(r,r,$x)},tS=(e,t,n)=>{let r={};for(let e of Object.values(Z))e!==Z.Wrist&&(r[e]=Xx(t,e));let i={},a=(e,t,n)=>{i[e]=nb(qy(),t,n??r[e].translation)},[o,s,c,l]=Kx,u=e.thumb??{},d=r[o];a(o,eS(...u.cmc??[d.yaw,d.pitch,d.roll]),Cb(G(),d.translation,Xx(n,o).translation,u.shift??0)),a(s,eS(u.mcpYaw??r[s].yaw,u.mcp===void 0?r[s].pitch:-u.mcp,u.mcpRoll??r[s].roll)),a(c,eS(u.ipYaw??r[c].yaw,u.ip===void 0?r[c].pitch:-u.ip,u.ipRoll??r[c].roll)),a(l,r[l].rotation);for(let[t,n]of Object.entries(Gx)){let[i,o,s,c,l]=n,u=e[t]??{},d=t===`pinky`?r[o].pitch:0;a(i,r[i].rotation),a(o,eS(u.yaw??r[o].yaw,u.mcp===void 0?r[o].pitch:d-u.mcp,u.roll??r[o].roll)),a(s,eS(u.pipYaw??r[s].yaw,u.pip===void 0?r[s].pitch:-u.pip,u.pipRoll??r[s].roll)),a(c,eS(r[c].yaw,u.dip===void 0?r[c].pitch:-u.dip,r[c].roll)),a(l,r[l].rotation)}let f={};for(let e of Object.values(Z))f[e]={offsetMatrix:e===Z.Wrist?Jy(t.jointTransforms[e].offsetMatrix):$y(qy(),f[Yx(e)].offsetMatrix,i[e]),radius:t.jointTransforms[e].radius};return{jointTransforms:f,gripOffsetMatrix:t.gripOffsetMatrix?Jy(t.gripOffsetMatrix):void 0}},nS={jointTransforms:{wrist:{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.06867414712905884,-.009423808194696903,.10627774149179459,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[-.5012241005897522,-.8650535345077515,-.0213695727288723,0,.7415963411331177,-.4421543478965759,.5045139193534851,0,-.44587990641593933,.23702676594257355,.8631392121315002,0,-.032122574746608734,-.01196830440312624,.07194234430789948,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[-.3175753057003021,-.9460570216178894,-.06419729441404343,0,.8958902955055237,-.32153913378715515,.30658137798309326,0,-.3106854259967804,.03984907269477844,.9496771097183228,0,-.017625702545046806,-.01967475935816765,.04387917369604111,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[-.4944636821746826,-.8691971898078918,.001086252392269671,0,.8307800889015198,-.4722411036491394,.2946045398712158,0,-.25555649399757385,.14657381176948547,.9556186199188232,0,-.007126678712666035,-.021021386608481407,.011786630377173424,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[-.4944636821746826,-.8691971898078918,.001086252392269671,0,.8307800889015198,-.4722411036491394,.2946045398712158,0,-.25555649399757385,.14657381176948547,.9556186199188232,0,.0003423091256991029,-.024528030306100845,-.011410919018089771,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.038037415593862534,-.0020236473064869642,.07626739144325256,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.7986818552017212,-.35985732078552246,.48229536414146423,0,.538311243057251,.7854709625244141,-.30537736415863037,0,-.2689369022846222,.5035246014595032,.8210577368736267,0,-.006869405973702669,.033938243985176086,.04206443578004837,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.8285930156707764,-.32672837376594543,.4546217918395996,0,.5577570199966431,.4116027057170868,-.7207564115524292,0,.04836784675717354,.8507823944091797,.5232869386672974,0,.0033306588884443045,.014840902760624886,.010923954658210278,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.8412464261054993,-.35794928669929504,.4051857888698578,0,.5139996409416199,.29711154103279114,-.8046918511390686,0,.16765329241752625,.8852096796035767,.4339304566383362,0,.0021551470272243023,-.0058362227864563465,-.0017938464879989624,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.8412464261054993,-.35794928669929504,.4051857888698578,0,.5139996409416199,.29711154103279114,-.8046918511390686,0,.16765329241752625,.8852096796035767,.4339304566383362,0,-.00131594471167773,-.025222131982445717,-.012442642822861671,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.05395089089870453,.003063359996303916,.07402937114238739,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9187911748886108,-.1530158370733261,.36387869715690613,0,.038666240870952606,.9522662162780762,.302808940410614,0,-.3928440511226654,-.26414817571640015,.8808513283729553,0,-.02717282809317112,.04162866622209549,.03678669035434723,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.9228746294975281,-.12856416404247284,.36300456523895264,0,.14524033665657043,.9892153143882751,-.01890045404434204,0,-.3566599190235138,.07016586512327194,.9315956234931946,0,-.01030921470373869,.05296773463487625,-.0010256498353555799,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9325166344642639,-.040404170751571655,.35885775089263916,0,.06836572289466858,.995502769947052,-.0655682161450386,0,-.3545948565006256,.08567725121974945,.9310863614082336,0,-.0004833847051486373,.05103470757603645,-.026690717786550522,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9325166344642639,-.040404170751571655,.35885775089263916,0,.06836572289466858,.995502769947052,-.0655682161450386,0,-.3545948565006256,.08567725121974945,.9310863614082336,0,.008158999495208263,.05004044249653816,-.050120558589696884,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.06732909381389618,.007902119308710098,.07209732383489609,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9391821026802063,-.027994679287075996,.34227466583251953,0,-.18282271921634674,.8029410243034363,.5673282742500305,0,-.2907087206840515,-.5954000353813171,.7489906549453735,0,-.047129884362220764,.03806127607822418,.032147664576768875,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9249380826950073,.03699534013867378,.3783116042613983,0,-.12898847460746765,.9667453765869141,.2208271026611328,0,-.3575615882873535,-.25304901599884033,.8989526629447937,0,-.03579339757561684,.06127955764532089,.002939916681498289,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9001164436340332,.03983335196971893,.4338230490684509,0,-.09662467986345291,.9892624020576477,.10964841395616531,0,-.4247973561286926,-.14061418175697327,.8943013548851013,0,-.026291755959391594,.06800390034914017,-.02094830758869648,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9001164436340332,.03983335196971893,.4338230490684509,0,-.09662467986345291,.9892624020576477,.10964841395616531,0,-.4247973561286926,-.14061418175697327,.8943013548851013,0,-.016345610842108727,.07300511747598648,-.04263874143362045,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.8769711852073669,.31462907791137695,.36322021484375,0,-.4506046175956726,.801031768321991,.39408499002456665,0,-.16696058213710785,-.5092697143554688,.8442559838294983,0,-.07460174709558487,.0062340241856873035,.06756893545389175,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9498357176780701,.1553308218717575,.2714462876319885,0,-.3019258379936218,.6817675232887268,.6663586497306824,0,-.08155745267868042,-.7148879170417786,.694466233253479,0,-.06697750836610794,.029482364654541016,.02902858518064022,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9214097261428833,.27928245067596436,.2701927423477173,0,-.3670244514942169,.8538867831230164,.36901235580444336,0,-.12765564024448395,-.43917882442474365,.8892839550971985,0,-.06447203457355499,.05144399777054787,.0076942890882492065,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9038633704185486,.23618005216121674,.3567195236682892,0,-.3532794713973999,.8823202252388,.3109731376171112,0,-.24129553139209747,-.4070987403392792,.8809353709220886,0,-.06187915802001953,.060364335775375366,-.010368337854743004,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9038633704185486,.23618005216121674,.3567195236682892,0,-.3532794713973999,.8823202252388,.3109731376171112,0,-.24129553139209747,-.4070987403392792,.8809353709220886,0,-.056796226650476456,.07042007893323898,-.02921444922685623,1],radius:.005425984505563974}},gripOffsetMatrix:[.08027800917625427,-.8086723685264587,-.5827556252479553,0,-.4154181480407715,-.5585916638374329,.7179154753684998,0,-.9060805439949036,.1844543218612671,-.3807799518108368,0,-.038054611533880234,-.002910431008785963,.03720742464065552,1]},rS={jointTransforms:{wrist:{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.04913589730858803,.0021463718730956316,.11701996624469757,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[-.07536252588033676,-.9959676265716553,-.04867160692811012,0,.5877083539962769,-.08379616588354111,.8047218918800354,0,-.8055551648139954,.032041035592556,.5916536450386047,0,-.010643752291798592,.0006936835707165301,.08736639469861984,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[.1374533325433731,-.9904957413673401,.004982374142855406,0,.5534393787384033,.08097179979085922,.8289443850517273,0,-.8214688897132874,-.11118389666080475,.559309184551239,0,.015547193586826324,-.0003480653394944966,.0681300163269043,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[-.04659227654337883,-.9974699020385742,-.05369402840733528,0,.6812446117401123,-.07104194164276123,.728600800037384,0,-.7305715084075928,-.002631746232509613,.6828309893608093,0,.04330715537071228,.003409178927540779,.0492292083799839,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[-.04659227654337883,-.9974699020385742,-.05369402840733528,0,.6812446117401123,-.07104194164276123,.728600800037384,0,-.7305715084075928,-.002631746232509613,.6828309893608093,0,.062003348022699356,.004069602582603693,.03322213143110275,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.02009812369942665,.008770795539021492,.08660387247800827,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.9001791477203369,-.2598813474178314,.3494834005832672,0,.06073702871799469,.8695210218429565,.490146666765213,0,-.4312632381916046,-.41999316215515137,.7985095381736755,0,-.00017739279428496957,.03890012577176094,.039073407649993896,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.9082008600234985,-.20898112654685974,.36262574791908264,0,.11045389622449875,.9553793668746948,.27395179867744446,0,-.40369608998298645,-.20874978601932526,.8907597661018372,0,.01617925800383091,.05482936650514603,.008788082748651505,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.9309692978858948,-.16783711314201355,.32423174381256104,0,.1080828532576561,.9749603867530823,.1943446695804596,0,-.34873148798942566,-.14588497579097748,.9257990717887878,0,.02599053829908371,.059902746230363846,-.012860597111284733,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.9309692978858948,-.16783711314201355,.32423174381256104,0,.1080828532576561,.9749603867530823,.1943446695804596,0,-.34873148798942566,-.14588497579097748,.9257990717887878,0,.03362493962049484,.06421422213315964,-.033461250364780426,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.03627845644950867,.011579737067222595,.08550142496824265,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9876697659492493,-.06786545366048813,.1410750150680542,0,-.015095947310328484,.855663537979126,.5173118710517883,0,-.15582047402858734,-.5130629539489746,.8440889716148376,0,-.021259509027004242,.04587256908416748,.03659208118915558,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.988391637802124,-.04354291781783104,.14555205404758453,0,.008894841186702251,.9729899168014526,.23067504167556763,0,-.15166506171226501,-.22670257091522217,.9620829224586487,0,-.014570588245987892,.06789684295654297,.0003578895702958107,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9853697419166565,.044260796159505844,.16458062827587128,0,-.0757969319820404,.9787378311157227,.19059516489505768,0,-.1526455283164978,-.20028135180473328,.9677740931510925,0,-.010392282158136368,.07414241135120392,-.026147106662392616,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9853697419166565,.044260796159505844,.16458062827587128,0,-.0757969319820404,.9787378311157227,.19059516489505768,0,-.1526455283164978,-.20028135180473328,.9677740931510925,0,-.0069718430750072,.08024183660745621,-.05014154314994812,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.05402477830648422,.015797706320881844,.08152295649051666,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9940828680992126,.05735103040933609,.09224652498960495,0,-.10022822767496109,.8116500377655029,.5754809379577637,0,-.041867565363645554,-.5813214182853699,.8125960826873779,0,-.041623555123806,.04171867296099663,.03582974523305893,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9843675494194031,.12044742703437805,.12850022315979004,0,-.15629759430885315,.9337108135223389,.3221098482608795,0,-.08118485659360886,-.3371586799621582,.937940776348114,0,-.039990875869989395,.06438793987035751,.004141641780734062,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9748351573944092,.11857274919748306,.18877571821212769,0,-.15575434267520905,.9681083559989929,.19623035192489624,0,-.15948788821697235,-.22069483995437622,.9622148275375366,0,-.03783353418111801,.07334739714860916,-.020782606676220894,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9748351573944092,.11857274919748306,.18877571821212769,0,-.15575434267520905,.9681083559989929,.19623035192489624,0,-.15948788821697235,-.22069483995437622,.9622148275375366,0,-.03445569798350334,.0802423357963562,-.04392268508672714,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.9181402921676636,.35625091195106506,.17350243031978607,0,-.39615097641944885,.8352503180503845,.38134080171585083,0,-.009065053425729275,-.41885748505592346,.9080066680908203,0,-.06191859766840935,.013620133511722088,.07850203663110733,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9714386463165283,.236698180437088,-.016745081171393394,0,-.18462024629116058,.7982627749443054,.5733163952827454,0,.14906984567642212,-.5538501739501953,.8191629648208618,0,-.061502378433942795,.032741155475378036,.03705105185508728,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9337416291236877,.35620439052581787,-.03527557849884033,0,-.33203884959220886,.8987522721290588,.28634607791900635,0,.13370157778263092,-.2556603252887726,.9574766755104065,0,-.06608185172080994,.049755651503801346,.011886020191013813,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9419984817504883,.3303581774234772,.059175245463848114,0,-.33483216166496277,.9130291938781738,.23294763267040253,0,.02292730286717415,-.2392500638961792,.970687210559845,0,-.0687975287437439,.054948460310697556,-.007561664097011089,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9419984817504883,.3303581774234772,.059175245463848114,0,-.33483216166496277,.9130291938781738,.23294763267040253,0,.02292730286717415,-.2392500638961792,.970687210559845,0,-.06947512179613113,.0613851435482502,-.028543535619974136,1],radius:.005425984505563974}},gripOffsetMatrix:[-.0005348679260350764,-.8648636937141418,-.5020061135292053,0,-.2741127908229828,-.48265108466148376,.8318111896514893,0,-.9616971015930176,.13805119693279266,-.2368120402097702,0,-.02878567762672901,.0017147823236882687,.04536811262369156,1]},iS={open:{thumb:{cmc:[-72,3,-48],mcp:5,ip:2},index:{mcp:-4,pip:2,dip:4,yaw:-17},middle:{mcp:-3,pip:3,dip:5,yaw:3},ring:{mcp:-2,pip:6,dip:8,yaw:21.5},pinky:{mcp:1,pip:8,dip:8,yaw:18.5}},flat:{thumb:{cmc:[-16.5,-4.8,-67.7],mcp:10,ip:6,mcpYaw:14,mcpRoll:2,ipYaw:0,ipRoll:-2},index:{mcp:2.7,pip:3,dip:2,yaw:8.2,roll:-7,pipYaw:-1.8,pipRoll:1},middle:{mcp:4,pip:3,dip:2,yaw:-.1,roll:-2.2,pipYaw:-.1,pipRoll:3.5},ring:{mcp:2.1,pip:4,dip:2.5,yaw:-4.9,roll:1,pipYaw:-.8,pipRoll:2.5},pinky:{mcp:15,pip:5,dip:3,yaw:-25.6,roll:-8,pipYaw:.8,pipRoll:7.5}},fist:{thumb:{cmc:[-25.4,-63,-118.6],shift:1,mcp:55,ip:73.4,mcpYaw:21.2,mcpRoll:20.8,ipYaw:-7.2,ipRoll:-4.4},index:{mcp:88,pip:100,dip:62,yaw:-4.2,roll:-8.8},middle:{mcp:86,pip:102,dip:64,yaw:5,roll:0},ring:{mcp:82,pip:106,dip:74,yaw:12.9,roll:7.3},pinky:{mcp:74,pip:108,dip:70,yaw:19.7,roll:-17.7}},"thumbs-up":{thumb:{cmc:[-77,-12,-58],mcp:0,ip:-6},index:{mcp:88,pip:100,dip:62,yaw:-2.5,roll:-6.9},middle:{mcp:86,pip:102,dip:64,yaw:5,roll:0},ring:{mcp:88,pip:102,dip:66,yaw:9.8,roll:10.5},pinky:{mcp:90,pip:100,dip:66,yaw:27,roll:-24}},"finger-gun":{thumb:{cmc:[-84,-2,-66],mcp:13,ip:13,mcpYaw:-2,shift:.6},index:{mcp:3,pip:13,dip:9,yaw:-7},middle:{mcp:83,pip:103,dip:63,yaw:5.5,roll:0},ring:{mcp:86,pip:104,dip:68,yaw:8.5,roll:10.5},pinky:{mcp:87,pip:101,dip:67,yaw:23.5,roll:-22}},peace:{thumb:{cmc:[-16.2,-53.8,-93.4],shift:.9,mcp:60.8,ip:52,mcpRoll:-10,ipRoll:-25},index:{mcp:0,pip:12,dip:9,yaw:-20},middle:{mcp:-3,pip:13,dip:9,yaw:14},ring:{mcp:83,pip:104,dip:76,yaw:5,roll:12},pinky:{mcp:87,pip:102,dip:68,yaw:27,roll:-27}},three:{thumb:{cmc:[3.5,-49.3,-109.2],shift:1,mcp:49.5,ip:63.3},index:{mcp:3,pip:8,dip:8,yaw:-5},middle:{mcp:2,pip:7,dip:7,yaw:5},ring:{mcp:4,pip:10,dip:9,yaw:14},pinky:{mcp:90,pip:95,dip:68,yaw:-2}},four:{thumb:{cmc:[10.8,-20.1,-125.2],shift:1,mcp:46,ip:48},index:{mcp:2,pip:8,dip:8,yaw:-7},middle:{mcp:1,pip:10,dip:9,yaw:5},ring:{mcp:8,pip:12,dip:11,yaw:15},pinky:{mcp:11,pip:14,dip:12,yaw:8}},ok:{thumb:{cmc:[-51.3,-48.4,-94],shift:.6,mcp:29,ip:42.6},index:{mcp:54,pip:58.2,dip:36.5,yaw:-26,roll:21},middle:{mcp:4,pip:15,dip:12,yaw:4},ring:{mcp:11,pip:21,dip:16,yaw:12},pinky:{mcp:19,pip:26,dip:20,yaw:9}},rock:{thumb:{cmc:[-13.7,-54.4,-104.1],shift:.9,mcp:56.1,ip:53},index:{mcp:3,pip:12,dip:11,yaw:-8},middle:{mcp:86,pip:102,dip:58,yaw:5,roll:0},ring:{mcp:86,pip:102,dip:66,yaw:9.8,roll:10.5},pinky:{mcp:11,pip:7,dip:8,yaw:3}},call:{thumb:{cmc:[-64,-14,-67],mcp:5,ip:-10},index:{mcp:86,pip:102,dip:56,yaw:-5.7,roll:3},middle:{mcp:82,pip:108,dip:54,yaw:4.9,roll:8},ring:{mcp:78,pip:104,dip:58,yaw:12.4,roll:14.3},pinky:{mcp:-2,pip:12,dip:9,yaw:10}},"pinch-middle":{thumb:{cmc:[-6.9,-58.7,-127.3],shift:1,mcp:20.3,ip:43.6},index:{mcp:28,pip:44,dip:24,yaw:-9,pipYaw:12},middle:{mcp:49.9,pip:61.6,dip:35,yaw:4},ring:{mcp:50,pip:64,dip:38,yaw:9},pinky:{mcp:60,pip:66,dip:40,yaw:7}},"pinch-ring":{thumb:{cmc:[3.1,-63.5,-131.4],shift:1,mcp:29.7,ip:34},index:{mcp:26,pip:36,dip:22,yaw:5.5},middle:{mcp:33,pip:45,dip:27,yaw:-2.4},ring:{mcp:52.1,pip:54.8,dip:33.5,yaw:4},pinky:{mcp:54,pip:50,dip:30,yaw:4}},"pinch-pinky":{thumb:{cmc:[24,-57.9,-142],shift:1,mcp:31.6,ip:30.1},index:{mcp:26,pip:36,dip:25,yaw:4},middle:{mcp:32,pip:44,dip:30,yaw:-3.2},ring:{mcp:50,pip:47.5,dip:31.6,yaw:1},pinky:{mcp:45.8,pip:58.9,dip:30.4,yaw:-.4}},tripod:{thumb:{cmc:[-7.3,-50.9,-118.2],shift:1,mcp:14.8,ip:27.2},index:{mcp:50,pip:45.9,dip:27.5,yaw:.5,roll:-9,pipYaw:3.7},middle:{mcp:44,pip:54.4,dip:32.6,yaw:.9,roll:5,pipYaw:.1},ring:{mcp:63,pip:76,dip:44,yaw:5},pinky:{mcp:75,pip:82,dip:48,yaw:1}},"key-pinch":{thumb:{cmc:[-30.4,-8.9,-59],shift:1,mcp:25.5,ip:20.9,mcpYaw:2.6,mcpRoll:3.2,ipYaw:-11.5,ipRoll:-12.3},index:{mcp:56,pip:66,dip:42,yaw:-10,roll:-3.2},middle:{mcp:74,pip:96,dip:60,yaw:3.6,roll:0},ring:{mcp:80,pip:99,dip:63,yaw:8.1,roll:12},pinky:{mcp:85,pip:101,dip:65,yaw:21.9,roll:-19.5}},microgesture:{thumb:{cmc:[-49.1,6.9,-62],shift:1,mcp:37.9,ip:40.1,mcpYaw:2.6,mcpRoll:3.2,ipYaw:-15.3,ipRoll:-12.3},index:{mcp:40,pip:50,dip:30,yaw:-10,roll:-3.2},middle:{mcp:58,pip:72,dip:44,yaw:3.6,roll:0},ring:{mcp:62,pip:74,dip:46,yaw:8.1,roll:12},pinky:{mcp:66,pip:76,dip:46,yaw:21.9,roll:-19.5}},grip:{thumb:{cmc:[-27.6,-65.9,-128.5],shift:1,mcp:41.3,ip:48.5,mcpYaw:-1.6,mcpRoll:-4.5},index:{mcp:49.4,pip:72.5,dip:45.6,yaw:34.9,roll:-12.6},middle:{mcp:71.4,pip:61.5,dip:37.7,yaw:20.2,roll:-.8},ring:{mcp:70,pip:59.2,dip:37.5,yaw:-2.1,roll:16},pinky:{mcp:67.8,pip:55.4,dip:35.8,yaw:-3.4,roll:-19.5}},claw:{thumb:{cmc:[-41.2,-68.8,-71.2],shift:0,mcp:30.8,ip:31.5},index:{mcp:22.8,pip:44.5,dip:33,yaw:-12},middle:{mcp:22.9,pip:42.2,dip:33,yaw:3},ring:{mcp:25,pip:42.4,dip:33,yaw:14},pinky:{mcp:47.1,pip:52.1,dip:33,yaw:22}},hook:{thumb:{cmc:[-25.8,1.3,-92.6],mcp:24,ip:32},index:{mcp:0,pip:90,dip:56,yaw:9.3,roll:-6.4},middle:{mcp:0,pip:94,dip:60,yaw:2.5,roll:-2},ring:{mcp:4,pip:98,dip:66,yaw:-3.5,roll:5},pinky:{mcp:19,pip:100,dip:68,yaw:-22,roll:-12}},cup:{thumb:{cmc:[-11.8,-11.5,-98.7],shift:.2,mcp:13.5,ip:14.2},index:{mcp:36.2,pip:31.1,dip:21.7,yaw:16.1,roll:-4.4,pipYaw:3.3,pipRoll:3.7},middle:{mcp:38.8,pip:35.5,dip:22.7,yaw:3,roll:-7.3,pipYaw:5,pipRoll:-.2},ring:{mcp:39.5,pip:30.1,dip:21.1,yaw:2.7,roll:10.5,pipYaw:-6.2,pipRoll:4.3},pinky:{mcp:42.7,pip:28.5,dip:18.4,yaw:-11.7,roll:-7.5,pipYaw:1,pipRoll:6.3}}},aS={};for(let[e,t]of Object.entries(iS))aS[e]=tS(t,rS,nS);var oS={touch:{cmc:[-42.1,4.7,-62.6],mcp:35.1,ip:35.5,mcpYaw:4,ipYaw:-13.7},"tip-mid":{cmc:[-39.3,-.9,-61],mcp:32.4,ip:31.5,mcpYaw:2.6,ipYaw:-13.4},tip:{cmc:[-35.4,-7.3,-59.8],mcp:27.9,ip:25.9,mcpYaw:1.4,ipYaw:-12.4},"knuckle-mid":{cmc:[-45.6,8.2,-67.7],mcp:35.5,ip:39.9,mcpYaw:5.1,ipYaw:-13.6},knuckle:{cmc:[-47.1,11.5,-71],mcp:34.1,ip:41.7,mcpYaw:7.5,ipYaw:-12.1},"forward-start":{cmc:[-46.1,7.7,-64],mcp:43.2,ip:45.7,mcpYaw:3.8,ipYaw:-15},"forward-mid":{cmc:[-42,3.2,-63.4],mcp:33.7,ip:35.1,mcpYaw:5.1,ipYaw:-13.1},forward:{cmc:[-30.6,-2.4,-60.3],mcp:20.2,ip:16.6,mcpYaw:4.3,ipYaw:-9.5},"backward-start":{cmc:[-38.1,1.9,-62.3],mcp:29.2,ip:28.5,mcpYaw:4,ipYaw:-12.1},"backward-mid":{cmc:[-45.1,8.2,-62.2],mcp:41.9,ip:43.2,mcpYaw:3.5,ipYaw:-14.6},backward:{cmc:[-44.8,10.2,-63.7],mcp:48.5,ip:49.5,mcpYaw:3.6,ipYaw:-14.8}},sS={};for(let[e,t]of Object.entries(oS)){let n=iS.microgesture;sS[e]=tS({...n,thumb:{...n.thumb,...t}},rS,nS)}var cS={jointTransforms:{wrist:{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.05789132043719292,.01670890860259533,.11183350533246994,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[.02145560085773468,-.9978390336036682,.0621047280728817,0,.41311800479888916,.06541631370782852,.9083252549171448,0,-.9104245901107788,.006167683284729719,.4136286973953247,0,-.016488194465637207,.012708572670817375,.08862338215112686,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[.21270370483398438,-.966137707233429,.14606566727161407,0,.49890995025634766,.2359165996313095,.8339261412620544,0,-.8401462435722351,-.10450579971075058,.5321959853172302,0,.013112368993461132,.012508046813309193,.07517509907484055,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[.01653280481696129,-.9986647963523865,.048943229019641876,0,.26313456892967224,.051570065319538116,.9633802771568298,0,-.9646173715591431,-.0030490627977997065,.26363563537597656,0,.04150351136922836,.016039609909057617,.05719054117798805,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[.01653280481696129,-.9986647963523865,.048943229019641876,0,.26313456892967224,.051570065319538116,.9633802771568298,0,-.9646173715591431,-.0030490627977997065,.26363563537597656,0,.06548332422971725,.01683700829744339,.0516640841960907,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.02592567168176174,.019982583820819855,.08479326963424683,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.9063700437545776,-.21756279468536377,.3621589243412018,0,.0970839336514473,.9415287375450134,.3226419687271118,0,-.41117796301841736,-.2572731077671051,.8744958639144897,0,-.0015709538711234927,.043078210204839706,.034657616168260574,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.9159826040267944,-.1651475727558136,.36565208435058594,0,.09755707532167435,.9756820797920227,.1962820291519165,0,-.3891757130622864,-.14411886036396027,.9098196625709534,0,.014023927971720695,.052835866808891296,.0014903299743309617,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.9378057718276978,-.12329639494419098,.3245268166065216,0,.032558172941207886,.9619227051734924,.2713746726512909,0,-.3456292748451233,-.2439306229352951,.9061115384101868,0,.023482320830225945,.05633850023150444,-.020621655508875847,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.9378057718276978,-.12329639494419098,.3245268166065216,0,.032558172941207886,.9619227051734924,.2713746726512909,0,-.3456292748451233,-.2439306229352951,.9061115384101868,0,.03096788562834263,.06281610578298569,-.040703095495700836,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.04184452444314957,.022474845871329308,.08177298307418823,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9720265865325928,-.08313076198101044,.21966552734375,0,.20477405190467834,.7580050826072693,-.6192700862884521,0,-.11502730846405029,.6469289064407349,.7538246512413025,0,-.022107340395450592,.05035499855875969,.02970452979207039,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.9779140949249268,-.07129573822021484,.19646917283535004,0,.1287083923816681,-.5352076292037964,-.8348574042320251,0,.1646735966205597,.8417060971260071,-.5142109394073486,0,-.017169542610645294,.022584279999136925,-.00265491777099669,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9774913787841797,-.19657190144062042,.07661263644695282,0,-.1924918293952942,-.9796126484870911,-.05749811604619026,0,.08635343611240387,.041456472128629684,-.995401918888092,0,-.02170622907578945,-.0006043742760084569,.011511396616697311,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9774913787841797,-.19657190144062042,.07661263644695282,0,-.1924918293952942,-.9796126484870911,-.05749811604619026,0,.08635343611240387,.041456472128629684,-.995401918888092,0,-.02438267692923546,-.0026927536819130182,.03627248480916023,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.05944233387708664,.0264605600386858,.07478221505880356,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9842101335525513,.024470895528793335,.1753024309873581,0,.12200043350458145,.6237703561782837,-.7720272541046143,0,-.12824076414108276,.7812241315841675,.610936164855957,0,-.04249368980526924,.0467497780919075,.027722163125872612,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9941774606704712,.05949164181947708,.08983955532312393,0,.10504482686519623,-.7208291888237,-.6851072907447815,0,.024001073092222214,.6905553936958313,-.7228817939758301,0,-.0374927744269371,.016285063698887825,.0038980208337306976,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9995742440223694,.01638498157262802,.02412819117307663,0,.007813597097992897,-.9474818110466003,.31971633434295654,0,.028100071474909782,-.31939181685447693,-.9472070932388306,0,-.038130562752485275,-.0020653479732573032,.02310742810368538,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9995742440223694,.01638498157262802,.02412819117307663,0,.007813597097992897,-.9474818110466003,.31971633434295654,0,.028100071474909782,-.31939181685447693,-.9472070932388306,0,-.0390593595802784,.004176302347332239,.0466572530567646,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.9147363901138306,.3458845317363739,.20885537564754486,0,-.3923271894454956,.8839452862739563,.2544005811214447,0,-.09662359952926636,-.3146490156650543,.9442773461341858,0,-.06715242564678192,.024195827543735504,.07137546688318253,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9613109827041626,.22439135611057281,.15977802872657776,0,.01002211682498455,.5511574745178223,-.8343409299850464,0,-.27528178691864014,.8036624789237976,.5275853276252747,0,-.06273911893367767,.038559623062610626,.028268879279494286,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9820972084999084,.18811029195785522,-.00995189044624567,0,.14063723385334015,-.7673450708389282,-.6256227493286133,0,-.12532226741313934,.6130226850509644,-.7800630927085876,0,-.05428232625126839,.013870777562260628,.012061242014169693,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9744614362716675,.20454788208007812,-.09265263378620148,0,.22429193556308746,-.9065253138542175,.35764020681381226,0,-.010836843401193619,-.3692878782749176,-.9292529225349426,0,-.05173685774207115,.0014194445684552193,.02790539152920246,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9744614362716675,.20454788208007812,-.09265263378620148,0,.22429193556308746,-.9065253138542175,.35764020681381226,0,-.010836843401193619,-.3692878782749176,-.9292529225349426,0,-.05098633095622063,.008463085629045963,.048688892275094986,1],radius:.005425984505563974}},gripOffsetMatrix:[.005510995630174875,-.9149997234344482,-.40341615676879883,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.9340395331382751,.13936474919319153,-.32885703444480896,0,-.031803809106349945,.007837686687707901,.04313928261399269,1]},lS={press:.9,release:.7},uS={thumb:[Z.ThumbMetacarpal,Z.ThumbPhalanxProximal,Z.ThumbPhalanxDistal,Z.ThumbTip],index:[Z.IndexFingerMetacarpal,Z.IndexFingerPhalanxProximal,Z.IndexFingerPhalanxIntermediate,Z.IndexFingerPhalanxDistal,Z.IndexFingerTip],middle:[Z.MiddleFingerMetacarpal,Z.MiddleFingerPhalanxProximal,Z.MiddleFingerPhalanxIntermediate,Z.MiddleFingerPhalanxDistal,Z.MiddleFingerTip],ring:[Z.RingFingerMetacarpal,Z.RingFingerPhalanxProximal,Z.RingFingerPhalanxIntermediate,Z.RingFingerPhalanxDistal,Z.RingFingerTip],pinky:[Z.PinkyFingerMetacarpal,Z.PinkyFingerPhalanxProximal,Z.PinkyFingerPhalanxIntermediate,Z.PinkyFingerPhalanxDistal,Z.PinkyFingerTip]},dS=Object.keys(uS),fS=Object.values(Z),pS=(e,t)=>typeof t==`string`&&Object.prototype.hasOwnProperty.call(e,t),mS={profileId:`oculus-hand`,fallbackProfileIds:[`generic-hand`,`generic-hand-select`,`generic-trigger`],poses:{default:rS,pinch:nS,point:cS,...aS}},hS=[`menu`,`swipe-left`,`swipe-right`,`swipe-forward`,`swipe-backward`,`tap`],gS={mapping:Sx.XRStandard,buttons:[{id:`pinch`,type:`analog`,eventTrigger:`select`},null,null,null,...hS.map(e=>({id:e,type:`binary`}))],axes:[]},_S=G(),vS=K(),yS=G(),bS=G(),xS=K(),SS=G(),CS=G(),wS=K(),TS=G(),ES=(e,t,n,r)=>(rb(_S,t),ab(vS,t),ib(yS,t),rb(bS,n),ab(xS,n),ib(SS,n),Cb(CS,_S,bS,r),Rb(wS,vS,xS,r),Cb(TS,yS,SS,r),ob(e,wS,CS,TS),e),DS=qy(),OS=qy(),kS=qy(),AS=qy(),jS=G(),MS=G(),NS=K(),PS=K(),FS=(e,t,n,r)=>{rb(jS,t),rb(MS,n);let i=ub(jS),a=ub(MS);i<1e-9||a<1e-9||(gb(jS,jS,1/i),gb(MS,MS,1/a),Jb(NS,jS,MS),Rb(NS,PS,NS,r),Tb(jS,jS,NS),gb(jS,jS,(1-r)*i+r*a),e[12]=jS[0],e[13]=jS[1],e[14]=jS[2])},IS=[1,-1,-1,0,-1,1,1,0,-1,1,1,0,-1,1,1,1],LS=e=>{for(let t=0;t<16;t++)e[t]*=IS[t]},RS=()=>{let e={jointTransforms:{},gripOffsetMatrix:qy()};for(let t of Object.values(Z))e.jointTransforms[t]={offsetMatrix:qy(),radius:0};return e},zS=(e,t)=>{for(let n of Object.values(Z))Yy(e.jointTransforms[n].offsetMatrix,t.jointTransforms[n].offsetMatrix),e.jointTransforms[n].radius=t.jointTransforms[n].radius;t.gripOffsetMatrix&&Yy(e.gripOffsetMatrix,t.gripOffsetMatrix)},BS=(e,t,n)=>(1-n)*e+n*t,VS=(e,t,n,r,i)=>{let a=Z.Wrist;for(let o of r)Qy(DS,t.jointTransforms[a].offsetMatrix),$y(OS,DS,t.jointTransforms[o].offsetMatrix),Qy(DS,n.jointTransforms[a].offsetMatrix),$y(kS,DS,n.jointTransforms[o].offsetMatrix),ES(AS,OS,kS,i),FS(AS,OS,kS,i),$y(e.jointTransforms[o].offsetMatrix,e.jointTransforms[a].offsetMatrix,AS),e.jointTransforms[o].radius=BS(t.jointTransforms[o].radius,n.jointTransforms[o].radius,i),a=o},HS=(e,t,n,r)=>{ES(e.jointTransforms[Z.Wrist].offsetMatrix,t.jointTransforms[Z.Wrist].offsetMatrix,n.jointTransforms[Z.Wrist].offsetMatrix,r),e.jointTransforms[Z.Wrist].radius=BS(t.jointTransforms[Z.Wrist].radius,n.jointTransforms[Z.Wrist].radius,r);for(let i of dS)VS(e,t,n,uS[i],r);t.gripOffsetMatrix&&n.gripOffsetMatrix&&ES(e.gripOffsetMatrix,t.gripOffsetMatrix,n.gripOffsetMatrix,r)},US=[`thumb`,`index`],WS={wrist:Z.Wrist,"index-tip":Z.IndexFingerTip,"thumb-tip":Z.ThumbTip},GS=e=>typeof e==`string`&&(e===`target-ray`||e===`grip`||e===`grasp`||pS(WS,e)||fS.includes(e)),KS=(e,t,n=K())=>{let r=bb(G(),yb(G(),e.fingers)),i=G();if(e.palm)yb(i,e.palm);else if(e.thumb)Sb(i,e.thumb,e.fingers),t===Lx.Right&&yb(i,i);else return null;if(_b(i,i,r,-xb(i,r)),ub(i)<1e-6)return null;bb(i,i);let a=Sb(G(),i,r);return qb(n,ab(n,Xy(a[0],a[1],a[2],0,i[0],i[1],i[2],0,r[0],r[1],r[2],0,0,0,0,1)))},qS=G(),JS=G(),YS=RS(),XS=RS(),ZS=K(),QS=K(),$S=G(),eC=class extends Wx{constructor(e,t,n){if(t!==Lx.Left&&t!==Lx.Right)throw new DOMException(`handedness for XRHandInput must be either "left" or "right"`,`InvalidStateError`);if(!e.poses.default||!e.poses.pinch)throw new DOMException(`"default" and "pinch" hand pose configs are required`,`InvalidStateError`);let r=e.pinchThresholds??lS;if(!(r.release>0&&r.release<r.press&&r.press<=1))throw new DOMException(`pinchThresholds need 0 < release < press <= 1`,`InvalidStateError`);let i=new yx(n),a=new yx(i),o=[e.profileId,...e.fallbackProfileIds],s=new Ix;Object.values(Z).forEach(e=>{s.set(e,new Vx(e,i))});let c=new Bx(t,Rx.TrackedPointer,o,i,new Ex(gS),a,s);super(c);let l=c.gamepad[Y].buttonsMap.pinch;l[Y].thresholds={...r};let u=RS();this[Zb]={poseId:`default`,poses:e.poses,fingerPoses:{},blendedPose:u,blendedPoseStale:!1,fingersBlended:!1,transitionFrom:RS(),transitionFromId:`default`,transitionProgress:null,displayedPose:RS(),thumbMotion:null,pin:null},this.updateHandPose()}get poseId(){return this[Zb].poseId}set poseId(e){if(!pS(this[Zb].poses,e)){console.warn(`Pose config ${e} not found`);return}this[Zb].poseId=e,this[Zb].fingerPoses={},this[Zb].blendedPoseStale=!0,this[Zb].transitionProgress=null}get poseIds(){return Object.keys(this[Zb].poses)}get fingerPoses(){let e={};for(let t of dS){let n=this[Zb].fingerPoses[t];n&&(e[t]={...n})}return e}setFingerPose(e,t,n=1){if(!pS(uS,e)){console.warn(`Unknown finger ${e}`);return}if(!pS(this[Zb].poses,t)){console.warn(`Pose config ${t} not found`);return}if(typeof n!=`number`||!(n>=0&&n<=1)){console.warn(`Out-of-range weight ${n} provided for ${e}`);return}this[Zb].fingerPoses[e]={poseId:t,weight:n},this[Zb].blendedPoseStale=!0}clearFingerPoses(e){if(e===void 0)this[Zb].fingerPoses={};else if(pS(uS,e))delete this[Zb].fingerPoses[e];else{console.warn(`Unknown finger ${e}`);return}this[Zb].blendedPoseStale=!0}blendFingers(e){let{poses:t,fingerPoses:n,blendedPose:r}=this[Zb];if(!dS.some(e=>n[e]))return!1;zS(r,e);for(let i of dS){let a=n[i];a&&VS(r,e,t[a.poseId],uS[i],a.weight)}return!0}beginPoseTransition(e,t={}){let n=this[Zb];if(!pS(n.poses,e))return console.warn(`Pose config ${e} not found`),!1;this.updateDisplayedPose(),zS(n.transitionFrom,n.displayedPose),n.transitionFromId=n.poseId,n.poseId=e,n.fingerPoses={};for(let e of dS){let r=t[e];r&&(n.fingerPoses[e]={...r})}return n.blendedPoseStale=!0,n.transitionProgress=0,!0}get poseTransitionProgress(){return this[Zb].transitionProgress}set poseTransitionProgress(e){this[Zb].transitionProgress=e===null||e>=1?null:Math.max(0,e)}get poseTransitionFrom(){let e=this[Zb];return e.transitionProgress===null?null:e.transitionFromId}get pin(){return this[Zb].pin}setPin(e){this[Zb].pin=e?{anchor:e.anchor,target:lb(e.target),wristRotation:e.wristRotation&&Hb(e.wristRotation),graspPinch:e.graspPinch}:null,this.updateHandPose()}wristRotation(e=K()){return ab(e,this.inputSource.hand.get(Z.Wrist)[fx].offsetMatrix),Lb(e,this.quaternion.quat,e),qb(e,e)}anchorOffset(e,t=G(),n=1){if(e===`target-ray`)return pb(t,0,0,0);if(e===`grip`)return rb(t,this.inputSource.gripSpace[fx].offsetMatrix);if(e===`grasp`){let e=this[Zb];zS(YS,e.displayedPose);for(let t of US)VS(YS,e.displayedPose,e.poses.pinch,uS[t],n);return rb(t,YS.jointTransforms[Z.ThumbTip].offsetMatrix),rb(JS,YS.jointTransforms[Z.IndexFingerTip].offsetMatrix),Cb(t,t,JS,.5),this.inputSource.handedness===Lx.Right&&(t[0]=-t[0]),t}let r=WS[e]??e;return rb(t,this.inputSource.hand.get(r)[fx].offsetMatrix)}handAxes(){let e=this.inputSource.hand.get(Z.Wrist)[fx].offsetMatrix,t=db(-e[8],-e[9],-e[10]),n=db(-e[4],-e[5],-e[6]),r=Sb(G(),n,t),i=this.inputSource.hand.get(Z.IndexFingerMetacarpal)[fx].offsetMatrix,a=this.inputSource.hand.get(Z.PinkyFingerMetacarpal)[fx].offsetMatrix;return pb($S,i[12]-a[12],i[13]-a[13],i[14]-a[14]),xb(r,$S)<0&&yb(r,r),{fingers:t,palm:n,thumb:bb(r,r)}}solvePin(){let e=this[Zb].pin;e&&(e.wristRotation&&(ab(ZS,this.inputSource.hand.get(Z.Wrist)[fx].offsetMatrix),zb(ZS,ZS),Lb(QS,e.wristRotation,ZS),qb(QS,QS),this.quaternion.set(QS[0],QS[1],QS[2],QS[3])),this.anchorOffset(e.anchor,qS,e.graspPinch),Tb(qS,qS,this.quaternion.quat),this.position.set(e.target[0]-qS[0],e.target[1]-qS[1],e.target[2]-qS[2]),this.updateTargetRaySpace())}updateDisplayedPose(){let e=this[Zb],t=e.poses[e.poseId];e.blendedPoseStale&&=(e.fingersBlended=this.blendFingers(t),!1);let n=e.fingersBlended?e.blendedPose:t;e.transitionProgress===null?zS(e.displayedPose,n):HS(e.displayedPose,e.transitionFrom,n,e.transitionProgress)}updateHandPose(){let e=this[Zb],t=e.poses[e.poseId];this.updateDisplayedPose();let n=e.displayedPose,r=n,i=e.thumbMotion;i&&(zS(XS,n),VS(XS,i.from,i.to,uS.thumb,i.weight),r=XS);let a=this.pinchValue;if(a>0){zS(YS,r);for(let t of US)VS(YS,r,e.poses.pinch,uS[t],a);r=YS}let o=this.inputSource.handedness===Lx.Right;for(let e of fS){let t=this.inputSource.hand.get(e);Yy(t[fx].offsetMatrix,r.jointTransforms[e].offsetMatrix),o&&LS(t[fx].offsetMatrix),t[ux].radius=r.jointTransforms[e].radius}t.gripOffsetMatrix&&(Yy(this.inputSource.gripSpace[fx].offsetMatrix,n.gripOffsetMatrix),o&&LS(this.inputSource.gripSpace[fx].offsetMatrix)),this.solvePin()}get pinchValue(){return this[Qb].inputSource.gamepad[Y].buttonsMap.pinch.value}updatePinchValue(e){if(!(e>=0&&e<=1)){console.warn(`Out-of-range value ${e} provided for pinch`);return}kx(this[Qb].inputSource.gamepad[Y].buttonsMap.pinch,e)}setPinchValueImmediate(e){if(!(e>=0&&e<=1)){console.warn(`Out-of-range value ${e} provided for pinch`);return}Mx(this[Qb].inputSource.gamepad[Y].buttonsMap.pinch,e)}get thumbMotion(){return this[Zb].thumbMotion}set thumbMotion(e){this[Zb].thumbMotion=e}updateGestureButton(e,t){if(!hS.includes(e)||t!==0&&t!==1){console.warn(`Invalid value ${t} provided for gesture button ${e}`);return}kx(this[Qb].inputSource.gamepad[Y].buttonsMap[e],t)}onFrameStart(e){super.onFrameStart(e),this.updateHandPose()}},tC=[`linear`,`minimum-jerk`],nC=Math.log(.5)/Math.log(.4),rC=(e,t)=>{let n=Math.min(1,Math.max(0,t));e===`reach`&&(n**=+nC);let r=e===`linear`?n:n*n*n*(10+n*(-15+6*n));return Math.min(1,Math.max(0,r))},iC=[`up`,`down`,`forward`,`back`,`left`,`right`,`toward-head`,`away-from-head`],aC=db(0,1,0),oC=(e,t)=>{let n=Tb(G(),db(0,0,-1),t);n[1]=0,ub(n)<1e-6&&(Tb(n,db(0,1,0),t),n[1]=0),bb(n,n);let r=Sb(G(),n,aC);return{head:lb(e),forward:n,right:r}},sC=(e,t,n)=>{let r=G();if(typeof e!=`string`)return bb(r,e);switch(e){case`up`:return pb(r,0,1,0);case`down`:return pb(r,0,-1,0);case`forward`:return fb(r,t.forward);case`back`:return yb(r,t.forward);case`right`:return fb(r,t.right);case`left`:return yb(r,t.right);case`toward-head`:case`away-from-head`:return hb(r,t.head,n??t.head),ub(r)<1e-6&&yb(r,t.forward),bb(r,r),e===`toward-head`?r:yb(r,r)}},cC=(e,t)=>{let n=lb(e.head),r=t===Lx.Left?-.18:.18;return _b(n,n,e.right,r),n[1]-=.25,_b(n,n,e.forward,-.05),n},lC=Math.tan(15*Math.PI/180),uC=(e,t,n,r)=>{let i=lb(e);i[1]-=.25,_b(i,i,r.forward,.12);let a=hb(G(),t,i);ub(a)<1e-6&&fb(a,r.forward),bb(a,a);let o=a[1],s=db(a[0],0,a[2]);if(ub(s)>1e-6){bb(s,s),Cb(s,s,r.forward,.3),bb(s,s);let e=Math.sqrt(Math.max(0,1-o*o));pb(a,s[0]*e,o,s[2]*e)}let c=db(0,-1,0);_b(c,c,a,-xb(c,a)),ub(c)<1e-6&&yb(c,r.forward),bb(c,c);let l=gb(G(),r.right,n===Lx.Left?1:-1);return _b(l,l,a,-xb(l,a)),ub(l)>1e-6&&(bb(l,l),_b(c,c,l,lC),bb(c,c)),{fingers:a,palm:c}},dC=e=>`${e.device}:${e.kind}`,fC=class{constructor(e,t){this.engine=e,this.elapsed=0,this.stoppedEarly=!1,this.states=t.map(e=>({channel:e,begun:!1,done:!1})),this.endMs=Math.max(0,...t.map(e=>(e.delayMs??0)+e.durationMs))}get elapsedMs(){return this.elapsed}get done(){return this.states.every(e=>e.done)}get interrupted(){return this.stoppedEarly}advance(e){var t;this.elapsed+=e;for(let e of this.states){if(e.done)continue;let{channel:n}=e;if(!this.engine.owns(this,n)){e.done=!0,this.stoppedEarly=!0;continue}let r=n.delayMs??0;if(this.elapsed<r)continue;e.begun||(e.begun=!0,(t=n.begin)==null||t.call(n));let i=n.durationMs>0?(this.elapsed-r)/n.durationMs:1;n.apply(i>=1?1:rC(n.easing,i)),i>=1&&(e.done=!0,this.engine.release(this,n))}return this.done?Math.max(0,this.elapsed-this.endMs):-1}stop(){var e,t;for(let n of this.states)n.done||(n.done=!0,this.stoppedEarly=!0,this.engine.owns(this,n.channel)&&(this.engine.release(this,n.channel),(t=(e=n.channel).cancel)==null||t.call(e)))}},pC=class{constructor(){this.owners=new Map}run(e){var t,n;let r=new fC(this,e);for(let i of e){let e=dC(i),a=this.owners.get(e);a&&a.run!==r&&((n=(t=a.channel).cancel)==null||n.call(t)),this.owners.set(e,{run:r,channel:i})}return r}isActive(e){if(e===void 0)return this.owners.size>0;for(let t of this.owners.keys())if(t.startsWith(`${e}:`))return!0;return!1}stop(e){var t,n;for(let[r,i]of[...this.owners])(e===void 0||r.startsWith(`${e}:`))&&(this.owners.delete(r),(n=(t=i.channel).cancel)==null||n.call(t))}owns(e,t){return this.owners.get(dC(t))?.run===e}release(e,t){this.owns(e,t)&&this.owners.delete(dC(t))}},mC=[`swipe-left`,`swipe-right`,`swipe-forward`,`swipe-backward`,`tap`],hC=e=>mC.includes(e),gC=e=>5+mC.indexOf(e),_C=`microgesture`,vC=.25,yC=(e,t)=>e.poseId===`microgesture`&&Object.keys(e.fingerPoses).length===0&&e.poseTransitionProgress===null&&t===0,bC=.035,xC=.07,SC=.11,CC=.02,wC=.14,TC=e=>xC+(e===`tap`?CC:SC)+wC,EC=(e,t)=>{let n=t===Lx.Right;switch(e){case`swipe-left`:return n?[`touch`,`tip-mid`,`tip`]:[`touch`,`knuckle-mid`,`knuckle`];case`swipe-right`:return n?[`touch`,`knuckle-mid`,`knuckle`]:[`touch`,`tip-mid`,`tip`];case`swipe-forward`:return[`forward-start`,`forward-mid`,`forward`];case`swipe-backward`:return[`backward-start`,`backward-mid`,`backward`];case`tap`:return[`touch`]}},DC=class{constructor(e,t){this.hand=e,this.gesture=t,this.pressed=null,this.released=!1,this.pressUnseen=!1,this.holding=!1,this.rest=aS[_C],this.slide=EC(t,e.inputSource.handedness).map(e=>sS[e]),this.duration=TC(t),this.slideEnd=this.duration-wC,this.registerAt=this.slideEnd+.4*wC,this.button=gC(t)}get pressedAt(){return this.pressed}get releasePending(){return this.holding}showThumb(e){let{slide:t}=this,n=t.length-1;if(e<xC)this.hand.thumbMotion={from:this.rest,to:t[0],weight:rC(`minimum-jerk`,e/xC)};else if(e<this.slideEnd){let r=n>0?rC(`minimum-jerk`,(e-xC)/(this.slideEnd-xC))*n:0,i=Math.max(0,Math.min(n-1,Math.floor(r)));this.hand.thumbMotion=n>0?{from:t[i],to:t[i+1],weight:r-i}:{from:t[0],to:t[0],weight:0}}else this.hand.thumbMotion={from:t[n],to:this.rest,weight:rC(`minimum-jerk`,Math.min(1,(e-this.slideEnd)/wC))}}writeButton(e){this.hand.updateGestureButton(this.gesture,e)}apply(e){return this.pressUnseen=!1,this.showThumb(e),this.pressed===null&&e>=this.registerAt?(this.pressed=e,this.pressUnseen=!0,this.writeButton(1),`press`):(this.pressed!==null&&!this.released&&e>=this.pressed+bC&&(this.released=!0,this.writeButton(0)),null)}finish(){if(this.hand.thumbMotion=null,this.pressed===null||this.released){this.holding=!1;return}if(this.pressUnseen){this.pressUnseen=!1,this.holding=!0;return}this.holding=!1,this.released=!0,this.writeButton(0)}cancel(){this.hand.thumbMotion=null,this.holding=!1,this.pressed!==null&&!this.released&&(this.released=!0,this.writeButton(0))}channel(e,t=0){return{device:e,kind:`thumb`,delayMs:t,durationMs:this.duration*1e3,easing:`linear`,apply:e=>{this.apply(e*this.duration),e>=1&&this.finish()},cancel:()=>this.cancel()}}},OC={"index-tip":[.62,.72],grasp:[.58,.66],wrist:[.48,.55]},kC=[.58,.68],AC=.06,jC=1.1,MC=.28,NC=.06,PC=.5,FC=.7,IC=.22,LC={depth:.008,hold:.03,retract:.06},RC=.015,zC=.02,BC=.35,VC=.006,HC=1.2*Math.PI/180,UC=.003,WC=.006,GC=.1,KC=[`label`,`duration`,`position`,`target`,`offset`,`approach`,`depart`,`press`,`anchor`,`orientation`,`poseId`,`fingers`,`pinch`,`body`,`microgesture`],qC=[`device`,`steps`,`idleHand`,`body`,`gaze`,`dryRun`],JC=db(0,1,0),YC=e=>typeof e==`number`&&Number.isFinite(e),XC=(e,t)=>{if(Array.isArray(e)&&e.length===3&&e.every(YC))return db(e[0],e[1],e[2]);let n=e;if(n&&YC(n.x)&&YC(n.y)&&YC(n.z))return db(n.x,n.y,n.z);throw Error(`${t} must be {x, y, z} or [x, y, z] with finite numbers (got ${JSON.stringify(e)}).`)},ZC=e=>!!e&&typeof e==`object`&&!Array.isArray(e),QC=(e,t,n)=>{if(!ZC(e))throw Error(`${n} must be an object.`);let r=Object.keys(e).filter(e=>!t.includes(e));if(r.length>0)throw Error(`${n} has unknown key${r.length>1?`s`:``} ${r.map(e=>`'${e}'`).join(`, `)}. Allowed: ${t.join(`, `)}.`)},$C=class{constructor(e,t,n,r){this.samples=[],this.lengths=[];let i=vb(e,t),a=e=>e?Math.min(Math.max(e.distance*1.25,i*.25),i*.6+e.distance):0,o=n?_b(G(),e,n.direction,a(n)):Cb(G(),e,t,1/3),s=r?_b(G(),t,r.direction,a(r)):Cb(G(),e,t,2/3),c=i<1e-5&&!n&&!r?1:96,l=0;for(let n=0;n<=c;n++){let r=n/c,i=1-r,a=G();gb(a,e,i*i*i),_b(a,a,o,3*i*i*r),_b(a,a,s,3*i*r*r),_b(a,a,t,r*r*r),n>0&&(l+=vb(this.samples[n-1],a)),this.samples.push(a),this.lengths.push(l)}this.length=l}at(e,t){if(this.length===0)return fb(e,this.samples[0]);let n=Math.min(1,Math.max(0,t))*this.length,r=0,i=this.lengths.length-1;for(;i-r>1;){let e=r+i>>1;this.lengths[e]<=n?r=e:i=e}let a=this.lengths[i]-this.lengths[r],o=a>0?(n-this.lengths[r])/a:0;return Cb(e,this.samples[r],this.samples[i],o)}},ew=(e,t,n)=>Math.min(1.8,Math.max(.45+1.1*e,2.1*e,t>1?.3+t/220:0,n?.4:0)),tw=(e,t)=>Math.max(e>.01?.5+.9*e:0,Math.abs(t)>.01?.3+Math.abs(t)/Math.PI:0),nw=(e,t)=>2*Math.acos(Math.min(1,Math.abs(Kb(e,t))))*180/Math.PI,rw=(e,t,n)=>{let r=Eb(G(),t,e);if(ub(r)<1e-6)return n;bb(r,r);let i=Math.atan2(-r[0],-r[2]),a=Math.max(-60*Math.PI/180,Math.min(20*Math.PI/180,Math.asin(Math.max(-1,Math.min(1,r[1])))));return qb(n,Lb(n,Ib(K(),[0,1,0],i),Ib(K(),[1,0,0],a)))},iw=(e,t=K())=>Ib(t,JC,e),aw=(e,t)=>`Step ${e}${ZC(t)&&typeof t.label==`string`?` ('${t.label}')`:``}`,ow=(e,t,n)=>{if(e!==void 0){if(ZC(e)&&`value`in e){let r=e,i=Math.min(1,Math.max(0,r.start??0)),a=Math.min(1,Math.max(i,r.end??1));return{value:r.value,start:i*t,end:a*t,easing:r.easing??n}}return{value:e,start:0,end:t,easing:n}}},sw=e=>typeof e==`number`?e:e?.value??0,cw=e=>e.pinch!==void 0&&sw(e.pinch)>=.9,lw=e=>e.pinch!==void 0&&sw(e.pinch)<.7,uw=e=>e.position!==void 0||e.target!==void 0||e.offset!==void 0,dw=(e,t)=>{if(QC(t,qC,`run_sequence`),t.device!==`hand-left`&&t.device!==`hand-right`)throw Error(`run_sequence drives one hand: device must be 'hand-left' or 'hand-right' (got '${String(t.device)}').`);if(!Array.isArray(t.steps)||t.steps.length===0)throw Error(`run_sequence needs a non-empty steps array.`);for(let[e,n]of[[`idleHand`,[`keep`,`rest`]],[`body`,[`auto`,`fixed`]],[`gaze`,[`follow`,`fixed`]]]){let r=t[e];if(r!==void 0&&!n.includes(r))throw Error(`${e} must be one of ${n.join(`, `)}.`)}if(t.dryRun!==void 0&&typeof t.dryRun!=`boolean`)throw Error(`dryRun must be true or false.`);let n=[],r=!1;return t.steps.forEach((i,a)=>{let o=aw(a,i);QC(i,KC,o);let s=i;try{hw(e,t,s)}catch(e){throw Error(`${o}: ${e.message}`)}if(s.press){if(s.anchor!==void 0&&s.anchor!==`index-tip`)throw Error(`${o}: press is made with anchor 'index-tip'.`);s={...s,anchor:`index-tip`,poseId:s.poseId??{value:`point`,start:0,end:.5},fingers:s.fingers??(s.poseId===void 0?{thumb:{poseId:`fist`,weight:.6}}:void 0)}}else cw(s)&&s.anchor===void 0&&(s.target!==void 0||s.position!==void 0)&&(s={...s,anchor:`grasp`});let c=uw(s);if(s.anchor!==void 0&&(e.requireAnchor(s.anchor),r=!0),c&&!r)throw Error(`${o} places the hand but no anchor has been named yet. Add "anchor" (e.g. "index-tip" to touch, "grasp" to pinch, "wrist" for gestures).`);let l=s.label??`step ${a}`,u=t.steps[a+1],d=u!==void 0&&uw(u);if(s.microgesture!==void 0)n.push(Fw(a,l,s.microgesture));else if(s.press)n.push(...Lw(a,l,s,d));else{let e=t.steps.slice(a+1).find(uw),r=Pw(a,l,s,c,e);r.nextPlaces=d,n.push(r)}}),n},fw=(e,t)=>{if(Array.isArray(e)){XC(e,t);return}if(ZC(e)&&`relativeTo`in e){if(QC(e,[`relativeTo`,`x`,`y`,`z`],t),e.relativeTo!==`head`&&e.relativeTo!==`body`)throw Error(`${t}.relativeTo must be 'head' or 'body'.`)}else QC(e,[`x`,`y`,`z`,`normal`],t);XC(e,t)},pw=(e,t,n)=>{if(ZC(t)){if(QC(t,[`name`,`face`],n),typeof t.name!=`string`)throw Error(`${n}.name must be a string.`);if(t.face!==void 0&&![`front`,`back`,`top`,`bottom`,`left`,`right`].includes(t.face))throw Error(`${n}.face must be front, back, top, bottom, left or right.`)}else if(typeof t!=`string`)throw Error(`${n} must be a name or { name, face }.`);if(!e.resolver())throw Error(`targets need a target resolver; the page registers one with remote.setTargetResolver(). Use position instead.`)},mw=(e,t)=>{if(ZC(e)){QC(e,[`value`,`start`,`end`,`easing`],t);for(let n of[`start`,`end`]){let r=e[n];if(r!==void 0&&!(YC(r)&&r>=0&&r<=1))throw Error(`${t}.${n} must be a fraction of the step, 0–1.`)}if(e.easing!==void 0&&e.easing!==`linear`&&e.easing!==`minimum-jerk`)throw Error(`${t}.easing must be linear or minimum-jerk.`)}},hw=(e,t,n)=>{let r=e.hand(t.device);if(n.microgesture!==void 0){if(!hC(n.microgesture))throw Error(`microgesture must be one of ${mC.join(`, `)}.`);let e=Object.keys(n).filter(e=>e!==`label`&&e!==`microgesture`);if(e.length>0)throw Error(`a microgesture step takes only a label (got ${e.join(`, `)}); move or pose the hand in a step before it.`);if(!r.poseIds.includes(`microgesture`))throw Error(`the hand has no '${_C}' pose to make microgestures from.`)}if(n.duration!==void 0&&n.duration!==`auto`&&!(YC(n.duration)&&n.duration>=0))throw Error(`duration must be seconds ≥ 0 or 'auto'.`);if(n.label!==void 0&&typeof n.label!=`string`)throw Error(`label must be a string.`);if(n.position!==void 0&&n.target!==void 0)throw Error(`give either position or target, not both.`);if(n.position!==void 0){fw(n.position,`position`);let t=n.position.normal;t!==void 0&&e.directionToGlobal(t,`position.normal`)}if(n.target!==void 0&&pw(e,n.target,`target`),n.offset!==void 0)if(ZC(n.offset)&&`normal`in n.offset){if(QC(n.offset,[`normal`],`offset`),!YC(n.offset.normal))throw Error(`offset.normal must be a number of metres.`)}else QC(n.offset,[`x`,`y`,`z`],`offset`),XC(n.offset,`offset`);for(let t of[`approach`,`depart`]){let r=n[t];if(r!==void 0){if(QC(r,[`distance`,`normal`],t),!YC(r.distance)||r.distance<0)throw Error(`${t}.distance must be metres ≥ 0.`);r.normal!==void 0&&e.directionToGlobal(r.normal,`${t}.normal`)}}if(n.press!==void 0){QC(n.press,[`depth`,`hold`,`retract`],`press`);let{depth:e=LC.depth,hold:t=LC.hold,retract:r=LC.retract}=n.press;if(!YC(e)||e<0||e>RC)throw Error(`press.depth must be 0–${RC} m (a finger press travels 5–15 mm; deeper passes through thin panels).`);if(!YC(t)||t<0||t>.2)throw Error(`press.hold must be 0–0.2 s.`);if(!YC(r)||r<.05)throw Error(`press.retract must be at least 0.05 m (a touch lets go beyond 2 cm).`);if(n.target===void 0&&n.position===void 0)throw Error(`press needs a target or position to press.`);if(n.pinch!==void 0)throw Error(`press and pinch can not share a step.`)}if(n.poseId!==void 0){mw(n.poseId,`poseId`);let t=ZC(n.poseId)?n.poseId.value:n.poseId;if(t===`pinch`)throw Error(`poseId 'pinch' only shapes the hand and never selects; use "pinch": 1 to pinch.`);e.parsePose(r,t,n.fingers)}else if(n.fingers!==void 0)throw Error(`fingers needs a poseId in the same step.`);if(n.pinch!==void 0){let e=n.pinch;if(ZC(e)&&`at`in e){if(QC(e,[`value`,`at`],`pinch`),e.at!==`arrival`)throw Error(`pinch.at must be 'arrival'.`);if(!uw(n))throw Error(`pinch.at 'arrival' needs a placement to arrive at.`)}else mw(e,`pinch`);let t=ZC(e)?e.value:e;if(!YC(t)||t<0||t>1)throw Error(`pinch must be 0–1 (1 = fingertips together).`)}if(n.body!==void 0){if(QC(n.body,[`position`,`stepTo`,`facing`],`body`),n.body.position!==void 0&&n.body.stepTo!==void 0)throw Error(`body takes position or stepTo, not both.`);if(n.body.position!==void 0&&fw(n.body.position,`body.position`),n.body.stepTo!==void 0&&pw(e,n.body.stepTo,`body.stepTo`),n.body.facing!==void 0){let t=e.directionToGlobal(n.body.facing,`body.facing`);if(Math.hypot(t[0],t[2])<.001)throw Error(`body.facing must not point straight up or down.`)}}n.orientation!==void 0&&n.orientation!==`auto`&&e.resolveOrientation(r,n.orientation,G())},gw=(e,t)=>e.map(e=>({k:e,d:_w(e.toLowerCase(),t.toLowerCase())})).sort((e,t)=>e.d-t.d).map(e=>e.k),_w=(e,t)=>{let n=Array.from({length:e.length+1},(e,n)=>[n,...Array(t.length).fill(0)]);for(let e=1;e<=t.length;e++)n[0][e]=e;for(let r=1;r<=e.length;r++)for(let i=1;i<=t.length;i++)n[r][i]=Math.min(n[r-1][i]+1,n[r][i-1]+1,n[r-1][i-1]+(e[r-1]===t[i-1]?0:1));return n[e.length][t.length]},vw=(e,t,n,r)=>{let{host:i}=e,a=i.resolver(),o=typeof t==`string`?t:t.name;if(!a)throw Error(`target '${o}' needs a target resolver (remote.setTargetResolver()).`);let s=i.globalToOrigin(Sw(e)),c=a.resolve(t,{device:e.params.device,anchor:n,intent:r,from:{x:s[0],y:s[1],z:s[2]}});if(!c){let e=gw(a.list?.call(a).map(e=>e.name)??[],o);throw Error(`Unknown target '${o}'.${e.length?` Known targets: ${e.slice(0,8).join(`, `)}.`:``}`)}let l=i.originToGlobal(XC(c.position,`resolved position`)),u=c.normal?bb(G(),i.originDirectionToGlobal(XC(c.normal,`resolved normal`))):null,d;if(r===`grasp`&&c.box){let e=i.originToGlobal(XC(c.box.min,`box.min`));d=Math.max(0,l[1]-e[1])}return{point:l,normal:u,name:o,graspToBottom:d}},yw=(e,t)=>{let n=XC(t,`position`);if(ZC(t)&&t.relativeTo){let r=e.body,i=mb(G(),e.standingHead,e.walk);t.relativeTo===`body`&&(i[1]=0);let a=_b(G(),i,r.right,n[0]);return a[1]+=n[1],_b(a,a,r.forward,-n[2])}return e.host.originToGlobal(n)},bw=(e,t,n,r)=>{let{host:i}=e,a=null,o=null,s,c,l=r===`place`&&e.held!==null;if(t.target!==void 0)({point:a,normal:o,name:s,graspToBottom:c}=vw(e,t.target,n,r));else if(t.position!==void 0){a=yw(e,t.position);let n=t.position.normal;n!==void 0&&(o=i.directionToGlobal(n,`position.normal`,a,Cw(e)))}if(l&&a){let n=o??JC,r=t.offset&&`normal`in t.offset?t.offset.normal:5e-4;return a=_b(G(),a,n,r+e.held.graspToBottom),{point:a,normal:o,name:s}}if(t.offset!==void 0){let r=a??Uw(e,n);a=`normal`in t.offset?_b(G(),r,o??JC,t.offset.normal):mb(G(),r,i.originDirectionToGlobal(XC(t.offset,`offset`)))}return a?{point:a,normal:o,name:s,graspToBottom:c}:null},xw=(e,t,n)=>{let r=e.body,i=mb(G(),e.standingHead,t);return mb(i,i,n),_b(i,i,r.right,e.params.device===`hand-left`?-.18:.18),i[1]-=.25,_b(i,i,r.forward,-.05),i},Sw=e=>xw(e,e.walk,e.lean),Cw=e=>{let t=mb(G(),e.standingHead,e.walk);return{head:mb(t,t,e.lean),forward:lb(e.body.forward),right:lb(e.body.right)}},ww=e=>OC[e]??kC,Tw=(e,t,n,r,i)=>{let a=lb(e.walk),[o]=ww(n),s=xw(e,a,r);if(vb(s,t)>o+i){let e=db(t[0]-s[0],0,t[2]-s[2]),n=ub(e);if(n>1e-6){let r=t[1]-s[1],i=Math.sqrt(Math.max(0,o*o-r*r));_b(a,a,bb(e,e),Math.max(0,n-i))}}return a},Ew=(e,t,n)=>{let r=t.body;if(r?.position!==void 0){let t=yw(e,r.position);return db(t[0]-e.standingHead[0],0,t[2]-e.standingHead[2])}if(r?.stepTo!==void 0){let{point:t}=vw(e,r.stepTo,n,`touch`);return Tw(e,t,n,e.lean,0)}return null},Dw=(e,t,n,r)=>{if(!t||e.params.body===`fixed`)return{walk:lb(e.walk),lean:lb(e.lean)};let i=G(),a=xw(e,e.walk,i),o=(t[0]-a[0])*e.body.forward[0]+(t[2]-a[2])*e.body.forward[2];if(t[1]<jC&&o>.25){let n=Math.min(.1,(jC-t[1])*.4);i[1]=-n,_b(i,i,e.body.forward,n*.6)}return{walk:r?lb(e.walk):Tw(e,t,n,i,AC),lean:i}},Ow=(e,t,n,r=G())=>(Eb(r,t,e.pivot),Tb(r,r,iw(e.turn*n)),mb(r,r,e.pivot),_b(r,r,e.shift,n)),kw=e=>({...e,shift:yb(G(),e.shift),turn:-e.turn,pivot:mb(G(),e.pivot,e.shift)}),Aw=(e,t,n,r=K())=>Lb(r,iw(e.turn*n),t),jw=(e,t)=>{let{hand:n}=e,r=n.inputSource.hand,i=qy();Qy(i,r.get(Z.Wrist)[fx].offsetMatrix);let a=wb(G(),n.anchorOffset(t,G(),e.graspPinch),i),o=[Z.Wrist,Z.ThumbTip,Z.IndexFingerTip,Z.MiddleFingerTip,Z.RingFingerTip,Z.PinkyFingerTip,Z.IndexFingerPhalanxProximal,Z.PinkyFingerPhalanxProximal].map(e=>wb(G(),rb(G(),r.get(e)[fx].offsetMatrix),i));return o.push(db(0,0,-.17)),o.map(e=>Eb(e,e,a))},Mw=.012,Nw=(e,t,n,r,i,a)=>{var o;let s=((o=e.host.resolver())?.list)?.call(o)??[],c=[],l=G(),u=G(),d=K();for(let o of s){if(!o.size||o.name===n||o.name===e.held?.name)continue;let s=e.host.originToGlobal(XC(o.position,`list position`)),f=XC(o.size,`list size`);gb(f,f,.5);let p=s[1]+f[1],m=(e,t)=>Math.abs(e[0]-s[0])<f[0]+t&&Math.abs(e[1]-s[1])<f[1]+t&&Math.abs(e[2]-s[2])<f[2]+t,h=m(t.at(l,0),.06)||m(t.at(l,1),.06),g=0;for(let e=2;e<=18;e++){let n=e/20;t.at(l,n),Rb(d,i,a,n);for(let e of r){Tb(u,e,d),mb(u,u,l);let t=Mw;Math.abs(u[0]-s[0])<f[0]+t&&Math.abs(u[2]-s[2])<f[2]+t&&u[1]>s[1]-f[1]-t&&u[1]<p+(h?0:t)&&(g=Math.max(g,p+t-u[1]))}}g>0&&c.push({name:o.name,top:p,depth:g})}return c},Pw=(e,t,n,r,i)=>{let a={step:e,label:t,kind:r?`move`:`hold`,duration:YC(n.duration)?n.duration:r?.8:.3,stallAfter:!0,prepare:e=>Yw(e,a,n,r)};return!r&&i&&(a.lookAhead=e=>{try{return bw(e,i,i.press?`index-tip`:i.anchor??e.anchor,i.press?`press`:`touch`)?.point??null}catch{return null}}),a},Fw=(e,t,n)=>{let r={step:e,label:t,kind:`microgesture`,duration:vC+TC(n),stallAfter:!0,prepare:e=>{let{hand:t,host:i,planned:a}=e,o=`the hand is pinching (select is pressed); open the pinch (pinch: 0) in a step before the microgesture.`;if(a)a.pinch>=.9&&e.warnings.push(`${aw(r.step,e.params.steps[r.step])}: ${o}`);else if(t.inputSource.gamepad.buttons[0].pressed)throw Error(o);Yw(e,r,{duration:0},!1);let s=a?.pinch??i.latestPinch(e.params.device),c=(a?a.poseId===`microgesture`&&!a.blended&&s===0:yC(t,s))?0:vC;c>0&&(r.pose={value:i.parsePose(t,_C,void 0),start:0,end:c,easing:`minimum-jerk`},s>0&&(r.pinch={value:0,start:0,end:c,easing:`minimum-jerk`,from:s}));let l=new DC(t,n);r.micro={player:l,start:c},r.duration=c+l.duration}};return r},Iw=(e,t,n,r,i,a)=>{let o=G();for(let s=0;s<=200;s++){let c=a?1-s/200:s/200;if(e.at(o,rC(t,c)),Eb(o,o,r),xb(o,i)>zC)return s/200*n}return n},Lw=(e,t,n,r)=>{let i={...LC,...n.press},a={},o={step:e,label:t,kind:`press`,duration:.8,stallAfter:!1,prepare:t=>{t.anchor=`index-tip`;let s=bw(t,n,`index-tip`,`press`);if(!s)throw Error(`press needs a target or position.`);if(!s.normal)throw Error(`press needs the surface normal: use a target (the resolver gives it) or position with a normal.`);mb(s.point,s.point,Vw(e,.002,s.normal)),a.point=s.point,a.normal=s.normal;let c=t.hand.inputSource.hand.get(Z.IndexFingerTip)[ux].radius||.007,l=_b(G(),s.point,s.normal,c-i.depth);Yw(t,o,{...n,target:void 0,position:void 0,offset:void 0,press:void 0,orientation:n.orientation??Hw(t,l,s.normal)},!0,{point:l,normal:s.normal,approachDistance:i.retract+i.depth,name:typeof n.target==`string`?n.target:n.target?.name,intent:`press`}),o.press={point:s.point,normal:s.normal};let u=BC-i.hold-(r?Bw:zw),d=o.pathEnd-o.pathStart,f=(e,t)=>Iw(o.path,e,t,s.point,s.normal,!0);if(f(`reach`,d)>u){o.pathEasing=`minimum-jerk`;let e=f(`minimum-jerk`,d);if(e>u){let t=d*Math.max(.5,u/e);o.pathEnd=o.pathStart+t,o.pose&&(o.pose.end=Math.min(o.pose.end,o.pathStart+t*.6),o.pose.start=Math.min(o.pose.start,o.pose.end)),o.duration=Math.max(o.pathEnd,o.walk?o.walk.start+o.walk.seconds:0)}}a.contact=f(o.pathEasing,o.pathEnd-o.pathStart)}},s={step:e,label:t,kind:`press-hold`,duration:i.hold,stallAfter:!r,prepare:e=>{s.press={point:a.point,normal:a.normal};let t=r?Bw:zw;s.duration=Math.max(0,Math.min(i.hold,BC-a.contact-t)),Ww(e,s),r&&(e.autoDepart={normal:lb(a.normal),distance:i.retract+i.depth+.04,fromPress:!0},e.lastNormal=lb(a.normal))}};if(r)return[o,s];let c={step:e,label:t,kind:`retract`,duration:Rw,stallAfter:!0,prepare:e=>{let t=_b(G(),a.point,a.normal,i.retract);Gw(e,c,t,Rw),c.press={point:a.point,normal:a.normal},e.autoDepart={normal:lb(a.normal),distance:.04},e.lastNormal=lb(a.normal)}};return[o,s,c]},Rw=.25,zw=.1,Bw=.12,Vw=(e,t,n)=>{let r=Math.sin(e*12.9898+78.233)*43758.5453,i=Math.sin(e*39.3468+11.135)*24634.6345,a=r-Math.floor(r),o=i-Math.floor(i),s=Math.abs(n[1])<.9?db(0,1,0):db(1,0,0),c=bb(G(),Sb(G(),n,s)),l=Sb(G(),n,c),u=a*2*Math.PI,d=t*Math.sqrt(o),f=gb(G(),c,Math.cos(u)*d);return _b(f,f,l,Math.sin(u)*d)},Hw=(e,t,n)=>{let r=Sw(e);r[1]-=.25,_b(r,r,e.body.forward,.12);let i=bb(G(),Eb(G(),t,r)),a=bb(G(),_b(G(),i,n,-.45)),o=yb(G(),n),s=t=>{let n=e.host.globalDirectionToOrigin(t);return[n[0],n[1],n[2]]};return{fingers:s(a),palm:s(o)}},Uw=(e,t)=>{let n=e.hand.pin;return n&&n.anchor===t&&(t!==`grasp`||(n.graspPinch??1)===e.graspPinch)?lb(n.target):e.host.anchorPosition(e.hand,t,e.graspPinch)},Ww=(e,t)=>{let n=Uw(e,e.anchor);t.path=new $C(n,n),t.pathStart=0,t.pathEnd=t.duration,t.target=n,t.wristFrom=e.hand.wristRotation(),t.wristTo=e.hand.pin?.wristRotation?Hb(e.hand.pin.wristRotation):t.wristFrom},Gw=(e,t,n,r)=>{t.path=new $C(Uw(e,e.anchor),n),t.pathEasing=`minimum-jerk`,t.duration=r,t.pathStart=0,t.pathEnd=r,t.target=n,t.wristFrom=e.hand.wristRotation(),t.wristTo=e.hand.pin?.wristRotation?Hb(e.hand.pin.wristRotation):t.wristFrom},Kw={middle:.35,ring:.45,pinky:.55},qw=()=>{let e={};for(let[t,n]of Object.entries(Kw))e[t]={poseId:`fist`,weight:n};return e},Jw=(e,t,n)=>{if(e.restsOtherHand)return;let r=e.host.otherHand(e.params.device);r&&[`wrist`,`grasp`,`index-tip`,`thumb-tip`].some(t=>vb(e.host.anchorPosition(r,t),n)<GC)&&e.warnings.push(`${aw(t.step,e.params.steps[t.step])}: the other hand is within 10 cm of where this hand goes and may touch it first; rest it (idleHand: 'rest') or move it away.`)},Yw=(e,t,n,r,i)=>{let{host:a,hand:o}=e;n.anchor!==void 0&&(e.anchor=a.requireAnchor(n.anchor));let s=e.anchor,c=cw(n);c&&(e.graspPinch=sw(n.pinch));let l=a.latestPinch(e.params.device),u=l>=.5,d=lw(n)&&u,f=Uw(e,s),p=f,m=null,h=i?.name,g,_,v=!1,y=mb(G(),e.standingHead,e.walk),b=lb(e.walk),x=lb(e.lean),S=0;if(n.body?.facing!==void 0){let t=a.directionToGlobal(n.body.facing,`body.facing`,void 0,Cw(e));S=Math.atan2(-t[0],-t[2])-Math.atan2(-e.body.forward[0],-e.body.forward[2]),S=Math.atan2(Math.sin(S),Math.cos(S));let r=iw(S);Tb(e.body.forward,e.body.forward,r),Tb(e.body.right,e.body.right,r)}let C=Ew(e,n,s);C&&(e.walk=C);let w=null;if(r){let t=i?.intent??(c?`grasp`:e.held&&u?`place`:`touch`);w=i??bw(e,n,s,t)}let T=Dw(e,w?.point??null,s,!!C);e.walk=T.walk,e.lean=T.lean;let E=Eb(G(),e.walk,b),D=Eb(G(),e.lean,x),O=tw(ub(E),S);O>0&&(t.walk={shift:E,turn:S,pivot:y,start:0,seconds:O,carriesHand:!r});let k=t.walk?.carriesHand?O:0;ub(D)>1e-4&&(t.lean=D);let A=t.walk?.carriesHand?Ow(t.walk,f,1):f;if(p=A,w){p=w.point,m=w.normal,h=w.name??h,c&&!i&&mb(p,p,Vw(t.step,.0015,m??JC)),c&&h&&(e.held={name:h,graspToBottom:w.graspToBottom??0});let r=n.depart===void 0?e.autoDepart?{distance:e.autoDepart.distance,direction:e.autoDepart.normal}:void 0:{distance:n.depart.distance,direction:n.depart.normal===void 0?u||!e.lastNormal?lb(JC):e.lastNormal:a.directionToGlobal(n.depart.normal,`depart.normal`,f,Cw(e))};v=n.depart===void 0&&(e.autoDepart?.fromPress===!0||e.autoDepart?.fromRelease===!0),e.autoDepart=null,r&&r.distance>0&&(g=r);let o=n.approach?.distance??i?.approachDistance??0;o>0&&(_={distance:o,direction:n.approach?.normal===void 0?u?lb(JC):m??bb(G(),Eb(G(),Sw(e),p)):a.directionToGlobal(n.approach.normal,`approach.normal`,p,Cw(e))}),e.lastNormal=m;let[,l]=ww(s),d=vb(Sw(e),p);if(d>l+.001){let n=`${aw(t.step,e.params.steps[t.step])}: the ${s} target is ${d.toFixed(2)} m from the shoulder (max ${l} m).`;if(e.params.body===`fixed`)throw Error(`${n} Use body: 'auto', or move the body with body.stepTo.`);e.warnings.push(n)}Jw(e,t,p)}else d&&(t.nextPlaces||(p=_b(G(),A,JC,.035)),e.autoDepart={normal:lb(JC),distance:.03,fromRelease:!0});let ee=new $C(A,p,g,_),te=o.wristRotation(),ne=o.pin?.wristRotation?Hb(o.pin.wristRotation):null,re=t.walk?.carriesHand?Aw(t.walk,te,1):te,j,ie=n.orientation??(r&&!u?`auto`:void 0);if(ie!==void 0){let t=a.resolveOrientation(o,ie,p,Cw(e));if(t.wristRotation)j=t.wristRotation;else if(t.rayRotation){let e=t.rayRotation,n=Lb(K(),zb(K(),o.quaternion.quat),te);j=Lb(K(),Ub(e.x,e.y,e.z,e.w),n)}}else if(r&&u){let t=Sw(e),n=e=>Math.atan2(-(e[0]-t[0]),-(e[2]-t[2])),r=(n(p)-n(A))*.6;j=Lb(K(),iw(r),ne??re)}if(t.wristFrom=re,t.wristTo=j??(ne?t.walk?.carriesHand?Aw(t.walk,ne,1):ne:re),r){let n=s===`index-tip`?.02:s===`grasp`?.04:s===`wrist`?.11:.06,r=jw(e,s),i=()=>Nw(e,ee,h,r,t.wristFrom,t.wristTo),a=i(),o=0;for(let e=0;e<4&&a.length>0;e++){let e=Math.max(...a.map(e=>e.top));o+=Math.max(...a.map(e=>e.depth))+.02;let t=e+n+o,r=(e,n)=>{let r=Math.max(0,t-e[1]);return r<=0?n:n?{direction:bb(G(),_b(G(),n.direction,JC,1)),distance:Math.max(n.distance,r)}:{direction:JC,distance:r}};ee=new $C(A,p,r(A,g),r(p,_)),a=i()}a.length>0&&e.warnings.push(`${aw(t.step,e.params.steps[t.step])}: the hand passes through ${a.map(e=>e.name).join(`, `)}; add depart/approach distance or a step around it.`)}t.path=ee,t.target=lb(p),r?e.restNormal=_?lb(_.direction):null:e.restNormal&&(t.restNormal=e.restNormal);let ae=!1;if(n.poseId!==void 0){let e=ZC(n.poseId)?n.poseId:{value:n.poseId},r=n.fingers??(c?qw():void 0),i=a.parsePose(o,e.value,r);ae=i.poseId!==o.poseId||JSON.stringify(i.fingers)!==JSON.stringify(o.fingerPoses),ae&&(t.pose={...ow(e,1,`minimum-jerk`),value:i})}else if(c){let e=a.parsePose(o,o.poseId,qw());JSON.stringify(e.fingers)!==JSON.stringify(o.fingerPoses)&&(ae=!0,t.pose={value:e,start:.1,end:.7,easing:`minimum-jerk`})}let oe={position:lb(e.head.position),rotation:Hb(e.head.rotation)},se=t.walk?Ow(t.walk,oe.position,1):lb(oe.position);mb(se,se,D);let ce=t.walk?Aw(t.walk,oe.rotation,1):oe.rotation;t.headFrom=oe,t.headTo={position:se,rotation:ce},t.headStart=k;let le=0,ue=e=>{let t=Eb(G(),e,se);return Math.asin(Math.max(-1,Math.min(1,t[1]/Math.max(1e-6,ub(t)))))},M=r?p:A,de=ue(M)>-65*Math.PI/180;if(e.params.gaze!==`fixed`&&r&&!de){let n=_b(G(),se,e.body.forward,1);n[1]-=Math.tan(30*Math.PI/180),t.headTo.rotation=rw(se,n,K()),t.headEnd=.5}else if(e.params.gaze!==`fixed`&&(r||d&&!t.nextPlaces)&&de){let e=rw(se,M,K()),n=Rb(K(),ce,e,FC),i=nw(ce,n);le=r&&i>8&&!v&&!u?IC:0,t.headTo.rotation=n,t.headEnd=Math.min(.55,Math.max(.3,.25+i/100))}let fe=nw(t.wristFrom,t.wristTo),N=n.duration===void 0||n.duration===`auto`?r||ae||fe>1||d?ew(ee.length,fe,ae):.3:n.duration,pe=k+le;t.pathEasing=r?`reach`:`minimum-jerk`,t.pathStart=pe,t.pathEnd=pe+N,d&&!t.nextPlaces&&(t.pathStart=pe+N*.6,t.pathEnd=pe+N+.15),t.headEnd===void 0&&(t.headEnd=le+N);let P=pe+N;if(t.walk&&!t.walk.carriesHand&&(t.walk.start=pe,t.walk.seconds=Math.max(O,N),P=pe+t.walk.seconds),n.pinch!==void 0){let r=n.pinch,i=l;if(ZC(r)&&`at`in r){let e=Math.min(MC,Math.max(.15,N*.45)),n=pe+N,a=Math.max(pe,n-e*.7);t.pinch={value:r.value,start:a,end:a+e,easing:`minimum-jerk`,from:i,preshape:i<PC?{value:PC,start:pe+N*.25,end:Math.max(pe+N*.25,a)}:void 0},P=t.pinch.end+NC}else{let e=ow(r,N,`minimum-jerk`);N===0&&(e.end=.15,P=Math.max(P,pe+.15)),t.pinch={...e,start:e.start+pe,end:e.end+pe,from:i}}d&&(e.held=null)}if(t.pose&&(t.pose.start=pe+t.pose.start*N,t.pose.end=pe+t.pose.end*N,t.kind===`press`&&(t.pose.end=Math.min(t.pose.end,pe+N*.6),t.pose.start=Math.min(t.pose.start,t.pose.end)),t.pose.end-t.pose.start<.2&&t.kind!==`press`&&n.duration!==0&&(t.pose.end=Math.max(t.pose.end,t.pose.start+.2),P=Math.max(P,t.pose.end))),t.duration=Math.max(P,t.pathEnd),!r&&!d&&!t.walk&&t.lookAhead&&e.params.gaze!==`fixed`){let n=t.lookAhead(e);if(n&&ue(n)>-65*Math.PI/180){let e=rw(oe.position,n,K());t.headTo.rotation=Rb(K(),oe.rotation,e,FC),t.headEnd=Math.min(Math.max(.3,P*.7),.5)}}},Xw=(e,t,n,r)=>{let i=r?e.hand(t.device):e.liveHand(t.device),a=e.headPose(),o=oC(a.position,a.rotation),s=lb(a.position),c=G(),l=e.bodyState();l&&vb(l.standing,a.position)<.15&&(fb(o.forward,l.forward),Sb(o.right,o.forward,JC),bb(o.right,o.right),s=lb(l.standing),c=Eb(G(),a.position,s));let u=e.otherHand(t.device),d=u!==void 0&&(t.idleHand===`rest`||t.idleHand===void 0&&u.pinchValue<.5);return{host:e,params:t,planned:r?{poseId:i.poseId,blended:Object.keys(i.fingerPoses).length>0||i.poseTransitionProgress!==null,pinch:e.latestPinch(t.device)}:null,hand:i,anchor:i.pin?.anchor??`target-ray`,body:o,warnings:n,head:{position:lb(a.position),rotation:Hb(a.rotation)},restsOtherHand:d,lastNormal:null,autoDepart:null,held:null,graspPinch:1,restNormal:null,walk:G(),lean:c,standingHead:s,contacts:[]}},Zw=(e,t)=>{e.headTo&&(fb(t.position,e.headTo.position),Wb(t.rotation,e.headTo.rotation))},Qw=G(),$w=K(),eT=G(),tT=(e,t,n,r)=>{for(let i=0;i<3;i++){let a=t*3+i;r[i]=n*(Math.sin(2*Math.PI*.23*e+a*1.7)+.6*Math.sin(2*Math.PI*.37*e+a*2.3)+.3*Math.sin(2*Math.PI*.61*e+a*.9))/1.9}return r},nT=class{constructor(e,t,n,r){this.host=e,this.params=t,this.segments=n,this.deadlinePerf=r,this.index=-1,this.run=null,this.clock=0,this.segmentStart=0,this.carryS=0,this.stall=!1,this.ending=!1,this.finished=null,this.events=[],this.steps=[],this.openPress=null,this.idle=null,this.micro=null,this.ctx=Xw(e,t,[],!1);let i=e.pinchButton(t.device)[Y];this.seenPressed=i.lastFramePressed,this.seenCancels=i.cancelGeneration,this.seenGestures=mC.map(n=>e.gestureButton(t.device,n)[Y].lastFramePressed)}get done(){return this.finished!==null}start(){let e=this.host.otherHand(this.params.device);if(this.ctx.restsOtherHand&&e){let t=this.ctx.body,n=this.params.device===`hand-right`?-1:1,r=lb(this.ctx.standingHead);_b(r,r,t.right,.24*n),r[1]-=.8,_b(r,r,t.forward,.03);let i=db(0,-1,0);_b(i,i,t.forward,.2);let a=gb(G(),t.right,-n),o=e=>{let t=this.host.globalDirectionToOrigin(e);return[t[0],t[1],t[2]]},s=this.host.resolveOrientation(e,{fingers:o(i),palm:o(a)},r,Cw(this.ctx)),c=this.host.parsePose(e,`default`,{thumb:{poseId:`flat`,weight:.6},index:{poseId:`fist`,weight:.42},middle:{poseId:`fist`,weight:.45},ring:{poseId:`fist`,weight:.48},pinky:{poseId:`fist`,weight:.5}});e.beginPoseTransition(c.poseId,c.fingers),this.idle={hand:e,device:this.params.device===`hand-right`?`hand-left`:`hand-right`,from:this.host.anchorPosition(e,`wrist`),fromWrist:e.wristRotation(),to:r,toWrist:s.wristRotation??e.wristRotation(),seconds:.8}}this.advanceSegment(),this.idle&&!this.finished&&(this.idle.seconds=Math.min(1.5,Math.max(.6,this.segments[0].duration)))}tick(e){if(this.finished)return e;this.observeEdges(),this.micro?.releasePending&&this.micro.finish();let t=e/1e3+this.carryS;if(this.carryS=0,this.ending)return this.finish(!0),t*1e3;if(performance.now()>this.deadlinePerf)return this.finish(!1,`deadline`),0;if(this.stall&&(this.stall=!1,this.advanceSegment(),this.finished))return 0;for(;;){let e=this.segments[this.index],n=this.run,r;try{r=n.advance(t*1e3)}catch(t){return n.stop(),this.finish(!1,t.message,e.step),0}if(n.interrupted)return this.finish(!1,`released`,e.step),0;let i=r<0?t:t-r/1e3;if(this.clock+=i,t-=i,this.measureContact(e),r<0)return-1;if(this.closeStep(e),this.index===this.segments.length-1)return this.ending=!0,this.carryS=t,-1;if(e.stallAfter)return this.stall=!0,this.carryS=t,-1;if(this.advanceSegment(),this.finished)return 0}}observeEdges(){let e=this.host.pinchButton(this.params.device)[Y],t=e.lastFramePressed;if(t!==this.seenPressed){let n=t?`press`:e.cancelGeneration===this.seenCancels?`release`:`cancel`;for(let e of Dx(n,`select`))this.events.push({t:+this.clock.toFixed(3),type:e})}this.seenPressed=t,this.seenCancels=e.cancelGeneration,mC.forEach((e,t)=>{let n=this.host.gestureButton(this.params.device,e)[Y].lastFramePressed;n&&!this.seenGestures[t]&&this.events.push({t:+this.clock.toFixed(3),type:e}),this.seenGestures[t]=n})}advanceSegment(){this.index++;let e=this.segments[this.index];try{e.prepare(this.ctx)}catch(t){this.finish(!1,t.message,e.step);return}if(this.idle&&e.walk){let t=e.walk,{idle:n}=this;for(let e of[n.from,n.to])Ow(t,lb(e),1,e);for(let e of[n.fromWrist,n.toWrist])Aw(t,Hb(e),1,e)}this.segmentStart=this.clock,e.micro&&(this.micro=e.micro.player),this.run=this.host.channels.run(this.channelsFor(e));let t=this.steps[this.steps.length-1];if(!t||t.index!==e.step){let t=performance.now();this.steps.push({index:e.step,label:e.label,start:this.clock,end:this.clock,startPerf:t,endPerf:t})}}closeStep(e){let t=this.steps[this.steps.length-1];t&&t.index===e.step&&(t.end=this.clock,t.endPerf=performance.now())}channelsFor(e){let t=e.duration*1e3,n=t=>t*e.duration,r=this.params.device,{hand:i}=this.ctx,a=[{device:`headset`,kind:`transform`,durationMs:t,easing:`linear`,apply:t=>this.applyHead(e,n(t))}];if(e.pose){let{start:t,end:n,easing:o,value:s}=e.pose;a.push({device:r,kind:`pose`,delayMs:t*1e3,durationMs:(n-t)*1e3,easing:o,begin:()=>{i.beginPoseTransition(s.poseId,s.fingers)},apply:e=>{i.poseTransitionProgress!==null&&(i.poseTransitionProgress=e)}})}if(e.pinch){let{start:t,end:n,preshape:i}=e.pinch,o=Math.min(t,i?.start??t);a.push({device:r,kind:`pinch`,delayMs:o*1e3,durationMs:(n-o)*1e3,easing:`linear`,apply:t=>this.applyPinch(e,o+t*(n-o))})}if(a.push({device:r,kind:`transform`,durationMs:t,easing:`linear`,apply:t=>this.applyPlacement(e,n(t))}),e.micro){let{player:t,start:n}=e.micro;a.push(t.channel(r,n*1e3))}return this.idle&&a.push({device:this.idle.device,kind:`transform`,durationMs:t,easing:`linear`,apply:t=>this.applyIdleHand(e,n(t))}),a}walkProgress(e,t){let n=e.walk;return n?rC(`minimum-jerk`,(t-n.start)/n.seconds):1}pathProgress(e,t,n){let r=e.pathStart??0,i=e.pathEnd??e.duration;return i<=r?+(t>=r):t<=r?0:rC(n,Math.min(1,(t-r)/(i-r)))}applyHead(e,t){let n=this.ctx.head;if(e.headFrom&&e.headTo){let r=this.walkProgress(e,t),i=this.pathProgress(e,t,`minimum-jerk`),a=e.headEnd??0,o=rC(`minimum-jerk`,a>0?(t-(e.headStart??0))/a:1),{position:s,rotation:c}=e.headFrom;e.walk?(Ow(e.walk,s,r,n.position),Aw(e.walk,c,r,n.rotation)):(fb(n.position,s),Wb(n.rotation,c)),e.lean&&_b(n.position,n.position,e.lean,i),Rb(n.rotation,n.rotation,e.headTo.rotation,o)}tT(this.segmentStart+t,2,HC,eT);let r=Hb(n.rotation),i=Ib(K(),JC,eT[0]),a=Ib(K(),[1,0,0],eT[1]);Lb(r,i,r),Lb(r,r,a),tT(this.segmentStart+t,4,UC,eT);let o=mb(G(),n.position,eT);this.host.setHeadPose(o,r)}applyPinch(e,t){let{start:n,end:r,easing:i,value:a,from:o,preshape:s}=e.pinch,c=(e,n)=>n<=e?+(t>=e):t<=e?0:rC(i,Math.min(1,(t-e)/(n-e))),l;if(s&&t<n)l=o+(s.value-o)*c(s.start,s.end);else{let e=s?s.value:o;l=e+(a-e)*c(n,r)}this.host.setPinch(this.params.device,Math.min(1,Math.max(0,l)))}applyPlacement(e,t){let{hand:n}=this.ctx;if(!e.path)return;let r=this.pathProgress(e,t,e.pathEasing??`minimum-jerk`);e.path.at(Qw,r);let i=e.wristFrom&&e.wristTo?Rb($w,e.wristFrom,e.wristTo,r):void 0,a=e.walk;if(a?.carriesHand&&t<a.start+a.seconds){let n=this.walkProgress(e,t),r=kw(a);Ow(r,Qw,1-n,Qw),i&&=Aw(r,i,1-n,$w)}(e.kind===`hold`||e.kind===`microgesture`)&&!e.pinch&&n.pinchValue<.5&&(tT(this.segmentStart+t,1,VC,eT),e.restNormal&&_b(eT,eT,e.restNormal,-xb(eT,e.restNormal)),_b(Qw,Qw,eT,Math.min(1,t/.5))),n.setPin({anchor:this.ctx.anchor,target:Qw,wristRotation:i,graspPinch:this.ctx.graspPinch})}applyIdleHand(e,t){let n=this.idle,r=rC(`minimum-jerk`,(this.segmentStart+t)/n.seconds),i=Cb(G(),n.from,n.to,r),a=Rb(K(),n.fromWrist,n.toWrist,r),o=e.walk;if(o&&t<o.start+o.seconds){let n=kw(o),r=this.walkProgress(e,t);Ow(n,i,1-r,i),Aw(n,a,1-r,a)}n.hand.poseTransitionProgress!==null&&(n.hand.poseTransitionProgress=r),tT(this.segmentStart+t,3,WC,eT),_b(i,i,eT,r),n.hand.setPin({anchor:`wrist`,target:i,wristRotation:a})}measureContact(e){let t=e.press??this.openPress;if(!t)return;let n=this.host.anchorPosition(this.ctx.hand,`index-tip`),r=Eb(G(),n,t.point),i=xb(r,t.normal);_b(r,r,t.normal,-i);let a=ub(r)<=.04,o=this.ctx.contacts,s=o[o.length-1];if(i<=zC&&a)(!s||s.endPerf!==void 0)&&(s={label:e.label,startPerf:performance.now()},o.push(s),this.openPress=t);else if(s&&s.endPerf===void 0&&s.startPerf!==void 0){s.endPerf=performance.now(),this.openPress=null;let t=s.endPerf-s.startPerf;t>800&&this.ctx.warnings.push(`${e.label}: the press touched for ${t.toFixed(0)} ms of real time; frames are slow enough that an 800 ms click window may be missed.`)}}finish(e,t,n){var r,i;if(this.finished)return;if(e)this.idle&&this.clock<this.idle.seconds&&(this.idle.hand.poseTransitionProgress=null,this.idle.hand.setPin({anchor:`wrist`,target:this.idle.to,wristRotation:this.idle.toWrist}));else{(r=this.run)==null||r.stop(),(i=this.micro)==null||i.cancel();for(let e of[this.ctx.hand,this.idle?.hand])e&&e.poseTransitionProgress!==null&&(e.poseTransitionProgress=null)}if(e&&(this.host.setBodyState({forward:lb(this.ctx.body.forward),standing:mb(G(),this.ctx.standingHead,this.ctx.walk)}),this.ctx.hand.pinchValue<.5)){let e=vb(this.host.anchorPosition(this.ctx.hand,`thumb-tip`),this.host.anchorPosition(this.ctx.hand,`index-tip`));e<.02&&this.ctx.warnings.push(`The hand ends with its thumb and index tips ${(e*100).toFixed(1)} cm apart and the pinch open; apps that detect pinches from joints will see a pinch. Leave the thumb further from the index tip.`)}let a=this.steps[this.steps.length-1];a&&!e&&(a.end=this.clock,a.endPerf=performance.now()),this.finished={completed:e,cancelled:!1,...t?{reason:t}:{},...n===void 0?{}:{failedStep:n},steps:this.steps.map(e=>({label:e.label,start:+e.start.toFixed(3),end:+e.end.toFixed(3),startPerf:+e.startPerf.toFixed(1),endPerf:+e.endPerf.toFixed(1)})),events:this.events,presses:this.ctx.contacts.map(e=>({label:e.label,contactMs:e.startPerf!==void 0&&e.endPerf!==void 0?+(e.endPerf-e.startPerf).toFixed(1):null})),warnings:this.ctx.warnings,pinchValue:this.host.latestPinch(this.params.device)}}abort(e){var t;return(t=this.run)==null||t.stop(),this.finished||(this.finish(!1,e),this.finished.cancelled=!0),this.result()}result(){let e=this.finished;try{e.final=this.host.handState(this.params.device)}catch{}return e}static describe(e,t,n,r){let i=Xw(e,t,r,!0),a=i.hand,o=a.pin,s=lb(a.position.vec3),c=Hb(a.quaternion.quat),l=e.headPose(),u=[],d=0,f=t=>{let n=e.globalToOrigin(t);return{x:+n[0].toFixed(4),y:+n[1].toFixed(4),z:+n[2].toFixed(4)}};try{for(let e of n){try{e.prepare(i)}catch(n){let r=n.message;throw Error(r.startsWith(`Step `)?r:`${aw(e.step,t.steps[e.step])}: ${r}`)}d+=e.duration;let n=i.planned;e.pose&&(n.poseId=e.pose.value.poseId,n.blended=Object.keys(e.pose.value.fingers).length>0),e.pinch&&(n.pinch=e.pinch.value),e.target&&a.setPin({anchor:i.anchor,target:e.target,wristRotation:e.wristTo,graspPinch:i.graspPinch}),Zw(e,i.head),u.push({step:e.step,label:e.label,kind:e.kind,duration:+e.duration.toFixed(3),...e.target?{target:f(e.target)}:{},...e.walk&&ub(e.walk.shift)>.01?{walk:+ub(e.walk.shift).toFixed(3)}:{}})}}finally{a.position.set(s[0],s[1],s[2]),a.quaternion.set(c[0],c[1],c[2],c[3]),a.setPin(o),a.updateTargetRaySpace(),e.setHeadPose(l.position,l.rotation)}return{device:t.device,segments:u,duration:+d.toFixed(3),warnings:r}}};function rT(e){return{x:e.x,y:e.y,z:e.z}}function iT(e){return{x:e.x,y:e.y,z:e.z,w:e.w}}function aT(e){let{x:t,y:n,z:r,w:i}=e,a=180/Math.PI,o=Math.max(-1,Math.min(1,2*(i*t-n*r))),s;s=Math.abs(o)>=1?Math.sign(o)*Math.PI/2:Math.asin(o);let c=2*(i*n+t*r),l=1-2*(t*t+n*n),u=Math.atan2(c,l),d=2*(i*r+t*n),f=1-2*(t*t+r*r),p=Math.atan2(d,f);return{pitch:s*a,yaw:u*a,roll:p*a}}function oT(e){let t=Math.PI/180,n=(e.pitch??0)*t,r=(e.yaw??0)*t,i=(e.roll??0)*t,a=Math.cos(n*.5),o=Math.sin(n*.5),s=Math.cos(r*.5),c=Math.sin(r*.5),l=Math.cos(i*.5),u=Math.sin(i*.5);return{w:a*s*l+o*c*u,x:o*s*l+a*c*u,y:a*c*l-o*s*u,z:a*s*u-o*c*l}}function sT(e,t){let n=t.x-e.x,r=t.y-e.y,i=t.z-e.z,a=Math.sqrt(n*n+r*r+i*i);return a===0?{x:0,y:0,z:-1}:{x:n/a,y:r/a,z:i/a}}function cT(e){let t=Math.sqrt(e.x*e.x+e.z*e.z),n=0;t>1e-4&&(n=Math.atan2(-e.x,-e.z));let r=Math.atan2(e.y,t),i=Math.cos(r*.5),a=Math.sin(r*.5),o=Math.cos(n*.5),s=Math.sin(n*.5);return{w:i*o,x:a*o,y:i*s,z:-a*s}}function lT(e,t={x:0,y:1,z:0}){let n=Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z);if(n===0)return{x:0,y:0,z:0,w:1};let r={x:e.x/n,y:e.y/n,z:e.z/n},i={x:r.y*t.z-r.z*t.y,y:r.z*t.x-r.x*t.z,z:r.x*t.y-r.y*t.x},a=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z);if(a===0){let e={x:1,y:0,z:0};i.x=r.y*e.z-r.z*e.y,i.y=r.z*e.x-r.x*e.z,i.z=r.x*e.y-r.y*e.x;let t=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z);i.x/=t,i.y/=t,i.z/=t}else i.x/=a,i.y/=a,i.z/=a;let o={x:i.y*r.z-i.z*r.y,y:i.z*r.x-i.x*r.z,z:i.x*r.y-i.y*r.x},s=i.x,c=o.x,l=-r.x,u=i.y,d=o.y,f=-r.y,p=i.z,m=o.z,h=-r.z,g=s+d+h,_,v,y,b;if(g>0){let e=.5/Math.sqrt(g+1);_=.25/e,v=(m-f)*e,y=(l-p)*e,b=(u-c)*e}else if(s>d&&s>h){let e=2*Math.sqrt(1+s-d-h);_=(m-f)/e,v=.25*e,y=(c+u)/e,b=(l+p)/e}else if(d>h){let e=2*Math.sqrt(1+d-s-h);_=(l-p)/e,v=(c+u)/e,y=.25*e,b=(f+m)/e}else{let e=2*Math.sqrt(1+h-s-d);_=(u-c)/e,v=(l+p)/e,y=(f+m)/e,b=.25*e}let x=Math.sqrt(v*v+y*y+b*b+_*_);return x>0&&(v/=x,y/=x,b/=x,_/=x),{x:v,y,z:b,w:_}}function uT(e,t=5e3){return new Promise((n,r)=>{let i=Date.now(),a=()=>{e()?n():Date.now()-i>t?r(Error(`Timeout waiting for condition`)):requestAnimationFrame(a)};a()})}function dT(e){return`pitch`in e||`yaw`in e||`roll`in e}function fT(e){return dT(e)?oT(e):e}var pT=e=>({x:e[0],y:e[1],z:e[2],w:e[3]}),mT=e=>({x:e[0],y:e[1],z:e[2]});function hT(e,t,n){return e+(t-e)*n}function gT(e,t,n){return{x:hT(e.x,t.x,n),y:hT(e.y,t.y,n),z:hT(e.z,t.z,n)}}function _T(e,t,n){let r=e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w,i=t.x,a=t.y,o=t.z,s=t.w;if(r<0&&(r=-r,i=-i,a=-a,o=-o,s=-s),r>.9995){let t={x:hT(e.x,i,n),y:hT(e.y,a,n),z:hT(e.z,o,n),w:hT(e.w,s,n)},r=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z+t.w*t.w);return{x:t.x/r,y:t.y/r,z:t.z/r,w:t.w/r}}let c=Math.acos(r),l=c*n,u=Math.sin(l),d=Math.sin(c),f=Math.cos(l)-r*u/d,p=u/d;return{x:f*e.x+p*i,y:f*e.y+p*a,z:f*e.z+p*o,w:f*e.w+p*s}}var vT={right:`controller-right`,left:`controller-left`,"right-controller":`controller-right`,"left-controller":`controller-left`,"controllers.right":`controller-right`,"controllers.left":`controller-left`,rightController:`controller-right`,leftController:`controller-left`,"right-hand":`hand-right`,"left-hand":`hand-left`,"hands.right":`hand-right`,"hands.left":`hand-left`,rightHand:`hand-right`,leftHand:`hand-left`};function yT(e){return vT[e]??e}var bT=.15,xT=.1;function ST(e){switch(e){case`controller-left`:case`controller-right`:case`hand-left`:case`hand-right`:return e;default:throw Error(`Unsupported select device: ${String(e)}`)}}var CT=K(),wT=K(),TT=K();function ET(e){return typeof e==`number`&&Number.isFinite(e)}function DT(e,t,n){return Math.min(n,Math.max(t,e))}function OT(e){if(!ET(e.x)||!ET(e.y)||!ET(e.z))throw Error(`Invalid position: x, y, z must be finite numbers (got ${JSON.stringify(e)}).`)}function kT(e){if(!ET(e.x)||!ET(e.y)||!ET(e.z)||!ET(e.w))throw Error(`Invalid orientation: x, y, z, w must be finite numbers (got ${JSON.stringify(e)}).`);let t=Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z+e.w*e.w);if(t<1e-6)throw Error(`Invalid orientation: quaternion has near-zero length.`);return{x:e.x/t,y:e.y/t,z:e.z/t,w:e.w/t}}var AT=class e{constructor(e){this.commandQueue=[],this._isCaptured=!1,this.releaseTimer=null,this.actionIdCounter=0,this.RELEASE_TIMEOUT_MS=3e4,this.ACTION_TIMEOUT_MS=1e4,this.watchdog=null,this.channels=new pC,this.targetResolver=null,this.sequenceBody=null,this.SEQUENCE_DEADLINE_MS=28e3,this.device=e,e.onControlModeChange(e=>{e===`manual`&&this.releaseHands()})}generateActionId(){return`action_${++this.actionIdCounter}`}get isCaptured(){return this._isCaptured}get queueLength(){return this.commandQueue.length}enqueueDiscrete(e,t){return new Promise((n,r)=>{let i={type:`discrete`,id:this.generateActionId(),method:e,params:t,resolve:n,reject:r};this.commandQueue.push(i),this.armWatchdog()})}enqueueTick(e,t,n){return new Promise((r,i)=>{let a={type:`tick`,id:this.generateActionId(),method:e,params:t,started:!1,...n,resolve:r,reject:i};this.commandQueue.push(a),this.armWatchdog()})}enqueueChannels(e,t,n,r,i){let a;return this.enqueueTick(e,t,{estimateMs:i,start:()=>{a=this.channels.run(n())},tick:e=>{try{return a.advance(e)}catch(e){throw a.stop(),e}},result:()=>r(a.elapsedMs)})}interruptQueue(e,t){let n=this.commandQueue;this.commandQueue=[],this.armWatchdog();for(let r of n)r.type===`tick`&&r.started&&r.abort?r.resolve(r.abort(e)):r.reject(Error(t(r.method)))}queuedMs(){let e=0;for(let t of this.commandQueue)t.type===`tick`&&(e+=Math.max(0,(t.estimateMs??0)-(t.elapsedMs??0)));return e}armWatchdog(){this.watchdog!==null&&(clearTimeout(this.watchdog),this.watchdog=null),this.commandQueue.length!==0&&(this.watchdog=setTimeout(()=>{this.watchdog=null,this.cancelHeldInputs(),this.releaseHands(),this.interruptQueue(`stalled`,e=>`RemoteControlInterface: action '${e}' timed out after ${this.ACTION_TIMEOUT_MS}ms with no frame processing the queue (is the XR render loop running?).`),this.startReleaseTimer()},this.ACTION_TIMEOUT_MS))}update(t){if(this.commandQueue.length===0)return;this.cancelReleaseTimer(),this._isCaptured||(this._isCaptured=!0,this.device.controlMode=`programmatic`);let n=t,r=new Set;for(;this.commandQueue.length>0;){let t=this.commandQueue[0],i=e.INPUT_WRITE_METHODS.has(t.method);if(i&&r.has(t.params.device))break;if(t.type===`discrete`){try{let e=this.executeDiscreteAction(t);t.resolve(e)}catch(e){t.reject(e)}if(this.commandQueue.shift(),i&&r.add(t.params.device),e.FRAME_ENDING_METHODS.has(t.method))break}else{try{t.started||(t.started=!0,t.start());let e=t.tick(n);if(t.elapsedMs=(t.elapsedMs??0)+(e<0?n:n-e),e<0)break;n=e,t.resolve(t.result())}catch(e){t.reject(e)}this.commandQueue.shift(),i&&r.add(t.params.device)}}this.device.notifyStateChange(),this.armWatchdog(),this.commandQueue.length===0&&!this.channels.isActive()&&this.startReleaseTimer()}startReleaseTimer(){this.cancelReleaseTimer(),this.releaseTimer=setTimeout(()=>{this._isCaptured=!1,this.releaseTimer=null,this.device.controlMode=`manual`},this.RELEASE_TIMEOUT_MS)}cancelReleaseTimer(){this.releaseTimer!==null&&(clearTimeout(this.releaseTimer),this.releaseTimer=null)}getDeviceTransform(e){switch(e){case`headset`:return{position:rT(this.device.position),orientation:iT(this.device.quaternion)};case`controller-left`:{let e=this.device.controllers.left;if(!e)throw Error(`Left controller not available`);return{position:rT(e.position),orientation:iT(e.quaternion)}}case`controller-right`:{let e=this.device.controllers.right;if(!e)throw Error(`Right controller not available`);return{position:rT(e.position),orientation:iT(e.quaternion)}}case`hand-left`:{let e=this.device.hands.left;if(!e)throw Error(`Left hand not available`);return{position:rT(e.position),orientation:iT(e.quaternion)}}case`hand-right`:{let e=this.device.hands.right;if(!e)throw Error(`Right hand not available`);return{position:rT(e.position),orientation:iT(e.quaternion)}}case`gaze`:{let e=this.device.gaze;if(!e)throw Error(`Gaze input not available`);return Lb(CT,this.device.quaternion.quat,e.quaternion.quat),{position:rT(this.device.position),orientation:{x:CT[0],y:CT[1],z:CT[2],w:CT[3]}}}default:throw Error(`Unknown device: ${e}`)}}setDeviceTransform(e,t,n){if(e===`gaze`&&t)throw Error(`Gaze position is derived from the headset. Move the headset transform instead.`);t&&OT(t);let r=n?kT(n):void 0;switch(e){case`headset`:this.sequenceBody=null,t&&this.device.position.set(t.x,t.y,t.z),r&&this.device.quaternion.set(r.x,r.y,r.z,r.w);break;case`controller-left`:{let e=this.device.controllers.left;if(!e)throw Error(`Left controller not available`);t&&e.position.set(t.x,t.y,t.z),r&&e.quaternion.set(r.x,r.y,r.z,r.w);break}case`controller-right`:{let e=this.device.controllers.right;if(!e)throw Error(`Right controller not available`);t&&e.position.set(t.x,t.y,t.z),r&&e.quaternion.set(r.x,r.y,r.z,r.w);break}case`hand-left`:{let e=this.device.hands.left;if(!e)throw Error(`Left hand not available`);t&&e.position.set(t.x,t.y,t.z),r&&e.quaternion.set(r.x,r.y,r.z,r.w);break}case`hand-right`:{let e=this.device.hands.right;if(!e)throw Error(`Right hand not available`);t&&e.position.set(t.x,t.y,t.z),r&&e.quaternion.set(r.x,r.y,r.z,r.w);break}case`gaze`:{let e=this.device.gaze;if(!e)throw Error(`Gaze input not available`);r&&(zb(wT,this.device.quaternion.quat),Gb(CT,r.x,r.y,r.z,r.w),Lb(TT,wT,CT),e.quaternion.set(TT[0],TT[1],TT[2],TT[3]));break}default:throw Error(`Unknown device: ${e}`)}}originMatrix(){return this.device[J].runtime.getSession()?.originOffsetMatrix??null}transformXROriginToGlobal(e){let t=this.originMatrix();if(!t)return e;let n=db(e.x,e.y,e.z);return wb(n,n,t),{x:n[0],y:n[1],z:n[2]}}transformGlobalToXROrigin(e){let t=this.originMatrix();if(!t)return e;let n=Qy(qy(),t)??qy(),r=db(e.x,e.y,e.z);return wb(r,r,n),{x:r[0],y:r[1],z:r[2]}}originRotation(){let e=this.originMatrix(),t=K();return e&&(ab(t,e),qb(t,t)),t}orientationToGlobal(e){let t=Ub(e.x,e.y,e.z,e.w);return Lb(t,this.originRotation(),t),pT(qb(t,t))}orientationToXROrigin(e){let t=Ub(e.x,e.y,e.z,e.w);return Lb(t,zb(K(),this.originRotation()),t),pT(qb(t,t))}getDeviceTransformInOrigin(e){let t=this.getDeviceTransform(e);return{position:this.transformGlobalToXROrigin(t.position),orientation:this.orientationToXROrigin(t.orientation)}}setDeviceTransformInOrigin(e,t,n){t&&OT(t),this.setDeviceTransform(e,t?this.transformXROriginToGlobal(t):void 0,n?this.orientationToGlobal(kT(n)):void 0)}handFor(e){let t=e===`hand-left`?`left`:e===`hand-right`?`right`:null;if(!t)throw Error(`Expected device 'hand-left' or 'hand-right', got '${e}'.`);let n=this.device.hands[t];if(!n)throw Error(`Hand ${t} not available`);return n}requireLiveHand(e){let t=this.handFor(e),n=this.device[J].runtime.getSession();if(this.device.primaryInputMode!==`hand`)throw Error(`${e} is not live: the input mode is controllers. Call set_input_mode with mode 'hand' first.`);if(!t.connected)throw Error(`${e} is disconnected. Call set_connected first.`);if(n?.enabledFeatures&&n.enabledFeatures.length>0&&!n.enabledFeatures.includes(`hand-tracking`))throw Error(`${e} is not live: the app's session did not enable 'hand-tracking'.`);return t}releaseHands(){this.channels.stop();for(let e of[`left`,`right`]){let t=this.device.hands[e];t&&(t.poseTransitionProgress=null,t.setPin(null))}}bodyFrame(){return oC(this.device.position.vec3,this.device.quaternion.quat)}toVec3(e,t){if(Array.isArray(e)){if(e.length===3&&e.every(ET))return db(e[0],e[1],e[2])}else if(e&&typeof e==`object`){let t=e;if(ET(t.x)&&ET(t.y)&&ET(t.z))return db(t.x,t.y,t.z)}throw Error(`${t} must be {x, y, z} or [x, y, z] with finite numbers (got ${JSON.stringify(e)}).`)}directionToGlobal(e,t,n,r=this.bodyFrame()){if(typeof e==`string`){if(!iC.includes(e))throw Error(`Unknown direction '${e}' for ${t}. Use a vector or one of: ${iC.join(`, `)}.`);return sC(e,r,n)}let i=this.toVec3(e,t);if(ub(i)<1e-6)throw Error(`${t} must not be a zero vector.`);return Tb(i,i,this.originRotation()),bb(i,i)}resolveHandOrientation(e,t,n,r=this.bodyFrame()){if(t===void 0)return{};if(t===`auto`){if(!n)throw Error(`orientation 'auto' needs a position to reach toward.`);let t=uC(cC(r,e.inputSource.handedness),n,e.inputSource.handedness,r);return{wristRotation:this.wristFromDirections(e,t)}}if(t&&typeof t==`object`&&`fingers`in t){let i=t,a=Object.keys(i).filter(e=>![`fingers`,`palm`,`thumb`].includes(e));if(a.length>0)throw Error(`Unknown hand orientation keys: ${a.join(`, `)}.`);if(i.palm===void 0==(i.thumb===void 0))throw Error(`A hand orientation takes fingers plus exactly one of palm or thumb.`);let o=n??void 0,s={fingers:this.directionToGlobal(i.fingers,`fingers`,o,r),palm:i.palm===void 0?void 0:this.directionToGlobal(i.palm,`palm`,o,r),thumb:i.thumb===void 0?void 0:this.directionToGlobal(i.thumb,`thumb`,o,r)};return{wristRotation:this.wristFromDirections(e,s)}}return{rayRotation:this.orientationToGlobal(kT(fT(t)))}}wristFromDirections(e,t){let n=KS(t,e.inputSource.handedness);if(!n)throw Error(`The two hand directions are parallel; give directions at an angle.`);return n}anchorPosition(e,t,n){n===void 0&&(n=e.pin?.graspPinch);let r=e.anchorOffset(t,G(),n);return Tb(r,r,e.quaternion.quat),mb(r,r,e.position.vec3)}requireAnchor(e){if(!GS(e))throw Error(`Unknown anchor '${String(e)}'. Use target-ray, wrist, grip, grasp, index-tip, thumb-tip, or a WebXR joint name.`);return e}requireEasing(e,t){if(e===void 0)return t;if(!tC.includes(e))throw Error(`Unknown easing '${String(e)}'. Use ${tC.join(` or `)}.`);return e}requireDuration(e,t){if(e===void 0)return 0;if(!ET(e)||e<0)throw Error(`${t} duration must be a number of seconds ≥ 0.`);return e}isHandPlacement(e,t,n){return e!==`hand-left`&&e!==`hand-right`?!1:t!==void 0&&t!==`target-ray`||n===`auto`||!!n&&typeof n==`object`&&`fingers`in n}getDeviceSelectValue(e){switch(e){case`controller-left`:return this.device.controllers.left?.getButtonValue(`trigger`)??0;case`controller-right`:return this.device.controllers.right?.getButtonValue(`trigger`)??0;case`hand-left`:return this.device.hands.left?.pinchValue??0;case`hand-right`:return this.device.hands.right?.pinchValue??0;default:throw Error(`Unknown input device: ${e}`)}}setDeviceSelectValue(e,t){var n,r,i,a;if(typeof t!=`number`||!(t>=0&&t<=1))throw Error(`Select value must be within [0, 1], got ${t}.`);switch(e){case`controller-left`:(n=this.device.controllers.left)==null||n.updateButtonValue(`trigger`,t);break;case`controller-right`:(r=this.device.controllers.right)==null||r.updateButtonValue(`trigger`,t);break;case`hand-left`:(i=this.device.hands.left)==null||i.updatePinchValue(t);break;case`hand-right`:(a=this.device.hands.right)==null||a.updatePinchValue(t);break;default:throw Error(`Unknown input device: ${e}`)}}setDeviceConnected(e,t){switch(e){case`controller-left`:this.device.controllers.left&&(this.device.controllers.left.connected=t);break;case`controller-right`:this.device.controllers.right&&(this.device.controllers.right.connected=t);break;case`hand-left`:this.device.hands.left&&(this.device.hands.left.connected=t);break;case`hand-right`:this.device.hands.right&&(this.device.hands.right.connected=t);break;case`gaze`:if(!this.device.gaze)throw Error(`Gaze input not available`);this.device.gaze.connected=t;break;default:throw Error(`Unknown input device: ${e}`)}}executeDiscreteAction(e){let{method:t,params:n}=e;switch(t){case`get_session_status`:return this.executeGetSessionStatus();case`accept_session`:return this.executeAcceptSession();case`end_session`:return this.executeEndSession();case`get_transform`:return this.executeGetTransform(n);case`set_transform`:return this.executeSetTransform(n);case`look_at`:return this.executeLookAt(n);case`set_input_mode`:return this.executeSetInputMode(n);case`set_connected`:return this.executeSetConnected(n);case`get_select_value`:return this.executeGetSelectValue(n);case`set_select_value`:return this.executeSetSelectValue(n);case`set_hand_pose`:return this.executeSetHandPose(n);case`get_gamepad_state`:return this.executeGetGamepadState(n);case`set_gamepad_state`:return this.executeSetGamepadState(n);case`get_device_state`:return this.executeGetDeviceState();case`set_device_state`:return this.executeSetDeviceState(n);default:throw Error(`Unknown method: ${t}`)}}executeGetSessionStatus(){let e=this.device[J].runtime,t=e.getSession();return{deviceName:this.device.name,isRuntimeInstalled:!0,sessionActive:!!t,sessionOffered:e.kind===`emulated`&&this.device.sessionOffered,sessionMode:t?.mode??null,enabledFeatures:t?Array.from(t.enabledFeatures):[],visibilityState:t?.visibilityState??this.device.visibilityState,runtimeKind:e.kind}}executeAcceptSession(){if(this.device[J].runtime.kind===`native`)throw Error(`Session start is app-driven in native override mode; immersive sessions require a user gesture.`);if(!this.device.sessionOffered)throw Error(`No session has been offered`);return this.device.grantOfferedSession(),{success:!0}}executeEndSession(){let e=this.device[J].runtime.getSession();if(!e)throw Error(`No active session`);return e.end(),{success:!0}}executeGetTransform(e){let{device:t}=e,n=this.getDeviceTransformInOrigin(t);return{device:t,position:n.position,orientation:n.orientation,euler:aT(n.orientation)}}executeSetTransform(e){let{device:t,position:n,orientation:r,anchor:i}=e;this.isHandPlacement(t,i,r)?this.placeHand(t,n,r,i):(i!==void 0&&this.requireAnchor(i),this.setDeviceTransformInOrigin(t,n,r?fT(r):void 0),(t===`hand-left`||t===`hand-right`)&&this.handFor(t).setPin(null));let a=this.getDeviceTransformInOrigin(t);return{device:t,position:a.position,orientation:a.orientation}}placeHand(e,t,n,r){let i=this.requireLiveHand(e),a=this.requireAnchor(r??`target-ray`),o=t?this.toVec3(this.transformXROriginToGlobal(t),`position`):this.anchorPosition(i,a),{wristRotation:s,rayRotation:c}=this.resolveHandOrientation(i,n,o);c&&i.quaternion.set(c.x,c.y,c.z,c.w),i.setPin({anchor:a,target:o,wristRotation:s??(c?void 0:i.pin?.wristRotation)})}executeLookAt(e){let{device:t,target:n,moveToDistance:r}=e;if(t===`gaze`&&r!==void 0)throw Error(`Gaze origin is derived from the headset; moveToDistance is not supported for gaze.`);let i=this.getDeviceTransform(t),a=this.transformXROriginToGlobal(n),o=sT(i.position,a),s=t===`headset`?cT(o):lT(o),c;r!==void 0&&(c={x:a.x-o.x*r,y:a.y-o.y*r,z:a.z-o.z*r}),(t===`hand-left`||t===`hand-right`)&&this.handFor(t).setPin(null),this.setDeviceTransform(t,c,s);let l=this.getDeviceTransformInOrigin(t);return{device:t,position:l.position,orientation:l.orientation}}executeSetInputMode(e){let{mode:t}=e;t!==this.device.primaryInputMode&&this.releaseHands(),this.device.primaryInputMode=t;let n=[];return t===`controller`?(this.device.controllers.left?.connected&&n.push(`controller-left`),this.device.controllers.right?.connected&&n.push(`controller-right`)):(this.device.hands.left?.connected&&n.push(`hand-left`),this.device.hands.right?.connected&&n.push(`hand-right`)),this.device.gaze?.connected&&n.push(`gaze`),{mode:t,activeDevices:n}}executeSetConnected(e){let{device:t,connected:n}=e;return!n&&(t===`hand-left`||t===`hand-right`)&&this.handFor(t).setPin(null),this.setDeviceConnected(t,n),{device:t,connected:n}}executeGetSelectValue(e){let{device:t}=e;return{device:t,value:this.getDeviceSelectValue(t)}}executeSetSelectValue(e){let{device:t,value:n}=e;return this.setDeviceSelectValue(t,n),{device:t,value:n}}executeSetHandPose(e){let t=this.handFor(e.device),{poseId:n,fingers:r}=this.parseHandPose(t,e);t.poseId=n;for(let e of Object.keys(r))t.setFingerPose(e,r[e].poseId,r[e].weight);return{device:e.device,poseId:n,fingers:t.fingerPoses}}parseHandPose(e,t){let{poseId:n,fingers:r}=t,i=e.poseIds,a=e=>{if(typeof e!=`string`||!i.includes(e))throw Error(`Unknown hand pose '${e}'. Available poses: ${i.join(`, `)}.`);return e};if(a(n),r!==void 0&&(typeof r!=`object`||!r||Array.isArray(r)))throw Error(`fingers must map finger names to poses.`);let o=Object.keys(uS),s={};for(let[e,t]of Object.entries(r??{})){if(!o.includes(e))throw Error(`Unknown finger '${e}'. Fingers: ${o.join(`, `)}.`);if(typeof t!=`string`&&(!t||typeof t!=`object`))throw Error(`Finger '${e}' takes a pose id or { poseId, weight }.`);let{poseId:n,weight:r=1}=typeof t==`string`?{poseId:t}:t;if(typeof r!=`number`||!(r>=0&&r<=1))throw Error(`Finger weight must be within [0, 1], got ${r}.`);s[e]={poseId:a(n),weight:r}}return{poseId:n,fingers:s}}executeGetHandState(e){let t=this.handFor(e.device),n=e=>this.transformGlobalToXROrigin(mT(e)),r=e=>{let n=zb(K(),this.originRotation());return mT(Tb(G(),e,Lb(n,n,t.quaternion.quat)))},i={};for(let e of[`wrist`,`grip`,`grasp`,`index-tip`,`thumb-tip`])i[e]=n(this.anchorPosition(t,e));let a=t.handAxes(),o=this.getDeviceTransformInOrigin(e.device),s=t.pin,c={device:e.device,connected:t.connected,poseId:t.poseId,fingers:t.fingerPoses,transition:t.poseTransitionProgress===null?null:{from:t.poseTransitionFrom,progress:t.poseTransitionProgress},pinchValue:t.pinchValue,pressed:t.inputSource.gamepad.buttons[0].pressed,position:o.position,orientation:o.orientation,pin:s?{anchor:s.anchor,target:n(s.target)}:null,anchors:i,axes:{fingers:r(a.fingers),palm:r(a.palm),thumb:r(a.thumb)}};if(e.joints===`all`){c.joints={};for(let e of Object.values(Z))c.joints[e]={position:n(this.anchorPosition(t,e)),radius:t.inputSource.hand.get(e)[ux].radius}}return c}requireSem(){let e=this.device.sem;if(!e)throw Error(`Scene understanding (SEM) is not installed on this device. Install @iwer/sem to query the emulated world.`);return e}executeGetObjects(){let e=this.requireSem(),t=[];return e.trackedPlanes.forEach(e=>{t.push({type:`plane`,semanticLabel:e.semanticLabel??null})}),e.trackedMeshes.forEach(e=>{t.push({type:`mesh`,semanticLabel:e.semanticLabel??null})}),{objects:t}}executeGetWorldState(){let e=this.requireSem();return{planeCount:e.trackedPlanes.size,meshCount:e.trackedMeshes.size,objects:this.executeGetObjects().objects}}listMethods(){let t=[];return e.IMMEDIATE_METHODS.forEach(e=>{t.push({method:e,immediate:!0,requiresSession:!1})}),e.SESSION_REQUIRED_METHODS.forEach(e=>{t.push({method:e,immediate:!1,requiresSession:!0})}),t}describe(){return this.listMethods()}connectTransport(e){e.addEventListener(`message`,t=>{let n=t.data;if(!n||typeof n.method!=`string`)return;let{id:r,method:i,params:a}=n;this.dispatch(i,a??{}).then(t=>e.postMessage({id:r,result:t})).catch(t=>e.postMessage({id:r,error:t instanceof Error?t.message:String(t)}))})}executeGetGamepadState(e){let{device:t}=e,n=t===`controller-left`?`left`:`right`,r=this.device.controllers[n];if(!r)throw Error(`Controller ${n} not available`);let i=[`trigger`,`squeeze`,`thumbstick`,n===`left`?`x-button`:`a-button`,n===`left`?`y-button`:`b-button`,`thumbrest`].map((e,t)=>({index:t,name:e.replace(`x-button`,`x`).replace(`y-button`,`y`).replace(`a-button`,`a`).replace(`b-button`,`b`),value:r.getButtonValue(e),touched:r.getButtonTouched(e),pressed:r.getButtonPressed(e)})),a=r.getAxes(),o=[{index:0,name:`thumbstick-x`,value:a.x},{index:1,name:`thumbstick-y`,value:a.y}];return{device:t,connected:r.connected,buttons:i,axes:o}}executeSetGamepadState(e){let{device:t,buttons:n,axes:r}=e,i=t===`controller-left`?`left`:`right`,a=this.device.controllers[i];if(!a)throw Error(`Controller ${i} not available`);let o=0,s=0,c=[`trigger`,`squeeze`,`thumbstick`,i===`left`?`x-button`:`a-button`,i===`left`?`y-button`:`b-button`,`thumbrest`];if(n)for(let e of n){let t=c[e.index];t&&ET(e.value)&&(a.updateButtonValue(t,DT(e.value,0,1)),e.touched!==void 0&&a.updateButtonTouch(t,e.touched),o++)}if(r){let e,t;for(let n of r)ET(n.value)&&(n.index===0?(e=DT(n.value,-1,1),s++):n.index===1&&(t=DT(n.value,-1,1),s++));if(e!==void 0||t!==void 0){let n=a.getAxes();a.updateAxes(`thumbstick`,e??n.x,t??n.y)}}return{device:t,buttonsSet:o,axesSet:s}}executeGetDeviceState(){let e={position:{x:0,y:0,z:0},orientation:{x:0,y:0,z:0,w:1}},t=(t,n)=>n?this.getDeviceTransformInOrigin(t):e,n=e=>{let n=this.device.controllers[e];return{connected:n?.connected??!1,...t(`controller-${e}`,!!n)}},r=e=>{let n=this.device.hands[e];return{connected:n?.connected??!1,...t(`hand-${e}`,!!n),...n?{poseId:n.poseId,pinchValue:n.pinchValue}:{}}};return{headset:this.getDeviceTransformInOrigin(`headset`),inputMode:this.device.primaryInputMode,controllers:{left:n(`left`),right:n(`right`)},hands:{left:r(`left`),right:r(`right`)},...this.device.gaze?{gaze:{connected:this.device.gaze.connected,orientation:this.getDeviceTransformInOrigin(`gaze`).orientation}}:{},stereoEnabled:this.device.stereoEnabled,fov:this.device.fovy*(180/Math.PI)}}executeSetDeviceState(e){let{state:t}=e;if(this.releaseHands(),!t)this.cancelHeldInputs(),this.sequenceBody=null,this.device.position.set(0,1.6,0),this.device.quaternion.set(0,0,0,1),this.device.primaryInputMode=`controller`,this.device.stereoEnabled=!1,this.device.controllers.left&&(this.device.controllers.left.position.set(-.2,1.4,-.3),this.device.controllers.left.quaternion.set(0,0,0,1),this.device.controllers.left.connected=!0),this.device.controllers.right&&(this.device.controllers.right.position.set(.2,1.4,-.3),this.device.controllers.right.quaternion.set(0,0,0,1),this.device.controllers.right.connected=!0),this.device.hands.left&&(this.device.hands.left.position.set(-.15,1.3,-.4),this.device.hands.left.quaternion.set(0,0,0,1),this.device.hands.left.connected=!0),this.device.hands.right&&(this.device.hands.right.position.set(.15,1.3,-.4),this.device.hands.right.quaternion.set(0,0,0,1),this.device.hands.right.connected=!0),this.device.gaze&&(this.device.gaze.quaternion.set(0,0,0,1),this.device.gaze.connected=!0);else{if(t.headset&&this.setDeviceTransformInOrigin(`headset`,t.headset.position,t.headset.orientation),t.inputMode!==void 0&&(this.device.primaryInputMode=t.inputMode),t.stereoEnabled!==void 0&&(this.device.stereoEnabled=t.stereoEnabled),t.fov!==void 0&&(this.device.fovy=t.fov*(Math.PI/180)),t.controllers&&(this.applyInputState(`controller-left`,t.controllers.left),this.applyInputState(`controller-right`,t.controllers.right)),t.hands)for(let e of[`left`,`right`]){let n=t.hands[e];this.applyInputState(`hand-${e}`,n);let r=this.device.hands[e];r&&n?.poseId!==void 0&&(this.parseHandPose(r,{device:`hand-${e}`,poseId:n.poseId}),r.poseId=n.poseId),r&&n?.pinchValue!==void 0&&this.setDeviceSelectValue(`hand-${e}`,n.pinchValue)}t.gaze&&this.applyInputState(`gaze`,t.gaze)}return{state:this.executeGetDeviceState()}}applyInputState(e,t){t&&(t.connected!==void 0&&this.setDeviceConnected(e,t.connected),(t.position||t.orientation)&&this.setDeviceTransformInOrigin(e,t.position,t.orientation))}activateCaptureMode(){this._isCaptured||(this._isCaptured=!0,this.cancelReleaseTimer(),this.device.controlMode=`programmatic`),this.startReleaseTimer()}async dispatch(t,n={}){let r=typeof n.device==`string`?{...n,device:yT(n.device)}:n;if(e.IMMEDIATE_METHODS.has(t))return e.ACTIVE_IMMEDIATE_METHODS.has(t)&&this.activateCaptureMode(),this.executeImmediateMethod(t,r);if(e.SESSION_REQUIRED_METHODS.has(t)&&!this.device[J].runtime.getSession()){let e=this.device[J].runtime.kind===`native`?`The application must start its native immersive session first.`:`Use 'get_session_status' to check session state, and 'accept_session' to start a session.`;throw Error(`Cannot execute '${t}': No active XR session. `+e)}if(t===`animate_to`)return this.enqueueAnimateTo(r,r);if(t===`set_select_value`&&r.duration!==void 0)return this.enqueueSelectRamp(r,r);if(t===`set_hand_pose`&&r.duration!==void 0)return this.enqueuePoseFade(r,r);if(t===`microgesture`)return this.enqueueMicrogesture(r,r);if(t===`run_sequence`)return this.enqueueSequence(r,r);if(t===`select`){let e=r;return this.executeSelectSequence(e)}return this.enqueueDiscrete(t,r)}executeImmediateMethod(e,t){switch(e){case`get_session_status`:return this.executeGetSessionStatus();case`accept_session`:return this.executeAcceptSession();case`end_session`:return this.executeEndSession();case`get_transform`:return this.executeGetTransform(t);case`get_select_value`:return this.executeGetSelectValue(t);case`get_gamepad_state`:return this.executeGetGamepadState(t);case`get_device_state`:return this.executeGetDeviceState();case`get_hand_state`:return this.executeGetHandState(t);case`list_targets`:return this.executeListTargets();case`cancel_sequence`:return this.executeCancelSequence();case`get_world_state`:return this.executeGetWorldState();case`get_objects`:return this.executeGetObjects();default:throw Error(`Unknown immediate method: ${e}`)}}latestSelectValue(e){let t=e.endsWith(`left`)?`left`:`right`,n=e.startsWith(`hand`);return(((n?this.device.hands[t]:this.device.controllers[t])?.inputSource.gamepad)?.[Y].buttonsMap[n?`pinch`:`trigger`])?.[Y].pendingValue??this.getDeviceSelectValue(e)}pinchChannel(e,t,n,r){let i=0;return{device:e,kind:`pinch`,durationMs:n,easing:r,begin:()=>{i=this.latestSelectValue(e)},apply:n=>{this.setDeviceSelectValue(e,i+(t-i)*n)}}}poseChannel(e,t,n,r,i){return{device:t,kind:`pose`,durationMs:r,easing:i,begin:()=>{let{poseId:r,fingers:i}=this.parseHandPose(e,{device:t,...n});e.beginPoseTransition(r,i)},apply:t=>{e.poseTransitionProgress!==null&&(e.poseTransitionProgress=t)}}}moveChannel(e,t,n){let{device:r,position:i,orientation:a,anchor:o}=e;if(this.isHandPlacement(r,o,a)){let e,s,c=G(),l=G(),u=K(),d,f,p,m=G(),h=K();return{device:r,kind:`transform`,durationMs:t,easing:n,begin:()=>{e=this.requireLiveHand(r),s=this.requireAnchor(o??`target-ray`),fb(c,this.anchorPosition(e,s)),fb(l,i?this.toVec3(this.transformXROriginToGlobal(i),`position`):c),e.wristRotation(u);let t=this.resolveHandOrientation(e,a,l);if(d=t.wristRotation,t.rayRotation){f=Hb(e.quaternion.quat);let n=t.rayRotation;p=Ub(n.x,n.y,n.z,n.w)}else!d&&e.pin?.wristRotation&&(d=Hb(e.pin.wristRotation))},apply:t=>{Cb(m,c,l,t),f&&p&&(Rb(h,f,p,t),e.quaternion.set(h[0],h[1],h[2],h[3])),d&&Rb(h,u,d,t),e.setPin({anchor:s,target:m,wristRotation:d?h:void 0})}}}o!==void 0&&o!==`target-ray`&&this.requireAnchor(o);let s,c,l;return{device:r,kind:`transform`,durationMs:t,easing:n,begin:()=>{s=this.getDeviceTransform(r),c=i?this.transformXROriginToGlobal(i):void 0,l=a?this.orientationToGlobal(kT(fT(a))):void 0,(r===`hand-left`||r===`hand-right`)&&this.handFor(r).setPin(null)},apply:e=>{this.setDeviceTransform(r,c?gT(s.position,c,e):void 0,l?_T(s.orientation,l,e):void 0)}}}enqueueAnimateTo(e,t){let{device:n,position:r}=e;if(n===`gaze`&&r)throw Error(`Gaze position is derived from the headset. Move the headset transform instead.`);let i=(e.duration??.5)*1e3,a=this.requireEasing(e.easing,`linear`),o=this.moveChannel(e,i,a);return this.enqueueChannels(`animate_to`,t,()=>[o],e=>{let t=this.getDeviceTransformInOrigin(n);return{device:n,position:t.position,orientation:t.orientation,actualDuration:e/1e3}},i)}enqueueSelectRamp(e,t){let n=ST(e.device),{value:r}=e,i=this.requireDuration(e.duration,`Select`)*1e3,a=this.requireEasing(e.easing,`minimum-jerk`);if(typeof r!=`number`||!(r>=0&&r<=1))throw Error(`Select value must be within [0, 1], got ${r}.`);return this.enqueueChannels(`set_select_value`,t,()=>((n===`hand-left`||n===`hand-right`)&&this.requireLiveHand(n),[this.pinchChannel(n,r,i,a)]),()=>({device:n,value:r}),i)}enqueuePoseFade(e,t){let n=this.handFor(e.device),r=this.requireDuration(e.duration,`Pose`)*1e3,i=this.requireEasing(e.easing,`minimum-jerk`);return this.enqueueChannels(`set_hand_pose`,t,()=>(this.requireLiveHand(e.device),[this.poseChannel(n,e.device,e,r,i)]),()=>({device:e.device,poseId:n.poseId,fingers:n.fingerPoses}),r)}runHandMotion(e,t){let n=this.handFor(e),r=[];return t.move&&r.push(this.moveChannel({...t.move,device:e},(t.move.duration??.5)*1e3,this.requireEasing(t.move.easing,`linear`))),t.pose&&r.push(this.poseChannel(n,e,t.pose,this.requireDuration(t.pose.duration,`Pose`)*1e3,this.requireEasing(t.pose.easing,`minimum-jerk`))),t.pinch&&r.push(this.pinchChannel(e,t.pinch.value,this.requireDuration(t.pinch.duration,`Select`)*1e3,this.requireEasing(t.pinch.easing,`minimum-jerk`))),this.enqueueChannels(`_hand_motion`,{device:e},()=>(this.requireLiveHand(e),r),()=>this.executeGetHandState({device:e}),Math.max(0,...r.map(e=>(e.delayMs??0)+e.durationMs)))}executeSelectSequence(e){let{device:t,duration:n=bT}=e;this.getDeviceSelectValue(t);let r=Math.max(0,n)*1e3,i=t===`hand-left`||t===`hand-right`?xT*1e3:0,a=[()=>this.pinchChannel(t,1,i,`minimum-jerk`),()=>this.pinchChannel(t,1,r,`linear`),()=>this.pinchChannel(t,0,i,`minimum-jerk`)],o=0,s;return this.enqueueTick(`select`,e,{estimateMs:r+2*i,start:()=>{s=this.channels.run([a[0]()])},tick:e=>{let t=s.advance(e);for(;t>=0;){if(o++,o===a.length)return t;if(s=this.channels.run([a[o]()]),o===1)return s.advance(Math.min(t,r)),-1;t=s.advance(t)}return-1},result:()=>({device:t,duration:n})})}enqueueMicrogesture(e,t){let{device:n,gesture:r}=e,i=this.handFor(n);if(!hC(r))throw Error(`gesture must be one of ${mC.join(`, `)} (got ${JSON.stringify(r)}).`);if(!i.poseIds.includes(`microgesture`))throw Error(`${n} has no '${_C}' pose to make microgestures from.`);let a,o,s=0;return this.enqueueTick(`microgesture`,t,{estimateMs:(vC+TC(r))*1e3,start:()=>{if(this.requireLiveHand(n),i.inputSource.gamepad.buttons[0].pressed)throw Error(`${n} is pinching (select is pressed); let go first (set_select_value 0) before a microgesture.`);let e=this.latestSelectValue(n),t=[];yC(i,e)||(s=vC,t.push(this.poseChannel(i,n,{poseId:_C},s*1e3,`minimum-jerk`)),e>0&&t.push(this.pinchChannel(n,0,s*1e3,`minimum-jerk`))),o=new DC(i,r),t.push(o.channel(n,s*1e3)),a=this.channels.run(t)},tick:e=>{if(o.releasePending)return o.finish(),e;let t;try{t=a.advance(e)}catch(e){throw a.stop(),e}if(a.interrupted)throw Error(`${n}'s microgesture stopped: remote control let go of the hand.`);return t<0||o.releasePending?-1:t},result:()=>({device:n,gesture:r,button:o.button,registeredAtMs:Math.round((s+(o.pressedAt??0))*1e3)})})}setTargetResolver(e){this.targetResolver=e}runSequence(e){return this.dispatch(`run_sequence`,e)}sequenceHost(){return{hand:e=>this.handFor(e),liveHand:e=>this.requireLiveHand(e),otherHand:e=>{let t=this.device.hands[e===`hand-left`?`right`:`left`];return t?.connected?t:void 0},headPose:()=>({position:lb(this.device.position.vec3),rotation:Hb(this.device.quaternion.quat)}),setHeadPose:(e,t)=>{this.device.position.set(e[0],e[1],e[2]),this.device.quaternion.set(t[0],t[1],t[2],t[3])},originToGlobal:e=>this.toVec3(this.transformXROriginToGlobal(mT(e)),`position`),globalToOrigin:e=>this.toVec3(this.transformGlobalToXROrigin(mT(e)),`position`),originDirectionToGlobal:e=>Tb(G(),e,this.originRotation()),globalDirectionToOrigin:e=>Tb(G(),e,zb(K(),this.originRotation())),directionToGlobal:(e,t,n,r)=>this.directionToGlobal(e,t,n,r),anchorPosition:(e,t,n)=>this.anchorPosition(e,t,n),requireAnchor:e=>this.requireAnchor(e),resolveOrientation:(e,t,n,r)=>this.resolveHandOrientation(e,t,n,r),parsePose:(e,t,n)=>this.parseHandPose(e,{device:e.inputSource.handedness===`left`?`hand-left`:`hand-right`,poseId:t,fingers:n}),setPinch:(e,t)=>this.setDeviceSelectValue(e,t),latestPinch:e=>this.latestSelectValue(e),pinchButton:e=>this.handFor(e).inputSource.gamepad[Y].buttonsMap.pinch,gestureButton:(e,t)=>this.handFor(e).inputSource.gamepad[Y].buttonsMap[t],channels:this.channels,resolver:()=>this.targetResolver,handState:e=>this.executeGetHandState({device:e}),bodyState:()=>this.sequenceBody,setBodyState:e=>{this.sequenceBody={forward:lb(e.forward),standing:lb(e.standing)}}}}enqueueSequence(e,t){let n=this.sequenceHost(),r=[],i=nT.describe(n,e,dw(n,e),r);if(e.dryRun){try{this.requireLiveHand(e.device)}catch(e){r.push(e.message)}return Promise.resolve(i)}let a=this.queuedMs()/1e3;if(i.duration+a>25)throw Error(`The sequence would take about ${i.duration.toFixed(1)} s`+(a>.05?`, after ${a.toFixed(1)} s of commands queued ahead`:``)+`; keep it under 25 s (split it into several run_sequence calls).`);let o=dw(n,e),s=performance.now()+this.SEQUENCE_DEADLINE_MS,c;return this.enqueueTick(`run_sequence`,t,{estimateMs:i.duration*1e3,start:()=>{c=new nT(n,e,o,s),c.start()},tick:e=>c.done?e:c.tick(e),result:()=>c.result(),abort:e=>(this.releaseHands(),c.abort(e))})}executeCancelSequence(){let e=this.commandQueue[0];if(e?.type!==`tick`||e.method!==`run_sequence`||!e.started||!e.abort)return{cancelled:!1};this.commandQueue.shift(),this.armWatchdog();let t=e.abort(`cancelled`);return e.resolve(t),this.commandQueue.length===0&&this.startReleaseTimer(),{cancelled:!0,sequence:t}}executeListTargets(){var e;return this.targetResolver?{resolver:!0,targets:(e=this.targetResolver).list?.call(e)??[]}:{resolver:!1,targets:[]}}async acceptSession(){if(this.device[J].runtime.kind===`native`)throw Error(`Session start is app-driven in native override mode; immersive sessions require a user gesture.`);if(!this.device.sessionOffered)throw Error(`No session has been offered`);return this.device.grantOfferedSession(),await uT(()=>!!this.device.activeSession,5e3),{success:!0}}onSessionEnd(){this.releaseHands(),this.interruptQueue(`session-ended`,()=>`The XR session ended.`),this._isCaptured&&this.startReleaseTimer()}forceRelease(){var e;this.cancelReleaseTimer(),this._isCaptured=!1,this.device.controlMode=`manual`,this.cancelHeldInputs(),this.releaseHands();for(let t of[`left`,`right`])(e=this.device.controllers[t])==null||e.updateAxes(`thumbstick`,0,0);this.interruptQueue(`released`,()=>`Capture released`)}cancelHeldInputs(){for(let e of[`left`,`right`])for(let t of[this.device.controllers[e],this.device.hands[e]])for(let e of t?.inputSource.gamepad?.buttons??[])e instanceof Cx&&Ax(e)}};AT.IMMEDIATE_METHODS=new Set([`get_session_status`,`accept_session`,`end_session`,`get_transform`,`get_select_value`,`get_gamepad_state`,`get_device_state`,`get_hand_state`,`list_targets`,`cancel_sequence`,`get_world_state`,`get_objects`]),AT.ACTIVE_IMMEDIATE_METHODS=new Set([`accept_session`,`end_session`]),AT.INPUT_WRITE_METHODS=new Set([`set_select_value`,`set_gamepad_state`,`select`,`_hand_motion`,`microgesture`,`run_sequence`]),AT.FRAME_ENDING_METHODS=new Set([`set_input_mode`,`set_connected`,`set_device_state`]),AT.SESSION_REQUIRED_METHODS=new Set([`set_transform`,`look_at`,`animate_to`,`set_input_mode`,`set_connected`,`set_select_value`,`select`,`set_gamepad_state`,`set_device_state`,`set_hand_pose`,`microgesture`,`run_sequence`]);var jT=class extends Wx{constructor(e,t,n){if(!e.layout[t])throw new DOMException(`Handedness not supported`,`InvalidStateError`);let r=new yx(n),i=e.layout[t].gripOffsetMatrix?new yx(r,e.layout[t].gripOffsetMatrix):void 0,a=[e.profileId,...e.fallbackProfileIds],o=new Bx(t,Rx.TrackedPointer,a,r,new Ex(e.layout[t].gamepad,``,-1,e.layout[t].numHapticActuators),i);super(o),this[Xb]={profileId:e.profileId,gamepadConfig:e.layout[t].gamepad}}get gamepadConfig(){return this[Xb].gamepadConfig}get profileId(){return this[Xb].profileId}updateButtonValue(e,t){if(!(t>=0&&t<=1)){console.warn(`Out-of-range value ${t} provided for button ${e}.`);return}let n=this[Qb].inputSource.gamepad[Y].buttonsMap[e];if(n){if(n[Y].type===`binary`&&t!=1&&t!=0){console.warn(`Non-binary value ${t} provided for binary button ${e}.`);return}kx(n,t)}else console.warn(`Current controller does not have button ${e}.`)}setButtonValueImmediate(e,t){if(!(t>=0&&t<=1)){console.warn(`Out-of-range value ${t} provided for button ${e}.`);return}let n=this[Qb].inputSource.gamepad[Y].buttonsMap[e];if(n){if(n[Y].type===`binary`&&t!=1&&t!=0){console.warn(`Non-binary value ${t} provided for binary button ${e}.`);return}Mx(n,t)}else console.warn(`Current controller does not have button ${e}.`)}updateButtonTouch(e,t){let n=this[Qb].inputSource.gamepad[Y].buttonsMap[e];n?n[Y].touched=t:console.warn(`Current controller does not have button ${e}.`)}updateAxis(e,t,n){if(n>1||n<-1){console.warn(`Out-of-range value ${n} provided for ${e} axes.`);return}let r=this[Qb].inputSource.gamepad[Y].axesMap[e];r?t===`x-axis`?r.x=n:t===`y-axis`&&(r.y=n):console.warn(`Current controller does not have ${e} axes.`)}updateAxes(e,t,n){if(t>1||t<-1||n>1||n<-1){console.warn(`Out-of-range value x:${t}, y:${n} provided for ${e} axes.`);return}let r=this[Qb].inputSource.gamepad[Y].axesMap[e];r?(r.x=t,r.y=n):console.warn(`Current controller does not have ${e} axes.`)}getButtonPressed(e){let t=this[Qb].inputSource.gamepad[Y].buttonsMap[e];if(!t)return!1;let n=t[Y].pendingValue;return n===null?t.pressed:Ox(t,t.pressed,n)}getButtonValue(e){let t=this[Qb].inputSource.gamepad[Y].buttonsMap[e];return t?t[Y].pendingValue??t.value:0}getButtonTouched(e){let t=this[Qb].inputSource.gamepad[Y].buttonsMap[e];return t?t.touched:!1}getAxes(e=`thumbstick`){let t=this[Qb].inputSource.gamepad[Y].axesMap[e];return t?{x:t.x,y:t.y}:{x:0,y:0}}},MT=class{constructor(e,t,n,r,i){this[rx]={nativeMesh:e,frame:void 0,meshSpace:t,vertices:n,indices:r,lastChangedTime:performance.now(),semanticLabel:i}}get meshSpace(){return this[rx].meshSpace}get vertices(){return this[rx].vertices}get indices(){return this[rx].indices}get lastChangedTime(){return this[rx].lastChangedTime}get semanticLabel(){return this[rx].semanticLabel}},NT=class extends Set{},PT=class{constructor(e,t,n,r){this.transform=e,this.vertices=t,this.indices=n,this.semanticLabel=r}},FT;(function(e){e.Desk=`desk`,e.Couch=`couch`,e.Floor=`floor`,e.Ceiling=`ceiling`,e.Wall=`wall`,e.Door=`door`,e.Window=`window`,e.Table=`table`,e.Shelf=`shelf`,e.Bed=`bed`,e.Screen=`screen`,e.Lamp=`lamp`,e.Plant=`plant`,e.WallArt=`wall art`,e.GlobalMesh=`global mesh`,e.Other=`other`})(FT||={});var IT;(function(e){e.Horizontal=`horizontal`,e.Vertical=`vertical`})(IT||={});var LT={[FT.Desk]:IT.Horizontal,[FT.Couch]:IT.Horizontal,[FT.Floor]:IT.Horizontal,[FT.Ceiling]:IT.Horizontal,[FT.Wall]:IT.Vertical,[FT.Door]:IT.Vertical,[FT.Window]:IT.Vertical,[FT.Table]:IT.Horizontal,[FT.Shelf]:IT.Horizontal,[FT.Bed]:IT.Horizontal,[FT.Screen]:IT.Vertical,[FT.Lamp]:IT.Horizontal,[FT.Plant]:IT.Horizontal,[FT.WallArt]:IT.Vertical};function RT(e,t){let n=e.transform?.orientation;if(n){let e=1-2*(n.x*n.x+n.z*n.z);return Math.abs(e)>=Math.SQRT1_2?IT.Horizontal:IT.Vertical}return t?LT[t]:void 0}var zT=class{constructor(e,t,n,r){this[ix]={nativePlane:e,frame:void 0,planeSpace:t,polygon:n,lastChangedTime:performance.now(),semanticLabel:r,orientation:RT(e,r)}}get planeSpace(){return this[ix].planeSpace}get polygon(){return this[ix].polygon}get orientation(){return this[ix].orientation}get lastChangedTime(){return this[ix].lastChangedTime}get semanticLabel(){return this[ix].semanticLabel}},BT=class extends Set{},VT=class{constructor(e,t,n){this.transform=e,this.polygon=t,this.semanticLabel=n}},HT=class{constructor(e,t,n,r,i,a){this[gx]={data:e,width:t,height:n,normDepthBufferFromNormView:r,rawValueToMeters:i,dataFormat:a,view:a===`float32`?new Float32Array(e):new Uint8Array(e)}}get data(){return this[gx].data}get width(){return this[gx].width}get height(){return this[gx].height}get normDepthBufferFromNormView(){return this[gx].normDepthBufferFromNormView}get rawValueToMeters(){return this[gx].rawValueToMeters}get dataFormat(){return this[gx].dataFormat}getDepthInMeters(e,t){let{width:n,height:r,rawValueToMeters:i,dataFormat:a,view:o}=this[gx];if(e<0||e>=1||t<0||t>=1)throw RangeError(`Normalized coordinates must be in [0, 1) range.`);let s=Math.floor(e*n),c=Math.floor(t*r);if(a===`float32`)return o[c*n+s]*i;{let e=o,t=(c*n+s)*2;return(e[t]+e[t+1]*256)*i}}},UT=class{constructor(e,t,n,r,i,a,o,s,c){this.texture=e,this.width=t,this.height=n,this.normDepthBufferFromNormView=r,this.rawValueToMeters=i,this.depthNear=a,this.depthFar=o,this.textureType=s,this.imageIndex=c,this.isValid=!0}},WT=class{constructor(e,t){this._session=e}getDepthInformation(e){let t=this._session[X].activeFrame;if(!t||!t[$b].active)throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`,`InvalidStateError`);if(!this._session[X].enabledFeatures.includes(`depth-sensing`))throw new DOMException(`depth-sensing feature is not enabled on this session.`,`InvalidStateError`);if(this._session[X].depthSensingUsage!==`gpu-optimized`)throw new DOMException(`getDepthInformation on XRWebGLBinding requires gpu-optimized depth sensing usage.`,`InvalidStateError`);let n=e[px].eye;return t[$b].gpuDepthDataMap.get(n)??null}},GT=class{constructor(e,t){this[Yb]={anchorSpace:e,session:t,deleted:!1},t[X].trackedAnchors.add(this)}get anchorSpace(){if(this[Yb].deleted)throw new DOMException(`XRAnchor has already been deleted.`,`InvalidStateError`);return this[Yb].anchorSpace}requestPersistentHandle(){return new Promise((e,t)=>{if(this[Yb].deleted)t(new DOMException(`XRAnchor has already been deleted.`,`InvalidStateError`));else{let t=this[Yb].session[X].persistentAnchors;for(let[n,r]of t.entries())if(r===this){e(n);return}let n=crypto.randomUUID();JT.createPersistentAnchor(this[Yb].session,this,n),e(n)}})}delete(){this[Yb].deleted||(this[Yb].anchorSpace=null,this[Yb].deleted=!0,this[Yb].session[X].trackedAnchors.delete(this))}},KT=class extends Set{},qT=`@immersive-web-emulation-runtime/persistent-anchors`,JT=class{static recoverPersistentAnchorsFromStorage(e){let t=JSON.parse(localStorage.getItem(qT)||`{}`),n=e[X].device[J].globalSpace;Object.entries(t).forEach(([t,r])=>{let i=new GT(new yx(n,r),e);e[X].persistentAnchors.set(t,i)})}static createPersistentAnchor(e,t,n){e[X].trackedAnchors.add(t),e[X].persistentAnchors.set(n,t);let r=JSON.parse(localStorage.getItem(qT)||`{}`);r[n]=Array.from(t[Yb].anchorSpace[fx].offsetMatrix),localStorage.setItem(qT,JSON.stringify(r))}},YT=class e{constructor(e,t){let n=db(0,0,0),r=K(),i=e?db(e.x,e.y,e.z):n,a=t?qb(K(),Ub(t.x,t.y,t.z,t.w)):r;this[cx]={matrix:qy(),position:i,orientation:a,positionPoint:new DOMPointReadOnly(i[0],i[1],i[2],1),orientationPoint:new DOMPointReadOnly(a[0],a[1],a[2],a[3]),inverse:null},this.updateMatrix()}updateMatrix(){nb(this[cx].matrix,this[cx].orientation,this[cx].position)}get matrix(){return this[cx].matrix}get position(){return this[cx].positionPoint}get orientation(){return this[cx].orientationPoint}get inverse(){if(!this[cx].inverse){let t=qy();if(!Qy(t,this[cx].matrix))throw Error(`Matrix is not invertible.`);let n=G();rb(n,t);let r=K();ab(r,t),this[cx].inverse=new e(new DOMPointReadOnly(n[0],n[1],n[2],1),new DOMPointReadOnly(r[0],r[1],r[2],r[3])),this[cx].inverse[cx].inverse=this}return this[cx].inverse}},XT=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}},ZT=class{constructor(e,t){let n={x:0,y:0,z:0,w:1},r={x:0,y:0,z:-1,w:0};if(e instanceof YT){let t=e.matrix,i=Mb(Ob(),n.x,n.y,n.z,n.w),a=Mb(Ob(),r.x,r.y,r.z,r.w);Fb(i,i,t),Fb(a,a,t),n.x=i[0],n.y=i[1],n.z=i[2],n.w=i[3],r.x=a[0],r.y=a[1],r.z=a[2],r.w=a[3]}else if(e&&(n.x=e.x,n.y=e.y,n.z=e.z,n.w=e.w),t){if(t.x===0&&t.y===0&&t.z===0||t.w!==0)throw new DOMException(`Invalid direction value to construct XRRay`,`TypeError`);r.x=t.x,r.y=t.y,r.z=t.z,r.w=t.w}let i=Math.sqrt(r.x*r.x+r.y*r.y+r.z*r.z)||1;r.x/=i,r.y/=i,r.z/=i,this[hx]={origin:new XT(n.x,n.y,n.z,n.w),direction:new XT(r.x,r.y,r.z,r.w),matrix:null}}get origin(){return this[hx].origin}get direction(){return this[hx].direction}get matrix(){if(this[hx].matrix)return this[hx].matrix;let e=pb(G(),0,0,-1),t=pb(G(),this[hx].origin.x,this[hx].origin.y,this[hx].origin.z),n=pb(G(),this[hx].direction.x,this[hx].direction.y,this[hx].direction.z),r=Sb(G(),n,e),i=xb(n,e),a=qy();i>-1&&i<1?tb(a,Math.acos(i),r):i===-1?tb(a,Math.acos(i),pb(G(),1,0,0)):Zy(a);let o=eb(qy(),t),s=$y(qy(),o,a);return this[hx].matrix=new Float32Array(s),this[hx].matrix}},QT=class{constructor(e,t){this[_x]={session:e,space:t.space,offsetRay:t.offsetRay??new ZT,entityTypes:t.entityTypes}}cancel(){this[_x].session[X].hitTestSources.delete(this)}},$T=class{constructor(e,t){this[_x]={frame:e,offsetSpace:t}}getPose(e){return this[_x].frame.getPose(this[_x].offsetSpace,e)}createAnchor(){return this[_x].frame.createAnchor(new YT,this[_x].offsetSpace)}},eE=class extends Event{constructor(e,t){if(super(e,t),!t.session)throw Error(`XRInputSourcesChangeEventInit.session is required`);if(!t.added)throw Error(`XRInputSourcesChangeEventInit.added is required`);if(!t.removed)throw Error(`XRInputSourcesChangeEventInit.removed is required`);this.session=t.session,this.added=t.added,this.removed=t.removed}},tE,nE;(function(e){e.Viewer=`viewer`,e.Local=`local`,e.LocalFloor=`local-floor`,e.BoundedFloor=`bounded-floor`,e.Unbounded=`unbounded`})(nE||={});var rE=class e extends yx{constructor(e,t,n){super(t,n),this[tE]={type:null,onreset:null},this[dx].type=e}get onreset(){return this[dx].onreset}set onreset(e){this[dx].onreset&&this.removeEventListener(`reset`,this[dx].onreset),this[dx].onreset=e,e&&this.addEventListener(`reset`,e)}getOffsetReferenceSpace(t){return new e(this[dx].type,this,t)}};tE=dx;var iE=class{constructor(e={},t){this[lx]={depthNear:e.depthNear??t?.depthNear??.1,depthFar:e.depthFar??t?.depthFar??1e3,inlineVerticalFieldOfView:e.inlineVerticalFieldOfView??t?.inlineVerticalFieldOfView??null,baseLayer:e.baseLayer??t?.baseLayer??null}}get depthNear(){return this[lx].depthNear}get depthFar(){return this[lx].depthFar}get inlineVerticalFieldOfView(){return this[lx].inlineVerticalFieldOfView}get baseLayer(){return this[lx].baseLayer}},aE=class extends Event{constructor(e,t){if(super(e,t),!t.session)throw Error(`XRSessionEventInit.session is required`);this.session=t.session}},oE;(function(e){e.None=`none`,e.Left=`left`,e.Right=`right`})(oE||={});var sE=class{constructor(e,t,n,r){this[px]={eye:e,projectionMatrix:t,transform:n,recommendedViewportScale:null,requestedViewportScale:1,session:r}}get eye(){return this[px].eye}get projectionMatrix(){return this[px].projectionMatrix}get transform(){return this[px].transform}get recommendedViewportScale(){return this[px].recommendedViewportScale}requestViewportScale(e){if(e===null||e<=0||e>1){console.warn(`Invalid scale value. Scale must be > 0 and <= 1.`);return}this[px].requestedViewportScale=e}},cE=class{constructor(e,t=!1,n=void 0,r=void 0){this[ox]={transform:e,emulatedPosition:t,linearVelocity:n,angularVelocity:r}}get transform(){return this[ox].transform}get emulatedPosition(){return this[ox].emulatedPosition}get linearVelocity(){return this[ox].linearVelocity}get angularVelocity(){return this[ox].angularVelocity}},lE=class extends cE{constructor(e,t,n=!1,r=void 0,i=void 0){super(e,n,r,i),this[ax]={radius:t}}get radius(){return this[ax].radius}},uE=class extends cE{constructor(e,t,n=!1,r=void 0,i=void 0){super(e,n,r,i),this[sx]={views:Object.freeze(t)}}get views(){return this[sx].views}},dE=qy(),fE=qy(),pE=qy(),mE=G(),hE=K(),gE=[oE.None],_E=[oE.Left,oE.Right],vE=(e,t,n)=>{xx.calculateGlobalOffsetMatrix(t,dE),xx.calculateGlobalOffsetMatrix(n,fE),Qy(pE,fE),$y(e,pE,dE)},yE=class{constructor(e,t,n,r,i){this[$b]={session:e,id:t,active:n,animationFrame:r,predictedDisplayTime:i,tempMat4:qy(),detectedPlanes:new BT,detectedMeshes:new NT,trackedAnchors:e[X].frameTrackedAnchors,hitTestResultsMap:new Map,depthDataMap:new Map,gpuDepthDataMap:new Map}}get session(){return this[$b].session}get predictedDisplayTime(){return this[$b].predictedDisplayTime}getPose(e,t){if(!this[$b].active)throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`,`InvalidStateError`);return vE(this[$b].tempMat4,e,t),rb(mE,this[$b].tempMat4),ab(hE,this[$b].tempMat4),new cE(new YT({x:mE[0],y:mE[1],z:mE[2],w:1},{x:hE[0],y:hE[1],z:hE[2],w:hE[3]}),e[fx].emulated)}getViewerPose(e){if(!this[$b].animationFrame)throw new DOMException(`getViewerPose can only be called on XRFrame objects passed to XRSession.requestAnimationFrame callbacks.`,`InvalidStateError`);let t=this[$b].session,n=t[X].device,r=this.getPose(n.viewerSpace,e),i=t[X].mode===`inline`?gE:_E,a=[];return i.forEach(r=>{let i=n.viewSpaces[r],o=this.getPose(i,e),s=t[X].getProjectionMatrix(r),c=new sE(r,new Float32Array(s),o.transform,t);a.push(c)}),new uE(r.transform,a,!1)}getJointPose(e,t){let n=this.getPose(e,t),r=e[ux].radius;return new lE(n.transform,r,!1)}fillJointRadii(e,t){if(e=Array.from(e),!this[$b].active)throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`,`InvalidStateError`);if(e.length>t.length)throw new DOMException(`The length of jointSpaces is larger than the number of elements in radii`,`TypeError`);let n=!0;for(let r=0;r<e.length;r++)e[r][ux].radius?t[r]=e[r][ux].radius:(t[r]=NaN,n=!1);return n}fillPoses(e,t,n){if(e=Array.from(e),!this[$b].active)throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`,`InvalidStateError`);if(e.length*16>n.length)throw new DOMException(`The length of spaces multiplied by 16 is larger than the number of elements in transforms`,`TypeError`);return e.forEach((e,r)=>{vE(this[$b].tempMat4,e,t),n.set(this[$b].tempMat4,r*16)}),!0}get detectedPlanes(){if(!this[$b].active)throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`,`InvalidStateError`);return this[$b].detectedPlanes}get detectedMeshes(){if(!this[$b].active)throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`,`InvalidStateError`);return this[$b].detectedMeshes}get trackedAnchors(){if(!this[$b].active)throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`,`InvalidStateError`);return this[$b].trackedAnchors}createAnchor(e,t){return new Promise((n,r)=>{if(!this[$b].active)r(new DOMException(`XRFrame access outside the callback that produced it is invalid.`,`InvalidStateError`));else{let i=this[$b].session[X].device[J].globalSpace,a=new yx(t,e.matrix),o=new GT(new yx(i,xx.calculateGlobalOffsetMatrix(a)),this[$b].session);this[$b].session[X].trackedAnchors.add(o),this[$b].session[X].newAnchors.set(o,{resolve:n,reject:r})}})}getHitTestResults(e){if(!this[$b].active)throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`,`InvalidStateError`);if(this[$b].hitTestResultsMap.has(e))return[...this[$b].hitTestResultsMap.get(e)];throw new DOMException(`Requested hit test results are not available for current frame.`,`InvalidStateError`)}getDepthInformation(e){if(!this[$b].active)throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`,`InvalidStateError`);if(!this[$b].session[X].enabledFeatures.includes(`depth-sensing`))throw new DOMException(`depth-sensing feature is not enabled on this session.`,`InvalidStateError`);return this[$b].depthDataMap.get(e[px].eye)??null}},bE;(function(e){e.Opaque=`opaque`,e.AlphaBlend=`alpha-blend`,e.Additive=`additive`})(bE||={});var xE;(function(e){e.ScreenSpace=`screen-space`,e.WorldSpace=`world-space`})(xE||={});var SE=class extends EventTarget{constructor(e,t,n,r){super(),this[X]={device:e,mode:t,renderState:new iE,pendingRenderState:null,enabledFeatures:n,hasAnchors:n.includes(`anchors`),hasPlanes:n.includes(`plane-detection`),hasMeshes:n.includes(`mesh-detection`),hasDepth:n.includes(`depth-sensing`),hasHitTest:n.includes(`hit-test`),hasGazeTracking:n.includes(`gaze-tracking`)||n.includes(`eye-tracking`),supportedFrameRates:new Float32Array(e.supportedFrameRates),isSystemKeyboardSupported:!1,ended:!1,projectionMatrices:{[oE.Left]:qy(),[oE.Right]:qy(),[oE.None]:qy()},getProjectionMatrix:e=>this[X].projectionMatrices[e],referenceSpaceIsSupported:e=>{if(!this[X].enabledFeatures.includes(e))return!1;switch(e){case nE.Viewer:return!0;case nE.Local:case nE.LocalFloor:case nE.BoundedFloor:case nE.Unbounded:return this[X].mode!=`inline`}},frameHandle:0,frameCallbacks:[],currentFrameCallbacks:null,onDeviceFrame:()=>{if(this[X].ended)return;this[X].deviceFrameHandle=globalThis.requestAnimationFrame(this[X].onDeviceFrame),this[X].pendingRenderState!=null&&(this[X].renderState=this[X].pendingRenderState,this[X].pendingRenderState=null,this[X].device[J].onBaseLayerSet(this[X].renderState.baseLayer));let e=this[X].renderState.baseLayer;if(e===null)return;let t=e.context,n=t.canvas;if(this[X].mode!=`inline`){let e=t.getParameter(t.COLOR_CLEAR_VALUE),n=t.getParameter(t.DEPTH_CLEAR_VALUE),r=t.getParameter(t.STENCIL_CLEAR_VALUE);t.clearColor(0,0,0,0),t.clearDepth(1),t.clearStencil(0),t.clear(t.DEPTH_BUFFER_BIT|t.COLOR_BUFFER_BIT|t.STENCIL_BUFFER_BIT),t.clearColor(e[0],e[1],e[2],e[3]),t.clearDepth(n),t.clearStencil(r)}let{depthNear:r,depthFar:i}=this[X].renderState,{width:a,height:o}=n;if(this[X].mode!==`inline`){let e=a*(this[X].device.stereoEnabled?.5:1)/o;cb(this[X].projectionMatrices[oE.Left],this[X].device.fovy,e,r,i),Yy(this[X].projectionMatrices[oE.Right],this[X].projectionMatrices[oE.Left])}else{let e=a/o;cb(this[X].projectionMatrices[oE.None],this[X].renderState.inlineVerticalFieldOfView,e,r,i)}let s=performance.now(),c=new yE(this,this[X].frameHandle,!0,!0,s),l=this[X].device[J].devui;if(l&&l.render(s),this[X].mode===`immersive-ar`){let e=this[X].device[J].sem;e&&e.render(s)}this[X].hasAnchors&&this[X].updateTrackedAnchors(),this[X].hasPlanes&&this[X].updateTrackedPlanes(c),this[X].hasMeshes&&this[X].updateTrackedMeshes(c),this[X].hasDepth&&this[X].computeDepthSensing(c),this[X].hasHitTest&&this[X].computeHitTestResults(c),this[X].activeFrame=c,this[X].device[J].onFrameStart(c),this[X].updateActiveInputSources();let u=this[X].currentFrameCallbacks=this[X].frameCallbacks;this[X].frameCallbacks=[];for(let e=0;e<u.length;e++)try{u[e].cancelled||u[e].callback(s,c)}catch(e){console.error(e)}this[X].currentFrameCallbacks=null,c[$b].active=!1,this[X].activeFrame=null},nominalFrameRate:e.internalNominalFrameRate,referenceSpaces:[],inputSourceArray:[],activeInputSources:[],updateActiveInputSources:()=>{let e=this[X].enabledFeatures.includes(`hand-tracking`),t=this[X].hasGazeTracking,n=this[X].activeInputSources,r=this[X].device.inputSources.filter(n=>(!n.hand||e)&&(n.targetRayMode!==`gaze`||t)),i=r.filter(e=>!n.includes(e)),a=n.filter(e=>!r.includes(e));this[X].activeInputSources=r;let o=this[X].device[J].visibilityState===`visible`;for(let e of a)for(let t of e.gamepad?.buttons??[]){if(!(t instanceof Cx))continue;let n=t[Y].eventTrigger,r=this[X].activeFrame;if(o&&n&&r&&t[Y].lastFramePressed)for(let t of Dx(`cancel`,n))this.dispatchEvent(new Hx(t,{frame:r,inputSource:e}));jx(t)}(i.length>0||a.length>0)&&this.dispatchEvent(new eE(`inputsourceschange`,{session:this,added:i,removed:a}))},trackedAnchors:new KT,persistentAnchors:new Map,newAnchors:new Map,frameTrackedAnchors:new KT,updateTrackedAnchors:()=>{this[X].enabledFeatures.includes(`anchors`)&&(this[X].frameTrackedAnchors.clear(),Array.from(this[X].trackedAnchors).forEach(e=>{if(e[Yb].deleted){if(this[X].trackedAnchors.delete(e),this[X].newAnchors.has(e)){let{reject:t}=this[X].newAnchors.get(e);t(new DOMException(`Anchor is no longer tracked`,`InvalidStateError`))}}else if(this[X].frameTrackedAnchors.add(e),this[X].newAnchors.has(e)){let{resolve:t}=this[X].newAnchors.get(e);t(e),this[X].newAnchors.delete(e)}}))},trackedPlanes:new Map,updateTrackedPlanes:e=>{let t=this[X].device[J].sem;t&&(Array.from(this[X].trackedPlanes.keys()).forEach(e=>{t.trackedPlanes.has(e)||this[X].trackedPlanes.delete(e)}),t.trackedPlanes.forEach(t=>{let n=this[X].trackedPlanes.get(t);if(!n)n=new zT(t,new yx(this[X].device[J].globalSpace,t.transform.matrix),t.polygon,t.semanticLabel),n[ix].lastChangedTime=e.predictedDisplayTime,this[X].trackedPlanes.set(t,n);else{xx.updateOffsetMatrix(n.planeSpace,t.transform.matrix);let r=RT(t,t.semanticLabel);r!==n[ix].orientation&&(n[ix].orientation=r,n[ix].lastChangedTime=e.predictedDisplayTime)}n[ix].frame=e,e[$b].detectedPlanes.add(n)}))},trackedMeshes:new Map,updateTrackedMeshes:e=>{let t=this[X].device[J].sem;t&&(Array.from(this[X].trackedMeshes.keys()).forEach(e=>{t.trackedMeshes.has(e)||this[X].trackedMeshes.delete(e)}),t.trackedMeshes.forEach(t=>{let n=this[X].trackedMeshes.get(t);n?xx.updateOffsetMatrix(n.meshSpace,t.transform.matrix):(n=new MT(t,new yx(this[X].device[J].globalSpace,t.transform.matrix),t.vertices,t.indices,t.semanticLabel),n[rx].lastChangedTime=e.predictedDisplayTime,this[X].trackedMeshes.set(t,n)),n[rx].frame=e,e[$b].detectedMeshes.add(n)}))},depthSensingUsage:r?.usagePreference?.[0]??`cpu-optimized`,depthSensingDataFormat:`float32`,depthTexture:null,depthTextureWidth:0,depthTextureHeight:0,depthFlipScratch:null,depthFlipScratchSize:0,activeFrame:null,computeDepthSensing:e=>{let t=this[X].device[J].sem;if(!t)return;let{depthNear:n,depthFar:r}=this[X].renderState,i=this[X].renderState.baseLayer;if(!i)return;let a=i.context.canvas,o=Math.max(1,Math.floor(a.width/4)),s=Math.max(1,Math.floor(a.height/4)),c=this[X].mode===`inline`?[oE.None]:[oE.Left,oE.Right],l=this[X].depthSensingUsage===`gpu-optimized`;for(let a of c){let c=this[X].getProjectionMatrix(a),u=this[X].device.viewSpaces[a],d=xx.calculateGlobalOffsetMatrix(u),f=qy();Qy(f,d);let p=t.computeDepthBuffer(f,c,o,s,n,r);if(p)if(l){let t=i.context,{width:o,height:s}=p;!this[X].depthTexture||this[X].depthTextureWidth!==o||this[X].depthTextureHeight!==s?(this[X].depthTexture&&t.deleteTexture(this[X].depthTexture),this[X].depthTexture=t.createTexture(),t.bindTexture(t.TEXTURE_2D_ARRAY,this[X].depthTexture),t.texStorage3D(t.TEXTURE_2D_ARRAY,1,t.R32F,o,s,2),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),this[X].depthTextureWidth=o,this[X].depthTextureHeight=s):t.bindTexture(t.TEXTURE_2D_ARRAY,this[X].depthTexture);let c=new Float32Array(p.data),l=o*s;(!this[X].depthFlipScratch||this[X].depthFlipScratchSize!==l)&&(this[X].depthFlipScratch=new Float32Array(l),this[X].depthFlipScratchSize=l);let u=this[X].depthFlipScratch;for(let e=0;e<s;e++){let t=s-1-e;for(let r=0;r<o;r++){let i=c[t*o+r];u[e*o+r]=i>0?1-n/i:0}}let d=t.getParameter(t.UNPACK_FLIP_Y_WEBGL),f=t.getParameter(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL);t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);let m=+(a===oE.Right);t.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,m,o,s,1,t.RED,t.FLOAT,u),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,d),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f);let h=new UT(this[X].depthTexture,o,s,new YT,p.rawValueToMeters,n,r,`texture-array`,m);e[$b].gpuDepthDataMap.set(a,h)}else{let t=new HT(p.data,p.width,p.height,new YT,p.rawValueToMeters,this[X].depthSensingDataFormat);e[$b].depthDataMap.set(a,t)}}},hitTestSources:new Set,computeHitTestResults:e=>{let t=this[X].device[J].sem;if(!t)return;let n=this[X].device[J].globalSpace;this[X].hitTestSources.forEach(r=>{let i=r[_x].space,a=xx.calculateGlobalOffsetMatrix(i),o=r[_x].offsetRay.matrix,s=qy();$y(s,a,o);let c=[];t.computeHitTestResults(s).forEach(t=>{let r=new $T(e,new yx(n,t));c.push(r)}),e[$b].hitTestResultsMap.set(r,c)})},onend:null,oninputsourceschange:null,onselect:null,onselectstart:null,onselectend:null,onsqueeze:null,onsqueezestart:null,onsqueezeend:null,onvisibilitychange:null,onframeratechange:null},JT.recoverPersistentAnchorsFromStorage(this),this[X].onDeviceFrame()}get visibilityState(){return this[X].device.visibilityState}get frameRate(){return this[X].nominalFrameRate}get supportedFrameRates(){return this[X].supportedFrameRates}get renderState(){return this[X].renderState}get inputSources(){return this[X].inputSourceArray.length=0,!this[X].ended&&this[X].mode!==`inline`&&this[X].inputSourceArray.push(...this[X].activeInputSources),this[X].inputSourceArray}get enabledFeatures(){return this[X].enabledFeatures}get isSystemKeyboardSupported(){return this[X].isSystemKeyboardSupported}get environmentBlendMode(){return this[X].device[J].environmentBlendModes[this[X].mode]??bE.Opaque}get interactionMode(){return this[X].device[J].interactionMode}get depthUsage(){return this[X].depthSensingUsage}get depthDataFormat(){return this[X].depthSensingDataFormat}updateRenderState(e={}){if(this[X].ended)throw new DOMException(`XRSession has already ended.`,`InvalidStateError`);if(e.baseLayer&&e.baseLayer[nx].session!==this)throw new DOMException(`Base layer was created by a different XRSession`,`InvalidStateError`);if(e.inlineVerticalFieldOfView!=null&&this[X].mode!==`inline`)throw new DOMException(`InlineVerticalFieldOfView must not be set for an immersive session`,`InvalidStateError`);let t={baseLayer:e.baseLayer??this[X].pendingRenderState?.baseLayer??void 0,depthFar:e.depthFar??this[X].pendingRenderState?.depthFar??void 0,depthNear:e.depthNear??this[X].pendingRenderState?.depthNear??void 0,inlineVerticalFieldOfView:e.inlineVerticalFieldOfView??this[X].pendingRenderState?.inlineVerticalFieldOfView??void 0};this[X].pendingRenderState=new iE(t,this[X].renderState)}async updateTargetFrameRate(e){return new Promise((t,n)=>{this[X].ended?n(new DOMException(`XRSession has already ended.`,`InvalidStateError`)):this[X].device.supportedFrameRates.includes(e)?(this[X].nominalFrameRate===e?console.log(`Requested frame rate is the same as the current nominal frame rate, no update made`):(this[X].nominalFrameRate=e,this.dispatchEvent(new aE(`frameratechange`,{session:this})),console.log(`Nominal frame rate updated to ${e}`)),t()):n(new DOMException(`Requested frame rate not supported.`,`InvalidStateError`))})}async requestReferenceSpace(e){return new Promise((t,n)=>{if(this[X].ended||!this[X].referenceSpaceIsSupported(e)){n(new DOMException(`The requested reference space type is not supported.`,`NotSupportedError`));return}let r;switch(e){case nE.Viewer:r=this[X].device.viewerSpace;break;case nE.Local:r=new rE(e,this[X].device[J].globalSpace,this[X].device.viewerSpace[fx].offsetMatrix);break;case nE.LocalFloor:case nE.BoundedFloor:case nE.Unbounded:r=new rE(e,this[X].device[J].globalSpace);break}this[X].referenceSpaces.push(r),t(r)})}requestAnimationFrame(e){if(this[X].ended)return 0;let t=++this[X].frameHandle;return this[X].frameCallbacks.push({handle:t,callback:e,cancelled:!1}),t}cancelAnimationFrame(e){let t=this[X].frameCallbacks,n=t.findIndex(t=>t&&t.handle===e);n>-1&&(t[n].cancelled=!0,t.splice(n,1)),t=this[X].currentFrameCallbacks,t&&(n=t.findIndex(t=>t&&t.handle===e),n>-1&&(t[n].cancelled=!0))}async end(){return new Promise((e,t)=>{this[X].ended?t(new DOMException(`XRSession has already ended.`,`InvalidStateError`)):(this[X].ended=!0,globalThis.cancelAnimationFrame(this[X].deviceFrameHandle),this[X].deviceFrameHandle=void 0,this[X].device[J].onSessionEnd(),this[X].frameCallbacks.length=0,this[X].currentFrameCallbacks=null,this[X].referenceSpaces.length=0,this[X].hitTestSources.clear(),this[X].trackedPlanes.clear(),this[X].trackedMeshes.clear(),this[X].trackedAnchors.clear(),this[X].frameTrackedAnchors.clear(),this[X].newAnchors.forEach(({reject:e})=>{e(new DOMException(`XRSession has ended before the anchor was resolved.`,`InvalidStateError`))}),this[X].newAnchors.clear(),this[X].depthTexture&&((this[X].renderState.baseLayer?.context)?.deleteTexture(this[X].depthTexture),this[X].depthTexture=null),this.dispatchEvent(new aE(`end`,{session:this})),e())})}get persistentAnchors(){return Array.from(this[X].persistentAnchors.keys())}restorePersistentAnchor(e){return new Promise((t,n)=>{if(!this[X].persistentAnchors.has(e))n(new DOMException(`Persistent anchor with uuid ${e} not found.`,`InvalidStateError`));else if(this[X].ended)n(new DOMException(`XRSession has already ended.`,`InvalidStateError`));else{let r=this[X].persistentAnchors.get(e);this[X].newAnchors.has(r)?n(new DOMException(`Multiple concurrent attempts detected to restore the anchor with UUID: ${e}.`,`InvalidStateError`)):(this[X].trackedAnchors.add(r),this[X].newAnchors.set(r,{resolve:t,reject:n}))}})}deletePersistentAnchor(e){return new Promise((t,n)=>{if(!this[X].persistentAnchors.has(e))n(new DOMException(`Persistent anchor with uuid ${e} not found.`,`InvalidStateError`));else{let n=this[X].persistentAnchors.get(e);this[X].persistentAnchors.delete(e),n.delete(),t(void 0)}})}requestHitTestSource(e){return new Promise((t,n)=>{if(!this[X].enabledFeatures.includes(`hit-test`))n(new DOMException(`WebXR feature "hit-test" is not supported by current session`,`NotSupportedError`));else if(this[X].ended)n(new DOMException(`XRSession has already ended.`,`InvalidStateError`));else if(!this[X].device[J].sem)n(new DOMException(`Synthethic Environment Module required for emulating hit-test`,`OperationError`));else{let n=new QT(this,e);this[X].hitTestSources.add(n),t(n)}})}get onend(){return this[X].onend}set onend(e){this[X].onend&&this.removeEventListener(`end`,this[X].onend),this[X].onend=e,e&&this.addEventListener(`end`,e)}get oninputsourceschange(){return this[X].oninputsourceschange}set oninputsourceschange(e){this[X].oninputsourceschange&&this.removeEventListener(`inputsourceschange`,this[X].oninputsourceschange),this[X].oninputsourceschange=e,e&&this.addEventListener(`inputsourceschange`,e)}get onselect(){return this[X].onselect}set onselect(e){this[X].onselect&&this.removeEventListener(`select`,this[X].onselect),this[X].onselect=e,e&&this.addEventListener(`select`,e)}get onselectstart(){return this[X].onselectstart}set onselectstart(e){this[X].onselectstart&&this.removeEventListener(`selectstart`,this[X].onselectstart),this[X].onselectstart=e,e&&this.addEventListener(`selectstart`,e)}get onselectend(){return this[X].onselectend}set onselectend(e){this[X].onselectend&&this.removeEventListener(`selectend`,this[X].onselectend),this[X].onselectend=e,e&&this.addEventListener(`selectend`,e)}get onsqueeze(){return this[X].onsqueeze}set onsqueeze(e){this[X].onsqueeze&&this.removeEventListener(`squeeze`,this[X].onsqueeze),this[X].onsqueeze=e,e&&this.addEventListener(`squeeze`,e)}get onsqueezestart(){return this[X].onsqueezestart}set onsqueezestart(e){this[X].onsqueezestart&&this.removeEventListener(`squeezestart`,this[X].onsqueezestart),this[X].onsqueezestart=e,e&&this.addEventListener(`squeezestart`,e)}get onsqueezeend(){return this[X].onsqueezeend}set onsqueezeend(e){this[X].onsqueezeend&&this.removeEventListener(`squeezeend`,this[X].onsqueezeend),this[X].onsqueezeend=e,e&&this.addEventListener(`squeezeend`,e)}get onvisibilitychange(){return this[X].onvisibilitychange}set onvisibilitychange(e){this[X].onvisibilitychange&&this.removeEventListener(`visibilitychange`,this[X].onvisibilitychange),this[X].onvisibilitychange=e,e&&this.addEventListener(`visibilitychange`,e)}get onframeratechange(){return this[X].onframeratechange}set onframeratechange(e){this[X].onframeratechange&&this.removeEventListener(`frameratechange`,this[X].onframeratechange),this[X].onframeratechange=e,e&&this.addEventListener(`frameratechange`,e)}},CE=class extends EventTarget{},wE={antialias:!0,depth:!0,stencil:!1,alpha:!0,ignoreDepthValues:!1,framebufferScaleFactor:1},TE=class extends CE{constructor(e,t,n={}){if(super(),e[X].ended)throw new DOMException(`Session has ended`,`InvalidStateError`);let r={...wE,...n};this[nx]={session:e,context:t,antialias:r.antialias}}get context(){return this[nx].context}get antialias(){return this[nx].antialias}get ignoreDepthValues(){return!0}get framebuffer(){return null}get framebufferWidth(){return this[nx].context.drawingBufferWidth}get framebufferHeight(){return this[nx].context.drawingBufferHeight}getViewport(e){if(e[px].session!==this[nx].session)throw new DOMException(`View's session differs from Layer's session`,`InvalidStateError`);return this[nx].session[X].device[J].getViewport(this,e)}static getNativeFramebufferScaleFactor(e){if(!(e instanceof SE))throw TypeError(`getNativeFramebufferScaleFactor must be passed a session.`);return+!e[X].ended}},EE=class{constructor(e,t,n,r={}){let{schema:i,frames:a}=t;if(!a||!i||a.length===0)throw new DOMException(`wrong recording format`,`NotSupportedError`);let o=new rE(nE.Viewer,e),s={[oE.Left]:new yx(o),[oE.Right]:new yx(o),[oE.None]:new yx(o)};this[q]={refSpace:e,inputSources:new Map,inputSchemas:new Map,frames:a,recordedFramePointer:0,startingTimeStamp:a[0][0],endingTimeStamp:a[a.length-1][0],playbackTime:a[0][0],playing:!1,autoAdvance:!0,manualFrameActive:!1,viewerSpace:o,viewSpaces:s,vec3:G(),quat:K(),f1p:G(),f1q:K(),f2p:G(),f2q:K(),lastFrameInputs:new Map,nextFrameInputs:new Map,loop:r.loop??!1,playbackRate:r.playbackRate!=null&&r.playbackRate>0?r.playbackRate:1,eventContext:r.eventContext,lastEventFramePointer:-1,startedActions:new Map,cancelPending:!1},eb(this[q].viewSpaces[oE.Left][fx].offsetMatrix,db(-n/2,0,0)),eb(this[q].viewSpaces[oE.Right][fx].offsetMatrix,db(n/2,0,0)),i.forEach(t=>{let n=t[0],r=t[1],i;if(r.hasGamepad){let e=[];for(let t=0;t<r.numButtons;t++)e.push({id:t.toString(),type:`manual`});let t=[];for(let e=0;e<r.numAxes;e++)t.push({id:e.toString(),type:`manual`});i=new Ex({mapping:r.mapping,buttons:e,axes:t})}let a=new yx(e),o;r.hasHand&&(o=new Ix,Object.values(Z).forEach(e=>{o.set(e,new Vx(e,a))}));let s=new Bx(r.handedness,r.targetRayMode,r.profiles,a,i,r.hasGrip?new yx(e):void 0,r.hasHand?o:void 0);this[q].inputSources.set(n,{active:!1,source:s}),this[q].inputSchemas.set(n,r)}),a.forEach((e,t)=>{for(let n=8;n<e.length;n++){let r=e[n],i=r[0],a=this[q].inputSchemas.get(i);if(!a)throw new DOMException(`recording frame ${t} references unknown input source ${i}`,`NotSupportedError`);if(a.hasGamepad){let e=8;a.hasGrip&&e++,a.hasHand&&e++;let n=r[e],o=a.numButtons+a.numAxes;if(!Array.isArray(n)||n.length!==o){let e=Array.isArray(n)?n.length:`no`;throw new DOMException(`recording frame ${t} input source ${i} has ${e} gamepad entries, expected ${o} (${a.numButtons} buttons + ${a.numAxes} axes)`,`NotSupportedError`)}}}})}play(){var e,t;(t=(e=this[q].eventContext)?.onDiscontinuity)==null||t.call(e),this[q].recordedFramePointer=0,this[q].playbackTime=this[q].startingTimeStamp,this[q].playing=!0,this[q].autoAdvance=!0,this[q].manualFrameActive=!1,this[q].actualTimeStamp=performance.now(),this.markDiscontinuity()}stop(){this.cancelStartedActions(),this[q].playing=!1,this[q].autoAdvance=!0,this[q].manualFrameActive=!1}get playing(){return this[q].playing}get viewerSpace(){return this[q].viewerSpace}get viewSpaces(){return this[q].viewSpaces}get inputSources(){return Array.from(this[q].inputSources.values()).filter(e=>e.active).map(e=>e.source)}get loop(){return this[q].loop}set loop(e){this[q].loop=e}get playbackRate(){return this[q].playbackRate}set playbackRate(e){e>0&&(this[q].playbackRate=e)}setEventContext(e){this[q].eventContext=e}get duration(){return this[q].endingTimeStamp-this[q].startingTimeStamp}get currentTime(){return this[q].playbackTime-this[q].startingTimeStamp}seek(e){var t,n;let r=this[q],i=Math.max(0,Math.min(e,this.duration)),a=r.startingTimeStamp+i,o=this.findFramePointer(a);o!==r.recordedFramePointer&&((n=(t=r.eventContext)?.onDiscontinuity)==null||n.call(t),this.markDiscontinuity()),r.playbackTime=a,r.recordedFramePointer=o,r.actualTimeStamp=performance.now()}findFramePointer(e){let t=this[q].frames,n=0,r=t.length-1,i=0;for(;n<=r;){let a=n+r>>1;t[a][0]<=e?(i=a,n=a+1):r=a-1}return i}stepFrames(e=1){var t,n;let r=this[q],i=r.frames;r.playing=!0,r.autoAdvance=!1,r.manualFrameActive=!0;for(let a=0;a<e;a++){if(r.recordedFramePointer+1>=i.length)if(r.loop)(n=(t=r.eventContext)?.onDiscontinuity)==null||n.call(t),r.recordedFramePointer=0,r.playbackTime=r.startingTimeStamp,this.markDiscontinuity();else{r.playbackTime=r.endingTimeStamp,this.applyFrameAtPointer(0),this.cancelStartedActions(),r.playing=!1;return}else r.recordedFramePointer++,r.playbackTime=i[r.recordedFramePointer][0];this.applyFrameAtPointer(0)}r.actualTimeStamp=performance.now()}playFrame(){var e,t;let n=performance.now(),r=(n-this[q].actualTimeStamp)*this[q].playbackRate;this[q].actualTimeStamp=n,this[q].playbackTime+=r;let i=this[q].frames,a=!1;if(this[q].playbackTime>this[q].endingTimeStamp)if(this[q].loop){(t=(e=this[q].eventContext)?.onDiscontinuity)==null||t.call(e);let n=this[q].playbackTime-this[q].endingTimeStamp,r=this.duration>0?this[q].startingTimeStamp+n%this.duration:this[q].startingTimeStamp;this[q].playbackTime=r,this[q].recordedFramePointer=this.findFramePointer(r),this.markDiscontinuity()}else this[q].playbackTime=this[q].endingTimeStamp,a=!0;for(;this[q].recordedFramePointer+1<i.length&&i[this[q].recordedFramePointer+1][0]<this[q].playbackTime;)this[q].recordedFramePointer++;let o=this[q].recordedFramePointer+1<i.length,s=i[this[q].recordedFramePointer],c=o?i[this[q].recordedFramePointer+1]:s,l=o?(this[q].playbackTime-s[0])/(c[0]-s[0]):0;this.applyFrameAtPointer(l),a&&this.stop()}applyFrameAtPointer(e){let t=this[q].frames,n=this[q].recordedFramePointer+1<t.length,r=t[this[q].recordedFramePointer],i=n?t[this[q].recordedFramePointer+1]:r;this.updateXRSpaceFromMergedFrames(this[q].viewerSpace,r.slice(1,8),i.slice(1,8),e);let a=this[q].lastFrameInputs;a.clear();for(let e=8;e<r.length;e++){let{index:t,inputData:n}=this.processRawInputData(r[e]);a.set(t,n)}let o=this[q].nextFrameInputs;o.clear();for(let e=8;e<i.length;e++){let{index:t,inputData:n}=this.processRawInputData(i[e]);o.set(t,n)}this[q].inputSources.forEach(e=>{e.active=!1}),o.forEach((t,n)=>{this[q].inputSources.get(n).active=!0;let r=this[q].inputSources.get(n).source,i=this[q].inputSchemas.get(n);this.updateInputSource(r,i,a.has(n)?a.get(n):t,t,e)}),this.dispatchSelectSqueezeEdges()}dispatchSelectSqueezeEdges(){let e=this[q],t=e.eventContext,n=e.recordedFramePointer;if(!t){e.lastEventFramePointer=n;return}let r=e.lastEventFramePointer;if(e.cancelPending&&(e.cancelPending=!1,this.cancelStartedActions()),r<0||r===n){e.lastEventFramePointer=n;return}let i=t.getFrame();if(!i){e.lastEventFramePointer=n;return}let a=e.frames,o=n>r?1:-1;for(let e=r;e!==n;e+=o){let n=o>0?e:e-1,r=n+1;this.dispatchEdgesBetweenFrames(a[n],a[r],t,i)}e.lastEventFramePointer=n}dispatchEdgesBetweenFrames(e,t,n,r){let i=new Map;for(let t=8;t<e.length;t++){let{index:n,inputData:r}=this.processRawInputData(e[t]);i.set(n,r)}for(let e=8;e<t.length;e++){let{index:a,inputData:o}=this.processRawInputData(t[e]),s=this[q].inputSchemas.get(a);if(!s||!s.hasGamepad||!o.buttons)continue;let c=i.get(a);if(!c||!c.buttons)continue;let l=this[q].inputSources.get(a)?.source;l&&o.buttons.forEach((e,t)=>{let i=this.eventTriggerForButton(s,t);if(i==null)return;let o=c.buttons[t]?.[0]===1,u=e[0]===1,d=`${a}:${i}`,f=this[q].startedActions,p=null;!o&&u?(p=`press`,f.set(d,{index:a,trigger:i})):o&&!u&&f.delete(d)&&(p=`release`);for(let e of Dx(p,i))n.session.dispatchEvent(new Hx(e,{frame:r,inputSource:l}))})}}markDiscontinuity(){let e=this[q];e.startedActions.size>0&&(e.cancelPending=!0),e.lastEventFramePointer=-1}cancelStartedActions(){let e=this[q],t=e.eventContext,n=t?.getFrame();if(t&&n)for(let{index:r,trigger:i}of e.startedActions.values()){let a=e.inputSources.get(r)?.source;if(a)for(let e of Dx(`cancel`,i))t.session.dispatchEvent(new Hx(e,{frame:n,inputSource:a}))}e.startedActions.clear(),e.cancelPending=!1}eventTriggerForButton(e,t){return e.hasHand&&e.mapping!==Sx.XRStandard?t===0?`select`:null:e.mapping===Sx.XRStandard?t===0?`select`:t===1?`squeeze`:null:null}updateInputSource(e,t,n,r,i){if(this.updateXRSpaceFromMergedFrames(e.targetRaySpace,n.targetRayTransform,r.targetRayTransform,i),t.hasGrip&&this.updateXRSpaceFromMergedFrames(e.gripSpace,n.gripTransform,r.gripTransform,i),t.hasHand)for(let a=0;a<25;a++){let o=n.handTransforms.slice(a*8,a*8+7),s=r.handTransforms.slice(a*8,a*8+7),c=n.handTransforms[a*8+7],l=r.handTransforms[a*8+7],u=e.hand.get(t.jointSequence[a]);this.updateXRSpaceFromMergedFrames(u,o,s,i),u[ux].radius=(l-c)*i+c}if(t.hasGamepad){let t=e.gamepad;r.buttons.forEach((e,r)=>{let a=t.buttons[r];a[Y].pressed=n.buttons[r][0]===1,a[Y].touched=e[1]===1;let o=n.buttons[r][2],s=e[2];a[Y].value=(s-o)*i+o}),r.axes.forEach((e,r)=>{let a=n.axes[r];t[Y].axesMap[r.toString()].x=(e-a)*i+a})}}updateXRSpaceFromMergedFrames(e,t,n,r){let i=pb(this[q].f1p,t[0],t[1],t[2]),a=Gb(this[q].f1q,t[3],t[4],t[5],t[6]),o=pb(this[q].f2p,n[0],n[1],n[2]),s=Gb(this[q].f2q,n[3],n[4],n[5],n[6]);Cb(this[q].vec3,i,o,r),Rb(this[q].quat,a,s,r),nb(e[fx].offsetMatrix,this[q].quat,this[q].vec3)}processRawInputData(e){let t=e[0],n=this[q].inputSchemas.get(t),r={targetRayTransform:e.slice(1,8)},i=8;if(n.hasGrip&&(r.gripTransform=e[i++]),n.hasHand&&(r.handTransforms=e[i++]),n.hasGamepad){let t=e[i];r.buttons=t.slice(0,n.numButtons),r.axes=t.slice(n.numButtons)}return{index:t,inputData:r}}},DE=`2.7.0`,OE=class extends Event{constructor(e,t){if(super(e,t),!t.referenceSpace)throw Error(`XRReferenceSpaceEventInit.referenceSpace is required`);this.referenceSpace=t.referenceSpace,this.transform=t.transform}},kE=[`gaze-tracking`,`eye-tracking`],AE=e=>kE.includes(e),jE=e=>e.some(AE),ME=class extends Wx{constructor(e){let t=new Bx(Lx.None,Rx.Gaze,[`eye-gaze`],new yx(e));super(t),this.position.set(0,0,0)}updateTargetRaySpace(){this.position.set(0,0,0),super.updateTargetRaySpace()}},NE=class extends EventTarget{constructor(e){super(),this[ex]={device:e,grantSession:({resolve:e,reject:t,mode:n,options:r})=>{if(this[ex].activeSession){t(new DOMException(`An active XRSession already exists.`,`InvalidStateError`));return}let{requiredFeatures:i=[],optionalFeatures:a=[]}=r,{supportedFeatures:o}=this[ex].device,s=e=>AE(e)?jE(o):o.includes(e);if(!i.every(s)){t(Error(`One or more required features are not supported by the device.`));return}let c=a.filter(s),l=Array.from(new Set([...i,...c,`viewer`,`local`])),u=new SE(this[ex].device,n,l,r.depthSensing);this[ex].activeSession=u,u.addEventListener(`end`,()=>{this[ex].activeSession=void 0},{once:!0}),e(u)}}}isSessionSupported(e){return new Promise((t,n)=>{t(e===`inline`||this[ex].device.supportedSessionModes.includes(e))})}requestSession(e,t={}){return new Promise((n,r)=>{this.isSessionSupported(e).then(i=>{if(!i){r(new DOMException(`The requested XRSession mode is not supported.`,`NotSupportedError`));return}let a={resolve:n,reject:r,mode:e,options:t};this[ex].grantSession(a)}).catch(r)})}offerSession(e,t={}){return new Promise((n,r)=>{this.isSessionSupported(e).then(i=>{var a;if(!i){r(new DOMException(`The requested XRSession mode is not supported.`,`NotSupportedError`));return}(a=this[ex].offeredSessionConfig)==null||a.reject(Error(`Offer superseded by a new offerSession call.`)),this[ex].offeredSessionConfig={resolve:n,reject:r,mode:e,options:t}}).catch(r)})}},PE=class{constructor(e,t,n,r){this[mx]={x:e,y:t,width:n,height:r}}get x(){return this[mx].x}get y(){return this[mx].y}get width(){return this[mx].width}get height(){return this[mx].height}},FE=(e,t,n)=>Math.min(n,Math.max(t,e));function IE(e,t,n,r){if(!Number.isFinite(t)||t<=0||t>=Math.PI||!Number.isFinite(n)||!Number.isFinite(r)||n<=0||r<=0)return{x:0,y:0,width:0,height:0};let i=Math.tan(t/2),a=n/r*i,o=FE(-Math.tan(e.angleLeft)/a,-1,1),s=FE(Math.tan(e.angleRight)/a,-1,1),c=FE(-Math.tan(e.angleDown)/i,-1,1),l=FE(Math.tan(e.angleUp)/i,-1,1),u=(o+1)/2*n,d=(s+1)/2*n,f=(1-l)/2*r,p=(1-c)/2*r;return{x:u,y:f,width:Math.max(0,d-u),height:Math.max(0,p-f)}}var LE;(function(e){e.texture=`texture`,e[`texture-array`]=`texture-array`})(LE||={});var Q;(function(e){e.default=`default`,e.mono=`mono`,e.stereo=`stereo`,e[`stereo-left-right`]=`stereo-left-right`,e[`stereo-top-bottom`]=`stereo-top-bottom`})(Q||={});var RE=e=>e&&typeof e.getOffsetReferenceSpace==`function`,zE=()=>typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{},BE=(e,t)=>{switch(t){case e.RGBA8:case e.RGB5_A1:case e.RGBA4:case e.SRGB8_ALPHA8:return{internalFormat:t,textureFormat:e.RGBA,type:e.UNSIGNED_BYTE};case e.RGBA8_SNORM:return{internalFormat:t,textureFormat:e.RGBA,type:e.BYTE};case e.RGB10_A2:return{internalFormat:t,textureFormat:e.RGBA,type:e.UNSIGNED_INT_2_10_10_10_REV};case e.RGBA16F:return{internalFormat:t,textureFormat:e.RGBA,type:e.HALF_FLOAT};case e.RGBA32F:return{internalFormat:t,textureFormat:e.RGBA,type:e.FLOAT};case e.RGBA8UI:return{internalFormat:t,textureFormat:e.RGBA_INTEGER,type:e.UNSIGNED_BYTE};case e.RGBA8I:return{internalFormat:t,textureFormat:e.RGBA_INTEGER,type:e.BYTE};case e.RGBA16UI:return{internalFormat:t,textureFormat:e.RGBA_INTEGER,type:e.UNSIGNED_SHORT};case e.RGBA16I:return{internalFormat:t,textureFormat:e.RGBA_INTEGER,type:e.SHORT};case e.RGBA32UI:return{internalFormat:t,textureFormat:e.RGBA_INTEGER,type:e.UNSIGNED_INT};case e.RGBA32I:return{internalFormat:t,textureFormat:e.RGBA_INTEGER,type:e.INT};case e.RGB10_A2UI:return{internalFormat:t,textureFormat:e.RGBA_INTEGER,type:e.UNSIGNED_INT_2_10_10_10_REV};case e.RGB8:case e.RGB565:case e.SRGB8:return{internalFormat:t,textureFormat:e.RGB,type:e.UNSIGNED_BYTE};case e.RGB8_SNORM:return{internalFormat:t,textureFormat:e.RGB,type:e.BYTE};case e.RGB16F:case e.R11F_G11F_B10F:case e.RGB9_E5:return{internalFormat:t,textureFormat:e.RGB,type:e.HALF_FLOAT};case e.RGB32F:return{internalFormat:t,textureFormat:e.RGB,type:e.FLOAT};case e.RGB8UI:return{internalFormat:t,textureFormat:e.RGB_INTEGER,type:e.UNSIGNED_BYTE};case e.RGB8I:return{internalFormat:t,textureFormat:e.RGB_INTEGER,type:e.BYTE};case e.RGB16UI:return{internalFormat:t,textureFormat:e.RGB_INTEGER,type:e.UNSIGNED_SHORT};case e.RGB16I:return{internalFormat:t,textureFormat:e.RGB_INTEGER,type:e.SHORT};case e.RGB32UI:return{internalFormat:t,textureFormat:e.RGB_INTEGER,type:e.UNSIGNED_INT};case e.RGB32I:return{internalFormat:t,textureFormat:e.RGB_INTEGER,type:e.INT};case e.DEPTH_COMPONENT16:return{internalFormat:t,textureFormat:e.DEPTH_COMPONENT,type:e.UNSIGNED_SHORT};case e.DEPTH_COMPONENT24:return{internalFormat:t,textureFormat:e.DEPTH_COMPONENT,type:e.UNSIGNED_INT};case e.DEPTH_COMPONENT32F:return{internalFormat:t,textureFormat:e.DEPTH_COMPONENT,type:e.FLOAT};case e.DEPTH24_STENCIL8:return{internalFormat:t,textureFormat:e.DEPTH_STENCIL,type:e.UNSIGNED_INT_24_8};case e.DEPTH32F_STENCIL8:return{internalFormat:t,textureFormat:e.DEPTH_STENCIL,type:e.FLOAT_32_UNSIGNED_INT_24_8_REV};case e.DEPTH_COMPONENT:return BE(e,e.DEPTH_COMPONENT24);case e.DEPTH_STENCIL:return BE(e,e.DEPTH24_STENCIL8);case e.RGBA:case e.RGB:case e.LUMINANCE_ALPHA:case e.LUMINANCE:case e.ALPHA:return{internalFormat:t,textureFormat:t,type:e.UNSIGNED_BYTE};default:throw Error(`Attempted to create polyfill with unsupported format.`)}},VE=class{constructor(){this._hasRunDeferredInitialize=!1,this._media=null}initialize(e,t){this.session=e,t&&(this.context=t),this.blendTextureSourceAlpha=!0}destroy(){this._colorTextures=[],this._depthStencilTextures=[]}addEventListener(e,t,n){}dispatchEvent(e){return!1}removeEventListener(e,t,n){}getContext(){return this.context}getTextureType(){throw Error(`Unimplemented`)}get colorTextures(){return this._colorTextures}get depthStencilTextures(){return this._depthStencilTextures}get colorTexturesMeta(){return this._texturesMeta}get media(){return this.isMediaLayer()||console.warn(`Attempted to retrieve media from a non-media layer`),this._media}determineLayoutAttribute(e,t,n){if(!(t instanceof WebGL2RenderingContext)&&e===LE[`texture-array`])throw TypeError();if(n===Q.mono)return n;if(n===Q.default){if(this.session.internalViews&&this.session.internalViews.length===1)return Q.mono;if(e===LE[`texture-array`])return n}return n===Q.default||n===Q.stereo?Q[`stereo-left-right`]:n}isMediaLayer(){return this._media!==null}_deferredInitialize(){}initializeIfNeeded(){this._hasRunDeferredInitialize||(this._hasRunDeferredInitialize=!0,this._deferredInitialize())}_allocateColorTexturesInternal(e,t){let n=this.session.internalViews;if(!n||n.length===0){console.warn(`We can't allocate color textures without views`);return}if(this.initializeIfNeeded(),this.layout===Q.mono)if(e===LE[`texture-array`]){let n=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.colorFormat);this._texturesMeta=[n],this._colorTextures=[n.texture];return}else{let n=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.colorFormat);this._texturesMeta=[n],this._colorTextures=[n.texture];return}else if(this.layout===Q.stereo)if(e===LE[`texture-array`]){let n=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.colorFormat,2);this._texturesMeta=[n],this._colorTextures=[n.texture];return}else{let n=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.colorFormat),r=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.colorFormat);this._texturesMeta=[n,r],this._colorTextures=[n.texture,r.texture];return}else if(this.layout===Q[`stereo-left-right`]){let n=this._createNewColorTexture(t.viewPixelWidth*2,t.viewPixelHeight,e,t.colorFormat);this._texturesMeta=[n],this._colorTextures=[n.texture];return}else if(this.layout===Q[`stereo-top-bottom`]){let n=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight*2,e,t.colorFormat);this._texturesMeta=[n],this._colorTextures=[n.texture];return}}_allocateDepthStencilTexturesInternal(e,t){if(!t.depthFormat){this._depthStencilTextures=[];return}if(this._getSupportedDepthFormats().indexOf(t.depthFormat)<0)throw Error(`Depth format provided is not supported in non-projection layers.`);if(t.mipLevels<1)throw Error(`Invalid miplevel. Miplevel needs to be >= 1`);if(this.layout===Q.mono)if(e===LE[`texture-array`]){let n=this._createNewDepthStencilTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.depthFormat);this._depthStencilTextures=[n.texture];return}else{let n=this._createNewColorTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.depthFormat);this._depthStencilTextures=[n.texture];return}else if(this.layout===Q.stereo)if(e===LE[`texture-array`]){let n=this._createNewDepthStencilTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.depthFormat,2);this._depthStencilTextures=[n.texture];return}else{let n=this._createNewDepthStencilTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.depthFormat),r=this._createNewDepthStencilTexture(t.viewPixelWidth,t.viewPixelHeight,e,t.depthFormat);this._depthStencilTextures=[n.texture,r.texture];return}else if(this.layout===Q[`stereo-left-right`]){let n=this._createNewDepthStencilTexture(t.viewPixelWidth*2,t.viewPixelHeight,e,t.depthFormat);this._depthStencilTextures=[n.texture];return}else if(this.layout===Q[`stereo-top-bottom`]){let n=this._createNewDepthStencilTexture(t.viewPixelWidth,t.viewPixelHeight*2,e,t.depthFormat);this._depthStencilTextures=[n.texture];return}}_createNewColorTexture(e,t,n,r,i=1){return this._createGenericPolyfillTexture(n,e,t,r,0,i)}_createNewDepthStencilTexture(e,t,n,r,i=1){return this._createGenericPolyfillTexture(n,e,t,r,0,i)}_createGenericPolyfillTexture(e,t,n,r,i=0,a=1){if(e===LE[`texture-array`]&&a<=1&&console.warn(`creating a texture array with a single layer...`),e===LE[`texture-array`]&&this.context instanceof WebGLRenderingContext)throw Error(`WebGL 1 does not support texture array`);let o=this.context.createTexture(),s={width:t,height:n,layers:a,type:e,textureFormat:r,texture:o},c=r,l=this.context.UNSIGNED_BYTE;if(this.context instanceof WebGL2RenderingContext){let e=BE(this.context,r);c=e.internalFormat,r=e.textureFormat,l=e.type}else r===this.context.DEPTH_COMPONENT&&(l=this.context.UNSIGNED_INT),r===this.context.DEPTH_STENCIL&&(l=this.context.UNSIGNED_INT_24_8_WEBGL);if(e===LE[`texture-array`]&&this.context instanceof WebGL2RenderingContext){console.warn(`texture-array layers are supported...questionably in the polyfill at the moment. Use at your own risk.`);let e=this.context.getParameter(this.context.TEXTURE_BINDING_2D_ARRAY);this.context.bindTexture(this.context.TEXTURE_2D_ARRAY,o),this._getSupportedDepthFormats().indexOf(r)>=0?this.context.texStorage3D(this.context.TEXTURE_2D_ARRAY,1,c,t,n,a):this.context.texImage3D(this.context.TEXTURE_2D_ARRAY,0,c,t,n,a,0,r,l,null),this.context.bindTexture(this.context.TEXTURE_2D_ARRAY,e)}else{let e=this.context.getParameter(this.context.TEXTURE_BINDING_2D);this.context.bindTexture(this.context.TEXTURE_2D,o),this.context.texImage2D(this.context.TEXTURE_2D,0,c,t,n,0,r,l,null),this.context.bindTexture(this.context.TEXTURE_2D,e)}return s}_getSupportedDepthFormats(){let e=[];return this.context instanceof WebGLRenderingContext&&!this.context.getExtension(`WEBGL_depth_texture`)?e:(e.push(this.context.DEPTH_COMPONENT,this.context.DEPTH_STENCIL),this.context instanceof WebGL2RenderingContext&&e.push(this.context.DEPTH_COMPONENT24,this.context.DEPTH24_STENCIL8),e)}},HE={colorFormat:6408,mipLevels:1,layout:Q.mono,isStatic:!1,space:null,viewPixelHeight:0,viewPixelWidth:0,textureType:LE.texture,radius:2,centralAngle:.78539,aspectRatio:2},UE={layout:Q.mono,invertStereo:!1,space:null,radius:2,centralAngle:.78539},WE=class extends VE{constructor(e,t){super(),this._media=t??null,this.isMediaLayer()?this.init=Object.assign(Object.assign({},UE),e):this.init=Object.assign(Object.assign({},HE),e),this.radius=this.init.radius,this.centralAngle=this.init.centralAngle,this.aspectRatio=this.init.aspectRatio,this.space=this.init.space,this.layout=this.init.layout;let n=zE();this.init.transform?this.transform=new n.XRRigidTransform(e.transform.position,e.transform.orientation):this.transform=new n.XRRigidTransform({x:0,y:0,z:0,w:1}),this.isMediaLayer()||(this.isStatic=e.isStatic)}getTextureType(){return this.isMediaLayer()?LE.texture:this.init.textureType}_deferredInitialize(){let e=this.determineLayoutAttribute(this.init.textureType,this.context,this.init.layout);this.layout=e,this.needsRedraw=!0}get colorTextures(){if(this.isMediaLayer())throw Error(`Media layers do not have associated textures`);return(!this._colorTextures||!this._colorTextures.length)&&this._allocateColorTexturesInternal(this.getTextureType(),this.init),this._colorTextures}get depthStencilTextures(){if(this.isMediaLayer())throw Error(`Media layers do not have associated textures`);return(!this._depthStencilTextures||!this._depthStencilTextures.length)&&this._allocateDepthStencilTexturesInternal(this.getTextureType(),this.init),this._depthStencilTextures}get colorTexturesMeta(){if(this.isMediaLayer())throw Error(`Media layers do not have associated textures`);return(!this._colorTextures||!this._colorTextures.length)&&this._allocateColorTexturesInternal(this.getTextureType(),this.init),this._texturesMeta}get width(){return 2*this.radius*Math.PI*(this.centralAngle/(2*Math.PI))}get height(){return this.width/this.aspectRatio}},GE={colorFormat:6408,mipLevels:1,layout:Q.mono,isStatic:!1,space:null,viewPixelHeight:0,viewPixelWidth:0,textureType:LE.texture,radius:0,centralHorizontalAngle:6.28318,upperVerticalAngle:1.570795,lowerVerticalAngle:-1.570795},KE={space:null,layout:Q.mono,invertStereo:!1,radius:0,centralHorizontalAngle:6.28318,upperVerticalAngle:1.570795,lowerVerticalAngle:-1.570795},qE=class extends VE{constructor(e,t){if(super(),this._media=t??null,this.isMediaLayer()?this.init=Object.assign(Object.assign({},KE),e):this.init=Object.assign(Object.assign({},GE),e),!RE(this.init.space))throw TypeError(`Equirect layer's space needs to be an XRReferenceSpace`);this.radius=this.init.radius,this.centralHorizontalAngle=this.init.centralHorizontalAngle,this.upperVerticalAngle=this.init.upperVerticalAngle,this.lowerVerticalAngle=this.init.lowerVerticalAngle,this.space=this.init.space,this.layout=this.init.layout;let n=zE();e.transform?this.transform=new n.XRRigidTransform(e.transform.position,e.transform.orientation):this.transform=new n.XRRigidTransform({x:0,y:0,z:0,w:1}),this.isMediaLayer()||(this.isStatic=e.isStatic)}getTextureType(){return this.isMediaLayer()?LE.texture:this.init.textureType}_deferredInitialize(){let e=this.determineLayoutAttribute(this.init.textureType,this.context,this.init.layout);this.layout=e,this.needsRedraw=!0}get colorTextures(){if(this.isMediaLayer())throw Error(`Media layers do not have associated textures`);return(!this._colorTextures||!this._colorTextures.length)&&this._allocateColorTexturesInternal(this.getTextureType(),this.init),this._colorTextures}get depthStencilTextures(){if(this.isMediaLayer())throw Error(`Media layers do not have associated textures`);return(!this._depthStencilTextures||!this._depthStencilTextures.length)&&this._allocateDepthStencilTexturesInternal(this.getTextureType(),this.init),this._depthStencilTextures}get colorTexturesMeta(){if(this.isMediaLayer())throw Error(`Media layers do not have associated textures`);return(!this._colorTextures||!this._colorTextures.length)&&this._allocateColorTexturesInternal(this.getTextureType(),this.init),this._texturesMeta}},JE={colorFormat:6408,mipLevels:1,layout:Q.mono,isStatic:!1,space:null,viewPixelHeight:0,viewPixelWidth:0,textureType:LE.texture,width:1,height:1},YE={space:null,layout:Q.mono,invertStereo:!1},XE=class extends VE{constructor(e,t){super(),this._media=t??null,this.isMediaLayer()?this.init=Object.assign(Object.assign({},YE),e):this.init=Object.assign(Object.assign({},JE),e),this.width=this.init.width,this.height=this.init.height,this.space=this.init.space,this.layout=this.init.layout;let n=zE();this.init.transform?this.transform=new n.XRRigidTransform(e.transform.position,e.transform.orientation):this.transform=new n.XRRigidTransform({x:0,y:0,z:0,w:1}),this.isMediaLayer()||(this.isStatic=e.isStatic)}getTextureType(){return this.isMediaLayer()?LE.texture:this.init.textureType}_deferredInitialize(){let e=this.determineLayoutAttribute(this.init.textureType,this.context,this.init.layout);this.layout=e,this.needsRedraw=!0}get colorTextures(){if(this.isMediaLayer())throw Error(`Media layers do not have associated textures`);return(!this._colorTextures||!this._colorTextures.length)&&this._allocateColorTexturesInternal(this.getTextureType(),this.init),this._colorTextures}get depthStencilTextures(){if(this.isMediaLayer())throw Error(`Media layers do not have associated textures`);return(!this._depthStencilTextures||!this._depthStencilTextures.length)&&this._allocateDepthStencilTexturesInternal(this.getTextureType(),this.init),this._depthStencilTextures}get colorTexturesMeta(){if(this.isMediaLayer())throw Error(`Media layers do not have associated textures`);return(!this._colorTextures||!this._colorTextures.length)&&this._allocateColorTexturesInternal(this.getTextureType(),this.init),this._texturesMeta}},ZE=class{constructor(e){if(this.session=e,this.session.ended)throw Error(`Session has ended`)}createQuadLayer(e,t){if(this.session.ended)throw Error(`Session has ended`);if(t.layout===Q.default)throw TypeError(`Media Quad layer cannot be created with layout of default`);let n=this.calculateAspectRatio(e,t.layout);t.width===void 0&&t.height===void 0&&(t.width=1),t.height===void 0&&(t.height=t.width/n),t.width===void 0&&(t.width=t.height/n);let r=new XE(t,e);return r.needsRedraw=!1,r.initialize(this.session),r}createCylinderLayer(e,t){if(this.session.ended)throw Error(`Session has ended`);if(t.layout===Q.default)throw TypeError(`Media Cylinder layer cannot be created with layout of default`);let n=this.calculateAspectRatio(e,t.layout);t.aspectRatio===void 0&&(t.aspectRatio=n);let r=new WE(t,e);return r.needsRedraw=!1,r.initialize(this.session),r}createEquirectLayer(e,t){if(this.session.ended)throw Error(`Session has ended`);if(t.layout===Q.default)throw TypeError(`Media Equirect layer cannot be created with layout of default`);if(!RE(t.space))throw Error(`Media Equirect layer's space must be of type XRReferenceSpace`);let n=new qE(t,e);return n.needsRedraw=!1,n.initialize(this.session),n}calculateAspectRatio(e,t){let n=e.videoWidth,r=e.videoHeight;return t===Q[`stereo-left-right`]&&(n/=2),t===Q[`stereo-top-bottom`]&&(r/=2),n/r}},QE={textureType:LE.texture,colorFormat:6408,depthFormat:6402,scaleFactor:1},$E=class extends VE{constructor(e=QE){super(),this.init=Object.assign(Object.assign({},QE),e)}initialize(e,t){super.initialize(e,t),this.initializeIfNeeded();let n=e.getBaseLayer();this.textureWidth=n.framebufferWidth*this.init.scaleFactor,this.textureHeight=n.framebufferHeight*this.init.scaleFactor}_allocateProjectionColorTextures(){let e=[],t=[],n=()=>{e=[];for(let n of t)e.push(n.texture)},r=this.session,i=r.internalViews;if(!i||i.length===0){console.warn(`We can't allocate color textures without views`);return}let a=r.getBaseLayer(),o=i.length,s=a.framebufferWidth*this.init.scaleFactor/i.length,c=a.framebufferHeight*this.init.scaleFactor;if(this.layout===Q.mono||this.layout===Q.default){if(this.init.textureType===LE[`texture-array`])t=[this._createNewColorTexture(s,c,LE[`texture-array`],this.init.colorFormat,o)];else for(let e of i){let e=this._createNewColorTexture(s,c,LE.texture,this.init.colorFormat);t.push(e)}n(),this._colorTexturesMeta=t,this._colorTextures=e;return}this.layout===Q[`stereo-left-right`]?t=[this._createNewColorTexture(s*o,c,this.init.textureType,this.init.colorFormat)]:this.layout===Q[`stereo-top-bottom`]&&(t=[this._createNewColorTexture(s,c*o,this.init.textureType,this.init.colorFormat)]),n(),this._colorTexturesMeta=t,this._colorTextures=e}_allocateProjectionDepthStencilTextures(){let e=this.session,t=e.internalViews;if(!t||t.length===0)return;if(this.init.depthFormat===0){this._depthStencilTextures=[];return}if(this.context instanceof WebGLRenderingContext&&!this.context.getExtension(`WEBGL_depth_texture`)){this._depthStencilTextures=[];return}let n=[],r=[],i=()=>{n=[];for(let e of r)n.push(e.texture)};this.initializeIfNeeded();let a=e.getBaseLayer(),o=t.length,s=a.framebufferWidth*this.init.scaleFactor/t.length,c=a.framebufferHeight*this.init.scaleFactor;if(this.layout===Q.mono||this.layout===Q.default){if(this.init.textureType===LE[`texture-array`])r=[this._createNewDepthStencilTexture(s,c,this.init.textureType,this.init.depthFormat,o)];else for(let e of t){let e=this._createNewDepthStencilTexture(s,c,this.init.textureType,this.init.depthFormat);r.push(e)}i(),this._depthStencilTextures=n;return}this.layout===Q[`stereo-left-right`]?r=[this._createNewDepthStencilTexture(s*o,c,this.init.textureType,this.init.depthFormat)]:this.layout===Q[`stereo-top-bottom`]&&(r=[this._createNewDepthStencilTexture(s,c*o,this.init.textureType,this.init.depthFormat)]),i(),this._depthStencilTextures=n}get colorTextures(){return(!this._colorTextures||!this._colorTextures.length)&&this._allocateProjectionColorTextures(),this._colorTextures}get depthStencilTextures(){return this._depthStencilTextures===void 0&&this._allocateProjectionDepthStencilTextures(),this._depthStencilTextures||[]}get colorTexturesMeta(){return(!this._colorTextures||!this._colorTextures.length)&&this._allocateProjectionColorTextures(),this._colorTexturesMeta}getTextureType(){return this.init.textureType}_deferredInitialize(){this.isStatic=!1,this.ignoreDepthValues=!1,this.fixedFoveation=0;let e=this.determineLayoutAttribute(this.init.textureType,this.context,Q.default);this.layout=e,this.needsRedraw=!0;let t=this.determineMaximumScaleFactor(),n=Math.min(this.init.scaleFactor,t);this.init.scaleFactor=n}determineMaximumScaleFactor(){let e=this.session.getBaseLayer(this.context),t=e.framebufferWidth,n=e.framebufferHeight;this.layout===Q[`stereo-left-right`]&&(t*=2),this.layout===Q[`stereo-top-bottom`]&&(n*=2);let r=Math.max(t,n);return this.context.getParameter(this.context.MAX_TEXTURE_SIZE)/r}},eD=(e,t,n,r,i)=>{let a=0,o=0,s=t.width,c=t.height;n===Q[`stereo-left-right`]?(a=t.width*r/i,s=t.width/i):n===Q[`stereo-top-bottom`]&&(o=t.height*r/i,c=t.height/i),e.x=a,e.y=o,e.width=s,e.height=c},tD=(e,t,n)=>{var r=e.createShader(n);if(e.shaderSource(r,t),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw`could not compile shader:`+e.getShaderInfoLog(r);return r},nD=(e,t,n)=>{let r=e.createProgram(),i=tD(e,t,e.VERTEX_SHADER),a=tD(e,n,e.FRAGMENT_SHADER);if(e.attachShader(r,i),e.attachShader(r,a),e.deleteShader(i),e.deleteShader(a),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw`program failed to link:`+e.getProgramInfoLog(r);return r},rD=(e,t,n,r,i)=>{var a=t,o=t+r,s=n,c=n+i;e.bufferData(e.ARRAY_BUFFER,new Float32Array([a,s,o,s,a,c,a,c,o,s,o,c]),e.DYNAMIC_DRAW)},iD=e=>{if(e instanceof WebGL2RenderingContext)return e;let t=e.getExtension(`OES_vertex_array_object`);if(!t)throw Error(`Cannot use VAOs.`);return{VERTEX_ARRAY_BINDING:t.VERTEX_ARRAY_BINDING_OES,bindVertexArray:t.bindVertexArrayOES.bind(t),createVertexArray:t.createVertexArrayOES.bind(t),deleteVertexArray:t.deleteVertexArrayOES.bind(t),isVertexArray:t.isVertexArrayOES.bind(t)}},aD=e=>e,oD=aD`
attribute vec2 a_position;
attribute vec2 a_texCoord;

varying vec2 v_texCoord;

void main() {
   // convert the rectangle from pixels to 0.0 to 1.0
   vec2 zeroToOne = a_position;

   // convert from 0->1 to 0->2
   vec2 zeroToTwo = zeroToOne * 2.0;

   // convert from 0->2 to -1->+1 (clipspace)
   vec2 clipSpace = zeroToTwo - 1.0;

   gl_Position = vec4(clipSpace * vec2(1, 1), 0, 1);

   // pass the texCoord to the fragment shader
   // The GPU will interpolate this value between points.
   v_texCoord = a_texCoord;
}
`,sD=aD`
precision mediump float;

// our texture
uniform sampler2D u_image;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

void main() {
   	vec4 tex = texture2D(u_image, v_texCoord);
	gl_FragColor = vec4(tex.rgb, tex.a);
}
`,cD=class{constructor(e,t){this.gl=t,this.layer=e,this.program=nD(this.gl,oD,sD),this.programInfo={attribLocations:{a_position:this.gl.getAttribLocation(this.program,`a_position`),a_texCoord:this.gl.getAttribLocation(this.program,`a_texCoord`)}},this._createVAOs()}render(e){let t=this.gl,n=e.getBaseLayer();t.viewport(0,0,n.framebufferWidth,n.framebufferHeight);let r=this.layer.getTextureType(),i=t.getParameter(t.TEXTURE_BINDING_2D),a=t.getParameter(t.ACTIVE_TEXTURE);if(r===LE.texture)t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.layer.colorTextures[0]),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST);else throw Error(`Created a texture projection renderer instead of a texture-array projection renderer for a texture-array layer.
This is probably an error with the polyfill itself; please file an issue on Github if you run into this.`);for(let r of e.internalViews){let e=n.getViewport(r);t.viewport(e.x,e.y,e.width,e.height),this._shouldUseStereoTexturePoints()?this._renderInternalStereo(r):this._renderInternal()}t.activeTexture(a),t.bindTexture(t.TEXTURE_2D,i)}_renderInternal(){let e=this.gl,t=e.getParameter(e.CURRENT_PROGRAM);e.useProgram(this.program),this.vaoGl.bindVertexArray(this.vao);var n=e.TRIANGLES;e.drawArrays(n,0,6),this.vaoGl.bindVertexArray(null),e.useProgram(t)}_renderInternalStereo(e){if(e.eye===`none`)return this._renderInternal();let t=this.gl;this.vaoGl.bindVertexArray(this.vao);let n=t.getParameter(t.CURRENT_PROGRAM);t.useProgram(this.program),this._setStereoTextureBuffer(+(e.eye===`right`));var r=t.TRIANGLES;t.drawArrays(r,0,6),this.vaoGl.bindVertexArray(null),t.useProgram(n)}_createVAOs(){this._createTextureUVs();let e=this.gl;this.vaoGl=iD(e);let t=e.createBuffer();this.vao=this.vaoGl.createVertexArray(),this.vaoGl.bindVertexArray(this.vao),e.enableVertexAttribArray(this.programInfo.attribLocations.a_position),e.bindBuffer(e.ARRAY_BUFFER,t),rD(e,0,0,1,1);let n=e.FLOAT;e.vertexAttribPointer(this.programInfo.attribLocations.a_position,2,n,!1,0,0),this.texcoordBuffer=e.createBuffer(),e.enableVertexAttribArray(this.programInfo.attribLocations.a_texCoord),e.bindBuffer(e.ARRAY_BUFFER,this.texcoordBuffer),e.bufferData(e.ARRAY_BUFFER,this.texturePoints,e.DYNAMIC_DRAW),e.vertexAttribPointer(this.programInfo.attribLocations.a_texCoord,2,n,!1,0,0),this.vaoGl.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)}_setStereoTextureBuffer(e){let t=this.gl;t.enableVertexAttribArray(this.programInfo.attribLocations.a_texCoord),t.bindBuffer(t.ARRAY_BUFFER,this.texcoordBuffer),t.bufferData(t.ARRAY_BUFFER,this.stereoTexturePoints[e],t.STATIC_DRAW);var n=2,r=t.FLOAT;t.vertexAttribPointer(this.programInfo.attribLocations.a_texCoord,n,r,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,null)}_createTextureUVs(){this.texturePoints=new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]);let e={x:0,y:0,width:1,height:1};this._shouldUseStereoTexturePoints()&&(this.stereoTexturePoints=[],eD(e,this.layer.colorTexturesMeta[0],this.layer.layout,0,2),this.stereoTexturePoints[0]=this._offsetTextureUVsByRect(this.layer.colorTexturesMeta[0],this.texturePoints,e),eD(e,this.layer.colorTexturesMeta[0],this.layer.layout,1,2),this.stereoTexturePoints[1]=this._offsetTextureUVsByRect(this.layer.colorTexturesMeta[0],this.texturePoints,e))}_offsetTextureUVsByRect(e,t,n){n??={x:0,y:0,width:e.width,height:e.height};let r=n.x/e.width,i=n.y/e.height,a=n.width/e.width,o=n.height/e.height,s=[];for(let e=0;e<t.length;e+=2){let n=t[e],c=t[e+1],l=n*a+r,u=c*o+i;s[e]=l,s[e+1]=u}return new Float32Array(s)}_shouldUseStereoTexturePoints(){return this.layer.layout===Q[`stereo-left-right`]||this.layer.layout===Q[`stereo-top-bottom`]}},lD=aD`#version 300 es

in vec2 a_position;
in vec2 a_texCoord;

out vec2 v_texCoord;

void main() {
	// convert the rectangle from pixels to 0.0 to 1.0
	vec2 zeroToOne = a_position;

	// convert from 0->1 to 0->2
	vec2 zeroToTwo = zeroToOne * 2.0;

	// convert from 0->2 to -1->+1 (clipspace)
	vec2 clipSpace = zeroToTwo - 1.0;

	gl_Position = vec4(clipSpace * vec2(1, 1), 0, 1);

	// pass the texCoord to the fragment shader
	// The GPU will interpolate this value between points.
	v_texCoord = a_texCoord;
}
`,uD=aD`#version 300 es
precision mediump float;
precision mediump int;
precision mediump sampler2DArray;

uniform sampler2DArray u_image;
uniform int u_layer;

in vec2 v_texCoord;

out vec4 fragColor;

void main() {
	vec4 tex = texture(u_image, vec3(v_texCoord.x, v_texCoord.y, u_layer));
 	fragColor = vec4(tex.rgb, tex.a);
}

`,dD=class extends cD{constructor(e,t){super(e,t),this.program=nD(this.gl,lD,uD),this._createVAOs(),this.u_layerInfo=this.gl.getUniformLocation(this.program,`u_layer`)}render(e){let t=this.gl;if(this.layer.getTextureType()===LE.texture)throw Error(`Using texture array projection renderer on a layer without texture array.`);let n=e.getBaseLayer(),r=t.getParameter(t.TEXTURE_BINDING_2D_ARRAY);t.bindTexture(t.TEXTURE_2D_ARRAY,this.layer.colorTextures[0]),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MIN_FILTER,t.LINEAR);for(let r of e.internalViews){let i=e.getViewIndex(r),a=n.getViewport(r);t.viewport(a.x,a.y,a.width,a.height),this._renderInternal(i)}t.bindTexture(t.TEXTURE_2D_ARRAY,r)}_renderInternal(e=0){let t=this.gl,n=t.getParameter(t.CURRENT_PROGRAM);t.useProgram(this.program),t.bindVertexArray(this.vao),t.uniform1i(this.u_layerInfo,e);var r=t.TRIANGLES;t.drawArrays(r,0,6),t.bindVertexArray(null),t.useProgram(n)}},fD=(e,t)=>e.getTextureType()===LE[`texture-array`]&&t instanceof WebGL2RenderingContext?new dD(e,t):new cD(e,t),pD=typeof Float32Array<`u`?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});function mD(){var e=new pD(16);return pD!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function hD(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15],y=n[0],b=n[1],x=n[2],S=n[3];return e[0]=y*r+b*s+x*d+S*h,e[1]=y*i+b*c+x*f+S*g,e[2]=y*a+b*l+x*p+S*_,e[3]=y*o+b*u+x*m+S*v,y=n[4],b=n[5],x=n[6],S=n[7],e[4]=y*r+b*s+x*d+S*h,e[5]=y*i+b*c+x*f+S*g,e[6]=y*a+b*l+x*p+S*_,e[7]=y*o+b*u+x*m+S*v,y=n[8],b=n[9],x=n[10],S=n[11],e[8]=y*r+b*s+x*d+S*h,e[9]=y*i+b*c+x*f+S*g,e[10]=y*a+b*l+x*p+S*_,e[11]=y*o+b*u+x*m+S*v,y=n[12],b=n[13],x=n[14],S=n[15],e[12]=y*r+b*s+x*d+S*h,e[13]=y*i+b*c+x*f+S*g,e[14]=y*a+b*l+x*p+S*_,e[15]=y*o+b*u+x*m+S*v,e}function gD(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,s=r+r,c=i+i,l=n*o,u=r*o,d=r*s,f=i*o,p=i*s,m=i*c,h=a*o,g=a*s,_=a*c;return e[0]=1-d-m,e[1]=u+_,e[2]=f-g,e[3]=0,e[4]=u-_,e[5]=1-l-m,e[6]=p+h,e[7]=0,e[8]=f+g,e[9]=p-h,e[10]=1-l-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function _D(){var e=new pD(2);return pD!=Float32Array&&(e[0]=0,e[1]=0),e}(function(){var e=_D();return function(t,n,r,i,a,o){var s,c;for(n||=2,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}})();var vD=e=>e,yD=vD`
attribute vec4 a_position;
attribute vec2 a_texCoord;

uniform mat4 u_matrix;
uniform mat4 u_projectionMatrix;

varying vec2 v_texCoord;

void main() {
  // Multiply the position by the matrix.
  gl_Position = u_projectionMatrix * u_matrix * a_position;

   // pass the texCoord to the fragment shader
   // The GPU will interpolate this value between points.
   v_texCoord = a_texCoord;
}
`,bD=vD`
precision mediump float;

// our texture
uniform sampler2D u_image;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

void main() {
   	vec4 tex = texture2D(u_image, v_texCoord);
	gl_FragColor = vec4(tex.rgb, tex.a);
	// gl_FragColor = vec4(1.0, 0, 0, 1.0);
}
`,xD=vD`#version 300 es

in vec4 a_position;
in vec2 a_texCoord;

uniform mat4 u_matrix;
uniform mat4 u_projectionMatrix;

out vec2 v_texCoord;

void main() {
	// Multiply the position by the matrix.
    gl_Position = u_projectionMatrix * u_matrix * a_position;

	// pass the texCoord to the fragment shader
	// The GPU will interpolate this value between points.
	v_texCoord = a_texCoord;
}
`,SD=vD`#version 300 es
precision mediump float;
precision mediump int;
precision mediump sampler2DArray;

uniform sampler2DArray u_image;
uniform int u_layer;

in vec2 v_texCoord;

out vec4 fragColor;

void main() {
	vec4 tex = texture(u_image, vec3(v_texCoord.x, v_texCoord.y, u_layer));
 	fragColor = vec4(tex.rgb, tex.a);
}

`,CD=class{constructor(e,t){this.usesTextureArrayShaders=!1,this.savedVaoState={vao:null,arrayBuffer:null},this.hasMipmap=!1,this.gl=t,this.layer=e;let n=this.gl;this.transformMatrix=mD(),t instanceof WebGL2RenderingContext&&this.layer.getTextureType()===LE[`texture-array`]&&(this.usesTextureArrayShaders=!0),this.usesTextureArrayShaders?this.program=nD(n,xD,SD):this.program=nD(n,yD,bD),this.programInfo={attribLocations:{a_position:n.getAttribLocation(this.program,`a_position`),a_texCoord:n.getAttribLocation(this.program,`a_texCoord`)},uniformLocations:{u_matrix:n.getUniformLocation(this.program,`u_matrix`),u_projectionMatrix:n.getUniformLocation(this.program,`u_projectionMatrix`)}},this.usesTextureArrayShaders&&(this.programInfo.uniformLocations.u_layer=n.getUniformLocation(this.program,`u_layer`))}saveVaoState(){this.savedVaoState.vao=this.gl.getParameter(this.vaoGl.VERTEX_ARRAY_BINDING),this.savedVaoState.arrayBuffer=this.gl.getParameter(this.gl.ARRAY_BUFFER_BINDING)}restoreVaoState(){this.vaoGl.bindVertexArray(this.savedVaoState.vao),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.savedVaoState.arrayBuffer),this.savedVaoState.vao=this.savedVaoState.arrayBuffer=null}initialize(){let e=this.gl;if(this.layer.isMediaLayer()){this.mediaTexture=e.createTexture(),this.mediaTexturePolyfill={texture:this.mediaTexture,textureFormat:e.RGBA,width:this.layer.media.videoWidth,height:this.layer.media.videoHeight,type:LE.texture};let t=e.getParameter(e.TEXTURE_BINDING_2D);e.bindTexture(e.TEXTURE_2D,this.mediaTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.layer.media.videoWidth,this.layer.media.videoHeight,0,e.RGBA,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,t)}this._createVAOs()}render(e,t){this.saveVaoState();let n=this.gl,r=e.getBaseLayer(),i=t.getViewerPose(e.getReferenceSpace()),a=n.getParameter(n.ACTIVE_TEXTURE);for(let o of i.views){let i=r.getViewport(o);if(n.viewport(i.x,i.y,i.width,i.height),n.activeTexture(n.TEXTURE0),this.usesTextureArrayShaders){if(n instanceof WebGLRenderingContext)throw Error(`This should never happen; texture-arrays only supported on WebGL2.`);if(this.layer.isMediaLayer())throw Error(`This should never happen. Media layers should never be created with texture-array`);let r=n.getParameter(n.TEXTURE_BINDING_2D_ARRAY);n.bindTexture(n.TEXTURE_2D_ARRAY,this.layer.colorTextures[0]),this.layer.isStatic?(this.layer.needsRedraw===!0&&n.generateMipmap(n.TEXTURE_2D_ARRAY),this.hasMipmap=!0):this.hasMipmap=this.layer.mipLevels>0,n.texParameteri(n.TEXTURE_2D_ARRAY,n.TEXTURE_MAG_FILTER,this.hasMipmap?n.LINEAR_MIPMAP_LINEAR:n.LINEAR),n.texParameteri(n.TEXTURE_2D_ARRAY,n.TEXTURE_MIN_FILTER,this.hasMipmap?n.LINEAR_MIPMAP_LINEAR:n.LINEAR);let i=0;if(this.layer.layout===Q.stereo)switch(o.eye){case`right`:i=1;break}this._shouldUseStereoTexturePoints()?this._renderInternalStereo(e,t,o,i):this._renderInternal(e,t,o,i),n.activeTexture(a),n.bindTexture(n.TEXTURE_2D_ARRAY,r)}else{let r=n.getParameter(n.TEXTURE_BINDING_2D);if(this.layer.isMediaLayer())n.bindTexture(n.TEXTURE_2D,this.mediaTexture),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texSubImage2D(n.TEXTURE_2D,0,0,0,this.layer.media.videoWidth,this.layer.media.videoHeight,n.RGBA,n.UNSIGNED_BYTE,this.layer.media);else if(this.layer.layout===Q.stereo)switch(o.eye){case`right`:n.bindTexture(n.TEXTURE_2D,this.layer.colorTextures[1]);break;default:n.bindTexture(n.TEXTURE_2D,this.layer.colorTextures[0])}else n.bindTexture(n.TEXTURE_2D,this.layer.colorTextures[0]);this.layer.isStatic?(this.layer.needsRedraw===!0&&n.generateMipmap(n.TEXTURE_2D),this.hasMipmap=!0):this.hasMipmap=this.layer.mipLevels>0,n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,this.hasMipmap?n.LINEAR_MIPMAP_LINEAR:n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,this.hasMipmap?n.LINEAR_MIPMAP_LINEAR:n.LINEAR),this._shouldUseStereoTexturePoints()?this._renderInternalStereo(e,t,o):this._renderInternal(e,t,o),n.activeTexture(a),n.bindTexture(n.TEXTURE_2D,r)}}this.restoreVaoState()}createPositionPoints(){return new Float32Array([])}createTextureUVs(){return new Float32Array([])}_offsetTextureUVsByRect(e,t,n){n??={x:0,y:0,width:e.width,height:e.height};let r=n.x/e.width,i=n.y/e.height,a=n.width/e.width,o=n.height/e.height,s=[];for(let e=0;e<t.length;e+=2){let n=t[e],c=t[e+1],l=n*a+r,u=c*o+i;s[e]=l,s[e+1]=u}return new Float32Array(s)}_shouldUseStereoTexturePoints(){return this.layer.layout===Q[`stereo-left-right`]||this.layer.layout===Q[`stereo-top-bottom`]}_setStereoTextureBuffer(e){let t=this.gl;t.enableVertexAttribArray(this.programInfo.attribLocations.a_texCoord),t.bindBuffer(t.ARRAY_BUFFER,this.texcoordBuffer),t.bufferData(t.ARRAY_BUFFER,this.stereoTexturePoints[e],t.STATIC_DRAW);var n=2,r=t.FLOAT;t.vertexAttribPointer(this.programInfo.attribLocations.a_texCoord,n,r,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,null)}_recalculateVertices(){this.positionPoints=this.createPositionPoints(),this.texturePoints=this.createTextureUVs();let e={x:0,y:0,width:1,height:1};if(this._shouldUseStereoTexturePoints()){if(this.stereoTexturePoints=[],this.layer.isMediaLayer()){eD(e,this.mediaTexturePolyfill,this.layer.layout,0,2),this.stereoTexturePoints[0]=this._offsetTextureUVsByRect(this.mediaTexturePolyfill,this.texturePoints,e),eD(e,this.mediaTexturePolyfill,this.layer.layout,1,2),this.stereoTexturePoints[1]=this._offsetTextureUVsByRect(this.mediaTexturePolyfill,this.texturePoints,e),this.layer.layout===Q[`stereo-top-bottom`]&&([this.stereoTexturePoints[0],this.stereoTexturePoints[1]]=[this.stereoTexturePoints[1],this.stereoTexturePoints[0]]);return}eD(e,this.layer.colorTexturesMeta[0],this.layer.layout,0,2),this.stereoTexturePoints[0]=this._offsetTextureUVsByRect(this.layer.colorTexturesMeta[0],this.texturePoints,e),eD(e,this.layer.colorTexturesMeta[0],this.layer.layout,1,2),this.stereoTexturePoints[1]=this._offsetTextureUVsByRect(this.layer.colorTexturesMeta[0],this.texturePoints,e),this.layer.layout===Q[`stereo-top-bottom`]&&([this.stereoTexturePoints[0],this.stereoTexturePoints[1]]=[this.stereoTexturePoints[1],this.stereoTexturePoints[0]])}}_createVAOs(){this._recalculateVertices();let e=this.gl;this.vaoGl=iD(e),this.saveVaoState();let t=e.createBuffer();this.vao=this.vaoGl.createVertexArray(),this.vaoGl.bindVertexArray(this.vao),e.enableVertexAttribArray(this.programInfo.attribLocations.a_position),e.bindBuffer(e.ARRAY_BUFFER,t);let n=this.positionPoints;e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW);var r=3,i=e.FLOAT,a=!1,o=0,s=0;e.vertexAttribPointer(this.programInfo.attribLocations.a_position,r,i,a,o,s),e.enableVertexAttribArray(this.programInfo.attribLocations.a_texCoord),this.texcoordBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.texcoordBuffer),e.bufferData(e.ARRAY_BUFFER,this.texturePoints,e.STATIC_DRAW);var r=2,i=e.FLOAT,a=!1,o=0,s=0;e.vertexAttribPointer(this.programInfo.attribLocations.a_texCoord,r,i,a,o,s),this.restoreVaoState()}_renderInternal(e,t,n,r){let i=this.gl,a=i.getParameter(i.CURRENT_PROGRAM);i.useProgram(this.program),this.vaoGl.bindVertexArray(this.vao),this.usesTextureArrayShaders&&i.uniform1i(this.programInfo.uniformLocations.u_layer,r),this._setTransformMatrix(e,t,n),i.uniformMatrix4fv(this.programInfo.uniformLocations.u_matrix,!1,this.transformMatrix),i.uniformMatrix4fv(this.programInfo.uniformLocations.u_projectionMatrix,!1,n.projectionMatrix);var o=i.TRIANGLES,s=0,c=this.positionPoints.length/3;i.drawArrays(o,s,c),this.vaoGl.bindVertexArray(null),i.useProgram(a)}_renderInternalStereo(e,t,n,r){if(n.eye===`none`)return this._renderInternal(e,t,n);let i=this.gl;this.vaoGl.bindVertexArray(this.vao);let a=i.getParameter(i.CURRENT_PROGRAM);i.useProgram(this.program),this._setStereoTextureBuffer(+(n.eye===`right`)),this.usesTextureArrayShaders&&i.uniform1i(this.programInfo.uniformLocations.u_layer,r),this._setTransformMatrix(e,t,n),i.uniformMatrix4fv(this.programInfo.uniformLocations.u_matrix,!1,this.transformMatrix),i.uniformMatrix4fv(this.programInfo.uniformLocations.u_projectionMatrix,!1,n.projectionMatrix);var o=i.TRIANGLES,s=0,c=this.positionPoints.length/3;i.drawArrays(o,s,c),this.vaoGl.bindVertexArray(null),i.useProgram(a)}_setTransformMatrix(e,t,n){let r=t.getPose(this.layer.space,e.getReferenceSpace());hD(this.transformMatrix,r.transform.matrix,this.layer.transform.matrix),hD(this.transformMatrix,n.transform.inverse.matrix,this.transformMatrix)}},wD=class extends CD{constructor(e,t){super(e,t),this.initialize()}createPositionPoints(){let e=this.layer.width,t=this.layer.height,n=[-e,-t,0,e,-t,0,-e,t,0,-e,t,0,e,-t,0,e,t,0];return new Float32Array(n)}createTextureUVs(){return new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1])}},TD=class extends CD{constructor(e,t){super(e,t),this.segments=16,this.initialize()}createPositionPoints(){let e=[],t=this.layer.centralAngle,n=this.layer.height,r=this.layer.radius,i=t/this.segments,a=Math.PI/2-t/2,o=[],s=_D();s[0]=r*Math.cos(a),s[1]=-r*Math.sin(a),o.push(s);for(let e=0;e<this.segments;e++){let t=_D();t[0]=r*Math.cos(a+i*(e+1)),t[1]=-r*Math.sin(a+i*(e+1)),o.push(t)}o.reverse();for(let t=0;t<this.segments;t++){let r=o[t],i=o[t+1];e.push(r[0],-n/2,r[1]),e.push(i[0],-n/2,i[1]),e.push(r[0],n/2,r[1]),e.push(r[0],n/2,r[1]),e.push(i[0],-n/2,i[1]),e.push(i[0],n/2,i[1])}return new Float32Array(e)}createTextureUVs(){let e=[],t=1/this.segments;for(let n=0;n<this.segments;n++){let r=t*n,i=t*(n+1);e.push(r,0),e.push(i,0),e.push(r,1),e.push(r,1),e.push(i,0),e.push(i,1)}return new Float32Array(e)}},ED=class extends CD{constructor(e,t){super(e,t),this.segmentsPerAxis=40,this.initialize()}createPositionPoints(){let e=[],t=this.layer.radius;t===0&&(t=25),t>25&&(t=25);let n=this.layer.centralHorizontalAngle,r=this.layer.upperVerticalAngle+Math.PI/2,i=this.layer.lowerVerticalAngle+Math.PI/2,a=r,o=i,s=Math.PI/2-n/2,c=s+n,l=o-a,u=c-s,d=[];for(let e=0;e<=this.segmentsPerAxis;e++)for(let n=0;n<=this.segmentsPerAxis;n++){let r=n/this.segmentsPerAxis,i=e/this.segmentsPerAxis,o=t,s=c-u*r,f=l*i+a,p=Math.cos(s)*Math.sin(f),m=Math.cos(f),h=-Math.sin(s)*Math.sin(f);d.push([o*p,o*m,o*h])}let f=this.segmentsPerAxis+1;for(let t=0;t<this.segmentsPerAxis;t++)for(let n=0;n<this.segmentsPerAxis;n++)e.push(...d[n*f+t]),e.push(...d[n*f+t+1]),e.push(...d[(n+1)*f+t]),e.push(...d[(n+1)*f+t]),e.push(...d[n*f+t+1]),e.push(...d[(n+1)*f+t+1]);return new Float32Array(e)}createTextureUVs(){let e=[],t=[];for(let e=0;e<=this.segmentsPerAxis;e++)for(let n=0;n<=this.segmentsPerAxis;n++){let r=n/this.segmentsPerAxis,i=e/this.segmentsPerAxis;t.push([r,i])}let n=this.segmentsPerAxis+1;for(let r=0;r<this.segmentsPerAxis;r++)for(let i=0;i<this.segmentsPerAxis;i++)e.push(...t[i*n+r]),e.push(...t[i*n+r+1]),e.push(...t[(i+1)*n+r]),e.push(...t[(i+1)*n+r]),e.push(...t[i*n+r+1]),e.push(...t[(i+1)*n+r+1]);return new Float32Array(e)}},DD={colorFormat:6408,mipLevels:1,layout:Q.mono,isStatic:!1,space:null,viewPixelHeight:0,viewPixelWidth:0},OD=class extends VE{constructor(e=DD){if(super(),!RE(e.space))throw TypeError(`XRCubeLayer's space needs to be an XRReferenceSpace`);switch(this.init=Object.assign(Object.assign({},DD),e),this.space=this.init.space,this.isStatic=this.init.isStatic,this.init.orientation?this.orientation=DOMPointReadOnly.fromPoint(this.init.orientation):this.orientation=new DOMPointReadOnly,this.init.layout){case Q.default:case Q[`stereo-left-right`]:case Q[`stereo-top-bottom`]:throw TypeError(`Invalid layout format for XRCubeLayer`)}this.layout=this.init.layout,this.needsRedraw=!0}initialize(e,t){super.initialize(e,t),this._allocateColorTexturesInternal(),this._allocateDepthStencilTexturesInternal()}_allocateColorTexturesInternal(){if(this._colorTextures=[],this._texturesMeta=[],this.layout===Q.mono){let e=this._createCubeColorTexture();this._texturesMeta.push(e),this._colorTextures.push(e.texture);return}else{let e=this._createCubeColorTexture(),t=this._createCubeColorTexture();this._texturesMeta.push(e,t),this._colorTextures.push(e.texture,t.texture);return}}_allocateDepthStencilTexturesInternal(){if(this._depthStencilTextures=[],this.init.depthFormat){if(this.context instanceof WebGLRenderingContext&&!this.context.getExtension(`WEBGL_depth_texture`))throw TypeError(`Depth textures not supported in the current context`);if(this.layout===Q.mono){let e=this._createCubeDepthTexture();this._depthStencilTextures.push(e.texture);return}else{let e=this._createCubeDepthTexture(),t=this._createCubeDepthTexture();this._depthStencilTextures.push(e.texture,t.texture);return}}}_createCubeColorTexture(){let e=this.context.createTexture(),t={width:this.init.viewPixelWidth,height:this.init.viewPixelHeight,layers:1,type:LE.texture,textureFormat:this.init.colorFormat,texture:e},n=this.context.getParameter(this.context.TEXTURE_BINDING_CUBE_MAP);this.context.bindTexture(this.context.TEXTURE_CUBE_MAP,e);for(let e=0;e<6;e++)this.context.texImage2D(this.context.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,t.textureFormat,t.width,t.height,0,t.textureFormat,this.context.UNSIGNED_BYTE,null);return this.context.bindTexture(this.context.TEXTURE_CUBE_MAP,n),t}_createCubeDepthTexture(){let e=this.context.createTexture(),t={width:this.init.viewPixelWidth,height:this.init.viewPixelHeight,layers:1,type:LE.texture,textureFormat:this.init.depthFormat,texture:e},n=this.context.getParameter(this.context.TEXTURE_BINDING_CUBE_MAP);this.context.bindTexture(this.context.TEXTURE_CUBE_MAP,e);let r=this.init.depthFormat;this.context instanceof WebGL2RenderingContext&&(r===this.context.DEPTH_COMPONENT&&(r=this.context.DEPTH_COMPONENT24),r===this.context.DEPTH_STENCIL&&(r=this.context.DEPTH24_STENCIL8));for(let e=0;e<6;e++)this.context.texImage2D(this.context.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,r,t.width,t.height,0,t.textureFormat,this.context.UNSIGNED_INT,null);return this.context.bindTexture(this.context.TEXTURE_CUBE_MAP,n),t}getTextureType(){return LE.texture}},kD=e=>e,AD=kD`
attribute vec4 a_position;
uniform mat4 u_projectionMatrix;
uniform mat4 u_matrix;
varying vec3 v_normal;

void main() {
   gl_Position = u_projectionMatrix * u_matrix * a_position;

   v_normal = normalize(a_position.xyz);
}
`,jD=kD`
precision mediump float;

varying vec3 v_normal;

uniform samplerCube u_texture;

void main() {
   gl_FragColor = textureCube(u_texture, normalize(v_normal));
}
`,MD=class{constructor(e,t){this.savedVaoState={vao:null,arrayBuffer:null},this.hasMipmap=!1,this.layer=e,this.gl=t,this.transformMatrix=mD(),this.program=nD(t,AD,jD),this.programInfo={attribLocations:{a_position:t.getAttribLocation(this.program,`a_position`)},uniformLocations:{u_matrix:t.getUniformLocation(this.program,`u_matrix`),u_texture:t.getUniformLocation(this.program,`u_texture`),u_projectionMatrix:t.getUniformLocation(this.program,`u_projectionMatrix`)}},this._createVAOs()}saveVaoState(){this.savedVaoState.vao=this.gl.getParameter(this.vaoGl.VERTEX_ARRAY_BINDING),this.savedVaoState.arrayBuffer=this.gl.getParameter(this.gl.ARRAY_BUFFER_BINDING)}restoreVaoState(){this.vaoGl.bindVertexArray(this.savedVaoState.vao),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.savedVaoState.arrayBuffer),this.savedVaoState.vao=this.savedVaoState.arrayBuffer=null}render(e,t){this.saveVaoState();let n=this.gl,r=e.getBaseLayer(),i=t.getViewerPose(e.getReferenceSpace()),a=n.getParameter(n.ACTIVE_TEXTURE);for(let e of i.views){let t=r.getViewport(e);n.viewport(t.x,t.y,t.width,t.height),n.activeTexture(n.TEXTURE0);let i=n.getParameter(n.TEXTURE_BINDING_CUBE_MAP);if(this.layer.layout===Q.stereo){let t=+(e.eye===`right`);n.bindTexture(n.TEXTURE_CUBE_MAP,this.layer.colorTextures[t])}else n.bindTexture(n.TEXTURE_CUBE_MAP,this.layer.colorTextures[0]);this.layer.isStatic?(this.layer.needsRedraw===!0&&n.generateMipmap(n.TEXTURE_CUBE_MAP),this.hasMipmap=!0):this.hasMipmap=this.layer.mipLevels>0,n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,this.hasMipmap?n.LINEAR_MIPMAP_LINEAR:n.LINEAR),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,this.hasMipmap?n.LINEAR_MIPMAP_LINEAR:n.LINEAR),this._renderInternal(this.layer.orientation,e),n.activeTexture(a),n.bindTexture(n.TEXTURE_CUBE_MAP,i)}this.restoreVaoState()}createPositionPoints(){let e=.5;return new Float32Array([-.5,-.5,-.5,-.5,e,-.5,e,-.5,-.5,-.5,e,-.5,e,e,-.5,e,-.5,-.5,-.5,-.5,e,e,-.5,e,-.5,e,e,-.5,e,e,e,-.5,e,e,e,e,-.5,e,-.5,-.5,e,e,e,e,-.5,-.5,e,e,e,e,e,e,e,-.5,-.5,-.5,-.5,e,-.5,-.5,-.5,-.5,e,-.5,-.5,e,e,-.5,-.5,e,-.5,e,-.5,-.5,-.5,-.5,-.5,e,-.5,e,-.5,-.5,-.5,e,-.5,e,e,-.5,e,-.5,e,-.5,-.5,e,e,-.5,e,-.5,e,e,-.5,e,e,e,-.5,e,e,e])}_renderInternal(e,t){let n=this.gl,r=n.getParameter(n.CURRENT_PROGRAM);n.useProgram(this.program),this.vaoGl.bindVertexArray(this.vao),gD(this.transformMatrix,[e.x,e.y,e.z,e.w]),this._poseOrientationMatrix||=mD(),gD(this._poseOrientationMatrix,[t.transform.inverse.orientation.x,t.transform.inverse.orientation.y,t.transform.inverse.orientation.z,t.transform.inverse.orientation.w]),hD(this.transformMatrix,this.transformMatrix,this._poseOrientationMatrix),n.uniformMatrix4fv(this.programInfo.uniformLocations.u_matrix,!1,this.transformMatrix),n.uniformMatrix4fv(this.programInfo.uniformLocations.u_projectionMatrix,!1,t.projectionMatrix),n.uniform1i(this.programInfo.uniformLocations.u_texture,0);var i=n.TRIANGLES,a=0,o=this.positionPoints.length/3;n.drawArrays(i,a,o),this.vaoGl.bindVertexArray(null),n.useProgram(r)}_recalculateVertices(){this.positionPoints=this.createPositionPoints()}_createVAOs(){this._recalculateVertices();let e=this.gl;this.vaoGl=iD(e),this.saveVaoState();let t=e.createBuffer();this.vao=this.vaoGl.createVertexArray(),this.vaoGl.bindVertexArray(this.vao),e.enableVertexAttribArray(this.programInfo.attribLocations.a_position),e.bindBuffer(e.ARRAY_BUFFER,t);let n=this.positionPoints;e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW);var r=3,i=e.FLOAT;e.vertexAttribPointer(this.programInfo.attribLocations.a_position,r,i,!1,0,0),this.restoreVaoState()}},ND=class{constructor(){this.mode=`inline`,this.layers=[],this.views=[],this.initializedViews=!1,this.isPolyfillActive=!1,this.taskQueue=[]}requestAnimationFrame(e){this.injectedFrameCallback||=(t,n)=>{let r=this.context;if(!this.initializedViews&&this.referenceSpace){let e=n.getViewerPose(this.referenceSpace);e&&(this.views=e.views,this.initializedViews=!0)}if(this.isPolyfillActive&&this.initializedViews){this.tempFramebuffer||=r.createFramebuffer(),r.bindFramebuffer(r.FRAMEBUFFER,this.tempFramebuffer);let e=r.getParameter(r.COLOR_CLEAR_VALUE),t=r.getParameter(r.FRAMEBUFFER_BINDING);r.clearColor(0,0,0,0);for(let e of this.layers)if(e instanceof $E)for(let t=0;t<e.colorTextures.length;t++)e.colorTexturesMeta[t].type===LE[`texture-array`]||(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e.colorTextures[t],0),e.depthStencilTextures&&t<e.depthStencilTextures.length?r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,e.depthStencilTextures[t],0):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,null,0),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT));r.bindFramebuffer(r.FRAMEBUFFER,t),r.clearColor(e[0],e[1],e[2],e[3])}if(e(t,n),this.isPolyfillActive&&this.initializedViews){let e=r.isEnabled(r.BLEND),t=r.isEnabled(r.DEPTH_TEST),i=r.isEnabled(r.CULL_FACE),a=r.getParameter(r.FRAMEBUFFER_BINDING),o=r.getParameter(r.COLOR_CLEAR_VALUE);r.bindFramebuffer(r.FRAMEBUFFER,this.getBaseLayer().framebuffer),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.clearColor(o[0],o[1],o[2],o[3]),r.enable(r.BLEND),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE);let s=r.getParameter(r.BLEND_SRC_RGB),c=r.getParameter(r.BLEND_SRC_ALPHA),l=r.getParameter(r.BLEND_DST_RGB),u=r.getParameter(r.BLEND_DST_ALPHA);r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA);for(let e of this.layers)if(this.renderers||=new WeakMap,e instanceof $E)this.renderers.has(e)||this.renderers.set(e,fD(e,this.context)),this.renderers.get(e).render(this);else if(e instanceof XE)this.renderers.has(e)||this.renderers.set(e,new wD(e,this.context)),this.renderers.get(e).render(this,n);else if(e instanceof WE)this.renderers.has(e)||this.renderers.set(e,new TD(e,this.context)),this.renderers.get(e).render(this,n);else if(e instanceof qE)this.renderers.has(e)||this.renderers.set(e,new ED(e,this.context)),this.renderers.get(e).render(this,n);else if(e instanceof OD)this.renderers.has(e)||this.renderers.set(e,new MD(e,this.context)),this.renderers.get(e).render(this,n);else{let t=e;if(t.framebuffer===null)continue;r instanceof WebGL2RenderingContext?(r.bindFramebuffer(r.READ_FRAMEBUFFER,t.framebuffer),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,this.getBaseLayer().framebuffer),r.blitFramebuffer(0,0,t.framebufferWidth,t.framebufferHeight,0,0,this.getBaseLayer().framebufferWidth,this.getBaseLayer().framebufferHeight,r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT,r.LINEAR)):console.warn(`GL blitFramebuffer is not supported on WebGL1, so XRWebGLLayers may not show up properly when polyfilled.`)}for(e||r.disable(r.BLEND),t&&r.enable(r.DEPTH_TEST),i&&r.enable(r.CULL_FACE),r.blendFuncSeparate(s,l,c,u),r.bindFramebuffer(r.FRAMEBUFFER,a);this.taskQueue.length>0;)this.taskQueue.shift()()}},this._requestAnimationFrame(this.injectedFrameCallback)}updateRenderState(e){if(this.existingBaseLayer=e.baseLayer,e.layers&&(this.layers=e.layers),this.activeRenderState||this.createActiveRenderState(),this.activeRenderState=Object.assign(Object.assign({},this.activeRenderState),e),!e.layers){this._updateRenderState(e);return}let t=Object.assign({},e);delete t.layers;let n;for(let e of this.layers)if(e instanceof VE){n=e.getContext();break}if(!n&&!this.context){console.log(`No existing context! Have the session make one`);let e=document.createElement(`canvas`);if(n=e.getContext(`webgl2`,{xrCompatible:!0}),n||=e.getContext(`webgl`,{xrCompatible:!0}),!n)throw Error(`No webGL support detected.`);document.body.appendChild(n.canvas);function t(){n.canvas.width=n.canvas.clientWidth*window.devicePixelRatio,n.canvas.height=n.canvas.clientHeight*window.devicePixelRatio}window.addEventListener(`resize`,t),t()}this.createInternalLayer(n),this.isPolyfillActive=!0,this._updateRenderState(Object.assign(Object.assign({},t),{baseLayer:this.internalLayer}))}initializeSession(e){this.mode=e,this.requestReferenceSpace(`local`).then(e=>{this.referenceSpace=e}).catch(e=>{}),this.requestReferenceSpace(`viewer`).then(e=>{this.viewerSpace=e})}getBaseLayer(e){return!this.internalLayer&&!this.existingBaseLayer&&e&&this.createInternalLayer(e),this.internalLayer||this.existingBaseLayer}getReferenceSpace(){return this.referenceSpace?this.referenceSpace:this.viewerSpace}getViewerSpace(){return this.viewerSpace}queueTask(e){this.taskQueue.push(e)}get renderState(){return this.activeRenderState||this.createActiveRenderState(),this.activeRenderState}get internalViews(){return this.views}getViewIndex(e){for(let t=0;t<this.views.length;t++){let n=this.views[t];if(e.eye===n.eye&&e.recommendedViewportScale===n.recommendedViewportScale)return t}return-1}createInternalLayer(e){if(!e&&this.internalLayer||e===this.context&&this.internalLayer)return this.internalLayer;let t=zE();return this.internalLayer=new t.XRWebGLLayer(this,e),this.setContext(e),this.internalLayer}setContext(e){this.context=e,this.tempFramebuffer=e.createFramebuffer(),this.renderers=new WeakMap}createActiveRenderState(){let e=zE(),t=Object.getOwnPropertyNames(e.XRRenderState.prototype),n={};for(let e of t)n[e]=this._renderState[e];n.layers=[],this.activeRenderState=n}},PD=class{constructor(){this.viewport={x:0,y:0,width:0,height:0}}},FD=class{constructor(e,t){this.session=e,this.context=t,this.subImageCache=new ID}createProjectionLayer(e=QE){let t=new $E(e);if(this.session.ended)throw Error(`Session has ended`);if(this.context.isContextLost())throw Error(`context is lost`);return t.initialize(this.session,this.context),t}createQuadLayer(e=JE){if(this.session.ended)throw Error(`Session has ended`);if(this.context.isContextLost())throw Error(`context is lost`);if(e.layout===Q.default)throw TypeError(`Trying to create a quad layer with default layout`);let t=new XE(e);return t.initialize(this.session,this.context),t}createCylinderLayer(e=HE){if(this.session.ended)throw Error(`Session has ended`);if(this.context.isContextLost())throw Error(`context is lost`);if(e.layout===Q.default)throw TypeError(`Cylinder Layer cannot have a default layout`);let t=new WE(e);return t.initialize(this.session,this.context),t}createEquirectLayer(e=GE){if(this.session.ended)throw Error(`Session has ended`);if(this.context.isContextLost())throw Error(`context is lost`);if(e.layout===Q.default)throw TypeError(`Equirect Layer cannot have a default layout`);if(!RE(e.space))throw TypeError(`Equirect layer requires an XRReferenceSpace`);let t=new qE(e);return t.initialize(this.session,this.context),t}createCubeLayer(e){if(this.session.ended)throw Error(`Session has ended`);if(this.context.isContextLost())throw Error(`context is lost`);if(!(this.context instanceof WebGL2RenderingContext))throw Error(`XRCubeLayer only work on WebGL2`);if(!RE(e.space))throw TypeError(`XRCubeLayer requires a space of type XRReferenceSpace`);let t=new OD(e);return t.initialize(this.session,this.context),t}getSubImage(e,t,n=`none`){if(e.isStatic&&e.needsRedraw===!1)throw Error(`Invalid state for subimage creation`);let r=this.subImageCache.tryGetCachedSubImage(this.context,e,n);if(r)return r;let i=new PD;if(e instanceof $E||e.layout===Q.default)throw TypeError();if(!this.validateStateofSubImageCreation(e,t))throw Error(`Invalid state for subimage creation`);let a=0;if(e.layout===Q.stereo){if(n===`none`)throw TypeError();n===`right`&&(a=1)}e.getTextureType()===LE[`texture-array`]?i.imageIndex=a:i.imageIndex=0;let o=0;e.getTextureType()===LE.texture?(i.colorTexture=e.colorTextures[a],o=a):(i.colorTexture=e.colorTextures[0],o=0),!e.depthStencilTextures||!e.depthStencilTextures.length?i.depthStencilTexture=null:e.getTextureType()===LE.texture?i.depthStencilTexture=e.depthStencilTextures[a]:i.depthStencilTexture=e.depthStencilTextures[0];let s=e.colorTexturesMeta[o];i.textureWidth=s.width,i.textureHeight=s.height;let c=1;return(e.layout===Q[`stereo-left-right`]||e.layout===Q[`stereo-top-bottom`])&&(c=2),eD(i.viewport,s,e.layout,a,c),this.session.queueTask(()=>{e.needsRedraw=!1}),this.subImageCache.cacheSubImage(i,this.context,e,n),i}getViewSubImage(e,t){let n=this.subImageCache.tryGetCachedViewSubImage(this.context,e,t);if(n)return n;let r=new PD,i=this.session;if(!i.internalViews||!i.internalViews.length)return console.warn(`Tried to get view sub image before we have any views`),r;let a=i.getViewIndex(t),o=0;return e.getTextureType()===LE[`texture-array`]?r.imageIndex=a:r.imageIndex=0,e.layout===Q.default&&e.getTextureType()===LE.texture?(r.colorTexture=e.colorTextures[a],o=a):(r.colorTexture=e.colorTextures[0],o=0),e.depthStencilTextures.length===0?r.depthStencilTexture=null:e.layout===Q.default&&e.getTextureType()===LE.texture?r.depthStencilTexture=e.depthStencilTextures[a]:r.depthStencilTexture=e.depthStencilTextures[0],r.textureWidth=e.colorTexturesMeta[o].width,r.textureHeight=e.colorTexturesMeta[o].height,eD(r.viewport,e.colorTexturesMeta[o],e.layout,a,i.internalViews.length),e.needsRedraw=!1,this.subImageCache.cacheViewSubImage(r,this.context,e,t),r}validateStateofSubImageCreation(e,t){return!(t.session!==e.session||this.session!==e.session||this.context!==e.context||!e.colorTextures||!e.colorTextures.length||e.isStatic&&e.needsRedraw===!1)}},ID=class{constructor(){this.cache=new Map,this.viewCache=new Map}cacheSubImage(e,t,n,r){let i=new Map;i.set(r,e);let a=new Map;a.set(n,i),this.cache.set(t,a)}tryGetCachedSubImage(e,t,n){return(this.cache.get(e)?.get(t))?.get(n)}cacheViewSubImage(e,t,n,r){let i=new Map;i.set(r,e);let a=new Map;a.set(n,i),this.viewCache.set(t,a)}tryGetCachedViewSubImage(e,t,n){return(this.viewCache.get(e)?.get(t))?.get(n)}},LD=e=>e.navigator.xr?!!(e.XRMediaBinding&&e.XRWebGLBinding):!1,RD=class{constructor(){this.injected=!1;let e=zE();this._injectPolyfill(e)}_injectPolyfill(e){if(!(`xr`in e.navigator))throw Error(`WebXR Layers polyfill requires WebXR support.`);this.injected===!0&&console.warn(`Polyfill has already been injected...`),!LD(e)&&(this._polyfillRequiredLayersFeature(e),this._polyfillXRSession(e),e.XRWebGLBinding=FD,e.XRMediaBinding=ZE,this.injected=!0,console.log(`Injected Layers Polyfill`))}_polyfillXRSession(e){e.XRSession.prototype._updateRenderState=e.XRSession.prototype.updateRenderState,e.XRSession.prototype._requestAnimationFrame=e.XRSession.prototype.requestAnimationFrame;let t=Object.getOwnPropertyDescriptor(e.XRSession.prototype,`renderState`);Object.defineProperty(e.XRSession.prototype,"_renderState",t);let n=Object.getOwnPropertyDescriptor(ND.prototype,`renderState`);Object.defineProperty(e.XRSession.prototype,"renderState",n);let r=Object.getOwnPropertyNames(ND.prototype);for(let t of r){let n=Object.getOwnPropertyDescriptor(ND.prototype,t);Object.defineProperty(e.XRSession.prototype,t,n)}}_polyfillRequiredLayersFeature(e){let t=e.navigator.xr.requestSession;Object.defineProperty(e.navigator.xr,"requestSessionInternal",{writable:!0}),e.navigator.xr.requestSessionInternal=t;let n=(t,n)=>{let r=(n,r)=>e.navigator.xr.requestSessionInternal(n,r).then(e=>{Object.assign(e,new ND);let n=e;return n.initializeSession(t),Promise.resolve(n)});if(t!==`immersive-vr`||!n)return r(t,n);if(n.requiredFeatures&&n.requiredFeatures.indexOf(`layers`)>-1){let e=Object.assign({},n),i=[...n.requiredFeatures],a=i.indexOf(`layers`);return i.splice(a,1),e.requiredFeatures=i,r(t,e)}return r(t,n)};Object.defineProperty(e.navigator.xr,"requestSession",{writable:!0}),e.navigator.xr.requestSession=n}},zD={ipd:.063,fovy:Math.PI/2,headsetPosition:new Px(0,1.6,0),headsetQuaternion:new Fx,stereoEnabled:!1},BD=1,VD=2,HD=3,UD=4,WD=5,GD=G(),KD=G(),qD=class{constructor(e,t={}){this.version=DE;let n=new bx,r=new rE(nE.Viewer,n),i={[oE.Left]:new yx(r),[oE.Right]:new yx(r),[oE.None]:new yx(r)},a=e.controllerConfig,o={};a&&Object.values(Lx).forEach(e=>{a.layout[e]&&(o[e]=new jT(a,e,n))});let s={[Lx.Left]:new eC(mS,Lx.Left,n),[Lx.Right]:new eC(mS,Lx.Right,n)},c=jE(e.supportedFeatures)?new ME(r):void 0,l=t.canvasContainer??document.createElement(`div`);l.dataset.webxr_runtime=`Immersive Web Emulation Runtime v${DE}`,l.style.position=`fixed`,l.style.width=`100%`,l.style.height=`100%`,l.style.top=`0`,l.style.left=`0`,l.style.display=`flex`,l.style.justifyContent=`center`,l.style.alignItems=`center`,l.style.overflow=`hidden`,l.style.zIndex=`999`;let u=t.visibilityMask===null?void 0:t.visibilityMask??e.visibilityMask,d=u?document.createElement(`canvas`):void 0;d&&(d.dataset.webxrVisibilityMask=e.name,d.style.position=`absolute`,d.style.inset=`0`,d.style.width=`100%`,d.style.height=`100%`,d.style.pointerEvents=`none`,d.style.zIndex=UD.toString()),this[J]={name:e.name,supportedSessionModes:e.supportedSessionModes,supportedFeatures:e.supportedFeatures,supportedFrameRates:e.supportedFrameRates,isSystemKeyboardSupported:e.isSystemKeyboardSupported,internalNominalFrameRate:e.internalNominalFrameRate,environmentBlendModes:e.environmentBlendModes,interactionMode:e.interactionMode,userAgent:e.userAgent,position:t.headsetPosition??zD.headsetPosition.clone(),quaternion:t.headsetQuaternion??zD.headsetQuaternion.clone(),stereoEnabled:t.stereoEnabled??zD.stereoEnabled,ipd:t.ipd??zD.ipd,fovy:t.fovy??zD.fovy,visibilityMask:u,visibilityMaskEnabled:!!u&&(t.visibilityMaskEnabled??!0),visibilityMaskCanvas:d,controllers:o,hands:s,gaze:c,primaryInputMode:`controller`,pendingReferenceSpaceReset:!1,visibilityState:`visible`,pendingVisibilityState:null,xrSystem:null,installedGlobalObject:null,previousNavigatorXRDescriptor:null,previousUserAgentDescriptor:null,previousGlobals:null,previousMakeXRCompatible:null,matrix:qy(),globalSpace:n,viewerSpace:r,viewSpaces:i,canvasContainer:l,getViewport:(e,t)=>{let{width:n,height:r}=e.context.canvas,i=this[J].stereoEnabled,a=t.eye,o,s,c,l;switch(a){case oE.None:o=0,s=0,c=n,l=r;break;case oE.Left:o=0,s=0,c=i?n/2:n,l=r;break;case oE.Right:o=n/2,s=0,c=i?n/2:0,l=r;break}let u=this[J].viewportCache[a];if(u&&u.x===o&&u.y===s&&u.width===c&&u.height===l)return u;let d=new PE(o,s,c,l);return this[J].viewportCache[a]=d,d},viewportCache:{},updateViews:()=>{let e=this[J].viewerSpace;nb(e[fx].offsetMatrix,this[J].quaternion.quat,this[J].position.vec3),pb(GD,-this[J].ipd/2,0,0),eb(this[J].viewSpaces[oE.Left][fx].offsetMatrix,GD),pb(KD,this[J].ipd/2,0,0),eb(this[J].viewSpaces[oE.Right][fx].offsetMatrix,KD)},onBaseLayerSet:e=>{if(!e)return;let t=e.context.canvas;if(t.parentElement!==this[J].canvasContainer){let e=this[J].devui;if(e){let{devUICanvas:t,devUIContainer:n}=e;t.style.zIndex=HD.toString(),n.style.zIndex=WD.toString(),this[J].canvasContainer.appendChild(e.devUICanvas),this[J].canvasContainer.appendChild(e.devUIContainer)}let n=this[J].sem;n&&(n.environmentCanvas.style.zIndex=BD.toString(),this[J].canvasContainer.appendChild(n.environmentCanvas)),this[J].canvasData={canvas:t,parent:t.parentElement,width:t.width,height:t.height,zIndex:t.style.zIndex},t.style.zIndex=VD.toString(),this[J].canvasContainer.appendChild(t),this[J].visibilityMaskCanvas&&this[J].canvasContainer.appendChild(this[J].visibilityMaskCanvas),document.body.appendChild(this[J].canvasContainer)}t.width=window.innerWidth,t.height=window.innerHeight},onSessionEnd:()=>{var e,t,n;(e=this[J].remote)==null||e.onSessionEnd(),(n=(t=this[J].devui)?.onSessionEnd)==null||n.call(t);for(let e of[...Object.values(this[J].controllers),...Object.values(this[J].hands)])for(let t of e.inputSource.gamepad?.buttons??[])t instanceof Cx&&jx(t);if(this[J].canvasData){let{canvas:e,parent:t,width:n,height:r,zIndex:i}=this[J].canvasData;e.width=n,e.height=r,e.style.zIndex=i,t?t.appendChild(e):this[J].canvasContainer.removeChild(e);let a=this[J].devui;a&&(this[J].canvasContainer.removeChild(a.devUICanvas),this[J].canvasContainer.removeChild(a.devUIContainer));let o=this[J].sem;o&&this[J].canvasContainer.removeChild(o.environmentCanvas);let s=this[J].visibilityMaskCanvas;s?.parentElement===this[J].canvasContainer&&this[J].canvasContainer.removeChild(s),document.body.removeChild(this[J].canvasContainer),this[J].canvasData=void 0,window.dispatchEvent(new Event(`resize`))}},onFrameStart:e=>{let t=performance.now(),n=this[J].lastFrameTime>0?Math.min(t-this[J].lastFrameTime,100):16.67;if(this[J].lastFrameTime=t,this[J].remote&&this[J].remote.update(n),this[J].actionPlayer?.playing)this[J].actionPlayer.playFrame();else{let t=e.session;this[J].pendingVisibilityState&&(this[J].visibilityState=this[J].pendingVisibilityState,this[J].pendingVisibilityState=null,t.dispatchEvent(new aE(`visibilitychange`,{session:t}))),this[J].visibilityState===`visible`&&this.activeInputs.forEach(t=>{t.onFrameStart(e)}),this[J].pendingReferenceSpaceReset&&(t[X].referenceSpaces.forEach(e=>{switch(e[dx].type){case nE.Local:case nE.LocalFloor:case nE.BoundedFloor:case nE.Unbounded:e.dispatchEvent(new OE(`reset`,{referenceSpace:e}));break}}),this[J].pendingReferenceSpaceReset=!1)}this[J].updateViews(),this.drawVisibilityMask()},controlMode:`manual`,controlModeListeners:new Set,stateChangeListeners:new Set,remote:null,runtime:null,lastFrameTime:0},this[J].runtime={kind:`emulated`,getSession:()=>{let e=this.activeSession;if(!e)return null;let t=e[X],n=e,r=(t?.referenceSpaces)?.find(e=>e[dx]?.type!==nE.Viewer);return{mode:t?.mode??n.mode??`immersive-vr`,enabledFeatures:n.enabledFeatures??[],visibilityState:n.visibilityState??this.visibilityState,originOffsetMatrix:r?.[fx].offsetMatrix??null,end:()=>n.end?.call(n)}}},this[J].remote=new AT(this),this[J].updateViews()}drawVisibilityMask(){let e=this[J].visibilityMask,t=this[J].visibilityMaskCanvas,n=this[J].canvasData?.canvas;if(!this[J].visibilityMaskEnabled||!e||!t||!n)return;let r=n.width,i=n.height;if(r<=0||i<=0)return;(t.width!==r||t.height!==i)&&(t.width=r,t.height=i);let a=t.getContext(`2d`);if(!a)return;a.clearRect(0,0,r,i),a.fillStyle=`#000`;let o=this[J].stereoEnabled?[`left`,`right`]:[`left`],s=r/o.length;o.forEach((t,n)=>{let r=n*s,o=IE(e[t],this[J].fovy,s,i);a.fillRect(r,0,s,i),a.clearRect(r+o.x,o.y,o.width,o.height)})}isNativeXRAvailable(){let e=globalThis.navigator?.xr;return!!e&&!(e instanceof NE)}installRuntime(e){if(this[J].runtime.kind===`native`)throw new DOMException(`Cannot install the emulated runtime while a native override is installed.`,`InvalidStateError`);let t=e?.globalObject??globalThis,n=e?.polyfillLayers;if(this.isNativeXRAvailable()&&!e?.forceInstall){console.warn(`IWER: a native WebXR runtime is already available on navigator.xr; skipping installRuntime. Pass { forceInstall: true } to override.`);return}let r=new Map,i=new Map;this[J].installedGlobalObject=t,this[J].previousGlobals=r,this[J].previousMakeXRCompatible=i;let a=e=>{e&&(i.set(e,{existed:`makeXRCompatible`in e,descriptor:Object.getOwnPropertyDescriptor(e,`makeXRCompatible`)}),Object.defineProperty(e,"makeXRCompatible",{value:function(){return new Promise((e,t)=>{e(!0)})},configurable:!0}))};a(WebGL2RenderingContext.prototype),a(globalThis.WebGLRenderingContext?.prototype),this[J].xrSystem=new NE(this),this[J].previousNavigatorXRDescriptor=Object.getOwnPropertyDescriptor(globalThis.navigator,`xr`)??null,this[J].previousUserAgentDescriptor=Object.getOwnPropertyDescriptor(navigator,`userAgent`)??null,Object.defineProperty(globalThis.navigator,"xr",{value:this[J].xrSystem,configurable:!0}),Object.defineProperty(navigator,"userAgent",{value:this[J].userAgent,writable:!1,configurable:!0,enumerable:!0});let o=(e,n)=>{r.set(e,{existed:e in t,value:t[e]}),t[e]=n};o(`XRSystem`,NE),o(`XRSession`,SE),o(`XRRenderState`,iE),o(`XRFrame`,yE),o(`XRSpace`,yx),o(`XRReferenceSpace`,rE),o(`XRJointSpace`,Vx),o(`XRView`,sE),o(`XRViewport`,PE),o(`XRRigidTransform`,YT),o(`XRPose`,cE),o(`XRViewerPose`,uE),o(`XRJointPose`,lE),o(`XRInputSource`,Bx),o(`XRInputSourceArray`,zx),o(`XRHand`,Ix),o(`XRLayer`,CE),o(`XRWebGLLayer`,TE),o(`XRSessionEvent`,aE),o(`XRInputSourceEvent`,Hx),o(`XRInputSourcesChangeEvent`,eE),o(`XRReferenceSpaceEvent`,OE),n?new RD:o(`XRMediaBinding`,void 0),o(`XRWebGLBinding`,WT)}uninstallRuntime(){var e;let t=this[J].previousGlobals,n=this[J].installedGlobalObject;t&&n&&t.forEach(({existed:e,value:t},r)=>{e?n[r]=t:delete n[r]});let r=this[J].previousNavigatorXRDescriptor;r?Object.defineProperty(globalThis.navigator,"xr",r):Object.getOwnPropertyDescriptor(globalThis.navigator,`xr`)?.configurable&&delete globalThis.navigator.xr;let i=this[J].previousUserAgentDescriptor;i&&Object.getOwnPropertyDescriptor(navigator,`userAgent`)?.configurable&&Object.defineProperty(navigator,"userAgent",i),(e=this[J].previousMakeXRCompatible)==null||e.forEach(({existed:e,descriptor:t},n)=>{e&&t?Object.defineProperty(n,"makeXRCompatible",t):delete n.makeXRCompatible}),this[J].xrSystem=null,this[J].installedGlobalObject=null,this[J].previousGlobals=null,this[J].previousMakeXRCompatible=null,this[J].previousNavigatorXRDescriptor=null,this[J].previousUserAgentDescriptor=null}installDevUI(e){this[J].devui=new e(this)}installSEM(e){this[J].sem=new e(this)}get supportedSessionModes(){return this[J].supportedSessionModes}get supportedFeatures(){return this[J].supportedFeatures}get supportedFrameRates(){return this[J].supportedFrameRates}get isSystemKeyboardSupported(){return this[J].isSystemKeyboardSupported}get internalNominalFrameRate(){return this[J].internalNominalFrameRate}get stereoEnabled(){return this[J].stereoEnabled}set stereoEnabled(e){this[J].stereoEnabled=e}get ipd(){return this[J].ipd}set ipd(e){this[J].ipd=e}get fovy(){return this[J].fovy}set fovy(e){this[J].fovy=e}get visibilityMask(){return this[J].visibilityMask}get visibilityMaskEnabled(){return this[J].visibilityMaskEnabled}set visibilityMaskEnabled(e){let t=!!this[J].visibilityMask&&e;this[J].visibilityMaskEnabled=t,this[J].visibilityMaskCanvas&&(this[J].visibilityMaskCanvas.style.display=t?``:`none`)}get position(){return this[J].position}get quaternion(){return this[J].quaternion}get viewerSpace(){return this[J].actionPlayer?.playing?this[J].actionPlayer.viewerSpace:this[J].viewerSpace}get viewSpaces(){return this[J].actionPlayer?.playing?this[J].actionPlayer.viewSpaces:this[J].viewSpaces}get controllers(){return this[J].controllers}get hands(){return this[J].hands}get gaze(){return this[J].gaze}get primaryInputMode(){return this[J].primaryInputMode}set primaryInputMode(e){if(e!==`controller`&&e!==`hand`){console.warn(`primary input mode can only be "controller" or "hand"`);return}this[J].primaryInputMode=e}get activeInputs(){if(this[J].visibilityState!==`visible`)return[];let e=this[J].primaryInputMode===`controller`?Object.values(this[J].controllers):Object.values(this[J].hands);return(this[J].gaze?[...e,this[J].gaze]:e).filter(e=>e.connected)}get inputSources(){return this[J].actionPlayer?.playing?this[J].actionPlayer.inputSources:this.activeInputs.map(e=>e.inputSource)}get canvasContainer(){return this[J].canvasContainer}get canvasDimensions(){if(this[J].canvasData){let{width:e,height:t}=this[J].canvasData.canvas;return{width:e,height:t}}}get appCanvas(){return this[J].canvasData?.canvas}get activeSession(){return this[J].xrSystem?.[ex].activeSession}get sessionOffered(){return!!this[J].xrSystem?.[ex].offeredSessionConfig}get name(){return this[J].name}grantOfferedSession(){let e=this[J].xrSystem,t=e?.[ex];if(t&&t.offeredSessionConfig){let{resolve:n,reject:r,mode:i,options:a}=t.offeredSessionConfig;t.offeredSessionConfig=void 0,e.requestSession(i,a).then(n).catch(r)}}recenter(){let e=new Px(-this.position.x,0,-this.position.z),t=new Px(0,0,-1).applyQuaternion(this.quaternion);t.y=0,t.normalize();let n=Math.atan2(t.x,-t.z),r=new Fx().setFromAxisAngle(new Px(0,1,0),n);this.position.add(e),this.quaternion.multiply(r),[...Object.values(this[J].controllers),...Object.values(this[J].hands)].forEach(t=>{t.position.add(e),t.quaternion.multiply(r),t.position.applyQuaternion(r)}),this[J].pendingReferenceSpaceReset=!0}get visibilityState(){return this[J].visibilityState}updateVisibilityState(e){if(!Object.values([`visible`,`visible-blurred`,`hidden`]).includes(e))throw new DOMException(`Invalid XRVisibilityState value`,`NotSupportedError`);e!==this[J].visibilityState&&(this[J].pendingVisibilityState=e)}createActionPlayer(e,t,n={}){var r,i;let a=new EE(e,t,this[J].ipd,n);return this[J].actionPlayer=a,(i=(r=this[J].runtime).onActionPlayerCreated)==null||i.call(r,a),a}get devui(){return this[J].devui}get sem(){return this[J].sem}get remote(){return this[J].remote}get controlMode(){return this[J].controlMode}set controlMode(e){if(e!==`manual`&&e!==`programmatic`){console.warn(`control mode can only be "manual" or "programmatic"`);return}this[J].controlMode!==e&&(this[J].controlMode=e,this[J].controlModeListeners.forEach(t=>t(e)))}onControlModeChange(e){return this[J].controlModeListeners.add(e),()=>{this[J].controlModeListeners.delete(e)}}onStateChange(e){return this[J].stateChangeListeners.add(e),()=>{this[J].stateChangeListeners.delete(e)}}notifyStateChange(){this[J].stateChangeListeners.forEach(e=>e())}},JD={mapping:Sx.XRStandard,buttons:[{id:`trigger`,type:`analog`,eventTrigger:`select`},{id:`squeeze`,type:`analog`,eventTrigger:`squeeze`},null,{id:`thumbstick`,type:`binary`},{id:`x-button`,type:`binary`},{id:`y-button`,type:`binary`},{id:`thumbrest`,type:`binary`}],axes:[null,null,{id:`thumbstick`,type:`x-axis`},{id:`thumbstick`,type:`y-axis`}]},YD={mapping:Sx.XRStandard,buttons:[{id:`trigger`,type:`analog`,eventTrigger:`select`},{id:`squeeze`,type:`analog`,eventTrigger:`squeeze`},null,{id:`thumbstick`,type:`binary`},{id:`a-button`,type:`binary`},{id:`b-button`,type:`binary`},{id:`thumbrest`,type:`binary`}],axes:[null,null,{id:`thumbstick`,type:`x-axis`},{id:`thumbstick`,type:`y-axis`}]},XD={profileId:`oculus-touch-v2`,fallbackProfileIds:[`oculus-touch`,`generic-trigger-squeeze-thumbstick`],layout:{left:{gamepad:JD,gripOffsetMatrix:[.9925461411476135,4.673031295254759e-9,-.12186938524246216,0,.08617470413446426,.7071065306663513,.7018362283706665,0,.0861746296286583,-.70710688829422,.7018358707427979,0,-.003979847766458988,-.01585787907242775,.04964185878634453,1],numHapticActuators:1},right:{gamepad:YD,gripOffsetMatrix:[.9925461411476135,3.688163374704345e-8,.12186937034130096,0,-.08617469668388367,.7071066498756409,.7018361687660217,0,-.0861746147274971,-.7071068286895752,.7018359899520874,0,.003979853354394436,-.01585787907242775,.04964182525873184,1],numHapticActuators:1}}},ZD={profileId:`oculus-touch-v3`,fallbackProfileIds:[`oculus-touch`,`generic-trigger-squeeze-thumbstick`],layout:{left:{gamepad:JD,gripOffsetMatrix:[.9925461411476135,2.0823669899527886e-8,-.12186937034130096,0,.08617465198040009,.7071067094802856,.701836109161377,0,.08617466688156128,-.7071067690849304,.7018360495567322,0,-.003979838453233242,-.015857907012104988,.04964181408286095,1],numHapticActuators:1},right:{gamepad:YD,gripOffsetMatrix:[.9925461411476135,-8.329467959811154e-8,.12186941504478455,0,-.08617465943098068,.7071066498756409,.7018361687660217,0,-.08617471158504486,-.7071068286895752,.7018359303474426,0,.003979798872023821,-.015857888385653496,.049641866236925125,1],numHapticActuators:1}}},QD={profileId:`meta-quest-touch-pro`,fallbackProfileIds:[`oculus-touch-v2`,`oculus-touch`,`generic-trigger-squeeze-thumbstick`],layout:{left:{gamepad:JD,gripOffsetMatrix:[.9925461411476135,-1.5779937356796836e-8,-.12186935544013977,0,.08617467433214188,.7071067094802856,.701836109161377,0,.0861746296286583,-.7071067690849304,.7018360495567322,0,-.003979836590588093,-.015857847407460213,.049641840159893036,1],numHapticActuators:3},right:{gamepad:YD,gripOffsetMatrix:[.9925461411476135,9267653311439972e-26,.12186937034130096,0,-.08617467433214188,.7071067094802856,.7018361687660217,0,-.08617464452981949,-.7071067690849304,.7018360495567322,0,.003979847766458988,-.01585782691836357,.04964186251163483,1],numHapticActuators:3}}},$D={profileId:`meta-quest-touch-plus`,fallbackProfileIds:[`oculus-touch-v3`,`oculus-touch`,`generic-trigger-squeeze-thumbstick`],layout:{left:{gamepad:JD,gripOffsetMatrix:[.9925461411476135,1.0736208366779465e-8,-.12186933308839798,0,.08617459982633591,.70710688829422,.7018360495567322,0,.08617466688156128,-.7071067094802856,.7018362283706665,0,-.003979803062975407,-.015857873484492302,.04964187368750572,1],numHapticActuators:1},right:{gamepad:YD,gripOffsetMatrix:[.9925461411476135,-2.6238110351073374e-8,.12186934053897858,0,-.0861746147274971,.7071067690849304,.7018360495567322,0,-.08617465943098068,-.7071067094802856,.701836109161377,0,.003979838453233242,-.015857869759202003,.04964182525873184,1],numHapticActuators:1}}},eO=e=>e*Math.PI/180;eO(37),eO(37),eO(25),eO(43),eO(37),eO(37),eO(25),eO(43);var tO={name:`Oculus Quest 1`,controllerConfig:XD,supportedSessionModes:[`inline`,`immersive-vr`,`immersive-ar`],supportedFeatures:[`viewer`,`local`,`local-floor`,`bounded-floor`,`unbounded`,`anchors`,`plane-detection`,`hand-tracking`],supportedFrameRates:[72,80,90],isSystemKeyboardSupported:!0,internalNominalFrameRate:72,environmentBlendModes:{"immersive-vr":bE.Opaque,"immersive-ar":bE.AlphaBlend},interactionMode:xE.WorldSpace,userAgent:`Mozilla/5.0 (X11; Linux x86_64; Quest 1) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36`},nO={name:`Meta Quest 2`,controllerConfig:ZD,supportedSessionModes:[`inline`,`immersive-vr`,`immersive-ar`],supportedFeatures:[`viewer`,`local`,`local-floor`,`bounded-floor`,`unbounded`,`anchors`,`plane-detection`,`mesh-detection`,`hit-test`,`hand-tracking`],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:72,environmentBlendModes:{"immersive-vr":bE.Opaque,"immersive-ar":bE.AlphaBlend},interactionMode:xE.WorldSpace,userAgent:`Mozilla/5.0 (X11; Linux x86_64; Quest 2) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36`},rO={name:`Meta Quest Pro`,controllerConfig:QD,supportedSessionModes:[`inline`,`immersive-vr`,`immersive-ar`],supportedFeatures:[`viewer`,`local`,`local-floor`,`bounded-floor`,`unbounded`,`anchors`,`plane-detection`,`mesh-detection`,`hit-test`,`hand-tracking`,`gaze-tracking`,`eye-tracking`],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:90,environmentBlendModes:{"immersive-vr":bE.Opaque,"immersive-ar":bE.AlphaBlend},interactionMode:xE.WorldSpace,userAgent:`Mozilla/5.0 (X11; Linux x86_64; Quest Pro) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36`},iO={name:`Meta Quest 3`,controllerConfig:$D,supportedSessionModes:[`inline`,`immersive-vr`,`immersive-ar`],supportedFeatures:[`viewer`,`local`,`local-floor`,`bounded-floor`,`unbounded`,`anchors`,`plane-detection`,`mesh-detection`,`hit-test`,`hand-tracking`,`depth-sensing`],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:90,environmentBlendModes:{"immersive-vr":bE.Opaque,"immersive-ar":bE.AlphaBlend},interactionMode:xE.WorldSpace,userAgent:`Mozilla/5.0 (X11; Linux x86_64; Quest 3) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36`};({...iO});function aO(){let e=this.buf,t=this.pos,n=0,r=0;for(let i=0;i<28;i+=7){let a=e[t++];if(n|=(a&127)<<i,!(a&128)){this.pos=t,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}let i=e[t++];if(n|=(i&15)<<28,r=(i&112)>>4,!(i&128)){this.pos=t,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}for(let i=3;i<=31;i+=7){let a=e[t++];if(r|=(a&127)<<i,!(a&128)){this.pos=t,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}throw Error(`invalid varint`)}var oO=4294967296;function sO(e){let t=e[0]===`-`;t&&(e=e.slice(1));let n=1e6,r=0,i=0;function a(t,a){let o=Number(e.slice(t,a));i*=n,r=r*n+o,r>=oO&&(i+=r/oO|0,r%=oO)}return a(-24,-18),a(-18,-12),a(-12,-6),a(-6),t?fO(r,i):dO(r,i)}function cO(e,t){let n=dO(e,t),r=n.hi&2147483648;r&&(n=fO(n.lo,n.hi));let i=lO(n.lo,n.hi);return r?`-`+i:i}function lO(e,t){if({lo:e,hi:t}=uO(e,t),t<=2097151)return String(oO*t+e);let n=e&16777215,r=(e>>>24|t<<8)&16777215,i=t>>16&65535,a=n+r*6777216+i*6710656,o=r+i*8147497,s=i*2,c=1e7;return a>=c&&(o+=Math.floor(a/c),a%=c),o>=c&&(s+=Math.floor(o/c),o%=c),s.toString()+pO(o)+pO(a)}function uO(e,t){return{lo:e>>>0,hi:t>>>0}}function dO(e,t){return{lo:e|0,hi:t|0}}function fO(e,t){return t=~t,e?e=~e+1:t+=1,dO(e,t)}var pO=e=>{let t=String(e);return`0000000`.slice(t.length)+t};function mO(){let e=this.buf[this.pos++];if(!(e&128))return this.assertBounds(),e;let t=e&127;if(e=this.buf[this.pos++],t|=(e&127)<<7,!(e&128)||(e=this.buf[this.pos++],t|=(e&127)<<14,!(e&128))||(e=this.buf[this.pos++],t|=(e&127)<<21,!(e&128)))return this.assertBounds(),t;e=this.buf[this.pos++],t|=(e&15)<<28;for(let t=5;e&128&&t<10;t++)e=this.buf[this.pos++];if(e&128)throw Error(`invalid varint`);return this.assertBounds(),t>>>0}var hO=gO();function gO(){let e=new DataView(new ArrayBuffer(8));if(typeof BigInt==`function`&&typeof e.getBigInt64==`function`&&typeof e.getBigUint64==`function`&&typeof e.setBigInt64==`function`&&typeof e.setBigUint64==`function`&&(globalThis.Deno||globalThis.Bun||typeof process!=`object`||{}.BUF_BIGINT_DISABLE!==`1`)){let t=BigInt(`-9223372036854775808`),n=BigInt(`9223372036854775807`),r=BigInt(`0`),i=BigInt(`18446744073709551615`);return{zero:BigInt(0),supported:!0,parse(e){let r=typeof e==`bigint`?e:BigInt(e);if(r>n||r<t)throw Error(`invalid int64: ${e}`);return r},uParse(e){let t=typeof e==`bigint`?e:BigInt(e);if(t>i||t<r)throw Error(`invalid uint64: ${e}`);return t},enc(t){return e.setBigInt64(0,this.parse(t),!0),{lo:e.getInt32(0,!0),hi:e.getInt32(4,!0)}},uEnc(t){return e.setBigInt64(0,this.uParse(t),!0),{lo:e.getInt32(0,!0),hi:e.getInt32(4,!0)}},dec(t,n){return e.setInt32(0,t,!0),e.setInt32(4,n,!0),e.getBigInt64(0,!0)},uDec(t,n){return e.setInt32(0,t,!0),e.setInt32(4,n,!0),e.getBigUint64(0,!0)}}}return{zero:`0`,supported:!1,parse(e){return typeof e!=`string`&&(e=e.toString()),_O(e),e},uParse(e){return typeof e!=`string`&&(e=e.toString()),vO(e),e},enc(e){return typeof e!=`string`&&(e=e.toString()),_O(e),sO(e)},uEnc(e){return typeof e!=`string`&&(e=e.toString()),vO(e),sO(e)},dec(e,t){return cO(e,t)},uDec(e,t){return lO(e,t)}}}function _O(e){if(!/^-?[0-9]+$/.test(e))throw Error(`invalid int64: `+e)}function vO(e){if(!/^[0-9]+$/.test(e))throw Error(`invalid uint64: `+e)}var yO;function bO(e){yO=Object.assign(Object.assign({},e),{encodeUtf8Into:e.encodeUtf8Into??SO(e.encodeUtf8.bind(e))})}function xO(){if(!yO){let e=globalThis;if(!e.TextEncoder||!e.TextDecoder)throw Error(`encoding API missing: install TextEncoder and TextDecoder on globalThis`);let t=new e.TextEncoder,n=new e.TextDecoder,r,i={encodeUtf8(e){return t.encode(e)},decodeUtf8(t,i){return i?(r||=new e.TextDecoder(`utf-8`,{fatal:!0}),r.decode(t)):n.decode(t)},checkUtf8(e){try{return!0}catch{return!1}}};t.encodeInto&&(i.encodeUtf8Into=t.encodeInto.bind(t));let a=String.prototype.isWellFormed;a&&(i.checkUtf8=e=>a.call(e)),bO(i)}return yO}function SO(e){return(t,n)=>{let r=e(t);return n.set(r),{written:r.byteLength}}}var CO;(function(e){e[e.Varint=0]=`Varint`,e[e.Bit64=1]=`Bit64`,e[e.LengthDelimited=2]=`LengthDelimited`,e[e.StartGroup=3]=`StartGroup`,e[e.EndGroup=4]=`EndGroup`,e[e.Bit32=5]=`Bit32`})(CO||={});var wO=class{constructor(e){this.stackPos=[],this.encodeUtf8Into=e?SO(e):xO().encodeUtf8Into,this.buffer=DO,this.viewCache=OO,this.pos=0}ensureCapacity(e){let t=this.pos+e;if(t>this.buffer.length){let e=this.buffer.length||TO;for(;e<t;)e*=2;let n=new Uint8Array(e);this.pos>0&&n.set(this.buffer),this.buffer=n}}view(){let e=this.buffer,t=this.viewCache;if(t.byteLength===e.byteLength)return t;let n=new DataView(e.buffer);return this.viewCache=n,n}finish(){let e=this.buffer.slice(0,this.pos);return this.pos=0,this.stackPos=[],e}fork(){return this.stackPos.push(this.pos),this.ensureCapacity(EO),this.buffer[this.pos++]=0,this}join(){let e=this.stackPos.pop();if(e===void 0)throw Error(`invalid state, fork stack empty`);let t=this.pos-e-EO,n=AO(t);return n>EO&&(this.ensureCapacity(n-EO),this.buffer.copyWithin(e+n,e+EO,this.pos)),this.pos=e,this.uint32(t),this.pos+=t,this}tag(e,t){return this.uint32((e<<3|t)>>>0)}raw(e){return this.ensureCapacity(e.length),this.buffer.set(e,this.pos),this.pos+=e.length,this}uint32(e){if(NO(e),this.ensureCapacity(5),e<128)return this.buffer[this.pos++]=e,this;for(;e>127;)this.buffer[this.pos++]=e&127|128,e>>>=7;return this.buffer[this.pos++]=e,this}int32(e){if(MO(e),e>=0)return this.uint32(e);this.ensureCapacity(10);for(let t=0;t<9;t++)this.buffer[this.pos++]=e&127|128,e>>=7;return this.buffer[this.pos++]=1,this}bool(e){return this.ensureCapacity(1),this.buffer[this.pos++]=+!!e,this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){typeof e!=`string`&&(e=String(e));let t=e.length;if(t<=kO){this.ensureCapacity(t+1);let n=this.buffer,r=this.pos;n[r++]=t;let i=0;for(;i<t;i++){let t=e.charCodeAt(i);if(t>127)break;n[r++]=t}if(i==t)return this.pos=r,this}this.ensureCapacity(t*3+5);let n=AO(t),r=this.buffer,i=this.pos,{written:a}=this.encodeUtf8Into(e,r.subarray(i+n)),o=AO(a);return o!=n&&r.copyWithin(i+o,i+n,i+n+a),this.uint32(a),this.pos+=a,this}float(e){return PO(e),this.ensureCapacity(4),this.view().setFloat32(this.pos,e,!0),this.pos+=4,this}double(e){return this.ensureCapacity(8),this.view().setFloat64(this.pos,e,!0),this.pos+=8,this}fixed32(e){return NO(e),this.ensureCapacity(4),this.view().setUint32(this.pos,e,!0),this.pos+=4,this}sfixed32(e){return MO(e),this.ensureCapacity(4),this.view().setInt32(this.pos,e,!0),this.pos+=4,this}sint32(e){return MO(e),this.uint32((e<<1^e>>31)>>>0)}sfixed64(e){let t=hO.enc(e);this.ensureCapacity(8);let n=this.view();return n.setInt32(this.pos,t.lo,!0),n.setInt32(this.pos+4,t.hi,!0),this.pos+=8,this}fixed64(e){let t=hO.uEnc(e);this.ensureCapacity(8);let n=this.view();return n.setInt32(this.pos,t.lo,!0),n.setInt32(this.pos+4,t.hi,!0),this.pos+=8,this}int64(e){let t=hO.enc(e);return this.writeVarint64(t.lo,t.hi)}sint64(e){let t=hO.enc(e),n=t.hi>>31,r=t.lo<<1^n,i=(t.hi<<1|t.lo>>>31)^n;return this.writeVarint64(r,i)}uint64(e){let t=hO.uEnc(e);return this.writeVarint64(t.lo,t.hi)}writeVarint64(e,t){this.ensureCapacity(10);let n=this.buffer,r=this.pos;for(let i=0;i<28;i+=7){let a=e>>>i,o=!(!(a>>>7)&&t==0);if(n[r++]=(o?a|128:a)&255,!o)return this.pos=r,this}let i=e>>>28&15|(t&7)<<4,a=!!(t>>3);if(n[r++]=(a?i|128:i)&255,!a)return this.pos=r,this;for(let e=3;e<31;e+=7){let i=t>>>e,a=!!(i>>>7);if(n[r++]=(a?i|128:i)&255,!a)return this.pos=r,this}return n[r++]=t>>>31&1,this.pos=r,this}},TO=128,EO=1,DO=new Uint8Array,OO=new DataView(DO.buffer),kO=32;function AO(e){return e<128?1:e<16384?2:e<2097152?3:e<268435456?4:5}var jO=class{constructor(e,t=xO().decodeUtf8){this.decodeUtf8=t,this.varint64Lo=0,this.varint64Hi=0,this.varint64=aO,this.uint32=mO,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.pos,t=this.uint32(),n=this.pos-e;if(n>5||n==5&&this.buf[this.pos-1]>15)throw Error(`illegal tag: varint overflows uint32`);let r=t>>>3,i=t&7;if(r<=0||i>5)throw Error(`illegal tag: field no `+r+` wire type `+i);return[r,i]}skip(e,t,n=100){let r=this.pos;switch(e){case CO.Varint:for(;this.buf[this.pos++]&128;);break;case CO.Bit64:this.pos+=4;case CO.Bit32:this.pos+=4;break;case CO.LengthDelimited:let r=this.uint32();this.pos+=r;break;case CO.StartGroup:if(n<=0)throw Error(`maximum recursion depth reached`);for(;;){let[e,r]=this.tag();if(r===CO.EndGroup){if(t!==void 0&&e!==t)throw Error(`invalid end group tag`);break}this.skip(r,e,n-1)}break;default:throw Error(`cant skip wire type `+e)}return this.assertBounds(),this.buf.subarray(r,this.pos)}assertBounds(){if(this.pos>this.len)throw RangeError(`premature EOF`)}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return this.varint64(),hO.dec(this.varint64Lo,this.varint64Hi)}uint64(){return this.varint64(),hO.uDec(this.varint64Lo,this.varint64Hi)}sint64(){this.varint64();let e=this.varint64Lo,t=this.varint64Hi,n=-(e&1);return e=(e>>>1|(t&1)<<31)^n,t=t>>>1^n,hO.dec(e,t)}bool(){let e=this.buf[this.pos];return e<128?(this.pos++,e!==0):(this.varint64(),this.varint64Lo!==0||this.varint64Hi!==0)}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return hO.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return hO.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),t=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(t,t+e)}string(e){let t=this.bytes(),n=t.length;if(n<=kO){let r=Array(n);for(let i=0;i<n;i++){let n=t[i];if(n>127)return this.decodeUtf8(t,e);r[i]=n}return String.fromCharCode.apply(String,r)}return this.decodeUtf8(t,e)}};function MO(e){if(typeof e==`string`)e=Number(e);else if(typeof e!=`number`)throw Error(`invalid int32: `+typeof e);if(!Number.isInteger(e)||e>2147483647||e<-2147483648)throw Error(`invalid int32: `+e)}function NO(e){if(typeof e==`string`)e=Number(e);else if(typeof e!=`number`)throw Error(`invalid uint32: `+typeof e);if(!Number.isInteger(e)||e>4294967295||e<0)throw Error(`invalid uint32: `+e)}function PO(e){if(typeof e==`string`){let t=e;if(e=Number(e),Number.isNaN(e)&&t!==`NaN`)throw Error(`invalid float32: `+t)}else if(typeof e!=`number`)throw Error(`invalid float32: `+typeof e);if(!Number.isFinite(Math.fround(e))&&Number.isFinite(e))throw Error(`invalid float32: `+e)}function FO(){return{x:0,y:0}}var IO={encode(e,t=new wO){return e.x!==0&&t.uint32(13).float(e.x),e.y!==0&&t.uint32(21).float(e.y),t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=FO();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==13)break;i.x=n.float();continue;case 2:if(e!==21)break;i.y=n.float();continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{x:ZO(e.x)?globalThis.Number(e.x):0,y:ZO(e.y)?globalThis.Number(e.y):0}},toJSON(e){let t={};return e.x!==0&&(t.x=e.x),e.y!==0&&(t.y=e.y),t},create(e){return IO.fromPartial(e??{})},fromPartial(e){let t=FO();return t.x=e.x??0,t.y=e.y??0,t}};function LO(){return{width:0,height:0}}var RO={encode(e,t=new wO){return e.width!==0&&t.uint32(13).float(e.width),e.height!==0&&t.uint32(21).float(e.height),t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=LO();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==13)break;i.width=n.float();continue;case 2:if(e!==21)break;i.height=n.float();continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{width:ZO(e.width)?globalThis.Number(e.width):0,height:ZO(e.height)?globalThis.Number(e.height):0}},toJSON(e){let t={};return e.width!==0&&(t.width=e.width),e.height!==0&&(t.height=e.height),t},create(e){return RO.fromPartial(e??{})},fromPartial(e){let t=LO();return t.width=e.width??0,t.height=e.height??0,t}};function zO(){return{x:0,y:0,z:0}}var BO={encode(e,t=new wO){return e.x!==0&&t.uint32(13).float(e.x),e.y!==0&&t.uint32(21).float(e.y),e.z!==0&&t.uint32(29).float(e.z),t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=zO();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==13)break;i.x=n.float();continue;case 2:if(e!==21)break;i.y=n.float();continue;case 3:if(e!==29)break;i.z=n.float();continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{x:ZO(e.x)?globalThis.Number(e.x):0,y:ZO(e.y)?globalThis.Number(e.y):0,z:ZO(e.z)?globalThis.Number(e.z):0}},toJSON(e){let t={};return e.x!==0&&(t.x=e.x),e.y!==0&&(t.y=e.y),e.z!==0&&(t.z=e.z),t},create(e){return BO.fromPartial(e??{})},fromPartial(e){let t=zO();return t.x=e.x??0,t.y=e.y??0,t.z=e.z??0,t}};function VO(){return{width:0,height:0,depth:0}}var HO={encode(e,t=new wO){return e.width!==0&&t.uint32(13).float(e.width),e.height!==0&&t.uint32(21).float(e.height),e.depth!==0&&t.uint32(29).float(e.depth),t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=VO();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==13)break;i.width=n.float();continue;case 2:if(e!==21)break;i.height=n.float();continue;case 3:if(e!==29)break;i.depth=n.float();continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{width:ZO(e.width)?globalThis.Number(e.width):0,height:ZO(e.height)?globalThis.Number(e.height):0,depth:ZO(e.depth)?globalThis.Number(e.depth):0}},toJSON(e){let t={};return e.width!==0&&(t.width=e.width),e.height!==0&&(t.height=e.height),e.depth!==0&&(t.depth=e.depth),t},create(e){return HO.fromPartial(e??{})},fromPartial(e){let t=VO();return t.width=e.width??0,t.height=e.height??0,t.depth=e.depth??0,t}};function UO(){return{x:0,y:0,z:0,w:0}}var WO={encode(e,t=new wO){return e.x!==0&&t.uint32(13).float(e.x),e.y!==0&&t.uint32(21).float(e.y),e.z!==0&&t.uint32(29).float(e.z),e.w!==0&&t.uint32(37).float(e.w),t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=UO();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==13)break;i.x=n.float();continue;case 2:if(e!==21)break;i.y=n.float();continue;case 3:if(e!==29)break;i.z=n.float();continue;case 4:if(e!==37)break;i.w=n.float();continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{x:ZO(e.x)?globalThis.Number(e.x):0,y:ZO(e.y)?globalThis.Number(e.y):0,z:ZO(e.z)?globalThis.Number(e.z):0,w:ZO(e.w)?globalThis.Number(e.w):0}},toJSON(e){let t={};return e.x!==0&&(t.x=e.x),e.y!==0&&(t.y=e.y),e.z!==0&&(t.z=e.z),e.w!==0&&(t.w=e.w),t},create(e){return WO.fromPartial(e??{})},fromPartial(e){let t=UO();return t.x=e.x??0,t.y=e.y??0,t.z=e.z??0,t.w=e.w??0,t}};function GO(){return{offset:void 0,extent:void 0}}var KO={encode(e,t=new wO){return e.offset!==void 0&&IO.encode(e.offset,t.uint32(10).fork()).join(),e.extent!==void 0&&RO.encode(e.extent,t.uint32(18).fork()).join(),t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=GO();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==10)break;i.offset=IO.decode(n,n.uint32());continue;case 2:if(e!==18)break;i.extent=RO.decode(n,n.uint32());continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{offset:ZO(e.offset)?IO.fromJSON(e.offset):void 0,extent:ZO(e.extent)?RO.fromJSON(e.extent):void 0}},toJSON(e){let t={};return e.offset!==void 0&&(t.offset=IO.toJSON(e.offset)),e.extent!==void 0&&(t.extent=RO.toJSON(e.extent)),t},create(e){return KO.fromPartial(e??{})},fromPartial(e){let t=GO();return t.offset=e.offset!==void 0&&e.offset!==null?IO.fromPartial(e.offset):void 0,t.extent=e.extent!==void 0&&e.extent!==null?RO.fromPartial(e.extent):void 0,t}};function qO(){return{offset:void 0,extent:void 0}}var JO={encode(e,t=new wO){return e.offset!==void 0&&BO.encode(e.offset,t.uint32(10).fork()).join(),e.extent!==void 0&&HO.encode(e.extent,t.uint32(18).fork()).join(),t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=qO();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==10)break;i.offset=BO.decode(n,n.uint32());continue;case 2:if(e!==18)break;i.extent=HO.decode(n,n.uint32());continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{offset:ZO(e.offset)?BO.fromJSON(e.offset):void 0,extent:ZO(e.extent)?HO.fromJSON(e.extent):void 0}},toJSON(e){let t={};return e.offset!==void 0&&(t.offset=BO.toJSON(e.offset)),e.extent!==void 0&&(t.extent=HO.toJSON(e.extent)),t},create(e){return JO.fromPartial(e??{})},fromPartial(e){let t=qO();return t.offset=e.offset!==void 0&&e.offset!==null?BO.fromPartial(e.offset):void 0,t.extent=e.extent!==void 0&&e.extent!==null?HO.fromPartial(e.extent):void 0,t}};function YO(){return{orientation:void 0,position:void 0}}var XO={encode(e,t=new wO){return e.orientation!==void 0&&WO.encode(e.orientation,t.uint32(10).fork()).join(),e.position!==void 0&&BO.encode(e.position,t.uint32(18).fork()).join(),t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=YO();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==10)break;i.orientation=WO.decode(n,n.uint32());continue;case 2:if(e!==18)break;i.position=BO.decode(n,n.uint32());continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{orientation:ZO(e.orientation)?WO.fromJSON(e.orientation):void 0,position:ZO(e.position)?BO.fromJSON(e.position):void 0}},toJSON(e){let t={};return e.orientation!==void 0&&(t.orientation=WO.toJSON(e.orientation)),e.position!==void 0&&(t.position=BO.toJSON(e.position)),t},create(e){return XO.fromPartial(e??{})},fromPartial(e){let t=YO();return t.orientation=e.orientation!==void 0&&e.orientation!==null?WO.fromPartial(e.orientation):void 0,t.position=e.position!==void 0&&e.position!==null?BO.fromPartial(e.position):void 0,t}};function ZO(e){return e!=null}var QO;(function(e){e[e.Keyboard=0]=`Keyboard`,e[e.UNRECOGNIZED=-1]=`UNRECOGNIZED`})(QO||={});function $O(e){switch(e){case 0:case`Keyboard`:return QO.Keyboard;default:return QO.UNRECOGNIZED}}function ek(e){switch(e){case QO.Keyboard:return`Keyboard`;case QO.UNRECOGNIZED:default:return`UNRECOGNIZED`}}var $;(function(e){e[e.UNKNOWN=0]=`UNKNOWN`,e[e.FLOOR=1]=`FLOOR`,e[e.CEILING=2]=`CEILING`,e[e.WALL_FACE=3]=`WALL_FACE`,e[e.TABLE=4]=`TABLE`,e[e.COUCH=5]=`COUCH`,e[e.DOOR_FRAME=6]=`DOOR_FRAME`,e[e.WINDOW_FRAME=7]=`WINDOW_FRAME`,e[e.OTHER=8]=`OTHER`,e[e.STORAGE=9]=`STORAGE`,e[e.BED=10]=`BED`,e[e.SCREEN=11]=`SCREEN`,e[e.LAMP=12]=`LAMP`,e[e.PLANT=13]=`PLANT`,e[e.WALL_ART=14]=`WALL_ART`,e[e.GLOBAL_MESH=15]=`GLOBAL_MESH`,e[e.INVISIBLE_WALL_FACE=16]=`INVISIBLE_WALL_FACE`,e[e.CHAIR=17]=`CHAIR`,e[e.INNER_WALL_FACE=18]=`INNER_WALL_FACE`,e[e.OTHER_ROOM_FACE=19]=`OTHER_ROOM_FACE`,e[e.OPENING=20]=`OPENING`,e[e.UNRECOGNIZED=-1]=`UNRECOGNIZED`})($||={});function tk(e){switch(e){case 0:case`UNKNOWN`:return $.UNKNOWN;case 1:case`FLOOR`:return $.FLOOR;case 2:case`CEILING`:return $.CEILING;case 3:case`WALL_FACE`:return $.WALL_FACE;case 4:case`TABLE`:return $.TABLE;case 5:case`COUCH`:return $.COUCH;case 6:case`DOOR_FRAME`:return $.DOOR_FRAME;case 7:case`WINDOW_FRAME`:return $.WINDOW_FRAME;case 8:case`OTHER`:return $.OTHER;case 9:case`STORAGE`:return $.STORAGE;case 10:case`BED`:return $.BED;case 11:case`SCREEN`:return $.SCREEN;case 12:case`LAMP`:return $.LAMP;case 13:case`PLANT`:return $.PLANT;case 14:case`WALL_ART`:return $.WALL_ART;case 15:case`GLOBAL_MESH`:return $.GLOBAL_MESH;case 16:case`INVISIBLE_WALL_FACE`:return $.INVISIBLE_WALL_FACE;case 17:case`CHAIR`:return $.CHAIR;case 18:case`INNER_WALL_FACE`:return $.INNER_WALL_FACE;case 19:case`OTHER_ROOM_FACE`:return $.OTHER_ROOM_FACE;case 20:case`OPENING`:return $.OPENING;default:return $.UNRECOGNIZED}}function nk(e){switch(e){case $.UNKNOWN:return`UNKNOWN`;case $.FLOOR:return`FLOOR`;case $.CEILING:return`CEILING`;case $.WALL_FACE:return`WALL_FACE`;case $.TABLE:return`TABLE`;case $.COUCH:return`COUCH`;case $.DOOR_FRAME:return`DOOR_FRAME`;case $.WINDOW_FRAME:return`WINDOW_FRAME`;case $.OTHER:return`OTHER`;case $.STORAGE:return`STORAGE`;case $.BED:return`BED`;case $.SCREEN:return`SCREEN`;case $.LAMP:return`LAMP`;case $.PLANT:return`PLANT`;case $.WALL_ART:return`WALL_ART`;case $.GLOBAL_MESH:return`GLOBAL_MESH`;case $.INVISIBLE_WALL_FACE:return`INVISIBLE_WALL_FACE`;case $.CHAIR:return`CHAIR`;case $.INNER_WALL_FACE:return`INNER_WALL_FACE`;case $.OTHER_ROOM_FACE:return`OTHER_ROOM_FACE`;case $.OPENING:return`OPENING`;case $.UNRECOGNIZED:default:return`UNRECOGNIZED`}}function rk(){return{floorUuid:``,ceilingUuid:``,wallUuids:[]}}var ik={encode(e,t=new wO){e.floorUuid!==``&&t.uint32(10).string(e.floorUuid),e.ceilingUuid!==``&&t.uint32(18).string(e.ceilingUuid);for(let n of e.wallUuids)t.uint32(26).string(n);return t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=rk();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==10)break;i.floorUuid=n.string();continue;case 2:if(e!==18)break;i.ceilingUuid=n.string();continue;case 3:if(e!==26)break;i.wallUuids.push(n.string());continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{floorUuid:_k(e.floorUuid)?globalThis.String(e.floorUuid):``,ceilingUuid:_k(e.ceilingUuid)?globalThis.String(e.ceilingUuid):``,wallUuids:globalThis.Array.isArray(e?.wallUuids)?e.wallUuids.map(e=>globalThis.String(e)):[]}},toJSON(e){let t={};return e.floorUuid!==``&&(t.floorUuid=e.floorUuid),e.ceilingUuid!==``&&(t.ceilingUuid=e.ceilingUuid),e.wallUuids?.length&&(t.wallUuids=e.wallUuids),t},create(e){return ik.fromPartial(e??{})},fromPartial(e){let t=rk();return t.floorUuid=e.floorUuid??``,t.ceilingUuid=e.ceilingUuid??``,t.wallUuids=e.wallUuids?.map(e=>e)||[],t}};function ak(){return{uuids:[]}}var ok={encode(e,t=new wO){for(let n of e.uuids)t.uint32(10).string(n);return t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=ak();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==10)break;i.uuids.push(n.string());continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{uuids:globalThis.Array.isArray(e?.uuids)?e.uuids.map(e=>globalThis.String(e)):[]}},toJSON(e){let t={};return e.uuids?.length&&(t.uuids=e.uuids),t},create(e){return ok.fromPartial(e??{})},fromPartial(e){let t=ak();return t.uuids=e.uuids?.map(e=>e)||[],t}};function sk(){return{vertices:new Uint8Array}}var ck={encode(e,t=new wO){return e.vertices.length!==0&&t.uint32(10).bytes(e.vertices),t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=sk();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==10)break;i.vertices=n.bytes();continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{vertices:_k(e.vertices)?hk(e.vertices):new Uint8Array}},toJSON(e){let t={};return e.vertices.length!==0&&(t.vertices=gk(e.vertices)),t},create(e){return ck.fromPartial(e??{})},fromPartial(e){let t=sk();return t.vertices=e.vertices??new Uint8Array,t}};function lk(){return{vertices:new Uint8Array,indices:new Uint8Array}}var uk={encode(e,t=new wO){return e.vertices.length!==0&&t.uint32(10).bytes(e.vertices),e.indices.length!==0&&t.uint32(18).bytes(e.indices),t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=lk();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==10)break;i.vertices=n.bytes();continue;case 2:if(e!==18)break;i.indices=n.bytes();continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{vertices:_k(e.vertices)?hk(e.vertices):new Uint8Array,indices:_k(e.indices)?hk(e.indices):new Uint8Array}},toJSON(e){let t={};return e.vertices.length!==0&&(t.vertices=gk(e.vertices)),e.indices.length!==0&&(t.indices=gk(e.indices)),t},create(e){return uk.fromPartial(e??{})},fromPartial(e){let t=lk();return t.vertices=e.vertices??new Uint8Array,t.indices=e.indices??new Uint8Array,t}};function dk(){return{classType:0}}var fk={encode(e,t=new wO){return e.classType!==0&&t.uint32(8).int32(e.classType),t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=dk();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==8)break;i.classType=n.int32();continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{classType:_k(e.classType)?$O(e.classType):0}},toJSON(e){let t={};return e.classType!==0&&(t.classType=ek(e.classType)),t},create(e){return fk.fromPartial(e??{})},fromPartial(e){let t=dk();return t.classType=e.classType??0,t}};function pk(){return{uuid:``,semanticLabel_META:void 0,locatable_META:void 0,boundary2D_META:void 0,bounded2D_META:void 0,bounded3D_META:void 0,roomLayout_META:void 0,spaceContainer_META:void 0,triangleMesh_META:void 0,dynamicObject_META:void 0}}var mk={encode(e,t=new wO){return e.uuid!==``&&t.uint32(10).string(e.uuid),e.semanticLabel_META!==void 0&&t.uint32(16).int32(e.semanticLabel_META),e.locatable_META!==void 0&&XO.encode(e.locatable_META,t.uint32(26).fork()).join(),e.boundary2D_META!==void 0&&ck.encode(e.boundary2D_META,t.uint32(34).fork()).join(),e.bounded2D_META!==void 0&&KO.encode(e.bounded2D_META,t.uint32(42).fork()).join(),e.bounded3D_META!==void 0&&JO.encode(e.bounded3D_META,t.uint32(50).fork()).join(),e.roomLayout_META!==void 0&&ik.encode(e.roomLayout_META,t.uint32(58).fork()).join(),e.spaceContainer_META!==void 0&&ok.encode(e.spaceContainer_META,t.uint32(66).fork()).join(),e.triangleMesh_META!==void 0&&uk.encode(e.triangleMesh_META,t.uint32(74).fork()).join(),e.dynamicObject_META!==void 0&&fk.encode(e.dynamicObject_META,t.uint32(82).fork()).join(),t},decode(e,t){let n=e instanceof jO?e:new jO(e),r=t===void 0?n.len:n.pos+t,i=pk();for(;n.pos<r;){let e=n.uint32();switch(e>>>3){case 1:if(e!==10)break;i.uuid=n.string();continue;case 2:if(e!==16)break;i.semanticLabel_META=n.int32();continue;case 3:if(e!==26)break;i.locatable_META=XO.decode(n,n.uint32());continue;case 4:if(e!==34)break;i.boundary2D_META=ck.decode(n,n.uint32());continue;case 5:if(e!==42)break;i.bounded2D_META=KO.decode(n,n.uint32());continue;case 6:if(e!==50)break;i.bounded3D_META=JO.decode(n,n.uint32());continue;case 7:if(e!==58)break;i.roomLayout_META=ik.decode(n,n.uint32());continue;case 8:if(e!==66)break;i.spaceContainer_META=ok.decode(n,n.uint32());continue;case 9:if(e!==74)break;i.triangleMesh_META=uk.decode(n,n.uint32());continue;case 10:if(e!==82)break;i.dynamicObject_META=fk.decode(n,n.uint32());continue}if((e&7)==4||e===0)break;n.skip(e&7)}return i},fromJSON(e){return{uuid:_k(e.uuid)?globalThis.String(e.uuid):``,semanticLabel_META:_k(e.semanticLabel_META)?tk(e.semanticLabel_META):void 0,locatable_META:_k(e.locatable_META)?XO.fromJSON(e.locatable_META):void 0,boundary2D_META:_k(e.boundary2D_META)?ck.fromJSON(e.boundary2D_META):void 0,bounded2D_META:_k(e.bounded2D_META)?KO.fromJSON(e.bounded2D_META):void 0,bounded3D_META:_k(e.bounded3D_META)?JO.fromJSON(e.bounded3D_META):void 0,roomLayout_META:_k(e.roomLayout_META)?ik.fromJSON(e.roomLayout_META):void 0,spaceContainer_META:_k(e.spaceContainer_META)?ok.fromJSON(e.spaceContainer_META):void 0,triangleMesh_META:_k(e.triangleMesh_META)?uk.fromJSON(e.triangleMesh_META):void 0,dynamicObject_META:_k(e.dynamicObject_META)?fk.fromJSON(e.dynamicObject_META):void 0}},toJSON(e){let t={};return e.uuid!==``&&(t.uuid=e.uuid),e.semanticLabel_META!==void 0&&(t.semanticLabel_META=nk(e.semanticLabel_META)),e.locatable_META!==void 0&&(t.locatable_META=XO.toJSON(e.locatable_META)),e.boundary2D_META!==void 0&&(t.boundary2D_META=ck.toJSON(e.boundary2D_META)),e.bounded2D_META!==void 0&&(t.bounded2D_META=KO.toJSON(e.bounded2D_META)),e.bounded3D_META!==void 0&&(t.bounded3D_META=JO.toJSON(e.bounded3D_META)),e.roomLayout_META!==void 0&&(t.roomLayout_META=ik.toJSON(e.roomLayout_META)),e.spaceContainer_META!==void 0&&(t.spaceContainer_META=ok.toJSON(e.spaceContainer_META)),e.triangleMesh_META!==void 0&&(t.triangleMesh_META=uk.toJSON(e.triangleMesh_META)),e.dynamicObject_META!==void 0&&(t.dynamicObject_META=fk.toJSON(e.dynamicObject_META)),t},create(e){return mk.fromPartial(e??{})},fromPartial(e){let t=pk();return t.uuid=e.uuid??``,t.semanticLabel_META=e.semanticLabel_META??void 0,t.locatable_META=e.locatable_META!==void 0&&e.locatable_META!==null?XO.fromPartial(e.locatable_META):void 0,t.boundary2D_META=e.boundary2D_META!==void 0&&e.boundary2D_META!==null?ck.fromPartial(e.boundary2D_META):void 0,t.bounded2D_META=e.bounded2D_META!==void 0&&e.bounded2D_META!==null?KO.fromPartial(e.bounded2D_META):void 0,t.bounded3D_META=e.bounded3D_META!==void 0&&e.bounded3D_META!==null?JO.fromPartial(e.bounded3D_META):void 0,t.roomLayout_META=e.roomLayout_META!==void 0&&e.roomLayout_META!==null?ik.fromPartial(e.roomLayout_META):void 0,t.spaceContainer_META=e.spaceContainer_META!==void 0&&e.spaceContainer_META!==null?ok.fromPartial(e.spaceContainer_META):void 0,t.triangleMesh_META=e.triangleMesh_META!==void 0&&e.triangleMesh_META!==null?uk.fromPartial(e.triangleMesh_META):void 0,t.dynamicObject_META=e.dynamicObject_META!==void 0&&e.dynamicObject_META!==null?fk.fromPartial(e.dynamicObject_META):void 0,t}};function hk(e){if(globalThis.Buffer)return Uint8Array.from(globalThis.Buffer.from(e,`base64`));{let t=globalThis.atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n[e]=t.charCodeAt(e);return n}}function gk(e){if(globalThis.Buffer)return globalThis.Buffer.from(e).toString(`base64`);{let t=[];return e.forEach(e=>{t.push(globalThis.String.fromCharCode(e))}),globalThis.btoa(t.join(``))}}function _k(e){return e!=null}var vk;(function(e){e.Locatable=`locatable`,e.Bounded3D=`bounded3D`,e.Bounded2D=`bounded2D`,e.TriangleMesh=`triangleMesh`,e.SemanticLabel=`semanticLabel`})(vk||={});var yk=class extends EventTarget{constructor(e){super(),this._spatialEntity=e}},bk=class extends yk{constructor(e,t){super(e),this._offset=new tu,this._extent=new tu,this.type=vk.Bounded2D;let{offset:n,extent:r}=t;this._offset.set(n.x,n.y),this._extent.set(r.width,r.height),this.buildGeometry()}buildGeometry(){var e;let t=new cp(this._extent.x,this._extent.y);t.translate(this._offset.x+this._extent.x/2,this._offset.y+this._extent.y/2,0),t.rotateX(Math.PI/2),(e=this._spatialEntity.geometry)==null||e.dispose(),this._spatialEntity.geometry=t}get offset(){return this._offset}get extent(){return this._extent}get initData(){return{offset:this.offset,extent:this.extent}}get pbData(){return{offset:{x:this._offset.x,y:this._offset.y},extent:{width:this._extent.x,height:this._extent.y}}}},xk=class extends yk{constructor(e,t){super(e),this._offset=new H,this._extent=new H,this.type=vk.Bounded3D;let{offset:n,extent:r}=t;this._offset.set(n.x,n.y,n.z),this._extent.set(r.width,r.height,r.depth),this.buildGeometry()}buildGeometry(){var e;let t=new Pf(this._extent.x,this._extent.y,this._extent.z);t.translate(this._offset.x+this._extent.x/2,this._offset.y+this._extent.y/2,this._offset.z+this._extent.z/2),(e=this._spatialEntity.geometry)==null||e.dispose(),this._spatialEntity.geometry=t}get offset(){return this._offset}get extent(){return this._extent}get initData(){return{offset:this.offset,extent:this.extent}}get pbData(){return{offset:{x:this._offset.x,y:this._offset.y,z:this._offset.z},extent:{width:this._extent.x,height:this._extent.y,depth:this._extent.z}}}},Sk=class extends yk{constructor(e,t){super(e),this.type=vk.Locatable,t.position&&this.position.copy(t.position),t.orientation&&this.orientation.copy(t.orientation)}get position(){return this._spatialEntity.position}get rotation(){return this._spatialEntity.rotation}get orientation(){return this._spatialEntity.quaternion}get initData(){return{position:{x:this.position.x,y:this.position.y,z:this.position.z},orientation:{x:this.orientation.x,y:this.orientation.y,z:this.orientation.z,w:this.orientation.w}}}get pbData(){return{position:{x:this._spatialEntity.position.x,y:this._spatialEntity.position.y,z:this._spatialEntity.position.z},orientation:{x:this._spatialEntity.quaternion.x,y:this._spatialEntity.quaternion.y,z:this._spatialEntity.quaternion.z,w:this._spatialEntity.quaternion.w}}}};function Ck(e){return e.toLowerCase().replace(/_/g,` `).trim()}var wk=class extends yk{constructor(e,t){super(e),this._semanticLabel=t,this.type=vk.SemanticLabel,this._spatialEntity.name=Ck(nk(t))}get semanticLabel(){return this._semanticLabel}set semanticLabel(e){Object.values($).includes(e)?this._semanticLabel=e:this._semanticLabel=$.UNRECOGNIZED,this._spatialEntity.name=Ck(nk(this._semanticLabel))}get initData(){return this._semanticLabel}get pbData(){return this._semanticLabel}};function Tk(e){let t=new Float32Array(e.length*3),n=0;for(let r of e)t[n++]=r.x,t[n++]=r.y,t[n++]=r.z;return t}var Ek=class extends yk{constructor(e,t){super(e),this._polygonCount=0,this._vertexCount=0,this._dimensions={x:0,y:0,z:0},this.type=vk.TriangleMesh;let{vertices:n,indices:r}=t,i=new Float32Array(n.buffer),a=new Uint32Array(r.buffer),o=[];for(let e=0;e<i.length/3;e++)o.push({x:i[3*e],y:i[3*e+1],z:i[3*e+2]});this._vertices=o,this._indices=[...a],this.buildGeometry();let s=e.material;s.polygonOffset=!0,s.polygonOffsetFactor=1,s.polygonOffsetUnits=.005,s.color.setHex(13948116),e.renderOrder=999}buildGeometry(){var e;let t=new pf,n=Tk(this._vertices);t.setAttribute(`position`,new tf(n,3)),t.setIndex(new tf(new Uint16Array(this._indices),1)),(e=this._spatialEntity.geometry)==null||e.dispose(),this._spatialEntity.geometry=t,t.computeVertexNormals(),this._vertexCount=t.attributes.position.count,this._polygonCount=t.index?t.index.count/3:this._vertexCount/3,t.computeBoundingBox();let r=t.boundingBox;this._dimensions={x:r.max.x-r.min.x,y:r.max.y-r.min.y,z:r.max.z-r.min.z}}get vertexCount(){return this._vertexCount}get polygonCount(){return this._polygonCount}get dimensions(){return this._dimensions}get initData(){return{vertices:this._vertices,indices:this._indices}}get pbData(){let e=Tk(this._vertices),t=new Uint32Array(this._indices);return{vertices:new Uint8Array(e.buffer),indices:new Uint8Array(t.buffer)}}},Dk=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`);Math.PI/180,180/Math.PI;function Ok(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dk[e&255]+Dk[e>>8&255]+Dk[e>>16&255]+Dk[e>>24&255]+`-`+Dk[t&255]+Dk[t>>8&255]+`-`+Dk[t>>16&15|64]+Dk[t>>24&255]+`-`+Dk[n&63|128]+Dk[n>>8&255]+`-`+Dk[n>>16&255]+Dk[n>>24&255]+Dk[r&255]+Dk[r>>8&255]+Dk[r>>16&255]+Dk[r>>24&255]).toLowerCase()}var kk;(function(e){e.Plane=`plane`,e.Box=`box`,e.Mesh=`mesh`})(kk||={});var Ak={[$.OTHER]:FT.Other,[$.TABLE]:FT.Table,[$.COUCH]:FT.Couch,[$.FLOOR]:FT.Floor,[$.CEILING]:FT.Ceiling,[$.WALL_FACE]:FT.Wall,[$.INVISIBLE_WALL_FACE]:FT.Window,[$.INNER_WALL_FACE]:FT.Wall,[$.DOOR_FRAME]:FT.Door,[$.WINDOW_FRAME]:FT.Window,[$.WALL_ART]:FT.WallArt,[$.STORAGE]:FT.Shelf,[$.BED]:FT.Bed,[$.LAMP]:FT.Lamp,[$.SCREEN]:FT.Screen,[$.PLANT]:FT.Plant,[$.GLOBAL_MESH]:FT.GlobalMesh,[$.CHAIR]:FT.Couch,[$.UNKNOWN]:FT.Other,[$.OTHER_ROOM_FACE]:FT.Other,[$.OPENING]:FT.Other,[$.UNRECOGNIZED]:FT.Other},jk=class e extends jf{constructor(e=Ok()){super(void 0,new Dg({color:16777215*Math.random(),flatShading:!0})),this.name=`generic spatial entity`,this.isSpatialEntity=!0,this._componentMap=new Map,this._spatialUUID=e}get spatialUUID(){return this._spatialUUID}updateMatrixWorld(e){super.updateMatrixWorld(e)}addComponent(e,t){let n=null;switch(e){case vk.Locatable:n=new Sk(this,t);break;case vk.Bounded3D:n=new xk(this,t);break;case vk.Bounded2D:n=new bk(this,t);break;case vk.TriangleMesh:n=new Ek(this,t);break;case vk.SemanticLabel:n=new wk(this,t);break}n&&this._componentMap.set(e,n)}getComponent(e){return this._componentMap.get(e)}duplicate(){let t=new e;return this._componentMap.forEach((e,n,r)=>{t.addComponent(e.type,e.initData)}),t}get nativeEntity(){if(!this._nativeEntity){let e=new YT({x:this.position.x,y:this.position.y,z:this.position.z,w:1},{x:this.quaternion.x,y:this.quaternion.y,z:this.quaternion.z,w:this.quaternion.w}),t=Ak[this.getComponent(vk.SemanticLabel).semanticLabel];if(this.entityType===kk.Plane){let{offset:n,extent:r}=this.getComponent(vk.Bounded2D),i=[new DOMPointReadOnly(n.x,0,n.y),new DOMPointReadOnly(n.x+r.x,0,n.y),new DOMPointReadOnly(n.x+r.x,0,n.y+r.y),new DOMPointReadOnly(n.x,0,n.y+r.y),new DOMPointReadOnly(n.x,0,n.y)];this._nativeEntity=new VT(e,i,t)}else if(this.entityType===kk.Box||this.entityType===kk.Mesh){let n=this.geometry.getAttribute(`position`).array,r=new Uint32Array(this.geometry.index.array);this._nativeEntity=new PT(e,n,r,t)}}return this._nativeEntity}static fromPBJSON(t){let n=mk.fromJSON(t);if(n.locatable_META){let t=new e(n.uuid);return t.addComponent(vk.Locatable,n.locatable_META),n.semanticLabel_META&&t.addComponent(vk.SemanticLabel,n.semanticLabel_META),n.bounded2D_META?t.addComponent(vk.Bounded2D,n.bounded2D_META):n.bounded3D_META?t.addComponent(vk.Bounded3D,n.bounded3D_META):n.triangleMesh_META&&t.addComponent(vk.TriangleMesh,n.triangleMesh_META),t}}get entityType(){if(this.getComponent(vk.Bounded2D))return kk.Plane;if(this.getComponent(vk.Bounded3D))return kk.Box;if(this.getComponent(vk.TriangleMesh))return kk.Mesh}static toPBJSON(e){return{uuid:e.spatialUUID,locatable_META:e.getComponent(vk.Locatable)?.pbData,boundary2D_META:void 0,bounded2D_META:e.getComponent(vk.Bounded2D)?.pbData,bounded3D_META:e.getComponent(vk.Bounded3D)?.pbData,semanticLabel_META:e.getComponent(vk.SemanticLabel)?.pbData,roomLayout_META:void 0,spaceContainer_META:void 0,triangleMesh_META:e.getComponent(vk.TriangleMesh)?.pbData,dynamicObject_META:void 0}}},Mk={living_room:()=>S(()=>import(`./living_room-BnsZND9o.js`),[],import.meta.url),meeting_room:()=>S(()=>import(`./meeting_room-C9JCGYA6.js`),[],import.meta.url),music_room:()=>S(()=>import(`./music_room-DXDuiouU.js`),[],import.meta.url),office_large:()=>S(()=>import(`./office_large-BnjKbEmY.js`),[],import.meta.url),office_small:()=>S(()=>import(`./office_small-BhdJR0DT.js`),[],import.meta.url)},Nk=`0.2.4`,Pk=new H(0,0,-1),Fk=class extends EventTarget{constructor(e){super(),this.xrDevice=e,this.trackedPlanes=new Set,this.trackedMeshes=new Set,this.version=Nk,this.objectMap=new Map,this.planes=new eg,this.boxes=new eg,this.meshes=new eg,this.tempPosition=new H,this.tempQuaternion=new ku,this.tempDirection=new H,this.tempScale=new H,this.tempMatrix=new ad,this.raycaster=new r_,this.hitTestTarget=new eg,this.hitTestMarker=new Md,this.worldNormal=new H,this.normalMatrix=new nu,this.scene=new fg,this.scene.background=new Jd(4079166),this.camera=new qf(50,window.innerWidth/window.innerHeight,.1,40),this.camera.position.set(0,1.6,5);let t=new o_(50,50);this.scene.add(t),this.scene.add(this.planes,this.boxes,this.meshes),this.planes.renderOrder=1,this.boxes.renderOrder=2,this.meshes.renderOrder=3,this.planes.visible=!1,this.boxes.visible=!1,this.renderer=new dg({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.domElement.style.position=`fixed`,this.renderer.domElement.style.top=`50vh`,this.renderer.domElement.style.left=`50vw`,this.renderer.domElement.style.transform=`translate(-50%, -50%)`,this.hitTestTarget.add(this.hitTestMarker),this.hitTestMarker.rotateX(Math.PI/2)}get environmentCanvas(){return this.renderer.domElement}get planesVisible(){return this.planes.visible}set planesVisible(e){this.planes.visible=e}get boundingBoxesVisible(){return this.boxes.visible}set boundingBoxesVisible(e){this.boxes.visible=e}get meshesVisible(){return this.meshes.visible}set meshesVisible(e){this.meshes.visible=e}render(){this.camera.position.copy(this.xrDevice.position),this.camera.quaternion.copy(this.xrDevice.quaternion);let e=this.xrDevice.fovy/Math.PI*180,t=!1;this.camera.fov!==e&&(this.camera.fov=e,t=!0);let n=this.xrDevice.canvasDimensions;if(n){let e=this.renderer.domElement;(e.width!==n.width||e.height!==n.height)&&(this.camera.aspect=n.width/n.height,this.renderer.setSize(n.width,n.height),t=!0)}t&&this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera)}deleteAll(){[...this.objectMap.values()].forEach(e=>{e.removeFromParent()}),this.objectMap.clear(),this.trackedMeshes.clear(),this.trackedPlanes.clear()}loadEnvironment(e){this.deleteAll(),e.spatialEntities.forEach(e=>{let t=jk.fromPBJSON(e);if(t){switch(t.entityType){case kk.Box:this.boxes.add(t),this.trackedMeshes.add(t.nativeEntity);break;case kk.Plane:this.planes.add(t),this.trackedPlanes.add(t.nativeEntity);break;case kk.Mesh:this.meshes.add(t),this.trackedMeshes.add(t.nativeEntity);break}let n=this.objectMap.get(e.uuid);n&&n.removeFromParent(),this.objectMap.set(e.uuid,t)}})}loadDefaultEnvironment(e){if(typeof __IS_UMD__<`u`&&__IS_UMD__){let t=`https://www.unpkg.com/@iwer/sem@${Nk}/captures/${e}.json`;fetch(t).then(e=>{if(!e.ok)throw Error(`Network response was not ok: ${e.statusText}`);return e.json()}).then(e=>{this.loadEnvironment(e)}).catch(t=>{console.error(`Error loading environment ${e} from CDN`,t)})}else{let t=Mk[e];if(!t){console.error(`Requested environment ${e} does not exist`);return}t().then(e=>{let t=e.default;this.loadEnvironment(t)}).catch(t=>{console.error(`Error loading environment ${e} locally`,t)})}}computeHitTestResults(e){return this.tempMatrix.fromArray(e),this.tempMatrix.decompose(this.tempPosition,this.tempQuaternion,this.tempScale),this.tempDirection.copy(Pk).applyQuaternion(this.tempQuaternion).normalize(),this.raycaster.set(this.tempPosition,this.tempDirection),this.raycaster.intersectObject(this.meshes,!0).map(e=>{let t=e.point;if(this.hitTestTarget.position.copy(t),e.face?.normal){this.worldNormal.copy(e.face.normal);let n=e.object;this.worldNormal.applyMatrix3(this.normalMatrix.getNormalMatrix(n.matrixWorld)).normalize(),this.hitTestTarget.lookAt(this.tempPosition.addVectors(t,this.worldNormal))}else this.hitTestTarget.quaternion.set(0,0,0,1);return this.hitTestTarget.updateMatrixWorld(!0),this.hitTestMarker.matrixWorld.toArray()})}},Ik={metaQuest3:iO,metaQuest2:nO,metaQuestPro:rO,oculusQuest1:tO},Lk=[`office_small`,`meeting_room`,`living_room`,`music_room`,`office_large`],Rk=[`left`,`none`,`right`];function zk(e){let t=new qD(Ik[typeof e==`string`?e:e.type??`metaQuest3`],typeof e==`string`?void 0:e);typeof e!=`string`&&(Uk(t,e.headset),Hk(t.hands,e.hand),Hk(t.controllers,e.controller),t.primaryInputMode=e.primaryInputMode??`controller`),t.ipd=typeof e==`string`?0:e.ipd??0,t.installRuntime(),t.installDevUI(Hy);let n=typeof e==`string`||e.syntheticEnvironment;return n===!1||(t.installSEM(Fk),n===null)?t:typeof n==`string`&&Lk.includes(n)?(t.sem?.loadDefaultEnvironment(n),t):n===!0||n===void 0?(t.sem?.loadDefaultEnvironment(Lk[0]),t):typeof n==`object`?(t.sem?.loadEnvironment(n),t):(fetch(n).then(e=>e.json()).then(e=>t.sem?.loadEnvironment(e)).catch(console.error),t)}var Bk=new _,Vk=new O;function Hk(e,t){if(t!=null)for(let n of Rk)Uk(e[n],t[n])}function Uk(e,t){e==null||t==null||(Wk(e.position,t.position),Wk(Bk,t.rotation),Gk(e.quaternion,Vk.setFromEuler(Bk)),Gk(e.quaternion,t.quaternion))}function Wk(e,t){if(t!=null){if(t instanceof _&&e instanceof _&&e.copy(t),Array.isArray(t)){e.x=t[0],e.y=t[1],e.z=t[2];return}e.x=t.x,e.y=t.y,e.z=t.z}}function Gk(e,t){if(t!=null){if(Array.isArray(t)){e.x=t[0],e.y=t[1],e.z=t[2],e.w=t[3];return}e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w}}export{zk as emulate};
//# sourceMappingURL=emulate-6-RYevoi.js.map