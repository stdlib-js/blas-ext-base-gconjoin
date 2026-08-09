"use strict";var y=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var g=y(function(k,S){
var j=require('@stdlib/assert-is-undefined-or-null/dist'),m=require('@stdlib/array-base-resolve-getter/dist'),c=require('@stdlib/blas-ext-base-gjoin/dist').ndarray,s=", ",d=" ";function p(r,e,a){var t=r(e,a);return j(t)?"":String(t)}function A(r,e,a,t,i,n,u,v){var o,q,l;return r<=0?e+a:t===""||r===1?e+c(r,s,n,u,v)+a:(l=m(n),q=e+c(r-1,s,n,u,v),o=p(l,n,v+(r-1)*u),r>=3&&i?q+s+t+d+o+a:q+d+t+d+o+a)}S.exports=A
});var O=y(function(w,E){
var C=require('@stdlib/strided-base-stride2offset/dist'),G=g();function R(r,e,a,t,i,n,u){return G(r,e,a,t,i,n,u,C(r,u))}E.exports=R
});var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=O(),b=g();U(P,"ndarray",b);module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
