(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var $0={exports:{}},Uc={},K0={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ml=Symbol.for("react.element"),tM=Symbol.for("react.portal"),nM=Symbol.for("react.fragment"),iM=Symbol.for("react.strict_mode"),rM=Symbol.for("react.profiler"),sM=Symbol.for("react.provider"),oM=Symbol.for("react.context"),aM=Symbol.for("react.forward_ref"),lM=Symbol.for("react.suspense"),uM=Symbol.for("react.memo"),cM=Symbol.for("react.lazy"),Jm=Symbol.iterator;function fM(n){return n===null||typeof n!="object"?null:(n=Jm&&n[Jm]||n["@@iterator"],typeof n=="function"?n:null)}var Z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q0=Object.assign,J0={};function ea(n,e,t){this.props=n,this.context=e,this.refs=J0,this.updater=t||Z0}ea.prototype.isReactComponent={};ea.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ea.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function ev(){}ev.prototype=ea.prototype;function vp(n,e,t){this.props=n,this.context=e,this.refs=J0,this.updater=t||Z0}var xp=vp.prototype=new ev;xp.constructor=vp;Q0(xp,ea.prototype);xp.isPureReactComponent=!0;var eg=Array.isArray,tv=Object.prototype.hasOwnProperty,yp={current:null},nv={key:!0,ref:!0,__self:!0,__source:!0};function iv(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tv.call(e,i)&&!nv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ml,type:n,key:s,ref:o,props:r,_owner:yp.current}}function hM(n,e){return{$$typeof:Ml,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Sp(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ml}function dM(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var tg=/\/+/g;function cf(n,e){return typeof n=="object"&&n!==null&&n.key!=null?dM(""+n.key):e.toString(36)}function Ru(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ml:case tM:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+cf(o,0):i,eg(r)?(t="",n!=null&&(t=n.replace(tg,"$&/")+"/"),Ru(r,e,t,"",function(u){return u})):r!=null&&(Sp(r)&&(r=hM(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(tg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",eg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+cf(s,a);o+=Ru(s,e,t,l,r)}else if(l=fM(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+cf(s,a++),o+=Ru(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Nl(n,e,t){if(n==null)return n;var i=[],r=0;return Ru(n,i,"","",function(s){return e.call(t,s,r++)}),i}function pM(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var hn={current:null},bu={transition:null},mM={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:bu,ReactCurrentOwner:yp};function rv(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Nl,forEach:function(n,e,t){Nl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Nl(n,function(){e++}),e},toArray:function(n){return Nl(n,function(e){return e})||[]},only:function(n){if(!Sp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};je.Component=ea;je.Fragment=nM;je.Profiler=rM;je.PureComponent=vp;je.StrictMode=iM;je.Suspense=lM;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mM;je.act=rv;je.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Q0({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yp.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)tv.call(e,l)&&!nv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ml,type:n.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(n){return n={$$typeof:oM,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:sM,_context:n},n.Consumer=n};je.createElement=iv;je.createFactory=function(n){var e=iv.bind(null,n);return e.type=n,e};je.createRef=function(){return{current:null}};je.forwardRef=function(n){return{$$typeof:aM,render:n}};je.isValidElement=Sp;je.lazy=function(n){return{$$typeof:cM,_payload:{_status:-1,_result:n},_init:pM}};je.memo=function(n,e){return{$$typeof:uM,type:n,compare:e===void 0?null:e}};je.startTransition=function(n){var e=bu.transition;bu.transition={};try{n()}finally{bu.transition=e}};je.unstable_act=rv;je.useCallback=function(n,e){return hn.current.useCallback(n,e)};je.useContext=function(n){return hn.current.useContext(n)};je.useDebugValue=function(){};je.useDeferredValue=function(n){return hn.current.useDeferredValue(n)};je.useEffect=function(n,e){return hn.current.useEffect(n,e)};je.useId=function(){return hn.current.useId()};je.useImperativeHandle=function(n,e,t){return hn.current.useImperativeHandle(n,e,t)};je.useInsertionEffect=function(n,e){return hn.current.useInsertionEffect(n,e)};je.useLayoutEffect=function(n,e){return hn.current.useLayoutEffect(n,e)};je.useMemo=function(n,e){return hn.current.useMemo(n,e)};je.useReducer=function(n,e,t){return hn.current.useReducer(n,e,t)};je.useRef=function(n){return hn.current.useRef(n)};je.useState=function(n){return hn.current.useState(n)};je.useSyncExternalStore=function(n,e,t){return hn.current.useSyncExternalStore(n,e,t)};je.useTransition=function(){return hn.current.useTransition()};je.version="18.3.1";K0.exports=je;var pt=K0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gM=pt,_M=Symbol.for("react.element"),vM=Symbol.for("react.fragment"),xM=Object.prototype.hasOwnProperty,yM=gM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,SM={key:!0,ref:!0,__self:!0,__source:!0};function sv(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)xM.call(e,i)&&!SM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_M,type:n,key:s,ref:o,props:r,_owner:yM.current}}Uc.Fragment=vM;Uc.jsx=sv;Uc.jsxs=sv;$0.exports=Uc;var le=$0.exports,ov={exports:{}},Wn={},av={exports:{}},lv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,K){var Q=I.length;I.push(K);e:for(;0<Q;){var re=Q-1>>>1,Se=I[re];if(0<r(Se,K))I[re]=K,I[Q]=Se,Q=re;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var K=I[0],Q=I.pop();if(Q!==K){I[0]=Q;e:for(var re=0,Se=I.length,Ge=Se>>>1;re<Ge;){var Y=2*(re+1)-1,te=I[Y],_e=Y+1,he=I[_e];if(0>r(te,Q))_e<Se&&0>r(he,te)?(I[re]=he,I[_e]=Q,re=_e):(I[re]=te,I[Y]=Q,re=Y);else if(_e<Se&&0>r(he,Q))I[re]=he,I[_e]=Q,re=_e;else break e}}return K}function r(I,K){var Q=I.sortIndex-K.sortIndex;return Q!==0?Q:I.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,_=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var K=t(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=I)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(u)}}function y(I){if(m=!1,v(I),!_)if(t(l)!==null)_=!0,z(C);else{var K=t(u);K!==null&&j(y,K.startTime-I)}}function C(I,K){_=!1,m&&(m=!1,d(b),b=-1),p=!0;var Q=h;try{for(v(K),f=t(l);f!==null&&(!(f.expirationTime>K)||I&&!D());){var re=f.callback;if(typeof re=="function"){f.callback=null,h=f.priorityLevel;var Se=re(f.expirationTime<=K);K=n.unstable_now(),typeof Se=="function"?f.callback=Se:f===t(l)&&i(l),v(K)}else i(l);f=t(l)}if(f!==null)var Ge=!0;else{var Y=t(u);Y!==null&&j(y,Y.startTime-K),Ge=!1}return Ge}finally{f=null,h=Q,p=!1}}var A=!1,T=null,b=-1,E=5,S=-1;function D(){return!(n.unstable_now()-S<E)}function B(){if(T!==null){var I=n.unstable_now();S=I;var K=!0;try{K=T(!0,I)}finally{K?O():(A=!1,T=null)}}else A=!1}var O;if(typeof x=="function")O=function(){x(B)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=B,O=function(){q.postMessage(null)}}else O=function(){g(B,0)};function z(I){T=I,A||(A=!0,O())}function j(I,K){b=g(function(){I(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,z(C))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var Q=h;h=K;try{return I()}finally{h=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=h;h=I;try{return K()}finally{h=Q}},n.unstable_scheduleCallback=function(I,K,Q){var re=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?re+Q:re):Q=re,I){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Q+Se,I={id:c++,callback:K,priorityLevel:I,startTime:Q,expirationTime:Se,sortIndex:-1},Q>re?(I.sortIndex=Q,e(u,I),t(l)===null&&I===t(u)&&(m?(d(b),b=-1):m=!0,j(y,Q-re))):(I.sortIndex=Se,e(l,I),_||p||(_=!0,z(C))),I},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(I){var K=h;return function(){var Q=h;h=K;try{return I.apply(this,arguments)}finally{h=Q}}}})(lv);av.exports=lv;var MM=av.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EM=pt,Vn=MM;function ae(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uv=new Set,ja={};function Ls(n,e){Oo(n,e),Oo(n+"Capture",e)}function Oo(n,e){for(ja[n]=e,n=0;n<e.length;n++)uv.add(e[n])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ch=Object.prototype.hasOwnProperty,TM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ng={},ig={};function wM(n){return Ch.call(ig,n)?!0:Ch.call(ng,n)?!1:TM.test(n)?ig[n]=!0:(ng[n]=!0,!1)}function AM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function CM(n,e,t,i){if(e===null||typeof e>"u"||AM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Qt[n]=new dn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Qt[e]=new dn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Qt[n]=new dn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Qt[n]=new dn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Qt[n]=new dn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Qt[n]=new dn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Qt[n]=new dn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Qt[n]=new dn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Qt[n]=new dn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Mp=/[\-:]([a-z])/g;function Ep(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Mp,Ep);Qt[e]=new dn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Mp,Ep);Qt[e]=new dn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Mp,Ep);Qt[e]=new dn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Qt[n]=new dn(n,1,!1,n.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Qt[n]=new dn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Tp(n,e,t,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(CM(e,t,r,i)&&(t=null),i||r===null?wM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ar=EM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Il=Symbol.for("react.element"),so=Symbol.for("react.portal"),oo=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),Rh=Symbol.for("react.profiler"),cv=Symbol.for("react.provider"),fv=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),bh=Symbol.for("react.suspense"),Ph=Symbol.for("react.suspense_list"),Cp=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),hv=Symbol.for("react.offscreen"),rg=Symbol.iterator;function aa(n){return n===null||typeof n!="object"?null:(n=rg&&n[rg]||n["@@iterator"],typeof n=="function"?n:null)}var yt=Object.assign,ff;function Ea(n){if(ff===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ff=e&&e[1]||""}return`
`+ff+n}var hf=!1;function df(n,e){if(!n||hf)return"";hf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{hf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ea(n):""}function RM(n){switch(n.tag){case 5:return Ea(n.type);case 16:return Ea("Lazy");case 13:return Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 2:case 15:return n=df(n.type,!1),n;case 11:return n=df(n.type.render,!1),n;case 1:return n=df(n.type,!0),n;default:return""}}function Lh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case oo:return"Fragment";case so:return"Portal";case Rh:return"Profiler";case wp:return"StrictMode";case bh:return"Suspense";case Ph:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case fv:return(n.displayName||"Context")+".Consumer";case cv:return(n._context.displayName||"Context")+".Provider";case Ap:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Cp:return e=n.displayName||null,e!==null?e:Lh(n.type)||"Memo";case _r:e=n._payload,n=n._init;try{return Lh(n(e))}catch{}}return null}function bM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lh(e);case 8:return e===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function dv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PM(n){var e=dv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ul(n){n._valueTracker||(n._valueTracker=PM(n))}function pv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=dv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function $u(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Dh(n,e){var t=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function sg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=zr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mv(n,e){e=e.checked,e!=null&&Tp(n,"checked",e,!1)}function Nh(n,e){mv(n,e);var t=zr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ih(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ih(n,e.type,zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function og(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ih(n,e,t){(e!=="number"||$u(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ta=Array.isArray;function Eo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+zr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Uh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ag(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ae(92));if(Ta(t)){if(1<t.length)throw Error(ae(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:zr(t)}}function gv(n,e){var t=zr(e.value),i=zr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function lg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function _v(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?_v(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ol,vv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ol=Ol||document.createElement("div"),Ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ol.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ya(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},LM=["Webkit","ms","Moz","O"];Object.keys(Pa).forEach(function(n){LM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Pa[e]=Pa[n]})});function xv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Pa.hasOwnProperty(n)&&Pa[n]?(""+e).trim():e+"px"}function yv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=xv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var DM=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fh(n,e){if(e){if(DM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function kh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zh=null;function Rp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Bh=null,To=null,wo=null;function ug(n){if(n=wl(n)){if(typeof Bh!="function")throw Error(ae(280));var e=n.stateNode;e&&(e=Bc(e),Bh(n.stateNode,n.type,e))}}function Sv(n){To?wo?wo.push(n):wo=[n]:To=n}function Mv(){if(To){var n=To,e=wo;if(wo=To=null,ug(n),e)for(n=0;n<e.length;n++)ug(e[n])}}function Ev(n,e){return n(e)}function Tv(){}var pf=!1;function wv(n,e,t){if(pf)return n(e,t);pf=!0;try{return Ev(n,e,t)}finally{pf=!1,(To!==null||wo!==null)&&(Tv(),Mv())}}function qa(n,e){var t=n.stateNode;if(t===null)return null;var i=Bc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ae(231,e,typeof t));return t}var Vh=!1;if(er)try{var la={};Object.defineProperty(la,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{Vh=!1}function NM(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var La=!1,Ku=null,Zu=!1,Hh=null,IM={onError:function(n){La=!0,Ku=n}};function UM(n,e,t,i,r,s,o,a,l){La=!1,Ku=null,NM.apply(IM,arguments)}function OM(n,e,t,i,r,s,o,a,l){if(UM.apply(this,arguments),La){if(La){var u=Ku;La=!1,Ku=null}else throw Error(ae(198));Zu||(Zu=!0,Hh=u)}}function Ds(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Av(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function cg(n){if(Ds(n)!==n)throw Error(ae(188))}function FM(n){var e=n.alternate;if(!e){if(e=Ds(n),e===null)throw Error(ae(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return cg(r),n;if(s===i)return cg(r),e;s=s.sibling}throw Error(ae(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(t.alternate!==i)throw Error(ae(190))}if(t.tag!==3)throw Error(ae(188));return t.stateNode.current===t?n:e}function Cv(n){return n=FM(n),n!==null?Rv(n):null}function Rv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Rv(n);if(e!==null)return e;n=n.sibling}return null}var bv=Vn.unstable_scheduleCallback,fg=Vn.unstable_cancelCallback,kM=Vn.unstable_shouldYield,zM=Vn.unstable_requestPaint,Ct=Vn.unstable_now,BM=Vn.unstable_getCurrentPriorityLevel,bp=Vn.unstable_ImmediatePriority,Pv=Vn.unstable_UserBlockingPriority,Qu=Vn.unstable_NormalPriority,VM=Vn.unstable_LowPriority,Lv=Vn.unstable_IdlePriority,Oc=null,bi=null;function HM(n){if(bi&&typeof bi.onCommitFiberRoot=="function")try{bi.onCommitFiberRoot(Oc,n,void 0,(n.current.flags&128)===128)}catch{}}var _i=Math.clz32?Math.clz32:XM,GM=Math.log,WM=Math.LN2;function XM(n){return n>>>=0,n===0?32:31-(GM(n)/WM|0)|0}var Fl=64,kl=4194304;function wa(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ju(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=wa(a):(s&=o,s!==0&&(i=wa(s)))}else o=t&~r,o!==0?i=wa(o):s!==0&&(i=wa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-_i(e),r=1<<t,i|=n[t],e&=~r;return i}function jM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-_i(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=jM(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Gh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dv(){var n=Fl;return Fl<<=1,!(Fl&4194240)&&(Fl=64),n}function mf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function El(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-_i(e),n[e]=t}function qM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-_i(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Pp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-_i(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var nt=0;function Nv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Iv,Lp,Uv,Ov,Fv,Wh=!1,zl=[],Rr=null,br=null,Pr=null,$a=new Map,Ka=new Map,yr=[],$M="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hg(n,e){switch(n){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(e.pointerId)}}function ua(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wl(e),e!==null&&Lp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function KM(n,e,t,i,r){switch(e){case"focusin":return Rr=ua(Rr,n,e,t,i,r),!0;case"dragenter":return br=ua(br,n,e,t,i,r),!0;case"mouseover":return Pr=ua(Pr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return $a.set(s,ua($a.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ka.set(s,ua(Ka.get(s)||null,n,e,t,i,r)),!0}return!1}function kv(n){var e=fs(n.target);if(e!==null){var t=Ds(e);if(t!==null){if(e=t.tag,e===13){if(e=Av(t),e!==null){n.blockedOn=e,Fv(n.priority,function(){Uv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Xh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);zh=i,t.target.dispatchEvent(i),zh=null}else return e=wl(t),e!==null&&Lp(e),n.blockedOn=t,!1;e.shift()}return!0}function dg(n,e,t){Pu(n)&&t.delete(e)}function ZM(){Wh=!1,Rr!==null&&Pu(Rr)&&(Rr=null),br!==null&&Pu(br)&&(br=null),Pr!==null&&Pu(Pr)&&(Pr=null),$a.forEach(dg),Ka.forEach(dg)}function ca(n,e){n.blockedOn===e&&(n.blockedOn=null,Wh||(Wh=!0,Vn.unstable_scheduleCallback(Vn.unstable_NormalPriority,ZM)))}function Za(n){function e(r){return ca(r,n)}if(0<zl.length){ca(zl[0],n);for(var t=1;t<zl.length;t++){var i=zl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Rr!==null&&ca(Rr,n),br!==null&&ca(br,n),Pr!==null&&ca(Pr,n),$a.forEach(e),Ka.forEach(e),t=0;t<yr.length;t++)i=yr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<yr.length&&(t=yr[0],t.blockedOn===null);)kv(t),t.blockedOn===null&&yr.shift()}var Ao=ar.ReactCurrentBatchConfig,ec=!0;function QM(n,e,t,i){var r=nt,s=Ao.transition;Ao.transition=null;try{nt=1,Dp(n,e,t,i)}finally{nt=r,Ao.transition=s}}function JM(n,e,t,i){var r=nt,s=Ao.transition;Ao.transition=null;try{nt=4,Dp(n,e,t,i)}finally{nt=r,Ao.transition=s}}function Dp(n,e,t,i){if(ec){var r=Xh(n,e,t,i);if(r===null)wf(n,e,i,tc,t),hg(n,i);else if(KM(r,n,e,t,i))i.stopPropagation();else if(hg(n,i),e&4&&-1<$M.indexOf(n)){for(;r!==null;){var s=wl(r);if(s!==null&&Iv(s),s=Xh(n,e,t,i),s===null&&wf(n,e,i,tc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else wf(n,e,i,null,t)}}var tc=null;function Xh(n,e,t,i){if(tc=null,n=Rp(i),n=fs(n),n!==null)if(e=Ds(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Av(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return tc=n,null}function zv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BM()){case bp:return 1;case Pv:return 4;case Qu:case VM:return 16;case Lv:return 536870912;default:return 16}default:return 16}}var Er=null,Np=null,Lu=null;function Bv(){if(Lu)return Lu;var n,e=Np,t=e.length,i,r="value"in Er?Er.value:Er.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Lu=r.slice(n,1<i?1-i:void 0)}function Du(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Bl(){return!0}function pg(){return!1}function Xn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bl:pg,this.isPropagationStopped=pg,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),e}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ip=Xn(ta),Tl=yt({},ta,{view:0,detail:0}),eE=Xn(Tl),gf,_f,fa,Fc=yt({},Tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Up,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fa&&(fa&&n.type==="mousemove"?(gf=n.screenX-fa.screenX,_f=n.screenY-fa.screenY):_f=gf=0,fa=n),gf)},movementY:function(n){return"movementY"in n?n.movementY:_f}}),mg=Xn(Fc),tE=yt({},Fc,{dataTransfer:0}),nE=Xn(tE),iE=yt({},Tl,{relatedTarget:0}),vf=Xn(iE),rE=yt({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),sE=Xn(rE),oE=yt({},ta,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),aE=Xn(oE),lE=yt({},ta,{data:0}),gg=Xn(lE),uE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hE(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=fE[n])?!!e[n]:!1}function Up(){return hE}var dE=yt({},Tl,{key:function(n){if(n.key){var e=uE[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Du(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?cE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Up,charCode:function(n){return n.type==="keypress"?Du(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Du(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),pE=Xn(dE),mE=yt({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_g=Xn(mE),gE=yt({},Tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Up}),_E=Xn(gE),vE=yt({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),xE=Xn(vE),yE=yt({},Fc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),SE=Xn(yE),ME=[9,13,27,32],Op=er&&"CompositionEvent"in window,Da=null;er&&"documentMode"in document&&(Da=document.documentMode);var EE=er&&"TextEvent"in window&&!Da,Vv=er&&(!Op||Da&&8<Da&&11>=Da),vg=" ",xg=!1;function Hv(n,e){switch(n){case"keyup":return ME.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ao=!1;function TE(n,e){switch(n){case"compositionend":return Gv(e);case"keypress":return e.which!==32?null:(xg=!0,vg);case"textInput":return n=e.data,n===vg&&xg?null:n;default:return null}}function wE(n,e){if(ao)return n==="compositionend"||!Op&&Hv(n,e)?(n=Bv(),Lu=Np=Er=null,ao=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vv&&e.locale!=="ko"?null:e.data;default:return null}}var AE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!AE[n.type]:e==="textarea"}function Wv(n,e,t,i){Sv(i),e=nc(e,"onChange"),0<e.length&&(t=new Ip("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Na=null,Qa=null;function CE(n){tx(n,0)}function kc(n){var e=co(n);if(pv(e))return n}function RE(n,e){if(n==="change")return e}var Xv=!1;if(er){var xf;if(er){var yf="oninput"in document;if(!yf){var Sg=document.createElement("div");Sg.setAttribute("oninput","return;"),yf=typeof Sg.oninput=="function"}xf=yf}else xf=!1;Xv=xf&&(!document.documentMode||9<document.documentMode)}function Mg(){Na&&(Na.detachEvent("onpropertychange",jv),Qa=Na=null)}function jv(n){if(n.propertyName==="value"&&kc(Qa)){var e=[];Wv(e,Qa,n,Rp(n)),wv(CE,e)}}function bE(n,e,t){n==="focusin"?(Mg(),Na=e,Qa=t,Na.attachEvent("onpropertychange",jv)):n==="focusout"&&Mg()}function PE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return kc(Qa)}function LE(n,e){if(n==="click")return kc(e)}function DE(n,e){if(n==="input"||n==="change")return kc(e)}function NE(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var yi=typeof Object.is=="function"?Object.is:NE;function Ja(n,e){if(yi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Ch.call(e,r)||!yi(n[r],e[r]))return!1}return!0}function Eg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Tg(n,e){var t=Eg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Eg(t)}}function Yv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Yv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function qv(){for(var n=window,e=$u();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=$u(n.document)}return e}function Fp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function IE(n){var e=qv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Yv(t.ownerDocument.documentElement,t)){if(i!==null&&Fp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Tg(t,s);var o=Tg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var UE=er&&"documentMode"in document&&11>=document.documentMode,lo=null,jh=null,Ia=null,Yh=!1;function wg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Yh||lo==null||lo!==$u(i)||(i=lo,"selectionStart"in i&&Fp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ia&&Ja(Ia,i)||(Ia=i,i=nc(jh,"onSelect"),0<i.length&&(e=new Ip("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=lo)))}function Vl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var uo={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},Sf={},$v={};er&&($v=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function zc(n){if(Sf[n])return Sf[n];if(!uo[n])return n;var e=uo[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in $v)return Sf[n]=e[t];return n}var Kv=zc("animationend"),Zv=zc("animationiteration"),Qv=zc("animationstart"),Jv=zc("transitionend"),ex=new Map,Ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(n,e){ex.set(n,e),Ls(e,[n])}for(var Mf=0;Mf<Ag.length;Mf++){var Ef=Ag[Mf],OE=Ef.toLowerCase(),FE=Ef[0].toUpperCase()+Ef.slice(1);Xr(OE,"on"+FE)}Xr(Kv,"onAnimationEnd");Xr(Zv,"onAnimationIteration");Xr(Qv,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(Jv,"onTransitionEnd");Oo("onMouseEnter",["mouseout","mouseover"]);Oo("onMouseLeave",["mouseout","mouseover"]);Oo("onPointerEnter",["pointerout","pointerover"]);Oo("onPointerLeave",["pointerout","pointerover"]);Ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function Cg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,OM(i,e,void 0,n),n.currentTarget=null}function tx(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Cg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Cg(r,a,u),s=l}}}if(Zu)throw n=Hh,Zu=!1,Hh=null,n}function at(n,e){var t=e[Qh];t===void 0&&(t=e[Qh]=new Set);var i=n+"__bubble";t.has(i)||(nx(e,n,2,!1),t.add(i))}function Tf(n,e,t){var i=0;e&&(i|=4),nx(t,n,i,e)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function el(n){if(!n[Hl]){n[Hl]=!0,uv.forEach(function(t){t!=="selectionchange"&&(kE.has(t)||Tf(t,!1,n),Tf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Hl]||(e[Hl]=!0,Tf("selectionchange",!1,e))}}function nx(n,e,t,i){switch(zv(e)){case 1:var r=QM;break;case 4:r=JM;break;default:r=Dp}t=r.bind(null,e,t,n),r=void 0,!Vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function wf(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=fs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}wv(function(){var u=s,c=Rp(t),f=[];e:{var h=ex.get(n);if(h!==void 0){var p=Ip,_=n;switch(n){case"keypress":if(Du(t)===0)break e;case"keydown":case"keyup":p=pE;break;case"focusin":_="focus",p=vf;break;case"focusout":_="blur",p=vf;break;case"beforeblur":case"afterblur":p=vf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=mg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=nE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_E;break;case Kv:case Zv:case Qv:p=sE;break;case Jv:p=xE;break;case"scroll":p=eE;break;case"wheel":p=SE;break;case"copy":case"cut":case"paste":p=aE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=_g}var m=(e&4)!==0,g=!m&&n==="scroll",d=m?h!==null?h+"Capture":null:h;m=[];for(var x=u,v;x!==null;){v=x;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=qa(x,d),y!=null&&m.push(tl(x,y,v)))),g)break;x=x.return}0<m.length&&(h=new p(h,_,null,t,c),f.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==zh&&(_=t.relatedTarget||t.fromElement)&&(fs(_)||_[tr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?fs(_):null,_!==null&&(g=Ds(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(m=mg,y="onMouseLeave",d="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(m=_g,y="onPointerLeave",d="onPointerEnter",x="pointer"),g=p==null?h:co(p),v=_==null?h:co(_),h=new m(y,x+"leave",p,t,c),h.target=g,h.relatedTarget=v,y=null,fs(c)===u&&(m=new m(d,x+"enter",_,t,c),m.target=v,m.relatedTarget=g,y=m),g=y,p&&_)t:{for(m=p,d=_,x=0,v=m;v;v=Fs(v))x++;for(v=0,y=d;y;y=Fs(y))v++;for(;0<x-v;)m=Fs(m),x--;for(;0<v-x;)d=Fs(d),v--;for(;x--;){if(m===d||d!==null&&m===d.alternate)break t;m=Fs(m),d=Fs(d)}m=null}else m=null;p!==null&&Rg(f,h,p,m,!1),_!==null&&g!==null&&Rg(f,g,_,m,!0)}}e:{if(h=u?co(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=RE;else if(yg(h))if(Xv)C=DE;else{C=PE;var A=bE}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=LE);if(C&&(C=C(n,u))){Wv(f,C,t,c);break e}A&&A(n,h,u),n==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Ih(h,"number",h.value)}switch(A=u?co(u):window,n){case"focusin":(yg(A)||A.contentEditable==="true")&&(lo=A,jh=u,Ia=null);break;case"focusout":Ia=jh=lo=null;break;case"mousedown":Yh=!0;break;case"contextmenu":case"mouseup":case"dragend":Yh=!1,wg(f,t,c);break;case"selectionchange":if(UE)break;case"keydown":case"keyup":wg(f,t,c)}var T;if(Op)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ao?Hv(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(Vv&&t.locale!=="ko"&&(ao||b!=="onCompositionStart"?b==="onCompositionEnd"&&ao&&(T=Bv()):(Er=c,Np="value"in Er?Er.value:Er.textContent,ao=!0)),A=nc(u,b),0<A.length&&(b=new gg(b,n,null,t,c),f.push({event:b,listeners:A}),T?b.data=T:(T=Gv(t),T!==null&&(b.data=T)))),(T=EE?TE(n,t):wE(n,t))&&(u=nc(u,"onBeforeInput"),0<u.length&&(c=new gg("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=T))}tx(f,e)})}function tl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function nc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=qa(n,t),s!=null&&i.unshift(tl(n,s,r)),s=qa(n,e),s!=null&&i.push(tl(n,s,r))),n=n.return}return i}function Fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rg(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=qa(t,s),l!=null&&o.unshift(tl(t,l,a))):r||(l=qa(t,s),l!=null&&o.push(tl(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var zE=/\r\n?/g,BE=/\u0000|\uFFFD/g;function bg(n){return(typeof n=="string"?n:""+n).replace(zE,`
`).replace(BE,"")}function Gl(n,e,t){if(e=bg(e),bg(n)!==e&&t)throw Error(ae(425))}function ic(){}var qh=null,$h=null;function Kh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zh=typeof setTimeout=="function"?setTimeout:void 0,VE=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,HE=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(n){return Pg.resolve(null).then(n).catch(GE)}:Zh;function GE(n){setTimeout(function(){throw n})}function Af(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Za(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Za(e)}function Lr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Lg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var na=Math.random().toString(36).slice(2),Ai="__reactFiber$"+na,nl="__reactProps$"+na,tr="__reactContainer$"+na,Qh="__reactEvents$"+na,WE="__reactListeners$"+na,XE="__reactHandles$"+na;function fs(n){var e=n[Ai];if(e)return e;for(var t=n.parentNode;t;){if(e=t[tr]||t[Ai]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Lg(n);n!==null;){if(t=n[Ai])return t;n=Lg(n)}return e}n=t,t=n.parentNode}return null}function wl(n){return n=n[Ai]||n[tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function co(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ae(33))}function Bc(n){return n[nl]||null}var Jh=[],fo=-1;function jr(n){return{current:n}}function lt(n){0>fo||(n.current=Jh[fo],Jh[fo]=null,fo--)}function ot(n,e){fo++,Jh[fo]=n.current,n.current=e}var Br={},an=jr(Br),vn=jr(!1),Es=Br;function Fo(n,e){var t=n.type.contextTypes;if(!t)return Br;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function xn(n){return n=n.childContextTypes,n!=null}function rc(){lt(vn),lt(an)}function Dg(n,e,t){if(an.current!==Br)throw Error(ae(168));ot(an,e),ot(vn,t)}function ix(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,bM(n)||"Unknown",r));return yt({},t,i)}function sc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,Es=an.current,ot(an,n),ot(vn,vn.current),!0}function Ng(n,e,t){var i=n.stateNode;if(!i)throw Error(ae(169));t?(n=ix(n,e,Es),i.__reactInternalMemoizedMergedChildContext=n,lt(vn),lt(an),ot(an,n)):lt(vn),ot(vn,t)}var Wi=null,Vc=!1,Cf=!1;function rx(n){Wi===null?Wi=[n]:Wi.push(n)}function jE(n){Vc=!0,rx(n)}function Yr(){if(!Cf&&Wi!==null){Cf=!0;var n=0,e=nt;try{var t=Wi;for(nt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Wi=null,Vc=!1}catch(r){throw Wi!==null&&(Wi=Wi.slice(n+1)),bv(bp,Yr),r}finally{nt=e,Cf=!1}}return null}var ho=[],po=0,oc=null,ac=0,Kn=[],Zn=0,Ts=null,Yi=1,qi="";function ss(n,e){ho[po++]=ac,ho[po++]=oc,oc=n,ac=e}function sx(n,e,t){Kn[Zn++]=Yi,Kn[Zn++]=qi,Kn[Zn++]=Ts,Ts=n;var i=Yi;n=qi;var r=32-_i(i)-1;i&=~(1<<r),t+=1;var s=32-_i(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Yi=1<<32-_i(e)+r|t<<r|i,qi=s+n}else Yi=1<<s|t<<r|i,qi=n}function kp(n){n.return!==null&&(ss(n,1),sx(n,1,0))}function zp(n){for(;n===oc;)oc=ho[--po],ho[po]=null,ac=ho[--po],ho[po]=null;for(;n===Ts;)Ts=Kn[--Zn],Kn[Zn]=null,qi=Kn[--Zn],Kn[Zn]=null,Yi=Kn[--Zn],Kn[Zn]=null}var zn=null,Un=null,ft=!1,di=null;function ox(n,e){var t=Jn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ig(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,zn=n,Un=Lr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,zn=n,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ts!==null?{id:Yi,overflow:qi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Jn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,zn=n,Un=null,!0):!1;default:return!1}}function ed(n){return(n.mode&1)!==0&&(n.flags&128)===0}function td(n){if(ft){var e=Un;if(e){var t=e;if(!Ig(n,e)){if(ed(n))throw Error(ae(418));e=Lr(t.nextSibling);var i=zn;e&&Ig(n,e)?ox(i,t):(n.flags=n.flags&-4097|2,ft=!1,zn=n)}}else{if(ed(n))throw Error(ae(418));n.flags=n.flags&-4097|2,ft=!1,zn=n}}}function Ug(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Wl(n){if(n!==zn)return!1;if(!ft)return Ug(n),ft=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Kh(n.type,n.memoizedProps)),e&&(e=Un)){if(ed(n))throw ax(),Error(ae(418));for(;e;)ox(n,e),e=Lr(e.nextSibling)}if(Ug(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ae(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Un=Lr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Un=null}}else Un=zn?Lr(n.stateNode.nextSibling):null;return!0}function ax(){for(var n=Un;n;)n=Lr(n.nextSibling)}function ko(){Un=zn=null,ft=!1}function Bp(n){di===null?di=[n]:di.push(n)}var YE=ar.ReactCurrentBatchConfig;function ha(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ae(309));var i=t.stateNode}if(!i)throw Error(ae(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ae(284));if(!t._owner)throw Error(ae(290,n))}return n}function Xl(n,e){throw n=Object.prototype.toString.call(e),Error(ae(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Og(n){var e=n._init;return e(n._payload)}function lx(n){function e(d,x){if(n){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function t(d,x){if(!n)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=Ur(d,x),d.index=0,d.sibling=null,d}function s(d,x,v){return d.index=v,n?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,x,v,y){return x===null||x.tag!==6?(x=If(v,d.mode,y),x.return=d,x):(x=r(x,v),x.return=d,x)}function l(d,x,v,y){var C=v.type;return C===oo?c(d,x,v.props.children,y,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&Og(C)===x.type)?(y=r(x,v.props),y.ref=ha(d,x,v),y.return=d,y):(y=zu(v.type,v.key,v.props,null,d.mode,y),y.ref=ha(d,x,v),y.return=d,y)}function u(d,x,v,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Uf(v,d.mode,y),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function c(d,x,v,y,C){return x===null||x.tag!==7?(x=vs(v,d.mode,y,C),x.return=d,x):(x=r(x,v),x.return=d,x)}function f(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=If(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Il:return v=zu(x.type,x.key,x.props,null,d.mode,v),v.ref=ha(d,null,x),v.return=d,v;case so:return x=Uf(x,d.mode,v),x.return=d,x;case _r:var y=x._init;return f(d,y(x._payload),v)}if(Ta(x)||aa(x))return x=vs(x,d.mode,v,null),x.return=d,x;Xl(d,x)}return null}function h(d,x,v,y){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(d,x,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Il:return v.key===C?l(d,x,v,y):null;case so:return v.key===C?u(d,x,v,y):null;case _r:return C=v._init,h(d,x,C(v._payload),y)}if(Ta(v)||aa(v))return C!==null?null:c(d,x,v,y,null);Xl(d,v)}return null}function p(d,x,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(v)||null,a(x,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Il:return d=d.get(y.key===null?v:y.key)||null,l(x,d,y,C);case so:return d=d.get(y.key===null?v:y.key)||null,u(x,d,y,C);case _r:var A=y._init;return p(d,x,v,A(y._payload),C)}if(Ta(y)||aa(y))return d=d.get(v)||null,c(x,d,y,C,null);Xl(x,y)}return null}function _(d,x,v,y){for(var C=null,A=null,T=x,b=x=0,E=null;T!==null&&b<v.length;b++){T.index>b?(E=T,T=null):E=T.sibling;var S=h(d,T,v[b],y);if(S===null){T===null&&(T=E);break}n&&T&&S.alternate===null&&e(d,T),x=s(S,x,b),A===null?C=S:A.sibling=S,A=S,T=E}if(b===v.length)return t(d,T),ft&&ss(d,b),C;if(T===null){for(;b<v.length;b++)T=f(d,v[b],y),T!==null&&(x=s(T,x,b),A===null?C=T:A.sibling=T,A=T);return ft&&ss(d,b),C}for(T=i(d,T);b<v.length;b++)E=p(T,d,b,v[b],y),E!==null&&(n&&E.alternate!==null&&T.delete(E.key===null?b:E.key),x=s(E,x,b),A===null?C=E:A.sibling=E,A=E);return n&&T.forEach(function(D){return e(d,D)}),ft&&ss(d,b),C}function m(d,x,v,y){var C=aa(v);if(typeof C!="function")throw Error(ae(150));if(v=C.call(v),v==null)throw Error(ae(151));for(var A=C=null,T=x,b=x=0,E=null,S=v.next();T!==null&&!S.done;b++,S=v.next()){T.index>b?(E=T,T=null):E=T.sibling;var D=h(d,T,S.value,y);if(D===null){T===null&&(T=E);break}n&&T&&D.alternate===null&&e(d,T),x=s(D,x,b),A===null?C=D:A.sibling=D,A=D,T=E}if(S.done)return t(d,T),ft&&ss(d,b),C;if(T===null){for(;!S.done;b++,S=v.next())S=f(d,S.value,y),S!==null&&(x=s(S,x,b),A===null?C=S:A.sibling=S,A=S);return ft&&ss(d,b),C}for(T=i(d,T);!S.done;b++,S=v.next())S=p(T,d,b,S.value,y),S!==null&&(n&&S.alternate!==null&&T.delete(S.key===null?b:S.key),x=s(S,x,b),A===null?C=S:A.sibling=S,A=S);return n&&T.forEach(function(B){return e(d,B)}),ft&&ss(d,b),C}function g(d,x,v,y){if(typeof v=="object"&&v!==null&&v.type===oo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Il:e:{for(var C=v.key,A=x;A!==null;){if(A.key===C){if(C=v.type,C===oo){if(A.tag===7){t(d,A.sibling),x=r(A,v.props.children),x.return=d,d=x;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&Og(C)===A.type){t(d,A.sibling),x=r(A,v.props),x.ref=ha(d,A,v),x.return=d,d=x;break e}t(d,A);break}else e(d,A);A=A.sibling}v.type===oo?(x=vs(v.props.children,d.mode,y,v.key),x.return=d,d=x):(y=zu(v.type,v.key,v.props,null,d.mode,y),y.ref=ha(d,x,v),y.return=d,d=y)}return o(d);case so:e:{for(A=v.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){t(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{t(d,x);break}else e(d,x);x=x.sibling}x=Uf(v,d.mode,y),x.return=d,d=x}return o(d);case _r:return A=v._init,g(d,x,A(v._payload),y)}if(Ta(v))return _(d,x,v,y);if(aa(v))return m(d,x,v,y);Xl(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(t(d,x.sibling),x=r(x,v),x.return=d,d=x):(t(d,x),x=If(v,d.mode,y),x.return=d,d=x),o(d)):t(d,x)}return g}var zo=lx(!0),ux=lx(!1),lc=jr(null),uc=null,mo=null,Vp=null;function Hp(){Vp=mo=uc=null}function Gp(n){var e=lc.current;lt(lc),n._currentValue=e}function nd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Co(n,e){uc=n,Vp=mo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(_n=!0),n.firstContext=null)}function ri(n){var e=n._currentValue;if(Vp!==n)if(n={context:n,memoizedValue:e,next:null},mo===null){if(uc===null)throw Error(ae(308));mo=n,uc.dependencies={lanes:0,firstContext:n}}else mo=mo.next=n;return e}var hs=null;function Wp(n){hs===null?hs=[n]:hs.push(n)}function cx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Wp(e)):(t.next=r.next,r.next=t),e.interleaved=t,nr(n,i)}function nr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var vr=!1;function Xp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,nr(n,t)}return r=i.interleaved,r===null?(e.next=e,Wp(i)):(e.next=r.next,r.next=e),i.interleaved=e,nr(n,t)}function Nu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Pp(n,t)}}function Fg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function cc(n,e,t,i){var r=n.updateQueue;vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,m=a;switch(h=e,p=t,m.tag){case 1:if(_=m.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=m.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=yt({},f,h);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);As|=o,n.lanes=o,n.memoizedState=f}}function kg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Al={},Pi=jr(Al),il=jr(Al),rl=jr(Al);function ds(n){if(n===Al)throw Error(ae(174));return n}function jp(n,e){switch(ot(rl,e),ot(il,n),ot(Pi,Al),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Oh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Oh(e,n)}lt(Pi),ot(Pi,e)}function Bo(){lt(Pi),lt(il),lt(rl)}function hx(n){ds(rl.current);var e=ds(Pi.current),t=Oh(e,n.type);e!==t&&(ot(il,n),ot(Pi,t))}function Yp(n){il.current===n&&(lt(Pi),lt(il))}var mt=jr(0);function fc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rf=[];function qp(){for(var n=0;n<Rf.length;n++)Rf[n]._workInProgressVersionPrimary=null;Rf.length=0}var Iu=ar.ReactCurrentDispatcher,bf=ar.ReactCurrentBatchConfig,ws=0,xt=null,Ut=null,Ht=null,hc=!1,Ua=!1,sl=0,qE=0;function Jt(){throw Error(ae(321))}function $p(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!yi(n[t],e[t]))return!1;return!0}function Kp(n,e,t,i,r,s){if(ws=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Iu.current=n===null||n.memoizedState===null?QE:JE,n=t(i,r),Ua){s=0;do{if(Ua=!1,sl=0,25<=s)throw Error(ae(301));s+=1,Ht=Ut=null,e.updateQueue=null,Iu.current=e1,n=t(i,r)}while(Ua)}if(Iu.current=dc,e=Ut!==null&&Ut.next!==null,ws=0,Ht=Ut=xt=null,hc=!1,e)throw Error(ae(300));return n}function Zp(){var n=sl!==0;return sl=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?xt.memoizedState=Ht=n:Ht=Ht.next=n,Ht}function si(){if(Ut===null){var n=xt.alternate;n=n!==null?n.memoizedState:null}else n=Ut.next;var e=Ht===null?xt.memoizedState:Ht.next;if(e!==null)Ht=e,Ut=n;else{if(n===null)throw Error(ae(310));Ut=n,n={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Ht===null?xt.memoizedState=Ht=n:Ht=Ht.next=n}return Ht}function ol(n,e){return typeof e=="function"?e(n):e}function Pf(n){var e=si(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=Ut,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ws&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,xt.lanes|=c,As|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,yi(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,xt.lanes|=s,As|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Lf(n){var e=si(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);yi(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function dx(){}function px(n,e){var t=xt,i=si(),r=e(),s=!yi(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,Qp(_x.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(t.flags|=2048,al(9,gx.bind(null,t,i,r,e),void 0,null),Wt===null)throw Error(ae(349));ws&30||mx(t,e,r)}return r}function mx(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function gx(n,e,t,i){e.value=t,e.getSnapshot=i,vx(e)&&xx(n)}function _x(n,e,t){return t(function(){vx(e)&&xx(n)})}function vx(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!yi(n,t)}catch{return!0}}function xx(n){var e=nr(n,1);e!==null&&vi(e,n,1,-1)}function zg(n){var e=Mi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:n},e.queue=n,n=n.dispatch=ZE.bind(null,xt,n),[e.memoizedState,n]}function al(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function yx(){return si().memoizedState}function Uu(n,e,t,i){var r=Mi();xt.flags|=n,r.memoizedState=al(1|e,t,void 0,i===void 0?null:i)}function Hc(n,e,t,i){var r=si();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var o=Ut.memoizedState;if(s=o.destroy,i!==null&&$p(i,o.deps)){r.memoizedState=al(e,t,s,i);return}}xt.flags|=n,r.memoizedState=al(1|e,t,s,i)}function Bg(n,e){return Uu(8390656,8,n,e)}function Qp(n,e){return Hc(2048,8,n,e)}function Sx(n,e){return Hc(4,2,n,e)}function Mx(n,e){return Hc(4,4,n,e)}function Ex(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Tx(n,e,t){return t=t!=null?t.concat([n]):null,Hc(4,4,Ex.bind(null,e,n),t)}function Jp(){}function wx(n,e){var t=si();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&$p(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Ax(n,e){var t=si();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&$p(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Cx(n,e,t){return ws&21?(yi(t,e)||(t=Dv(),xt.lanes|=t,As|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,_n=!0),n.memoizedState=t)}function $E(n,e){var t=nt;nt=t!==0&&4>t?t:4,n(!0);var i=bf.transition;bf.transition={};try{n(!1),e()}finally{nt=t,bf.transition=i}}function Rx(){return si().memoizedState}function KE(n,e,t){var i=Ir(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},bx(n))Px(e,t);else if(t=cx(n,e,t,i),t!==null){var r=fn();vi(t,n,i,r),Lx(t,e,i)}}function ZE(n,e,t){var i=Ir(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(bx(n))Px(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,yi(a,o)){var l=e.interleaved;l===null?(r.next=r,Wp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=cx(n,e,r,i),t!==null&&(r=fn(),vi(t,n,i,r),Lx(t,e,i))}}function bx(n){var e=n.alternate;return n===xt||e!==null&&e===xt}function Px(n,e){Ua=hc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Lx(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Pp(n,t)}}var dc={readContext:ri,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},QE={readContext:ri,useCallback:function(n,e){return Mi().memoizedState=[n,e===void 0?null:e],n},useContext:ri,useEffect:Bg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Uu(4194308,4,Ex.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Uu(4194308,4,n,e)},useInsertionEffect:function(n,e){return Uu(4,2,n,e)},useMemo:function(n,e){var t=Mi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Mi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=KE.bind(null,xt,n),[i.memoizedState,n]},useRef:function(n){var e=Mi();return n={current:n},e.memoizedState=n},useState:zg,useDebugValue:Jp,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=zg(!1),e=n[0];return n=$E.bind(null,n[1]),Mi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=xt,r=Mi();if(ft){if(t===void 0)throw Error(ae(407));t=t()}else{if(t=e(),Wt===null)throw Error(ae(349));ws&30||mx(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Bg(_x.bind(null,i,s,n),[n]),i.flags|=2048,al(9,gx.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Mi(),e=Wt.identifierPrefix;if(ft){var t=qi,i=Yi;t=(i&~(1<<32-_i(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=sl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=qE++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},JE={readContext:ri,useCallback:wx,useContext:ri,useEffect:Qp,useImperativeHandle:Tx,useInsertionEffect:Sx,useLayoutEffect:Mx,useMemo:Ax,useReducer:Pf,useRef:yx,useState:function(){return Pf(ol)},useDebugValue:Jp,useDeferredValue:function(n){var e=si();return Cx(e,Ut.memoizedState,n)},useTransition:function(){var n=Pf(ol)[0],e=si().memoizedState;return[n,e]},useMutableSource:dx,useSyncExternalStore:px,useId:Rx,unstable_isNewReconciler:!1},e1={readContext:ri,useCallback:wx,useContext:ri,useEffect:Qp,useImperativeHandle:Tx,useInsertionEffect:Sx,useLayoutEffect:Mx,useMemo:Ax,useReducer:Lf,useRef:yx,useState:function(){return Lf(ol)},useDebugValue:Jp,useDeferredValue:function(n){var e=si();return Ut===null?e.memoizedState=n:Cx(e,Ut.memoizedState,n)},useTransition:function(){var n=Lf(ol)[0],e=si().memoizedState;return[n,e]},useMutableSource:dx,useSyncExternalStore:px,useId:Rx,unstable_isNewReconciler:!1};function fi(n,e){if(n&&n.defaultProps){e=yt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function id(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:yt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Gc={isMounted:function(n){return(n=n._reactInternals)?Ds(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=fn(),r=Ir(n),s=Zi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Dr(n,s,r),e!==null&&(vi(e,n,r,i),Nu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=fn(),r=Ir(n),s=Zi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Dr(n,s,r),e!==null&&(vi(e,n,r,i),Nu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=fn(),i=Ir(n),r=Zi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Dr(n,r,i),e!==null&&(vi(e,n,i,t),Nu(e,n,i))}};function Vg(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ja(t,i)||!Ja(r,s):!0}function Dx(n,e,t){var i=!1,r=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=ri(s):(r=xn(e)?Es:an.current,i=e.contextTypes,s=(i=i!=null)?Fo(n,r):Br),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Hg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Gc.enqueueReplaceState(e,e.state,null)}function rd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Xp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ri(s):(s=xn(e)?Es:an.current,r.context=Fo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(id(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gc.enqueueReplaceState(r,r.state,null),cc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Vo(n,e){try{var t="",i=e;do t+=RM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Df(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function sd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var t1=typeof WeakMap=="function"?WeakMap:Map;function Nx(n,e,t){t=Zi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){mc||(mc=!0,md=i),sd(n,e)},t}function Ix(n,e,t){t=Zi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){sd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){sd(n,e),typeof i!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Gg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new t1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=m1.bind(null,n,e,t),e.then(n,n))}function Wg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Xg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Zi(-1,1),e.tag=2,Dr(t,e,1))),t.lanes|=1),n)}var n1=ar.ReactCurrentOwner,_n=!1;function un(n,e,t,i){e.child=n===null?ux(e,null,t,i):zo(e,n.child,t,i)}function jg(n,e,t,i,r){t=t.render;var s=e.ref;return Co(e,r),i=Kp(n,e,t,i,s,r),t=Zp(),n!==null&&!_n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ir(n,e,r)):(ft&&t&&kp(e),e.flags|=1,un(n,e,i,r),e.child)}function Yg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!am(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Ux(n,e,s,i,r)):(n=zu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ja,t(o,i)&&n.ref===e.ref)return ir(n,e,r)}return e.flags|=1,n=Ur(s,i),n.ref=e.ref,n.return=e,e.child=n}function Ux(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ja(s,i)&&n.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(_n=!0);else return e.lanes=n.lanes,ir(n,e,r)}return od(n,e,t,i,r)}function Ox(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(_o,Dn),Dn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ot(_o,Dn),Dn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ot(_o,Dn),Dn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ot(_o,Dn),Dn|=i;return un(n,e,r,t),e.child}function Fx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function od(n,e,t,i,r){var s=xn(t)?Es:an.current;return s=Fo(e,s),Co(e,r),t=Kp(n,e,t,i,s,r),i=Zp(),n!==null&&!_n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ir(n,e,r)):(ft&&i&&kp(e),e.flags|=1,un(n,e,t,r),e.child)}function qg(n,e,t,i,r){if(xn(t)){var s=!0;sc(e)}else s=!1;if(Co(e,r),e.stateNode===null)Ou(n,e),Dx(e,t,i),rd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ri(u):(u=xn(t)?Es:an.current,u=Fo(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Hg(e,o,i,u),vr=!1;var h=e.memoizedState;o.state=h,cc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||vn.current||vr?(typeof c=="function"&&(id(e,t,c,i),l=e.memoizedState),(a=vr||Vg(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,fx(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:fi(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ri(l):(l=xn(t)?Es:an.current,l=Fo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Hg(e,o,i,l),vr=!1,h=e.memoizedState,o.state=h,cc(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||vn.current||vr?(typeof p=="function"&&(id(e,t,p,i),_=e.memoizedState),(u=vr||Vg(e,t,u,i,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return ad(n,e,t,i,s,r)}function ad(n,e,t,i,r,s){Fx(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ng(e,t,!1),ir(n,e,s);i=e.stateNode,n1.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=zo(e,n.child,null,s),e.child=zo(e,null,a,s)):un(n,e,a,s),e.memoizedState=i.state,r&&Ng(e,t,!0),e.child}function kx(n){var e=n.stateNode;e.pendingContext?Dg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Dg(n,e.context,!1),jp(n,e.containerInfo)}function $g(n,e,t,i,r){return ko(),Bp(r),e.flags|=256,un(n,e,t,i),e.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function ud(n){return{baseLanes:n,cachePool:null,transitions:null}}function zx(n,e,t){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ot(mt,r&1),n===null)return td(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jc(o,i,0,null),n=vs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ud(t),e.memoizedState=ld,n):em(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return i1(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ur(a,s):(s=vs(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?ud(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=ld,i}return s=n.child,n=s.sibling,i=Ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function em(n,e){return e=jc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function jl(n,e,t,i){return i!==null&&Bp(i),zo(e,n.child,null,t),n=em(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function i1(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Df(Error(ae(422))),jl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=jc({mode:"visible",children:i.children},r,0,null),s=vs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zo(e,n.child,null,o),e.child.memoizedState=ud(o),e.memoizedState=ld,s);if(!(e.mode&1))return jl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Df(s,i,void 0),jl(n,e,o,i)}if(a=(o&n.childLanes)!==0,_n||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,nr(n,r),vi(i,n,r,-1))}return om(),i=Df(Error(ae(421))),jl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=g1.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Un=Lr(r.nextSibling),zn=e,ft=!0,di=null,n!==null&&(Kn[Zn++]=Yi,Kn[Zn++]=qi,Kn[Zn++]=Ts,Yi=n.id,qi=n.overflow,Ts=e),e=em(e,i.children),e.flags|=4096,e)}function Kg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),nd(n.return,e,t)}function Nf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Bx(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(n,e,i.children,t),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kg(n,t,e);else if(n.tag===19)Kg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ot(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&fc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Nf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&fc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Nf(e,!0,t,null,s);break;case"together":Nf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ou(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ir(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),As|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ae(153));if(e.child!==null){for(n=e.child,t=Ur(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ur(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function r1(n,e,t){switch(e.tag){case 3:kx(e),ko();break;case 5:hx(e);break;case 1:xn(e.type)&&sc(e);break;case 4:jp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(lc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(mt,mt.current&1),e.flags|=128,null):t&e.child.childLanes?zx(n,e,t):(ot(mt,mt.current&1),n=ir(n,e,t),n!==null?n.sibling:null);ot(mt,mt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Bx(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ox(n,e,t)}return ir(n,e,t)}var Vx,cd,Hx,Gx;Vx=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};cd=function(){};Hx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ds(Pi.current);var s=null;switch(t){case"input":r=Dh(n,r),i=Dh(n,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=Uh(n,r),i=Uh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ic)}Fh(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ja.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ja.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&at("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Gx=function(n,e,t,i){t!==i&&(e.flags|=4)};function da(n,e){if(!ft)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function en(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function s1(n,e,t){var i=e.pendingProps;switch(zp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return xn(e.type)&&rc(),en(e),null;case 3:return i=e.stateNode,Bo(),lt(vn),lt(an),qp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Wl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,di!==null&&(vd(di),di=null))),cd(n,e),en(e),null;case 5:Yp(e);var r=ds(rl.current);if(t=e.type,n!==null&&e.stateNode!=null)Hx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return en(e),null}if(n=ds(Pi.current),Wl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ai]=e,i[nl]=s,n=(e.mode&1)!==0,t){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Aa.length;r++)at(Aa[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":sg(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":ag(i,s),at("invalid",i)}Fh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Gl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Gl(i.textContent,a,n),r=["children",""+a]):ja.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(t){case"input":Ul(i),og(i,s,!0);break;case"textarea":Ul(i),lg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ic)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_v(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ai]=e,n[nl]=i,Vx(n,e,!1,!1),e.stateNode=n;e:{switch(o=kh(t,i),t){case"dialog":at("cancel",n),at("close",n),r=i;break;case"iframe":case"object":case"embed":at("load",n),r=i;break;case"video":case"audio":for(r=0;r<Aa.length;r++)at(Aa[r],n);r=i;break;case"source":at("error",n),r=i;break;case"img":case"image":case"link":at("error",n),at("load",n),r=i;break;case"details":at("toggle",n),r=i;break;case"input":sg(n,i),r=Dh(n,i),at("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),at("invalid",n);break;case"textarea":ag(n,i),r=Uh(n,i),at("invalid",n);break;default:r=i}Fh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?yv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ya(n,l):typeof l=="number"&&Ya(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ja.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",n):l!=null&&Tp(n,s,l,o))}switch(t){case"input":Ul(n),og(n,i,!1);break;case"textarea":Ul(n),lg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+zr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Eo(n,!!i.multiple,s,!1):i.defaultValue!=null&&Eo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=ic)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(n&&e.stateNode!=null)Gx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(t=ds(rl.current),ds(Pi.current),Wl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ai]=e,(s=i.nodeValue!==t)&&(n=zn,n!==null))switch(n.tag){case 3:Gl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Gl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ai]=e,e.stateNode=i}return en(e),null;case 13:if(lt(mt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ft&&Un!==null&&e.mode&1&&!(e.flags&128))ax(),ko(),e.flags|=98560,s=!1;else if(s=Wl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Ai]=e}else ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else di!==null&&(vd(di),di=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||mt.current&1?Ft===0&&(Ft=3):om())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return Bo(),cd(n,e),n===null&&el(e.stateNode.containerInfo),en(e),null;case 10:return Gp(e.type._context),en(e),null;case 17:return xn(e.type)&&rc(),en(e),null;case 19:if(lt(mt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)da(s,!1);else{if(Ft!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=fc(n),o!==null){for(e.flags|=128,da(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ot(mt,mt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ct()>Ho&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304)}else{if(!i)if(n=fc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return en(e),null}else 2*Ct()-s.renderingStartTime>Ho&&t!==1073741824&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,t=mt.current,ot(mt,i?t&1|2:t&1),e):(en(e),null);case 22:case 23:return sm(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function o1(n,e){switch(zp(e),e.tag){case 1:return xn(e.type)&&rc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Bo(),lt(vn),lt(an),qp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Yp(e),null;case 13:if(lt(mt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));ko()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return lt(mt),null;case 4:return Bo(),null;case 10:return Gp(e.type._context),null;case 22:case 23:return sm(),null;case 24:return null;default:return null}}var Yl=!1,rn=!1,a1=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function go(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Et(n,e,i)}else t.current=null}function fd(n,e,t){try{t()}catch(i){Et(n,e,i)}}var Zg=!1;function l1(n,e){if(qh=ec,n=qv(),Fp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for($h={focusedElem:n,selectionRange:t},ec=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var m=_.memoizedProps,g=_.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?m:fi(e.type,m),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(y){Et(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return _=Zg,Zg=!1,_}function Oa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&fd(e,t,s)}r=r.next}while(r!==i)}}function Wc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function hd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Wx(n){var e=n.alternate;e!==null&&(n.alternate=null,Wx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ai],delete e[nl],delete e[Qh],delete e[WE],delete e[XE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xx(n){return n.tag===5||n.tag===3||n.tag===4}function Qg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function dd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ic));else if(i!==4&&(n=n.child,n!==null))for(dd(n,e,t),n=n.sibling;n!==null;)dd(n,e,t),n=n.sibling}function pd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(pd(n,e,t),n=n.sibling;n!==null;)pd(n,e,t),n=n.sibling}var qt=null,hi=!1;function cr(n,e,t){for(t=t.child;t!==null;)jx(n,e,t),t=t.sibling}function jx(n,e,t){if(bi&&typeof bi.onCommitFiberUnmount=="function")try{bi.onCommitFiberUnmount(Oc,t)}catch{}switch(t.tag){case 5:rn||go(t,e);case 6:var i=qt,r=hi;qt=null,cr(n,e,t),qt=i,hi=r,qt!==null&&(hi?(n=qt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):qt.removeChild(t.stateNode));break;case 18:qt!==null&&(hi?(n=qt,t=t.stateNode,n.nodeType===8?Af(n.parentNode,t):n.nodeType===1&&Af(n,t),Za(n)):Af(qt,t.stateNode));break;case 4:i=qt,r=hi,qt=t.stateNode.containerInfo,hi=!0,cr(n,e,t),qt=i,hi=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fd(t,e,o),r=r.next}while(r!==i)}cr(n,e,t);break;case 1:if(!rn&&(go(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Et(t,e,a)}cr(n,e,t);break;case 21:cr(n,e,t);break;case 22:t.mode&1?(rn=(i=rn)||t.memoizedState!==null,cr(n,e,t),rn=i):cr(n,e,t);break;default:cr(n,e,t)}}function Jg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new a1),e.forEach(function(i){var r=_1.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ai(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qt=a.stateNode,hi=!1;break e;case 3:qt=a.stateNode.containerInfo,hi=!0;break e;case 4:qt=a.stateNode.containerInfo,hi=!0;break e}a=a.return}if(qt===null)throw Error(ae(160));jx(s,o,r),qt=null,hi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Et(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yx(e,n),e=e.sibling}function Yx(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(e,n),Si(n),i&4){try{Oa(3,n,n.return),Wc(3,n)}catch(m){Et(n,n.return,m)}try{Oa(5,n,n.return)}catch(m){Et(n,n.return,m)}}break;case 1:ai(e,n),Si(n),i&512&&t!==null&&go(t,t.return);break;case 5:if(ai(e,n),Si(n),i&512&&t!==null&&go(t,t.return),n.flags&32){var r=n.stateNode;try{Ya(r,"")}catch(m){Et(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&mv(r,s),kh(a,o);var u=kh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?yv(r,f):c==="dangerouslySetInnerHTML"?vv(r,f):c==="children"?Ya(r,f):Tp(r,c,f,u)}switch(a){case"input":Nh(r,s);break;case"textarea":gv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Eo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Eo(r,!!s.multiple,s.defaultValue,!0):Eo(r,!!s.multiple,s.multiple?[]:"",!1))}r[nl]=s}catch(m){Et(n,n.return,m)}}break;case 6:if(ai(e,n),Si(n),i&4){if(n.stateNode===null)throw Error(ae(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){Et(n,n.return,m)}}break;case 3:if(ai(e,n),Si(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Za(e.containerInfo)}catch(m){Et(n,n.return,m)}break;case 4:ai(e,n),Si(n);break;case 13:ai(e,n),Si(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(im=Ct())),i&4&&Jg(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(rn=(u=rn)||c,ai(e,n),rn=u):ai(e,n),Si(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ee=n,c=n.child;c!==null;){for(f=Ee=c;Ee!==null;){switch(h=Ee,p=h.child,h.tag){case 0:case 11:case 14:case 15:Oa(4,h,h.return);break;case 1:go(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(m){Et(i,t,m)}}break;case 5:go(h,h.return);break;case 22:if(h.memoizedState!==null){t_(f);continue}}p!==null?(p.return=h,Ee=p):t_(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xv("display",o))}catch(m){Et(n,n.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){Et(n,n.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ai(e,n),Si(n),i&4&&Jg(n);break;case 21:break;default:ai(e,n),Si(n)}}function Si(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Xx(t)){var i=t;break e}t=t.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ya(r,""),i.flags&=-33);var s=Qg(n);pd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Qg(n);dd(n,a,o);break;default:throw Error(ae(161))}}catch(l){Et(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function u1(n,e,t){Ee=n,qx(n)}function qx(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Yl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=Yl;var u=rn;if(Yl=o,(rn=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?n_(r):l!==null?(l.return=o,Ee=l):n_(r);for(;s!==null;)Ee=s,qx(s),s=s.sibling;Ee=r,Yl=a,rn=u}e_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):e_(n)}}function e_(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||Wc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:fi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}kg(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Za(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}rn||e.flags&512&&hd(e)}catch(h){Et(e,e.return,h)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function t_(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function n_(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Wc(4,e)}catch(l){Et(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{hd(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{hd(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===n){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var c1=Math.ceil,pc=ar.ReactCurrentDispatcher,tm=ar.ReactCurrentOwner,ii=ar.ReactCurrentBatchConfig,Ze=0,Wt=null,Dt=null,$t=0,Dn=0,_o=jr(0),Ft=0,ll=null,As=0,Xc=0,nm=0,Fa=null,mn=null,im=0,Ho=1/0,Hi=null,mc=!1,md=null,Nr=null,ql=!1,Tr=null,gc=0,ka=0,gd=null,Fu=-1,ku=0;function fn(){return Ze&6?Ct():Fu!==-1?Fu:Fu=Ct()}function Ir(n){return n.mode&1?Ze&2&&$t!==0?$t&-$t:YE.transition!==null?(ku===0&&(ku=Dv()),ku):(n=nt,n!==0||(n=window.event,n=n===void 0?16:zv(n.type)),n):1}function vi(n,e,t,i){if(50<ka)throw ka=0,gd=null,Error(ae(185));El(n,t,i),(!(Ze&2)||n!==Wt)&&(n===Wt&&(!(Ze&2)&&(Xc|=t),Ft===4&&Sr(n,$t)),yn(n,i),t===1&&Ze===0&&!(e.mode&1)&&(Ho=Ct()+500,Vc&&Yr()))}function yn(n,e){var t=n.callbackNode;YM(n,e);var i=Ju(n,n===Wt?$t:0);if(i===0)t!==null&&fg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&fg(t),e===1)n.tag===0?jE(i_.bind(null,n)):rx(i_.bind(null,n)),HE(function(){!(Ze&6)&&Yr()}),t=null;else{switch(Nv(i)){case 1:t=bp;break;case 4:t=Pv;break;case 16:t=Qu;break;case 536870912:t=Lv;break;default:t=Qu}t=ny(t,$x.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function $x(n,e){if(Fu=-1,ku=0,Ze&6)throw Error(ae(327));var t=n.callbackNode;if(Ro()&&n.callbackNode!==t)return null;var i=Ju(n,n===Wt?$t:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=_c(n,i);else{e=i;var r=Ze;Ze|=2;var s=Zx();(Wt!==n||$t!==e)&&(Hi=null,Ho=Ct()+500,_s(n,e));do try{d1();break}catch(a){Kx(n,a)}while(!0);Hp(),pc.current=s,Ze=r,Dt!==null?e=0:(Wt=null,$t=0,e=Ft)}if(e!==0){if(e===2&&(r=Gh(n),r!==0&&(i=r,e=_d(n,r))),e===1)throw t=ll,_s(n,0),Sr(n,i),yn(n,Ct()),t;if(e===6)Sr(n,i);else{if(r=n.current.alternate,!(i&30)&&!f1(r)&&(e=_c(n,i),e===2&&(s=Gh(n),s!==0&&(i=s,e=_d(n,s))),e===1))throw t=ll,_s(n,0),Sr(n,i),yn(n,Ct()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:os(n,mn,Hi);break;case 3:if(Sr(n,i),(i&130023424)===i&&(e=im+500-Ct(),10<e)){if(Ju(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){fn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Zh(os.bind(null,n,mn,Hi),e);break}os(n,mn,Hi);break;case 4:if(Sr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-_i(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*c1(i/1960))-i,10<i){n.timeoutHandle=Zh(os.bind(null,n,mn,Hi),i);break}os(n,mn,Hi);break;case 5:os(n,mn,Hi);break;default:throw Error(ae(329))}}}return yn(n,Ct()),n.callbackNode===t?$x.bind(null,n):null}function _d(n,e){var t=Fa;return n.current.memoizedState.isDehydrated&&(_s(n,e).flags|=256),n=_c(n,e),n!==2&&(e=mn,mn=t,e!==null&&vd(e)),n}function vd(n){mn===null?mn=n:mn.push.apply(mn,n)}function f1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!yi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(n,e){for(e&=~nm,e&=~Xc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-_i(e),i=1<<t;n[t]=-1,e&=~i}}function i_(n){if(Ze&6)throw Error(ae(327));Ro();var e=Ju(n,0);if(!(e&1))return yn(n,Ct()),null;var t=_c(n,e);if(n.tag!==0&&t===2){var i=Gh(n);i!==0&&(e=i,t=_d(n,i))}if(t===1)throw t=ll,_s(n,0),Sr(n,e),yn(n,Ct()),t;if(t===6)throw Error(ae(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,os(n,mn,Hi),yn(n,Ct()),null}function rm(n,e){var t=Ze;Ze|=1;try{return n(e)}finally{Ze=t,Ze===0&&(Ho=Ct()+500,Vc&&Yr())}}function Cs(n){Tr!==null&&Tr.tag===0&&!(Ze&6)&&Ro();var e=Ze;Ze|=1;var t=ii.transition,i=nt;try{if(ii.transition=null,nt=1,n)return n()}finally{nt=i,ii.transition=t,Ze=e,!(Ze&6)&&Yr()}}function sm(){Dn=_o.current,lt(_o)}function _s(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,VE(t)),Dt!==null)for(t=Dt.return;t!==null;){var i=t;switch(zp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&rc();break;case 3:Bo(),lt(vn),lt(an),qp();break;case 5:Yp(i);break;case 4:Bo();break;case 13:lt(mt);break;case 19:lt(mt);break;case 10:Gp(i.type._context);break;case 22:case 23:sm()}t=t.return}if(Wt=n,Dt=n=Ur(n.current,null),$t=Dn=e,Ft=0,ll=null,nm=Xc=As=0,mn=Fa=null,hs!==null){for(e=0;e<hs.length;e++)if(t=hs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}hs=null}return n}function Kx(n,e){do{var t=Dt;try{if(Hp(),Iu.current=dc,hc){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hc=!1}if(ws=0,Ht=Ut=xt=null,Ua=!1,sl=0,tm.current=null,t===null||t.return===null){Ft=1,ll=e,Dt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=$t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Wg(o);if(p!==null){p.flags&=-257,Xg(p,o,a,s,e),p.mode&1&&Gg(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var m=new Set;m.add(l),e.updateQueue=m}else _.add(l);break e}else{if(!(e&1)){Gg(s,u,e),om();break e}l=Error(ae(426))}}else if(ft&&a.mode&1){var g=Wg(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Xg(g,o,a,s,e),Bp(Vo(l,a));break e}}s=l=Vo(l,a),Ft!==4&&(Ft=2),Fa===null?Fa=[s]:Fa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Nx(s,l,e);Fg(s,d);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Nr===null||!Nr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Ix(s,a,e);Fg(s,y);break e}}s=s.return}while(s!==null)}Jx(t)}catch(C){e=C,Dt===t&&t!==null&&(Dt=t=t.return);continue}break}while(!0)}function Zx(){var n=pc.current;return pc.current=dc,n===null?dc:n}function om(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Wt===null||!(As&268435455)&&!(Xc&268435455)||Sr(Wt,$t)}function _c(n,e){var t=Ze;Ze|=2;var i=Zx();(Wt!==n||$t!==e)&&(Hi=null,_s(n,e));do try{h1();break}catch(r){Kx(n,r)}while(!0);if(Hp(),Ze=t,pc.current=i,Dt!==null)throw Error(ae(261));return Wt=null,$t=0,Ft}function h1(){for(;Dt!==null;)Qx(Dt)}function d1(){for(;Dt!==null&&!kM();)Qx(Dt)}function Qx(n){var e=ty(n.alternate,n,Dn);n.memoizedProps=n.pendingProps,e===null?Jx(n):Dt=e,tm.current=null}function Jx(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=o1(t,e),t!==null){t.flags&=32767,Dt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ft=6,Dt=null;return}}else if(t=s1(t,e,Dn),t!==null){Dt=t;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=n}while(e!==null);Ft===0&&(Ft=5)}function os(n,e,t){var i=nt,r=ii.transition;try{ii.transition=null,nt=1,p1(n,e,t,i)}finally{ii.transition=r,nt=i}return null}function p1(n,e,t,i){do Ro();while(Tr!==null);if(Ze&6)throw Error(ae(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ae(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(qM(n,s),n===Wt&&(Dt=Wt=null,$t=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ql||(ql=!0,ny(Qu,function(){return Ro(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ii.transition,ii.transition=null;var o=nt;nt=1;var a=Ze;Ze|=4,tm.current=null,l1(n,t),Yx(t,n),IE($h),ec=!!qh,$h=qh=null,n.current=t,u1(t),zM(),Ze=a,nt=o,ii.transition=s}else n.current=t;if(ql&&(ql=!1,Tr=n,gc=r),s=n.pendingLanes,s===0&&(Nr=null),HM(t.stateNode),yn(n,Ct()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(mc)throw mc=!1,n=md,md=null,n;return gc&1&&n.tag!==0&&Ro(),s=n.pendingLanes,s&1?n===gd?ka++:(ka=0,gd=n):ka=0,Yr(),null}function Ro(){if(Tr!==null){var n=Nv(gc),e=ii.transition,t=nt;try{if(ii.transition=null,nt=16>n?16:n,Tr===null)var i=!1;else{if(n=Tr,Tr=null,gc=0,Ze&6)throw Error(ae(331));var r=Ze;for(Ze|=4,Ee=n.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:Oa(8,c,s)}var f=c.child;if(f!==null)f.return=c,Ee=f;else for(;Ee!==null;){c=Ee;var h=c.sibling,p=c.return;if(Wx(c),c===u){Ee=null;break}if(h!==null){h.return=p,Ee=h;break}Ee=p}}}var _=s.alternate;if(_!==null){var m=_.child;if(m!==null){_.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ee=d;break e}Ee=s.return}}var x=n.current;for(Ee=x;Ee!==null;){o=Ee;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ee=v;else e:for(o=x;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wc(9,a)}}catch(C){Et(a,a.return,C)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(Ze=r,Yr(),bi&&typeof bi.onPostCommitFiberRoot=="function")try{bi.onPostCommitFiberRoot(Oc,n)}catch{}i=!0}return i}finally{nt=t,ii.transition=e}}return!1}function r_(n,e,t){e=Vo(t,e),e=Nx(n,e,1),n=Dr(n,e,1),e=fn(),n!==null&&(El(n,1,e),yn(n,e))}function Et(n,e,t){if(n.tag===3)r_(n,n,t);else for(;e!==null;){if(e.tag===3){r_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Nr===null||!Nr.has(i))){n=Vo(t,n),n=Ix(e,n,1),e=Dr(e,n,1),n=fn(),e!==null&&(El(e,1,n),yn(e,n));break}}e=e.return}}function m1(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=fn(),n.pingedLanes|=n.suspendedLanes&t,Wt===n&&($t&t)===t&&(Ft===4||Ft===3&&($t&130023424)===$t&&500>Ct()-im?_s(n,0):nm|=t),yn(n,e)}function ey(n,e){e===0&&(n.mode&1?(e=kl,kl<<=1,!(kl&130023424)&&(kl=4194304)):e=1);var t=fn();n=nr(n,e),n!==null&&(El(n,e,t),yn(n,t))}function g1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ey(n,t)}function _1(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),ey(n,t)}var ty;ty=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||vn.current)_n=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return _n=!1,r1(n,e,t);_n=!!(n.flags&131072)}else _n=!1,ft&&e.flags&1048576&&sx(e,ac,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ou(n,e),n=e.pendingProps;var r=Fo(e,an.current);Co(e,t),r=Kp(null,e,i,n,r,t);var s=Zp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,sc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xp(e),r.updater=Gc,e.stateNode=r,r._reactInternals=e,rd(e,i,n,t),e=ad(null,e,i,!0,s,t)):(e.tag=0,ft&&s&&kp(e),un(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ou(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=x1(i),n=fi(i,n),r){case 0:e=od(null,e,i,n,t);break e;case 1:e=qg(null,e,i,n,t);break e;case 11:e=jg(null,e,i,n,t);break e;case 14:e=Yg(null,e,i,fi(i.type,n),t);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),od(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),qg(n,e,i,r,t);case 3:e:{if(kx(e),n===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,fx(n,e),cc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vo(Error(ae(423)),e),e=$g(n,e,i,t,r);break e}else if(i!==r){r=Vo(Error(ae(424)),e),e=$g(n,e,i,t,r);break e}else for(Un=Lr(e.stateNode.containerInfo.firstChild),zn=e,ft=!0,di=null,t=ux(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ko(),i===r){e=ir(n,e,t);break e}un(n,e,i,t)}e=e.child}return e;case 5:return hx(e),n===null&&td(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Kh(i,r)?o=null:s!==null&&Kh(i,s)&&(e.flags|=32),Fx(n,e),un(n,e,o,t),e.child;case 6:return n===null&&td(e),null;case 13:return zx(n,e,t);case 4:return jp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=zo(e,null,i,t):un(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),jg(n,e,i,r,t);case 7:return un(n,e,e.pendingProps,t),e.child;case 8:return un(n,e,e.pendingProps.children,t),e.child;case 12:return un(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(lc,i._currentValue),i._currentValue=o,s!==null)if(yi(s.value,o)){if(s.children===r.children&&!vn.current){e=ir(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Zi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),nd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),nd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}un(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Co(e,t),r=ri(r),i=i(r),e.flags|=1,un(n,e,i,t),e.child;case 14:return i=e.type,r=fi(i,e.pendingProps),r=fi(i.type,r),Yg(n,e,i,r,t);case 15:return Ux(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Ou(n,e),e.tag=1,xn(i)?(n=!0,sc(e)):n=!1,Co(e,t),Dx(e,i,r),rd(e,i,r,t),ad(null,e,i,!0,n,t);case 19:return Bx(n,e,t);case 22:return Ox(n,e,t)}throw Error(ae(156,e.tag))};function ny(n,e){return bv(n,e)}function v1(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,e,t,i){return new v1(n,e,t,i)}function am(n){return n=n.prototype,!(!n||!n.isReactComponent)}function x1(n){if(typeof n=="function")return am(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ap)return 11;if(n===Cp)return 14}return 2}function Ur(n,e){var t=n.alternate;return t===null?(t=Jn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function zu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")am(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case oo:return vs(t.children,r,s,e);case wp:o=8,r|=8;break;case Rh:return n=Jn(12,t,e,r|2),n.elementType=Rh,n.lanes=s,n;case bh:return n=Jn(13,t,e,r),n.elementType=bh,n.lanes=s,n;case Ph:return n=Jn(19,t,e,r),n.elementType=Ph,n.lanes=s,n;case hv:return jc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case cv:o=10;break e;case fv:o=9;break e;case Ap:o=11;break e;case Cp:o=14;break e;case _r:o=16,i=null;break e}throw Error(ae(130,n==null?n:typeof n,""))}return e=Jn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function vs(n,e,t,i){return n=Jn(7,n,i,e),n.lanes=t,n}function jc(n,e,t,i){return n=Jn(22,n,i,e),n.elementType=hv,n.lanes=t,n.stateNode={isHidden:!1},n}function If(n,e,t){return n=Jn(6,n,null,e),n.lanes=t,n}function Uf(n,e,t){return e=Jn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function y1(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mf(0),this.expirationTimes=mf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function lm(n,e,t,i,r,s,o,a,l){return n=new y1(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xp(s),n}function S1(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:so,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function iy(n){if(!n)return Br;n=n._reactInternals;e:{if(Ds(n)!==n||n.tag!==1)throw Error(ae(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(n.tag===1){var t=n.type;if(xn(t))return ix(n,t,e)}return e}function ry(n,e,t,i,r,s,o,a,l){return n=lm(t,i,!0,n,r,s,o,a,l),n.context=iy(null),t=n.current,i=fn(),r=Ir(t),s=Zi(i,r),s.callback=e??null,Dr(t,s,r),n.current.lanes=r,El(n,r,i),yn(n,i),n}function Yc(n,e,t,i){var r=e.current,s=fn(),o=Ir(r);return t=iy(t),e.context===null?e.context=t:e.pendingContext=t,e=Zi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Dr(r,e,o),n!==null&&(vi(n,r,o,s),Nu(n,r,o)),o}function vc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function s_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function um(n,e){s_(n,e),(n=n.alternate)&&s_(n,e)}function M1(){return null}var sy=typeof reportError=="function"?reportError:function(n){console.error(n)};function cm(n){this._internalRoot=n}qc.prototype.render=cm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ae(409));Yc(n,e,null,null)};qc.prototype.unmount=cm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Cs(function(){Yc(null,n,null,null)}),e[tr]=null}};function qc(n){this._internalRoot=n}qc.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ov();n={blockedOn:null,target:n,priority:e};for(var t=0;t<yr.length&&e!==0&&e<yr[t].priority;t++);yr.splice(t,0,n),t===0&&kv(n)}};function fm(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function $c(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function o_(){}function E1(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=vc(o);s.call(u)}}var o=ry(e,i,n,0,null,!1,!1,"",o_);return n._reactRootContainer=o,n[tr]=o.current,el(n.nodeType===8?n.parentNode:n),Cs(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=vc(l);a.call(u)}}var l=lm(n,0,!1,null,null,!1,!1,"",o_);return n._reactRootContainer=l,n[tr]=l.current,el(n.nodeType===8?n.parentNode:n),Cs(function(){Yc(e,l,t,i)}),l}function Kc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=vc(o);a.call(l)}}Yc(e,o,n,r)}else o=E1(t,e,n,r,i);return vc(o)}Iv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=wa(e.pendingLanes);t!==0&&(Pp(e,t|1),yn(e,Ct()),!(Ze&6)&&(Ho=Ct()+500,Yr()))}break;case 13:Cs(function(){var i=nr(n,1);if(i!==null){var r=fn();vi(i,n,1,r)}}),um(n,1)}};Lp=function(n){if(n.tag===13){var e=nr(n,134217728);if(e!==null){var t=fn();vi(e,n,134217728,t)}um(n,134217728)}};Uv=function(n){if(n.tag===13){var e=Ir(n),t=nr(n,e);if(t!==null){var i=fn();vi(t,n,e,i)}um(n,e)}};Ov=function(){return nt};Fv=function(n,e){var t=nt;try{return nt=n,e()}finally{nt=t}};Bh=function(n,e,t){switch(e){case"input":if(Nh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Bc(i);if(!r)throw Error(ae(90));pv(i),Nh(i,r)}}}break;case"textarea":gv(n,t);break;case"select":e=t.value,e!=null&&Eo(n,!!t.multiple,e,!1)}};Ev=rm;Tv=Cs;var T1={usingClientEntryPoint:!1,Events:[wl,co,Bc,Sv,Mv,rm]},pa={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w1={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Cv(n),n===null?null:n.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||M1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Oc=$l.inject(w1),bi=$l}catch{}}Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T1;Wn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fm(e))throw Error(ae(200));return S1(n,e,null,t)};Wn.createRoot=function(n,e){if(!fm(n))throw Error(ae(299));var t=!1,i="",r=sy;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=lm(n,1,!1,null,null,t,!1,i,r),n[tr]=e.current,el(n.nodeType===8?n.parentNode:n),new cm(e)};Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ae(188)):(n=Object.keys(n).join(","),Error(ae(268,n)));return n=Cv(e),n=n===null?null:n.stateNode,n};Wn.flushSync=function(n){return Cs(n)};Wn.hydrate=function(n,e,t){if(!$c(e))throw Error(ae(200));return Kc(null,n,e,!0,t)};Wn.hydrateRoot=function(n,e,t){if(!fm(n))throw Error(ae(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=sy;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=ry(e,null,n,1,t??null,r,!1,s,o),n[tr]=e.current,el(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new qc(e)};Wn.render=function(n,e,t){if(!$c(e))throw Error(ae(200));return Kc(null,n,e,!1,t)};Wn.unmountComponentAtNode=function(n){if(!$c(n))throw Error(ae(40));return n._reactRootContainer?(Cs(function(){Kc(null,null,n,!1,function(){n._reactRootContainer=null,n[tr]=null})}),!0):!1};Wn.unstable_batchedUpdates=rm;Wn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!$c(t))throw Error(ae(200));if(n==null||n._reactInternals===void 0)throw Error(ae(38));return Kc(n,e,t,!1,i)};Wn.version="18.3.1-next-f1338f8080-20240426";function oy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oy)}catch(n){console.error(n)}}oy(),ov.exports=Wn;var A1=ov.exports,ay,a_=A1;ay=a_.createRoot,a_.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hm="166",ks={ROTATE:0,DOLLY:1,PAN:2},zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},C1=0,l_=1,R1=2,ly=1,uy=2,Vi=3,Vr=0,Sn=1,ji=2,Qi=0,bo=1,xd=2,u_=3,c_=4,b1=5,us=100,P1=101,L1=102,D1=103,N1=104,I1=200,U1=201,O1=202,F1=203,yd=204,Sd=205,k1=206,z1=207,B1=208,V1=209,H1=210,G1=211,W1=212,X1=213,j1=214,Y1=0,q1=1,$1=2,xc=3,K1=4,Z1=5,Q1=6,J1=7,cy=0,eT=1,tT=2,Or=0,fy=1,hy=2,dy=3,dm=4,nT=5,py=6,my=7,gy=300,Go=301,Wo=302,Md=303,Ed=304,Zc=306,Td=1e3,ps=1001,wd=1002,ei=1003,iT=1004,Kl=1005,pi=1006,Of=1007,ms=1008,rr=1009,_y=1010,vy=1011,ul=1012,pm=1013,Rs=1014,$i=1015,Ji=1016,mm=1017,gm=1018,Xo=1020,xy=35902,yy=1021,Sy=1022,gi=1023,My=1024,Ey=1025,Po=1026,jo=1027,Ty=1028,_m=1029,wy=1030,vm=1031,xm=1033,Bu=33776,Vu=33777,Hu=33778,Gu=33779,Ad=35840,Cd=35841,Rd=35842,bd=35843,Pd=36196,Ld=37492,Dd=37496,Nd=37808,Id=37809,Ud=37810,Od=37811,Fd=37812,kd=37813,zd=37814,Bd=37815,Vd=37816,Hd=37817,Gd=37818,Wd=37819,Xd=37820,jd=37821,Wu=36492,Yd=36494,qd=36495,Ay=36283,$d=36284,Kd=36285,Zd=36286,rT=3200,sT=3201,Cy=0,oT=1,Mr="",Ei="srgb",qr="srgb-linear",ym="display-p3",Qc="display-p3-linear",yc="linear",st="srgb",Sc="rec709",Mc="p3",Bs=7680,f_=519,aT=512,lT=513,uT=514,Ry=515,cT=516,fT=517,hT=518,dT=519,h_=35044,d_="300 es",Ki=2e3,Ec=2001;class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],za=Math.PI/180,Qd=180/Math.PI;function ia(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Gt(n,e,t){return Math.max(e,Math.min(t,n))}function pT(n,e){return(n%e+e)%e}function Ff(n,e,t){return(1-t)*n+t*e}function ma(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const mT={DEG2RAD:za};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,o,a,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],m=r[0],g=r[3],d=r[6],x=r[1],v=r[4],y=r[7],C=r[2],A=r[5],T=r[8];return s[0]=o*m+a*x+l*C,s[3]=o*g+a*v+l*A,s[6]=o*d+a*y+l*T,s[1]=u*m+c*x+f*C,s[4]=u*g+c*v+f*A,s[7]=u*d+c*y+f*T,s[2]=h*m+p*x+_*C,s[5]=h*g+p*v+_*A,s[8]=h*d+p*y+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=f*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kf.makeScale(e,t)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,t){return this.premultiply(kf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new Xe;function by(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Tc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gT(){const n=Tc("canvas");return n.style.display="block",n}const p_={};function Py(n){n in p_||(p_[n]=!0,console.warn(n))}function _T(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const m_=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),g_=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zl={[qr]:{transfer:yc,primaries:Sc,toReference:n=>n,fromReference:n=>n},[Ei]:{transfer:st,primaries:Sc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Qc]:{transfer:yc,primaries:Mc,toReference:n=>n.applyMatrix3(g_),fromReference:n=>n.applyMatrix3(m_)},[ym]:{transfer:st,primaries:Mc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(g_),fromReference:n=>n.applyMatrix3(m_).convertLinearToSRGB()}},vT=new Set([qr,Qc]),tt={enabled:!0,_workingColorSpace:qr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!vT.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Zl[e].toReference,r=Zl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Zl[n].primaries},getTransfer:function(n){return n===Mr?yc:Zl[n].transfer}};function Lo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vs;class xT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=Tc("canvas")),Vs.width=e.width,Vs.height=e.height;const i=Vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Lo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Lo(t[i]/255)*255):t[i]=Lo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yT=0;class Ly{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yT++}),this.uuid=ia(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bf(r[o].image)):s.push(Bf(r[o]))}else s=Bf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ST=0;class Mn extends Ns{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,i=ps,r=ps,s=pi,o=ms,a=gi,l=rr,u=Mn.DEFAULT_ANISOTROPY,c=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=ia(),this.name="",this.source=new Ly(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case ps:e.x=e.x<0?0:1;break;case wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case ps:e.y=e.y<0?0:1;break;case wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=gy;Mn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],m=l[2],g=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+m)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(p+1)/2,C=(d+1)/2,A=(c+h)/4,T=(f+m)/4,b=(_+g)/4;return v>y&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=b/s),this.set(i,r,s,t),this}let x=Math.sqrt((g-_)*(g-_)+(f-m)*(f-m)+(h-c)*(h-c));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(f-m)/x,this.z=(h-c)/x,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MT extends Ns{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ly(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends MT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Dy extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ET extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=m;return}if(f!==m||l!==h||u!==p||c!==_){let g=1-a;const d=l*h+u*p+c*_+f*m,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,d*x);g=Math.sin(g*A)/C,a=Math.sin(a*A)/C}const y=a*x;if(l=l*g+h*y,u=u*g+p*y,c=c*g+_*y,f=f*g+m*y,g===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*p-u*h,e[t+1]=l*_+c*h+u*f-a*p,e[t+2]=u*_+c*p+a*h-l*f,e[t+3]=c*_-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(__.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(__.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vf.copy(this).projectOnVector(e),this.sub(Vf)}reflect(e){return this.sub(Vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vf=new N,__=new bs;class Cl{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ql.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ql.copy(i.boundingBox)),Ql.applyMatrix4(e.matrixWorld),this.union(Ql)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),Jl.subVectors(this.max,ga),Hs.subVectors(e.a,ga),Gs.subVectors(e.b,ga),Ws.subVectors(e.c,ga),fr.subVectors(Gs,Hs),hr.subVectors(Ws,Gs),Zr.subVectors(Hs,Ws);let t=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-Zr.z,Zr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,Zr.z,0,-Zr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-Zr.y,Zr.x,0];return!Hf(t,Hs,Gs,Ws,Jl)||(t=[1,0,0,0,1,0,0,0,1],!Hf(t,Hs,Gs,Ws,Jl))?!1:(eu.crossVectors(fr,hr),t=[eu.x,eu.y,eu.z],Hf(t,Hs,Gs,Ws,Jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new N,new N,new N,new N,new N,new N,new N,new N],li=new N,Ql=new Cl,Hs=new N,Gs=new N,Ws=new N,fr=new N,hr=new N,Zr=new N,ga=new N,Jl=new N,eu=new N,Qr=new N;function Hf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Qr.fromArray(n,s);const a=r.x*Math.abs(Qr.x)+r.y*Math.abs(Qr.y)+r.z*Math.abs(Qr.z),l=e.dot(Qr),u=t.dot(Qr),c=i.dot(Qr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const TT=new Cl,_a=new N,Gf=new N;class Jc{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):TT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Gf)),this.expandByPoint(_a.copy(e.center).sub(Gf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new N,Wf=new N,tu=new N,dr=new N,Xf=new N,nu=new N,jf=new N;class Sm{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wf.copy(e).add(t).multiplyScalar(.5),tu.copy(t).sub(e).normalize(),dr.copy(this.origin).sub(Wf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(tu),a=dr.dot(this.direction),l=-dr.dot(tu),u=dr.lengthSq(),c=Math.abs(1-o*o);let f,h,p,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const m=1/c;f*=m,h*=m,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wf).addScaledVector(tu,h),p}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,r,s){Xf.subVectors(t,e),nu.subVectors(i,e),jf.crossVectors(Xf,nu);let o=this.direction.dot(jf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dr.subVectors(this.origin,e);const l=a*this.direction.dot(nu.crossVectors(dr,nu));if(l<0)return null;const u=a*this.direction.dot(Xf.cross(dr));if(u<0||l+u>o)return null;const c=-a*dr.dot(jf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,m,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=m,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Xs.setFromMatrixColumn(e,0).length(),s=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=h-m*u,t[9]=-a*l,t[2]=m-h*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,m=u*f;t[0]=h+m*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,m=u*f;t[0]=h-m*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=m-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=_*u-p,t[8]=h*u+m,t[1]=l*f,t[5]=m*u+h,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=m-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+_,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+m,t[5]=o*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wT,e,AT)}lookAt(e,t,i){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),pr.crossVectors(i,Pn),pr.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),pr.crossVectors(i,Pn)),pr.normalize(),iu.crossVectors(Pn,pr),r[0]=pr.x,r[4]=iu.x,r[8]=Pn.x,r[1]=pr.y,r[5]=iu.y,r[9]=Pn.y,r[2]=pr.z,r[6]=iu.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],m=i[6],g=i[10],d=i[14],x=i[3],v=i[7],y=i[11],C=i[15],A=r[0],T=r[4],b=r[8],E=r[12],S=r[1],D=r[5],B=r[9],O=r[13],W=r[2],q=r[6],z=r[10],j=r[14],I=r[3],K=r[7],Q=r[11],re=r[15];return s[0]=o*A+a*S+l*W+u*I,s[4]=o*T+a*D+l*q+u*K,s[8]=o*b+a*B+l*z+u*Q,s[12]=o*E+a*O+l*j+u*re,s[1]=c*A+f*S+h*W+p*I,s[5]=c*T+f*D+h*q+p*K,s[9]=c*b+f*B+h*z+p*Q,s[13]=c*E+f*O+h*j+p*re,s[2]=_*A+m*S+g*W+d*I,s[6]=_*T+m*D+g*q+d*K,s[10]=_*b+m*B+g*z+d*Q,s[14]=_*E+m*O+g*j+d*re,s[3]=x*A+v*S+y*W+C*I,s[7]=x*T+v*D+y*q+C*K,s[11]=x*b+v*B+y*z+C*Q,s[15]=x*E+v*O+y*j+C*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],m=e[7],g=e[11],d=e[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+m*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+g*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],m=e[13],g=e[14],d=e[15],x=f*g*u-m*h*u+m*l*p-a*g*p-f*l*d+a*h*d,v=_*h*u-c*g*u-_*l*p+o*g*p+c*l*d-o*h*d,y=c*m*u-_*f*u+_*a*p-o*m*p-c*a*d+o*f*d,C=_*f*l-c*m*l-_*a*h+o*m*h+c*a*g-o*f*g,A=t*x+i*v+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(m*h*s-f*g*s-m*r*p+i*g*p+f*r*d-i*h*d)*T,e[2]=(a*g*s-m*l*s+m*r*u-i*g*u-a*r*d+i*l*d)*T,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(c*g*s-_*h*s+_*r*p-t*g*p-c*r*d+t*h*d)*T,e[6]=(_*l*s-o*g*s-_*r*u+t*g*u+o*r*d-t*l*d)*T,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*T,e[8]=y*T,e[9]=(_*f*s-c*m*s-_*i*p+t*m*p+c*i*d-t*f*d)*T,e[10]=(o*m*s-_*a*s+_*i*u-t*m*u-o*i*d+t*a*d)*T,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*T,e[12]=C*T,e[13]=(c*m*r-_*f*r+_*i*h-t*m*h-c*i*g+t*f*g)*T,e[14]=(_*a*r-o*m*r-_*i*l+t*m*l+o*i*g-t*a*g)*T,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,_=s*f,m=o*c,g=o*f,d=a*f,x=l*u,v=l*c,y=l*f,C=i.x,A=i.y,T=i.z;return r[0]=(1-(m+d))*C,r[1]=(p+y)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+d))*A,r[6]=(g+x)*A,r[7]=0,r[8]=(_+v)*T,r[9]=(g-x)*T,r[10]=(1-(h+m))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Xs.set(r[0],r[1],r[2]).length();const o=Xs.set(r[4],r[5],r[6]).length(),a=Xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ui.copy(this);const u=1/s,c=1/o,f=1/a;return ui.elements[0]*=u,ui.elements[1]*=u,ui.elements[2]*=u,ui.elements[4]*=c,ui.elements[5]*=c,ui.elements[6]*=c,ui.elements[8]*=f,ui.elements[9]*=f,ui.elements[10]*=f,t.setFromRotationMatrix(ui),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ki){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===Ki)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ec)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ki){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let _,m;if(a===Ki)_=(o+s)*f,m=-2*f;else if(a===Ec)_=s*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xs=new N,ui=new ut,wT=new N(0,0,0),AT=new N(1,1,1),pr=new N,iu=new N,Pn=new N,v_=new ut,x_=new bs;class Di{constructor(e=0,t=0,i=0,r=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return v_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(v_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return x_.setFromEuler(this),this.setFromQuaternion(x_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class Ny{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CT=0;const y_=new N,js=new bs,ki=new ut,ru=new N,va=new N,RT=new N,bT=new bs,S_=new N(1,0,0),M_=new N(0,1,0),E_=new N(0,0,1),T_={type:"added"},PT={type:"removed"},Ys={type:"childadded",child:null},Yf={type:"childremoved",child:null};class kt extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new N,t=new Di,i=new bs,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Xe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ny,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(S_,e)}rotateY(e){return this.rotateOnAxis(M_,e)}rotateZ(e){return this.rotateOnAxis(E_,e)}translateOnAxis(e,t){return y_.copy(e).applyQuaternion(this.quaternion),this.position.add(y_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(S_,e)}translateY(e){return this.translateOnAxis(M_,e)}translateZ(e){return this.translateOnAxis(E_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ru.copy(e):ru.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(va,ru,this.up):ki.lookAt(ru,va,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),js.setFromRotationMatrix(ki),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(T_),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(PT),Yf.child=e,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(T_),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,RT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,bT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new N(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new N,zi=new N,qf=new N,Bi=new N,qs=new N,$s=new N,w_=new N,$f=new N,Kf=new N,Zf=new N;class mi{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ci.subVectors(e,t),r.cross(ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ci.subVectors(r,t),zi.subVectors(i,t),qf.subVectors(e,t);const o=ci.dot(ci),a=ci.dot(zi),l=ci.dot(qf),u=zi.dot(zi),c=zi.dot(qf),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static isFrontFacing(e,t,i,r){return ci.subVectors(i,t),zi.subVectors(e,t),ci.cross(zi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ci.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return mi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;qs.subVectors(r,i),$s.subVectors(s,i),$f.subVectors(e,i);const l=qs.dot($f),u=$s.dot($f);if(l<=0&&u<=0)return t.copy(i);Kf.subVectors(e,r);const c=qs.dot(Kf),f=$s.dot(Kf);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(qs,o);Zf.subVectors(e,s);const p=qs.dot(Zf),_=$s.dot(Zf);if(_>=0&&p<=_)return t.copy(s);const m=p*u-l*_;if(m<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector($s,a);const g=c*_-p*f;if(g<=0&&f-c>=0&&p-_>=0)return w_.subVectors(s,r),a=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(w_,a);const d=1/(g+m+h);return o=m*d,a=h*d,t.copy(i).addScaledVector(qs,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Iy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},su={h:0,s:0,l:0};function Qf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=pT(e,1),t=Gt(t,0,1),i=Gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Qf(o,s,e+1/3),this.g=Qf(o,s,e),this.b=Qf(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ei){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ei){const i=Iy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}copyLinearToSRGB(e){return this.r=zf(e.r),this.g=zf(e.g),this.b=zf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return tt.fromWorkingColorSpace(nn.copy(this),e),Math.round(Gt(nn.r*255,0,255))*65536+Math.round(Gt(nn.g*255,0,255))*256+Math.round(Gt(nn.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(nn.copy(this),t);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Ei){tt.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,r=nn.b;return e!==Ei?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(su);const i=Ff(mr.h,su.h,t),r=Ff(mr.s,su.s,t),s=Ff(mr.l,su.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ze;ze.NAMES=Iy;let LT=0;class Is extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=bo,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yd,this.blendDst=Sd,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(i.blending=this.blending),this.side!==Vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yd&&(i.blendSrc=this.blendSrc),this.blendDst!==Sd&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==f_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ef extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=cy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new N,ou=new ie;class Li{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=h_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Py("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ou.fromBufferAttribute(this,t),ou.applyMatrix3(e),this.setXY(t,ou.x,ou.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ma(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==h_&&(e.usage=this.usage),e}}class Uy extends Li{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Oy extends Li{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kt extends Li{constructor(e,t,i){super(new Float32Array(e),t,i)}}let DT=0;const qn=new ut,Jf=new kt,Ks=new N,Ln=new Cl,xa=new Cl,Vt=new N;class jn extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(by(e)?Oy:Uy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,i){return qn.makeTranslation(e,t,i),this.applyMatrix4(qn),this}scale(e,t,i){return qn.makeScale(e,t,i),this.applyMatrix4(qn),this}lookAt(e){return Jf.lookAt(e),Jf.updateMatrix(),this.applyMatrix4(Jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xa.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(Ln.min,xa.min),Ln.expandByPoint(Vt),Vt.addVectors(Ln.max,xa.max),Ln.expandByPoint(Vt)):(Ln.expandByPoint(xa.min),Ln.expandByPoint(xa.max))}Ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Vt.fromBufferAttribute(a,u),l&&(Ks.fromBufferAttribute(e,u),Vt.add(Ks)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new N,l[b]=new N;const u=new N,c=new N,f=new N,h=new ie,p=new ie,_=new ie,m=new N,g=new N;function d(b,E,S){u.fromBufferAttribute(i,b),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),c.sub(u),f.sub(u),p.sub(h),_.sub(h);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(m.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(D),a[b].add(m),a[E].add(m),a[S].add(m),l[b].add(g),l[E].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let b=0,E=x.length;b<E;++b){const S=x[b],D=S.start,B=S.count;for(let O=D,W=D+B;O<W;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new N,y=new N,C=new N,A=new N;function T(b){C.fromBufferAttribute(r,b),A.copy(C);const E=a[b];v.copy(E),v.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(A,E);const D=y.dot(l[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,D)}for(let b=0,E=x.length;b<E;++b){const S=x[b],D=S.start,B=S.count;for(let O=D,W=D+B;O<W;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Li(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),m=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new Li(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const A_=new ut,Jr=new Sm,au=new Jc,C_=new N,Zs=new N,Qs=new N,Js=new N,eh=new N,lu=new N,uu=new ie,cu=new ie,fu=new ie,R_=new N,b_=new N,P_=new N,hu=new N,du=new N;class On extends kt{constructor(e=new jn,t=new ef){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){lu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(eh.fromBufferAttribute(f,e),o?lu.addScaledVector(eh,c):lu.addScaledVector(eh.sub(t),c))}t.add(lu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),au.copy(i.boundingSphere),au.applyMatrix4(s),Jr.copy(e.ray).recast(e.near),!(au.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(au,C_)===null||Jr.origin.distanceToSquared(C_)>(e.far-e.near)**2))&&(A_.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(A_),!(i.boundingBox!==null&&Jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,m=h.length;_<m;_++){const g=h[_],d=o[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,C=v;y<C;y+=3){const A=a.getX(y),T=a.getX(y+1),b=a.getX(y+2);r=pu(this,d,e,i,u,c,f,A,T,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let g=_,d=m;g<d;g+=3){const x=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);r=pu(this,o,e,i,u,c,f,x,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,m=h.length;_<m;_++){const g=h[_],d=o[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,C=v;y<C;y+=3){const A=y,T=y+1,b=y+2;r=pu(this,d,e,i,u,c,f,A,T,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let g=_,d=m;g<d;g+=3){const x=g,v=g+1,y=g+2;r=pu(this,o,e,i,u,c,f,x,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function NT(n,e,t,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vr,a),l===null)return null;du.copy(a),du.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(du);return u<t.near||u>t.far?null:{distance:u,point:du.clone(),object:n}}function pu(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Zs),n.getVertexPosition(l,Qs),n.getVertexPosition(u,Js);const c=NT(n,e,t,i,Zs,Qs,Js,hu);if(c){r&&(uu.fromBufferAttribute(r,a),cu.fromBufferAttribute(r,l),fu.fromBufferAttribute(r,u),c.uv=mi.getInterpolation(hu,Zs,Qs,Js,uu,cu,fu,new ie)),s&&(uu.fromBufferAttribute(s,a),cu.fromBufferAttribute(s,l),fu.fromBufferAttribute(s,u),c.uv1=mi.getInterpolation(hu,Zs,Qs,Js,uu,cu,fu,new ie)),o&&(R_.fromBufferAttribute(o,a),b_.fromBufferAttribute(o,l),P_.fromBufferAttribute(o,u),c.normal=mi.getInterpolation(hu,Zs,Qs,Js,R_,b_,P_,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new N,materialIndex:0};mi.getNormal(Zs,Qs,Js,f.normal),c.face=f}return c}class Rl extends jn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(f,2));function _(m,g,d,x,v,y,C,A,T,b,E){const S=y/T,D=C/b,B=y/2,O=C/2,W=A/2,q=T+1,z=b+1;let j=0,I=0;const K=new N;for(let Q=0;Q<z;Q++){const re=Q*D-O;for(let Se=0;Se<q;Se++){const Ge=Se*S-B;K[m]=Ge*x,K[g]=re*v,K[d]=W,u.push(K.x,K.y,K.z),K[m]=0,K[g]=0,K[d]=A>0?1:-1,c.push(K.x,K.y,K.z),f.push(Se/T),f.push(1-Q/b),j+=1}}for(let Q=0;Q<b;Q++)for(let re=0;re<T;re++){const Se=h+re+q*Q,Ge=h+re+q*(Q+1),Y=h+(re+1)+q*(Q+1),te=h+(re+1)+q*Q;l.push(Se,Ge,te),l.push(Ge,Y,te),I+=6}a.addGroup(p,I,E),p+=I,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=Yo(n[t]);for(const r in i)e[r]=i[r]}return e}function IT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const cl={clone:Yo,merge:ln};var UT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UT,this.fragmentShader=OT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=IT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ky extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new N,L_=new ie,D_=new ie;class Qn extends ky{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qd*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,t){return this.getViewBounds(e,L_,D_),t.subVectors(D_,L_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(za*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const eo=-90,to=1;class FT extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(eo,to,e,t);r.layers=this.layers,this.add(r);const s=new Qn(eo,to,e,t);s.layers=this.layers,this.add(s);const o=new Qn(eo,to,e,t);o.layers=this.layers,this.add(o);const a=new Qn(eo,to,e,t);a.layers=this.layers,this.add(a);const l=new Qn(eo,to,e,t);l.layers=this.layers,this.add(l);const u=new Qn(eo,to,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class zy extends Mn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Go,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kT extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zy(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rl(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:Yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Qi});s.uniforms.tEquirect.value=t;const o=new On(r,s),a=t.minFilter;return t.minFilter===ms&&(t.minFilter=pi),new FT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const th=new N,zT=new N,BT=new Xe;class xr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=th.subVectors(i,t).cross(zT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(th),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||BT.getNormalMatrix(e),r=this.coplanarPoint(th).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new Jc,mu=new N;class Mm{constructor(e=new xr,t=new xr,i=new xr,r=new xr,s=new xr,o=new xr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],_=r[9],m=r[10],g=r[11],d=r[12],x=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,g-p,y-d).normalize(),i[1].setComponents(l+s,h+u,g+p,y+d).normalize(),i[2].setComponents(l+o,h+c,g+_,y+x).normalize(),i[3].setComponents(l-o,h-c,g-_,y-x).normalize(),i[4].setComponents(l-a,h-f,g-m,y-v).normalize(),t===Ki)i[5].setComponents(l+a,h+f,g+m,y+v).normalize();else if(t===Ec)i[5].setComponents(a,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(mu.x=r.normal.x>0?e.max.x:e.min.x,mu.y=r.normal.y>0?e.max.y:e.min.y,mu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function By(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function VT(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(u,a),f.count===-1&&h.length===0&&n.bufferSubData(u,0,c),h.length!==0){for(let p=0,_=h.length;p<_;p++){const m=h[p];n.bufferSubData(u,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(u,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class bl extends jn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],_=[],m=[],g=[];for(let d=0;d<c;d++){const x=d*h-o;for(let v=0;v<u;v++){const y=v*f-s;_.push(y,-x,0),m.push(0,0,1),g.push(v/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const v=x+u*d,y=x+u*(d+1),C=x+1+u*(d+1),A=x+1+u*d;p.push(v,y,A),p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(m,3)),this.setAttribute("uv",new Kt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var HT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GT=`#ifdef USE_ALPHAHASH
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
#endif`,WT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qT=`#ifdef USE_AOMAP
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
#endif`,$T=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KT=`#ifdef USE_BATCHING
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
#endif`,ZT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ew=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tw=`#ifdef USE_IRIDESCENCE
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
#endif`,nw=`#ifdef USE_BUMPMAP
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
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fw=`#define PI 3.141592653589793
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
} // validated`,hw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dw=`vec3 transformedNormal = objectNormal;
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
#endif`,pw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_w=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vw="gl_FragColor = linearToOutputTexel( gl_FragColor );",xw=`
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
}`,yw=`#ifdef USE_ENVMAP
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
#endif`,Sw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mw=`#ifdef USE_ENVMAP
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
#endif`,Ew=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
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
#endif`,ww=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Aw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bw=`#ifdef USE_GRADIENTMAP
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
}`,Pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nw=`uniform bool receiveShadow;
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
#endif`,Iw=`#ifdef USE_ENVMAP
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
#endif`,Uw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ow=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zw=`PhysicalMaterial material;
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
#endif`,Bw=`struct PhysicalMaterial {
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
}`,Vw=`
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
#endif`,Hw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ww=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$w=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zw=`#if defined( USE_POINTS_UV )
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
#endif`,Qw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iA=`#ifdef USE_MORPHTARGETS
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
#endif`,rA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cA=`#ifdef USE_NORMALMAP
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
#endif`,fA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_A=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AA=`float getShadowMask() {
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
}`,CA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RA=`#ifdef USE_SKINNING
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
#endif`,bA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PA=`#ifdef USE_SKINNING
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
#endif`,LA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UA=`#ifdef USE_TRANSMISSION
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
#endif`,OA=`#ifdef USE_TRANSMISSION
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
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HA=`uniform sampler2D t2D;
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
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YA=`#include <common>
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
}`,qA=`#if DEPTH_PACKING == 3200
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
}`,$A=`#define DISTANCE
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
}`,KA=`#define DISTANCE
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
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`uniform float scale;
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
}`,eC=`uniform vec3 diffuse;
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
}`,tC=`#include <common>
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
}`,nC=`uniform vec3 diffuse;
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
}`,iC=`#define LAMBERT
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
}`,rC=`#define LAMBERT
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
}`,sC=`#define MATCAP
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
}`,oC=`#define MATCAP
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
}`,aC=`#define NORMAL
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
}`,lC=`#define NORMAL
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
}`,uC=`#define PHONG
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
}`,cC=`#define PHONG
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
}`,fC=`#define STANDARD
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
}`,hC=`#define STANDARD
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
}`,dC=`#define TOON
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
}`,pC=`#define TOON
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
}`,mC=`uniform float size;
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
}`,gC=`uniform vec3 diffuse;
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
}`,_C=`#include <common>
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
}`,vC=`uniform vec3 color;
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
}`,xC=`uniform float rotation;
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
}`,yC=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:HT,alphahash_pars_fragment:GT,alphamap_fragment:WT,alphamap_pars_fragment:XT,alphatest_fragment:jT,alphatest_pars_fragment:YT,aomap_fragment:qT,aomap_pars_fragment:$T,batching_pars_vertex:KT,batching_vertex:ZT,begin_vertex:QT,beginnormal_vertex:JT,bsdfs:ew,iridescence_fragment:tw,bumpmap_pars_fragment:nw,clipping_planes_fragment:iw,clipping_planes_pars_fragment:rw,clipping_planes_pars_vertex:sw,clipping_planes_vertex:ow,color_fragment:aw,color_pars_fragment:lw,color_pars_vertex:uw,color_vertex:cw,common:fw,cube_uv_reflection_fragment:hw,defaultnormal_vertex:dw,displacementmap_pars_vertex:pw,displacementmap_vertex:mw,emissivemap_fragment:gw,emissivemap_pars_fragment:_w,colorspace_fragment:vw,colorspace_pars_fragment:xw,envmap_fragment:yw,envmap_common_pars_fragment:Sw,envmap_pars_fragment:Mw,envmap_pars_vertex:Ew,envmap_physical_pars_fragment:Iw,envmap_vertex:Tw,fog_vertex:ww,fog_pars_vertex:Aw,fog_fragment:Cw,fog_pars_fragment:Rw,gradientmap_pars_fragment:bw,lightmap_pars_fragment:Pw,lights_lambert_fragment:Lw,lights_lambert_pars_fragment:Dw,lights_pars_begin:Nw,lights_toon_fragment:Uw,lights_toon_pars_fragment:Ow,lights_phong_fragment:Fw,lights_phong_pars_fragment:kw,lights_physical_fragment:zw,lights_physical_pars_fragment:Bw,lights_fragment_begin:Vw,lights_fragment_maps:Hw,lights_fragment_end:Gw,logdepthbuf_fragment:Ww,logdepthbuf_pars_fragment:Xw,logdepthbuf_pars_vertex:jw,logdepthbuf_vertex:Yw,map_fragment:qw,map_pars_fragment:$w,map_particle_fragment:Kw,map_particle_pars_fragment:Zw,metalnessmap_fragment:Qw,metalnessmap_pars_fragment:Jw,morphinstance_vertex:eA,morphcolor_vertex:tA,morphnormal_vertex:nA,morphtarget_pars_vertex:iA,morphtarget_vertex:rA,normal_fragment_begin:sA,normal_fragment_maps:oA,normal_pars_fragment:aA,normal_pars_vertex:lA,normal_vertex:uA,normalmap_pars_fragment:cA,clearcoat_normal_fragment_begin:fA,clearcoat_normal_fragment_maps:hA,clearcoat_pars_fragment:dA,iridescence_pars_fragment:pA,opaque_fragment:mA,packing:gA,premultiplied_alpha_fragment:_A,project_vertex:vA,dithering_fragment:xA,dithering_pars_fragment:yA,roughnessmap_fragment:SA,roughnessmap_pars_fragment:MA,shadowmap_pars_fragment:EA,shadowmap_pars_vertex:TA,shadowmap_vertex:wA,shadowmask_pars_fragment:AA,skinbase_vertex:CA,skinning_pars_vertex:RA,skinning_vertex:bA,skinnormal_vertex:PA,specularmap_fragment:LA,specularmap_pars_fragment:DA,tonemapping_fragment:NA,tonemapping_pars_fragment:IA,transmission_fragment:UA,transmission_pars_fragment:OA,uv_pars_fragment:FA,uv_pars_vertex:kA,uv_vertex:zA,worldpos_vertex:BA,background_vert:VA,background_frag:HA,backgroundCube_vert:GA,backgroundCube_frag:WA,cube_vert:XA,cube_frag:jA,depth_vert:YA,depth_frag:qA,distanceRGBA_vert:$A,distanceRGBA_frag:KA,equirect_vert:ZA,equirect_frag:QA,linedashed_vert:JA,linedashed_frag:eC,meshbasic_vert:tC,meshbasic_frag:nC,meshlambert_vert:iC,meshlambert_frag:rC,meshmatcap_vert:sC,meshmatcap_frag:oC,meshnormal_vert:aC,meshnormal_frag:lC,meshphong_vert:uC,meshphong_frag:cC,meshphysical_vert:fC,meshphysical_frag:hC,meshtoon_vert:dC,meshtoon_frag:pC,points_vert:mC,points_frag:gC,shadow_vert:_C,shadow_frag:vC,sprite_vert:xC,sprite_frag:yC},ge={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},wi={basic:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:ln([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:ln([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:ln([ge.points,ge.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:ln([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:ln([ge.common,ge.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:ln([ge.sprite,ge.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:ln([ge.common,ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:ln([ge.lights,ge.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};wi.physical={uniforms:ln([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const gu={r:0,b:0,g:0},ts=new Di,SC=new ut;function MC(n,e,t,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function m(x){let v=!1;const y=_(x);y===null?d(a,l):y&&y.isColor&&(d(y,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,v){const y=_(v);y&&(y.isCubeTexture||y.mapping===Zc)?(c===void 0&&(c=new On(new Rl(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Yo(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ts.copy(v.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SC.makeRotationFromEuler(ts)),c.material.toneMapped=tt.getTransfer(y.colorSpace)!==st,(f!==y||h!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new On(new bl(2,2),new cn({name:"BackgroundMaterial",uniforms:Yo(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=tt.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function d(x,v){x.getRGB(gu,Fy(n)),i.buffers.color.setClear(gu.r,gu.g,gu.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(a,l)},render:m,addToRenderList:g}}function EC(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,D,B,O,W){let q=!1;const z=f(O,B,D);s!==z&&(s=z,u(s.object)),q=p(S,O,B,W),q&&_(S,O,B,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(S,D,B,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,D,B){const O=B.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let q=W[D.id];q===void 0&&(q={},W[D.id]=q);let z=q[O];return z===void 0&&(z=h(l()),q[O]=z),z}function h(S){const D=[],B=[],O=[];for(let W=0;W<t;W++)D[W]=0,B[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,D,B,O){const W=s.attributes,q=D.attributes;let z=0;const j=B.getAttributes();for(const I in j)if(j[I].location>=0){const Q=W[I];let re=q[I];if(re===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;z++}return s.attributesNum!==z||s.index!==O}function _(S,D,B,O){const W={},q=D.attributes;let z=0;const j=B.getAttributes();for(const I in j)if(j[I].location>=0){let Q=q[I];Q===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),W[I]=re,z++}s.attributes=W,s.attributesNum=z,s.index=O}function m(){const S=s.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function g(S){d(S,0)}function d(S,D){const B=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;B[S]=1,O[S]===0&&(n.enableVertexAttribArray(S),O[S]=1),W[S]!==D&&(n.vertexAttribDivisor(S,D),W[S]=D)}function x(){const S=s.newAttributes,D=s.enabledAttributes;for(let B=0,O=D.length;B<O;B++)D[B]!==S[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function v(S,D,B,O,W,q,z){z===!0?n.vertexAttribIPointer(S,D,B,W,q):n.vertexAttribPointer(S,D,B,O,W,q)}function y(S,D,B,O){m();const W=O.attributes,q=B.getAttributes(),z=D.defaultAttributeValues;for(const j in q){const I=q[j];if(I.location>=0){let K=W[j];if(K===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const Q=K.normalized,re=K.itemSize,Se=e.get(K);if(Se===void 0)continue;const Ge=Se.buffer,Y=Se.type,te=Se.bytesPerElement,_e=Y===n.INT||Y===n.UNSIGNED_INT||K.gpuType===pm;if(K.isInterleavedBufferAttribute){const he=K.data,Ne=he.stride,He=K.offset;if(he.isInstancedInterleavedBuffer){for(let De=0;De<I.locationSize;De++)d(I.location+De,he.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let De=0;De<I.locationSize;De++)g(I.location+De);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let De=0;De<I.locationSize;De++)v(I.location+De,re/I.locationSize,Y,Q,Ne*te,(He+re/I.locationSize*De)*te,_e)}else{if(K.isInstancedBufferAttribute){for(let he=0;he<I.locationSize;he++)d(I.location+he,K.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<I.locationSize;he++)g(I.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let he=0;he<I.locationSize;he++)v(I.location+he,re/I.locationSize,Y,Q,re*te,re/I.locationSize*he*te,_e)}}else if(z!==void 0){const Q=z[j];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(I.location,Q);break;case 3:n.vertexAttrib3fv(I.location,Q);break;case 4:n.vertexAttrib4fv(I.location,Q);break;default:n.vertexAttrib1fv(I.location,Q)}}}}x()}function C(){b();for(const S in i){const D=i[S];for(const B in D){const O=D[B];for(const W in O)c(O[W].object),delete O[W];delete D[B]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const B in D){const O=D[B];for(const W in O)c(O[W].object),delete O[W];delete D[B]}delete i[S.id]}function T(S){for(const D in i){const B=i[D];if(B[S.id]===void 0)continue;const O=B[S.id];for(const W in O)c(O[W].object),delete O[W];delete B[S.id]}}function b(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:g,disableUnusedAttributes:x}}function TC(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let _=0;_<f;_++)p+=c[_];t.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let _=0;for(let m=0;m<f;m++)_+=c[m];for(let m=0;m<h.length;m++)t.update(_,i,h[m])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wC(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==gi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==rr&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==$i&&!T)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:y,maxSamples:C}}function AC(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new xr,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?c(null):u();else{const x=s?0:i,v=x*4;let y=d.clippingState||null;l.value=y,y=c(_,h,v,p);for(let C=0;C!==v;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,_){const m=f!==null?f.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const d=p+m*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,y=p;v!==m;++v,y+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function CC(n){let e=new WeakMap;function t(o,a){return a===Md?o.mapping=Go:a===Ed&&(o.mapping=Wo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Md||a===Ed)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new kT(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Em extends ky{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vo=4,N_=[.125,.215,.35,.446,.526,.582],cs=20,nh=new Em,I_=new ze;let ih=null,rh=0,sh=0,oh=!1;const as=(1+Math.sqrt(5))/2,no=1/as,U_=[new N(-as,no,0),new N(as,no,0),new N(-no,0,as),new N(no,0,as),new N(0,as,-no),new N(0,as,no),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class O_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ih=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,rh,sh),this._renderer.xr.enabled=oh,e.scissorTest=!1,_u(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Go||e.mapping===Wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Ji,format:gi,colorSpace:qr,depthBuffer:!1},r=F_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RC(s)),this._blurMaterial=bC(s,e,t)}return r}_compileMaterial(e){const t=new On(this._lodPlanes[0],e);this._renderer.compile(t,nh)}_sceneToCubeUV(e,t,i,r){const a=new Qn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(I_),c.toneMapping=Or,c.autoClear=!1;const p=new ef({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new On(new Rl,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(I_),m=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;_u(r,x*v,d>2?v:0,v,v),c.setRenderTarget(r),m&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Go||e.mapping===Wo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new On(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_u(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,nh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=U_[(r-s-1)%U_.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new On(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*cs-1),m=s/_,g=isFinite(s)?1+Math.floor(c*m):cs;g>cs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cs}`);const d=[];let x=0;for(let T=0;T<cs;++T){const b=T/m,E=Math.exp(-b*b/2);d.push(E),T===0?x+=E:T<g&&(x+=2*E)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const y=this._sizeLods[r],C=3*y*(r>v-vo?r-v+vo:0),A=4*(this._cubeSize-y);_u(t,C,A,3*y,2*y),l.setRenderTarget(t),l.render(f,nh)}}function RC(n){const e=[],t=[],i=[];let r=n;const s=n-vo+1+N_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-vo?l=N_[o-n+vo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,m=3,g=2,d=1,x=new Float32Array(m*_*p),v=new Float32Array(g*_*p),y=new Float32Array(d*_*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,b=A>2?0:-1,E=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];x.set(E,m*_*A),v.set(h,g*_*A);const S=[A,A,A,A,A,A];y.set(S,d*_*A)}const C=new jn;C.setAttribute("position",new Li(x,m)),C.setAttribute("uv",new Li(v,g)),C.setAttribute("faceIndex",new Li(y,d)),e.push(C),r>vo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function F_(n,e,t){const i=new xi(n,e,t);return i.texture.mapping=Zc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _u(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function bC(n,e,t){const i=new Float32Array(cs),r=new N(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tm(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function k_(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tm(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function z_(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Tm(){return`

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
	`}function PC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Md||l===Ed,c=l===Go||l===Wo;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new O_(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new O_(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function LC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Py("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function DC(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const m=h.morphAttributes[_];for(let g=0,d=m.length;g<d;g++)e.remove(m[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const m=p[_];for(let g=0,d=m.length;g<d;g++)e.update(m[g],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let v=0,y=x.length;v<y;v+=3){const C=x[v+0],A=x[v+1],T=x[v+2];h.push(C,A,A,T,T,C)}}else if(_!==void 0){const x=_.array;m=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const C=v+0,A=v+1,T=v+2;h.push(C,A,A,T,T,C)}}else return;const g=new(by(h)?Oy:Uy)(h,1);g.version=m;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function NC(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function u(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*o,_),t.update(p,i,_))}function c(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let d=0;d<_;d++)g+=p[d];t.update(g,i,1)}function f(h,p,_,m){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],m[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,m,0,_);let d=0;for(let x=0;x<_;x++)d+=p[x];for(let x=0;x<m.length;x++)t.update(d,i,m[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function IC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function UC(n,e,t){const i=new WeakMap,r=new Ot;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),m===!0&&(y=2),g===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*f),b=new Dy(T,C,A,f);b.type=$i,b.needsUpdate=!0;const E=y*4;for(let D=0;D<f;D++){const B=d[D],O=x[D],W=v[D],q=C*A*4*D;for(let z=0;z<B.count;z++){const j=z*E;_===!0&&(r.fromBufferAttribute(B,z),T[q+j+0]=r.x,T[q+j+1]=r.y,T[q+j+2]=r.z,T[q+j+3]=0),m===!0&&(r.fromBufferAttribute(O,z),T[q+j+4]=r.x,T[q+j+5]=r.y,T[q+j+6]=r.z,T[q+j+7]=0),g===!0&&(r.fromBufferAttribute(W,z),T[q+j+8]=r.x,T[q+j+9]=r.y,T[q+j+10]=r.z,T[q+j+11]=W.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new ie(C,A)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const m=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function OC(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Vy extends Mn{constructor(e,t,i,r,s,o,a,l,u,c=Po){if(c!==Po&&c!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Po&&(i=Rs),i===void 0&&c===jo&&(i=Xo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ei,this.minFilter=l!==void 0?l:ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hy=new Mn,B_=new Vy(1,1),Gy=new Dy,Wy=new ET,Xy=new zy,V_=[],H_=[],G_=new Float32Array(16),W_=new Float32Array(9),X_=new Float32Array(4);function ra(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=V_[r];if(s===void 0&&(s=new Float32Array(r),V_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tf(n,e){let t=H_[e];t===void 0&&(t=new Int32Array(e),H_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function FC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function zC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function BC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function VC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,i))return;X_.set(i),n.uniformMatrix2fv(this.addr,!1,X_),Bt(t,i)}}function HC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,i))return;W_.set(i),n.uniformMatrix3fv(this.addr,!1,W_),Bt(t,i)}}function GC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,i))return;G_.set(i),n.uniformMatrix4fv(this.addr,!1,G_),Bt(t,i)}}function WC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function XC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function jC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function YC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function qC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function KC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function ZC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function QC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(B_.compareFunction=Ry,s=B_):s=Hy,t.setTexture2D(e||s,r)}function JC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wy,r)}function eR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Xy,r)}function tR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Gy,r)}function nR(n){switch(n){case 5126:return FC;case 35664:return kC;case 35665:return zC;case 35666:return BC;case 35674:return VC;case 35675:return HC;case 35676:return GC;case 5124:case 35670:return WC;case 35667:case 35671:return XC;case 35668:case 35672:return jC;case 35669:case 35673:return YC;case 5125:return qC;case 36294:return $C;case 36295:return KC;case 36296:return ZC;case 35678:case 36198:case 36298:case 36306:case 35682:return QC;case 35679:case 36299:case 36307:return JC;case 35680:case 36300:case 36308:case 36293:return eR;case 36289:case 36303:case 36311:case 36292:return tR}}function iR(n,e){n.uniform1fv(this.addr,e)}function rR(n,e){const t=ra(e,this.size,2);n.uniform2fv(this.addr,t)}function sR(n,e){const t=ra(e,this.size,3);n.uniform3fv(this.addr,t)}function oR(n,e){const t=ra(e,this.size,4);n.uniform4fv(this.addr,t)}function aR(n,e){const t=ra(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lR(n,e){const t=ra(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uR(n,e){const t=ra(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cR(n,e){n.uniform1iv(this.addr,e)}function fR(n,e){n.uniform2iv(this.addr,e)}function hR(n,e){n.uniform3iv(this.addr,e)}function dR(n,e){n.uniform4iv(this.addr,e)}function pR(n,e){n.uniform1uiv(this.addr,e)}function mR(n,e){n.uniform2uiv(this.addr,e)}function gR(n,e){n.uniform3uiv(this.addr,e)}function _R(n,e){n.uniform4uiv(this.addr,e)}function vR(n,e,t){const i=this.cache,r=e.length,s=tf(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Hy,s[o])}function xR(n,e,t){const i=this.cache,r=e.length,s=tf(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wy,s[o])}function yR(n,e,t){const i=this.cache,r=e.length,s=tf(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Xy,s[o])}function SR(n,e,t){const i=this.cache,r=e.length,s=tf(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Gy,s[o])}function MR(n){switch(n){case 5126:return iR;case 35664:return rR;case 35665:return sR;case 35666:return oR;case 35674:return aR;case 35675:return lR;case 35676:return uR;case 5124:case 35670:return cR;case 35667:case 35671:return fR;case 35668:case 35672:return hR;case 35669:case 35673:return dR;case 5125:return pR;case 36294:return mR;case 36295:return gR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return xR;case 35680:case 36300:case 36308:case 36293:return yR;case 36289:case 36303:case 36311:case 36292:return SR}}class ER{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nR(t.type)}}class TR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MR(t.type)}}class wR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function j_(n,e){n.seq.push(e),n.map[e.id]=e}function AR(n,e,t){const i=n.name,r=i.length;for(ah.lastIndex=0;;){const s=ah.exec(i),o=ah.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){j_(t,u===void 0?new ER(a,n,e):new TR(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new wR(a),j_(t,f)),t=f}}}class Xu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);AR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Y_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const CR=37297;let RR=0;function bR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function PR(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===Mc&&t===Sc?i="LinearDisplayP3ToLinearSRGB":e===Sc&&t===Mc&&(i="LinearSRGBToLinearDisplayP3"),n){case qr:case Qc:return[i,"LinearTransferOETF"];case Ei:case ym:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function q_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+bR(n.getShaderSource(e),o)}else return r}function LR(n,e){const t=PR(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function DR(n,e){let t;switch(e){case fy:t="Linear";break;case hy:t="Reinhard";break;case dy:t="OptimizedCineon";break;case dm:t="ACESFilmic";break;case py:t="AgX";break;case my:t="Neutral";break;case nT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function NR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function IR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function UR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ca(n){return n!==""}function $_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function K_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(n){return n.replace(OR,kR)}const FR=new Map;function kR(n,e){let t=We[e];if(t===void 0){const i=FR.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jd(t)}const zR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(n){return n.replace(zR,BR)}function BR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Q_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function VR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ly?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function HR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Go:case Wo:e="ENVMAP_TYPE_CUBE";break;case Zc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Wo:e="ENVMAP_MODE_REFRACTION";break}return e}function WR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cy:e="ENVMAP_BLENDING_MULTIPLY";break;case eT:e="ENVMAP_BLENDING_MIX";break;case tT:e="ENVMAP_BLENDING_ADD";break}return e}function XR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=VR(t),u=HR(t),c=GR(t),f=WR(t),h=XR(t),p=NR(t),_=IR(s),m=r.createProgram();let g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ca).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ca).join(`
`),d.length>0&&(d+=`
`)):(g=[Q_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),d=[Q_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?We.tonemapping_pars_fragment:"",t.toneMapping!==Or?DR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,LR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),o=Jd(o),o=$_(o,t),o=K_(o,t),a=Jd(a),a=$_(a,t),a=K_(a,t),o=Z_(o),a=Z_(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===d_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===d_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+g+o,y=x+d+a,C=Y_(r,r.VERTEX_SHADER,v),A=Y_(r,r.FRAGMENT_SHADER,y);r.attachShader(m,C),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function T(D){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(m).trim(),O=r.getShaderInfoLog(C).trim(),W=r.getShaderInfoLog(A).trim();let q=!0,z=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,C,A);else{const j=q_(r,C,"vertex"),I=q_(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+j+`
`+I)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||W==="")&&(z=!1);z&&(D.diagnostics={runnable:q,programLog:B,vertexShader:{log:O,prefix:g},fragmentShader:{log:W,prefix:d}})}r.deleteShader(C),r.deleteShader(A),b=new Xu(r,m),E=UR(r,m)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(m,CR)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RR++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=A,this}let YR=0;class qR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $R(e),t.set(e,i)),i}}class $R{constructor(e){this.id=YR++,this.code=e,this.usedTimes=0}}function KR(n,e,t,i,r,s,o){const a=new Ny,l=new qR,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return u.add(E),E===0?"uv":`uv${E}`}function g(E,S,D,B,O){const W=B.fog,q=O.geometry,z=E.isMeshStandardMaterial?B.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||z),I=j&&j.mapping===Zc?j.image.height:null,K=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Q=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,re=Q!==void 0?Q.length:0;let Se=0;q.morphAttributes.position!==void 0&&(Se=1),q.morphAttributes.normal!==void 0&&(Se=2),q.morphAttributes.color!==void 0&&(Se=3);let Ge,Y,te,_e;if(K){const Ke=wi[K];Ge=Ke.vertexShader,Y=Ke.fragmentShader}else Ge=E.vertexShader,Y=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),_e=l.getFragmentShaderID(E);const he=n.getRenderTarget(),Ne=O.isInstancedMesh===!0,He=O.isBatchedMesh===!0,De=!!E.map,qe=!!E.matcap,P=!!j,ce=!!E.aoMap,se=!!E.lightMap,pe=!!E.bumpMap,Z=!!E.normalMap,Pe=!!E.displacementMap,me=!!E.emissiveMap,Me=!!E.metalnessMap,L=!!E.roughnessMap,w=E.anisotropy>0,H=E.clearcoat>0,ne=E.dispersion>0,ee=E.iridescence>0,J=E.sheen>0,Ce=E.transmission>0,de=w&&!!E.anisotropyMap,xe=H&&!!E.clearcoatMap,Be=H&&!!E.clearcoatNormalMap,ue=H&&!!E.clearcoatRoughnessMap,ve=ee&&!!E.iridescenceMap,Ye=ee&&!!E.iridescenceThicknessMap,Ie=J&&!!E.sheenColorMap,Te=J&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Ve=!!E.specularColorMap,ct=!!E.specularIntensityMap,M=Ce&&!!E.transmissionMap,k=Ce&&!!E.thicknessMap,V=!!E.gradientMap,$=!!E.alphaMap,oe=E.alphaTest>0,Re=!!E.alphaHash,Fe=!!E.extensions;let wt=Or;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(wt=n.toneMapping);const Nt={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:Y,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:He,batchingColor:He&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:qr,alphaToCoverage:!!E.alphaToCoverage,map:De,matcap:qe,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:I,aoMap:ce,lightMap:se,bumpMap:pe,normalMap:Z,displacementMap:h&&Pe,emissiveMap:me,normalMapObjectSpace:Z&&E.normalMapType===oT,normalMapTangentSpace:Z&&E.normalMapType===Cy,metalnessMap:Me,roughnessMap:L,anisotropy:w,anisotropyMap:de,clearcoat:H,clearcoatMap:xe,clearcoatNormalMap:Be,clearcoatRoughnessMap:ue,dispersion:ne,iridescence:ee,iridescenceMap:ve,iridescenceThicknessMap:Ye,sheen:J,sheenColorMap:Ie,sheenRoughnessMap:Te,specularMap:Oe,specularColorMap:Ve,specularIntensityMap:ct,transmission:Ce,transmissionMap:M,thicknessMap:k,gradientMap:V,opaque:E.transparent===!1&&E.blending===bo&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:oe,alphaHash:Re,combine:E.combine,mapUv:De&&m(E.map.channel),aoMapUv:ce&&m(E.aoMap.channel),lightMapUv:se&&m(E.lightMap.channel),bumpMapUv:pe&&m(E.bumpMap.channel),normalMapUv:Z&&m(E.normalMap.channel),displacementMapUv:Pe&&m(E.displacementMap.channel),emissiveMapUv:me&&m(E.emissiveMap.channel),metalnessMapUv:Me&&m(E.metalnessMap.channel),roughnessMapUv:L&&m(E.roughnessMap.channel),anisotropyMapUv:de&&m(E.anisotropyMap.channel),clearcoatMapUv:xe&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:Be&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(E.sheenRoughnessMap.channel),specularMapUv:Oe&&m(E.specularMap.channel),specularColorMapUv:Ve&&m(E.specularColorMap.channel),specularIntensityMapUv:ct&&m(E.specularIntensityMap.channel),transmissionMapUv:M&&m(E.transmissionMap.channel),thicknessMapUv:k&&m(E.thicknessMap.channel),alphaMapUv:$&&m(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Z||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(De||$),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,decodeVideoTexture:De&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ji,flipSided:E.side===Sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Nt.vertexUv1s=u.has(1),Nt.vertexUv2s=u.has(2),Nt.vertexUv3s=u.has(3),u.clear(),Nt}function d(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(x(S,E),v(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function x(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function v(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function y(E){const S=_[E.type];let D;if(S){const B=wi[S];D=cl.clone(B.uniforms)}else D=E.uniforms;return D}function C(E,S){let D;for(let B=0,O=c.length;B<O;B++){const W=c[B];if(W.cacheKey===S){D=W,++D.usedTimes;break}}return D===void 0&&(D=new jR(n,S,E,s),c.push(D)),D}function A(E){if(--E.usedTimes===0){const S=c.indexOf(E);c[S]=c[c.length-1],c.pop(),E.destroy()}}function T(E){l.remove(E)}function b(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:b}}function ZR(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function QR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function J_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function e0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,m,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=m,d.group=g),e++,d}function a(f,h,p,_,m,g){const d=o(f,h,p,_,m,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,m,g){const d=o(f,h,p,_,m,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||QR),i.length>1&&i.sort(h||J_),r.length>1&&r.sort(h||J_)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function JR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new e0,n.set(i,[o])):r>=s.length?(o=new e0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function eb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ze};break;case"SpotLight":t={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function tb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nb=0;function ib(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rb(n){const e=new eb,t=tb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,s=new ut,o=new ut;function a(u){let c=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,m=0,g=0,d=0,x=0,v=0,y=0,C=0,A=0,T=0;u.sort(ib);for(let E=0,S=u.length;E<S;E++){const D=u[E],B=D.color,O=D.intensity,W=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=B.r*O,f+=B.g*O,h+=B.b*O;else if(D.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],O);T++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,I=t.get(D);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=D.shadow.matrix,x++}i.directional[p]=z,p++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(B).multiplyScalar(O),z.distance=W,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,i.spot[m]=z;const j=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,j.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[m]=j.matrix,D.castShadow){const I=t.get(D);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,i.spotShadow[m]=I,i.spotShadowMap[m]=q,y++}m++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(B).multiplyScalar(O),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=z,g++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const j=D.shadow,I=t.get(D);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,I.shadowCameraNear=j.camera.near,I.shadowCameraFar=j.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=D.shadow.matrix,v++}i.point[_]=z,_++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(O),z.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[d]=z,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==_||b.spotLength!==m||b.rectAreaLength!==g||b.hemiLength!==d||b.numDirectionalShadows!==x||b.numPointShadows!==v||b.numSpotShadows!==y||b.numSpotMaps!==C||b.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=m,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,b.directionalLength=p,b.pointLength=_,b.spotLength=m,b.rectAreaLength=g,b.hemiLength=d,b.numDirectionalShadows=x,b.numPointShadows=v,b.numSpotShadows=y,b.numSpotMaps=C,b.numLightProbes=T,i.version=nb++)}function l(u,c){let f=0,h=0,p=0,_=0,m=0;const g=c.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){const v=u[d];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function t0(n){const e=new rb(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new t0(n),e.set(r,[a])):s>=o.length?(a=new t0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class ob extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ab extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
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
}`;function cb(n,e,t){let i=new Mm;const r=new ie,s=new ie,o=new Ot,a=new ob({depthPacking:sT}),l=new ab,u={},c=t.maxTextureSize,f={[Vr]:Sn,[Sn]:Vr,[ji]:ji},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:lb,fragmentShader:ub}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new jn;_.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new On(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ly;let d=this.type;this.render=function(A,T,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Qi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=d!==Vi&&this.type===Vi,W=d===Vi&&this.type!==Vi;for(let q=0,z=A.length;q<z;q++){const j=A[q],I=j.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const K=I.getFrameExtents();if(r.multiply(K),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,I.mapSize.y=s.y)),I.map===null||O===!0||W===!0){const re=this.type!==Vi?{minFilter:ei,magFilter:ei}:{};I.map!==null&&I.map.dispose(),I.map=new xi(r.x,r.y,re),I.map.texture.name=j.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const Q=I.getViewportCount();for(let re=0;re<Q;re++){const Se=I.getViewport(re);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),B.viewport(o),I.updateMatrices(j,re),i=I.getFrustum(),y(T,b,I.camera,j,this.type)}I.isPointLightShadow!==!0&&this.type===Vi&&x(I,b),I.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(E,S,D)};function x(A,T){const b=e.update(m);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,b,h,m,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,b,p,m,null)}function v(A,T,b,E){let S=null;const D=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=b.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=S.uuid,O=T.uuid;let W=u[B];W===void 0&&(W={},u[B]=W);let q=W[O];q===void 0&&(q=S.clone(),W[O]=q,T.addEventListener("dispose",C)),S=q}if(S.visible=T.visible,S.wireframe=T.wireframe,E===Vi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=b}return S}function y(A,T,b,E,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Vi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const O=e.update(A),W=A.material;if(Array.isArray(W)){const q=O.groups;for(let z=0,j=q.length;z<j;z++){const I=q[z],K=W[I.materialIndex];if(K&&K.visible){const Q=v(A,K,E,S);A.onBeforeShadow(n,A,T,b,O,Q,I),n.renderBufferDirect(b,null,O,Q,A,I),A.onAfterShadow(n,A,T,b,O,Q,I)}}}else if(W.visible){const q=v(A,W,E,S);A.onBeforeShadow(n,A,T,b,O,q,null),n.renderBufferDirect(b,null,O,q,A,null),A.onAfterShadow(n,A,T,b,O,q,null)}}const B=A.children;for(let O=0,W=B.length;O<W;O++)y(B[O],T,b,E,S)}function C(A){A.target.removeEventListener("dispose",C);for(const b in u){const E=u[b],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function fb(n){function e(){let M=!1;const k=new Ot;let V=null;const $=new Ot(0,0,0,0);return{setMask:function(oe){V!==oe&&!M&&(n.colorMask(oe,oe,oe,oe),V=oe)},setLocked:function(oe){M=oe},setClear:function(oe,Re,Fe,wt,Nt){Nt===!0&&(oe*=wt,Re*=wt,Fe*=wt),k.set(oe,Re,Fe,wt),$.equals(k)===!1&&(n.clearColor(oe,Re,Fe,wt),$.copy(k))},reset:function(){M=!1,V=null,$.set(-1,0,0,0)}}}function t(){let M=!1,k=null,V=null,$=null;return{setTest:function(oe){oe?_e(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(oe){k!==oe&&!M&&(n.depthMask(oe),k=oe)},setFunc:function(oe){if(V!==oe){switch(oe){case Y1:n.depthFunc(n.NEVER);break;case q1:n.depthFunc(n.ALWAYS);break;case $1:n.depthFunc(n.LESS);break;case xc:n.depthFunc(n.LEQUAL);break;case K1:n.depthFunc(n.EQUAL);break;case Z1:n.depthFunc(n.GEQUAL);break;case Q1:n.depthFunc(n.GREATER);break;case J1:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}V=oe}},setLocked:function(oe){M=oe},setClear:function(oe){$!==oe&&(n.clearDepth(oe),$=oe)},reset:function(){M=!1,k=null,V=null,$=null}}}function i(){let M=!1,k=null,V=null,$=null,oe=null,Re=null,Fe=null,wt=null,Nt=null;return{setTest:function(Ke){M||(Ke?_e(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Ke){k!==Ke&&!M&&(n.stencilMask(Ke),k=Ke)},setFunc:function(Ke,It,Rt){(V!==Ke||$!==It||oe!==Rt)&&(n.stencilFunc(Ke,It,Rt),V=Ke,$=It,oe=Rt)},setOp:function(Ke,It,Rt){(Re!==Ke||Fe!==It||wt!==Rt)&&(n.stencilOp(Ke,It,Rt),Re=Ke,Fe=It,wt=Rt)},setLocked:function(Ke){M=Ke},setClear:function(Ke){Nt!==Ke&&(n.clearStencil(Ke),Nt=Ke)},reset:function(){M=!1,k=null,V=null,$=null,oe=null,Re=null,Fe=null,wt=null,Nt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],p=null,_=!1,m=null,g=null,d=null,x=null,v=null,y=null,C=null,A=new ze(0,0,0),T=0,b=!1,E=null,S=null,D=null,B=null,O=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=z>=2);let I=null,K={};const Q=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),Se=new Ot().fromArray(Q),Ge=new Ot().fromArray(re);function Y(M,k,V,$){const oe=new Uint8Array(4),Re=n.createTexture();n.bindTexture(M,Re),n.texParameteri(M,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(M,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<V;Fe++)M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY?n.texImage3D(k,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(k+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return Re}const te={};te[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),s.setFunc(xc),pe(!1),Z(l_),_e(n.CULL_FACE),ce(Qi);function _e(M){u[M]!==!0&&(n.enable(M),u[M]=!0)}function he(M){u[M]!==!1&&(n.disable(M),u[M]=!1)}function Ne(M,k){return c[M]!==k?(n.bindFramebuffer(M,k),c[M]=k,M===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=k),M===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=k),!0):!1}function He(M,k){let V=h,$=!1;if(M){V=f.get(k),V===void 0&&(V=[],f.set(k,V));const oe=M.textures;if(V.length!==oe.length||V[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,Fe=oe.length;Re<Fe;Re++)V[Re]=n.COLOR_ATTACHMENT0+Re;V.length=oe.length,$=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,$=!0);$&&n.drawBuffers(V)}function De(M){return p!==M?(n.useProgram(M),p=M,!0):!1}const qe={[us]:n.FUNC_ADD,[P1]:n.FUNC_SUBTRACT,[L1]:n.FUNC_REVERSE_SUBTRACT};qe[D1]=n.MIN,qe[N1]=n.MAX;const P={[I1]:n.ZERO,[U1]:n.ONE,[O1]:n.SRC_COLOR,[yd]:n.SRC_ALPHA,[H1]:n.SRC_ALPHA_SATURATE,[B1]:n.DST_COLOR,[k1]:n.DST_ALPHA,[F1]:n.ONE_MINUS_SRC_COLOR,[Sd]:n.ONE_MINUS_SRC_ALPHA,[V1]:n.ONE_MINUS_DST_COLOR,[z1]:n.ONE_MINUS_DST_ALPHA,[G1]:n.CONSTANT_COLOR,[W1]:n.ONE_MINUS_CONSTANT_COLOR,[X1]:n.CONSTANT_ALPHA,[j1]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(M,k,V,$,oe,Re,Fe,wt,Nt,Ke){if(M===Qi){_===!0&&(he(n.BLEND),_=!1);return}if(_===!1&&(_e(n.BLEND),_=!0),M!==b1){if(M!==m||Ke!==b){if((g!==us||v!==us)&&(n.blendEquation(n.FUNC_ADD),g=us,v=us),Ke)switch(M){case bo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xd:n.blendFunc(n.ONE,n.ONE);break;case u_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case c_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case u_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case c_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}d=null,x=null,y=null,C=null,A.set(0,0,0),T=0,m=M,b=Ke}return}oe=oe||k,Re=Re||V,Fe=Fe||$,(k!==g||oe!==v)&&(n.blendEquationSeparate(qe[k],qe[oe]),g=k,v=oe),(V!==d||$!==x||Re!==y||Fe!==C)&&(n.blendFuncSeparate(P[V],P[$],P[Re],P[Fe]),d=V,x=$,y=Re,C=Fe),(wt.equals(A)===!1||Nt!==T)&&(n.blendColor(wt.r,wt.g,wt.b,Nt),A.copy(wt),T=Nt),m=M,b=!1}function se(M,k){M.side===ji?he(n.CULL_FACE):_e(n.CULL_FACE);let V=M.side===Sn;k&&(V=!V),pe(V),M.blending===bo&&M.transparent===!1?ce(Qi):ce(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),s.setFunc(M.depthFunc),s.setTest(M.depthTest),s.setMask(M.depthWrite),r.setMask(M.colorWrite);const $=M.stencilWrite;o.setTest($),$&&(o.setMask(M.stencilWriteMask),o.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),o.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),me(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function pe(M){E!==M&&(M?n.frontFace(n.CW):n.frontFace(n.CCW),E=M)}function Z(M){M!==C1?(_e(n.CULL_FACE),M!==S&&(M===l_?n.cullFace(n.BACK):M===R1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),S=M}function Pe(M){M!==D&&(q&&n.lineWidth(M),D=M)}function me(M,k,V){M?(_e(n.POLYGON_OFFSET_FILL),(B!==k||O!==V)&&(n.polygonOffset(k,V),B=k,O=V)):he(n.POLYGON_OFFSET_FILL)}function Me(M){M?_e(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function L(M){M===void 0&&(M=n.TEXTURE0+W-1),I!==M&&(n.activeTexture(M),I=M)}function w(M,k,V){V===void 0&&(I===null?V=n.TEXTURE0+W-1:V=I);let $=K[V];$===void 0&&($={type:void 0,texture:void 0},K[V]=$),($.type!==M||$.texture!==k)&&(I!==V&&(n.activeTexture(V),I=V),n.bindTexture(M,k||te[M]),$.type=M,$.texture=k)}function H(){const M=K[I];M!==void 0&&M.type!==void 0&&(n.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ye(){try{n.texImage3D.apply(n,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ie(M){Se.equals(M)===!1&&(n.scissor(M.x,M.y,M.z,M.w),Se.copy(M))}function Te(M){Ge.equals(M)===!1&&(n.viewport(M.x,M.y,M.z,M.w),Ge.copy(M))}function Oe(M,k){let V=l.get(k);V===void 0&&(V=new WeakMap,l.set(k,V));let $=V.get(M);$===void 0&&($=n.getUniformBlockIndex(k,M.name),V.set(M,$))}function Ve(M,k){const $=l.get(k).get(M);a.get(k)!==$&&(n.uniformBlockBinding(k,$,M.__bindingPointIndex),a.set(k,$))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},I=null,K={},c={},f=new WeakMap,h=[],p=null,_=!1,m=null,g=null,d=null,x=null,v=null,y=null,C=null,A=new ze(0,0,0),T=0,b=!1,E=null,S=null,D=null,B=null,O=null,Se.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:_e,disable:he,bindFramebuffer:Ne,drawBuffers:He,useProgram:De,setBlending:ce,setMaterial:se,setFlipSided:pe,setCullFace:Z,setLineWidth:Pe,setPolygonOffset:me,setScissorTest:Me,activeTexture:L,bindTexture:w,unbindTexture:H,compressedTexImage2D:ne,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Ye,updateUBOMapping:Oe,uniformBlockBinding:Ve,texStorage2D:Be,texStorage3D:ue,texSubImage2D:J,texSubImage3D:Ce,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:Ie,viewport:Te,reset:ct}}function n0(n,e,t,i){const r=hb(i);switch(t){case yy:return n*e;case My:return n*e;case Ey:return n*e*2;case Ty:return n*e/r.components*r.byteLength;case _m:return n*e/r.components*r.byteLength;case wy:return n*e*2/r.components*r.byteLength;case vm:return n*e*2/r.components*r.byteLength;case Sy:return n*e*3/r.components*r.byteLength;case gi:return n*e*4/r.components*r.byteLength;case xm:return n*e*4/r.components*r.byteLength;case Bu:case Vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hu:case Gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cd:case bd:return Math.max(n,16)*Math.max(e,8)/4;case Ad:case Rd:return Math.max(n,8)*Math.max(e,8)/2;case Pd:case Ld:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Od:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case kd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case jd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wu:case Yd:case qd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ay:case $d:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kd:case Zd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hb(n){switch(n){case rr:case _y:return{byteLength:1,components:1};case ul:case vy:case Ji:return{byteLength:2,components:1};case mm:case gm:return{byteLength:2,components:4};case Rs:case pm:case $i:return{byteLength:4,components:1};case xy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function db(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ie,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,w){return p?new OffscreenCanvas(L,w):Tc("canvas")}function m(L,w,H){let ne=1;const ee=Me(L);if((ee.width>H||ee.height>H)&&(ne=H/Math.max(ee.width,ee.height)),ne<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const J=Math.floor(ne*ee.width),Ce=Math.floor(ne*ee.height);f===void 0&&(f=_(J,Ce));const de=w?_(J,Ce):f;return de.width=J,de.height=Ce,de.getContext("2d").drawImage(L,0,0,J,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+Ce+")."),de}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==ei&&L.minFilter!==pi}function d(L){n.generateMipmap(L)}function x(L,w,H,ne,ee=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let J=w;if(w===n.RED&&(H===n.FLOAT&&(J=n.R32F),H===n.HALF_FLOAT&&(J=n.R16F),H===n.UNSIGNED_BYTE&&(J=n.R8)),w===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.R8UI),H===n.UNSIGNED_SHORT&&(J=n.R16UI),H===n.UNSIGNED_INT&&(J=n.R32UI),H===n.BYTE&&(J=n.R8I),H===n.SHORT&&(J=n.R16I),H===n.INT&&(J=n.R32I)),w===n.RG&&(H===n.FLOAT&&(J=n.RG32F),H===n.HALF_FLOAT&&(J=n.RG16F),H===n.UNSIGNED_BYTE&&(J=n.RG8)),w===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RG8UI),H===n.UNSIGNED_SHORT&&(J=n.RG16UI),H===n.UNSIGNED_INT&&(J=n.RG32UI),H===n.BYTE&&(J=n.RG8I),H===n.SHORT&&(J=n.RG16I),H===n.INT&&(J=n.RG32I)),w===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),w===n.RGBA){const Ce=ee?yc:tt.getTransfer(ne);H===n.FLOAT&&(J=n.RGBA32F),H===n.HALF_FLOAT&&(J=n.RGBA16F),H===n.UNSIGNED_BYTE&&(J=Ce===st?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(L,w){let H;return L?w===null||w===Rs||w===Xo?H=n.DEPTH24_STENCIL8:w===$i?H=n.DEPTH32F_STENCIL8:w===ul&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Rs||w===Xo?H=n.DEPTH_COMPONENT24:w===$i?H=n.DEPTH_COMPONENT32F:w===ul&&(H=n.DEPTH_COMPONENT16),H}function y(L,w){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==ei&&L.minFilter!==pi?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function C(L){const w=L.target;w.removeEventListener("dispose",C),T(w),w.isVideoTexture&&c.delete(w)}function A(L){const w=L.target;w.removeEventListener("dispose",A),E(w)}function T(L){const w=i.get(L);if(w.__webglInit===void 0)return;const H=L.source,ne=h.get(H);if(ne){const ee=ne[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(L),Object.keys(ne).length===0&&h.delete(H)}i.remove(L)}function b(L){const w=i.get(L);n.deleteTexture(w.__webglTexture);const H=L.source,ne=h.get(H);delete ne[w.__cacheKey],o.memory.textures--}function E(L){const w=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let ee=0;ee<w.__webglFramebuffer[ne].length;ee++)n.deleteFramebuffer(w.__webglFramebuffer[ne][ee]);else n.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)n.deleteFramebuffer(w.__webglFramebuffer[ne]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=L.textures;for(let ne=0,ee=H.length;ne<ee;ne++){const J=i.get(H[ne]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(H[ne])}i.remove(L)}let S=0;function D(){S=0}function B(){const L=S;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),S+=1,L}function O(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function W(L,w){const H=i.get(L);if(L.isVideoTexture&&Pe(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(H,L,w);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+w)}function q(L,w){const H=i.get(L);if(L.version>0&&H.__version!==L.version){Ge(H,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+w)}function z(L,w){const H=i.get(L);if(L.version>0&&H.__version!==L.version){Ge(H,L,w);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+w)}function j(L,w){const H=i.get(L);if(L.version>0&&H.__version!==L.version){Y(H,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+w)}const I={[Td]:n.REPEAT,[ps]:n.CLAMP_TO_EDGE,[wd]:n.MIRRORED_REPEAT},K={[ei]:n.NEAREST,[iT]:n.NEAREST_MIPMAP_NEAREST,[Kl]:n.NEAREST_MIPMAP_LINEAR,[pi]:n.LINEAR,[Of]:n.LINEAR_MIPMAP_NEAREST,[ms]:n.LINEAR_MIPMAP_LINEAR},Q={[aT]:n.NEVER,[dT]:n.ALWAYS,[lT]:n.LESS,[Ry]:n.LEQUAL,[uT]:n.EQUAL,[hT]:n.GEQUAL,[cT]:n.GREATER,[fT]:n.NOTEQUAL};function re(L,w){if(w.type===$i&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===pi||w.magFilter===Of||w.magFilter===Kl||w.magFilter===ms||w.minFilter===pi||w.minFilter===Of||w.minFilter===Kl||w.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,I[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,I[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,I[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,K[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ei||w.minFilter!==Kl&&w.minFilter!==ms||w.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Se(L,w){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",C));const ne=w.source;let ee=h.get(ne);ee===void 0&&(ee={},h.set(ne,ee));const J=O(w);if(J!==L.__cacheKey){ee[J]===void 0&&(ee[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[J].usedTimes++;const Ce=ee[L.__cacheKey];Ce!==void 0&&(ee[L.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(w)),L.__cacheKey=J,L.__webglTexture=ee[J].texture}return H}function Ge(L,w,H){let ne=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=n.TEXTURE_3D);const ee=Se(L,w),J=w.source;t.bindTexture(ne,L.__webglTexture,n.TEXTURE0+H);const Ce=i.get(J);if(J.version!==Ce.__version||ee===!0){t.activeTexture(n.TEXTURE0+H);const de=tt.getPrimaries(tt.workingColorSpace),xe=w.colorSpace===Mr?null:tt.getPrimaries(w.colorSpace),Be=w.colorSpace===Mr||de===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ue=m(w.image,!1,r.maxTextureSize);ue=me(w,ue);const ve=s.convert(w.format,w.colorSpace),Ye=s.convert(w.type);let Ie=x(w.internalFormat,ve,Ye,w.colorSpace,w.isVideoTexture);re(ne,w);let Te;const Oe=w.mipmaps,Ve=w.isVideoTexture!==!0,ct=Ce.__version===void 0||ee===!0,M=J.dataReady,k=y(w,ue);if(w.isDepthTexture)Ie=v(w.format===jo,w.type),ct&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Ie,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,ve,Ye,null));else if(w.isDataTexture)if(Oe.length>0){Ve&&ct&&t.texStorage2D(n.TEXTURE_2D,k,Ie,Oe[0].width,Oe[0].height);for(let V=0,$=Oe.length;V<$;V++)Te=Oe[V],Ve?M&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,Te.width,Te.height,ve,Ye,Te.data):t.texImage2D(n.TEXTURE_2D,V,Ie,Te.width,Te.height,0,ve,Ye,Te.data);w.generateMipmaps=!1}else Ve?(ct&&t.texStorage2D(n.TEXTURE_2D,k,Ie,ue.width,ue.height),M&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,ve,Ye,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,ve,Ye,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ve&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,k,Ie,Oe[0].width,Oe[0].height,ue.depth);for(let V=0,$=Oe.length;V<$;V++)if(Te=Oe[V],w.format!==gi)if(ve!==null)if(Ve){if(M)if(w.layerUpdates.size>0){const oe=n0(Te.width,Te.height,w.format,w.type);for(const Re of w.layerUpdates){const Fe=Te.data.subarray(Re*oe/Te.data.BYTES_PER_ELEMENT,(Re+1)*oe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,Re,Te.width,Te.height,1,ve,Fe,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,Te.width,Te.height,ue.depth,ve,Te.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Ie,Te.width,Te.height,ue.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?M&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,Te.width,Te.height,ue.depth,ve,Ye,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Ie,Te.width,Te.height,ue.depth,0,ve,Ye,Te.data)}else{Ve&&ct&&t.texStorage2D(n.TEXTURE_2D,k,Ie,Oe[0].width,Oe[0].height);for(let V=0,$=Oe.length;V<$;V++)Te=Oe[V],w.format!==gi?ve!==null?Ve?M&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,Te.width,Te.height,ve,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Ie,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?M&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,Te.width,Te.height,ve,Ye,Te.data):t.texImage2D(n.TEXTURE_2D,V,Ie,Te.width,Te.height,0,ve,Ye,Te.data)}else if(w.isDataArrayTexture)if(Ve){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,k,Ie,ue.width,ue.height,ue.depth),M)if(w.layerUpdates.size>0){const V=n0(ue.width,ue.height,w.format,w.type);for(const $ of w.layerUpdates){const oe=ue.data.subarray($*V/ue.data.BYTES_PER_ELEMENT,($+1)*V/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,ue.width,ue.height,1,ve,Ye,oe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Ye,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ue.width,ue.height,ue.depth,0,ve,Ye,ue.data);else if(w.isData3DTexture)Ve?(ct&&t.texStorage3D(n.TEXTURE_3D,k,Ie,ue.width,ue.height,ue.depth),M&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Ye,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ue.width,ue.height,ue.depth,0,ve,Ye,ue.data);else if(w.isFramebufferTexture){if(ct)if(Ve)t.texStorage2D(n.TEXTURE_2D,k,Ie,ue.width,ue.height);else{let V=ue.width,$=ue.height;for(let oe=0;oe<k;oe++)t.texImage2D(n.TEXTURE_2D,oe,Ie,V,$,0,ve,Ye,null),V>>=1,$>>=1}}else if(Oe.length>0){if(Ve&&ct){const V=Me(Oe[0]);t.texStorage2D(n.TEXTURE_2D,k,Ie,V.width,V.height)}for(let V=0,$=Oe.length;V<$;V++)Te=Oe[V],Ve?M&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,ve,Ye,Te):t.texImage2D(n.TEXTURE_2D,V,Ie,ve,Ye,Te);w.generateMipmaps=!1}else if(Ve){if(ct){const V=Me(ue);t.texStorage2D(n.TEXTURE_2D,k,Ie,V.width,V.height)}M&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ye,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ie,ve,Ye,ue);g(w)&&d(ne),Ce.__version=J.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Y(L,w,H){if(w.image.length!==6)return;const ne=Se(L,w),ee=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+H);const J=i.get(ee);if(ee.version!==J.__version||ne===!0){t.activeTexture(n.TEXTURE0+H);const Ce=tt.getPrimaries(tt.workingColorSpace),de=w.colorSpace===Mr?null:tt.getPrimaries(w.colorSpace),xe=w.colorSpace===Mr||Ce===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Be=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,ve=[];for(let $=0;$<6;$++)!Be&&!ue?ve[$]=m(w.image[$],!0,r.maxCubemapSize):ve[$]=ue?w.image[$].image:w.image[$],ve[$]=me(w,ve[$]);const Ye=ve[0],Ie=s.convert(w.format,w.colorSpace),Te=s.convert(w.type),Oe=x(w.internalFormat,Ie,Te,w.colorSpace),Ve=w.isVideoTexture!==!0,ct=J.__version===void 0||ne===!0,M=ee.dataReady;let k=y(w,Ye);re(n.TEXTURE_CUBE_MAP,w);let V;if(Be){Ve&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,k,Oe,Ye.width,Ye.height);for(let $=0;$<6;$++){V=ve[$].mipmaps;for(let oe=0;oe<V.length;oe++){const Re=V[oe];w.format!==gi?Ie!==null?Ve?M&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,0,0,Re.width,Re.height,Ie,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,Oe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,0,0,Re.width,Re.height,Ie,Te,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,Oe,Re.width,Re.height,0,Ie,Te,Re.data)}}}else{if(V=w.mipmaps,Ve&&ct){V.length>0&&k++;const $=Me(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,k,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(ue){Ve?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ve[$].width,ve[$].height,Ie,Te,ve[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,ve[$].width,ve[$].height,0,Ie,Te,ve[$].data);for(let oe=0;oe<V.length;oe++){const Fe=V[oe].image[$].image;Ve?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,0,0,Fe.width,Fe.height,Ie,Te,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,Oe,Fe.width,Fe.height,0,Ie,Te,Fe.data)}}else{Ve?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ie,Te,ve[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,Ie,Te,ve[$]);for(let oe=0;oe<V.length;oe++){const Re=V[oe];Ve?M&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,0,0,Ie,Te,Re.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,Oe,Ie,Te,Re.image[$])}}}g(w)&&d(n.TEXTURE_CUBE_MAP),J.__version=ee.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function te(L,w,H,ne,ee,J){const Ce=s.convert(H.format,H.colorSpace),de=s.convert(H.type),xe=x(H.internalFormat,Ce,de,H.colorSpace);if(!i.get(w).__hasExternalTextures){const ue=Math.max(1,w.width>>J),ve=Math.max(1,w.height>>J);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,xe,ue,ve,w.depth,0,Ce,de,null):t.texImage2D(ee,J,xe,ue,ve,0,Ce,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Z(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ee,i.get(H).__webglTexture,0,pe(w)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ee,i.get(H).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(L,w,H){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const ne=w.depthTexture,ee=ne&&ne.isDepthTexture?ne.type:null,J=v(w.stencilBuffer,ee),Ce=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=pe(w);Z(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,J,w.width,w.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,J,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,J,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,L)}else{const ne=w.textures;for(let ee=0;ee<ne.length;ee++){const J=ne[ee],Ce=s.convert(J.format,J.colorSpace),de=s.convert(J.type),xe=x(J.internalFormat,Ce,de,J.colorSpace),Be=pe(w);H&&Z(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,xe,w.width,w.height):Z(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,xe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,xe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const ne=i.get(w.depthTexture).__webglTexture,ee=pe(w);if(w.depthTexture.format===Po)Z(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(w.depthTexture.format===jo)Z(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ne(L){const w=i.get(L),H=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");he(w.__webglFramebuffer,L)}else if(H){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=n.createRenderbuffer(),_e(w.__webglDepthbuffer[ne],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),_e(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(L,w,H){const ne=i.get(L);w!==void 0&&te(ne.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ne(L)}function De(L){const w=L.texture,H=i.get(L),ne=i.get(w);L.addEventListener("dispose",A);const ee=L.textures,J=L.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=w.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let xe=0;xe<w.mipmaps.length;xe++)H.__webglFramebuffer[de][xe]=n.createFramebuffer()}else H.__webglFramebuffer[de]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<w.mipmaps.length;de++)H.__webglFramebuffer[de]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let de=0,xe=ee.length;de<xe;de++){const Be=i.get(ee[de]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Z(L)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const xe=ee[de];H.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[de]);const Be=s.convert(xe.format,xe.colorSpace),ue=s.convert(xe.type),ve=x(xe.internalFormat,Be,ue,xe.colorSpace,L.isXRRenderTarget===!0),Ye=pe(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,ve,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,H.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),re(n.TEXTURE_CUBE_MAP,w);for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)te(H.__webglFramebuffer[de][xe],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else te(H.__webglFramebuffer[de],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(w)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let de=0,xe=ee.length;de<xe;de++){const Be=ee[de],ue=i.get(Be);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),re(n.TEXTURE_2D,Be),te(H.__webglFramebuffer,L,Be,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),g(Be)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(de=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ne.__webglTexture),re(de,w),w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)te(H.__webglFramebuffer[xe],L,w,n.COLOR_ATTACHMENT0,de,xe);else te(H.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,de,0);g(w)&&d(de),t.unbindTexture()}L.depthBuffer&&Ne(L)}function qe(L){const w=L.textures;for(let H=0,ne=w.length;H<ne;H++){const ee=w[H];if(g(ee)){const J=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ce=i.get(ee).__webglTexture;t.bindTexture(J,Ce),d(J),t.unbindTexture()}}}const P=[],ce=[];function se(L){if(L.samples>0){if(Z(L)===!1){const w=L.textures,H=L.width,ne=L.height;let ee=n.COLOR_BUFFER_BIT;const J=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(L),de=w.length>1;if(de)for(let xe=0;xe<w.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let xe=0;xe<w.length;xe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);const Be=i.get(w[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,H,ne,0,0,H,ne,ee,n.NEAREST),l===!0&&(P.length=0,ce.length=0,P.push(n.COLOR_ATTACHMENT0+xe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(P.push(J),ce.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<w.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);const Be=i.get(w[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function pe(L){return Math.min(r.maxSamples,L.samples)}function Z(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pe(L){const w=o.render.frame;c.get(L)!==w&&(c.set(L,w),L.update())}function me(L,w){const H=L.colorSpace,ne=L.format,ee=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==qr&&H!==Mr&&(tt.getTransfer(H)===st?(ne!==gi||ee!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Me(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=He,this.setupRenderTarget=De,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Z}function pb(n,e){function t(i,r=Mr){let s;const o=tt.getTransfer(r);if(i===rr)return n.UNSIGNED_BYTE;if(i===mm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_y)return n.BYTE;if(i===vy)return n.SHORT;if(i===ul)return n.UNSIGNED_SHORT;if(i===pm)return n.INT;if(i===Rs)return n.UNSIGNED_INT;if(i===$i)return n.FLOAT;if(i===Ji)return n.HALF_FLOAT;if(i===yy)return n.ALPHA;if(i===Sy)return n.RGB;if(i===gi)return n.RGBA;if(i===My)return n.LUMINANCE;if(i===Ey)return n.LUMINANCE_ALPHA;if(i===Po)return n.DEPTH_COMPONENT;if(i===jo)return n.DEPTH_STENCIL;if(i===Ty)return n.RED;if(i===_m)return n.RED_INTEGER;if(i===wy)return n.RG;if(i===vm)return n.RG_INTEGER;if(i===xm)return n.RGBA_INTEGER;if(i===Bu||i===Vu||i===Hu||i===Gu)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ad||i===Cd||i===Rd||i===bd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ad)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pd||i===Ld||i===Dd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Pd||i===Ld)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nd||i===Id||i===Ud||i===Od||i===Fd||i===kd||i===zd||i===Bd||i===Vd||i===Hd||i===Gd||i===Wd||i===Xd||i===jd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Id)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ud)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Od)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wu||i===Yd||i===qd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wu)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ay||i===$d||i===Kd||i===Zd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$d)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class mb extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xo extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gb={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),d=this._getHandJoint(u,m);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const _b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vb=`
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

}`;class xb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Mn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cn({vertexShader:_b,fragmentShader:vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new On(new bl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yb extends Ns{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const m=new xb,g=t.getContextAttributes();let d=null,x=null;const v=[],y=[],C=new ie;let A=null;const T=new Qn;T.layers.enable(1),T.viewport=new Ot;const b=new Qn;b.layers.enable(2),b.viewport=new Ot;const E=[T,b],S=new mb;S.layers.enable(1),S.layers.enable(2);let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=v[Y];return te===void 0&&(te=new lh,v[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=v[Y];return te===void 0&&(te=new lh,v[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=v[Y];return te===void 0&&(te=new lh,v[Y]=te),te.getHandSpace()};function O(Y){const te=y.indexOf(Y.inputSource);if(te===-1)return;const _e=v[te];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,u||o),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",q);for(let Y=0;Y<v.length;Y++){const te=y[Y];te!==null&&(y[Y]=null,v[Y].disconnect(te))}D=null,B=null,m.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,x=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new xi(p.framebufferWidth,p.framebufferHeight,{format:gi,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,_e=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=g.stencil?jo:Po,_e=g.stencil?Xo:Rs);const Ne={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new xi(h.textureWidth,h.textureHeight,{format:gi,type:rr,depthTexture:new Vy(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(Y){for(let te=0;te<Y.removed.length;te++){const _e=Y.removed[te],he=y.indexOf(_e);he>=0&&(y[he]=null,v[he].disconnect(_e))}for(let te=0;te<Y.added.length;te++){const _e=Y.added[te];let he=y.indexOf(_e);if(he===-1){for(let He=0;He<v.length;He++)if(He>=y.length){y.push(_e),he=He;break}else if(y[He]===null){y[He]=_e,he=He;break}if(he===-1)break}const Ne=v[he];Ne&&Ne.connect(_e)}}const z=new N,j=new N;function I(Y,te,_e){z.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(_e.matrixWorld);const he=z.distanceTo(j),Ne=te.projectionMatrix.elements,He=_e.projectionMatrix.elements,De=Ne[14]/(Ne[10]-1),qe=Ne[14]/(Ne[10]+1),P=(Ne[9]+1)/Ne[5],ce=(Ne[9]-1)/Ne[5],se=(Ne[8]-1)/Ne[0],pe=(He[8]+1)/He[0],Z=De*se,Pe=De*pe,me=he/(-se+pe),Me=me*-se;te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Me),Y.translateZ(me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const L=De+me,w=qe+me,H=Z-Me,ne=Pe+(he-Me),ee=P*qe/w*L,J=ce*qe/w*L;Y.projectionMatrix.makePerspective(H,ne,ee,J,L,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function K(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;m.texture!==null&&(Y.near=m.depthNear,Y.far=m.depthFar),S.near=b.near=T.near=Y.near,S.far=b.far=T.far=Y.far,(D!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,B=S.far,T.near=D,T.far=B,b.near=D,b.far=B,T.updateProjectionMatrix(),b.updateProjectionMatrix(),Y.updateProjectionMatrix());const te=Y.parent,_e=S.cameras;K(S,te);for(let he=0;he<_e.length;he++)K(_e[he],te);_e.length===2?I(S,T,b):S.projectionMatrix.copy(T.projectionMatrix),Q(Y,S,te)};function Q(Y,te,_e){_e===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(S)};let re=null;function Se(Y,te){if(c=te.getViewerPose(u||o),_=te,c!==null){const _e=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let he=!1;_e.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let He=0;He<_e.length;He++){const De=_e[He];let qe=null;if(p!==null)qe=p.getViewport(De);else{const ce=f.getViewSubImage(h,De);qe=ce.viewport,He===0&&(e.setRenderTargetTextures(x,ce.colorTexture,h.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(x))}let P=E[He];P===void 0&&(P=new Qn,P.layers.enable(He),P.viewport=new Ot,E[He]=P),P.matrix.fromArray(De.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(De.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(qe.x,qe.y,qe.width,qe.height),He===0&&(S.matrix.copy(P.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(P)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const He=f.getDepthInformation(_e[0]);He&&He.isValid&&He.texture&&m.init(e,He,r.renderState)}}for(let _e=0;_e<v.length;_e++){const he=y[_e],Ne=v[_e];he!==null&&Ne!==void 0&&Ne.update(he,te,u||o)}re&&re(Y,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ge=new By;Ge.setAnimationLoop(Se),this.setAnimationLoop=function(Y){re=Y},this.dispose=function(){}}}const ns=new Di,Sb=new ut;function Mb(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Fy(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),c(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),m(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,x,v):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Sn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Sn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),v=x.envMap,y=x.envMapRotation;v&&(g.envMap.value=v,ns.copy(y),ns.x*=-1,ns.y*=-1,ns.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),g.envMapRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(ns)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=v*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Sn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function m(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Eb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function u(x,v){let y=r[x.id];y===void 0&&(_(x),y=c(x),r[x.id]=y,x.addEventListener("dispose",g));const C=v.program;i.updateUBOMapping(x,C);const A=e.render.frame;s[x.id]!==A&&(h(x),s[x.id]=A)}function c(x){const v=f();x.__bindingPointIndex=v;const y=n.createBuffer(),C=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],y=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,T=y.length;A<T;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,S=b.length;E<S;E++){const D=b[E];if(p(D,A,E,C)===!0){const B=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let q=0;q<O.length;q++){const z=O[q],j=m(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,B+W,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,v,y,C){const A=x.value,T=v+"_"+y;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const b=C[T];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return C[T]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function _(x){const v=x.uniforms;let y=0;const C=16;for(let T=0,b=v.length;T<b;T++){const E=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,D=E.length;S<D;S++){const B=E[S],O=Array.isArray(B.value)?B.value:[B.value];for(let W=0,q=O.length;W<q;W++){const z=O[W],j=m(z),I=y%C;I!==0&&C-I<j.boundary&&(y+=C-I),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=j.storage}}}const A=y%C;return A>0&&(y+=C-A),x.__size=y,x.__cache={},this}function m(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Tb{constructor(e={}){const{canvas:t=gT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ei,this.toneMapping=Or,this.toneMappingExposure=1;const v=this;let y=!1,C=0,A=0,T=null,b=-1,E=null;const S=new Ot,D=new Ot;let B=null;const O=new ze(0);let W=0,q=t.width,z=t.height,j=1,I=null,K=null;const Q=new Ot(0,0,q,z),re=new Ot(0,0,q,z);let Se=!1;const Ge=new Mm;let Y=!1,te=!1;const _e=new ut,he=new N,Ne=new Ot,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function qe(){return T===null?j:1}let P=i;function ce(R,U){return t.getContext(R,U)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hm}`),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",oe,!1),P===null){const U="webgl2";if(P=ce(U,R),P===null)throw ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,pe,Z,Pe,me,Me,L,w,H,ne,ee,J,Ce,de,xe,Be,ue,ve,Ye,Ie,Te,Oe,Ve,ct;function M(){se=new LC(P),se.init(),Oe=new pb(P,se),pe=new wC(P,se,e,Oe),Z=new fb(P),Pe=new IC(P),me=new ZR,Me=new db(P,se,Z,me,pe,Oe,Pe),L=new CC(v),w=new PC(v),H=new VT(P),Ve=new EC(P,H),ne=new DC(P,H,Pe,Ve),ee=new OC(P,ne,H,Pe),Ye=new UC(P,pe,Me),Be=new AC(me),J=new KR(v,L,w,se,pe,Ve,Be),Ce=new Mb(v,me),de=new JR,xe=new sb(se),ve=new MC(v,L,w,Z,ee,h,l),ue=new cb(v,ee,pe),ct=new Eb(P,Pe,pe,Z),Ie=new TC(P,se,Pe),Te=new NC(P,se,Pe),Pe.programs=J.programs,v.capabilities=pe,v.extensions=se,v.properties=me,v.renderLists=de,v.shadowMap=ue,v.state=Z,v.info=Pe}M();const k=new yb(v,P);this.xr=k,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(q,z,!1))},this.getSize=function(R){return R.set(q,z)},this.setSize=function(R,U,G=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,z=U,t.width=Math.floor(R*j),t.height=Math.floor(U*j),G===!0&&(t.style.width=R+"px",t.style.height=U+"px"),this.setViewport(0,0,R,U)},this.getDrawingBufferSize=function(R){return R.set(q*j,z*j).floor()},this.setDrawingBufferSize=function(R,U,G){q=R,z=U,j=G,t.width=Math.floor(R*G),t.height=Math.floor(U*G),this.setViewport(0,0,R,U)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,U,G,X){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,U,G,X),Z.viewport(S.copy(Q).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,U,G,X){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,U,G,X),Z.scissor(D.copy(re).multiplyScalar(j).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){Z.setScissorTest(Se=R)},this.setOpaqueSort=function(R){I=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(R=!0,U=!0,G=!0){let X=0;if(R){let F=!1;if(T!==null){const fe=T.texture.format;F=fe===xm||fe===vm||fe===_m}if(F){const fe=T.texture.type,ye=fe===rr||fe===Rs||fe===ul||fe===Xo||fe===mm||fe===gm,we=ve.getClearColor(),Ae=ve.getClearAlpha(),Ue=we.r,ke=we.g,Le=we.b;ye?(p[0]=Ue,p[1]=ke,p[2]=Le,p[3]=Ae,P.clearBufferuiv(P.COLOR,0,p)):(_[0]=Ue,_[1]=ke,_[2]=Le,_[3]=Ae,P.clearBufferiv(P.COLOR,0,_))}else X|=P.COLOR_BUFFER_BIT}U&&(X|=P.DEPTH_BUFFER_BIT),G&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),xe.dispose(),me.dispose(),L.dispose(),w.dispose(),ee.dispose(),Ve.dispose(),ct.dispose(),J.dispose(),k.dispose(),k.removeEventListener("sessionstart",Rt),k.removeEventListener("sessionend",lr),jt.stop()};function V(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=Pe.autoReset,U=ue.enabled,G=ue.autoUpdate,X=ue.needsUpdate,F=ue.type;M(),Pe.autoReset=R,ue.enabled=U,ue.autoUpdate=G,ue.needsUpdate=X,ue.type=F}function oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Re(R){const U=R.target;U.removeEventListener("dispose",Re),Fe(U)}function Fe(R){wt(R),me.remove(R)}function wt(R){const U=me.get(R).programs;U!==void 0&&(U.forEach(function(G){J.releaseProgram(G)}),R.isShaderMaterial&&J.releaseShaderCache(R))}this.renderBufferDirect=function(R,U,G,X,F,fe){U===null&&(U=He);const ye=F.isMesh&&F.matrixWorld.determinant()<0,we=ZS(R,U,G,X,F);Z.setMaterial(X,ye);let Ae=G.index,Ue=1;if(X.wireframe===!0){if(Ae=ne.getWireframeAttribute(G),Ae===void 0)return;Ue=2}const ke=G.drawRange,Le=G.attributes.position;let Qe=ke.start*Ue,St=(ke.start+ke.count)*Ue;fe!==null&&(Qe=Math.max(Qe,fe.start*Ue),St=Math.min(St,(fe.start+fe.count)*Ue)),Ae!==null?(Qe=Math.max(Qe,0),St=Math.min(St,Ae.count)):Le!=null&&(Qe=Math.max(Qe,0),St=Math.min(St,Le.count));const Mt=St-Qe;if(Mt<0||Mt===1/0)return;Ve.setup(F,X,we,G,Ae);let Rn,Je=Ie;if(Ae!==null&&(Rn=H.get(Ae),Je=Te,Je.setIndex(Rn)),F.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*qe()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(F.isLine){let be=X.linewidth;be===void 0&&(be=1),Z.setLineWidth(be*qe()),F.isLineSegments?Je.setMode(P.LINES):F.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else F.isPoints?Je.setMode(P.POINTS):F.isSprite&&Je.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const be=F._multiDrawStarts,Yt=F._multiDrawCounts,et=F._multiDrawCount,oi=Ae?H.get(Ae).bytesPerElement:1,Os=me.get(X).currentProgram.getUniforms();for(let bn=0;bn<et;bn++)Os.setValue(P,"_gl_DrawID",bn),Je.render(be[bn]/oi,Yt[bn])}else if(F.isInstancedMesh)Je.renderInstances(Qe,Mt,F.count);else if(G.isInstancedBufferGeometry){const be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Yt=Math.min(G.instanceCount,be);Je.renderInstances(Qe,Mt,Yt)}else Je.render(Qe,Mt)};function Nt(R,U,G){R.transparent===!0&&R.side===ji&&R.forceSinglePass===!1?(R.side=Sn,R.needsUpdate=!0,Dl(R,U,G),R.side=Vr,R.needsUpdate=!0,Dl(R,U,G),R.side=ji):Dl(R,U,G)}this.compile=function(R,U,G=null){G===null&&(G=R),g=xe.get(G),g.init(U),x.push(g),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),R!==G&&R.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();const X=new Set;return R.traverse(function(F){const fe=F.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const we=fe[ye];Nt(we,G,F),X.add(we)}else Nt(fe,G,F),X.add(fe)}),x.pop(),g=null,X},this.compileAsync=function(R,U,G=null){const X=this.compile(R,U,G);return new Promise(F=>{function fe(){if(X.forEach(function(ye){me.get(ye).currentProgram.isReady()&&X.delete(ye)}),X.size===0){F(R);return}setTimeout(fe,10)}se.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ke=null;function It(R){Ke&&Ke(R)}function Rt(){jt.stop()}function lr(){jt.start()}const jt=new By;jt.setAnimationLoop(It),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(R){Ke=R,k.setAnimationLoop(R),R===null?jt.stop():jt.start()},k.addEventListener("sessionstart",Rt),k.addEventListener("sessionend",lr),this.render=function(R,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(U),U=k.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,U,T),g=xe.get(R,x.length),g.init(U),x.push(g),_e.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ge.setFromProjectionMatrix(_e),te=this.localClippingEnabled,Y=Be.init(this.clippingPlanes,te),m=de.get(R,d.length),m.init(),d.push(m),k.enabled===!0&&k.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&Ui(fe,U,-1/0,v.sortObjects)}Ui(R,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(I,K),De=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,De&&ve.addToRenderList(m,R),this.info.render.frame++,Y===!0&&Be.beginShadows();const G=g.state.shadowsArray;ue.render(G,R,U),Y===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,F=m.transmissive;if(g.setupLights(),U.isArrayCamera){const fe=U.cameras;if(F.length>0)for(let ye=0,we=fe.length;ye<we;ye++){const Ae=fe[ye];oa(X,F,R,Ae)}De&&ve.render(R);for(let ye=0,we=fe.length;ye<we;ye++){const Ae=fe[ye];Kr(m,R,Ae,Ae.viewport)}}else F.length>0&&oa(X,F,R,U),De&&ve.render(R),Kr(m,R,U);T!==null&&(Me.updateMultisampleRenderTarget(T),Me.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(v,R,U),Ve.resetDefaultState(),b=-1,E=null,x.pop(),x.length>0?(g=x[x.length-1],Y===!0&&Be.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?m=d[d.length-1]:m=null};function Ui(R,U,G,X){if(R.visible===!1)return;if(R.layers.test(U.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(U);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ge.intersectsSprite(R)){X&&Ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_e);const ye=ee.update(R),we=R.material;we.visible&&m.push(R,ye,we,G,Ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ge.intersectsObject(R))){const ye=ee.update(R),we=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ne.copy(R.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ne.copy(ye.boundingSphere.center)),Ne.applyMatrix4(R.matrixWorld).applyMatrix4(_e)),Array.isArray(we)){const Ae=ye.groups;for(let Ue=0,ke=Ae.length;Ue<ke;Ue++){const Le=Ae[Ue],Qe=we[Le.materialIndex];Qe&&Qe.visible&&m.push(R,ye,Qe,G,Ne.z,Le)}}else we.visible&&m.push(R,ye,we,G,Ne.z,null)}}const fe=R.children;for(let ye=0,we=fe.length;ye<we;ye++)Ui(fe[ye],U,G,X)}function Kr(R,U,G,X){const F=R.opaque,fe=R.transmissive,ye=R.transparent;g.setupLightsView(G),Y===!0&&Be.setGlobalState(v.clippingPlanes,G),X&&Z.viewport(S.copy(X)),F.length>0&&Ll(F,U,G),fe.length>0&&Ll(fe,U,G),ye.length>0&&Ll(ye,U,G),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function oa(R,U,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new xi(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Ji:rr,minFilter:ms,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const fe=g.state.transmissionRenderTarget[X.id],ye=X.viewport||S;fe.setSize(ye.z,ye.w);const we=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(O),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),De?ve.render(G):v.clear();const Ae=v.toneMapping;v.toneMapping=Or;const Ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),Y===!0&&Be.setGlobalState(v.clippingPlanes,X),Ll(R,G,X),Me.updateMultisampleRenderTarget(fe),Me.updateRenderTargetMipmap(fe),se.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Le=0,Qe=U.length;Le<Qe;Le++){const St=U[Le],Mt=St.object,Rn=St.geometry,Je=St.material,be=St.group;if(Je.side===ji&&Mt.layers.test(X.layers)){const Yt=Je.side;Je.side=Sn,Je.needsUpdate=!0,$m(Mt,G,X,Rn,Je,be),Je.side=Yt,Je.needsUpdate=!0,ke=!0}}ke===!0&&(Me.updateMultisampleRenderTarget(fe),Me.updateRenderTargetMipmap(fe))}v.setRenderTarget(we),v.setClearColor(O,W),Ue!==void 0&&(X.viewport=Ue),v.toneMapping=Ae}function Ll(R,U,G){const X=U.isScene===!0?U.overrideMaterial:null;for(let F=0,fe=R.length;F<fe;F++){const ye=R[F],we=ye.object,Ae=ye.geometry,Ue=X===null?ye.material:X,ke=ye.group;we.layers.test(G.layers)&&$m(we,U,G,Ae,Ue,ke)}}function $m(R,U,G,X,F,fe){R.onBeforeRender(v,U,G,X,F,fe),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),F.transparent===!0&&F.side===ji&&F.forceSinglePass===!1?(F.side=Sn,F.needsUpdate=!0,v.renderBufferDirect(G,U,X,F,R,fe),F.side=Vr,F.needsUpdate=!0,v.renderBufferDirect(G,U,X,F,R,fe),F.side=ji):v.renderBufferDirect(G,U,X,F,R,fe),R.onAfterRender(v,U,G,X,F,fe)}function Dl(R,U,G){U.isScene!==!0&&(U=He);const X=me.get(R),F=g.state.lights,fe=g.state.shadowsArray,ye=F.state.version,we=J.getParameters(R,F.state,fe,U,G),Ae=J.getProgramCacheKey(we);let Ue=X.programs;X.environment=R.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(R.isMeshStandardMaterial?w:L).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?U.environmentRotation:R.envMapRotation,Ue===void 0&&(R.addEventListener("dispose",Re),Ue=new Map,X.programs=Ue);let ke=Ue.get(Ae);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===ye)return Zm(R,we),ke}else we.uniforms=J.getUniforms(R),R.onBeforeCompile(we,v),ke=J.acquireProgram(we,Ae),Ue.set(Ae,ke),X.uniforms=we.uniforms;const Le=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Le.clippingPlanes=Be.uniform),Zm(R,we),X.needsLights=JS(R),X.lightsStateVersion=ye,X.needsLights&&(Le.ambientLightColor.value=F.state.ambient,Le.lightProbe.value=F.state.probe,Le.directionalLights.value=F.state.directional,Le.directionalLightShadows.value=F.state.directionalShadow,Le.spotLights.value=F.state.spot,Le.spotLightShadows.value=F.state.spotShadow,Le.rectAreaLights.value=F.state.rectArea,Le.ltc_1.value=F.state.rectAreaLTC1,Le.ltc_2.value=F.state.rectAreaLTC2,Le.pointLights.value=F.state.point,Le.pointLightShadows.value=F.state.pointShadow,Le.hemisphereLights.value=F.state.hemi,Le.directionalShadowMap.value=F.state.directionalShadowMap,Le.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Le.spotShadowMap.value=F.state.spotShadowMap,Le.spotLightMatrix.value=F.state.spotLightMatrix,Le.spotLightMap.value=F.state.spotLightMap,Le.pointShadowMap.value=F.state.pointShadowMap,Le.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function Km(R){if(R.uniformsList===null){const U=R.currentProgram.getUniforms();R.uniformsList=Xu.seqWithValue(U.seq,R.uniforms)}return R.uniformsList}function Zm(R,U){const G=me.get(R);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function ZS(R,U,G,X,F){U.isScene!==!0&&(U=He),Me.resetTextureUnits();const fe=U.fog,ye=X.isMeshStandardMaterial?U.environment:null,we=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:qr,Ae=(X.isMeshStandardMaterial?w:L).get(X.envMap||ye),Ue=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Le=!!G.morphAttributes.position,Qe=!!G.morphAttributes.normal,St=!!G.morphAttributes.color;let Mt=Or;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const Rn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Je=Rn!==void 0?Rn.length:0,be=me.get(X),Yt=g.state.lights;if(Y===!0&&(te===!0||R!==E)){const Yn=R===E&&X.id===b;Be.setState(X,R,Yn)}let et=!1;X.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Yt.state.version||be.outputColorSpace!==we||F.isBatchedMesh&&be.batching===!1||!F.isBatchedMesh&&be.batching===!0||F.isBatchedMesh&&be.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&be.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&be.instancing===!1||!F.isInstancedMesh&&be.instancing===!0||F.isSkinnedMesh&&be.skinning===!1||!F.isSkinnedMesh&&be.skinning===!0||F.isInstancedMesh&&be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&be.instancingMorph===!1&&F.morphTexture!==null||be.envMap!==Ae||X.fog===!0&&be.fog!==fe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Be.numPlanes||be.numIntersection!==Be.numIntersection)||be.vertexAlphas!==Ue||be.vertexTangents!==ke||be.morphTargets!==Le||be.morphNormals!==Qe||be.morphColors!==St||be.toneMapping!==Mt||be.morphTargetsCount!==Je)&&(et=!0):(et=!0,be.__version=X.version);let oi=be.currentProgram;et===!0&&(oi=Dl(X,U,F));let Os=!1,bn=!1,af=!1;const bt=oi.getUniforms(),ur=be.uniforms;if(Z.useProgram(oi.program)&&(Os=!0,bn=!0,af=!0),X.id!==b&&(b=X.id,bn=!0),Os||E!==R){bt.setValue(P,"projectionMatrix",R.projectionMatrix),bt.setValue(P,"viewMatrix",R.matrixWorldInverse);const Yn=bt.map.cameraPosition;Yn!==void 0&&Yn.setValue(P,he.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&bt.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&bt.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,bn=!0,af=!0)}if(F.isSkinnedMesh){bt.setOptional(P,F,"bindMatrix"),bt.setOptional(P,F,"bindMatrixInverse");const Yn=F.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),bt.setValue(P,"boneTexture",Yn.boneTexture,Me))}F.isBatchedMesh&&(bt.setOptional(P,F,"batchingTexture"),bt.setValue(P,"batchingTexture",F._matricesTexture,Me),bt.setOptional(P,F,"batchingIdTexture"),bt.setValue(P,"batchingIdTexture",F._indirectTexture,Me),bt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&bt.setValue(P,"batchingColorTexture",F._colorsTexture,Me));const lf=G.morphAttributes;if((lf.position!==void 0||lf.normal!==void 0||lf.color!==void 0)&&Ye.update(F,G,oi),(bn||be.receiveShadow!==F.receiveShadow)&&(be.receiveShadow=F.receiveShadow,bt.setValue(P,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ur.envMap.value=Ae,ur.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(ur.envMapIntensity.value=U.environmentIntensity),bn&&(bt.setValue(P,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&QS(ur,af),fe&&X.fog===!0&&Ce.refreshFogUniforms(ur,fe),Ce.refreshMaterialUniforms(ur,X,j,z,g.state.transmissionRenderTarget[R.id]),Xu.upload(P,Km(be),ur,Me)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Xu.upload(P,Km(be),ur,Me),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&bt.setValue(P,"center",F.center),bt.setValue(P,"modelViewMatrix",F.modelViewMatrix),bt.setValue(P,"normalMatrix",F.normalMatrix),bt.setValue(P,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Yn=X.uniformsGroups;for(let uf=0,eM=Yn.length;uf<eM;uf++){const Qm=Yn[uf];ct.update(Qm,oi),ct.bind(Qm,oi)}}return oi}function QS(R,U){R.ambientLightColor.needsUpdate=U,R.lightProbe.needsUpdate=U,R.directionalLights.needsUpdate=U,R.directionalLightShadows.needsUpdate=U,R.pointLights.needsUpdate=U,R.pointLightShadows.needsUpdate=U,R.spotLights.needsUpdate=U,R.spotLightShadows.needsUpdate=U,R.rectAreaLights.needsUpdate=U,R.hemisphereLights.needsUpdate=U}function JS(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,U,G){me.get(R.texture).__webglTexture=U,me.get(R.depthTexture).__webglTexture=G;const X=me.get(R);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,U){const G=me.get(R);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(R,U=0,G=0){T=R,C=U,A=G;let X=!0,F=null,fe=!1,ye=!1;if(R){const Ae=me.get(R);Ae.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(P.FRAMEBUFFER,null),X=!1):Ae.__webglFramebuffer===void 0?Me.setupRenderTarget(R):Ae.__hasExternalTextures&&Me.rebindTextures(R,me.get(R.texture).__webglTexture,me.get(R.depthTexture).__webglTexture);const Ue=R.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ye=!0);const ke=me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?F=ke[U][G]:F=ke[U],fe=!0):R.samples>0&&Me.useMultisampledRTT(R)===!1?F=me.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?F=ke[G]:F=ke,S.copy(R.viewport),D.copy(R.scissor),B=R.scissorTest}else S.copy(Q).multiplyScalar(j).floor(),D.copy(re).multiplyScalar(j).floor(),B=Se;if(Z.bindFramebuffer(P.FRAMEBUFFER,F)&&X&&Z.drawBuffers(R,F),Z.viewport(S),Z.scissor(D),Z.setScissorTest(B),fe){const Ae=me.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,G)}else if(ye){const Ae=me.get(R.texture),Ue=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.__webglTexture,G||0,Ue)}b=-1},this.readRenderTargetPixels=function(R,U,G,X,F,fe,ye){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){Z.bindFramebuffer(P.FRAMEBUFFER,we);try{const Ae=R.texture,Ue=Ae.format,ke=Ae.type;if(!pe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=R.width-X&&G>=0&&G<=R.height-F&&P.readPixels(U,G,X,F,Oe.convert(Ue),Oe.convert(ke),fe)}finally{const Ae=T!==null?me.get(T).__webglFramebuffer:null;Z.bindFramebuffer(P.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(R,U,G,X,F,fe,ye){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){Z.bindFramebuffer(P.FRAMEBUFFER,we);try{const Ae=R.texture,Ue=Ae.format,ke=Ae.type;if(!pe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=R.width-X&&G>=0&&G<=R.height-F){const Le=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Le),P.bufferData(P.PIXEL_PACK_BUFFER,fe.byteLength,P.STREAM_READ),P.readPixels(U,G,X,F,Oe.convert(Ue),Oe.convert(ke),0),P.flush();const Qe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await _T(P,Qe,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Le),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,fe)}finally{P.deleteBuffer(Le),P.deleteSync(Qe)}return fe}}finally{const Ae=T!==null?me.get(T).__webglFramebuffer:null;Z.bindFramebuffer(P.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(R,U=null,G=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,R=arguments[1]);const X=Math.pow(2,-G),F=Math.floor(R.image.width*X),fe=Math.floor(R.image.height*X),ye=U!==null?U.x:0,we=U!==null?U.y:0;Me.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,ye,we,F,fe),Z.unbindTexture()},this.copyTextureToTexture=function(R,U,G=null,X=null,F=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1],U=arguments[2],F=arguments[3]||0,G=null);let fe,ye,we,Ae,Ue,ke;G!==null?(fe=G.max.x-G.min.x,ye=G.max.y-G.min.y,we=G.min.x,Ae=G.min.y):(fe=R.image.width,ye=R.image.height,we=0,Ae=0),X!==null?(Ue=X.x,ke=X.y):(Ue=0,ke=0);const Le=Oe.convert(U.format),Qe=Oe.convert(U.type);Me.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const St=P.getParameter(P.UNPACK_ROW_LENGTH),Mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Rn=P.getParameter(P.UNPACK_SKIP_PIXELS),Je=P.getParameter(P.UNPACK_SKIP_ROWS),be=P.getParameter(P.UNPACK_SKIP_IMAGES),Yt=R.isCompressedTexture?R.mipmaps[F]:R.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Yt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Yt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,we),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ae),R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Ue,ke,fe,ye,Le,Qe,Yt.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Ue,ke,Yt.width,Yt.height,Le,Yt.data):P.texSubImage2D(P.TEXTURE_2D,F,Ue,ke,fe,ye,Le,Qe,Yt),P.pixelStorei(P.UNPACK_ROW_LENGTH,St),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,be),F===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(R,U,G=null,X=null,F=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,R=arguments[2],U=arguments[3],F=arguments[4]||0);let fe,ye,we,Ae,Ue,ke,Le,Qe,St;const Mt=R.isCompressedTexture?R.mipmaps[F]:R.image;G!==null?(fe=G.max.x-G.min.x,ye=G.max.y-G.min.y,we=G.max.z-G.min.z,Ae=G.min.x,Ue=G.min.y,ke=G.min.z):(fe=Mt.width,ye=Mt.height,we=Mt.depth,Ae=0,Ue=0,ke=0),X!==null?(Le=X.x,Qe=X.y,St=X.z):(Le=0,Qe=0,St=0);const Rn=Oe.convert(U.format),Je=Oe.convert(U.type);let be;if(U.isData3DTexture)Me.setTexture3D(U,0),be=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Me.setTexture2DArray(U,0),be=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Yt=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),oi=P.getParameter(P.UNPACK_SKIP_PIXELS),Os=P.getParameter(P.UNPACK_SKIP_ROWS),bn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ue),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ke),R.isDataTexture||R.isData3DTexture?P.texSubImage3D(be,F,Le,Qe,St,fe,ye,we,Rn,Je,Mt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(be,F,Le,Qe,St,fe,ye,we,Rn,Mt.data):P.texSubImage3D(be,F,Le,Qe,St,fe,ye,we,Rn,Je,Mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Yt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,oi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Os),P.pixelStorei(P.UNPACK_SKIP_IMAGES,bn),F===0&&U.generateMipmaps&&P.generateMipmap(be),Z.unbindTexture()},this.initRenderTarget=function(R){me.get(R).__webglFramebuffer===void 0&&Me.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Me.setTextureCube(R,0):R.isData3DTexture?Me.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Me.setTexture2DArray(R,0):Me.setTexture2D(R,0),Z.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Z.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ym?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Qc?"display-p3":"srgb"}}class wm{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new wm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wb extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jy extends Is{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wc=new N,Ac=new N,i0=new ut,ya=new Sm,vu=new Jc,uh=new N,r0=new N;class Ab extends kt{constructor(e=new jn,t=new jy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)wc.fromBufferAttribute(t,r-1),Ac.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=wc.distanceTo(Ac);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vu.copy(i.boundingSphere),vu.applyMatrix4(r),vu.radius+=s,e.ray.intersectsSphere(vu)===!1)return;i0.copy(r).invert(),ya.copy(e.ray).applyMatrix4(i0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let m=p,g=_-1;m<g;m+=u){const d=c.getX(m),x=c.getX(m+1),v=xu(this,e,ya,l,d,x);v&&t.push(v)}if(this.isLineLoop){const m=c.getX(_-1),g=c.getX(p),d=xu(this,e,ya,l,m,g);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let m=p,g=_-1;m<g;m+=u){const d=xu(this,e,ya,l,m,m+1);d&&t.push(d)}if(this.isLineLoop){const m=xu(this,e,ya,l,_-1,p);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xu(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(wc.fromBufferAttribute(o,r),Ac.fromBufferAttribute(o,s),t.distanceSqToSegment(wc,Ac,uh,r0)>i)return;uh.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(uh);if(!(l<e.near||l>e.far))return{distance:l,point:r0.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const s0=new N,o0=new N;class Cb extends Ab{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)s0.fromBufferAttribute(t,r),o0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+s0.distanceTo(o0);e.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ii{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,p=(o-c)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ie:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new N,r=[],s=[],o=[],a=new N,l=new ut;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new N)}s[0]=new N,o[0]=new N;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Gt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Gt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Am extends Ii{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=u-this.aY;l=h*c-p*f+this.aX,u=h*f+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rb extends Am{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Cm(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,p*=c,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const yu=new N,ch=new Cm,fh=new Cm,hh=new Cm;class bb extends Ii{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new N){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(yu.subVectors(r[0],r[1]).add(r[0]),u=yu);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(yu.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=yu),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(c),p);m<1e-4&&(m=1),_<1e-4&&(_=m),g<1e-4&&(g=m),ch.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,_,m,g),fh.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,_,m,g),hh.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,_,m,g)}else this.curveType==="catmullrom"&&(ch.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),fh.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),hh.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(ch.calc(l),fh.calc(l),hh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function a0(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function Pb(n,e){const t=1-n;return t*t*e}function Lb(n,e){return 2*(1-n)*n*e}function Db(n,e){return n*n*e}function Ba(n,e,t,i){return Pb(n,e)+Lb(n,t)+Db(n,i)}function Nb(n,e){const t=1-n;return t*t*t*e}function Ib(n,e){const t=1-n;return 3*t*t*n*e}function Ub(n,e){return 3*(1-n)*n*n*e}function Ob(n,e){return n*n*n*e}function Va(n,e,t,i,r){return Nb(n,e)+Ib(n,t)+Ub(n,i)+Ob(n,r)}class Yy extends Ii{constructor(e=new ie,t=new ie,i=new ie,r=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ie){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Va(e,r.x,s.x,o.x,a.x),Va(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fb extends Ii{constructor(e=new N,t=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new N){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Va(e,r.x,s.x,o.x,a.x),Va(e,r.y,s.y,o.y,a.y),Va(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qy extends Ii{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kb extends Ii{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $y extends Ii{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ba(e,r.x,s.x,o.x),Ba(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zb extends Ii{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ba(e,r.x,s.x,o.x),Ba(e,r.y,s.y,o.y),Ba(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ky extends Ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(a0(a,l.x,u.x,c.x,f.x),a0(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ie().fromArray(r))}return this}}var ep=Object.freeze({__proto__:null,ArcCurve:Rb,CatmullRomCurve3:bb,CubicBezierCurve:Yy,CubicBezierCurve3:Fb,EllipseCurve:Am,LineCurve:qy,LineCurve3:kb,QuadraticBezierCurve:$y,QuadraticBezierCurve3:zb,SplineCurve:Ky});class Bb extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ep[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new ep[r.type]().fromJSON(r))}return this}}class l0 extends Bb{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new qy(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new $y(this.currentPoint.clone(),new ie(e,t),new ie(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Yy(this.currentPoint.clone(),new ie(e,t),new ie(i,r),new ie(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ky(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new Am(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Rm extends jn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],u=new N,c=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const p=i+f/t*r;u.x=e*Math.cos(p),u.y=e*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[h]/e+1)/2,c.y=(o[h+1]/e+1)/2,l.push(c.x,c.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rm(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Su=new N,Mu=new N,dh=new N,Eu=new mi;class Vb extends jn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(za*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,u=[0,0,0],c=["a","b","c"],f=new Array(3),h={},p=[];for(let _=0;_<l;_+=3){o?(u[0]=o.getX(_),u[1]=o.getX(_+1),u[2]=o.getX(_+2)):(u[0]=_,u[1]=_+1,u[2]=_+2);const{a:m,b:g,c:d}=Eu;if(m.fromBufferAttribute(a,u[0]),g.fromBufferAttribute(a,u[1]),d.fromBufferAttribute(a,u[2]),Eu.getNormal(dh),f[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=f[x],C=f[v],A=Eu[c[x]],T=Eu[c[v]],b=`${y}_${C}`,E=`${C}_${y}`;E in h&&h[E]?(dh.dot(h[E].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(T.x,T.y,T.z)),h[E]=null):b in h||(h[b]={index0:u[x],index1:u[v],normal:dh.clone()})}}for(const _ in h)if(h[_]){const{index0:m,index1:g}=h[_];Su.fromBufferAttribute(a,m),Mu.fromBufferAttribute(a,g),p.push(Su.x,Su.y,Su.z),p.push(Mu.x,Mu.y,Mu.z)}this.setAttribute("position",new Kt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class tp extends l0{constructor(e){super(e),this.uuid=ia(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new l0().fromJSON(r))}return this}}const Hb={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Zy(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,f,h,p;if(i&&(s=Yb(n,e,s,t)),n.length>80*t){a=u=n[0],l=c=n[1];for(let _=t;_<r;_+=t)f=n[_],h=n[_+1],f<a&&(a=f),h<l&&(l=h),f>u&&(u=f),h>c&&(c=h);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return fl(s,o,t,a,l,p,0),o}};function Zy(n,e,t,i,r){let s,o;if(r===rP(n,e,t,i)>0)for(s=e;s<t;s+=i)o=u0(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=u0(s,n[s],n[s+1],o);return o&&nf(o,o.next)&&(dl(o),o=o.next),o}function Ps(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(nf(t,t.next)||_t(t.prev,t,t.next)===0)){if(dl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function fl(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Qb(n,i,r,s);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,s?Wb(n,i,r,s):Gb(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(u.i/t|0),dl(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=Xb(Ps(n),e,t),fl(n,e,t,i,r,s,2)):o===2&&jb(n,e,t,i,r,s):fl(Ps(n),e,t,i,r,s,1);break}}}function Gb(n){const e=n.prev,t=n,i=n.next;if(_t(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,f=a<l?a<u?a:u:l<u?l:u,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let _=i.next;for(;_!==e;){if(_.x>=c&&_.x<=h&&_.y>=f&&_.y<=p&&yo(r,a,s,l,o,u,_.x,_.y)&&_t(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Wb(n,e,t,i){const r=n.prev,s=n,o=n.next;if(_t(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,h=o.y,p=a<l?a<u?a:u:l<u?l:u,_=c<f?c<h?c:h:f<h?f:h,m=a>l?a>u?a:u:l>u?l:u,g=c>f?c>h?c:h:f>h?f:h,d=np(p,_,e,t,i),x=np(m,g,e,t,i);let v=n.prevZ,y=n.nextZ;for(;v&&v.z>=d&&y&&y.z<=x;){if(v.x>=p&&v.x<=m&&v.y>=_&&v.y<=g&&v!==r&&v!==o&&yo(a,c,l,f,u,h,v.x,v.y)&&_t(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=m&&y.y>=_&&y.y<=g&&y!==r&&y!==o&&yo(a,c,l,f,u,h,y.x,y.y)&&_t(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=m&&v.y>=_&&v.y<=g&&v!==r&&v!==o&&yo(a,c,l,f,u,h,v.x,v.y)&&_t(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=m&&y.y>=_&&y.y<=g&&y!==r&&y!==o&&yo(a,c,l,f,u,h,y.x,y.y)&&_t(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Xb(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!nf(r,s)&&Qy(r,i,i.next,s)&&hl(r,s)&&hl(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),dl(i),dl(i.next),i=n=s),i=i.next}while(i!==n);return Ps(i)}function jb(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tP(o,a)){let l=Jy(o,a);o=Ps(o,o.next),l=Ps(l,l.next),fl(o,e,t,i,r,s,0),fl(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Yb(n,e,t,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=Zy(n,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(eP(u));for(r.sort(qb),s=0;s<r.length;s++)t=$b(r[s],t);return t}function qb(n,e){return n.x-e.x}function $b(n,e){const t=Kb(n,e);if(!t)return e;const i=Jy(t,n);return Ps(i,i.next),Ps(t,t.next)}function Kb(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&yo(o<u?s:i,o,l,u,o<u?i:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),hl(t,n)&&(f<c||f===c&&(t.x>r.x||t.x===r.x&&Zb(r,t)))&&(r=t,c=f)),t=t.next;while(t!==a);return r}function Zb(n,e){return _t(n.prev,n,e.prev)<0&&_t(e.next,n,n.next)<0}function Qb(n,e,t,i){let r=n;do r.z===0&&(r.z=np(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Jb(r)}function Jb(n){let e,t,i,r,s,o,a,l,u=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,u*=2}while(o>1);return n}function np(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function eP(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function yo(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function tP(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!nP(n,e)&&(hl(n,e)&&hl(e,n)&&iP(n,e)&&(_t(n.prev,n,e.prev)||_t(n,e.prev,e))||nf(n,e)&&_t(n.prev,n,n.next)>0&&_t(e.prev,e,e.next)>0)}function _t(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function nf(n,e){return n.x===e.x&&n.y===e.y}function Qy(n,e,t,i){const r=wu(_t(n,e,t)),s=wu(_t(n,e,i)),o=wu(_t(t,i,n)),a=wu(_t(t,i,e));return!!(r!==s&&o!==a||r===0&&Tu(n,t,e)||s===0&&Tu(n,i,e)||o===0&&Tu(t,n,i)||a===0&&Tu(t,e,i))}function Tu(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function wu(n){return n>0?1:n<0?-1:0}function nP(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Qy(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function hl(n,e){return _t(n.prev,n,n.next)<0?_t(n,e,n.next)>=0&&_t(n,n.prev,e)>=0:_t(n,e,n.prev)<0||_t(n,n.next,e)<0}function iP(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Jy(n,e){const t=new ip(n.i,n.x,n.y),i=new ip(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function u0(n,e,t,i){const r=new ip(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function dl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ip(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rP(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Ha{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ha.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];c0(e),f0(i,e);let o=e.length;t.forEach(c0);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,f0(i,t[l]);const a=Hb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function c0(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function f0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Cc extends jn{constructor(e=new tp([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new Kt(r,3)),this.setAttribute("uv",new Kt(s,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:sP;let v,y=!1,C,A,T,b;d&&(v=d.getSpacedPoints(c),y=!0,h=!1,C=d.computeFrenetFrames(c,!1),A=new N,T=new N,b=new N),h||(g=0,p=0,_=0,m=0);const E=a.extractPoints(u);let S=E.shape;const D=E.holes;if(!Ha.isClockWise(S)){S=S.reverse();for(let P=0,ce=D.length;P<ce;P++){const se=D[P];Ha.isClockWise(se)&&(D[P]=se.reverse())}}const O=Ha.triangulateShape(S,D),W=S;for(let P=0,ce=D.length;P<ce;P++){const se=D[P];S=S.concat(se)}function q(P,ce,se){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ce,se)}const z=S.length,j=O.length;function I(P,ce,se){let pe,Z,Pe;const me=P.x-ce.x,Me=P.y-ce.y,L=se.x-P.x,w=se.y-P.y,H=me*me+Me*Me,ne=me*w-Me*L;if(Math.abs(ne)>Number.EPSILON){const ee=Math.sqrt(H),J=Math.sqrt(L*L+w*w),Ce=ce.x-Me/ee,de=ce.y+me/ee,xe=se.x-w/J,Be=se.y+L/J,ue=((xe-Ce)*w-(Be-de)*L)/(me*w-Me*L);pe=Ce+me*ue-P.x,Z=de+Me*ue-P.y;const ve=pe*pe+Z*Z;if(ve<=2)return new ie(pe,Z);Pe=Math.sqrt(ve/2)}else{let ee=!1;me>Number.EPSILON?L>Number.EPSILON&&(ee=!0):me<-Number.EPSILON?L<-Number.EPSILON&&(ee=!0):Math.sign(Me)===Math.sign(w)&&(ee=!0),ee?(pe=-Me,Z=me,Pe=Math.sqrt(H)):(pe=me,Z=Me,Pe=Math.sqrt(H/2))}return new ie(pe/Pe,Z/Pe)}const K=[];for(let P=0,ce=W.length,se=ce-1,pe=P+1;P<ce;P++,se++,pe++)se===ce&&(se=0),pe===ce&&(pe=0),K[P]=I(W[P],W[se],W[pe]);const Q=[];let re,Se=K.concat();for(let P=0,ce=D.length;P<ce;P++){const se=D[P];re=[];for(let pe=0,Z=se.length,Pe=Z-1,me=pe+1;pe<Z;pe++,Pe++,me++)Pe===Z&&(Pe=0),me===Z&&(me=0),re[pe]=I(se[pe],se[Pe],se[me]);Q.push(re),Se=Se.concat(re)}for(let P=0;P<g;P++){const ce=P/g,se=p*Math.cos(ce*Math.PI/2),pe=_*Math.sin(ce*Math.PI/2)+m;for(let Z=0,Pe=W.length;Z<Pe;Z++){const me=q(W[Z],K[Z],pe);he(me.x,me.y,-se)}for(let Z=0,Pe=D.length;Z<Pe;Z++){const me=D[Z];re=Q[Z];for(let Me=0,L=me.length;Me<L;Me++){const w=q(me[Me],re[Me],pe);he(w.x,w.y,-se)}}}const Ge=_+m;for(let P=0;P<z;P++){const ce=h?q(S[P],Se[P],Ge):S[P];y?(T.copy(C.normals[0]).multiplyScalar(ce.x),A.copy(C.binormals[0]).multiplyScalar(ce.y),b.copy(v[0]).add(T).add(A),he(b.x,b.y,b.z)):he(ce.x,ce.y,0)}for(let P=1;P<=c;P++)for(let ce=0;ce<z;ce++){const se=h?q(S[ce],Se[ce],Ge):S[ce];y?(T.copy(C.normals[P]).multiplyScalar(se.x),A.copy(C.binormals[P]).multiplyScalar(se.y),b.copy(v[P]).add(T).add(A),he(b.x,b.y,b.z)):he(se.x,se.y,f/c*P)}for(let P=g-1;P>=0;P--){const ce=P/g,se=p*Math.cos(ce*Math.PI/2),pe=_*Math.sin(ce*Math.PI/2)+m;for(let Z=0,Pe=W.length;Z<Pe;Z++){const me=q(W[Z],K[Z],pe);he(me.x,me.y,f+se)}for(let Z=0,Pe=D.length;Z<Pe;Z++){const me=D[Z];re=Q[Z];for(let Me=0,L=me.length;Me<L;Me++){const w=q(me[Me],re[Me],pe);y?he(w.x,w.y+v[c-1].y,v[c-1].x+se):he(w.x,w.y,f+se)}}}Y(),te();function Y(){const P=r.length/3;if(h){let ce=0,se=z*ce;for(let pe=0;pe<j;pe++){const Z=O[pe];Ne(Z[2]+se,Z[1]+se,Z[0]+se)}ce=c+g*2,se=z*ce;for(let pe=0;pe<j;pe++){const Z=O[pe];Ne(Z[0]+se,Z[1]+se,Z[2]+se)}}else{for(let ce=0;ce<j;ce++){const se=O[ce];Ne(se[2],se[1],se[0])}for(let ce=0;ce<j;ce++){const se=O[ce];Ne(se[0]+z*c,se[1]+z*c,se[2]+z*c)}}i.addGroup(P,r.length/3-P,0)}function te(){const P=r.length/3;let ce=0;_e(W,ce),ce+=W.length;for(let se=0,pe=D.length;se<pe;se++){const Z=D[se];_e(Z,ce),ce+=Z.length}i.addGroup(P,r.length/3-P,1)}function _e(P,ce){let se=P.length;for(;--se>=0;){const pe=se;let Z=se-1;Z<0&&(Z=P.length-1);for(let Pe=0,me=c+g*2;Pe<me;Pe++){const Me=z*Pe,L=z*(Pe+1),w=ce+pe+Me,H=ce+Z+Me,ne=ce+Z+L,ee=ce+pe+L;He(w,H,ne,ee)}}}function he(P,ce,se){l.push(P),l.push(ce),l.push(se)}function Ne(P,ce,se){De(P),De(ce),De(se);const pe=r.length/3,Z=x.generateTopUV(i,r,pe-3,pe-2,pe-1);qe(Z[0]),qe(Z[1]),qe(Z[2])}function He(P,ce,se,pe){De(P),De(ce),De(pe),De(ce),De(se),De(pe);const Z=r.length/3,Pe=x.generateSideWallUV(i,r,Z-6,Z-3,Z-2,Z-1);qe(Pe[0]),qe(Pe[1]),qe(Pe[3]),qe(Pe[1]),qe(Pe[2]),qe(Pe[3])}function De(P){r.push(l[P*3+0]),r.push(l[P*3+1]),r.push(l[P*3+2])}function qe(P){s.push(P.x),s.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return oP(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ep[r.type]().fromJSON(r)),new Cc(i,e.options)}}const sP={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new ie(s,o),new ie(a,l),new ie(u,c)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[i*3],c=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],_=e[r*3+2],m=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new ie(o,1-l),new ie(u,1-f),new ie(h,1-_),new ie(m,1-d)]:[new ie(a,1-l),new ie(c,1-f),new ie(p,1-_),new ie(g,1-d)]}};function oP(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class aP extends Is{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class lP extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uP extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cy,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cP extends uP{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bm extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class fP extends bm{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ph=new ut,h0=new N,d0=new N;class hP{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mm,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;h0.setFromMatrixPosition(e.matrixWorld),t.position.copy(h0),d0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(d0),t.updateMatrixWorld(),ph.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dP extends hP{constructor(){super(new Em(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mh extends bm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new dP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pP extends bm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=p0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=p0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function p0(){return(typeof performance>"u"?Date:performance).now()}class m0{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hm);const g0={type:"change"},gh={type:"start"},_0={type:"end"},Au=new Sm,v0=new xr,gP=Math.cos(70*mT.DEG2RAD);class _P extends Ns{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ks.ROTATE,MIDDLE:ks.DOLLY,RIGHT:ks.PAN},this.touches={ONE:zs.ROTATE,TWO:zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",xe),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(g0),i.update(),s=r.NONE},this.update=function(){const M=new N,k=new bs().setFromUnitVectors(e.up,new N(0,1,0)),V=k.clone().invert(),$=new N,oe=new bs,Re=new N,Fe=2*Math.PI;return function(Nt=null){const Ke=i.object.position;M.copy(Ke).sub(i.target),M.applyQuaternion(k),a.setFromVector3(M),i.autoRotate&&s===r.NONE&&B(S(Nt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let It=i.minAzimuthAngle,Rt=i.maxAzimuthAngle;isFinite(It)&&isFinite(Rt)&&(It<-Math.PI?It+=Fe:It>Math.PI&&(It-=Fe),Rt<-Math.PI?Rt+=Fe:Rt>Math.PI&&(Rt-=Fe),It<=Rt?a.theta=Math.max(It,Math.min(Rt,a.theta)):a.theta=a.theta>(It+Rt)/2?Math.max(It,a.theta):Math.min(Rt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let lr=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)a.radius=Q(a.radius);else{const jt=a.radius;a.radius=Q(a.radius*u),lr=jt!=a.radius}if(M.setFromSpherical(a),M.applyQuaternion(V),Ke.copy(i.target).add(M),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),i.zoomToCursor&&A){let jt=null;if(i.object.isPerspectiveCamera){const Ui=M.length();jt=Q(Ui*u);const Kr=Ui-jt;i.object.position.addScaledVector(y,Kr),i.object.updateMatrixWorld(),lr=!!Kr}else if(i.object.isOrthographicCamera){const Ui=new N(C.x,C.y,0);Ui.unproject(i.object);const Kr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),lr=Kr!==i.object.zoom;const oa=new N(C.x,C.y,0);oa.unproject(i.object),i.object.position.sub(oa).add(Ui),i.object.updateMatrixWorld(),jt=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;jt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(jt).add(i.object.position):(Au.origin.copy(i.object.position),Au.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Au.direction))<gP?e.lookAt(i.target):(v0.setFromNormalAndCoplanarPoint(i.object.up,i.target),Au.intersectPlane(v0,i.target))))}else if(i.object.isOrthographicCamera){const jt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),jt!==i.object.zoom&&(i.object.updateProjectionMatrix(),lr=!0)}return u=1,A=!1,lr||$.distanceToSquared(i.object.position)>o||8*(1-oe.dot(i.object.quaternion))>o||Re.distanceToSquared(i.target)>o?(i.dispatchEvent(g0),$.copy(i.object.position),oe.copy(i.object.quaternion),Re.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ve),i.domElement.removeEventListener("pointerdown",Me),i.domElement.removeEventListener("pointercancel",w),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",w),i.domElement.getRootNode().removeEventListener("keydown",Ce,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",xe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new m0,l=new m0;let u=1;const c=new N,f=new ie,h=new ie,p=new ie,_=new ie,m=new ie,g=new ie,d=new ie,x=new ie,v=new ie,y=new N,C=new ie;let A=!1;const T=[],b={};let E=!1;function S(M){return M!==null?2*Math.PI/60*i.autoRotateSpeed*M:2*Math.PI/60/60*i.autoRotateSpeed}function D(M){const k=Math.abs(M*.01);return Math.pow(.95,i.zoomSpeed*k)}function B(M){l.theta-=M}function O(M){l.phi-=M}const W=function(){const M=new N;return function(V,$){M.setFromMatrixColumn($,0),M.multiplyScalar(-V),c.add(M)}}(),q=function(){const M=new N;return function(V,$){i.screenSpacePanning===!0?M.setFromMatrixColumn($,1):(M.setFromMatrixColumn($,0),M.crossVectors(i.object.up,M)),M.multiplyScalar(V),c.add(M)}}(),z=function(){const M=new N;return function(V,$){const oe=i.domElement;if(i.object.isPerspectiveCamera){const Re=i.object.position;M.copy(Re).sub(i.target);let Fe=M.length();Fe*=Math.tan(i.object.fov/2*Math.PI/180),W(2*V*Fe/oe.clientHeight,i.object.matrix),q(2*$*Fe/oe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(W(V*(i.object.right-i.object.left)/i.object.zoom/oe.clientWidth,i.object.matrix),q($*(i.object.top-i.object.bottom)/i.object.zoom/oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function j(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(M){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(M,k){if(!i.zoomToCursor)return;A=!0;const V=i.domElement.getBoundingClientRect(),$=M-V.left,oe=k-V.top,Re=V.width,Fe=V.height;C.x=$/Re*2-1,C.y=-(oe/Fe)*2+1,y.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(M){return Math.max(i.minDistance,Math.min(i.maxDistance,M))}function re(M){f.set(M.clientX,M.clientY)}function Se(M){K(M.clientX,M.clientX),d.set(M.clientX,M.clientY)}function Ge(M){_.set(M.clientX,M.clientY)}function Y(M){h.set(M.clientX,M.clientY),p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const k=i.domElement;B(2*Math.PI*p.x/k.clientHeight),O(2*Math.PI*p.y/k.clientHeight),f.copy(h),i.update()}function te(M){x.set(M.clientX,M.clientY),v.subVectors(x,d),v.y>0?j(D(v.y)):v.y<0&&I(D(v.y)),d.copy(x),i.update()}function _e(M){m.set(M.clientX,M.clientY),g.subVectors(m,_).multiplyScalar(i.panSpeed),z(g.x,g.y),_.copy(m),i.update()}function he(M){K(M.clientX,M.clientY),M.deltaY<0?I(D(M.deltaY)):M.deltaY>0&&j(D(M.deltaY)),i.update()}function Ne(M){let k=!1;switch(M.code){case i.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),k=!0;break;case i.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),k=!0;break;case i.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),k=!0;break;case i.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),k=!0;break}k&&(M.preventDefault(),i.update())}function He(M){if(T.length===1)f.set(M.pageX,M.pageY);else{const k=Ve(M),V=.5*(M.pageX+k.x),$=.5*(M.pageY+k.y);f.set(V,$)}}function De(M){if(T.length===1)_.set(M.pageX,M.pageY);else{const k=Ve(M),V=.5*(M.pageX+k.x),$=.5*(M.pageY+k.y);_.set(V,$)}}function qe(M){const k=Ve(M),V=M.pageX-k.x,$=M.pageY-k.y,oe=Math.sqrt(V*V+$*$);d.set(0,oe)}function P(M){i.enableZoom&&qe(M),i.enablePan&&De(M)}function ce(M){i.enableZoom&&qe(M),i.enableRotate&&He(M)}function se(M){if(T.length==1)h.set(M.pageX,M.pageY);else{const V=Ve(M),$=.5*(M.pageX+V.x),oe=.5*(M.pageY+V.y);h.set($,oe)}p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const k=i.domElement;B(2*Math.PI*p.x/k.clientHeight),O(2*Math.PI*p.y/k.clientHeight),f.copy(h)}function pe(M){if(T.length===1)m.set(M.pageX,M.pageY);else{const k=Ve(M),V=.5*(M.pageX+k.x),$=.5*(M.pageY+k.y);m.set(V,$)}g.subVectors(m,_).multiplyScalar(i.panSpeed),z(g.x,g.y),_.copy(m)}function Z(M){const k=Ve(M),V=M.pageX-k.x,$=M.pageY-k.y,oe=Math.sqrt(V*V+$*$);x.set(0,oe),v.set(0,Math.pow(x.y/d.y,i.zoomSpeed)),j(v.y),d.copy(x);const Re=(M.pageX+k.x)*.5,Fe=(M.pageY+k.y)*.5;K(Re,Fe)}function Pe(M){i.enableZoom&&Z(M),i.enablePan&&pe(M)}function me(M){i.enableZoom&&Z(M),i.enableRotate&&se(M)}function Me(M){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(M.pointerId),i.domElement.addEventListener("pointermove",L),i.domElement.addEventListener("pointerup",w)),!Te(M)&&(Ye(M),M.pointerType==="touch"?Be(M):H(M)))}function L(M){i.enabled!==!1&&(M.pointerType==="touch"?ue(M):ne(M))}function w(M){switch(Ie(M),T.length){case 0:i.domElement.releasePointerCapture(M.pointerId),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",w),i.dispatchEvent(_0),s=r.NONE;break;case 1:const k=T[0],V=b[k];Be({pointerId:k,pageX:V.x,pageY:V.y});break}}function H(M){let k;switch(M.button){case 0:k=i.mouseButtons.LEFT;break;case 1:k=i.mouseButtons.MIDDLE;break;case 2:k=i.mouseButtons.RIGHT;break;default:k=-1}switch(k){case ks.DOLLY:if(i.enableZoom===!1)return;Se(M),s=r.DOLLY;break;case ks.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enablePan===!1)return;Ge(M),s=r.PAN}else{if(i.enableRotate===!1)return;re(M),s=r.ROTATE}break;case ks.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enableRotate===!1)return;re(M),s=r.ROTATE}else{if(i.enablePan===!1)return;Ge(M),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(gh)}function ne(M){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Y(M);break;case r.DOLLY:if(i.enableZoom===!1)return;te(M);break;case r.PAN:if(i.enablePan===!1)return;_e(M);break}}function ee(M){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(M.preventDefault(),i.dispatchEvent(gh),he(J(M)),i.dispatchEvent(_0))}function J(M){const k=M.deltaMode,V={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(k){case 1:V.deltaY*=16;break;case 2:V.deltaY*=100;break}return M.ctrlKey&&!E&&(V.deltaY*=10),V}function Ce(M){M.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(M){M.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",de,{passive:!0,capture:!0}))}function xe(M){i.enabled===!1||i.enablePan===!1||Ne(M)}function Be(M){switch(Oe(M),T.length){case 1:switch(i.touches.ONE){case zs.ROTATE:if(i.enableRotate===!1)return;He(M),s=r.TOUCH_ROTATE;break;case zs.PAN:if(i.enablePan===!1)return;De(M),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case zs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;P(M),s=r.TOUCH_DOLLY_PAN;break;case zs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ce(M),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(gh)}function ue(M){switch(Oe(M),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;se(M),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;pe(M),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pe(M),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;me(M),i.update();break;default:s=r.NONE}}function ve(M){i.enabled!==!1&&M.preventDefault()}function Ye(M){T.push(M.pointerId)}function Ie(M){delete b[M.pointerId];for(let k=0;k<T.length;k++)if(T[k]==M.pointerId){T.splice(k,1);return}}function Te(M){for(let k=0;k<T.length;k++)if(T[k]==M.pointerId)return!0;return!1}function Oe(M){let k=b[M.pointerId];k===void 0&&(k=new ie,b[M.pointerId]=k),k.set(M.pageX,M.pageY)}function Ve(M){const k=M.pointerId===T[0]?T[1]:T[0];return b[k]}i.domElement.addEventListener("contextmenu",ve),i.domElement.addEventListener("pointerdown",Me),i.domElement.addEventListener("pointercancel",w),i.domElement.addEventListener("wheel",ee,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Ce,{passive:!0,capture:!0}),this.update()}}const eS={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class sa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const vP=new Em(-1,1,1,-1,0,1);class xP extends jn{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const yP=new xP;class Pm{constructor(e){this._mesh=new On(yP,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vP)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class SP extends sa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cl.clone(e.uniforms),this.material=new cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pm(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class x0 extends sa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class MP extends sa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class EP{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ie);this._width=i.width,this._height=i.height,t=new xi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ji}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new SP(eS),this.copyPass.material.blending=Qi,this.clock=new mP}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}x0!==void 0&&(o instanceof x0?i=!0:o instanceof MP&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class TP extends sa{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const wP={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class qo extends sa{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new xi(s,o,{type:Ji}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new xi(s,o,{type:Ji});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new xi(s,o,{type:Ji});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=wP;this.highPassUniforms=cl.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new cn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ie(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=eS;this.copyUniforms=cl.clone(c.uniforms),this.blendMaterial=new cn({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:xd,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ze,this.oldClearAlpha=1,this.basic=new ef,this.fsQuad=new Pm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ie(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=qo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=qo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new cn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new cn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}qo.BlurDirectionX=new ie(1,0);qo.BlurDirectionY=new ie(0,1);const AP={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class CP extends sa{constructor(){super();const e=AP;this.uniforms=cl.clone(e.uniforms),this.material=new lP({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Pm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fy?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hy?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===dy?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dm?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===py?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===my&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class y0 extends kt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ie(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const io=new N,S0=new ut,M0=new ut,E0=new N,T0=new N;class RP{constructor(e={}){const t=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(_,m){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),S0.copy(m.matrixWorldInverse),M0.multiplyMatrices(m.projectionMatrix,S0),c(_,_,m),p(_)},this.setSize=function(_,m){i=_,r=m,s=i/2,o=r/2,l.style.width=_+"px",l.style.height=m+"px"};function u(_){_.isCSS2DObject&&(_.element.style.display="none");for(let m=0,g=_.children.length;m<g;m++)u(_.children[m])}function c(_,m,g){if(_.visible===!1){u(_);return}if(_.isCSS2DObject){io.setFromMatrixPosition(_.matrixWorld),io.applyMatrix4(M0);const d=io.z>=-1&&io.z<=1&&_.layers.test(g.layers)===!0,x=_.element;x.style.display=d===!0?"":"none",d===!0&&(_.onBeforeRender(t,m,g),x.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(io.x*s+s)+"px,"+(-io.y*o+o)+"px)",x.parentNode!==l&&l.appendChild(x),_.onAfterRender(t,m,g));const v={distanceToCameraSquared:f(g,_)};a.objects.set(_,v)}for(let d=0,x=_.children.length;d<x;d++)c(_.children[d],m,g)}function f(_,m){return E0.setFromMatrixPosition(_.matrixWorld),T0.setFromMatrixPosition(m.matrixWorld),E0.distanceToSquared(T0)}function h(_){const m=[];return _.traverseVisible(function(g){g.isCSS2DObject&&m.push(g)}),m}function p(_){const m=h(_).sort(function(d,x){if(d.renderOrder!==x.renderOrder)return x.renderOrder-d.renderOrder;const v=a.objects.get(d).distanceToCameraSquared,y=a.objects.get(x).distanceToCameraSquared;return v-y}),g=m.length;for(let d=0,x=m.length;d<x;d++)m[d].element.style.zIndex=g-d}}}function Gi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function tS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},pl={duration:.5,overwrite:!1,delay:0},Lm,Zt,ht,ti=1e8,rt=1/ti,rp=Math.PI*2,bP=rp/4,PP=0,nS=Math.sqrt,LP=Math.cos,DP=Math.sin,Xt=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},sr=function(e){return typeof e=="number"},Dm=function(e){return typeof e>"u"},Ni=function(e){return typeof e=="object"},En=function(e){return e!==!1},Nm=function(){return typeof window<"u"},Cu=function(e){return Tt(e)||Xt(e)},iS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,NP=/random\([^)]+\)/g,IP=/,\s*/g,w0=/(?:-?\.?\d|\.)+/gi,rS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,So=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_h=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sS=/[+-]=-?[.\d]+/,UP=/[^,'"\[\]\s]+/gi,OP=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,Ti,sp,Im,Hn={},Rc={},oS,aS=function(e){return(Rc=$o(e,Hn))&&Cn},Um=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ml=function(e,t){return!t&&console.warn(e)},lS=function(e,t){return e&&(Hn[e]=t)&&Rc&&(Rc[e]=t)||Hn},gl=function(){return 0},FP={suppressEvents:!0,isStart:!0,kill:!1},ju={suppressEvents:!0,kill:!1},kP={suppressEvents:!0},Om={},Fr=[],op={},uS,Nn={},vh={},A0=30,Yu=[],Fm="",km=function(e){var t=e[0],i,r;if(Ni(t)||Tt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Yu.length;r--&&!Yu[r].targetTest(t););i=Yu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new LS(e[r],i)))||e.splice(r,1);return e},xs=function(e){return e._gsap||km(ni(e))[0]._gsap},cS=function(e,t,i){return(i=e[t])&&Tt(i)?e[t]():Dm(i)&&e.getAttribute&&e.getAttribute(t)||i},Tn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},dt=function(e){return Math.round(e*1e7)/1e7||0},Do=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},zP=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},bc=function(){var e=Fr.length,t=Fr.slice(0),i,r;for(op={},Fr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},zm=function(e){return!!(e._initted||e._startAt||e.add)},fS=function(e,t,i,r){Fr.length&&!Zt&&bc(),e.render(t,i,!!(Zt&&t<0&&zm(e))),Fr.length&&!Zt&&bc()},hS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(UP).length<2?t:Xt(e)?e.trim():e},dS=function(e){return e},Gn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},BP=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},$o=function(e,t){for(var i in t)e[i]=t[i];return e},C0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ni(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Pc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ga=function(e){var t=e.parent||gt,i=e.keyframes?BP(on(e.keyframes)):Gn;if(En(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},VP=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},pS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},rf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ys=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},HP=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ap=function(e,t,i,r){return e._startAt&&(Zt?e._startAt.revert(ju):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},GP=function n(e){return!e||e._ts&&n(e.parent)},R0=function(e){return e._repeat?Ko(e._tTime,e=e.duration()+e._rDelay)*e:0},Ko=function(e,t){var i=Math.floor(e=dt(e/t));return e&&i===e?i-1:i},Lc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},sf=function(e){return e._end=dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||rt)||0))},of=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=dt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),sf(e),i._dirty||ys(i,e)),e},mS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Lc(e.rawTime(),t),(!t._dur||Pl(0,t.totalDuration(),i)-t._tTime>rt)&&t.render(i,!0)),ys(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-rt}},Ci=function(e,t,i,r){return t.parent&&Hr(t),t._start=dt((sr(i)?i:i||e!==gt?$n(e,i,t):e._time)+t._delay),t._end=dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pS(e,t,"_first","_last",e._sort?"_start":0),lp(t)||(e._recent=t),r||mS(e,t),e._ts<0&&of(e,e._tTime),e},gS=function(e,t){return(Hn.ScrollTrigger||Um("scrollTrigger",t))&&Hn.ScrollTrigger.create(t,e)},_S=function(e,t,i,r,s){if(Vm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&uS!==In.frame)return Fr.push(e),e._lazy=[s,r],1},WP=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},lp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},XP=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&WP(e)&&!(!e._initted&&lp(e))||(e._ts<0||e._dp._ts<0)&&!lp(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Pl(0,e._tDur,t),c=Ko(l,a),e._yoyo&&c&1&&(o=1-o),c!==Ko(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Zt||r||e._zTime===rt||!t&&e._zTime){if(!e._initted&&_S(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?rt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&ap(e,t,i,!0),e._onUpdate&&!i&&Fn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Hr(e,1),!i&&!Zt&&(Fn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},jP=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Zo=function(e,t,i,r){var s=e._repeat,o=dt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:dt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&of(e,e._tTime=e._tDur*a),e.parent&&sf(e),i||ys(e.parent,e),e},b0=function(e){return e instanceof gn?ys(e):Zo(e,e._dur)},YP={_start:0,endTime:gl,totalDuration:gl},$n=function n(e,t,i){var r=e.labels,s=e._recent||YP,o=e.duration()>=ti?s.endTime(!1):e._dur,a,l,u;return Xt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(on(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Wa=function(e,t,i){var r=sr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;o.immediateRender=En(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Lt(t[0],o,t[s+1])},$r=function(e,t){return e||e===0?t(e):t},Pl=function(e,t,i){return i<e?e:i>t?t:i},sn=function(e,t){return!Xt(e)||!(t=OP.exec(e))?"":t[1]},qP=function(e,t,i){return $r(i,function(r){return Pl(e,t,r)})},up=[].slice,vS=function(e,t){return e&&Ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ni(e[0]))&&!e.nodeType&&e!==Ti},$P=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Xt(r)&&!t||vS(r,1)?(s=i).push.apply(s,ni(r)):i.push(r)})||i},ni=function(e,t,i){return ht&&!t&&ht.selector?ht.selector(e):Xt(e)&&!i&&(sp||!Qo())?up.call((t||Im).querySelectorAll(e),0):on(e)?$P(e,i):vS(e)?up.call(e,0):e?[e]:[]},cp=function(e){return e=ni(e)[0]||ml("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ni(t,i.querySelectorAll?i:i===e?ml("Invalid scope")||Im.createElement("div"):e)}},xS=function(e){return e.sort(function(){return .5-Math.random()})},yS=function(e){if(Tt(e))return e;var t=Ni(e)?e:{each:e},i=Ss(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return Xt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,_){var m=(_||t).length,g=o[m],d,x,v,y,C,A,T,b,E;if(!g){if(E=t.grid==="auto"?0:(t.grid||[1,ti])[1],!E){for(T=-ti;T<(T=_[E++].getBoundingClientRect().left)&&E<m;);E<m&&E--}for(g=o[m]=[],d=l?Math.min(E,m)*c-.5:r%E,x=E===ti?0:l?m*f/E-.5:r/E|0,T=0,b=ti,A=0;A<m;A++)v=A%E-d,y=x-(A/E|0),g[A]=C=u?Math.abs(u==="y"?y:v):nS(v*v+y*y),C>T&&(T=C),C<b&&(b=C);r==="random"&&xS(g),g.max=T-b,g.min=b,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(E>m?m-1:u?u==="y"?m/E:E:Math.max(E,m/E))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=sn(t.amount||t.each)||0,i=i&&m<0?l2(i):i}return m=(g[h]-g.min)/g.max||0,dt(g.b+(i?i(m):m)*g.v)+g.u}},fp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=dt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(sr(i)?0:sn(i))}},SS=function(e,t){var i=on(e),r,s;return!i&&Ni(e)&&(r=i=e.radius||ti,e.values?(e=ni(e.values),(s=!sr(e[0]))&&(r*=r)):e=fp(e.increment)),$r(t,i?Tt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ti,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||sr(o)?c:c+sn(o)}:fp(e))},MS=function(e,t,i,r){return $r(on(e)?!t:i===!0?!!(i=0):!r,function(){return on(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},KP=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},ZP=function(e,t){return function(i){return e(parseFloat(i))+(t||sn(i))}},QP=function(e,t,i){return TS(e,t,0,1,i)},ES=function(e,t,i){return $r(i,function(r){return e[~~t(r)]})},JP=function n(e,t,i){var r=t-e;return on(e)?ES(e,n(0,e.length),t):$r(i,function(s){return(r+(s-e)%r)%r+e})},e2=function n(e,t,i){var r=t-e,s=r*2;return on(e)?ES(e,n(0,e.length-1),t):$r(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},_l=function(e){return e.replace(NP,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(IP);return MS(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},TS=function(e,t,i,r,s){var o=t-e,a=r-i;return $r(s,function(l){return i+((l-e)/o*a||0)})},t2=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Xt(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(on(e)&&!on(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(_){_*=f;var m=Math.min(h,~~_);return c[m](_-m)},i=t}else r||(e=$o(on(e)?[]:{},e));if(!c){for(l in t)Bm.call(a,e,l,"get",t[l]);s=function(_){return Wm(_,a)||(o?e.p:e)}}}return $r(i,s)},P0=function(e,t,i){var r=e.labels,s=ti,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Fn=function(e,t,i){var r=e.vars,s=r[t],o=ht,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Fr.length&&bc(),a&&(ht=a),c=l?s.apply(u,l):s.call(u),ht=o,c},Ra=function(e){return Hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Zt),e.progress()<1&&Fn(e,"onInterrupt"),e},Mo,wS=[],AS=function(e){if(e)if(e=!e.name&&e.default||e,Nm()||e.headless){var t=e.name,i=Tt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:gl,render:Wm,add:Bm,kill:v2,modifier:_2,rawVars:0},o={targetTest:0,get:0,getSetter:Gm,aliases:{},register:0};if(Qo(),e!==r){if(Nn[t])return;Gn(r,Gn(Pc(e,s),o)),$o(r.prototype,$o(s,Pc(e,o))),Nn[r.prop=t]=r,e.targetTest&&(Yu.push(r),Om[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}lS(t,r),e.register&&e.register(Cn,r,wn)}else wS.push(e)},it=255,ba={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},xh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*it+.5|0},CS=function(e,t,i){var r=e?sr(e)?[e>>16,e>>8&it,e&it]:0:ba.black,s,o,a,l,u,c,f,h,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ba[e])r=ba[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&it,r&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(w0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=xh(l+1/3,s,o),r[1]=xh(l,s,o),r[2]=xh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(rS),i&&r.length<4&&(r[3]=1),r}else r=e.match(w0)||ba.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/it,o=r[1]/it,a=r[2]/it,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},RS=function(e){var t=[],i=[],r=-1;return e.split(kr).forEach(function(s){var o=s.match(So)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},L0=function(e,t,i){var r="",s=(e+r).match(kr),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=CS(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=RS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(kr,"1").split(So),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(kr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},kr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ba)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),n2=/hsl[a]?\(/,bS=function(e){var t=e.join(" "),i;if(kr.lastIndex=0,kr.test(t))return i=n2.test(t),e[1]=L0(e[1],i),e[0]=L0(e[0],i,RS(e[1])),!0},vl,In=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,_=function m(g){var d=n()-r,x=g===!0,v,y,C,A;if((d>e||d<0)&&(i+=d-t),r+=d,C=r-i,v=C-o,(v>0||x)&&(A=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=v+(v>=s?4:s-v),y=1),x||(l=u(m)),y)for(p=0;p<a.length;p++)a[p](C,h,A,g)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){oS&&(!sp&&Nm()&&(Ti=sp=window,Im=Ti.document||{},Hn.gsap=Cn,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(Cn.version),aS(Rc||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),wS.forEach(AS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(g){return setTimeout(g,o-f.time*1e3+1|0)},vl=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),vl=0,u=gl},lagSmoothing:function(g,d){e=g||1/0,t=Math.min(d||33,e)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,d,x){var v=d?function(y,C,A,T){g(y,C,A,T),f.remove(v)}:g;return f.remove(g),a[x?"unshift":"push"](v),Qo(),v},remove:function(g,d){~(d=a.indexOf(g))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),Qo=function(){return!vl&&In.wake()},$e={},i2=/^[\d.\-M][\d.\-,\s]/,r2=/["']/g,s2=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(r2,"").trim():+u,r=l.substr(a+1).trim();return t},o2=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},a2=function(e){var t=(e+"").split("("),i=$e[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[s2(t[1])]:o2(e).split(",").map(hS)):$e._CE&&i2.test(e)?$e._CE("",e):i},l2=function(e){return function(t){return 1-e(1-t)}},Ss=function(e,t){return e&&(Tt(e)?e:$e[e]||a2(e))||t},Us=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Tn(e,function(a){$e[a]=Hn[a]=s,$e[o=a.toLowerCase()]=i;for(var l in s)$e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[a+"."+l]=s[l]}),s},PS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},yh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/rp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*DP((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:PS(a);return s=rp/s,l.config=function(u,c){return n(e,u,c)},l},Sh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:PS(i);return r.config=function(s){return n(e,s)},r};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Us(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;Us("Elastic",yh("in"),yh("out"),yh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Us("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Us("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Us("Circ",function(n){return-(nS(1-n*n)-1)});Us("Sine",function(n){return n===1?1:-LP(n*bP)+1});Us("Back",Sh("in"),Sh("out"),Sh());$e.SteppedEase=$e.steps=Hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-rt;return function(a){return((r*Pl(0,o,a)|0)+s)*i}}};pl.ease=$e["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Fm+=n+","+n+"Params,"});var LS=function(e,t){this.id=PP++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:cS,this.set=t?t.getSetter:Gm},xl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zo(this,+t.duration,1,1),this.data=t.data,ht&&(this._ctx=ht,ht.data.push(this)),vl||In.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Zo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Qo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(of(this,i),!s._dp||s.parent||mS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ci(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===rt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),fS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+R0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+R0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ko(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-rt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Lc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-rt?0:this._rts,this.totalTime(Pl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),sf(this),HP(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rt&&(this._tTime-=rt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=dt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ci(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(En(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=kP);var r=Zt;return Zt=i,zm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Zt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,b0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,b0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime($n(this,i),En(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,En(r)),this._dur||(this._zTime=-rt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-rt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-rt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Tt(i)?i:dS,l=function(){var c=r.then;r.then=null,s&&s(),Tt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ra(this)},n}();Gn(xl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-rt,_prom:0,_ps:!1,_rts:1});var gn=function(n){tS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=En(i.sortChildren),gt&&Ci(i.parent||gt,Gi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&gS(Gi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Wa(0,arguments,this),this},t.from=function(r,s,o){return Wa(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Wa(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ga(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Lt(r,s,$n(this,o),1),this},t.call=function(r,s,o){return Ci(this,Lt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Lt(r,o,$n(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ga(o).immediateRender=En(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Ga(a).immediateRender=En(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:dt(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,_,m,g,d,x,v,y,C,A,T;if(this!==gt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,v=this._ts,d=!v,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(h=dt(c%g),c===l?(m=this._repeat,h=u):(C=dt(c/g),m=~~C,m&&m===C&&(h=u,m--),h>u&&(h=u)),C=Ko(this._tTime,g),!a&&this._tTime&&C!==m&&this._tTime-C*g-this._dur<=0&&(C=m),A&&m&1&&(h=u-h,T=1),m!==C&&!this._lock){var b=A&&C&1,E=b===(A&&m&1);if(m<C&&(b=!b),a=b?0:c%u?u:c,this._lock=1,this.render(a||(T?0:dt(m*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Fn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,C=m),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,E&&(this._lock=2,a=b?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=jP(this,dt(a),dt(h)),x&&(c-=h-(h=x._start))),this._tTime=c,this._time=h,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!C&&(Fn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){x=0,_&&(c+=this._zTime=-rt);break}}p=_}else{p=this._last;for(var S=r<0?r:h;p;){if(_=p._prev,(p._act||S<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||Zt&&zm(p)),h!==this._time||!this._ts&&!d){x=0,_&&(c+=this._zTime=S?-rt:rt);break}}p=_}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-rt)._zTime=h>=a?1:-1,this._ts))return this._start=y,sf(this),this.render(r,s,o);this._onUpdate&&!s&&Fn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Hr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Fn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(sr(s)||(s=$n(this,s,r)),!(r instanceof xl)){if(on(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Xt(r))return this.addLabel(r,s);if(Tt(r))r=Lt.delayedCall(0,r);else return this}return this!==r?Ci(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ti);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Lt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Xt(r)?this.removeLabel(r):Tt(r)?this.killTweensOf(r):(r.parent===this&&rf(this,r),r===this._recent&&(this._recent=this._last),ys(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dt(In.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=$n(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Lt.delayedCall(0,s||gl,o);return a.data="isPause",this._hasPause=1,Ci(this,a,$n(this,r))},t.removePause=function(r){var s=this._first;for(r=$n(this,r);s;)s._start===r&&s.data==="isPause"&&Hr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)wr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ni(r),l=this._first,u=sr(s),c;l;)l instanceof Lt?zP(l._targets,a)&&(u?(!wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=$n(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,_=Lt.to(o,Gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||rt,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==g&&Zo(_,g,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Gn({startAt:{time:$n(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),P0(this,$n(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),P0(this,$n(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+rt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=dt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return ys(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ys(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ti,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ci(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=dt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Zo(o,o===gt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(gt._ts&&(fS(gt,Lc(r,gt)),uS=In.frame),In.frame>=A0){A0+=Bn.autoSleep||120;var s=gt._first;if((!s||!s._ts)&&Bn.autoSleep&&In._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||In.sleep()}}},e}(xl);Gn(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var u2=function(e,t,i,r,s,o,a){var l=new wn(this._pt,e,t,0,1,FS,null,s),u=0,c=0,f,h,p,_,m,g,d,x;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=_l(r)),o&&(x=[i,r],o(x,e,t),i=x[0],r=x[1]),h=i.match(_h)||[];f=_h.exec(r);)_=f[0],m=r.substring(u,f.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),_!==h[c++]&&(g=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:g,c:_.charAt(1)==="="?Do(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},u=_h.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(sS.test(r)||d)&&(l.e=0),this._pt=l,l},Bm=function(e,t,i,r,s,o,a,l,u,c){Tt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Tt(f)?u?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Tt(f)?u?p2:US:Hm,_;if(Xt(r)&&(~r.indexOf("random(")&&(r=_l(r)),r.charAt(1)==="="&&(_=Do(h,r)+(sn(h)||0),(_||_===0)&&(r=_))),!c||h!==r||hp)return!isNaN(h*r)&&r!==""?(_=new wn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?g2:OS,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&Um(t,r),u2.call(this,e,t,h,r,p,l||Bn.stringFilter,u))},c2=function(e,t,i,r,s){if(Tt(e)&&(e=Xa(e,s,t,i,r)),!Ni(e)||e.style&&e.nodeType||on(e)||iS(e))return Xt(e)?Xa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Xa(e[a],s,t,i,r);return o},DS=function(e,t,i,r,s,o){var a,l,u,c;if(Nn[e]&&(a=new Nn[e]).init(s,a.rawVars?t[e]:c2(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new wn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Mo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},wr,hp,Vm=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,_=e._dur,m=e._startAt,g=e._targets,d=e.parent,x=d&&d.data==="nested"?d.vars.targets:g,v=e._overwrite==="auto"&&!Lm,y=e.timeline,C=r.easeReverse||f,A,T,b,E,S,D,B,O,W,q,z,j,I;if(y&&(!h||!s)&&(s="none"),e._ease=Ss(s,pl.ease),e._rEase=C&&(Ss(C)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||h&&!r.stagger){if(O=g[0]?xs(g[0]).harness:0,j=O&&r[O.prop],A=Pc(r,Om),m&&(m._zTime<0&&m.progress(1),t<0&&c&&a&&!p?m.render(-1,!0):m.revert(c&&_?ju:FP),m._lazy=0),o){if(Hr(e._startAt=Lt.set(g,Gn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!m&&En(l),startAt:null,delay:0,onUpdate:u&&function(){return Fn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt||!a&&!p)&&e._startAt.revert(ju),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!m){if(t&&(a=!1),b=Gn({overwrite:!1,data:"isFromStart",lazy:a&&!m&&En(l),immediateRender:a,stagger:0,parent:d},A),j&&(b[O.prop]=j),Hr(e._startAt=Lt.set(g,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt?e._startAt.revert(ju):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,rt,rt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&En(l)||l&&!_,T=0;T<g.length;T++){if(S=g[T],B=S._gsap||km(g)[T]._gsap,e._ptLookup[T]=q={},op[B.id]&&Fr.length&&bc(),z=x===g?T:x.indexOf(S),O&&(W=new O).init(S,j||A,e,z,x)!==!1&&(e._pt=E=new wn(e._pt,S,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(K){q[K]=E}),W.priority&&(D=1)),!O||j)for(b in A)Nn[b]&&(W=DS(b,A,e,z,S,x))?W.priority&&(D=1):q[b]=E=Bm.call(e,S,b,"get",A[b],z,x,0,r.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),v&&e._pt&&(wr=e,gt.killTweensOf(S,q,e.globalTime(t)),I=!e.parent,wr=0),e._pt&&l&&(op[B.id]=1)}D&&kS(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!I,h&&t<=0&&y.render(ti,!0,!0)},f2=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return hp=1,e.vars[t]="+=0",Vm(e,a),hp=0,l?ml(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=At(i)+sn(f.e)),f.b&&(f.b=c.s+sn(f.b))},h2=function(e,t){var i=e[0]?xs(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=$o({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},d2=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(on(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Xa=function(e,t,i,r,s){return Tt(e)?e.call(t,i,r,s):Xt(e)&&~e.indexOf("random(")?_l(e):e},NS=Fm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",IS={};Tn(NS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return IS[n]=1});var Lt=function(n){tS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ga(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,d=r.parent||gt,x=(on(i)||iS(i)?sr(i[0]):"length"in r)?[i]:ni(i),v,y,C,A,T,b,E,S;if(a._targets=x.length?km(x):ml("GSAP target "+i+" not found. https://gsap.com",!Bn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||h||Cu(u)||Cu(c)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(v=a.timeline=new gn({data:"nested",defaults:m||{},targets:d&&d.data==="nested"?d.vars.targets:x}),v.kill(),v.parent=v._dp=Gi(a),v._start=0,h||Cu(u)||Cu(c)){if(A=x.length,E=h&&yS(h),Ni(h))for(T in h)~NS.indexOf(T)&&(S||(S={}),S[T]=h[T]);for(y=0;y<A;y++)C=Pc(r,IS),C.stagger=0,D&&(C.easeReverse=D),S&&$o(C,S),b=x[y],C.duration=+Xa(u,Gi(a),y,b,x),C.delay=(+Xa(c,Gi(a),y,b,x)||0)-a._delay,!h&&A===1&&C.delay&&(a._delay=c=C.delay,a._start+=c,C.delay=0),v.to(b,C,E?E(y,b,x):0),v._ease=$e.none;v.duration()?u=c=0:a.timeline=0}else if(_){Ga(Gn(v.vars.defaults,{ease:"none"})),v._ease=Ss(_.ease||r.ease||"none");var B=0,O,W,q;if(on(_))_.forEach(function(z){return v.to(x,z,">")}),v.duration();else{C={};for(T in _)T==="ease"||T==="easeEach"||d2(T,_[T],C,_.easeEach);for(T in C)for(O=C[T].sort(function(z,j){return z.t-j.t}),B=0,y=0;y<O.length;y++)W=O[y],q={ease:W.e,duration:(W.t-(y?O[y-1].t:0))/100*u},q[T]=W.v,v.to(x,q,B),B+=q.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||a.duration(u=v.duration())}else a.timeline=0;return p===!0&&!Lm&&(wr=Gi(a),gt.killTweensOf(x),wr=0),Ci(d,Gi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!_&&a._start===dt(d._time)&&En(f)&&GP(Gi(a))&&d.data!=="nested")&&(a._tTime=-rt,a.render(Math.max(0,-c)||0)),g&&gS(Gi(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-rt&&!c?l:r<rt?0:r,h,p,_,m,g,d,x,v;if(!u)XP(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,v=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,o);if(h=dt(f%m),f===l?(_=this._repeat,h=u):(g=dt(f/m),_=~~g,_&&_===g?(h=u,_--):h>u&&(h=u)),d=this._yoyo&&_&1,d&&(h=u-h),g=Ko(this._tTime,m),h===a&&!o&&this._initted&&_===g)return this._tTime=f,this;_!==g&&this.vars.repeatRefresh&&!d&&!this._lock&&h!==m&&this._initted&&(this._lock=o=1,this.render(dt(m*_),!0).invalidate()._lock=0)}if(!this._initted){if(_S(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=h<a;if(y!==this._inv){var C=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(y?-1:1)/C:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(h/u);if(this._from&&(this.ratio=x=1-x),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!g&&(Fn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&ap(this,r,s,o),Fn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&Fn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&ap(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Hr(this,1),!s&&!(c&&!a)&&(f||a||d)&&(Fn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){vl||In.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Vm(this,u),c=this._ease(u/this._dur),f2(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(of(this,0),this.parent||pS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ra(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Zt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,wr&&wr.vars.overwrite!==!0)._first||Ra(this),this.parent&&o!==this.timeline.totalDuration()&&Zo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ni(r):a,u=this._ptLookup,c=this._pt,f,h,p,_,m,g,d;if((!s||s==="all")&&VP(a,l))return s==="all"&&(this._pt=0),Ra(this);for(f=this._op=this._op||[],s!=="all"&&(Xt(s)&&(m={},Tn(s,function(x){return m[x]=1}),s=m),s=h2(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,_=h,p={}):(p=f[d]=f[d]||{},_=s);for(m in _)g=h&&h[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&rf(this,g,"_pt"),delete h[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&Ra(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Wa(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Wa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return gt.killTweensOf(r,s,o)},e}(xl);Gn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(n){Lt[n]=function(){var e=new gn,t=up.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Hm=function(e,t,i){return e[t]=i},US=function(e,t,i){return e[t](i)},p2=function(e,t,i,r){return e[t](r.fp,i)},m2=function(e,t,i){return e.setAttribute(t,i)},Gm=function(e,t){return Tt(e[t])?US:Dm(e[t])&&e.setAttribute?m2:Hm},OS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},g2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},FS=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Wm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},_2=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},v2=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?rf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},x2=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},kS=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},wn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||OS,this.d=l||this,this.set=u||Hm,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=x2,this.m=i,this.mt=s,this.tween=r},n}();Tn(Fm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Om[n]=1});Hn.TweenMax=Hn.TweenLite=Lt;Hn.TimelineLite=Hn.TimelineMax=gn;gt=new gn({sortChildren:!1,defaults:pl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bn.stringFilter=bS;var Ms=[],qu={},y2=[],D0=0,S2=0,Mh=function(e){return(qu[e]||y2).map(function(t){return t()})},dp=function(){var e=Date.now(),t=[];e-D0>2&&(Mh("matchMediaInit"),Ms.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Ti.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Mh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),D0=e,Mh("matchMedia"))},zS=function(){function n(t,i){this.selector=i&&cp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=S2++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Tt(i)&&(s=r,r=i,i=Tt);var o=this,a=function(){var u=ht,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=cp(s)),ht=o,f=r.apply(o,arguments),Tt(f)&&o._r.push(f),ht=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Tt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=ht;ht=null,i(this),ht=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Lt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof gn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Lt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Ms.length;o--;)Ms[o].id===this.id&&Ms.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),M2=function(){function n(t){this.contexts=[],this.scope=t,ht&&ht.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Ni(i)||(i={matches:i});var o=new zS(0,s||this.scope),a=o.conditions={},l,u,c;ht&&!o.selector&&(o.selector=ht.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Ti.matchMedia(i[u]),l&&(Ms.indexOf(o)<0&&Ms.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(dp):l.addEventListener("change",dp)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Dc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return AS(r)})},timeline:function(e){return new gn(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Xt(e)&&(e=ni(e)[0]);var s=xs(e||{}).get,o=i?dS:hS;return i==="native"&&(i=""),e&&(t?o((Nn[t]&&Nn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Nn[a]&&Nn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ni(e),e.length>1){var r=e.map(function(c){return Cn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Nn[t],a=xs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;Mo._pt=0,f.init(e,i?c+i:c,Mo,0,[e]),f.render(1,f),Mo._pt&&Wm(1,Mo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Cn.to(e,Gn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ss(e.ease,pl.ease)),C0(pl,e||{})},config:function(e){return C0(Bn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Nn[a]&&!Hn[a]&&ml(t+" effect requires "+a+" plugin.")}),vh[t]=function(a,l,u){return i(ni(a),Gn(l||{},s),u)},o&&(gn.prototype[t]=function(a,l,u){return this.add(vh[t](a,Ni(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){$e[e]=Ss(t)},parseEase:function(e,t){return arguments.length?Ss(e,t):$e},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new gn(e),r,s;for(i.smoothChildTiming=En(e.smoothChildTiming),gt.remove(i),i._dp=0,i._time=i._tTime=gt._time,r=gt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Lt&&r.vars.onComplete===r._targets[0]))&&Ci(i,r,r._start-r._delay),r=s;return Ci(gt,i,0),i},context:function(e,t){return e?new zS(e,t):ht},matchMedia:function(e){return new M2(e)},matchMediaRefresh:function(){return Ms.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||dp()},addEventListener:function(e,t){var i=qu[e]||(qu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=qu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:JP,wrapYoyo:e2,distribute:yS,random:MS,snap:SS,normalize:QP,getUnit:sn,clamp:qP,splitColor:CS,toArray:ni,selector:cp,mapRange:TS,pipe:KP,unitize:ZP,interpolate:t2,shuffle:xS},install:aS,effects:vh,ticker:In,updateRoot:gn.updateRoot,plugins:Nn,globalTimeline:gt,core:{PropTween:wn,globals:lS,Tween:Lt,Timeline:gn,Animation:xl,getCache:xs,_removeLinkedListItem:rf,reverting:function(){return Zt},context:function(e){return e&&ht&&(ht.data.push(e),e._ctx=ht),ht},suppressOverwrites:function(e){return Lm=e}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Dc[n]=Lt[n]});In.add(gn.updateRoot);Mo=Dc.to({},{duration:0});var E2=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},T2=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=E2(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Eh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Xt(s)&&(l={},Tn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}T2(a,s)}}}},Cn=Dc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Zt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Eh("roundProps",fp),Eh("modifiers"),Eh("snap",SS))||Dc;Lt.version=gn.version=Cn.version="3.15.0";oS=1;Nm()&&Qo();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var N0,Ar,No,Xm,gs,I0,jm,w2=function(){return typeof window<"u"},or={},ls=180/Math.PI,Io=Math.PI/180,ro=Math.atan2,U0=1e8,Ym=/([A-Z])/g,A2=/(left|right|width|margin|padding|x)/i,C2=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},R2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},b2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},P2=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},L2=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},BS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},VS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},D2=function(e,t,i){return e.style[t]=i},N2=function(e,t,i){return e.style.setProperty(t,i)},I2=function(e,t,i){return e._gsap[t]=i},U2=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},O2=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},F2=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},vt="transform",An=vt+"Origin",k2=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in or&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Xi(r,a)}):this.tfm[e]=o.x?o[e]:Xi(r,e),e===An&&(this.tfm.zOrigin=o.zOrigin);else return Ri.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(vt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(An,t,"")),e=vt}(s||t)&&this.props.push(e,t,s[e])},HS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},z2=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ym,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=jm(),(!s||!s.isStart)&&!i[vt]&&(HS(i),r.zOrigin&&i[An]&&(i[An]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},GS=function(e,t){var i={target:e,props:[],revert:z2,save:k2};return e._gsap||Cn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},WS,mp=function(e,t){var i=Ar.createElementNS?Ar.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ar.createElement(e);return i&&i.style?i:Ar.createElement(e)},kn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ym,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Jo(t)||t,1)||""},O0="O,Moz,ms,Ms,Webkit".split(","),Jo=function(e,t,i){var r=t||gs,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(O0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?O0[o]:"")+e},gp=function(){w2()&&window.document&&(N0=window,Ar=N0.document,No=Ar.documentElement,gs=mp("div")||{style:{}},mp("div"),vt=Jo(vt),An=vt+"Origin",gs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",WS=!!Jo("perspective"),jm=Cn.core.reverting,Xm=1)},F0=function(e){var t=e.ownerSVGElement,i=mp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),No.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),No.removeChild(i),s},k0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},XS=function(e){var t,i;try{t=e.getBBox()}catch{t=F0(e),i=1}return t&&(t.width||t.height)||i||(t=F0(e)),t&&!t.width&&!t.x&&!t.y?{x:+k0(e,["x","cx","x1"])||0,y:+k0(e,["y","cy","y1"])||0,width:0,height:0}:t},jS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&XS(e))},Gr=function(e,t){if(t){var i=e.style,r;t in or&&t!==An&&(t=vt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Ym,"-$1").toLowerCase())):i.removeAttribute(t)}},Cr=function(e,t,i,r,s,o){var a=new wn(e._pt,t,i,0,1,o?VS:BS);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},z0={deg:1,rad:1,turn:1},B2={grid:1,flex:1},Wr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=gs.style,l=A2.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",_,m,g,d;if(r===o||!s||z0[r]||z0[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&jS(e),(p||o==="%")&&(or[t]||~t.indexOf("adius")))return _=d?e.getBBox()[l?"width":"height"]:e[c],At(p?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Ar||!m.appendChild)&&(m=Ar.body),g=m._gsap,g&&p&&g.width&&l&&g.time===In.time&&!g.uncache)return At(s/g.width*f);if(p&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+r,_=e[c],x?e.style[t]=x:Gr(e,t)}else(p||o==="%")&&!B2[kn(m,"display")]&&(a.position=kn(e,"position")),m===e&&(a.position="static"),m.appendChild(gs),_=gs[c],m.removeChild(gs),a.position="absolute";return l&&p&&(g=xs(m),g.time=In.time,g.width=m[c]),At(h?_*s/f:_&&s?f/_*s:0)},Xi=function(e,t,i,r){var s;return Xm||gp(),t in Ri&&t!=="transform"&&(t=Ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),or[t]&&t!=="transform"?(s=Sl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ic(kn(e,An))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Nc[t]&&Nc[t](e,t,i)||kn(e,t)||cS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Wr(e,t,s,i)+i:s},V2=function(e,t,i,r){if(!i||i==="none"){var s=Jo(t,e,1),o=s&&kn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=kn(e,"borderTopColor"))}var a=new wn(this._pt,e.style,t,0,1,FS),l=0,u=0,c,f,h,p,_,m,g,d,x,v,y,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=kn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=kn(e,t)||r,m?e.style[t]=m:Gr(e,t)),c=[i,r],bS(c),i=c[0],r=c[1],h=i.match(So)||[],C=r.match(So)||[],C.length){for(;f=So.exec(r);)g=f[0],x=r.substring(l,f.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),g!==(m=h[u++]||"")&&(p=parseFloat(m)||0,y=m.substr((p+"").length),g.charAt(1)==="="&&(g=Do(p,g)+y),d=parseFloat(g),v=g.substr((d+"").length),l=So.lastIndex-v.length,v||(v=v||Bn.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=Wr(e,t,m,v)||0),a._pt={_next:a._pt,p:x||u===1?x:",",s:p,c:d-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?VS:BS;return sS.test(r)&&(a.e=0),this._pt=a,a},B0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},H2=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=B0[i]||i,t[1]=B0[r]||r,t.join(" ")},G2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],or[a]&&(l=1,a=a==="transformOrigin"?An:vt),Gr(i,a);l&&(Gr(i,vt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Sl(i,1),o.uncache=1,HS(r)))}},Nc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new wn(e._pt,t,i,0,0,G2);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},yl=[1,0,0,1,0,0],YS={},qS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},V0=function(e){var t=kn(e,vt);return qS(t)?yl:t.substr(7).match(rS).map(At)},qm=function(e,t){var i=e._gsap||xs(e),r=e.style,s=V0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?yl:s):(s===yl&&!e.offsetParent&&e!==No&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,No.appendChild(e)),s=V0(e),l?r.display=l:Gr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):No.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},_p=function(e,t,i,r,s,o){var a=e._gsap,l=s||qm(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],_=l[1],m=l[2],g=l[3],d=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,C=parseFloat(v[1])||0,A,T,b,E;i?l!==yl&&(T=p*g-_*m)&&(b=y*(g/T)+C*(-m/T)+(m*x-g*d)/T,E=y*(-_/T)+C*(p/T)-(p*x-_*d)/T,y=b,C=E):(A=XS(e),y=A.x+(~v[0].indexOf("%")?y/100*A.width:y),C=A.y+(~(v[1]||v[0]).indexOf("%")?C/100*A.height:C)),r||r!==!1&&a.smooth?(d=y-u,x=C-c,a.xOffset=f+(d*p+x*m)-d,a.yOffset=h+(d*_+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[An]="0px 0px",o&&(Cr(o,a,"xOrigin",u,y),Cr(o,a,"yOrigin",c,C),Cr(o,a,"xOffset",f,a.xOffset),Cr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+C)},Sl=function(e,t){var i=e._gsap||new LS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=kn(e,An)||"0",c,f,h,p,_,m,g,d,x,v,y,C,A,T,b,E,S,D,B,O,W,q,z,j,I,K,Q,re,Se,Ge,Y,te;return c=f=h=m=g=d=x=v=y=0,p=_=1,i.svg=!!(e.getCTM&&jS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[vt]!=="none"?l[vt]:"")),r.scale=r.rotate=r.translate="none"),T=qm(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),u=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),_p(e,j||u,!!j||i.originIsAbsolute,i.smooth!==!1,T)),C=i.xOrigin||0,A=i.yOrigin||0,T!==yl&&(D=T[0],B=T[1],O=T[2],W=T[3],c=q=T[4],f=z=T[5],T.length===6?(p=Math.sqrt(D*D+B*B),_=Math.sqrt(W*W+O*O),m=D||B?ro(B,D)*ls:0,x=O||W?ro(O,W)*ls+m:0,x&&(_*=Math.abs(Math.cos(x*Io))),i.svg&&(c-=C-(C*D+A*O),f-=A-(C*B+A*W))):(te=T[6],Ge=T[7],Q=T[8],re=T[9],Se=T[10],Y=T[11],c=T[12],f=T[13],h=T[14],b=ro(te,Se),g=b*ls,b&&(E=Math.cos(-b),S=Math.sin(-b),j=q*E+Q*S,I=z*E+re*S,K=te*E+Se*S,Q=q*-S+Q*E,re=z*-S+re*E,Se=te*-S+Se*E,Y=Ge*-S+Y*E,q=j,z=I,te=K),b=ro(-O,Se),d=b*ls,b&&(E=Math.cos(-b),S=Math.sin(-b),j=D*E-Q*S,I=B*E-re*S,K=O*E-Se*S,Y=W*S+Y*E,D=j,B=I,O=K),b=ro(B,D),m=b*ls,b&&(E=Math.cos(b),S=Math.sin(b),j=D*E+B*S,I=q*E+z*S,B=B*E-D*S,z=z*E-q*S,D=j,q=I),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,d=180-d),p=At(Math.sqrt(D*D+B*B+O*O)),_=At(Math.sqrt(z*z+te*te)),b=ro(q,z),x=Math.abs(b)>2e-4?b*ls:0,y=Y?1/(Y<0?-Y:Y):0),i.svg&&(j=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!qS(kn(e,vt)),j&&e.setAttribute("transform",j))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(p*=-1,x+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=At(p),i.scaleY=At(_),i.rotation=At(m)+a,i.rotationX=At(g)+a,i.rotationY=At(d)+a,i.skewX=x+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[An]=Ic(u)),i.xOffset=i.yOffset=0,i.force3D=Bn.force3D,i.renderTransform=i.svg?X2:WS?$S:W2,i.uncache=0,i},Ic=function(e){return(e=e.split(" "))[0]+" "+e[1]},Th=function(e,t,i){var r=sn(t);return At(parseFloat(t)+parseFloat(Wr(e,"x",i+"px",r)))+r},W2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$S(e,t)},is="0deg",Sa="0px",rs=") ",$S=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,_=i.scaleX,m=i.scaleY,g=i.transformPerspective,d=i.force3D,x=i.target,v=i.zOrigin,y="",C=d==="auto"&&e&&e!==1||d===!0;if(v&&(f!==is||c!==is)){var A=parseFloat(c)*Io,T=Math.sin(A),b=Math.cos(A),E;A=parseFloat(f)*Io,E=Math.cos(A),o=Th(x,o,T*E*-v),a=Th(x,a,-Math.sin(A)*-v),l=Th(x,l,b*E*-v+v)}g!==Sa&&(y+="perspective("+g+rs),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(C||o!==Sa||a!==Sa||l!==Sa)&&(y+=l!==Sa||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+rs),u!==is&&(y+="rotate("+u+rs),c!==is&&(y+="rotateY("+c+rs),f!==is&&(y+="rotateX("+f+rs),(h!==is||p!==is)&&(y+="skew("+h+", "+p+rs),(_!==1||m!==1)&&(y+="scale("+_+", "+m+rs),x.style[vt]=y||"translate(0, 0)"},X2=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,_=i.xOrigin,m=i.yOrigin,g=i.xOffset,d=i.yOffset,x=i.forceCSS,v=parseFloat(o),y=parseFloat(a),C,A,T,b,E;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Io,u*=Io,C=Math.cos(l)*f,A=Math.sin(l)*f,T=Math.sin(l-u)*-h,b=Math.cos(l-u)*h,u&&(c*=Io,E=Math.tan(u-c),E=Math.sqrt(1+E*E),T*=E,b*=E,c&&(E=Math.tan(c),E=Math.sqrt(1+E*E),C*=E,A*=E)),C=At(C),A=At(A),T=At(T),b=At(b)):(C=f,b=h,A=T=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Wr(p,"x",o,"px"),y=Wr(p,"y",a,"px")),(_||m||g||d)&&(v=At(v+_-(_*C+m*T)+g),y=At(y+m-(_*A+m*b)+d)),(r||s)&&(E=p.getBBox(),v=At(v+r/100*E.width),y=At(y+s/100*E.height)),E="matrix("+C+","+A+","+T+","+b+","+v+","+y+")",p.setAttribute("transform",E),x&&(p.style[vt]=E)},j2=function(e,t,i,r,s){var o=360,a=Xt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ls:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*U0)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*U0)%o-~~(u/o)*o)),e._pt=h=new wn(e._pt,t,i,r,u,R2),h.e=c,h.u="deg",e._props.push(i),h},H0=function(e,t){for(var i in t)e[i]=t[i];return e},Y2=function(e,t,i){var r=H0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[vt]=t,a=Sl(i,1),Gr(i,vt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[vt],o[vt]=t,a=Sl(i,1),o[vt]=u);for(l in or)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=sn(u),_=sn(c),f=p!==_?Wr(i,l,u,_):parseFloat(u),h=parseFloat(c),e._pt=new wn(e._pt,a,l,f,h-f,pp),e._pt.u=_||0,e._props.push(l));H0(a,r)};Tn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Nc[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(_){return Xi(a,_,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(_,m){return p[_]=h[m]=h[m]||h[(m-1)/2|0]}),a.init(l,p,f)}});var KS={name:"css",register:gp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,_,m,g,d,x,v,y,C,A,T,b,E;Xm||gp(),this.styles=this.styles||GS(e),b=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(Nn[m]&&DS(m,t,i,r,e,s)))){if(p=typeof c,_=Nc[m],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=_l(c)),_)_(this,e,m,c,i)&&(T=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",kr.lastIndex=0,kr.test(u)||(g=sn(u),d=sn(c),d?g!==d&&(u=Wr(e,m,u,d)+d):g&&(c+=g)),this.add(a,"setProperty",u,c,r,s,0,0,m),o.push(m),b.push(m,0,a[m]);else if(p!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],Xt(u)&&~u.indexOf("random(")&&(u=_l(u)),sn(u+"")||u==="auto"||(u+=Bn.units[m]||sn(Xi(e,m))||""),(u+"").charAt(1)==="="&&(u=Xi(e,m))):u=Xi(e,m),h=parseFloat(u),x=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),x&&(c=c.substr(2)),f=parseFloat(c),m in Ri&&(m==="autoAlpha"&&(h===1&&Xi(e,"visibility")==="hidden"&&f&&(h=0),b.push("visibility",0,a.visibility),Cr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=Ri[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in or,v){if(this.styles.save(m),E=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=kn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=c,c=kn(e,"perspective"),S?e.style.perspective=S:Gr(e,"perspective")}f=parseFloat(c)}if(y||(C=e._gsap,C.renderTransform&&!t.parseTransform||Sl(e,t.parseTransform),A=t.smoothOrigin!==!1&&C.smooth,y=this._pt=new wn(this._pt,a,vt,0,1,C.renderTransform,C,0,-1),y.dep=1),m==="scale")this._pt=new wn(this._pt,C,"scaleY",C.scaleY,(x?Do(C.scaleY,x+f):f)-C.scaleY||0,pp),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){b.push(An,0,a[An]),c=H2(c),C.svg?_p(e,c,0,A,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==C.zOrigin&&Cr(this,C,"zOrigin",C.zOrigin,d),Cr(this,a,m,Ic(u),Ic(c)));continue}else if(m==="svgOrigin"){_p(e,c,1,A,0,this);continue}else if(m in YS){j2(this,C,m,h,x?Do(h,x+c):c);continue}else if(m==="smoothOrigin"){Cr(this,C,"smooth",C.smooth,c);continue}else if(m==="force3D"){C[m]=c;continue}else if(m==="transform"){Y2(this,c,e);continue}}else m in a||(m=Jo(m)||m);if(v||(f||f===0)&&(h||h===0)&&!C2.test(c)&&m in a)g=(u+"").substr((h+"").length),f||(f=0),d=sn(c)||(m in Bn.units?Bn.units[m]:g),g!==d&&(h=Wr(e,m,u,d)),this._pt=new wn(this._pt,v?C:a,m,h,(x?Do(h,x+f):f)-h,!v&&(d==="px"||m==="zIndex")&&t.autoRound!==!1?L2:pp),this._pt.u=d||0,v&&E!==c?(this._pt.b=u,this._pt.e=E,this._pt.r=P2):g!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=b2);else if(m in a)V2.call(this,e,m,u,x?x+c:c);else if(m in e)this.add(e,m,u||e[m],x?x+c:c,r,s);else if(m!=="parseTransform"){Um(m,c);continue}v||(m in a?b.push(m,0,a[m]):typeof e[m]=="function"?b.push(m,2,e[m]()):b.push(m,1,u||e[m])),o.push(m)}}T&&kS(this)},render:function(e,t){if(t.tween._time||!jm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Xi,aliases:Ri,getSetter:function(e,t,i){var r=Ri[t];return r&&r.indexOf(",")<0&&(t=r),t in or&&t!==An&&(e._gsap.x||Xi(e,"x"))?i&&I0===i?t==="scale"?U2:I2:(I0=i||{})&&(t==="scale"?O2:F2):e.style&&!Dm(e.style[t])?D2:~t.indexOf("-")?N2:Gm(e,t)},core:{_removeProperty:Gr,_getMatrix:qm}};Cn.utils.checkPrefix=Jo;Cn.core.getStyleSaver=GS;(function(n,e,t,i){var r=Tn(n+","+e+","+t,function(s){or[s]=1});Tn(e,function(s){Bn.units[s]="deg",YS[s]=1}),Ri[r[13]]=n+","+e,Tn(i,function(s){var o=s.split(":");Ri[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Bn.units[n]="px"});Cn.registerPlugin(KS);var Uo=Cn.registerPlugin(KS)||Cn;Uo.core.Tween;function q2(n,e){const t=Math.sqrt(n*n+e*e),r=Math.atan2(n,e)*180/Math.PI,s=90-r,o=e/3,a=n/3,l=new N(-o,-a,0),u=new N(e-o,-a,0),c=new N(-o,n-a,0),f=l.clone().lerp(c,.5),h=l.clone().lerp(u,.5),p=u.clone().lerp(c,.5);return{a:n,b:e,c:t,alphaDeg:r,betaDeg:s,vA:u,vB:c,vC:l,midA:f,midB:h,midC:p,outA:new N(-1,0,0),outB:new N(0,-1,0),outC:new N(n/t,e/t,0)}}const wh=.32;class $2{constructor(e){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:new wb}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bloomPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"labelRenderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"figureRoot",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"groundGroup",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"triMesh",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"triEdges",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"triGeo",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"triMat",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"triEdgeMat",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sideLabels",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"vertexLabels",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"targetParams",{enumerable:!0,configurable:!0,writable:!0,value:{a:2.828,b:2.828}}),Object.defineProperty(this,"animatedParams",{enumerable:!0,configurable:!0,writable:!0,value:{a:2.828,b:2.828}}),Object.defineProperty(this,"onStats",{enumerable:!0,configurable:!0,writable:!0,value:()=>{}}),Object.defineProperty(this,"handleResize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"structureDirty",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"lastStatsEmit",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"tick",{enumerable:!0,configurable:!0,writable:!0,value:h=>{if(this.controls.update(),this.structureDirty&&(this.rebuildFigure(),this.structureDirty=!1),h-this.lastStatsEmit>90){this.lastStatsEmit=h;const{a:p,b:_}=this.animatedParams,m=Math.sqrt(p*p+_*_),g=Math.atan2(p,_)*180/Math.PI;this.emitStatsNow(p,_,m,g,90-g)}this.composer.render(),this.labelRenderer.render(this.scene,this.camera)}}),this.canvas=e,this.container=e.parentElement??document.body,this.renderer=new Tb({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=uy,this.renderer.toneMapping=dm,this.renderer.toneMappingExposure=1.06,this.scene.background=new ze("#e9f1fb"),this.scene.fog=new wm(15331835,.016),this.camera=new Qn(38,1,.1,200),this.camera.position.set(0,0,13),this.controls=new _P(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.07,this.controls.target.set(0,0,0),this.controls.minDistance=4,this.controls.maxDistance=32,this.controls.enablePan=!0,this.controls.touches={ONE:0,TWO:2},this.scene.add(new fP(14544639,12176614,.6)),this.scene.add(new pP(16777215,.18));const t=new mh(16777215,1.5);t.position.set(7,14,9),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-10,t.shadow.camera.right=10,t.shadow.camera.top=10,t.shadow.camera.bottom=-10,t.shadow.camera.near=.1,t.shadow.camera.far=40,t.shadow.bias=-2e-4,t.shadow.radius=6,this.scene.add(t);const i=new mh(11126527,.5);i.position.set(-8,6,4),this.scene.add(i);const r=new mh(16777215,.35);r.position.set(0,4,-10),this.scene.add(r),this.groundGroup=new xo,this.groundGroup.position.y=-3.4,this.scene.add(this.groundGroup);const s=new On(new bl(40,40),new aP({opacity:.18,transparent:!0}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.groundGroup.add(s);const o=new On(new Rm(11,64),new ef({color:16777215,transparent:!0,opacity:.5}));o.rotation.x=-Math.PI/2,o.position.y=.001,this.groundGroup.add(o),this.figureRoot=new xo,this.scene.add(this.figureRoot),this.triMat=new cP({color:new ze("#f9fbff"),metalness:.08,roughness:.35,clearcoat:.6,clearcoatRoughness:.22,sheen:.5,sheenColor:new ze(14543359),sheenRoughness:.6}),this.triEdgeMat=new jy({color:new ze("#5b8def"),transparent:!0,opacity:.85}),this.triGeo=new Cc(new tp,{depth:wh,bevelEnabled:!1}),this.triMesh=new On(this.triGeo,this.triMat),this.triMesh.castShadow=!0,this.triMesh.receiveShadow=!0,this.figureRoot.add(this.triMesh),this.triEdges=new Cb(new jn,this.triEdgeMat),this.figureRoot.add(this.triEdges),this.composer=new EP(this.renderer),this.composer.addPass(new TP(this.scene,this.camera)),this.bloomPass=new qo(new ie(1,1),.18,.85,.88),this.composer.addPass(this.bloomPass),this.composer.addPass(new CP),this.labelRenderer=new RP,this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.top="0",this.labelRenderer.domElement.style.left="0",this.labelRenderer.domElement.style.pointerEvents="none",this.labelRenderer.domElement.style.zIndex="2",this.container.appendChild(this.labelRenderer.domElement);const a=h=>{const p=document.createElement("div");p.className=`label-side label-side--${h}`;const _=document.createElement("span");_.className="label-side__name",_.textContent=h;const m=document.createElement("em");m.className="label-side__value",m.textContent="0.000",p.appendChild(_),p.appendChild(m);const g=new y0(p);return this.figureRoot.add(g),{obj:g,name:_,value:m}};this.sideLabels={a:a("a"),b:a("b"),c:a("c")};const l=h=>{const p=document.createElement("div");p.className="label-vertex",p.textContent=h;const _=new y0(p);return this.figureRoot.add(_),{obj:_,el:p}},u=l("A"),c=l("B"),f=l("C");this.vertexLabels={A:u.obj,elA:u.el,B:c.obj,elB:c.el,C:f.obj,elC:f.el},this.handleResize=()=>this.onResize(),window.addEventListener("resize",this.handleResize),this.resizeObs=new ResizeObserver(this.handleResize),this.resizeObs.observe(this.container),this.onResize(),this.rebuildFigure(),this.renderer.setAnimationLoop(this.tick)}setParams(e){const t={...this.targetParams};this.targetParams={...this.targetParams,...e},e.a!==void 0&&e.a!==t.a&&Uo.to(this.animatedParams,{a:e.a,duration:.45,ease:"power3.out",overwrite:"auto",onUpdate:()=>{this.structureDirty=!0}}),e.b!==void 0&&e.b!==t.b&&Uo.to(this.animatedParams,{b:e.b,duration:.45,ease:"power3.out",overwrite:"auto",onUpdate:()=>{this.structureDirty=!0}})}setStatsCallback(e){this.onStats=e}dispose(){this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.handleResize),this.resizeObs.disconnect(),Uo.killTweensOf(this.animatedParams),this.triGeo.dispose(),this.triMat.dispose(),this.triEdgeMat.dispose(),this.triEdges.geometry.dispose(),Object.keys(this.sideLabels).forEach(e=>{this.figureRoot.remove(this.sideLabels[e].obj)}),this.figureRoot.remove(this.vertexLabels.A),this.figureRoot.remove(this.vertexLabels.B),this.figureRoot.remove(this.vertexLabels.C),this.labelRenderer.domElement.remove(),this.groundGroup.traverse(e=>{const t=e;if(t.isMesh){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i.dispose()}}),this.composer.dispose(),this.renderer.dispose()}rebuildFigure(){const{a:e,b:t}=this.animatedParams,i=q2(e,t);this.triGeo.dispose();const r=new tp;r.moveTo(i.vA.x,i.vA.y),r.lineTo(i.vB.x,i.vB.y),r.lineTo(i.vC.x,i.vC.y),r.closePath(),this.triGeo=new Cc(r,{depth:wh,bevelEnabled:!1}),this.triGeo.translate(0,0,-wh/2),this.triMesh.geometry=this.triGeo;const s=this.triEdges.geometry;this.triEdges.geometry=new Vb(this.triGeo),s.dispose();const o=(f,h,p,_)=>{const m=this.sideLabels[f],g=.22+.04*_;m.obj.position.copy(h).addScaledVector(p,g),m.obj.position.z=0,m.value.textContent=_.toFixed(3)};o("a",i.midA,i.outA,i.a),o("b",i.midB,i.outB,i.b),o("c",i.midC,i.outC,i.c);const a=(f,h,p)=>{f.position.copy(h).addScaledVector(p,.5),f.position.z=0},l=new N().addVectors(i.outB,i.outC).normalize(),u=new N().addVectors(i.outA,i.outC).normalize(),c=new N().addVectors(i.outA,i.outB).normalize();a(this.vertexLabels.A,i.vA,l),a(this.vertexLabels.B,i.vB,u),a(this.vertexLabels.C,i.vC,c),this.emitStatsNow(i.a,i.b,i.c,i.alphaDeg,i.betaDeg)}emitStatsNow(e,t,i,r,s){this.onStats({a:e,b:t,c:i,alphaDeg:r,betaDeg:s})}onResize(){const e=this.container.clientWidth,t=this.container.clientHeight;e===0||t===0||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.bloomPass.resolution.set(e,t),this.labelRenderer.setSize(e,t))}}function K2({params:n,onStats:e}){const t=pt.useRef(null),i=pt.useRef(null),r=pt.useRef(e);return r.current=e,pt.useEffect(()=>{if(!t.current)return;const s=new $2(t.current);return i.current=s,s.setStatsCallback(o=>r.current(o)),()=>{s.dispose(),i.current=null}},[]),pt.useEffect(()=>{var s;(s=i.current)==null||s.setParams(n)},[n]),le.jsx("canvas",{ref:t,className:"scene-canvas"})}function Z2({value:n,min:e,max:t,onChange:i,decimals:r=3,className:s,title:o="Двойной клик — впиши значение"}){const[a,l]=pt.useState(!1),[u,c]=pt.useState(""),f=pt.useRef(null);pt.useEffect(()=>{a&&(c(n.toFixed(r)),requestAnimationFrame(()=>{var p,_;(p=f.current)==null||p.focus(),(_=f.current)==null||_.select()}))},[a,n,r]);const h=()=>{const p=parseFloat(u.replace(",","."));if(!Number.isNaN(p)&&Number.isFinite(p)){const _=Math.max(e,Math.min(t,p));i(_)}l(!1)};return a?le.jsx("input",{ref:f,className:`editable-number editable-number--editing ${s??""}`,type:"text",inputMode:"decimal",value:u,onChange:p=>c(p.target.value),onBlur:h,onKeyDown:p=>{p.key==="Enter"?(p.preventDefault(),h()):p.key==="Escape"&&(p.preventDefault(),l(!1))}}):le.jsx("span",{className:`editable-number ${s??""}`,title:o,onDoubleClick:()=>l(!0),children:n.toFixed(r)})}function Ah({letter:n,label:e,hint:t,min:i,max:r,step:s,value:o,onChange:a}){return le.jsxs("div",{className:`control-row control-row--${n}`,children:[le.jsxs("div",{className:"control-row__head",children:[le.jsxs("span",{className:"control-row__label",children:[le.jsx("span",{className:`control-row__letter control-row__letter--${n}`,children:n}),e]}),le.jsx(Z2,{className:`control-row__value control-row__value--${n}`,value:o,min:i,max:r,onChange:a})]}),le.jsx("input",{className:"range",type:"range",min:i,max:r,step:s,value:Math.min(r,Math.max(i,o)),onChange:l=>a(parseFloat(l.target.value))}),t&&le.jsx("div",{className:"control-row__hint",children:t})]})}function Q2({a:n,b:e,c:t,onAChange:i,onBChange:r,onCChange:s,onReset:o}){const a=pt.useRef(null);return pt.useEffect(()=>{a.current&&Uo.fromTo(a.current,{y:28,opacity:0,filter:"blur(8px)"},{y:0,opacity:1,filter:"blur(0px)",duration:.9,ease:"power3.out",delay:.25})},[]),le.jsxs("aside",{ref:a,className:"panel panel--right",children:[le.jsxs("header",{className:"panel__head",children:[le.jsx("div",{className:"panel__eyebrow",children:"Studio"}),le.jsx("h2",{className:"panel__title",children:"Стороны треугольника"}),le.jsx("p",{className:"panel__sub",children:"Меняй любую из сторон — остальные пересчитаются так, чтобы  a² + b² = c² выполнялось точно. Двойной клик по числу — впишешь руками."})]}),le.jsxs("div",{className:"panel__body",children:[le.jsx(Ah,{letter:"a",label:"катет",hint:"Вертикальный катет. При изменении подстраивается гипотенуза c.",min:.3,max:6,step:.01,value:n,onChange:i}),le.jsx(Ah,{letter:"b",label:"катет",hint:"Горизонтальный катет. При изменении подстраивается гипотенуза c.",min:.3,max:6,step:.01,value:e,onChange:r}),le.jsx(Ah,{letter:"c",label:"гипотенуза",hint:"Меняет c, сохраняя пропорцию катетов: a и b масштабируются вместе.",min:.5,max:9,step:.01,value:t,onChange:s}),le.jsx("div",{className:"divider"}),le.jsxs("button",{className:"cta",onClick:o,type:"button",children:[le.jsx("span",{className:"cta__dot"}),"Сбросить"]})]}),le.jsxs("footer",{className:"panel__foot",children:[le.jsx("span",{className:"panel__foot-key",children:"Подсказка"}),le.jsx("span",{className:"panel__foot-text",children:"Левая кнопка мыши — вращение, колесо — зум."})]})]})}function J2({stats:n}){const e=pt.useRef(null);pt.useEffect(()=>{e.current&&Uo.fromTo(e.current,{y:-22,opacity:0,filter:"blur(8px)"},{y:0,opacity:1,filter:"blur(0px)",duration:.9,ease:"power3.out",delay:.15})},[]);const t=(n==null?void 0:n.a)??0,i=(n==null?void 0:n.b)??0,r=(n==null?void 0:n.c)??0,s=t*t,o=i*i,a=r*r,l=s+o,u=Math.abs(l-a)<.001;return le.jsxs("div",{ref:e,className:"panel panel--left",children:[le.jsxs("h1",{className:"title",children:["Теорема",le.jsx("br",{}),le.jsx("span",{className:"title__accent",children:"Пифагора"})]}),le.jsxs("div",{className:"formula-stack",children:[le.jsxs("div",{className:"formula-card formula-card--main",children:[le.jsx("span",{className:"formula-card__caption",children:"главная формула"}),le.jsxs("div",{className:"formula-card__body",children:["a²",le.jsx("span",{className:"formula-card__op",children:"+"}),"b²",le.jsx("span",{className:"formula-card__op",children:"="}),"c²"]}),le.jsxs("div",{className:"formula-card__nums",children:[le.jsxs("span",{children:[t.toFixed(3),"²"]}),le.jsx("span",{className:"op",children:"+"}),le.jsxs("span",{children:[i.toFixed(3),"²"]}),le.jsx("span",{className:"op",children:"="}),le.jsxs("span",{children:[r.toFixed(3),"²"]})]}),le.jsxs("div",{className:"formula-card__check",children:[le.jsx("span",{children:s.toFixed(3)}),le.jsx("span",{className:"op",children:"+"}),le.jsx("span",{children:o.toFixed(3)}),le.jsx("span",{className:"op",children:"="}),le.jsx("span",{className:"check__num--accent",children:l.toFixed(3)}),le.jsx("span",{className:u?"check__badge check__badge--ok":"check__badge",children:u?"✓":"≈"})]})]}),le.jsxs("div",{className:"formula-arrow","aria-hidden":"true",children:[le.jsx("span",{className:"formula-arrow__line"}),le.jsx("span",{className:"formula-arrow__label",children:"отсюда"}),le.jsx("span",{className:"formula-arrow__line"})]}),le.jsxs("div",{className:"formula-card formula-card--derived",children:[le.jsx("span",{className:"formula-card__caption",children:"следствие"}),le.jsxs("div",{className:"formula-card__body",children:["c",le.jsx("span",{className:"formula-card__op",children:"="}),le.jsx("span",{className:"formula-card__root",children:le.jsxs("span",{className:"formula-card__root-bar",children:["a²",le.jsx("span",{className:"formula-card__op formula-card__op--inline",children:"+"}),"b²"]})})]}),le.jsxs("div",{className:"formula-card__nums",children:[le.jsx("span",{children:"c"}),le.jsx("span",{className:"op",children:"="}),le.jsx("span",{className:"formula-card__root formula-card__root--small",children:le.jsxs("span",{className:"formula-card__root-bar",children:[s.toFixed(3),le.jsx("span",{className:"op op--inline",children:"+"}),o.toFixed(3)]})}),le.jsx("span",{className:"op",children:"="}),le.jsx("span",{className:"check__num--accent",children:r.toFixed(3)})]})]})]}),le.jsx("p",{className:"lede",children:"Двигай слайдеры справа — треугольник пересчитывается в реальном времени. Двойной клик по числу — впишешь значение руками."}),le.jsxs("dl",{className:"stats",children:[le.jsxs("div",{className:"stats__row stats__row--a",children:[le.jsxs("dt",{children:["a ",le.jsx("span",{className:"stats__sub",children:"(катет)"})]}),le.jsx("dd",{children:t.toFixed(3)})]}),le.jsxs("div",{className:"stats__row stats__row--b",children:[le.jsxs("dt",{children:["b ",le.jsx("span",{className:"stats__sub",children:"(катет)"})]}),le.jsx("dd",{children:i.toFixed(3)})]}),le.jsxs("div",{className:"stats__row stats__row--c",children:[le.jsxs("dt",{children:["c ",le.jsx("span",{className:"stats__sub",children:"(гипотенуза)"})]}),le.jsx("dd",{children:r.toFixed(3)})]}),le.jsxs("div",{className:"stats__row",children:[le.jsx("dt",{children:"углы"}),le.jsxs("dd",{children:["90° / ",((n==null?void 0:n.alphaDeg)??0).toFixed(1),"° / ",((n==null?void 0:n.betaDeg)??0).toFixed(1),"°"]})]})]})]})}const G0=2.828,W0=2.828,X0=.3,j0=6,Y0=.3,q0=6,e3=.5,t3=9,Ma=(n,e,t)=>Math.max(e,Math.min(t,n));function n3(){const[n,e]=pt.useState(G0),[t,i]=pt.useState(W0),[r,s]=pt.useState(null),o=pt.useMemo(()=>Math.sqrt(n*n+t*t),[n,t]),a=pt.useCallback(f=>{e(Ma(f,X0,j0))},[]),l=pt.useCallback(f=>{i(Ma(f,Y0,q0))},[]),u=pt.useCallback(f=>{const h=Ma(f,e3,t3),p=Math.sqrt(n*n+t*t);if(p<1e-6)return;const _=h/p;e(Ma(n*_,X0,j0)),i(Ma(t*_,Y0,q0))},[n,t]),c=pt.useCallback(()=>{e(G0),i(W0)},[]);return le.jsxs("div",{className:"app",children:[le.jsx("div",{className:"app__bg"}),le.jsx("div",{className:"app__scene",children:le.jsx(K2,{params:{a:n,b:t},onStats:s})}),le.jsx(J2,{stats:r}),le.jsx(Q2,{a:n,b:t,c:o,onAChange:a,onBChange:l,onCChange:u,onReset:c})]})}ay(document.getElementById("root")).render(le.jsx(n3,{}));
