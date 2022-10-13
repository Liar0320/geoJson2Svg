(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();function Ai(n,t){const e=Object.create(null),r=n.split(",");for(let i=0;i<r.length;i++)e[r[i]]=!0;return t?i=>!!e[i.toLowerCase()]:i=>!!e[i]}const e2="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",r2=Ai(e2);function y1(n){return!!n||n===""}function Ci(n){if(W(n)){const t={};for(let e=0;e<n.length;e++){const r=n[e],i=xn(r)?s2(r):Ci(r);if(i)for(const o in i)t[o]=i[o]}return t}else{if(xn(n))return n;if(pn(n))return n}}const i2=/;(?![^(]*\))/g,o2=/:(.+)/;function s2(n){const t={};return n.split(i2).forEach(e=>{if(e){const r=e.split(o2);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ni(n){let t="";if(xn(n))t=n;else if(W(n))for(let e=0;e<n.length;e++){const r=Ni(n[e]);r&&(t+=r+" ")}else if(pn(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const tn={},Dt=[],Un=()=>{},l2=()=>!1,f2=/^on[^a-z]/,pr=n=>f2.test(n),Ti=n=>n.startsWith("onUpdate:"),yn=Object.assign,Mi=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},u2=Object.prototype.hasOwnProperty,Z=(n,t)=>u2.call(n,t),W=Array.isArray,ce=n=>dr(n)==="[object Map]",c2=n=>dr(n)==="[object Set]",X=n=>typeof n=="function",xn=n=>typeof n=="string",Ii=n=>typeof n=="symbol",pn=n=>n!==null&&typeof n=="object",x1=n=>pn(n)&&X(n.then)&&X(n.catch),a2=Object.prototype.toString,dr=n=>a2.call(n),h2=n=>dr(n).slice(8,-1),p2=n=>dr(n)==="[object Object]",Pi=n=>xn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ke=Ai(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gr=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},d2=/-(\w)/g,Kt=gr(n=>n.replace(d2,(t,e)=>e?e.toUpperCase():"")),g2=/\B([A-Z])/g,Jt=gr(n=>n.replace(g2,"-$1").toLowerCase()),w1=gr(n=>n.charAt(0).toUpperCase()+n.slice(1)),Mr=gr(n=>n?`on${w1(n)}`:""),he=(n,t)=>!Object.is(n,t),Ue=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},Ye=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},Kr=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let so;const _2=()=>so||(so=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Xn;class m2{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Xn&&(this.parent=Xn,this.index=(Xn.scopes||(Xn.scopes=[])).push(this)-1)}run(t){if(this.active){const e=Xn;try{return Xn=this,t()}finally{Xn=e}}}on(){Xn=this}off(){Xn=this.parent}stop(t){if(this.active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function v2(n,t=Xn){t&&t.active&&t.effects.push(n)}const Ri=n=>{const t=new Set(n);return t.w=0,t.n=0,t},E1=n=>(n.w&pt)>0,b1=n=>(n.n&pt)>0,y2=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=pt},x2=n=>{const{deps:t}=n;if(t.length){let e=0;for(let r=0;r<t.length;r++){const i=t[r];E1(i)&&!b1(i)?i.delete(n):t[e++]=i,i.w&=~pt,i.n&=~pt}t.length=e}},qr=new WeakMap;let ee=0,pt=1;const zr=30;let Ln;const bt=Symbol(""),Wr=Symbol("");class Fi{constructor(t,e=null,r){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,v2(this,r)}run(){if(!this.active)return this.fn();let t=Ln,e=at;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ln,Ln=this,at=!0,pt=1<<++ee,ee<=zr?y2(this):lo(this),this.fn()}finally{ee<=zr&&x2(this),pt=1<<--ee,Ln=this.parent,at=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ln===this?this.deferStop=!0:this.active&&(lo(this),this.onStop&&this.onStop(),this.active=!1)}}function lo(n){const{deps:t}=n;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(n);t.length=0}}let at=!0;const S1=[];function Zt(){S1.push(at),at=!1}function Qt(){const n=S1.pop();at=n===void 0?!0:n}function Nn(n,t,e){if(at&&Ln){let r=qr.get(n);r||qr.set(n,r=new Map);let i=r.get(e);i||r.set(e,i=Ri()),A1(i)}}function A1(n,t){let e=!1;ee<=zr?b1(n)||(n.n|=pt,e=!E1(n)):e=!n.has(Ln),e&&(n.add(Ln),Ln.deps.push(n))}function rt(n,t,e,r,i,o){const s=qr.get(n);if(!s)return;let l=[];if(t==="clear")l=[...s.values()];else if(e==="length"&&W(n))s.forEach((f,c)=>{(c==="length"||c>=r)&&l.push(f)});else switch(e!==void 0&&l.push(s.get(e)),t){case"add":W(n)?Pi(e)&&l.push(s.get("length")):(l.push(s.get(bt)),ce(n)&&l.push(s.get(Wr)));break;case"delete":W(n)||(l.push(s.get(bt)),ce(n)&&l.push(s.get(Wr)));break;case"set":ce(n)&&l.push(s.get(bt));break}if(l.length===1)l[0]&&Xr(l[0]);else{const f=[];for(const c of l)c&&f.push(...c);Xr(Ri(f))}}function Xr(n,t){const e=W(n)?n:[...n];for(const r of e)r.computed&&fo(r);for(const r of e)r.computed||fo(r)}function fo(n,t){(n!==Ln||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const w2=Ai("__proto__,__v_isRef,__isVue"),C1=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ii)),E2=$i(),b2=$i(!1,!0),S2=$i(!0),uo=A2();function A2(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const r=G(this);for(let o=0,s=this.length;o<s;o++)Nn(r,"get",o+"");const i=r[t](...e);return i===-1||i===!1?r[t](...e.map(G)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){Zt();const r=G(this)[t].apply(this,e);return Qt(),r}}),n}function $i(n=!1,t=!1){return function(r,i,o){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&o===(n?t?U2:P1:t?I1:M1).get(r))return r;const s=W(r);if(!n&&s&&Z(uo,i))return Reflect.get(uo,i,o);const l=Reflect.get(r,i,o);return(Ii(i)?C1.has(i):w2(i))||(n||Nn(r,"get",i),t)?l:mn(l)?s&&Pi(i)?l:l.value:pn(l)?n?R1(l):mr(l):l}}const C2=N1(),N2=N1(!0);function N1(n=!1){return function(e,r,i,o){let s=e[r];if(qt(s)&&mn(s)&&!mn(i))return!1;if(!n&&(!Je(i)&&!qt(i)&&(s=G(s),i=G(i)),!W(e)&&mn(s)&&!mn(i)))return s.value=i,!0;const l=W(e)&&Pi(r)?Number(r)<e.length:Z(e,r),f=Reflect.set(e,r,i,o);return e===G(o)&&(l?he(i,s)&&rt(e,"set",r,i):rt(e,"add",r,i)),f}}function T2(n,t){const e=Z(n,t);n[t];const r=Reflect.deleteProperty(n,t);return r&&e&&rt(n,"delete",t,void 0),r}function M2(n,t){const e=Reflect.has(n,t);return(!Ii(t)||!C1.has(t))&&Nn(n,"has",t),e}function I2(n){return Nn(n,"iterate",W(n)?"length":bt),Reflect.ownKeys(n)}const T1={get:E2,set:C2,deleteProperty:T2,has:M2,ownKeys:I2},P2={get:S2,set(n,t){return!0},deleteProperty(n,t){return!0}},R2=yn({},T1,{get:b2,set:N2}),Oi=n=>n,_r=n=>Reflect.getPrototypeOf(n);function Te(n,t,e=!1,r=!1){n=n.__v_raw;const i=G(n),o=G(t);e||(t!==o&&Nn(i,"get",t),Nn(i,"get",o));const{has:s}=_r(i),l=r?Oi:e?Di:pe;if(s.call(i,t))return l(n.get(t));if(s.call(i,o))return l(n.get(o));n!==i&&n.get(t)}function Me(n,t=!1){const e=this.__v_raw,r=G(e),i=G(n);return t||(n!==i&&Nn(r,"has",n),Nn(r,"has",i)),n===i?e.has(n):e.has(n)||e.has(i)}function Ie(n,t=!1){return n=n.__v_raw,!t&&Nn(G(n),"iterate",bt),Reflect.get(n,"size",n)}function co(n){n=G(n);const t=G(this);return _r(t).has.call(t,n)||(t.add(n),rt(t,"add",n,n)),this}function ao(n,t){t=G(t);const e=G(this),{has:r,get:i}=_r(e);let o=r.call(e,n);o||(n=G(n),o=r.call(e,n));const s=i.call(e,n);return e.set(n,t),o?he(t,s)&&rt(e,"set",n,t):rt(e,"add",n,t),this}function ho(n){const t=G(this),{has:e,get:r}=_r(t);let i=e.call(t,n);i||(n=G(n),i=e.call(t,n)),r&&r.call(t,n);const o=t.delete(n);return i&&rt(t,"delete",n,void 0),o}function po(){const n=G(this),t=n.size!==0,e=n.clear();return t&&rt(n,"clear",void 0,void 0),e}function Pe(n,t){return function(r,i){const o=this,s=o.__v_raw,l=G(s),f=t?Oi:n?Di:pe;return!n&&Nn(l,"iterate",bt),s.forEach((c,u)=>r.call(i,f(c),f(u),o))}}function Re(n,t,e){return function(...r){const i=this.__v_raw,o=G(i),s=ce(o),l=n==="entries"||n===Symbol.iterator&&s,f=n==="keys"&&s,c=i[n](...r),u=e?Oi:t?Di:pe;return!t&&Nn(o,"iterate",f?Wr:bt),{next(){const{value:a,done:h}=c.next();return h?{value:a,done:h}:{value:l?[u(a[0]),u(a[1])]:u(a),done:h}},[Symbol.iterator](){return this}}}}function lt(n){return function(...t){return n==="delete"?!1:this}}function F2(){const n={get(o){return Te(this,o)},get size(){return Ie(this)},has:Me,add:co,set:ao,delete:ho,clear:po,forEach:Pe(!1,!1)},t={get(o){return Te(this,o,!1,!0)},get size(){return Ie(this)},has:Me,add:co,set:ao,delete:ho,clear:po,forEach:Pe(!1,!0)},e={get(o){return Te(this,o,!0)},get size(){return Ie(this,!0)},has(o){return Me.call(this,o,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Pe(!0,!1)},r={get(o){return Te(this,o,!0,!0)},get size(){return Ie(this,!0)},has(o){return Me.call(this,o,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Pe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Re(o,!1,!1),e[o]=Re(o,!0,!1),t[o]=Re(o,!1,!0),r[o]=Re(o,!0,!0)}),[n,e,t,r]}const[$2,O2,L2,H2]=F2();function Li(n,t){const e=t?n?H2:L2:n?O2:$2;return(r,i,o)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(Z(e,i)&&i in r?e:r,i,o)}const D2={get:Li(!1,!1)},B2={get:Li(!1,!0)},k2={get:Li(!0,!1)},M1=new WeakMap,I1=new WeakMap,P1=new WeakMap,U2=new WeakMap;function K2(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function q2(n){return n.__v_skip||!Object.isExtensible(n)?0:K2(h2(n))}function mr(n){return qt(n)?n:Hi(n,!1,T1,D2,M1)}function z2(n){return Hi(n,!1,R2,B2,I1)}function R1(n){return Hi(n,!0,P2,k2,P1)}function Hi(n,t,e,r,i){if(!pn(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const o=i.get(n);if(o)return o;const s=q2(n);if(s===0)return n;const l=new Proxy(n,s===2?r:e);return i.set(n,l),l}function Bt(n){return qt(n)?Bt(n.__v_raw):!!(n&&n.__v_isReactive)}function qt(n){return!!(n&&n.__v_isReadonly)}function Je(n){return!!(n&&n.__v_isShallow)}function F1(n){return Bt(n)||qt(n)}function G(n){const t=n&&n.__v_raw;return t?G(t):n}function $1(n){return Ye(n,"__v_skip",!0),n}const pe=n=>pn(n)?mr(n):n,Di=n=>pn(n)?R1(n):n;function O1(n){at&&Ln&&(n=G(n),A1(n.dep||(n.dep=Ri())))}function L1(n,t){n=G(n),n.dep&&Xr(n.dep)}function mn(n){return!!(n&&n.__v_isRef===!0)}function W2(n){return H1(n,!1)}function X2(n){return H1(n,!0)}function H1(n,t){return mn(n)?n:new V2(n,t)}class V2{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:G(t),this._value=e?t:pe(t)}get value(){return O1(this),this._value}set value(t){const e=this.__v_isShallow||Je(t)||qt(t);t=e?t:G(t),he(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:pe(t),L1(this))}}function D1(n){return mn(n)?n.value:n}const Y2={get:(n,t,e)=>D1(Reflect.get(n,t,e)),set:(n,t,e,r)=>{const i=n[t];return mn(i)&&!mn(e)?(i.value=e,!0):Reflect.set(n,t,e,r)}};function B1(n){return Bt(n)?n:new Proxy(n,Y2)}var k1;class J2{constructor(t,e,r,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[k1]=!1,this._dirty=!0,this.effect=new Fi(t,()=>{this._dirty||(this._dirty=!0,L1(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=G(this);return O1(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}k1="__v_isReadonly";function Z2(n,t,e=!1){let r,i;const o=X(n);return o?(r=n,i=Un):(r=n.get,i=n.set),new J2(r,i,o||!i,e)}function ht(n,t,e,r){let i;try{i=r?n(...r):n()}catch(o){vr(o,t,e)}return i}function Fn(n,t,e,r){if(X(n)){const o=ht(n,t,e,r);return o&&x1(o)&&o.catch(s=>{vr(s,t,e)}),o}const i=[];for(let o=0;o<n.length;o++)i.push(Fn(n[o],t,e,r));return i}function vr(n,t,e,r=!0){const i=t?t.vnode:null;if(t){let o=t.parent;const s=t.proxy,l=e;for(;o;){const c=o.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,s,l)===!1)return}o=o.parent}const f=t.appContext.config.errorHandler;if(f){ht(f,null,10,[n,s,l]);return}}Q2(n,e,i,r)}function Q2(n,t,e,r=!0){console.error(n)}let de=!1,Vr=!1;const vn=[];let Yn=0;const kt=[];let tt=null,vt=0;const U1=Promise.resolve();let Bi=null;function j2(n){const t=Bi||U1;return n?t.then(this?n.bind(this):n):t}function G2(n){let t=Yn+1,e=vn.length;for(;t<e;){const r=t+e>>>1;ge(vn[r])<n?t=r+1:e=r}return t}function ki(n){(!vn.length||!vn.includes(n,de&&n.allowRecurse?Yn+1:Yn))&&(n.id==null?vn.push(n):vn.splice(G2(n.id),0,n),K1())}function K1(){!de&&!Vr&&(Vr=!0,Bi=U1.then(z1))}function nl(n){const t=vn.indexOf(n);t>Yn&&vn.splice(t,1)}function tl(n){W(n)?kt.push(...n):(!tt||!tt.includes(n,n.allowRecurse?vt+1:vt))&&kt.push(n),K1()}function go(n,t=de?Yn+1:0){for(;t<vn.length;t++){const e=vn[t];e&&e.pre&&(vn.splice(t,1),t--,e())}}function q1(n){if(kt.length){const t=[...new Set(kt)];if(kt.length=0,tt){tt.push(...t);return}for(tt=t,tt.sort((e,r)=>ge(e)-ge(r)),vt=0;vt<tt.length;vt++)tt[vt]();tt=null,vt=0}}const ge=n=>n.id==null?1/0:n.id,el=(n,t)=>{const e=ge(n)-ge(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function z1(n){Vr=!1,de=!0,vn.sort(el);const t=Un;try{for(Yn=0;Yn<vn.length;Yn++){const e=vn[Yn];e&&e.active!==!1&&ht(e,null,14)}}finally{Yn=0,vn.length=0,q1(),de=!1,Bi=null,(vn.length||kt.length)&&z1()}}function rl(n,t,...e){if(n.isUnmounted)return;const r=n.vnode.props||tn;let i=e;const o=t.startsWith("update:"),s=o&&t.slice(7);if(s&&s in r){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:a,trim:h}=r[u]||tn;h&&(i=e.map(g=>g.trim())),a&&(i=e.map(Kr))}let l,f=r[l=Mr(t)]||r[l=Mr(Kt(t))];!f&&o&&(f=r[l=Mr(Jt(t))]),f&&Fn(f,n,6,i);const c=r[l+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Fn(c,n,6,i)}}function W1(n,t,e=!1){const r=t.emitsCache,i=r.get(n);if(i!==void 0)return i;const o=n.emits;let s={},l=!1;if(!X(n)){const f=c=>{const u=W1(c,t,!0);u&&(l=!0,yn(s,u))};!e&&t.mixins.length&&t.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}return!o&&!l?(pn(n)&&r.set(n,null),null):(W(o)?o.forEach(f=>s[f]=null):yn(s,o),pn(n)&&r.set(n,s),s)}function yr(n,t){return!n||!pr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(n,t[0].toLowerCase()+t.slice(1))||Z(n,Jt(t))||Z(n,t))}let Bn=null,X1=null;function Ze(n){const t=Bn;return Bn=n,X1=n&&n.type.__scopeId||null,t}function il(n,t=Bn,e){if(!t||n._n)return n;const r=(...i)=>{r._d&&Ao(-1);const o=Ze(t),s=n(...i);return Ze(o),r._d&&Ao(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function Ir(n){const{type:t,vnode:e,proxy:r,withProxy:i,props:o,propsOptions:[s],slots:l,attrs:f,emit:c,render:u,renderCache:a,data:h,setupState:g,ctx:_,inheritAttrs:v}=n;let b,T;const R=Ze(n);try{if(e.shapeFlag&4){const N=i||r;b=Vn(u.call(N,N,a,o,g,h,_)),T=f}else{const N=t;b=Vn(N.length>1?N(o,{attrs:f,slots:l,emit:c}):N(o,null)),T=t.props?f:ol(f)}}catch(N){ae.length=0,vr(N,n,1),b=St(et)}let P=b;if(T&&v!==!1){const N=Object.keys(T),{shapeFlag:$}=P;N.length&&$&7&&(s&&N.some(Ti)&&(T=sl(T,s)),P=dt(P,T))}return e.dirs&&(P=dt(P),P.dirs=P.dirs?P.dirs.concat(e.dirs):e.dirs),e.transition&&(P.transition=e.transition),b=P,Ze(R),b}const ol=n=>{let t;for(const e in n)(e==="class"||e==="style"||pr(e))&&((t||(t={}))[e]=n[e]);return t},sl=(n,t)=>{const e={};for(const r in n)(!Ti(r)||!(r.slice(9)in t))&&(e[r]=n[r]);return e};function ll(n,t,e){const{props:r,children:i,component:o}=n,{props:s,children:l,patchFlag:f}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?_o(r,s,c):!!s;if(f&8){const u=t.dynamicProps;for(let a=0;a<u.length;a++){const h=u[a];if(s[h]!==r[h]&&!yr(c,h))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===s?!1:r?s?_o(r,s,c):!0:!!s;return!1}function _o(n,t,e){const r=Object.keys(t);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==n[o]&&!yr(e,o))return!0}return!1}function fl({vnode:n,parent:t},e){for(;t&&t.subTree===n;)(n=t.vnode).el=e,t=t.parent}const ul=n=>n.__isSuspense;function cl(n,t){t&&t.pendingBranch?W(n)?t.effects.push(...n):t.effects.push(n):tl(n)}function al(n,t){if(_n){let e=_n.provides;const r=_n.parent&&_n.parent.provides;r===e&&(e=_n.provides=Object.create(r)),e[n]=t}}function Pr(n,t,e=!1){const r=_n||Bn;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&n in i)return i[n];if(arguments.length>1)return e&&X(t)?t.call(r.proxy):t}}function hl(n,t){return Ui(n,null,t)}const mo={};function Rr(n,t,e){return Ui(n,t,e)}function Ui(n,t,{immediate:e,deep:r,flush:i,onTrack:o,onTrigger:s}=tn){const l=_n;let f,c=!1,u=!1;if(mn(n)?(f=()=>n.value,c=Je(n)):Bt(n)?(f=()=>n,r=!0):W(n)?(u=!0,c=n.some(T=>Bt(T)||Je(T)),f=()=>n.map(T=>{if(mn(T))return T.value;if(Bt(T))return wt(T);if(X(T))return ht(T,l,2)})):X(n)?t?f=()=>ht(n,l,2):f=()=>{if(!(l&&l.isUnmounted))return a&&a(),Fn(n,l,3,[h])}:f=Un,t&&r){const T=f;f=()=>wt(T())}let a,h=T=>{a=b.onStop=()=>{ht(T,l,4)}};if(me)return h=Un,t?e&&Fn(t,l,3,[f(),u?[]:void 0,h]):f(),Un;let g=u?[]:mo;const _=()=>{if(!!b.active)if(t){const T=b.run();(r||c||(u?T.some((R,P)=>he(R,g[P])):he(T,g)))&&(a&&a(),Fn(t,l,3,[T,g===mo?void 0:g,h]),g=T)}else b.run()};_.allowRecurse=!!t;let v;i==="sync"?v=_:i==="post"?v=()=>En(_,l&&l.suspense):(_.pre=!0,l&&(_.id=l.uid),v=()=>ki(_));const b=new Fi(f,v);return t?e?_():g=b.run():i==="post"?En(b.run.bind(b),l&&l.suspense):b.run(),()=>{b.stop(),l&&l.scope&&Mi(l.scope.effects,b)}}function pl(n,t,e){const r=this.proxy,i=xn(n)?n.includes(".")?V1(r,n):()=>r[n]:n.bind(r,r);let o;X(t)?o=t:(o=t.handler,e=t);const s=_n;zt(this);const l=Ui(i,o.bind(r),e);return s?zt(s):At(),l}function V1(n,t){const e=t.split(".");return()=>{let r=n;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function wt(n,t){if(!pn(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),mn(n))wt(n.value,t);else if(W(n))for(let e=0;e<n.length;e++)wt(n[e],t);else if(c2(n)||ce(n))n.forEach(e=>{wt(e,t)});else if(p2(n))for(const e in n)wt(n[e],t);return n}function dl(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ki(()=>{n.isMounted=!0}),Q1(()=>{n.isUnmounting=!0}),n}const Pn=[Function,Array],gl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pn,onEnter:Pn,onAfterEnter:Pn,onEnterCancelled:Pn,onBeforeLeave:Pn,onLeave:Pn,onAfterLeave:Pn,onLeaveCancelled:Pn,onBeforeAppear:Pn,onAppear:Pn,onAfterAppear:Pn,onAppearCancelled:Pn},setup(n,{slots:t}){const e=ef(),r=dl();let i;return()=>{const o=t.default&&J1(t.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){for(const v of o)if(v.type!==et){s=v;break}}const l=G(n),{mode:f}=l;if(r.isLeaving)return Fr(s);const c=vo(s);if(!c)return Fr(s);const u=Yr(c,l,r,e);Jr(c,u);const a=e.subTree,h=a&&vo(a);let g=!1;const{getTransitionKey:_}=c.type;if(_){const v=_();i===void 0?i=v:v!==i&&(i=v,g=!0)}if(h&&h.type!==et&&(!yt(c,h)||g)){const v=Yr(h,l,r,e);if(Jr(h,v),f==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,e.update()},Fr(s);f==="in-out"&&c.type!==et&&(v.delayLeave=(b,T,R)=>{const P=Y1(r,h);P[String(h.key)]=h,b._leaveCb=()=>{T(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=R})}return s}}},_l=gl;function Y1(n,t){const{leavingVNodes:e}=n;let r=e.get(t.type);return r||(r=Object.create(null),e.set(t.type,r)),r}function Yr(n,t,e,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:a,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:v,onAppear:b,onAfterAppear:T,onAppearCancelled:R}=t,P=String(n.key),N=Y1(e,n),$=(I,B)=>{I&&Fn(I,r,9,B)},U=(I,B)=>{const k=B[1];$(I,B),W(I)?I.every(O=>O.length<=1)&&k():I.length<=1&&k()},V={mode:o,persisted:s,beforeEnter(I){let B=l;if(!e.isMounted)if(i)B=v||l;else return;I._leaveCb&&I._leaveCb(!0);const k=N[P];k&&yt(n,k)&&k.el._leaveCb&&k.el._leaveCb(),$(B,[I])},enter(I){let B=f,k=c,O=u;if(!e.isMounted)if(i)B=b||f,k=T||c,O=R||u;else return;let on=!1;const j=I._enterCb=Q=>{on||(on=!0,Q?$(O,[I]):$(k,[I]),V.delayedLeave&&V.delayedLeave(),I._enterCb=void 0)};B?U(B,[I,j]):j()},leave(I,B){const k=String(n.key);if(I._enterCb&&I._enterCb(!0),e.isUnmounting)return B();$(a,[I]);let O=!1;const on=I._leaveCb=j=>{O||(O=!0,B(),j?$(_,[I]):$(g,[I]),I._leaveCb=void 0,N[k]===n&&delete N[k])};N[k]=n,h?U(h,[I,on]):on()},clone(I){return Yr(I,t,e,r)}};return V}function Fr(n){if(xr(n))return n=dt(n),n.children=null,n}function vo(n){return xr(n)?n.children?n.children[0]:void 0:n}function Jr(n,t){n.shapeFlag&6&&n.component?Jr(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function J1(n,t=!1,e){let r=[],i=0;for(let o=0;o<n.length;o++){let s=n[o];const l=e==null?s.key:String(e)+String(s.key!=null?s.key:o);s.type===On?(s.patchFlag&128&&i++,r=r.concat(J1(s.children,t,l))):(t||s.type!==et)&&r.push(l!=null?dt(s,{key:l}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}const Ke=n=>!!n.type.__asyncLoader,xr=n=>n.type.__isKeepAlive;function ml(n,t){Z1(n,"a",t)}function vl(n,t){Z1(n,"da",t)}function Z1(n,t,e=_n){const r=n.__wdc||(n.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(wr(t,r,e),e){let i=e.parent;for(;i&&i.parent;)xr(i.parent.vnode)&&yl(r,t,e,i),i=i.parent}}function yl(n,t,e,r){const i=wr(t,n,r,!0);j1(()=>{Mi(r[t],i)},e)}function wr(n,t,e=_n,r=!1){if(e){const i=e[n]||(e[n]=[]),o=t.__weh||(t.__weh=(...s)=>{if(e.isUnmounted)return;Zt(),zt(e);const l=Fn(t,e,n,s);return At(),Qt(),l});return r?i.unshift(o):i.push(o),o}}const ot=n=>(t,e=_n)=>(!me||n==="sp")&&wr(n,(...r)=>t(...r),e),xl=ot("bm"),Ki=ot("m"),wl=ot("bu"),El=ot("u"),Q1=ot("bum"),j1=ot("um"),bl=ot("sp"),Sl=ot("rtg"),Al=ot("rtc");function Cl(n,t=_n){wr("ec",n,t)}function Gt(n,t){const e=Bn;if(e===null)return n;const r=br(e)||e.proxy,i=n.dirs||(n.dirs=[]);for(let o=0;o<t.length;o++){let[s,l,f,c=tn]=t[o];X(s)&&(s={mounted:s,updated:s}),s.deep&&wt(l),i.push({dir:s,instance:r,value:l,oldValue:void 0,arg:f,modifiers:c})}return n}function gt(n,t,e,r){const i=n.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const l=i[s];o&&(l.oldValue=o[s].value);let f=l.dir[r];f&&(Zt(),Fn(f,e,8,[n.el,l,n,t]),Qt())}}const Nl=Symbol(),Zr=n=>n?us(n)?br(n)||n.proxy:Zr(n.parent):null,Qe=yn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Zr(n.parent),$root:n=>Zr(n.root),$emit:n=>n.emit,$options:n=>qi(n),$forceUpdate:n=>n.f||(n.f=()=>ki(n.update)),$nextTick:n=>n.n||(n.n=j2.bind(n.proxy)),$watch:n=>pl.bind(n)}),Tl={get({_:n},t){const{ctx:e,setupState:r,data:i,props:o,accessCache:s,type:l,appContext:f}=n;let c;if(t[0]!=="$"){const g=s[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return e[t];case 3:return o[t]}else{if(r!==tn&&Z(r,t))return s[t]=1,r[t];if(i!==tn&&Z(i,t))return s[t]=2,i[t];if((c=n.propsOptions[0])&&Z(c,t))return s[t]=3,o[t];if(e!==tn&&Z(e,t))return s[t]=4,e[t];Qr&&(s[t]=0)}}const u=Qe[t];let a,h;if(u)return t==="$attrs"&&Nn(n,"get",t),u(n);if((a=l.__cssModules)&&(a=a[t]))return a;if(e!==tn&&Z(e,t))return s[t]=4,e[t];if(h=f.config.globalProperties,Z(h,t))return h[t]},set({_:n},t,e){const{data:r,setupState:i,ctx:o}=n;return i!==tn&&Z(i,t)?(i[t]=e,!0):r!==tn&&Z(r,t)?(r[t]=e,!0):Z(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(o[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:r,appContext:i,propsOptions:o}},s){let l;return!!e[s]||n!==tn&&Z(n,s)||t!==tn&&Z(t,s)||(l=o[0])&&Z(l,s)||Z(r,s)||Z(Qe,s)||Z(i.config.globalProperties,s)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Z(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};let Qr=!0;function Ml(n){const t=qi(n),e=n.proxy,r=n.ctx;Qr=!1,t.beforeCreate&&yo(t.beforeCreate,n,"bc");const{data:i,computed:o,methods:s,watch:l,provide:f,inject:c,created:u,beforeMount:a,mounted:h,beforeUpdate:g,updated:_,activated:v,deactivated:b,beforeDestroy:T,beforeUnmount:R,destroyed:P,unmounted:N,render:$,renderTracked:U,renderTriggered:V,errorCaptured:I,serverPrefetch:B,expose:k,inheritAttrs:O,components:on,directives:j,filters:Q}=t;if(c&&Il(c,r,null,n.appContext.config.unwrapInjectedRef),s)for(const q in s){const z=s[q];X(z)&&(r[q]=z.bind(e))}if(i){const q=i.call(e,e);pn(q)&&(n.data=mr(q))}if(Qr=!0,o)for(const q in o){const z=o[q],cn=X(z)?z.bind(e,e):X(z.get)?z.get.bind(e,e):Un,qn=!X(z)&&X(z.set)?z.set.bind(e):Un,gn=uf({get:cn,set:qn});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>gn.value,set:dn=>gn.value=dn})}if(l)for(const q in l)G1(l[q],r,e,q);if(f){const q=X(f)?f.call(e):f;Reflect.ownKeys(q).forEach(z=>{al(z,q[z])})}u&&yo(u,n,"c");function D(q,z){W(z)?z.forEach(cn=>q(cn.bind(e))):z&&q(z.bind(e))}if(D(xl,a),D(Ki,h),D(wl,g),D(El,_),D(ml,v),D(vl,b),D(Cl,I),D(Al,U),D(Sl,V),D(Q1,R),D(j1,N),D(bl,B),W(k))if(k.length){const q=n.exposed||(n.exposed={});k.forEach(z=>{Object.defineProperty(q,z,{get:()=>e[z],set:cn=>e[z]=cn})})}else n.exposed||(n.exposed={});$&&n.render===Un&&(n.render=$),O!=null&&(n.inheritAttrs=O),on&&(n.components=on),j&&(n.directives=j)}function Il(n,t,e=Un,r=!1){W(n)&&(n=jr(n));for(const i in n){const o=n[i];let s;pn(o)?"default"in o?s=Pr(o.from||i,o.default,!0):s=Pr(o.from||i):s=Pr(o),mn(s)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):t[i]=s}}function yo(n,t,e){Fn(W(n)?n.map(r=>r.bind(t.proxy)):n.bind(t.proxy),t,e)}function G1(n,t,e,r){const i=r.includes(".")?V1(e,r):()=>e[r];if(xn(n)){const o=t[n];X(o)&&Rr(i,o)}else if(X(n))Rr(i,n.bind(e));else if(pn(n))if(W(n))n.forEach(o=>G1(o,t,e,r));else{const o=X(n.handler)?n.handler.bind(e):t[n.handler];X(o)&&Rr(i,o,n)}}function qi(n){const t=n.type,{mixins:e,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=n.appContext,l=o.get(t);let f;return l?f=l:!i.length&&!e&&!r?f=t:(f={},i.length&&i.forEach(c=>je(f,c,s,!0)),je(f,t,s)),pn(t)&&o.set(t,f),f}function je(n,t,e,r=!1){const{mixins:i,extends:o}=t;o&&je(n,o,e,!0),i&&i.forEach(s=>je(n,s,e,!0));for(const s in t)if(!(r&&s==="expose")){const l=Pl[s]||e&&e[s];n[s]=l?l(n[s],t[s]):t[s]}return n}const Pl={data:xo,props:mt,emits:mt,methods:mt,computed:mt,beforeCreate:wn,created:wn,beforeMount:wn,mounted:wn,beforeUpdate:wn,updated:wn,beforeDestroy:wn,beforeUnmount:wn,destroyed:wn,unmounted:wn,activated:wn,deactivated:wn,errorCaptured:wn,serverPrefetch:wn,components:mt,directives:mt,watch:Fl,provide:xo,inject:Rl};function xo(n,t){return t?n?function(){return yn(X(n)?n.call(this,this):n,X(t)?t.call(this,this):t)}:t:n}function Rl(n,t){return mt(jr(n),jr(t))}function jr(n){if(W(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function wn(n,t){return n?[...new Set([].concat(n,t))]:t}function mt(n,t){return n?yn(yn(Object.create(null),n),t):t}function Fl(n,t){if(!n)return t;if(!t)return n;const e=yn(Object.create(null),n);for(const r in t)e[r]=wn(n[r],t[r]);return e}function $l(n,t,e,r=!1){const i={},o={};Ye(o,Er,1),n.propsDefaults=Object.create(null),ns(n,t,i,o);for(const s in n.propsOptions[0])s in i||(i[s]=void 0);e?n.props=r?i:z2(i):n.type.props?n.props=i:n.props=o,n.attrs=o}function Ol(n,t,e,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=n,l=G(i),[f]=n.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=n.vnode.dynamicProps;for(let a=0;a<u.length;a++){let h=u[a];if(yr(n.emitsOptions,h))continue;const g=t[h];if(f)if(Z(o,h))g!==o[h]&&(o[h]=g,c=!0);else{const _=Kt(h);i[_]=Gr(f,l,_,g,n,!1)}else g!==o[h]&&(o[h]=g,c=!0)}}}else{ns(n,t,i,o)&&(c=!0);let u;for(const a in l)(!t||!Z(t,a)&&((u=Jt(a))===a||!Z(t,u)))&&(f?e&&(e[a]!==void 0||e[u]!==void 0)&&(i[a]=Gr(f,l,a,void 0,n,!0)):delete i[a]);if(o!==l)for(const a in o)(!t||!Z(t,a)&&!0)&&(delete o[a],c=!0)}c&&rt(n,"set","$attrs")}function ns(n,t,e,r){const[i,o]=n.propsOptions;let s=!1,l;if(t)for(let f in t){if(ke(f))continue;const c=t[f];let u;i&&Z(i,u=Kt(f))?!o||!o.includes(u)?e[u]=c:(l||(l={}))[u]=c:yr(n.emitsOptions,f)||(!(f in r)||c!==r[f])&&(r[f]=c,s=!0)}if(o){const f=G(e),c=l||tn;for(let u=0;u<o.length;u++){const a=o[u];e[a]=Gr(i,f,a,c[a],n,!Z(c,a))}}return s}function Gr(n,t,e,r,i,o){const s=n[e];if(s!=null){const l=Z(s,"default");if(l&&r===void 0){const f=s.default;if(s.type!==Function&&X(f)){const{propsDefaults:c}=i;e in c?r=c[e]:(zt(i),r=c[e]=f.call(null,t),At())}else r=f}s[0]&&(o&&!l?r=!1:s[1]&&(r===""||r===Jt(e))&&(r=!0))}return r}function ts(n,t,e=!1){const r=t.propsCache,i=r.get(n);if(i)return i;const o=n.props,s={},l=[];let f=!1;if(!X(n)){const u=a=>{f=!0;const[h,g]=ts(a,t,!0);yn(s,h),g&&l.push(...g)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!o&&!f)return pn(n)&&r.set(n,Dt),Dt;if(W(o))for(let u=0;u<o.length;u++){const a=Kt(o[u]);wo(a)&&(s[a]=tn)}else if(o)for(const u in o){const a=Kt(u);if(wo(a)){const h=o[u],g=s[a]=W(h)||X(h)?{type:h}:h;if(g){const _=So(Boolean,g.type),v=So(String,g.type);g[0]=_>-1,g[1]=v<0||_<v,(_>-1||Z(g,"default"))&&l.push(a)}}}const c=[s,l];return pn(n)&&r.set(n,c),c}function wo(n){return n[0]!=="$"}function Eo(n){const t=n&&n.toString().match(/^\s*function (\w+)/);return t?t[1]:n===null?"null":""}function bo(n,t){return Eo(n)===Eo(t)}function So(n,t){return W(t)?t.findIndex(e=>bo(e,n)):X(t)&&bo(t,n)?0:-1}const es=n=>n[0]==="_"||n==="$stable",zi=n=>W(n)?n.map(Vn):[Vn(n)],Ll=(n,t,e)=>{if(t._n)return t;const r=il((...i)=>zi(t(...i)),e);return r._c=!1,r},rs=(n,t,e)=>{const r=n._ctx;for(const i in n){if(es(i))continue;const o=n[i];if(X(o))t[i]=Ll(i,o,r);else if(o!=null){const s=zi(o);t[i]=()=>s}}},is=(n,t)=>{const e=zi(t);n.slots.default=()=>e},Hl=(n,t)=>{if(n.vnode.shapeFlag&32){const e=t._;e?(n.slots=G(t),Ye(t,"_",e)):rs(t,n.slots={})}else n.slots={},t&&is(n,t);Ye(n.slots,Er,1)},Dl=(n,t,e)=>{const{vnode:r,slots:i}=n;let o=!0,s=tn;if(r.shapeFlag&32){const l=t._;l?e&&l===1?o=!1:(yn(i,t),!e&&l===1&&delete i._):(o=!t.$stable,rs(t,i)),s=t}else t&&(is(n,t),s={default:1});if(o)for(const l in i)!es(l)&&!(l in s)&&delete i[l]};function os(){return{app:null,config:{isNativeTag:l2,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bl=0;function kl(n,t){return function(r,i=null){X(r)||(r=Object.assign({},r)),i!=null&&!pn(i)&&(i=null);const o=os(),s=new Set;let l=!1;const f=o.app={_uid:Bl++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:cf,get config(){return o.config},set config(c){},use(c,...u){return s.has(c)||(c&&X(c.install)?(s.add(c),c.install(f,...u)):X(c)&&(s.add(c),c(f,...u))),f},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),f},component(c,u){return u?(o.components[c]=u,f):o.components[c]},directive(c,u){return u?(o.directives[c]=u,f):o.directives[c]},mount(c,u,a){if(!l){const h=St(r,i);return h.appContext=o,u&&t?t(h,c):n(h,c,a),l=!0,f._container=c,c.__vue_app__=f,br(h.component)||h.component.proxy}},unmount(){l&&(n(null,f._container),delete f._container.__vue_app__)},provide(c,u){return o.provides[c]=u,f}};return f}}function ni(n,t,e,r,i=!1){if(W(n)){n.forEach((h,g)=>ni(h,t&&(W(t)?t[g]:t),e,r,i));return}if(Ke(r)&&!i)return;const o=r.shapeFlag&4?br(r.component)||r.component.proxy:r.el,s=i?null:o,{i:l,r:f}=n,c=t&&t.r,u=l.refs===tn?l.refs={}:l.refs,a=l.setupState;if(c!=null&&c!==f&&(xn(c)?(u[c]=null,Z(a,c)&&(a[c]=null)):mn(c)&&(c.value=null)),X(f))ht(f,l,12,[s,u]);else{const h=xn(f),g=mn(f);if(h||g){const _=()=>{if(n.f){const v=h?u[f]:f.value;i?W(v)&&Mi(v,o):W(v)?v.includes(o)||v.push(o):h?(u[f]=[o],Z(a,f)&&(a[f]=u[f])):(f.value=[o],n.k&&(u[n.k]=f.value))}else h?(u[f]=s,Z(a,f)&&(a[f]=s)):g&&(f.value=s,n.k&&(u[n.k]=s))};s?(_.id=-1,En(_,e)):_()}}}const En=cl;function Ul(n){return Kl(n)}function Kl(n,t){const e=_2();e.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:l,createComment:f,setText:c,setElementText:u,parentNode:a,nextSibling:h,setScopeId:g=Un,insertStaticContent:_}=n,v=(p,d,m,x=null,y=null,A=null,M=!1,S=null,C=!!d.dynamicChildren)=>{if(p===d)return;p&&!yt(p,d)&&(x=Ne(p),dn(p,y,A,!0),p=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:E,ref:L,shapeFlag:F}=d;switch(E){case Wi:b(p,d,m,x);break;case et:T(p,d,m,x);break;case $r:p==null&&R(d,m,x,M);break;case On:on(p,d,m,x,y,A,M,S,C);break;default:F&1?$(p,d,m,x,y,A,M,S,C):F&6?j(p,d,m,x,y,A,M,S,C):(F&64||F&128)&&E.process(p,d,m,x,y,A,M,S,C,Rt)}L!=null&&y&&ni(L,p&&p.ref,A,d||p,!d)},b=(p,d,m,x)=>{if(p==null)r(d.el=l(d.children),m,x);else{const y=d.el=p.el;d.children!==p.children&&c(y,d.children)}},T=(p,d,m,x)=>{p==null?r(d.el=f(d.children||""),m,x):d.el=p.el},R=(p,d,m,x)=>{[p.el,p.anchor]=_(p.children,d,m,x,p.el,p.anchor)},P=({el:p,anchor:d},m,x)=>{let y;for(;p&&p!==d;)y=h(p),r(p,m,x),p=y;r(d,m,x)},N=({el:p,anchor:d})=>{let m;for(;p&&p!==d;)m=h(p),i(p),p=m;i(d)},$=(p,d,m,x,y,A,M,S,C)=>{M=M||d.type==="svg",p==null?U(d,m,x,y,A,M,S,C):B(p,d,y,A,M,S,C)},U=(p,d,m,x,y,A,M,S)=>{let C,E;const{type:L,props:F,shapeFlag:H,transition:K,dirs:Y}=p;if(C=p.el=s(p.type,A,F&&F.is,F),H&8?u(C,p.children):H&16&&I(p.children,C,null,x,y,A&&L!=="foreignObject",M,S),Y&&gt(p,null,x,"created"),F){for(const nn in F)nn!=="value"&&!ke(nn)&&o(C,nn,null,F[nn],A,p.children,x,y,Gn);"value"in F&&o(C,"value",null,F.value),(E=F.onVnodeBeforeMount)&&Wn(E,x,p)}V(C,p,p.scopeId,M,x),Y&&gt(p,null,x,"beforeMount");const en=(!y||y&&!y.pendingBranch)&&K&&!K.persisted;en&&K.beforeEnter(C),r(C,d,m),((E=F&&F.onVnodeMounted)||en||Y)&&En(()=>{E&&Wn(E,x,p),en&&K.enter(C),Y&&gt(p,null,x,"mounted")},y)},V=(p,d,m,x,y)=>{if(m&&g(p,m),x)for(let A=0;A<x.length;A++)g(p,x[A]);if(y){let A=y.subTree;if(d===A){const M=y.vnode;V(p,M,M.scopeId,M.slotScopeIds,y.parent)}}},I=(p,d,m,x,y,A,M,S,C=0)=>{for(let E=C;E<p.length;E++){const L=p[E]=S?ft(p[E]):Vn(p[E]);v(null,L,d,m,x,y,A,M,S)}},B=(p,d,m,x,y,A,M)=>{const S=d.el=p.el;let{patchFlag:C,dynamicChildren:E,dirs:L}=d;C|=p.patchFlag&16;const F=p.props||tn,H=d.props||tn;let K;m&&_t(m,!1),(K=H.onVnodeBeforeUpdate)&&Wn(K,m,d,p),L&&gt(d,p,m,"beforeUpdate"),m&&_t(m,!0);const Y=y&&d.type!=="foreignObject";if(E?k(p.dynamicChildren,E,S,m,x,Y,A):M||z(p,d,S,null,m,x,Y,A,!1),C>0){if(C&16)O(S,d,F,H,m,x,y);else if(C&2&&F.class!==H.class&&o(S,"class",null,H.class,y),C&4&&o(S,"style",F.style,H.style,y),C&8){const en=d.dynamicProps;for(let nn=0;nn<en.length;nn++){const an=en[nn],$n=F[an],Ft=H[an];(Ft!==$n||an==="value")&&o(S,an,$n,Ft,y,p.children,m,x,Gn)}}C&1&&p.children!==d.children&&u(S,d.children)}else!M&&E==null&&O(S,d,F,H,m,x,y);((K=H.onVnodeUpdated)||L)&&En(()=>{K&&Wn(K,m,d,p),L&&gt(d,p,m,"updated")},x)},k=(p,d,m,x,y,A,M)=>{for(let S=0;S<d.length;S++){const C=p[S],E=d[S],L=C.el&&(C.type===On||!yt(C,E)||C.shapeFlag&70)?a(C.el):m;v(C,E,L,null,x,y,A,M,!0)}},O=(p,d,m,x,y,A,M)=>{if(m!==x){if(m!==tn)for(const S in m)!ke(S)&&!(S in x)&&o(p,S,m[S],null,M,d.children,y,A,Gn);for(const S in x){if(ke(S))continue;const C=x[S],E=m[S];C!==E&&S!=="value"&&o(p,S,E,C,M,d.children,y,A,Gn)}"value"in x&&o(p,"value",m.value,x.value)}},on=(p,d,m,x,y,A,M,S,C)=>{const E=d.el=p?p.el:l(""),L=d.anchor=p?p.anchor:l("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:K}=d;K&&(S=S?S.concat(K):K),p==null?(r(E,m,x),r(L,m,x),I(d.children,m,L,y,A,M,S,C)):F>0&&F&64&&H&&p.dynamicChildren?(k(p.dynamicChildren,H,m,y,A,M,S),(d.key!=null||y&&d===y.subTree)&&ss(p,d,!0)):z(p,d,m,L,y,A,M,S,C)},j=(p,d,m,x,y,A,M,S,C)=>{d.slotScopeIds=S,p==null?d.shapeFlag&512?y.ctx.activate(d,m,x,M,C):Q(d,m,x,y,A,M,C):w(p,d,C)},Q=(p,d,m,x,y,A,M)=>{const S=p.component=tf(p,x,y);if(xr(p)&&(S.ctx.renderer=Rt),rf(S),S.asyncDep){if(y&&y.registerDep(S,D),!p.el){const C=S.subTree=St(et);T(null,C,d,m)}return}D(S,p,d,m,y,A,M)},w=(p,d,m)=>{const x=d.component=p.component;if(ll(p,d,m))if(x.asyncDep&&!x.asyncResolved){q(x,d,m);return}else x.next=d,nl(x.update),x.update();else d.el=p.el,x.vnode=d},D=(p,d,m,x,y,A,M)=>{const S=()=>{if(p.isMounted){let{next:L,bu:F,u:H,parent:K,vnode:Y}=p,en=L,nn;_t(p,!1),L?(L.el=Y.el,q(p,L,M)):L=Y,F&&Ue(F),(nn=L.props&&L.props.onVnodeBeforeUpdate)&&Wn(nn,K,L,Y),_t(p,!0);const an=Ir(p),$n=p.subTree;p.subTree=an,v($n,an,a($n.el),Ne($n),p,y,A),L.el=an.el,en===null&&fl(p,an.el),H&&En(H,y),(nn=L.props&&L.props.onVnodeUpdated)&&En(()=>Wn(nn,K,L,Y),y)}else{let L;const{el:F,props:H}=d,{bm:K,m:Y,parent:en}=p,nn=Ke(d);if(_t(p,!1),K&&Ue(K),!nn&&(L=H&&H.onVnodeBeforeMount)&&Wn(L,en,d),_t(p,!0),F&&Tr){const an=()=>{p.subTree=Ir(p),Tr(F,p.subTree,p,y,null)};nn?d.type.__asyncLoader().then(()=>!p.isUnmounted&&an()):an()}else{const an=p.subTree=Ir(p);v(null,an,m,x,p,y,A),d.el=an.el}if(Y&&En(Y,y),!nn&&(L=H&&H.onVnodeMounted)){const an=d;En(()=>Wn(L,en,an),y)}(d.shapeFlag&256||en&&Ke(en.vnode)&&en.vnode.shapeFlag&256)&&p.a&&En(p.a,y),p.isMounted=!0,d=m=x=null}},C=p.effect=new Fi(S,()=>ki(E),p.scope),E=p.update=()=>C.run();E.id=p.uid,_t(p,!0),E()},q=(p,d,m)=>{d.component=p;const x=p.vnode.props;p.vnode=d,p.next=null,Ol(p,d.props,x,m),Dl(p,d.children,m),Zt(),go(),Qt()},z=(p,d,m,x,y,A,M,S,C=!1)=>{const E=p&&p.children,L=p?p.shapeFlag:0,F=d.children,{patchFlag:H,shapeFlag:K}=d;if(H>0){if(H&128){qn(E,F,m,x,y,A,M,S,C);return}else if(H&256){cn(E,F,m,x,y,A,M,S,C);return}}K&8?(L&16&&Gn(E,y,A),F!==E&&u(m,F)):L&16?K&16?qn(E,F,m,x,y,A,M,S,C):Gn(E,y,A,!0):(L&8&&u(m,""),K&16&&I(F,m,x,y,A,M,S,C))},cn=(p,d,m,x,y,A,M,S,C)=>{p=p||Dt,d=d||Dt;const E=p.length,L=d.length,F=Math.min(E,L);let H;for(H=0;H<F;H++){const K=d[H]=C?ft(d[H]):Vn(d[H]);v(p[H],K,m,null,y,A,M,S,C)}E>L?Gn(p,y,A,!0,!1,F):I(d,m,x,y,A,M,S,C,F)},qn=(p,d,m,x,y,A,M,S,C)=>{let E=0;const L=d.length;let F=p.length-1,H=L-1;for(;E<=F&&E<=H;){const K=p[E],Y=d[E]=C?ft(d[E]):Vn(d[E]);if(yt(K,Y))v(K,Y,m,null,y,A,M,S,C);else break;E++}for(;E<=F&&E<=H;){const K=p[F],Y=d[H]=C?ft(d[H]):Vn(d[H]);if(yt(K,Y))v(K,Y,m,null,y,A,M,S,C);else break;F--,H--}if(E>F){if(E<=H){const K=H+1,Y=K<L?d[K].el:x;for(;E<=H;)v(null,d[E]=C?ft(d[E]):Vn(d[E]),m,Y,y,A,M,S,C),E++}}else if(E>H)for(;E<=F;)dn(p[E],y,A,!0),E++;else{const K=E,Y=E,en=new Map;for(E=Y;E<=H;E++){const An=d[E]=C?ft(d[E]):Vn(d[E]);An.key!=null&&en.set(An.key,E)}let nn,an=0;const $n=H-Y+1;let Ft=!1,ro=0;const jt=new Array($n);for(E=0;E<$n;E++)jt[E]=0;for(E=K;E<=F;E++){const An=p[E];if(an>=$n){dn(An,y,A,!0);continue}let zn;if(An.key!=null)zn=en.get(An.key);else for(nn=Y;nn<=H;nn++)if(jt[nn-Y]===0&&yt(An,d[nn])){zn=nn;break}zn===void 0?dn(An,y,A,!0):(jt[zn-Y]=E+1,zn>=ro?ro=zn:Ft=!0,v(An,d[zn],m,null,y,A,M,S,C),an++)}const io=Ft?ql(jt):Dt;for(nn=io.length-1,E=$n-1;E>=0;E--){const An=Y+E,zn=d[An],oo=An+1<L?d[An+1].el:x;jt[E]===0?v(null,zn,m,oo,y,A,M,S,C):Ft&&(nn<0||E!==io[nn]?gn(zn,m,oo,2):nn--)}}},gn=(p,d,m,x,y=null)=>{const{el:A,type:M,transition:S,children:C,shapeFlag:E}=p;if(E&6){gn(p.component.subTree,d,m,x);return}if(E&128){p.suspense.move(d,m,x);return}if(E&64){M.move(p,d,m,Rt);return}if(M===On){r(A,d,m);for(let F=0;F<C.length;F++)gn(C[F],d,m,x);r(p.anchor,d,m);return}if(M===$r){P(p,d,m);return}if(x!==2&&E&1&&S)if(x===0)S.beforeEnter(A),r(A,d,m),En(()=>S.enter(A),y);else{const{leave:F,delayLeave:H,afterLeave:K}=S,Y=()=>r(A,d,m),en=()=>{F(A,()=>{Y(),K&&K()})};H?H(A,Y,en):en()}else r(A,d,m)},dn=(p,d,m,x=!1,y=!1)=>{const{type:A,props:M,ref:S,children:C,dynamicChildren:E,shapeFlag:L,patchFlag:F,dirs:H}=p;if(S!=null&&ni(S,null,m,p,!0),L&256){d.ctx.deactivate(p);return}const K=L&1&&H,Y=!Ke(p);let en;if(Y&&(en=M&&M.onVnodeBeforeUnmount)&&Wn(en,d,p),L&6)st(p.component,m,x);else{if(L&128){p.suspense.unmount(m,x);return}K&&gt(p,null,d,"beforeUnmount"),L&64?p.type.remove(p,d,m,y,Rt,x):E&&(A!==On||F>0&&F&64)?Gn(E,d,m,!1,!0):(A===On&&F&384||!y&&L&16)&&Gn(C,d,m),x&&In(p)}(Y&&(en=M&&M.onVnodeUnmounted)||K)&&En(()=>{en&&Wn(en,d,p),K&&gt(p,null,d,"unmounted")},m)},In=p=>{const{type:d,el:m,anchor:x,transition:y}=p;if(d===On){Pt(m,x);return}if(d===$r){N(p);return}const A=()=>{i(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(p.shapeFlag&1&&y&&!y.persisted){const{leave:M,delayLeave:S}=y,C=()=>M(m,A);S?S(p.el,A,C):C()}else A()},Pt=(p,d)=>{let m;for(;p!==d;)m=h(p),i(p),p=m;i(d)},st=(p,d,m)=>{const{bum:x,scope:y,update:A,subTree:M,um:S}=p;x&&Ue(x),y.stop(),A&&(A.active=!1,dn(M,p,d,m)),S&&En(S,d),En(()=>{p.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Gn=(p,d,m,x=!1,y=!1,A=0)=>{for(let M=A;M<p.length;M++)dn(p[M],d,m,x,y)},Ne=p=>p.shapeFlag&6?Ne(p.component.subTree):p.shapeFlag&128?p.suspense.next():h(p.anchor||p.el),eo=(p,d,m)=>{p==null?d._vnode&&dn(d._vnode,null,null,!0):v(d._vnode||null,p,d,null,null,null,m),go(),q1(),d._vnode=p},Rt={p:v,um:dn,m:gn,r:In,mt:Q,mc:I,pc:z,pbc:k,n:Ne,o:n};let Nr,Tr;return t&&([Nr,Tr]=t(Rt)),{render:eo,hydrate:Nr,createApp:kl(eo,Nr)}}function _t({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function ss(n,t,e=!1){const r=n.children,i=t.children;if(W(r)&&W(i))for(let o=0;o<r.length;o++){const s=r[o];let l=i[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[o]=ft(i[o]),l.el=s.el),e||ss(s,l))}}function ql(n){const t=n.slice(),e=[0];let r,i,o,s,l;const f=n.length;for(r=0;r<f;r++){const c=n[r];if(c!==0){if(i=e[e.length-1],n[i]<c){t[r]=i,e.push(r);continue}for(o=0,s=e.length-1;o<s;)l=o+s>>1,n[e[l]]<c?o=l+1:s=l;c<n[e[o]]&&(o>0&&(t[r]=e[o-1]),e[o]=r)}}for(o=e.length,s=e[o-1];o-- >0;)e[o]=s,s=t[s];return e}const zl=n=>n.__isTeleport,On=Symbol(void 0),Wi=Symbol(void 0),et=Symbol(void 0),$r=Symbol(void 0),ae=[];let kn=null;function Wl(n=!1){ae.push(kn=n?null:[])}function Xl(){ae.pop(),kn=ae[ae.length-1]||null}let _e=1;function Ao(n){_e+=n}function Vl(n){return n.dynamicChildren=_e>0?kn||Dt:null,Xl(),_e>0&&kn&&kn.push(n),n}function Yl(n,t,e,r,i,o){return Vl(ln(n,t,e,r,i,o,!0))}function Jl(n){return n?n.__v_isVNode===!0:!1}function yt(n,t){return n.type===t.type&&n.key===t.key}const Er="__vInternal",ls=({key:n})=>n!=null?n:null,qe=({ref:n,ref_key:t,ref_for:e})=>n!=null?xn(n)||mn(n)||X(n)?{i:Bn,r:n,k:t,f:!!e}:n:null;function ln(n,t=null,e=null,r=0,i=null,o=n===On?0:1,s=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&ls(t),ref:t&&qe(t),scopeId:X1,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Xi(f,e),o&128&&n.normalize(f)):e&&(f.shapeFlag|=xn(e)?8:16),_e>0&&!s&&kn&&(f.patchFlag>0||o&6)&&f.patchFlag!==32&&kn.push(f),f}const St=Zl;function Zl(n,t=null,e=null,r=0,i=null,o=!1){if((!n||n===Nl)&&(n=et),Jl(n)){const l=dt(n,t,!0);return e&&Xi(l,e),_e>0&&!o&&kn&&(l.shapeFlag&6?kn[kn.indexOf(n)]=l:kn.push(l)),l.patchFlag|=-2,l}if(ff(n)&&(n=n.__vccOpts),t){t=Ql(t);let{class:l,style:f}=t;l&&!xn(l)&&(t.class=Ni(l)),pn(f)&&(F1(f)&&!W(f)&&(f=yn({},f)),t.style=Ci(f))}const s=xn(n)?1:ul(n)?128:zl(n)?64:pn(n)?4:X(n)?2:0;return ln(n,t,e,r,i,s,o,!0)}function Ql(n){return n?F1(n)||Er in n?yn({},n):n:null}function dt(n,t,e=!1){const{props:r,ref:i,patchFlag:o,children:s}=n,l=t?jl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&ls(l),ref:t&&t.ref?e&&i?W(i)?i.concat(qe(t)):[i,qe(t)]:qe(t):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:s,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==On?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&dt(n.ssContent),ssFallback:n.ssFallback&&dt(n.ssFallback),el:n.el,anchor:n.anchor}}function fs(n=" ",t=0){return St(Wi,null,n,t)}function Vn(n){return n==null||typeof n=="boolean"?St(et):W(n)?St(On,null,n.slice()):typeof n=="object"?ft(n):St(Wi,null,String(n))}function ft(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:dt(n)}function Xi(n,t){let e=0;const{shapeFlag:r}=n;if(t==null)t=null;else if(W(t))e=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Xi(n,i()),i._c&&(i._d=!0));return}else{e=32;const i=t._;!i&&!(Er in t)?t._ctx=Bn:i===3&&Bn&&(Bn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else X(t)?(t={default:t,_ctx:Bn},e=32):(t=String(t),r&64?(e=16,t=[fs(t)]):e=8);n.children=t,n.shapeFlag|=e}function jl(...n){const t={};for(let e=0;e<n.length;e++){const r=n[e];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ni([t.class,r.class]));else if(i==="style")t.style=Ci([t.style,r.style]);else if(pr(i)){const o=t[i],s=r[i];s&&o!==s&&!(W(o)&&o.includes(s))&&(t[i]=o?[].concat(o,s):s)}else i!==""&&(t[i]=r[i])}return t}function Wn(n,t,e,r=null){Fn(n,t,7,[e,r])}const Gl=os();let nf=0;function tf(n,t,e){const r=n.type,i=(t?t.appContext:n.appContext)||Gl,o={uid:nf++,vnode:n,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new m2(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ts(r,i),emitsOptions:W1(r,i),emit:null,emitted:null,propsDefaults:tn,inheritAttrs:r.inheritAttrs,ctx:tn,data:tn,props:tn,attrs:tn,slots:tn,refs:tn,setupState:tn,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=rl.bind(null,o),n.ce&&n.ce(o),o}let _n=null;const ef=()=>_n||Bn,zt=n=>{_n=n,n.scope.on()},At=()=>{_n&&_n.scope.off(),_n=null};function us(n){return n.vnode.shapeFlag&4}let me=!1;function rf(n,t=!1){me=t;const{props:e,children:r}=n.vnode,i=us(n);$l(n,e,i,t),Hl(n,r);const o=i?of(n,t):void 0;return me=!1,o}function of(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=$1(new Proxy(n.ctx,Tl));const{setup:r}=e;if(r){const i=n.setupContext=r.length>1?lf(n):null;zt(n),Zt();const o=ht(r,n,0,[n.props,i]);if(Qt(),At(),x1(o)){if(o.then(At,At),t)return o.then(s=>{Co(n,s,t)}).catch(s=>{vr(s,n,0)});n.asyncDep=o}else Co(n,o,t)}else cs(n,t)}function Co(n,t,e){X(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:pn(t)&&(n.setupState=B1(t)),cs(n,e)}let No;function cs(n,t,e){const r=n.type;if(!n.render){if(!t&&No&&!r.render){const i=r.template||qi(n).template;if(i){const{isCustomElement:o,compilerOptions:s}=n.appContext.config,{delimiters:l,compilerOptions:f}=r,c=yn(yn({isCustomElement:o,delimiters:l},s),f);r.render=No(i,c)}}n.render=r.render||Un}zt(n),Zt(),Ml(n),Qt(),At()}function sf(n){return new Proxy(n.attrs,{get(t,e){return Nn(n,"get","$attrs"),t[e]}})}function lf(n){const t=r=>{n.exposed=r||{}};let e;return{get attrs(){return e||(e=sf(n))},slots:n.slots,emit:n.emit,expose:t}}function br(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(B1($1(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Qe)return Qe[e](n)}}))}function ff(n){return X(n)&&"__vccOpts"in n}const uf=(n,t)=>Z2(n,t,me),cf="3.2.40",af="http://www.w3.org/2000/svg",xt=typeof document<"u"?document:null,To=xt&&xt.createElement("template"),hf={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,r)=>{const i=t?xt.createElementNS(af,n):xt.createElement(n,e?{is:e}:void 0);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>xt.createTextNode(n),createComment:n=>xt.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>xt.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,r,i,o){const s=e?e.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),e),!(i===o||!(i=i.nextSibling)););else{To.innerHTML=r?`<svg>${n}</svg>`:n;const l=To.content;if(r){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}t.insertBefore(l,e)}return[s?s.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}};function pf(n,t,e){const r=n._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}function df(n,t,e){const r=n.style,i=xn(e);if(e&&!i){for(const o in e)ti(r,o,e[o]);if(t&&!xn(t))for(const o in t)e[o]==null&&ti(r,o,"")}else{const o=r.display;i?t!==e&&(r.cssText=e):t&&n.removeAttribute("style"),"_vod"in n&&(r.display=o)}}const Mo=/\s*!important$/;function ti(n,t,e){if(W(e))e.forEach(r=>ti(n,t,r));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const r=gf(n,t);Mo.test(e)?n.setProperty(Jt(r),e.replace(Mo,""),"important"):n[r]=e}}const Io=["Webkit","Moz","ms"],Or={};function gf(n,t){const e=Or[t];if(e)return e;let r=Kt(t);if(r!=="filter"&&r in n)return Or[t]=r;r=w1(r);for(let i=0;i<Io.length;i++){const o=Io[i]+r;if(o in n)return Or[t]=o}return t}const Po="http://www.w3.org/1999/xlink";function _f(n,t,e,r,i){if(r&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(Po,t.slice(6,t.length)):n.setAttributeNS(Po,t,e);else{const o=r2(t);e==null||o&&!y1(e)?n.removeAttribute(t):n.setAttribute(t,o?"":e)}}function mf(n,t,e,r,i,o,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,i,o),n[t]=e==null?"":e;return}if(t==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=e;const f=e==null?"":e;(n.value!==f||n.tagName==="OPTION")&&(n.value=f),e==null&&n.removeAttribute(t);return}let l=!1;if(e===""||e==null){const f=typeof n[t];f==="boolean"?e=y1(e):e==null&&f==="string"?(e="",l=!0):f==="number"&&(e=0,l=!0)}try{n[t]=e}catch{}l&&n.removeAttribute(t)}const[as,vf]=(()=>{let n=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const e=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(e&&Number(e[1])<=53)}return[n,t]})();let ei=0;const yf=Promise.resolve(),xf=()=>{ei=0},wf=()=>ei||(yf.then(xf),ei=as());function $t(n,t,e,r){n.addEventListener(t,e,r)}function Ef(n,t,e,r){n.removeEventListener(t,e,r)}function bf(n,t,e,r,i=null){const o=n._vei||(n._vei={}),s=o[t];if(r&&s)s.value=r;else{const[l,f]=Sf(t);if(r){const c=o[t]=Af(r,i);$t(n,l,c,f)}else s&&(Ef(n,l,s,f),o[t]=void 0)}}const Ro=/(?:Once|Passive|Capture)$/;function Sf(n){let t;if(Ro.test(n)){t={};let r;for(;r=n.match(Ro);)n=n.slice(0,n.length-r[0].length),t[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Jt(n.slice(2)),t]}function Af(n,t){const e=r=>{const i=r.timeStamp||as();(vf||i>=e.attached-1)&&Fn(Cf(r,e.value),t,5,[r])};return e.value=n,e.attached=wf(),e}function Cf(n,t){if(W(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Fo=/^on[a-z]/,Nf=(n,t,e,r,i=!1,o,s,l,f)=>{t==="class"?pf(n,r,i):t==="style"?df(n,e,r):pr(t)?Ti(t)||bf(n,t,e,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tf(n,t,r,i))?mf(n,t,r,o,s,l,f):(t==="true-value"?n._trueValue=r:t==="false-value"&&(n._falseValue=r),_f(n,t,r,i))};function Tf(n,t,e,r){return r?!!(t==="innerHTML"||t==="textContent"||t in n&&Fo.test(t)&&X(e)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||Fo.test(t)&&xn(e)?!1:t in n}const Mf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};_l.props;const $o=n=>{const t=n.props["onUpdate:modelValue"]||!1;return W(t)?e=>Ue(t,e):t};function If(n){n.target.composing=!0}function Oo(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ne={created(n,{modifiers:{lazy:t,trim:e,number:r}},i){n._assign=$o(i);const o=r||i.props&&i.props.type==="number";$t(n,t?"change":"input",s=>{if(s.target.composing)return;let l=n.value;e&&(l=l.trim()),o&&(l=Kr(l)),n._assign(l)}),e&&$t(n,"change",()=>{n.value=n.value.trim()}),t||($t(n,"compositionstart",If),$t(n,"compositionend",Oo),$t(n,"change",Oo))},mounted(n,{value:t}){n.value=t==null?"":t},beforeUpdate(n,{value:t,modifiers:{lazy:e,trim:r,number:i}},o){if(n._assign=$o(o),n.composing||document.activeElement===n&&n.type!=="range"&&(e||r&&n.value.trim()===t||(i||n.type==="number")&&Kr(n.value)===t))return;const s=t==null?"":t;n.value!==s&&(n.value=s)}},Pf=yn({patchProp:Nf},hf);let Lo;function Rf(){return Lo||(Lo=Ul(Pf))}const Ff=(...n)=>{const t=Rf().createApp(...n),{mount:e}=t;return t.mount=r=>{const i=$f(r);if(!i)return;const o=t._component;!X(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const s=e(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function $f(n){return xn(n)?document.querySelector(n):n}class Nt{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let r=0;for(let i=0;i<this._n&&i<32;i++){const o=e[i],s=t+o,l=Math.abs(t)<Math.abs(o)?t-(s-o):o-(s-t);l&&(e[r++]=l),t=s}return e[r]=t,this._n=r+1,this}valueOf(){const t=this._partials;let e=this._n,r,i,o,s=0;if(e>0){for(s=t[--e];e>0&&(r=s,i=t[--e],s=r+i,o=i-(s-r),!o););e>0&&(o<0&&t[e-1]<0||o>0&&t[e-1]>0)&&(i=o*2,r=s+i,i==r-s&&(s=r))}return s}}function*Of(n){for(const t of n)yield*t}function hs(n){return Array.from(Of(n))}var Lf={value:()=>{}};function ps(){for(var n=0,t=arguments.length,e={},r;n<t;++n){if(!(r=arguments[n]+"")||r in e||/[\s.]/.test(r))throw new Error("illegal type: "+r);e[r]=[]}return new ze(e)}function ze(n){this._=n}function Hf(n,t){return n.trim().split(/^|\s+/).map(function(e){var r="",i=e.indexOf(".");if(i>=0&&(r=e.slice(i+1),e=e.slice(0,i)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:r}})}ze.prototype=ps.prototype={constructor:ze,on:function(n,t){var e=this._,r=Hf(n+"",e),i,o=-1,s=r.length;if(arguments.length<2){for(;++o<s;)if((i=(n=r[o]).type)&&(i=Df(e[i],n.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<s;)if(i=(n=r[o]).type)e[i]=Ho(e[i],n.name,t);else if(t==null)for(i in e)e[i]=Ho(e[i],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new ze(n)},call:function(n,t){if((i=arguments.length-2)>0)for(var e=new Array(i),r=0,i,o;r<i;++r)e[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],r=0,i=o.length;r<i;++r)o[r].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],i=0,o=r.length;i<o;++i)r[i].value.apply(t,e)}};function Df(n,t){for(var e=0,r=n.length,i;e<r;++e)if((i=n[e]).name===t)return i.value}function Ho(n,t,e){for(var r=0,i=n.length;r<i;++r)if(n[r].name===t){n[r]=Lf,n=n.slice(0,r).concat(n.slice(r+1));break}return e!=null&&n.push({name:t,value:e}),n}var ri="http://www.w3.org/1999/xhtml";const Do={svg:"http://www.w3.org/2000/svg",xhtml:ri,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Sr(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),Do.hasOwnProperty(t)?{space:Do[t],local:n}:n}function Bf(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===ri&&t.documentElement.namespaceURI===ri?t.createElement(n):t.createElementNS(e,n)}}function kf(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function ds(n){var t=Sr(n);return(t.local?kf:Bf)(t)}function Uf(){}function Vi(n){return n==null?Uf:function(){return this.querySelector(n)}}function Kf(n){typeof n!="function"&&(n=Vi(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var o=t[i],s=o.length,l=r[i]=new Array(s),f,c,u=0;u<s;++u)(f=o[u])&&(c=n.call(f,f.__data__,u,o))&&("__data__"in f&&(c.__data__=f.__data__),l[u]=c);return new Tn(r,this._parents)}function qf(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function zf(){return[]}function gs(n){return n==null?zf:function(){return this.querySelectorAll(n)}}function Wf(n){return function(){return qf(n.apply(this,arguments))}}function Xf(n){typeof n=="function"?n=Wf(n):n=gs(n);for(var t=this._groups,e=t.length,r=[],i=[],o=0;o<e;++o)for(var s=t[o],l=s.length,f,c=0;c<l;++c)(f=s[c])&&(r.push(n.call(f,f.__data__,c,s)),i.push(f));return new Tn(r,i)}function _s(n){return function(){return this.matches(n)}}function ms(n){return function(t){return t.matches(n)}}var Vf=Array.prototype.find;function Yf(n){return function(){return Vf.call(this.children,n)}}function Jf(){return this.firstElementChild}function Zf(n){return this.select(n==null?Jf:Yf(typeof n=="function"?n:ms(n)))}var Qf=Array.prototype.filter;function jf(){return Array.from(this.children)}function Gf(n){return function(){return Qf.call(this.children,n)}}function nu(n){return this.selectAll(n==null?jf:Gf(typeof n=="function"?n:ms(n)))}function tu(n){typeof n!="function"&&(n=_s(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var o=t[i],s=o.length,l=r[i]=[],f,c=0;c<s;++c)(f=o[c])&&n.call(f,f.__data__,c,o)&&l.push(f);return new Tn(r,this._parents)}function vs(n){return new Array(n.length)}function eu(){return new Tn(this._enter||this._groups.map(vs),this._parents)}function Ge(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}Ge.prototype={constructor:Ge,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function ru(n){return function(){return n}}function iu(n,t,e,r,i,o){for(var s=0,l,f=t.length,c=o.length;s<c;++s)(l=t[s])?(l.__data__=o[s],r[s]=l):e[s]=new Ge(n,o[s]);for(;s<f;++s)(l=t[s])&&(i[s]=l)}function ou(n,t,e,r,i,o,s){var l,f,c=new Map,u=t.length,a=o.length,h=new Array(u),g;for(l=0;l<u;++l)(f=t[l])&&(h[l]=g=s.call(f,f.__data__,l,t)+"",c.has(g)?i[l]=f:c.set(g,f));for(l=0;l<a;++l)g=s.call(n,o[l],l,o)+"",(f=c.get(g))?(r[l]=f,f.__data__=o[l],c.delete(g)):e[l]=new Ge(n,o[l]);for(l=0;l<u;++l)(f=t[l])&&c.get(h[l])===f&&(i[l]=f)}function su(n){return n.__data__}function lu(n,t){if(!arguments.length)return Array.from(this,su);var e=t?ou:iu,r=this._parents,i=this._groups;typeof n!="function"&&(n=ru(n));for(var o=i.length,s=new Array(o),l=new Array(o),f=new Array(o),c=0;c<o;++c){var u=r[c],a=i[c],h=a.length,g=fu(n.call(u,u&&u.__data__,c,r)),_=g.length,v=l[c]=new Array(_),b=s[c]=new Array(_),T=f[c]=new Array(h);e(u,a,v,b,T,g,t);for(var R=0,P=0,N,$;R<_;++R)if(N=v[R]){for(R>=P&&(P=R+1);!($=b[P])&&++P<_;);N._next=$||null}}return s=new Tn(s,r),s._enter=l,s._exit=f,s}function fu(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function uu(){return new Tn(this._exit||this._groups.map(vs),this._parents)}function cu(n,t,e){var r=this.enter(),i=this,o=this.exit();return typeof n=="function"?(r=n(r),r&&(r=r.selection())):r=r.append(n+""),t!=null&&(i=t(i),i&&(i=i.selection())),e==null?o.remove():e(o),r&&i?r.merge(i).order():i}function au(n){for(var t=n.selection?n.selection():n,e=this._groups,r=t._groups,i=e.length,o=r.length,s=Math.min(i,o),l=new Array(i),f=0;f<s;++f)for(var c=e[f],u=r[f],a=c.length,h=l[f]=new Array(a),g,_=0;_<a;++_)(g=c[_]||u[_])&&(h[_]=g);for(;f<i;++f)l[f]=e[f];return new Tn(l,this._parents)}function hu(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var r=n[t],i=r.length-1,o=r[i],s;--i>=0;)(s=r[i])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function pu(n){n||(n=du);function t(a,h){return a&&h?n(a.__data__,h.__data__):!a-!h}for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var s=e[o],l=s.length,f=i[o]=new Array(l),c,u=0;u<l;++u)(c=s[u])&&(f[u]=c);f.sort(t)}return new Tn(i,this._parents).order()}function du(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function gu(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function _u(){return Array.from(this)}function mu(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var r=n[t],i=0,o=r.length;i<o;++i){var s=r[i];if(s)return s}return null}function vu(){let n=0;for(const t of this)++n;return n}function yu(){return!this.node()}function xu(n){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var i=t[e],o=0,s=i.length,l;o<s;++o)(l=i[o])&&n.call(l,l.__data__,o,i);return this}function wu(n){return function(){this.removeAttribute(n)}}function Eu(n){return function(){this.removeAttributeNS(n.space,n.local)}}function bu(n,t){return function(){this.setAttribute(n,t)}}function Su(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function Au(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function Cu(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function Nu(n,t){var e=Sr(n);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((t==null?e.local?Eu:wu:typeof t=="function"?e.local?Cu:Au:e.local?Su:bu)(e,t))}function ys(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function Tu(n){return function(){this.style.removeProperty(n)}}function Mu(n,t,e){return function(){this.style.setProperty(n,t,e)}}function Iu(n,t,e){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(n):this.style.setProperty(n,r,e)}}function Pu(n,t,e){return arguments.length>1?this.each((t==null?Tu:typeof t=="function"?Iu:Mu)(n,t,e==null?"":e)):Wt(this.node(),n)}function Wt(n,t){return n.style.getPropertyValue(t)||ys(n).getComputedStyle(n,null).getPropertyValue(t)}function Ru(n){return function(){delete this[n]}}function Fu(n,t){return function(){this[n]=t}}function $u(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function Ou(n,t){return arguments.length>1?this.each((t==null?Ru:typeof t=="function"?$u:Fu)(n,t)):this.node()[n]}function xs(n){return n.trim().split(/^|\s+/)}function Yi(n){return n.classList||new ws(n)}function ws(n){this._node=n,this._names=xs(n.getAttribute("class")||"")}ws.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Es(n,t){for(var e=Yi(n),r=-1,i=t.length;++r<i;)e.add(t[r])}function bs(n,t){for(var e=Yi(n),r=-1,i=t.length;++r<i;)e.remove(t[r])}function Lu(n){return function(){Es(this,n)}}function Hu(n){return function(){bs(this,n)}}function Du(n,t){return function(){(t.apply(this,arguments)?Es:bs)(this,n)}}function Bu(n,t){var e=xs(n+"");if(arguments.length<2){for(var r=Yi(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each((typeof t=="function"?Du:t?Lu:Hu)(e,t))}function ku(){this.textContent=""}function Uu(n){return function(){this.textContent=n}}function Ku(n){return function(){var t=n.apply(this,arguments);this.textContent=t==null?"":t}}function qu(n){return arguments.length?this.each(n==null?ku:(typeof n=="function"?Ku:Uu)(n)):this.node().textContent}function zu(){this.innerHTML=""}function Wu(n){return function(){this.innerHTML=n}}function Xu(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t==null?"":t}}function Vu(n){return arguments.length?this.each(n==null?zu:(typeof n=="function"?Xu:Wu)(n)):this.node().innerHTML}function Yu(){this.nextSibling&&this.parentNode.appendChild(this)}function Ju(){return this.each(Yu)}function Zu(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Qu(){return this.each(Zu)}function ju(n){var t=typeof n=="function"?n:ds(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Gu(){return null}function nc(n,t){var e=typeof n=="function"?n:ds(n),r=t==null?Gu:typeof t=="function"?t:Vi(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})}function tc(){var n=this.parentNode;n&&n.removeChild(this)}function ec(){return this.each(tc)}function rc(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function ic(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function oc(n){return this.select(n?ic:rc)}function sc(n){return arguments.length?this.property("__data__",n):this.node().__data__}function lc(n){return function(t){n.call(this,t,this.__data__)}}function fc(n){return n.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}function uc(n){return function(){var t=this.__on;if(!!t){for(var e=0,r=-1,i=t.length,o;e<i;++e)o=t[e],(!n.type||o.type===n.type)&&o.name===n.name?this.removeEventListener(o.type,o.listener,o.options):t[++r]=o;++r?t.length=r:delete this.__on}}}function cc(n,t,e){return function(){var r=this.__on,i,o=lc(t);if(r){for(var s=0,l=r.length;s<l;++s)if((i=r[s]).type===n.type&&i.name===n.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=e),i.value=t;return}}this.addEventListener(n.type,o,e),i={type:n.type,name:n.name,value:t,listener:o,options:e},r?r.push(i):this.__on=[i]}}function ac(n,t,e){var r=fc(n+""),i,o=r.length,s;if(arguments.length<2){var l=this.node().__on;if(l){for(var f=0,c=l.length,u;f<c;++f)for(i=0,u=l[f];i<o;++i)if((s=r[i]).type===u.type&&s.name===u.name)return u.value}return}for(l=t?cc:uc,i=0;i<o;++i)this.each(l(r[i],t,e));return this}function Ss(n,t,e){var r=ys(n),i=r.CustomEvent;typeof i=="function"?i=new i(t,e):(i=r.document.createEvent("Event"),e?(i.initEvent(t,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(t,!1,!1)),n.dispatchEvent(i)}function hc(n,t){return function(){return Ss(this,n,t)}}function pc(n,t){return function(){return Ss(this,n,t.apply(this,arguments))}}function dc(n,t){return this.each((typeof t=="function"?pc:hc)(n,t))}function*gc(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var r=n[t],i=0,o=r.length,s;i<o;++i)(s=r[i])&&(yield s)}var As=[null];function Tn(n,t){this._groups=n,this._parents=t}function Ae(){return new Tn([[document.documentElement]],As)}function _c(){return this}Tn.prototype=Ae.prototype={constructor:Tn,select:Kf,selectAll:Xf,selectChild:Zf,selectChildren:nu,filter:tu,data:lu,enter:eu,exit:uu,join:cu,merge:au,selection:_c,order:hu,sort:pu,call:gu,nodes:_u,node:mu,size:vu,empty:yu,each:xu,attr:Nu,style:Pu,property:Ou,classed:Bu,text:qu,html:Vu,raise:Ju,lower:Qu,append:ju,insert:nc,remove:ec,clone:oc,datum:sc,on:ac,dispatch:dc,[Symbol.iterator]:gc};function Bo(n){return typeof n=="string"?new Tn([[document.querySelector(n)]],[document.documentElement]):new Tn([[n]],As)}function Ji(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function Cs(n,t){var e=Object.create(n.prototype);for(var r in t)e[r]=t[r];return e}function Ce(){}var ve=.7,nr=1/ve,Ut="\\s*([+-]?\\d+)\\s*",ye="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Qn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",mc=/^#([0-9a-f]{3,8})$/,vc=new RegExp(`^rgb\\(${Ut},${Ut},${Ut}\\)$`),yc=new RegExp(`^rgb\\(${Qn},${Qn},${Qn}\\)$`),xc=new RegExp(`^rgba\\(${Ut},${Ut},${Ut},${ye}\\)$`),wc=new RegExp(`^rgba\\(${Qn},${Qn},${Qn},${ye}\\)$`),Ec=new RegExp(`^hsl\\(${ye},${Qn},${Qn}\\)$`),bc=new RegExp(`^hsla\\(${ye},${Qn},${Qn},${ye}\\)$`),ko={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ji(Ce,xe,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Uo,formatHex:Uo,formatHex8:Sc,formatHsl:Ac,formatRgb:Ko,toString:Ko});function Uo(){return this.rgb().formatHex()}function Sc(){return this.rgb().formatHex8()}function Ac(){return Ns(this).formatHsl()}function Ko(){return this.rgb().formatRgb()}function xe(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=mc.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?qo(t):e===3?new bn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?Fe(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?Fe(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=vc.exec(n))?new bn(t[1],t[2],t[3],1):(t=yc.exec(n))?new bn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=xc.exec(n))?Fe(t[1],t[2],t[3],t[4]):(t=wc.exec(n))?Fe(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Ec.exec(n))?Xo(t[1],t[2]/100,t[3]/100,1):(t=bc.exec(n))?Xo(t[1],t[2]/100,t[3]/100,t[4]):ko.hasOwnProperty(n)?qo(ko[n]):n==="transparent"?new bn(NaN,NaN,NaN,0):null}function qo(n){return new bn(n>>16&255,n>>8&255,n&255,1)}function Fe(n,t,e,r){return r<=0&&(n=t=e=NaN),new bn(n,t,e,r)}function Cc(n){return n instanceof Ce||(n=xe(n)),n?(n=n.rgb(),new bn(n.r,n.g,n.b,n.opacity)):new bn}function ii(n,t,e,r){return arguments.length===1?Cc(n):new bn(n,t,e,r==null?1:r)}function bn(n,t,e,r){this.r=+n,this.g=+t,this.b=+e,this.opacity=+r}Ji(bn,ii,Cs(Ce,{brighter(n){return n=n==null?nr:Math.pow(nr,n),new bn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?ve:Math.pow(ve,n),new bn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new bn(Ct(this.r),Ct(this.g),Ct(this.b),tr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:zo,formatHex:zo,formatHex8:Nc,formatRgb:Wo,toString:Wo}));function zo(){return`#${Et(this.r)}${Et(this.g)}${Et(this.b)}`}function Nc(){return`#${Et(this.r)}${Et(this.g)}${Et(this.b)}${Et((isNaN(this.opacity)?1:this.opacity)*255)}`}function Wo(){const n=tr(this.opacity);return`${n===1?"rgb(":"rgba("}${Ct(this.r)}, ${Ct(this.g)}, ${Ct(this.b)}${n===1?")":`, ${n})`}`}function tr(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Ct(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Et(n){return n=Ct(n),(n<16?"0":"")+n.toString(16)}function Xo(n,t,e,r){return r<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new Hn(n,t,e,r)}function Ns(n){if(n instanceof Hn)return new Hn(n.h,n.s,n.l,n.opacity);if(n instanceof Ce||(n=xe(n)),!n)return new Hn;if(n instanceof Hn)return n;n=n.rgb();var t=n.r/255,e=n.g/255,r=n.b/255,i=Math.min(t,e,r),o=Math.max(t,e,r),s=NaN,l=o-i,f=(o+i)/2;return l?(t===o?s=(e-r)/l+(e<r)*6:e===o?s=(r-t)/l+2:s=(t-e)/l+4,l/=f<.5?o+i:2-o-i,s*=60):l=f>0&&f<1?0:s,new Hn(s,l,f,n.opacity)}function Tc(n,t,e,r){return arguments.length===1?Ns(n):new Hn(n,t,e,r==null?1:r)}function Hn(n,t,e,r){this.h=+n,this.s=+t,this.l=+e,this.opacity=+r}Ji(Hn,Tc,Cs(Ce,{brighter(n){return n=n==null?nr:Math.pow(nr,n),new Hn(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?ve:Math.pow(ve,n),new Hn(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*t,i=2*e-r;return new bn(Lr(n>=240?n-240:n+120,i,r),Lr(n,i,r),Lr(n<120?n+240:n-120,i,r),this.opacity)},clamp(){return new Hn(Vo(this.h),$e(this.s),$e(this.l),tr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=tr(this.opacity);return`${n===1?"hsl(":"hsla("}${Vo(this.h)}, ${$e(this.s)*100}%, ${$e(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Vo(n){return n=(n||0)%360,n<0?n+360:n}function $e(n){return Math.max(0,Math.min(1,n||0))}function Lr(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}const Ts=n=>()=>n;function Mc(n,t){return function(e){return n+e*t}}function Ic(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(r){return Math.pow(n+r*t,e)}}function Pc(n){return(n=+n)==1?Ms:function(t,e){return e-t?Ic(t,e,n):Ts(isNaN(t)?e:t)}}function Ms(n,t){var e=t-n;return e?Mc(n,e):Ts(isNaN(n)?t:n)}const Yo=function n(t){var e=Pc(t);function r(i,o){var s=e((i=ii(i)).r,(o=ii(o)).r),l=e(i.g,o.g),f=e(i.b,o.b),c=Ms(i.opacity,o.opacity);return function(u){return i.r=s(u),i.g=l(u),i.b=f(u),i.opacity=c(u),i+""}}return r.gamma=n,r}(1);function ut(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}var oi=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Hr=new RegExp(oi.source,"g");function Rc(n){return function(){return n}}function Fc(n){return function(t){return n(t)+""}}function $c(n,t){var e=oi.lastIndex=Hr.lastIndex=0,r,i,o,s=-1,l=[],f=[];for(n=n+"",t=t+"";(r=oi.exec(n))&&(i=Hr.exec(t));)(o=i.index)>e&&(o=t.slice(e,o),l[s]?l[s]+=o:l[++s]=o),(r=r[0])===(i=i[0])?l[s]?l[s]+=i:l[++s]=i:(l[++s]=null,f.push({i:s,x:ut(r,i)})),e=Hr.lastIndex;return e<t.length&&(o=t.slice(e),l[s]?l[s]+=o:l[++s]=o),l.length<2?f[0]?Fc(f[0].x):Rc(t):(t=f.length,function(c){for(var u=0,a;u<t;++u)l[(a=f[u]).i]=a.x(c);return l.join("")})}var Jo=180/Math.PI,si={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Is(n,t,e,r,i,o){var s,l,f;return(s=Math.sqrt(n*n+t*t))&&(n/=s,t/=s),(f=n*e+t*r)&&(e-=n*f,r-=t*f),(l=Math.sqrt(e*e+r*r))&&(e/=l,r/=l,f/=l),n*r<t*e&&(n=-n,t=-t,f=-f,s=-s),{translateX:i,translateY:o,rotate:Math.atan2(t,n)*Jo,skewX:Math.atan(f)*Jo,scaleX:s,scaleY:l}}var Oe;function Oc(n){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?si:Is(t.a,t.b,t.c,t.d,t.e,t.f)}function Lc(n){return n==null||(Oe||(Oe=document.createElementNS("http://www.w3.org/2000/svg","g")),Oe.setAttribute("transform",n),!(n=Oe.transform.baseVal.consolidate()))?si:(n=n.matrix,Is(n.a,n.b,n.c,n.d,n.e,n.f))}function Ps(n,t,e,r){function i(c){return c.length?c.pop()+" ":""}function o(c,u,a,h,g,_){if(c!==a||u!==h){var v=g.push("translate(",null,t,null,e);_.push({i:v-4,x:ut(c,a)},{i:v-2,x:ut(u,h)})}else(a||h)&&g.push("translate("+a+t+h+e)}function s(c,u,a,h){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),h.push({i:a.push(i(a)+"rotate(",null,r)-2,x:ut(c,u)})):u&&a.push(i(a)+"rotate("+u+r)}function l(c,u,a,h){c!==u?h.push({i:a.push(i(a)+"skewX(",null,r)-2,x:ut(c,u)}):u&&a.push(i(a)+"skewX("+u+r)}function f(c,u,a,h,g,_){if(c!==a||u!==h){var v=g.push(i(g)+"scale(",null,",",null,")");_.push({i:v-4,x:ut(c,a)},{i:v-2,x:ut(u,h)})}else(a!==1||h!==1)&&g.push(i(g)+"scale("+a+","+h+")")}return function(c,u){var a=[],h=[];return c=n(c),u=n(u),o(c.translateX,c.translateY,u.translateX,u.translateY,a,h),s(c.rotate,u.rotate,a,h),l(c.skewX,u.skewX,a,h),f(c.scaleX,c.scaleY,u.scaleX,u.scaleY,a,h),c=u=null,function(g){for(var _=-1,v=h.length,b;++_<v;)a[(b=h[_]).i]=b.x(g);return a.join("")}}}var Hc=Ps(Oc,"px, ","px)","deg)"),Dc=Ps(Lc,", ",")",")"),Xt=0,re=0,te=0,Rs=1e3,er,ie,rr=0,Tt=0,Ar=0,we=typeof performance=="object"&&performance.now?performance:Date,Fs=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Zi(){return Tt||(Fs(Bc),Tt=we.now()+Ar)}function Bc(){Tt=0}function ir(){this._call=this._time=this._next=null}ir.prototype=$s.prototype={constructor:ir,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Zi():+e)+(t==null?0:+t),!this._next&&ie!==this&&(ie?ie._next=this:er=this,ie=this),this._call=n,this._time=e,li()},stop:function(){this._call&&(this._call=null,this._time=1/0,li())}};function $s(n,t,e){var r=new ir;return r.restart(n,t,e),r}function kc(){Zi(),++Xt;for(var n=er,t;n;)(t=Tt-n._time)>=0&&n._call.call(void 0,t),n=n._next;--Xt}function Zo(){Tt=(rr=we.now())+Ar,Xt=re=0;try{kc()}finally{Xt=0,Kc(),Tt=0}}function Uc(){var n=we.now(),t=n-rr;t>Rs&&(Ar-=t,rr=n)}function Kc(){for(var n,t=er,e,r=1/0;t;)t._call?(r>t._time&&(r=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:er=e);ie=n,li(r)}function li(n){if(!Xt){re&&(re=clearTimeout(re));var t=n-Tt;t>24?(n<1/0&&(re=setTimeout(Zo,n-we.now()-Ar)),te&&(te=clearInterval(te))):(te||(rr=we.now(),te=setInterval(Uc,Rs)),Xt=1,Fs(Zo))}}function Qo(n,t,e){var r=new ir;return t=t==null?0:+t,r.restart(i=>{r.stop(),n(i+t)},t,e),r}var qc=ps("start","end","cancel","interrupt"),zc=[],Os=0,jo=1,fi=2,We=3,Go=4,ui=5,Xe=6;function Cr(n,t,e,r,i,o){var s=n.__transition;if(!s)n.__transition={};else if(e in s)return;Wc(n,e,{name:t,index:r,group:i,on:qc,tween:zc,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Os})}function Qi(n,t){var e=Kn(n,t);if(e.state>Os)throw new Error("too late; already scheduled");return e}function jn(n,t){var e=Kn(n,t);if(e.state>We)throw new Error("too late; already running");return e}function Kn(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function Wc(n,t,e){var r=n.__transition,i;r[t]=e,e.timer=$s(o,0,e.time);function o(c){e.state=jo,e.timer.restart(s,e.delay,e.time),e.delay<=c&&s(c-e.delay)}function s(c){var u,a,h,g;if(e.state!==jo)return f();for(u in r)if(g=r[u],g.name===e.name){if(g.state===We)return Qo(s);g.state===Go?(g.state=Xe,g.timer.stop(),g.on.call("interrupt",n,n.__data__,g.index,g.group),delete r[u]):+u<t&&(g.state=Xe,g.timer.stop(),g.on.call("cancel",n,n.__data__,g.index,g.group),delete r[u])}if(Qo(function(){e.state===We&&(e.state=Go,e.timer.restart(l,e.delay,e.time),l(c))}),e.state=fi,e.on.call("start",n,n.__data__,e.index,e.group),e.state===fi){for(e.state=We,i=new Array(h=e.tween.length),u=0,a=-1;u<h;++u)(g=e.tween[u].value.call(n,n.__data__,e.index,e.group))&&(i[++a]=g);i.length=a+1}}function l(c){for(var u=c<e.duration?e.ease.call(null,c/e.duration):(e.timer.restart(f),e.state=ui,1),a=-1,h=i.length;++a<h;)i[a].call(n,u);e.state===ui&&(e.on.call("end",n,n.__data__,e.index,e.group),f())}function f(){e.state=Xe,e.timer.stop(),delete r[t];for(var c in r)return;delete n.__transition}}function Xc(n,t){var e=n.__transition,r,i,o=!0,s;if(!!e){t=t==null?null:t+"";for(s in e){if((r=e[s]).name!==t){o=!1;continue}i=r.state>fi&&r.state<ui,r.state=Xe,r.timer.stop(),r.on.call(i?"interrupt":"cancel",n,n.__data__,r.index,r.group),delete e[s]}o&&delete n.__transition}}function Vc(n){return this.each(function(){Xc(this,n)})}function Yc(n,t){var e,r;return function(){var i=jn(this,n),o=i.tween;if(o!==e){r=e=o;for(var s=0,l=r.length;s<l;++s)if(r[s].name===t){r=r.slice(),r.splice(s,1);break}}i.tween=r}}function Jc(n,t,e){var r,i;if(typeof e!="function")throw new Error;return function(){var o=jn(this,n),s=o.tween;if(s!==r){i=(r=s).slice();for(var l={name:t,value:e},f=0,c=i.length;f<c;++f)if(i[f].name===t){i[f]=l;break}f===c&&i.push(l)}o.tween=i}}function Zc(n,t){var e=this._id;if(n+="",arguments.length<2){for(var r=Kn(this.node(),e).tween,i=0,o=r.length,s;i<o;++i)if((s=r[i]).name===n)return s.value;return null}return this.each((t==null?Yc:Jc)(e,n,t))}function ji(n,t,e){var r=n._id;return n.each(function(){var i=jn(this,r);(i.value||(i.value={}))[t]=e.apply(this,arguments)}),function(i){return Kn(i,r).value[t]}}function Ls(n,t){var e;return(typeof t=="number"?ut:t instanceof xe?Yo:(e=xe(t))?(t=e,Yo):$c)(n,t)}function Qc(n){return function(){this.removeAttribute(n)}}function jc(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Gc(n,t,e){var r,i=e+"",o;return function(){var s=this.getAttribute(n);return s===i?null:s===r?o:o=t(r=s,e)}}function na(n,t,e){var r,i=e+"",o;return function(){var s=this.getAttributeNS(n.space,n.local);return s===i?null:s===r?o:o=t(r=s,e)}}function ta(n,t,e){var r,i,o;return function(){var s,l=e(this),f;return l==null?void this.removeAttribute(n):(s=this.getAttribute(n),f=l+"",s===f?null:s===r&&f===i?o:(i=f,o=t(r=s,l)))}}function ea(n,t,e){var r,i,o;return function(){var s,l=e(this),f;return l==null?void this.removeAttributeNS(n.space,n.local):(s=this.getAttributeNS(n.space,n.local),f=l+"",s===f?null:s===r&&f===i?o:(i=f,o=t(r=s,l)))}}function ra(n,t){var e=Sr(n),r=e==="transform"?Dc:Ls;return this.attrTween(n,typeof t=="function"?(e.local?ea:ta)(e,r,ji(this,"attr."+n,t)):t==null?(e.local?jc:Qc)(e):(e.local?na:Gc)(e,r,t))}function ia(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function oa(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function sa(n,t){var e,r;function i(){var o=t.apply(this,arguments);return o!==r&&(e=(r=o)&&oa(n,o)),e}return i._value=t,i}function la(n,t){var e,r;function i(){var o=t.apply(this,arguments);return o!==r&&(e=(r=o)&&ia(n,o)),e}return i._value=t,i}function fa(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var r=Sr(n);return this.tween(e,(r.local?sa:la)(r,t))}function ua(n,t){return function(){Qi(this,n).delay=+t.apply(this,arguments)}}function ca(n,t){return t=+t,function(){Qi(this,n).delay=t}}function aa(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?ua:ca)(t,n)):Kn(this.node(),t).delay}function ha(n,t){return function(){jn(this,n).duration=+t.apply(this,arguments)}}function pa(n,t){return t=+t,function(){jn(this,n).duration=t}}function da(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?ha:pa)(t,n)):Kn(this.node(),t).duration}function ga(n,t){if(typeof t!="function")throw new Error;return function(){jn(this,n).ease=t}}function _a(n){var t=this._id;return arguments.length?this.each(ga(t,n)):Kn(this.node(),t).ease}function ma(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;jn(this,n).ease=e}}function va(n){if(typeof n!="function")throw new Error;return this.each(ma(this._id,n))}function ya(n){typeof n!="function"&&(n=_s(n));for(var t=this._groups,e=t.length,r=new Array(e),i=0;i<e;++i)for(var o=t[i],s=o.length,l=r[i]=[],f,c=0;c<s;++c)(f=o[c])&&n.call(f,f.__data__,c,o)&&l.push(f);return new it(r,this._parents,this._name,this._id)}function xa(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,r=t.length,i=e.length,o=Math.min(r,i),s=new Array(r),l=0;l<o;++l)for(var f=t[l],c=e[l],u=f.length,a=s[l]=new Array(u),h,g=0;g<u;++g)(h=f[g]||c[g])&&(a[g]=h);for(;l<r;++l)s[l]=t[l];return new it(s,this._parents,this._name,this._id)}function wa(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function Ea(n,t,e){var r,i,o=wa(t)?Qi:jn;return function(){var s=o(this,n),l=s.on;l!==r&&(i=(r=l).copy()).on(t,e),s.on=i}}function ba(n,t){var e=this._id;return arguments.length<2?Kn(this.node(),e).on.on(n):this.each(Ea(e,n,t))}function Sa(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function Aa(){return this.on("end.remove",Sa(this._id))}function Ca(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Vi(n));for(var r=this._groups,i=r.length,o=new Array(i),s=0;s<i;++s)for(var l=r[s],f=l.length,c=o[s]=new Array(f),u,a,h=0;h<f;++h)(u=l[h])&&(a=n.call(u,u.__data__,h,l))&&("__data__"in u&&(a.__data__=u.__data__),c[h]=a,Cr(c[h],t,e,h,c,Kn(u,e)));return new it(o,this._parents,t,e)}function Na(n){var t=this._name,e=this._id;typeof n!="function"&&(n=gs(n));for(var r=this._groups,i=r.length,o=[],s=[],l=0;l<i;++l)for(var f=r[l],c=f.length,u,a=0;a<c;++a)if(u=f[a]){for(var h=n.call(u,u.__data__,a,f),g,_=Kn(u,e),v=0,b=h.length;v<b;++v)(g=h[v])&&Cr(g,t,e,v,h,_);o.push(h),s.push(u)}return new it(o,s,t,e)}var Ta=Ae.prototype.constructor;function Ma(){return new Ta(this._groups,this._parents)}function Ia(n,t){var e,r,i;return function(){var o=Wt(this,n),s=(this.style.removeProperty(n),Wt(this,n));return o===s?null:o===e&&s===r?i:i=t(e=o,r=s)}}function Hs(n){return function(){this.style.removeProperty(n)}}function Pa(n,t,e){var r,i=e+"",o;return function(){var s=Wt(this,n);return s===i?null:s===r?o:o=t(r=s,e)}}function Ra(n,t,e){var r,i,o;return function(){var s=Wt(this,n),l=e(this),f=l+"";return l==null&&(f=l=(this.style.removeProperty(n),Wt(this,n))),s===f?null:s===r&&f===i?o:(i=f,o=t(r=s,l))}}function Fa(n,t){var e,r,i,o="style."+t,s="end."+o,l;return function(){var f=jn(this,n),c=f.on,u=f.value[o]==null?l||(l=Hs(t)):void 0;(c!==e||i!==u)&&(r=(e=c).copy()).on(s,i=u),f.on=r}}function $a(n,t,e){var r=(n+="")=="transform"?Hc:Ls;return t==null?this.styleTween(n,Ia(n,r)).on("end.style."+n,Hs(n)):typeof t=="function"?this.styleTween(n,Ra(n,r,ji(this,"style."+n,t))).each(Fa(this._id,n)):this.styleTween(n,Pa(n,r,t),e).on("end.style."+n,null)}function Oa(n,t,e){return function(r){this.style.setProperty(n,t.call(this,r),e)}}function La(n,t,e){var r,i;function o(){var s=t.apply(this,arguments);return s!==i&&(r=(i=s)&&Oa(n,s,e)),r}return o._value=t,o}function Ha(n,t,e){var r="style."+(n+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,La(n,t,e==null?"":e))}function Da(n){return function(){this.textContent=n}}function Ba(n){return function(){var t=n(this);this.textContent=t==null?"":t}}function ka(n){return this.tween("text",typeof n=="function"?Ba(ji(this,"text",n)):Da(n==null?"":n+""))}function Ua(n){return function(t){this.textContent=n.call(this,t)}}function Ka(n){var t,e;function r(){var i=n.apply(this,arguments);return i!==e&&(t=(e=i)&&Ua(i)),t}return r._value=n,r}function qa(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,Ka(n))}function za(){for(var n=this._name,t=this._id,e=Ds(),r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],l=s.length,f,c=0;c<l;++c)if(f=s[c]){var u=Kn(f,t);Cr(f,n,e,c,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new it(r,this._parents,n,e)}function Wa(){var n,t,e=this,r=e._id,i=e.size();return new Promise(function(o,s){var l={value:s},f={value:function(){--i===0&&o()}};e.each(function(){var c=jn(this,r),u=c.on;u!==n&&(t=(n=u).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(f)),c.on=t}),i===0&&o()})}var Xa=0;function it(n,t,e,r){this._groups=n,this._parents=t,this._name=e,this._id=r}function Ds(){return++Xa}var nt=Ae.prototype;it.prototype={constructor:it,select:Ca,selectAll:Na,selectChild:nt.selectChild,selectChildren:nt.selectChildren,filter:ya,merge:xa,selection:Ma,transition:za,call:nt.call,nodes:nt.nodes,node:nt.node,size:nt.size,empty:nt.empty,each:nt.each,on:ba,attr:ra,attrTween:fa,style:$a,styleTween:Ha,text:ka,textTween:qa,remove:Aa,tween:Zc,delay:aa,duration:da,ease:_a,easeVarying:va,end:Wa,[Symbol.iterator]:nt[Symbol.iterator]};function Va(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var Ya={time:null,delay:0,duration:250,ease:Va};function Ja(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function Za(n){var t,e;n instanceof it?(t=n._id,n=n._name):(t=Ds(),(e=Ya).time=Zi(),n=n==null?null:n+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],l=s.length,f,c=0;c<l;++c)(f=s[c])&&Cr(f,n,t,c,s,e||Ja(f,t));return new it(r,this._parents,n,t)}Ae.prototype.interrupt=Vc;Ae.prototype.transition=Za;var rn=1e-6,Qa=1e-12,J=Math.PI,Sn=J/2,n1=J/4,Mn=J*2,Cn=180/J,hn=J/180,sn=Math.abs,Bs=Math.atan,Ee=Math.atan2,fn=Math.cos,ja=Math.exp,Ga=Math.log,un=Math.sin,n6=Math.sign||function(n){return n>0?1:n<0?-1:0},It=Math.sqrt,t6=Math.tan;function e6(n){return n>1?0:n<-1?J:Math.acos(n)}function be(n){return n>1?Sn:n<-1?-Sn:Math.asin(n)}function Rn(){}function or(n,t){n&&e1.hasOwnProperty(n.type)&&e1[n.type](n,t)}var t1={Feature:function(n,t){or(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)or(e[r].geometry,t)}},e1={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){ci(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)ci(e[r],t,0)},Polygon:function(n,t){r1(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)r1(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)or(e[r],t)}};function ci(n,t,e){var r=-1,i=n.length-e,o;for(t.lineStart();++r<i;)o=n[r],t.point(o[0],o[1],o[2]);t.lineEnd()}function r1(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)ci(n[e],t,1);t.polygonEnd()}function Ot(n,t){n&&t1.hasOwnProperty(n.type)?t1[n.type](n,t):or(n,t)}function ai(n){return[Ee(n[1],n[0]),be(n[2])]}function Vt(n){var t=n[0],e=n[1],r=fn(e);return[r*fn(t),r*un(t),un(e)]}function Le(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function sr(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Dr(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function He(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function hi(n){var t=It(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function pi(n,t){function e(r,i){return r=n(r,i),t(r[0],r[1])}return n.invert&&t.invert&&(e.invert=function(r,i){return r=t.invert(r,i),r&&n.invert(r[0],r[1])}),e}function di(n,t){return[sn(n)>J?n+Math.round(-n/Mn)*Mn:n,t]}di.invert=di;function ks(n,t,e){return(n%=Mn)?t||e?pi(o1(n),s1(t,e)):o1(n):t||e?s1(t,e):di}function i1(n){return function(t,e){return t+=n,[t>J?t-Mn:t<-J?t+Mn:t,e]}}function o1(n){var t=i1(n);return t.invert=i1(-n),t}function s1(n,t){var e=fn(n),r=un(n),i=fn(t),o=un(t);function s(l,f){var c=fn(f),u=fn(l)*c,a=un(l)*c,h=un(f),g=h*e+u*r;return[Ee(a*i-g*o,u*e-h*r),be(g*i+a*o)]}return s.invert=function(l,f){var c=fn(f),u=fn(l)*c,a=un(l)*c,h=un(f),g=h*i-a*o;return[Ee(a*i+h*o,u*e+g*r),be(g*e-u*r)]},s}function r6(n){n=ks(n[0]*hn,n[1]*hn,n.length>2?n[2]*hn:0);function t(e){return e=n(e[0]*hn,e[1]*hn),e[0]*=Cn,e[1]*=Cn,e}return t.invert=function(e){return e=n.invert(e[0]*hn,e[1]*hn),e[0]*=Cn,e[1]*=Cn,e},t}function i6(n,t,e,r,i,o){if(!!e){var s=fn(t),l=un(t),f=r*e;i==null?(i=t+r*Mn,o=t-f/2):(i=l1(s,i),o=l1(s,o),(r>0?i<o:i>o)&&(i+=r*Mn));for(var c,u=i;r>0?u>o:u<o;u-=f)c=ai([s,-l*fn(u),-l*un(u)]),n.point(c[0],c[1])}}function l1(n,t){t=Vt(t),t[0]-=n,hi(t);var e=e6(-t[1]);return((-t[2]<0?-e:e)+Mn-rn)%Mn}function Us(){var n=[],t;return{point:function(e,r,i){t.push([e,r,i])},lineStart:function(){n.push(t=[])},lineEnd:Rn,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function Ve(n,t){return sn(n[0]-t[0])<rn&&sn(n[1]-t[1])<rn}function De(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Ks(n,t,e,r,i){var o=[],s=[],l,f;if(n.forEach(function(_){if(!((v=_.length-1)<=0)){var v,b=_[0],T=_[v],R;if(Ve(b,T)){if(!b[2]&&!T[2]){for(i.lineStart(),l=0;l<v;++l)i.point((b=_[l])[0],b[1]);i.lineEnd();return}T[0]+=2*rn}o.push(R=new De(b,_,null,!0)),s.push(R.o=new De(b,null,R,!1)),o.push(R=new De(T,_,null,!1)),s.push(R.o=new De(T,null,R,!0))}}),!!o.length){for(s.sort(t),f1(o),f1(s),l=0,f=s.length;l<f;++l)s[l].e=e=!e;for(var c=o[0],u,a;;){for(var h=c,g=!0;h.v;)if((h=h.n)===c)return;u=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(g)for(l=0,f=u.length;l<f;++l)i.point((a=u[l])[0],a[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(g)for(u=h.p.z,l=u.length-1;l>=0;--l)i.point((a=u[l])[0],a[1]);else r(h.x,h.p.x,-1,i);h=h.p}h=h.o,u=h.z,g=!g}while(!h.v);i.lineEnd()}}}function f1(n){if(!!(t=n.length)){for(var t,e=0,r=n[0],i;++e<t;)r.n=i=n[e],i.p=r,r=i;r.n=i=n[0],i.p=r}}function Br(n){return sn(n[0])<=J?n[0]:n6(n[0])*((sn(n[0])+J)%Mn-J)}function o6(n,t){var e=Br(t),r=t[1],i=un(r),o=[un(e),-fn(e),0],s=0,l=0,f=new Nt;i===1?r=Sn+rn:i===-1&&(r=-Sn-rn);for(var c=0,u=n.length;c<u;++c)if(!!(h=(a=n[c]).length))for(var a,h,g=a[h-1],_=Br(g),v=g[1]/2+n1,b=un(v),T=fn(v),R=0;R<h;++R,_=N,b=U,T=V,g=P){var P=a[R],N=Br(P),$=P[1]/2+n1,U=un($),V=fn($),I=N-_,B=I>=0?1:-1,k=B*I,O=k>J,on=b*U;if(f.add(Ee(on*B*un(k),T*V+on*fn(k))),s+=O?I+B*Mn:I,O^_>=e^N>=e){var j=sr(Vt(g),Vt(P));hi(j);var Q=sr(o,j);hi(Q);var w=(O^I>=0?-1:1)*be(Q[2]);(r>w||r===w&&(j[0]||j[1]))&&(l+=O^I>=0?1:-1)}}return(s<-rn||s<rn&&f<-Qa)^l&1}function qs(n,t,e,r){return function(i){var o=t(i),s=Us(),l=t(s),f=!1,c,u,a,h={point:g,lineStart:v,lineEnd:b,polygonStart:function(){h.point=T,h.lineStart=R,h.lineEnd=P,u=[],c=[]},polygonEnd:function(){h.point=g,h.lineStart=v,h.lineEnd=b,u=hs(u);var N=o6(c,r);u.length?(f||(i.polygonStart(),f=!0),Ks(u,l6,N,e,i)):N&&(f||(i.polygonStart(),f=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),f&&(i.polygonEnd(),f=!1),u=c=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function g(N,$){n(N,$)&&i.point(N,$)}function _(N,$){o.point(N,$)}function v(){h.point=_,o.lineStart()}function b(){h.point=g,o.lineEnd()}function T(N,$){a.push([N,$]),l.point(N,$)}function R(){l.lineStart(),a=[]}function P(){T(a[0][0],a[0][1]),l.lineEnd();var N=l.clean(),$=s.result(),U,V=$.length,I,B,k;if(a.pop(),c.push(a),a=null,!!V){if(N&1){if(B=$[0],(I=B.length-1)>0){for(f||(i.polygonStart(),f=!0),i.lineStart(),U=0;U<I;++U)i.point((k=B[U])[0],k[1]);i.lineEnd()}return}V>1&&N&2&&$.push($.pop().concat($.shift())),u.push($.filter(s6))}}return h}}function s6(n){return n.length>1}function l6(n,t){return((n=n.x)[0]<0?n[1]-Sn-rn:Sn-n[1])-((t=t.x)[0]<0?t[1]-Sn-rn:Sn-t[1])}const u1=qs(function(){return!0},f6,c6,[-J,-Sn]);function f6(n){var t=NaN,e=NaN,r=NaN,i;return{lineStart:function(){n.lineStart(),i=1},point:function(o,s){var l=o>0?J:-J,f=sn(o-t);sn(f-J)<rn?(n.point(t,e=(e+s)/2>0?Sn:-Sn),n.point(r,e),n.lineEnd(),n.lineStart(),n.point(l,e),n.point(o,e),i=0):r!==l&&f>=J&&(sn(t-r)<rn&&(t-=r*rn),sn(o-l)<rn&&(o-=l*rn),e=u6(t,e,o,s),n.point(r,e),n.lineEnd(),n.lineStart(),n.point(l,e),i=0),n.point(t=o,e=s),r=l},lineEnd:function(){n.lineEnd(),t=e=NaN},clean:function(){return 2-i}}}function u6(n,t,e,r){var i,o,s=un(n-e);return sn(s)>rn?Bs((un(t)*(o=fn(r))*un(e)-un(r)*(i=fn(t))*un(n))/(i*o*s)):(t+r)/2}function c6(n,t,e,r){var i;if(n==null)i=e*Sn,r.point(-J,i),r.point(0,i),r.point(J,i),r.point(J,0),r.point(J,-i),r.point(0,-i),r.point(-J,-i),r.point(-J,0),r.point(-J,i);else if(sn(n[0]-t[0])>rn){var o=n[0]<t[0]?J:-J;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(t[0],t[1])}function a6(n){var t=fn(n),e=6*hn,r=t>0,i=sn(t)>rn;function o(u,a,h,g){i6(g,n,e,h,u,a)}function s(u,a){return fn(u)*fn(a)>t}function l(u){var a,h,g,_,v;return{lineStart:function(){_=g=!1,v=1},point:function(b,T){var R=[b,T],P,N=s(b,T),$=r?N?0:c(b,T):N?c(b+(b<0?J:-J),T):0;if(!a&&(_=g=N)&&u.lineStart(),N!==g&&(P=f(a,R),(!P||Ve(a,P)||Ve(R,P))&&(R[2]=1)),N!==g)v=0,N?(u.lineStart(),P=f(R,a),u.point(P[0],P[1])):(P=f(a,R),u.point(P[0],P[1],2),u.lineEnd()),a=P;else if(i&&a&&r^N){var U;!($&h)&&(U=f(R,a,!0))&&(v=0,r?(u.lineStart(),u.point(U[0][0],U[0][1]),u.point(U[1][0],U[1][1]),u.lineEnd()):(u.point(U[1][0],U[1][1]),u.lineEnd(),u.lineStart(),u.point(U[0][0],U[0][1],3)))}N&&(!a||!Ve(a,R))&&u.point(R[0],R[1]),a=R,g=N,h=$},lineEnd:function(){g&&u.lineEnd(),a=null},clean:function(){return v|(_&&g)<<1}}}function f(u,a,h){var g=Vt(u),_=Vt(a),v=[1,0,0],b=sr(g,_),T=Le(b,b),R=b[0],P=T-R*R;if(!P)return!h&&u;var N=t*T/P,$=-t*R/P,U=sr(v,b),V=He(v,N),I=He(b,$);Dr(V,I);var B=U,k=Le(V,B),O=Le(B,B),on=k*k-O*(Le(V,V)-1);if(!(on<0)){var j=It(on),Q=He(B,(-k-j)/O);if(Dr(Q,V),Q=ai(Q),!h)return Q;var w=u[0],D=a[0],q=u[1],z=a[1],cn;D<w&&(cn=w,w=D,D=cn);var qn=D-w,gn=sn(qn-J)<rn,dn=gn||qn<rn;if(!gn&&z<q&&(cn=q,q=z,z=cn),dn?gn?q+z>0^Q[1]<(sn(Q[0]-w)<rn?q:z):q<=Q[1]&&Q[1]<=z:qn>J^(w<=Q[0]&&Q[0]<=D)){var In=He(B,(-k+j)/O);return Dr(In,V),[Q,ai(In)]}}}function c(u,a){var h=r?n:J-n,g=0;return u<-h?g|=1:u>h&&(g|=2),a<-h?g|=4:a>h&&(g|=8),g}return qs(s,l,o,r?[0,-n]:[-J,n-J])}function h6(n,t,e,r,i,o){var s=n[0],l=n[1],f=t[0],c=t[1],u=0,a=1,h=f-s,g=c-l,_;if(_=e-s,!(!h&&_>0)){if(_/=h,h<0){if(_<u)return;_<a&&(a=_)}else if(h>0){if(_>a)return;_>u&&(u=_)}if(_=i-s,!(!h&&_<0)){if(_/=h,h<0){if(_>a)return;_>u&&(u=_)}else if(h>0){if(_<u)return;_<a&&(a=_)}if(_=r-l,!(!g&&_>0)){if(_/=g,g<0){if(_<u)return;_<a&&(a=_)}else if(g>0){if(_>a)return;_>u&&(u=_)}if(_=o-l,!(!g&&_<0)){if(_/=g,g<0){if(_>a)return;_>u&&(u=_)}else if(g>0){if(_<u)return;_<a&&(a=_)}return u>0&&(n[0]=s+u*h,n[1]=l+u*g),a<1&&(t[0]=s+a*h,t[1]=l+a*g),!0}}}}}var oe=1e9,Be=-oe;function p6(n,t,e,r){function i(c,u){return n<=c&&c<=e&&t<=u&&u<=r}function o(c,u,a,h){var g=0,_=0;if(c==null||(g=s(c,a))!==(_=s(u,a))||f(c,u)<0^a>0)do h.point(g===0||g===3?n:e,g>1?r:t);while((g=(g+a+4)%4)!==_);else h.point(u[0],u[1])}function s(c,u){return sn(c[0]-n)<rn?u>0?0:3:sn(c[0]-e)<rn?u>0?2:1:sn(c[1]-t)<rn?u>0?1:0:u>0?3:2}function l(c,u){return f(c.x,u.x)}function f(c,u){var a=s(c,1),h=s(u,1);return a!==h?a-h:a===0?u[1]-c[1]:a===1?c[0]-u[0]:a===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,a=Us(),h,g,_,v,b,T,R,P,N,$,U,V={point:I,lineStart:on,lineEnd:j,polygonStart:k,polygonEnd:O};function I(w,D){i(w,D)&&u.point(w,D)}function B(){for(var w=0,D=0,q=g.length;D<q;++D)for(var z=g[D],cn=1,qn=z.length,gn=z[0],dn,In,Pt=gn[0],st=gn[1];cn<qn;++cn)dn=Pt,In=st,gn=z[cn],Pt=gn[0],st=gn[1],In<=r?st>r&&(Pt-dn)*(r-In)>(st-In)*(n-dn)&&++w:st<=r&&(Pt-dn)*(r-In)<(st-In)*(n-dn)&&--w;return w}function k(){u=a,h=[],g=[],U=!0}function O(){var w=B(),D=U&&w,q=(h=hs(h)).length;(D||q)&&(c.polygonStart(),D&&(c.lineStart(),o(null,null,1,c),c.lineEnd()),q&&Ks(h,l,w,o,c),c.polygonEnd()),u=c,h=g=_=null}function on(){V.point=Q,g&&g.push(_=[]),$=!0,N=!1,R=P=NaN}function j(){h&&(Q(v,b),T&&N&&a.rejoin(),h.push(a.result())),V.point=I,N&&u.lineEnd()}function Q(w,D){var q=i(w,D);if(g&&_.push([w,D]),$)v=w,b=D,T=q,$=!1,q&&(u.lineStart(),u.point(w,D));else if(q&&N)u.point(w,D);else{var z=[R=Math.max(Be,Math.min(oe,R)),P=Math.max(Be,Math.min(oe,P))],cn=[w=Math.max(Be,Math.min(oe,w)),D=Math.max(Be,Math.min(oe,D))];h6(z,cn,n,t,e,r)?(N||(u.lineStart(),u.point(z[0],z[1])),u.point(cn[0],cn[1]),q||u.lineEnd(),U=!1):q&&(u.lineStart(),u.point(w,D),U=!1)}R=w,P=D,N=q}return V}}const gi=n=>n;var kr=new Nt,_i=new Nt,zs,Ws,mi,vi,ct={point:Rn,lineStart:Rn,lineEnd:Rn,polygonStart:function(){ct.lineStart=d6,ct.lineEnd=_6},polygonEnd:function(){ct.lineStart=ct.lineEnd=ct.point=Rn,kr.add(sn(_i)),_i=new Nt},result:function(){var n=kr/2;return kr=new Nt,n}};function d6(){ct.point=g6}function g6(n,t){ct.point=Xs,zs=mi=n,Ws=vi=t}function Xs(n,t){_i.add(vi*n-mi*t),mi=n,vi=t}function _6(){Xs(zs,Ws)}const c1=ct;var Yt=1/0,lr=Yt,Se=-Yt,fr=Se,m6={point:v6,lineStart:Rn,lineEnd:Rn,polygonStart:Rn,polygonEnd:Rn,result:function(){var n=[[Yt,lr],[Se,fr]];return Se=fr=-(lr=Yt=1/0),n}};function v6(n,t){n<Yt&&(Yt=n),n>Se&&(Se=n),t<lr&&(lr=t),t>fr&&(fr=t)}const ur=m6;var yi=0,xi=0,se=0,cr=0,ar=0,Lt=0,wi=0,Ei=0,le=0,Vs,Ys,Jn,Zn,Dn={point:Mt,lineStart:a1,lineEnd:h1,polygonStart:function(){Dn.lineStart=w6,Dn.lineEnd=E6},polygonEnd:function(){Dn.point=Mt,Dn.lineStart=a1,Dn.lineEnd=h1},result:function(){var n=le?[wi/le,Ei/le]:Lt?[cr/Lt,ar/Lt]:se?[yi/se,xi/se]:[NaN,NaN];return yi=xi=se=cr=ar=Lt=wi=Ei=le=0,n}};function Mt(n,t){yi+=n,xi+=t,++se}function a1(){Dn.point=y6}function y6(n,t){Dn.point=x6,Mt(Jn=n,Zn=t)}function x6(n,t){var e=n-Jn,r=t-Zn,i=It(e*e+r*r);cr+=i*(Jn+n)/2,ar+=i*(Zn+t)/2,Lt+=i,Mt(Jn=n,Zn=t)}function h1(){Dn.point=Mt}function w6(){Dn.point=b6}function E6(){Js(Vs,Ys)}function b6(n,t){Dn.point=Js,Mt(Vs=Jn=n,Ys=Zn=t)}function Js(n,t){var e=n-Jn,r=t-Zn,i=It(e*e+r*r);cr+=i*(Jn+n)/2,ar+=i*(Zn+t)/2,Lt+=i,i=Zn*n-Jn*t,wi+=i*(Jn+n),Ei+=i*(Zn+t),le+=i*3,Mt(Jn=n,Zn=t)}const p1=Dn;function Zs(n){this._context=n}Zs.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:{this._context.moveTo(n,t),this._point=1;break}case 1:{this._context.lineTo(n,t);break}default:{this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,Mn);break}}},result:Rn};var bi=new Nt,Ur,Qs,js,fe,ue,hr={point:Rn,lineStart:function(){hr.point=S6},lineEnd:function(){Ur&&Gs(Qs,js),hr.point=Rn},polygonStart:function(){Ur=!0},polygonEnd:function(){Ur=null},result:function(){var n=+bi;return bi=new Nt,n}};function S6(n,t){hr.point=Gs,Qs=fe=n,js=ue=t}function Gs(n,t){fe-=n,ue-=t,bi.add(It(fe*fe+ue*ue)),fe=n,ue=t}const d1=hr;function n2(){this._string=[]}n2.prototype={_radius:4.5,_circle:g1(4.5),pointRadius:function(n){return(n=+n)!==this._radius&&(this._radius=n,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._string.push("Z"),this._point=NaN},point:function(n,t){switch(this._point){case 0:{this._string.push("M",n,",",t),this._point=1;break}case 1:{this._string.push("L",n,",",t);break}default:{this._circle==null&&(this._circle=g1(this._radius)),this._string.push("M",n,",",t,this._circle);break}}},result:function(){if(this._string.length){var n=this._string.join("");return this._string=[],n}else return null}};function g1(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function A6(n,t){var e=4.5,r,i;function o(s){return s&&(typeof e=="function"&&i.pointRadius(+e.apply(this,arguments)),Ot(s,r(i))),i.result()}return o.area=function(s){return Ot(s,r(c1)),c1.result()},o.measure=function(s){return Ot(s,r(d1)),d1.result()},o.bounds=function(s){return Ot(s,r(ur)),ur.result()},o.centroid=function(s){return Ot(s,r(p1)),p1.result()},o.projection=function(s){return arguments.length?(r=s==null?(n=null,gi):(n=s).stream,o):n},o.context=function(s){return arguments.length?(i=s==null?(t=null,new n2):new Zs(t=s),typeof e!="function"&&i.pointRadius(e),o):t},o.pointRadius=function(s){return arguments.length?(e=typeof s=="function"?s:(i.pointRadius(+s),+s),o):e},o.projection(n).context(t)}function Gi(n){return function(t){var e=new Si;for(var r in n)e[r]=n[r];return e.stream=t,e}}function Si(){}Si.prototype={constructor:Si,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function no(n,t,e){var r=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),r!=null&&n.clipExtent(null),Ot(e,n.stream(ur)),t(ur.result()),r!=null&&n.clipExtent(r),n}function t2(n,t,e){return no(n,function(r){var i=t[1][0]-t[0][0],o=t[1][1]-t[0][1],s=Math.min(i/(r[1][0]-r[0][0]),o/(r[1][1]-r[0][1])),l=+t[0][0]+(i-s*(r[1][0]+r[0][0]))/2,f=+t[0][1]+(o-s*(r[1][1]+r[0][1]))/2;n.scale(150*s).translate([l,f])},e)}function C6(n,t,e){return t2(n,[[0,0],t],e)}function N6(n,t,e){return no(n,function(r){var i=+t,o=i/(r[1][0]-r[0][0]),s=(i-o*(r[1][0]+r[0][0]))/2,l=-o*r[0][1];n.scale(150*o).translate([s,l])},e)}function T6(n,t,e){return no(n,function(r){var i=+t,o=i/(r[1][1]-r[0][1]),s=-o*r[0][0],l=(i-o*(r[1][1]+r[0][1]))/2;n.scale(150*o).translate([s,l])},e)}var _1=16,M6=fn(30*hn);function m1(n,t){return+t?P6(n,t):I6(n)}function I6(n){return Gi({point:function(t,e){t=n(t,e),this.stream.point(t[0],t[1])}})}function P6(n,t){function e(r,i,o,s,l,f,c,u,a,h,g,_,v,b){var T=c-r,R=u-i,P=T*T+R*R;if(P>4*t&&v--){var N=s+h,$=l+g,U=f+_,V=It(N*N+$*$+U*U),I=be(U/=V),B=sn(sn(U)-1)<rn||sn(o-a)<rn?(o+a)/2:Ee($,N),k=n(B,I),O=k[0],on=k[1],j=O-r,Q=on-i,w=R*j-T*Q;(w*w/P>t||sn((T*j+R*Q)/P-.5)>.3||s*h+l*g+f*_<M6)&&(e(r,i,o,s,l,f,O,on,B,N/=V,$/=V,U,v,b),b.point(O,on),e(O,on,B,N,$,U,c,u,a,h,g,_,v,b))}}return function(r){var i,o,s,l,f,c,u,a,h,g,_,v,b={point:T,lineStart:R,lineEnd:N,polygonStart:function(){r.polygonStart(),b.lineStart=$},polygonEnd:function(){r.polygonEnd(),b.lineStart=R}};function T(I,B){I=n(I,B),r.point(I[0],I[1])}function R(){a=NaN,b.point=P,r.lineStart()}function P(I,B){var k=Vt([I,B]),O=n(I,B);e(a,h,u,g,_,v,a=O[0],h=O[1],u=I,g=k[0],_=k[1],v=k[2],_1,r),r.point(a,h)}function N(){b.point=T,r.lineEnd()}function $(){R(),b.point=U,b.lineEnd=V}function U(I,B){P(i=I,B),o=a,s=h,l=g,f=_,c=v,b.point=P}function V(){e(a,h,u,g,_,v,o,s,i,l,f,c,_1,r),b.lineEnd=N,N()}return b}}var R6=Gi({point:function(n,t){this.stream.point(n*hn,t*hn)}});function F6(n){return Gi({point:function(t,e){var r=n(t,e);return this.stream.point(r[0],r[1])}})}function $6(n,t,e,r,i){function o(s,l){return s*=r,l*=i,[t+n*s,e-n*l]}return o.invert=function(s,l){return[(s-t)/n*r,(e-l)/n*i]},o}function v1(n,t,e,r,i,o){if(!o)return $6(n,t,e,r,i);var s=fn(o),l=un(o),f=s*n,c=l*n,u=s/n,a=l/n,h=(l*e-s*t)/n,g=(l*t+s*e)/n;function _(v,b){return v*=r,b*=i,[f*v-c*b+t,e-c*v-f*b]}return _.invert=function(v,b){return[r*(u*v-a*b+h),i*(g-a*v-u*b)]},_}function O6(n){return L6(function(){return n})()}function L6(n){var t,e=150,r=480,i=250,o=0,s=0,l=0,f=0,c=0,u,a=0,h=1,g=1,_=null,v=u1,b=null,T,R,P,N=gi,$=.5,U,V,I,B,k;function O(w){return I(w[0]*hn,w[1]*hn)}function on(w){return w=I.invert(w[0],w[1]),w&&[w[0]*Cn,w[1]*Cn]}O.stream=function(w){return B&&k===w?B:B=R6(F6(u)(v(U(N(k=w)))))},O.preclip=function(w){return arguments.length?(v=w,_=void 0,Q()):v},O.postclip=function(w){return arguments.length?(N=w,b=T=R=P=null,Q()):N},O.clipAngle=function(w){return arguments.length?(v=+w?a6(_=w*hn):(_=null,u1),Q()):_*Cn},O.clipExtent=function(w){return arguments.length?(N=w==null?(b=T=R=P=null,gi):p6(b=+w[0][0],T=+w[0][1],R=+w[1][0],P=+w[1][1]),Q()):b==null?null:[[b,T],[R,P]]},O.scale=function(w){return arguments.length?(e=+w,j()):e},O.translate=function(w){return arguments.length?(r=+w[0],i=+w[1],j()):[r,i]},O.center=function(w){return arguments.length?(o=w[0]%360*hn,s=w[1]%360*hn,j()):[o*Cn,s*Cn]},O.rotate=function(w){return arguments.length?(l=w[0]%360*hn,f=w[1]%360*hn,c=w.length>2?w[2]%360*hn:0,j()):[l*Cn,f*Cn,c*Cn]},O.angle=function(w){return arguments.length?(a=w%360*hn,j()):a*Cn},O.reflectX=function(w){return arguments.length?(h=w?-1:1,j()):h<0},O.reflectY=function(w){return arguments.length?(g=w?-1:1,j()):g<0},O.precision=function(w){return arguments.length?(U=m1(V,$=w*w),Q()):It($)},O.fitExtent=function(w,D){return t2(O,w,D)},O.fitSize=function(w,D){return C6(O,w,D)},O.fitWidth=function(w,D){return N6(O,w,D)},O.fitHeight=function(w,D){return T6(O,w,D)};function j(){var w=v1(e,0,0,h,g,a).apply(null,t(o,s)),D=v1(e,r-w[0],i-w[1],h,g,a);return u=ks(l,f,c),V=pi(t,D),I=pi(u,V),U=m1(V,$),Q()}function Q(){return B=k=null,O}return function(){return t=n.apply(this,arguments),O.invert=t.invert&&on,j()}}function to(n,t){return[n,Ga(t6((Sn+t)/2))]}to.invert=function(n,t){return[n,2*Bs(ja(t))-Sn]};function H6(){return D6(to).scale(961/Mn)}function D6(n){var t=O6(n),e=t.center,r=t.scale,i=t.translate,o=t.clipExtent,s=null,l,f,c;t.scale=function(a){return arguments.length?(r(a),u()):r()},t.translate=function(a){return arguments.length?(i(a),u()):i()},t.center=function(a){return arguments.length?(e(a),u()):e()},t.clipExtent=function(a){return arguments.length?(a==null?s=l=f=c=null:(s=+a[0][0],l=+a[0][1],f=+a[1][0],c=+a[1][1]),u()):s==null?null:[[s,l],[f,c]]};function u(){var a=J*r(),h=t(r6(t.rotate()).invert([0,0]));return o(s==null?[[h[0]-a,h[1]-a],[h[0]+a,h[1]+a]]:n===to?[[Math.max(h[0]-a,s),l],[Math.min(h[0]+a,f),c]]:[[s,Math.max(h[1]-a,l)],[f,Math.min(h[1]+a,c)]])}return u()}function Ht(n,t,e){this.k=n,this.x=t,this.y=e}Ht.prototype={constructor:Ht,scale:function(n){return n===1?this:new Ht(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new Ht(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new Ht(1,0,0);Ht.prototype;const B6=`{\r
  "type": "FeatureCollection",\r
  "features": [\r
    {\r
      "type": "Feature",\r
      "properties": {\r
        "name": "\u6D77\u95E8\u8857\u9053",\r
        "centerx": 121.46971009,\r
        "centery": 28.6667091485,\r
        "ENTIID": "331002001",\r
        "SHAPE_Leng": 0.283865960464,\r
        "Shape_Le_1": 0.283865962589,\r
        "Shape_Le_2": 0.283758586111,\r
        "Shape_Area": 0.00218733055303\r
      },\r
      "geometry": {\r
        "type": "MultiPolygon",\r
        "coordinates": [\r
          [\r
            [\r
              [121.461724, 28.681356],\r
              [121.469469, 28.677983],\r
              [121.470847, 28.679298],\r
              [121.478705, 28.676938],\r
              [121.480946, 28.675284],\r
              [121.478369, 28.67249],\r
              [121.481426, 28.674292],\r
              [121.487631, 28.674564],\r
              [121.493225, 28.672949],\r
              [121.492738, 28.670734],\r
              [121.500578, 28.668395],\r
              [121.510106, 28.662822],\r
              [121.499519, 28.658826],\r
              [121.500314, 28.65689],\r
              [121.492506, 28.655418],\r
              [121.488843, 28.660442],\r
              [121.485513, 28.660052],\r
              [121.485713, 28.652497],\r
              [121.489374, 28.652912],\r
              [121.489932, 28.65132],\r
              [121.482547, 28.650287],\r
              [121.482403, 28.648963],\r
              [121.469878, 28.647826],\r
              [121.468615, 28.649944],\r
              [121.454099, 28.650644],\r
              [121.453582, 28.647711],\r
              [121.460647, 28.647055],\r
              [121.454849, 28.645094],\r
              [121.455864, 28.643767],\r
              [121.453538, 28.640143],\r
              [121.454807, 28.639537],\r
              [121.447695, 28.640392],\r
              [121.447983, 28.642264],\r
              [121.439142, 28.643605],\r
              [121.435198, 28.645752],\r
              [121.43513, 28.651076],\r
              [121.439896, 28.658377],\r
              [121.432133, 28.660627],\r
              [121.433101, 28.664195],\r
              [121.431769, 28.663837],\r
              [121.429116, 28.667886],\r
              [121.433991, 28.677156],\r
              [121.433512, 28.686066],\r
              [121.450424, 28.686672],\r
              [121.450687, 28.685969],\r
              [121.461724, 28.681356]\r
            ]\r
          ]\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "properties": {\r
        "name": "\u767D\u4E91\u8857\u9053",\r
        "centerx": 121.418772931,\r
        "centery": 28.659271424,\r
        "ENTIID": "331002002",\r
        "SHAPE_Leng": 0.248596026083,\r
        "Shape_Le_1": 0.248596028585,\r
        "Shape_Le_2": 0.24854540303,\r
        "Shape_Area": 0.00144088401829\r
      },\r
      "geometry": {\r
        "type": "MultiPolygon",\r
        "coordinates": [\r
          [\r
            [\r
              [121.430732, 28.670751],\r
              [121.429116, 28.667886],\r
              [121.431769, 28.663837],\r
              [121.433101, 28.664195],\r
              [121.431809, 28.661512],\r
              [121.433176, 28.660783],\r
              [121.432093, 28.660667],\r
              [121.439896, 28.658377],\r
              [121.43513, 28.651076],\r
              [121.435198, 28.645752],\r
              [121.427669, 28.647215],\r
              [121.426279, 28.64344],\r
              [121.425438, 28.638117],\r
              [121.428071, 28.636837],\r
              [121.427772, 28.63565],\r
              [121.431513, 28.635138],\r
              [121.430121, 28.623094],\r
              [121.423196, 28.624896],\r
              [121.423095, 28.627618],\r
              [121.421379, 28.628408],\r
              [121.414087, 28.62769],\r
              [121.415088, 28.635966],\r
              [121.408009, 28.637021],\r
              [121.407867, 28.639618],\r
              [121.405902, 28.639149],\r
              [121.405446, 28.640773],\r
              [121.407754, 28.641738],\r
              [121.407414, 28.645527],\r
              [121.404535, 28.645557],\r
              [121.397492, 28.650987],\r
              [121.400217, 28.657631],\r
              [121.407905, 28.656557],\r
              [121.40816, 28.668427],\r
              [121.413938, 28.665528],\r
              [121.413689, 28.664325],\r
              [121.415866, 28.66505],\r
              [121.415586, 28.667059],\r
              [121.410626, 28.668583],\r
              [121.417744, 28.670433],\r
              [121.416583, 28.672294],\r
              [121.416657, 28.68354],\r
              [121.417161, 28.687279],\r
              [121.433512, 28.686066],\r
              [121.434052, 28.67766],\r
              [121.430732, 28.670751]\r
            ]\r
          ]\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "properties": {\r
        "name": "\u846D\u6C9A\u8857\u9053",\r
        "centerx": 121.379856357,\r
        "centery": 28.6602986445,\r
        "ENTIID": "331002003",\r
        "SHAPE_Leng": 0.356000031998,\r
        "Shape_Le_1": 0.356000033817,\r
        "Shape_Le_2": 0.356051325814,\r
        "Shape_Area": 0.00406571619861\r
      },\r
      "geometry": {\r
        "type": "MultiPolygon",\r
        "coordinates": [\r
          [\r
            [\r
              [121.417161, 28.687279],\r
              [121.416657, 28.68354],\r
              [121.416583, 28.672294],\r
              [121.417744, 28.670433],\r
              [121.410626, 28.668583],\r
              [121.415586, 28.667059],\r
              [121.415866, 28.66505],\r
              [121.413689, 28.664325],\r
              [121.413938, 28.665528],\r
              [121.40816, 28.668427],\r
              [121.407905, 28.656557],\r
              [121.400217, 28.657631],\r
              [121.397492, 28.650987],\r
              [121.404535, 28.645557],\r
              [121.407414, 28.645527],\r
              [121.407754, 28.641738],\r
              [121.404416, 28.640141],\r
              [121.404377, 28.637543],\r
              [121.402344, 28.636455],\r
              [121.40046, 28.632086],\r
              [121.402279, 28.628973],\r
              [121.403958, 28.629068],\r
              [121.404404, 28.622117],\r
              [121.396389, 28.621704],\r
              [121.393186, 28.626605],\r
              [121.385673, 28.625852],\r
              [121.382465, 28.628125],\r
              [121.375497, 28.629168],\r
              [121.371602, 28.629027],\r
              [121.370022, 28.626463],\r
              [121.36499, 28.627032],\r
              [121.354466, 28.624111],\r
              [121.3441, 28.626146],\r
              [121.349322, 28.629843],\r
              [121.349985, 28.634207],\r
              [121.345994, 28.637816],\r
              [121.344787, 28.640604],\r
              [121.345722, 28.642417],\r
              [121.343189, 28.642198],\r
              [121.341314, 28.644214],\r
              [121.346235, 28.645029],\r
              [121.343198, 28.645977],\r
              [121.344492, 28.648479],\r
              [121.347959, 28.652923],\r
              [121.352342, 28.654669],\r
              [121.352804, 28.658029],\r
              [121.354155, 28.658354],\r
              [121.352762, 28.658661],\r
              [121.353071, 28.660128],\r
              [121.359052, 28.662584],\r
              [121.360644, 28.665576],\r
              [121.360725, 28.668841],\r
              [121.356796, 28.673123],\r
              [121.354814, 28.678982],\r
              [121.35293, 28.679051],\r
              [121.355946, 28.682004],\r
              [121.353622, 28.687641],\r
              [121.355004, 28.687384],\r
              [121.355737, 28.689199],\r
              [121.352764, 28.692118],\r
              [121.352577, 28.696009],\r
              [121.36837, 28.691491],\r
              [121.417161, 28.687279]\r
            ]\r
          ]\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "properties": {\r
        "name": "\u6D2A\u5BB6\u8857\u9053",\r
        "centerx": 121.393700831,\r
        "centery": 28.610320185,\r
        "ENTIID": "331002004",\r
        "SHAPE_Leng": 0.325188024436,\r
        "Shape_Le_1": 0.325188023438,\r
        "Shape_Le_2": 0.325230134715,\r
        "Shape_Area": 0.00264634988872\r
      },\r
      "geometry": {\r
        "type": "MultiPolygon",\r
        "coordinates": [\r
          [\r
            [\r
              [121.430121, 28.623094],\r
              [121.42933, 28.620695],\r
              [121.425432, 28.620422],\r
              [121.425113, 28.618607],\r
              [121.430244, 28.619585],\r
              [121.43054, 28.617004],\r
              [121.432989, 28.616063],\r
              [121.433144, 28.613897],\r
              [121.431328, 28.613497],\r
              [121.433098, 28.612523],\r
              [121.432009, 28.610191],\r
              [121.434797, 28.60998],\r
              [121.430724, 28.607075],\r
              [121.434093, 28.604729],\r
              [121.432619, 28.604005],\r
              [121.432536, 28.600062],\r
              [121.436545, 28.598507],\r
              [121.433667, 28.597526],\r
              [121.434317, 28.59437],\r
              [121.436749, 28.594234],\r
              [121.436486, 28.592378],\r
              [121.406663, 28.587806],\r
              [121.405847, 28.582119],\r
              [121.401281, 28.580046],\r
              [121.402314, 28.580991],\r
              [121.399736, 28.582036],\r
              [121.399832, 28.587087],\r
              [121.391294, 28.585177],\r
              [121.391375, 28.59343],\r
              [121.387162, 28.592869],\r
              [121.386612, 28.595541],\r
              [121.385226, 28.59406],\r
              [121.38062, 28.594306],\r
              [121.382342, 28.596717],\r
              [121.381671, 28.601039],\r
              [121.37742, 28.599659],\r
              [121.37645, 28.601133],\r
              [121.372847, 28.600062],\r
              [121.372436, 28.60122],\r
              [121.371387, 28.600077],\r
              [121.368399, 28.602717],\r
              [121.36065, 28.603986],\r
              [121.359999, 28.606946],\r
              [121.35793, 28.606358],\r
              [121.358008, 28.608309],\r
              [121.355562, 28.607516],\r
              [121.35391, 28.609687],\r
              [121.354572, 28.613712],\r
              [121.356426, 28.614997],\r
              [121.356243, 28.618115],\r
              [121.354048, 28.619996],\r
              [121.35363, 28.624068],\r
              [121.350466, 28.624329],\r
              [121.355318, 28.624202],\r
              [121.36499, 28.627032],\r
              [121.370022, 28.626463],\r
              [121.371602, 28.629027],\r
              [121.375497, 28.629168],\r
              [121.382465, 28.628125],\r
              [121.385673, 28.625852],\r
              [121.393186, 28.626605],\r
              [121.396389, 28.621704],\r
              [121.404301, 28.622073],\r
              [121.403958, 28.629068],\r
              [121.402279, 28.628973],\r
              [121.40046, 28.632086],\r
              [121.405514, 28.640258],\r
              [121.407867, 28.639618],\r
              [121.408009, 28.637021],\r
              [121.415088, 28.635966],\r
              [121.414087, 28.62769],\r
              [121.421379, 28.628408],\r
              [121.423095, 28.627618],\r
              [121.423196, 28.624896],\r
              [121.430121, 28.623094]\r
            ]\r
          ]\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "properties": {\r
        "name": "\u7AE0\u5B89\u8857\u9053",\r
        "centerx": 121.403084912,\r
        "centery": 28.7379260435,\r
        "ENTIID": "331002008",\r
        "SHAPE_Leng": 0.425581044609,\r
        "Shape_Le_1": 0.425581045345,\r
        "Shape_Le_2": 0.425625694933,\r
        "Shape_Area": 0.00635279595462\r
      },\r
      "geometry": {\r
        "type": "MultiPolygon",\r
        "coordinates": [\r
          [\r
            [\r
              [121.469097, 28.737133],\r
              [121.467642, 28.736808],\r
              [121.469253, 28.735662],\r
              [121.467897, 28.732598],\r
              [121.463721, 28.731439],\r
              [121.465146, 28.729733],\r
              [121.463572, 28.729142],\r
              [121.464233, 28.726337],\r
              [121.454448, 28.721539],\r
              [121.446632, 28.72264],\r
              [121.437064, 28.720695],\r
              [121.434728, 28.723685],\r
              [121.428019, 28.720499],\r
              [121.42216, 28.702908],\r
              [121.40914, 28.703989],\r
              [121.398497, 28.703161],\r
              [121.385536, 28.701956],\r
              [121.374979, 28.701881],\r
              [121.358585, 28.706925],\r
              [121.350088, 28.70685],\r
              [121.348963, 28.711275],\r
              [121.352725, 28.718379],\r
              [121.352648, 28.728086],\r
              [121.354396, 28.729739],\r
              [121.354801, 28.737891],\r
              [121.353697, 28.738912],\r
              [121.352085, 28.737591],\r
              [121.34852, 28.741792],\r
              [121.344656, 28.750381],\r
              [121.349943, 28.752738],\r
              [121.351014, 28.755507],\r
              [121.353959, 28.755919],\r
              [121.354521, 28.757647],\r
              [121.365051, 28.761225],\r
              [121.368905, 28.757493],\r
              [121.377004, 28.755773],\r
              [121.383334, 28.760391],\r
              [121.379144, 28.762259],\r
              [121.380616, 28.764188],\r
              [121.379728, 28.765805],\r
              [121.374278, 28.765967],\r
              [121.375364, 28.772337],\r
              [121.373306, 28.774654],\r
              [121.375502, 28.780202],\r
              [121.373255, 28.782892],\r
              [121.375352, 28.784549],\r
              [121.379438, 28.784508],\r
              [121.381428, 28.788199],\r
              [121.398766, 28.78038],\r
              [121.398342, 28.77712],\r
              [121.401663, 28.772211],\r
              [121.408354, 28.770823],\r
              [121.410832, 28.769193],\r
              [121.410413, 28.767302],\r
              [121.41553, 28.766616],\r
              [121.416524, 28.769195],\r
              [121.423644, 28.767478],\r
              [121.426232, 28.770135],\r
              [121.429383, 28.769776],\r
              [121.432293, 28.771673],\r
              [121.434563, 28.764202],\r
              [121.438481, 28.761042],\r
              [121.438951, 28.757013],\r
              [121.450798, 28.761016],\r
              [121.451312, 28.758533],\r
              [121.452947, 28.758932],\r
              [121.453223, 28.754733],\r
              [121.45833, 28.753753],\r
              [121.461456, 28.750936],\r
              [121.461078, 28.747738],\r
              [121.459234, 28.746776],\r
              [121.460711, 28.744526],\r
              [121.459512, 28.743727],\r
              [121.46174, 28.741357],\r
              [121.468795, 28.739212],\r
              [121.469097, 28.737133]\r
            ]\r
          ]\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "properties": {\r
        "name": "\u4E0B\u9648\u8857\u9053",\r
        "centerx": 121.447133874,\r
        "centery": 28.610392747,\r
        "ENTIID": "331002006",\r
        "SHAPE_Leng": 0.267584001565,\r
        "Shape_Le_1": 0.267584002067,\r
        "Shape_Le_2": 0.267535804904,\r
        "Shape_Area": 0.0018617861372\r
      },\r
      "geometry": {\r
        "type": "MultiPolygon",\r
        "coordinates": [\r
          [\r
            [\r
              [121.435198, 28.645752],\r
              [121.439142, 28.643605],\r
              [121.447983, 28.642264],\r
              [121.447695, 28.640392],\r
              [121.452645, 28.640249],\r
              [121.457205, 28.633704],\r
              [121.458681, 28.633961],\r
              [121.459082, 28.63196],\r
              [121.457723, 28.631802],\r
              [121.460112, 28.625627],\r
              [121.450311, 28.623282],\r
              [121.451543, 28.617816],\r
              [121.448698, 28.617653],\r
              [121.449045, 28.614123],\r
              [121.453716, 28.613216],\r
              [121.45439, 28.608935],\r
              [121.45711, 28.608789],\r
              [121.457286, 28.605172],\r
              [121.462427, 28.605408],\r
              [121.460933, 28.596559],\r
              [121.463386, 28.596772],\r
              [121.464747, 28.592718],\r
              [121.463057, 28.59248],\r
              [121.463951, 28.587394],\r
              [121.466515, 28.587209],\r
              [121.469165, 28.580552],\r
              [121.466539, 28.580074],\r
              [121.466443, 28.578286],\r
              [121.449268, 28.573349],\r
              [121.434451, 28.57526],\r
              [121.432863, 28.582738],\r
              [121.434361, 28.585316],\r
              [121.433779, 28.590424],\r
              [121.436749, 28.594234],\r
              [121.434317, 28.59437],\r
              [121.433667, 28.597526],\r
              [121.436572, 28.598388],\r
              [121.432536, 28.600062],\r
              [121.432619, 28.604005],\r
              [121.434093, 28.604729],\r
              [121.430703, 28.607257],\r
              [121.434691, 28.610477],\r
              [121.432009, 28.610191],\r
              [121.433098, 28.612523],\r
              [121.431328, 28.613497],\r
              [121.433144, 28.613897],\r
              [121.433226, 28.615474],\r
              [121.43054, 28.617004],\r
              [121.430244, 28.619585],\r
              [121.425113, 28.618607],\r
              [121.424934, 28.619697],\r
              [121.42933, 28.620695],\r
              [121.430852, 28.625796],\r
              [121.431513, 28.635138],\r
              [121.427772, 28.63565],\r
              [121.428071, 28.636837],\r
              [121.425438, 28.638117],\r
              [121.427669, 28.647215],\r
              [121.435198, 28.645752]\r
            ]\r
          ]\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "properties": {\r
        "name": "\u53F0\u5DDE\u6E7E\u65B0\u533A",\r
        "centerx": 121.513458643,\r
        "centery": 28.6199746075,\r
        "ENTIID": "331002005",\r
        "SHAPE_Leng": 0.434262758143,\r
        "Shape_Le_1": 0.434262758943,\r
        "Shape_Le_2": 0.4342221331,\r
        "Shape_Area": 0.00731889542002\r
      },\r
      "geometry": {\r
        "type": "MultiPolygon",\r
        "coordinates": [\r
          [\r
            [\r
              [121.578061, 28.590295],\r
              [121.528611, 28.58865],\r
              [121.511836, 28.585753],\r
              [121.514588, 28.578402],\r
              [121.508592, 28.576656],\r
              [121.504848, 28.584673],\r
              [121.49517, 28.581632],\r
              [121.469557, 28.578801],\r
              [121.466648, 28.587035],\r
              [121.463951, 28.587394],\r
              [121.463057, 28.59248],\r
              [121.464747, 28.592718],\r
              [121.463386, 28.596772],\r
              [121.460933, 28.596559],\r
              [121.462427, 28.605408],\r
              [121.457286, 28.605172],\r
              [121.45711, 28.608789],\r
              [121.45439, 28.608935],\r
              [121.453716, 28.613216],\r
              [121.449045, 28.614123],\r
              [121.448698, 28.617653],\r
              [121.451543, 28.617816],\r
              [121.450311, 28.623282],\r
              [121.460112, 28.625627],\r
              [121.457723, 28.631802],\r
              [121.459082, 28.63196],\r
              [121.458681, 28.633961],\r
              [121.457205, 28.633704],\r
              [121.455423, 28.6379],\r
              [121.453101, 28.639351],\r
              [121.454807, 28.639537],\r
              [121.453538, 28.640143],\r
              [121.455864, 28.643767],\r
              [121.454849, 28.645094],\r
              [121.460647, 28.647055],\r
              [121.453582, 28.647711],\r
              [121.45404, 28.650597],\r
              [121.468615, 28.649944],\r
              [121.469878, 28.647826],\r
              [121.482403, 28.648963],\r
              [121.482547, 28.650287],\r
              [121.489932, 28.65132],\r
              [121.489374, 28.652912],\r
              [121.485713, 28.652497],\r
              [121.485513, 28.660052],\r
              [121.488843, 28.660442],\r
              [121.492506, 28.655418],\r
              [121.500314, 28.65689],\r
              [121.499519, 28.658826],\r
              [121.510125, 28.662892],\r
              [121.539984, 28.65366],\r
              [121.54355, 28.650916],\r
              [121.557469, 28.632431],\r
              [121.578061, 28.590295]\r
            ]\r
          ]\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "properties": {\r
        "name": "\u524D\u6240\u8857\u9053",\r
        "centerx": 121.476686956,\r
        "centery": 28.7135655425,\r
        "ENTIID": "331002007",\r
        "SHAPE_Leng": 0.319668204701,\r
        "Shape_Le_1": 0.319668208141,\r
        "Shape_Le_2": 0.319603954193,\r
        "Shape_Area": 0.00293509872427\r
      },\r
      "geometry": {\r
        "type": "MultiPolygon",\r
        "coordinates": [\r
          [\r
            [\r
              [121.489598, 28.739372],\r
              [121.492959, 28.74047],\r
              [121.496493, 28.737831],\r
              [121.49796, 28.738712],\r
              [121.493597, 28.732969],\r
              [121.496515, 28.730109],\r
              [121.498661, 28.729055],\r
              [121.502266, 28.731689],\r
              [121.506557, 28.725442],\r
              [121.507416, 28.724163],\r
              [121.508789, 28.723184],\r
              [121.51042, 28.721152],\r
              [121.512308, 28.721754],\r
              [121.525269, 28.701128],\r
              [121.527843, 28.702408],\r
              [121.528959, 28.699848],\r
              [121.530075, 28.700451],\r
              [121.528873, 28.702709],\r
              [121.530161, 28.703613],\r
              [121.531963, 28.704064],\r
              [121.532607, 28.703575],\r
              [121.534324, 28.703688],\r
              [121.535139, 28.702107],\r
              [121.534624, 28.702107],\r
              [121.534367, 28.701241],\r
              [121.53398, 28.702069],\r
              [121.533551, 28.701693],\r
              [121.53441, 28.699472],\r
              [121.531105, 28.698117],\r
              [121.528616, 28.697514],\r
              [121.526041, 28.696234],\r
              [121.526942, 28.694089],\r
              [121.525741, 28.692282],\r
              [121.523809, 28.691943],\r
              [121.520591, 28.692508],\r
              [121.519217, 28.692658],\r
              [121.518574, 28.693336],\r
              [121.514969, 28.693298],\r
              [121.513166, 28.694503],\r
              [121.507587, 28.694992],\r
              [121.506729, 28.694992],\r
              [121.506, 28.695105],\r
              [121.504927, 28.693373],\r
              [121.500549, 28.693675],\r
              [121.500206, 28.694202],\r
              [121.497502, 28.694202],\r
              [121.497245, 28.695143],\r
              [121.495657, 28.694992],\r
              [121.4957, 28.694428],\r
              [121.493082, 28.694879],\r
              [121.491108, 28.694804],\r
              [121.490636, 28.696761],\r
              [121.489906, 28.696498],\r
              [121.489649, 28.695482],\r
              [121.477118, 28.6939],\r
              [121.476517, 28.694578],\r
              [121.474543, 28.693788],\r
              [121.47377, 28.694089],\r
              [121.467805, 28.694089],\r
              [121.463556, 28.694051],\r
              [121.457505, 28.693788],\r
              [121.456604, 28.693148],\r
              [121.45021, 28.694691],\r
              [121.442785, 28.698041],\r
              [121.438065, 28.700074],\r
              [121.422332, 28.70291],\r
              [121.428191, 28.720501],\r
              [121.431112, 28.722374],\r
              [121.4349, 28.723687],\r
              [121.437236, 28.720697],\r
              [121.446804, 28.722642],\r
              [121.45462, 28.721541],\r
              [121.464405, 28.726339],\r
              [121.463744, 28.729144],\r
              [121.465318, 28.729735],\r
              [121.463893, 28.731441],\r
              [121.468069, 28.7326],\r
              [121.469425, 28.735664],\r
              [121.467898, 28.736944],\r
              [121.475885, 28.737095],\r
              [121.484086, 28.743679],\r
              [121.489598, 28.739372]\r
            ]\r
          ]\r
        ]\r
      }\r
    },\r
    {\r
      "type": "Feature",\r
      "properties": {\r
        "name": "\u5927\u9648\u9547",\r
        "centerx": 121.834554466,\r
        "centery": 28.5050837045,\r
        "ENTIID": "331002101",\r
        "SHAPE_Leng": 0.882203189157,\r
        "Shape_Le_1": 0.882203190839,\r
        "Shape_Le_2": 0.88258720631,\r
        "Shape_Area": 0.00130885616459\r
      },\r
      "geometry": {\r
        "type": "MultiPolygon",\r
        "coordinates": [\r
          [\r
            [\r
              [121.661611, 28.558176],\r
              [121.662541, 28.557889],\r
              [121.661152, 28.557827],\r
              [121.661611, 28.558176]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.66462, 28.56056],\r
              [121.664599, 28.560134],\r
              [121.664313, 28.560481],\r
              [121.66462, 28.56056]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.658995, 28.560836],\r
              [121.658975, 28.56101],\r
              [121.659366, 28.561208],\r
              [121.658995, 28.560836]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.612148, 28.561887],\r
              [121.611793, 28.561471],\r
              [121.611519, 28.561528],\r
              [121.612148, 28.561887]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.668325, 28.565179],\r
              [121.668046, 28.565466],\r
              [121.668682, 28.56588],\r
              [121.668325, 28.565179]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.669192, 28.566274],\r
              [121.669046, 28.565862],\r
              [121.668658, 28.565921],\r
              [121.669192, 28.566274]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.646185, 28.566133],\r
              [121.646227, 28.566258],\r
              [121.646535, 28.566334],\r
              [121.646185, 28.566133]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.665096, 28.567219],\r
              [121.668181, 28.565756],\r
              [121.663853, 28.563968],\r
              [121.664193, 28.559941],\r
              [121.660072, 28.558745],\r
              [121.659222, 28.560726],\r
              [121.661428, 28.56564],\r
              [121.665096, 28.567219]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.650605, 28.56831],\r
              [121.650802, 28.566963],\r
              [121.645923, 28.565616],\r
              [121.650605, 28.56831]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.655314, 28.569529],\r
              [121.655998, 28.569486],\r
              [121.651213, 28.566915],\r
              [121.655314, 28.569529]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.658035, 28.570267],\r
              [121.657567, 28.56936],\r
              [121.656839, 28.569598],\r
              [121.658035, 28.570267]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.655724, 28.570156],\r
              [121.655061, 28.569863],\r
              [121.65527, 28.570246],\r
              [121.655724, 28.570156]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.645345, 28.573443],\r
              [121.645084, 28.573471],\r
              [121.645353, 28.573641],\r
              [121.645345, 28.573443]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.645049, 28.573786],\r
              [121.643989, 28.573071],\r
              [121.644303, 28.573554],\r
              [121.645049, 28.573786]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.645883, 28.573881],\r
              [121.64537, 28.57369],\r
              [121.645587, 28.573866],\r
              [121.645883, 28.573881]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.64536, 28.574389],\r
              [121.645484, 28.574377],\r
              [121.645168, 28.574238],\r
              [121.64536, 28.574389]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.644899, 28.574323],\r
              [121.643546, 28.573358],\r
              [121.644041, 28.574202],\r
              [121.644899, 28.574323]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.64662, 28.579749],\r
              [121.646468, 28.579613],\r
              [121.646203, 28.579636],\r
              [121.64662, 28.579749]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.645664, 28.579924],\r
              [121.643249, 28.577572],\r
              [121.644984, 28.575465],\r
              [121.643718, 28.573993],\r
              [121.639753, 28.573808],\r
              [121.641011, 28.577999],\r
              [121.645664, 28.579924]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.606795, 28.594831],\r
              [121.605423, 28.590417],\r
              [121.6041, 28.590302],\r
              [121.606795, 28.594831]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.596712, 28.594886],\r
              [121.596666, 28.594708],\r
              [121.59623, 28.594518],\r
              [121.596712, 28.594886]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.607279, 28.595129],\r
              [121.607068, 28.595448],\r
              [121.607386, 28.595214],\r
              [121.607279, 28.595129]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.597539, 28.595659],\r
              [121.598752, 28.594907],\r
              [121.596187, 28.594872],\r
              [121.597539, 28.595659]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.608513, 28.595845],\r
              [121.607009, 28.595634],\r
              [121.608267, 28.59649],\r
              [121.608513, 28.595845]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.640429, 28.600383],\r
              [121.641183, 28.600495],\r
              [121.639455, 28.5999],\r
              [121.640429, 28.600383]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.604635, 28.601862],\r
              [121.605585, 28.599744],\r
              [121.609488, 28.600914],\r
              [121.609258, 28.59767],\r
              [121.605027, 28.597657],\r
              [121.599001, 28.594366],\r
              [121.604635, 28.601862]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.643296, 28.602887],\r
              [121.64327, 28.603074],\r
              [121.643402, 28.603215],\r
              [121.643296, 28.602887]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.637931, 28.605955],\r
              [121.637855, 28.60556],\r
              [121.63775, 28.605641],\r
              [121.637931, 28.605955]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.6475, 28.607721],\r
              [121.647107, 28.607762],\r
              [121.647487, 28.607991],\r
              [121.6475, 28.607721]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.655312, 28.611159],\r
              [121.655211, 28.611356],\r
              [121.65546, 28.611454],\r
              [121.655312, 28.611159]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.655097, 28.611704],\r
              [121.654921, 28.611706],\r
              [121.655027, 28.611957],\r
              [121.655097, 28.611704]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.654977, 28.612109],\r
              [121.654315, 28.611666],\r
              [121.654759, 28.612454],\r
              [121.654977, 28.612109]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.66187, 28.614325],\r
              [121.661412, 28.614012],\r
              [121.661461, 28.614306],\r
              [121.66187, 28.614325]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.661999, 28.614112],\r
              [121.66209, 28.614305],\r
              [121.662551, 28.61446],\r
              [121.661999, 28.614112]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.662581, 28.614965],\r
              [121.662323, 28.614573],\r
              [121.661857, 28.614598],\r
              [121.662581, 28.614965]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.663772, 28.615557],\r
              [121.663829, 28.615473],\r
              [121.663477, 28.615406],\r
              [121.663772, 28.615557]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.668822, 28.620718],\r
              [121.668733, 28.620791],\r
              [121.669112, 28.6209],\r
              [121.668822, 28.620718]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.638495, 28.621087],\r
              [121.638595, 28.620673],\r
              [121.637967, 28.620599],\r
              [121.638495, 28.621087]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.665199, 28.623565],\r
              [121.668737, 28.622785],\r
              [121.664962, 28.620283],\r
              [121.666431, 28.619723],\r
              [121.663437, 28.617507],\r
              [121.665008, 28.61722],\r
              [121.663067, 28.616959],\r
              [121.664466, 28.616038],\r
              [121.657895, 28.613182],\r
              [121.657141, 28.612043],\r
              [121.658689, 28.61161],\r
              [121.65201, 28.613052],\r
              [121.643461, 28.605379],\r
              [121.64259, 28.602128],\r
              [121.637658, 28.602959],\r
              [121.638253, 28.60687],\r
              [121.636397, 28.609614],\r
              [121.629401, 28.602678],\r
              [121.62947, 28.600277],\r
              [121.628485, 28.601436],\r
              [121.625746, 28.600175],\r
              [121.62567, 28.601379],\r
              [121.619258, 28.597669],\r
              [121.619924, 28.596313],\r
              [121.617364, 28.596075],\r
              [121.619582, 28.601924],\r
              [121.620986, 28.602659],\r
              [121.620912, 28.601116],\r
              [121.622793, 28.601228],\r
              [121.62792, 28.603105],\r
              [121.628201, 28.605176],\r
              [121.631968, 28.608407],\r
              [121.629152, 28.610349],\r
              [121.629432, 28.611948],\r
              [121.6374, 28.616934],\r
              [121.63821, 28.62044],\r
              [121.64382, 28.617304],\r
              [121.644622, 28.619361],\r
              [121.64954, 28.618734],\r
              [121.649625, 28.617281],\r
              [121.651125, 28.61928],\r
              [121.648314, 28.622554],\r
              [121.660151, 28.621642],\r
              [121.665199, 28.623565]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.66949, 28.632318],\r
              [121.669528, 28.632484],\r
              [121.669826, 28.632526],\r
              [121.66949, 28.632318]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.670625, 28.632604],\r
              [121.670847, 28.632545],\r
              [121.67026, 28.632568],\r
              [121.670625, 28.632604]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.666587, 28.633691],\r
              [121.669807, 28.632757],\r
              [121.666778, 28.629624],\r
              [121.669783, 28.627502],\r
              [121.668767, 28.626239],\r
              [121.676506, 28.625273],\r
              [121.674569, 28.624607],\r
              [121.675473, 28.623587],\r
              [121.668768, 28.624327],\r
              [121.664966, 28.628135],\r
              [121.666248, 28.629992],\r
              [121.665426, 28.633403],\r
              [121.666587, 28.633691]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.66257, 28.635347],\r
              [121.664919, 28.633991],\r
              [121.662641, 28.633991],\r
              [121.66257, 28.635347]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.661229, 28.636148],\r
              [121.661817, 28.636029],\r
              [121.660949, 28.636071],\r
              [121.661229, 28.636148]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.661171, 28.636448],\r
              [121.661567, 28.636246],\r
              [121.660821, 28.636395],\r
              [121.661171, 28.636448]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.617376, 28.636544],\r
              [121.614557, 28.633412],\r
              [121.61443, 28.635483],\r
              [121.617376, 28.636544]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.636346, 28.636899],\r
              [121.634224, 28.636115],\r
              [121.63447, 28.636633],\r
              [121.636346, 28.636899]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.639173, 28.637979],\r
              [121.640525, 28.638076],\r
              [121.636488, 28.636758],\r
              [121.639173, 28.637979]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.62153, 28.63912],\r
              [121.622208, 28.638627],\r
              [121.617179, 28.636658],\r
              [121.62153, 28.63912]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.639286, 28.640258],\r
              [121.638848, 28.640569],\r
              [121.639482, 28.640577],\r
              [121.639286, 28.640258]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.625787, 28.642543],\r
              [121.62505, 28.64202],\r
              [121.622842, 28.641513],\r
              [121.625787, 28.642543]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.639578, 28.642659],\r
              [121.639053, 28.640681],\r
              [121.637091, 28.640933],\r
              [121.639578, 28.642659]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.639814, 28.643428],\r
              [121.63968, 28.643276],\r
              [121.639412, 28.643311],\r
              [121.639814, 28.643428]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.645659, 28.646563],\r
              [121.645613, 28.646307],\r
              [121.645214, 28.646422],\r
              [121.645659, 28.646563]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.655981, 28.64765],\r
              [121.655797, 28.647306],\r
              [121.6546, 28.647168],\r
              [121.655981, 28.64765]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.655026, 28.647626],\r
              [121.654765, 28.647556],\r
              [121.65539, 28.647856],\r
              [121.655026, 28.647626]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.627829, 28.649632],\r
              [121.627575, 28.649699],\r
              [121.627743, 28.649775],\r
              [121.627829, 28.649632]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.653395, 28.65128],\r
              [121.653337, 28.651082],\r
              [121.653043, 28.651081],\r
              [121.653395, 28.65128]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.652623, 28.653749],\r
              [121.652199, 28.653533],\r
              [121.652532, 28.653811],\r
              [121.652623, 28.653749]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.657856, 28.65632],\r
              [121.657741, 28.655923],\r
              [121.657317, 28.656057],\r
              [121.657856, 28.65632]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.657588, 28.656442],\r
              [121.657304, 28.656379],\r
              [121.657645, 28.656566],\r
              [121.657588, 28.656442]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.663392, 28.66508],\r
              [121.663215, 28.664831],\r
              [121.66294, 28.664946],\r
              [121.663392, 28.66508]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.659586, 28.667604],\r
              [121.659488, 28.667501],\r
              [121.659173, 28.667522],\r
              [121.659586, 28.667604]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.66592, 28.668002],\r
              [121.666508, 28.667432],\r
              [121.664759, 28.667506],\r
              [121.66592, 28.668002]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.649476, 28.668334],\r
              [121.649498, 28.668159],\r
              [121.649341, 28.668355],\r
              [121.649476, 28.668334]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.657832, 28.670331],\r
              [121.657838, 28.67023],\r
              [121.657499, 28.670316],\r
              [121.657832, 28.670331]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.632723, 28.671907],\r
              [121.632564, 28.671981],\r
              [121.632705, 28.672161],\r
              [121.632723, 28.671907]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.62077, 28.672834],\r
              [121.620671, 28.67162],\r
              [121.618336, 28.670855],\r
              [121.62077, 28.672834]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.641969, 28.67908],\r
              [121.641388, 28.67896],\r
              [121.642269, 28.67931],\r
              [121.641969, 28.67908]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.646766, 28.682766],\r
              [121.646353, 28.682535],\r
              [121.646222, 28.682604],\r
              [121.646766, 28.682766]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.646034, 28.68357],\r
              [121.646843, 28.682066],\r
              [121.639845, 28.677562],\r
              [121.646543, 28.675196],\r
              [121.645412, 28.67218],\r
              [121.647128, 28.668784],\r
              [121.652571, 28.667394],\r
              [121.656932, 28.669791],\r
              [121.660081, 28.66885],\r
              [121.659241, 28.666312],\r
              [121.6658, 28.666769],\r
              [121.661888, 28.665211],\r
              [121.65781, 28.658931],\r
              [121.659169, 28.657522],\r
              [121.653353, 28.657192],\r
              [121.652182, 28.655812],\r
              [121.651555, 28.652946],\r
              [121.653034, 28.649703],\r
              [121.656129, 28.649322],\r
              [121.654574, 28.647467],\r
              [121.648304, 28.650173],\r
              [121.645909, 28.648486],\r
              [121.646506, 28.647174],\r
              [121.639433, 28.643474],\r
              [121.643383, 28.647635],\r
              [121.643177, 28.649574],\r
              [121.638169, 28.649234],\r
              [121.634828, 28.647008],\r
              [121.635599, 28.646281],\r
              [121.630092, 28.644188],\r
              [121.631751, 28.646398],\r
              [121.630127, 28.647697],\r
              [121.626801, 28.645004],\r
              [121.623768, 28.647999],\r
              [121.626185, 28.648054],\r
              [121.629666, 28.652164],\r
              [121.631948, 28.652245],\r
              [121.635257, 28.655145],\r
              [121.635036, 28.656888],\r
              [121.636224, 28.655236],\r
              [121.641626, 28.656858],\r
              [121.642026, 28.658302],\r
              [121.63982, 28.660658],\r
              [121.634875, 28.657725],\r
              [121.634941, 28.659345],\r
              [121.631339, 28.659935],\r
              [121.632867, 28.662027],\r
              [121.631376, 28.662567],\r
              [121.633033, 28.669912],\r
              [121.621533, 28.665446],\r
              [121.622554, 28.667769],\r
              [121.621067, 28.667961],\r
              [121.622086, 28.668792],\r
              [121.620717, 28.67063],\r
              [121.631374, 28.670345],\r
              [121.633294, 28.674266],\r
              [121.638981, 28.676643],\r
              [121.639125, 28.678386],\r
              [121.636239, 28.680789],\r
              [121.646034, 28.68357]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.646536, 28.685089],\r
              [121.645977, 28.684897],\r
              [121.646188, 28.685086],\r
              [121.646536, 28.685089]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.673551, 28.705861],\r
              [121.673254, 28.705303],\r
              [121.672378, 28.705419],\r
              [121.673551, 28.705861]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.672261, 28.70675],\r
              [121.673227, 28.706305],\r
              [121.671385, 28.706137],\r
              [121.672261, 28.70675]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.673817, 28.71027],\r
              [121.674964, 28.708343],\r
              [121.672662, 28.70748],\r
              [121.674036, 28.707281],\r
              [121.670014, 28.707514],\r
              [121.673817, 28.71027]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.570948, 28.769234],\r
              [121.570554, 28.769026],\r
              [121.570691, 28.769336],\r
              [121.570948, 28.769234]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.571653, 28.770448],\r
              [121.571031, 28.769601],\r
              [121.571027, 28.769876],\r
              [121.571653, 28.770448]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.571985, 28.771628],\r
              [121.571719, 28.771361],\r
              [121.571568, 28.771593],\r
              [121.571985, 28.771628]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.566897, 28.772964],\r
              [121.569314, 28.772256],\r
              [121.569291, 28.770437],\r
              [121.567006, 28.769969],\r
              [121.566308, 28.771222],\r
              [121.55964, 28.766758],\r
              [121.55788, 28.768658],\r
              [121.566897, 28.772964]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.565848, 28.774201],\r
              [121.565841, 28.77447],\r
              [121.566147, 28.774511],\r
              [121.565848, 28.774201]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.548122, 28.779677],\r
              [121.547757, 28.779775],\r
              [121.548053, 28.779945],\r
              [121.548122, 28.779677]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.610923, 28.779939],\r
              [121.610929, 28.780072],\r
              [121.611221, 28.780209],\r
              [121.610923, 28.779939]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.610539, 28.779959],\r
              [121.610684, 28.780241],\r
              [121.611073, 28.780252],\r
              [121.610539, 28.779959]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.610654, 28.780564],\r
              [121.608484, 28.778869],\r
              [121.609079, 28.780056],\r
              [121.610654, 28.780564]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.612831, 28.780822],\r
              [121.612705, 28.780863],\r
              [121.61306, 28.781001],\r
              [121.612831, 28.780822]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.56433, 28.781847],\r
              [121.572778, 28.77902],\r
              [121.570209, 28.777289],\r
              [121.571763, 28.776006],\r
              [121.56901, 28.773969],\r
              [121.564292, 28.775099],\r
              [121.552944, 28.769326],\r
              [121.556306, 28.775463],\r
              [121.561001, 28.775473],\r
              [121.563194, 28.777422],\r
              [121.56433, 28.781847]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.620546, 28.782802],\r
              [121.620097, 28.782688],\r
              [121.620251, 28.782901],\r
              [121.620546, 28.782802]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.564041, 28.784262],\r
              [121.563867, 28.784519],\r
              [121.564125, 28.784673],\r
              [121.564041, 28.784262]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.618957, 28.784914],\r
              [121.61906, 28.784849],\r
              [121.618826, 28.784785],\r
              [121.618957, 28.784914]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.62159, 28.784959],\r
              [121.622325, 28.784179],\r
              [121.618334, 28.781498],\r
              [121.610462, 28.781158],\r
              [121.613226, 28.782744],\r
              [121.613036, 28.784292],\r
              [121.614431, 28.783728],\r
              [121.613772, 28.782197],\r
              [121.62159, 28.784959]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.622608, 28.785245],\r
              [121.62221, 28.785068],\r
              [121.62241, 28.785223],\r
              [121.622608, 28.785245]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.621773, 28.785231],\r
              [121.621765, 28.785347],\r
              [121.622082, 28.785519],\r
              [121.621773, 28.785231]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.500515, 28.786404],\r
              [121.50063, 28.786255],\r
              [121.500448, 28.786129],\r
              [121.500515, 28.786404]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.499415, 28.786474],\r
              [121.499036, 28.785846],\r
              [121.498282, 28.78565],\r
              [121.499415, 28.786474]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.500851, 28.786671],\r
              [121.501217, 28.786286],\r
              [121.500661, 28.786404],\r
              [121.500851, 28.786671]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.499984, 28.786595],\r
              [121.499616, 28.786576],\r
              [121.499412, 28.786942],\r
              [121.499984, 28.786595]\r
            ]\r
          ],\r
          [\r
            [\r
              [121.503408, 28.787345],\r
              [121.502776, 28.787095],\r
              [121.503277, 28.78743],\r
              [121.503408, 28.787345]\r
            ]\r
          ]\r
        ]\r
      }\r
    }\r
  ]\r
}\r
`,k6={class:"w-min-[400px] space-y-4 fixed left-0 top-0"},U6={class:"flex"},K6=ln("div",{class:"w-[100px]"},"\u5BBD\u5EA6",-1),q6={class:"flex"},z6=ln("div",{class:"w-[100px]"},"\u9AD8\u5EA6",-1),W6={class:"flex"},X6=ln("div",{class:"w-[100px]"},"\u6295\u5F71\u4F4D\u7F6E",-1),V6={class:"flex"},Y6=ln("div",{class:"w-[100px]"},"\u7F29\u653E\u6BD4\u4F8B",-1),J6={class:"flex"},Z6=ln("div",{class:"w-[100px]"},"geojson",-1),Q6=ln("div",{id:"map",class:"flex justify-center items-center mx-[400px]"},null,-1),j6={class:"w-[400px] fixed top-0 right-0"},G6=["value"],n8={__name:"App",setup(n){const t=mr({width:750,height:800,scale:12e4,center:"121.51, 28.68"}),e=X2(B6),r=W2("");Ki(()=>{hl(()=>i())});function i(){Bo("#map").select("svg").remove();let{width:o,height:s,scale:l,center:f}=t;const c=JSON.parse(e.value);var u=H6().center(f.split(",")).scale(l).translate([o/2,s/2]);const a=A6(u);var h=Bo("#map").append("svg").attr("width",o).attr("height",s);h.append("g").selectAll("path").data(c.features).enter().append("path").attr("d",a),console.log(h.html()),r.value=document.querySelector("#map").innerHTML}return(o,s)=>(Wl(),Yl(On,null,[ln("div",k6,[ln("div",U6,[K6,Gt(ln("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.width=l)},null,512),[[ne,t.width]])]),ln("div",q6,[z6,Gt(ln("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>t.height=l)},null,512),[[ne,t.height]])]),ln("div",W6,[X6,Gt(ln("input",{"onUpdate:modelValue":s[2]||(s[2]=l=>t.center=l)},null,512),[[ne,t.center]])]),ln("div",V6,[Y6,Gt(ln("input",{"onUpdate:modelValue":s[3]||(s[3]=l=>t.scale=l)},null,512),[[ne,t.scale]])]),ln("div",J6,[Z6,Gt(ln("textarea",{class:"min-h-[500px] min-w-[250px]","onUpdate:modelValue":s[4]||(s[4]=l=>mn(e)?e.value=l:null)},null,512),[[ne,D1(e)]])])]),Q6,ln("div",j6,[fs(" output "),ln("textarea",{class:"w-full min-h-[500px]",readonly:"",value:r.value},null,8,G6)])],64))}};Ff(n8).mount("#app");
