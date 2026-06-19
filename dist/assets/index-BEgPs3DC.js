var nM=Object.defineProperty;var iM=(n,e,t)=>e in n?nM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var it=(n,e,t)=>iM(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Kv={exports:{}},Oc={},Zv={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var El=Symbol.for("react.element"),rM=Symbol.for("react.portal"),sM=Symbol.for("react.fragment"),oM=Symbol.for("react.strict_mode"),aM=Symbol.for("react.profiler"),lM=Symbol.for("react.provider"),uM=Symbol.for("react.context"),cM=Symbol.for("react.forward_ref"),fM=Symbol.for("react.suspense"),hM=Symbol.for("react.memo"),dM=Symbol.for("react.lazy"),eg=Symbol.iterator;function pM(n){return n===null||typeof n!="object"?null:(n=eg&&n[eg]||n["@@iterator"],typeof n=="function"?n:null)}var Qv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jv=Object.assign,e0={};function ta(n,e,t){this.props=n,this.context=e,this.refs=e0,this.updater=t||Qv}ta.prototype.isReactComponent={};ta.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ta.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function t0(){}t0.prototype=ta.prototype;function xp(n,e,t){this.props=n,this.context=e,this.refs=e0,this.updater=t||Qv}var yp=xp.prototype=new t0;yp.constructor=xp;Jv(yp,ta.prototype);yp.isPureReactComponent=!0;var tg=Array.isArray,n0=Object.prototype.hasOwnProperty,Sp={current:null},i0={key:!0,ref:!0,__self:!0,__source:!0};function r0(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)n0.call(e,i)&&!i0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:El,type:n,key:s,ref:o,props:r,_owner:Sp.current}}function mM(n,e){return{$$typeof:El,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Mp(n){return typeof n=="object"&&n!==null&&n.$$typeof===El}function gM(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var ng=/\/+/g;function ff(n,e){return typeof n=="object"&&n!==null&&n.key!=null?gM(""+n.key):e.toString(36)}function Pu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case El:case rM:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+ff(o,0):i,tg(r)?(t="",n!=null&&(t=n.replace(ng,"$&/")+"/"),Pu(r,e,t,"",function(u){return u})):r!=null&&(Mp(r)&&(r=mM(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ng,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",tg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+ff(s,a);o+=Pu(s,e,t,l,r)}else if(l=pM(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+ff(s,a++),o+=Pu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Il(n,e,t){if(n==null)return n;var i=[],r=0;return Pu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function _M(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var dn={current:null},bu={transition:null},vM={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:bu,ReactCurrentOwner:Sp};function s0(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Il,forEach:function(n,e,t){Il(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Il(n,function(){e++}),e},toArray:function(n){return Il(n,function(e){return e})||[]},only:function(n){if(!Mp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};je.Component=ta;je.Fragment=sM;je.Profiler=aM;je.PureComponent=xp;je.StrictMode=oM;je.Suspense=fM;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vM;je.act=s0;je.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Jv({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sp.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)n0.call(e,l)&&!i0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:El,type:n.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(n){return n={$$typeof:uM,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:lM,_context:n},n.Consumer=n};je.createElement=r0;je.createFactory=function(n){var e=r0.bind(null,n);return e.type=n,e};je.createRef=function(){return{current:null}};je.forwardRef=function(n){return{$$typeof:cM,render:n}};je.isValidElement=Mp;je.lazy=function(n){return{$$typeof:dM,_payload:{_status:-1,_result:n},_init:_M}};je.memo=function(n,e){return{$$typeof:hM,type:n,compare:e===void 0?null:e}};je.startTransition=function(n){var e=bu.transition;bu.transition={};try{n()}finally{bu.transition=e}};je.unstable_act=s0;je.useCallback=function(n,e){return dn.current.useCallback(n,e)};je.useContext=function(n){return dn.current.useContext(n)};je.useDebugValue=function(){};je.useDeferredValue=function(n){return dn.current.useDeferredValue(n)};je.useEffect=function(n,e){return dn.current.useEffect(n,e)};je.useId=function(){return dn.current.useId()};je.useImperativeHandle=function(n,e,t){return dn.current.useImperativeHandle(n,e,t)};je.useInsertionEffect=function(n,e){return dn.current.useInsertionEffect(n,e)};je.useLayoutEffect=function(n,e){return dn.current.useLayoutEffect(n,e)};je.useMemo=function(n,e){return dn.current.useMemo(n,e)};je.useReducer=function(n,e,t){return dn.current.useReducer(n,e,t)};je.useRef=function(n){return dn.current.useRef(n)};je.useState=function(n){return dn.current.useState(n)};je.useSyncExternalStore=function(n,e,t){return dn.current.useSyncExternalStore(n,e,t)};je.useTransition=function(){return dn.current.useTransition()};je.version="18.3.1";Zv.exports=je;var mt=Zv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xM=mt,yM=Symbol.for("react.element"),SM=Symbol.for("react.fragment"),MM=Object.prototype.hasOwnProperty,EM=xM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TM={key:!0,ref:!0,__self:!0,__source:!0};function o0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)MM.call(e,i)&&!TM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:yM,type:n,key:s,ref:o,props:r,_owner:EM.current}}Oc.Fragment=SM;Oc.jsx=o0;Oc.jsxs=o0;Kv.exports=Oc;var ae=Kv.exports,a0={exports:{}},Xn={},l0={exports:{}},u0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,K){var Q=I.length;I.push(K);e:for(;0<Q;){var re=Q-1>>>1,Se=I[re];if(0<r(Se,K))I[re]=K,I[Q]=Se,Q=re;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var K=I[0],Q=I.pop();if(Q!==K){I[0]=Q;e:for(var re=0,Se=I.length,Ge=Se>>>1;re<Ge;){var Y=2*(re+1)-1,te=I[Y],_e=Y+1,he=I[_e];if(0>r(te,Q))_e<Se&&0>r(he,te)?(I[re]=he,I[_e]=Q,re=_e):(I[re]=te,I[Y]=Q,re=Y);else if(_e<Se&&0>r(he,Q))I[re]=he,I[_e]=Q,re=_e;else break e}}return K}function r(I,K){var Q=I.sortIndex-K.sortIndex;return Q!==0?Q:I.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,_=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var K=t(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=I)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(u)}}function y(I){if(m=!1,v(I),!_)if(t(l)!==null)_=!0,z(C);else{var K=t(u);K!==null&&j(y,K.startTime-I)}}function C(I,K){_=!1,m&&(m=!1,d(P),P=-1),p=!0;var Q=h;try{for(v(K),f=t(l);f!==null&&(!(f.expirationTime>K)||I&&!D());){var re=f.callback;if(typeof re=="function"){f.callback=null,h=f.priorityLevel;var Se=re(f.expirationTime<=K);K=n.unstable_now(),typeof Se=="function"?f.callback=Se:f===t(l)&&i(l),v(K)}else i(l);f=t(l)}if(f!==null)var Ge=!0;else{var Y=t(u);Y!==null&&j(y,Y.startTime-K),Ge=!1}return Ge}finally{f=null,h=Q,p=!1}}var A=!1,T=null,P=-1,E=5,S=-1;function D(){return!(n.unstable_now()-S<E)}function B(){if(T!==null){var I=n.unstable_now();S=I;var K=!0;try{K=T(!0,I)}finally{K?O():(A=!1,T=null)}}else A=!1}var O;if(typeof x=="function")O=function(){x(B)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=B,O=function(){q.postMessage(null)}}else O=function(){g(B,0)};function z(I){T=I,A||(A=!0,O())}function j(I,K){P=g(function(){I(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,z(C))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var Q=h;h=K;try{return I()}finally{h=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=h;h=I;try{return K()}finally{h=Q}},n.unstable_scheduleCallback=function(I,K,Q){var re=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?re+Q:re):Q=re,I){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Q+Se,I={id:c++,callback:K,priorityLevel:I,startTime:Q,expirationTime:Se,sortIndex:-1},Q>re?(I.sortIndex=Q,e(u,I),t(l)===null&&I===t(u)&&(m?(d(P),P=-1):m=!0,j(y,Q-re))):(I.sortIndex=Se,e(l,I),_||p||(_=!0,z(C))),I},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(I){var K=h;return function(){var Q=h;h=K;try{return I.apply(this,arguments)}finally{h=Q}}}})(u0);l0.exports=u0;var wM=l0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AM=mt,Hn=wM;function le(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c0=new Set,Ya={};function Ds(n,e){Fo(n,e),Fo(n+"Capture",e)}function Fo(n,e){for(Ya[n]=e,n=0;n<e.length;n++)c0.add(e[n])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rh=Object.prototype.hasOwnProperty,CM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ig={},rg={};function RM(n){return Rh.call(rg,n)?!0:Rh.call(ig,n)?!1:CM.test(n)?rg[n]=!0:(ig[n]=!0,!1)}function PM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function bM(n,e,t,i){if(e===null||typeof e>"u"||PM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Jt[n]=new pn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Jt[e]=new pn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Jt[n]=new pn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Jt[n]=new pn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Jt[n]=new pn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Jt[n]=new pn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Jt[n]=new pn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Jt[n]=new pn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Jt[n]=new pn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ep=/[\-:]([a-z])/g;function Tp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ep,Tp);Jt[e]=new pn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ep,Tp);Jt[e]=new pn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ep,Tp);Jt[e]=new pn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Jt[n]=new pn(n,1,!1,n.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Jt[n]=new pn(n,1,!1,n.toLowerCase(),null,!0,!0)});function wp(n,e,t,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bM(e,t,r,i)&&(t=null),i||r===null?RM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var lr=AM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ul=Symbol.for("react.element"),oo=Symbol.for("react.portal"),ao=Symbol.for("react.fragment"),Ap=Symbol.for("react.strict_mode"),Ph=Symbol.for("react.profiler"),f0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),Cp=Symbol.for("react.forward_ref"),bh=Symbol.for("react.suspense"),Lh=Symbol.for("react.suspense_list"),Rp=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),d0=Symbol.for("react.offscreen"),sg=Symbol.iterator;function la(n){return n===null||typeof n!="object"?null:(n=sg&&n[sg]||n["@@iterator"],typeof n=="function"?n:null)}var St=Object.assign,hf;function Ta(n){if(hf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);hf=e&&e[1]||""}return`
`+hf+n}var df=!1;function pf(n,e){if(!n||df)return"";df=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{df=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ta(n):""}function LM(n){switch(n.tag){case 5:return Ta(n.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 2:case 15:return n=pf(n.type,!1),n;case 11:return n=pf(n.type.render,!1),n;case 1:return n=pf(n.type,!0),n;default:return""}}function Dh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ao:return"Fragment";case oo:return"Portal";case Ph:return"Profiler";case Ap:return"StrictMode";case bh:return"Suspense";case Lh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case h0:return(n.displayName||"Context")+".Consumer";case f0:return(n._context.displayName||"Context")+".Provider";case Cp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Rp:return e=n.displayName||null,e!==null?e:Dh(n.type)||"Memo";case vr:e=n._payload,n=n._init;try{return Dh(n(e))}catch{}}return null}function DM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dh(e);case 8:return e===Ap?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Br(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function p0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NM(n){var e=p0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ol(n){n._valueTracker||(n._valueTracker=NM(n))}function m0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=p0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ku(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Nh(n,e){var t=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function og(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Br(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g0(n,e){e=e.checked,e!=null&&wp(n,"checked",e,!1)}function Ih(n,e){g0(n,e);var t=Br(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Uh(n,e.type,t):e.hasOwnProperty("defaultValue")&&Uh(n,e.type,Br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function ag(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Uh(n,e,t){(e!=="number"||Ku(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var wa=Array.isArray;function To(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Br(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Oh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function lg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(le(92));if(wa(t)){if(1<t.length)throw Error(le(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Br(t)}}function _0(n,e){var t=Br(e.value),i=Br(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function ug(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function v0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?v0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Fl,x0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Fl=Fl||document.createElement("div"),Fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function qa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var La={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IM=["Webkit","ms","Moz","O"];Object.keys(La).forEach(function(n){IM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),La[e]=La[n]})});function y0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||La.hasOwnProperty(n)&&La[n]?(""+e).trim():e+"px"}function S0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=y0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var UM=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kh(n,e){if(e){if(UM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function zh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bh=null;function Pp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Vh=null,wo=null,Ao=null;function cg(n){if(n=Al(n)){if(typeof Vh!="function")throw Error(le(280));var e=n.stateNode;e&&(e=Vc(e),Vh(n.stateNode,n.type,e))}}function M0(n){wo?Ao?Ao.push(n):Ao=[n]:wo=n}function E0(){if(wo){var n=wo,e=Ao;if(Ao=wo=null,cg(n),e)for(n=0;n<e.length;n++)cg(e[n])}}function T0(n,e){return n(e)}function w0(){}var mf=!1;function A0(n,e,t){if(mf)return n(e,t);mf=!0;try{return T0(n,e,t)}finally{mf=!1,(wo!==null||Ao!==null)&&(w0(),E0())}}function $a(n,e){var t=n.stateNode;if(t===null)return null;var i=Vc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(le(231,e,typeof t));return t}var Hh=!1;if(tr)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){Hh=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{Hh=!1}function OM(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Da=!1,Zu=null,Qu=!1,Gh=null,FM={onError:function(n){Da=!0,Zu=n}};function kM(n,e,t,i,r,s,o,a,l){Da=!1,Zu=null,OM.apply(FM,arguments)}function zM(n,e,t,i,r,s,o,a,l){if(kM.apply(this,arguments),Da){if(Da){var u=Zu;Da=!1,Zu=null}else throw Error(le(198));Qu||(Qu=!0,Gh=u)}}function Ns(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function C0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function fg(n){if(Ns(n)!==n)throw Error(le(188))}function BM(n){var e=n.alternate;if(!e){if(e=Ns(n),e===null)throw Error(le(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return fg(r),n;if(s===i)return fg(r),e;s=s.sibling}throw Error(le(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(le(189))}}if(t.alternate!==i)throw Error(le(190))}if(t.tag!==3)throw Error(le(188));return t.stateNode.current===t?n:e}function R0(n){return n=BM(n),n!==null?P0(n):null}function P0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=P0(n);if(e!==null)return e;n=n.sibling}return null}var b0=Hn.unstable_scheduleCallback,hg=Hn.unstable_cancelCallback,VM=Hn.unstable_shouldYield,HM=Hn.unstable_requestPaint,Rt=Hn.unstable_now,GM=Hn.unstable_getCurrentPriorityLevel,bp=Hn.unstable_ImmediatePriority,L0=Hn.unstable_UserBlockingPriority,Ju=Hn.unstable_NormalPriority,WM=Hn.unstable_LowPriority,D0=Hn.unstable_IdlePriority,Fc=null,bi=null;function XM(n){if(bi&&typeof bi.onCommitFiberRoot=="function")try{bi.onCommitFiberRoot(Fc,n,void 0,(n.current.flags&128)===128)}catch{}}var vi=Math.clz32?Math.clz32:qM,jM=Math.log,YM=Math.LN2;function qM(n){return n>>>=0,n===0?32:31-(jM(n)/YM|0)|0}var kl=64,zl=4194304;function Aa(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ec(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Aa(a):(s&=o,s!==0&&(i=Aa(s)))}else o=t&~r,o!==0?i=Aa(o):s!==0&&(i=Aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-vi(e),r=1<<t,i|=n[t],e&=~r;return i}function $M(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-vi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=$M(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Wh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function N0(){var n=kl;return kl<<=1,!(kl&4194240)&&(kl=64),n}function gf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Tl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-vi(e),n[e]=t}function ZM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-vi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Lp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-vi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var nt=0;function I0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var U0,Dp,O0,F0,k0,Xh=!1,Bl=[],Pr=null,br=null,Lr=null,Ka=new Map,Za=new Map,Sr=[],QM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dg(n,e){switch(n){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(e.pointerId)}}function ca(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Al(e),e!==null&&Dp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function JM(n,e,t,i,r){switch(e){case"focusin":return Pr=ca(Pr,n,e,t,i,r),!0;case"dragenter":return br=ca(br,n,e,t,i,r),!0;case"mouseover":return Lr=ca(Lr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ka.set(s,ca(Ka.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Za.set(s,ca(Za.get(s)||null,n,e,t,i,r)),!0}return!1}function z0(n){var e=hs(n.target);if(e!==null){var t=Ns(e);if(t!==null){if(e=t.tag,e===13){if(e=C0(t),e!==null){n.blockedOn=e,k0(n.priority,function(){O0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Lu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=jh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Bh=i,t.target.dispatchEvent(i),Bh=null}else return e=Al(t),e!==null&&Dp(e),n.blockedOn=t,!1;e.shift()}return!0}function pg(n,e,t){Lu(n)&&t.delete(e)}function eE(){Xh=!1,Pr!==null&&Lu(Pr)&&(Pr=null),br!==null&&Lu(br)&&(br=null),Lr!==null&&Lu(Lr)&&(Lr=null),Ka.forEach(pg),Za.forEach(pg)}function fa(n,e){n.blockedOn===e&&(n.blockedOn=null,Xh||(Xh=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,eE)))}function Qa(n){function e(r){return fa(r,n)}if(0<Bl.length){fa(Bl[0],n);for(var t=1;t<Bl.length;t++){var i=Bl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Pr!==null&&fa(Pr,n),br!==null&&fa(br,n),Lr!==null&&fa(Lr,n),Ka.forEach(e),Za.forEach(e),t=0;t<Sr.length;t++)i=Sr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Sr.length&&(t=Sr[0],t.blockedOn===null);)z0(t),t.blockedOn===null&&Sr.shift()}var Co=lr.ReactCurrentBatchConfig,tc=!0;function tE(n,e,t,i){var r=nt,s=Co.transition;Co.transition=null;try{nt=1,Np(n,e,t,i)}finally{nt=r,Co.transition=s}}function nE(n,e,t,i){var r=nt,s=Co.transition;Co.transition=null;try{nt=4,Np(n,e,t,i)}finally{nt=r,Co.transition=s}}function Np(n,e,t,i){if(tc){var r=jh(n,e,t,i);if(r===null)Af(n,e,i,nc,t),dg(n,i);else if(JM(r,n,e,t,i))i.stopPropagation();else if(dg(n,i),e&4&&-1<QM.indexOf(n)){for(;r!==null;){var s=Al(r);if(s!==null&&U0(s),s=jh(n,e,t,i),s===null&&Af(n,e,i,nc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Af(n,e,i,null,t)}}var nc=null;function jh(n,e,t,i){if(nc=null,n=Pp(i),n=hs(n),n!==null)if(e=Ns(n),e===null)n=null;else if(t=e.tag,t===13){if(n=C0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return nc=n,null}function B0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GM()){case bp:return 1;case L0:return 4;case Ju:case WM:return 16;case D0:return 536870912;default:return 16}default:return 16}}var Tr=null,Ip=null,Du=null;function V0(){if(Du)return Du;var n,e=Ip,t=e.length,i,r="value"in Tr?Tr.value:Tr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Du=r.slice(n,1<i?1-i:void 0)}function Nu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Vl(){return!0}function mg(){return!1}function jn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vl:mg,this.isPropagationStopped=mg,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),e}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Up=jn(na),wl=St({},na,{view:0,detail:0}),iE=jn(wl),_f,vf,ha,kc=St({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Op,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ha&&(ha&&n.type==="mousemove"?(_f=n.screenX-ha.screenX,vf=n.screenY-ha.screenY):vf=_f=0,ha=n),_f)},movementY:function(n){return"movementY"in n?n.movementY:vf}}),gg=jn(kc),rE=St({},kc,{dataTransfer:0}),sE=jn(rE),oE=St({},wl,{relatedTarget:0}),xf=jn(oE),aE=St({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),lE=jn(aE),uE=St({},na,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),cE=jn(uE),fE=St({},na,{data:0}),_g=jn(fE),hE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mE(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=pE[n])?!!e[n]:!1}function Op(){return mE}var gE=St({},wl,{key:function(n){if(n.key){var e=hE[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Nu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Op,charCode:function(n){return n.type==="keypress"?Nu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Nu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_E=jn(gE),vE=St({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vg=jn(vE),xE=St({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Op}),yE=jn(xE),SE=St({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),ME=jn(SE),EE=St({},kc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),TE=jn(EE),wE=[9,13,27,32],Fp=tr&&"CompositionEvent"in window,Na=null;tr&&"documentMode"in document&&(Na=document.documentMode);var AE=tr&&"TextEvent"in window&&!Na,H0=tr&&(!Fp||Na&&8<Na&&11>=Na),xg=" ",yg=!1;function G0(n,e){switch(n){case"keyup":return wE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var lo=!1;function CE(n,e){switch(n){case"compositionend":return W0(e);case"keypress":return e.which!==32?null:(yg=!0,xg);case"textInput":return n=e.data,n===xg&&yg?null:n;default:return null}}function RE(n,e){if(lo)return n==="compositionend"||!Fp&&G0(n,e)?(n=V0(),Du=Ip=Tr=null,lo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return H0&&e.locale!=="ko"?null:e.data;default:return null}}var PE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!PE[n.type]:e==="textarea"}function X0(n,e,t,i){M0(i),e=ic(e,"onChange"),0<e.length&&(t=new Up("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ia=null,Ja=null;function bE(n){nx(n,0)}function zc(n){var e=fo(n);if(m0(e))return n}function LE(n,e){if(n==="change")return e}var j0=!1;if(tr){var yf;if(tr){var Sf="oninput"in document;if(!Sf){var Mg=document.createElement("div");Mg.setAttribute("oninput","return;"),Sf=typeof Mg.oninput=="function"}yf=Sf}else yf=!1;j0=yf&&(!document.documentMode||9<document.documentMode)}function Eg(){Ia&&(Ia.detachEvent("onpropertychange",Y0),Ja=Ia=null)}function Y0(n){if(n.propertyName==="value"&&zc(Ja)){var e=[];X0(e,Ja,n,Pp(n)),A0(bE,e)}}function DE(n,e,t){n==="focusin"?(Eg(),Ia=e,Ja=t,Ia.attachEvent("onpropertychange",Y0)):n==="focusout"&&Eg()}function NE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zc(Ja)}function IE(n,e){if(n==="click")return zc(e)}function UE(n,e){if(n==="input"||n==="change")return zc(e)}function OE(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Si=typeof Object.is=="function"?Object.is:OE;function el(n,e){if(Si(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Rh.call(e,r)||!Si(n[r],e[r]))return!1}return!0}function Tg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wg(n,e){var t=Tg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Tg(t)}}function q0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?q0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function $0(){for(var n=window,e=Ku();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ku(n.document)}return e}function kp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function FE(n){var e=$0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&q0(t.ownerDocument.documentElement,t)){if(i!==null&&kp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=wg(t,s);var o=wg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var kE=tr&&"documentMode"in document&&11>=document.documentMode,uo=null,Yh=null,Ua=null,qh=!1;function Ag(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;qh||uo==null||uo!==Ku(i)||(i=uo,"selectionStart"in i&&kp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ua&&el(Ua,i)||(Ua=i,i=ic(Yh,"onSelect"),0<i.length&&(e=new Up("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=uo)))}function Hl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var co={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionend:Hl("Transition","TransitionEnd")},Mf={},K0={};tr&&(K0=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function Bc(n){if(Mf[n])return Mf[n];if(!co[n])return n;var e=co[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in K0)return Mf[n]=e[t];return n}var Z0=Bc("animationend"),Q0=Bc("animationiteration"),J0=Bc("animationstart"),ex=Bc("transitionend"),tx=new Map,Cg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(n,e){tx.set(n,e),Ds(e,[n])}for(var Ef=0;Ef<Cg.length;Ef++){var Tf=Cg[Ef],zE=Tf.toLowerCase(),BE=Tf[0].toUpperCase()+Tf.slice(1);jr(zE,"on"+BE)}jr(Z0,"onAnimationEnd");jr(Q0,"onAnimationIteration");jr(J0,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(ex,"onTransitionEnd");Fo("onMouseEnter",["mouseout","mouseover"]);Fo("onMouseLeave",["mouseout","mouseover"]);Fo("onPointerEnter",["pointerout","pointerover"]);Fo("onPointerLeave",["pointerout","pointerover"]);Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function Rg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,zM(i,e,void 0,n),n.currentTarget=null}function nx(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Rg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Rg(r,a,u),s=l}}}if(Qu)throw n=Gh,Qu=!1,Gh=null,n}function lt(n,e){var t=e[Jh];t===void 0&&(t=e[Jh]=new Set);var i=n+"__bubble";t.has(i)||(ix(e,n,2,!1),t.add(i))}function wf(n,e,t){var i=0;e&&(i|=4),ix(t,n,i,e)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function tl(n){if(!n[Gl]){n[Gl]=!0,c0.forEach(function(t){t!=="selectionchange"&&(VE.has(t)||wf(t,!1,n),wf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Gl]||(e[Gl]=!0,wf("selectionchange",!1,e))}}function ix(n,e,t,i){switch(B0(e)){case 1:var r=tE;break;case 4:r=nE;break;default:r=Np}t=r.bind(null,e,t,n),r=void 0,!Hh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Af(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=hs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}A0(function(){var u=s,c=Pp(t),f=[];e:{var h=tx.get(n);if(h!==void 0){var p=Up,_=n;switch(n){case"keypress":if(Nu(t)===0)break e;case"keydown":case"keyup":p=_E;break;case"focusin":_="focus",p=xf;break;case"focusout":_="blur",p=xf;break;case"beforeblur":case"afterblur":p=xf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=yE;break;case Z0:case Q0:case J0:p=lE;break;case ex:p=ME;break;case"scroll":p=iE;break;case"wheel":p=TE;break;case"copy":case"cut":case"paste":p=cE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=vg}var m=(e&4)!==0,g=!m&&n==="scroll",d=m?h!==null?h+"Capture":null:h;m=[];for(var x=u,v;x!==null;){v=x;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=$a(x,d),y!=null&&m.push(nl(x,y,v)))),g)break;x=x.return}0<m.length&&(h=new p(h,_,null,t,c),f.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==Bh&&(_=t.relatedTarget||t.fromElement)&&(hs(_)||_[nr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?hs(_):null,_!==null&&(g=Ns(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(m=gg,y="onMouseLeave",d="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(m=vg,y="onPointerLeave",d="onPointerEnter",x="pointer"),g=p==null?h:fo(p),v=_==null?h:fo(_),h=new m(y,x+"leave",p,t,c),h.target=g,h.relatedTarget=v,y=null,hs(c)===u&&(m=new m(d,x+"enter",_,t,c),m.target=v,m.relatedTarget=g,y=m),g=y,p&&_)t:{for(m=p,d=_,x=0,v=m;v;v=ks(v))x++;for(v=0,y=d;y;y=ks(y))v++;for(;0<x-v;)m=ks(m),x--;for(;0<v-x;)d=ks(d),v--;for(;x--;){if(m===d||d!==null&&m===d.alternate)break t;m=ks(m),d=ks(d)}m=null}else m=null;p!==null&&Pg(f,h,p,m,!1),_!==null&&g!==null&&Pg(f,g,_,m,!0)}}e:{if(h=u?fo(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=LE;else if(Sg(h))if(j0)C=UE;else{C=NE;var A=DE}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=IE);if(C&&(C=C(n,u))){X0(f,C,t,c);break e}A&&A(n,h,u),n==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Uh(h,"number",h.value)}switch(A=u?fo(u):window,n){case"focusin":(Sg(A)||A.contentEditable==="true")&&(uo=A,Yh=u,Ua=null);break;case"focusout":Ua=Yh=uo=null;break;case"mousedown":qh=!0;break;case"contextmenu":case"mouseup":case"dragend":qh=!1,Ag(f,t,c);break;case"selectionchange":if(kE)break;case"keydown":case"keyup":Ag(f,t,c)}var T;if(Fp)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else lo?G0(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(H0&&t.locale!=="ko"&&(lo||P!=="onCompositionStart"?P==="onCompositionEnd"&&lo&&(T=V0()):(Tr=c,Ip="value"in Tr?Tr.value:Tr.textContent,lo=!0)),A=ic(u,P),0<A.length&&(P=new _g(P,n,null,t,c),f.push({event:P,listeners:A}),T?P.data=T:(T=W0(t),T!==null&&(P.data=T)))),(T=AE?CE(n,t):RE(n,t))&&(u=ic(u,"onBeforeInput"),0<u.length&&(c=new _g("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=T))}nx(f,e)})}function nl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ic(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=$a(n,t),s!=null&&i.unshift(nl(n,s,r)),s=$a(n,e),s!=null&&i.push(nl(n,s,r))),n=n.return}return i}function ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Pg(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=$a(t,s),l!=null&&o.unshift(nl(t,l,a))):r||(l=$a(t,s),l!=null&&o.push(nl(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var HE=/\r\n?/g,GE=/\u0000|\uFFFD/g;function bg(n){return(typeof n=="string"?n:""+n).replace(HE,`
`).replace(GE,"")}function Wl(n,e,t){if(e=bg(e),bg(n)!==e&&t)throw Error(le(425))}function rc(){}var $h=null,Kh=null;function Zh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qh=typeof setTimeout=="function"?setTimeout:void 0,WE=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,XE=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(n){return Lg.resolve(null).then(n).catch(jE)}:Qh;function jE(n){setTimeout(function(){throw n})}function Cf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Qa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Qa(e)}function Dr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Dg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ia=Math.random().toString(36).slice(2),Ci="__reactFiber$"+ia,il="__reactProps$"+ia,nr="__reactContainer$"+ia,Jh="__reactEvents$"+ia,YE="__reactListeners$"+ia,qE="__reactHandles$"+ia;function hs(n){var e=n[Ci];if(e)return e;for(var t=n.parentNode;t;){if(e=t[nr]||t[Ci]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Dg(n);n!==null;){if(t=n[Ci])return t;n=Dg(n)}return e}n=t,t=n.parentNode}return null}function Al(n){return n=n[Ci]||n[nr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(le(33))}function Vc(n){return n[il]||null}var ed=[],ho=-1;function Yr(n){return{current:n}}function ut(n){0>ho||(n.current=ed[ho],ed[ho]=null,ho--)}function at(n,e){ho++,ed[ho]=n.current,n.current=e}var Vr={},ln=Yr(Vr),xn=Yr(!1),Ts=Vr;function ko(n,e){var t=n.type.contextTypes;if(!t)return Vr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function yn(n){return n=n.childContextTypes,n!=null}function sc(){ut(xn),ut(ln)}function Ng(n,e,t){if(ln.current!==Vr)throw Error(le(168));at(ln,e),at(xn,t)}function rx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,DM(n)||"Unknown",r));return St({},t,i)}function oc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Vr,Ts=ln.current,at(ln,n),at(xn,xn.current),!0}function Ig(n,e,t){var i=n.stateNode;if(!i)throw Error(le(169));t?(n=rx(n,e,Ts),i.__reactInternalMemoizedMergedChildContext=n,ut(xn),ut(ln),at(ln,n)):ut(xn),at(xn,t)}var Xi=null,Hc=!1,Rf=!1;function sx(n){Xi===null?Xi=[n]:Xi.push(n)}function $E(n){Hc=!0,sx(n)}function qr(){if(!Rf&&Xi!==null){Rf=!0;var n=0,e=nt;try{var t=Xi;for(nt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Xi=null,Hc=!1}catch(r){throw Xi!==null&&(Xi=Xi.slice(n+1)),b0(bp,qr),r}finally{nt=e,Rf=!1}}return null}var po=[],mo=0,ac=null,lc=0,Zn=[],Qn=0,ws=null,qi=1,$i="";function os(n,e){po[mo++]=lc,po[mo++]=ac,ac=n,lc=e}function ox(n,e,t){Zn[Qn++]=qi,Zn[Qn++]=$i,Zn[Qn++]=ws,ws=n;var i=qi;n=$i;var r=32-vi(i)-1;i&=~(1<<r),t+=1;var s=32-vi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,qi=1<<32-vi(e)+r|t<<r|i,$i=s+n}else qi=1<<s|t<<r|i,$i=n}function zp(n){n.return!==null&&(os(n,1),ox(n,1,0))}function Bp(n){for(;n===ac;)ac=po[--mo],po[mo]=null,lc=po[--mo],po[mo]=null;for(;n===ws;)ws=Zn[--Qn],Zn[Qn]=null,$i=Zn[--Qn],Zn[Qn]=null,qi=Zn[--Qn],Zn[Qn]=null}var Bn=null,On=null,ht=!1,pi=null;function ax(n,e){var t=ei(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ug(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Bn=n,On=Dr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Bn=n,On=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ws!==null?{id:qi,overflow:$i}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ei(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Bn=n,On=null,!0):!1;default:return!1}}function td(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nd(n){if(ht){var e=On;if(e){var t=e;if(!Ug(n,e)){if(td(n))throw Error(le(418));e=Dr(t.nextSibling);var i=Bn;e&&Ug(n,e)?ax(i,t):(n.flags=n.flags&-4097|2,ht=!1,Bn=n)}}else{if(td(n))throw Error(le(418));n.flags=n.flags&-4097|2,ht=!1,Bn=n}}}function Og(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Xl(n){if(n!==Bn)return!1;if(!ht)return Og(n),ht=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Zh(n.type,n.memoizedProps)),e&&(e=On)){if(td(n))throw lx(),Error(le(418));for(;e;)ax(n,e),e=Dr(e.nextSibling)}if(Og(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(le(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){On=Dr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}On=null}}else On=Bn?Dr(n.stateNode.nextSibling):null;return!0}function lx(){for(var n=On;n;)n=Dr(n.nextSibling)}function zo(){On=Bn=null,ht=!1}function Vp(n){pi===null?pi=[n]:pi.push(n)}var KE=lr.ReactCurrentBatchConfig;function da(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(le(309));var i=t.stateNode}if(!i)throw Error(le(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(le(284));if(!t._owner)throw Error(le(290,n))}return n}function jl(n,e){throw n=Object.prototype.toString.call(e),Error(le(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Fg(n){var e=n._init;return e(n._payload)}function ux(n){function e(d,x){if(n){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function t(d,x){if(!n)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=Or(d,x),d.index=0,d.sibling=null,d}function s(d,x,v){return d.index=v,n?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,x,v,y){return x===null||x.tag!==6?(x=Uf(v,d.mode,y),x.return=d,x):(x=r(x,v),x.return=d,x)}function l(d,x,v,y){var C=v.type;return C===ao?c(d,x,v.props.children,y,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===vr&&Fg(C)===x.type)?(y=r(x,v.props),y.ref=da(d,x,v),y.return=d,y):(y=Bu(v.type,v.key,v.props,null,d.mode,y),y.ref=da(d,x,v),y.return=d,y)}function u(d,x,v,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Of(v,d.mode,y),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function c(d,x,v,y,C){return x===null||x.tag!==7?(x=xs(v,d.mode,y,C),x.return=d,x):(x=r(x,v),x.return=d,x)}function f(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Uf(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ul:return v=Bu(x.type,x.key,x.props,null,d.mode,v),v.ref=da(d,null,x),v.return=d,v;case oo:return x=Of(x,d.mode,v),x.return=d,x;case vr:var y=x._init;return f(d,y(x._payload),v)}if(wa(x)||la(x))return x=xs(x,d.mode,v,null),x.return=d,x;jl(d,x)}return null}function h(d,x,v,y){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(d,x,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ul:return v.key===C?l(d,x,v,y):null;case oo:return v.key===C?u(d,x,v,y):null;case vr:return C=v._init,h(d,x,C(v._payload),y)}if(wa(v)||la(v))return C!==null?null:c(d,x,v,y,null);jl(d,v)}return null}function p(d,x,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(v)||null,a(x,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ul:return d=d.get(y.key===null?v:y.key)||null,l(x,d,y,C);case oo:return d=d.get(y.key===null?v:y.key)||null,u(x,d,y,C);case vr:var A=y._init;return p(d,x,v,A(y._payload),C)}if(wa(y)||la(y))return d=d.get(v)||null,c(x,d,y,C,null);jl(x,y)}return null}function _(d,x,v,y){for(var C=null,A=null,T=x,P=x=0,E=null;T!==null&&P<v.length;P++){T.index>P?(E=T,T=null):E=T.sibling;var S=h(d,T,v[P],y);if(S===null){T===null&&(T=E);break}n&&T&&S.alternate===null&&e(d,T),x=s(S,x,P),A===null?C=S:A.sibling=S,A=S,T=E}if(P===v.length)return t(d,T),ht&&os(d,P),C;if(T===null){for(;P<v.length;P++)T=f(d,v[P],y),T!==null&&(x=s(T,x,P),A===null?C=T:A.sibling=T,A=T);return ht&&os(d,P),C}for(T=i(d,T);P<v.length;P++)E=p(T,d,P,v[P],y),E!==null&&(n&&E.alternate!==null&&T.delete(E.key===null?P:E.key),x=s(E,x,P),A===null?C=E:A.sibling=E,A=E);return n&&T.forEach(function(D){return e(d,D)}),ht&&os(d,P),C}function m(d,x,v,y){var C=la(v);if(typeof C!="function")throw Error(le(150));if(v=C.call(v),v==null)throw Error(le(151));for(var A=C=null,T=x,P=x=0,E=null,S=v.next();T!==null&&!S.done;P++,S=v.next()){T.index>P?(E=T,T=null):E=T.sibling;var D=h(d,T,S.value,y);if(D===null){T===null&&(T=E);break}n&&T&&D.alternate===null&&e(d,T),x=s(D,x,P),A===null?C=D:A.sibling=D,A=D,T=E}if(S.done)return t(d,T),ht&&os(d,P),C;if(T===null){for(;!S.done;P++,S=v.next())S=f(d,S.value,y),S!==null&&(x=s(S,x,P),A===null?C=S:A.sibling=S,A=S);return ht&&os(d,P),C}for(T=i(d,T);!S.done;P++,S=v.next())S=p(T,d,P,S.value,y),S!==null&&(n&&S.alternate!==null&&T.delete(S.key===null?P:S.key),x=s(S,x,P),A===null?C=S:A.sibling=S,A=S);return n&&T.forEach(function(B){return e(d,B)}),ht&&os(d,P),C}function g(d,x,v,y){if(typeof v=="object"&&v!==null&&v.type===ao&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ul:e:{for(var C=v.key,A=x;A!==null;){if(A.key===C){if(C=v.type,C===ao){if(A.tag===7){t(d,A.sibling),x=r(A,v.props.children),x.return=d,d=x;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===vr&&Fg(C)===A.type){t(d,A.sibling),x=r(A,v.props),x.ref=da(d,A,v),x.return=d,d=x;break e}t(d,A);break}else e(d,A);A=A.sibling}v.type===ao?(x=xs(v.props.children,d.mode,y,v.key),x.return=d,d=x):(y=Bu(v.type,v.key,v.props,null,d.mode,y),y.ref=da(d,x,v),y.return=d,d=y)}return o(d);case oo:e:{for(A=v.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){t(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{t(d,x);break}else e(d,x);x=x.sibling}x=Of(v,d.mode,y),x.return=d,d=x}return o(d);case vr:return A=v._init,g(d,x,A(v._payload),y)}if(wa(v))return _(d,x,v,y);if(la(v))return m(d,x,v,y);jl(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(t(d,x.sibling),x=r(x,v),x.return=d,d=x):(t(d,x),x=Uf(v,d.mode,y),x.return=d,d=x),o(d)):t(d,x)}return g}var Bo=ux(!0),cx=ux(!1),uc=Yr(null),cc=null,go=null,Hp=null;function Gp(){Hp=go=cc=null}function Wp(n){var e=uc.current;ut(uc),n._currentValue=e}function id(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ro(n,e){cc=n,Hp=go=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(vn=!0),n.firstContext=null)}function si(n){var e=n._currentValue;if(Hp!==n)if(n={context:n,memoizedValue:e,next:null},go===null){if(cc===null)throw Error(le(308));go=n,cc.dependencies={lanes:0,firstContext:n}}else go=go.next=n;return e}var ds=null;function Xp(n){ds===null?ds=[n]:ds.push(n)}function fx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Xp(e)):(t.next=r.next,r.next=t),e.interleaved=t,ir(n,i)}function ir(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var xr=!1;function jp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Qi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ir(n,t)}return r=i.interleaved,r===null?(e.next=e,Xp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ir(n,t)}function Iu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Lp(n,t)}}function kg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function fc(n,e,t,i){var r=n.updateQueue;xr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,m=a;switch(h=e,p=t,m.tag){case 1:if(_=m.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=m.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=St({},f,h);break e;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cs|=o,n.lanes=o,n.memoizedState=f}}function zg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var Cl={},Li=Yr(Cl),rl=Yr(Cl),sl=Yr(Cl);function ps(n){if(n===Cl)throw Error(le(174));return n}function Yp(n,e){switch(at(sl,e),at(rl,n),at(Li,Cl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Fh(e,n)}ut(Li),at(Li,e)}function Vo(){ut(Li),ut(rl),ut(sl)}function dx(n){ps(sl.current);var e=ps(Li.current),t=Fh(e,n.type);e!==t&&(at(rl,n),at(Li,t))}function qp(n){rl.current===n&&(ut(Li),ut(rl))}var gt=Yr(0);function hc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pf=[];function $p(){for(var n=0;n<Pf.length;n++)Pf[n]._workInProgressVersionPrimary=null;Pf.length=0}var Uu=lr.ReactCurrentDispatcher,bf=lr.ReactCurrentBatchConfig,As=0,yt=null,Ot=null,Gt=null,dc=!1,Oa=!1,ol=0,ZE=0;function en(){throw Error(le(321))}function Kp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Si(n[t],e[t]))return!1;return!0}function Zp(n,e,t,i,r,s){if(As=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Uu.current=n===null||n.memoizedState===null?t1:n1,n=t(i,r),Oa){s=0;do{if(Oa=!1,ol=0,25<=s)throw Error(le(301));s+=1,Gt=Ot=null,e.updateQueue=null,Uu.current=i1,n=t(i,r)}while(Oa)}if(Uu.current=pc,e=Ot!==null&&Ot.next!==null,As=0,Gt=Ot=yt=null,dc=!1,e)throw Error(le(300));return n}function Qp(){var n=ol!==0;return ol=0,n}function Ei(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?yt.memoizedState=Gt=n:Gt=Gt.next=n,Gt}function oi(){if(Ot===null){var n=yt.alternate;n=n!==null?n.memoizedState:null}else n=Ot.next;var e=Gt===null?yt.memoizedState:Gt.next;if(e!==null)Gt=e,Ot=n;else{if(n===null)throw Error(le(310));Ot=n,n={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Gt===null?yt.memoizedState=Gt=n:Gt=Gt.next=n}return Gt}function al(n,e){return typeof e=="function"?e(n):e}function Lf(n){var e=oi(),t=e.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=n;var i=Ot,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((As&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,yt.lanes|=c,Cs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Si(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,yt.lanes|=s,Cs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Df(n){var e=oi(),t=e.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Si(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function px(){}function mx(n,e){var t=yt,i=oi(),r=e(),s=!Si(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,Jp(vx.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(t.flags|=2048,ll(9,_x.bind(null,t,i,r,e),void 0,null),Xt===null)throw Error(le(349));As&30||gx(t,e,r)}return r}function gx(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function _x(n,e,t,i){e.value=t,e.getSnapshot=i,xx(e)&&yx(n)}function vx(n,e,t){return t(function(){xx(e)&&yx(n)})}function xx(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Si(n,t)}catch{return!0}}function yx(n){var e=ir(n,1);e!==null&&xi(e,n,1,-1)}function Bg(n){var e=Ei();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:n},e.queue=n,n=n.dispatch=e1.bind(null,yt,n),[e.memoizedState,n]}function ll(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Sx(){return oi().memoizedState}function Ou(n,e,t,i){var r=Ei();yt.flags|=n,r.memoizedState=ll(1|e,t,void 0,i===void 0?null:i)}function Gc(n,e,t,i){var r=oi();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&Kp(i,o.deps)){r.memoizedState=ll(e,t,s,i);return}}yt.flags|=n,r.memoizedState=ll(1|e,t,s,i)}function Vg(n,e){return Ou(8390656,8,n,e)}function Jp(n,e){return Gc(2048,8,n,e)}function Mx(n,e){return Gc(4,2,n,e)}function Ex(n,e){return Gc(4,4,n,e)}function Tx(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function wx(n,e,t){return t=t!=null?t.concat([n]):null,Gc(4,4,Tx.bind(null,e,n),t)}function em(){}function Ax(n,e){var t=oi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Kp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Cx(n,e){var t=oi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Kp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Rx(n,e,t){return As&21?(Si(t,e)||(t=N0(),yt.lanes|=t,Cs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,vn=!0),n.memoizedState=t)}function QE(n,e){var t=nt;nt=t!==0&&4>t?t:4,n(!0);var i=bf.transition;bf.transition={};try{n(!1),e()}finally{nt=t,bf.transition=i}}function Px(){return oi().memoizedState}function JE(n,e,t){var i=Ur(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},bx(n))Lx(e,t);else if(t=fx(n,e,t,i),t!==null){var r=hn();xi(t,n,i,r),Dx(t,e,i)}}function e1(n,e,t){var i=Ur(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(bx(n))Lx(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Si(a,o)){var l=e.interleaved;l===null?(r.next=r,Xp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=fx(n,e,r,i),t!==null&&(r=hn(),xi(t,n,i,r),Dx(t,e,i))}}function bx(n){var e=n.alternate;return n===yt||e!==null&&e===yt}function Lx(n,e){Oa=dc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Dx(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Lp(n,t)}}var pc={readContext:si,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},t1={readContext:si,useCallback:function(n,e){return Ei().memoizedState=[n,e===void 0?null:e],n},useContext:si,useEffect:Vg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ou(4194308,4,Tx.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ou(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ou(4,2,n,e)},useMemo:function(n,e){var t=Ei();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ei();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=JE.bind(null,yt,n),[i.memoizedState,n]},useRef:function(n){var e=Ei();return n={current:n},e.memoizedState=n},useState:Bg,useDebugValue:em,useDeferredValue:function(n){return Ei().memoizedState=n},useTransition:function(){var n=Bg(!1),e=n[0];return n=QE.bind(null,n[1]),Ei().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=yt,r=Ei();if(ht){if(t===void 0)throw Error(le(407));t=t()}else{if(t=e(),Xt===null)throw Error(le(349));As&30||gx(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Vg(vx.bind(null,i,s,n),[n]),i.flags|=2048,ll(9,_x.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ei(),e=Xt.identifierPrefix;if(ht){var t=$i,i=qi;t=(i&~(1<<32-vi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=ol++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=ZE++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},n1={readContext:si,useCallback:Ax,useContext:si,useEffect:Jp,useImperativeHandle:wx,useInsertionEffect:Mx,useLayoutEffect:Ex,useMemo:Cx,useReducer:Lf,useRef:Sx,useState:function(){return Lf(al)},useDebugValue:em,useDeferredValue:function(n){var e=oi();return Rx(e,Ot.memoizedState,n)},useTransition:function(){var n=Lf(al)[0],e=oi().memoizedState;return[n,e]},useMutableSource:px,useSyncExternalStore:mx,useId:Px,unstable_isNewReconciler:!1},i1={readContext:si,useCallback:Ax,useContext:si,useEffect:Jp,useImperativeHandle:wx,useInsertionEffect:Mx,useLayoutEffect:Ex,useMemo:Cx,useReducer:Df,useRef:Sx,useState:function(){return Df(al)},useDebugValue:em,useDeferredValue:function(n){var e=oi();return Ot===null?e.memoizedState=n:Rx(e,Ot.memoizedState,n)},useTransition:function(){var n=Df(al)[0],e=oi().memoizedState;return[n,e]},useMutableSource:px,useSyncExternalStore:mx,useId:Px,unstable_isNewReconciler:!1};function hi(n,e){if(n&&n.defaultProps){e=St({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function rd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:St({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Wc={isMounted:function(n){return(n=n._reactInternals)?Ns(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=hn(),r=Ur(n),s=Qi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Nr(n,s,r),e!==null&&(xi(e,n,r,i),Iu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=hn(),r=Ur(n),s=Qi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Nr(n,s,r),e!==null&&(xi(e,n,r,i),Iu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=hn(),i=Ur(n),r=Qi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Nr(n,r,i),e!==null&&(xi(e,n,i,t),Iu(e,n,i))}};function Hg(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!el(t,i)||!el(r,s):!0}function Nx(n,e,t){var i=!1,r=Vr,s=e.contextType;return typeof s=="object"&&s!==null?s=si(s):(r=yn(e)?Ts:ln.current,i=e.contextTypes,s=(i=i!=null)?ko(n,r):Vr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Gg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Wc.enqueueReplaceState(e,e.state,null)}function sd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},jp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=si(s):(s=yn(e)?Ts:ln.current,r.context=ko(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wc.enqueueReplaceState(r,r.state,null),fc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ho(n,e){try{var t="",i=e;do t+=LM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Nf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function od(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var r1=typeof WeakMap=="function"?WeakMap:Map;function Ix(n,e,t){t=Qi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){gc||(gc=!0,gd=i),od(n,e)},t}function Ux(n,e,t){t=Qi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){od(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){od(n,e),typeof i!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Wg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new r1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=v1.bind(null,n,e,t),e.then(n,n))}function Xg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function jg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Qi(-1,1),e.tag=2,Nr(t,e,1))),t.lanes|=1),n)}var s1=lr.ReactCurrentOwner,vn=!1;function cn(n,e,t,i){e.child=n===null?cx(e,null,t,i):Bo(e,n.child,t,i)}function Yg(n,e,t,i,r){t=t.render;var s=e.ref;return Ro(e,r),i=Zp(n,e,t,i,s,r),t=Qp(),n!==null&&!vn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,rr(n,e,r)):(ht&&t&&zp(e),e.flags|=1,cn(n,e,i,r),e.child)}function qg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!lm(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Ox(n,e,s,i,r)):(n=Bu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:el,t(o,i)&&n.ref===e.ref)return rr(n,e,r)}return e.flags|=1,n=Or(s,i),n.ref=e.ref,n.return=e,e.child=n}function Ox(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(el(s,i)&&n.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(vn=!0);else return e.lanes=n.lanes,rr(n,e,r)}return ad(n,e,t,i,r)}function Fx(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(vo,Nn),Nn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,at(vo,Nn),Nn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,at(vo,Nn),Nn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,at(vo,Nn),Nn|=i;return cn(n,e,r,t),e.child}function kx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ad(n,e,t,i,r){var s=yn(t)?Ts:ln.current;return s=ko(e,s),Ro(e,r),t=Zp(n,e,t,i,s,r),i=Qp(),n!==null&&!vn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,rr(n,e,r)):(ht&&i&&zp(e),e.flags|=1,cn(n,e,t,r),e.child)}function $g(n,e,t,i,r){if(yn(t)){var s=!0;oc(e)}else s=!1;if(Ro(e,r),e.stateNode===null)Fu(n,e),Nx(e,t,i),sd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=si(u):(u=yn(t)?Ts:ln.current,u=ko(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Gg(e,o,i,u),xr=!1;var h=e.memoizedState;o.state=h,fc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||xn.current||xr?(typeof c=="function"&&(rd(e,t,c,i),l=e.memoizedState),(a=xr||Hg(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,hx(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:hi(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=si(l):(l=yn(t)?Ts:ln.current,l=ko(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Gg(e,o,i,l),xr=!1,h=e.memoizedState,o.state=h,fc(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||xn.current||xr?(typeof p=="function"&&(rd(e,t,p,i),_=e.memoizedState),(u=xr||Hg(e,t,u,i,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return ld(n,e,t,i,s,r)}function ld(n,e,t,i,r,s){kx(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ig(e,t,!1),rr(n,e,s);i=e.stateNode,s1.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Bo(e,n.child,null,s),e.child=Bo(e,null,a,s)):cn(n,e,a,s),e.memoizedState=i.state,r&&Ig(e,t,!0),e.child}function zx(n){var e=n.stateNode;e.pendingContext?Ng(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ng(n,e.context,!1),Yp(n,e.containerInfo)}function Kg(n,e,t,i,r){return zo(),Vp(r),e.flags|=256,cn(n,e,t,i),e.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function cd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bx(n,e,t){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),at(gt,r&1),n===null)return nd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yc(o,i,0,null),n=xs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=cd(t),e.memoizedState=ud,n):tm(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return o1(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Or(a,s):(s=xs(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?cd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=ud,i}return s=n.child,n=s.sibling,i=Or(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function tm(n,e){return e=Yc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Yl(n,e,t,i){return i!==null&&Vp(i),Bo(e,n.child,null,t),n=tm(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function o1(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Nf(Error(le(422))),Yl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Yc({mode:"visible",children:i.children},r,0,null),s=xs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bo(e,n.child,null,o),e.child.memoizedState=cd(o),e.memoizedState=ud,s);if(!(e.mode&1))return Yl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(le(419)),i=Nf(s,i,void 0),Yl(n,e,o,i)}if(a=(o&n.childLanes)!==0,vn||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ir(n,r),xi(i,n,r,-1))}return am(),i=Nf(Error(le(421))),Yl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=x1.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,On=Dr(r.nextSibling),Bn=e,ht=!0,pi=null,n!==null&&(Zn[Qn++]=qi,Zn[Qn++]=$i,Zn[Qn++]=ws,qi=n.id,$i=n.overflow,ws=e),e=tm(e,i.children),e.flags|=4096,e)}function Zg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),id(n.return,e,t)}function If(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Vx(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(n,e,i.children,t),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Zg(n,t,e);else if(n.tag===19)Zg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(at(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&hc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),If(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&hc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}If(e,!0,t,null,s);break;case"together":If(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function rr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Cs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(le(153));if(e.child!==null){for(n=e.child,t=Or(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Or(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function a1(n,e,t){switch(e.tag){case 3:zx(e),zo();break;case 5:dx(e);break;case 1:yn(e.type)&&oc(e);break;case 4:Yp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(uc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(gt,gt.current&1),e.flags|=128,null):t&e.child.childLanes?Bx(n,e,t):(at(gt,gt.current&1),n=rr(n,e,t),n!==null?n.sibling:null);at(gt,gt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Vx(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,Fx(n,e,t)}return rr(n,e,t)}var Hx,fd,Gx,Wx;Hx=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};fd=function(){};Gx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ps(Li.current);var s=null;switch(t){case"input":r=Nh(n,r),i=Nh(n,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=Oh(n,r),i=Oh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=rc)}kh(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ya.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Wx=function(n,e,t,i){t!==i&&(e.flags|=4)};function pa(n,e){if(!ht)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function tn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function l1(n,e,t){var i=e.pendingProps;switch(Bp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return yn(e.type)&&sc(),tn(e),null;case 3:return i=e.stateNode,Vo(),ut(xn),ut(ln),$p(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Xl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pi!==null&&(xd(pi),pi=null))),fd(n,e),tn(e),null;case 5:qp(e);var r=ps(sl.current);if(t=e.type,n!==null&&e.stateNode!=null)Gx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return tn(e),null}if(n=ps(Li.current),Xl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ci]=e,i[il]=s,n=(e.mode&1)!==0,t){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Ca.length;r++)lt(Ca[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":og(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":lg(i,s),lt("invalid",i)}kh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wl(i.textContent,a,n),r=["children",""+a]):Ya.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(t){case"input":Ol(i),ag(i,s,!0);break;case"textarea":Ol(i),ug(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=rc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=v0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ci]=e,n[il]=i,Hx(n,e,!1,!1),e.stateNode=n;e:{switch(o=zh(t,i),t){case"dialog":lt("cancel",n),lt("close",n),r=i;break;case"iframe":case"object":case"embed":lt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ca.length;r++)lt(Ca[r],n);r=i;break;case"source":lt("error",n),r=i;break;case"img":case"image":case"link":lt("error",n),lt("load",n),r=i;break;case"details":lt("toggle",n),r=i;break;case"input":og(n,i),r=Nh(n,i),lt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),lt("invalid",n);break;case"textarea":lg(n,i),r=Oh(n,i),lt("invalid",n);break;default:r=i}kh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?S0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&x0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&qa(n,l):typeof l=="number"&&qa(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",n):l!=null&&wp(n,s,l,o))}switch(t){case"input":Ol(n),ag(n,i,!1);break;case"textarea":Ol(n),ug(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Br(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?To(n,!!i.multiple,s,!1):i.defaultValue!=null&&To(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=rc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(n&&e.stateNode!=null)Wx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(t=ps(sl.current),ps(Li.current),Xl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ci]=e,(s=i.nodeValue!==t)&&(n=Bn,n!==null))switch(n.tag){case 3:Wl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Wl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ci]=e,e.stateNode=i}return tn(e),null;case 13:if(ut(gt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ht&&On!==null&&e.mode&1&&!(e.flags&128))lx(),zo(),e.flags|=98560,s=!1;else if(s=Xl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[Ci]=e}else zo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else pi!==null&&(xd(pi),pi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||gt.current&1?kt===0&&(kt=3):am())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return Vo(),fd(n,e),n===null&&tl(e.stateNode.containerInfo),tn(e),null;case 10:return Wp(e.type._context),tn(e),null;case 17:return yn(e.type)&&sc(),tn(e),null;case 19:if(ut(gt),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)pa(s,!1);else{if(kt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=hc(n),o!==null){for(e.flags|=128,pa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return at(gt,gt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Rt()>Go&&(e.flags|=128,i=!0,pa(s,!1),e.lanes=4194304)}else{if(!i)if(n=hc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return tn(e),null}else 2*Rt()-s.renderingStartTime>Go&&t!==1073741824&&(e.flags|=128,i=!0,pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,t=gt.current,at(gt,i?t&1|2:t&1),e):(tn(e),null);case 22:case 23:return om(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function u1(n,e){switch(Bp(e),e.tag){case 1:return yn(e.type)&&sc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Vo(),ut(xn),ut(ln),$p(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return qp(e),null;case 13:if(ut(gt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(le(340));zo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ut(gt),null;case 4:return Vo(),null;case 10:return Wp(e.type._context),null;case 22:case 23:return om(),null;case 24:return null;default:return null}}var ql=!1,sn=!1,c1=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function _o(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Tt(n,e,i)}else t.current=null}function hd(n,e,t){try{t()}catch(i){Tt(n,e,i)}}var Qg=!1;function f1(n,e){if($h=tc,n=$0(),kp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Kh={focusedElem:n,selectionRange:t},tc=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var m=_.memoizedProps,g=_.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?m:hi(e.type,m),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(y){Tt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return _=Qg,Qg=!1,_}function Fa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&hd(e,t,s)}r=r.next}while(r!==i)}}function Xc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function dd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Xx(n){var e=n.alternate;e!==null&&(n.alternate=null,Xx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ci],delete e[il],delete e[Jh],delete e[YE],delete e[qE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function jx(n){return n.tag===5||n.tag===3||n.tag===4}function Jg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||jx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function pd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=rc));else if(i!==4&&(n=n.child,n!==null))for(pd(n,e,t),n=n.sibling;n!==null;)pd(n,e,t),n=n.sibling}function md(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(md(n,e,t),n=n.sibling;n!==null;)md(n,e,t),n=n.sibling}var $t=null,di=!1;function fr(n,e,t){for(t=t.child;t!==null;)Yx(n,e,t),t=t.sibling}function Yx(n,e,t){if(bi&&typeof bi.onCommitFiberUnmount=="function")try{bi.onCommitFiberUnmount(Fc,t)}catch{}switch(t.tag){case 5:sn||_o(t,e);case 6:var i=$t,r=di;$t=null,fr(n,e,t),$t=i,di=r,$t!==null&&(di?(n=$t,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):$t.removeChild(t.stateNode));break;case 18:$t!==null&&(di?(n=$t,t=t.stateNode,n.nodeType===8?Cf(n.parentNode,t):n.nodeType===1&&Cf(n,t),Qa(n)):Cf($t,t.stateNode));break;case 4:i=$t,r=di,$t=t.stateNode.containerInfo,di=!0,fr(n,e,t),$t=i,di=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hd(t,e,o),r=r.next}while(r!==i)}fr(n,e,t);break;case 1:if(!sn&&(_o(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Tt(t,e,a)}fr(n,e,t);break;case 21:fr(n,e,t);break;case 22:t.mode&1?(sn=(i=sn)||t.memoizedState!==null,fr(n,e,t),sn=i):fr(n,e,t);break;default:fr(n,e,t)}}function e_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new c1),e.forEach(function(i){var r=y1.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function li(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$t=a.stateNode,di=!1;break e;case 3:$t=a.stateNode.containerInfo,di=!0;break e;case 4:$t=a.stateNode.containerInfo,di=!0;break e}a=a.return}if($t===null)throw Error(le(160));Yx(s,o,r),$t=null,di=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qx(e,n),e=e.sibling}function qx(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(li(e,n),Mi(n),i&4){try{Fa(3,n,n.return),Xc(3,n)}catch(m){Tt(n,n.return,m)}try{Fa(5,n,n.return)}catch(m){Tt(n,n.return,m)}}break;case 1:li(e,n),Mi(n),i&512&&t!==null&&_o(t,t.return);break;case 5:if(li(e,n),Mi(n),i&512&&t!==null&&_o(t,t.return),n.flags&32){var r=n.stateNode;try{qa(r,"")}catch(m){Tt(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&g0(r,s),zh(a,o);var u=zh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?S0(r,f):c==="dangerouslySetInnerHTML"?x0(r,f):c==="children"?qa(r,f):wp(r,c,f,u)}switch(a){case"input":Ih(r,s);break;case"textarea":_0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?To(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?To(r,!!s.multiple,s.defaultValue,!0):To(r,!!s.multiple,s.multiple?[]:"",!1))}r[il]=s}catch(m){Tt(n,n.return,m)}}break;case 6:if(li(e,n),Mi(n),i&4){if(n.stateNode===null)throw Error(le(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){Tt(n,n.return,m)}}break;case 3:if(li(e,n),Mi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Qa(e.containerInfo)}catch(m){Tt(n,n.return,m)}break;case 4:li(e,n),Mi(n);break;case 13:li(e,n),Mi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rm=Rt())),i&4&&e_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(sn=(u=sn)||c,li(e,n),sn=u):li(e,n),Mi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ee=n,c=n.child;c!==null;){for(f=Ee=c;Ee!==null;){switch(h=Ee,p=h.child,h.tag){case 0:case 11:case 14:case 15:Fa(4,h,h.return);break;case 1:_o(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(m){Tt(i,t,m)}}break;case 5:_o(h,h.return);break;case 22:if(h.memoizedState!==null){n_(f);continue}}p!==null?(p.return=h,Ee=p):n_(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=y0("display",o))}catch(m){Tt(n,n.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){Tt(n,n.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:li(e,n),Mi(n),i&4&&e_(n);break;case 21:break;default:li(e,n),Mi(n)}}function Mi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(jx(t)){var i=t;break e}t=t.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qa(r,""),i.flags&=-33);var s=Jg(n);md(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Jg(n);pd(n,a,o);break;default:throw Error(le(161))}}catch(l){Tt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function h1(n,e,t){Ee=n,$x(n)}function $x(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ql;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||sn;a=ql;var u=sn;if(ql=o,(sn=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?i_(r):l!==null?(l.return=o,Ee=l):i_(r);for(;s!==null;)Ee=s,$x(s),s=s.sibling;Ee=r,ql=a,sn=u}t_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):t_(n)}}function t_(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||Xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:hi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}zg(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Qa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}sn||e.flags&512&&dd(e)}catch(h){Tt(e,e.return,h)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function n_(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function i_(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Xc(4,e)}catch(l){Tt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{dd(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{dd(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===n){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var d1=Math.ceil,mc=lr.ReactCurrentDispatcher,nm=lr.ReactCurrentOwner,ri=lr.ReactCurrentBatchConfig,Ze=0,Xt=null,Nt=null,Kt=0,Nn=0,vo=Yr(0),kt=0,ul=null,Cs=0,jc=0,im=0,ka=null,gn=null,rm=0,Go=1/0,Gi=null,gc=!1,gd=null,Ir=null,$l=!1,wr=null,_c=0,za=0,_d=null,ku=-1,zu=0;function hn(){return Ze&6?Rt():ku!==-1?ku:ku=Rt()}function Ur(n){return n.mode&1?Ze&2&&Kt!==0?Kt&-Kt:KE.transition!==null?(zu===0&&(zu=N0()),zu):(n=nt,n!==0||(n=window.event,n=n===void 0?16:B0(n.type)),n):1}function xi(n,e,t,i){if(50<za)throw za=0,_d=null,Error(le(185));Tl(n,t,i),(!(Ze&2)||n!==Xt)&&(n===Xt&&(!(Ze&2)&&(jc|=t),kt===4&&Mr(n,Kt)),Sn(n,i),t===1&&Ze===0&&!(e.mode&1)&&(Go=Rt()+500,Hc&&qr()))}function Sn(n,e){var t=n.callbackNode;KM(n,e);var i=ec(n,n===Xt?Kt:0);if(i===0)t!==null&&hg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&hg(t),e===1)n.tag===0?$E(r_.bind(null,n)):sx(r_.bind(null,n)),XE(function(){!(Ze&6)&&qr()}),t=null;else{switch(I0(i)){case 1:t=bp;break;case 4:t=L0;break;case 16:t=Ju;break;case 536870912:t=D0;break;default:t=Ju}t=iy(t,Kx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Kx(n,e){if(ku=-1,zu=0,Ze&6)throw Error(le(327));var t=n.callbackNode;if(Po()&&n.callbackNode!==t)return null;var i=ec(n,n===Xt?Kt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=vc(n,i);else{e=i;var r=Ze;Ze|=2;var s=Qx();(Xt!==n||Kt!==e)&&(Gi=null,Go=Rt()+500,vs(n,e));do try{g1();break}catch(a){Zx(n,a)}while(!0);Gp(),mc.current=s,Ze=r,Nt!==null?e=0:(Xt=null,Kt=0,e=kt)}if(e!==0){if(e===2&&(r=Wh(n),r!==0&&(i=r,e=vd(n,r))),e===1)throw t=ul,vs(n,0),Mr(n,i),Sn(n,Rt()),t;if(e===6)Mr(n,i);else{if(r=n.current.alternate,!(i&30)&&!p1(r)&&(e=vc(n,i),e===2&&(s=Wh(n),s!==0&&(i=s,e=vd(n,s))),e===1))throw t=ul,vs(n,0),Mr(n,i),Sn(n,Rt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:as(n,gn,Gi);break;case 3:if(Mr(n,i),(i&130023424)===i&&(e=rm+500-Rt(),10<e)){if(ec(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){hn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Qh(as.bind(null,n,gn,Gi),e);break}as(n,gn,Gi);break;case 4:if(Mr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-vi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*d1(i/1960))-i,10<i){n.timeoutHandle=Qh(as.bind(null,n,gn,Gi),i);break}as(n,gn,Gi);break;case 5:as(n,gn,Gi);break;default:throw Error(le(329))}}}return Sn(n,Rt()),n.callbackNode===t?Kx.bind(null,n):null}function vd(n,e){var t=ka;return n.current.memoizedState.isDehydrated&&(vs(n,e).flags|=256),n=vc(n,e),n!==2&&(e=gn,gn=t,e!==null&&xd(e)),n}function xd(n){gn===null?gn=n:gn.push.apply(gn,n)}function p1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Si(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mr(n,e){for(e&=~im,e&=~jc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-vi(e),i=1<<t;n[t]=-1,e&=~i}}function r_(n){if(Ze&6)throw Error(le(327));Po();var e=ec(n,0);if(!(e&1))return Sn(n,Rt()),null;var t=vc(n,e);if(n.tag!==0&&t===2){var i=Wh(n);i!==0&&(e=i,t=vd(n,i))}if(t===1)throw t=ul,vs(n,0),Mr(n,e),Sn(n,Rt()),t;if(t===6)throw Error(le(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,as(n,gn,Gi),Sn(n,Rt()),null}function sm(n,e){var t=Ze;Ze|=1;try{return n(e)}finally{Ze=t,Ze===0&&(Go=Rt()+500,Hc&&qr())}}function Rs(n){wr!==null&&wr.tag===0&&!(Ze&6)&&Po();var e=Ze;Ze|=1;var t=ri.transition,i=nt;try{if(ri.transition=null,nt=1,n)return n()}finally{nt=i,ri.transition=t,Ze=e,!(Ze&6)&&qr()}}function om(){Nn=vo.current,ut(vo)}function vs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,WE(t)),Nt!==null)for(t=Nt.return;t!==null;){var i=t;switch(Bp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&sc();break;case 3:Vo(),ut(xn),ut(ln),$p();break;case 5:qp(i);break;case 4:Vo();break;case 13:ut(gt);break;case 19:ut(gt);break;case 10:Wp(i.type._context);break;case 22:case 23:om()}t=t.return}if(Xt=n,Nt=n=Or(n.current,null),Kt=Nn=e,kt=0,ul=null,im=jc=Cs=0,gn=ka=null,ds!==null){for(e=0;e<ds.length;e++)if(t=ds[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ds=null}return n}function Zx(n,e){do{var t=Nt;try{if(Gp(),Uu.current=pc,dc){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dc=!1}if(As=0,Gt=Ot=yt=null,Oa=!1,ol=0,nm.current=null,t===null||t.return===null){kt=1,ul=e,Nt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Xg(o);if(p!==null){p.flags&=-257,jg(p,o,a,s,e),p.mode&1&&Wg(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var m=new Set;m.add(l),e.updateQueue=m}else _.add(l);break e}else{if(!(e&1)){Wg(s,u,e),am();break e}l=Error(le(426))}}else if(ht&&a.mode&1){var g=Xg(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),jg(g,o,a,s,e),Vp(Ho(l,a));break e}}s=l=Ho(l,a),kt!==4&&(kt=2),ka===null?ka=[s]:ka.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Ix(s,l,e);kg(s,d);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ir===null||!Ir.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Ux(s,a,e);kg(s,y);break e}}s=s.return}while(s!==null)}ey(t)}catch(C){e=C,Nt===t&&t!==null&&(Nt=t=t.return);continue}break}while(!0)}function Qx(){var n=mc.current;return mc.current=pc,n===null?pc:n}function am(){(kt===0||kt===3||kt===2)&&(kt=4),Xt===null||!(Cs&268435455)&&!(jc&268435455)||Mr(Xt,Kt)}function vc(n,e){var t=Ze;Ze|=2;var i=Qx();(Xt!==n||Kt!==e)&&(Gi=null,vs(n,e));do try{m1();break}catch(r){Zx(n,r)}while(!0);if(Gp(),Ze=t,mc.current=i,Nt!==null)throw Error(le(261));return Xt=null,Kt=0,kt}function m1(){for(;Nt!==null;)Jx(Nt)}function g1(){for(;Nt!==null&&!VM();)Jx(Nt)}function Jx(n){var e=ny(n.alternate,n,Nn);n.memoizedProps=n.pendingProps,e===null?ey(n):Nt=e,nm.current=null}function ey(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=u1(t,e),t!==null){t.flags&=32767,Nt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{kt=6,Nt=null;return}}else if(t=l1(t,e,Nn),t!==null){Nt=t;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=n}while(e!==null);kt===0&&(kt=5)}function as(n,e,t){var i=nt,r=ri.transition;try{ri.transition=null,nt=1,_1(n,e,t,i)}finally{ri.transition=r,nt=i}return null}function _1(n,e,t,i){do Po();while(wr!==null);if(Ze&6)throw Error(le(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(le(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(ZM(n,s),n===Xt&&(Nt=Xt=null,Kt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||$l||($l=!0,iy(Ju,function(){return Po(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ri.transition,ri.transition=null;var o=nt;nt=1;var a=Ze;Ze|=4,nm.current=null,f1(n,t),qx(t,n),FE(Kh),tc=!!$h,Kh=$h=null,n.current=t,h1(t),HM(),Ze=a,nt=o,ri.transition=s}else n.current=t;if($l&&($l=!1,wr=n,_c=r),s=n.pendingLanes,s===0&&(Ir=null),XM(t.stateNode),Sn(n,Rt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(gc)throw gc=!1,n=gd,gd=null,n;return _c&1&&n.tag!==0&&Po(),s=n.pendingLanes,s&1?n===_d?za++:(za=0,_d=n):za=0,qr(),null}function Po(){if(wr!==null){var n=I0(_c),e=ri.transition,t=nt;try{if(ri.transition=null,nt=16>n?16:n,wr===null)var i=!1;else{if(n=wr,wr=null,_c=0,Ze&6)throw Error(le(331));var r=Ze;for(Ze|=4,Ee=n.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:Fa(8,c,s)}var f=c.child;if(f!==null)f.return=c,Ee=f;else for(;Ee!==null;){c=Ee;var h=c.sibling,p=c.return;if(Xx(c),c===u){Ee=null;break}if(h!==null){h.return=p,Ee=h;break}Ee=p}}}var _=s.alternate;if(_!==null){var m=_.child;if(m!==null){_.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ee=d;break e}Ee=s.return}}var x=n.current;for(Ee=x;Ee!==null;){o=Ee;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ee=v;else e:for(o=x;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xc(9,a)}}catch(C){Tt(a,a.return,C)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(Ze=r,qr(),bi&&typeof bi.onPostCommitFiberRoot=="function")try{bi.onPostCommitFiberRoot(Fc,n)}catch{}i=!0}return i}finally{nt=t,ri.transition=e}}return!1}function s_(n,e,t){e=Ho(t,e),e=Ix(n,e,1),n=Nr(n,e,1),e=hn(),n!==null&&(Tl(n,1,e),Sn(n,e))}function Tt(n,e,t){if(n.tag===3)s_(n,n,t);else for(;e!==null;){if(e.tag===3){s_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ir===null||!Ir.has(i))){n=Ho(t,n),n=Ux(e,n,1),e=Nr(e,n,1),n=hn(),e!==null&&(Tl(e,1,n),Sn(e,n));break}}e=e.return}}function v1(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=hn(),n.pingedLanes|=n.suspendedLanes&t,Xt===n&&(Kt&t)===t&&(kt===4||kt===3&&(Kt&130023424)===Kt&&500>Rt()-rm?vs(n,0):im|=t),Sn(n,e)}function ty(n,e){e===0&&(n.mode&1?(e=zl,zl<<=1,!(zl&130023424)&&(zl=4194304)):e=1);var t=hn();n=ir(n,e),n!==null&&(Tl(n,e,t),Sn(n,t))}function x1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ty(n,t)}function y1(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),ty(n,t)}var ny;ny=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||xn.current)vn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return vn=!1,a1(n,e,t);vn=!!(n.flags&131072)}else vn=!1,ht&&e.flags&1048576&&ox(e,lc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fu(n,e),n=e.pendingProps;var r=ko(e,ln.current);Ro(e,t),r=Zp(null,e,i,n,r,t);var s=Qp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,oc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jp(e),r.updater=Wc,e.stateNode=r,r._reactInternals=e,sd(e,i,n,t),e=ld(null,e,i,!0,s,t)):(e.tag=0,ht&&s&&zp(e),cn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Fu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=M1(i),n=hi(i,n),r){case 0:e=ad(null,e,i,n,t);break e;case 1:e=$g(null,e,i,n,t);break e;case 11:e=Yg(null,e,i,n,t);break e;case 14:e=qg(null,e,i,hi(i.type,n),t);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),ad(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),$g(n,e,i,r,t);case 3:e:{if(zx(e),n===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,hx(n,e),fc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ho(Error(le(423)),e),e=Kg(n,e,i,t,r);break e}else if(i!==r){r=Ho(Error(le(424)),e),e=Kg(n,e,i,t,r);break e}else for(On=Dr(e.stateNode.containerInfo.firstChild),Bn=e,ht=!0,pi=null,t=cx(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(zo(),i===r){e=rr(n,e,t);break e}cn(n,e,i,t)}e=e.child}return e;case 5:return dx(e),n===null&&nd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Zh(i,r)?o=null:s!==null&&Zh(i,s)&&(e.flags|=32),kx(n,e),cn(n,e,o,t),e.child;case 6:return n===null&&nd(e),null;case 13:return Bx(n,e,t);case 4:return Yp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Bo(e,null,i,t):cn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),Yg(n,e,i,r,t);case 7:return cn(n,e,e.pendingProps,t),e.child;case 8:return cn(n,e,e.pendingProps.children,t),e.child;case 12:return cn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,at(uc,i._currentValue),i._currentValue=o,s!==null)if(Si(s.value,o)){if(s.children===r.children&&!xn.current){e=rr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Qi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),id(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(le(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),id(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}cn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ro(e,t),r=si(r),i=i(r),e.flags|=1,cn(n,e,i,t),e.child;case 14:return i=e.type,r=hi(i,e.pendingProps),r=hi(i.type,r),qg(n,e,i,r,t);case 15:return Ox(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),Fu(n,e),e.tag=1,yn(i)?(n=!0,oc(e)):n=!1,Ro(e,t),Nx(e,i,r),sd(e,i,r,t),ld(null,e,i,!0,n,t);case 19:return Vx(n,e,t);case 22:return Fx(n,e,t)}throw Error(le(156,e.tag))};function iy(n,e){return b0(n,e)}function S1(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,e,t,i){return new S1(n,e,t,i)}function lm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function M1(n){if(typeof n=="function")return lm(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Cp)return 11;if(n===Rp)return 14}return 2}function Or(n,e){var t=n.alternate;return t===null?(t=ei(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Bu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")lm(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ao:return xs(t.children,r,s,e);case Ap:o=8,r|=8;break;case Ph:return n=ei(12,t,e,r|2),n.elementType=Ph,n.lanes=s,n;case bh:return n=ei(13,t,e,r),n.elementType=bh,n.lanes=s,n;case Lh:return n=ei(19,t,e,r),n.elementType=Lh,n.lanes=s,n;case d0:return Yc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case f0:o=10;break e;case h0:o=9;break e;case Cp:o=11;break e;case Rp:o=14;break e;case vr:o=16,i=null;break e}throw Error(le(130,n==null?n:typeof n,""))}return e=ei(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function xs(n,e,t,i){return n=ei(7,n,i,e),n.lanes=t,n}function Yc(n,e,t,i){return n=ei(22,n,i,e),n.elementType=d0,n.lanes=t,n.stateNode={isHidden:!1},n}function Uf(n,e,t){return n=ei(6,n,null,e),n.lanes=t,n}function Of(n,e,t){return e=ei(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function E1(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gf(0),this.expirationTimes=gf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function um(n,e,t,i,r,s,o,a,l){return n=new E1(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ei(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},jp(s),n}function T1(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oo,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ry(n){if(!n)return Vr;n=n._reactInternals;e:{if(Ns(n)!==n||n.tag!==1)throw Error(le(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(n.tag===1){var t=n.type;if(yn(t))return rx(n,t,e)}return e}function sy(n,e,t,i,r,s,o,a,l){return n=um(t,i,!0,n,r,s,o,a,l),n.context=ry(null),t=n.current,i=hn(),r=Ur(t),s=Qi(i,r),s.callback=e??null,Nr(t,s,r),n.current.lanes=r,Tl(n,r,i),Sn(n,i),n}function qc(n,e,t,i){var r=e.current,s=hn(),o=Ur(r);return t=ry(t),e.context===null?e.context=t:e.pendingContext=t,e=Qi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Nr(r,e,o),n!==null&&(xi(n,r,o,s),Iu(n,r,o)),o}function xc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function o_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function cm(n,e){o_(n,e),(n=n.alternate)&&o_(n,e)}function w1(){return null}var oy=typeof reportError=="function"?reportError:function(n){console.error(n)};function fm(n){this._internalRoot=n}$c.prototype.render=fm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(le(409));qc(n,e,null,null)};$c.prototype.unmount=fm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Rs(function(){qc(null,n,null,null)}),e[nr]=null}};function $c(n){this._internalRoot=n}$c.prototype.unstable_scheduleHydration=function(n){if(n){var e=F0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Sr.length&&e!==0&&e<Sr[t].priority;t++);Sr.splice(t,0,n),t===0&&z0(n)}};function hm(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Kc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function a_(){}function A1(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=xc(o);s.call(u)}}var o=sy(e,i,n,0,null,!1,!1,"",a_);return n._reactRootContainer=o,n[nr]=o.current,tl(n.nodeType===8?n.parentNode:n),Rs(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=xc(l);a.call(u)}}var l=um(n,0,!1,null,null,!1,!1,"",a_);return n._reactRootContainer=l,n[nr]=l.current,tl(n.nodeType===8?n.parentNode:n),Rs(function(){qc(e,l,t,i)}),l}function Zc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=xc(o);a.call(l)}}qc(e,o,n,r)}else o=A1(t,e,n,r,i);return xc(o)}U0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Aa(e.pendingLanes);t!==0&&(Lp(e,t|1),Sn(e,Rt()),!(Ze&6)&&(Go=Rt()+500,qr()))}break;case 13:Rs(function(){var i=ir(n,1);if(i!==null){var r=hn();xi(i,n,1,r)}}),cm(n,1)}};Dp=function(n){if(n.tag===13){var e=ir(n,134217728);if(e!==null){var t=hn();xi(e,n,134217728,t)}cm(n,134217728)}};O0=function(n){if(n.tag===13){var e=Ur(n),t=ir(n,e);if(t!==null){var i=hn();xi(t,n,e,i)}cm(n,e)}};F0=function(){return nt};k0=function(n,e){var t=nt;try{return nt=n,e()}finally{nt=t}};Vh=function(n,e,t){switch(e){case"input":if(Ih(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Vc(i);if(!r)throw Error(le(90));m0(i),Ih(i,r)}}}break;case"textarea":_0(n,t);break;case"select":e=t.value,e!=null&&To(n,!!t.multiple,e,!1)}};T0=sm;w0=Rs;var C1={usingClientEntryPoint:!1,Events:[Al,fo,Vc,M0,E0,sm]},ma={findFiberByHostInstance:hs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R1={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=R0(n),n===null?null:n.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||w1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Fc=Kl.inject(R1),bi=Kl}catch{}}Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C1;Xn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hm(e))throw Error(le(200));return T1(n,e,null,t)};Xn.createRoot=function(n,e){if(!hm(n))throw Error(le(299));var t=!1,i="",r=oy;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=um(n,1,!1,null,null,t,!1,i,r),n[nr]=e.current,tl(n.nodeType===8?n.parentNode:n),new fm(e)};Xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(le(188)):(n=Object.keys(n).join(","),Error(le(268,n)));return n=R0(e),n=n===null?null:n.stateNode,n};Xn.flushSync=function(n){return Rs(n)};Xn.hydrate=function(n,e,t){if(!Kc(e))throw Error(le(200));return Zc(null,n,e,!0,t)};Xn.hydrateRoot=function(n,e,t){if(!hm(n))throw Error(le(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=oy;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=sy(e,null,n,1,t??null,r,!1,s,o),n[nr]=e.current,tl(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new $c(e)};Xn.render=function(n,e,t){if(!Kc(e))throw Error(le(200));return Zc(null,n,e,!1,t)};Xn.unmountComponentAtNode=function(n){if(!Kc(n))throw Error(le(40));return n._reactRootContainer?(Rs(function(){Zc(null,null,n,!1,function(){n._reactRootContainer=null,n[nr]=null})}),!0):!1};Xn.unstable_batchedUpdates=sm;Xn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Kc(t))throw Error(le(200));if(n==null||n._reactInternals===void 0)throw Error(le(38));return Zc(n,e,t,!1,i)};Xn.version="18.3.1-next-f1338f8080-20240426";function ay(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ay)}catch(n){console.error(n)}}ay(),a0.exports=Xn;var P1=a0.exports,ly,l_=P1;ly=l_.createRoot,l_.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dm="166",zs={ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},b1=0,u_=1,L1=2,uy=1,cy=2,Hi=3,Hr=0,Mn=1,Yi=2,Ji=0,bo=1,yd=2,c_=3,f_=4,D1=5,cs=100,N1=101,I1=102,U1=103,O1=104,F1=200,k1=201,z1=202,B1=203,Sd=204,Md=205,V1=206,H1=207,G1=208,W1=209,X1=210,j1=211,Y1=212,q1=213,$1=214,K1=0,Z1=1,Q1=2,yc=3,J1=4,eT=5,tT=6,nT=7,fy=0,iT=1,rT=2,Fr=0,hy=1,dy=2,py=3,pm=4,sT=5,my=6,gy=7,_y=300,Wo=301,Xo=302,Ed=303,Td=304,Qc=306,wd=1e3,ms=1001,Ad=1002,ti=1003,oT=1004,Zl=1005,mi=1006,Ff=1007,gs=1008,sr=1009,vy=1010,xy=1011,cl=1012,mm=1013,Ps=1014,Ki=1015,er=1016,gm=1017,_m=1018,jo=1020,yy=35902,Sy=1021,My=1022,_i=1023,Ey=1024,Ty=1025,Lo=1026,Yo=1027,wy=1028,vm=1029,Ay=1030,xm=1031,ym=1033,Vu=33776,Hu=33777,Gu=33778,Wu=33779,Cd=35840,Rd=35841,Pd=35842,bd=35843,Ld=36196,Dd=37492,Nd=37496,Id=37808,Ud=37809,Od=37810,Fd=37811,kd=37812,zd=37813,Bd=37814,Vd=37815,Hd=37816,Gd=37817,Wd=37818,Xd=37819,jd=37820,Yd=37821,Xu=36492,qd=36494,$d=36495,Cy=36283,Kd=36284,Zd=36285,Qd=36286,aT=3200,lT=3201,Ry=0,uT=1,Er="",Ti="srgb",$r="srgb-linear",Sm="display-p3",Jc="display-p3-linear",Sc="linear",ot="srgb",Mc="rec709",Ec="p3",Vs=7680,h_=519,cT=512,fT=513,hT=514,Py=515,dT=516,pT=517,mT=518,gT=519,d_=35044,p_="300 es",Zi=2e3,Tc=2001;class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ba=Math.PI/180,Jd=180/Math.PI;function ra(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Wt(n,e,t){return Math.max(e,Math.min(t,n))}function _T(n,e){return(n%e+e)%e}function kf(n,e,t){return(1-t)*n+t*e}function ga(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const vT={DEG2RAD:Ba};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,o,a,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],m=r[0],g=r[3],d=r[6],x=r[1],v=r[4],y=r[7],C=r[2],A=r[5],T=r[8];return s[0]=o*m+a*x+l*C,s[3]=o*g+a*v+l*A,s[6]=o*d+a*y+l*T,s[1]=u*m+c*x+f*C,s[4]=u*g+c*v+f*A,s[7]=u*d+c*y+f*T,s[2]=h*m+p*x+_*C,s[5]=h*g+p*v+_*A,s[8]=h*d+p*y+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=f*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zf.makeScale(e,t)),this}rotate(e){return this.premultiply(zf.makeRotation(-e)),this}translate(e,t){return this.premultiply(zf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zf=new Xe;function by(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xT(){const n=wc("canvas");return n.style.display="block",n}const m_={};function Ly(n){n in m_||(m_[n]=!0,console.warn(n))}function yT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const g_=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),__=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ql={[$r]:{transfer:Sc,primaries:Mc,toReference:n=>n,fromReference:n=>n},[Ti]:{transfer:ot,primaries:Mc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Jc]:{transfer:Sc,primaries:Ec,toReference:n=>n.applyMatrix3(__),fromReference:n=>n.applyMatrix3(g_)},[Sm]:{transfer:ot,primaries:Ec,toReference:n=>n.convertSRGBToLinear().applyMatrix3(__),fromReference:n=>n.applyMatrix3(g_).convertLinearToSRGB()}},ST=new Set([$r,Jc]),tt={enabled:!0,_workingColorSpace:$r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ST.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ql[e].toReference,r=Ql[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ql[n].primaries},getTransfer:function(n){return n===Er?Sc:Ql[n].transfer}};function Do(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hs;class MT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=wc("canvas")),Hs.width=e.width,Hs.height=e.height;const i=Hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Do(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Do(t[i]/255)*255):t[i]=Do(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ET=0;class Dy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=ra(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vf(r[o].image)):s.push(Vf(r[o]))}else s=Vf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Vf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?MT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TT=0;class En extends Is{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,i=ms,r=ms,s=mi,o=gs,a=_i,l=sr,u=En.DEFAULT_ANISOTROPY,c=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=ra(),this.name="",this.source=new Dy(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_y)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=_y;En.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],m=l[2],g=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+m)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(p+1)/2,C=(d+1)/2,A=(c+h)/4,T=(f+m)/4,P=(_+g)/4;return v>y&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=P/s),this.set(i,r,s,t),this}let x=Math.sqrt((g-_)*(g-_)+(f-m)*(f-m)+(h-c)*(h-c));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(f-m)/x,this.z=(h-c)/x,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wT extends Is{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new En(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dy(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends wT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ny extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AT extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=m;return}if(f!==m||l!==h||u!==p||c!==_){let g=1-a;const d=l*h+u*p+c*_+f*m,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,d*x);g=Math.sin(g*A)/C,a=Math.sin(a*A)/C}const y=a*x;if(l=l*g+h*y,u=u*g+p*y,c=c*g+_*y,f=f*g+m*y,g===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*p-u*h,e[t+1]=l*_+c*h+u*f-a*p,e[t+2]=u*_+c*p+a*h-l*f,e[t+3]=c*_-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(v_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(v_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hf.copy(this).projectOnVector(e),this.sub(Hf)}reflect(e){return this.sub(Hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hf=new N,v_=new bs;class Rl{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(s,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),eu.subVectors(this.max,_a),Gs.subVectors(e.a,_a),Ws.subVectors(e.b,_a),Xs.subVectors(e.c,_a),hr.subVectors(Ws,Gs),dr.subVectors(Xs,Ws),Qr.subVectors(Gs,Xs);let t=[0,-hr.z,hr.y,0,-dr.z,dr.y,0,-Qr.z,Qr.y,hr.z,0,-hr.x,dr.z,0,-dr.x,Qr.z,0,-Qr.x,-hr.y,hr.x,0,-dr.y,dr.x,0,-Qr.y,Qr.x,0];return!Gf(t,Gs,Ws,Xs,eu)||(t=[1,0,0,0,1,0,0,0,1],!Gf(t,Gs,Ws,Xs,eu))?!1:(tu.crossVectors(hr,dr),t=[tu.x,tu.y,tu.z],Gf(t,Gs,Ws,Xs,eu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new N,new N,new N,new N,new N,new N,new N,new N],ui=new N,Jl=new Rl,Gs=new N,Ws=new N,Xs=new N,hr=new N,dr=new N,Qr=new N,_a=new N,eu=new N,tu=new N,Jr=new N;function Gf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Jr.fromArray(n,s);const a=r.x*Math.abs(Jr.x)+r.y*Math.abs(Jr.y)+r.z*Math.abs(Jr.z),l=e.dot(Jr),u=t.dot(Jr),c=i.dot(Jr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const CT=new Rl,va=new N,Wf=new N;class ef{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):CT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);const t=va.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(va,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(Wf)),this.expandByPoint(va.copy(e.center).sub(Wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new N,Xf=new N,nu=new N,pr=new N,jf=new N,iu=new N,Yf=new N;class Mm{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xf.copy(e).add(t).multiplyScalar(.5),nu.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(Xf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(nu),a=pr.dot(this.direction),l=-pr.dot(nu),u=pr.lengthSq(),c=Math.abs(1-o*o);let f,h,p,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const m=1/c;f*=m,h*=m,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xf).addScaledVector(nu,h),p}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,i,r,s){jf.subVectors(t,e),iu.subVectors(i,e),Yf.crossVectors(jf,iu);let o=this.direction.dot(Yf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pr.subVectors(this.origin,e);const l=a*this.direction.dot(iu.crossVectors(pr,iu));if(l<0)return null;const u=a*this.direction.dot(jf.cross(pr));if(u<0||l+u>o)return null;const c=-a*pr.dot(Yf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=m,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/js.setFromMatrixColumn(e,0).length(),s=1/js.setFromMatrixColumn(e,1).length(),o=1/js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=h-m*u,t[9]=-a*l,t[2]=m-h*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,m=u*f;t[0]=h+m*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,m=u*f;t[0]=h-m*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=m-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=_*u-p,t[8]=h*u+m,t[1]=l*f,t[5]=m*u+h,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=m-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+_,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+m,t[5]=o*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RT,e,PT)}lookAt(e,t,i){const r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),mr.crossVectors(i,Ln),mr.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),mr.crossVectors(i,Ln)),mr.normalize(),ru.crossVectors(Ln,mr),r[0]=mr.x,r[4]=ru.x,r[8]=Ln.x,r[1]=mr.y,r[5]=ru.y,r[9]=Ln.y,r[2]=mr.z,r[6]=ru.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],m=i[6],g=i[10],d=i[14],x=i[3],v=i[7],y=i[11],C=i[15],A=r[0],T=r[4],P=r[8],E=r[12],S=r[1],D=r[5],B=r[9],O=r[13],W=r[2],q=r[6],z=r[10],j=r[14],I=r[3],K=r[7],Q=r[11],re=r[15];return s[0]=o*A+a*S+l*W+u*I,s[4]=o*T+a*D+l*q+u*K,s[8]=o*P+a*B+l*z+u*Q,s[12]=o*E+a*O+l*j+u*re,s[1]=c*A+f*S+h*W+p*I,s[5]=c*T+f*D+h*q+p*K,s[9]=c*P+f*B+h*z+p*Q,s[13]=c*E+f*O+h*j+p*re,s[2]=_*A+m*S+g*W+d*I,s[6]=_*T+m*D+g*q+d*K,s[10]=_*P+m*B+g*z+d*Q,s[14]=_*E+m*O+g*j+d*re,s[3]=x*A+v*S+y*W+C*I,s[7]=x*T+v*D+y*q+C*K,s[11]=x*P+v*B+y*z+C*Q,s[15]=x*E+v*O+y*j+C*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],m=e[7],g=e[11],d=e[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+m*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+g*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],m=e[13],g=e[14],d=e[15],x=f*g*u-m*h*u+m*l*p-a*g*p-f*l*d+a*h*d,v=_*h*u-c*g*u-_*l*p+o*g*p+c*l*d-o*h*d,y=c*m*u-_*f*u+_*a*p-o*m*p-c*a*d+o*f*d,C=_*f*l-c*m*l-_*a*h+o*m*h+c*a*g-o*f*g,A=t*x+i*v+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(m*h*s-f*g*s-m*r*p+i*g*p+f*r*d-i*h*d)*T,e[2]=(a*g*s-m*l*s+m*r*u-i*g*u-a*r*d+i*l*d)*T,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(c*g*s-_*h*s+_*r*p-t*g*p-c*r*d+t*h*d)*T,e[6]=(_*l*s-o*g*s-_*r*u+t*g*u+o*r*d-t*l*d)*T,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*T,e[8]=y*T,e[9]=(_*f*s-c*m*s-_*i*p+t*m*p+c*i*d-t*f*d)*T,e[10]=(o*m*s-_*a*s+_*i*u-t*m*u-o*i*d+t*a*d)*T,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*T,e[12]=C*T,e[13]=(c*m*r-_*f*r+_*i*h-t*m*h-c*i*g+t*f*g)*T,e[14]=(_*a*r-o*m*r-_*i*l+t*m*l+o*i*g-t*a*g)*T,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,_=s*f,m=o*c,g=o*f,d=a*f,x=l*u,v=l*c,y=l*f,C=i.x,A=i.y,T=i.z;return r[0]=(1-(m+d))*C,r[1]=(p+y)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+d))*A,r[6]=(g+x)*A,r[7]=0,r[8]=(_+v)*T,r[9]=(g-x)*T,r[10]=(1-(h+m))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=js.set(r[0],r[1],r[2]).length();const o=js.set(r[4],r[5],r[6]).length(),a=js.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ci.copy(this);const u=1/s,c=1/o,f=1/a;return ci.elements[0]*=u,ci.elements[1]*=u,ci.elements[2]*=u,ci.elements[4]*=c,ci.elements[5]*=c,ci.elements[6]*=c,ci.elements[8]*=f,ci.elements[9]*=f,ci.elements[10]*=f,t.setFromRotationMatrix(ci),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Zi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===Zi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Tc)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Zi){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let _,m;if(a===Zi)_=(o+s)*f,m=-2*f;else if(a===Tc)_=s*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const js=new N,ci=new ct,RT=new N(0,0,0),PT=new N(1,1,1),mr=new N,ru=new N,Ln=new N,x_=new ct,y_=new bs;class Ni{constructor(e=0,t=0,i=0,r=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return x_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(x_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return y_.setFromEuler(this),this.setFromQuaternion(y_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Iy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bT=0;const S_=new N,Ys=new bs,zi=new ct,su=new N,xa=new N,LT=new N,DT=new bs,M_=new N(1,0,0),E_=new N(0,1,0),T_=new N(0,0,1),w_={type:"added"},NT={type:"removed"},qs={type:"childadded",child:null},qf={type:"childremoved",child:null};class zt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new N,t=new Ni,i=new bs,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Xe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Iy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(M_,e)}rotateY(e){return this.rotateOnAxis(E_,e)}rotateZ(e){return this.rotateOnAxis(T_,e)}translateOnAxis(e,t){return S_.copy(e).applyQuaternion(this.quaternion),this.position.add(S_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(M_,e)}translateY(e){return this.translateOnAxis(E_,e)}translateZ(e){return this.translateOnAxis(T_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?su.copy(e):su.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(xa,su,this.up):zi.lookAt(su,xa,this.up),this.quaternion.setFromRotationMatrix(zi),r&&(zi.extractRotation(r.matrixWorld),Ys.setFromRotationMatrix(zi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(w_),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(NT),qf.child=e,this.dispatchEvent(qf),qf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(w_),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,LT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,DT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new N(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new N,Bi=new N,$f=new N,Vi=new N,$s=new N,Ks=new N,A_=new N,Kf=new N,Zf=new N,Qf=new N;class gi{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fi.subVectors(e,t),r.cross(fi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fi.subVectors(r,t),Bi.subVectors(i,t),$f.subVectors(e,t);const o=fi.dot(fi),a=fi.dot(Bi),l=fi.dot($f),u=Bi.dot(Bi),c=Bi.dot($f),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static isFrontFacing(e,t,i,r){return fi.subVectors(i,t),Bi.subVectors(e,t),fi.cross(Bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),fi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$s.subVectors(r,i),Ks.subVectors(s,i),Kf.subVectors(e,i);const l=$s.dot(Kf),u=Ks.dot(Kf);if(l<=0&&u<=0)return t.copy(i);Zf.subVectors(e,r);const c=$s.dot(Zf),f=Ks.dot(Zf);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector($s,o);Qf.subVectors(e,s);const p=$s.dot(Qf),_=Ks.dot(Qf);if(_>=0&&p<=_)return t.copy(s);const m=p*u-l*_;if(m<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Ks,a);const g=c*_-p*f;if(g<=0&&f-c>=0&&p-_>=0)return A_.subVectors(s,r),a=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(A_,a);const d=1/(g+m+h);return o=m*d,a=h*d,t.copy(i).addScaledVector($s,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},ou={h:0,s:0,l:0};function Jf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=_T(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Jf(o,s,e+1/3),this.g=Jf(o,s,e),this.b=Jf(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ti){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ti){const i=Uy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}copyLinearToSRGB(e){return this.r=Bf(e.r),this.g=Bf(e.g),this.b=Bf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return tt.fromWorkingColorSpace(rn.copy(this),e),Math.round(Wt(rn.r*255,0,255))*65536+Math.round(Wt(rn.g*255,0,255))*256+Math.round(Wt(rn.b*255,0,255))}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(rn.copy(this),t);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Ti){tt.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,i=rn.g,r=rn.b;return e!==Ti?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(ou);const i=kf(gr.h,ou.h,t),r=kf(gr.s,ou.s,t),s=kf(gr.l,ou.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ze;ze.NAMES=Uy;let IT=0;class Us extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=ra(),this.name="",this.type="Material",this.blending=bo,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=yc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(i.blending=this.blending),this.side!==Hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sd&&(i.blendSrc=this.blendSrc),this.blendDst!==Md&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class tf extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=fy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new N,au=new ie;class Di{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=d_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ly("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)au.fromBufferAttribute(this,t),au.applyMatrix3(e),this.setXY(t,au.x,au.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ga(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ga(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ga(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ga(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ga(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==d_&&(e.usage=this.usage),e}}class Oy extends Di{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fy extends Di{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends Di{constructor(e,t,i){super(new Float32Array(e),t,i)}}let UT=0;const $n=new ct,eh=new zt,Zs=new N,Dn=new Rl,ya=new Rl,Ht=new N;class Yn extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(by(e)?Fy:Oy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return eh.lookAt(e),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ef);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ya.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Dn.min,ya.min),Dn.expandByPoint(Ht),Ht.addVectors(Dn.max,ya.max),Dn.expandByPoint(Ht)):(Dn.expandByPoint(ya.min),Dn.expandByPoint(ya.max))}Dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ht.fromBufferAttribute(a,u),l&&(Zs.fromBufferAttribute(e,u),Ht.add(Zs)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;const u=new N,c=new N,f=new N,h=new ie,p=new ie,_=new ie,m=new N,g=new N;function d(P,E,S){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),c.sub(u),f.sub(u),p.sub(h),_.sub(h);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(m.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(D),a[P].add(m),a[E].add(m),a[S].add(m),l[P].add(g),l[E].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,E=x.length;P<E;++P){const S=x[P],D=S.start,B=S.count;for(let O=D,W=D+B;O<W;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new N,y=new N,C=new N,A=new N;function T(P){C.fromBufferAttribute(r,P),A.copy(C);const E=a[P];v.copy(E),v.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(A,E);const D=y.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,D)}for(let P=0,E=x.length;P<E;++P){const S=x[P],D=S.start,B=S.count;for(let O=D,W=D+B;O<W;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Di(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),m=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new Di(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C_=new ct,es=new Mm,lu=new ef,R_=new N,Qs=new N,Js=new N,eo=new N,th=new N,uu=new N,cu=new ie,fu=new ie,hu=new ie,P_=new N,b_=new N,L_=new N,du=new N,pu=new N;class Fn extends zt{constructor(e=new Yn,t=new tf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){uu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(th.fromBufferAttribute(f,e),o?uu.addScaledVector(th,c):uu.addScaledVector(th.sub(t),c))}t.add(uu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lu.copy(i.boundingSphere),lu.applyMatrix4(s),es.copy(e.ray).recast(e.near),!(lu.containsPoint(es.origin)===!1&&(es.intersectSphere(lu,R_)===null||es.origin.distanceToSquared(R_)>(e.far-e.near)**2))&&(C_.copy(s).invert(),es.copy(e.ray).applyMatrix4(C_),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,m=h.length;_<m;_++){const g=h[_],d=o[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,C=v;y<C;y+=3){const A=a.getX(y),T=a.getX(y+1),P=a.getX(y+2);r=mu(this,d,e,i,u,c,f,A,T,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let g=_,d=m;g<d;g+=3){const x=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);r=mu(this,o,e,i,u,c,f,x,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,m=h.length;_<m;_++){const g=h[_],d=o[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,C=v;y<C;y+=3){const A=y,T=y+1,P=y+2;r=mu(this,d,e,i,u,c,f,A,T,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let g=_,d=m;g<d;g+=3){const x=g,v=g+1,y=g+2;r=mu(this,o,e,i,u,c,f,x,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function OT(n,e,t,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Hr,a),l===null)return null;pu.copy(a),pu.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(pu);return u<t.near||u>t.far?null:{distance:u,point:pu.clone(),object:n}}function mu(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Qs),n.getVertexPosition(l,Js),n.getVertexPosition(u,eo);const c=OT(n,e,t,i,Qs,Js,eo,du);if(c){r&&(cu.fromBufferAttribute(r,a),fu.fromBufferAttribute(r,l),hu.fromBufferAttribute(r,u),c.uv=gi.getInterpolation(du,Qs,Js,eo,cu,fu,hu,new ie)),s&&(cu.fromBufferAttribute(s,a),fu.fromBufferAttribute(s,l),hu.fromBufferAttribute(s,u),c.uv1=gi.getInterpolation(du,Qs,Js,eo,cu,fu,hu,new ie)),o&&(P_.fromBufferAttribute(o,a),b_.fromBufferAttribute(o,l),L_.fromBufferAttribute(o,u),c.normal=gi.getInterpolation(du,Qs,Js,eo,P_,b_,L_,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new N,materialIndex:0};gi.getNormal(Qs,Js,eo,f.normal),c.face=f}return c}class Pl extends Yn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(f,2));function _(m,g,d,x,v,y,C,A,T,P,E){const S=y/T,D=C/P,B=y/2,O=C/2,W=A/2,q=T+1,z=P+1;let j=0,I=0;const K=new N;for(let Q=0;Q<z;Q++){const re=Q*D-O;for(let Se=0;Se<q;Se++){const Ge=Se*S-B;K[m]=Ge*x,K[g]=re*v,K[d]=W,u.push(K.x,K.y,K.z),K[m]=0,K[g]=0,K[d]=A>0?1:-1,c.push(K.x,K.y,K.z),f.push(Se/T),f.push(1-Q/P),j+=1}}for(let Q=0;Q<P;Q++)for(let re=0;re<T;re++){const Se=h+re+q*Q,Ge=h+re+q*(Q+1),Y=h+(re+1)+q*(Q+1),te=h+(re+1)+q*Q;l.push(Se,Ge,te),l.push(Ge,Y,te),I+=6}a.addGroup(p,I,E),p+=I,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=qo(n[t]);for(const r in i)e[r]=i[r]}return e}function FT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ky(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const fl={clone:qo,merge:un};var kT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kT,this.fragmentShader=zT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qo(e.uniforms),this.uniformsGroups=FT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zy extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new N,D_=new ie,N_=new ie;class Jn extends zy{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,D_,N_),t.subVectors(N_,D_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const to=-90,no=1;class BT extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jn(to,no,e,t);r.layers=this.layers,this.add(r);const s=new Jn(to,no,e,t);s.layers=this.layers,this.add(s);const o=new Jn(to,no,e,t);o.layers=this.layers,this.add(o);const a=new Jn(to,no,e,t);a.layers=this.layers,this.add(a);const l=new Jn(to,no,e,t);l.layers=this.layers,this.add(l);const u=new Jn(to,no,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class By extends En{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Wo,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VT extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new By(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pl(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Ji});s.uniforms.tEquirect.value=t;const o=new Fn(r,s),a=t.minFilter;return t.minFilter===gs&&(t.minFilter=mi),new BT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const nh=new N,HT=new N,GT=new Xe;class yr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=nh.subVectors(i,t).cross(HT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(nh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||GT.getNormalMatrix(e),r=this.coplanarPoint(nh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new ef,gu=new N;class Em{constructor(e=new yr,t=new yr,i=new yr,r=new yr,s=new yr,o=new yr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],_=r[9],m=r[10],g=r[11],d=r[12],x=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,g-p,y-d).normalize(),i[1].setComponents(l+s,h+u,g+p,y+d).normalize(),i[2].setComponents(l+o,h+c,g+_,y+x).normalize(),i[3].setComponents(l-o,h-c,g-_,y-x).normalize(),i[4].setComponents(l-a,h-f,g-m,y-v).normalize(),t===Zi)i[5].setComponents(l+a,h+f,g+m,y+v).normalize();else if(t===Tc)i[5].setComponents(a,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(gu.x=r.normal.x>0?e.max.x:e.min.x,gu.y=r.normal.y>0?e.max.y:e.min.y,gu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vy(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function WT(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(u,a),f.count===-1&&h.length===0&&n.bufferSubData(u,0,c),h.length!==0){for(let p=0,_=h.length;p<_;p++){const m=h[p];n.bufferSubData(u,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(u,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class bl extends Yn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],_=[],m=[],g=[];for(let d=0;d<c;d++){const x=d*h-o;for(let v=0;v<u;v++){const y=v*f-s;_.push(y,-x,0),m.push(0,0,1),g.push(v/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const v=x+u*d,y=x+u*(d+1),C=x+1+u*(d+1),A=x+1+u*d;p.push(v,y,A),p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(m,3)),this.setAttribute("uv",new Zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var XT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jT=`#ifdef USE_ALPHAHASH
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
#endif`,YT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$T=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZT=`#ifdef USE_AOMAP
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
#endif`,QT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
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
#endif`,ew=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rw=`#ifdef USE_IRIDESCENCE
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
#endif`,sw=`#ifdef USE_BUMPMAP
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
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pw=`#define PI 3.141592653589793
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
} // validated`,mw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gw=`vec3 transformedNormal = objectNormal;
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
#endif`,_w=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mw=`
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
}`,Ew=`#ifdef USE_ENVMAP
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
#endif`,Tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ww=`#ifdef USE_ENVMAP
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
#endif`,Aw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cw=`#ifdef USE_ENVMAP
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
#endif`,Rw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dw=`#ifdef USE_GRADIENTMAP
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
}`,Nw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ow=`uniform bool receiveShadow;
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
#endif`,Fw=`#ifdef USE_ENVMAP
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
#endif`,kw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hw=`PhysicalMaterial material;
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
#endif`,Gw=`struct PhysicalMaterial {
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
}`,Ww=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Xw=`#if defined( RE_IndirectDiffuse )
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
#endif`,jw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$w=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eA=`#if defined( USE_POINTS_UV )
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
#endif`,tA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oA=`#ifdef USE_MORPHTARGETS
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
#endif`,aA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dA=`#ifdef USE_NORMALMAP
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
#endif`,pA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_A=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,CA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LA=`#ifdef USE_SKINNING
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
#endif`,DA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NA=`#ifdef USE_SKINNING
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
#endif`,IA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kA=`#ifdef USE_TRANSMISSION
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
#endif`,zA=`#ifdef USE_TRANSMISSION
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
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XA=`uniform sampler2D t2D;
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
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`#include <common>
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
}`,ZA=`#if DEPTH_PACKING == 3200
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
}`,QA=`#define DISTANCE
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
}`,JA=`#define DISTANCE
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
}`,eC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nC=`uniform float scale;
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
}`,iC=`uniform vec3 diffuse;
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
}`,rC=`#include <common>
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
}`,sC=`uniform vec3 diffuse;
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
}`,oC=`#define LAMBERT
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
}`,aC=`#define LAMBERT
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
}`,lC=`#define MATCAP
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
}`,uC=`#define MATCAP
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
}`,cC=`#define NORMAL
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
}`,fC=`#define NORMAL
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
}`,hC=`#define PHONG
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
}`,dC=`#define PHONG
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
}`,pC=`#define STANDARD
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
}`,mC=`#define STANDARD
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
}`,gC=`#define TOON
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
}`,_C=`#define TOON
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
}`,vC=`uniform float size;
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
}`,xC=`uniform vec3 diffuse;
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
}`,yC=`#include <common>
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
}`,SC=`uniform vec3 color;
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
}`,MC=`uniform float rotation;
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
}`,EC=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:XT,alphahash_pars_fragment:jT,alphamap_fragment:YT,alphamap_pars_fragment:qT,alphatest_fragment:$T,alphatest_pars_fragment:KT,aomap_fragment:ZT,aomap_pars_fragment:QT,batching_pars_vertex:JT,batching_vertex:ew,begin_vertex:tw,beginnormal_vertex:nw,bsdfs:iw,iridescence_fragment:rw,bumpmap_pars_fragment:sw,clipping_planes_fragment:ow,clipping_planes_pars_fragment:aw,clipping_planes_pars_vertex:lw,clipping_planes_vertex:uw,color_fragment:cw,color_pars_fragment:fw,color_pars_vertex:hw,color_vertex:dw,common:pw,cube_uv_reflection_fragment:mw,defaultnormal_vertex:gw,displacementmap_pars_vertex:_w,displacementmap_vertex:vw,emissivemap_fragment:xw,emissivemap_pars_fragment:yw,colorspace_fragment:Sw,colorspace_pars_fragment:Mw,envmap_fragment:Ew,envmap_common_pars_fragment:Tw,envmap_pars_fragment:ww,envmap_pars_vertex:Aw,envmap_physical_pars_fragment:Fw,envmap_vertex:Cw,fog_vertex:Rw,fog_pars_vertex:Pw,fog_fragment:bw,fog_pars_fragment:Lw,gradientmap_pars_fragment:Dw,lightmap_pars_fragment:Nw,lights_lambert_fragment:Iw,lights_lambert_pars_fragment:Uw,lights_pars_begin:Ow,lights_toon_fragment:kw,lights_toon_pars_fragment:zw,lights_phong_fragment:Bw,lights_phong_pars_fragment:Vw,lights_physical_fragment:Hw,lights_physical_pars_fragment:Gw,lights_fragment_begin:Ww,lights_fragment_maps:Xw,lights_fragment_end:jw,logdepthbuf_fragment:Yw,logdepthbuf_pars_fragment:qw,logdepthbuf_pars_vertex:$w,logdepthbuf_vertex:Kw,map_fragment:Zw,map_pars_fragment:Qw,map_particle_fragment:Jw,map_particle_pars_fragment:eA,metalnessmap_fragment:tA,metalnessmap_pars_fragment:nA,morphinstance_vertex:iA,morphcolor_vertex:rA,morphnormal_vertex:sA,morphtarget_pars_vertex:oA,morphtarget_vertex:aA,normal_fragment_begin:lA,normal_fragment_maps:uA,normal_pars_fragment:cA,normal_pars_vertex:fA,normal_vertex:hA,normalmap_pars_fragment:dA,clearcoat_normal_fragment_begin:pA,clearcoat_normal_fragment_maps:mA,clearcoat_pars_fragment:gA,iridescence_pars_fragment:_A,opaque_fragment:vA,packing:xA,premultiplied_alpha_fragment:yA,project_vertex:SA,dithering_fragment:MA,dithering_pars_fragment:EA,roughnessmap_fragment:TA,roughnessmap_pars_fragment:wA,shadowmap_pars_fragment:AA,shadowmap_pars_vertex:CA,shadowmap_vertex:RA,shadowmask_pars_fragment:PA,skinbase_vertex:bA,skinning_pars_vertex:LA,skinning_vertex:DA,skinnormal_vertex:NA,specularmap_fragment:IA,specularmap_pars_fragment:UA,tonemapping_fragment:OA,tonemapping_pars_fragment:FA,transmission_fragment:kA,transmission_pars_fragment:zA,uv_pars_fragment:BA,uv_pars_vertex:VA,uv_vertex:HA,worldpos_vertex:GA,background_vert:WA,background_frag:XA,backgroundCube_vert:jA,backgroundCube_frag:YA,cube_vert:qA,cube_frag:$A,depth_vert:KA,depth_frag:ZA,distanceRGBA_vert:QA,distanceRGBA_frag:JA,equirect_vert:eC,equirect_frag:tC,linedashed_vert:nC,linedashed_frag:iC,meshbasic_vert:rC,meshbasic_frag:sC,meshlambert_vert:oC,meshlambert_frag:aC,meshmatcap_vert:lC,meshmatcap_frag:uC,meshnormal_vert:cC,meshnormal_frag:fC,meshphong_vert:hC,meshphong_frag:dC,meshphysical_vert:pC,meshphysical_frag:mC,meshtoon_vert:gC,meshtoon_frag:_C,points_vert:vC,points_frag:xC,shadow_vert:yC,shadow_frag:SC,sprite_vert:MC,sprite_frag:EC},ge={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Ai={basic:{uniforms:un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:un([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:un([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:un([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:un([ge.points,ge.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:un([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:un([ge.common,ge.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:un([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:un([ge.sprite,ge.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:un([ge.common,ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:un([ge.lights,ge.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Ai.physical={uniforms:un([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const _u={r:0,b:0,g:0},ns=new Ni,TC=new ct;function wC(n,e,t,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function m(x){let v=!1;const y=_(x);y===null?d(a,l):y&&y.isColor&&(d(y,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,v){const y=_(v);y&&(y.isCubeTexture||y.mapping===Qc)?(c===void 0&&(c=new Fn(new Pl(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:qo(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ns.copy(v.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(TC.makeRotationFromEuler(ns)),c.material.toneMapped=tt.getTransfer(y.colorSpace)!==ot,(f!==y||h!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Fn(new bl(2,2),new fn({name:"BackgroundMaterial",uniforms:qo(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=tt.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function d(x,v){x.getRGB(_u,ky(n)),i.buffers.color.setClear(_u.r,_u.g,_u.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(a,l)},render:m,addToRenderList:g}}function AC(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,D,B,O,W){let q=!1;const z=f(O,B,D);s!==z&&(s=z,u(s.object)),q=p(S,O,B,W),q&&_(S,O,B,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(S,D,B,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,D,B){const O=B.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let q=W[D.id];q===void 0&&(q={},W[D.id]=q);let z=q[O];return z===void 0&&(z=h(l()),q[O]=z),z}function h(S){const D=[],B=[],O=[];for(let W=0;W<t;W++)D[W]=0,B[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,D,B,O){const W=s.attributes,q=D.attributes;let z=0;const j=B.getAttributes();for(const I in j)if(j[I].location>=0){const Q=W[I];let re=q[I];if(re===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;z++}return s.attributesNum!==z||s.index!==O}function _(S,D,B,O){const W={},q=D.attributes;let z=0;const j=B.getAttributes();for(const I in j)if(j[I].location>=0){let Q=q[I];Q===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),W[I]=re,z++}s.attributes=W,s.attributesNum=z,s.index=O}function m(){const S=s.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function g(S){d(S,0)}function d(S,D){const B=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;B[S]=1,O[S]===0&&(n.enableVertexAttribArray(S),O[S]=1),W[S]!==D&&(n.vertexAttribDivisor(S,D),W[S]=D)}function x(){const S=s.newAttributes,D=s.enabledAttributes;for(let B=0,O=D.length;B<O;B++)D[B]!==S[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function v(S,D,B,O,W,q,z){z===!0?n.vertexAttribIPointer(S,D,B,W,q):n.vertexAttribPointer(S,D,B,O,W,q)}function y(S,D,B,O){m();const W=O.attributes,q=B.getAttributes(),z=D.defaultAttributeValues;for(const j in q){const I=q[j];if(I.location>=0){let K=W[j];if(K===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const Q=K.normalized,re=K.itemSize,Se=e.get(K);if(Se===void 0)continue;const Ge=Se.buffer,Y=Se.type,te=Se.bytesPerElement,_e=Y===n.INT||Y===n.UNSIGNED_INT||K.gpuType===mm;if(K.isInterleavedBufferAttribute){const he=K.data,Ne=he.stride,He=K.offset;if(he.isInstancedInterleavedBuffer){for(let De=0;De<I.locationSize;De++)d(I.location+De,he.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let De=0;De<I.locationSize;De++)g(I.location+De);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let De=0;De<I.locationSize;De++)v(I.location+De,re/I.locationSize,Y,Q,Ne*te,(He+re/I.locationSize*De)*te,_e)}else{if(K.isInstancedBufferAttribute){for(let he=0;he<I.locationSize;he++)d(I.location+he,K.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<I.locationSize;he++)g(I.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let he=0;he<I.locationSize;he++)v(I.location+he,re/I.locationSize,Y,Q,re*te,re/I.locationSize*he*te,_e)}}else if(z!==void 0){const Q=z[j];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(I.location,Q);break;case 3:n.vertexAttrib3fv(I.location,Q);break;case 4:n.vertexAttrib4fv(I.location,Q);break;default:n.vertexAttrib1fv(I.location,Q)}}}}x()}function C(){P();for(const S in i){const D=i[S];for(const B in D){const O=D[B];for(const W in O)c(O[W].object),delete O[W];delete D[B]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const B in D){const O=D[B];for(const W in O)c(O[W].object),delete O[W];delete D[B]}delete i[S.id]}function T(S){for(const D in i){const B=i[D];if(B[S.id]===void 0)continue;const O=B[S.id];for(const W in O)c(O[W].object),delete O[W];delete B[S.id]}}function P(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:g,disableUnusedAttributes:x}}function CC(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];t.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let _=0;for(let m=0;m<f;m++)_+=c[m];for(let m=0;m<h.length;m++)t.update(_,i,h[m])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function RC(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==_i&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==sr&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ki&&!T)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:y,maxSamples:C}}function PC(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new yr,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?c(null):u();else{const x=s?0:i,v=x*4;let y=d.clippingState||null;l.value=y,y=c(_,h,v,p);for(let C=0;C!==v;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,_){const m=f!==null?f.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const d=p+m*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,y=p;v!==m;++v,y+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function bC(n){let e=new WeakMap;function t(o,a){return a===Ed?o.mapping=Wo:a===Td&&(o.mapping=Xo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ed||a===Td)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new VT(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Tm extends zy{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xo=4,I_=[.125,.215,.35,.446,.526,.582],fs=20,ih=new Tm,U_=new ze;let rh=null,sh=0,oh=0,ah=!1;const ls=(1+Math.sqrt(5))/2,io=1/ls,O_=[new N(-ls,io,0),new N(ls,io,0),new N(-io,0,ls),new N(io,0,ls),new N(0,ls,-io),new N(0,ls,io),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class F_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){rh=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,sh,oh),this._renderer.xr.enabled=ah,e.scissorTest=!1,vu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wo||e.mapping===Xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:er,format:_i,colorSpace:$r,depthBuffer:!1},r=k_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LC(s)),this._blurMaterial=DC(s,e,t)}return r}_compileMaterial(e){const t=new Fn(this._lodPlanes[0],e);this._renderer.compile(t,ih)}_sceneToCubeUV(e,t,i,r){const a=new Jn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(U_),c.toneMapping=Fr,c.autoClear=!1;const p=new tf({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new Fn(new Pl,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(U_),m=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;vu(r,x*v,d>2?v:0,v,v),c.setRenderTarget(r),m&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Wo||e.mapping===Xo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;vu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ih)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=O_[(r-s-1)%O_.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Fn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fs-1),m=s/_,g=isFinite(s)?1+Math.floor(c*m):fs;g>fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);const d=[];let x=0;for(let T=0;T<fs;++T){const P=T/m,E=Math.exp(-P*P/2);d.push(E),T===0?x+=E:T<g&&(x+=2*E)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const y=this._sizeLods[r],C=3*y*(r>v-xo?r-v+xo:0),A=4*(this._cubeSize-y);vu(t,C,A,3*y,2*y),l.setRenderTarget(t),l.render(f,ih)}}function LC(n){const e=[],t=[],i=[];let r=n;const s=n-xo+1+I_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-xo?l=I_[o-n+xo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,m=3,g=2,d=1,x=new Float32Array(m*_*p),v=new Float32Array(g*_*p),y=new Float32Array(d*_*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,E=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(E,m*_*A),v.set(h,g*_*A);const S=[A,A,A,A,A,A];y.set(S,d*_*A)}const C=new Yn;C.setAttribute("position",new Di(x,m)),C.setAttribute("uv",new Di(v,g)),C.setAttribute("faceIndex",new Di(y,d)),e.push(C),r>xo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function k_(n,e,t){const i=new yi(n,e,t);return i.texture.mapping=Qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function DC(n,e,t){const i=new Float32Array(fs),r=new N(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wm(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function z_(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wm(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function B_(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function wm(){return`

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
	`}function NC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ed||l===Td,c=l===Wo||l===Xo;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new F_(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new F_(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function IC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ly("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function UC(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const m=h.morphAttributes[_];for(let g=0,d=m.length;g<d;g++)e.remove(m[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const m=p[_];for(let g=0,d=m.length;g<d;g++)e.update(m[g],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let v=0,y=x.length;v<y;v+=3){const C=x[v+0],A=x[v+1],T=x[v+2];h.push(C,A,A,T,T,C)}}else if(_!==void 0){const x=_.array;m=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const C=v+0,A=v+1,T=v+2;h.push(C,A,A,T,T,C)}}else return;const g=new(by(h)?Fy:Oy)(h,1);g.version=m;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function OC(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function u(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*o,_),t.update(p,i,_))}function c(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let d=0;d<_;d++)g+=p[d];t.update(g,i,1)}function f(h,p,_,m){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],m[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,m,0,_);let d=0;for(let x=0;x<_;x++)d+=p[x];for(let x=0;x<m.length;x++)t.update(d,i,m[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function FC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kC(n,e,t){const i=new WeakMap,r=new Ft;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),m===!0&&(y=2),g===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*f),P=new Ny(T,C,A,f);P.type=Ki,P.needsUpdate=!0;const E=y*4;for(let D=0;D<f;D++){const B=d[D],O=x[D],W=v[D],q=C*A*4*D;for(let z=0;z<B.count;z++){const j=z*E;_===!0&&(r.fromBufferAttribute(B,z),T[q+j+0]=r.x,T[q+j+1]=r.y,T[q+j+2]=r.z,T[q+j+3]=0),m===!0&&(r.fromBufferAttribute(O,z),T[q+j+4]=r.x,T[q+j+5]=r.y,T[q+j+6]=r.z,T[q+j+7]=0),g===!0&&(r.fromBufferAttribute(W,z),T[q+j+8]=r.x,T[q+j+9]=r.y,T[q+j+10]=r.z,T[q+j+11]=W.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new ie(C,A)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const m=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function zC(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Hy extends En{constructor(e,t,i,r,s,o,a,l,u,c=Lo){if(c!==Lo&&c!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Lo&&(i=Ps),i===void 0&&c===Yo&&(i=jo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ti,this.minFilter=l!==void 0?l:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gy=new En,V_=new Hy(1,1),Wy=new Ny,Xy=new AT,jy=new By,H_=[],G_=[],W_=new Float32Array(16),X_=new Float32Array(9),j_=new Float32Array(4);function sa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=H_[r];if(s===void 0&&(s=new Float32Array(r),H_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function nf(n,e){let t=G_[e];t===void 0&&(t=new Int32Array(e),G_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function BC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function VC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function HC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function GC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function WC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,i))return;j_.set(i),n.uniformMatrix2fv(this.addr,!1,j_),Vt(t,i)}}function XC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,i))return;X_.set(i),n.uniformMatrix3fv(this.addr,!1,X_),Vt(t,i)}}function jC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,i))return;W_.set(i),n.uniformMatrix4fv(this.addr,!1,W_),Vt(t,i)}}function YC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function $C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function KC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function ZC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function QC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function JC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function eR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function tR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(V_.compareFunction=Py,s=V_):s=Gy,t.setTexture2D(e||s,r)}function nR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Xy,r)}function iR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||jy,r)}function rR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Wy,r)}function sR(n){switch(n){case 5126:return BC;case 35664:return VC;case 35665:return HC;case 35666:return GC;case 35674:return WC;case 35675:return XC;case 35676:return jC;case 5124:case 35670:return YC;case 35667:case 35671:return qC;case 35668:case 35672:return $C;case 35669:case 35673:return KC;case 5125:return ZC;case 36294:return QC;case 36295:return JC;case 36296:return eR;case 35678:case 36198:case 36298:case 36306:case 35682:return tR;case 35679:case 36299:case 36307:return nR;case 35680:case 36300:case 36308:case 36293:return iR;case 36289:case 36303:case 36311:case 36292:return rR}}function oR(n,e){n.uniform1fv(this.addr,e)}function aR(n,e){const t=sa(e,this.size,2);n.uniform2fv(this.addr,t)}function lR(n,e){const t=sa(e,this.size,3);n.uniform3fv(this.addr,t)}function uR(n,e){const t=sa(e,this.size,4);n.uniform4fv(this.addr,t)}function cR(n,e){const t=sa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fR(n,e){const t=sa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hR(n,e){const t=sa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dR(n,e){n.uniform1iv(this.addr,e)}function pR(n,e){n.uniform2iv(this.addr,e)}function mR(n,e){n.uniform3iv(this.addr,e)}function gR(n,e){n.uniform4iv(this.addr,e)}function _R(n,e){n.uniform1uiv(this.addr,e)}function vR(n,e){n.uniform2uiv(this.addr,e)}function xR(n,e){n.uniform3uiv(this.addr,e)}function yR(n,e){n.uniform4uiv(this.addr,e)}function SR(n,e,t){const i=this.cache,r=e.length,s=nf(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Gy,s[o])}function MR(n,e,t){const i=this.cache,r=e.length,s=nf(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Xy,s[o])}function ER(n,e,t){const i=this.cache,r=e.length,s=nf(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||jy,s[o])}function TR(n,e,t){const i=this.cache,r=e.length,s=nf(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Wy,s[o])}function wR(n){switch(n){case 5126:return oR;case 35664:return aR;case 35665:return lR;case 35666:return uR;case 35674:return cR;case 35675:return fR;case 35676:return hR;case 5124:case 35670:return dR;case 35667:case 35671:return pR;case 35668:case 35672:return mR;case 35669:case 35673:return gR;case 5125:return _R;case 36294:return vR;case 36295:return xR;case 36296:return yR;case 35678:case 36198:case 36298:case 36306:case 35682:return SR;case 35679:case 36299:case 36307:return MR;case 35680:case 36300:case 36308:case 36293:return ER;case 36289:case 36303:case 36311:case 36292:return TR}}class AR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sR(t.type)}}class CR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wR(t.type)}}class RR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function Y_(n,e){n.seq.push(e),n.map[e.id]=e}function PR(n,e,t){const i=n.name,r=i.length;for(lh.lastIndex=0;;){const s=lh.exec(i),o=lh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Y_(t,u===void 0?new AR(a,n,e):new CR(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new RR(a),Y_(t,f)),t=f}}}class ju{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);PR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function q_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const bR=37297;let LR=0;function DR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function NR(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===Ec&&t===Mc?i="LinearDisplayP3ToLinearSRGB":e===Mc&&t===Ec&&(i="LinearSRGBToLinearDisplayP3"),n){case $r:case Jc:return[i,"LinearTransferOETF"];case Ti:case Sm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function $_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+DR(n.getShaderSource(e),o)}else return r}function IR(n,e){const t=NR(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function UR(n,e){let t;switch(e){case hy:t="Linear";break;case dy:t="Reinhard";break;case py:t="OptimizedCineon";break;case pm:t="ACESFilmic";break;case my:t="AgX";break;case gy:t="Neutral";break;case sT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function OR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function FR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ra(n){return n!==""}function K_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Z_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(n){return n.replace(zR,VR)}const BR=new Map;function VR(n,e){let t=We[e];if(t===void 0){const i=BR.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ep(t)}const HR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q_(n){return n.replace(HR,GR)}function GR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function J_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function XR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wo:case Xo:e="ENVMAP_TYPE_CUBE";break;case Qc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xo:e="ENVMAP_MODE_REFRACTION";break}return e}function YR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fy:e="ENVMAP_BLENDING_MULTIPLY";break;case iT:e="ENVMAP_BLENDING_MIX";break;case rT:e="ENVMAP_BLENDING_ADD";break}return e}function qR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $R(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=WR(t),u=XR(t),c=jR(t),f=YR(t),h=qR(t),p=OR(t),_=FR(s),m=r.createProgram();let g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ra).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ra).join(`
`),d.length>0&&(d+=`
`)):(g=[J_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),d=[J_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?We.tonemapping_pars_fragment:"",t.toneMapping!==Fr?UR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,IR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),o=ep(o),o=K_(o,t),o=Z_(o,t),a=ep(a),a=K_(a,t),a=Z_(a,t),o=Q_(o),a=Q_(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===p_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===p_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+g+o,y=x+d+a,C=q_(r,r.VERTEX_SHADER,v),A=q_(r,r.FRAGMENT_SHADER,y);r.attachShader(m,C),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function T(D){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(m).trim(),O=r.getShaderInfoLog(C).trim(),W=r.getShaderInfoLog(A).trim();let q=!0,z=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,C,A);else{const j=$_(r,C,"vertex"),I=$_(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+j+`
`+I)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||W==="")&&(z=!1);z&&(D.diagnostics={runnable:q,programLog:B,vertexShader:{log:O,prefix:g},fragmentShader:{log:W,prefix:d}})}r.deleteShader(C),r.deleteShader(A),P=new ju(r,m),E=kR(r,m)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(m,bR)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LR++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=A,this}let KR=0;class ZR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new QR(e),t.set(e,i)),i}}class QR{constructor(e){this.id=KR++,this.code=e,this.usedTimes=0}}function JR(n,e,t,i,r,s,o){const a=new Iy,l=new ZR,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return u.add(E),E===0?"uv":`uv${E}`}function g(E,S,D,B,O){const W=B.fog,q=O.geometry,z=E.isMeshStandardMaterial?B.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||z),I=j&&j.mapping===Qc?j.image.height:null,K=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Q=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,re=Q!==void 0?Q.length:0;let Se=0;q.morphAttributes.position!==void 0&&(Se=1),q.morphAttributes.normal!==void 0&&(Se=2),q.morphAttributes.color!==void 0&&(Se=3);let Ge,Y,te,_e;if(K){const Ke=Ai[K];Ge=Ke.vertexShader,Y=Ke.fragmentShader}else Ge=E.vertexShader,Y=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),_e=l.getFragmentShaderID(E);const he=n.getRenderTarget(),Ne=O.isInstancedMesh===!0,He=O.isBatchedMesh===!0,De=!!E.map,qe=!!E.matcap,b=!!j,ce=!!E.aoMap,se=!!E.lightMap,pe=!!E.bumpMap,Z=!!E.normalMap,be=!!E.displacementMap,me=!!E.emissiveMap,Me=!!E.metalnessMap,L=!!E.roughnessMap,w=E.anisotropy>0,H=E.clearcoat>0,ne=E.dispersion>0,ee=E.iridescence>0,J=E.sheen>0,Ce=E.transmission>0,de=w&&!!E.anisotropyMap,xe=H&&!!E.clearcoatMap,Be=H&&!!E.clearcoatNormalMap,ue=H&&!!E.clearcoatRoughnessMap,ve=ee&&!!E.iridescenceMap,Ye=ee&&!!E.iridescenceThicknessMap,Ie=J&&!!E.sheenColorMap,Te=J&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Ve=!!E.specularColorMap,ft=!!E.specularIntensityMap,M=Ce&&!!E.transmissionMap,k=Ce&&!!E.thicknessMap,V=!!E.gradientMap,$=!!E.alphaMap,oe=E.alphaTest>0,Re=!!E.alphaHash,Fe=!!E.extensions;let At=Fr;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(At=n.toneMapping);const It={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:Y,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:He,batchingColor:He&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:$r,alphaToCoverage:!!E.alphaToCoverage,map:De,matcap:qe,envMap:b,envMapMode:b&&j.mapping,envMapCubeUVHeight:I,aoMap:ce,lightMap:se,bumpMap:pe,normalMap:Z,displacementMap:h&&be,emissiveMap:me,normalMapObjectSpace:Z&&E.normalMapType===uT,normalMapTangentSpace:Z&&E.normalMapType===Ry,metalnessMap:Me,roughnessMap:L,anisotropy:w,anisotropyMap:de,clearcoat:H,clearcoatMap:xe,clearcoatNormalMap:Be,clearcoatRoughnessMap:ue,dispersion:ne,iridescence:ee,iridescenceMap:ve,iridescenceThicknessMap:Ye,sheen:J,sheenColorMap:Ie,sheenRoughnessMap:Te,specularMap:Oe,specularColorMap:Ve,specularIntensityMap:ft,transmission:Ce,transmissionMap:M,thicknessMap:k,gradientMap:V,opaque:E.transparent===!1&&E.blending===bo&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:oe,alphaHash:Re,combine:E.combine,mapUv:De&&m(E.map.channel),aoMapUv:ce&&m(E.aoMap.channel),lightMapUv:se&&m(E.lightMap.channel),bumpMapUv:pe&&m(E.bumpMap.channel),normalMapUv:Z&&m(E.normalMap.channel),displacementMapUv:be&&m(E.displacementMap.channel),emissiveMapUv:me&&m(E.emissiveMap.channel),metalnessMapUv:Me&&m(E.metalnessMap.channel),roughnessMapUv:L&&m(E.roughnessMap.channel),anisotropyMapUv:de&&m(E.anisotropyMap.channel),clearcoatMapUv:xe&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:Be&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(E.sheenRoughnessMap.channel),specularMapUv:Oe&&m(E.specularMap.channel),specularColorMapUv:Ve&&m(E.specularColorMap.channel),specularIntensityMapUv:ft&&m(E.specularIntensityMap.channel),transmissionMapUv:M&&m(E.transmissionMap.channel),thicknessMapUv:k&&m(E.thicknessMap.channel),alphaMapUv:$&&m(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Z||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(De||$),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:De&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Yi,flipSided:E.side===Mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return It.vertexUv1s=u.has(1),It.vertexUv2s=u.has(2),It.vertexUv3s=u.has(3),u.clear(),It}function d(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(x(S,E),v(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function x(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function v(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function y(E){const S=_[E.type];let D;if(S){const B=Ai[S];D=fl.clone(B.uniforms)}else D=E.uniforms;return D}function C(E,S){let D;for(let B=0,O=c.length;B<O;B++){const W=c[B];if(W.cacheKey===S){D=W,++D.usedTimes;break}}return D===void 0&&(D=new $R(n,S,E,s),c.push(D)),D}function A(E){if(--E.usedTimes===0){const S=c.indexOf(E);c[S]=c[c.length-1],c.pop(),E.destroy()}}function T(E){l.remove(E)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:P}}function eP(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function tP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ev(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,m,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=m,d.group=g),e++,d}function a(f,h,p,_,m,g){const d=o(f,h,p,_,m,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,m,g){const d=o(f,h,p,_,m,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||tP),i.length>1&&i.sort(h||ev),r.length>1&&r.sort(h||ev)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function nP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new tv,n.set(i,[o])):r>=s.length?(o=new tv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function iP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ze};break;case"SpotLight":t={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function rP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let sP=0;function oP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function aP(n){const e=new iP,t=rP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,s=new ct,o=new ct;function a(u){let c=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,m=0,g=0,d=0,x=0,v=0,y=0,C=0,A=0,T=0;u.sort(oP);for(let E=0,S=u.length;E<S;E++){const D=u[E],B=D.color,O=D.intensity,W=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=B.r*O,f+=B.g*O,h+=B.b*O;else if(D.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],O);T++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,I=t.get(D);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=D.shadow.matrix,x++}i.directional[p]=z,p++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(B).multiplyScalar(O),z.distance=W,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,i.spot[m]=z;const j=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,j.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[m]=j.matrix,D.castShadow){const I=t.get(D);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,i.spotShadow[m]=I,i.spotShadowMap[m]=q,y++}m++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(B).multiplyScalar(O),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=z,g++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const j=D.shadow,I=t.get(D);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,I.shadowCameraNear=j.camera.near,I.shadowCameraFar=j.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=D.shadow.matrix,v++}i.point[_]=z,_++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(O),z.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[d]=z,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==m||P.rectAreaLength!==g||P.hemiLength!==d||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=m,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,P.directionalLength=p,P.pointLength=_,P.spotLength=m,P.rectAreaLength=g,P.hemiLength=d,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=T,i.version=sP++)}function l(u,c){let f=0,h=0,p=0,_=0,m=0;const g=c.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){const v=u[d];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function nv(n){const e=new aP(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function lP(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new nv(n),e.set(r,[a])):s>=o.length?(a=new nv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class uP extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cP extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hP=`uniform sampler2D shadow_pass;
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
}`;function dP(n,e,t){let i=new Em;const r=new ie,s=new ie,o=new Ft,a=new uP({depthPacking:lT}),l=new cP,u={},c=t.maxTextureSize,f={[Hr]:Mn,[Mn]:Hr,[Yi]:Yi},h=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:fP,fragmentShader:hP}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Yn;_.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Fn(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uy;let d=this.type;this.render=function(A,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ji),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=d!==Hi&&this.type===Hi,W=d===Hi&&this.type!==Hi;for(let q=0,z=A.length;q<z;q++){const j=A[q],I=j.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const K=I.getFrameExtents();if(r.multiply(K),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,I.mapSize.y=s.y)),I.map===null||O===!0||W===!0){const re=this.type!==Hi?{minFilter:ti,magFilter:ti}:{};I.map!==null&&I.map.dispose(),I.map=new yi(r.x,r.y,re),I.map.texture.name=j.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const Q=I.getViewportCount();for(let re=0;re<Q;re++){const Se=I.getViewport(re);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),B.viewport(o),I.updateMatrices(j,re),i=I.getFrustum(),y(T,P,I.camera,j,this.type)}I.isPointLightShadow!==!0&&this.type===Hi&&x(I,P),I.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(E,S,D)};function x(A,T){const P=e.update(m);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,P,h,m,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,P,p,m,null)}function v(A,T,P,E){let S=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=S.uuid,O=T.uuid;let W=u[B];W===void 0&&(W={},u[B]=W);let q=W[O];q===void 0&&(q=S.clone(),W[O]=q,T.addEventListener("dispose",C)),S=q}if(S.visible=T.visible,S.wireframe=T.wireframe,E===Hi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=P}return S}function y(A,T,P,E,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Hi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=e.update(A),W=A.material;if(Array.isArray(W)){const q=O.groups;for(let z=0,j=q.length;z<j;z++){const I=q[z],K=W[I.materialIndex];if(K&&K.visible){const Q=v(A,K,E,S);A.onBeforeShadow(n,A,T,P,O,Q,I),n.renderBufferDirect(P,null,O,Q,A,I),A.onAfterShadow(n,A,T,P,O,Q,I)}}}else if(W.visible){const q=v(A,W,E,S);A.onBeforeShadow(n,A,T,P,O,q,null),n.renderBufferDirect(P,null,O,q,A,null),A.onAfterShadow(n,A,T,P,O,q,null)}}const B=A.children;for(let O=0,W=B.length;O<W;O++)y(B[O],T,P,E,S)}function C(A){A.target.removeEventListener("dispose",C);for(const P in u){const E=u[P],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function pP(n){function e(){let M=!1;const k=new Ft;let V=null;const $=new Ft(0,0,0,0);return{setMask:function(oe){V!==oe&&!M&&(n.colorMask(oe,oe,oe,oe),V=oe)},setLocked:function(oe){M=oe},setClear:function(oe,Re,Fe,At,It){It===!0&&(oe*=At,Re*=At,Fe*=At),k.set(oe,Re,Fe,At),$.equals(k)===!1&&(n.clearColor(oe,Re,Fe,At),$.copy(k))},reset:function(){M=!1,V=null,$.set(-1,0,0,0)}}}function t(){let M=!1,k=null,V=null,$=null;return{setTest:function(oe){oe?_e(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(oe){k!==oe&&!M&&(n.depthMask(oe),k=oe)},setFunc:function(oe){if(V!==oe){switch(oe){case K1:n.depthFunc(n.NEVER);break;case Z1:n.depthFunc(n.ALWAYS);break;case Q1:n.depthFunc(n.LESS);break;case yc:n.depthFunc(n.LEQUAL);break;case J1:n.depthFunc(n.EQUAL);break;case eT:n.depthFunc(n.GEQUAL);break;case tT:n.depthFunc(n.GREATER);break;case nT:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}V=oe}},setLocked:function(oe){M=oe},setClear:function(oe){$!==oe&&(n.clearDepth(oe),$=oe)},reset:function(){M=!1,k=null,V=null,$=null}}}function i(){let M=!1,k=null,V=null,$=null,oe=null,Re=null,Fe=null,At=null,It=null;return{setTest:function(Ke){M||(Ke?_e(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Ke){k!==Ke&&!M&&(n.stencilMask(Ke),k=Ke)},setFunc:function(Ke,Ut,Pt){(V!==Ke||$!==Ut||oe!==Pt)&&(n.stencilFunc(Ke,Ut,Pt),V=Ke,$=Ut,oe=Pt)},setOp:function(Ke,Ut,Pt){(Re!==Ke||Fe!==Ut||At!==Pt)&&(n.stencilOp(Ke,Ut,Pt),Re=Ke,Fe=Ut,At=Pt)},setLocked:function(Ke){M=Ke},setClear:function(Ke){It!==Ke&&(n.clearStencil(Ke),It=Ke)},reset:function(){M=!1,k=null,V=null,$=null,oe=null,Re=null,Fe=null,At=null,It=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],p=null,_=!1,m=null,g=null,d=null,x=null,v=null,y=null,C=null,A=new ze(0,0,0),T=0,P=!1,E=null,S=null,D=null,B=null,O=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=z>=2);let I=null,K={};const Q=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),Se=new Ft().fromArray(Q),Ge=new Ft().fromArray(re);function Y(M,k,V,$){const oe=new Uint8Array(4),Re=n.createTexture();n.bindTexture(M,Re),n.texParameteri(M,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(M,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<V;Fe++)M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY?n.texImage3D(k,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(k+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return Re}const te={};te[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),s.setFunc(yc),pe(!1),Z(u_),_e(n.CULL_FACE),ce(Ji);function _e(M){u[M]!==!0&&(n.enable(M),u[M]=!0)}function he(M){u[M]!==!1&&(n.disable(M),u[M]=!1)}function Ne(M,k){return c[M]!==k?(n.bindFramebuffer(M,k),c[M]=k,M===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=k),M===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=k),!0):!1}function He(M,k){let V=h,$=!1;if(M){V=f.get(k),V===void 0&&(V=[],f.set(k,V));const oe=M.textures;if(V.length!==oe.length||V[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,Fe=oe.length;Re<Fe;Re++)V[Re]=n.COLOR_ATTACHMENT0+Re;V.length=oe.length,$=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,$=!0);$&&n.drawBuffers(V)}function De(M){return p!==M?(n.useProgram(M),p=M,!0):!1}const qe={[cs]:n.FUNC_ADD,[N1]:n.FUNC_SUBTRACT,[I1]:n.FUNC_REVERSE_SUBTRACT};qe[U1]=n.MIN,qe[O1]=n.MAX;const b={[F1]:n.ZERO,[k1]:n.ONE,[z1]:n.SRC_COLOR,[Sd]:n.SRC_ALPHA,[X1]:n.SRC_ALPHA_SATURATE,[G1]:n.DST_COLOR,[V1]:n.DST_ALPHA,[B1]:n.ONE_MINUS_SRC_COLOR,[Md]:n.ONE_MINUS_SRC_ALPHA,[W1]:n.ONE_MINUS_DST_COLOR,[H1]:n.ONE_MINUS_DST_ALPHA,[j1]:n.CONSTANT_COLOR,[Y1]:n.ONE_MINUS_CONSTANT_COLOR,[q1]:n.CONSTANT_ALPHA,[$1]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(M,k,V,$,oe,Re,Fe,At,It,Ke){if(M===Ji){_===!0&&(he(n.BLEND),_=!1);return}if(_===!1&&(_e(n.BLEND),_=!0),M!==D1){if(M!==m||Ke!==P){if((g!==cs||v!==cs)&&(n.blendEquation(n.FUNC_ADD),g=cs,v=cs),Ke)switch(M){case bo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yd:n.blendFunc(n.ONE,n.ONE);break;case c_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case f_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case c_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case f_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}d=null,x=null,y=null,C=null,A.set(0,0,0),T=0,m=M,P=Ke}return}oe=oe||k,Re=Re||V,Fe=Fe||$,(k!==g||oe!==v)&&(n.blendEquationSeparate(qe[k],qe[oe]),g=k,v=oe),(V!==d||$!==x||Re!==y||Fe!==C)&&(n.blendFuncSeparate(b[V],b[$],b[Re],b[Fe]),d=V,x=$,y=Re,C=Fe),(At.equals(A)===!1||It!==T)&&(n.blendColor(At.r,At.g,At.b,It),A.copy(At),T=It),m=M,P=!1}function se(M,k){M.side===Yi?he(n.CULL_FACE):_e(n.CULL_FACE);let V=M.side===Mn;k&&(V=!V),pe(V),M.blending===bo&&M.transparent===!1?ce(Ji):ce(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),s.setFunc(M.depthFunc),s.setTest(M.depthTest),s.setMask(M.depthWrite),r.setMask(M.colorWrite);const $=M.stencilWrite;o.setTest($),$&&(o.setMask(M.stencilWriteMask),o.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),o.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),me(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function pe(M){E!==M&&(M?n.frontFace(n.CW):n.frontFace(n.CCW),E=M)}function Z(M){M!==b1?(_e(n.CULL_FACE),M!==S&&(M===u_?n.cullFace(n.BACK):M===L1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),S=M}function be(M){M!==D&&(q&&n.lineWidth(M),D=M)}function me(M,k,V){M?(_e(n.POLYGON_OFFSET_FILL),(B!==k||O!==V)&&(n.polygonOffset(k,V),B=k,O=V)):he(n.POLYGON_OFFSET_FILL)}function Me(M){M?_e(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function L(M){M===void 0&&(M=n.TEXTURE0+W-1),I!==M&&(n.activeTexture(M),I=M)}function w(M,k,V){V===void 0&&(I===null?V=n.TEXTURE0+W-1:V=I);let $=K[V];$===void 0&&($={type:void 0,texture:void 0},K[V]=$),($.type!==M||$.texture!==k)&&(I!==V&&(n.activeTexture(V),I=V),n.bindTexture(M,k||te[M]),$.type=M,$.texture=k)}function H(){const M=K[I];M!==void 0&&M.type!==void 0&&(n.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ye(){try{n.texImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ie(M){Se.equals(M)===!1&&(n.scissor(M.x,M.y,M.z,M.w),Se.copy(M))}function Te(M){Ge.equals(M)===!1&&(n.viewport(M.x,M.y,M.z,M.w),Ge.copy(M))}function Oe(M,k){let V=l.get(k);V===void 0&&(V=new WeakMap,l.set(k,V));let $=V.get(M);$===void 0&&($=n.getUniformBlockIndex(k,M.name),V.set(M,$))}function Ve(M,k){const $=l.get(k).get(M);a.get(k)!==$&&(n.uniformBlockBinding(k,$,M.__bindingPointIndex),a.set(k,$))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},I=null,K={},c={},f=new WeakMap,h=[],p=null,_=!1,m=null,g=null,d=null,x=null,v=null,y=null,C=null,A=new ze(0,0,0),T=0,P=!1,E=null,S=null,D=null,B=null,O=null,Se.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:_e,disable:he,bindFramebuffer:Ne,drawBuffers:He,useProgram:De,setBlending:ce,setMaterial:se,setFlipSided:pe,setCullFace:Z,setLineWidth:be,setPolygonOffset:me,setScissorTest:Me,activeTexture:L,bindTexture:w,unbindTexture:H,compressedTexImage2D:ne,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Ye,updateUBOMapping:Oe,uniformBlockBinding:Ve,texStorage2D:Be,texStorage3D:ue,texSubImage2D:J,texSubImage3D:Ce,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:Ie,viewport:Te,reset:ft}}function iv(n,e,t,i){const r=mP(i);switch(t){case Sy:return n*e;case Ey:return n*e;case Ty:return n*e*2;case wy:return n*e/r.components*r.byteLength;case vm:return n*e/r.components*r.byteLength;case Ay:return n*e*2/r.components*r.byteLength;case xm:return n*e*2/r.components*r.byteLength;case My:return n*e*3/r.components*r.byteLength;case _i:return n*e*4/r.components*r.byteLength;case ym:return n*e*4/r.components*r.byteLength;case Vu:case Hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gu:case Wu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rd:case bd:return Math.max(n,16)*Math.max(e,8)/4;case Cd:case Pd:return Math.max(n,8)*Math.max(e,8)/2;case Ld:case Dd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xu:case qd:case $d:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cy:case Kd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zd:case Qd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mP(n){switch(n){case sr:case vy:return{byteLength:1,components:1};case cl:case xy:case er:return{byteLength:2,components:1};case gm:case _m:return{byteLength:2,components:4};case Ps:case mm:case Ki:return{byteLength:4,components:1};case yy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gP(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ie,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,w){return p?new OffscreenCanvas(L,w):wc("canvas")}function m(L,w,H){let ne=1;const ee=Me(L);if((ee.width>H||ee.height>H)&&(ne=H/Math.max(ee.width,ee.height)),ne<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const J=Math.floor(ne*ee.width),Ce=Math.floor(ne*ee.height);f===void 0&&(f=_(J,Ce));const de=w?_(J,Ce):f;return de.width=J,de.height=Ce,de.getContext("2d").drawImage(L,0,0,J,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+Ce+")."),de}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==ti&&L.minFilter!==mi}function d(L){n.generateMipmap(L)}function x(L,w,H,ne,ee=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let J=w;if(w===n.RED&&(H===n.FLOAT&&(J=n.R32F),H===n.HALF_FLOAT&&(J=n.R16F),H===n.UNSIGNED_BYTE&&(J=n.R8)),w===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.R8UI),H===n.UNSIGNED_SHORT&&(J=n.R16UI),H===n.UNSIGNED_INT&&(J=n.R32UI),H===n.BYTE&&(J=n.R8I),H===n.SHORT&&(J=n.R16I),H===n.INT&&(J=n.R32I)),w===n.RG&&(H===n.FLOAT&&(J=n.RG32F),H===n.HALF_FLOAT&&(J=n.RG16F),H===n.UNSIGNED_BYTE&&(J=n.RG8)),w===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RG8UI),H===n.UNSIGNED_SHORT&&(J=n.RG16UI),H===n.UNSIGNED_INT&&(J=n.RG32UI),H===n.BYTE&&(J=n.RG8I),H===n.SHORT&&(J=n.RG16I),H===n.INT&&(J=n.RG32I)),w===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),w===n.RGBA){const Ce=ee?Sc:tt.getTransfer(ne);H===n.FLOAT&&(J=n.RGBA32F),H===n.HALF_FLOAT&&(J=n.RGBA16F),H===n.UNSIGNED_BYTE&&(J=Ce===ot?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(L,w){let H;return L?w===null||w===Ps||w===jo?H=n.DEPTH24_STENCIL8:w===Ki?H=n.DEPTH32F_STENCIL8:w===cl&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ps||w===jo?H=n.DEPTH_COMPONENT24:w===Ki?H=n.DEPTH_COMPONENT32F:w===cl&&(H=n.DEPTH_COMPONENT16),H}function y(L,w){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==ti&&L.minFilter!==mi?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function C(L){const w=L.target;w.removeEventListener("dispose",C),T(w),w.isVideoTexture&&c.delete(w)}function A(L){const w=L.target;w.removeEventListener("dispose",A),E(w)}function T(L){const w=i.get(L);if(w.__webglInit===void 0)return;const H=L.source,ne=h.get(H);if(ne){const ee=ne[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(L),Object.keys(ne).length===0&&h.delete(H)}i.remove(L)}function P(L){const w=i.get(L);n.deleteTexture(w.__webglTexture);const H=L.source,ne=h.get(H);delete ne[w.__cacheKey],o.memory.textures--}function E(L){const w=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let ee=0;ee<w.__webglFramebuffer[ne].length;ee++)n.deleteFramebuffer(w.__webglFramebuffer[ne][ee]);else n.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)n.deleteFramebuffer(w.__webglFramebuffer[ne]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=L.textures;for(let ne=0,ee=H.length;ne<ee;ne++){const J=i.get(H[ne]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(H[ne])}i.remove(L)}let S=0;function D(){S=0}function B(){const L=S;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),S+=1,L}function O(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function W(L,w){const H=i.get(L);if(L.isVideoTexture&&be(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(H,L,w);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+w)}function q(L,w){const H=i.get(L);if(L.version>0&&H.__version!==L.version){Ge(H,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+w)}function z(L,w){const H=i.get(L);if(L.version>0&&H.__version!==L.version){Ge(H,L,w);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+w)}function j(L,w){const H=i.get(L);if(L.version>0&&H.__version!==L.version){Y(H,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+w)}const I={[wd]:n.REPEAT,[ms]:n.CLAMP_TO_EDGE,[Ad]:n.MIRRORED_REPEAT},K={[ti]:n.NEAREST,[oT]:n.NEAREST_MIPMAP_NEAREST,[Zl]:n.NEAREST_MIPMAP_LINEAR,[mi]:n.LINEAR,[Ff]:n.LINEAR_MIPMAP_NEAREST,[gs]:n.LINEAR_MIPMAP_LINEAR},Q={[cT]:n.NEVER,[gT]:n.ALWAYS,[fT]:n.LESS,[Py]:n.LEQUAL,[hT]:n.EQUAL,[mT]:n.GEQUAL,[dT]:n.GREATER,[pT]:n.NOTEQUAL};function re(L,w){if(w.type===Ki&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===mi||w.magFilter===Ff||w.magFilter===Zl||w.magFilter===gs||w.minFilter===mi||w.minFilter===Ff||w.minFilter===Zl||w.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,I[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,I[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,I[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,K[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ti||w.minFilter!==Zl&&w.minFilter!==gs||w.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Se(L,w){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",C));const ne=w.source;let ee=h.get(ne);ee===void 0&&(ee={},h.set(ne,ee));const J=O(w);if(J!==L.__cacheKey){ee[J]===void 0&&(ee[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[J].usedTimes++;const Ce=ee[L.__cacheKey];Ce!==void 0&&(ee[L.__cacheKey].usedTimes--,Ce.usedTimes===0&&P(w)),L.__cacheKey=J,L.__webglTexture=ee[J].texture}return H}function Ge(L,w,H){let ne=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=n.TEXTURE_3D);const ee=Se(L,w),J=w.source;t.bindTexture(ne,L.__webglTexture,n.TEXTURE0+H);const Ce=i.get(J);if(J.version!==Ce.__version||ee===!0){t.activeTexture(n.TEXTURE0+H);const de=tt.getPrimaries(tt.workingColorSpace),xe=w.colorSpace===Er?null:tt.getPrimaries(w.colorSpace),Be=w.colorSpace===Er||de===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ue=m(w.image,!1,r.maxTextureSize);ue=me(w,ue);const ve=s.convert(w.format,w.colorSpace),Ye=s.convert(w.type);let Ie=x(w.internalFormat,ve,Ye,w.colorSpace,w.isVideoTexture);re(ne,w);let Te;const Oe=w.mipmaps,Ve=w.isVideoTexture!==!0,ft=Ce.__version===void 0||ee===!0,M=J.dataReady,k=y(w,ue);if(w.isDepthTexture)Ie=v(w.format===Yo,w.type),ft&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Ie,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,ve,Ye,null));else if(w.isDataTexture)if(Oe.length>0){Ve&&ft&&t.texStorage2D(n.TEXTURE_2D,k,Ie,Oe[0].width,Oe[0].height);for(let V=0,$=Oe.length;V<$;V++)Te=Oe[V],Ve?M&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,Te.width,Te.height,ve,Ye,Te.data):t.texImage2D(n.TEXTURE_2D,V,Ie,Te.width,Te.height,0,ve,Ye,Te.data);w.generateMipmaps=!1}else Ve?(ft&&t.texStorage2D(n.TEXTURE_2D,k,Ie,ue.width,ue.height),M&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,ve,Ye,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,ve,Ye,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ve&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,k,Ie,Oe[0].width,Oe[0].height,ue.depth);for(let V=0,$=Oe.length;V<$;V++)if(Te=Oe[V],w.format!==_i)if(ve!==null)if(Ve){if(M)if(w.layerUpdates.size>0){const oe=iv(Te.width,Te.height,w.format,w.type);for(const Re of w.layerUpdates){const Fe=Te.data.subarray(Re*oe/Te.data.BYTES_PER_ELEMENT,(Re+1)*oe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,Re,Te.width,Te.height,1,ve,Fe,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,Te.width,Te.height,ue.depth,ve,Te.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Ie,Te.width,Te.height,ue.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?M&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,Te.width,Te.height,ue.depth,ve,Ye,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Ie,Te.width,Te.height,ue.depth,0,ve,Ye,Te.data)}else{Ve&&ft&&t.texStorage2D(n.TEXTURE_2D,k,Ie,Oe[0].width,Oe[0].height);for(let V=0,$=Oe.length;V<$;V++)Te=Oe[V],w.format!==_i?ve!==null?Ve?M&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,Te.width,Te.height,ve,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Ie,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?M&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,Te.width,Te.height,ve,Ye,Te.data):t.texImage2D(n.TEXTURE_2D,V,Ie,Te.width,Te.height,0,ve,Ye,Te.data)}else if(w.isDataArrayTexture)if(Ve){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,k,Ie,ue.width,ue.height,ue.depth),M)if(w.layerUpdates.size>0){const V=iv(ue.width,ue.height,w.format,w.type);for(const $ of w.layerUpdates){const oe=ue.data.subarray($*V/ue.data.BYTES_PER_ELEMENT,($+1)*V/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,ue.width,ue.height,1,ve,Ye,oe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Ye,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ue.width,ue.height,ue.depth,0,ve,Ye,ue.data);else if(w.isData3DTexture)Ve?(ft&&t.texStorage3D(n.TEXTURE_3D,k,Ie,ue.width,ue.height,ue.depth),M&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Ye,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ue.width,ue.height,ue.depth,0,ve,Ye,ue.data);else if(w.isFramebufferTexture){if(ft)if(Ve)t.texStorage2D(n.TEXTURE_2D,k,Ie,ue.width,ue.height);else{let V=ue.width,$=ue.height;for(let oe=0;oe<k;oe++)t.texImage2D(n.TEXTURE_2D,oe,Ie,V,$,0,ve,Ye,null),V>>=1,$>>=1}}else if(Oe.length>0){if(Ve&&ft){const V=Me(Oe[0]);t.texStorage2D(n.TEXTURE_2D,k,Ie,V.width,V.height)}for(let V=0,$=Oe.length;V<$;V++)Te=Oe[V],Ve?M&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,ve,Ye,Te):t.texImage2D(n.TEXTURE_2D,V,Ie,ve,Ye,Te);w.generateMipmaps=!1}else if(Ve){if(ft){const V=Me(ue);t.texStorage2D(n.TEXTURE_2D,k,Ie,V.width,V.height)}M&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ye,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ie,ve,Ye,ue);g(w)&&d(ne),Ce.__version=J.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Y(L,w,H){if(w.image.length!==6)return;const ne=Se(L,w),ee=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+H);const J=i.get(ee);if(ee.version!==J.__version||ne===!0){t.activeTexture(n.TEXTURE0+H);const Ce=tt.getPrimaries(tt.workingColorSpace),de=w.colorSpace===Er?null:tt.getPrimaries(w.colorSpace),xe=w.colorSpace===Er||Ce===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Be=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,ve=[];for(let $=0;$<6;$++)!Be&&!ue?ve[$]=m(w.image[$],!0,r.maxCubemapSize):ve[$]=ue?w.image[$].image:w.image[$],ve[$]=me(w,ve[$]);const Ye=ve[0],Ie=s.convert(w.format,w.colorSpace),Te=s.convert(w.type),Oe=x(w.internalFormat,Ie,Te,w.colorSpace),Ve=w.isVideoTexture!==!0,ft=J.__version===void 0||ne===!0,M=ee.dataReady;let k=y(w,Ye);re(n.TEXTURE_CUBE_MAP,w);let V;if(Be){Ve&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,k,Oe,Ye.width,Ye.height);for(let $=0;$<6;$++){V=ve[$].mipmaps;for(let oe=0;oe<V.length;oe++){const Re=V[oe];w.format!==_i?Ie!==null?Ve?M&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,0,0,Re.width,Re.height,Ie,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,Oe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,0,0,Re.width,Re.height,Ie,Te,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,Oe,Re.width,Re.height,0,Ie,Te,Re.data)}}}else{if(V=w.mipmaps,Ve&&ft){V.length>0&&k++;const $=Me(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,k,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(ue){Ve?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ve[$].width,ve[$].height,Ie,Te,ve[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,ve[$].width,ve[$].height,0,Ie,Te,ve[$].data);for(let oe=0;oe<V.length;oe++){const Fe=V[oe].image[$].image;Ve?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,0,0,Fe.width,Fe.height,Ie,Te,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,Oe,Fe.width,Fe.height,0,Ie,Te,Fe.data)}}else{Ve?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ie,Te,ve[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,Ie,Te,ve[$]);for(let oe=0;oe<V.length;oe++){const Re=V[oe];Ve?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,0,0,Ie,Te,Re.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,Oe,Ie,Te,Re.image[$])}}}g(w)&&d(n.TEXTURE_CUBE_MAP),J.__version=ee.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function te(L,w,H,ne,ee,J){const Ce=s.convert(H.format,H.colorSpace),de=s.convert(H.type),xe=x(H.internalFormat,Ce,de,H.colorSpace);if(!i.get(w).__hasExternalTextures){const ue=Math.max(1,w.width>>J),ve=Math.max(1,w.height>>J);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,xe,ue,ve,w.depth,0,Ce,de,null):t.texImage2D(ee,J,xe,ue,ve,0,Ce,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Z(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ee,i.get(H).__webglTexture,0,pe(w)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ee,i.get(H).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(L,w,H){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const ne=w.depthTexture,ee=ne&&ne.isDepthTexture?ne.type:null,J=v(w.stencilBuffer,ee),Ce=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=pe(w);Z(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,J,w.width,w.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,J,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,J,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,L)}else{const ne=w.textures;for(let ee=0;ee<ne.length;ee++){const J=ne[ee],Ce=s.convert(J.format,J.colorSpace),de=s.convert(J.type),xe=x(J.internalFormat,Ce,de,J.colorSpace),Be=pe(w);H&&Z(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,xe,w.width,w.height):Z(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,xe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,xe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const ne=i.get(w.depthTexture).__webglTexture,ee=pe(w);if(w.depthTexture.format===Lo)Z(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(w.depthTexture.format===Yo)Z(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ne(L){const w=i.get(L),H=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");he(w.__webglFramebuffer,L)}else if(H){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=n.createRenderbuffer(),_e(w.__webglDepthbuffer[ne],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),_e(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(L,w,H){const ne=i.get(L);w!==void 0&&te(ne.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ne(L)}function De(L){const w=L.texture,H=i.get(L),ne=i.get(w);L.addEventListener("dispose",A);const ee=L.textures,J=L.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=w.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let xe=0;xe<w.mipmaps.length;xe++)H.__webglFramebuffer[de][xe]=n.createFramebuffer()}else H.__webglFramebuffer[de]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<w.mipmaps.length;de++)H.__webglFramebuffer[de]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let de=0,xe=ee.length;de<xe;de++){const Be=i.get(ee[de]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Z(L)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const xe=ee[de];H.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[de]);const Be=s.convert(xe.format,xe.colorSpace),ue=s.convert(xe.type),ve=x(xe.internalFormat,Be,ue,xe.colorSpace,L.isXRRenderTarget===!0),Ye=pe(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,ve,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,H.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),re(n.TEXTURE_CUBE_MAP,w);for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)te(H.__webglFramebuffer[de][xe],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else te(H.__webglFramebuffer[de],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(w)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let de=0,xe=ee.length;de<xe;de++){const Be=ee[de],ue=i.get(Be);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),re(n.TEXTURE_2D,Be),te(H.__webglFramebuffer,L,Be,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),g(Be)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(de=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ne.__webglTexture),re(de,w),w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)te(H.__webglFramebuffer[xe],L,w,n.COLOR_ATTACHMENT0,de,xe);else te(H.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,de,0);g(w)&&d(de),t.unbindTexture()}L.depthBuffer&&Ne(L)}function qe(L){const w=L.textures;for(let H=0,ne=w.length;H<ne;H++){const ee=w[H];if(g(ee)){const J=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ce=i.get(ee).__webglTexture;t.bindTexture(J,Ce),d(J),t.unbindTexture()}}}const b=[],ce=[];function se(L){if(L.samples>0){if(Z(L)===!1){const w=L.textures,H=L.width,ne=L.height;let ee=n.COLOR_BUFFER_BIT;const J=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(L),de=w.length>1;if(de)for(let xe=0;xe<w.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let xe=0;xe<w.length;xe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);const Be=i.get(w[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,H,ne,0,0,H,ne,ee,n.NEAREST),l===!0&&(b.length=0,ce.length=0,b.push(n.COLOR_ATTACHMENT0+xe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(b.push(J),ce.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,b))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<w.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);const Be=i.get(w[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function pe(L){return Math.min(r.maxSamples,L.samples)}function Z(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function be(L){const w=o.render.frame;c.get(L)!==w&&(c.set(L,w),L.update())}function me(L,w){const H=L.colorSpace,ne=L.format,ee=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==$r&&H!==Er&&(tt.getTransfer(H)===ot?(ne!==_i||ee!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Me(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=He,this.setupRenderTarget=De,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Z}function _P(n,e){function t(i,r=Er){let s;const o=tt.getTransfer(r);if(i===sr)return n.UNSIGNED_BYTE;if(i===gm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_m)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vy)return n.BYTE;if(i===xy)return n.SHORT;if(i===cl)return n.UNSIGNED_SHORT;if(i===mm)return n.INT;if(i===Ps)return n.UNSIGNED_INT;if(i===Ki)return n.FLOAT;if(i===er)return n.HALF_FLOAT;if(i===Sy)return n.ALPHA;if(i===My)return n.RGB;if(i===_i)return n.RGBA;if(i===Ey)return n.LUMINANCE;if(i===Ty)return n.LUMINANCE_ALPHA;if(i===Lo)return n.DEPTH_COMPONENT;if(i===Yo)return n.DEPTH_STENCIL;if(i===wy)return n.RED;if(i===vm)return n.RED_INTEGER;if(i===Ay)return n.RG;if(i===xm)return n.RG_INTEGER;if(i===ym)return n.RGBA_INTEGER;if(i===Vu||i===Hu||i===Gu||i===Wu)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cd||i===Rd||i===Pd||i===bd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ld||i===Dd||i===Nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ld||i===Dd)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Id||i===Ud||i===Od||i===Fd||i===kd||i===zd||i===Bd||i===Vd||i===Hd||i===Gd||i===Wd||i===Xd||i===jd||i===Yd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Id)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ud)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Od)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xu||i===qd||i===$d)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xu)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$d)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cy||i===Kd||i===Zd||i===Qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class vP extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yo extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xP={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),d=this._getHandJoint(u,m);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SP=`
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

}`;class MP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new En,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new fn({vertexShader:yP,fragmentShader:SP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fn(new bl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EP extends Is{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const m=new MP,g=t.getContextAttributes();let d=null,x=null;const v=[],y=[],C=new ie;let A=null;const T=new Jn;T.layers.enable(1),T.viewport=new Ft;const P=new Jn;P.layers.enable(2),P.viewport=new Ft;const E=[T,P],S=new vP;S.layers.enable(1),S.layers.enable(2);let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=v[Y];return te===void 0&&(te=new uh,v[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=v[Y];return te===void 0&&(te=new uh,v[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=v[Y];return te===void 0&&(te=new uh,v[Y]=te),te.getHandSpace()};function O(Y){const te=y.indexOf(Y.inputSource);if(te===-1)return;const _e=v[te];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,u||o),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",q);for(let Y=0;Y<v.length;Y++){const te=y[Y];te!==null&&(y[Y]=null,v[Y].disconnect(te))}D=null,B=null,m.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,x=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new yi(p.framebufferWidth,p.framebufferHeight,{format:_i,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,_e=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=g.stencil?Yo:Lo,_e=g.stencil?jo:Ps);const Ne={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new yi(h.textureWidth,h.textureHeight,{format:_i,type:sr,depthTexture:new Hy(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(Y){for(let te=0;te<Y.removed.length;te++){const _e=Y.removed[te],he=y.indexOf(_e);he>=0&&(y[he]=null,v[he].disconnect(_e))}for(let te=0;te<Y.added.length;te++){const _e=Y.added[te];let he=y.indexOf(_e);if(he===-1){for(let He=0;He<v.length;He++)if(He>=y.length){y.push(_e),he=He;break}else if(y[He]===null){y[He]=_e,he=He;break}if(he===-1)break}const Ne=v[he];Ne&&Ne.connect(_e)}}const z=new N,j=new N;function I(Y,te,_e){z.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(_e.matrixWorld);const he=z.distanceTo(j),Ne=te.projectionMatrix.elements,He=_e.projectionMatrix.elements,De=Ne[14]/(Ne[10]-1),qe=Ne[14]/(Ne[10]+1),b=(Ne[9]+1)/Ne[5],ce=(Ne[9]-1)/Ne[5],se=(Ne[8]-1)/Ne[0],pe=(He[8]+1)/He[0],Z=De*se,be=De*pe,me=he/(-se+pe),Me=me*-se;te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Me),Y.translateZ(me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const L=De+me,w=qe+me,H=Z-Me,ne=be+(he-Me),ee=b*qe/w*L,J=ce*qe/w*L;Y.projectionMatrix.makePerspective(H,ne,ee,J,L,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function K(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;m.texture!==null&&(Y.near=m.depthNear,Y.far=m.depthFar),S.near=P.near=T.near=Y.near,S.far=P.far=T.far=Y.far,(D!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,B=S.far,T.near=D,T.far=B,P.near=D,P.far=B,T.updateProjectionMatrix(),P.updateProjectionMatrix(),Y.updateProjectionMatrix());const te=Y.parent,_e=S.cameras;K(S,te);for(let he=0;he<_e.length;he++)K(_e[he],te);_e.length===2?I(S,T,P):S.projectionMatrix.copy(T.projectionMatrix),Q(Y,S,te)};function Q(Y,te,_e){_e===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Jd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(S)};let re=null;function Se(Y,te){if(c=te.getViewerPose(u||o),_=te,c!==null){const _e=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let he=!1;_e.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let He=0;He<_e.length;He++){const De=_e[He];let qe=null;if(p!==null)qe=p.getViewport(De);else{const ce=f.getViewSubImage(h,De);qe=ce.viewport,He===0&&(e.setRenderTargetTextures(x,ce.colorTexture,h.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(x))}let b=E[He];b===void 0&&(b=new Jn,b.layers.enable(He),b.viewport=new Ft,E[He]=b),b.matrix.fromArray(De.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(De.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(qe.x,qe.y,qe.width,qe.height),He===0&&(S.matrix.copy(b.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(b)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const He=f.getDepthInformation(_e[0]);He&&He.isValid&&He.texture&&m.init(e,He,r.renderState)}}for(let _e=0;_e<v.length;_e++){const he=y[_e],Ne=v[_e];he!==null&&Ne!==void 0&&Ne.update(he,te,u||o)}re&&re(Y,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ge=new Vy;Ge.setAnimationLoop(Se),this.setAnimationLoop=function(Y){re=Y},this.dispose=function(){}}}const is=new Ni,TP=new ct;function wP(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,ky(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),c(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),m(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,x,v):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Mn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Mn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),v=x.envMap,y=x.envMapRotation;v&&(g.envMap.value=v,is.copy(y),is.x*=-1,is.y*=-1,is.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),g.envMapRotation.value.setFromMatrix4(TP.makeRotationFromEuler(is)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=v*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Mn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function m(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AP(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function u(x,v){let y=r[x.id];y===void 0&&(_(x),y=c(x),r[x.id]=y,x.addEventListener("dispose",g));const C=v.program;i.updateUBOMapping(x,C);const A=e.render.frame;s[x.id]!==A&&(h(x),s[x.id]=A)}function c(x){const v=f();x.__bindingPointIndex=v;const y=n.createBuffer(),C=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],y=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,T=y.length;A<T;A++){const P=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,S=P.length;E<S;E++){const D=P[E];if(p(D,A,E,C)===!0){const B=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let q=0;q<O.length;q++){const z=O[q],j=m(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,B+W,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,v,y,C){const A=x.value,T=v+"_"+y;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const P=C[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(x){const v=x.uniforms;let y=0;const C=16;for(let T=0,P=v.length;T<P;T++){const E=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,D=E.length;S<D;S++){const B=E[S],O=Array.isArray(B.value)?B.value:[B.value];for(let W=0,q=O.length;W<q;W++){const z=O[W],j=m(z),I=y%C;I!==0&&C-I<j.boundary&&(y+=C-I),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=j.storage}}}const A=y%C;return A>0&&(y+=C-A),x.__size=y,x.__cache={},this}function m(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class CP{constructor(e={}){const{canvas:t=xT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ti,this.toneMapping=Fr,this.toneMappingExposure=1;const v=this;let y=!1,C=0,A=0,T=null,P=-1,E=null;const S=new Ft,D=new Ft;let B=null;const O=new ze(0);let W=0,q=t.width,z=t.height,j=1,I=null,K=null;const Q=new Ft(0,0,q,z),re=new Ft(0,0,q,z);let Se=!1;const Ge=new Em;let Y=!1,te=!1;const _e=new ct,he=new N,Ne=new Ft,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function qe(){return T===null?j:1}let b=i;function ce(R,U){return t.getContext(R,U)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dm}`),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",oe,!1),b===null){const U="webgl2";if(b=ce(U,R),b===null)throw ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,pe,Z,be,me,Me,L,w,H,ne,ee,J,Ce,de,xe,Be,ue,ve,Ye,Ie,Te,Oe,Ve,ft;function M(){se=new IC(b),se.init(),Oe=new _P(b,se),pe=new RC(b,se,e,Oe),Z=new pP(b),be=new FC(b),me=new eP,Me=new gP(b,se,Z,me,pe,Oe,be),L=new bC(v),w=new NC(v),H=new WT(b),Ve=new AC(b,H),ne=new UC(b,H,be,Ve),ee=new zC(b,ne,H,be),Ye=new kC(b,pe,Me),Be=new PC(me),J=new JR(v,L,w,se,pe,Ve,Be),Ce=new wP(v,me),de=new nP,xe=new lP(se),ve=new wC(v,L,w,Z,ee,h,l),ue=new dP(v,ee,pe),ft=new AP(b,be,pe,Z),Ie=new CC(b,se,be),Te=new OC(b,se,be),be.programs=J.programs,v.capabilities=pe,v.extensions=se,v.properties=me,v.renderLists=de,v.shadowMap=ue,v.state=Z,v.info=be}M();const k=new EP(v,b);this.xr=k,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(q,z,!1))},this.getSize=function(R){return R.set(q,z)},this.setSize=function(R,U,G=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,z=U,t.width=Math.floor(R*j),t.height=Math.floor(U*j),G===!0&&(t.style.width=R+"px",t.style.height=U+"px"),this.setViewport(0,0,R,U)},this.getDrawingBufferSize=function(R){return R.set(q*j,z*j).floor()},this.setDrawingBufferSize=function(R,U,G){q=R,z=U,j=G,t.width=Math.floor(R*G),t.height=Math.floor(U*G),this.setViewport(0,0,R,U)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,U,G,X){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,U,G,X),Z.viewport(S.copy(Q).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,U,G,X){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,U,G,X),Z.scissor(D.copy(re).multiplyScalar(j).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){Z.setScissorTest(Se=R)},this.setOpaqueSort=function(R){I=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(R=!0,U=!0,G=!0){let X=0;if(R){let F=!1;if(T!==null){const fe=T.texture.format;F=fe===ym||fe===xm||fe===vm}if(F){const fe=T.texture.type,ye=fe===sr||fe===Ps||fe===cl||fe===jo||fe===gm||fe===_m,we=ve.getClearColor(),Ae=ve.getClearAlpha(),Ue=we.r,ke=we.g,Le=we.b;ye?(p[0]=Ue,p[1]=ke,p[2]=Le,p[3]=Ae,b.clearBufferuiv(b.COLOR,0,p)):(_[0]=Ue,_[1]=ke,_[2]=Le,_[3]=Ae,b.clearBufferiv(b.COLOR,0,_))}else X|=b.COLOR_BUFFER_BIT}U&&(X|=b.DEPTH_BUFFER_BIT),G&&(X|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),xe.dispose(),me.dispose(),L.dispose(),w.dispose(),ee.dispose(),Ve.dispose(),ft.dispose(),J.dispose(),k.dispose(),k.removeEventListener("sessionstart",Pt),k.removeEventListener("sessionend",ur),Yt.stop()};function V(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=be.autoReset,U=ue.enabled,G=ue.autoUpdate,X=ue.needsUpdate,F=ue.type;M(),be.autoReset=R,ue.enabled=U,ue.autoUpdate=G,ue.needsUpdate=X,ue.type=F}function oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Re(R){const U=R.target;U.removeEventListener("dispose",Re),Fe(U)}function Fe(R){At(R),me.remove(R)}function At(R){const U=me.get(R).programs;U!==void 0&&(U.forEach(function(G){J.releaseProgram(G)}),R.isShaderMaterial&&J.releaseShaderCache(R))}this.renderBufferDirect=function(R,U,G,X,F,fe){U===null&&(U=He);const ye=F.isMesh&&F.matrixWorld.determinant()<0,we=QS(R,U,G,X,F);Z.setMaterial(X,ye);let Ae=G.index,Ue=1;if(X.wireframe===!0){if(Ae=ne.getWireframeAttribute(G),Ae===void 0)return;Ue=2}const ke=G.drawRange,Le=G.attributes.position;let Qe=ke.start*Ue,Mt=(ke.start+ke.count)*Ue;fe!==null&&(Qe=Math.max(Qe,fe.start*Ue),Mt=Math.min(Mt,(fe.start+fe.count)*Ue)),Ae!==null?(Qe=Math.max(Qe,0),Mt=Math.min(Mt,Ae.count)):Le!=null&&(Qe=Math.max(Qe,0),Mt=Math.min(Mt,Le.count));const Et=Mt-Qe;if(Et<0||Et===1/0)return;Ve.setup(F,X,we,G,Ae);let Pn,Je=Ie;if(Ae!==null&&(Pn=H.get(Ae),Je=Te,Je.setIndex(Pn)),F.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*qe()),Je.setMode(b.LINES)):Je.setMode(b.TRIANGLES);else if(F.isLine){let Pe=X.linewidth;Pe===void 0&&(Pe=1),Z.setLineWidth(Pe*qe()),F.isLineSegments?Je.setMode(b.LINES):F.isLineLoop?Je.setMode(b.LINE_LOOP):Je.setMode(b.LINE_STRIP)}else F.isPoints?Je.setMode(b.POINTS):F.isSprite&&Je.setMode(b.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,qt=F._multiDrawCounts,et=F._multiDrawCount,ai=Ae?H.get(Ae).bytesPerElement:1,Fs=me.get(X).currentProgram.getUniforms();for(let bn=0;bn<et;bn++)Fs.setValue(b,"_gl_DrawID",bn),Je.render(Pe[bn]/ai,qt[bn])}else if(F.isInstancedMesh)Je.renderInstances(Qe,Et,F.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,qt=Math.min(G.instanceCount,Pe);Je.renderInstances(Qe,Et,qt)}else Je.render(Qe,Et)};function It(R,U,G){R.transparent===!0&&R.side===Yi&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,Nl(R,U,G),R.side=Hr,R.needsUpdate=!0,Nl(R,U,G),R.side=Yi):Nl(R,U,G)}this.compile=function(R,U,G=null){G===null&&(G=R),g=xe.get(G),g.init(U),x.push(g),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),R!==G&&R.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();const X=new Set;return R.traverse(function(F){const fe=F.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const we=fe[ye];It(we,G,F),X.add(we)}else It(fe,G,F),X.add(fe)}),x.pop(),g=null,X},this.compileAsync=function(R,U,G=null){const X=this.compile(R,U,G);return new Promise(F=>{function fe(){if(X.forEach(function(ye){me.get(ye).currentProgram.isReady()&&X.delete(ye)}),X.size===0){F(R);return}setTimeout(fe,10)}se.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ke=null;function Ut(R){Ke&&Ke(R)}function Pt(){Yt.stop()}function ur(){Yt.start()}const Yt=new Vy;Yt.setAnimationLoop(Ut),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(R){Ke=R,k.setAnimationLoop(R),R===null?Yt.stop():Yt.start()},k.addEventListener("sessionstart",Pt),k.addEventListener("sessionend",ur),this.render=function(R,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(U),U=k.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,U,T),g=xe.get(R,x.length),g.init(U),x.push(g),_e.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ge.setFromProjectionMatrix(_e),te=this.localClippingEnabled,Y=Be.init(this.clippingPlanes,te),m=de.get(R,d.length),m.init(),d.push(m),k.enabled===!0&&k.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&Oi(fe,U,-1/0,v.sortObjects)}Oi(R,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(I,K),De=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,De&&ve.addToRenderList(m,R),this.info.render.frame++,Y===!0&&Be.beginShadows();const G=g.state.shadowsArray;ue.render(G,R,U),Y===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,F=m.transmissive;if(g.setupLights(),U.isArrayCamera){const fe=U.cameras;if(F.length>0)for(let ye=0,we=fe.length;ye<we;ye++){const Ae=fe[ye];aa(X,F,R,Ae)}De&&ve.render(R);for(let ye=0,we=fe.length;ye<we;ye++){const Ae=fe[ye];Zr(m,R,Ae,Ae.viewport)}}else F.length>0&&aa(X,F,R,U),De&&ve.render(R),Zr(m,R,U);T!==null&&(Me.updateMultisampleRenderTarget(T),Me.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(v,R,U),Ve.resetDefaultState(),P=-1,E=null,x.pop(),x.length>0?(g=x[x.length-1],Y===!0&&Be.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?m=d[d.length-1]:m=null};function Oi(R,U,G,X){if(R.visible===!1)return;if(R.layers.test(U.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(U);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ge.intersectsSprite(R)){X&&Ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_e);const ye=ee.update(R),we=R.material;we.visible&&m.push(R,ye,we,G,Ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ge.intersectsObject(R))){const ye=ee.update(R),we=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ne.copy(R.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ne.copy(ye.boundingSphere.center)),Ne.applyMatrix4(R.matrixWorld).applyMatrix4(_e)),Array.isArray(we)){const Ae=ye.groups;for(let Ue=0,ke=Ae.length;Ue<ke;Ue++){const Le=Ae[Ue],Qe=we[Le.materialIndex];Qe&&Qe.visible&&m.push(R,ye,Qe,G,Ne.z,Le)}}else we.visible&&m.push(R,ye,we,G,Ne.z,null)}}const fe=R.children;for(let ye=0,we=fe.length;ye<we;ye++)Oi(fe[ye],U,G,X)}function Zr(R,U,G,X){const F=R.opaque,fe=R.transmissive,ye=R.transparent;g.setupLightsView(G),Y===!0&&Be.setGlobalState(v.clippingPlanes,G),X&&Z.viewport(S.copy(X)),F.length>0&&Dl(F,U,G),fe.length>0&&Dl(fe,U,G),ye.length>0&&Dl(ye,U,G),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function aa(R,U,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new yi(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?er:sr,minFilter:gs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const fe=g.state.transmissionRenderTarget[X.id],ye=X.viewport||S;fe.setSize(ye.z,ye.w);const we=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(O),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),De?ve.render(G):v.clear();const Ae=v.toneMapping;v.toneMapping=Fr;const Ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),Y===!0&&Be.setGlobalState(v.clippingPlanes,X),Dl(R,G,X),Me.updateMultisampleRenderTarget(fe),Me.updateRenderTargetMipmap(fe),se.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Le=0,Qe=U.length;Le<Qe;Le++){const Mt=U[Le],Et=Mt.object,Pn=Mt.geometry,Je=Mt.material,Pe=Mt.group;if(Je.side===Yi&&Et.layers.test(X.layers)){const qt=Je.side;Je.side=Mn,Je.needsUpdate=!0,Km(Et,G,X,Pn,Je,Pe),Je.side=qt,Je.needsUpdate=!0,ke=!0}}ke===!0&&(Me.updateMultisampleRenderTarget(fe),Me.updateRenderTargetMipmap(fe))}v.setRenderTarget(we),v.setClearColor(O,W),Ue!==void 0&&(X.viewport=Ue),v.toneMapping=Ae}function Dl(R,U,G){const X=U.isScene===!0?U.overrideMaterial:null;for(let F=0,fe=R.length;F<fe;F++){const ye=R[F],we=ye.object,Ae=ye.geometry,Ue=X===null?ye.material:X,ke=ye.group;we.layers.test(G.layers)&&Km(we,U,G,Ae,Ue,ke)}}function Km(R,U,G,X,F,fe){R.onBeforeRender(v,U,G,X,F,fe),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),F.transparent===!0&&F.side===Yi&&F.forceSinglePass===!1?(F.side=Mn,F.needsUpdate=!0,v.renderBufferDirect(G,U,X,F,R,fe),F.side=Hr,F.needsUpdate=!0,v.renderBufferDirect(G,U,X,F,R,fe),F.side=Yi):v.renderBufferDirect(G,U,X,F,R,fe),R.onAfterRender(v,U,G,X,F,fe)}function Nl(R,U,G){U.isScene!==!0&&(U=He);const X=me.get(R),F=g.state.lights,fe=g.state.shadowsArray,ye=F.state.version,we=J.getParameters(R,F.state,fe,U,G),Ae=J.getProgramCacheKey(we);let Ue=X.programs;X.environment=R.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(R.isMeshStandardMaterial?w:L).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?U.environmentRotation:R.envMapRotation,Ue===void 0&&(R.addEventListener("dispose",Re),Ue=new Map,X.programs=Ue);let ke=Ue.get(Ae);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===ye)return Qm(R,we),ke}else we.uniforms=J.getUniforms(R),R.onBeforeCompile(we,v),ke=J.acquireProgram(we,Ae),Ue.set(Ae,ke),X.uniforms=we.uniforms;const Le=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Le.clippingPlanes=Be.uniform),Qm(R,we),X.needsLights=eM(R),X.lightsStateVersion=ye,X.needsLights&&(Le.ambientLightColor.value=F.state.ambient,Le.lightProbe.value=F.state.probe,Le.directionalLights.value=F.state.directional,Le.directionalLightShadows.value=F.state.directionalShadow,Le.spotLights.value=F.state.spot,Le.spotLightShadows.value=F.state.spotShadow,Le.rectAreaLights.value=F.state.rectArea,Le.ltc_1.value=F.state.rectAreaLTC1,Le.ltc_2.value=F.state.rectAreaLTC2,Le.pointLights.value=F.state.point,Le.pointLightShadows.value=F.state.pointShadow,Le.hemisphereLights.value=F.state.hemi,Le.directionalShadowMap.value=F.state.directionalShadowMap,Le.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Le.spotShadowMap.value=F.state.spotShadowMap,Le.spotLightMatrix.value=F.state.spotLightMatrix,Le.spotLightMap.value=F.state.spotLightMap,Le.pointShadowMap.value=F.state.pointShadowMap,Le.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function Zm(R){if(R.uniformsList===null){const U=R.currentProgram.getUniforms();R.uniformsList=ju.seqWithValue(U.seq,R.uniforms)}return R.uniformsList}function Qm(R,U){const G=me.get(R);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function QS(R,U,G,X,F){U.isScene!==!0&&(U=He),Me.resetTextureUnits();const fe=U.fog,ye=X.isMeshStandardMaterial?U.environment:null,we=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:$r,Ae=(X.isMeshStandardMaterial?w:L).get(X.envMap||ye),Ue=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Le=!!G.morphAttributes.position,Qe=!!G.morphAttributes.normal,Mt=!!G.morphAttributes.color;let Et=Fr;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Et=v.toneMapping);const Pn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Je=Pn!==void 0?Pn.length:0,Pe=me.get(X),qt=g.state.lights;if(Y===!0&&(te===!0||R!==E)){const qn=R===E&&X.id===P;Be.setState(X,R,qn)}let et=!1;X.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==qt.state.version||Pe.outputColorSpace!==we||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==Ae||X.fog===!0&&Pe.fog!==fe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Be.numPlanes||Pe.numIntersection!==Be.numIntersection)||Pe.vertexAlphas!==Ue||Pe.vertexTangents!==ke||Pe.morphTargets!==Le||Pe.morphNormals!==Qe||Pe.morphColors!==Mt||Pe.toneMapping!==Et||Pe.morphTargetsCount!==Je)&&(et=!0):(et=!0,Pe.__version=X.version);let ai=Pe.currentProgram;et===!0&&(ai=Nl(X,U,F));let Fs=!1,bn=!1,lf=!1;const bt=ai.getUniforms(),cr=Pe.uniforms;if(Z.useProgram(ai.program)&&(Fs=!0,bn=!0,lf=!0),X.id!==P&&(P=X.id,bn=!0),Fs||E!==R){bt.setValue(b,"projectionMatrix",R.projectionMatrix),bt.setValue(b,"viewMatrix",R.matrixWorldInverse);const qn=bt.map.cameraPosition;qn!==void 0&&qn.setValue(b,he.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&bt.setValue(b,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&bt.setValue(b,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,bn=!0,lf=!0)}if(F.isSkinnedMesh){bt.setOptional(b,F,"bindMatrix"),bt.setOptional(b,F,"bindMatrixInverse");const qn=F.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),bt.setValue(b,"boneTexture",qn.boneTexture,Me))}F.isBatchedMesh&&(bt.setOptional(b,F,"batchingTexture"),bt.setValue(b,"batchingTexture",F._matricesTexture,Me),bt.setOptional(b,F,"batchingIdTexture"),bt.setValue(b,"batchingIdTexture",F._indirectTexture,Me),bt.setOptional(b,F,"batchingColorTexture"),F._colorsTexture!==null&&bt.setValue(b,"batchingColorTexture",F._colorsTexture,Me));const uf=G.morphAttributes;if((uf.position!==void 0||uf.normal!==void 0||uf.color!==void 0)&&Ye.update(F,G,ai),(bn||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,bt.setValue(b,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(cr.envMap.value=Ae,cr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(cr.envMapIntensity.value=U.environmentIntensity),bn&&(bt.setValue(b,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&JS(cr,lf),fe&&X.fog===!0&&Ce.refreshFogUniforms(cr,fe),Ce.refreshMaterialUniforms(cr,X,j,z,g.state.transmissionRenderTarget[R.id]),ju.upload(b,Zm(Pe),cr,Me)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ju.upload(b,Zm(Pe),cr,Me),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&bt.setValue(b,"center",F.center),bt.setValue(b,"modelViewMatrix",F.modelViewMatrix),bt.setValue(b,"normalMatrix",F.normalMatrix),bt.setValue(b,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const qn=X.uniformsGroups;for(let cf=0,tM=qn.length;cf<tM;cf++){const Jm=qn[cf];ft.update(Jm,ai),ft.bind(Jm,ai)}}return ai}function JS(R,U){R.ambientLightColor.needsUpdate=U,R.lightProbe.needsUpdate=U,R.directionalLights.needsUpdate=U,R.directionalLightShadows.needsUpdate=U,R.pointLights.needsUpdate=U,R.pointLightShadows.needsUpdate=U,R.spotLights.needsUpdate=U,R.spotLightShadows.needsUpdate=U,R.rectAreaLights.needsUpdate=U,R.hemisphereLights.needsUpdate=U}function eM(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,U,G){me.get(R.texture).__webglTexture=U,me.get(R.depthTexture).__webglTexture=G;const X=me.get(R);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,U){const G=me.get(R);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(R,U=0,G=0){T=R,C=U,A=G;let X=!0,F=null,fe=!1,ye=!1;if(R){const Ae=me.get(R);Ae.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(b.FRAMEBUFFER,null),X=!1):Ae.__webglFramebuffer===void 0?Me.setupRenderTarget(R):Ae.__hasExternalTextures&&Me.rebindTextures(R,me.get(R.texture).__webglTexture,me.get(R.depthTexture).__webglTexture);const Ue=R.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ye=!0);const ke=me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?F=ke[U][G]:F=ke[U],fe=!0):R.samples>0&&Me.useMultisampledRTT(R)===!1?F=me.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?F=ke[G]:F=ke,S.copy(R.viewport),D.copy(R.scissor),B=R.scissorTest}else S.copy(Q).multiplyScalar(j).floor(),D.copy(re).multiplyScalar(j).floor(),B=Se;if(Z.bindFramebuffer(b.FRAMEBUFFER,F)&&X&&Z.drawBuffers(R,F),Z.viewport(S),Z.scissor(D),Z.setScissorTest(B),fe){const Ae=me.get(R.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,G)}else if(ye){const Ae=me.get(R.texture),Ue=U||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ae.__webglTexture,G||0,Ue)}P=-1},this.readRenderTargetPixels=function(R,U,G,X,F,fe,ye){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){Z.bindFramebuffer(b.FRAMEBUFFER,we);try{const Ae=R.texture,Ue=Ae.format,ke=Ae.type;if(!pe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=R.width-X&&G>=0&&G<=R.height-F&&b.readPixels(U,G,X,F,Oe.convert(Ue),Oe.convert(ke),fe)}finally{const Ae=T!==null?me.get(T).__webglFramebuffer:null;Z.bindFramebuffer(b.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(R,U,G,X,F,fe,ye){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){Z.bindFramebuffer(b.FRAMEBUFFER,we);try{const Ae=R.texture,Ue=Ae.format,ke=Ae.type;if(!pe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=R.width-X&&G>=0&&G<=R.height-F){const Le=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Le),b.bufferData(b.PIXEL_PACK_BUFFER,fe.byteLength,b.STREAM_READ),b.readPixels(U,G,X,F,Oe.convert(Ue),Oe.convert(ke),0),b.flush();const Qe=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);await yT(b,Qe,4);try{b.bindBuffer(b.PIXEL_PACK_BUFFER,Le),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,fe)}finally{b.deleteBuffer(Le),b.deleteSync(Qe)}return fe}}finally{const Ae=T!==null?me.get(T).__webglFramebuffer:null;Z.bindFramebuffer(b.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(R,U=null,G=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,R=arguments[1]);const X=Math.pow(2,-G),F=Math.floor(R.image.width*X),fe=Math.floor(R.image.height*X),ye=U!==null?U.x:0,we=U!==null?U.y:0;Me.setTexture2D(R,0),b.copyTexSubImage2D(b.TEXTURE_2D,G,0,0,ye,we,F,fe),Z.unbindTexture()},this.copyTextureToTexture=function(R,U,G=null,X=null,F=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1],U=arguments[2],F=arguments[3]||0,G=null);let fe,ye,we,Ae,Ue,ke;G!==null?(fe=G.max.x-G.min.x,ye=G.max.y-G.min.y,we=G.min.x,Ae=G.min.y):(fe=R.image.width,ye=R.image.height,we=0,Ae=0),X!==null?(Ue=X.x,ke=X.y):(Ue=0,ke=0);const Le=Oe.convert(U.format),Qe=Oe.convert(U.type);Me.setTexture2D(U,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);const Mt=b.getParameter(b.UNPACK_ROW_LENGTH),Et=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Pn=b.getParameter(b.UNPACK_SKIP_PIXELS),Je=b.getParameter(b.UNPACK_SKIP_ROWS),Pe=b.getParameter(b.UNPACK_SKIP_IMAGES),qt=R.isCompressedTexture?R.mipmaps[F]:R.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,qt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,qt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,we),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ae),R.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,F,Ue,ke,fe,ye,Le,Qe,qt.data):R.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,F,Ue,ke,qt.width,qt.height,Le,qt.data):b.texSubImage2D(b.TEXTURE_2D,F,Ue,ke,fe,ye,Le,Qe,qt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Mt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Et),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Pn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Je),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Pe),F===0&&U.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(R,U,G=null,X=null,F=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,R=arguments[2],U=arguments[3],F=arguments[4]||0);let fe,ye,we,Ae,Ue,ke,Le,Qe,Mt;const Et=R.isCompressedTexture?R.mipmaps[F]:R.image;G!==null?(fe=G.max.x-G.min.x,ye=G.max.y-G.min.y,we=G.max.z-G.min.z,Ae=G.min.x,Ue=G.min.y,ke=G.min.z):(fe=Et.width,ye=Et.height,we=Et.depth,Ae=0,Ue=0,ke=0),X!==null?(Le=X.x,Qe=X.y,Mt=X.z):(Le=0,Qe=0,Mt=0);const Pn=Oe.convert(U.format),Je=Oe.convert(U.type);let Pe;if(U.isData3DTexture)Me.setTexture3D(U,0),Pe=b.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Me.setTexture2DArray(U,0),Pe=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);const qt=b.getParameter(b.UNPACK_ROW_LENGTH),et=b.getParameter(b.UNPACK_IMAGE_HEIGHT),ai=b.getParameter(b.UNPACK_SKIP_PIXELS),Fs=b.getParameter(b.UNPACK_SKIP_ROWS),bn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Et.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Et.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ae),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ue),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ke),R.isDataTexture||R.isData3DTexture?b.texSubImage3D(Pe,F,Le,Qe,Mt,fe,ye,we,Pn,Je,Et.data):U.isCompressedArrayTexture?b.compressedTexSubImage3D(Pe,F,Le,Qe,Mt,fe,ye,we,Pn,Et.data):b.texSubImage3D(Pe,F,Le,Qe,Mt,fe,ye,we,Pn,Je,Et),b.pixelStorei(b.UNPACK_ROW_LENGTH,qt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,et),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ai),b.pixelStorei(b.UNPACK_SKIP_ROWS,Fs),b.pixelStorei(b.UNPACK_SKIP_IMAGES,bn),F===0&&U.generateMipmaps&&b.generateMipmap(Pe),Z.unbindTexture()},this.initRenderTarget=function(R){me.get(R).__webglFramebuffer===void 0&&Me.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Me.setTextureCube(R,0):R.isData3DTexture?Me.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Me.setTexture2DArray(R,0):Me.setTexture2D(R,0),Z.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Z.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sm?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Jc?"display-p3":"srgb"}}class Am{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new Am(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class RP extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yy extends Us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ac=new N,Cc=new N,rv=new ct,Sa=new Mm,xu=new ef,ch=new N,sv=new N;class PP extends zt{constructor(e=new Yn,t=new Yy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ac.fromBufferAttribute(t,r-1),Cc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ac.distanceTo(Cc);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xu.copy(i.boundingSphere),xu.applyMatrix4(r),xu.radius+=s,e.ray.intersectsSphere(xu)===!1)return;rv.copy(r).invert(),Sa.copy(e.ray).applyMatrix4(rv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let m=p,g=_-1;m<g;m+=u){const d=c.getX(m),x=c.getX(m+1),v=yu(this,e,Sa,l,d,x);v&&t.push(v)}if(this.isLineLoop){const m=c.getX(_-1),g=c.getX(p),d=yu(this,e,Sa,l,m,g);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let m=p,g=_-1;m<g;m+=u){const d=yu(this,e,Sa,l,m,m+1);d&&t.push(d)}if(this.isLineLoop){const m=yu(this,e,Sa,l,_-1,p);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yu(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Ac.fromBufferAttribute(o,r),Cc.fromBufferAttribute(o,s),t.distanceSqToSegment(Ac,Cc,ch,sv)>i)return;ch.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ch);if(!(l<e.near||l>e.far))return{distance:l,point:sv.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const ov=new N,av=new N;class bP extends PP{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ov.fromBufferAttribute(t,r),av.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ov.distanceTo(av);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,p=(o-c)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ie:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new N,r=[],s=[],o=[],a=new N,l=new ct;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new N)}s[0]=new N,o[0]=new N;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Wt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Wt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cm extends Ui{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=u-this.aY;l=h*c-p*f+this.aX,u=h*f+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class LP extends Cm{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rm(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,p*=c,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Su=new N,fh=new Rm,hh=new Rm,dh=new Rm;class DP extends Ui{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new N){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Su.subVectors(r[0],r[1]).add(r[0]),u=Su);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Su.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Su),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(c),p);m<1e-4&&(m=1),_<1e-4&&(_=m),g<1e-4&&(g=m),fh.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,_,m,g),hh.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,_,m,g),dh.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,_,m,g)}else this.curveType==="catmullrom"&&(fh.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),hh.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),dh.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(fh.calc(l),hh.calc(l),dh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lv(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function NP(n,e){const t=1-n;return t*t*e}function IP(n,e){return 2*(1-n)*n*e}function UP(n,e){return n*n*e}function Va(n,e,t,i){return NP(n,e)+IP(n,t)+UP(n,i)}function OP(n,e){const t=1-n;return t*t*t*e}function FP(n,e){const t=1-n;return 3*t*t*n*e}function kP(n,e){return 3*(1-n)*n*n*e}function zP(n,e){return n*n*n*e}function Ha(n,e,t,i,r){return OP(n,e)+FP(n,t)+kP(n,i)+zP(n,r)}class qy extends Ui{constructor(e=new ie,t=new ie,i=new ie,r=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ie){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ha(e,r.x,s.x,o.x,a.x),Ha(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class BP extends Ui{constructor(e=new N,t=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new N){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ha(e,r.x,s.x,o.x,a.x),Ha(e,r.y,s.y,o.y,a.y),Ha(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $y extends Ui{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class VP extends Ui{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ky extends Ui{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Va(e,r.x,s.x,o.x),Va(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class HP extends Ui{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Va(e,r.x,s.x,o.x),Va(e,r.y,s.y,o.y),Va(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zy extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(lv(a,l.x,u.x,c.x,f.x),lv(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ie().fromArray(r))}return this}}var tp=Object.freeze({__proto__:null,ArcCurve:LP,CatmullRomCurve3:DP,CubicBezierCurve:qy,CubicBezierCurve3:BP,EllipseCurve:Cm,LineCurve:$y,LineCurve3:VP,QuadraticBezierCurve:Ky,QuadraticBezierCurve3:HP,SplineCurve:Zy});class GP extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tp[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new tp[r.type]().fromJSON(r))}return this}}class uv extends GP{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new $y(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Ky(this.currentPoint.clone(),new ie(e,t),new ie(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new qy(this.currentPoint.clone(),new ie(e,t),new ie(i,r),new ie(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Zy(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new Cm(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Pm extends Yn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],u=new N,c=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const p=i+f/t*r;u.x=e*Math.cos(p),u.y=e*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[h]/e+1)/2,c.y=(o[h+1]/e+1)/2,l.push(c.x,c.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pm(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Mu=new N,Eu=new N,ph=new N,Tu=new gi;class WP extends Yn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Ba*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,u=[0,0,0],c=["a","b","c"],f=new Array(3),h={},p=[];for(let _=0;_<l;_+=3){o?(u[0]=o.getX(_),u[1]=o.getX(_+1),u[2]=o.getX(_+2)):(u[0]=_,u[1]=_+1,u[2]=_+2);const{a:m,b:g,c:d}=Tu;if(m.fromBufferAttribute(a,u[0]),g.fromBufferAttribute(a,u[1]),d.fromBufferAttribute(a,u[2]),Tu.getNormal(ph),f[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=f[x],C=f[v],A=Tu[c[x]],T=Tu[c[v]],P=`${y}_${C}`,E=`${C}_${y}`;E in h&&h[E]?(ph.dot(h[E].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(T.x,T.y,T.z)),h[E]=null):P in h||(h[P]={index0:u[x],index1:u[v],normal:ph.clone()})}}for(const _ in h)if(h[_]){const{index0:m,index1:g}=h[_];Mu.fromBufferAttribute(a,m),Eu.fromBufferAttribute(a,g),p.push(Mu.x,Mu.y,Mu.z),p.push(Eu.x,Eu.y,Eu.z)}this.setAttribute("position",new Zt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class np extends uv{constructor(e){super(e),this.uuid=ra(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new uv().fromJSON(r))}return this}}const XP={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Qy(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,f,h,p;if(i&&(s=KP(n,e,s,t)),n.length>80*t){a=u=n[0],l=c=n[1];for(let _=t;_<r;_+=t)f=n[_],h=n[_+1],f<a&&(a=f),h<l&&(l=h),f>u&&(u=f),h>c&&(c=h);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return hl(s,o,t,a,l,p,0),o}};function Qy(n,e,t,i,r){let s,o;if(r===ab(n,e,t,i)>0)for(s=e;s<t;s+=i)o=cv(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=cv(s,n[s],n[s+1],o);return o&&rf(o,o.next)&&(pl(o),o=o.next),o}function Ls(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(rf(t,t.next)||vt(t.prev,t,t.next)===0)){if(pl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function hl(n,e,t,i,r,s,o){if(!n)return;!o&&s&&tb(n,i,r,s);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,s?YP(n,i,r,s):jP(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(u.i/t|0),pl(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=qP(Ls(n),e,t),hl(n,e,t,i,r,s,2)):o===2&&$P(n,e,t,i,r,s):hl(Ls(n),e,t,i,r,s,1);break}}}function jP(n){const e=n.prev,t=n,i=n.next;if(vt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,f=a<l?a<u?a:u:l<u?l:u,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let _=i.next;for(;_!==e;){if(_.x>=c&&_.x<=h&&_.y>=f&&_.y<=p&&So(r,a,s,l,o,u,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function YP(n,e,t,i){const r=n.prev,s=n,o=n.next;if(vt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,h=o.y,p=a<l?a<u?a:u:l<u?l:u,_=c<f?c<h?c:h:f<h?f:h,m=a>l?a>u?a:u:l>u?l:u,g=c>f?c>h?c:h:f>h?f:h,d=ip(p,_,e,t,i),x=ip(m,g,e,t,i);let v=n.prevZ,y=n.nextZ;for(;v&&v.z>=d&&y&&y.z<=x;){if(v.x>=p&&v.x<=m&&v.y>=_&&v.y<=g&&v!==r&&v!==o&&So(a,c,l,f,u,h,v.x,v.y)&&vt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=m&&y.y>=_&&y.y<=g&&y!==r&&y!==o&&So(a,c,l,f,u,h,y.x,y.y)&&vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=m&&v.y>=_&&v.y<=g&&v!==r&&v!==o&&So(a,c,l,f,u,h,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=m&&y.y>=_&&y.y<=g&&y!==r&&y!==o&&So(a,c,l,f,u,h,y.x,y.y)&&vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function qP(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!rf(r,s)&&Jy(r,i,i.next,s)&&dl(r,s)&&dl(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),pl(i),pl(i.next),i=n=s),i=i.next}while(i!==n);return Ls(i)}function $P(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rb(o,a)){let l=eS(o,a);o=Ls(o,o.next),l=Ls(l,l.next),hl(o,e,t,i,r,s,0),hl(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function KP(n,e,t,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=Qy(n,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(ib(u));for(r.sort(ZP),s=0;s<r.length;s++)t=QP(r[s],t);return t}function ZP(n,e){return n.x-e.x}function QP(n,e){const t=JP(n,e);if(!t)return e;const i=eS(t,n);return Ls(i,i.next),Ls(t,t.next)}function JP(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&So(o<u?s:i,o,l,u,o<u?i:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),dl(t,n)&&(f<c||f===c&&(t.x>r.x||t.x===r.x&&eb(r,t)))&&(r=t,c=f)),t=t.next;while(t!==a);return r}function eb(n,e){return vt(n.prev,n,e.prev)<0&&vt(e.next,n,n.next)<0}function tb(n,e,t,i){let r=n;do r.z===0&&(r.z=ip(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,nb(r)}function nb(n){let e,t,i,r,s,o,a,l,u=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,u*=2}while(o>1);return n}function ip(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ib(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function So(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function rb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!sb(n,e)&&(dl(n,e)&&dl(e,n)&&ob(n,e)&&(vt(n.prev,n,e.prev)||vt(n,e.prev,e))||rf(n,e)&&vt(n.prev,n,n.next)>0&&vt(e.prev,e,e.next)>0)}function vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function rf(n,e){return n.x===e.x&&n.y===e.y}function Jy(n,e,t,i){const r=Au(vt(n,e,t)),s=Au(vt(n,e,i)),o=Au(vt(t,i,n)),a=Au(vt(t,i,e));return!!(r!==s&&o!==a||r===0&&wu(n,t,e)||s===0&&wu(n,i,e)||o===0&&wu(t,n,i)||a===0&&wu(t,e,i))}function wu(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Au(n){return n>0?1:n<0?-1:0}function sb(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Jy(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function dl(n,e){return vt(n.prev,n,n.next)<0?vt(n,e,n.next)>=0&&vt(n,n.prev,e)>=0:vt(n,e,n.prev)<0||vt(n,n.next,e)<0}function ob(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function eS(n,e){const t=new rp(n.i,n.x,n.y),i=new rp(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function cv(n,e,t,i){const r=new rp(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function pl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function rp(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ab(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Ga{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ga.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];fv(e),hv(i,e);let o=e.length;t.forEach(fv);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,hv(i,t[l]);const a=XP.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function fv(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function hv(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Rc extends Yn{constructor(e=new np([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new Zt(r,3)),this.setAttribute("uv",new Zt(s,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:lb;let v,y=!1,C,A,T,P;d&&(v=d.getSpacedPoints(c),y=!0,h=!1,C=d.computeFrenetFrames(c,!1),A=new N,T=new N,P=new N),h||(g=0,p=0,_=0,m=0);const E=a.extractPoints(u);let S=E.shape;const D=E.holes;if(!Ga.isClockWise(S)){S=S.reverse();for(let b=0,ce=D.length;b<ce;b++){const se=D[b];Ga.isClockWise(se)&&(D[b]=se.reverse())}}const O=Ga.triangulateShape(S,D),W=S;for(let b=0,ce=D.length;b<ce;b++){const se=D[b];S=S.concat(se)}function q(b,ce,se){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),b.clone().addScaledVector(ce,se)}const z=S.length,j=O.length;function I(b,ce,se){let pe,Z,be;const me=b.x-ce.x,Me=b.y-ce.y,L=se.x-b.x,w=se.y-b.y,H=me*me+Me*Me,ne=me*w-Me*L;if(Math.abs(ne)>Number.EPSILON){const ee=Math.sqrt(H),J=Math.sqrt(L*L+w*w),Ce=ce.x-Me/ee,de=ce.y+me/ee,xe=se.x-w/J,Be=se.y+L/J,ue=((xe-Ce)*w-(Be-de)*L)/(me*w-Me*L);pe=Ce+me*ue-b.x,Z=de+Me*ue-b.y;const ve=pe*pe+Z*Z;if(ve<=2)return new ie(pe,Z);be=Math.sqrt(ve/2)}else{let ee=!1;me>Number.EPSILON?L>Number.EPSILON&&(ee=!0):me<-Number.EPSILON?L<-Number.EPSILON&&(ee=!0):Math.sign(Me)===Math.sign(w)&&(ee=!0),ee?(pe=-Me,Z=me,be=Math.sqrt(H)):(pe=me,Z=Me,be=Math.sqrt(H/2))}return new ie(pe/be,Z/be)}const K=[];for(let b=0,ce=W.length,se=ce-1,pe=b+1;b<ce;b++,se++,pe++)se===ce&&(se=0),pe===ce&&(pe=0),K[b]=I(W[b],W[se],W[pe]);const Q=[];let re,Se=K.concat();for(let b=0,ce=D.length;b<ce;b++){const se=D[b];re=[];for(let pe=0,Z=se.length,be=Z-1,me=pe+1;pe<Z;pe++,be++,me++)be===Z&&(be=0),me===Z&&(me=0),re[pe]=I(se[pe],se[be],se[me]);Q.push(re),Se=Se.concat(re)}for(let b=0;b<g;b++){const ce=b/g,se=p*Math.cos(ce*Math.PI/2),pe=_*Math.sin(ce*Math.PI/2)+m;for(let Z=0,be=W.length;Z<be;Z++){const me=q(W[Z],K[Z],pe);he(me.x,me.y,-se)}for(let Z=0,be=D.length;Z<be;Z++){const me=D[Z];re=Q[Z];for(let Me=0,L=me.length;Me<L;Me++){const w=q(me[Me],re[Me],pe);he(w.x,w.y,-se)}}}const Ge=_+m;for(let b=0;b<z;b++){const ce=h?q(S[b],Se[b],Ge):S[b];y?(T.copy(C.normals[0]).multiplyScalar(ce.x),A.copy(C.binormals[0]).multiplyScalar(ce.y),P.copy(v[0]).add(T).add(A),he(P.x,P.y,P.z)):he(ce.x,ce.y,0)}for(let b=1;b<=c;b++)for(let ce=0;ce<z;ce++){const se=h?q(S[ce],Se[ce],Ge):S[ce];y?(T.copy(C.normals[b]).multiplyScalar(se.x),A.copy(C.binormals[b]).multiplyScalar(se.y),P.copy(v[b]).add(T).add(A),he(P.x,P.y,P.z)):he(se.x,se.y,f/c*b)}for(let b=g-1;b>=0;b--){const ce=b/g,se=p*Math.cos(ce*Math.PI/2),pe=_*Math.sin(ce*Math.PI/2)+m;for(let Z=0,be=W.length;Z<be;Z++){const me=q(W[Z],K[Z],pe);he(me.x,me.y,f+se)}for(let Z=0,be=D.length;Z<be;Z++){const me=D[Z];re=Q[Z];for(let Me=0,L=me.length;Me<L;Me++){const w=q(me[Me],re[Me],pe);y?he(w.x,w.y+v[c-1].y,v[c-1].x+se):he(w.x,w.y,f+se)}}}Y(),te();function Y(){const b=r.length/3;if(h){let ce=0,se=z*ce;for(let pe=0;pe<j;pe++){const Z=O[pe];Ne(Z[2]+se,Z[1]+se,Z[0]+se)}ce=c+g*2,se=z*ce;for(let pe=0;pe<j;pe++){const Z=O[pe];Ne(Z[0]+se,Z[1]+se,Z[2]+se)}}else{for(let ce=0;ce<j;ce++){const se=O[ce];Ne(se[2],se[1],se[0])}for(let ce=0;ce<j;ce++){const se=O[ce];Ne(se[0]+z*c,se[1]+z*c,se[2]+z*c)}}i.addGroup(b,r.length/3-b,0)}function te(){const b=r.length/3;let ce=0;_e(W,ce),ce+=W.length;for(let se=0,pe=D.length;se<pe;se++){const Z=D[se];_e(Z,ce),ce+=Z.length}i.addGroup(b,r.length/3-b,1)}function _e(b,ce){let se=b.length;for(;--se>=0;){const pe=se;let Z=se-1;Z<0&&(Z=b.length-1);for(let be=0,me=c+g*2;be<me;be++){const Me=z*be,L=z*(be+1),w=ce+pe+Me,H=ce+Z+Me,ne=ce+Z+L,ee=ce+pe+L;He(w,H,ne,ee)}}}function he(b,ce,se){l.push(b),l.push(ce),l.push(se)}function Ne(b,ce,se){De(b),De(ce),De(se);const pe=r.length/3,Z=x.generateTopUV(i,r,pe-3,pe-2,pe-1);qe(Z[0]),qe(Z[1]),qe(Z[2])}function He(b,ce,se,pe){De(b),De(ce),De(pe),De(ce),De(se),De(pe);const Z=r.length/3,be=x.generateSideWallUV(i,r,Z-6,Z-3,Z-2,Z-1);qe(be[0]),qe(be[1]),qe(be[3]),qe(be[1]),qe(be[2]),qe(be[3])}function De(b){r.push(l[b*3+0]),r.push(l[b*3+1]),r.push(l[b*3+2])}function qe(b){s.push(b.x),s.push(b.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ub(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new tp[r.type]().fromJSON(r)),new Rc(i,e.options)}}const lb={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new ie(s,o),new ie(a,l),new ie(u,c)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[i*3],c=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],_=e[r*3+2],m=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new ie(o,1-l),new ie(u,1-f),new ie(h,1-_),new ie(m,1-d)]:[new ie(a,1-l),new ie(c,1-f),new ie(p,1-_),new ie(g,1-d)]}};function ub(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class cb extends Us{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class fb extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hb extends Us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ry,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class db extends hb{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bm extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class pb extends bm{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const mh=new ct,dv=new N,pv=new N;class mb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Em,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;dv.setFromMatrixPosition(e.matrixWorld),t.position.copy(dv),pv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pv),t.updateMatrixWorld(),mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gb extends mb{constructor(){super(new Tm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gh extends bm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new gb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _b extends bm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=mv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function mv(){return(typeof performance>"u"?Date:performance).now()}class gv{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dm);const _v={type:"change"},_h={type:"start"},vv={type:"end"},Cu=new Mm,xv=new yr,xb=Math.cos(70*vT.DEG2RAD);class yb extends Is{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zs.ROTATE,MIDDLE:zs.DOLLY,RIGHT:zs.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",xe),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(_v),i.update(),s=r.NONE},this.update=function(){const M=new N,k=new bs().setFromUnitVectors(e.up,new N(0,1,0)),V=k.clone().invert(),$=new N,oe=new bs,Re=new N,Fe=2*Math.PI;return function(It=null){const Ke=i.object.position;M.copy(Ke).sub(i.target),M.applyQuaternion(k),a.setFromVector3(M),i.autoRotate&&s===r.NONE&&B(S(It)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ut=i.minAzimuthAngle,Pt=i.maxAzimuthAngle;isFinite(Ut)&&isFinite(Pt)&&(Ut<-Math.PI?Ut+=Fe:Ut>Math.PI&&(Ut-=Fe),Pt<-Math.PI?Pt+=Fe:Pt>Math.PI&&(Pt-=Fe),Ut<=Pt?a.theta=Math.max(Ut,Math.min(Pt,a.theta)):a.theta=a.theta>(Ut+Pt)/2?Math.max(Ut,a.theta):Math.min(Pt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let ur=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=Q(a.radius);else{const Yt=a.radius;a.radius=Q(a.radius*u),ur=Yt!=a.radius}if(M.setFromSpherical(a),M.applyQuaternion(V),Ke.copy(i.target).add(M),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),i.zoomToCursor&&A){let Yt=null;if(i.object.isPerspectiveCamera){const Oi=M.length();Yt=Q(Oi*u);const Zr=Oi-Yt;i.object.position.addScaledVector(y,Zr),i.object.updateMatrixWorld(),ur=!!Zr}else if(i.object.isOrthographicCamera){const Oi=new N(C.x,C.y,0);Oi.unproject(i.object);const Zr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),ur=Zr!==i.object.zoom;const aa=new N(C.x,C.y,0);aa.unproject(i.object),i.object.position.sub(aa).add(Oi),i.object.updateMatrixWorld(),Yt=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Yt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Yt).add(i.object.position):(Cu.origin.copy(i.object.position),Cu.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Cu.direction))<xb?e.lookAt(i.target):(xv.setFromNormalAndCoplanarPoint(i.object.up,i.target),Cu.intersectPlane(xv,i.target))))}else if(i.object.isOrthographicCamera){const Yt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),Yt!==i.object.zoom&&(i.object.updateProjectionMatrix(),ur=!0)}return u=1,A=!1,ur||$.distanceToSquared(i.object.position)>o||8*(1-oe.dot(i.object.quaternion))>o||Re.distanceToSquared(i.target)>o?(i.dispatchEvent(_v),$.copy(i.object.position),oe.copy(i.object.quaternion),Re.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ve),i.domElement.removeEventListener("pointerdown",Me),i.domElement.removeEventListener("pointercancel",w),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",w),i.domElement.getRootNode().removeEventListener("keydown",Ce,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",xe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new gv,l=new gv;let u=1;const c=new N,f=new ie,h=new ie,p=new ie,_=new ie,m=new ie,g=new ie,d=new ie,x=new ie,v=new ie,y=new N,C=new ie;let A=!1;const T=[],P={};let E=!1;function S(M){return M!==null?2*Math.PI/60*i.autoRotateSpeed*M:2*Math.PI/60/60*i.autoRotateSpeed}function D(M){const k=Math.abs(M*.01);return Math.pow(.95,i.zoomSpeed*k)}function B(M){l.theta-=M}function O(M){l.phi-=M}const W=function(){const M=new N;return function(V,$){M.setFromMatrixColumn($,0),M.multiplyScalar(-V),c.add(M)}}(),q=function(){const M=new N;return function(V,$){i.screenSpacePanning===!0?M.setFromMatrixColumn($,1):(M.setFromMatrixColumn($,0),M.crossVectors(i.object.up,M)),M.multiplyScalar(V),c.add(M)}}(),z=function(){const M=new N;return function(V,$){const oe=i.domElement;if(i.object.isPerspectiveCamera){const Re=i.object.position;M.copy(Re).sub(i.target);let Fe=M.length();Fe*=Math.tan(i.object.fov/2*Math.PI/180),W(2*V*Fe/oe.clientHeight,i.object.matrix),q(2*$*Fe/oe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(W(V*(i.object.right-i.object.left)/i.object.zoom/oe.clientWidth,i.object.matrix),q($*(i.object.top-i.object.bottom)/i.object.zoom/oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function j(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(M,k){if(!i.zoomToCursor)return;A=!0;const V=i.domElement.getBoundingClientRect(),$=M-V.left,oe=k-V.top,Re=V.width,Fe=V.height;C.x=$/Re*2-1,C.y=-(oe/Fe)*2+1,y.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(M){return Math.max(i.minDistance,Math.min(i.maxDistance,M))}function re(M){f.set(M.clientX,M.clientY)}function Se(M){K(M.clientX,M.clientX),d.set(M.clientX,M.clientY)}function Ge(M){_.set(M.clientX,M.clientY)}function Y(M){h.set(M.clientX,M.clientY),p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const k=i.domElement;B(2*Math.PI*p.x/k.clientHeight),O(2*Math.PI*p.y/k.clientHeight),f.copy(h),i.update()}function te(M){x.set(M.clientX,M.clientY),v.subVectors(x,d),v.y>0?j(D(v.y)):v.y<0&&I(D(v.y)),d.copy(x),i.update()}function _e(M){m.set(M.clientX,M.clientY),g.subVectors(m,_).multiplyScalar(i.panSpeed),z(g.x,g.y),_.copy(m),i.update()}function he(M){K(M.clientX,M.clientY),M.deltaY<0?I(D(M.deltaY)):M.deltaY>0&&j(D(M.deltaY)),i.update()}function Ne(M){let k=!1;switch(M.code){case i.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),k=!0;break;case i.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),k=!0;break;case i.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),k=!0;break;case i.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),k=!0;break}k&&(M.preventDefault(),i.update())}function He(M){if(T.length===1)f.set(M.pageX,M.pageY);else{const k=Ve(M),V=.5*(M.pageX+k.x),$=.5*(M.pageY+k.y);f.set(V,$)}}function De(M){if(T.length===1)_.set(M.pageX,M.pageY);else{const k=Ve(M),V=.5*(M.pageX+k.x),$=.5*(M.pageY+k.y);_.set(V,$)}}function qe(M){const k=Ve(M),V=M.pageX-k.x,$=M.pageY-k.y,oe=Math.sqrt(V*V+$*$);d.set(0,oe)}function b(M){i.enableZoom&&qe(M),i.enablePan&&De(M)}function ce(M){i.enableZoom&&qe(M),i.enableRotate&&He(M)}function se(M){if(T.length==1)h.set(M.pageX,M.pageY);else{const V=Ve(M),$=.5*(M.pageX+V.x),oe=.5*(M.pageY+V.y);h.set($,oe)}p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const k=i.domElement;B(2*Math.PI*p.x/k.clientHeight),O(2*Math.PI*p.y/k.clientHeight),f.copy(h)}function pe(M){if(T.length===1)m.set(M.pageX,M.pageY);else{const k=Ve(M),V=.5*(M.pageX+k.x),$=.5*(M.pageY+k.y);m.set(V,$)}g.subVectors(m,_).multiplyScalar(i.panSpeed),z(g.x,g.y),_.copy(m)}function Z(M){const k=Ve(M),V=M.pageX-k.x,$=M.pageY-k.y,oe=Math.sqrt(V*V+$*$);x.set(0,oe),v.set(0,Math.pow(x.y/d.y,i.zoomSpeed)),j(v.y),d.copy(x);const Re=(M.pageX+k.x)*.5,Fe=(M.pageY+k.y)*.5;K(Re,Fe)}function be(M){i.enableZoom&&Z(M),i.enablePan&&pe(M)}function me(M){i.enableZoom&&Z(M),i.enableRotate&&se(M)}function Me(M){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(M.pointerId),i.domElement.addEventListener("pointermove",L),i.domElement.addEventListener("pointerup",w)),!Te(M)&&(Ye(M),M.pointerType==="touch"?Be(M):H(M)))}function L(M){i.enabled!==!1&&(M.pointerType==="touch"?ue(M):ne(M))}function w(M){switch(Ie(M),T.length){case 0:i.domElement.releasePointerCapture(M.pointerId),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",w),i.dispatchEvent(vv),s=r.NONE;break;case 1:const k=T[0],V=P[k];Be({pointerId:k,pageX:V.x,pageY:V.y});break}}function H(M){let k;switch(M.button){case 0:k=i.mouseButtons.LEFT;break;case 1:k=i.mouseButtons.MIDDLE;break;case 2:k=i.mouseButtons.RIGHT;break;default:k=-1}switch(k){case zs.DOLLY:if(i.enableZoom===!1)return;Se(M),s=r.DOLLY;break;case zs.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enablePan===!1)return;Ge(M),s=r.PAN}else{if(i.enableRotate===!1)return;re(M),s=r.ROTATE}break;case zs.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enableRotate===!1)return;re(M),s=r.ROTATE}else{if(i.enablePan===!1)return;Ge(M),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(_h)}function ne(M){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Y(M);break;case r.DOLLY:if(i.enableZoom===!1)return;te(M);break;case r.PAN:if(i.enablePan===!1)return;_e(M);break}}function ee(M){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(M.preventDefault(),i.dispatchEvent(_h),he(J(M)),i.dispatchEvent(vv))}function J(M){const k=M.deltaMode,V={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(k){case 1:V.deltaY*=16;break;case 2:V.deltaY*=100;break}return M.ctrlKey&&!E&&(V.deltaY*=10),V}function Ce(M){M.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(M){M.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",de,{passive:!0,capture:!0}))}function xe(M){i.enabled===!1||i.enablePan===!1||Ne(M)}function Be(M){switch(Oe(M),T.length){case 1:switch(i.touches.ONE){case Bs.ROTATE:if(i.enableRotate===!1)return;He(M),s=r.TOUCH_ROTATE;break;case Bs.PAN:if(i.enablePan===!1)return;De(M),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Bs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;b(M),s=r.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ce(M),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(_h)}function ue(M){switch(Oe(M),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;se(M),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;pe(M),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;be(M),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;me(M),i.update();break;default:s=r.NONE}}function ve(M){i.enabled!==!1&&M.preventDefault()}function Ye(M){T.push(M.pointerId)}function Ie(M){delete P[M.pointerId];for(let k=0;k<T.length;k++)if(T[k]==M.pointerId){T.splice(k,1);return}}function Te(M){for(let k=0;k<T.length;k++)if(T[k]==M.pointerId)return!0;return!1}function Oe(M){let k=P[M.pointerId];k===void 0&&(k=new ie,P[M.pointerId]=k),k.set(M.pageX,M.pageY)}function Ve(M){const k=M.pointerId===T[0]?T[1]:T[0];return P[k]}i.domElement.addEventListener("contextmenu",ve),i.domElement.addEventListener("pointerdown",Me),i.domElement.addEventListener("pointercancel",w),i.domElement.addEventListener("wheel",ee,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Ce,{passive:!0,capture:!0}),this.update()}}const tS={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class oa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Sb=new Tm(-1,1,1,-1,0,1);class Mb extends Yn{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const Eb=new Mb;class Lm{constructor(e){this._mesh=new Fn(Eb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Tb extends oa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof fn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fl.clone(e.uniforms),this.material=new fn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Lm(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class yv extends oa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class wb extends oa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ab{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ie);this._width=i.width,this._height=i.height,t=new yi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:er}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tb(tS),this.copyPass.material.blending=Ji,this.clock=new vb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}yv!==void 0&&(o instanceof yv?i=!0:o instanceof wb&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Cb extends oa{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Rb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class $o extends oa{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new yi(s,o,{type:er}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new yi(s,o,{type:er});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new yi(s,o,{type:er});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=Rb;this.highPassUniforms=fl.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new fn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ie(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=tS;this.copyUniforms=fl.clone(c.uniforms),this.blendMaterial=new fn({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:yd,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ze,this.oldClearAlpha=1,this.basic=new tf,this.fsQuad=new Lm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ie(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=$o.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=$o.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new fn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new fn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}$o.BlurDirectionX=new ie(1,0);$o.BlurDirectionY=new ie(0,1);const Pb={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class bb extends oa{constructor(){super();const e=Pb;this.uniforms=fl.clone(e.uniforms),this.material=new fb({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Lm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hy?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dy?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===py?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===pm?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===my?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gy&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Sv extends zt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ie(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const ro=new N,Mv=new ct,Ev=new ct,Tv=new N,wv=new N;class Lb{constructor(e={}){const t=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(_,m){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),Mv.copy(m.matrixWorldInverse),Ev.multiplyMatrices(m.projectionMatrix,Mv),c(_,_,m),p(_)},this.setSize=function(_,m){i=_,r=m,s=i/2,o=r/2,l.style.width=_+"px",l.style.height=m+"px"};function u(_){_.isCSS2DObject&&(_.element.style.display="none");for(let m=0,g=_.children.length;m<g;m++)u(_.children[m])}function c(_,m,g){if(_.visible===!1){u(_);return}if(_.isCSS2DObject){ro.setFromMatrixPosition(_.matrixWorld),ro.applyMatrix4(Ev);const d=ro.z>=-1&&ro.z<=1&&_.layers.test(g.layers)===!0,x=_.element;x.style.display=d===!0?"":"none",d===!0&&(_.onBeforeRender(t,m,g),x.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(ro.x*s+s)+"px,"+(-ro.y*o+o)+"px)",x.parentNode!==l&&l.appendChild(x),_.onAfterRender(t,m,g));const v={distanceToCameraSquared:f(g,_)};a.objects.set(_,v)}for(let d=0,x=_.children.length;d<x;d++)c(_.children[d],m,g)}function f(_,m){return Tv.setFromMatrixPosition(_.matrixWorld),wv.setFromMatrixPosition(m.matrixWorld),Tv.distanceToSquared(wv)}function h(_){const m=[];return _.traverseVisible(function(g){g.isCSS2DObject&&m.push(g)}),m}function p(_){const m=h(_).sort(function(d,x){if(d.renderOrder!==x.renderOrder)return x.renderOrder-d.renderOrder;const v=a.objects.get(d).distanceToCameraSquared,y=a.objects.get(x).distanceToCameraSquared;return v-y}),g=m.length;for(let d=0,x=m.length;d<x;d++)m[d].element.style.zIndex=g-d}}}function Wi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function nS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ml={duration:.5,overwrite:!1,delay:0},Dm,Qt,dt,ni=1e8,st=1/ni,sp=Math.PI*2,Db=sp/4,Nb=0,iS=Math.sqrt,Ib=Math.cos,Ub=Math.sin,jt=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},or=function(e){return typeof e=="number"},Nm=function(e){return typeof e>"u"},Ii=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},Im=function(){return typeof window<"u"},Ru=function(e){return wt(e)||jt(e)},rS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,Ob=/random\([^)]+\)/g,Fb=/,\s*/g,Av=/(?:-?\.?\d|\.)+/gi,sS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,oS=/[+-]=-?[.\d]+/,kb=/[^,'"\[\]\s]+/gi,zb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_t,wi,op,Um,Gn={},Pc={},aS,lS=function(e){return(Pc=Ko(e,Gn))&&Rn},Om=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},gl=function(e,t){return!t&&console.warn(e)},uS=function(e,t){return e&&(Gn[e]=t)&&Pc&&(Pc[e]=t)||Gn},_l=function(){return 0},Bb={suppressEvents:!0,isStart:!0,kill:!1},Yu={suppressEvents:!0,kill:!1},Vb={suppressEvents:!0},Fm={},kr=[],ap={},cS,In={},xh={},Cv=30,qu=[],km="",zm=function(e){var t=e[0],i,r;if(Ii(t)||wt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=qu.length;r--&&!qu[r].targetTest(t););i=qu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new DS(e[r],i)))||e.splice(r,1);return e},ys=function(e){return e._gsap||zm(ii(e))[0]._gsap},fS=function(e,t,i){return(i=e[t])&&wt(i)?e[t]():Nm(i)&&e.getAttribute&&e.getAttribute(t)||i},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},pt=function(e){return Math.round(e*1e7)/1e7||0},No=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Hb=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},bc=function(){var e=kr.length,t=kr.slice(0),i,r;for(ap={},kr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Bm=function(e){return!!(e._initted||e._startAt||e.add)},hS=function(e,t,i,r){kr.length&&!Qt&&bc(),e.render(t,i,!!(Qt&&t<0&&Bm(e))),kr.length&&!Qt&&bc()},dS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(kb).length<2?t:jt(e)?e.trim():e},pS=function(e){return e},Wn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Gb=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ko=function(e,t){for(var i in t)e[i]=t[i];return e},Rv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ii(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Lc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Wa=function(e){var t=e.parent||_t,i=e.keyframes?Gb(an(e.keyframes)):Wn;if(Tn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Wb=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},mS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},sf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Gr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ss=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Xb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},lp=function(e,t,i,r){return e._startAt&&(Qt?e._startAt.revert(Yu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},jb=function n(e){return!e||e._ts&&n(e.parent)},Pv=function(e){return e._repeat?Zo(e._tTime,e=e.duration()+e._rDelay)*e:0},Zo=function(e,t){var i=Math.floor(e=pt(e/t));return e&&i===e?i-1:i},Dc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},of=function(e){return e._end=pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},af=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=pt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),of(e),i._dirty||Ss(i,e)),e},gS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Dc(e.rawTime(),t),(!t._dur||Ll(0,t.totalDuration(),i)-t._tTime>st)&&t.render(i,!0)),Ss(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-st}},Ri=function(e,t,i,r){return t.parent&&Gr(t),t._start=pt((or(i)?i:i||e!==_t?Kn(e,i,t):e._time)+t._delay),t._end=pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mS(e,t,"_first","_last",e._sort?"_start":0),up(t)||(e._recent=t),r||gS(e,t),e._ts<0&&af(e,e._tTime),e},_S=function(e,t){return(Gn.ScrollTrigger||Om("scrollTrigger",t))&&Gn.ScrollTrigger.create(t,e)},vS=function(e,t,i,r,s){if(Hm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&cS!==Un.frame)return kr.push(e),e._lazy=[s,r],1},Yb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},up=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},qb=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Yb(e)&&!(!e._initted&&up(e))||(e._ts<0||e._dp._ts<0)&&!up(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Ll(0,e._tDur,t),c=Zo(l,a),e._yoyo&&c&1&&(o=1-o),c!==Zo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Qt||r||e._zTime===st||!t&&e._zTime){if(!e._initted&&vS(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?st:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&lp(e,t,i,!0),e._onUpdate&&!i&&kn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Gr(e,1),!i&&!Qt&&(kn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$b=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Qo=function(e,t,i,r){var s=e._repeat,o=pt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:pt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&af(e,e._tTime=e._tDur*a),e.parent&&of(e),i||Ss(e.parent,e),e},bv=function(e){return e instanceof _n?Ss(e):Qo(e,e._dur)},Kb={_start:0,endTime:_l,totalDuration:_l},Kn=function n(e,t,i){var r=e.labels,s=e._recent||Kb,o=e.duration()>=ni?s.endTime(!1):e._dur,a,l,u;return jt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(an(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Xa=function(e,t,i){var r=or(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;o.immediateRender=Tn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Dt(t[0],o,t[s+1])},Kr=function(e,t){return e||e===0?t(e):t},Ll=function(e,t,i){return i<e?e:i>t?t:i},on=function(e,t){return!jt(e)||!(t=zb.exec(e))?"":t[1]},Zb=function(e,t,i){return Kr(i,function(r){return Ll(e,t,r)})},cp=[].slice,xS=function(e,t){return e&&Ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ii(e[0]))&&!e.nodeType&&e!==wi},Qb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return jt(r)&&!t||xS(r,1)?(s=i).push.apply(s,ii(r)):i.push(r)})||i},ii=function(e,t,i){return dt&&!t&&dt.selector?dt.selector(e):jt(e)&&!i&&(op||!Jo())?cp.call((t||Um).querySelectorAll(e),0):an(e)?Qb(e,i):xS(e)?cp.call(e,0):e?[e]:[]},fp=function(e){return e=ii(e)[0]||gl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ii(t,i.querySelectorAll?i:i===e?gl("Invalid scope")||Um.createElement("div"):e)}},yS=function(e){return e.sort(function(){return .5-Math.random()})},SS=function(e){if(wt(e))return e;var t=Ii(e)?e:{each:e},i=Ms(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return jt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,_){var m=(_||t).length,g=o[m],d,x,v,y,C,A,T,P,E;if(!g){if(E=t.grid==="auto"?0:(t.grid||[1,ni])[1],!E){for(T=-ni;T<(T=_[E++].getBoundingClientRect().left)&&E<m;);E<m&&E--}for(g=o[m]=[],d=l?Math.min(E,m)*c-.5:r%E,x=E===ni?0:l?m*f/E-.5:r/E|0,T=0,P=ni,A=0;A<m;A++)v=A%E-d,y=x-(A/E|0),g[A]=C=u?Math.abs(u==="y"?y:v):iS(v*v+y*y),C>T&&(T=C),C<P&&(P=C);r==="random"&&yS(g),g.max=T-P,g.min=P,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(E>m?m-1:u?u==="y"?m/E:E:Math.max(E,m/E))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=on(t.amount||t.each)||0,i=i&&m<0?f2(i):i}return m=(g[h]-g.min)/g.max||0,pt(g.b+(i?i(m):m)*g.v)+g.u}},hp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=pt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(or(i)?0:on(i))}},MS=function(e,t){var i=an(e),r,s;return!i&&Ii(e)&&(r=i=e.radius||ni,e.values?(e=ii(e.values),(s=!or(e[0]))&&(r*=r)):e=hp(e.increment)),Kr(t,i?wt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ni,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||or(o)?c:c+on(o)}:hp(e))},ES=function(e,t,i,r){return Kr(an(e)?!t:i===!0?!!(i=0):!r,function(){return an(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Jb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},e2=function(e,t){return function(i){return e(parseFloat(i))+(t||on(i))}},t2=function(e,t,i){return wS(e,t,0,1,i)},TS=function(e,t,i){return Kr(i,function(r){return e[~~t(r)]})},n2=function n(e,t,i){var r=t-e;return an(e)?TS(e,n(0,e.length),t):Kr(i,function(s){return(r+(s-e)%r)%r+e})},i2=function n(e,t,i){var r=t-e,s=r*2;return an(e)?TS(e,n(0,e.length-1),t):Kr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},vl=function(e){return e.replace(Ob,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Fb);return ES(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},wS=function(e,t,i,r,s){var o=t-e,a=r-i;return Kr(s,function(l){return i+((l-e)/o*a||0)})},r2=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=jt(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(an(e)&&!an(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(_){_*=f;var m=Math.min(h,~~_);return c[m](_-m)},i=t}else r||(e=Ko(an(e)?[]:{},e));if(!c){for(l in t)Vm.call(a,e,l,"get",t[l]);s=function(_){return Xm(_,a)||(o?e.p:e)}}}return Kr(i,s)},Lv=function(e,t,i){var r=e.labels,s=ni,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},kn=function(e,t,i){var r=e.vars,s=r[t],o=dt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&kr.length&&bc(),a&&(dt=a),c=l?s.apply(u,l):s.call(u),dt=o,c},Pa=function(e){return Gr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qt),e.progress()<1&&kn(e,"onInterrupt"),e},Eo,AS=[],CS=function(e){if(e)if(e=!e.name&&e.default||e,Im()||e.headless){var t=e.name,i=wt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:_l,render:Xm,add:Vm,kill:S2,modifier:y2,rawVars:0},o={targetTest:0,get:0,getSetter:Wm,aliases:{},register:0};if(Jo(),e!==r){if(In[t])return;Wn(r,Wn(Lc(e,s),o)),Ko(r.prototype,Ko(s,Lc(e,o))),In[r.prop=t]=r,e.targetTest&&(qu.push(r),Fm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}uS(t,r),e.register&&e.register(Rn,r,An)}else AS.push(e)},rt=255,ba={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},yh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*rt+.5|0},RS=function(e,t,i){var r=e?or(e)?[e>>16,e>>8&rt,e&rt]:0:ba.black,s,o,a,l,u,c,f,h,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ba[e])r=ba[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&rt,r&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Av),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=yh(l+1/3,s,o),r[1]=yh(l,s,o),r[2]=yh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(sS),i&&r.length<4&&(r[3]=1),r}else r=e.match(Av)||ba.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/rt,o=r[1]/rt,a=r[2]/rt,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},PS=function(e){var t=[],i=[],r=-1;return e.split(zr).forEach(function(s){var o=s.match(Mo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Dv=function(e,t,i){var r="",s=(e+r).match(zr),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=RS(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=PS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(zr,"1").split(Mo),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(zr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},zr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ba)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),s2=/hsl[a]?\(/,bS=function(e){var t=e.join(" "),i;if(zr.lastIndex=0,zr.test(t))return i=s2.test(t),e[1]=Dv(e[1],i),e[0]=Dv(e[0],i,PS(e[1])),!0},xl,Un=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,_=function m(g){var d=n()-r,x=g===!0,v,y,C,A;if((d>e||d<0)&&(i+=d-t),r+=d,C=r-i,v=C-o,(v>0||x)&&(A=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=v+(v>=s?4:s-v),y=1),x||(l=u(m)),y)for(p=0;p<a.length;p++)a[p](C,h,A,g)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){aS&&(!op&&Im()&&(wi=op=window,Um=wi.document||{},Gn.gsap=Rn,(wi.gsapVersions||(wi.gsapVersions=[])).push(Rn.version),lS(Pc||wi.GreenSockGlobals||!wi.gsap&&wi||{}),AS.forEach(CS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(g){return setTimeout(g,o-f.time*1e3+1|0)},xl=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),xl=0,u=_l},lagSmoothing:function(g,d){e=g||1/0,t=Math.min(d||33,e)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,d,x){var v=d?function(y,C,A,T){g(y,C,A,T),f.remove(v)}:g;return f.remove(g),a[x?"unshift":"push"](v),Jo(),v},remove:function(g,d){~(d=a.indexOf(g))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),Jo=function(){return!xl&&Un.wake()},$e={},o2=/^[\d.\-M][\d.\-,\s]/,a2=/["']/g,l2=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(a2,"").trim():+u,r=l.substr(a+1).trim();return t},u2=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},c2=function(e){var t=(e+"").split("("),i=$e[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[l2(t[1])]:u2(e).split(",").map(dS)):$e._CE&&o2.test(e)?$e._CE("",e):i},f2=function(e){return function(t){return 1-e(1-t)}},Ms=function(e,t){return e&&(wt(e)?e:$e[e]||c2(e))||t},Os=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return wn(e,function(a){$e[a]=Gn[a]=s,$e[o=a.toLowerCase()]=i;for(var l in s)$e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[a+"."+l]=s[l]}),s},LS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Sh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/sp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Ub((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:LS(a);return s=sp/s,l.config=function(u,c){return n(e,u,c)},l},Mh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:LS(i);return r.config=function(s){return n(e,s)},r};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Os(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;Os("Elastic",Sh("in"),Sh("out"),Sh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Os("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Os("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Os("Circ",function(n){return-(iS(1-n*n)-1)});Os("Sine",function(n){return n===1?1:-Ib(n*Db)+1});Os("Back",Mh("in"),Mh("out"),Mh());$e.SteppedEase=$e.steps=Gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-st;return function(a){return((r*Ll(0,o,a)|0)+s)*i}}};ml.ease=$e["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return km+=n+","+n+"Params,"});var DS=function(e,t){this.id=Nb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fS,this.set=t?t.getSetter:Wm},yl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qo(this,+t.duration,1,1),this.data=t.data,dt&&(this._ctx=dt,dt.data.push(this)),xl||Un.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Qo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Jo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(af(this,i),!s._dp||s.parent||gS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===st||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),hS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Pv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Pv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Zo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Dc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-st?0:this._rts,this.totalTime(Ll(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),of(this),Xb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=pt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ri(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Tn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Dc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Vb);var r=Qt;return Qt=i,Bm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Qt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,bv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,bv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Kn(this,i),Tn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Tn(r)),this._dur||(this._zTime=-st),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-st)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=wt(i)?i:pS,l=function(){var c=r.then;r.then=null,s&&s(),wt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Pa(this)},n}();Wn(yl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var _n=function(n){nS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Tn(i.sortChildren),_t&&Ri(i.parent||_t,Wi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&_S(Wi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Xa(0,arguments,this),this},t.from=function(r,s,o){return Xa(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Xa(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Wa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Dt(r,s,Kn(this,o),1),this},t.call=function(r,s,o){return Ri(this,Dt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Dt(r,o,Kn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Wa(o).immediateRender=Tn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Wa(a).immediateRender=Tn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:pt(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,_,m,g,d,x,v,y,C,A,T;if(this!==_t&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,v=this._ts,d=!v,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(h=pt(c%g),c===l?(m=this._repeat,h=u):(C=pt(c/g),m=~~C,m&&m===C&&(h=u,m--),h>u&&(h=u)),C=Zo(this._tTime,g),!a&&this._tTime&&C!==m&&this._tTime-C*g-this._dur<=0&&(C=m),A&&m&1&&(h=u-h,T=1),m!==C&&!this._lock){var P=A&&C&1,E=P===(A&&m&1);if(m<C&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(T?0:pt(m*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&kn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,C=m),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,E&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=$b(this,pt(a),pt(h)),x&&(c-=h-(h=x._start))),this._tTime=c,this._time=h,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!C&&(kn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){x=0,_&&(c+=this._zTime=-st);break}}p=_}else{p=this._last;for(var S=r<0?r:h;p;){if(_=p._prev,(p._act||S<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||Qt&&Bm(p)),h!==this._time||!this._ts&&!d){x=0,_&&(c+=this._zTime=S?-st:st);break}}p=_}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-st)._zTime=h>=a?1:-1,this._ts))return this._start=y,of(this),this.render(r,s,o);this._onUpdate&&!s&&kn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Gr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(kn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(or(s)||(s=Kn(this,s,r)),!(r instanceof yl)){if(an(r))return r.forEach(function(a){return o.add(a,s)}),this;if(jt(r))return this.addLabel(r,s);if(wt(r))r=Dt.delayedCall(0,r);else return this}return this!==r?Ri(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Dt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return jt(r)?this.removeLabel(r):wt(r)?this.killTweensOf(r):(r.parent===this&&sf(this,r),r===this._recent&&(this._recent=this._last),Ss(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pt(Un.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Kn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Dt.delayedCall(0,s||_l,o);return a.data="isPause",this._hasPause=1,Ri(this,a,Kn(this,r))},t.removePause=function(r){var s=this._first;for(r=Kn(this,r);s;)s._start===r&&s.data==="isPause"&&Gr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ar!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ii(r),l=this._first,u=or(s),c;l;)l instanceof Dt?Hb(l._targets,a)&&(u?(!Ar||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Kn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,_=Dt.to(o,Wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||st,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==g&&Qo(_,g,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Wn({startAt:{time:Kn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Lv(this,Kn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Lv(this,Kn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=pt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Ss(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ss(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ni,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ri(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=pt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Qo(o,o===_t&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(_t._ts&&(hS(_t,Dc(r,_t)),cS=Un.frame),Un.frame>=Cv){Cv+=Vn.autoSleep||120;var s=_t._first;if((!s||!s._ts)&&Vn.autoSleep&&Un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Un.sleep()}}},e}(yl);Wn(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var h2=function(e,t,i,r,s,o,a){var l=new An(this._pt,e,t,0,1,kS,null,s),u=0,c=0,f,h,p,_,m,g,d,x;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=vl(r)),o&&(x=[i,r],o(x,e,t),i=x[0],r=x[1]),h=i.match(vh)||[];f=vh.exec(r);)_=f[0],m=r.substring(u,f.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),_!==h[c++]&&(g=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:g,c:_.charAt(1)==="="?No(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},u=vh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(oS.test(r)||d)&&(l.e=0),this._pt=l,l},Vm=function(e,t,i,r,s,o,a,l,u,c){wt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:wt(f)?u?e[t.indexOf("set")||!wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=wt(f)?u?_2:OS:Gm,_;if(jt(r)&&(~r.indexOf("random(")&&(r=vl(r)),r.charAt(1)==="="&&(_=No(h,r)+(on(h)||0),(_||_===0)&&(r=_))),!c||h!==r||dp)return!isNaN(h*r)&&r!==""?(_=new An(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?x2:FS,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&Om(t,r),h2.call(this,e,t,h,r,p,l||Vn.stringFilter,u))},d2=function(e,t,i,r,s){if(wt(e)&&(e=ja(e,s,t,i,r)),!Ii(e)||e.style&&e.nodeType||an(e)||rS(e))return jt(e)?ja(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=ja(e[a],s,t,i,r);return o},NS=function(e,t,i,r,s,o){var a,l,u,c;if(In[e]&&(a=new In[e]).init(s,a.rawVars?t[e]:d2(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new An(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Eo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Ar,dp,Hm=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,_=e._dur,m=e._startAt,g=e._targets,d=e.parent,x=d&&d.data==="nested"?d.vars.targets:g,v=e._overwrite==="auto"&&!Dm,y=e.timeline,C=r.easeReverse||f,A,T,P,E,S,D,B,O,W,q,z,j,I;if(y&&(!h||!s)&&(s="none"),e._ease=Ms(s,ml.ease),e._rEase=C&&(Ms(C)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||h&&!r.stagger){if(O=g[0]?ys(g[0]).harness:0,j=O&&r[O.prop],A=Lc(r,Fm),m&&(m._zTime<0&&m.progress(1),t<0&&c&&a&&!p?m.render(-1,!0):m.revert(c&&_?Yu:Bb),m._lazy=0),o){if(Gr(e._startAt=Dt.set(g,Wn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!m&&Tn(l),startAt:null,delay:0,onUpdate:u&&function(){return kn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!a&&!p)&&e._startAt.revert(Yu),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!m){if(t&&(a=!1),P=Wn({overwrite:!1,data:"isFromStart",lazy:a&&!m&&Tn(l),immediateRender:a,stagger:0,parent:d},A),j&&(P[O.prop]=j),Gr(e._startAt=Dt.set(g,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert(Yu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Tn(l)||l&&!_,T=0;T<g.length;T++){if(S=g[T],B=S._gsap||zm(g)[T]._gsap,e._ptLookup[T]=q={},ap[B.id]&&kr.length&&bc(),z=x===g?T:x.indexOf(S),O&&(W=new O).init(S,j||A,e,z,x)!==!1&&(e._pt=E=new An(e._pt,S,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(K){q[K]=E}),W.priority&&(D=1)),!O||j)for(P in A)In[P]&&(W=NS(P,A,e,z,S,x))?W.priority&&(D=1):q[P]=E=Vm.call(e,S,P,"get",A[P],z,x,0,r.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),v&&e._pt&&(Ar=e,_t.killTweensOf(S,q,e.globalTime(t)),I=!e.parent,Ar=0),e._pt&&l&&(ap[B.id]=1)}D&&zS(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!I,h&&t<=0&&y.render(ni,!0,!0)},p2=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return dp=1,e.vars[t]="+=0",Hm(e,a),dp=0,l?gl(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Ct(i)+on(f.e)),f.b&&(f.b=c.s+on(f.b))},m2=function(e,t){var i=e[0]?ys(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ko({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},g2=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(an(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ja=function(e,t,i,r,s){return wt(e)?e.call(t,i,r,s):jt(e)&&~e.indexOf("random(")?vl(e):e},IS=km+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",US={};wn(IS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return US[n]=1});var Dt=function(n){nS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Wa(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,d=r.parent||_t,x=(an(i)||rS(i)?or(i[0]):"length"in r)?[i]:ii(i),v,y,C,A,T,P,E,S;if(a._targets=x.length?zm(x):gl("GSAP target "+i+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||h||Ru(u)||Ru(c)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(v=a.timeline=new _n({data:"nested",defaults:m||{},targets:d&&d.data==="nested"?d.vars.targets:x}),v.kill(),v.parent=v._dp=Wi(a),v._start=0,h||Ru(u)||Ru(c)){if(A=x.length,E=h&&SS(h),Ii(h))for(T in h)~IS.indexOf(T)&&(S||(S={}),S[T]=h[T]);for(y=0;y<A;y++)C=Lc(r,US),C.stagger=0,D&&(C.easeReverse=D),S&&Ko(C,S),P=x[y],C.duration=+ja(u,Wi(a),y,P,x),C.delay=(+ja(c,Wi(a),y,P,x)||0)-a._delay,!h&&A===1&&C.delay&&(a._delay=c=C.delay,a._start+=c,C.delay=0),v.to(P,C,E?E(y,P,x):0),v._ease=$e.none;v.duration()?u=c=0:a.timeline=0}else if(_){Wa(Wn(v.vars.defaults,{ease:"none"})),v._ease=Ms(_.ease||r.ease||"none");var B=0,O,W,q;if(an(_))_.forEach(function(z){return v.to(x,z,">")}),v.duration();else{C={};for(T in _)T==="ease"||T==="easeEach"||g2(T,_[T],C,_.easeEach);for(T in C)for(O=C[T].sort(function(z,j){return z.t-j.t}),B=0,y=0;y<O.length;y++)W=O[y],q={ease:W.e,duration:(W.t-(y?O[y-1].t:0))/100*u},q[T]=W.v,v.to(x,q,B),B+=q.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||a.duration(u=v.duration())}else a.timeline=0;return p===!0&&!Dm&&(Ar=Wi(a),_t.killTweensOf(x),Ar=0),Ri(d,Wi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!_&&a._start===pt(d._time)&&Tn(f)&&jb(Wi(a))&&d.data!=="nested")&&(a._tTime=-st,a.render(Math.max(0,-c)||0)),g&&_S(Wi(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-st&&!c?l:r<st?0:r,h,p,_,m,g,d,x,v;if(!u)qb(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,v=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,o);if(h=pt(f%m),f===l?(_=this._repeat,h=u):(g=pt(f/m),_=~~g,_&&_===g?(h=u,_--):h>u&&(h=u)),d=this._yoyo&&_&1,d&&(h=u-h),g=Zo(this._tTime,m),h===a&&!o&&this._initted&&_===g)return this._tTime=f,this;_!==g&&this.vars.repeatRefresh&&!d&&!this._lock&&h!==m&&this._initted&&(this._lock=o=1,this.render(pt(m*_),!0).invalidate()._lock=0)}if(!this._initted){if(vS(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=h<a;if(y!==this._inv){var C=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(y?-1:1)/C:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(h/u);if(this._from&&(this.ratio=x=1-x),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!g&&(kn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&lp(this,r,s,o),kn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&kn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&lp(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Gr(this,1),!s&&!(c&&!a)&&(f||a||d)&&(kn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){xl||Un.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Hm(this,u),c=this._ease(u/this._dur),p2(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(af(this,0),this.parent||mS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Pa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ar&&Ar.vars.overwrite!==!0)._first||Pa(this),this.parent&&o!==this.timeline.totalDuration()&&Qo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ii(r):a,u=this._ptLookup,c=this._pt,f,h,p,_,m,g,d;if((!s||s==="all")&&Wb(a,l))return s==="all"&&(this._pt=0),Pa(this);for(f=this._op=this._op||[],s!=="all"&&(jt(s)&&(m={},wn(s,function(x){return m[x]=1}),s=m),s=m2(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,_=h,p={}):(p=f[d]=f[d]||{},_=s);for(m in _)g=h&&h[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&sf(this,g,"_pt"),delete h[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&Pa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Xa(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Xa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return _t.killTweensOf(r,s,o)},e}(yl);Wn(Dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(n){Dt[n]=function(){var e=new _n,t=cp.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Gm=function(e,t,i){return e[t]=i},OS=function(e,t,i){return e[t](i)},_2=function(e,t,i,r){return e[t](r.fp,i)},v2=function(e,t,i){return e.setAttribute(t,i)},Wm=function(e,t){return wt(e[t])?OS:Nm(e[t])&&e.setAttribute?v2:Gm},FS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},x2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},kS=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Xm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},y2=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},S2=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?sf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},M2=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},zS=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},An=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||FS,this.d=l||this,this.set=u||Gm,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=M2,this.m=i,this.mt=s,this.tween=r},n}();wn(km+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Fm[n]=1});Gn.TweenMax=Gn.TweenLite=Dt;Gn.TimelineLite=Gn.TimelineMax=_n;_t=new _n({sortChildren:!1,defaults:ml,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=bS;var Es=[],$u={},E2=[],Nv=0,T2=0,Eh=function(e){return($u[e]||E2).map(function(t){return t()})},pp=function(){var e=Date.now(),t=[];e-Nv>2&&(Eh("matchMediaInit"),Es.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=wi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Eh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Nv=e,Eh("matchMedia"))},BS=function(){function n(t,i){this.selector=i&&fp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=T2++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){wt(i)&&(s=r,r=i,i=wt);var o=this,a=function(){var u=dt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=fp(s)),dt=o,f=r.apply(o,arguments),wt(f)&&o._r.push(f),dt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===wt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=dt;dt=null,i(this),dt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Dt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof _n?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Dt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Es.length;o--;)Es[o].id===this.id&&Es.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),w2=function(){function n(t){this.contexts=[],this.scope=t,dt&&dt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Ii(i)||(i={matches:i});var o=new BS(0,s||this.scope),a=o.conditions={},l,u,c;dt&&!o.selector&&(o.selector=dt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=wi.matchMedia(i[u]),l&&(Es.indexOf(o)<0&&Es.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(pp):l.addEventListener("change",pp)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Nc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return CS(r)})},timeline:function(e){return new _n(e)},getTweensOf:function(e,t){return _t.getTweensOf(e,t)},getProperty:function(e,t,i,r){jt(e)&&(e=ii(e)[0]);var s=ys(e||{}).get,o=i?pS:dS;return i==="native"&&(i=""),e&&(t?o((In[t]&&In[t].get||s)(e,t,i,r)):function(a,l,u){return o((In[a]&&In[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ii(e),e.length>1){var r=e.map(function(c){return Rn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=In[t],a=ys(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;Eo._pt=0,f.init(e,i?c+i:c,Eo,0,[e]),f.render(1,f),Eo._pt&&Xm(1,Eo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Rn.to(e,Wn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return _t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ms(e.ease,ml.ease)),Rv(ml,e||{})},config:function(e){return Rv(Vn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!In[a]&&!Gn[a]&&gl(t+" effect requires "+a+" plugin.")}),xh[t]=function(a,l,u){return i(ii(a),Wn(l||{},s),u)},o&&(_n.prototype[t]=function(a,l,u){return this.add(xh[t](a,Ii(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){$e[e]=Ms(t)},parseEase:function(e,t){return arguments.length?Ms(e,t):$e},getById:function(e){return _t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new _n(e),r,s;for(i.smoothChildTiming=Tn(e.smoothChildTiming),_t.remove(i),i._dp=0,i._time=i._tTime=_t._time,r=_t._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Dt&&r.vars.onComplete===r._targets[0]))&&Ri(i,r,r._start-r._delay),r=s;return Ri(_t,i,0),i},context:function(e,t){return e?new BS(e,t):dt},matchMedia:function(e){return new w2(e)},matchMediaRefresh:function(){return Es.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||pp()},addEventListener:function(e,t){var i=$u[e]||($u[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=$u[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:n2,wrapYoyo:i2,distribute:SS,random:ES,snap:MS,normalize:t2,getUnit:on,clamp:Zb,splitColor:RS,toArray:ii,selector:fp,mapRange:wS,pipe:Jb,unitize:e2,interpolate:r2,shuffle:yS},install:lS,effects:xh,ticker:Un,updateRoot:_n.updateRoot,plugins:In,globalTimeline:_t,core:{PropTween:An,globals:uS,Tween:Dt,Timeline:_n,Animation:yl,getCache:ys,_removeLinkedListItem:sf,reverting:function(){return Qt},context:function(e){return e&&dt&&(dt.data.push(e),e._ctx=dt),dt},suppressOverwrites:function(e){return Dm=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Nc[n]=Dt[n]});Un.add(_n.updateRoot);Eo=Nc.to({},{duration:0});var A2=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},C2=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=A2(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Th=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(jt(s)&&(l={},wn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}C2(a,s)}}}},Rn=Nc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Qt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Th("roundProps",hp),Th("modifiers"),Th("snap",MS))||Nc;Dt.version=_n.version=Rn.version="3.15.0";aS=1;Im()&&Jo();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Iv,Cr,Io,jm,_s,Uv,Ym,R2=function(){return typeof window<"u"},ar={},us=180/Math.PI,Uo=Math.PI/180,so=Math.atan2,Ov=1e8,qm=/([A-Z])/g,P2=/(left|right|width|margin|padding|x)/i,b2=/[\s,\(]\S/,Pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},mp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},L2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},D2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},N2=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},I2=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},VS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},HS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},U2=function(e,t,i){return e.style[t]=i},O2=function(e,t,i){return e.style.setProperty(t,i)},F2=function(e,t,i){return e._gsap[t]=i},k2=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},z2=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},B2=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},xt="transform",Cn=xt+"Origin",V2=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in ar&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Pi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=ji(r,a)}):this.tfm[e]=o.x?o[e]:ji(r,e),e===Cn&&(this.tfm.zOrigin=o.zOrigin);else return Pi.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(xt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=xt}(s||t)&&this.props.push(e,t,s[e])},GS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},H2=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(qm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ym(),(!s||!s.isStart)&&!i[xt]&&(GS(i),r.zOrigin&&i[Cn]&&(i[Cn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},WS=function(e,t){var i={target:e,props:[],revert:H2,save:V2};return e._gsap||Rn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},XS,gp=function(e,t){var i=Cr.createElementNS?Cr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Cr.createElement(e);return i&&i.style?i:Cr.createElement(e)},zn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(qm,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ea(t)||t,1)||""},Fv="O,Moz,ms,Ms,Webkit".split(","),ea=function(e,t,i){var r=t||_s,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Fv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Fv[o]:"")+e},_p=function(){R2()&&window.document&&(Iv=window,Cr=Iv.document,Io=Cr.documentElement,_s=gp("div")||{style:{}},gp("div"),xt=ea(xt),Cn=xt+"Origin",_s.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",XS=!!ea("perspective"),Ym=Rn.core.reverting,jm=1)},kv=function(e){var t=e.ownerSVGElement,i=gp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Io.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Io.removeChild(i),s},zv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},jS=function(e){var t,i;try{t=e.getBBox()}catch{t=kv(e),i=1}return t&&(t.width||t.height)||i||(t=kv(e)),t&&!t.width&&!t.x&&!t.y?{x:+zv(e,["x","cx","x1"])||0,y:+zv(e,["y","cy","y1"])||0,width:0,height:0}:t},YS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&jS(e))},Wr=function(e,t){if(t){var i=e.style,r;t in ar&&t!==Cn&&(t=xt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(qm,"-$1").toLowerCase())):i.removeAttribute(t)}},Rr=function(e,t,i,r,s,o){var a=new An(e._pt,t,i,0,1,o?HS:VS);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Bv={deg:1,rad:1,turn:1},G2={grid:1,flex:1},Xr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=_s.style,l=P2.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",_,m,g,d;if(r===o||!s||Bv[r]||Bv[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&YS(e),(p||o==="%")&&(ar[t]||~t.indexOf("adius")))return _=d?e.getBBox()[l?"width":"height"]:e[c],Ct(p?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Cr||!m.appendChild)&&(m=Cr.body),g=m._gsap,g&&p&&g.width&&l&&g.time===Un.time&&!g.uncache)return Ct(s/g.width*f);if(p&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+r,_=e[c],x?e.style[t]=x:Wr(e,t)}else(p||o==="%")&&!G2[zn(m,"display")]&&(a.position=zn(e,"position")),m===e&&(a.position="static"),m.appendChild(_s),_=_s[c],m.removeChild(_s),a.position="absolute";return l&&p&&(g=ys(m),g.time=Un.time,g.width=m[c]),Ct(h?_*s/f:_&&s?f/_*s:0)},ji=function(e,t,i,r){var s;return jm||_p(),t in Pi&&t!=="transform"&&(t=Pi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ar[t]&&t!=="transform"?(s=Ml(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Uc(zn(e,Cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ic[t]&&Ic[t](e,t,i)||zn(e,t)||fS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Xr(e,t,s,i)+i:s},W2=function(e,t,i,r){if(!i||i==="none"){var s=ea(t,e,1),o=s&&zn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=zn(e,"borderTopColor"))}var a=new An(this._pt,e.style,t,0,1,kS),l=0,u=0,c,f,h,p,_,m,g,d,x,v,y,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=zn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=zn(e,t)||r,m?e.style[t]=m:Wr(e,t)),c=[i,r],bS(c),i=c[0],r=c[1],h=i.match(Mo)||[],C=r.match(Mo)||[],C.length){for(;f=Mo.exec(r);)g=f[0],x=r.substring(l,f.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),g!==(m=h[u++]||"")&&(p=parseFloat(m)||0,y=m.substr((p+"").length),g.charAt(1)==="="&&(g=No(p,g)+y),d=parseFloat(g),v=g.substr((d+"").length),l=Mo.lastIndex-v.length,v||(v=v||Vn.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=Xr(e,t,m,v)||0),a._pt={_next:a._pt,p:x||u===1?x:",",s:p,c:d-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?HS:VS;return oS.test(r)&&(a.e=0),this._pt=a,a},Vv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},X2=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Vv[i]||i,t[1]=Vv[r]||r,t.join(" ")},j2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],ar[a]&&(l=1,a=a==="transformOrigin"?Cn:xt),Wr(i,a);l&&(Wr(i,xt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ml(i,1),o.uncache=1,GS(r)))}},Ic={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new An(e._pt,t,i,0,0,j2);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Sl=[1,0,0,1,0,0],qS={},$S=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hv=function(e){var t=zn(e,xt);return $S(t)?Sl:t.substr(7).match(sS).map(Ct)},$m=function(e,t){var i=e._gsap||ys(e),r=e.style,s=Hv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Sl:s):(s===Sl&&!e.offsetParent&&e!==Io&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Io.appendChild(e)),s=Hv(e),l?r.display=l:Wr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Io.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},vp=function(e,t,i,r,s,o){var a=e._gsap,l=s||$m(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],_=l[1],m=l[2],g=l[3],d=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,C=parseFloat(v[1])||0,A,T,P,E;i?l!==Sl&&(T=p*g-_*m)&&(P=y*(g/T)+C*(-m/T)+(m*x-g*d)/T,E=y*(-_/T)+C*(p/T)-(p*x-_*d)/T,y=P,C=E):(A=jS(e),y=A.x+(~v[0].indexOf("%")?y/100*A.width:y),C=A.y+(~(v[1]||v[0]).indexOf("%")?C/100*A.height:C)),r||r!==!1&&a.smooth?(d=y-u,x=C-c,a.xOffset=f+(d*p+x*m)-d,a.yOffset=h+(d*_+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Cn]="0px 0px",o&&(Rr(o,a,"xOrigin",u,y),Rr(o,a,"yOrigin",c,C),Rr(o,a,"xOffset",f,a.xOffset),Rr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+C)},Ml=function(e,t){var i=e._gsap||new DS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=zn(e,Cn)||"0",c,f,h,p,_,m,g,d,x,v,y,C,A,T,P,E,S,D,B,O,W,q,z,j,I,K,Q,re,Se,Ge,Y,te;return c=f=h=m=g=d=x=v=y=0,p=_=1,i.svg=!!(e.getCTM&&YS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xt]!=="none"?l[xt]:"")),r.scale=r.rotate=r.translate="none"),T=$m(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),u=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),vp(e,j||u,!!j||i.originIsAbsolute,i.smooth!==!1,T)),C=i.xOrigin||0,A=i.yOrigin||0,T!==Sl&&(D=T[0],B=T[1],O=T[2],W=T[3],c=q=T[4],f=z=T[5],T.length===6?(p=Math.sqrt(D*D+B*B),_=Math.sqrt(W*W+O*O),m=D||B?so(B,D)*us:0,x=O||W?so(O,W)*us+m:0,x&&(_*=Math.abs(Math.cos(x*Uo))),i.svg&&(c-=C-(C*D+A*O),f-=A-(C*B+A*W))):(te=T[6],Ge=T[7],Q=T[8],re=T[9],Se=T[10],Y=T[11],c=T[12],f=T[13],h=T[14],P=so(te,Se),g=P*us,P&&(E=Math.cos(-P),S=Math.sin(-P),j=q*E+Q*S,I=z*E+re*S,K=te*E+Se*S,Q=q*-S+Q*E,re=z*-S+re*E,Se=te*-S+Se*E,Y=Ge*-S+Y*E,q=j,z=I,te=K),P=so(-O,Se),d=P*us,P&&(E=Math.cos(-P),S=Math.sin(-P),j=D*E-Q*S,I=B*E-re*S,K=O*E-Se*S,Y=W*S+Y*E,D=j,B=I,O=K),P=so(B,D),m=P*us,P&&(E=Math.cos(P),S=Math.sin(P),j=D*E+B*S,I=q*E+z*S,B=B*E-D*S,z=z*E-q*S,D=j,q=I),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,d=180-d),p=Ct(Math.sqrt(D*D+B*B+O*O)),_=Ct(Math.sqrt(z*z+te*te)),P=so(q,z),x=Math.abs(P)>2e-4?P*us:0,y=Y?1/(Y<0?-Y:Y):0),i.svg&&(j=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!$S(zn(e,xt)),j&&e.setAttribute("transform",j))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(p*=-1,x+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Ct(p),i.scaleY=Ct(_),i.rotation=Ct(m)+a,i.rotationX=Ct(g)+a,i.rotationY=Ct(d)+a,i.skewX=x+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Cn]=Uc(u)),i.xOffset=i.yOffset=0,i.force3D=Vn.force3D,i.renderTransform=i.svg?q2:XS?KS:Y2,i.uncache=0,i},Uc=function(e){return(e=e.split(" "))[0]+" "+e[1]},wh=function(e,t,i){var r=on(t);return Ct(parseFloat(t)+parseFloat(Xr(e,"x",i+"px",r)))+r},Y2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,KS(e,t)},rs="0deg",Ma="0px",ss=") ",KS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,_=i.scaleX,m=i.scaleY,g=i.transformPerspective,d=i.force3D,x=i.target,v=i.zOrigin,y="",C=d==="auto"&&e&&e!==1||d===!0;if(v&&(f!==rs||c!==rs)){var A=parseFloat(c)*Uo,T=Math.sin(A),P=Math.cos(A),E;A=parseFloat(f)*Uo,E=Math.cos(A),o=wh(x,o,T*E*-v),a=wh(x,a,-Math.sin(A)*-v),l=wh(x,l,P*E*-v+v)}g!==Ma&&(y+="perspective("+g+ss),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(C||o!==Ma||a!==Ma||l!==Ma)&&(y+=l!==Ma||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ss),u!==rs&&(y+="rotate("+u+ss),c!==rs&&(y+="rotateY("+c+ss),f!==rs&&(y+="rotateX("+f+ss),(h!==rs||p!==rs)&&(y+="skew("+h+", "+p+ss),(_!==1||m!==1)&&(y+="scale("+_+", "+m+ss),x.style[xt]=y||"translate(0, 0)"},q2=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,_=i.xOrigin,m=i.yOrigin,g=i.xOffset,d=i.yOffset,x=i.forceCSS,v=parseFloat(o),y=parseFloat(a),C,A,T,P,E;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Uo,u*=Uo,C=Math.cos(l)*f,A=Math.sin(l)*f,T=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(c*=Uo,E=Math.tan(u-c),E=Math.sqrt(1+E*E),T*=E,P*=E,c&&(E=Math.tan(c),E=Math.sqrt(1+E*E),C*=E,A*=E)),C=Ct(C),A=Ct(A),T=Ct(T),P=Ct(P)):(C=f,P=h,A=T=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Xr(p,"x",o,"px"),y=Xr(p,"y",a,"px")),(_||m||g||d)&&(v=Ct(v+_-(_*C+m*T)+g),y=Ct(y+m-(_*A+m*P)+d)),(r||s)&&(E=p.getBBox(),v=Ct(v+r/100*E.width),y=Ct(y+s/100*E.height)),E="matrix("+C+","+A+","+T+","+P+","+v+","+y+")",p.setAttribute("transform",E),x&&(p.style[xt]=E)},$2=function(e,t,i,r,s){var o=360,a=jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?us:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*Ov)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Ov)%o-~~(u/o)*o)),e._pt=h=new An(e._pt,t,i,r,u,L2),h.e=c,h.u="deg",e._props.push(i),h},Gv=function(e,t){for(var i in t)e[i]=t[i];return e},K2=function(e,t,i){var r=Gv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[xt]=t,a=Ml(i,1),Wr(i,xt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[xt],o[xt]=t,a=Ml(i,1),o[xt]=u);for(l in ar)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=on(u),_=on(c),f=p!==_?Xr(i,l,u,_):parseFloat(u),h=parseFloat(c),e._pt=new An(e._pt,a,l,f,h-f,mp),e._pt.u=_||0,e._props.push(l));Gv(a,r)};wn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Ic[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(_){return ji(a,_,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(_,m){return p[_]=h[m]=h[m]||h[(m-1)/2|0]}),a.init(l,p,f)}});var ZS={name:"css",register:_p,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,_,m,g,d,x,v,y,C,A,T,P,E;jm||_p(),this.styles=this.styles||WS(e),P=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(In[m]&&NS(m,t,i,r,e,s)))){if(p=typeof c,_=Ic[m],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=vl(c)),_)_(this,e,m,c,i)&&(T=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",zr.lastIndex=0,zr.test(u)||(g=on(u),d=on(c),d?g!==d&&(u=Xr(e,m,u,d)+d):g&&(c+=g)),this.add(a,"setProperty",u,c,r,s,0,0,m),o.push(m),P.push(m,0,a[m]);else if(p!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],jt(u)&&~u.indexOf("random(")&&(u=vl(u)),on(u+"")||u==="auto"||(u+=Vn.units[m]||on(ji(e,m))||""),(u+"").charAt(1)==="="&&(u=ji(e,m))):u=ji(e,m),h=parseFloat(u),x=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),x&&(c=c.substr(2)),f=parseFloat(c),m in Pi&&(m==="autoAlpha"&&(h===1&&ji(e,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,a.visibility),Rr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=Pi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in ar,v){if(this.styles.save(m),E=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=zn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=c,c=zn(e,"perspective"),S?e.style.perspective=S:Wr(e,"perspective")}f=parseFloat(c)}if(y||(C=e._gsap,C.renderTransform&&!t.parseTransform||Ml(e,t.parseTransform),A=t.smoothOrigin!==!1&&C.smooth,y=this._pt=new An(this._pt,a,xt,0,1,C.renderTransform,C,0,-1),y.dep=1),m==="scale")this._pt=new An(this._pt,C,"scaleY",C.scaleY,(x?No(C.scaleY,x+f):f)-C.scaleY||0,mp),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){P.push(Cn,0,a[Cn]),c=X2(c),C.svg?vp(e,c,0,A,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==C.zOrigin&&Rr(this,C,"zOrigin",C.zOrigin,d),Rr(this,a,m,Uc(u),Uc(c)));continue}else if(m==="svgOrigin"){vp(e,c,1,A,0,this);continue}else if(m in qS){$2(this,C,m,h,x?No(h,x+c):c);continue}else if(m==="smoothOrigin"){Rr(this,C,"smooth",C.smooth,c);continue}else if(m==="force3D"){C[m]=c;continue}else if(m==="transform"){K2(this,c,e);continue}}else m in a||(m=ea(m)||m);if(v||(f||f===0)&&(h||h===0)&&!b2.test(c)&&m in a)g=(u+"").substr((h+"").length),f||(f=0),d=on(c)||(m in Vn.units?Vn.units[m]:g),g!==d&&(h=Xr(e,m,u,d)),this._pt=new An(this._pt,v?C:a,m,h,(x?No(h,x+f):f)-h,!v&&(d==="px"||m==="zIndex")&&t.autoRound!==!1?I2:mp),this._pt.u=d||0,v&&E!==c?(this._pt.b=u,this._pt.e=E,this._pt.r=N2):g!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=D2);else if(m in a)W2.call(this,e,m,u,x?x+c:c);else if(m in e)this.add(e,m,u||e[m],x?x+c:c,r,s);else if(m!=="parseTransform"){Om(m,c);continue}v||(m in a?P.push(m,0,a[m]):typeof e[m]=="function"?P.push(m,2,e[m]()):P.push(m,1,u||e[m])),o.push(m)}}T&&zS(this)},render:function(e,t){if(t.tween._time||!Ym())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ji,aliases:Pi,getSetter:function(e,t,i){var r=Pi[t];return r&&r.indexOf(",")<0&&(t=r),t in ar&&t!==Cn&&(e._gsap.x||ji(e,"x"))?i&&Uv===i?t==="scale"?k2:F2:(Uv=i||{})&&(t==="scale"?z2:B2):e.style&&!Nm(e.style[t])?U2:~t.indexOf("-")?O2:Wm(e,t)},core:{_removeProperty:Wr,_getMatrix:$m}};Rn.utils.checkPrefix=ea;Rn.core.getStyleSaver=WS;(function(n,e,t,i){var r=wn(n+","+e+","+t,function(s){ar[s]=1});wn(e,function(s){Vn.units[s]="deg",qS[s]=1}),Pi[r[13]]=n+","+e,wn(i,function(s){var o=s.split(":");Pi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Vn.units[n]="px"});Rn.registerPlugin(ZS);var Oo=Rn.registerPlugin(ZS)||Rn;Oo.core.Tween;function Z2(n,e){const t=Math.sqrt(n*n+e*e),r=Math.atan2(n,e)*180/Math.PI,s=90-r,o=e/3,a=n/3,l=new N(-o,-a,0),u=new N(e-o,-a,0),c=new N(-o,n-a,0),f=l.clone().lerp(c,.5),h=l.clone().lerp(u,.5),p=u.clone().lerp(c,.5);return{a:n,b:e,c:t,alphaDeg:r,betaDeg:s,vA:u,vB:c,vC:l,midA:f,midB:h,midC:p,outA:new N(-1,0,0),outB:new N(0,-1,0),outC:new N(n/t,e/t,0)}}const Ah=.32;class Q2{constructor(e){it(this,"canvas");it(this,"container");it(this,"scene",new RP);it(this,"camera");it(this,"renderer");it(this,"controls");it(this,"composer");it(this,"bloomPass");it(this,"labelRenderer");it(this,"figureRoot");it(this,"groundGroup");it(this,"triMesh");it(this,"triEdges");it(this,"triGeo");it(this,"triMat");it(this,"triEdgeMat");it(this,"sideLabels");it(this,"vertexLabels");it(this,"targetParams",{a:2.828,b:2.828});it(this,"animatedParams",{a:2.828,b:2.828});it(this,"onStats",()=>{});it(this,"handleResize");it(this,"resizeObs");it(this,"structureDirty",!0);it(this,"lastStatsEmit",0);it(this,"tick",e=>{if(this.controls.update(),this.structureDirty&&(this.rebuildFigure(),this.structureDirty=!1),e-this.lastStatsEmit>90){this.lastStatsEmit=e;const{a:t,b:i}=this.animatedParams,r=Math.sqrt(t*t+i*i),s=Math.atan2(t,i)*180/Math.PI;this.emitStatsNow(t,i,r,s,90-s)}this.composer.render(),this.labelRenderer.render(this.scene,this.camera)});this.canvas=e,this.container=e.parentElement??document.body,this.renderer=new CP({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=cy,this.renderer.toneMapping=pm,this.renderer.toneMappingExposure=1.06,this.scene.background=new ze("#e9f1fb"),this.scene.fog=new Am(15331835,.016),this.camera=new Jn(38,1,.1,200),this.camera.position.set(0,0,13),this.controls=new yb(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.07,this.controls.target.set(0,0,0),this.controls.minDistance=4,this.controls.maxDistance=32,this.controls.enablePan=!0,this.controls.touches={ONE:0,TWO:2},this.scene.add(new pb(14544639,12176614,.6)),this.scene.add(new _b(16777215,.18));const t=new gh(16777215,1.5);t.position.set(7,14,9),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-10,t.shadow.camera.right=10,t.shadow.camera.top=10,t.shadow.camera.bottom=-10,t.shadow.camera.near=.1,t.shadow.camera.far=40,t.shadow.bias=-2e-4,t.shadow.radius=6,this.scene.add(t);const i=new gh(11126527,.5);i.position.set(-8,6,4),this.scene.add(i);const r=new gh(16777215,.35);r.position.set(0,4,-10),this.scene.add(r),this.groundGroup=new yo,this.groundGroup.position.y=-3.4,this.scene.add(this.groundGroup);const s=new Fn(new bl(40,40),new cb({opacity:.18,transparent:!0}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.groundGroup.add(s);const o=new Fn(new Pm(11,64),new tf({color:16777215,transparent:!0,opacity:.5}));o.rotation.x=-Math.PI/2,o.position.y=.001,this.groundGroup.add(o),this.figureRoot=new yo,this.scene.add(this.figureRoot),this.triMat=new db({color:new ze("#f9fbff"),metalness:.08,roughness:.35,clearcoat:.6,clearcoatRoughness:.22,sheen:.5,sheenColor:new ze(14543359),sheenRoughness:.6}),this.triEdgeMat=new Yy({color:new ze("#5b8def"),transparent:!0,opacity:.85}),this.triGeo=new Rc(new np,{depth:Ah,bevelEnabled:!1}),this.triMesh=new Fn(this.triGeo,this.triMat),this.triMesh.castShadow=!0,this.triMesh.receiveShadow=!0,this.figureRoot.add(this.triMesh),this.triEdges=new bP(new Yn,this.triEdgeMat),this.figureRoot.add(this.triEdges),this.composer=new Ab(this.renderer),this.composer.addPass(new Cb(this.scene,this.camera)),this.bloomPass=new $o(new ie(1,1),.18,.85,.88),this.composer.addPass(this.bloomPass),this.composer.addPass(new bb),this.labelRenderer=new Lb,this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.top="0",this.labelRenderer.domElement.style.left="0",this.labelRenderer.domElement.style.pointerEvents="none",this.labelRenderer.domElement.style.zIndex="2",this.container.appendChild(this.labelRenderer.domElement);const a=h=>{const p=document.createElement("div");p.className=`label-side label-side--${h}`;const _=document.createElement("span");_.className="label-side__name",_.textContent=h;const m=document.createElement("em");m.className="label-side__value",m.textContent="0.000",p.appendChild(_),p.appendChild(m);const g=new Sv(p);return this.figureRoot.add(g),{obj:g,name:_,value:m}};this.sideLabels={a:a("a"),b:a("b"),c:a("c")};const l=h=>{const p=document.createElement("div");p.className="label-vertex",p.textContent=h;const _=new Sv(p);return this.figureRoot.add(_),{obj:_,el:p}},u=l("A"),c=l("B"),f=l("C");this.vertexLabels={A:u.obj,elA:u.el,B:c.obj,elB:c.el,C:f.obj,elC:f.el},this.handleResize=()=>this.onResize(),window.addEventListener("resize",this.handleResize),this.resizeObs=new ResizeObserver(this.handleResize),this.resizeObs.observe(this.container),this.onResize(),this.rebuildFigure(),this.renderer.setAnimationLoop(this.tick)}setParams(e){const t={...this.targetParams};this.targetParams={...this.targetParams,...e},e.a!==void 0&&e.a!==t.a&&Oo.to(this.animatedParams,{a:e.a,duration:.45,ease:"power3.out",overwrite:"auto",onUpdate:()=>{this.structureDirty=!0}}),e.b!==void 0&&e.b!==t.b&&Oo.to(this.animatedParams,{b:e.b,duration:.45,ease:"power3.out",overwrite:"auto",onUpdate:()=>{this.structureDirty=!0}})}setStatsCallback(e){this.onStats=e}dispose(){this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.handleResize),this.resizeObs.disconnect(),Oo.killTweensOf(this.animatedParams),this.triGeo.dispose(),this.triMat.dispose(),this.triEdgeMat.dispose(),this.triEdges.geometry.dispose(),Object.keys(this.sideLabels).forEach(e=>{this.figureRoot.remove(this.sideLabels[e].obj)}),this.figureRoot.remove(this.vertexLabels.A),this.figureRoot.remove(this.vertexLabels.B),this.figureRoot.remove(this.vertexLabels.C),this.labelRenderer.domElement.remove(),this.groundGroup.traverse(e=>{const t=e;if(t.isMesh){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i.dispose()}}),this.composer.dispose(),this.renderer.dispose()}rebuildFigure(){const{a:e,b:t}=this.animatedParams,i=Z2(e,t);this.triGeo.dispose();const r=new np;r.moveTo(i.vA.x,i.vA.y),r.lineTo(i.vB.x,i.vB.y),r.lineTo(i.vC.x,i.vC.y),r.closePath(),this.triGeo=new Rc(r,{depth:Ah,bevelEnabled:!1}),this.triGeo.translate(0,0,-Ah/2),this.triMesh.geometry=this.triGeo;const s=this.triEdges.geometry;this.triEdges.geometry=new WP(this.triGeo),s.dispose();const o=(f,h,p,_)=>{const m=this.sideLabels[f],g=.22+.04*_;m.obj.position.copy(h).addScaledVector(p,g),m.obj.position.z=0,m.value.textContent=_.toFixed(3)};o("a",i.midA,i.outA,i.a),o("b",i.midB,i.outB,i.b),o("c",i.midC,i.outC,i.c);const a=(f,h,p)=>{f.position.copy(h).addScaledVector(p,.5),f.position.z=0},l=new N().addVectors(i.outB,i.outC).normalize(),u=new N().addVectors(i.outA,i.outC).normalize(),c=new N().addVectors(i.outA,i.outB).normalize();a(this.vertexLabels.A,i.vA,l),a(this.vertexLabels.B,i.vB,u),a(this.vertexLabels.C,i.vC,c),this.emitStatsNow(i.a,i.b,i.c,i.alphaDeg,i.betaDeg)}emitStatsNow(e,t,i,r,s){this.onStats({a:e,b:t,c:i,alphaDeg:r,betaDeg:s})}onResize(){const e=this.container.clientWidth,t=this.container.clientHeight;e===0||t===0||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.bloomPass.resolution.set(e,t),this.labelRenderer.setSize(e,t))}}function J2({params:n,onStats:e}){const t=mt.useRef(null),i=mt.useRef(null),r=mt.useRef(e);return r.current=e,mt.useEffect(()=>{if(!t.current)return;const s=new Q2(t.current);return i.current=s,s.setStatsCallback(o=>r.current(o)),()=>{s.dispose(),i.current=null}},[]),mt.useEffect(()=>{var s;(s=i.current)==null||s.setParams(n)},[n]),ae.jsx("canvas",{ref:t,className:"scene-canvas"})}function eL({value:n,min:e,max:t,onChange:i,decimals:r=3,className:s,title:o="Двойной клик — впиши значение"}){const[a,l]=mt.useState(!1),[u,c]=mt.useState(""),f=mt.useRef(null);mt.useEffect(()=>{a&&(c(n.toFixed(r)),requestAnimationFrame(()=>{var p,_;(p=f.current)==null||p.focus(),(_=f.current)==null||_.select()}))},[a,n,r]);const h=()=>{const p=parseFloat(u.replace(",","."));if(!Number.isNaN(p)&&Number.isFinite(p)){const _=Math.max(e,Math.min(t,p));i(_)}l(!1)};return a?ae.jsx("input",{ref:f,className:`editable-number editable-number--editing ${s??""}`,type:"text",inputMode:"decimal",value:u,onChange:p=>c(p.target.value),onBlur:h,onKeyDown:p=>{p.key==="Enter"?(p.preventDefault(),h()):p.key==="Escape"&&(p.preventDefault(),l(!1))}}):ae.jsx("span",{className:`editable-number ${s??""}`,title:o,onDoubleClick:()=>l(!0),children:n.toFixed(r)})}function Ch({letter:n,label:e,hint:t,min:i,max:r,step:s,value:o,onChange:a}){return ae.jsxs("div",{className:`control-row control-row--${n}`,children:[ae.jsxs("div",{className:"control-row__head",children:[ae.jsxs("span",{className:"control-row__label",children:[ae.jsx("span",{className:`control-row__letter control-row__letter--${n}`,children:n}),e]}),ae.jsx(eL,{className:`control-row__value control-row__value--${n}`,value:o,min:i,max:r,onChange:a})]}),ae.jsx("input",{className:"range",type:"range",min:i,max:r,step:s,value:Math.min(r,Math.max(i,o)),onChange:l=>a(parseFloat(l.target.value))}),t&&ae.jsx("div",{className:"control-row__hint",children:t})]})}function tL({a:n,b:e,c:t,onAChange:i,onBChange:r,onCChange:s,onReset:o}){const a=mt.useRef(null);return mt.useEffect(()=>{a.current&&Oo.fromTo(a.current,{y:28,opacity:0,filter:"blur(8px)"},{y:0,opacity:1,filter:"blur(0px)",duration:.9,ease:"power3.out",delay:.25})},[]),ae.jsxs("aside",{ref:a,className:"panel panel--right",children:[ae.jsxs("header",{className:"panel__head",children:[ae.jsx("div",{className:"panel__eyebrow",children:"Studio"}),ae.jsx("h2",{className:"panel__title",children:"Стороны треугольника"}),ae.jsx("p",{className:"panel__sub",children:"Меняй любую из сторон — остальные пересчитаются так, чтобы  a² + b² = c² выполнялось точно. Двойной клик по числу — впишешь руками."})]}),ae.jsxs("div",{className:"panel__body",children:[ae.jsx(Ch,{letter:"a",label:"катет",hint:"Вертикальный катет. При изменении подстраивается гипотенуза c.",min:.3,max:6,step:.01,value:n,onChange:i}),ae.jsx(Ch,{letter:"b",label:"катет",hint:"Горизонтальный катет. При изменении подстраивается гипотенуза c.",min:.3,max:6,step:.01,value:e,onChange:r}),ae.jsx(Ch,{letter:"c",label:"гипотенуза",hint:"Меняет c, сохраняя пропорцию катетов: a и b масштабируются вместе.",min:.5,max:9,step:.01,value:t,onChange:s}),ae.jsx("div",{className:"divider"}),ae.jsxs("button",{className:"cta",onClick:o,type:"button",children:[ae.jsx("span",{className:"cta__dot"}),"Сбросить"]})]}),ae.jsxs("footer",{className:"panel__foot",children:[ae.jsx("span",{className:"panel__foot-key",children:"Подсказка"}),ae.jsx("span",{className:"panel__foot-text",children:"Левая кнопка мыши — вращение, колесо — зум."})]})]})}function nL({stats:n}){const e=mt.useRef(null);mt.useEffect(()=>{e.current&&Oo.fromTo(e.current,{y:-22,opacity:0,filter:"blur(8px)"},{y:0,opacity:1,filter:"blur(0px)",duration:.9,ease:"power3.out",delay:.15})},[]);const t=(n==null?void 0:n.a)??0,i=(n==null?void 0:n.b)??0,r=(n==null?void 0:n.c)??0,s=t*t,o=i*i,a=r*r,l=s+o,u=Math.abs(l-a)<.001;return ae.jsxs("div",{ref:e,className:"panel panel--left",children:[ae.jsxs("h1",{className:"title",children:["Теорема",ae.jsx("br",{}),ae.jsx("span",{className:"title__accent",children:"Пифагора"})]}),ae.jsxs("div",{className:"formula-stack",children:[ae.jsxs("div",{className:"formula-card formula-card--main",children:[ae.jsx("span",{className:"formula-card__caption",children:"главная формула"}),ae.jsxs("div",{className:"formula-card__body",children:["a²",ae.jsx("span",{className:"formula-card__op",children:"+"}),"b²",ae.jsx("span",{className:"formula-card__op",children:"="}),"c²"]}),ae.jsxs("div",{className:"formula-card__nums",children:[ae.jsxs("span",{children:[t.toFixed(3),"²"]}),ae.jsx("span",{className:"op",children:"+"}),ae.jsxs("span",{children:[i.toFixed(3),"²"]}),ae.jsx("span",{className:"op",children:"="}),ae.jsxs("span",{children:[r.toFixed(3),"²"]})]}),ae.jsxs("div",{className:"formula-card__check",children:[ae.jsx("span",{children:s.toFixed(3)}),ae.jsx("span",{className:"op",children:"+"}),ae.jsx("span",{children:o.toFixed(3)}),ae.jsx("span",{className:"op",children:"="}),ae.jsx("span",{className:"check__num--accent",children:l.toFixed(3)}),ae.jsx("span",{className:u?"check__badge check__badge--ok":"check__badge",children:u?"✓":"≈"})]})]}),ae.jsxs("div",{className:"formula-arrow","aria-hidden":"true",children:[ae.jsx("span",{className:"formula-arrow__line"}),ae.jsx("span",{className:"formula-arrow__label",children:"отсюда"}),ae.jsx("span",{className:"formula-arrow__line"})]}),ae.jsxs("div",{className:"formula-card formula-card--derived",children:[ae.jsx("span",{className:"formula-card__caption",children:"следствие"}),ae.jsxs("div",{className:"formula-card__body",children:["c",ae.jsx("span",{className:"formula-card__op",children:"="}),ae.jsx("span",{className:"formula-card__root",children:ae.jsxs("span",{className:"formula-card__root-bar",children:["a²",ae.jsx("span",{className:"formula-card__op formula-card__op--inline",children:"+"}),"b²"]})})]}),ae.jsxs("div",{className:"formula-card__nums",children:[ae.jsx("span",{children:"c"}),ae.jsx("span",{className:"op",children:"="}),ae.jsx("span",{className:"formula-card__root formula-card__root--small",children:ae.jsxs("span",{className:"formula-card__root-bar",children:[s.toFixed(3),ae.jsx("span",{className:"op op--inline",children:"+"}),o.toFixed(3)]})}),ae.jsx("span",{className:"op",children:"="}),ae.jsx("span",{className:"check__num--accent",children:r.toFixed(3)})]})]})]}),ae.jsx("p",{className:"lede",children:"Двигай слайдеры справа — треугольник пересчитывается в реальном времени. Двойной клик по числу — впишешь значение руками."}),ae.jsxs("dl",{className:"stats",children:[ae.jsxs("div",{className:"stats__row stats__row--a",children:[ae.jsxs("dt",{children:["a ",ae.jsx("span",{className:"stats__sub",children:"(катет)"})]}),ae.jsx("dd",{children:t.toFixed(3)})]}),ae.jsxs("div",{className:"stats__row stats__row--b",children:[ae.jsxs("dt",{children:["b ",ae.jsx("span",{className:"stats__sub",children:"(катет)"})]}),ae.jsx("dd",{children:i.toFixed(3)})]}),ae.jsxs("div",{className:"stats__row stats__row--c",children:[ae.jsxs("dt",{children:["c ",ae.jsx("span",{className:"stats__sub",children:"(гипотенуза)"})]}),ae.jsx("dd",{children:r.toFixed(3)})]}),ae.jsxs("div",{className:"stats__row",children:[ae.jsx("dt",{children:"углы"}),ae.jsxs("dd",{children:["90° / ",((n==null?void 0:n.alphaDeg)??0).toFixed(1),"° / ",((n==null?void 0:n.betaDeg)??0).toFixed(1),"°"]})]})]})]})}const Wv=2.828,Xv=2.828,jv=.3,Yv=6,qv=.3,$v=6,iL=.5,rL=9,Ea=(n,e,t)=>Math.max(e,Math.min(t,n));function sL(){const[n,e]=mt.useState(Wv),[t,i]=mt.useState(Xv),[r,s]=mt.useState(null),o=mt.useMemo(()=>Math.sqrt(n*n+t*t),[n,t]),a=mt.useCallback(f=>{e(Ea(f,jv,Yv))},[]),l=mt.useCallback(f=>{i(Ea(f,qv,$v))},[]),u=mt.useCallback(f=>{const h=Ea(f,iL,rL),p=Math.sqrt(n*n+t*t);if(p<1e-6)return;const _=h/p;e(Ea(n*_,jv,Yv)),i(Ea(t*_,qv,$v))},[n,t]),c=mt.useCallback(()=>{e(Wv),i(Xv)},[]);return ae.jsxs("div",{className:"app",children:[ae.jsx("div",{className:"app__bg"}),ae.jsx("div",{className:"app__scene",children:ae.jsx(J2,{params:{a:n,b:t},onStats:s})}),ae.jsx(nL,{stats:r}),ae.jsx(tL,{a:n,b:t,c:o,onAChange:a,onBChange:l,onCChange:u,onReset:c}),ae.jsxs("div",{className:"brand",children:[ae.jsx("span",{className:"brand__dot"}),ae.jsx("span",{children:"Pythagorean triangle · 3D Studio"})]})]})}ly(document.getElementById("root")).render(ae.jsx(sL,{}));
