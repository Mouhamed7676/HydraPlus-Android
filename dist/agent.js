var La=Object.create;var mr=Object.defineProperty;var Aa=Object.getOwnPropertyDescriptor;var Na=Object.getOwnPropertyNames;var Ca=Object.getPrototypeOf,Ma=Object.prototype.hasOwnProperty;var gr=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}},ka=(t,e)=>{for(var n in e)mr(t,n,{get:e[n],enumerable:!0})},Ia=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Na(e))!Ma.call(t,o)&&o!==n&&mr(t,o,{get:()=>e[o],enumerable:!(r=Aa(e,o))||r.enumerable});return t};var Oa=(t,e,n)=>(n=t!=null?La(Ca(t)):{},Ia(e||!t||!t.__esModule?mr(n,"default",{value:t,enumerable:!0}):n,t));var Ss=gr(Bn=>{"use strict";Bn.byteLength=ip;Bn.toByteArray=ap;Bn.fromByteArray=up;var tt=[],He=[],op=typeof Uint8Array<"u"?Uint8Array:Array,To="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(wt=0,bs=To.length;wt<bs;++wt)tt[wt]=To[wt],He[To.charCodeAt(wt)]=wt;var wt,bs;He[45]=62;He[95]=63;function vs(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function ip(t){var e=vs(t),n=e[0],r=e[1];return(n+r)*3/4-r}function sp(t,e,n){return(e+n)*3/4-n}function ap(t){var e,n=vs(t),r=n[0],o=n[1],i=new op(sp(t,r,o)),s=0,a=o>0?r-4:r,l;for(l=0;l<a;l+=4)e=He[t.charCodeAt(l)]<<18|He[t.charCodeAt(l+1)]<<12|He[t.charCodeAt(l+2)]<<6|He[t.charCodeAt(l+3)],i[s++]=e>>16&255,i[s++]=e>>8&255,i[s++]=e&255;return o===2&&(e=He[t.charCodeAt(l)]<<2|He[t.charCodeAt(l+1)]>>4,i[s++]=e&255),o===1&&(e=He[t.charCodeAt(l)]<<10|He[t.charCodeAt(l+1)]<<4|He[t.charCodeAt(l+2)]>>2,i[s++]=e>>8&255,i[s++]=e&255),i}function lp(t){return tt[t>>18&63]+tt[t>>12&63]+tt[t>>6&63]+tt[t&63]}function cp(t,e,n){for(var r,o=[],i=e;i<n;i+=3)r=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(t[i+2]&255),o.push(lp(r));return o.join("")}function up(t){for(var e,n=t.length,r=n%3,o=[],i=16383,s=0,a=n-r;s<a;s+=i)o.push(cp(t,s,s+i>a?a:s+i));return r===1?(e=t[n-1],o.push(tt[e>>2]+tt[e<<4&63]+"==")):r===2&&(e=(t[n-2]<<8)+t[n-1],o.push(tt[e>>10]+tt[e>>4&63]+tt[e<<2&63]+"=")),o.join("")}});var Es=gr(xo=>{xo.read=function(t,e,n,r,o){var i,s,a=o*8-r-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?o-1:0,h=n?-1:1,p=t[e+d];for(d+=h,i=p&(1<<-u)-1,p>>=-u,u+=a;u>0;i=i*256+t[e+d],d+=h,u-=8);for(s=i&(1<<-u)-1,i>>=-u,u+=r;u>0;s=s*256+t[e+d],d+=h,u-=8);if(i===0)i=1-c;else{if(i===l)return s?NaN:(p?-1:1)*(1/0);s=s+Math.pow(2,r),i=i-c}return(p?-1:1)*s*Math.pow(2,i-r)};xo.write=function(t,e,n,r,o,i){var s,a,l,c=i*8-o-1,u=(1<<c)-1,d=u>>1,h=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:i-1,m=r?1:-1,f=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+d>=1?e+=h/l:e+=h*Math.pow(2,1-d),e*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(e*l-1)*Math.pow(2,o),s=s+d):(a=e*Math.pow(2,d-1)*Math.pow(2,o),s=0));o>=8;t[n+p]=a&255,p+=m,a/=256,o-=8);for(s=s<<o|a,c+=o;c>0;t[n+p]=s&255,p+=m,s/=256,c-=8);t[n+p-m]|=f*128}});var Rs=gr(Rt=>{"use strict";var Lo=Ss(),Pt=Es(),ws=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Rt.Buffer=v;Rt.SlowBuffer=gp;Rt.INSPECT_MAX_BYTES=50;var Hn=2147483647;Rt.kMaxLength=Hn;v.TYPED_ARRAY_SUPPORT=dp();!v.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function dp(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch{return!1}}Object.defineProperty(v.prototype,"parent",{enumerable:!0,get:function(){if(v.isBuffer(this))return this.buffer}});Object.defineProperty(v.prototype,"offset",{enumerable:!0,get:function(){if(v.isBuffer(this))return this.byteOffset}});function lt(t){if(t>Hn)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,v.prototype),e}function v(t,e,n){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Mo(t)}return Ls(t,e,n)}v.poolSize=8192;function Ls(t,e,n){if(typeof t=="string")return hp(t,e);if(ArrayBuffer.isView(t))return fp(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(nt(t,ArrayBuffer)||t&&nt(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(nt(t,SharedArrayBuffer)||t&&nt(t.buffer,SharedArrayBuffer)))return No(t,e,n);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=t.valueOf&&t.valueOf();if(r!=null&&r!==t)return v.from(r,e,n);var o=mp(t);if(o)return o;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return v.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}v.from=function(t,e,n){return Ls(t,e,n)};Object.setPrototypeOf(v.prototype,Uint8Array.prototype);Object.setPrototypeOf(v,Uint8Array);function As(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function pp(t,e,n){return As(t),t<=0?lt(t):e!==void 0?typeof n=="string"?lt(t).fill(e,n):lt(t).fill(e):lt(t)}v.alloc=function(t,e,n){return pp(t,e,n)};function Mo(t){return As(t),lt(t<0?0:ko(t)|0)}v.allocUnsafe=function(t){return Mo(t)};v.allocUnsafeSlow=function(t){return Mo(t)};function hp(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!v.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var n=Ns(t,e)|0,r=lt(n),o=r.write(t,e);return o!==n&&(r=r.slice(0,o)),r}function Ao(t){for(var e=t.length<0?0:ko(t.length)|0,n=lt(e),r=0;r<e;r+=1)n[r]=t[r]&255;return n}function fp(t){if(nt(t,Uint8Array)){var e=new Uint8Array(t);return No(e.buffer,e.byteOffset,e.byteLength)}return Ao(t)}function No(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return e===void 0&&n===void 0?r=new Uint8Array(t):n===void 0?r=new Uint8Array(t,e):r=new Uint8Array(t,e,n),Object.setPrototypeOf(r,v.prototype),r}function mp(t){if(v.isBuffer(t)){var e=ko(t.length)|0,n=lt(e);return n.length===0||t.copy(n,0,0,e),n}if(t.length!==void 0)return typeof t.length!="number"||Io(t.length)?lt(0):Ao(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Ao(t.data)}function ko(t){if(t>=Hn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Hn.toString(16)+" bytes");return t|0}function gp(t){return+t!=t&&(t=0),v.alloc(+t)}v.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==v.prototype};v.compare=function(e,n){if(nt(e,Uint8Array)&&(e=v.from(e,e.offset,e.byteLength)),nt(n,Uint8Array)&&(n=v.from(n,n.offset,n.byteLength)),!v.isBuffer(e)||!v.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===n)return 0;for(var r=e.length,o=n.length,i=0,s=Math.min(r,o);i<s;++i)if(e[i]!==n[i]){r=e[i],o=n[i];break}return r<o?-1:o<r?1:0};v.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};v.concat=function(e,n){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return v.alloc(0);var r;if(n===void 0)for(n=0,r=0;r<e.length;++r)n+=e[r].length;var o=v.allocUnsafe(n),i=0;for(r=0;r<e.length;++r){var s=e[r];if(nt(s,Uint8Array))i+s.length>o.length?v.from(s).copy(o,i):Uint8Array.prototype.set.call(o,s,i);else if(v.isBuffer(s))s.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=s.length}return o};function Ns(t,e){if(v.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||nt(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var n=t.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Co(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Ps(t).length;default:if(o)return r?-1:Co(t).length;e=(""+e).toLowerCase(),o=!0}}v.byteLength=Ns;function _p(t,e,n){var r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,e>>>=0,n<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return Ap(this,e,n);case"utf8":case"utf-8":return Ms(this,e,n);case"ascii":return xp(this,e,n);case"latin1":case"binary":return Lp(this,e,n);case"base64":return wp(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Np(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}v.prototype._isBuffer=!0;function Tt(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}v.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<e;n+=2)Tt(this,n,n+1);return this};v.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<e;n+=4)Tt(this,n,n+3),Tt(this,n+1,n+2);return this};v.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<e;n+=8)Tt(this,n,n+7),Tt(this,n+1,n+6),Tt(this,n+2,n+5),Tt(this,n+3,n+4);return this};v.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Ms(this,0,e):_p.apply(this,arguments)};v.prototype.toLocaleString=v.prototype.toString;v.prototype.equals=function(e){if(!v.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:v.compare(this,e)===0};v.prototype.inspect=function(){var e="",n=Rt.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"};ws&&(v.prototype[ws]=v.prototype.inspect);v.prototype.compare=function(e,n,r,o,i){if(nt(e,Uint8Array)&&(e=v.from(e,e.offset,e.byteLength)),!v.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(n===void 0&&(n=0),r===void 0&&(r=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),n<0||r>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&n>=r)return 0;if(o>=i)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,o>>>=0,i>>>=0,this===e)return 0;for(var s=i-o,a=r-n,l=Math.min(s,a),c=this.slice(o,i),u=e.slice(n,r),d=0;d<l;++d)if(c[d]!==u[d]){s=c[d],a=u[d];break}return s<a?-1:a<s?1:0};function Cs(t,e,n,r,o){if(t.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Io(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0)if(o)n=0;else return-1;if(typeof e=="string"&&(e=v.from(e,r)),v.isBuffer(e))return e.length===0?-1:Ts(t,e,n,r,o);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):Ts(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function Ts(t,e,n,r,o){var i=1,s=t.length,a=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(t.length<2||e.length<2)return-1;i=2,s/=2,a/=2,n/=2}function l(p,m){return i===1?p[m]:p.readUInt16BE(m*i)}var c;if(o){var u=-1;for(c=n;c<s;c++)if(l(t,c)===l(e,u===-1?0:c-u)){if(u===-1&&(u=c),c-u+1===a)return u*i}else u!==-1&&(c-=c-u),u=-1}else for(n+a>s&&(n=s-a),c=n;c>=0;c--){for(var d=!0,h=0;h<a;h++)if(l(t,c+h)!==l(e,h)){d=!1;break}if(d)return c}return-1}v.prototype.includes=function(e,n,r){return this.indexOf(e,n,r)!==-1};v.prototype.indexOf=function(e,n,r){return Cs(this,e,n,r,!0)};v.prototype.lastIndexOf=function(e,n,r){return Cs(this,e,n,r,!1)};function yp(t,e,n,r){n=Number(n)||0;var o=t.length-n;r?(r=Number(r),r>o&&(r=o)):r=o;var i=e.length;r>i/2&&(r=i/2);for(var s=0;s<r;++s){var a=parseInt(e.substr(s*2,2),16);if(Io(a))return s;t[n+s]=a}return s}function bp(t,e,n,r){return Jn(Co(e,t.length-n),t,n,r)}function vp(t,e,n,r){return Jn(kp(e),t,n,r)}function Sp(t,e,n,r){return Jn(Ps(e),t,n,r)}function Ep(t,e,n,r){return Jn(Ip(e,t.length-n),t,n,r)}v.prototype.write=function(e,n,r,o){if(n===void 0)o="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")o=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-n;if((r===void 0||r>i)&&(r=i),e.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var s=!1;;)switch(o){case"hex":return yp(this,e,n,r);case"utf8":case"utf-8":return bp(this,e,n,r);case"ascii":case"latin1":case"binary":return vp(this,e,n,r);case"base64":return Sp(this,e,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ep(this,e,n,r);default:if(s)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),s=!0}};v.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function wp(t,e,n){return e===0&&n===t.length?Lo.fromByteArray(t):Lo.fromByteArray(t.slice(e,n))}function Ms(t,e,n){n=Math.min(t.length,n);for(var r=[],o=e;o<n;){var i=t[o],s=null,a=i>239?4:i>223?3:i>191?2:1;if(o+a<=n){var l,c,u,d;switch(a){case 1:i<128&&(s=i);break;case 2:l=t[o+1],(l&192)===128&&(d=(i&31)<<6|l&63,d>127&&(s=d));break;case 3:l=t[o+1],c=t[o+2],(l&192)===128&&(c&192)===128&&(d=(i&15)<<12|(l&63)<<6|c&63,d>2047&&(d<55296||d>57343)&&(s=d));break;case 4:l=t[o+1],c=t[o+2],u=t[o+3],(l&192)===128&&(c&192)===128&&(u&192)===128&&(d=(i&15)<<18|(l&63)<<12|(c&63)<<6|u&63,d>65535&&d<1114112&&(s=d))}}s===null?(s=65533,a=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|s&1023),r.push(s),o+=a}return Tp(r)}var xs=4096;function Tp(t){var e=t.length;if(e<=xs)return String.fromCharCode.apply(String,t);for(var n="",r=0;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=xs));return n}function xp(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(t[o]&127);return r}function Lp(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function Ap(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=e;i<n;++i)o+=Op[t[i]];return o}function Np(t,e,n){for(var r=t.slice(e,n),o="",i=0;i<r.length-1;i+=2)o+=String.fromCharCode(r[i]+r[i+1]*256);return o}v.prototype.slice=function(e,n){var r=this.length;e=~~e,n=n===void 0?r:~~n,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<e&&(n=e);var o=this.subarray(e,n);return Object.setPrototypeOf(o,v.prototype),o};function xe(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}v.prototype.readUintLE=v.prototype.readUIntLE=function(e,n,r){e=e>>>0,n=n>>>0,r||xe(e,n,this.length);for(var o=this[e],i=1,s=0;++s<n&&(i*=256);)o+=this[e+s]*i;return o};v.prototype.readUintBE=v.prototype.readUIntBE=function(e,n,r){e=e>>>0,n=n>>>0,r||xe(e,n,this.length);for(var o=this[e+--n],i=1;n>0&&(i*=256);)o+=this[e+--n]*i;return o};v.prototype.readUint8=v.prototype.readUInt8=function(e,n){return e=e>>>0,n||xe(e,1,this.length),this[e]};v.prototype.readUint16LE=v.prototype.readUInt16LE=function(e,n){return e=e>>>0,n||xe(e,2,this.length),this[e]|this[e+1]<<8};v.prototype.readUint16BE=v.prototype.readUInt16BE=function(e,n){return e=e>>>0,n||xe(e,2,this.length),this[e]<<8|this[e+1]};v.prototype.readUint32LE=v.prototype.readUInt32LE=function(e,n){return e=e>>>0,n||xe(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};v.prototype.readUint32BE=v.prototype.readUInt32BE=function(e,n){return e=e>>>0,n||xe(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};v.prototype.readIntLE=function(e,n,r){e=e>>>0,n=n>>>0,r||xe(e,n,this.length);for(var o=this[e],i=1,s=0;++s<n&&(i*=256);)o+=this[e+s]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*n)),o};v.prototype.readIntBE=function(e,n,r){e=e>>>0,n=n>>>0,r||xe(e,n,this.length);for(var o=n,i=1,s=this[e+--o];o>0&&(i*=256);)s+=this[e+--o]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*n)),s};v.prototype.readInt8=function(e,n){return e=e>>>0,n||xe(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};v.prototype.readInt16LE=function(e,n){e=e>>>0,n||xe(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};v.prototype.readInt16BE=function(e,n){e=e>>>0,n||xe(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};v.prototype.readInt32LE=function(e,n){return e=e>>>0,n||xe(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};v.prototype.readInt32BE=function(e,n){return e=e>>>0,n||xe(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};v.prototype.readFloatLE=function(e,n){return e=e>>>0,n||xe(e,4,this.length),Pt.read(this,e,!0,23,4)};v.prototype.readFloatBE=function(e,n){return e=e>>>0,n||xe(e,4,this.length),Pt.read(this,e,!1,23,4)};v.prototype.readDoubleLE=function(e,n){return e=e>>>0,n||xe(e,8,this.length),Pt.read(this,e,!0,52,8)};v.prototype.readDoubleBE=function(e,n){return e=e>>>0,n||xe(e,8,this.length),Pt.read(this,e,!1,52,8)};function Re(t,e,n,r,o,i){if(!v.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}v.prototype.writeUintLE=v.prototype.writeUIntLE=function(e,n,r,o){if(e=+e,n=n>>>0,r=r>>>0,!o){var i=Math.pow(2,8*r)-1;Re(this,e,n,r,i,0)}var s=1,a=0;for(this[n]=e&255;++a<r&&(s*=256);)this[n+a]=e/s&255;return n+r};v.prototype.writeUintBE=v.prototype.writeUIntBE=function(e,n,r,o){if(e=+e,n=n>>>0,r=r>>>0,!o){var i=Math.pow(2,8*r)-1;Re(this,e,n,r,i,0)}var s=r-1,a=1;for(this[n+s]=e&255;--s>=0&&(a*=256);)this[n+s]=e/a&255;return n+r};v.prototype.writeUint8=v.prototype.writeUInt8=function(e,n,r){return e=+e,n=n>>>0,r||Re(this,e,n,1,255,0),this[n]=e&255,n+1};v.prototype.writeUint16LE=v.prototype.writeUInt16LE=function(e,n,r){return e=+e,n=n>>>0,r||Re(this,e,n,2,65535,0),this[n]=e&255,this[n+1]=e>>>8,n+2};v.prototype.writeUint16BE=v.prototype.writeUInt16BE=function(e,n,r){return e=+e,n=n>>>0,r||Re(this,e,n,2,65535,0),this[n]=e>>>8,this[n+1]=e&255,n+2};v.prototype.writeUint32LE=v.prototype.writeUInt32LE=function(e,n,r){return e=+e,n=n>>>0,r||Re(this,e,n,4,4294967295,0),this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=e&255,n+4};v.prototype.writeUint32BE=v.prototype.writeUInt32BE=function(e,n,r){return e=+e,n=n>>>0,r||Re(this,e,n,4,4294967295,0),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};v.prototype.writeIntLE=function(e,n,r,o){if(e=+e,n=n>>>0,!o){var i=Math.pow(2,8*r-1);Re(this,e,n,r,i-1,-i)}var s=0,a=1,l=0;for(this[n]=e&255;++s<r&&(a*=256);)e<0&&l===0&&this[n+s-1]!==0&&(l=1),this[n+s]=(e/a>>0)-l&255;return n+r};v.prototype.writeIntBE=function(e,n,r,o){if(e=+e,n=n>>>0,!o){var i=Math.pow(2,8*r-1);Re(this,e,n,r,i-1,-i)}var s=r-1,a=1,l=0;for(this[n+s]=e&255;--s>=0&&(a*=256);)e<0&&l===0&&this[n+s+1]!==0&&(l=1),this[n+s]=(e/a>>0)-l&255;return n+r};v.prototype.writeInt8=function(e,n,r){return e=+e,n=n>>>0,r||Re(this,e,n,1,127,-128),e<0&&(e=255+e+1),this[n]=e&255,n+1};v.prototype.writeInt16LE=function(e,n,r){return e=+e,n=n>>>0,r||Re(this,e,n,2,32767,-32768),this[n]=e&255,this[n+1]=e>>>8,n+2};v.prototype.writeInt16BE=function(e,n,r){return e=+e,n=n>>>0,r||Re(this,e,n,2,32767,-32768),this[n]=e>>>8,this[n+1]=e&255,n+2};v.prototype.writeInt32LE=function(e,n,r){return e=+e,n=n>>>0,r||Re(this,e,n,4,2147483647,-2147483648),this[n]=e&255,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24,n+4};v.prototype.writeInt32BE=function(e,n,r){return e=+e,n=n>>>0,r||Re(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};function ks(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Is(t,e,n,r,o){return e=+e,n=n>>>0,o||ks(t,e,n,4,34028234663852886e22,-34028234663852886e22),Pt.write(t,e,n,r,23,4),n+4}v.prototype.writeFloatLE=function(e,n,r){return Is(this,e,n,!0,r)};v.prototype.writeFloatBE=function(e,n,r){return Is(this,e,n,!1,r)};function Os(t,e,n,r,o){return e=+e,n=n>>>0,o||ks(t,e,n,8,17976931348623157e292,-17976931348623157e292),Pt.write(t,e,n,r,52,8),n+8}v.prototype.writeDoubleLE=function(e,n,r){return Os(this,e,n,!0,r)};v.prototype.writeDoubleBE=function(e,n,r){return Os(this,e,n,!1,r)};v.prototype.copy=function(e,n,r,o){if(!v.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),n>=e.length&&(n=e.length),n||(n=0),o>0&&o<r&&(o=r),o===r||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-n<o-r&&(o=e.length-n+r);var i=o-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,r,o):Uint8Array.prototype.set.call(e,this.subarray(r,o),n),i};v.prototype.fill=function(e,n,r,o){if(typeof e=="string"){if(typeof n=="string"?(o=n,n=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!v.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var s;if(typeof e=="number")for(s=n;s<r;++s)this[s]=e;else{var a=v.isBuffer(e)?e:v.from(e,o),l=a.length;if(l===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<r-n;++s)this[s+n]=a[s%l]}return this};var Cp=/[^+/0-9A-Za-z-_]/g;function Mp(t){if(t=t.split("=")[0],t=t.trim().replace(Cp,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function Co(t,e){e=e||1/0;for(var n,r=t.length,o=null,i=[],s=0;s<r;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}else if(s+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=(o-55296<<10|n-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,n&63|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return i}function kp(t){for(var e=[],n=0;n<t.length;++n)e.push(t.charCodeAt(n)&255);return e}function Ip(t,e){for(var n,r,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,o=n%256,i.push(o),i.push(r);return i}function Ps(t){return Lo.toByteArray(Mp(t))}function Jn(t,e,n,r){for(var o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}function nt(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function Io(t){return t!==t}var Op=(function(){for(var t="0123456789abcdef",e=new Array(256),n=0;n<16;++n)for(var r=n*16,o=0;o<16;++o)e[r+o]=t[n]+t[o];return e})()});var T=function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,n,i):s(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},x;(function(t){t.application={get dataPath(){return e("get_persistentDataPath")},get identifier(){return e("get_identifier")??e("get_bundleIdentifier")??Process.mainModule.name},get version(){return e("get_version")??Ra(t.module).toString(16)}},Me(t,"unityVersion",()=>{try{let r=t.$config.unityVersion??e("get_unityVersion");if(r!=null)return r}catch{}let n="69 6c 32 63 70 70";for(let r of t.module.enumerateRanges("r--").concat(Process.getRangeByAddress(t.module.base)))for(let{address:o}of Memory.scanSync(r.base,r.size,n)){for(;o.readU8()!=0;)o=o.sub(1);let i=Wt.find(o.add(1).readCString());if(i!=null)return i}G("couldn't determine the Unity version, please specify it manually")},w),Me(t,"unityVersionIsBelow201830",()=>Wt.lt(t.unityVersion,"2018.3.0"),w),Me(t,"unityVersionIsBelow202120",()=>Wt.lt(t.unityVersion,"2021.2.0"),w);function e(n){let r=t.exports.resolveInternalCall(Memory.allocUtf8String("UnityEngine.Application::"+n)),o=new NativeFunction(r,"pointer",[]);return o.isNull()?null:new t.String(o()).asNullable()?.content??null}})(x||(x={}));var x;(function(t){function e(n,r){let o={int8:"System.SByte",uint8:"System.Byte",int16:"System.Int16",uint16:"System.UInt16",int32:"System.Int32",uint32:"System.UInt32",int64:"System.Int64",uint64:"System.UInt64",char:"System.Char",intptr:"System.IntPtr",uintptr:"System.UIntPtr"},i=typeof n=="boolean"?"System.Boolean":typeof n=="number"?o[r??"int32"]:n instanceof Int64?"System.Int64":n instanceof UInt64?"System.UInt64":n instanceof NativePointer?o[r??"intptr"]:G(`Cannot create boxed primitive using value of type '${typeof n}'`),s=t.corlib.class(i??G(`Unknown primitive type name '${r}'`)).alloc();return(s.tryField("m_value")??s.tryField("_pointer")??G(`Could not find primitive field in class '${i}'`)).value=n,s}t.boxed=e})(x||(x={}));var x;(function(t){t.$config={moduleName:void 0,unityVersion:void 0,exports:void 0}})(x||(x={}));var x;(function(t){function e(s,a){s=s??`${t.application.identifier}_${t.application.version}.cs`,a=a??t.application.dataPath??Process.getCurrentDir(),o(a);let l=`${a}/${s}`,c=new File(l,"w");for(let u of t.domain.assemblies){Kt(`dumping ${u.name}...`);for(let d of u.image.classes)c.write(`${d}

`)}c.flush(),c.close(),Li(`dump saved to ${l}`),i()}t.dump=e;function n(s,a=!1){s=s??`${t.application.dataPath??Process.getCurrentDir()}/${t.application.identifier}_${t.application.version}`,!a&&r(s)&&G(`directory ${s} already exists - pass ignoreAlreadyExistingDirectory = true to skip this check`);for(let l of t.domain.assemblies){Kt(`dumping ${l.name}...`);let c=`${s}/${l.name.replaceAll(".","/")}.cs`;o(c.substring(0,c.lastIndexOf("/")));let u=new File(c,"w");for(let d of l.image.classes)u.write(`${d}

`);u.flush(),u.close()}Li(`dump saved to ${s}`),i()}t.dumpTree=n;function r(s){return t.corlib.class("System.IO.Directory").method("Exists").invoke(t.string(s))}function o(s){t.corlib.class("System.IO.Directory").method("CreateDirectory").invoke(t.string(s))}function i(){qt("this api will be removed in a future release, please use `npx frida-il2cpp-bridge dump` instead")}})(x||(x={}));var x;(function(t){function e(n="current"){let r=t.exports.threadGetCurrent();return Interceptor.attach(t.module.getExportByName("__cxa_throw"),function(o){n=="current"&&!t.exports.threadGetCurrent().equals(r)||Kt(new t.Object(o[0].readPointer()))})}t.installExceptionListener=e})(x||(x={}));var x;(function(t){t.exports={get alloc(){return e("il2cpp_alloc","pointer",["size_t"])},get arrayGetLength(){return e("il2cpp_array_length","uint32",["pointer"])},get arrayNew(){return e("il2cpp_array_new","pointer",["pointer","uint32"])},get assemblyGetImage(){return e("il2cpp_assembly_get_image","pointer",["pointer"])},get classForEach(){return e("il2cpp_class_for_each","void",["pointer","pointer"])},get classFromName(){return e("il2cpp_class_from_name","pointer",["pointer","pointer","pointer"])},get classFromObject(){return e("il2cpp_class_from_system_type","pointer",["pointer"])},get classGetArrayClass(){return e("il2cpp_array_class_get","pointer",["pointer","uint32"])},get classGetArrayElementSize(){return e("il2cpp_class_array_element_size","int",["pointer"])},get classGetAssemblyName(){return e("il2cpp_class_get_assemblyname","pointer",["pointer"])},get classGetBaseType(){return e("il2cpp_class_enum_basetype","pointer",["pointer"])},get classGetDeclaringType(){return e("il2cpp_class_get_declaring_type","pointer",["pointer"])},get classGetElementClass(){return e("il2cpp_class_get_element_class","pointer",["pointer"])},get classGetFieldFromName(){return e("il2cpp_class_get_field_from_name","pointer",["pointer","pointer"])},get classGetFields(){return e("il2cpp_class_get_fields","pointer",["pointer","pointer"])},get classGetFlags(){return e("il2cpp_class_get_flags","int",["pointer"])},get classGetImage(){return e("il2cpp_class_get_image","pointer",["pointer"])},get classGetInstanceSize(){return e("il2cpp_class_instance_size","int32",["pointer"])},get classGetInterfaces(){return e("il2cpp_class_get_interfaces","pointer",["pointer","pointer"])},get classGetMethodFromName(){return e("il2cpp_class_get_method_from_name","pointer",["pointer","pointer","int"])},get classGetMethods(){return e("il2cpp_class_get_methods","pointer",["pointer","pointer"])},get classGetName(){return e("il2cpp_class_get_name","pointer",["pointer"])},get classGetNamespace(){return e("il2cpp_class_get_namespace","pointer",["pointer"])},get classGetNestedClasses(){return e("il2cpp_class_get_nested_types","pointer",["pointer","pointer"])},get classGetParent(){return e("il2cpp_class_get_parent","pointer",["pointer"])},get classGetStaticFieldData(){return e("il2cpp_class_get_static_field_data","pointer",["pointer"])},get classGetValueTypeSize(){return e("il2cpp_class_value_size","int32",["pointer","pointer"])},get classGetType(){return e("il2cpp_class_get_type","pointer",["pointer"])},get classHasReferences(){return e("il2cpp_class_has_references","bool",["pointer"])},get classInitialize(){return e("il2cpp_runtime_class_init","void",["pointer"])},get classIsAbstract(){return e("il2cpp_class_is_abstract","bool",["pointer"])},get classIsAssignableFrom(){return e("il2cpp_class_is_assignable_from","bool",["pointer","pointer"])},get classIsBlittable(){return e("il2cpp_class_is_blittable","bool",["pointer"])},get classIsEnum(){return e("il2cpp_class_is_enum","bool",["pointer"])},get classIsGeneric(){return e("il2cpp_class_is_generic","bool",["pointer"])},get classIsInflated(){return e("il2cpp_class_is_inflated","bool",["pointer"])},get classIsInterface(){return e("il2cpp_class_is_interface","bool",["pointer"])},get classIsSubclassOf(){return e("il2cpp_class_is_subclass_of","bool",["pointer","pointer","bool"])},get classIsValueType(){return e("il2cpp_class_is_valuetype","bool",["pointer"])},get domainGetAssemblyFromName(){return e("il2cpp_domain_assembly_open","pointer",["pointer","pointer"])},get domainGet(){return e("il2cpp_domain_get","pointer",[])},get domainGetAssemblies(){return e("il2cpp_domain_get_assemblies","pointer",["pointer","pointer"])},get fieldGetClass(){return e("il2cpp_field_get_parent","pointer",["pointer"])},get fieldGetFlags(){return e("il2cpp_field_get_flags","int",["pointer"])},get fieldGetName(){return e("il2cpp_field_get_name","pointer",["pointer"])},get fieldGetOffset(){return e("il2cpp_field_get_offset","int32",["pointer"])},get fieldGetStaticValue(){return e("il2cpp_field_static_get_value","void",["pointer","pointer"])},get fieldGetType(){return e("il2cpp_field_get_type","pointer",["pointer"])},get fieldSetStaticValue(){return e("il2cpp_field_static_set_value","void",["pointer","pointer"])},get free(){return e("il2cpp_free","void",["pointer"])},get gcCollect(){return e("il2cpp_gc_collect","void",["int"])},get gcCollectALittle(){return e("il2cpp_gc_collect_a_little","void",[])},get gcDisable(){return e("il2cpp_gc_disable","void",[])},get gcEnable(){return e("il2cpp_gc_enable","void",[])},get gcGetHeapSize(){return e("il2cpp_gc_get_heap_size","int64",[])},get gcGetMaxTimeSlice(){return e("il2cpp_gc_get_max_time_slice_ns","int64",[])},get gcGetUsedSize(){return e("il2cpp_gc_get_used_size","int64",[])},get gcHandleGetTarget(){return e("il2cpp_gchandle_get_target","pointer",["uint32"])},get gcHandleFree(){return e("il2cpp_gchandle_free","void",["uint32"])},get gcHandleNew(){return e("il2cpp_gchandle_new","uint32",["pointer","bool"])},get gcHandleNewWeakRef(){return e("il2cpp_gchandle_new_weakref","uint32",["pointer","bool"])},get gcIsDisabled(){return e("il2cpp_gc_is_disabled","bool",[])},get gcIsIncremental(){return e("il2cpp_gc_is_incremental","bool",[])},get gcSetMaxTimeSlice(){return e("il2cpp_gc_set_max_time_slice_ns","void",["int64"])},get gcStartIncrementalCollection(){return e("il2cpp_gc_start_incremental_collection","void",[])},get gcStartWorld(){return e("il2cpp_start_gc_world","void",[])},get gcStopWorld(){return e("il2cpp_stop_gc_world","void",[])},get getCorlib(){return e("il2cpp_get_corlib","pointer",[])},get imageGetAssembly(){return e("il2cpp_image_get_assembly","pointer",["pointer"])},get imageGetClass(){return e("il2cpp_image_get_class","pointer",["pointer","uint"])},get imageGetClassCount(){return e("il2cpp_image_get_class_count","uint32",["pointer"])},get imageGetName(){return e("il2cpp_image_get_name","pointer",["pointer"])},get initialize(){return e("il2cpp_init","void",["pointer"])},get livenessAllocateStruct(){return e("il2cpp_unity_liveness_allocate_struct","pointer",["pointer","int","pointer","pointer","pointer"])},get livenessCalculationBegin(){return e("il2cpp_unity_liveness_calculation_begin","pointer",["pointer","int","pointer","pointer","pointer","pointer"])},get livenessCalculationEnd(){return e("il2cpp_unity_liveness_calculation_end","void",["pointer"])},get livenessCalculationFromStatics(){return e("il2cpp_unity_liveness_calculation_from_statics","void",["pointer"])},get livenessFinalize(){return e("il2cpp_unity_liveness_finalize","void",["pointer"])},get livenessFreeStruct(){return e("il2cpp_unity_liveness_free_struct","void",["pointer"])},get memorySnapshotCapture(){return e("il2cpp_capture_memory_snapshot","pointer",[])},get memorySnapshotFree(){return e("il2cpp_free_captured_memory_snapshot","void",["pointer"])},get memorySnapshotGetClasses(){return e("il2cpp_memory_snapshot_get_classes","pointer",["pointer","pointer"])},get memorySnapshotGetObjects(){return e("il2cpp_memory_snapshot_get_objects","pointer",["pointer","pointer"])},get methodGetClass(){return e("il2cpp_method_get_class","pointer",["pointer"])},get methodGetFlags(){return e("il2cpp_method_get_flags","uint32",["pointer","pointer"])},get methodGetName(){return e("il2cpp_method_get_name","pointer",["pointer"])},get methodGetObject(){return e("il2cpp_method_get_object","pointer",["pointer","pointer"])},get methodGetParameterCount(){return e("il2cpp_method_get_param_count","uint8",["pointer"])},get methodGetParameterName(){return e("il2cpp_method_get_param_name","pointer",["pointer","uint32"])},get methodGetParameters(){return e("il2cpp_method_get_parameters","pointer",["pointer","pointer"])},get methodGetParameterType(){return e("il2cpp_method_get_param","pointer",["pointer","uint32"])},get methodGetReturnType(){return e("il2cpp_method_get_return_type","pointer",["pointer"])},get methodIsGeneric(){return e("il2cpp_method_is_generic","bool",["pointer"])},get methodIsInflated(){return e("il2cpp_method_is_inflated","bool",["pointer"])},get methodIsInstance(){return e("il2cpp_method_is_instance","bool",["pointer"])},get monitorEnter(){return e("il2cpp_monitor_enter","void",["pointer"])},get monitorExit(){return e("il2cpp_monitor_exit","void",["pointer"])},get monitorPulse(){return e("il2cpp_monitor_pulse","void",["pointer"])},get monitorPulseAll(){return e("il2cpp_monitor_pulse_all","void",["pointer"])},get monitorTryEnter(){return e("il2cpp_monitor_try_enter","bool",["pointer","uint32"])},get monitorTryWait(){return e("il2cpp_monitor_try_wait","bool",["pointer","uint32"])},get monitorWait(){return e("il2cpp_monitor_wait","void",["pointer"])},get objectGetClass(){return e("il2cpp_object_get_class","pointer",["pointer"])},get objectGetVirtualMethod(){return e("il2cpp_object_get_virtual_method","pointer",["pointer","pointer"])},get objectInitialize(){return e("il2cpp_runtime_object_init_exception","void",["pointer","pointer"])},get objectNew(){return e("il2cpp_object_new","pointer",["pointer"])},get objectGetSize(){return e("il2cpp_object_get_size","uint32",["pointer"])},get objectUnbox(){return e("il2cpp_object_unbox","pointer",["pointer"])},get resolveInternalCall(){return e("il2cpp_resolve_icall","pointer",["pointer"])},get stringGetChars(){return e("il2cpp_string_chars","pointer",["pointer"])},get stringGetLength(){return e("il2cpp_string_length","int32",["pointer"])},get stringNew(){return e("il2cpp_string_new","pointer",["pointer"])},get valueTypeBox(){return e("il2cpp_value_box","pointer",["pointer","pointer"])},get threadAttach(){return e("il2cpp_thread_attach","pointer",["pointer"])},get threadDetach(){return e("il2cpp_thread_detach","void",["pointer"])},get threadGetAttachedThreads(){return e("il2cpp_thread_get_all_attached_threads","pointer",["pointer"])},get threadGetCurrent(){return e("il2cpp_thread_current","pointer",[])},get threadIsVm(){return e("il2cpp_is_vm_thread","bool",["pointer"])},get typeEquals(){return e("il2cpp_type_equals","bool",["pointer","pointer"])},get typeGetClass(){return e("il2cpp_class_from_type","pointer",["pointer"])},get typeGetName(){return e("il2cpp_type_get_name","pointer",["pointer"])},get typeGetObject(){return e("il2cpp_type_get_object","pointer",["pointer"])},get typeGetTypeEnum(){return e("il2cpp_type_get_type","int",["pointer"])}},Pa(t.exports,w),Me(t,"memorySnapshotExports",()=>new CModule(`#include <stdint.h>
#include <string.h>

typedef struct Il2CppManagedMemorySnapshot Il2CppManagedMemorySnapshot;
typedef struct Il2CppMetadataType Il2CppMetadataType;

struct Il2CppManagedMemorySnapshot
{
  struct Il2CppManagedHeap
  {
    uint32_t section_count;
    void * sections;
  } heap;
  struct Il2CppStacks
  {
    uint32_t stack_count;
    void * stacks;
  } stacks;
  struct Il2CppMetadataSnapshot
  {
    uint32_t type_count;
    Il2CppMetadataType * types;
  } metadata_snapshot;
  struct Il2CppGCHandles
  {
    uint32_t tracked_object_count;
    void ** pointers_to_objects;
  } gc_handles;
  struct Il2CppRuntimeInformation
  {
    uint32_t pointer_size;
    uint32_t object_header_size;
    uint32_t array_header_size;
    uint32_t array_bounds_offset_in_header;
    uint32_t array_size_offset_in_header;
    uint32_t allocation_granularity;
  } runtime_information;
  void * additional_user_information;
};

struct Il2CppMetadataType
{
  uint32_t flags;
  void * fields;
  uint32_t field_count;
  uint32_t statics_size;
  uint8_t * statics;
  uint32_t base_or_element_type_index;
  char * name;
  const char * assembly_name;
  uint64_t type_info_address;
  uint32_t size;
};

uintptr_t
il2cpp_memory_snapshot_get_classes (
    const Il2CppManagedMemorySnapshot * snapshot, Il2CppMetadataType ** iter)
{
  const int zero = 0;
  const void * null = 0;

  if (iter != NULL && snapshot->metadata_snapshot.type_count > zero)
  {
    if (*iter == null)
    {
      *iter = snapshot->metadata_snapshot.types;
      return (uintptr_t) (*iter)->type_info_address;
    }
    else
    {
      Il2CppMetadataType * metadata_type = *iter + 1;

      if (metadata_type < snapshot->metadata_snapshot.types +
                              snapshot->metadata_snapshot.type_count)
      {
        *iter = metadata_type;
        return (uintptr_t) (*iter)->type_info_address;
      }
    }
  }
  return 0;
}

void **
il2cpp_memory_snapshot_get_objects (
    const Il2CppManagedMemorySnapshot * snapshot, uint32_t * size)
{
  *size = snapshot->gc_handles.tracked_object_count;
  return snapshot->gc_handles.pointers_to_objects;
}
`),w);function e(n,r,o){let i=t.$config.exports?.[n]?.()??t.module.findExportByName(n)??t.memorySnapshotExports[n],s=new NativeFunction(i??NULL,r,o);return s.isNull()?new Proxy(s,{get(a,l){let c=a[l];return typeof c=="function"?c.bind(a):c},apply(){i==null?G(`couldn't resolve export ${n}`):i.isNull()&&G(`export ${n} points to NULL IL2CPP library has likely been stripped, obfuscated, or customized`)}}):s}})(x||(x={}));var x;(function(t){function e(r){return o=>o instanceof t.Class?r.isAssignableFrom(o):r.isAssignableFrom(o.class)}t.is=e;function n(r){return o=>o instanceof t.Class?o.equals(r):o.class.equals(r)}t.isExactly=n})(x||(x={}));var x;(function(t){t.gc={get heapSize(){return t.exports.gcGetHeapSize()},get isEnabled(){return!t.exports.gcIsDisabled()},get isIncremental(){return!!t.exports.gcIsIncremental()},get maxTimeSlice(){return t.exports.gcGetMaxTimeSlice()},get usedHeapSize(){return t.exports.gcGetUsedSize()},set isEnabled(e){e?t.exports.gcEnable():t.exports.gcDisable()},set maxTimeSlice(e){t.exports.gcSetMaxTimeSlice(e)},choose(e){let n=[],r=(i,s)=>{for(let a=0;a<s;a++)n.push(new t.Object(i.add(a*Process.pointerSize).readPointer()))},o=new NativeCallback(r,"void",["pointer","int","pointer"]);if(t.unityVersionIsBelow202120){let i=new NativeCallback(()=>{},"void",[]),s=t.exports.livenessCalculationBegin(e,0,o,NULL,i,i);t.exports.livenessCalculationFromStatics(s),t.exports.livenessCalculationEnd(s)}else{let i=(l,c)=>!l.isNull()&&c.compare(0)==0?(t.free(l),NULL):t.alloc(c),s=new NativeCallback(i,"pointer",["pointer","size_t","pointer"]);this.stopWorld();let a=t.exports.livenessAllocateStruct(e,0,o,NULL,s);t.exports.livenessCalculationFromStatics(a),t.exports.livenessFinalize(a),this.startWorld(),t.exports.livenessFreeStruct(a)}return n},collect(e){t.exports.gcCollect(e<0?0:e>2?2:e)},collectALittle(){t.exports.gcCollectALittle()},startWorld(){return t.exports.gcStartWorld()},startIncrementalCollection(){return t.exports.gcStartIncrementalCollection()},stopWorld(){return t.exports.gcStopWorld()}}})(x||(x={}));var _r;(function(t){Me(t,"apiLevel",()=>{let n=e("ro.build.version.sdk");return n?parseInt(n):null},w);function e(n){let r=Process.findModuleByName("libc.so")?.findExportByName("__system_property_get");if(r){let o=new NativeFunction(r,"void",["pointer","pointer"]),i=Memory.alloc(92).writePointer(NULL);return o(Memory.allocUtf8String(n),i),i.readCString()??void 0}}})(_r||(_r={}));function G(t){let e=new Error(t);throw e.name="Il2CppError",e.stack=e.stack?.replace(/^(Il2Cpp)?Error/,"\x1B[0m\x1B[38;5;9mil2cpp\x1B[0m")?.replace(/\n    at (.+) \((.+):(.+)\)/,"\x1B[3m\x1B[2m")?.concat("\x1B[0m"),e}function qt(t){globalThis.console.log(`\x1B[38;5;11mil2cpp\x1B[0m: ${t}`)}function Li(t){globalThis.console.log(`\x1B[38;5;10mil2cpp\x1B[0m: ${t}`)}function Kt(t){globalThis.console.log(`\x1B[38;5;12mil2cpp\x1B[0m: ${t}`)}function Pa(t,e,n=Object.getOwnPropertyDescriptors(t)){for(let r in n)n[r]=e(t,r,n[r]);return Object.defineProperties(t,n),t}function Me(t,e,n,r){globalThis.Object.defineProperty(t,e,r?.(t,e,{get:n,configurable:!0})??{get:n,configurable:!0})}function Ai(t){let e=3735928559,n=1103547991;for(let r=0,o;r<t.length;r++)o=t.charCodeAt(r),e=Math.imul(e^o,2654435761),n=Math.imul(n^o,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&n)+(e>>>0)}function Ra(t){return Ai(t.enumerateExports().sort((e,n)=>e.name.localeCompare(n.name)).map(e=>e.name+e.address.sub(t.base)).join(""))}function w(t,e,n){let r=n.get;if(!r)throw new Error("@lazy can only be applied to getter accessors");return n.get=function(){let o=r.call(this);return Object.defineProperty(this,e,{value:o,configurable:n.configurable,enumerable:n.enumerable,writable:!1}),o},n}var Te=class{handle;constructor(e){e instanceof NativePointer?this.handle=e:this.handle=e.handle}equals(e){return this.handle.equals(e.handle)}isNull(){return this.handle.isNull()}asNullable(){return this.isNull()?null:this}};function ja(t){return Object.keys(t).reduce((e,n)=>(e[e[n]]=n,e),t)}NativePointer.prototype.offsetOf=function(t,e){e??=512;for(let n=0;e>0?n<e:n<-e;n++)if(t(e>0?this.add(n):this.sub(n)))return n;return null};function Zt(t){let e=[],n=Memory.alloc(Process.pointerSize),r=t(n);for(;!r.isNull();)e.push(r),r=t(n);return e}function yr(t){let e=Memory.alloc(Process.pointerSize),n=t(e);if(n.isNull())return[];let r=new Array(e.readInt());for(let o=0;o<r.length;o++)r[o]=n.add(o*Process.pointerSize).readPointer();return r}function Yt(t){return new Proxy(t,{cache:new Map,construct(e,n){let r=n[0].toUInt32();return this.cache.has(r)||this.cache.set(r,new e(n[0])),this.cache.get(r)}})}var Wt;(function(t){let e=/(6\d{3}|20\d{2}|\d)\.(\d)\.(\d{1,2})(?:[abcfp]|rc){0,2}\d?/;function n(s){return s?.match(e)?.[0]}t.find=n;function r(s,a){return i(s,a)>=0}t.gte=r;function o(s,a){return i(s,a)<0}t.lt=o;function i(s,a){let l=s.match(e),c=a.match(e);for(let u=1;u<=3;u++){let d=Number(l?.[u]??-1),h=Number(c?.[u]??-1);if(d>h)return 1;if(d<h)return-1}return 0}})(Wt||(Wt={}));var x;(function(t){function e(a=Process.pointerSize){return t.exports.alloc(a)}t.alloc=e;function n(a){return t.exports.free(a)}t.free=n;function r(a,l){switch(l.enumValue){case t.Type.Enum.BOOLEAN:return!!a.readS8();case t.Type.Enum.BYTE:return a.readS8();case t.Type.Enum.UBYTE:return a.readU8();case t.Type.Enum.SHORT:return a.readS16();case t.Type.Enum.USHORT:return a.readU16();case t.Type.Enum.INT:return a.readS32();case t.Type.Enum.UINT:return a.readU32();case t.Type.Enum.CHAR:return a.readU16();case t.Type.Enum.LONG:return a.readS64();case t.Type.Enum.ULONG:return a.readU64();case t.Type.Enum.FLOAT:return a.readFloat();case t.Type.Enum.DOUBLE:return a.readDouble();case t.Type.Enum.NINT:case t.Type.Enum.NUINT:return a.readPointer();case t.Type.Enum.POINTER:return new t.Pointer(a.readPointer(),l.class.baseType);case t.Type.Enum.VALUE_TYPE:return new t.ValueType(a,l);case t.Type.Enum.OBJECT:case t.Type.Enum.CLASS:return new t.Object(a.readPointer());case t.Type.Enum.GENERIC_INSTANCE:return l.class.isValueType?new t.ValueType(a,l):new t.Object(a.readPointer());case t.Type.Enum.STRING:return new t.String(a.readPointer());case t.Type.Enum.ARRAY:case t.Type.Enum.NARRAY:return new t.Array(a.readPointer())}G(`couldn't read the value from ${a} using an unhandled or unknown type ${l.name} (${l.enumValue}), please file an issue`)}t.read=r;function o(a,l,c){switch(c.enumValue){case t.Type.Enum.BOOLEAN:return a.writeS8(+l);case t.Type.Enum.BYTE:return a.writeS8(l);case t.Type.Enum.UBYTE:return a.writeU8(l);case t.Type.Enum.SHORT:return a.writeS16(l);case t.Type.Enum.USHORT:return a.writeU16(l);case t.Type.Enum.INT:return a.writeS32(l);case t.Type.Enum.UINT:return a.writeU32(l);case t.Type.Enum.CHAR:return a.writeU16(l);case t.Type.Enum.LONG:return a.writeS64(l);case t.Type.Enum.ULONG:return a.writeU64(l);case t.Type.Enum.FLOAT:return a.writeFloat(l);case t.Type.Enum.DOUBLE:return a.writeDouble(l);case t.Type.Enum.NINT:case t.Type.Enum.NUINT:case t.Type.Enum.POINTER:case t.Type.Enum.STRING:case t.Type.Enum.ARRAY:case t.Type.Enum.NARRAY:return a.writePointer(l);case t.Type.Enum.VALUE_TYPE:return Memory.copy(a,l,c.class.valueTypeSize),a;case t.Type.Enum.OBJECT:case t.Type.Enum.CLASS:case t.Type.Enum.GENERIC_INSTANCE:return l instanceof t.ValueType?(Memory.copy(a,l,c.class.valueTypeSize),a):a.writePointer(l)}G(`couldn't write value ${l} to ${a} using an unhandled or unknown type ${c.name} (${c.enumValue}), please file an issue`)}t.write=o;function i(a,l){if(globalThis.Array.isArray(a)){let c=Memory.alloc(l.class.valueTypeSize),u=l.class.fields.filter(d=>!d.isStatic);for(let d=0;d<u.length;d++){let h=i(a[d],u[d].type);o(c.add(u[d].offset).sub(t.Object.headerSize),h,u[d].type)}return new t.ValueType(c,l)}else if(a instanceof NativePointer){if(l.isByReference)return new t.Reference(a,l);switch(l.enumValue){case t.Type.Enum.POINTER:return new t.Pointer(a,l.class.baseType);case t.Type.Enum.STRING:return new t.String(a);case t.Type.Enum.CLASS:case t.Type.Enum.GENERIC_INSTANCE:case t.Type.Enum.OBJECT:return new t.Object(a);case t.Type.Enum.ARRAY:case t.Type.Enum.NARRAY:return new t.Array(a);default:return a}}else return l.enumValue==t.Type.Enum.BOOLEAN?!!a:l.enumValue==t.Type.Enum.VALUE_TYPE&&l.class.isEnum?i([a],l):a}t.fromFridaValue=i;function s(a){if(typeof a=="boolean")return+a;if(a instanceof t.ValueType){if(a.type.class.isEnum)return a.field("value__").value;{let l=a.type.class.fields.filter(c=>!c.isStatic).map(c=>s(c.bind(a).value));return l.length==0?[0]:l}}else return a}t.toFridaValue=s})(x||(x={}));var x;(function(t){Me(t,"module",()=>n()??G("Could not find IL2CPP module"));async function e(o=!1){let i=n()??await new Promise(s=>{let[a,l]=r(),c=setTimeout(()=>{qt(`after 10 seconds, IL2CPP module '${a}' has not been loaded yet, is the app running?`)},1e4),u=Process.attachModuleObserver({onAdded(d){(d.name==a||l&&d.name==l)&&(clearTimeout(c),setImmediate(()=>{s(d),u.detach()}))}})});return Reflect.defineProperty(t,"module",{value:i}),t.exports.getCorlib().isNull()?await new Promise(s=>{let a=setTimeout(()=>{t.exports.getCorlib().isNull()||(qt("resuming execution despite IL2CPP initialization not being captured in time, please open an issue as this is suboptimal"),l.detach(),s(!1))},1e3),l=Interceptor.attach(t.exports.initialize,{onEnter(){clearTimeout(a)},onLeave(){l.detach(),o?s(!0):setImmediate(()=>s(!1))}})}):!1}t.initialize=e;function n(){let[o,i]=r();return Process.findModuleByName(o)??Process.findModuleByName(i??o)??(Process.platform=="darwin"?Process.findModuleByAddress(DebugSymbol.fromName("il2cpp_init").address):void 0)??void 0}function r(){if(t.$config.moduleName)return[t.$config.moduleName];switch(Process.platform){case"linux":return[_r.apiLevel?"libil2cpp.so":"GameAssembly.so"];case"windows":return["GameAssembly.dll"];case"darwin":return["UnityFramework","GameAssembly.dylib"]}G(`${Process.platform} is not supported yet`)}})(x||(x={}));var x;(function(t){function e(n,r){let o=typeof n=="boolean"?t.corlib.class("System.Boolean"):typeof n=="number"?r??t.corlib.class("System.Int32"):n instanceof Int64?t.corlib.class("System.Int64"):n instanceof UInt64?t.corlib.class("System.UInt64"):n instanceof NativePointer?r??t.corlib.class("System.IntPtr"):n instanceof t.ValueType?n.type.class:r??G(`A class must be specified when constructing a nullable for value '${n}'`);o.isValueType==!1&&G(`Cannot create nullable value type out of a reference type '${o.type.name}'`);let i=t.corlib.class("System.Nullable`1").inflate(o),s=new t.ValueType(Memory.alloc(i.valueTypeSize),i.type);return(s.tryField("hasValue")??s.field("has_value")).value=n!=null,n!=null&&(s.field("value").value=n),s}t.nullable=e})(x||(x={}));var x;(function(t){async function e(n,r="bind"){let o=null;try{let i=await t.initialize(r=="main");if(r=="main"&&!i)return e(()=>t.mainThread.schedule(n),"free");t.currentThread==null&&(o=t.domain.attach()),r=="bind"&&o!=null&&Script.bindWeak(globalThis,()=>o?.detach());let s=n();return s instanceof Promise?await s:s}catch(i){return Script.nextTick(s=>{throw s},i),Promise.reject(i)}finally{r=="free"&&o!=null&&o.detach()}}t.perform=e})(x||(x={}));var x;(function(t){class e{#e={depth:0,buffer:[],history:new Set,flush:()=>{if(this.#e.depth==0){let i=`
${this.#e.buffer.join(`
`)}
`;if(this.#d)Kt(i);else{let s=Ai(i);this.#e.history.has(s)||(this.#e.history.add(s),Kt(i))}this.#e.buffer.length=0}}};#u=t.mainThread.id;#d=!1;#p;#l=[];#c;#t;#n;#r;#o;#i;#s;#a;constructor(i){this.#p=i}thread(i){return this.#u=i.id,this}verbose(i){return this.#d=i,this}domain(){return this.#c=t.domain,this}assemblies(...i){return this.#t=i,this}classes(...i){return this.#n=i,this}methods(...i){return this.#r=i,this}filterAssemblies(i){return this.#o=i,this}filterClasses(i){return this.#i=i,this}filterMethods(i){return this.#s=i,this}filterParameters(i){return this.#a=i,this}and(){let i=h=>{if(this.#a==null){this.#l.push(h);return}for(let p of h.parameters)if(this.#a(p)){this.#l.push(h);break}},s=h=>{for(let p of h)i(p)},a=h=>{if(this.#s==null){s(h.methods);return}for(let p of h.methods)this.#s(p)&&i(p)},l=h=>{for(let p of h)a(p)},c=h=>{if(this.#i==null){l(h.image.classes);return}for(let p of h.image.classes)this.#i(p)&&a(p)},u=h=>{for(let p of h)c(p)},d=h=>{if(this.#o==null){u(h.assemblies);return}for(let p of h.assemblies)this.#o(p)&&c(p)};return this.#r?s(this.#r):this.#n?l(this.#n):this.#t?u(this.#t):this.#c&&d(this.#c),this.#t=void 0,this.#n=void 0,this.#r=void 0,this.#o=void 0,this.#i=void 0,this.#s=void 0,this.#a=void 0,this}attach(){for(let i of this.#l)if(!i.virtualAddress.isNull())try{this.#p(i,this.#e,this.#u)}catch(s){switch(s.message){case/unable to intercept function at \w+; please file a bug/.exec(s.message)?.input:case"already replaced this function":break;default:throw s}}}}t.Tracer=e;function n(o=!1){let i=()=>(a,l,c)=>{let u=a.relativeVirtualAddress.toString(16).padStart(8,"0");Interceptor.attach(a.virtualAddress,{onEnter(){this.threadId==c&&l.buffer.push(`\x1B[2m0x${u}\x1B[0m ${"\u2502 ".repeat(l.depth++)}\u250C\u2500\x1B[35m${a.class.type.name}::\x1B[1m${a.name}\x1B[0m\x1B[0m`)},onLeave(){this.threadId==c&&(l.buffer.push(`\x1B[2m0x${u}\x1B[0m ${"\u2502 ".repeat(--l.depth)}\u2514\u2500\x1B[33m${a.class.type.name}::\x1B[1m${a.name}\x1B[0m\x1B[0m`),l.flush())}})},s=()=>(a,l,c)=>{let u=a.relativeVirtualAddress.toString(16).padStart(8,"0"),d=+!a.isStatic|+t.unityVersionIsBelow201830,h=function(...m){if(this.threadId==c){let g=a.isStatic?void 0:new t.Parameter("this",-1,a.class.type),y=g?[g].concat(a.parameters):a.parameters;l.buffer.push(`\x1B[2m0x${u}\x1B[0m ${"\u2502 ".repeat(l.depth++)}\u250C\u2500\x1B[35m${a.class.type.name}::\x1B[1m${a.name}\x1B[0m\x1B[0m(${y.map(E=>`\x1B[32m${E.name}\x1B[0m = \x1B[31m${t.fromFridaValue(m[E.position+d],E.type)}\x1B[0m`).join(", ")})`)}let f=a.nativeFunction(...m);return this.threadId==c&&(l.buffer.push(`\x1B[2m0x${u}\x1B[0m ${"\u2502 ".repeat(--l.depth)}\u2514\u2500\x1B[33m${a.class.type.name}::\x1B[1m${a.name}\x1B[0m\x1B[0m${f==null?"":` = \x1B[36m${t.fromFridaValue(f,a.returnType)}`}\x1B[0m`),l.flush()),f};a.revert();let p=new NativeCallback(h,a.returnType.fridaAlias,a.fridaSignature);Interceptor.replace(a.virtualAddress,p)};return new t.Tracer(o?s():i())}t.trace=n;function r(o){let i=t.domain.assemblies.flatMap(l=>l.image.classes.flatMap(c=>c.methods.filter(u=>!u.virtualAddress.isNull()))).sort((l,c)=>l.virtualAddress.compare(c.virtualAddress)),s=l=>{let c=0,u=i.length-1;for(;c<=u;){let d=Math.floor((c+u)/2),h=i[d].virtualAddress.compare(l);if(h==0)return i[d];h>0?u=d-1:c=d+1}return i[u]},a=()=>(l,c,u)=>{Interceptor.attach(l.virtualAddress,function(){if(this.threadId==u){let d=globalThis.Thread.backtrace(this.context,o);d.unshift(l.virtualAddress);for(let h of d)if(h.compare(t.module.base)>0&&h.compare(t.module.base.add(t.module.size))<0){let p=s(h);if(p){let m=h.sub(p.virtualAddress);m.compare(4095)<0&&c.buffer.push(`\x1B[2m0x${p.relativeVirtualAddress.toString(16).padStart(8,"0")}\x1B[0m\x1B[2m+0x${m.toString(16).padStart(3,"0")}\x1B[0m ${p.class.type.name}::\x1B[1m${p.name}\x1B[0m`)}}c.flush()}})};return new t.Tracer(a())}t.backtrace=r})(x||(x={}));var x;(function(t){class e extends Te{static get headerSize(){return t.corlib.class("System.Array").instanceSize}get elements(){let o=t.string("vfsfitvnm").object.method("ToCharArray",0).invoke(),i=Memory.scanSync(o.handle,255,"76 00 66 00 73 00 66 00 69 00 74 00 76 00 6e 00 6d 00")[0]?.address?.sub(o.handle)??G("couldn't find the elements offset in the native array struct");return Me(t.Array.prototype,"elements",function(){return new t.Pointer(this.handle.add(i),this.elementType)},w),this.elements}get elementSize(){return this.elementType.class.arrayElementSize}get elementType(){return this.object.class.type.class.baseType}get length(){return t.exports.arrayGetLength(this)}get object(){return new t.Object(this)}get(o){return(o<0||o>=this.length)&&G(`cannot get element at index ${o} as the array length is ${this.length}`),this.elements.get(o)}set(o,i){(o<0||o>=this.length)&&G(`cannot set element at index ${o} as the array length is ${this.length}`),this.elements.set(o,i)}toString(){return this.isNull()?"null":`[${this.elements.read(this.length,0)}]`}*[Symbol.iterator](){for(let o=0;o<this.length;o++)yield this.elements.get(o)}}T([w],e.prototype,"elementSize",null),T([w],e.prototype,"elementType",null),T([w],e.prototype,"length",null),T([w],e.prototype,"object",null),T([w],e,"headerSize",null),t.Array=e;function n(r,o){let i=typeof o=="number"?o:o.length,s=new t.Array(t.exports.arrayNew(r,i));return globalThis.Array.isArray(o)&&s.elements.write(o),s}t.array=n})(x||(x={}));var x;(function(t){let e=class extends Te{get image(){if(t.exports.assemblyGetImage.isNull()){let r=this.object.tryMethod("GetType",1)?.invoke(t.string("<Module>"))?.asNullable()?.tryMethod("get_Module")?.invoke()??this.object.tryMethod("GetModules",1)?.invoke(!1)?.get(0)??G(`couldn't find the runtime module object of assembly ${this.name}`);return new t.Image(r.field("_impl").value)}return new t.Image(t.exports.assemblyGetImage(this))}get name(){return this.image.name.replace(".dll","")}get object(){for(let r of t.domain.object.method("GetAssemblies",1).invoke(!1))if(r.field("_mono_assembly").value.equals(this))return r;G("couldn't find the object of the native assembly struct")}};T([w],e.prototype,"name",null),T([w],e.prototype,"object",null),e=T([Yt],e),t.Assembly=e})(x||(x={}));var x;(function(t){let e=class extends Te{get actualInstanceSize(){let r=t.corlib.class("System.String"),o=r.handle.offsetOf(i=>i.readInt()==r.instanceSize-2)??G("couldn't find the actual instance size offset in the native class struct");return Me(t.Class.prototype,"actualInstanceSize",function(){return this.handle.add(o).readS32()},w),this.actualInstanceSize}get arrayClass(){return new t.Class(t.exports.classGetArrayClass(this,1))}get arrayElementSize(){return t.exports.classGetArrayElementSize(this)}get assemblyName(){return t.exports.classGetAssemblyName(this).readUtf8String().replace(".dll","")}get declaringClass(){return new t.Class(t.exports.classGetDeclaringType(this)).asNullable()}get baseType(){return new t.Type(t.exports.classGetBaseType(this)).asNullable()}get elementClass(){return new t.Class(t.exports.classGetElementClass(this)).asNullable()}get fields(){return Zt(r=>t.exports.classGetFields(this,r)).map(r=>new t.Field(r))}get flags(){return t.exports.classGetFlags(this)}get fullName(){return this.namespace?`${this.namespace}.${this.name}`:this.name}get genericClass(){let r=this.image.tryClass(this.fullName)?.asNullable();return r?.equals(this)?null:r??null}get generics(){if(!this.isGeneric&&!this.isInflated)return[];let r=this.type.object.method("GetGenericArguments").invoke();return globalThis.Array.from(r).map(o=>new t.Class(t.exports.classFromObject(o)))}get hasReferences(){return!!t.exports.classHasReferences(this)}get hasStaticConstructor(){let r=this.tryMethod(".cctor");return r!=null&&!r.virtualAddress.isNull()}get image(){return new t.Image(t.exports.classGetImage(this))}get instanceSize(){return t.exports.classGetInstanceSize(this)}get isAbstract(){return!!t.exports.classIsAbstract(this)}get isBlittable(){return!!t.exports.classIsBlittable(this)}get isEnum(){return!!t.exports.classIsEnum(this)}get isGeneric(){return!!t.exports.classIsGeneric(this)}get isInflated(){return!!t.exports.classIsInflated(this)}get isInterface(){return!!t.exports.classIsInterface(this)}get isStruct(){return this.isValueType&&!this.isEnum}get isValueType(){return!!t.exports.classIsValueType(this)}get interfaces(){return Zt(r=>t.exports.classGetInterfaces(this,r)).map(r=>new t.Class(r))}get methods(){return Zt(r=>t.exports.classGetMethods(this,r)).map(r=>new t.Method(r))}get name(){return t.exports.classGetName(this).readUtf8String()}get namespace(){return t.exports.classGetNamespace(this).readUtf8String()||void 0}get nestedClasses(){return Zt(r=>t.exports.classGetNestedClasses(this,r)).map(r=>new t.Class(r))}get parent(){return new t.Class(t.exports.classGetParent(this)).asNullable()}get pointerClass(){return new t.Class(t.exports.classFromObject(this.type.object.method("MakePointerType").invoke()))}get rank(){let r=0,o=this.name;for(let i=this.name.length-1;i>0;i--){let s=o[i];if(s=="]")r++;else{if(s=="["||r==0)break;if(s==",")r++;else break}}return r}get staticFieldsData(){return t.exports.classGetStaticFieldData(this)}get valueTypeSize(){return t.exports.classGetValueTypeSize(this,NULL)}get type(){return new t.Type(t.exports.classGetType(this))}alloc(){return new t.Object(t.exports.objectNew(this))}field(r){return this.tryField(r)??G(`couldn't find field ${r} in class ${this.type.name}`)}*hierarchy(r){let o=r?.includeCurrent??!0?this:this.parent;for(;o;)yield o,o=o.parent}inflate(...r){this.isGeneric||G(`cannot inflate class ${this.type.name} as it has no generic parameters`),this.generics.length!=r.length&&G(`cannot inflate class ${this.type.name} as it needs ${this.generics.length} generic parameter(s), not ${r.length}`);let o=r.map(a=>a.type.object),i=t.array(t.corlib.class("System.Type"),o),s=this.type.object.method("MakeGenericType",1).invoke(i);return new t.Class(t.exports.classFromObject(s))}initialize(){return t.exports.classInitialize(this),this}isAssignableFrom(r){return!!t.exports.classIsAssignableFrom(this,r)}isSubclassOf(r,o){return!!t.exports.classIsSubclassOf(this,r,+o)}method(r,o=-1){return this.tryMethod(r,o)??G(`couldn't find method ${r} in class ${this.type.name}`)}nested(r){return this.tryNested(r)??G(`couldn't find nested class ${r} in class ${this.type.name}`)}new(){let r=this.alloc(),o=Memory.alloc(Process.pointerSize);t.exports.objectInitialize(r,o);let i=o.readPointer();return i.isNull()||G(new t.Object(i).toString()),r}tryField(r){return new t.Field(t.exports.classGetFieldFromName(this,Memory.allocUtf8String(r))).asNullable()}tryMethod(r,o=-1){return new t.Method(t.exports.classGetMethodFromName(this,Memory.allocUtf8String(r),o)).asNullable()}tryNested(r){return this.nestedClasses.find(o=>o.name==r)}toString(){let r=[this.parent].concat(this.interfaces);return`// ${this.assemblyName}
${this.isEnum?"enum":this.isStruct?"struct":this.isInterface?"interface":"class"} ${this.type.name}${r?` : ${r.map(o=>o?.type.name).join(", ")}`:""}
{
    ${this.fields.join(`
    `)}
    ${this.methods.join(`
    `)}
}`}static enumerate(r){let o=new NativeCallback(i=>r(new t.Class(i)),"void",["pointer","pointer"]);return t.exports.classForEach(o,NULL)}};T([w],e.prototype,"arrayClass",null),T([w],e.prototype,"arrayElementSize",null),T([w],e.prototype,"assemblyName",null),T([w],e.prototype,"declaringClass",null),T([w],e.prototype,"baseType",null),T([w],e.prototype,"elementClass",null),T([w],e.prototype,"fields",null),T([w],e.prototype,"flags",null),T([w],e.prototype,"fullName",null),T([w],e.prototype,"generics",null),T([w],e.prototype,"hasReferences",null),T([w],e.prototype,"hasStaticConstructor",null),T([w],e.prototype,"image",null),T([w],e.prototype,"instanceSize",null),T([w],e.prototype,"isAbstract",null),T([w],e.prototype,"isBlittable",null),T([w],e.prototype,"isEnum",null),T([w],e.prototype,"isGeneric",null),T([w],e.prototype,"isInflated",null),T([w],e.prototype,"isInterface",null),T([w],e.prototype,"isValueType",null),T([w],e.prototype,"interfaces",null),T([w],e.prototype,"methods",null),T([w],e.prototype,"name",null),T([w],e.prototype,"namespace",null),T([w],e.prototype,"nestedClasses",null),T([w],e.prototype,"parent",null),T([w],e.prototype,"pointerClass",null),T([w],e.prototype,"rank",null),T([w],e.prototype,"staticFieldsData",null),T([w],e.prototype,"valueTypeSize",null),T([w],e.prototype,"type",null),e=T([Yt],e),t.Class=e})(x||(x={}));var x;(function(t){function e(n,r){let o=t.corlib.class("System.Delegate"),i=t.corlib.class("System.MulticastDelegate");o.isAssignableFrom(n)||G(`cannot create a delegate for ${n.type.name} as it's a non-delegate class`),(n.equals(o)||n.equals(i))&&G(`cannot create a delegate for neither ${o.type.name} nor ${i.type.name}, use a subclass instead`);let s=n.alloc(),a=s.handle.toString(),l=s.tryMethod("Invoke")??G(`cannot create a delegate for ${n.type.name}, there is no Invoke method`);s.method(".ctor").invoke(s,l.handle);let c=l.wrap(r);return s.field("method_ptr").value=c,s.field("invoke_impl").value=c,t._callbacksToKeepAlive[a]=c,s}t.delegate=e,t._callbacksToKeepAlive={}})(x||(x={}));var x;(function(t){let e=class extends Te{get assemblies(){let r=yr(o=>t.exports.domainGetAssemblies(this,o));if(r.length==0){let o=this.object.method("GetAssemblies").overload().invoke();r=globalThis.Array.from(o).map(i=>i.field("_mono_assembly").value)}return r.map(o=>new t.Assembly(o))}get object(){return t.corlib.class("System.AppDomain").method("get_CurrentDomain").invoke()}assembly(r){return this.tryAssembly(r)??G(`couldn't find assembly ${r}`)}attach(){return new t.Thread(t.exports.threadAttach(this))}tryAssembly(r){return new t.Assembly(t.exports.domainGetAssemblyFromName(this,Memory.allocUtf8String(r))).asNullable()}};T([w],e.prototype,"assemblies",null),T([w],e.prototype,"object",null),e=T([Yt],e),t.Domain=e,Me(t,"domain",()=>new t.Domain(t.exports.domainGet()),w)})(x||(x={}));var x;(function(t){class e extends Te{get class(){return new t.Class(t.exports.fieldGetClass(this))}get flags(){return t.exports.fieldGetFlags(this)}get isLiteral(){return(this.flags&64)!=0}get isStatic(){return(this.flags&16)!=0}get isThreadStatic(){let r=t.corlib.class("System.AppDomain").field("type_resolve_in_progress").offset;return Me(t.Field.prototype,"isThreadStatic",function(){return this.offset==r},w),this.isThreadStatic}get modifier(){switch(this.flags&7){case 1:return"private";case 2:return"private protected";case 3:return"internal";case 4:return"protected";case 5:return"protected internal";case 6:return"public"}}get name(){return t.exports.fieldGetName(this).readUtf8String()}get offset(){return t.exports.fieldGetOffset(this)}get type(){return new t.Type(t.exports.fieldGetType(this))}get value(){this.isStatic||G(`cannot access instance field ${this.class.type.name}::${this.name} from a class, use an object instead`);let r=Memory.alloc(Process.pointerSize);return t.exports.fieldGetStaticValue(this.handle,r),t.read(r,this.type)}set value(r){this.isStatic||G(`cannot access instance field ${this.class.type.name}::${this.name} from a class, use an object instead`),(this.isThreadStatic||this.isLiteral)&&G(`cannot write the value of field ${this.name} as it's thread static or literal`);let o=r instanceof t.Object&&this.type.class.isValueType?r.unbox():r instanceof Te?r.handle:r instanceof NativePointer?r:t.write(Memory.alloc(this.type.class.valueTypeSize),r,this.type);t.exports.fieldSetStaticValue(this.handle,o)}toString(){return`${this.isThreadStatic?"[ThreadStatic] ":""}${this.isStatic?"static ":""}${this.type.name} ${this.name}${this.isLiteral?` = ${this.type.class.isEnum?t.read(this.value.handle,this.type.class.baseType):this.value}`:""};${this.isThreadStatic||this.isLiteral?"":` // 0x${this.offset.toString(16)}`}`}bind(r){this.isStatic&&G(`cannot bind static field ${this.class.type.name}::${this.name} to an instance`);let o=this.offset-(r instanceof t.ValueType?t.Object.headerSize:0);return new Proxy(this,{get(i,s){return s=="value"?t.read(r.handle.add(o),i.type):Reflect.get(i,s)},set(i,s,a){return s=="value"?(t.write(r.handle.add(o),a,i.type),!0):Reflect.set(i,s,a)}})}}T([w],e.prototype,"class",null),T([w],e.prototype,"flags",null),T([w],e.prototype,"isLiteral",null),T([w],e.prototype,"isStatic",null),T([w],e.prototype,"isThreadStatic",null),T([w],e.prototype,"modifier",null),T([w],e.prototype,"name",null),T([w],e.prototype,"offset",null),T([w],e.prototype,"type",null),t.Field=e})(x||(x={}));var x;(function(t){class e{handle;constructor(r){this.handle=r}get target(){return new t.Object(t.exports.gcHandleGetTarget(this.handle)).asNullable()}free(){return t.exports.gcHandleFree(this.handle)}}t.GCHandle=e})(x||(x={}));var x;(function(t){let e=class extends Te{get assembly(){return new t.Assembly(t.exports.imageGetAssembly(this))}get classCount(){return t.unityVersionIsBelow201830?this.classes.length:t.exports.imageGetClassCount(this)}get classes(){if(t.unityVersionIsBelow201830){let r=this.assembly.object.method("GetTypes").invoke(!1),o=globalThis.Array.from(r,s=>new t.Class(t.exports.classFromObject(s))),i=this.tryClass("<Module>");return i&&o.unshift(i),o}else return globalThis.Array.from(globalThis.Array(this.classCount),(r,o)=>new t.Class(t.exports.imageGetClass(this,o)))}get name(){return t.exports.imageGetName(this).readUtf8String()}class(r){return this.tryClass(r)??G(`couldn't find class ${r} in assembly ${this.name}`)}tryClass(r){let o=r.lastIndexOf("."),i=Memory.allocUtf8String(o==-1?"":r.slice(0,o)),s=Memory.allocUtf8String(r.slice(o+1));return new t.Class(t.exports.classFromName(this,i,s)).asNullable()}};T([w],e.prototype,"assembly",null),T([w],e.prototype,"classCount",null),T([w],e.prototype,"classes",null),T([w],e.prototype,"name",null),e=T([Yt],e),t.Image=e,Me(t,"corlib",()=>new t.Image(t.exports.getCorlib()),w)})(x||(x={}));var x;(function(t){class e extends Te{static capture(){return new t.MemorySnapshot}constructor(o=t.exports.memorySnapshotCapture()){super(o)}get classes(){return Zt(o=>t.exports.memorySnapshotGetClasses(this,o)).map(o=>new t.Class(o))}get objects(){return yr(o=>t.exports.memorySnapshotGetObjects(this,o)).filter(o=>!o.isNull()).map(o=>new t.Object(o))}free(){t.exports.memorySnapshotFree(this)}}T([w],e.prototype,"classes",null),T([w],e.prototype,"objects",null),t.MemorySnapshot=e;function n(r){let o=t.MemorySnapshot.capture(),i=r(o);return o.free(),i}t.memorySnapshot=n})(x||(x={}));var x;(function(t){class e extends Te{get class(){return new t.Class(t.exports.methodGetClass(this))}get flags(){return t.exports.methodGetFlags(this,NULL)}get implementationFlags(){let o=Memory.alloc(Process.pointerSize);return t.exports.methodGetFlags(this,o),o.readU32()}get fridaSignature(){let o=[];for(let i of this.parameters)o.push(i.type.fridaAlias);return(!this.isStatic||t.unityVersionIsBelow201830)&&o.unshift("pointer"),this.isInflated&&o.push("pointer"),o}get generics(){if(!this.isGeneric)return[];let o=this.object.method("GetGenericArguments").invoke();return globalThis.Array.from(o).map(i=>new t.Class(t.exports.classFromObject(i)))}get isExternal(){return(this.implementationFlags&4096)!=0}get isGeneric(){return!!t.exports.methodIsGeneric(this)}get isInflated(){return!!t.exports.methodIsInflated(this)}get isStatic(){return!t.exports.methodIsInstance(this)}get isSynchronized(){return(this.implementationFlags&32)!=0}get modifier(){switch(this.flags&7){case 1:return"private";case 2:return"private protected";case 3:return"internal";case 4:return"protected";case 5:return"protected internal";case 6:return"public"}}get name(){return t.exports.methodGetName(this).readUtf8String()}get nativeFunction(){return new NativeFunction(this.virtualAddress,this.returnType.fridaAlias,this.fridaSignature)}get object(){return new t.Object(t.exports.methodGetObject(this,NULL))}get parameterCount(){return t.exports.methodGetParameterCount(this)}get parameters(){return globalThis.Array.from(globalThis.Array(this.parameterCount),(o,i)=>{let s=t.exports.methodGetParameterName(this,i).readUtf8String(),a=t.exports.methodGetParameterType(this,i);return new t.Parameter(s,i,new t.Type(a))})}get relativeVirtualAddress(){return this.virtualAddress.sub(t.module.base)}get returnType(){return new t.Type(t.exports.methodGetReturnType(this))}get virtualAddress(){let o=t.corlib.class("System.Reflection.Module").initialize().field("FilterTypeName").value,i=o.field("method_ptr").value,a=o.field("method").value.offsetOf(l=>l.readPointer().equals(i))??G("couldn't find the virtual address offset in the native method struct");return Me(t.Method.prototype,"virtualAddress",function(){return this.handle.add(a).readPointer()},w),t.corlib.class("System.Reflection.Module").method(".cctor").invoke(),this.virtualAddress}set implementation(o){try{Interceptor.replace(this.virtualAddress,this.wrap(o))}catch(i){switch(i.message){case"access violation accessing 0x0":G(`couldn't set implementation for method ${this.name} as it has a NULL virtual address`);case/unable to intercept function at \w+; please file a bug/.exec(i.message)?.input:qt(`couldn't set implementation for method ${this.name} as it may be a thunk`);break;case"already replaced this function":qt(`couldn't set implementation for method ${this.name} as it has already been replaced by a thunk`);break;default:throw i}}}inflate(...o){if(!this.isGeneric||this.generics.length!=o.length){for(let l of this.overloads())if(l.isGeneric&&l.generics.length==o.length)return l.inflate(...o);G(`could not find inflatable signature of method ${this.name} with ${o.length} generic parameter(s)`)}let i=o.map(l=>l.type.object),s=t.array(t.corlib.class("System.Type"),i),a=this.object.method("MakeGenericMethod",1).invoke(s);return new t.Method(a.field("mhandle").value)}invoke(...o){return this.isStatic||G(`cannot invoke non-static method ${this.name} as it must be invoked throught a Il2Cpp.Object, not a Il2Cpp.Class`),this.invokeRaw(NULL,...o)}invokeRaw(o,...i){let s=i.map(t.toFridaValue);(!this.isStatic||t.unityVersionIsBelow201830)&&s.unshift(o),this.isInflated&&s.push(this.handle);try{let a=this.nativeFunction(...s);return t.fromFridaValue(a,this.returnType)}catch(a){switch(a==null&&G("an unexpected native invocation exception occurred, this is due to parameter types mismatch"),a.message){case"bad argument count":G(`couldn't invoke method ${this.name} as it needs ${this.parameterCount} parameter(s), not ${i.length}`);case"expected a pointer":case"expected number":case"expected array with fields":G(`couldn't invoke method ${this.name} using incorrect parameter types`)}throw a}}overload(...o){return this.tryOverload(...o)??G(`couldn't find overloaded method ${this.name}(${o.map(s=>s instanceof t.Class?s.type.name:s)})`)}*overloads(){for(let o of this.class.hierarchy())for(let i of o.methods)this.name==i.name&&(yield i)}parameter(o){return this.tryParameter(o)??G(`couldn't find parameter ${o} in method ${this.name}`)}revert(){Interceptor.revert(this.virtualAddress),Interceptor.flush()}tryOverload(...o){let i=o.length*1,s=o.length*2,a;e:for(let l of this.overloads()){if(l.parameterCount!=o.length)continue;let c=0,u=0;for(let d of l.parameters){let h=o[u];if(h instanceof t.Class)if(d.type.is(h.type))c+=2;else if(d.type.class.isAssignableFrom(h))c+=1;else continue e;else if(d.type.name==h)c+=2;else continue e;u++}if(!(c<i)){if(c==s)return l;if(a==null||c>a[0])a=[c,l];else if(c==a[0]){let d=0;for(let h of a[1].parameters){if(h.type.class.isAssignableFrom(l.parameters[d].type.class)){a=[c,l];continue e}d++}}}}return a?.[1]}tryParameter(o){return this.parameters.find(i=>i.name==o)}toString(){return`${this.isStatic?"static ":""}${this.returnType.name} ${this.name}${this.generics.length>0?`<${this.generics.map(o=>o.type.name).join(",")}>`:""}(${this.parameters.join(", ")});${this.virtualAddress.isNull()?"":` // 0x${this.relativeVirtualAddress.toString(16).padStart(8,"0")}`}`}bind(o){return this.isStatic&&G(`cannot bind static method ${this.class.type.name}::${this.name} to an instance`),new Proxy(this,{get(i,s,a){switch(s){case"invoke":let l=o instanceof t.ValueType?i.class.isValueType?o.handle.sub(n()?t.Object.headerSize:0):G(`cannot invoke method ${i.class.type.name}::${i.name} against a value type, you must box it first`):i.class.isValueType?o.handle.add(n()?0:t.Object.headerSize):o.handle;return i.invokeRaw.bind(i,l);case"overloads":return function*(){for(let u of i[s]())u.isStatic||(yield u)};case"inflate":case"overload":case"tryOverload":let c=Reflect.get(i,s).bind(a);return function(...u){return c(...u)?.bind(o)}}return Reflect.get(i,s)}})}wrap(o){let i=+!this.isStatic|+t.unityVersionIsBelow201830;return new NativeCallback((...s)=>{let a=this.isStatic?this.class:this.class.isValueType?new t.ValueType(s[0].add(n()?t.Object.headerSize:0),this.class.type):new t.Object(s[0]),l=this.parameters.map((u,d)=>t.fromFridaValue(s[d+i],u.type)),c=o.call(a,...l);return t.toFridaValue(c)},this.returnType.fridaAlias,this.fridaSignature)}}T([w],e.prototype,"class",null),T([w],e.prototype,"flags",null),T([w],e.prototype,"implementationFlags",null),T([w],e.prototype,"fridaSignature",null),T([w],e.prototype,"generics",null),T([w],e.prototype,"isExternal",null),T([w],e.prototype,"isGeneric",null),T([w],e.prototype,"isInflated",null),T([w],e.prototype,"isStatic",null),T([w],e.prototype,"isSynchronized",null),T([w],e.prototype,"modifier",null),T([w],e.prototype,"name",null),T([w],e.prototype,"nativeFunction",null),T([w],e.prototype,"object",null),T([w],e.prototype,"parameterCount",null),T([w],e.prototype,"parameters",null),T([w],e.prototype,"relativeVirtualAddress",null),T([w],e.prototype,"returnType",null),t.Method=e;let n=()=>{let r=t.corlib.class("System.Int64").alloc();r.field("m_value").value=3735928559;let o=r.method("Equals",1).overload(r.class).invokeRaw(r,3735928559);return(n=()=>o)()}})(x||(x={}));var x;(function(t){class e extends Te{static get headerSize(){return t.corlib.class("System.Object").instanceSize}get base(){return this.class.parent==null&&G(`class ${this.class.type.name} has no parent`),new Proxy(this,{get(r,o,i){return o=="class"?Reflect.get(r,o).parent:o=="base"?Reflect.getOwnPropertyDescriptor(t.Object.prototype,o).get.bind(i)():Reflect.get(r,o)}})}get class(){return new t.Class(t.exports.objectGetClass(this))}get monitor(){return new t.Object.Monitor(this)}get size(){return t.exports.objectGetSize(this)}field(r){return this.tryField(r)??G(`couldn't find non-static field ${r} in hierarchy of class ${this.class.type.name}`)}method(r,o=-1){return this.tryMethod(r,o)??G(`couldn't find non-static method ${r} in hierarchy of class ${this.class.type.name}`)}ref(r){return new t.GCHandle(t.exports.gcHandleNew(this,+r))}virtualMethod(r){return new t.Method(t.exports.objectGetVirtualMethod(this,r)).bind(this)}tryField(r){let o=this.class.tryField(r);if(o?.isStatic){for(let i of this.class.hierarchy({includeCurrent:!1}))for(let s of i.fields)if(s.name==r&&!s.isStatic)return s.bind(this);return}return o?.bind(this)}tryMethod(r,o=-1){let i=this.class.tryMethod(r,o);if(i?.isStatic){for(let s of this.class.hierarchy())for(let a of s.methods)if(a.name==r&&!a.isStatic&&(o<0||a.parameterCount==o))return a.bind(this);return}return i?.bind(this)}toString(){return this.isNull()?"null":this.method("ToString",0).invoke().content??"null"}unbox(){return this.class.isValueType?new t.ValueType(t.exports.objectUnbox(this),this.class.type):G(`couldn't unbox instances of ${this.class.type.name} as they are not value types`)}weakRef(r){return new t.GCHandle(t.exports.gcHandleNewWeakRef(this,+r))}}T([w],e.prototype,"class",null),T([w],e.prototype,"size",null),T([w],e,"headerSize",null),t.Object=e,(function(n){class r{handle;constructor(i){this.handle=i}enter(){return t.exports.monitorEnter(this.handle)}exit(){return t.exports.monitorExit(this.handle)}pulse(){return t.exports.monitorPulse(this.handle)}pulseAll(){return t.exports.monitorPulseAll(this.handle)}tryEnter(i){return!!t.exports.monitorTryEnter(this.handle,i)}tryWait(i){return!!t.exports.monitorTryWait(this.handle,i)}wait(){return t.exports.monitorWait(this.handle)}}n.Monitor=r})(e=t.Object||(t.Object={}))})(x||(x={}));var x;(function(t){class e{name;position;type;constructor(r,o,i){this.name=r,this.position=o,this.type=i}toString(){return`${this.type.name} ${this.name}`}}t.Parameter=e})(x||(x={}));var x;(function(t){class e extends Te{type;constructor(r,o){super(r),this.type=o}get(r){return t.read(this.handle.add(r*this.type.class.arrayElementSize),this.type)}read(r,o=0){let i=new globalThis.Array(r);for(let s=0;s<r;s++)i[s]=this.get(s+o);return i}set(r,o){t.write(this.handle.add(r*this.type.class.arrayElementSize),o,this.type)}toString(){return this.handle.toString()}write(r,o=0){for(let i=0;i<r.length;i++)this.set(i+o,r[i])}}t.Pointer=e})(x||(x={}));var x;(function(t){class e extends Te{type;constructor(o,i){super(o),this.type=i}get value(){return t.read(this.handle,this.type)}set value(o){t.write(this.handle,o,this.type)}toString(){return this.isNull()?"null":`->${this.value}`}}t.Reference=e;function n(r,o){let i=Memory.alloc(Process.pointerSize);switch(typeof r){case"boolean":return new t.Reference(i.writeS8(+r),t.corlib.class("System.Boolean").type);case"number":switch(o?.enumValue){case t.Type.Enum.UBYTE:return new t.Reference(i.writeU8(r),o);case t.Type.Enum.BYTE:return new t.Reference(i.writeS8(r),o);case t.Type.Enum.CHAR:case t.Type.Enum.USHORT:return new t.Reference(i.writeU16(r),o);case t.Type.Enum.SHORT:return new t.Reference(i.writeS16(r),o);case t.Type.Enum.UINT:return new t.Reference(i.writeU32(r),o);case t.Type.Enum.INT:return new t.Reference(i.writeS32(r),o);case t.Type.Enum.ULONG:return new t.Reference(i.writeU64(r),o);case t.Type.Enum.LONG:return new t.Reference(i.writeS64(r),o);case t.Type.Enum.FLOAT:return new t.Reference(i.writeFloat(r),o);case t.Type.Enum.DOUBLE:return new t.Reference(i.writeDouble(r),o)}case"object":if(r instanceof t.ValueType||r instanceof t.Pointer)return new t.Reference(r.handle,r.type);if(r instanceof t.Object)return new t.Reference(i.writePointer(r),r.class.type);if(r instanceof t.String||r instanceof t.Array)return new t.Reference(i.writePointer(r),r.object.class.type);if(r instanceof NativePointer)switch(o?.enumValue){case t.Type.Enum.NUINT:case t.Type.Enum.NINT:return new t.Reference(i.writePointer(r),o)}else{if(r instanceof Int64)return new t.Reference(i.writeS64(r),t.corlib.class("System.Int64").type);if(r instanceof UInt64)return new t.Reference(i.writeU64(r),t.corlib.class("System.UInt64").type)}default:G(`couldn't create a reference to ${r} using an unhandled type ${o?.name}`)}}t.reference=n})(x||(x={}));var x;(function(t){class e extends Te{get content(){return t.exports.stringGetChars(this).readUtf16String(this.length)}set content(o){let i=t.string("vfsfitvnm").handle.offsetOf(s=>s.readInt()==9)??G("couldn't find the length offset in the native string struct");globalThis.Object.defineProperty(t.String.prototype,"content",{set(s){t.exports.stringGetChars(this).writeUtf16String(s??""),this.handle.add(i).writeS32(s?.length??0)}}),this.content=o}get length(){return t.exports.stringGetLength(this)}get object(){return new t.Object(this)}toString(){return this.isNull()?"null":`"${this.content}"`}}t.String=e;function n(r){return new t.String(t.exports.stringNew(Memory.allocUtf8String(r??"")))}t.string=n})(x||(x={}));var x;(function(t){class e extends Te{get id(){let r=function(){return this.internal.field("thread_id").value.toNumber()};if(Process.platform!="windows"){let o=Process.getCurrentThreadId(),s=ptr(r.apply(t.currentThread)).offsetOf(l=>l.readS32()==o,1024)??G("couldn't find the offset for determining the kernel id of a posix thread"),a=r;r=function(){return ptr(a.apply(this)).add(s).readS32()}}return Me(t.Thread.prototype,"id",r,w),this.id}get internal(){return this.object.tryField("internal_thread")?.value??this.object}get isFinalizer(){return!t.exports.threadIsVm(this)}get managedId(){return this.object.method("get_ManagedThreadId").invoke()}get object(){return new t.Object(this)}get staticData(){return this.internal.field("static_data").value}get synchronizationContext(){let o=(this.object.tryMethod("GetMutableExecutionContext")??this.object.method("get_ExecutionContext")).invoke();return(o.tryField("_syncContext")?.value??o.tryMethod("get_SynchronizationContext")?.invoke()??this.tryLocalValue(t.corlib.class("System.Threading.SynchronizationContext")))?.asNullable()??null}detach(){return t.exports.threadDetach(this)}schedule(r){let o=this.synchronizationContext?.tryMethod("Post");return o==null?Process.runOnThread(this.id,r):new Promise(i=>{let s=t.delegate(t.corlib.class("System.Threading.SendOrPostCallback"),()=>{let a=r();setImmediate(()=>i(a))});Script.bindWeak(globalThis,()=>{s.field("method_ptr").value=s.field("invoke_impl").value=t.exports.domainGet}),o.invoke(s,NULL)})}tryLocalValue(r){for(let o=0;o<16;o++){let i=this.staticData.add(o*Process.pointerSize).readPointer();if(!i.isNull()){let s=new t.Object(i.readPointer()).asNullable();if(s?.class?.isSubclassOf(r,!1))return s}}}}T([w],e.prototype,"internal",null),T([w],e.prototype,"isFinalizer",null),T([w],e.prototype,"managedId",null),T([w],e.prototype,"object",null),T([w],e.prototype,"staticData",null),T([w],e.prototype,"synchronizationContext",null),t.Thread=e,Me(t,"attachedThreads",()=>{if(t.exports.threadGetAttachedThreads.isNull()){let n=t.currentThread?.handle??G("Current thread is not attached to IL2CPP"),r=n.toMatchPattern(),o=[];for(let i of Process.enumerateRanges("rw-"))if(i.file==null){let s=Memory.scanSync(i.base,i.size,r);if(s.length==1){for(;;){let a=s[0].address.sub(s[0].size*o.length).readPointer();if(a.isNull()||!a.readPointer().equals(n.readPointer()))break;o.unshift(new t.Thread(a))}break}}return o}return yr(t.exports.threadGetAttachedThreads).map(n=>new t.Thread(n))}),Me(t,"currentThread",()=>new t.Thread(t.exports.threadGetCurrent()).asNullable()),Me(t,"mainThread",()=>t.attachedThreads[0])})(x||(x={}));var x;(function(t){let e=class extends Te{static get Enum(){let r=(i,s=a=>a)=>s(t.corlib.class(i)).type.enumValue,o={VOID:r("System.Void"),BOOLEAN:r("System.Boolean"),CHAR:r("System.Char"),BYTE:r("System.SByte"),UBYTE:r("System.Byte"),SHORT:r("System.Int16"),USHORT:r("System.UInt16"),INT:r("System.Int32"),UINT:r("System.UInt32"),LONG:r("System.Int64"),ULONG:r("System.UInt64"),NINT:r("System.IntPtr"),NUINT:r("System.UIntPtr"),FLOAT:r("System.Single"),DOUBLE:r("System.Double"),POINTER:r("System.IntPtr",i=>i.field("m_value")),VALUE_TYPE:r("System.Decimal"),OBJECT:r("System.Object"),STRING:r("System.String"),CLASS:r("System.Array"),ARRAY:r("System.Void",i=>i.arrayClass),NARRAY:r("System.Void",i=>new t.Class(t.exports.classGetArrayClass(i,2))),GENERIC_INSTANCE:r("System.Int32",i=>i.interfaces.find(s=>s.name.endsWith("`1")))};return Reflect.defineProperty(this,"Enum",{value:o}),ja({...o,VAR:r("System.Action`1",i=>i.generics[0]),MVAR:r("System.Array",i=>i.method("AsReadOnly",1).generics[0])})}get class(){return new t.Class(t.exports.typeGetClass(this))}get fridaAlias(){function r(o){let i=o.class.fields.filter(s=>!s.isStatic);return i.length==0?["char"]:i.map(s=>s.type.fridaAlias)}if(this.isByReference)return"pointer";switch(this.enumValue){case t.Type.Enum.VOID:return"void";case t.Type.Enum.BOOLEAN:return"bool";case t.Type.Enum.CHAR:return"uchar";case t.Type.Enum.BYTE:return"int8";case t.Type.Enum.UBYTE:return"uint8";case t.Type.Enum.SHORT:return"int16";case t.Type.Enum.USHORT:return"uint16";case t.Type.Enum.INT:return"int32";case t.Type.Enum.UINT:return"uint32";case t.Type.Enum.LONG:return"int64";case t.Type.Enum.ULONG:return"uint64";case t.Type.Enum.FLOAT:return"float";case t.Type.Enum.DOUBLE:return"double";case t.Type.Enum.NINT:case t.Type.Enum.NUINT:case t.Type.Enum.POINTER:case t.Type.Enum.STRING:case t.Type.Enum.ARRAY:case t.Type.Enum.NARRAY:return"pointer";case t.Type.Enum.VALUE_TYPE:return this.class.isEnum?this.class.baseType.fridaAlias:r(this);case t.Type.Enum.CLASS:case t.Type.Enum.OBJECT:case t.Type.Enum.GENERIC_INSTANCE:return this.class.isStruct?r(this):this.class.isEnum?this.class.baseType.fridaAlias:"pointer";default:return"pointer"}}get isByReference(){return this.name.endsWith("&")}get isPrimitive(){switch(this.enumValue){case t.Type.Enum.BOOLEAN:case t.Type.Enum.CHAR:case t.Type.Enum.BYTE:case t.Type.Enum.UBYTE:case t.Type.Enum.SHORT:case t.Type.Enum.USHORT:case t.Type.Enum.INT:case t.Type.Enum.UINT:case t.Type.Enum.LONG:case t.Type.Enum.ULONG:case t.Type.Enum.FLOAT:case t.Type.Enum.DOUBLE:case t.Type.Enum.NINT:case t.Type.Enum.NUINT:return!0;default:return!1}}get name(){let r=t.exports.typeGetName(this);try{return r.readUtf8String()}finally{t.free(r)}}get object(){return new t.Object(t.exports.typeGetObject(this))}get enumValue(){return t.exports.typeGetTypeEnum(this)}is(r){return t.exports.typeEquals.isNull()?this.object.method("Equals").invoke(r.object):!!t.exports.typeEquals(this,r)}toString(){return this.name}};T([w],e.prototype,"class",null),T([w],e.prototype,"fridaAlias",null),T([w],e.prototype,"isByReference",null),T([w],e.prototype,"isPrimitive",null),T([w],e.prototype,"name",null),T([w],e.prototype,"object",null),T([w],e.prototype,"enumValue",null),T([w],e,"Enum",null),e=T([Yt],e),t.Type=e})(x||(x={}));var x;(function(t){class e extends Te{type;constructor(r,o){super(r),this.type=o}box(){return new t.Object(t.exports.valueTypeBox(this.type.class,this))}field(r){return this.tryField(r)??G(`couldn't find non-static field ${r} in hierarchy of class ${this.type.name}`)}method(r,o=-1){return this.tryMethod(r,o)??G(`couldn't find non-static method ${r} in hierarchy of class ${this.type.name}`)}tryField(r){let o=this.type.class.tryField(r);if(o?.isStatic){for(let i of this.type.class.hierarchy())for(let s of i.fields)if(s.name==r&&!s.isStatic)return s.bind(this);return}return o?.bind(this)}tryMethod(r,o=-1){let i=this.type.class.tryMethod(r,o);if(i?.isStatic){for(let s of this.type.class.hierarchy())for(let a of s.methods)if(a.name==r&&!a.isStatic&&(o<0||a.parameterCount==o))return a.bind(this);return}return i?.bind(this)}toString(){let r=this.method("ToString",0);return this.isNull()?"null":r.class.isValueType?r.invoke().content??"null":this.box().toString()??"null"}}t.ValueType=e})(x||(x={}));globalThis.Il2Cpp=x;var Gn={};ka(Gn,{ArtMethod:()=>Pn,ArtStackVisitor:()=>Yr,DVM_JNI_ENV_OFFSET_SELF:()=>qi,HandleVector:()=>on,VariableSizedHandleScope:()=>sn,backtrace:()=>ho,deoptimizeBootImage:()=>yo,deoptimizeEverything:()=>_o,deoptimizeMethod:()=>go,ensureClassInitialized:()=>iu,getAndroidApiLevel:()=>be,getAndroidVersion:()=>an,getApi:()=>ne,getArtApexVersion:()=>io,getArtClassSpec:()=>ao,getArtFieldSpec:()=>Vn,getArtMethodSpec:()=>De,getArtThreadFromEnv:()=>$n,getArtThreadSpec:()=>It,makeArtClassLoaderVisitor:()=>po,makeArtClassVisitor:()=>uo,makeMethodMangler:()=>Qu,makeObjectVisitorPredicate:()=>vo,revertGlobalPatches:()=>fo,translateMethod:()=>Xu,withAllArtThreadsSuspended:()=>co,withRunnableArtThread:()=>ze});var{pageSize:br,pointerSize:Fa}=Process,vr=class{constructor(e){this.sliceSize=e,this.slicesPerPage=br/e,this.pages=[],this.free=[]}allocateSlice(e,n){let r=e.near===void 0,o=n===1;if(r&&o){let i=this.free.pop();if(i!==void 0)return i}else if(n<br){let{free:i}=this,s=i.length,a=o?null:ptr(n-1);for(let l=0;l!==s;l++){let c=i[l],u=r||this._isSliceNear(c,e),d=o||c.and(a).isNull();if(u&&d)return i.splice(l,1)[0]}}return this._allocatePage(e)}_allocatePage(e){let n=Memory.alloc(br,e),{sliceSize:r,slicesPerPage:o}=this;for(let i=1;i!==o;i++){let s=n.add(i*r);this.free.push(s)}return this.pages.push(n),n}_isSliceNear(e,n){let r=e.add(this.sliceSize),{near:o,maxDistance:i}=n,s=Ni(o.sub(e)),a=Ni(o.sub(r));return s.compare(i)<=0&&a.compare(i)<=0}freeSlice(e){this.free.push(e)}};function Ni(t){let e=Fa===4?31:63,n=ptr(1).shl(e).not();return t.and(n)}function Sr(t){return new vr(t)}function ke(t,e){if(e!==0)throw new Error(t+" failed: "+e)}var Tn={v1_0:805371904,v1_2:805372416},xn={canTagObjects:1},{pointerSize:Ua}=Process,Da={exceptions:"propagate"};function st(t,e){this.handle=t,this.vm=e,this.vtable=t.readPointer()}st.prototype.deallocate=Qt(47,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});st.prototype.getLoadedClasses=Qt(78,"int32",["pointer","pointer","pointer"],function(t,e,n){let r=t(this.handle,e,n);ke("EnvJvmti::getLoadedClasses",r)});st.prototype.iterateOverInstancesOfClass=Qt(112,"int32",["pointer","pointer","int","pointer","pointer"],function(t,e,n,r,o){let i=t(this.handle,e,n,r,o);ke("EnvJvmti::iterateOverInstancesOfClass",i)});st.prototype.getObjectsWithTags=Qt(114,"int32",["pointer","int","pointer","pointer","pointer","pointer"],function(t,e,n,r,o,i){let s=t(this.handle,e,n,r,o,i);ke("EnvJvmti::getObjectsWithTags",s)});st.prototype.addCapabilities=Qt(142,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});function Qt(t,e,n,r){let o=null;return function(){o===null&&(o=new NativeFunction(this.vtable.add((t-1)*Ua).readPointer(),e,n,Da));let i=[o];return i=i.concat.apply(i,arguments),r.apply(this,i)}}function at(t,e,{limit:n}){let r=t,o=null;for(let i=0;i!==n;i++){let s=Instruction.parse(r),a=e(s,o);if(a!==null)return a;r=s.next,o=s}return null}function Ne(t){let e=null,n=!1;return function(...r){return n||(e=t(...r),n=!0),e}}function S(t,e){this.handle=t,this.vm=e}var Ln=Process.pointerSize,ht=2,Va=28,$a=34,Ga=37,za=40,Ba=43,Ha=46,Ja=49,Za=52,Wa=55,qa=58,Ka=61,Ya=64,Qa=67,Xa=70,el=73,tl=76,nl=79,rl=82,ol=85,il=88,sl=91,al=114,ll=117,cl=120,ul=123,dl=126,pl=129,hl=132,fl=135,ml=138,gl=141,_l=95,yl=96,bl=97,vl=98,Sl=99,El=100,wl=101,Tl=102,xl=103,Ll=104,Al=105,Nl=106,Cl=107,Ml=108,kl=109,Il=110,Ol=111,Pl=112,Rl=145,jl=146,Fl=147,Ul=148,Dl=149,Vl=150,$l=151,Gl=152,zl=153,Bl=154,Hl=155,Jl=156,Zl=157,Wl=158,ql=159,Kl=160,Yl=161,Ql=162,Xl={pointer:$a,uint8:Ga,int8:za,uint16:Ba,int16:Ha,int32:Ja,int64:Za,float:Wa,double:qa,void:Ka},ec={pointer:Ya,uint8:Qa,int8:Xa,uint16:el,int16:tl,int32:nl,int64:rl,float:ol,double:il,void:sl},tc={pointer:al,uint8:ll,int8:cl,uint16:ul,int16:dl,int32:pl,int64:hl,float:fl,double:ml,void:gl},nc={pointer:_l,uint8:yl,int8:bl,uint16:vl,int16:Sl,int32:El,int64:wl,float:Tl,double:xl},rc={pointer:Ll,uint8:Al,int8:Nl,uint16:Cl,int16:Ml,int32:kl,int64:Il,float:Ol,double:Pl},oc={pointer:Rl,uint8:jl,int8:Fl,uint16:Ul,int16:Dl,int32:Vl,int64:$l,float:Gl,double:zl},ic={pointer:Bl,uint8:Hl,int8:Jl,uint16:Zl,int16:Wl,int32:ql,int64:Kl,float:Yl,double:Ql},Mi={exceptions:"propagate"},Er=null,Or=[];S.dispose=function(t){Or.forEach(t.deleteGlobalRef,t),Or=[]};function bt(t){return Or.push(t),t}function An(t){return Er===null&&(Er=t.handle.readPointer()),Er}function F(t,e,n,r){let o=null;return function(){o===null&&(o=new NativeFunction(An(this).add(t*Ln).readPointer(),e,n,Mi));let i=[o];return i=i.concat.apply(i,arguments),r.apply(this,i)}}S.prototype.getVersion=F(4,"int32",["pointer"],function(t){return t(this.handle)});S.prototype.findClass=F(6,"pointer",["pointer","pointer"],function(t,e){let n=t(this.handle,Memory.allocUtf8String(e));return this.throwIfExceptionPending(),n});S.prototype.throwIfExceptionPending=function(){let t=this.exceptionOccurred();if(t.isNull())return;this.exceptionClear();let e=this.newGlobalRef(t);this.deleteLocalRef(t);let n=this.vaMethod("pointer",[])(this.handle,e,this.javaLangObject().toString),r=this.stringFromJni(n);this.deleteLocalRef(n);let o=new Error(r);throw o.$h=e,Script.bindWeak(o,sc(this.vm,e)),o};function sc(t,e){return function(){t.perform(n=>{n.deleteGlobalRef(e)})}}S.prototype.fromReflectedMethod=F(7,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.fromReflectedField=F(8,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.toReflectedMethod=F(9,"pointer",["pointer","pointer","pointer","uint8"],function(t,e,n,r){return t(this.handle,e,n,r)});S.prototype.getSuperclass=F(10,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.isAssignableFrom=F(11,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});S.prototype.toReflectedField=F(12,"pointer",["pointer","pointer","pointer","uint8"],function(t,e,n,r){return t(this.handle,e,n,r)});S.prototype.throw=F(13,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.exceptionOccurred=F(15,"pointer",["pointer"],function(t){return t(this.handle)});S.prototype.exceptionDescribe=F(16,"void",["pointer"],function(t){t(this.handle)});S.prototype.exceptionClear=F(17,"void",["pointer"],function(t){t(this.handle)});S.prototype.pushLocalFrame=F(19,"int32",["pointer","int32"],function(t,e){return t(this.handle,e)});S.prototype.popLocalFrame=F(20,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.newGlobalRef=F(21,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.deleteGlobalRef=F(22,"void",["pointer","pointer"],function(t,e){t(this.handle,e)});S.prototype.deleteLocalRef=F(23,"void",["pointer","pointer"],function(t,e){t(this.handle,e)});S.prototype.isSameObject=F(24,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});S.prototype.newLocalRef=F(25,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.allocObject=F(27,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.getObjectClass=F(31,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.isInstanceOf=F(32,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});S.prototype.getMethodId=F(33,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});S.prototype.getFieldId=F(94,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});S.prototype.getIntField=F(100,"int32",["pointer","pointer","pointer"],function(t,e,n){return t(this.handle,e,n)});S.prototype.getStaticMethodId=F(113,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});S.prototype.getStaticFieldId=F(144,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});S.prototype.getStaticIntField=F(150,"int32",["pointer","pointer","pointer"],function(t,e,n){return t(this.handle,e,n)});S.prototype.getStringLength=F(164,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.getStringChars=F(165,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});S.prototype.releaseStringChars=F(166,"void",["pointer","pointer","pointer"],function(t,e,n){t(this.handle,e,n)});S.prototype.newStringUtf=F(167,"pointer",["pointer","pointer"],function(t,e){let n=Memory.allocUtf8String(e);return t(this.handle,n)});S.prototype.getStringUtfChars=F(169,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});S.prototype.releaseStringUtfChars=F(170,"void",["pointer","pointer","pointer"],function(t,e,n){t(this.handle,e,n)});S.prototype.getArrayLength=F(171,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.newObjectArray=F(172,"pointer",["pointer","int32","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,n,r)});S.prototype.getObjectArrayElement=F(173,"pointer",["pointer","pointer","int32"],function(t,e,n){return t(this.handle,e,n)});S.prototype.setObjectArrayElement=F(174,"void",["pointer","pointer","int32","pointer"],function(t,e,n,r){t(this.handle,e,n,r)});S.prototype.newBooleanArray=F(175,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});S.prototype.newByteArray=F(176,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});S.prototype.newCharArray=F(177,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});S.prototype.newShortArray=F(178,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});S.prototype.newIntArray=F(179,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});S.prototype.newLongArray=F(180,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});S.prototype.newFloatArray=F(181,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});S.prototype.newDoubleArray=F(182,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});S.prototype.getBooleanArrayElements=F(183,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});S.prototype.getByteArrayElements=F(184,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});S.prototype.getCharArrayElements=F(185,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});S.prototype.getShortArrayElements=F(186,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});S.prototype.getIntArrayElements=F(187,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});S.prototype.getLongArrayElements=F(188,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});S.prototype.getFloatArrayElements=F(189,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});S.prototype.getDoubleArrayElements=F(190,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});S.prototype.releaseBooleanArrayElements=F(191,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,ht)});S.prototype.releaseByteArrayElements=F(192,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,ht)});S.prototype.releaseCharArrayElements=F(193,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,ht)});S.prototype.releaseShortArrayElements=F(194,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,ht)});S.prototype.releaseIntArrayElements=F(195,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,ht)});S.prototype.releaseLongArrayElements=F(196,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,ht)});S.prototype.releaseFloatArrayElements=F(197,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,ht)});S.prototype.releaseDoubleArrayElements=F(198,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,ht)});S.prototype.getByteArrayRegion=F(200,"void",["pointer","pointer","int","int","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});S.prototype.setBooleanArrayRegion=F(207,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});S.prototype.setByteArrayRegion=F(208,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});S.prototype.setCharArrayRegion=F(209,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});S.prototype.setShortArrayRegion=F(210,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});S.prototype.setIntArrayRegion=F(211,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});S.prototype.setLongArrayRegion=F(212,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});S.prototype.setFloatArrayRegion=F(213,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});S.prototype.setDoubleArrayRegion=F(214,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});S.prototype.registerNatives=F(215,"int32",["pointer","pointer","pointer","int32"],function(t,e,n,r){return t(this.handle,e,n,r)});S.prototype.monitorEnter=F(217,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.monitorExit=F(218,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.getDirectBufferAddress=F(230,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});S.prototype.getObjectRefType=F(232,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});var Ci=new Map;function Nn(t,e,n,r){return Rr(this,"p",lc,t,e,n,r)}function Pr(t,e,n,r){return Rr(this,"v",cc,t,e,n,r)}function ac(t,e,n,r){return Rr(this,"n",uc,t,e,n,r)}function Rr(t,e,n,r,o,i,s){if(s!==void 0)return n(t,r,o,i,s);let a=[r,e,o].concat(i).join("|"),l=Ci.get(a);return l===void 0&&(l=n(t,r,o,i,Mi),Ci.set(a,l)),l}function lc(t,e,n,r,o){return new NativeFunction(An(t).add(e*Ln).readPointer(),n,["pointer","pointer","pointer"].concat(r),o)}function cc(t,e,n,r,o){return new NativeFunction(An(t).add(e*Ln).readPointer(),n,["pointer","pointer","pointer","..."].concat(r),o)}function uc(t,e,n,r,o){return new NativeFunction(An(t).add(e*Ln).readPointer(),n,["pointer","pointer","pointer","pointer","..."].concat(r),o)}S.prototype.constructor=function(t,e){return Pr.call(this,Va,"pointer",t,e)};S.prototype.vaMethod=function(t,e,n){let r=Xl[t];if(r===void 0)throw new Error("Unsupported type: "+t);return Pr.call(this,r,t,e,n)};S.prototype.nonvirtualVaMethod=function(t,e,n){let r=ec[t];if(r===void 0)throw new Error("Unsupported type: "+t);return ac.call(this,r,t,e,n)};S.prototype.staticVaMethod=function(t,e,n){let r=tc[t];if(r===void 0)throw new Error("Unsupported type: "+t);return Pr.call(this,r,t,e,n)};S.prototype.getField=function(t){let e=nc[t];if(e===void 0)throw new Error("Unsupported type: "+t);return Nn.call(this,e,t,[])};S.prototype.getStaticField=function(t){let e=oc[t];if(e===void 0)throw new Error("Unsupported type: "+t);return Nn.call(this,e,t,[])};S.prototype.setField=function(t){let e=rc[t];if(e===void 0)throw new Error("Unsupported type: "+t);return Nn.call(this,e,"void",[t])};S.prototype.setStaticField=function(t){let e=ic[t];if(e===void 0)throw new Error("Unsupported type: "+t);return Nn.call(this,e,"void",[t])};var wr=null;S.prototype.javaLangClass=function(){if(wr===null){let t=this.findClass("java/lang/Class");try{let e=this.getMethodId.bind(this,t);wr={handle:bt(this.newGlobalRef(t)),getName:e("getName","()Ljava/lang/String;"),getSimpleName:e("getSimpleName","()Ljava/lang/String;"),getGenericSuperclass:e("getGenericSuperclass","()Ljava/lang/reflect/Type;"),getDeclaredConstructors:e("getDeclaredConstructors","()[Ljava/lang/reflect/Constructor;"),getDeclaredMethods:e("getDeclaredMethods","()[Ljava/lang/reflect/Method;"),getDeclaredFields:e("getDeclaredFields","()[Ljava/lang/reflect/Field;"),isArray:e("isArray","()Z"),isPrimitive:e("isPrimitive","()Z"),isInterface:e("isInterface","()Z"),getComponentType:e("getComponentType","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(t)}}return wr};var Tr=null;S.prototype.javaLangObject=function(){if(Tr===null){let t=this.findClass("java/lang/Object");try{let e=this.getMethodId.bind(this,t);Tr={handle:bt(this.newGlobalRef(t)),toString:e("toString","()Ljava/lang/String;"),getClass:e("getClass","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(t)}}return Tr};var xr=null;S.prototype.javaLangReflectConstructor=function(){if(xr===null){let t=this.findClass("java/lang/reflect/Constructor");try{xr={getGenericParameterTypes:this.getMethodId(t,"getGenericParameterTypes","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return xr};var Lr=null;S.prototype.javaLangReflectMethod=function(){if(Lr===null){let t=this.findClass("java/lang/reflect/Method");try{let e=this.getMethodId.bind(this,t);Lr={getName:e("getName","()Ljava/lang/String;"),getGenericParameterTypes:e("getGenericParameterTypes","()[Ljava/lang/reflect/Type;"),getParameterTypes:e("getParameterTypes","()[Ljava/lang/Class;"),getGenericReturnType:e("getGenericReturnType","()Ljava/lang/reflect/Type;"),getGenericExceptionTypes:e("getGenericExceptionTypes","()[Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),isVarArgs:e("isVarArgs","()Z")}}finally{this.deleteLocalRef(t)}}return Lr};var Ar=null;S.prototype.javaLangReflectField=function(){if(Ar===null){let t=this.findClass("java/lang/reflect/Field");try{let e=this.getMethodId.bind(this,t);Ar={getName:e("getName","()Ljava/lang/String;"),getType:e("getType","()Ljava/lang/Class;"),getGenericType:e("getGenericType","()Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),toString:e("toString","()Ljava/lang/String;")}}finally{this.deleteLocalRef(t)}}return Ar};var Nr=null;S.prototype.javaLangReflectTypeVariable=function(){if(Nr===null){let t=this.findClass("java/lang/reflect/TypeVariable");try{let e=this.getMethodId.bind(this,t);Nr={handle:bt(this.newGlobalRef(t)),getName:e("getName","()Ljava/lang/String;"),getBounds:e("getBounds","()[Ljava/lang/reflect/Type;"),getGenericDeclaration:e("getGenericDeclaration","()Ljava/lang/reflect/GenericDeclaration;")}}finally{this.deleteLocalRef(t)}}return Nr};var Cr=null;S.prototype.javaLangReflectWildcardType=function(){if(Cr===null){let t=this.findClass("java/lang/reflect/WildcardType");try{let e=this.getMethodId.bind(this,t);Cr={handle:bt(this.newGlobalRef(t)),getLowerBounds:e("getLowerBounds","()[Ljava/lang/reflect/Type;"),getUpperBounds:e("getUpperBounds","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return Cr};var Mr=null;S.prototype.javaLangReflectGenericArrayType=function(){if(Mr===null){let t=this.findClass("java/lang/reflect/GenericArrayType");try{Mr={handle:bt(this.newGlobalRef(t)),getGenericComponentType:this.getMethodId(t,"getGenericComponentType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return Mr};var kr=null;S.prototype.javaLangReflectParameterizedType=function(){if(kr===null){let t=this.findClass("java/lang/reflect/ParameterizedType");try{let e=this.getMethodId.bind(this,t);kr={handle:bt(this.newGlobalRef(t)),getActualTypeArguments:e("getActualTypeArguments","()[Ljava/lang/reflect/Type;"),getRawType:e("getRawType","()Ljava/lang/reflect/Type;"),getOwnerType:e("getOwnerType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return kr};var Ir=null;S.prototype.javaLangString=function(){if(Ir===null){let t=this.findClass("java/lang/String");try{Ir={handle:bt(this.newGlobalRef(t))}}finally{this.deleteLocalRef(t)}}return Ir};S.prototype.getClassName=function(t){let e=this.vaMethod("pointer",[])(this.handle,t,this.javaLangClass().getName);try{return this.stringFromJni(e)}finally{this.deleteLocalRef(e)}};S.prototype.getObjectClassName=function(t){let e=this.getObjectClass(t);try{return this.getClassName(e)}finally{this.deleteLocalRef(e)}};S.prototype.getActualTypeArgument=function(t){let e=this.vaMethod("pointer",[])(this.handle,t,this.javaLangReflectParameterizedType().getActualTypeArguments);if(this.throwIfExceptionPending(),!e.isNull())try{return this.getTypeNameFromFirstTypeElement(e)}finally{this.deleteLocalRef(e)}};S.prototype.getTypeNameFromFirstTypeElement=function(t){if(this.getArrayLength(t)>0){let n=this.getObjectArrayElement(t,0);try{return this.getTypeName(n)}finally{this.deleteLocalRef(n)}}else return"java.lang.Object"};S.prototype.getTypeName=function(t,e){let n=this.vaMethod("pointer",[]);if(this.isInstanceOf(t,this.javaLangClass().handle))return this.getClassName(t);if(this.isInstanceOf(t,this.javaLangReflectGenericArrayType().handle))return this.getArrayTypeName(t);if(this.isInstanceOf(t,this.javaLangReflectParameterizedType().handle)){let r=n(this.handle,t,this.javaLangReflectParameterizedType().getRawType);this.throwIfExceptionPending();let o;try{o=this.getTypeName(r)}finally{this.deleteLocalRef(r)}return e&&(o+="<"+this.getActualTypeArgument(t)+">"),o}else return this.isInstanceOf(t,this.javaLangReflectTypeVariable().handle)||this.isInstanceOf(t,this.javaLangReflectWildcardType().handle),"java.lang.Object"};S.prototype.getArrayTypeName=function(t){let e=this.vaMethod("pointer",[]);if(this.isInstanceOf(t,this.javaLangClass().handle))return this.getClassName(t);if(this.isInstanceOf(t,this.javaLangReflectGenericArrayType().handle)){let n=e(this.handle,t,this.javaLangReflectGenericArrayType().getGenericComponentType);this.throwIfExceptionPending();try{return"[L"+this.getTypeName(n)+";"}finally{this.deleteLocalRef(n)}}else return"[Ljava.lang.Object;"};S.prototype.stringFromJni=function(t){let e=this.getStringChars(t);if(e.isNull())throw new Error("Unable to access string");try{let n=this.getStringLength(t);return e.readUtf16String(n)}finally{this.releaseStringChars(t,e)}};var ki=65542,Mt=Process.pointerSize,jr=Process.getCurrentThreadId(),vt=new Map,Xt=new Map;function Xe(t){let e=t.vm,n=null,r=null,o=null;function i(){let a=e.readPointer(),l={exceptions:"propagate"};n=new NativeFunction(a.add(4*Mt).readPointer(),"int32",["pointer","pointer","pointer"],l),r=new NativeFunction(a.add(5*Mt).readPointer(),"int32",["pointer"],l),o=new NativeFunction(a.add(6*Mt).readPointer(),"int32",["pointer","pointer","int32"],l)}this.handle=e,this.perform=function(a){let l=Process.getCurrentThreadId(),c=s(l);if(c!==null)return a(c);let u=this._tryGetEnv(),d=u!==null;d||(u=this.attachCurrentThread(),vt.set(l,!0)),this.link(l,u);try{return a(u)}finally{let h=l===jr;if(h||this.unlink(l),!d&&!h){let p=vt.get(l);vt.delete(l),p&&this.detachCurrentThread()}}},this.attachCurrentThread=function(){let a=Memory.alloc(Mt);return ke("VM::AttachCurrentThread",n(e,a,NULL)),new S(a.readPointer(),this)},this.detachCurrentThread=function(){ke("VM::DetachCurrentThread",r(e))},this.preventDetachDueToClassLoader=function(){let a=Process.getCurrentThreadId();vt.has(a)&&vt.set(a,!1)},this.getEnv=function(){let a=s(Process.getCurrentThreadId());if(a!==null)return a;let l=Memory.alloc(Mt),c=o(e,l,ki);if(c===-2)throw new Error("Current thread is not attached to the Java VM; please move this code inside a Java.perform() callback");return ke("VM::GetEnv",c),new S(l.readPointer(),this)},this.tryGetEnv=function(){let a=s(Process.getCurrentThreadId());return a!==null?a:this._tryGetEnv()},this._tryGetEnv=function(){let a=this.tryGetEnvHandle(ki);return a===null?null:new S(a,this)},this.tryGetEnvHandle=function(a){let l=Memory.alloc(Mt);return o(e,l,a)!==0?null:l.readPointer()},this.makeHandleDestructor=function(a){return()=>{this.perform(l=>{l.deleteGlobalRef(a)})}},this.link=function(a,l){let c=Xt.get(a);c===void 0?Xt.set(a,[l,1]):c[1]++},this.unlink=function(a){let l=Xt.get(a);l[1]===1?Xt.delete(a):l[1]--};function s(a){let l=Xt.get(a);return l===void 0?null:l[0]}i.call(this)}Xe.dispose=function(t){vt.get(jr)===!0&&(vt.delete(jr),t.detachCurrentThread())};var dc=4,L=Process.pointerSize,{readU32:pc,readPointer:hc,writeU32:fc,writePointer:mc}=NativePointer.prototype,gc=1,_c=8,yc=16,In=256,bc=524288,vc=2097152,Wi=1073741824,Sc=524288,Ec=134217728,Ii=1048576,wc=2097152,Tc=268435456,xc=268435456,Lc=0,Zr=3,Wr=5,oo=ptr(1).not(),Ac=2147467263,Nc=4294963200,Dn=17*L,Cc=18*L,qi=12,Mc=112,kc=116,Ic=0,Ur=56,Oi=4,Oc=8,Pc=10,Rc=12,jc=14,Fc=28,Uc=36,Dc=0,Vc=1,$c=2,Gc=3,zc=4,Bc=5,Hc=6,Jc=7,Pi=2147483648,Zc=28,rn=3*L,Wc=3*L,qc=1,Kc=1,Ki=Ne(au),Yc=Ne(vu),De=Ne(Eu),It=Ne(wu),Qc=Ne(Tu),Xc=Ne(Ou),an=Ne(Nu),Yi=Ne(Cu),be=Ne(Mu),io=Ne(ku),eu=Ne(Fu),tu=Process.arch==="ia32"?wd:Ed,pe={exceptions:"propagate"},en={},Dr=null,Vr=null,Qi=null,Ee=null,so=[],On=new Map,Xi=[],$r=null,Ri=0,ji=!1,Fi=!1,tn=null,nu=[],Gr=null,Cn=null;function ne(){return Dr===null&&(Dr=ru()),Dr}function ru(){let t=Process.enumerateModules().filter(p=>/^lib(art|dvm).so$/.test(p.name)).filter(p=>!/\/system\/fake-libs/.test(p.path));if(t.length===0)return null;let e=t[0],n=e.name.indexOf("art")!==-1?"art":"dalvik",r=n==="art",o={module:e,find(p){let{module:m}=this,f=m.findExportByName(p);return f===null&&(f=m.findSymbolByName(p)),f},flavor:n,addLocalReference:null};o.isApiLevel34OrApexEquivalent=r&&(o.find("_ZN3art7AppInfo29GetPrimaryApkReferenceProfileEv")!==null||o.find("_ZN3art6Thread15RunFlipFunctionEPS0_")!==null);let i=r?{functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],artInterpreterToCompiledCodeBridge:function(p){this.artInterpreterToCompiledCodeBridge=p},_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art17ReaderWriterMutex13ExclusiveLockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveLock","void",["pointer","pointer"]],_ZN3art17ReaderWriterMutex15ExclusiveUnlockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveUnlock","void",["pointer","pointer"]],_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE:function(p){this["art::IndirectReferenceTable::Add"]=new NativeFunction(p,"pointer",["pointer","uint","pointer"],pe)},_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE:function(p){this["art::IndirectReferenceTable::Add"]=new NativeFunction(p,"pointer",["pointer","uint","pointer"],pe)},_ZN3art9JavaVMExt12DecodeGlobalEPv:function(p){let m;be()>=26?m=tu(p,["pointer","pointer"]):m=new NativeFunction(p,"pointer",["pointer","pointer"],pe),this["art::JavaVMExt::DecodeGlobal"]=function(f,g,y){return m(f,y)}},_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv:["art::JavaVMExt::DecodeGlobal","pointer",["pointer","pointer","pointer"]],_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZNK3art6Thread13DecodeJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZN3art10ThreadList10SuspendAllEPKcb:["art::ThreadList::SuspendAll","void",["pointer","pointer","bool"]],_ZN3art10ThreadList10SuspendAllEv:function(p){let m=new NativeFunction(p,"void",["pointer"],pe);this["art::ThreadList::SuspendAll"]=function(f,g,y){return m(f)}},_ZN3art10ThreadList9ResumeAllEv:["art::ThreadList::ResumeAll","void",["pointer"]],_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE:["art::ClassLinker::VisitClasses","void",["pointer","pointer"]],_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_:function(p){let m=new NativeFunction(p,"void",["pointer","pointer","pointer"],pe);this["art::ClassLinker::VisitClasses"]=function(f,g){m(f,g,NULL)}},_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE:["art::ClassLinker::VisitClassLoaders","void",["pointer","pointer"]],_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_:["art::gc::Heap::VisitObjects","void",["pointer","pointer","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:["art::gc::Heap::GetInstances","void",["pointer","pointer","pointer","int","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:function(p){let m=new NativeFunction(p,"void",["pointer","pointer","pointer","bool","int","pointer"],pe);this["art::gc::Heap::GetInstances"]=function(f,g,y,E,N){m(f,g,y,0,E,N)}},_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","uint","bool"]],_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","size_t","bool"]],_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb:["art::StackVisitor::WalkStack","void",["pointer","bool"]],_ZNK3art12StackVisitor9GetMethodEv:["art::StackVisitor::GetMethod","pointer",["pointer"]],_ZNK3art12StackVisitor16DescribeLocationEv:function(p){this["art::StackVisitor::DescribeLocation"]=kn(p,["pointer"])},_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv:function(p){this["art::StackVisitor::GetCurrentQuickFrameInfo"]=ju(p)},_ZN3art7Context6CreateEv:["art::Context::Create","pointer",[]],_ZN3art6Thread18GetLongJumpContextEv:["art::Thread::GetLongJumpContext","pointer",["pointer"]],_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE:function(p){this["art::mirror::Class::GetDescriptor"]=p},_ZN3art6mirror5Class11GetLocationEv:function(p){this["art::mirror::Class::GetLocation"]=kn(p,["pointer"])},_ZN3art9ArtMethod12PrettyMethodEb:function(p){this["art::ArtMethod::PrettyMethod"]=kn(p,["pointer","bool"])},_ZN3art12PrettyMethodEPNS_9ArtMethodEb:function(p){this["art::ArtMethod::PrettyMethodNullSafe"]=kn(p,["pointer","bool"])},_ZN3art6Thread14CurrentFromGdbEv:["art::Thread::CurrentFromGdb","pointer",[]],_ZN3art6mirror6Object5CloneEPNS_6ThreadE:function(p){this["art::mirror::Object::Clone"]=new NativeFunction(p,"pointer",["pointer","pointer"],pe)},_ZN3art6mirror6Object5CloneEPNS_6ThreadEm:function(p){let m=new NativeFunction(p,"pointer",["pointer","pointer","pointer"],pe);this["art::mirror::Object::Clone"]=function(f,g){let y=NULL;return m(f,g,y)}},_ZN3art6mirror6Object5CloneEPNS_6ThreadEj:function(p){let m=new NativeFunction(p,"pointer",["pointer","pointer","uint"],pe);this["art::mirror::Object::Clone"]=function(f,g){return m(f,g,0)}},_ZN3art3Dbg14SetJdwpAllowedEb:["art::Dbg::SetJdwpAllowed","void",["bool"]],_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE:["art::Dbg::ConfigureJdwp","void",["pointer"]],_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv:["art::InternalDebuggerControlCallback::StartDebugger","void",["pointer"]],_ZN3art3Dbg9StartJdwpEv:["art::Dbg::StartJdwp","void",[]],_ZN3art3Dbg8GoActiveEv:["art::Dbg::GoActive","void",[]],_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE:["art::Dbg::RequestDeoptimization","void",["pointer"]],_ZN3art3Dbg20ManageDeoptimizationEv:["art::Dbg::ManageDeoptimization","void",[]],_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv:["art::Instrumentation::EnableDeoptimization","void",["pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc:["art::Instrumentation::DeoptimizeEverything","void",["pointer","pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv:function(p){let m=new NativeFunction(p,"void",["pointer"],pe);this["art::Instrumentation::DeoptimizeEverything"]=function(f,g){m(f)}},_ZN3art7Runtime19DeoptimizeBootImageEv:["art::Runtime::DeoptimizeBootImage","void",["pointer"]],_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE:["art::Instrumentation::Deoptimize","void",["pointer","pointer"]],_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID:["art::jni::JniIdManager::DecodeMethodId","pointer",["pointer","pointer"]],_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID:["art::jni::JniIdManager::DecodeFieldId","pointer",["pointer","pointer"]],_ZN3art11interpreter18GetNterpEntryPointEv:["art::interpreter::GetNterpEntryPoint","pointer",[]],_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi:["art::Monitor::TranslateLocation","void",["pointer","uint32","pointer","pointer"]]},variables:{_ZN3art3Dbg9gRegistryE:function(p){this.isJdwpStarted=()=>!p.readPointer().isNull()},_ZN3art3Dbg15gDebuggerActiveE:function(p){this.isDebuggerActive=()=>!!p.readU8()}},optionals:new Set(["artInterpreterToCompiledCodeBridge","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE","_ZN3art9JavaVMExt12DecodeGlobalEPv","_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv","_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject","_ZNK3art6Thread13DecodeJObjectEP8_jobject","_ZN3art10ThreadList10SuspendAllEPKcb","_ZN3art10ThreadList10SuspendAllEv","_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE","_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_","_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE","_ZN3art6mirror6Object5CloneEPNS_6ThreadE","_ZN3art6mirror6Object5CloneEPNS_6ThreadEm","_ZN3art6mirror6Object5CloneEPNS_6ThreadEj","_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE","_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb","_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb","_ZNK3art12StackVisitor9GetMethodEv","_ZNK3art12StackVisitor16DescribeLocationEv","_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv","_ZN3art7Context6CreateEv","_ZN3art6Thread18GetLongJumpContextEv","_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE","_ZN3art6mirror5Class11GetLocationEv","_ZN3art9ArtMethod12PrettyMethodEb","_ZN3art12PrettyMethodEPNS_9ArtMethodEb","_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE","_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv","_ZN3art3Dbg15gDebuggerActiveE","_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv","_ZN3art7Runtime19DeoptimizeBootImageEv","_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE","_ZN3art3Dbg9StartJdwpEv","_ZN3art3Dbg8GoActiveEv","_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE","_ZN3art3Dbg20ManageDeoptimizationEv","_ZN3art3Dbg9gRegistryE","_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID","_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID","_ZN3art11interpreter18GetNterpEntryPointEv","_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi"])}:{functions:{_Z20dvmDecodeIndirectRefP6ThreadP8_jobject:["dvmDecodeIndirectRef","pointer",["pointer","pointer"]],_Z15dvmUseJNIBridgeP6MethodPv:["dvmUseJNIBridge","void",["pointer","pointer"]],_Z20dvmHeapSourceGetBasev:["dvmHeapSourceGetBase","pointer",[]],_Z21dvmHeapSourceGetLimitv:["dvmHeapSourceGetLimit","pointer",[]],_Z16dvmIsValidObjectPK6Object:["dvmIsValidObject","uint8",["pointer"]],JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]]},variables:{gDvmJni:function(p){this.gDvmJni=p},gDvm:function(p){this.gDvm=p}}},{functions:s={},variables:a={},optionals:l=new Set}=i,c=[];for(let[p,m]of Object.entries(s)){let f=o.find(p);f!==null?typeof m=="function"?m.call(o,f):o[m[0]]=new NativeFunction(f,m[1],m[2],pe):l.has(p)||c.push(p)}for(let[p,m]of Object.entries(a)){let f=o.find(p);f!==null?m.call(o,f):l.has(p)||c.push(p)}if(c.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+c.join(", "));let u=Memory.alloc(L),d=Memory.alloc(dc);if(ke("JNI_GetCreatedJavaVMs",o.JNI_GetCreatedJavaVMs(u,1,d)),d.readInt()===0)return null;if(o.vm=u.readPointer(),r){let p=be(),m;p>=27?m=33554432:p>=24?m=16777216:m=0,o.kAccCompileDontBother=m;let f=o.vm.add(L).readPointer();o.artRuntime=f;let g=Ki(o),y=g.offset,E=y.instrumentation;o.artInstrumentation=E!==null?f.add(E):null,io()>=36e7&&o.artInstrumentation!=null&&(o.artInstrumentation=o.artInstrumentation.readPointer()),o.artHeap=f.add(y.heap).readPointer(),o.artThreadList=f.add(y.threadList).readPointer();let C=f.add(y.classLinker).readPointer(),k=Su(f,g).offset,U=C.add(k.quickResolutionTrampoline).readPointer(),P=C.add(k.quickImtConflictTrampoline).readPointer(),O=C.add(k.quickGenericJniTrampoline).readPointer(),A=C.add(k.quickToInterpreterBridgeTrampoline).readPointer();o.artClassLinker={address:C,quickResolutionTrampoline:U,quickImtConflictTrampoline:P,quickGenericJniTrampoline:O,quickToInterpreterBridgeTrampoline:A};let j=new Xe(o);o.artQuickGenericJniTrampoline=zr(O,j),o.artQuickToInterpreterBridge=zr(A,j),o.artQuickResolutionTrampoline=zr(U,j),o["art::JavaVMExt::AddGlobalRef"]===void 0&&(o["art::JavaVMExt::AddGlobalRef"]=gd(o)),o["art::JavaVMExt::DecodeGlobal"]===void 0&&(o["art::JavaVMExt::DecodeGlobal"]=_d(o)),o["art::ArtMethod::PrettyMethod"]===void 0&&(o["art::ArtMethod::PrettyMethod"]=o["art::ArtMethod::PrettyMethodNullSafe"]),o["art::interpreter::GetNterpEntryPoint"]!==void 0?o.artNterpEntryPoint=o["art::interpreter::GetNterpEntryPoint"]():o.artNterpEntryPoint=o.find("ExecuteNterpImpl"),Ee=Vu(o,j),Sd(o);let D=null;Object.defineProperty(o,"jvmti",{get(){return D===null&&(D=[ou(j,this.artRuntime)]),D[0]}})}let h=e.enumerateImports().filter(p=>p.name.indexOf("_Z")===0).reduce((p,m)=>(p[m.name]=m.address,p),{});return o.$new=new NativeFunction(h._Znwm||h._Znwj,"pointer",["ulong"],pe),o.$delete=new NativeFunction(h._ZdlPv,"void",["pointer"],pe),Qi=r?eo:to,o}function ou(t,e){let n=null;return t.perform(()=>{let r=ne().find("_ZN3art7Runtime18EnsurePluginLoadedEPKcPNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE");if(r===null)return;let o=new NativeFunction(r,"bool",["pointer","pointer","pointer"]),i=Memory.alloc(L);if(!o(e,Memory.allocUtf8String("libopenjdkjvmti.so"),i))return;let a=Tn.v1_2|1073741824,l=t.tryGetEnvHandle(a);if(l===null)return;n=new st(l,t);let c=Memory.alloc(8);c.writeU64(xn.canTagObjects),n.addCapabilities(c)!==0&&(n=null)}),n}function iu(t,e){ne().flavor==="art"&&t.getClassName(e)}function su(t){return{offset:L===4?{globalsLock:32,globals:72}:{globalsLock:64,globals:112}}}function au(t){let e=t.vm,n=t.artRuntime,r=L===4?200:384,o=r+100*L,i=be(),s=Yi(),{isApiLevel34OrApexEquivalent:a}=t,l=null;for(let u=r;u!==o;u+=L)if(n.add(u).readPointer().equals(e)){let h,p=null;i>=33||s==="Tiramisu"||a?(h=[u-4*L],p=u-L):i>=30||s==="R"?(h=[u-3*L,u-4*L],p=u-L):i>=29?h=[u-2*L]:i>=27?h=[u-rn-3*L]:h=[u-rn-2*L];for(let m of h){let f=m-L,g=f-L,y;a?y=g-9*L:i>=24?y=g-8*L:i>=23?y=g-7*L:y=g-4*L;let E={offset:{heap:y,threadList:g,internTable:f,classLinker:m,jniIdManager:p}};if(es(n,E)!==null){l=E;break}}break}if(l===null)throw new Error("Unable to determine Runtime field offsets");let c=io()>=36e7;return l.offset.instrumentation=c?hu(t):cu(t),l.offset.jniIdsIndirection=_u(t),l}var lu={ia32:Ui,x64:Ui,arm:uu,arm64:du};function cu(t){let e=t["art::Runtime::DeoptimizeBootImage"];return e===void 0?null:at(e,lu[Process.arch],{limit:30})}function Ui(t){if(t.mnemonic!=="lea")return null;let e=t.operands[1].value.disp;return e<256||e>1024?null:e}function uu(t){if(t.mnemonic!=="add.w")return null;let e=t.operands;if(e.length!==3)return null;let n=e[2];return n.type!=="imm"?null:n.value}function du(t){if(t.mnemonic!=="add")return null;let e=t.operands;if(e.length!==3||e[0].value==="sp"||e[1].value==="sp")return null;let n=e[2];if(n.type!=="imm")return null;let r=n.value.valueOf();return r<256||r>1024?null:r}var pu={ia32:Di,x64:Di,arm:fu,arm64:mu};function hu(t){let e=t["art::Runtime::DeoptimizeBootImage"];return e===void 0?null:at(e,pu[Process.arch],{limit:30})}function Di(t){if(t.mnemonic!=="mov")return null;let e=t.operands;if(e[0].value!=="rax")return null;let r=e[1];if(r.type!=="mem")return null;let o=r.value;if(o.base!=="rdi")return null;let i=o.disp;return i<256||i>1024?null:i}function fu(t){return null}function mu(t){if(t.mnemonic!=="ldr")return null;let e=t.operands;if(e[0].value==="x0")return null;let n=e[1].value;if(n.base!=="x0")return null;let r=n.disp;return r<256||r>1024?null:r}var gu={ia32:Vi,x64:Vi,arm:yu,arm64:bu};function _u(t){let e=t.find("_ZN3art7Runtime12SetJniIdTypeENS_9JniIdTypeE");if(e===null)return null;let n=at(e,gu[Process.arch],{limit:20});if(n===null)throw new Error("Unable to determine Runtime.jni_ids_indirection_ offset");return n}function Vi(t){return t.mnemonic==="cmp"?t.operands[0].value.disp:null}function yu(t){return t.mnemonic==="ldr.w"?t.operands[1].value.disp:null}function bu(t,e){if(e===null)return null;let{mnemonic:n}=t,{mnemonic:r}=e;return n==="cmp"&&r==="ldr"||n==="bl"&&r==="str"?e.operands[1].value.disp:null}function vu(){let e={"4-21":136,"4-22":136,"4-23":172,"4-24":196,"4-25":196,"4-26":196,"4-27":196,"4-28":212,"4-29":172,"4-30":180,"4-31":180,"8-21":224,"8-22":224,"8-23":296,"8-24":344,"8-25":344,"8-26":352,"8-27":352,"8-28":392,"8-29":328,"8-30":336,"8-31":336}[`${L}-${be()}`];if(e===void 0)throw new Error("Unable to determine Instrumentation field offsets");return{offset:{forcedInterpretOnly:4,deoptimizationEnabled:e}}}function Su(t,e){let n=es(t,e);if(n===null)throw new Error("Unable to determine ClassLinker field offsets");return n}function es(t,e){if(Vr!==null)return Vr;let{classLinker:n,internTable:r}=e.offset,o=t.add(n).readPointer(),i=t.add(r).readPointer(),s=L===4?100:200,a=s+100*L,l=be(),c=null;for(let u=s;u!==a;u+=L)if(o.add(u).readPointer().equals(i)){let h;l>=30||Yi()==="R"?h=6:l>=29?h=4:l>=23?h=3:h=5;let p=u+h*L,m;l>=23?m=p-2*L:m=p-3*L,c={offset:{quickResolutionTrampoline:m,quickImtConflictTrampoline:p-L,quickGenericJniTrampoline:p,quickToInterpreterBridgeTrampoline:p+L}};break}return c!==null&&(Vr=c),c}function ao(t){let n=null;return t.perform(r=>{let o=Vn(t),i=De(t),s={artArrayLengthSize:4,artArrayEntrySize:o.size,artArrayMax:50},a={artArrayLengthSize:L,artArrayEntrySize:i.size,artArrayMax:100},l=(h,p,m)=>{let f=h.add(p).readPointer();if(f.isNull())return null;let g=m===4?f.readU32():f.readU64().valueOf();return g<=0?null:{length:g,data:f.add(m)}},c=(h,p,m,f)=>{try{let g=l(h,p,f.artArrayLengthSize);if(g===null)return!1;let y=Math.min(g.length,f.artArrayMax);for(let E=0;E!==y;E++)if(g.data.add(E*f.artArrayEntrySize).equals(m))return!0}catch{}return!1},u=r.findClass("java/lang/Thread"),d=r.newGlobalRef(u);try{let h;ze(t,r,O=>{h=ne()["art::JavaVMExt::DecodeGlobal"](t,O,d)});let p=zi(r.getFieldId(d,"name","Ljava/lang/String;")),m=zi(r.getStaticFieldId(d,"MAX_PRIORITY","I")),f=-1,g=-1;for(let O=0;O!==256;O+=4)f===-1&&c(h,O,m,s)&&(f=O),g===-1&&c(h,O,p,s)&&(g=O);if(g===-1||f===-1)throw new Error("Unable to find fields in java/lang/Thread; please file a bug");let y=g!==f?f:0,E=g,N=-1,C=mo(r.getMethodId(d,"getName","()Ljava/lang/String;"));for(let O=0;O!==256;O+=4)N===-1&&c(h,O,C,a)&&(N=O);if(N===-1)throw new Error("Unable to find methods in java/lang/Thread; please file a bug");let k=-1,P=l(h,N,a.artArrayLengthSize).length;for(let O=N;O!==256;O+=4)if(h.add(O).readU16()===P){k=O;break}if(k===-1)throw new Error("Unable to find copied methods in java/lang/Thread; please file a bug");n={offset:{ifields:E,methods:N,sfields:y,copiedMethodsOffset:k}}}finally{r.deleteLocalRef(u),r.deleteGlobalRef(d)}}),n}function Eu(t){let e=ne(),n;return t.perform(r=>{let o=r.findClass("android/os/Process"),i=mo(r.getStaticMethodId(o,"getElapsedCpuTime","()J"));r.deleteLocalRef(o);let s=Process.getModuleByName("libandroid_runtime.so"),a=s.base,l=a.add(s.size),c=be(),u=c<=21?8:L,d=gc|_c|yc|In,h=~(Wi|Tc|wc)>>>0,p=null,m=null,f=2;for(let E=0;E!==64&&f!==0;E+=4){let N=i.add(E);if(p===null){let C=N.readPointer();C.compare(a)>=0&&C.compare(l)<0&&(p=E,f--)}m===null&&(N.readU32()&h)===d&&(m=E,f--)}if(f!==0)throw new Error("Unable to determine ArtMethod field offsets");let g=p+u;n={size:c<=21?g+32:g+L,offset:{jniCode:p,quickCode:g,accessFlags:m}},"artInterpreterToCompiledCodeBridge"in e&&(n.offset.interpreterCode=p-u)}),n}function Vn(t){let e=be();return e>=23?{size:16,offset:{accessFlags:4}}:e>=21?{size:24,offset:{accessFlags:12}}:null}function wu(t){let e=be(),n;return t.perform(r=>{let o=$n(r),i=r.handle,s=null,a=null,l=null,c=null,u=null,d=null;for(let h=144;h!==256;h+=L)if(o.add(h).readPointer().equals(i)){a=h-6*L,u=h-4*L,d=h+2*L,e<=22&&(a-=L,s=a-L-72-12,l=h+6*L,u-=L,d-=L),c=h+9*L,e<=22&&(c+=2*L+4,L===8&&(c+=4)),e>=23&&(c+=L);break}if(c===null)throw new Error("Unable to determine ArtThread field offsets");n={offset:{isExceptionReportedToInstrumentation:s,exception:a,throwLocation:l,topHandleScope:c,managedStack:u,self:d}}}),n}function Tu(){return be()>=23?{offset:{topQuickFrame:0,link:L}}:{offset:{topQuickFrame:2*L,link:0}}}var xu={ia32:$i,x64:$i,arm:Lu,arm64:Au};function zr(t,e){let n;return e.perform(r=>{let o=$n(r),i=xu[Process.arch],s=Instruction.parse(t),a=i(s);a!==null?n=o.add(a).readPointer():n=t}),n}function $i(t){return t.mnemonic==="jmp"?t.operands[0].value.disp:null}function Lu(t){return t.mnemonic==="ldr.w"?t.operands[1].value.disp:null}function Au(t){return t.mnemonic==="ldr"?t.operands[1].value.disp:null}function $n(t){return t.handle.add(L).readPointer()}function Nu(){return lo("ro.build.version.release")}function Cu(){return lo("ro.build.version.codename")}function Mu(){return parseInt(lo("ro.build.version.sdk"),10)}function ku(){try{let t=File.readAllText("/proc/self/mountinfo"),e=null,n=new Map;for(let o of t.trimEnd().split(`
`)){let i=o.split(" "),s=i[4];if(!s.startsWith("/apex/com.android.art"))continue;let a=i[10];s.includes("@")?n.set(a,s.split("@")[1]):e=a}let r=n.get(e);return r!==void 0?parseInt(r):Gi()}catch{return Gi()}}function Gi(){return be()*1e7}var Br=null,Iu=92;function lo(t){Br===null&&(Br=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("__system_property_get"),"int",["pointer","pointer"],pe));let e=Memory.alloc(Iu);return Br(Memory.allocUtf8String(t),e),e.readUtf8String()}function ze(t,e,n){let r=Xc(t,e),o=$n(e).toString();if(en[o]=n,r(e.handle),en[o]!==void 0)throw delete en[o],new Error("Unable to perform state transition; please file a bug")}function Ou(t,e){let n=new NativeCallback(Pu,"void",["pointer"]);return rs(t,e,n)}function Pu(t){let e=t.toString(),n=en[e];delete en[e],n(t)}function co(t){let e=ne(),n=e.artThreadList;e["art::ThreadList::SuspendAll"](n,Memory.allocUtf8String("frida"),!1?1:0);try{t()}finally{e["art::ThreadList::ResumeAll"](n)}}var qr=class{constructor(e){let n=Memory.alloc(4*L),r=n.add(L);n.writePointer(r);let o=new NativeCallback((i,s)=>e(s)===!0?1:0,"bool",["pointer","pointer"]);r.add(2*L).writePointer(o),this.handle=n,this._onVisit=o}};function uo(t){return ne()["art::ClassLinker::VisitClasses"]instanceof NativeFunction?new qr(t):new NativeCallback(n=>t(n)===!0?1:0,"bool",["pointer","pointer"])}var Kr=class{constructor(e){let n=Memory.alloc(4*L),r=n.add(L);n.writePointer(r);let o=new NativeCallback((i,s)=>{e(s)},"void",["pointer","pointer"]);r.add(2*L).writePointer(o),this.handle=n,this._onVisit=o}};function po(t){return new Kr(t)}var Ru={"include-inlined-frames":0,"skip-inlined-frames":1},Yr=class{constructor(e,n,r,o=0,i=!0){let s=ne(),a=512,l=3*L,c=Memory.alloc(a+l);s["art::StackVisitor::StackVisitor"](c,e,n,Ru[r],o,i?1:0);let u=c.add(a);c.writePointer(u);let d=new NativeCallback(this._visitFrame.bind(this),"bool",["pointer"]);u.add(2*L).writePointer(d),this.handle=c,this._onVisitFrame=d;let h=c.add(L===4?12:24);this._curShadowFrame=h,this._curQuickFrame=h.add(L),this._curQuickFramePc=h.add(2*L),this._curOatQuickMethodHeader=h.add(3*L),this._getMethodImpl=s["art::StackVisitor::GetMethod"],this._descLocImpl=s["art::StackVisitor::DescribeLocation"],this._getCQFIImpl=s["art::StackVisitor::GetCurrentQuickFrameInfo"]}walkStack(e=!1){ne()["art::StackVisitor::WalkStack"](this.handle,e?1:0)}_visitFrame(){return this.visitFrame()?1:0}visitFrame(){throw new Error("Subclass must implement visitFrame")}getMethod(){let e=this._getMethodImpl(this.handle);return e.isNull()?null:new Pn(e)}getCurrentQuickFramePc(){return this._curQuickFramePc.readPointer()}getCurrentQuickFrame(){return this._curQuickFrame.readPointer()}getCurrentShadowFrame(){return this._curShadowFrame.readPointer()}describeLocation(){let e=new Fn;return this._descLocImpl(e,this.handle),e.disposeToString()}getCurrentOatQuickMethodHeader(){return this._curOatQuickMethodHeader.readPointer()}getCurrentQuickFrameInfo(){return this._getCQFIImpl(this.handle)}},Pn=class{constructor(e){this.handle=e}prettyMethod(e=!0){let n=new Fn;return ne()["art::ArtMethod::PrettyMethod"](n,this.handle,e?1:0),n.disposeToString()}toString(){return`ArtMethod(handle=${this.handle})`}};function ju(t){return function(e){let n=Memory.alloc(12);return eu(t)(n,e),{frameSizeInBytes:n.readU32(),coreSpillMask:n.add(4).readU32(),fpSpillMask:n.add(8).readU32()}}}function Fu(t){let e=NULL;switch(Process.arch){case"ia32":e=kt(32,n=>{n.putMovRegRegOffsetPtr("ecx","esp",4),n.putMovRegRegOffsetPtr("edx","esp",8),n.putCallAddressWithArguments(t,["ecx","edx"]),n.putMovRegReg("esp","ebp"),n.putPopReg("ebp"),n.putRet()});break;case"x64":e=kt(32,n=>{n.putPushReg("rdi"),n.putCallAddressWithArguments(t,["rsi"]),n.putPopReg("rdi"),n.putMovRegPtrReg("rdi","rax"),n.putMovRegOffsetPtrReg("rdi",8,"edx"),n.putRet()});break;case"arm":e=kt(16,n=>{n.putCallAddressWithArguments(t,["r0","r1"]),n.putPopRegs(["r0","lr"]),n.putMovRegReg("pc","lr")});break;case"arm64":e=kt(64,n=>{n.putPushRegReg("x0","lr"),n.putCallAddressWithArguments(t,["x1"]),n.putPopRegReg("x2","lr"),n.putStrRegRegOffset("x0","x2",0),n.putStrRegRegOffset("w1","x2",8),n.putRet()});break}return new NativeFunction(e,"void",["pointer","pointer"],pe)}var Uu={ia32:globalThis.X86Relocator,x64:globalThis.X86Relocator,arm:globalThis.ThumbRelocator,arm64:globalThis.Arm64Relocator},Qr={ia32:globalThis.X86Writer,x64:globalThis.X86Writer,arm:globalThis.ThumbWriter,arm64:globalThis.Arm64Writer};function kt(t,e){$r===null&&($r=Memory.alloc(Process.pageSize));let n=$r.add(Ri),r=Process.arch,o=Qr[r];return Memory.patchCode(n,t,i=>{let s=new o(i,{pc:n});if(e(s),s.flush(),s.offset>t)throw new Error(`Wrote ${s.offset}, exceeding maximum of ${t}`)}),Ri+=t,r==="arm"?n.or(1):n}function Du(t,e){$u(e),Ju(e)}function Vu(t,e){let n=It(e).offset,r=Qc().offset,o=`
#include <gum/guminterceptor.h>

extern GMutex lock;
extern GHashTable * methods;
extern GHashTable * replacements;
extern gpointer last_seen_art_method;

extern gpointer get_oat_quick_method_header_impl (gpointer method, gpointer pc);

void
init (void)
{
  g_mutex_init (&lock);
  methods = g_hash_table_new_full (NULL, NULL, NULL, NULL);
  replacements = g_hash_table_new_full (NULL, NULL, NULL, NULL);
}

void
finalize (void)
{
  g_hash_table_unref (replacements);
  g_hash_table_unref (methods);
  g_mutex_clear (&lock);
}

gboolean
is_replacement_method (gpointer method)
{
  gboolean is_replacement;

  g_mutex_lock (&lock);

  is_replacement = g_hash_table_contains (replacements, method);

  g_mutex_unlock (&lock);

  return is_replacement;
}

gpointer
get_replacement_method (gpointer original_method)
{
  gpointer replacement_method;

  g_mutex_lock (&lock);

  replacement_method = g_hash_table_lookup (methods, original_method);

  g_mutex_unlock (&lock);

  return replacement_method;
}

void
set_replacement_method (gpointer original_method,
                        gpointer replacement_method)
{
  g_mutex_lock (&lock);

  g_hash_table_insert (methods, original_method, replacement_method);
  g_hash_table_insert (replacements, replacement_method, original_method);

  g_mutex_unlock (&lock);
}

void
synchronize_replacement_methods (guint quick_code_offset,
                                 void * nterp_entrypoint,
                                 void * quick_to_interpreter_bridge)
{
  GHashTableIter iter;
  gpointer hooked_method, replacement_method;

  g_mutex_lock (&lock);

  g_hash_table_iter_init (&iter, methods);
  while (g_hash_table_iter_next (&iter, &hooked_method, &replacement_method))
  {
    void ** quick_code;

    *((uint32_t *) replacement_method) = *((uint32_t *) hooked_method);

    quick_code = hooked_method + quick_code_offset;
    if (*quick_code == nterp_entrypoint)
      *quick_code = quick_to_interpreter_bridge;
  }

  g_mutex_unlock (&lock);
}

void
delete_replacement_method (gpointer original_method)
{
  gpointer replacement_method;

  g_mutex_lock (&lock);

  replacement_method = g_hash_table_lookup (methods, original_method);
  if (replacement_method != NULL)
  {
    g_hash_table_remove (methods, original_method);
    g_hash_table_remove (replacements, replacement_method);
  }

  g_mutex_unlock (&lock);
}

gpointer
translate_method (gpointer method)
{
  gpointer translated_method;

  g_mutex_lock (&lock);

  translated_method = g_hash_table_lookup (replacements, method);

  g_mutex_unlock (&lock);

  return (translated_method != NULL) ? translated_method : method;
}

gpointer
find_replacement_method_from_quick_code (gpointer method,
                                         gpointer thread)
{
  gpointer replacement_method;
  gpointer managed_stack;
  gpointer top_quick_frame;
  gpointer link_managed_stack;
  gpointer * link_top_quick_frame;

  replacement_method = get_replacement_method (method);
  if (replacement_method == NULL)
    return NULL;

  /*
   * Stack check.
   *
   * Return NULL to indicate that the original method should be invoked, otherwise
   * return a pointer to the replacement ArtMethod.
   *
   * If the caller is our own JNI replacement stub, then a stack transition must
   * have been pushed onto the current thread's linked list.
   *
   * Therefore, we invoke the original method if the following conditions are met:
   *   1- The current managed stack is empty.
   *   2- The ArtMethod * inside the linked managed stack's top quick frame is the
   *      same as our replacement.
   */
  managed_stack = thread + ${n.managedStack};
  top_quick_frame = *((gpointer *) (managed_stack + ${r.topQuickFrame}));
  if (top_quick_frame != NULL)
    return replacement_method;

  link_managed_stack = *((gpointer *) (managed_stack + ${r.link}));
  if (link_managed_stack == NULL)
    return replacement_method;

  link_top_quick_frame = GSIZE_TO_POINTER (*((gsize *) (link_managed_stack + ${r.topQuickFrame})) & ~((gsize) 1));
  if (link_top_quick_frame == NULL || *link_top_quick_frame != replacement_method)
    return replacement_method;

  return NULL;
}

void
on_interpreter_do_call (GumInvocationContext * ic)
{
  gpointer method, replacement_method;

  method = gum_invocation_context_get_nth_argument (ic, 0);

  replacement_method = get_replacement_method (method);
  if (replacement_method != NULL)
    gum_invocation_context_replace_nth_argument (ic, 0, replacement_method);
}

gpointer
on_art_method_get_oat_quick_method_header (gpointer method,
                                           gpointer pc)
{
  if (is_replacement_method (method))
    return NULL;

  return get_oat_quick_method_header_impl (method, pc);
}

void
on_art_method_pretty_method (GumInvocationContext * ic)
{
  const guint this_arg_index = ${Process.arch==="arm64"?0:1};
  gpointer method;

  method = gum_invocation_context_get_nth_argument (ic, this_arg_index);
  if (method == NULL)
    gum_invocation_context_replace_nth_argument (ic, this_arg_index, last_seen_art_method);
  else
    last_seen_art_method = method;
}

void
on_leave_gc_concurrent_copying_copying_phase (GumInvocationContext * ic)
{
  GHashTableIter iter;
  gpointer hooked_method, replacement_method;

  g_mutex_lock (&lock);

  g_hash_table_iter_init (&iter, methods);
  while (g_hash_table_iter_next (&iter, &hooked_method, &replacement_method))
    *((uint32_t *) replacement_method) = *((uint32_t *) hooked_method);

  g_mutex_unlock (&lock);
}
`,i=8,s=L,a=L,l=L,u=Memory.alloc(i+s+a+l),d=u.add(i),h=d.add(s),p=h.add(a),m=t.find(L===4?"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEj":"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEm"),f=new CModule(o,{lock:u,methods:d,replacements:h,last_seen_art_method:p,get_oat_quick_method_header_impl:m??ptr("0xdeadbeef")}),g={exceptions:"propagate",scheduling:"exclusive"};return{handle:f,replacedMethods:{isReplacement:new NativeFunction(f.is_replacement_method,"bool",["pointer"],g),get:new NativeFunction(f.get_replacement_method,"pointer",["pointer"],g),set:new NativeFunction(f.set_replacement_method,"void",["pointer","pointer"],g),synchronize:new NativeFunction(f.synchronize_replacement_methods,"void",["uint","pointer","pointer"],g),delete:new NativeFunction(f.delete_replacement_method,"void",["pointer"],g),translate:new NativeFunction(f.translate_method,"pointer",["pointer"],g),findReplacementFromQuickCode:f.find_replacement_method_from_quick_code},getOatQuickMethodHeaderImpl:m,hooks:{Interpreter:{doCall:f.on_interpreter_do_call},ArtMethod:{getOatQuickMethodHeader:f.on_art_method_get_oat_quick_method_header,prettyMethod:f.on_art_method_pretty_method},Gc:{copyingPhase:{onLeave:f.on_leave_gc_concurrent_copying_copying_phase},runFlip:{onEnter:f.on_leave_gc_concurrent_copying_copying_phase}}}}}function $u(t){Fi||(Fi=!0,Gu(t),zu(),Bu(),Hu())}function Gu(t){let e=ne();[e.artQuickGenericJniTrampoline,e.artQuickToInterpreterBridge,e.artQuickResolutionTrampoline].forEach(r=>{Memory.protect(r,32,"rwx");let o=new jn(r);o.activate(t),Xi.push(o)})}function zu(){let t=ne(),e=be(),{isApiLevel34OrApexEquivalent:n}=t,r;if(e<=22)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_6mirror9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(e<=33&&!n)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(n)r=/^_ZN3art11interpreter6DoCallILb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtbPNS_6JValueE$/;else throw new Error("Unable to find method invocation in ART; please file a bug");let o=t.module,i=[...o.enumerateExports(),...o.enumerateSymbols()].filter(s=>r.test(s.name));if(i.length===0)throw new Error("Unable to find method invocation in ART; please file a bug");for(let s of i)Interceptor.attach(s.address,Ee.hooks.Interpreter.doCall)}function Bu(){let t=ne(),n=t.module.findSymbolByName("_ZN3art2gc4Heap22CollectGarbageInternalENS0_9collector6GcTypeENS0_7GcCauseEbj");if(n===null)return;let{artNterpEntryPoint:r,artQuickToInterpreterBridge:o}=t,i=De(t.vm).offset.quickCode;Interceptor.attach(n,{onLeave(){Ee.replacedMethods.synchronize(i,r,o)}})}function Hu(){let t=[["_ZN3art11ClassLinker26VisiblyInitializedCallback22MarkVisiblyInitializedEPNS_6ThreadE","e90340f8 : ff0ff0ff"],["_ZN3art11ClassLinker26VisiblyInitializedCallback29AdjustThreadVisibilityCounterEPNS_6ThreadEl","7f0f00f9 : 1ffcffff"]],e=ne(),n=e.module;for(let[r,o]of t){let i=n.findSymbolByName(r);if(i===null)continue;let s=Memory.scanSync(i,8192,o);if(s.length===0)return;let{artNterpEntryPoint:a,artQuickToInterpreterBridge:l}=e,c=De(e.vm).offset.quickCode;Interceptor.attach(s[0].address,function(){Ee.replacedMethods.synchronize(c,a,l)});return}}function Ju(t){if(ji)return;if(ji=!0,!Wu()){let{getOatQuickMethodHeaderImpl:i}=Ee;if(i===null)return;try{Interceptor.replace(i,Ee.hooks.ArtMethod.getOatQuickMethodHeader)}catch{}}let e=be(),n=null,r=ne();e>28?n=r.find("_ZN3art2gc9collector17ConcurrentCopying12CopyingPhaseEv"):e>22&&(n=r.find("_ZN3art2gc9collector17ConcurrentCopying12MarkingPhaseEv")),n!==null&&Interceptor.attach(n,Ee.hooks.Gc.copyingPhase);let o=null;o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_"),o===null&&(o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_b")),o!==null&&Interceptor.attach(o,Ee.hooks.Gc.runFlip)}var Zu={arm:{signatures:[{pattern:["b0 68","01 30","0c d0","1b 98",":","c0 ff","c0 ff","00 ff","00 2f"],validateMatch:Hr},{pattern:["d8 f8 08 00","01 30","0c d0","1b 98",":","f0 ff ff 0f","ff ff","00 ff","00 2f"],validateMatch:Hr},{pattern:["b0 68","01 30","40 f0 c3 80","00 25",":","c0 ff","c0 ff","c0 fb 00 d0","ff f8"],validateMatch:Hr}],instrument:Ku},arm64:{signatures:[{pattern:["0a 40 b9","1f 05 00 31","40 01 00 54","88 39 00 f0",":","fc ff ff","1f fc ff ff","1f 00 00 ff","00 00 00 9f"],offset:1,validateMatch:Jr},{pattern:["0a 40 b9","1f 05 00 31","40 01 00 54","00 0e 40 f9",":","fc ff ff","1f fc ff ff","1f 00 00 ff","00 fc ff ff"],offset:1,validateMatch:Jr},{pattern:["0a 40 b9","1f 05 00 31","01 34 00 54","e0 03 1f aa",":","fc ff ff","1f fc ff ff","1f 00 00 ff","e0 ff ff ff"],offset:1,validateMatch:Jr}],instrument:Yu}};function Hr({address:t,size:e}){let n=Instruction.parse(t.or(1)),[r,o]=n.operands,i=o.value.base,s=r.value,a=Instruction.parse(n.next.add(2)),l=ptr(a.operands[0].value),c=a.address.add(a.size),u,d;return a.mnemonic==="beq"?(u=c,d=l):(u=l,d=c),at(u.or(1),h,{limit:3});function h(p){let{mnemonic:m}=p;if(!(m==="ldr"||m==="ldr.w"))return null;let{base:f,disp:g}=p.operands[1].value;return f===i&&g===20?{methodReg:i,scratchReg:s,target:{whenTrue:l,whenRegularMethod:u,whenRuntimeMethod:d}}:null}}function Jr({address:t,size:e}){let[n,r]=Instruction.parse(t).operands,o=r.value.base,i="x"+n.value.substring(1),s=Instruction.parse(t.add(8)),a=ptr(s.operands[0].value),l=t.add(12),c,u;return s.mnemonic==="b.eq"?(c=l,u=a):(c=a,u=l),at(c,d,{limit:3});function d(h){if(h.mnemonic!=="ldr")return null;let{base:p,disp:m}=h.operands[1].value;return p===o&&m===24?{methodReg:o,scratchReg:i,target:{whenTrue:a,whenRegularMethod:c,whenRuntimeMethod:u}}:null}}function Wu(){if(be()<31)return!1;let t=Zu[Process.arch];if(t===void 0)return!1;let e=t.signatures.map(({pattern:r,offset:o=0,validateMatch:i=qu})=>({pattern:new MatchPattern(r.join("")),offset:o,validateMatch:i})),n=[];for(let{base:r,size:o}of ne().module.enumerateRanges("--x"))for(let{pattern:i,offset:s,validateMatch:a}of e){let l=Memory.scanSync(r,o,i).map(({address:c,size:u})=>({address:c.sub(s),size:u+s})).filter(c=>{let u=a(c);return u===null?!1:(c.validationResult=u,!0)});n.push(...l)}return n.length===0?!1:(n.forEach(t.instrument),!0)}function qu(){return{}}var Rn=class{constructor(e,n,r){this.address=e,this.size=n,this.originalCode=e.readByteArray(n),this.trampoline=r}revert(){Memory.patchCode(this.address,this.size,e=>{e.writeByteArray(this.originalCode)})}};function Ku({address:t,size:e,validationResult:n}){let{methodReg:r,target:o}=n,i=Memory.alloc(Process.pageSize),s=e;Memory.patchCode(i,256,a=>{let l=new ThumbWriter(a,{pc:i}),c=new ThumbRelocator(t,l);for(let m=0;m!==2;m++)c.readOne();c.writeAll(),c.readOne(),c.skipOne(),l.putBCondLabel("eq","runtime_or_replacement_method");let u=[45,237,16,10];l.putBytes(u);let d=["r0","r1","r2","r3"];l.putPushRegs(d),l.putCallAddressWithArguments(Ee.replacedMethods.isReplacement,[r]),l.putCmpRegImm("r0",0),l.putPopRegs(d);let h=[189,236,16,10];l.putBytes(h),l.putBCondLabel("ne","runtime_or_replacement_method"),l.putBLabel("regular_method"),c.readOne();let p=c.input.address.equals(o.whenRegularMethod);for(l.putLabel(p?"regular_method":"runtime_or_replacement_method"),c.writeOne();s<10;){let m=c.readOne();if(m===0){s=10;break}s=m}c.writeAll(),l.putBranchAddress(t.add(s+1)),l.putLabel(p?"runtime_or_replacement_method":"regular_method"),l.putBranchAddress(o.whenTrue),l.flush()}),so.push(new Rn(t,s,i)),Memory.patchCode(t,s,a=>{let l=new ThumbWriter(a,{pc:t});l.putLdrRegAddress("pc",i.or(1)),l.flush()})}function Yu({address:t,size:e,validationResult:n}){let{methodReg:r,scratchReg:o,target:i}=n,s=Memory.alloc(Process.pageSize);Memory.patchCode(s,256,a=>{let l=new Arm64Writer(a,{pc:s}),c=new Arm64Relocator(t,l);for(let m=0;m!==2;m++)c.readOne();c.writeAll(),c.readOne(),c.skipOne(),l.putBCondLabel("eq","runtime_or_replacement_method");let u=["d0","d1","d2","d3","d4","d5","d6","d7","x0","x1","x2","x3","x4","x5","x6","x7","x8","x9","x10","x11","x12","x13","x14","x15","x16","x17"],d=u.length;for(let m=0;m!==d;m+=2)l.putPushRegReg(u[m],u[m+1]);l.putCallAddressWithArguments(Ee.replacedMethods.isReplacement,[r]),l.putCmpRegReg("x0","xzr");for(let m=d-2;m>=0;m-=2)l.putPopRegReg(u[m],u[m+1]);l.putBCondLabel("ne","runtime_or_replacement_method"),l.putBLabel("regular_method"),c.readOne();let h=c.input,p=h.address.equals(i.whenRegularMethod);l.putLabel(p?"regular_method":"runtime_or_replacement_method"),c.writeOne(),l.putBranchAddress(h.next),l.putLabel(p?"runtime_or_replacement_method":"regular_method"),l.putBranchAddress(i.whenTrue),l.flush()}),so.push(new Rn(t,e,s)),Memory.patchCode(t,e,a=>{let l=new Arm64Writer(a,{pc:t});l.putLdrRegAddress(o,s),l.putBrReg(o),l.flush()})}function Qu(t){return new Qi(t)}function Xu(t){return Ee.replacedMethods.translate(t)}function ho(t,e={}){let{limit:n=16}=e,r=t.getEnv();return tn===null&&(tn=ed(t,r)),tn.backtrace(r,n)}function ed(t,e){let n=ne(),r=Memory.alloc(Process.pointerSize),o=new CModule(`
#include <glib.h>
#include <stdbool.h>
#include <string.h>
#include <gum/gumtls.h>
#include <json-glib/json-glib.h>

typedef struct _ArtBacktrace ArtBacktrace;
typedef struct _ArtStackFrame ArtStackFrame;

typedef struct _ArtStackVisitor ArtStackVisitor;
typedef struct _ArtStackVisitorVTable ArtStackVisitorVTable;

typedef struct _ArtClass ArtClass;
typedef struct _ArtMethod ArtMethod;
typedef struct _ArtThread ArtThread;
typedef struct _ArtContext ArtContext;

typedef struct _JNIEnv JNIEnv;

typedef struct _StdString StdString;
typedef struct _StdTinyString StdTinyString;
typedef struct _StdLargeString StdLargeString;

typedef enum {
  STACK_WALK_INCLUDE_INLINED_FRAMES,
  STACK_WALK_SKIP_INLINED_FRAMES,
} StackWalkKind;

struct _StdTinyString
{
  guint8 unused;
  gchar data[(3 * sizeof (gpointer)) - 1];
};

struct _StdLargeString
{
  gsize capacity;
  gsize size;
  gchar * data;
};

struct _StdString
{
  union
  {
    guint8 flags;
    StdTinyString tiny;
    StdLargeString large;
  };
};

struct _ArtBacktrace
{
  GChecksum * id;
  GArray * frames;
  gchar * frames_json;
};

struct _ArtStackFrame
{
  ArtMethod * method;
  gsize dexpc;
  StdString description;
};

struct _ArtStackVisitorVTable
{
  void (* unused1) (void);
  void (* unused2) (void);
  bool (* visit) (ArtStackVisitor * visitor);
};

struct _ArtStackVisitor
{
  ArtStackVisitorVTable * vtable;

  guint8 padding[512];

  ArtStackVisitorVTable vtable_storage;

  ArtBacktrace * backtrace;
};

struct _ArtMethod
{
  guint32 declaring_class;
  guint32 access_flags;
};

extern GumTlsKey current_backtrace;

extern void (* perform_art_thread_state_transition) (JNIEnv * env);

extern ArtContext * art_make_context (ArtThread * thread);

extern void art_stack_visitor_init (ArtStackVisitor * visitor, ArtThread * thread, void * context, StackWalkKind walk_kind,
    size_t num_frames, bool check_suspended);
extern void art_stack_visitor_walk_stack (ArtStackVisitor * visitor, bool include_transitions);
extern ArtMethod * art_stack_visitor_get_method (ArtStackVisitor * visitor);
extern void art_stack_visitor_describe_location (StdString * description, ArtStackVisitor * visitor);
extern ArtMethod * translate_method (ArtMethod * method);
extern void translate_location (ArtMethod * method, guint32 pc, const gchar ** source_file, gint32 * line_number);
extern void get_class_location (StdString * result, ArtClass * klass);
extern void cxx_delete (void * mem);
extern unsigned long strtoul (const char * str, char ** endptr, int base);

static bool visit_frame (ArtStackVisitor * visitor);
static void art_stack_frame_destroy (ArtStackFrame * frame);

static void append_jni_type_name (GString * s, const gchar * name, gsize length);

static void std_string_destroy (StdString * str);
static gchar * std_string_get_data (StdString * str);

void
init (void)
{
  current_backtrace = gum_tls_key_new ();
}

void
finalize (void)
{
  gum_tls_key_free (current_backtrace);
}

ArtBacktrace *
_create (JNIEnv * env,
         guint limit)
{
  ArtBacktrace * bt;

  bt = g_new (ArtBacktrace, 1);
  bt->id = g_checksum_new (G_CHECKSUM_SHA1);
  bt->frames = (limit != 0)
      ? g_array_sized_new (FALSE, FALSE, sizeof (ArtStackFrame), limit)
      : g_array_new (FALSE, FALSE, sizeof (ArtStackFrame));
  g_array_set_clear_func (bt->frames, (GDestroyNotify) art_stack_frame_destroy);
  bt->frames_json = NULL;

  gum_tls_key_set_value (current_backtrace, bt);

  perform_art_thread_state_transition (env);

  gum_tls_key_set_value (current_backtrace, NULL);

  return bt;
}

void
_on_thread_state_transition_complete (ArtThread * thread)
{
  ArtContext * context;
  ArtStackVisitor visitor = {
    .vtable_storage = {
      .visit = visit_frame,
    },
  };

  context = art_make_context (thread);

  art_stack_visitor_init (&visitor, thread, context, STACK_WALK_SKIP_INLINED_FRAMES, 0, true);
  visitor.vtable = &visitor.vtable_storage;
  visitor.backtrace = gum_tls_key_get_value (current_backtrace);

  art_stack_visitor_walk_stack (&visitor, false);

  cxx_delete (context);
}

static bool
visit_frame (ArtStackVisitor * visitor)
{
  ArtBacktrace * bt = visitor->backtrace;
  ArtStackFrame frame;
  const gchar * description, * dexpc_part;

  frame.method = art_stack_visitor_get_method (visitor);

  art_stack_visitor_describe_location (&frame.description, visitor);

  description = std_string_get_data (&frame.description);
  if (strstr (description, " '<") != NULL)
    goto skip;

  dexpc_part = strstr (description, " at dex PC 0x");
  if (dexpc_part == NULL)
    goto skip;
  frame.dexpc = strtoul (dexpc_part + 13, NULL, 16);

  g_array_append_val (bt->frames, frame);

  g_checksum_update (bt->id, (guchar *) &frame.method, sizeof (frame.method));
  g_checksum_update (bt->id, (guchar *) &frame.dexpc, sizeof (frame.dexpc));

  return true;

skip:
  std_string_destroy (&frame.description);
  return true;
}

static void
art_stack_frame_destroy (ArtStackFrame * frame)
{
  std_string_destroy (&frame->description);
}

void
_destroy (ArtBacktrace * backtrace)
{
  g_free (backtrace->frames_json);
  g_array_free (backtrace->frames, TRUE);
  g_checksum_free (backtrace->id);
  g_free (backtrace);
}

const gchar *
_get_id (ArtBacktrace * backtrace)
{
  return g_checksum_get_string (backtrace->id);
}

const gchar *
_get_frames (ArtBacktrace * backtrace)
{
  GArray * frames = backtrace->frames;
  JsonBuilder * b;
  guint i;
  JsonNode * root;

  if (backtrace->frames_json != NULL)
    return backtrace->frames_json;

  b = json_builder_new_immutable ();

  json_builder_begin_array (b);

  for (i = 0; i != frames->len; i++)
  {
    ArtStackFrame * frame = &g_array_index (frames, ArtStackFrame, i);
    gchar * description, * ret_type, * paren_open, * paren_close, * arg_types, * token, * method_name, * class_name;
    GString * signature;
    gchar * cursor;
    ArtMethod * translated_method;
    StdString location;
    gsize dexpc;
    const gchar * source_file;
    gint32 line_number;

    description = std_string_get_data (&frame->description);

    ret_type = strchr (description, '\\'') + 1;

    paren_open = strchr (ret_type, '(');
    paren_close = strchr (paren_open, ')');
    *paren_open = '\\0';
    *paren_close = '\\0';

    arg_types = paren_open + 1;

    token = strrchr (ret_type, '.');
    *token = '\\0';

    method_name = token + 1;

    token = strrchr (ret_type, ' ');
    *token = '\\0';

    class_name = token + 1;

    signature = g_string_sized_new (128);

    append_jni_type_name (signature, class_name, method_name - class_name - 1);
    g_string_append_c (signature, ',');
    g_string_append (signature, method_name);
    g_string_append (signature, ",(");

    if (arg_types != paren_close)
    {
      for (cursor = arg_types; cursor != NULL;)
      {
        gsize length;
        gchar * next;

        token = strstr (cursor, ", ");
        if (token != NULL)
        {
          length = token - cursor;
          next = token + 2;
        }
        else
        {
          length = paren_close - cursor;
          next = NULL;
        }

        append_jni_type_name (signature, cursor, length);

        cursor = next;
      }
    }

    g_string_append_c (signature, ')');

    append_jni_type_name (signature, ret_type, class_name - ret_type - 1);

    translated_method = translate_method (frame->method);
    dexpc = (translated_method == frame->method) ? frame->dexpc : 0;

    get_class_location (&location, GSIZE_TO_POINTER (translated_method->declaring_class));

    translate_location (translated_method, dexpc, &source_file, &line_number);

    json_builder_begin_object (b);

    json_builder_set_member_name (b, "signature");
    json_builder_add_string_value (b, signature->str);

    json_builder_set_member_name (b, "origin");
    json_builder_add_string_value (b, std_string_get_data (&location));

    json_builder_set_member_name (b, "className");
    json_builder_add_string_value (b, class_name);

    json_builder_set_member_name (b, "methodName");
    json_builder_add_string_value (b, method_name);

    json_builder_set_member_name (b, "methodFlags");
    json_builder_add_int_value (b, translated_method->access_flags);

    json_builder_set_member_name (b, "fileName");
    json_builder_add_string_value (b, source_file);

    json_builder_set_member_name (b, "lineNumber");
    json_builder_add_int_value (b, line_number);

    json_builder_end_object (b);

    std_string_destroy (&location);
    g_string_free (signature, TRUE);
  }

  json_builder_end_array (b);

  root = json_builder_get_root (b);
  backtrace->frames_json = json_to_string (root, FALSE);
  json_node_unref (root);

  return backtrace->frames_json;
}

static void
append_jni_type_name (GString * s,
                      const gchar * name,
                      gsize length)
{
  gchar shorty = '\\0';
  gsize i;

  switch (name[0])
  {
    case 'b':
      if (strncmp (name, "boolean", length) == 0)
        shorty = 'Z';
      else if (strncmp (name, "byte", length) == 0)
        shorty = 'B';
      break;
    case 'c':
      if (strncmp (name, "char", length) == 0)
        shorty = 'C';
      break;
    case 'd':
      if (strncmp (name, "double", length) == 0)
        shorty = 'D';
      break;
    case 'f':
      if (strncmp (name, "float", length) == 0)
        shorty = 'F';
      break;
    case 'i':
      if (strncmp (name, "int", length) == 0)
        shorty = 'I';
      break;
    case 'l':
      if (strncmp (name, "long", length) == 0)
        shorty = 'J';
      break;
    case 's':
      if (strncmp (name, "short", length) == 0)
        shorty = 'S';
      break;
    case 'v':
      if (strncmp (name, "void", length) == 0)
        shorty = 'V';
      break;
  }

  if (shorty != '\\0')
  {
    g_string_append_c (s, shorty);

    return;
  }

  if (length > 2 && name[length - 2] == '[' && name[length - 1] == ']')
  {
    g_string_append_c (s, '[');
    append_jni_type_name (s, name, length - 2);

    return;
  }

  g_string_append_c (s, 'L');

  for (i = 0; i != length; i++)
  {
    gchar ch = name[i];
    if (ch != '.')
      g_string_append_c (s, ch);
    else
      g_string_append_c (s, '/');
  }

  g_string_append_c (s, ';');
}

static void
std_string_destroy (StdString * str)
{
  bool is_large = (str->flags & 1) != 0;
  if (is_large)
    cxx_delete (str->large.data);
}

static gchar *
std_string_get_data (StdString * str)
{
  bool is_large = (str->flags & 1) != 0;
  return is_large ? str->large.data : str->tiny.data;
}
`,{current_backtrace:Memory.alloc(Process.pointerSize),perform_art_thread_state_transition:r,art_make_context:n["art::Thread::GetLongJumpContext"]??n["art::Context::Create"],art_stack_visitor_init:n["art::StackVisitor::StackVisitor"],art_stack_visitor_walk_stack:n["art::StackVisitor::WalkStack"],art_stack_visitor_get_method:n["art::StackVisitor::GetMethod"],art_stack_visitor_describe_location:n["art::StackVisitor::DescribeLocation"],translate_method:Ee.replacedMethods.translate,translate_location:n["art::Monitor::TranslateLocation"],get_class_location:n["art::mirror::Class::GetLocation"],cxx_delete:n.$delete,strtoul:Process.getModuleByName("libc.so").getExportByName("strtoul")}),i=new NativeFunction(o._create,"pointer",["pointer","uint"],pe),s=new NativeFunction(o._destroy,"void",["pointer"],pe),a={exceptions:"propagate",scheduling:"exclusive"},l=new NativeFunction(o._get_id,"pointer",["pointer"],a),c=new NativeFunction(o._get_frames,"pointer",["pointer"],a),u=rs(t,e,o._on_thread_state_transition_complete);o._performData=u,r.writePointer(u),o.backtrace=(h,p)=>{let m=i(h,p),f=new Xr(m);return Script.bindWeak(f,d.bind(null,m)),f};function d(h){s(h)}return o.getId=h=>l(h).readUtf8String(),o.getFrames=h=>JSON.parse(c(h).readUtf8String()),o}var Xr=class{constructor(e){this.handle=e}get id(){return tn.getId(this.handle)}get frames(){return tn.getFrames(this.handle)}};function fo(){On.forEach(t=>{t.vtablePtr.writePointer(t.vtable),t.vtableCountPtr.writeS32(t.vtableCount)}),On.clear();for(let t of Xi.splice(0))t.deactivate();for(let t of so.splice(0))t.revert()}function mo(t){return ts(t,"art::jni::JniIdManager::DecodeMethodId")}function zi(t){return ts(t,"art::jni::JniIdManager::DecodeFieldId")}function ts(t,e){let n=ne(),r=Ki(n).offset,o=r.jniIdManager,i=r.jniIdsIndirection;if(o!==null&&i!==null){let s=n.artRuntime;if(s.add(i).readInt()!==Lc){let l=s.add(o).readPointer();return n[e](l,t)}}return t}var td={ia32:nd,x64:rd,arm:od,arm64:id};function nd(t,e,n,r,o){let i=It(o).offset,s=De(o).offset,a;return Memory.patchCode(t,128,l=>{let c=new X86Writer(l,{pc:t}),u=new X86Relocator(e,c),d=[15,174,4,36],h=[15,174,12,36];c.putPushax(),c.putMovRegReg("ebp","esp"),c.putAndRegU32("esp",4294967280),c.putSubRegImm("esp",512),c.putBytes(d),c.putMovRegFsU32Ptr("ebx",i.self),c.putCallAddressWithAlignedArguments(Ee.replacedMethods.findReplacementFromQuickCode,["eax","ebx"]),c.putTestRegReg("eax","eax"),c.putJccShortLabel("je","restore_registers","no-hint"),c.putMovRegOffsetPtrReg("ebp",28,"eax"),c.putLabel("restore_registers"),c.putBytes(h),c.putMovRegReg("esp","ebp"),c.putPopax(),c.putJccShortLabel("jne","invoke_replacement","no-hint");do a=u.readOne();while(a<n&&!u.eoi);u.writeAll(),u.eoi||c.putJmpAddress(e.add(a)),c.putLabel("invoke_replacement"),c.putJmpRegOffsetPtr("eax",s.quickCode),c.flush()}),a}function rd(t,e,n,r,o){let i=It(o).offset,s=De(o).offset,a;return Memory.patchCode(t,256,l=>{let c=new X86Writer(l,{pc:t}),u=new X86Relocator(e,c),d=[15,174,4,36],h=[15,174,12,36];c.putPushax(),c.putMovRegReg("rbp","rsp"),c.putAndRegU32("rsp",4294967280),c.putSubRegImm("rsp",512),c.putBytes(d),c.putMovRegGsU32Ptr("rbx",i.self),c.putCallAddressWithAlignedArguments(Ee.replacedMethods.findReplacementFromQuickCode,["rdi","rbx"]),c.putTestRegReg("rax","rax"),c.putJccShortLabel("je","restore_registers","no-hint"),c.putMovRegOffsetPtrReg("rbp",64,"rax"),c.putLabel("restore_registers"),c.putBytes(h),c.putMovRegReg("rsp","rbp"),c.putPopax(),c.putJccShortLabel("jne","invoke_replacement","no-hint");do a=u.readOne();while(a<n&&!u.eoi);u.writeAll(),u.eoi||c.putJmpAddress(e.add(a)),c.putLabel("invoke_replacement"),c.putJmpRegOffsetPtr("rdi",s.quickCode),c.flush()}),a}function od(t,e,n,r,o){let i=De(o).offset,s=e.and(oo),a;return Memory.patchCode(t,128,l=>{let c=new ThumbWriter(l,{pc:t}),u=new ThumbRelocator(s,c),d=[45,237,16,10],h=[189,236,16,10];c.putPushRegs(["r1","r2","r3","r5","r6","r7","r8","r10","r11","lr"]),c.putBytes(d),c.putSubRegRegImm("sp","sp",8),c.putStrRegRegOffset("r0","sp",0),c.putCallAddressWithArguments(Ee.replacedMethods.findReplacementFromQuickCode,["r0","r9"]),c.putCmpRegImm("r0",0),c.putBCondLabel("eq","restore_registers"),c.putStrRegRegOffset("r0","sp",0),c.putLabel("restore_registers"),c.putLdrRegRegOffset("r0","sp",0),c.putAddRegRegImm("sp","sp",8),c.putBytes(h),c.putPopRegs(["lr","r11","r10","r8","r7","r6","r5","r3","r2","r1"]),c.putBCondLabel("ne","invoke_replacement");do a=u.readOne();while(a<n&&!u.eoi);u.writeAll(),u.eoi||c.putLdrRegAddress("pc",e.add(a)),c.putLabel("invoke_replacement"),c.putLdrRegRegOffset("pc","r0",i.quickCode),c.flush()}),a}function id(t,e,n,{availableScratchRegs:r},o){let i=De(o).offset,s;return Memory.patchCode(t,256,a=>{let l=new Arm64Writer(a,{pc:t}),c=new Arm64Relocator(e,l);l.putPushRegReg("d0","d1"),l.putPushRegReg("d2","d3"),l.putPushRegReg("d4","d5"),l.putPushRegReg("d6","d7"),l.putPushRegReg("x1","x2"),l.putPushRegReg("x3","x4"),l.putPushRegReg("x5","x6"),l.putPushRegReg("x7","x20"),l.putPushRegReg("x21","x22"),l.putPushRegReg("x23","x24"),l.putPushRegReg("x25","x26"),l.putPushRegReg("x27","x28"),l.putPushRegReg("x29","lr"),l.putSubRegRegImm("sp","sp",16),l.putStrRegRegOffset("x0","sp",0),l.putCallAddressWithArguments(Ee.replacedMethods.findReplacementFromQuickCode,["x0","x19"]),l.putCmpRegReg("x0","xzr"),l.putBCondLabel("eq","restore_registers"),l.putStrRegRegOffset("x0","sp",0),l.putLabel("restore_registers"),l.putLdrRegRegOffset("x0","sp",0),l.putAddRegRegImm("sp","sp",16),l.putPopRegReg("x29","lr"),l.putPopRegReg("x27","x28"),l.putPopRegReg("x25","x26"),l.putPopRegReg("x23","x24"),l.putPopRegReg("x21","x22"),l.putPopRegReg("x7","x20"),l.putPopRegReg("x5","x6"),l.putPopRegReg("x3","x4"),l.putPopRegReg("x1","x2"),l.putPopRegReg("d6","d7"),l.putPopRegReg("d4","d5"),l.putPopRegReg("d2","d3"),l.putPopRegReg("d0","d1"),l.putBCondLabel("ne","invoke_replacement");do s=c.readOne();while(s<n&&!c.eoi);if(c.writeAll(),!c.eoi){let u=Array.from(r)[0];l.putLdrRegAddress(u,e.add(s)),l.putBrReg(u)}l.putLabel("invoke_replacement"),l.putLdrRegRegOffset("x16","x0",i.quickCode),l.putBrReg("x16"),l.flush()}),s}var sd={ia32:Bi,x64:Bi,arm:ad,arm64:ld};function Bi(t,e,n){Memory.patchCode(t,16,r=>{let o=new X86Writer(r,{pc:t});o.putJmpAddress(e),o.flush()})}function ad(t,e,n){let r=t.and(oo);Memory.patchCode(r,16,o=>{let i=new ThumbWriter(o,{pc:r});i.putLdrRegAddress("pc",e.or(1)),i.flush()})}function ld(t,e,n){Memory.patchCode(t,16,r=>{let o=new Arm64Writer(r,{pc:t});n===16?o.putLdrRegAddress("x16",e):o.putAdrpRegAddress("x16",e),o.putBrReg("x16"),o.flush()})}var cd={ia32:5,x64:16,arm:8,arm64:16},jn=class{constructor(e){this.quickCode=e,this.quickCodeAddress=Process.arch==="arm"?e.and(oo):e,this.redirectSize=0,this.trampoline=null,this.overwrittenPrologue=null,this.overwrittenPrologueLength=0}_canRelocateCode(e,n){let r=Qr[Process.arch],o=Uu[Process.arch],{quickCodeAddress:i}=this,s=new r(i),a=new o(i,s),l;if(Process.arch==="arm64"){let c=new Set(["x16","x17"]);do{let u=a.readOne(),d=new Set(c),{read:h,written:p}=a.input.regsAccessed;for(let m of[h,p])for(let f of m){let g;f.startsWith("w")?g="x"+f.substring(1):g=f,d.delete(g)}if(d.size===0)break;l=u,c=d}while(l<e&&!a.eoi);n.availableScratchRegs=c}else do l=a.readOne();while(l<e&&!a.eoi);return l>=e}_allocateTrampoline(){Cn===null&&(Cn=Sr(L===4?128:256));let e=cd[Process.arch],n,r,o=1,i={};if(L===4||this._canRelocateCode(e,i))n=e,r={};else{let s;Process.arch==="x64"?(n=5,s=Ac):Process.arch==="arm64"&&(n=8,s=Nc,o=4096),r={near:this.quickCodeAddress,maxDistance:s}}return this.redirectSize=n,this.trampoline=Cn.allocateSlice(r,o),i}_destroyTrampoline(){Cn.freeSlice(this.trampoline)}activate(e){let n=this._allocateTrampoline(),{trampoline:r,quickCode:o,redirectSize:i}=this,s=td[Process.arch],a=s(r,o,i,n,e);this.overwrittenPrologueLength=a,this.overwrittenPrologue=Memory.dup(this.quickCodeAddress,a);let l=sd[Process.arch];l(o,r,i)}deactivate(){let{quickCodeAddress:e,overwrittenPrologueLength:n}=this,r=Qr[Process.arch];Memory.patchCode(e,n,o=>{let i=new r(o,{pc:e}),{overwrittenPrologue:s}=this;i.putBytes(s.readByteArray(n)),i.flush()}),this._destroyTrampoline()}};function ud(t){let e=ne(),{module:n,artClassLinker:r}=e;return t.equals(r.quickGenericJniTrampoline)||t.equals(r.quickToInterpreterBridgeTrampoline)||t.equals(r.quickResolutionTrampoline)||t.equals(r.quickImtConflictTrampoline)||t.compare(n.base)>=0&&t.compare(n.base.add(n.size))<0}var eo=class{constructor(e){let n=mo(e);this.methodId=n,this.originalMethod=null,this.hookedMethodId=n,this.replacementMethodId=null,this.interceptor=null}replace(e,n,r,o,i){let{kAccCompileDontBother:s,artNterpEntryPoint:a}=i;this.originalMethod=Hi(this.methodId,o);let l=this.originalMethod.accessFlags;if((l&xc)!==0&&dd()){let p=this.originalMethod.jniCode;this.hookedMethodId=p.add(2*L).readPointer(),this.originalMethod=Hi(this.hookedMethodId,o)}let{hookedMethodId:c}=this,u=hd(c,o);this.replacementMethodId=u,Mn(u,{jniCode:e,accessFlags:(l&~(vc|bc|Ii)|In|s)>>>0,quickCode:i.artClassLinker.quickGenericJniTrampoline,interpreterCode:i.artInterpreterToCompiledCodeBridge},o);let d=Wi|Ec|Ii;(l&In)===0&&(d|=Sc),Mn(c,{accessFlags:(l&~d|s)>>>0},o);let h=this.originalMethod.quickCode;if(a!==null&&h.equals(a)&&Mn(c,{quickCode:i.artQuickToInterpreterBridge},o),!ud(h)){let p=new jn(h);p.activate(o),this.interceptor=p}Ee.replacedMethods.set(c,u),Du(c,o)}revert(e){let{hookedMethodId:n,interceptor:r}=this;Mn(n,this.originalMethod,e),Ee.replacedMethods.delete(n),r!==null&&(r.deactivate(),this.interceptor=null)}resolveTarget(e,n,r,o){return this.hookedMethodId}};function dd(){return be()<28}function Hi(t,e){let r=De(e).offset;return["jniCode","accessFlags","quickCode","interpreterCode"].reduce((o,i)=>{let s=r[i];if(s===void 0)return o;let a=t.add(s),l=i==="accessFlags"?pc:hc;return o[i]=l.call(a),o},{})}function Mn(t,e,n){let o=De(n).offset;Object.keys(e).forEach(i=>{let s=o[i];if(s===void 0)return;let a=t.add(s);(i==="accessFlags"?fc:mc).call(a,e[i])})}var to=class{constructor(e){this.methodId=e,this.originalMethod=null}replace(e,n,r,o,i){let{methodId:s}=this;this.originalMethod=Memory.dup(s,Ur);let a=r.reduce((h,p)=>h+p.size,0);n&&a++;let l=(s.add(Oi).readU32()|In)>>>0,c=a,u=0,d=a;s.add(Oi).writeU32(l),s.add(Pc).writeU16(c),s.add(Rc).writeU16(u),s.add(jc).writeU16(d),s.add(Uc).writeU32(pd(s)),i.dvmUseJNIBridge(s,e)}revert(e){Memory.copy(this.methodId,this.originalMethod,Ur)}resolveTarget(e,n,r,o){let i=r.handle.add(qi).readPointer(),s;if(n)s=o.dvmDecodeIndirectRef(i,e.$h);else{let h=e.$borrowClassHandle(r);s=o.dvmDecodeIndirectRef(i,h.value),h.unref(r)}let a;n?a=s.add(Ic).readPointer():a=s;let l=a.toString(16),c=On.get(l);if(c===void 0){let h=a.add(kc),p=a.add(Mc),m=h.readPointer(),f=p.readS32(),g=f*L,y=Memory.alloc(2*g);Memory.copy(y,m,g),h.writePointer(y),c={classObject:a,vtablePtr:h,vtableCountPtr:p,vtable:m,vtableCount:f,shadowVtable:y,shadowVtableCount:f,targetMethods:new Map},On.set(l,c)}let u=this.methodId.toString(16),d=c.targetMethods.get(u);if(d===void 0){d=Memory.dup(this.originalMethod,Ur);let h=c.shadowVtableCount++;c.shadowVtable.add(h*L).writePointer(d),d.add(Oc).writeU16(h),c.vtableCountPtr.writeS32(c.shadowVtableCount),c.targetMethods.set(u,d)}return d}};function pd(t){if(Process.arch!=="ia32")return Pi;let e=t.add(Fc).readPointer().readCString();if(e===null||e.length===0||e.length>65535)return Pi;let n;switch(e[0]){case"V":n=Dc;break;case"F":n=Vc;break;case"D":n=$c;break;case"J":n=Gc;break;case"Z":case"B":n=Jc;break;case"C":n=Hc;break;case"S":n=Bc;break;default:n=zc;break}let r=0;for(let o=e.length-1;o>0;o--){let i=e[o];r+=i==="D"||i==="J"?2:1}return n<<Zc|r}function hd(t,e){let n=ne();if(be()<23){let r=n["art::Thread::CurrentFromGdb"]();return n["art::mirror::Object::Clone"](t,r)}return Memory.dup(t,De(e).size)}function go(t,e,n){ns(t,e,Wr,n)}function _o(t,e){ns(t,e,Zr)}function yo(t,e){let n=ne();if(be()<26)throw new Error("This API is only available on Android >= 8.0");ze(t,e,r=>{n["art::Runtime::DeoptimizeBootImage"](n.artRuntime)})}function ns(t,e,n,r){let o=ne();if(be()<24)throw new Error("This API is only available on Android >= 7.0");ze(t,e,i=>{if(be()<30){if(!o.isJdwpStarted()){let a=fd(o);nu.push(a)}o.isDebuggerActive()||o["art::Dbg::GoActive"]();let s=Memory.alloc(8+L);switch(s.writeU32(n),n){case Zr:break;case Wr:s.add(8).writePointer(r);break;default:throw new Error("Unsupported deoptimization kind")}o["art::Dbg::RequestDeoptimization"](s),o["art::Dbg::ManageDeoptimization"]()}else{let s=o.artInstrumentation;if(s===null)throw new Error("Unable to find Instrumentation class in ART; please file a bug");let a=o["art::Instrumentation::EnableDeoptimization"];switch(a!==void 0&&(s.add(Yc().offset.deoptimizationEnabled).readU8()||a(s)),n){case Zr:o["art::Instrumentation::DeoptimizeEverything"](s,Memory.allocUtf8String("frida"));break;case Wr:o["art::Instrumentation::Deoptimize"](s,r);break;default:throw new Error("Unsupported deoptimization kind")}}})}var no=class{constructor(){let e=Process.getModuleByName("libart.so"),n=e.getExportByName("_ZN3art4JDWP12JdwpAdbState6AcceptEv"),r=e.getExportByName("_ZN3art4JDWP12JdwpAdbState15ReceiveClientFdEv"),o=Ji(),i=Ji();this._controlFd=o[0],this._clientFd=i[0];let s=null;s=Interceptor.attach(n,function(a){let l=a[0];Memory.scanSync(l.add(8252),256,"00 ff ff ff ff 00")[0].address.add(1).writeS32(o[1]),s.detach()}),Interceptor.replace(r,new NativeCallback(function(a){return Interceptor.revert(r),i[1]},"int",["pointer"])),Interceptor.flush(),this._handshakeRequest=this._performHandshake()}async _performHandshake(){let e=new UnixInputStream(this._clientFd,{autoClose:!1}),n=new UnixOutputStream(this._clientFd,{autoClose:!1}),r=[74,68,87,80,45,72,97,110,100,115,104,97,107,101];try{await n.writeAll(r),await e.readAll(r.length)}catch{}}};function fd(t){let e=new no;t["art::Dbg::SetJdwpAllowed"](1);let n=md();t["art::Dbg::ConfigureJdwp"](n);let r=t["art::InternalDebuggerControlCallback::StartDebugger"];return r!==void 0?r(NULL):t["art::Dbg::StartJdwp"](),e}function md(){let t=be()<28?2:3,e=0,n=t,r=!0,o=!1,i=e,s=8+rn+2,a=Memory.alloc(s);return a.writeU32(n).add(4).writeU8(r?1:0).add(1).writeU8(o?1:0).add(1).add(rn).writeU16(i),a}function Ji(){Gr===null&&(Gr=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("socketpair"),"int",["int","int","int","pointer"]));let t=Memory.alloc(8);if(Gr(qc,Kc,0,t)===-1)throw new Error("Unable to create socketpair for JDWP");return[t.readS32(),t.add(4).readS32()]}function gd(t){let e=su().offset,n=t.vm.add(e.globalsLock),r=t.vm.add(e.globals),o=t["art::IndirectReferenceTable::Add"],i=t["art::ReaderWriterMutex::ExclusiveLock"],s=t["art::ReaderWriterMutex::ExclusiveUnlock"],a=0;return function(l,c,u){i(n,c);try{return o(r,a,u)}finally{s(n,c)}}}function _d(t){let e=t["art::Thread::DecodeJObject"];if(e===void 0)throw new Error("art::Thread::DecodeJObject is not available; please file a bug");return function(n,r,o){return e(r,o)}}var yd={ia32:Zi,x64:Zi,arm:bd,arm64:vd};function rs(t,e,n){let r=ne(),o=e.handle.readPointer(),i,s=r.find("_ZN3art3JNIILb1EE14ExceptionClearEP7_JNIEnv");s!==null?i=s:i=o.add(Dn).readPointer();let a,l=r.find("_ZN3art3JNIILb1EE10FatalErrorEP7_JNIEnvPKc");l!==null?a=l:a=o.add(Cc).readPointer();let c=yd[Process.arch];if(c===void 0)throw new Error("Not yet implemented for "+Process.arch);let u=null,d=It(t).offset,h=d.exception,p=new Set,m=d.isExceptionReportedToInstrumentation;m!==null&&p.add(m);let f=d.throwLocation;f!==null&&(p.add(f),p.add(f+L),p.add(f+2*L));let g=65536,y=Memory.alloc(g);return Memory.patchCode(y,g,E=>{u=c(E,y,i,a,h,p,n)}),u._code=y,u._callback=n,u}function Zi(t,e,n,r,o,i,s){let a={},l=new Set,c=[n];for(;c.length>0;){let f=c.shift();if(Object.values(a).some(({begin:k,end:U})=>f.compare(k)>=0&&f.compare(U)<0))continue;let y=f.toString(),E={begin:f},N=null,C=!1;do{if(f.equals(r)){C=!0;break}let k=Instruction.parse(f);N=k;let U=a[k.address.toString()];if(U!==void 0){delete a[U.begin.toString()],a[y]=U,U.begin=E.begin,E=null;break}let P=null;switch(k.mnemonic){case"jmp":P=ptr(k.operands[0].value),C=!0;break;case"je":case"jg":case"jle":case"jne":case"js":P=ptr(k.operands[0].value);break;case"ret":C=!0;break}P!==null&&(l.add(P.toString()),c.push(P),c.sort((O,A)=>O.compare(A))),f=k.next}while(!C);E!==null&&(E.end=N.address.add(N.size),a[y]=E)}let u=Object.keys(a).map(f=>a[f]);u.sort((f,g)=>f.begin.compare(g.begin));let d=a[n.toString()];u.splice(u.indexOf(d),1),u.unshift(d);let h=new X86Writer(t,{pc:e}),p=!1,m=null;return u.forEach(f=>{let g=f.end.sub(f.begin).toInt32(),y=new X86Relocator(f.begin,h),E;for(;(E=y.readOne())!==0;){let N=y.input,{mnemonic:C}=N,k=N.address.toString();l.has(k)&&h.putLabel(k);let U=!0;switch(C){case"jmp":h.putJmpNearLabel(Pe(N.operands[0])),U=!1;break;case"je":case"jg":case"jle":case"jne":case"js":h.putJccNearLabel(C,Pe(N.operands[0]),"no-hint"),U=!1;break;case"mov":{let[P,O]=N.operands;if(P.type==="mem"&&O.type==="imm"){let A=P.value,j=A.disp;if(j===o&&O.value.valueOf()===0){if(m=A.base,h.putPushfx(),h.putPushax(),h.putMovRegReg("xbp","xsp"),L===4)h.putAndRegU32("esp",4294967280);else{let D=m!=="rdi"?"rdi":"rsi";h.putMovRegU64(D,uint64("0xfffffffffffffff0")),h.putAndRegReg("rsp",D)}h.putCallAddressWithAlignedArguments(s,[m]),h.putMovRegReg("xsp","xbp"),h.putPopax(),h.putPopfx(),p=!0,U=!1}else i.has(j)&&A.base===m&&(U=!1)}break}case"call":{let P=N.operands[0];P.type==="mem"&&P.value.disp===Dn&&(L===4?(h.putPopReg("eax"),h.putMovRegRegOffsetPtr("eax","eax",4),h.putPushReg("eax")):h.putMovRegRegOffsetPtr("rdi","rdi",8),h.putCallAddressWithArguments(s,[]),p=!0,U=!1);break}}if(U?y.writeAll():y.skipOne(),E===g)break}y.dispose()}),h.dispose(),p||bo(),new NativeFunction(e,"void",["pointer"],pe)}function bd(t,e,n,r,o,i,s){let a={},l=new Set,c=ptr(1).not(),u=[n];for(;u.length>0;){let y=u.shift();if(Object.values(a).some(({begin:j,end:D})=>y.compare(j)>=0&&y.compare(D)<0))continue;let N=y.and(c),C=N.toString(),k=y.and(1),U={begin:N},P=null,O=!1,A=0;do{if(y.equals(r)){O=!0;break}let j=Instruction.parse(y),{mnemonic:D}=j;P=j;let $=y.and(c).toString(),W=a[$];if(W!==void 0){delete a[W.begin.toString()],a[C]=W,W.begin=U.begin,U=null;break}let K=A===0,Z=null;switch(D){case"b":Z=ptr(j.operands[0].value),O=K;break;case"beq.w":case"beq":case"bne":case"bne.w":case"bgt":Z=ptr(j.operands[0].value);break;case"cbz":case"cbnz":Z=ptr(j.operands[1].value);break;case"pop.w":K&&(O=j.operands.filter(Q=>Q.value==="pc").length===1);break}switch(D){case"it":A=1;break;case"itt":A=2;break;case"ittt":A=3;break;case"itttt":A=4;break;default:A>0&&A--;break}Z!==null&&(l.add(Z.toString()),u.push(Z.or(k)),u.sort((Q,ye)=>Q.compare(ye))),y=j.next}while(!O);U!==null&&(U.end=P.address.add(P.size),a[C]=U)}let d=Object.keys(a).map(y=>a[y]);d.sort((y,E)=>y.begin.compare(E.begin));let h=a[n.and(c).toString()];d.splice(d.indexOf(h),1),d.unshift(h);let p=new ThumbWriter(t,{pc:e}),m=!1,f=null,g=null;return d.forEach(y=>{let E=new ThumbRelocator(y.begin,p),N=y.begin,C=y.end,k=0;do{if(E.readOne()===0)throw new Error("Unexpected end of block");let P=E.input;N=P.address,k=P.size;let{mnemonic:O}=P,A=N.toString();l.has(A)&&p.putLabel(A);let j=!0;switch(O){case"b":p.putBLabel(Pe(P.operands[0])),j=!1;break;case"beq.w":p.putBCondLabelWide("eq",Pe(P.operands[0])),j=!1;break;case"bne.w":p.putBCondLabelWide("ne",Pe(P.operands[0])),j=!1;break;case"beq":case"bne":case"bgt":p.putBCondLabelWide(O.substr(1),Pe(P.operands[0])),j=!1;break;case"cbz":{let D=P.operands;p.putCbzRegLabel(D[0].value,Pe(D[1])),j=!1;break}case"cbnz":{let D=P.operands;p.putCbnzRegLabel(D[0].value,Pe(D[1])),j=!1;break}case"str":case"str.w":{let D=P.operands[1].value,M=D.disp;if(M===o){f=D.base;let $=f!=="r4"?"r4":"r5",W=["r0","r1","r2","r3",$,"r9","r12","lr"];p.putPushRegs(W),p.putMrsRegReg($,"apsr-nzcvq"),p.putCallAddressWithArguments(s,[f]),p.putMsrRegReg("apsr-nzcvq",$),p.putPopRegs(W),m=!0,j=!1}else i.has(M)&&D.base===f&&(j=!1);break}case"ldr":{let[D,M]=P.operands;if(M.type==="mem"){let $=M.value;$.base[0]==="r"&&$.disp===Dn&&(g=D.value)}break}case"blx":P.operands[0].value===g&&(p.putLdrRegRegOffset("r0","r0",4),p.putCallAddressWithArguments(s,["r0"]),m=!0,g=null,j=!1);break}j?E.writeAll():E.skipOne()}while(!N.add(k).equals(C));E.dispose()}),p.dispose(),m||bo(),new NativeFunction(e.or(1),"void",["pointer"],pe)}function vd(t,e,n,r,o,i,s){let a={},l=new Set,c=[n];for(;c.length>0;){let y=c.shift();if(Object.values(a).some(({begin:P,end:O})=>y.compare(P)>=0&&y.compare(O)<0))continue;let N=y.toString(),C={begin:y},k=null,U=!1;do{if(y.equals(r)){U=!0;break}let P;try{P=Instruction.parse(y)}catch(j){if(y.readU32()===0){U=!0;break}else throw j}k=P;let O=a[P.address.toString()];if(O!==void 0){delete a[O.begin.toString()],a[N]=O,O.begin=C.begin,C=null;break}let A=null;switch(P.mnemonic){case"b":A=ptr(P.operands[0].value),U=!0;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":A=ptr(P.operands[0].value);break;case"cbz":case"cbnz":A=ptr(P.operands[1].value);break;case"tbz":case"tbnz":A=ptr(P.operands[2].value);break;case"ret":U=!0;break}A!==null&&(l.add(A.toString()),c.push(A),c.sort((j,D)=>j.compare(D))),y=P.next}while(!U);C!==null&&(C.end=k.address.add(k.size),a[N]=C)}let u=Object.keys(a).map(y=>a[y]);u.sort((y,E)=>y.begin.compare(E.begin));let d=a[n.toString()];u.splice(u.indexOf(d),1),u.unshift(d);let h=new Arm64Writer(t,{pc:e});h.putBLabel("performTransition");let p=e.add(h.offset);h.putPushAllXRegisters(),h.putCallAddressWithArguments(s,["x0"]),h.putPopAllXRegisters(),h.putRet(),h.putLabel("performTransition");let m=!1,f=null,g=null;return u.forEach(y=>{let E=y.end.sub(y.begin).toInt32(),N=new Arm64Relocator(y.begin,h),C;for(;(C=N.readOne())!==0;){let k=N.input,{mnemonic:U}=k,P=k.address.toString();l.has(P)&&h.putLabel(P);let O=!0;switch(U){case"b":h.putBLabel(Pe(k.operands[0])),O=!1;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":h.putBCondLabel(U.substr(2),Pe(k.operands[0])),O=!1;break;case"cbz":{let A=k.operands;h.putCbzRegLabel(A[0].value,Pe(A[1])),O=!1;break}case"cbnz":{let A=k.operands;h.putCbnzRegLabel(A[0].value,Pe(A[1])),O=!1;break}case"tbz":{let A=k.operands;h.putTbzRegImmLabel(A[0].value,A[1].value.valueOf(),Pe(A[2])),O=!1;break}case"tbnz":{let A=k.operands;h.putTbnzRegImmLabel(A[0].value,A[1].value.valueOf(),Pe(A[2])),O=!1;break}case"str":{let A=k.operands,j=A[0].value,D=A[1].value,M=D.disp;j==="xzr"&&M===o?(f=D.base,h.putPushRegReg("x0","lr"),h.putMovRegReg("x0",f),h.putBlImm(p),h.putPopRegReg("x0","lr"),m=!0,O=!1):i.has(M)&&D.base===f&&(O=!1);break}case"ldr":{let A=k.operands,j=A[1].value;j.base[0]==="x"&&j.disp===Dn&&(g=A[0].value);break}case"blr":k.operands[0].value===g&&(h.putLdrRegRegOffset("x0","x0",8),h.putCallAddressWithArguments(s,["x0"]),m=!0,g=null,O=!1);break}if(O?N.writeAll():N.skipOne(),C===E)break}N.dispose()}),h.dispose(),m||bo(),new NativeFunction(e,"void",["pointer"],pe)}function bo(){throw new Error("Unable to parse ART internals; please file a bug")}function Sd(t){let e=t["art::ArtMethod::PrettyMethod"];e!==void 0&&(Interceptor.attach(e.impl,Ee.hooks.ArtMethod.prettyMethod),Interceptor.flush())}function Pe(t){return ptr(t.value).toString()}function Ed(t,e){return new NativeFunction(t,"pointer",e,pe)}function wd(t,e){let n=new NativeFunction(t,"void",["pointer"].concat(e),pe);return function(){let r=Memory.alloc(L);return n(r,...arguments),r.readPointer()}}function kn(t,e){let{arch:n}=Process;switch(n){case"ia32":case"arm64":{let r;n==="ia32"?r=kt(64,s=>{let a=1+e.length,l=a*4;s.putSubRegImm("esp",l);for(let c=0;c!==a;c++){let u=c*4;s.putMovRegRegOffsetPtr("eax","esp",l+4+u),s.putMovRegOffsetPtrReg("esp",u,"eax")}s.putCallAddress(t),s.putAddRegImm("esp",l-4),s.putRet()}):r=kt(32,s=>{s.putMovRegReg("x8","x0"),e.forEach((a,l)=>{s.putMovRegReg("x"+l,"x"+(l+1))}),s.putLdrRegAddress("x7",t),s.putBrReg("x7")});let o=new NativeFunction(r,"void",["pointer"].concat(e),pe),i=function(...s){o(...s)};return i.handle=r,i.impl=t,i}default:{let r=new NativeFunction(t,"void",["pointer"].concat(e),pe);return r.impl=t,r}}}var Fn=class{constructor(){this.handle=Memory.alloc(rn)}dispose(){let[e,n]=this._getData();n||ne().$delete(e)}disposeToString(){let e=this.toString();return this.dispose(),e}toString(){let[e]=this._getData();return e.readUtf8String()}_getData(){let e=this.handle,n=(e.readU8()&1)===0;return[n?e.add(1):e.add(2*L).readPointer(),n]}},ro=class{$delete(){this.dispose(),ne().$delete(this)}constructor(e,n){this.handle=e,this._begin=e,this._end=e.add(L),this._storage=e.add(2*L),this._elementSize=n}init(){this.begin=NULL,this.end=NULL,this.storage=NULL}dispose(){ne().$delete(this.begin)}get begin(){return this._begin.readPointer()}set begin(e){this._begin.writePointer(e)}get end(){return this._end.readPointer()}set end(e){this._end.writePointer(e)}get storage(){return this._storage.readPointer()}set storage(e){this._storage.writePointer(e)}get size(){return this.end.sub(this.begin).toInt32()/this._elementSize}},on=class t extends ro{static $new(){let e=new t(ne().$new(Wc));return e.init(),e}constructor(e){super(e,L)}get handles(){let e=[],n=this.begin,r=this.end;for(;!n.equals(r);)e.push(n.readPointer()),n=n.add(L);return e}},Td=0,os=L,is=os+4,xd=-1,Un=class t{$delete(){this.dispose(),ne().$delete(this)}constructor(e){this.handle=e,this._link=e.add(Td),this._numberOfReferences=e.add(os)}init(e,n){this.link=e,this.numberOfReferences=n}dispose(){}get link(){return new t(this._link.readPointer())}set link(e){this._link.writePointer(e)}get numberOfReferences(){return this._numberOfReferences.readS32()}set numberOfReferences(e){this._numberOfReferences.writeS32(e)}},ss=Cd(is),as=ss+L,Ld=as+L,sn=class t extends Un{static $new(e,n){let r=new t(ne().$new(Ld));return r.init(e,n),r}constructor(e){super(e),this._self=e.add(ss),this._currentScope=e.add(as);let o=(64-L-4-4)/4;this._scopeLayout=nn.layoutForCapacity(o),this._topHandleScopePtr=null}init(e,n){let r=e.add(It(n).offset.topHandleScope);this._topHandleScopePtr=r,super.init(r.readPointer(),xd),this.self=e,this.currentScope=nn.$new(this._scopeLayout),r.writePointer(this)}dispose(){this._topHandleScopePtr.writePointer(this.link);let e;for(;(e=this.currentScope)!==null;){let n=e.link;e.$delete(),this.currentScope=n}}get self(){return this._self.readPointer()}set self(e){this._self.writePointer(e)}get currentScope(){let e=this._currentScope.readPointer();return e.isNull()?null:new nn(e,this._scopeLayout)}set currentScope(e){this._currentScope.writePointer(e)}newHandle(e){return this.currentScope.newHandle(e)}},nn=class t extends Un{static $new(e){let n=new t(ne().$new(e.size),e);return n.init(),n}constructor(e,n){super(e);let{offset:r}=n;this._refsStorage=e.add(r.refsStorage),this._pos=e.add(r.pos),this._layout=n}init(){super.init(NULL,this._layout.numberOfReferences),this.pos=0}get pos(){return this._pos.readU32()}set pos(e){this._pos.writeU32(e)}newHandle(e){let n=this.pos,r=this._refsStorage.add(n*4);return r.writeS32(e.toInt32()),this.pos=n+1,r}static layoutForCapacity(e){let n=is,r=n+e*4;return{size:r+4,numberOfReferences:e,offset:{refsStorage:n,pos:r}}}},Ad={arm:function(t,e){let n=Process.pageSize,r=Memory.alloc(n);Memory.protect(r,n,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let i=[26625,18947,17041,53505,19202,18200,18288,48896],s=i.length*2,a=s+4,l=a+4;return Memory.patchCode(r,l,function(c){i.forEach((u,d)=>{c.add(d*2).writeU16(u)}),c.add(s).writeS32(t),c.add(a).writePointer(o)}),r.or(1)},arm64:function(t,e){let n=Process.pageSize,r=Memory.alloc(n);Memory.protect(r,n,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let i=[3107979265,402653378,1795293247,1409286241,1476395139,3592355936,3596551104],s=i.length*4,a=s+4,l=a+8;return Memory.patchCode(r,l,function(c){i.forEach((u,d)=>{c.add(d*4).writeU32(u)}),c.add(s).writeS32(t),c.add(a).writePointer(o)}),r}};function vo(t,e){return(Ad[Process.arch]||Nd)(t,e)}function Nd(t,e){return new NativeCallback(n=>{n.readS32()===t&&e(n)},"void",["pointer","pointer"])}function Cd(t){let e=t%L;return e!==0?t+L-e:t}var Md=4,{pointerSize:ee}=Process,kd=256,Id=65536,Od=131072,Pd=33554432,Rd=67108864,jd=134217728,St={exceptions:"propagate"},ds=Ne(qd),Fd=Ne(Yd),Ud=Ne(Jd),So=null,Eo=!1,zn=new Map,ln=new Map;function et(){return So===null&&(So=Dd()),So}function Dd(){let t=Process.enumerateModules().filter(l=>/jvm.(dll|dylib|so)$/.test(l.name));if(t.length===0)return null;let e=t[0],n={flavor:"jvm"},r=Process.platform==="windows"?[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]],"VMThread::execute":["VMThread::execute","void",["pointer"]],"Method::size":["Method::size","int",["int"]],"Method::set_native_function":["Method::set_native_function","void",["pointer","pointer","int"]],"Method::clear_native_function":["Method::clear_native_function","void",["pointer"]],"Method::jmethod_id":["Method::jmethod_id","pointer",["pointer"]],"ClassLoaderDataGraph::classes_do":["ClassLoaderDataGraph::classes_do","void",["pointer"]],"NMethodSweeper::sweep_code_cache":["NMethodSweeper::sweep_code_cache","void",[]],"OopMapCache::flush_obsolete_entries":["OopMapCache::flush_obsolete_entries","void",["pointer"]]},variables:{"VM_RedefineClasses::`vftable'":function(l){this.vtableRedefineClasses=l},"VM_RedefineClasses::doit":function(l){this.redefineClassesDoIt=l},"VM_RedefineClasses::doit_prologue":function(l){this.redefineClassesDoItPrologue=l},"VM_RedefineClasses::doit_epilogue":function(l){this.redefineClassesDoItEpilogue=l},"VM_RedefineClasses::allow_nested_vm_operations":function(l){this.redefineClassesAllow=l},"NMethodSweeper::_traversals":function(l){this.traversals=l},"NMethodSweeper::_should_sweep":function(l){this.shouldSweep=l}},optionals:[]}]:[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],_ZN6Method4sizeEb:["Method::size","int",["int"]],_ZN6Method19set_native_functionEPhb:["Method::set_native_function","void",["pointer","pointer","int"]],_ZN6Method21clear_native_functionEv:["Method::clear_native_function","void",["pointer"]],_ZN6Method24restore_unshareable_infoEP10JavaThread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method24restore_unshareable_infoEP6Thread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method11link_methodERK12methodHandleP10JavaThread:["Method::link_method","void",["pointer","pointer","pointer"]],_ZN6Method10jmethod_idEv:["Method::jmethod_id","pointer",["pointer"]],_ZN6Method10clear_codeEv:function(l){let c=new NativeFunction(l,"void",["pointer"],St);this["Method::clear_code"]=function(u){c(u)}},_ZN6Method10clear_codeEb:function(l){let c=new NativeFunction(l,"void",["pointer","int"],St),u=0;this["Method::clear_code"]=function(d){c(d,u)}},_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass:["VM_RedefineClasses::mark_dependent_code","void",["pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeEv:["VM_RedefineClasses::flush_dependent_code","void",[]],_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN19ResolvedMethodTable21adjust_method_entriesEPb:["ResolvedMethodTable::adjust_method_entries","void",["pointer"]],_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb:["MemberNameTable::adjust_method_entries","void",["pointer","pointer","pointer"]],_ZN17ConstantPoolCache21adjust_method_entriesEPb:function(l){let c=new NativeFunction(l,"void",["pointer","pointer"],St);this["ConstantPoolCache::adjust_method_entries"]=function(u,d,h){c(u,h)}},_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb:function(l){let c=new NativeFunction(l,"void",["pointer","pointer","pointer"],St);this["ConstantPoolCache::adjust_method_entries"]=function(u,d,h){c(u,d,h)}},_ZN20ClassLoaderDataGraph10classes_doEP12KlassClosure:["ClassLoaderDataGraph::classes_do","void",["pointer"]],_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb:["ClassLoaderDataGraph::clean_deallocate_lists","void",["int"]],_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_:["JavaThread::thread_from_jni_environment","pointer",["pointer"]],_ZN8VMThread7executeEP12VM_Operation:["VMThread::execute","void",["pointer"]],_ZN11OopMapCache22flush_obsolete_entriesEv:["OopMapCache::flush_obsolete_entries","void",["pointer"]],_ZN14NMethodSweeper11force_sweepEv:["NMethodSweeper::force_sweep","void",[]],_ZN14NMethodSweeper16sweep_code_cacheEv:["NMethodSweeper::sweep_code_cache","void",[]],_ZN14NMethodSweeper17sweep_in_progressEv:["NMethodSweeper::sweep_in_progress","bool",[]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]]},variables:{_ZN18VM_RedefineClasses14_the_class_oopE:function(l){this.redefineClass=l},_ZN18VM_RedefineClasses10_the_classE:function(l){this.redefineClass=l},_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass:function(l){this.doKlass=l},_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass:function(l){this.doKlass=l},_ZTV18VM_RedefineClasses:function(l){this.vtableRedefineClasses=l},_ZN18VM_RedefineClasses4doitEv:function(l){this.redefineClassesDoIt=l},_ZN18VM_RedefineClasses13doit_prologueEv:function(l){this.redefineClassesDoItPrologue=l},_ZN18VM_RedefineClasses13doit_epilogueEv:function(l){this.redefineClassesDoItEpilogue=l},_ZN18VM_RedefineClassesD0Ev:function(l){this.redefineClassesDispose0=l},_ZN18VM_RedefineClassesD1Ev:function(l){this.redefineClassesDispose1=l},_ZNK18VM_RedefineClasses26allow_nested_vm_operationsEv:function(l){this.redefineClassesAllow=l},_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream:function(l){this.redefineClassesOnError=l},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread:function(l){this.createNewDefaultVtableIndices=l},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread:function(l){this.createNewDefaultVtableIndices=l},_ZN19Abstract_VM_Version19jre_release_versionEv:function(l){let u=new NativeFunction(l,"pointer",[],St)().readCString();this.version=u.startsWith("1.8")?8:u.startsWith("9.")?9:parseInt(u.slice(0,2),10),this.versionS=u},_ZN14NMethodSweeper11_traversalsE:function(l){this.traversals=l},_ZN14NMethodSweeper21_sweep_fractions_leftE:function(l){this.fractions=l},_ZN14NMethodSweeper13_should_sweepE:function(l){this.shouldSweep=l}},optionals:["_ZN6Method24restore_unshareable_infoEP10JavaThread","_ZN6Method24restore_unshareable_infoEP6Thread","_ZN6Method11link_methodERK12methodHandleP10JavaThread","_ZN6Method10clear_codeEv","_ZN6Method10clear_codeEb","_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass","_ZN18VM_RedefineClasses20flush_dependent_codeEv","_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread","_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread","_ZN19ResolvedMethodTable21adjust_method_entriesEPb","_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb","_ZN17ConstantPoolCache21adjust_method_entriesEPb","_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb","_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb","_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_","_ZN14NMethodSweeper11force_sweepEv","_ZN14NMethodSweeper17sweep_in_progressEv","_ZN18VM_RedefineClasses14_the_class_oopE","_ZN18VM_RedefineClasses10_the_classE","_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass","_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass","_ZN18VM_RedefineClassesD0Ev","_ZN18VM_RedefineClassesD1Ev","_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread","_ZN14NMethodSweeper21_sweep_fractions_leftE"]}],o=[];if(r.forEach(function(l){let c=l.module,u=l.functions||{},d=l.variables||{},h=new Set(l.optionals||[]),p=c.enumerateExports().reduce(function(f,g){return f[g.name]=g,f},{}),m=c.enumerateSymbols().reduce(function(f,g){return f[g.name]=g,f},p);Object.keys(u).forEach(function(f){let g=m[f];if(g!==void 0){let y=u[f];typeof y=="function"?y.call(n,g.address):n[y[0]]=new NativeFunction(g.address,y[1],y[2],St)}else h.has(f)||o.push(f)}),Object.keys(d).forEach(function(f){let g=m[f];g!==void 0?d[f].call(n,g.address):h.has(f)||o.push(f)})}),o.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+o.join(", "));let i=Memory.alloc(ee),s=Memory.alloc(Md);if(ke("JNI_GetCreatedJavaVMs",n.JNI_GetCreatedJavaVMs(i,1,s)),s.readInt()===0)return null;n.vm=i.readPointer();let a=Process.platform==="windows"?{$new:["??2@YAPEAX_K@Z","pointer",["ulong"]],$delete:["??3@YAXPEAX@Z","void",["pointer"]]}:{$new:["_Znwm","pointer",["ulong"]],$delete:["_ZdlPv","void",["pointer"]]};for(let[l,[c,u,d]]of Object.entries(a)){let h=Module.findGlobalExportByName(c);if(h===null&&(h=DebugSymbol.fromName(c).address,h.isNull()))throw new Error(`unable to find C++ allocator API, missing: '${c}'`);n[l]=new NativeFunction(h,u,d,St)}return n.jvmti=Vd(n),n["JavaThread::thread_from_jni_environment"]===void 0&&(n["JavaThread::thread_from_jni_environment"]=Gd(n)),n}function Vd(t){let e=new Xe(t),n;return e.perform(()=>{let r=e.tryGetEnvHandle(Tn.v1_0);if(r===null)throw new Error("JVMTI not available");n=new st(r,e);let o=Memory.alloc(8);o.writeU64(xn.canTagObjects);let i=n.addCapabilities(o);ke("getEnvJvmti::AddCapabilities",i)}),n}var $d={x64:zd};function Gd(t){let e=null,n=$d[Process.arch];if(n!==void 0){let o=new Xe(t).perform(i=>i.handle.readPointer().add(6*ee).readPointer());e=at(o,n,{limit:11})}return e===null?()=>{throw new Error("Unable to make thread_from_jni_environment() helper for the current architecture")}:r=>r.add(e)}function zd(t){if(t.mnemonic!=="lea")return null;let{base:e,disp:n}=t.operands[1].value;return e==="rdi"&&n<0?n:null}function ps(t,e){}var wo=class{constructor(e){this.methodId=e,this.method=e.readPointer(),this.originalMethod=null,this.newMethod=null,this.resolved=null,this.impl=null,this.key=e.toString(16)}replace(e,n,r,o,i){let{key:s}=this,a=ln.get(s);a!==void 0&&(ln.delete(s),this.method=a.method,this.originalMethod=a.originalMethod,this.newMethod=a.newMethod,this.resolved=a.resolved),this.impl=e,zn.set(s,this),ls(o)}revert(e){let{key:n}=this;zn.delete(n),ln.set(n,this),ls(e)}resolveTarget(e,n,r,o){let{resolved:i,originalMethod:s,methodId:a}=this;if(i!==null)return i;if(s===null)return a;s.oldMethod.vtableIndexPtr.writeS32(-2);let c=Memory.alloc(ee);return c.writePointer(this.method),this.resolved=c,c}};function ls(t){Eo||(Eo=!0,Script.nextTick(Bd,t))}function Bd(t){let e=new Map(zn),n=new Map(ln);zn.clear(),ln.clear(),Eo=!1,t.perform(r=>{let o=et(),i=o["JavaThread::thread_from_jni_environment"](r.handle),s=!1;hs(()=>{e.forEach(a=>{let{method:l,originalMethod:c,impl:u,methodId:d,newMethod:h}=a;c===null?(a.originalMethod=ms(l),a.newMethod=Zd(l,u,i),cs(a.newMethod,d,i)):o["Method::set_native_function"](h.method,u,0)}),n.forEach(a=>{let{originalMethod:l,methodId:c,newMethod:u}=a;if(l!==null){Wd(l);let d=l.oldMethod;d.oldMethod=u,cs(d,c,i),s=!0}})}),s&&Hd(r.handle)})}function Hd(t){let{fractions:e,shouldSweep:n,traversals:r,"NMethodSweeper::sweep_code_cache":o,"NMethodSweeper::sweep_in_progress":i,"NMethodSweeper::force_sweep":s,JVM_Sleep:a}=et();if(s!==void 0)Thread.sleep(.05),s(),Thread.sleep(.05),s();else{let l=r.readS64(),c=l+2;for(;c>l;)e.writeS32(1),a(t,NULL,50),i()||hs(()=>{Thread.sleep(.05)}),n.readU8()===0&&(e.writeS32(1),o()),l=r.readS64()}}function hs(t,e,n){let{execute:r,vtable:o,vtableSize:i,doItOffset:s,prologueOffset:a,epilogueOffset:l}=Ud(),c=Memory.dup(o,i),u=Memory.alloc(ee*25);u.writePointer(c);let d=new NativeCallback(t,"void",["pointer"]);c.add(s).writePointer(d);let h=null;e!==void 0&&(h=new NativeCallback(e,"int",["pointer"]),c.add(a).writePointer(h));let p=null;n!==void 0&&(p=new NativeCallback(n,"void",["pointer"]),c.add(l).writePointer(p)),r(u)}function Jd(){let{vtableRedefineClasses:t,redefineClassesDoIt:e,redefineClassesDoItPrologue:n,redefineClassesDoItEpilogue:r,redefineClassesOnError:o,redefineClassesAllow:i,redefineClassesDispose0:s,redefineClassesDispose1:a,"VMThread::execute":l}=et(),c=t.add(2*ee),u=15*ee,d=Memory.dup(c,u),h=new NativeCallback(()=>{},"void",["pointer"]),p,m,f;for(let g=0;g!==u;g+=ee){let y=d.add(g),E=y.readPointer();o!==void 0&&E.equals(o)||s!==void 0&&E.equals(s)||a!==void 0&&E.equals(a)?y.writePointer(h):E.equals(e)?p=g:E.equals(n)?(m=g,y.writePointer(i)):E.equals(r)&&(f=g,y.writePointer(h))}return{execute:l,emptyCallback:h,vtable:d,vtableSize:u,doItOffset:p,prologueOffset:m,epilogueOffset:f}}function fs(t){return new wo(t)}function cs(t,e,n){let{method:r,oldMethod:o}=t,i=et();t.methodsArray.add(t.methodIndex*ee).writePointer(r),t.vtableIndex>=0&&t.vtable.add(t.vtableIndex*ee).writePointer(r),e.writePointer(r),o.accessFlagsPtr.writeU32((o.accessFlags|Id|Od)>>>0);let s=i["OopMapCache::flush_obsolete_entries"];if(s!==void 0){let{oopMapCache:m}=t;m.isNull()||s(m)}let a=i["VM_RedefineClasses::mark_dependent_code"],l=i["VM_RedefineClasses::flush_dependent_code"];a!==void 0?(a(NULL,t.instanceKlass),l()):l(NULL,t.instanceKlass,n);let c=Memory.alloc(1);c.writeU8(1),i["ConstantPoolCache::adjust_method_entries"](t.cache,t.instanceKlass,c);let u=Memory.alloc(3*ee),d=Memory.alloc(ee);d.writePointer(i.doKlass),u.writePointer(d),u.add(ee).writePointer(n),u.add(2*ee).writePointer(n),i.redefineClass!==void 0&&i.redefineClass.writePointer(t.instanceKlass),i["ClassLoaderDataGraph::classes_do"](u);let h=i["ResolvedMethodTable::adjust_method_entries"];if(h!==void 0)h(c);else{let{memberNames:m}=t;if(!m.isNull()){let f=i["MemberNameTable::adjust_method_entries"];f!==void 0&&f(m,t.instanceKlass,c)}}let p=i["ClassLoaderDataGraph::clean_deallocate_lists"];p!==void 0&&p(0)}function Zd(t,e,n){let r=et(),o=ms(t);o.constPtr.writePointer(o.const);let i=(o.accessFlags|kd|Pd|Rd|jd)>>>0;if(o.accessFlagsPtr.writeU32(i),o.signatureHandler.writePointer(NULL),o.adapter.writePointer(NULL),o.i2iEntry.writePointer(NULL),r["Method::clear_code"](o.method),o.dataPtr.writePointer(NULL),o.countersPtr.writePointer(NULL),o.stackmapPtr.writePointer(NULL),r["Method::clear_native_function"](o.method),r["Method::set_native_function"](o.method,e,0),r["Method::restore_unshareable_info"](o.method,n),r.version>=17){let s=Memory.alloc(2*ee);s.writePointer(o.method),s.add(ee).writePointer(n),r["Method::link_method"](o.method,s,n)}return o}function ms(t){let e=ds(),n=t.add(e.method.constMethodOffset).readPointer(),r=n.add(e.constMethod.sizeOffset).readS32()*ee,o=Memory.alloc(r+e.method.size);Memory.copy(o,n,r);let i=o.add(r);Memory.copy(i,t,e.method.size);let s=us(i,o,r),a=us(t,n,r);return s.oldMethod=a,s}function us(t,e,n){let r=et(),o=ds(),i=t.add(o.method.constMethodOffset),s=t.add(o.method.methodDataOffset),a=t.add(o.method.methodCountersOffset),l=t.add(o.method.accessFlagsOffset),c=l.readU32(),u=o.getAdapterPointer(t,e),d=t.add(o.method.i2iEntryOffset),h=t.add(o.method.signatureHandlerOffset),p=e.add(o.constMethod.constantPoolOffset).readPointer(),m=e.add(o.constMethod.stackmapDataOffset),f=p.add(o.constantPool.instanceKlassOffset).readPointer(),g=p.add(o.constantPool.cacheOffset).readPointer(),y=Fd(),E=f.add(y.methodsOffset).readPointer(),N=E.readS32(),C=E.add(ee),k=e.add(o.constMethod.methodIdnumOffset).readU16(),U=t.add(o.method.vtableIndexOffset),P=U.readS32(),O=f.add(y.vtableOffset),A=f.add(y.oopMapCacheOffset).readPointer(),j=r.version>=10?f.add(y.memberNamesOffset).readPointer():NULL;return{method:t,methodSize:o.method.size,const:e,constSize:n,constPtr:i,dataPtr:s,countersPtr:a,stackmapPtr:m,instanceKlass:f,methodsArray:C,methodsCount:N,methodIndex:k,vtableIndex:P,vtableIndexPtr:U,vtable:O,accessFlags:c,accessFlagsPtr:l,adapter:u,i2iEntry:d,signatureHandler:h,memberNames:j,cache:g,oopMapCache:A}}function Wd(t){let{oldMethod:e}=t;e.accessFlagsPtr.writeU32(e.accessFlags),e.vtableIndexPtr.writeS32(e.vtableIndex)}function qd(){let t=et(),{version:e}=t,n;e>=17?n="method:early":e>=9&&e<=16?n="const-method":n="method:late";let o=t["Method::size"](1)*ee,i=ee,s=2*ee,a=3*ee,l=4*ee,c=n==="method:early"?ee:0,u=l+c,d=u+4,h=d+4+8,p=h+ee,m=c!==0?l:p,f=o-2*ee,g=o-ee,y=8,E=y+ee,N=E+ee,C=n==="const-method"?ee:0,k=N+C,U=k+14,P=2*ee,O=3*ee;return{getAdapterPointer:C!==0?function(j,D){return D.add(N)}:function(j,D){return j.add(m)},method:{size:o,constMethodOffset:i,methodDataOffset:s,methodCountersOffset:a,accessFlagsOffset:u,vtableIndexOffset:d,i2iEntryOffset:h,nativeFunctionOffset:f,signatureHandlerOffset:g},constMethod:{constantPoolOffset:y,stackmapDataOffset:E,sizeOffset:k,methodIdnumOffset:U},constantPool:{cacheOffset:P,instanceKlassOffset:O}}}var Kd={x64:Qd};function Yd(){let{version:t,createNewDefaultVtableIndices:e}=et(),n=Kd[Process.arch];if(n===void 0)throw new Error(`Missing vtable offset parser for ${Process.arch}`);let r=at(e,n,{limit:32});if(r===null)throw new Error("Unable to deduce vtable offset");let o=t>=10&&t<=11||t>=15?17:18,i=r-7*ee,s=r-17*ee,a=r-o*ee;return{vtableOffset:r,methodsOffset:i,memberNamesOffset:s,oopMapCacheOffset:a}}function Qd(t){if(t.mnemonic!=="mov")return null;let e=t.operands[0];if(e.type!=="mem")return null;let{value:n}=e;if(n.scale!==1)return null;let{disp:r}=n;return r<256?null:r+16}var gs=ne;try{an()}catch{gs=et}var cn=gs;var Xd=`#include <json-glib/json-glib.h>
#include <string.h>

#define kAccStatic 0x0008
#define kAccConstructor 0x00010000

typedef struct _Model Model;
typedef struct _EnumerateMethodsContext EnumerateMethodsContext;

typedef struct _JavaApi JavaApi;
typedef struct _JavaClassApi JavaClassApi;
typedef struct _JavaMethodApi JavaMethodApi;
typedef struct _JavaFieldApi JavaFieldApi;

typedef struct _JNIEnv JNIEnv;
typedef guint8 jboolean;
typedef gint32 jint;
typedef jint jsize;
typedef gpointer jobject;
typedef jobject jclass;
typedef jobject jstring;
typedef jobject jarray;
typedef jarray jobjectArray;
typedef gpointer jfieldID;
typedef gpointer jmethodID;

typedef struct _jvmtiEnv jvmtiEnv;
typedef enum
{
  JVMTI_ERROR_NONE = 0
} jvmtiError;

typedef struct _ArtApi ArtApi;
typedef guint32 ArtHeapReference;
typedef struct _ArtObject ArtObject;
typedef struct _ArtClass ArtClass;
typedef struct _ArtClassLinker ArtClassLinker;
typedef struct _ArtClassVisitor ArtClassVisitor;
typedef struct _ArtClassVisitorVTable ArtClassVisitorVTable;
typedef struct _ArtMethod ArtMethod;
typedef struct _ArtString ArtString;

typedef union _StdString StdString;
typedef struct _StdStringShort StdStringShort;
typedef struct _StdStringLong StdStringLong;

typedef void (* ArtVisitClassesFunc) (ArtClassLinker * linker, ArtClassVisitor * visitor);
typedef const char * (* ArtGetClassDescriptorFunc) (ArtClass * klass, StdString * storage);
typedef void (* ArtPrettyMethodFunc) (StdString * result, ArtMethod * method, jboolean with_signature);

struct _Model
{
  GHashTable * members;
};

struct _EnumerateMethodsContext
{
  GPatternSpec * class_query;
  GPatternSpec * method_query;
  jboolean include_signature;
  jboolean ignore_case;
  jboolean skip_system_classes;
  GHashTable * groups;
};

struct _JavaClassApi
{
  jmethodID get_declared_methods;
  jmethodID get_declared_fields;
};

struct _JavaMethodApi
{
  jmethodID get_name;
  jmethodID get_modifiers;
};

struct _JavaFieldApi
{
  jmethodID get_name;
  jmethodID get_modifiers;
};

struct _JavaApi
{
  jvmtiEnv * jvmti;
  JavaClassApi clazz;
  JavaMethodApi method;
  JavaFieldApi field;
};

struct _JNIEnv
{
  gpointer * functions;
};

struct _jvmtiEnv
{
  gpointer * functions;
};

struct _ArtApi
{
  gboolean available;

  guint class_offset_ifields;
  guint class_offset_methods;
  guint class_offset_sfields;
  guint class_offset_copied_methods_offset;

  guint method_size;
  guint method_offset_access_flags;

  guint field_size;
  guint field_offset_access_flags;

  guint alignment_padding;

  ArtClassLinker * linker;
  ArtVisitClassesFunc visit_classes;
  ArtGetClassDescriptorFunc get_class_descriptor;
  ArtPrettyMethodFunc pretty_method;

  void (* free) (gpointer mem);
};

struct _ArtObject
{
  ArtHeapReference klass;
  ArtHeapReference monitor;
};

struct _ArtClass
{
  ArtObject parent;

  ArtHeapReference class_loader;
};

struct _ArtClassVisitor
{
  ArtClassVisitorVTable * vtable;
  gpointer user_data;
};

struct _ArtClassVisitorVTable
{
  void (* reserved1) (ArtClassVisitor * self);
  void (* reserved2) (ArtClassVisitor * self);
  jboolean (* visit) (ArtClassVisitor * self, ArtClass * klass);
};

struct _ArtString
{
  ArtObject parent;

  gint32 count;
  guint32 hash_code;

  union
  {
    guint16 value[0];
    guint8 value_compressed[0];
  };
};

struct _StdStringShort
{
  guint8 size;
  gchar data[(3 * sizeof (gpointer)) - sizeof (guint8)];
};

struct _StdStringLong
{
  gsize capacity;
  gsize size;
  gchar * data;
};

union _StdString
{
  StdStringShort s;
  StdStringLong l;
};

static void model_add_method (Model * self, const gchar * name, jmethodID id, jint modifiers);
static void model_add_field (Model * self, const gchar * name, jfieldID id, jint modifiers);
static void model_free (Model * model);

static jboolean collect_matching_class_methods (ArtClassVisitor * self, ArtClass * klass);
static gchar * finalize_method_groups_to_json (GHashTable * groups);
static GPatternSpec * make_pattern_spec (const gchar * pattern, jboolean ignore_case);
static gchar * class_name_from_signature (const gchar * signature);
static gchar * format_method_signature (const gchar * name, const gchar * signature);
static void append_type (GString * output, const gchar ** type);

static gpointer read_art_array (gpointer object_base, guint field_offset, guint length_size, guint * length);

static void std_string_destroy (StdString * str);
static gchar * std_string_c_str (StdString * self);

extern GMutex lock;
extern GArray * models;
extern JavaApi java_api;
extern ArtApi art_api;

void
init (void)
{
  g_mutex_init (&lock);
  models = g_array_new (FALSE, FALSE, sizeof (Model *));
}

void
finalize (void)
{
  guint n, i;

  n = models->len;
  for (i = 0; i != n; i++)
  {
    Model * model = g_array_index (models, Model *, i);
    model_free (model);
  }

  g_array_unref (models);
  g_mutex_clear (&lock);
}

Model *
model_new (jclass class_handle,
           gpointer class_object,
           JNIEnv * env)
{
  Model * model;
  GHashTable * members;
  jvmtiEnv * jvmti = java_api.jvmti;
  gpointer * funcs = env->functions;
  jmethodID (* from_reflected_method) (JNIEnv *, jobject) = funcs[7];
  jfieldID (* from_reflected_field) (JNIEnv *, jobject) = funcs[8];
  jobject (* to_reflected_method) (JNIEnv *, jclass, jmethodID, jboolean) = funcs[9];
  jobject (* to_reflected_field) (JNIEnv *, jclass, jfieldID, jboolean) = funcs[12];
  void (* delete_local_ref) (JNIEnv *, jobject) = funcs[23];
  jobject (* call_object_method) (JNIEnv *, jobject, jmethodID, ...) = funcs[34];
  jint (* call_int_method) (JNIEnv *, jobject, jmethodID, ...) = funcs[49];
  const char * (* get_string_utf_chars) (JNIEnv *, jstring, jboolean *) = funcs[169];
  void (* release_string_utf_chars) (JNIEnv *, jstring, const char *) = funcs[170];
  jsize (* get_array_length) (JNIEnv *, jarray) = funcs[171];
  jobject (* get_object_array_element) (JNIEnv *, jobjectArray, jsize) = funcs[173];
  jsize n, i;

  model = g_new (Model, 1);

  members = g_hash_table_new_full (g_str_hash, g_str_equal, g_free, g_free);
  model->members = members;

  if (jvmti != NULL)
  {
    gpointer * jf = jvmti->functions - 1;
    jvmtiError (* deallocate) (jvmtiEnv *, void * mem) = jf[47];
    jvmtiError (* get_class_methods) (jvmtiEnv *, jclass, jint *, jmethodID **) = jf[52];
    jvmtiError (* get_class_fields) (jvmtiEnv *, jclass, jint *, jfieldID **) = jf[53];
    jvmtiError (* get_field_name) (jvmtiEnv *, jclass, jfieldID, char **, char **, char **) = jf[60];
    jvmtiError (* get_field_modifiers) (jvmtiEnv *, jclass, jfieldID, jint *) = jf[62];
    jvmtiError (* get_method_name) (jvmtiEnv *, jmethodID, char **, char **, char **) = jf[64];
    jvmtiError (* get_method_modifiers) (jvmtiEnv *, jmethodID, jint *) = jf[66];
    jint method_count;
    jmethodID * methods;
    jint field_count;
    jfieldID * fields;
    char * name;
    jint modifiers;

    get_class_methods (jvmti, class_handle, &method_count, &methods);
    for (i = 0; i != method_count; i++)
    {
      jmethodID method = methods[i];

      get_method_name (jvmti, method, &name, NULL, NULL);
      get_method_modifiers (jvmti, method, &modifiers);

      model_add_method (model, name, method, modifiers);

      deallocate (jvmti, name);
    }
    deallocate (jvmti, methods);

    get_class_fields (jvmti, class_handle, &field_count, &fields);
    for (i = 0; i != field_count; i++)
    {
      jfieldID field = fields[i];

      get_field_name (jvmti, class_handle, field, &name, NULL, NULL);
      get_field_modifiers (jvmti, class_handle, field, &modifiers);

      model_add_field (model, name, field, modifiers);

      deallocate (jvmti, name);
    }
    deallocate (jvmti, fields);
  }
  else if (art_api.available)
  {
    gpointer elements;
    guint n, i;
    const guint field_arrays[] = {
      art_api.class_offset_ifields,
      art_api.class_offset_sfields
    };
    guint field_array_cursor;
    gboolean merged_fields = art_api.class_offset_sfields == 0;

    elements = read_art_array (class_object, art_api.class_offset_methods, sizeof (gsize), NULL);
    n = *(guint16 *) (class_object + art_api.class_offset_copied_methods_offset);
    for (i = 0; i != n; i++)
    {
      jmethodID id;
      guint32 access_flags;
      jboolean is_static;
      jobject method, name;
      const char * name_str;
      jint modifiers;

      id = elements + (i * art_api.method_size);

      access_flags = *(guint32 *) (id + art_api.method_offset_access_flags);
      if ((access_flags & kAccConstructor) != 0)
        continue;
      is_static = (access_flags & kAccStatic) != 0;
      method = to_reflected_method (env, class_handle, id, is_static);
      name = call_object_method (env, method, java_api.method.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      modifiers = access_flags & 0xffff;

      model_add_method (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, method);
    }

    for (field_array_cursor = 0; field_array_cursor != G_N_ELEMENTS (field_arrays); field_array_cursor++)
    {
      jboolean is_static;

      if (field_arrays[field_array_cursor] == 0)
        continue;

      if (!merged_fields)
        is_static = field_array_cursor == 1;

      elements = read_art_array (class_object, field_arrays[field_array_cursor], sizeof (guint32), &n);
      for (i = 0; i != n; i++)
      {
        jfieldID id;
        guint32 access_flags;
        jobject field, name;
        const char * name_str;
        jint modifiers;

        id = elements + (i * art_api.field_size);

        access_flags = *(guint32 *) (id + art_api.field_offset_access_flags);
        if (merged_fields)
          is_static = (access_flags & kAccStatic) != 0;
        field = to_reflected_field (env, class_handle, id, is_static);
        name = call_object_method (env, field, java_api.field.get_name);
        name_str = get_string_utf_chars (env, name, NULL);
        modifiers = access_flags & 0xffff;

        model_add_field (model, name_str, id, modifiers);

        release_string_utf_chars (env, name, name_str);
        delete_local_ref (env, name);
        delete_local_ref (env, field);
      }
    }
  }
  else
  {
    jobject elements;

    elements = call_object_method (env, class_handle, java_api.clazz.get_declared_methods);
    n = get_array_length (env, elements);
    for (i = 0; i != n; i++)
    {
      jobject method, name;
      const char * name_str;
      jmethodID id;
      jint modifiers;

      method = get_object_array_element (env, elements, i);
      name = call_object_method (env, method, java_api.method.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      id = from_reflected_method (env, method);
      modifiers = call_int_method (env, method, java_api.method.get_modifiers);

      model_add_method (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, method);
    }
    delete_local_ref (env, elements);

    elements = call_object_method (env, class_handle, java_api.clazz.get_declared_fields);
    n = get_array_length (env, elements);
    for (i = 0; i != n; i++)
    {
      jobject field, name;
      const char * name_str;
      jfieldID id;
      jint modifiers;

      field = get_object_array_element (env, elements, i);
      name = call_object_method (env, field, java_api.field.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      id = from_reflected_field (env, field);
      modifiers = call_int_method (env, field, java_api.field.get_modifiers);

      model_add_field (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, field);
    }
    delete_local_ref (env, elements);
  }

  g_mutex_lock (&lock);
  g_array_append_val (models, model);
  g_mutex_unlock (&lock);

  return model;
}

static void
model_add_method (Model * self,
                  const gchar * name,
                  jmethodID id,
                  jint modifiers)
{
  GHashTable * members = self->members;
  gchar * key, type;
  const gchar * value;

  if (name[0] == '$')
    key = g_strdup_printf ("_%s", name);
  else
    key = g_strdup (name);

  type = (modifiers & kAccStatic) != 0 ? 's' : 'i';

  value = g_hash_table_lookup (members, key);
  if (value == NULL)
    g_hash_table_insert (members, key, g_strdup_printf ("m:%c0x%zx", type, id));
  else
    g_hash_table_insert (members, key, g_strdup_printf ("%s:%c0x%zx", value, type, id));
}

static void
model_add_field (Model * self,
                 const gchar * name,
                 jfieldID id,
                 jint modifiers)
{
  GHashTable * members = self->members;
  gchar * key, type;

  if (name[0] == '$')
    key = g_strdup_printf ("_%s", name);
  else
    key = g_strdup (name);
  while (g_hash_table_contains (members, key))
  {
    gchar * new_key = g_strdup_printf ("_%s", key);
    g_free (key);
    key = new_key;
  }

  type = (modifiers & kAccStatic) != 0 ? 's' : 'i';

  g_hash_table_insert (members, key, g_strdup_printf ("f:%c0x%zx", type, id));
}

static void
model_free (Model * model)
{
  g_hash_table_unref (model->members);

  g_free (model);
}

gboolean
model_has (Model * self,
           const gchar * member)
{
  return g_hash_table_contains (self->members, member);
}

const gchar *
model_find (Model * self,
            const gchar * member)
{
  return g_hash_table_lookup (self->members, member);
}

gchar *
model_list (Model * self)
{
  GString * result;
  GHashTableIter iter;
  guint i;
  const gchar * name;

  result = g_string_sized_new (128);

  g_string_append_c (result, '[');

  g_hash_table_iter_init (&iter, self->members);
  for (i = 0; g_hash_table_iter_next (&iter, (gpointer *) &name, NULL); i++)
  {
    if (i > 0)
      g_string_append_c (result, ',');

    g_string_append_c (result, '"');
    g_string_append (result, name);
    g_string_append_c (result, '"');
  }

  g_string_append_c (result, ']');

  return g_string_free (result, FALSE);
}

gchar *
enumerate_methods_art (const gchar * class_query,
                       const gchar * method_query,
                       jboolean include_signature,
                       jboolean ignore_case,
                       jboolean skip_system_classes)
{
  gchar * result;
  EnumerateMethodsContext ctx;
  ArtClassVisitor visitor;
  ArtClassVisitorVTable visitor_vtable = { NULL, };

  ctx.class_query = make_pattern_spec (class_query, ignore_case);
  ctx.method_query = make_pattern_spec (method_query, ignore_case);
  ctx.include_signature = include_signature;
  ctx.ignore_case = ignore_case;
  ctx.skip_system_classes = skip_system_classes;
  ctx.groups = g_hash_table_new_full (NULL, NULL, NULL, NULL);

  visitor.vtable = &visitor_vtable;
  visitor.user_data = &ctx;

  visitor_vtable.visit = collect_matching_class_methods;

  art_api.visit_classes (art_api.linker, &visitor);

  result = finalize_method_groups_to_json (ctx.groups);

  g_hash_table_unref (ctx.groups);
  g_pattern_spec_free (ctx.method_query);
  g_pattern_spec_free (ctx.class_query);

  return result;
}

static jboolean
collect_matching_class_methods (ArtClassVisitor * self,
                                ArtClass * klass)
{
  EnumerateMethodsContext * ctx = self->user_data;
  const char * descriptor;
  StdString descriptor_storage = { 0, };
  gchar * class_name = NULL;
  gchar * class_name_copy = NULL;
  const gchar * normalized_class_name;
  JsonBuilder * group;
  size_t class_name_length;
  GHashTable * seen_method_names;
  gpointer elements;
  guint n, i;

  if (ctx->skip_system_classes && klass->class_loader == 0)
    goto skip_class;

  descriptor = art_api.get_class_descriptor (klass, &descriptor_storage);
  if (descriptor[0] != 'L')
    goto skip_class;

  class_name = class_name_from_signature (descriptor);

  if (ctx->ignore_case)
  {
    class_name_copy = g_utf8_strdown (class_name, -1);
    normalized_class_name = class_name_copy;
  }
  else
  {
    normalized_class_name = class_name;
  }

  if (!g_pattern_match_string (ctx->class_query, normalized_class_name))
    goto skip_class;

  group = NULL;
  class_name_length = strlen (class_name);
  seen_method_names = ctx->include_signature ? NULL : g_hash_table_new_full (g_str_hash, g_str_equal, g_free, NULL);

  elements = read_art_array (klass, art_api.class_offset_methods, sizeof (gsize), NULL);
  n = *(guint16 *) ((gpointer) klass + art_api.class_offset_copied_methods_offset);
  for (i = 0; i != n; i++)
  {
    ArtMethod * method;
    guint32 access_flags;
    jboolean is_constructor;
    StdString method_name = { 0, };
    const gchar * bare_method_name;
    gchar * bare_method_name_copy = NULL;
    const gchar * normalized_method_name;
    gchar * normalized_method_name_copy = NULL;

    method = elements + (i * art_api.method_size);

    access_flags = *(guint32 *) ((gpointer) method + art_api.method_offset_access_flags);
    is_constructor = (access_flags & kAccConstructor) != 0;

    art_api.pretty_method (&method_name, method, ctx->include_signature);
    bare_method_name = std_string_c_str (&method_name);
    if (ctx->include_signature)
    {
      const gchar * return_type_end, * name_begin;
      GString * name;

      return_type_end = strchr (bare_method_name, ' ');
      name_begin = return_type_end + 1 + class_name_length + 1;
      if (is_constructor && g_str_has_prefix (name_begin, "<clinit>"))
        goto skip_method;

      name = g_string_sized_new (64);

      if (is_constructor)
      {
        g_string_append (name, "$init");
        g_string_append (name, strchr (name_begin, '>') + 1);
      }
      else
      {
        g_string_append (name, name_begin);
      }
      g_string_append (name, ": ");
      g_string_append_len (name, bare_method_name, return_type_end - bare_method_name);

      bare_method_name_copy = g_string_free (name, FALSE);
      bare_method_name = bare_method_name_copy;
    }
    else
    {
      const gchar * name_begin;

      name_begin = bare_method_name + class_name_length + 1;
      if (is_constructor && strcmp (name_begin, "<clinit>") == 0)
        goto skip_method;

      if (is_constructor)
        bare_method_name = "$init";
      else
        bare_method_name += class_name_length + 1;
    }

    if (seen_method_names != NULL && g_hash_table_contains (seen_method_names, bare_method_name))
      goto skip_method;

    if (ctx->ignore_case)
    {
      normalized_method_name_copy = g_utf8_strdown (bare_method_name, -1);
      normalized_method_name = normalized_method_name_copy;
    }
    else
    {
      normalized_method_name = bare_method_name;
    }

    if (!g_pattern_match_string (ctx->method_query, normalized_method_name))
      goto skip_method;

    if (group == NULL)
    {
      group = g_hash_table_lookup (ctx->groups, GUINT_TO_POINTER (klass->class_loader));
      if (group == NULL)
      {
        group = json_builder_new_immutable ();
        g_hash_table_insert (ctx->groups, GUINT_TO_POINTER (klass->class_loader), group);

        json_builder_begin_object (group);

        json_builder_set_member_name (group, "loader");
        json_builder_add_int_value (group, klass->class_loader);

        json_builder_set_member_name (group, "classes");
        json_builder_begin_array (group);
      }

      json_builder_begin_object (group);

      json_builder_set_member_name (group, "name");
      json_builder_add_string_value (group, class_name);

      json_builder_set_member_name (group, "methods");
      json_builder_begin_array (group);
    }

    json_builder_add_string_value (group, bare_method_name);

    if (seen_method_names != NULL)
      g_hash_table_add (seen_method_names, g_strdup (bare_method_name));

skip_method:
    g_free (normalized_method_name_copy);
    g_free (bare_method_name_copy);
    std_string_destroy (&method_name);
  }

  if (seen_method_names != NULL)
    g_hash_table_unref (seen_method_names);

  if (group == NULL)
    goto skip_class;

  json_builder_end_array (group);
  json_builder_end_object (group);

skip_class:
  g_free (class_name_copy);
  g_free (class_name);
  std_string_destroy (&descriptor_storage);

  return TRUE;
}

gchar *
enumerate_methods_jvm (const gchar * class_query,
                       const gchar * method_query,
                       jboolean include_signature,
                       jboolean ignore_case,
                       jboolean skip_system_classes,
                       JNIEnv * env)
{
  gchar * result;
  GPatternSpec * class_pattern, * method_pattern;
  GHashTable * groups;
  gpointer * ef = env->functions;
  jobject (* new_global_ref) (JNIEnv *, jobject) = ef[21];
  void (* delete_local_ref) (JNIEnv *, jobject) = ef[23];
  jboolean (* is_same_object) (JNIEnv *, jobject, jobject) = ef[24];
  jvmtiEnv * jvmti = java_api.jvmti;
  gpointer * jf = jvmti->functions - 1;
  jvmtiError (* deallocate) (jvmtiEnv *, void * mem) = jf[47];
  jvmtiError (* get_class_signature) (jvmtiEnv *, jclass, char **, char **) = jf[48];
  jvmtiError (* get_class_methods) (jvmtiEnv *, jclass, jint *, jmethodID **) = jf[52];
  jvmtiError (* get_class_loader) (jvmtiEnv *, jclass, jobject *) = jf[57];
  jvmtiError (* get_method_name) (jvmtiEnv *, jmethodID, char **, char **, char **) = jf[64];
  jvmtiError (* get_loaded_classes) (jvmtiEnv *, jint *, jclass **) = jf[78];
  jint class_count, class_index;
  jclass * classes;

  class_pattern = make_pattern_spec (class_query, ignore_case);
  method_pattern = make_pattern_spec (method_query, ignore_case);
  groups = g_hash_table_new_full (NULL, NULL, NULL, NULL);

  if (get_loaded_classes (jvmti, &class_count, &classes) != JVMTI_ERROR_NONE)
    goto emit_results;

  for (class_index = 0; class_index != class_count; class_index++)
  {
    jclass klass = classes[class_index];
    jobject loader = NULL;
    gboolean have_loader = FALSE;
    char * signature = NULL;
    gchar * class_name = NULL;
    gchar * class_name_copy = NULL;
    const gchar * normalized_class_name;
    jint method_count, method_index;
    jmethodID * methods = NULL;
    JsonBuilder * group = NULL;
    GHashTable * seen_method_names = NULL;

    if (skip_system_classes)
    {
      if (get_class_loader (jvmti, klass, &loader) != JVMTI_ERROR_NONE)
        goto skip_class;
      have_loader = TRUE;

      if (loader == NULL)
        goto skip_class;
    }

    if (get_class_signature (jvmti, klass, &signature, NULL) != JVMTI_ERROR_NONE)
      goto skip_class;

    class_name = class_name_from_signature (signature);

    if (ignore_case)
    {
      class_name_copy = g_utf8_strdown (class_name, -1);
      normalized_class_name = class_name_copy;
    }
    else
    {
      normalized_class_name = class_name;
    }

    if (!g_pattern_match_string (class_pattern, normalized_class_name))
      goto skip_class;

    if (get_class_methods (jvmti, klass, &method_count, &methods) != JVMTI_ERROR_NONE)
      goto skip_class;

    if (!include_signature)
      seen_method_names = g_hash_table_new_full (g_str_hash, g_str_equal, g_free, NULL);

    for (method_index = 0; method_index != method_count; method_index++)
    {
      jmethodID method = methods[method_index];
      const gchar * method_name;
      char * method_name_value = NULL;
      char * method_signature_value = NULL;
      gchar * method_name_copy = NULL;
      const gchar * normalized_method_name;
      gchar * normalized_method_name_copy = NULL;

      if (get_method_name (jvmti, method, &method_name_value, include_signature ? &method_signature_value : NULL, NULL) != JVMTI_ERROR_NONE)
        goto skip_method;
      method_name = method_name_value;

      if (method_name[0] == '<')
      {
        if (strcmp (method_name, "<init>") == 0)
          method_name = "$init";
        else if (strcmp (method_name, "<clinit>") == 0)
          goto skip_method;
      }

      if (include_signature)
      {
        method_name_copy = format_method_signature (method_name, method_signature_value);
        method_name = method_name_copy;
      }

      if (seen_method_names != NULL && g_hash_table_contains (seen_method_names, method_name))
        goto skip_method;

      if (ignore_case)
      {
        normalized_method_name_copy = g_utf8_strdown (method_name, -1);
        normalized_method_name = normalized_method_name_copy;
      }
      else
      {
        normalized_method_name = method_name;
      }

      if (!g_pattern_match_string (method_pattern, normalized_method_name))
        goto skip_method;

      if (group == NULL)
      {
        if (!have_loader && get_class_loader (jvmti, klass, &loader) != JVMTI_ERROR_NONE)
          goto skip_method;

        if (loader == NULL)
        {
          group = g_hash_table_lookup (groups, NULL);
        }
        else
        {
          GHashTableIter iter;
          jobject cur_loader;
          JsonBuilder * cur_group;

          g_hash_table_iter_init (&iter, groups);
          while (g_hash_table_iter_next (&iter, (gpointer *) &cur_loader, (gpointer *) &cur_group))
          {
            if (cur_loader != NULL && is_same_object (env, cur_loader, loader))
            {
              group = cur_group;
              break;
            }
          }
        }

        if (group == NULL)
        {
          jobject l;
          gchar * str;

          l = (loader != NULL) ? new_global_ref (env, loader) : NULL;

          group = json_builder_new_immutable ();
          g_hash_table_insert (groups, l, group);

          json_builder_begin_object (group);

          json_builder_set_member_name (group, "loader");
          str = g_strdup_printf ("0x%" G_GSIZE_MODIFIER "x", GPOINTER_TO_SIZE (l));
          json_builder_add_string_value (group, str);
          g_free (str);

          json_builder_set_member_name (group, "classes");
          json_builder_begin_array (group);
        }

        json_builder_begin_object (group);

        json_builder_set_member_name (group, "name");
        json_builder_add_string_value (group, class_name);

        json_builder_set_member_name (group, "methods");
        json_builder_begin_array (group);
      }

      json_builder_add_string_value (group, method_name);

      if (seen_method_names != NULL)
        g_hash_table_add (seen_method_names, g_strdup (method_name));

skip_method:
      g_free (normalized_method_name_copy);
      g_free (method_name_copy);
      deallocate (jvmti, method_signature_value);
      deallocate (jvmti, method_name_value);
    }

skip_class:
    if (group != NULL)
    {
      json_builder_end_array (group);
      json_builder_end_object (group);
    }

    if (seen_method_names != NULL)
      g_hash_table_unref (seen_method_names);

    deallocate (jvmti, methods);

    g_free (class_name_copy);
    g_free (class_name);
    deallocate (jvmti, signature);

    if (loader != NULL)
      delete_local_ref (env, loader);

    delete_local_ref (env, klass);
  }

  deallocate (jvmti, classes);

emit_results:
  result = finalize_method_groups_to_json (groups);

  g_hash_table_unref (groups);
  g_pattern_spec_free (method_pattern);
  g_pattern_spec_free (class_pattern);

  return result;
}

static gchar *
finalize_method_groups_to_json (GHashTable * groups)
{
  GString * result;
  GHashTableIter iter;
  guint i;
  JsonBuilder * group;

  result = g_string_sized_new (1024);

  g_string_append_c (result, '[');

  g_hash_table_iter_init (&iter, groups);
  for (i = 0; g_hash_table_iter_next (&iter, NULL, (gpointer *) &group); i++)
  {
    JsonNode * root;
    gchar * json;

    if (i > 0)
      g_string_append_c (result, ',');

    json_builder_end_array (group);
    json_builder_end_object (group);

    root = json_builder_get_root (group);
    json = json_to_string (root, FALSE);
    g_string_append (result, json);
    g_free (json);
    json_node_unref (root);

    g_object_unref (group);
  }

  g_string_append_c (result, ']');

  return g_string_free (result, FALSE);
}

static GPatternSpec *
make_pattern_spec (const gchar * pattern,
                   jboolean ignore_case)
{
  GPatternSpec * spec;

  if (ignore_case)
  {
    gchar * str = g_utf8_strdown (pattern, -1);
    spec = g_pattern_spec_new (str);
    g_free (str);
  }
  else
  {
    spec = g_pattern_spec_new (pattern);
  }

  return spec;
}

static gchar *
class_name_from_signature (const gchar * descriptor)
{
  gchar * result, * c;

  result = g_strdup (descriptor + 1);

  for (c = result; *c != '\\0'; c++)
  {
    if (*c == '/')
      *c = '.';
  }

  c[-1] = '\\0';

  return result;
}

static gchar *
format_method_signature (const gchar * name,
                         const gchar * signature)
{
  GString * sig;
  const gchar * cursor;
  gint arg_index;

  sig = g_string_sized_new (128);

  g_string_append (sig, name);

  cursor = signature;
  arg_index = -1;
  while (TRUE)
  {
    const gchar c = *cursor;

    if (c == '(')
    {
      g_string_append_c (sig, c);
      cursor++;
      arg_index = 0;
    }
    else if (c == ')')
    {
      g_string_append_c (sig, c);
      cursor++;
      break;
    }
    else
    {
      if (arg_index >= 1)
        g_string_append (sig, ", ");

      append_type (sig, &cursor);

      if (arg_index != -1)
        arg_index++;
    }
  }

  g_string_append (sig, ": ");
  append_type (sig, &cursor);

  return g_string_free (sig, FALSE);
}

static void
append_type (GString * output,
             const gchar ** type)
{
  const gchar * cursor = *type;

  switch (*cursor)
  {
    case 'Z':
      g_string_append (output, "boolean");
      cursor++;
      break;
    case 'B':
      g_string_append (output, "byte");
      cursor++;
      break;
    case 'C':
      g_string_append (output, "char");
      cursor++;
      break;
    case 'S':
      g_string_append (output, "short");
      cursor++;
      break;
    case 'I':
      g_string_append (output, "int");
      cursor++;
      break;
    case 'J':
      g_string_append (output, "long");
      cursor++;
      break;
    case 'F':
      g_string_append (output, "float");
      cursor++;
      break;
    case 'D':
      g_string_append (output, "double");
      cursor++;
      break;
    case 'V':
      g_string_append (output, "void");
      cursor++;
      break;
    case 'L':
    {
      gchar ch;

      cursor++;
      for (; (ch = *cursor) != ';'; cursor++)
      {
        g_string_append_c (output, (ch != '/') ? ch : '.');
      }
      cursor++;

      break;
    }
    case '[':
      *type = cursor + 1;
      append_type (output, type);
      g_string_append (output, "[]");
      return;
    default:
      g_string_append (output, "BUG");
      cursor++;
  }

  *type = cursor;
}

void
dealloc (gpointer mem)
{
  g_free (mem);
}

static gpointer
read_art_array (gpointer object_base,
                guint field_offset,
                guint length_size,
                guint * length)
{
  gpointer result, header;
  guint n;

  header = GSIZE_TO_POINTER (*(guint64 *) (object_base + field_offset));
  if (header != NULL)
  {
    result = header + length_size;
    if (length_size == sizeof (guint32))
      n = *(guint32 *) header;
    else
      n = *(guint64 *) header;
  }
  else
  {
    result = NULL;
    n = 0;
  }

  if (length != NULL)
    *length = n;

  return result;
}

static void
std_string_destroy (StdString * str)
{
  if ((str->l.capacity & 1) != 0)
    art_api.free (str->l.data);
}

static gchar *
std_string_c_str (StdString * self)
{
  if ((self->l.capacity & 1) != 0)
    return self->l.data;

  return self->s.data;
}
`,ep=/(.+)!([^/]+)\/?([isu]+)?/,Be=null,ys=null,Et=class t{static build(e,n){return _s(n),ys(e,n,r=>new t(Be.new(e,r,n)))}static enumerateMethods(e,n,r){_s(r);let o=e.match(ep);if(o===null)throw new Error("Invalid query; format is: class!method -- see documentation of Java.enumerateMethods(query) for details");let i=Memory.allocUtf8String(o[1]),s=Memory.allocUtf8String(o[2]),a=!1,l=!1,c=!1,u=o[3];u!==void 0&&(a=u.indexOf("s")!==-1,l=u.indexOf("i")!==-1,c=u.indexOf("u")!==-1);let d;if(n.jvmti!==null){let h=Be.enumerateMethodsJvm(i,s,Ot(a),Ot(l),Ot(c),r);try{d=JSON.parse(h.readUtf8String()).map(p=>{let m=ptr(p.loader);return p.loader=m.isNull()?null:m,p})}finally{Be.dealloc(h)}}else ze(r.vm,r,h=>{let p=Be.enumerateMethodsArt(i,s,Ot(a),Ot(l),Ot(c));try{let m=n["art::JavaVMExt::AddGlobalRef"],{vm:f}=n;d=JSON.parse(p.readUtf8String()).map(g=>{let y=g.loader;return g.loader=y!==0?m(f,h,ptr(y)):null,g})}finally{Be.dealloc(p)}});return d}constructor(e){this.handle=e}has(e){return Be.has(this.handle,Memory.allocUtf8String(e))!==0}find(e){return Be.find(this.handle,Memory.allocUtf8String(e)).readUtf8String()}list(){let e=Be.list(this.handle);try{return JSON.parse(e.readUtf8String())}finally{Be.dealloc(e)}}};function _s(t){Be===null&&(Be=tp(t),ys=np(Be,t.vm))}function tp(t){let e=cn(),{jvmti:n=null}=e,{pointerSize:r}=Process,o=8,i=r,s=7*r,a=40+5*r,l=o+i+s+a,u=Memory.alloc(l),d=u.add(o),h=d.add(i),{getDeclaredMethods:p,getDeclaredFields:m}=t.javaLangClass(),f=t.javaLangReflectMethod(),g=t.javaLangReflectField(),y=h;[n!==null?n:NULL,p,m,f.getName,f.getModifiers,g.getName,g.getModifiers].forEach(P=>{y=y.writePointer(P).add(r)});let E=h.add(s),{vm:N}=t;if(e.flavor==="art"){let P;if(n!==null)P=[0,0,0,0];else{let D=ao(N).offset;P=[D.ifields,D.methods,D.sfields,D.copiedMethodsOffset]}let O=De(N),A=Vn(N),j=E;[1,...P,O.size,O.offset.accessFlags,A.size,A.offset.accessFlags,4294967295].forEach(D=>{j=j.writeUInt(D).add(4)}),[e.artClassLinker.address,e["art::ClassLinker::VisitClasses"],e["art::mirror::Class::GetDescriptor"],e["art::ArtMethod::PrettyMethod"],Process.getModuleByName("libc.so").getExportByName("free")].forEach((D,M)=>{D===void 0&&(D=NULL),j=j.writePointer(D).add(r)})}let C=new CModule(Xd,{lock:u,models:d,java_api:h,art_api:E}),k={exceptions:"propagate"},U={exceptions:"propagate",scheduling:"exclusive"};return{handle:C,new:new NativeFunction(C.model_new,"pointer",["pointer","pointer","pointer"],k),has:new NativeFunction(C.model_has,"bool",["pointer","pointer"],U),find:new NativeFunction(C.model_find,"pointer",["pointer","pointer"],U),list:new NativeFunction(C.model_list,"pointer",["pointer"],U),enumerateMethodsArt:new NativeFunction(C.enumerate_methods_art,"pointer",["pointer","pointer","bool","bool","bool"],k),enumerateMethodsJvm:new NativeFunction(C.enumerate_methods_jvm,"pointer",["pointer","pointer","bool","bool","bool","pointer"],k),dealloc:new NativeFunction(C.dealloc,"void",["pointer"],U)}}function np(t,e){let n=cn();if(n.flavor!=="art")return rp;let r=n["art::JavaVMExt::DecodeGlobal"];return function(o,i,s){let a;return ze(e,i,l=>{let c=r(e,l,o);a=s(c)}),a}}function rp(t,e,n){return n(NULL)}function Ot(t){return t?1:0}var un=class{constructor(e,n){this.items=new Map,this.capacity=e,this.destroy=n}dispose(e){let{items:n,destroy:r}=this;n.forEach(o=>{r(o,e)}),n.clear()}get(e){let{items:n}=this,r=n.get(e);return r!==void 0&&(n.delete(e),n.set(e,r)),r}set(e,n,r){let{items:o}=this,i=o.get(e);if(i!==void 0)o.delete(e),this.destroy(i,r);else if(o.size===this.capacity){let s=o.keys().next().value,a=o.get(s);o.delete(s),this.destroy(a,r)}o.set(e,n)}};var rt=Oa(Rs(),1),dn=1,Ro=256,js=65536,Pp=305419896,Fs=32,Us=12,Ds=8,Vs=8,$s=4,Gs=4,zs=12,Rp=0,jp=1,Fp=2,Up=3,Dp=4,Vp=5,$p=6,Gp=4096,zp=4097,Bp=4099,Hp=8192,Jp=8193,Zp=8194,Wp=8195,qp=8196,Kp=8198,Yp=24,Qp=28,Xp=2,eh=24,Bs=rt.Buffer.from([3,0,7,14,0]),Oo="Ldalvik/annotation/Throws;",th=rt.Buffer.from([0]);function nh(t){let e=new jo,n=Object.assign({},t);return e.addClass(n),e.build()}var jo=class{constructor(){this.classes=[]}addClass(e){this.classes.push(e)}build(){let e=ih(this.classes),{classes:n,interfaces:r,fields:o,methods:i,protos:s,parameters:a,annotationDirectories:l,annotationSets:c,throwsAnnotations:u,types:d,strings:h}=e,p=0,m=0,f=8,g=12,y=20,E=112;p+=E;let N=p,C=h.length*Gs;p+=C;let k=p,U=d.length*$s;p+=U;let P=p,O=s.length*Us;p+=O;let A=p,j=o.length*Ds;p+=j;let D=p,M=i.length*Vs;p+=M;let $=p,W=n.length*Fs;p+=W;let K=p,Z=c.map(R=>{let z=p;return R.offset=z,p+=4+R.items.length*4,z}),Q=n.reduce((R,z)=>(z.classData.constructorMethods.forEach(le=>{let[,ue,ce]=le;(ue&Ro)===0&&ce>=0&&(le.push(p),R.push({offset:p,superConstructor:ce}),p+=eh)}),R),[]);l.forEach(R=>{R.offset=p,p+=16+R.methods.length*8});let ye=r.map(R=>{p=Po(p,4);let z=p;return R.offset=z,p+=4+2*R.types.length,z}),ve=a.map(R=>{p=Po(p,4);let z=p;return R.offset=z,p+=4+2*R.types.length,z}),Le=[],fe=h.map(R=>{let z=p,Y=rt.Buffer.from(Ve(R.length)),le=rt.Buffer.from(R,"utf8"),ue=rt.Buffer.concat([Y,le,th]);return Le.push(ue),p+=ue.length,z}),we=Q.map(R=>{let z=p;return p+=Bs.length,z}),me=u.map(R=>{let z=oh(R);return R.offset=p,p+=z.length,z}),Se=n.map((R,z)=>{R.classData.offset=p;let Y=rh(R);return p+=Y.length,Y}),Qe=0,Ht=0;p=Po(p,4);let ie=p,Ue=r.length+a.length,it=4+(o.length>0?1:0)+2+c.length+Q.length+l.length+(Ue>0?1:0)+1+we.length+u.length+n.length+1,yt=4+it*zs;p+=yt;let pt=p-K,Ct=p,I=rt.Buffer.alloc(Ct);I.write(`dex
035`),I.writeUInt32LE(Ct,32),I.writeUInt32LE(E,36),I.writeUInt32LE(Pp,40),I.writeUInt32LE(Qe,44),I.writeUInt32LE(Ht,48),I.writeUInt32LE(ie,52),I.writeUInt32LE(h.length,56),I.writeUInt32LE(N,60),I.writeUInt32LE(d.length,64),I.writeUInt32LE(k,68),I.writeUInt32LE(s.length,72),I.writeUInt32LE(P,76),I.writeUInt32LE(o.length,80),I.writeUInt32LE(o.length>0?A:0,84),I.writeUInt32LE(i.length,88),I.writeUInt32LE(D,92),I.writeUInt32LE(n.length,96),I.writeUInt32LE($,100),I.writeUInt32LE(pt,104),I.writeUInt32LE(K,108),fe.forEach((R,z)=>{I.writeUInt32LE(R,N+z*Gs)}),d.forEach((R,z)=>{I.writeUInt32LE(R,k+z*$s)}),s.forEach((R,z)=>{let[Y,le,ue]=R,ce=P+z*Us;I.writeUInt32LE(Y,ce),I.writeUInt32LE(le,ce+4),I.writeUInt32LE(ue!==null?ue.offset:0,ce+8)}),o.forEach((R,z)=>{let[Y,le,ue]=R,ce=A+z*Ds;I.writeUInt16LE(Y,ce),I.writeUInt16LE(le,ce+2),I.writeUInt32LE(ue,ce+4)}),i.forEach((R,z)=>{let[Y,le,ue]=R,ce=D+z*Vs;I.writeUInt16LE(Y,ce),I.writeUInt16LE(le,ce+2),I.writeUInt32LE(ue,ce+4)}),n.forEach((R,z)=>{let{interfaces:Y,annotationsDirectory:le}=R,ue=Y!==null?Y.offset:0,ce=le!==null?le.offset:0,Jt=0,Ge=$+z*Fs;I.writeUInt32LE(R.index,Ge),I.writeUInt32LE(R.accessFlags,Ge+4),I.writeUInt32LE(R.superClassIndex,Ge+8),I.writeUInt32LE(ue,Ge+12),I.writeUInt32LE(R.sourceFileIndex,Ge+16),I.writeUInt32LE(ce,Ge+20),I.writeUInt32LE(R.classData.offset,Ge+24),I.writeUInt32LE(Jt,Ge+28)}),c.forEach((R,z)=>{let{items:Y}=R,le=Z[z];I.writeUInt32LE(Y.length,le),Y.forEach((ue,ce)=>{I.writeUInt32LE(ue.offset,le+4+ce*4)})}),Q.forEach((R,z)=>{let{offset:Y,superConstructor:le}=R,ue=1,ce=1,Jt=1,Ge=0,wn=4;I.writeUInt16LE(ue,Y),I.writeUInt16LE(ce,Y+2),I.writeUInt16LE(Jt,Y+4),I.writeUInt16LE(Ge,Y+6),I.writeUInt32LE(we[z],Y+8),I.writeUInt32LE(wn,Y+12),I.writeUInt16LE(4208,Y+16),I.writeUInt16LE(le,Y+18),I.writeUInt16LE(0,Y+20),I.writeUInt16LE(14,Y+22)}),l.forEach(R=>{let z=R.offset,Y=0,le=0,ue=R.methods.length,ce=0;I.writeUInt32LE(Y,z),I.writeUInt32LE(le,z+4),I.writeUInt32LE(ue,z+8),I.writeUInt32LE(ce,z+12),R.methods.forEach((Jt,Ge)=>{let wn=z+16+Ge*8,[Ta,xa]=Jt;I.writeUInt32LE(Ta,wn),I.writeUInt32LE(xa.offset,wn+4)})}),r.forEach((R,z)=>{let Y=ye[z];I.writeUInt32LE(R.types.length,Y),R.types.forEach((le,ue)=>{I.writeUInt16LE(le,Y+4+ue*2)})}),a.forEach((R,z)=>{let Y=ve[z];I.writeUInt32LE(R.types.length,Y),R.types.forEach((le,ue)=>{I.writeUInt16LE(le,Y+4+ue*2)})}),Le.forEach((R,z)=>{R.copy(I,fe[z])}),we.forEach(R=>{Bs.copy(I,R)}),me.forEach((R,z)=>{R.copy(I,u[z].offset)}),Se.forEach((R,z)=>{R.copy(I,n[z].classData.offset)}),I.writeUInt32LE(it,ie);let Ae=[[Rp,1,m],[jp,h.length,N],[Fp,d.length,k],[Up,s.length,P]];o.length>0&&Ae.push([Dp,o.length,A]),Ae.push([Vp,i.length,D]),Ae.push([$p,n.length,$]),c.forEach((R,z)=>{Ae.push([Bp,R.items.length,Z[z]])}),Q.forEach(R=>{Ae.push([Jp,1,R.offset])}),l.forEach(R=>{Ae.push([Kp,1,R.offset])}),Ue>0&&Ae.push([zp,Ue,ye.concat(ve)[0]]),Ae.push([Zp,h.length,fe[0]]),we.forEach(R=>{Ae.push([Wp,1,R])}),u.forEach(R=>{Ae.push([qp,1,R.offset])}),n.forEach(R=>{Ae.push([Hp,1,R.classData.offset])}),Ae.push([Gp,1,ie]),Ae.forEach((R,z)=>{let[Y,le,ue]=R,ce=ie+4+z*zs;I.writeUInt16LE(Y,ce),I.writeUInt32LE(le,ce+4),I.writeUInt32LE(ue,ce+8)});let xi=new Checksum("sha1");return xi.update(I.slice(g+y)),rt.Buffer.from(xi.getDigest()).copy(I,g),I.writeUInt32LE(dh(I,g),f),I}};function rh(t){let{instanceFields:e,constructorMethods:n,virtualMethods:r}=t.classData;return rt.Buffer.from([0].concat(Ve(e.length)).concat(Ve(n.length)).concat(Ve(r.length)).concat(e.reduce((i,[s,a])=>i.concat(Ve(s)).concat(Ve(a)),[])).concat(n.reduce((i,[s,a,,l])=>i.concat(Ve(s)).concat(Ve(a)).concat(Ve(l||0)),[])).concat(r.reduce((i,[s,a])=>i.concat(Ve(s)).concat(Ve(a)).concat([0]),[])))}function oh(t){let{thrownTypes:e}=t;return rt.Buffer.from([Xp].concat(Ve(t.type)).concat([1]).concat(Ve(t.value)).concat([Qp,e.length]).concat(e.reduce((n,r)=>(n.push(Yp,r),n),[])))}function ih(t){let e=new Set,n=new Set,r={},o=[],i=[],s={},a=new Set,l=new Set;t.forEach(M=>{let{name:$,superClass:W,sourceFileName:K}=M;e.add("this"),e.add($),n.add($),e.add(W),n.add(W),e.add(K),M.interfaces.forEach(Z=>{e.add(Z),n.add(Z)}),M.fields.forEach(Z=>{let[Q,ye]=Z;e.add(Q),e.add(ye),n.add(ye),o.push([M.name,ye,Q])}),M.methods.some(([Z])=>Z==="<init>")||(M.methods.unshift(["<init>","V",[]]),a.add($)),M.methods.forEach(Z=>{let[Q,ye,ve,Le=[],fe]=Z;e.add(Q);let we=c(ye,ve),me=null;if(Le.length>0){let Se=Le.slice();Se.sort(),me=Se.join("|");let Qe=s[me];Qe===void 0&&(Qe={id:me,types:Se},s[me]=Qe),e.add(Oo),n.add(Oo),Le.forEach(Ht=>{e.add(Ht),n.add(Ht)}),e.add("value")}if(i.push([M.name,we,Q,me,fe]),Q==="<init>"){l.add($+"|"+we);let Se=W+"|"+we;a.has($)&&!l.has(Se)&&(i.push([W,we,Q,null,0]),l.add(Se))}})});function c(M,$){let W=[M].concat($),K=W.join("|");if(r[K]!==void 0)return K;e.add(M),n.add(M),$.forEach(Q=>{e.add(Q),n.add(Q)});let Z=W.map(uh).join("");return e.add(Z),r[K]=[K,Z,M,$],K}let u=Array.from(e);u.sort();let d=u.reduce((M,$,W)=>(M[$]=W,M),{}),h=Array.from(n).map(M=>d[M]);h.sort(Hs);let p=h.reduce((M,$,W)=>(M[u[$]]=W,M),{}),m=Object.keys(r).map(M=>r[M]);m.sort(ah);let f={},g=m.map(M=>{let[,$,W,K]=M,Z;if(K.length>0){let Q=K.join("|");Z=f[Q],Z===void 0&&(Z={types:K.map(ye=>p[ye]),offset:-1},f[Q]=Z)}else Z=null;return[d[$],p[W],Z]}),y=m.reduce((M,$,W)=>{let[K]=$;return M[K]=W,M},{}),E=Object.keys(f).map(M=>f[M]),N=o.map(M=>{let[$,W,K]=M;return[p[$],p[W],d[K]]});N.sort(lh);let C=i.map(M=>{let[$,W,K,Z,Q]=M;return[p[$],y[W],d[K],Z,Q]});C.sort(ch);let k=Object.keys(s).map(M=>s[M]).map(M=>({id:M.id,type:p[Oo],value:d.value,thrownTypes:M.types.map($=>p[$]),offset:-1})),U=k.map(M=>({id:M.id,items:[M],offset:-1})),P=U.reduce((M,$,W)=>(M[$.id]=W,M),{}),O={},A=[],j=t.map(M=>{let $=p[M.name],W=dn,K=p[M.superClass],Z,Q=M.interfaces.map(ie=>p[ie]);if(Q.length>0){Q.sort(Hs);let ie=Q.join("|");Z=O[ie],Z===void 0&&(Z={types:Q,offset:-1},O[ie]=Z)}else Z=null;let ye=d[M.sourceFileName],ve=C.reduce((ie,Ue,it)=>{let[yt,pt,Ct,I,Ae]=Ue;return yt===$&&ie.push([it,Ct,I,pt,Ae]),ie},[]),Le=null,fe=ve.filter(([,,ie])=>ie!==null).map(([ie,,Ue])=>[ie,U[P[Ue]]]);fe.length>0&&(Le={methods:fe,offset:-1},A.push(Le));let we=N.reduce((ie,Ue,it)=>{let[yt]=Ue;return yt===$&&ie.push([it>0?1:0,dn]),ie},[]),me=d["<init>"],Se=ve.filter(([,ie])=>ie===me).map(([ie,,,Ue])=>{if(a.has(M.name)){let it=-1,yt=C.length;for(let pt=0;pt!==yt;pt++){let[Ct,I,Ae]=C[pt];if(Ct===K&&Ae===me&&I===Ue){it=pt;break}}return[ie,dn|js,it]}else return[ie,dn|js|Ro,-1]}),Qe=sh(ve.filter(([,ie])=>ie!==me).map(([ie,,,,Ue])=>[ie,Ue|dn|Ro]));return{index:$,accessFlags:W,superClassIndex:K,interfaces:Z,sourceFileIndex:ye,annotationsDirectory:Le,classData:{instanceFields:we,constructorMethods:Se,virtualMethods:Qe,offset:-1}}}),D=Object.keys(O).map(M=>O[M]);return{classes:j,interfaces:D,fields:N,methods:C,protos:g,parameters:E,annotationDirectories:A,annotationSets:U,throwsAnnotations:k,types:h,strings:u}}function sh(t){let e=0;return t.map(([n,r],o)=>{let i;return o===0?i=[n,r]:i=[n-e,r],e=n,i})}function Hs(t,e){return t-e}function ah(t,e){let[,,n,r]=t,[,,o,i]=e;if(n<o)return-1;if(n>o)return 1;let s=r.join("|"),a=i.join("|");return s<a?-1:s>a?1:0}function lh(t,e){let[n,r,o]=t,[i,s,a]=e;return n!==i?n-i:o!==a?o-a:r-s}function ch(t,e){let[n,r,o]=t,[i,s,a]=e;return n!==i?n-i:o!==a?o-a:r-s}function uh(t){let e=t[0];return e==="L"||e==="["?"L":t}function Ve(t){if(t<=127)return[t];let e=[],n=!1;do{let r=t&127;t>>=7,n=t!==0,n&&(r|=128),e.push(r)}while(n);return e}function Po(t,e){let n=t%e;return n===0?t:t+e-n}function dh(t,e){let n=1,r=0,o=t.length;for(let i=e;i<o;i++)n=(n+t[i])%65521,r=(r+n)%65521;return(r<<16|n)>>>0}var Js=nh;var ph=1,Fo=null,Zs=null;function Ws(t){Fo=t}function Uo(t,e,n){let r=jt(t);return r===null&&(t.indexOf("[")===0?r=Do(t,e,n):(t[0]==="L"&&t[t.length-1]===";"&&(t=t.substring(1,t.length-1)),r=fh(t,e,n))),Object.assign({className:t},r)}var qs={boolean:{name:"Z",type:"uint8",size:1,byteSize:1,defaultValue:!1,isCompatible(t){return typeof t=="boolean"},fromJni(t){return!!t},toJni(t){return t?1:0},read(t){return t.readU8()},write(t,e){t.writeU8(e)},toString(){return this.name}},byte:{name:"B",type:"int8",size:1,byteSize:1,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-128&&t<=127},fromJni:Je,toJni:Je,read(t){return t.readS8()},write(t,e){t.writeS8(e)},toString(){return this.name}},char:{name:"C",type:"uint16",size:1,byteSize:2,defaultValue:0,isCompatible(t){if(typeof t!="string"||t.length!==1)return!1;let e=t.charCodeAt(0);return e>=0&&e<=65535},fromJni(t){return String.fromCharCode(t)},toJni(t){return t.charCodeAt(0)},read(t){return t.readU16()},write(t,e){t.writeU16(e)},toString(){return this.name}},short:{name:"S",type:"int16",size:1,byteSize:2,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-32768&&t<=32767},fromJni:Je,toJni:Je,read(t){return t.readS16()},write(t,e){t.writeS16(e)},toString(){return this.name}},int:{name:"I",type:"int32",size:1,byteSize:4,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-2147483648&&t<=2147483647},fromJni:Je,toJni:Je,read(t){return t.readS32()},write(t,e){t.writeS32(e)},toString(){return this.name}},long:{name:"J",type:"int64",size:2,byteSize:8,defaultValue:0,isCompatible(t){return typeof t=="number"||t instanceof Int64},fromJni:Je,toJni:Je,read(t){return t.readS64()},write(t,e){t.writeS64(e)},toString(){return this.name}},float:{name:"F",type:"float",size:1,byteSize:4,defaultValue:0,isCompatible(t){return typeof t=="number"},fromJni:Je,toJni:Je,read(t){return t.readFloat()},write(t,e){t.writeFloat(e)},toString(){return this.name}},double:{name:"D",type:"double",size:2,byteSize:8,defaultValue:0,isCompatible(t){return typeof t=="number"},fromJni:Je,toJni:Je,read(t){return t.readDouble()},write(t,e){t.writeDouble(e)},toString(){return this.name}},void:{name:"V",type:"void",size:0,byteSize:0,defaultValue:void 0,isCompatible(t){return t===void 0},fromJni(){},toJni(){return NULL},toString(){return this.name}}},hh=new Set(Object.values(qs).map(t=>t.name));function jt(t){let e=qs[t];return e!==void 0?e:null}function fh(t,e,n){let r=n._types[e?1:0],o=r[t];return o!==void 0||(t==="java.lang.Object"?o=mh(n):o=gh(t,e,n),r[t]=o),o}function mh(t){return{name:"Ljava/lang/Object;",type:"pointer",size:1,defaultValue:NULL,isCompatible(e){return e===null?!0:e===void 0?!1:e.$h instanceof NativePointer?!0:typeof e=="string"},fromJni(e,n,r){return e.isNull()?null:t.cast(e,t.use("java.lang.Object"),r)},toJni(e,n){return e===null?NULL:typeof e=="string"?n.newStringUtf(e):e.$h}}}function gh(t,e,n){let r=null,o=null,i=null;function s(){return r===null&&(r=n.use(t).class),r}function a(c){let u=s();return o===null&&(o=u.isInstance.overload("java.lang.Object")),o.call(u,c)}function l(){if(i===null){let c=s();i=n.use("java.lang.String").class.isAssignableFrom(c)}return i}return{name:xt(t),type:"pointer",size:1,defaultValue:NULL,isCompatible(c){return c===null?!0:c===void 0?!1:c.$h instanceof NativePointer?a(c):typeof c=="string"&&l()},fromJni(c,u,d){return c.isNull()?null:l()&&e?u.stringFromJni(c):n.cast(c,n.use(t),d)},toJni(c,u){return c===null?NULL:typeof c=="string"?u.newStringUtf(c):c.$h},toString(){return this.name}}}var _h=[["Z","boolean"],["B","byte"],["C","char"],["D","double"],["F","float"],["I","int"],["J","long"],["S","short"]].reduce((t,[e,n])=>(t["["+e]=yh("["+e,n),t),{});function yh(t,e){let n=S.prototype,r=wh(e),o={typeName:e,newArray:n["new"+r+"Array"],setRegion:n["set"+r+"ArrayRegion"],getElements:n["get"+r+"ArrayElements"],releaseElements:n["release"+r+"ArrayElements"]};return{name:t,type:"pointer",size:1,defaultValue:NULL,isCompatible(i){return Eh(i,e)},fromJni(i,s,a){return vh(i,o,s,a)},toJni(i,s){return Sh(i,o,s)}}}function Do(t,e,n){let r=_h[t];if(r!==void 0)return r;if(t.indexOf("[")!==0)throw new Error("Unsupported type: "+t);let o=t.substring(1),i=Uo(o,e,n),s=0,a=o.length;for(;s!==a&&o[s]==="[";)s++;o=o.substring(s),o[0]==="L"&&o[o.length-1]===";"&&(o=o.substring(1,o.length-1));let l=o.replace(/\./g,"/");hh.has(l)?l="[".repeat(s)+l:l="[".repeat(s)+"L"+l+";";let c="["+l;return o="[".repeat(s)+o,{name:t.replace(/\./g,"/"),type:"pointer",size:1,defaultValue:NULL,isCompatible(u){return u===null?!0:typeof u!="object"||u.length===void 0?!1:u.every(function(d){return i.isCompatible(d)})},fromJni(u,d,h){if(u.isNull())return null;let p=[],m=d.getArrayLength(u);for(let f=0;f!==m;f++){let g=d.getObjectArrayElement(u,f);try{p.push(i.fromJni(g,d))}finally{d.deleteLocalRef(g)}}try{p.$w=n.cast(u,n.use(c),h)}catch{n.use("java.lang.reflect.Array").newInstance(n.use(o).class,0),p.$w=n.cast(u,n.use(c),h)}return p.$dispose=bh,p},toJni(u,d){if(u===null)return NULL;if(!(u instanceof Array))throw new Error("Expected an array");let h=u.$w;if(h!==void 0)return h.$h;let p=u.length,f=n.use(o).$borrowClassHandle(d);try{let g=d.newObjectArray(p,f.value,NULL);d.throwIfExceptionPending();for(let y=0;y!==p;y++){let E=i.toJni(u[y],d);try{d.setObjectArrayElement(g,y,E)}finally{i.type==="pointer"&&d.getObjectRefType(E)===ph&&d.deleteLocalRef(E)}d.throwIfExceptionPending()}return g}finally{f.unref(d)}}}}function bh(){let t=this.length;for(let e=0;e!==t;e++){let n=this[e];if(n===null)continue;let r=n.$dispose;if(r===void 0)break;r.call(n)}this.$w.$dispose()}function vh(t,e,n,r){if(t.isNull())return null;let o=jt(e.typeName),i=n.getArrayLength(t);return new Zn(t,e,o,i,n,r)}function Sh(t,e,n){if(t===null)return NULL;let r=t.$h;if(r!==void 0)return r;let o=t.length,i=jt(e.typeName),s=e.newArray.call(n,o);if(s.isNull())throw new Error("Unable to construct array");if(o>0){let a=i.byteSize,l=i.write,c=i.toJni,u=Memory.alloc(o*i.byteSize);for(let d=0;d!==o;d++)l(u.add(d*a),c(t[d]));e.setRegion.call(n,s,0,o,u),n.throwIfExceptionPending()}return s}function Eh(t,e){if(t===null)return!0;if(t instanceof Zn)return t.$s.typeName===e;if(!(typeof t=="object"&&t.length!==void 0))return!1;let r=jt(e);return Array.prototype.every.call(t,o=>r.isCompatible(o))}function Zn(t,e,n,r,o,i=!0){if(i){let s=o.newGlobalRef(t);this.$h=s,this.$r=Script.bindWeak(this,o.vm.makeHandleDestructor(s))}else this.$h=t,this.$r=null;return this.$s=e,this.$t=n,this.length=r,new Proxy(this,Zs)}Zs={has(t,e){return e in t?!0:t.tryParseIndex(e)!==null},get(t,e,n){let r=t.tryParseIndex(e);return r===null?t[e]:t.readElement(r)},set(t,e,n,r){let o=t.tryParseIndex(e);return o===null?(t[e]=n,!0):(t.writeElement(o,n),!0)},ownKeys(t){let e=[],{length:n}=t;for(let r=0;r!==n;r++){let o=r.toString();e.push(o)}return e.push("length"),e},getOwnPropertyDescriptor(t,e){return t.tryParseIndex(e)!==null?{writable:!0,configurable:!0,enumerable:!0}:Object.getOwnPropertyDescriptor(t,e)}};Object.defineProperties(Zn.prototype,{$dispose:{enumerable:!0,value(){let t=this.$r;t!==null&&(this.$r=null,Script.unbindWeak(t))}},$clone:{value(t){return new Zn(this.$h,this.$s,this.$t,this.length,t)}},tryParseIndex:{value(t){if(typeof t=="symbol")return null;let e=parseInt(t);return isNaN(e)||e<0||e>=this.length?null:e}},readElement:{value(t){return this.withElements(e=>{let n=this.$t;return n.fromJni(n.read(e.add(t*n.byteSize)))})}},writeElement:{value(t,e){let{$h:n,$s:r,$t:o}=this,i=Fo.getEnv(),s=Memory.alloc(o.byteSize);o.write(s,o.toJni(e)),r.setRegion.call(i,n,t,1,s)}},withElements:{value(t){let{$h:e,$s:n}=this,r=Fo.getEnv(),o=n.getElements.call(r,e);if(o.isNull())throw new Error("Unable to get array elements");try{return t(o)}finally{n.releaseElements.call(r,e,o)}}},toJSON:{value(){let{length:t,$t:e}=this,{byteSize:n,fromJni:r,read:o}=e;return this.withElements(i=>{let s=[];for(let a=0;a!==t;a++){let l=r(o(i.add(a*n)));s.push(l)}return s})}},toString:{value(){return this.toJSON().toString()}}});function xt(t){return"L"+t.replace(/\./g,"/")+";"}function wh(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Je(t){return t}var Th=4,{ensureClassInitialized:Ks,makeMethodMangler:na}=Gn,xh=8,Go=1,hn=2,ct=3,Vo=1,zo=2,Wn=1,ra=2,Ys=Symbol("PENDING_USE"),Qs="/data/local/tmp",{getCurrentThreadId:Kn,pointerSize:pn}=Process,Ie={state:"empty",factories:[],loaders:null,Integer:null},re=null,he=null,oa=null,ia=null,sa=null,aa=null,la=null,Xs=null,$o=null,Ut=new Map,ft=class t{static _initialize(e,n){re=e,he=n,oa=n.flavor==="art",n.flavor==="jvm"&&(Ks=ps,na=fs)}static _disposeAll(e){Ie.factories.forEach(n=>{n._dispose(e)})}static get(e){let n=Hh(),r=n.factories[0];if(e===null)return r;let o=n.loaders.get(e);if(o!==null){let s=r.cast(o,n.Integer);return n.factories[s.intValue()]}let i=new t;return i.loader=e,i.cacheDir=r.cacheDir,Jo(i,e),i}constructor(){this.cacheDir=Qs,this.codeCacheDir=Qs+"/dalvik-cache",this.tempFileNaming={prefix:"frida",suffix:""},this._classes={},this._classHandles=new un(10,Ah),this._patchedMethods=new Set,this._loader=null,this._types=[{},{}],Ie.factories.push(this)}_dispose(e){Array.from(this._patchedMethods).forEach(n=>{n.implementation=null}),this._patchedMethods.clear(),fo(),this._classHandles.dispose(e),this._classes={}}get loader(){return this._loader}set loader(e){let n=this._loader===null&&e!==null;this._loader=e,n&&Ie.state==="ready"&&this===Ie.factories[0]&&Jo(this,e)}use(e,n={}){let r=n.cache!=="skip",o=r?this._getUsedClass(e):void 0;if(o===void 0)try{let i=re.getEnv(),{_loader:s}=this,a=s!==null?Ch(e,s,i):Nh(e);o=this._make(e,a,i)}finally{r&&this._setUsedClass(e,o)}return o}_getUsedClass(e){let n;for(;(n=this._classes[e])===Ys;)Thread.sleep(.05);return n===void 0&&(this._classes[e]=Ys),n}_setUsedClass(e,n){n!==void 0?this._classes[e]=n:delete this._classes[e]}_make(e,n,r){let o=Lh(),i=Object.create(Wo.prototype,{[Symbol.for("n")]:{value:e},$n:{get(){return this[Symbol.for("n")]}},[Symbol.for("C")]:{value:o},$C:{get(){return this[Symbol.for("C")]}},[Symbol.for("w")]:{value:null,writable:!0},$w:{get(){return this[Symbol.for("w")]},set(l){this[Symbol.for("w")]=l}},[Symbol.for("_s")]:{writable:!0},$_s:{get(){return this[Symbol.for("_s")]},set(l){this[Symbol.for("_s")]=l}},[Symbol.for("c")]:{value:[null]},$c:{get(){return this[Symbol.for("c")]}},[Symbol.for("m")]:{value:new Map},$m:{get(){return this[Symbol.for("m")]}},[Symbol.for("l")]:{value:null,writable:!0},$l:{get(){return this[Symbol.for("l")]},set(l){this[Symbol.for("l")]=l}},[Symbol.for("gch")]:{value:n},$gch:{get(){return this[Symbol.for("gch")]}},[Symbol.for("f")]:{value:this},$f:{get(){return this[Symbol.for("f")]}}});o.prototype=i;let s=new o(null);i[Symbol.for("w")]=s,i.$w=s;let a=s.$borrowClassHandle(r);try{let l=a.value;Ks(r,l),i.$l=Et.build(l,r)}finally{a.unref(r)}return s}retain(e){let n=re.getEnv();return e.$clone(n)}cast(e,n,r){let o=re.getEnv(),i=e.$h;i===void 0&&(i=e);let s=n.$borrowClassHandle(o);try{if(!o.isInstanceOf(i,s.value))throw new Error(`Cast from '${o.getObjectClassName(i)}' to '${n.$n}' isn't possible`)}finally{s.unref(o)}let a=n.$C;return new a(i,Wn,o,r)}wrap(e,n,r){let o=n.$C,i=new o(e,Wn,r,!1);return i.$r=Script.bindWeak(i,re.makeHandleDestructor(e)),i}array(e,n){let r=re.getEnv(),o=jt(e);o!==null&&(e=o.name);let i=Do("["+e,!1,this),s=i.toJni(n,r);return i.fromJni(s,r,!0)}registerClass(e){let n=re.getEnv(),r=[];try{let o=this.use("java.lang.Class"),i=n.javaLangReflectMethod(),s=n.vaMethod("pointer",[]),a=e.name,l=e.implements||[],c=e.superClass||this.use("java.lang.Object"),u=[],d=[],h={name:xt(a),sourceFileName:Zh(a),superClass:xt(c.$n),interfaces:l.map(A=>xt(A.$n)),fields:u,methods:d},p=l.slice();l.forEach(A=>{Array.prototype.slice.call(A.class.getInterfaces()).forEach(j=>{let D=this.cast(j,o).getCanonicalName();p.push(this.use(D))})});let m=e.fields||{};Object.getOwnPropertyNames(m).forEach(A=>{let j=this._getType(m[A]);u.push([A,j.name])});let f={},g={};p.forEach(A=>{let j=A.$borrowClassHandle(n);r.push(j);let D=j.value;A.$ownMembers.filter(M=>A[M].overloads!==void 0).forEach(M=>{let $=A[M],W=$.overloads,K=W.map(Z=>ea(M,Z.returnType,Z.argumentTypes));f[M]=[$,K,D],W.forEach((Z,Q)=>{let ye=K[Q];g[ye]=[Z,D]})})});let y=e.methods||{},N=Object.keys(y).reduce((A,j)=>{let D=y[j],M=j==="$init"?"<init>":j;return D instanceof Array?A.push(...D.map($=>[M,$])):A.push([M,D]),A},[]),C=[];N.forEach(([A,j])=>{let D=ct,M,$,W=[],K;if(typeof j=="function"){let ve=f[A];if(ve!==void 0&&Array.isArray(ve)){let[Le,fe,we]=ve;if(fe.length>1)throw new Error(`More than one overload matching '${A}': signature must be specified`);delete g[fe[0]];let me=Le.overloads[0];D=me.type,M=me.returnType,$=me.argumentTypes,K=j;let Se=n.toReflectedMethod(we,me.handle,0),Qe=s(n.handle,Se,i.getGenericExceptionTypes);W=Zo(n,Qe).map(xt),n.deleteLocalRef(Qe),n.deleteLocalRef(Se)}else M=this._getType("void"),$=[],K=j}else{if(j.isStatic&&(D=hn),M=this._getType(j.returnType||"void"),$=(j.argumentTypes||[]).map(fe=>this._getType(fe)),K=j.implementation,typeof K!="function")throw new Error("Expected a function implementation for method: "+A);let ve=ea(A,M,$),Le=g[ve];if(Le!==void 0){let[fe,we]=Le;delete g[ve],D=fe.type,M=fe.returnType,$=fe.argumentTypes;let me=n.toReflectedMethod(we,fe.handle,0),Se=s(n.handle,me,i.getGenericExceptionTypes);W=Zo(n,Se).map(xt),n.deleteLocalRef(Se),n.deleteLocalRef(me)}}let Z=M.name,Q=$.map(ve=>ve.name),ye="("+Q.join("")+")"+Z;d.push([A,Z,Q,W,D===hn?xh:0]),C.push([A,ye,D,M,$,K])});let k=Object.keys(g);if(k.length>0)throw new Error("Missing implementation for: "+k.join(", "));let U=qn.fromBuffer(Js(h),this);try{U.load()}finally{U.file.delete()}let P=this.use(e.name),O=N.length;if(O>0){let A=3*pn,j=Memory.alloc(O*A),D=[],M=[];C.forEach(([K,Z,Q,ye,ve,Le],fe)=>{let we=Memory.allocUtf8String(K),me=Memory.allocUtf8String(Z),Se=ca(K,P,Q,ye,ve,Le);j.add(fe*A).writePointer(we),j.add(fe*A+pn).writePointer(me),j.add(fe*A+2*pn).writePointer(Se),M.push(we,me),D.push(Se)});let $=P.$borrowClassHandle(n);r.push($);let W=$.value;n.registerNatives(W,j,O),n.throwIfExceptionPending(),P.$nativeMethods=D}return P}finally{r.forEach(o=>{o.unref(n)})}}choose(e,n){let r=re.getEnv(),{flavor:o}=he;if(o==="jvm")this._chooseObjectsJvm(e,r,n);else if(o==="art"){let i=he["art::gc::Heap::VisitObjects"]===void 0;if(i&&he["art::gc::Heap::GetInstances"]===void 0)return this._chooseObjectsJvm(e,r,n);ze(re,r,s=>{i?this._chooseObjectsArtPreA12(e,r,s,n):this._chooseObjectsArtLegacy(e,r,s,n)})}else this._chooseObjectsDalvik(e,r,n)}_chooseObjectsJvm(e,n,r){let o=this.use(e),{jvmti:i}=he,s=1,a=3,l=o.$borrowClassHandle(n),c=int64(l.value.toString());try{let u=new NativeCallback((y,E,N,C)=>(N.writeS64(c),s),"int",["int64","int64","pointer","pointer"]);i.iterateOverInstancesOfClass(l.value,a,u,l.value);let d=Memory.alloc(8);d.writeS64(c);let h=Memory.alloc(Th),p=Memory.alloc(pn);i.getObjectsWithTags(1,d,h,p,NULL);let m=h.readS32(),f=p.readPointer(),g=[];for(let y=0;y!==m;y++)g.push(f.add(y*pn).readPointer());i.deallocate(f);try{for(let y of g){let E=this.cast(y,o);if(r.onMatch(E)==="stop")break}r.onComplete()}finally{g.forEach(y=>{n.deleteLocalRef(y)})}}finally{l.unref(n)}}_chooseObjectsArtPreA12(e,n,r,o){let i=this.use(e),s=sn.$new(r,re),a,l=i.$borrowClassHandle(n);try{let h=he["art::JavaVMExt::DecodeGlobal"](he.vm,r,l.value);a=s.newHandle(h)}finally{l.unref(n)}let c=0,u=on.$new();he["art::gc::Heap::GetInstances"](he.artHeap,s,a,c,u);let d=u.handles.map(h=>n.newGlobalRef(h));u.$delete(),s.$delete();try{for(let h of d){let p=this.cast(h,i);if(o.onMatch(p)==="stop")break}o.onComplete()}finally{d.forEach(h=>{n.deleteGlobalRef(h)})}}_chooseObjectsArtLegacy(e,n,r,o){let i=this.use(e),s=[],a=he["art::JavaVMExt::AddGlobalRef"],l=he.vm,c,u=i.$borrowClassHandle(n);try{c=he["art::JavaVMExt::DecodeGlobal"](l,r,u.value).toInt32()}finally{u.unref(n)}let d=vo(c,h=>{s.push(a(l,r,h))});he["art::gc::Heap::VisitObjects"](he.artHeap,d,NULL);try{for(let h of s){let p=this.cast(h,i);if(o.onMatch(p)==="stop")break}}finally{s.forEach(h=>{n.deleteGlobalRef(h)})}o.onComplete()}_chooseObjectsDalvik(e,n,r){let o=this.use(e);if(he.addLocalReference===null){let s=Process.getModuleByName("libdvm.so"),a;switch(Process.arch){case"arm":a="2d e9 f0 41 05 46 15 4e 0c 46 7e 44 11 b3 43 68";break;case"ia32":a="8d 64 24 d4 89 5c 24 1c 89 74 24 20 e8 ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? 85 d2";break}Memory.scan(s.base,s.size,a,{onMatch:(l,c)=>{let u;if(Process.arch==="arm")l=l.or(1),u=new NativeFunction(l,"pointer",["pointer","pointer"]);else{let d=Memory.alloc(Process.pageSize);Memory.patchCode(d,16,h=>{let p=new X86Writer(h,{pc:d});p.putMovRegRegOffsetPtr("eax","esp",4),p.putMovRegRegOffsetPtr("edx","esp",8),p.putJmpAddress(l),p.flush()}),u=new NativeFunction(d,"pointer",["pointer","pointer"]),u._thunk=d}return he.addLocalReference=u,re.perform(d=>{i(this,d)}),"stop"},onError(l){},onComplete(){he.addLocalReference===null&&r.onComplete()}})}else i(this,n);function i(s,a){let{DVM_JNI_ENV_OFFSET_SELF:l}=Gn,c=a.handle.add(l).readPointer(),u,d=o.$borrowClassHandle(a);try{u=he.dvmDecodeIndirectRef(c,d.value)}finally{d.unref(a)}let h=u.toMatchPattern(),p=he.dvmHeapSourceGetBase(),f=he.dvmHeapSourceGetLimit().sub(p).toInt32();Memory.scan(p,f,h,{onMatch:(g,y)=>{he.dvmIsValidObject(g)&&re.perform(E=>{let N=E.handle.add(l).readPointer(),C,k=he.addLocalReference(N,g);try{C=s.cast(k,o)}finally{E.deleteLocalRef(k)}if(r.onMatch(C)==="stop")return"stop"})},onError(g){},onComplete(){r.onComplete()}})}}openClassFile(e){return new qn(e,null,this)}_getType(e,n=!0){return Uo(e,n,this)}};function Lh(){return function(t,e,n,r){return Wo.call(this,t,e,n,r)}}function Wo(t,e,n,r=!0){if(t!==null)if(r){let o=n.newGlobalRef(t);this.$h=o,this.$r=Script.bindWeak(this,re.makeHandleDestructor(o))}else this.$h=t,this.$r=null;else this.$h=null,this.$r=null;return this.$t=e,new Proxy(this,ia)}ia={has(t,e){return e in t?!0:t.$has(e)},get(t,e,n){if(typeof e!="string"||e.startsWith("$")||e==="class")return t[e];let r=t.$find(e);return r!==null?r(n):t[e]},set(t,e,n,r){return t[e]=n,!0},ownKeys(t){return t.$list()},getOwnPropertyDescriptor(t,e){return Object.prototype.hasOwnProperty.call(t,e)?Object.getOwnPropertyDescriptor(t,e):{writable:!1,configurable:!0,enumerable:!0}}};Object.defineProperties(Wo.prototype,{[Symbol.for("new")]:{enumerable:!1,get(){return this.$getCtor("allocAndInit")}},$new:{enumerable:!0,get(){return this[Symbol.for("new")]}},[Symbol.for("alloc")]:{enumerable:!1,value(){let t=re.getEnv(),e=this.$borrowClassHandle(t);try{let n=t.allocObject(e.value);return this.$f.cast(n,this)}finally{e.unref(t)}}},$alloc:{enumerable:!0,get(){return this[Symbol.for("alloc")]}},[Symbol.for("init")]:{enumerable:!1,get(){return this.$getCtor("initOnly")}},$init:{enumerable:!0,get(){return this[Symbol.for("init")]}},[Symbol.for("dispose")]:{enumerable:!1,value(){let t=this.$r;t!==null&&(this.$r=null,Script.unbindWeak(t)),this.$h!==null&&(this.$h=void 0)}},$dispose:{enumerable:!0,get(){return this[Symbol.for("dispose")]}},[Symbol.for("clone")]:{enumerable:!1,value(t){let e=this.$C;return new e(this.$h,this.$t,t)}},$clone:{value(t){return this[Symbol.for("clone")](t)}},[Symbol.for("class")]:{enumerable:!1,get(){let t=re.getEnv(),e=this.$borrowClassHandle(t);try{let n=this.$f;return n.cast(e.value,n.use("java.lang.Class"))}finally{e.unref(t)}}},class:{enumerable:!0,get(){return this[Symbol.for("class")]}},[Symbol.for("className")]:{enumerable:!1,get(){let t=this.$h;return t===null?this.$n:re.getEnv().getObjectClassName(t)}},$className:{enumerable:!0,get(){return this[Symbol.for("className")]}},[Symbol.for("ownMembers")]:{enumerable:!1,get(){return this.$l.list()}},$ownMembers:{enumerable:!0,get(){return this[Symbol.for("ownMembers")]}},[Symbol.for("super")]:{enumerable:!1,get(){let t=re.getEnv(),e=this.$s.$C;return new e(this.$h,ra,t)}},$super:{enumerable:!0,get(){return this[Symbol.for("super")]}},[Symbol.for("s")]:{enumerable:!1,get(){let t=Object.getPrototypeOf(this),e=t.$_s;if(e===void 0){let n=re.getEnv(),r=this.$borrowClassHandle(n);try{let o=n.getSuperclass(r.value);if(o.isNull())e=null;else try{let i=n.getClassName(o),s=t.$f;if(e=s._getUsedClass(i),e===void 0)try{let a=Mh(this);e=s._make(i,a,n)}finally{s._setUsedClass(i,e)}}finally{n.deleteLocalRef(o)}}finally{r.unref(n)}t.$_s=e}return e}},$s:{get(){return this[Symbol.for("s")]}},[Symbol.for("isSameObject")]:{enumerable:!1,value(t){return re.getEnv().isSameObject(t.$h,this.$h)}},$isSameObject:{value(t){return this[Symbol.for("isSameObject")](t)}},[Symbol.for("getCtor")]:{enumerable:!1,value(t){let e=this.$c,n=e[0];if(n===null){let r=re.getEnv(),o=this.$borrowClassHandle(r);try{n=kh(o.value,this.$w,r),e[0]=n}finally{o.unref(r)}}return n[t]}},$getCtor:{value(t){return this[Symbol.for("getCtor")](t)}},[Symbol.for("borrowClassHandle")]:{enumerable:!1,value(t){let e=this.$n,n=this.$f._classHandles,r=n.get(e);return r===void 0&&(r=new qo(this.$gch(t),t),n.set(e,r,t)),r.ref()}},$borrowClassHandle:{value(t){return this[Symbol.for("borrowClassHandle")](t)}},[Symbol.for("copyClassHandle")]:{enumerable:!1,value(t){let e=this.$borrowClassHandle(t);try{return t.newLocalRef(e.value)}finally{e.unref(t)}}},$copyClassHandle:{value(t){return this[Symbol.for("copyClassHandle")](t)}},[Symbol.for("getHandle")]:{enumerable:!1,value(t){let e=this.$h;if(e===void 0)throw new Error("Wrapper is disposed; perhaps it was borrowed from a hook instead of calling Java.retain() to make a long-lived wrapper?");return e}},$getHandle:{value(t){return this[Symbol.for("getHandle")](t)}},[Symbol.for("list")]:{enumerable:!1,value(){let t=this.$s,e=t!==null?t.$list():[],n=this.$l;return Array.from(new Set(e.concat(n.list())))}},$list:{get(){return this[Symbol.for("list")]}},[Symbol.for("has")]:{enumerable:!1,value(t){if(this.$m.has(t)||this.$l.has(t))return!0;let r=this.$s;return!!(r!==null&&r.$has(t))}},$has:{value(t){return this[Symbol.for("has")](t)}},[Symbol.for("find")]:{enumerable:!1,value(t){let e=this.$m,n=e.get(t);if(n!==void 0)return n;let o=this.$l.find(t);if(o!==null){let s=re.getEnv(),a=this.$borrowClassHandle(s);try{n=Ih(t,o,a.value,this.$w,s)}finally{a.unref(s)}return e.set(t,n),n}let i=this.$s;return i!==null?i.$find(t):null}},$find:{value(t){return this[Symbol.for("find")](t)}},[Symbol.for("toJSON")]:{enumerable:!1,value(){let t=this.$n;if(this.$h===null)return`<class: ${t}>`;let n=this.$className;return t===n?`<instance: ${t}>`:`<instance: ${t}, $className: ${n}>`}},toJSON:{get(){return this[Symbol.for("toJSON")]}}});function qo(t,e){this.value=e.newGlobalRef(t),e.deleteLocalRef(t),this.refs=1}qo.prototype.ref=function(){return this.refs++,this};qo.prototype.unref=function(t){--this.refs===0&&t.deleteGlobalRef(this.value)};function Ah(t,e){t.unref(e)}function Nh(t){let e=t.replace(/\./g,"/");return function(n){let r=Kn();da(r);try{return n.findClass(e)}finally{pa(r)}}}function Ch(t,e,n){return $o===null&&(Xs=n.vaMethod("pointer",["pointer"]),$o=e.loadClass.overload("java.lang.String").handle),n=null,function(r){let o=r.newStringUtf(t),i=Kn();da(i);try{let s=Xs(r.handle,e.$h,$o,o);return r.throwIfExceptionPending(),s}finally{pa(i),r.deleteLocalRef(o)}}}function Mh(t){return function(e){let n=t.$borrowClassHandle(e);try{return e.getSuperclass(n.value)}finally{n.unref(e)}}}function kh(t,e,n){let{$n:r,$f:o}=e,i=Jh(r),s=n.javaLangClass(),a=n.javaLangReflectConstructor(),l=n.vaMethod("pointer",[]),c=n.vaMethod("uint8",[]),u=[],d=[],h=o._getType(r,!1),p=o._getType("void",!1),m=l(n.handle,t,s.getDeclaredConstructors);try{let f=n.getArrayLength(m);if(f!==0)for(let g=0;g!==f;g++){let y,E,N=n.getObjectArrayElement(m,g);try{y=n.fromReflectedMethod(N),E=l(n.handle,N,a.getGenericParameterTypes)}finally{n.deleteLocalRef(N)}let C;try{C=Zo(n,E).map(k=>o._getType(k))}finally{n.deleteLocalRef(E)}u.push(Ft(i,e,Go,y,h,C,n)),d.push(Ft(i,e,ct,y,p,C,n))}else{if(c(n.handle,t,s.isInterface))throw new Error("cannot instantiate an interface");let y=n.javaLangObject(),E=n.getMethodId(y,"<init>","()V");u.push(Ft(i,e,Go,E,h,[],n)),d.push(Ft(i,e,ct,E,p,[],n))}}finally{n.deleteLocalRef(m)}if(d.length===0)throw new Error("no supported overloads");return{allocAndInit:Bo(u),initOnly:Bo(d)}}function Ih(t,e,n,r,o){return e.startsWith("m")?Oh(t,e,n,r,o):Gh(t,e,n,r,o)}function Oh(t,e,n,r,o){let{$f:i}=r,s=e.split(":").slice(1),a=o.javaLangReflectMethod(),l=o.vaMethod("pointer",[]),c=o.vaMethod("uint8",[]),u=s.map(h=>{let p=h[0]==="s"?hn:ct,m=ptr(h.substr(1)),f,g=[],y=o.toReflectedMethod(n,m,p===hn?1:0);try{let E=!!c(o.handle,y,a.isVarArgs),N=l(o.handle,y,a.getGenericReturnType);o.throwIfExceptionPending();try{f=i._getType(o.getTypeName(N))}finally{o.deleteLocalRef(N)}let C=l(o.handle,y,a.getParameterTypes);try{let k=o.getArrayLength(C);for(let U=0;U!==k;U++){let P=o.getObjectArrayElement(C,U),O;try{O=E&&U===k-1?o.getArrayTypeName(P):o.getTypeName(P)}finally{o.deleteLocalRef(P)}let A=i._getType(O);g.push(A)}}finally{o.deleteLocalRef(C)}}catch{return null}finally{o.deleteLocalRef(y)}return Ft(t,r,p,m,f,g,o)}).filter(h=>h!==null);if(u.length===0)throw new Error("No supported overloads");t==="valueOf"&&Dh(u);let d=Bo(u);return function(h){return d}}function Bo(t){let e=Ph();return Object.setPrototypeOf(e,sa),e._o=t,e}function Ph(){let t=function(){return t.invoke(this,arguments)};return t}sa=Object.create(Function.prototype,{overloads:{enumerable:!0,get(){return this._o}},overload:{value(...t){let e=this._o,n=t.length,r=t.join(":");for(let o=0;o!==e.length;o++){let i=e[o],{argumentTypes:s}=i;if(s.length!==n)continue;if(s.map(l=>l.className).join(":")===r)return i}Ho(this.methodName,this.overloads,"specified argument types do not match any of:")}},methodName:{enumerable:!0,get(){return this._o[0].methodName}},holder:{enumerable:!0,get(){return this._o[0].holder}},type:{enumerable:!0,get(){return this._o[0].type}},handle:{enumerable:!0,get(){return Lt(this),this._o[0].handle}},implementation:{enumerable:!0,get(){return Lt(this),this._o[0].implementation},set(t){Lt(this),this._o[0].implementation=t}},returnType:{enumerable:!0,get(){return Lt(this),this._o[0].returnType}},argumentTypes:{enumerable:!0,get(){return Lt(this),this._o[0].argumentTypes}},canInvokeWith:{enumerable:!0,get(t){return Lt(this),this._o[0].canInvokeWith}},clone:{enumerable:!0,value(t){return Lt(this),this._o[0].clone(t)}},invoke:{value(t,e){let n=this._o,r=t.$h!==null;for(let o=0;o!==n.length;o++){let i=n[o];if(i.canInvokeWith(e)){if(i.type===ct&&!r){let s=this.methodName;if(s==="toString")return`<class: ${t.$n}>`;throw new Error(s+": cannot call instance method without an instance")}return i.apply(t,e)}}if(this.methodName==="toString")return`<class: ${t.$n}>`;Ho(this.methodName,this.overloads,"argument types do not match any of:")}}});function ea(t,e,n){return`${e.className} ${t}(${n.map(r=>r.className).join(", ")})`}function Lt(t){let e=t._o;e.length>1&&Ho(e[0].methodName,e,"has more than one overload, use .overload(<signature>) to choose from:")}function Ho(t,e,n){let o=e.slice().sort((i,s)=>i.argumentTypes.length-s.argumentTypes.length).map(i=>i.argumentTypes.length>0?".overload('"+i.argumentTypes.map(a=>a.className).join("', '")+"')":".overload()");throw new Error(`${t}(): ${n}
	${o.join(`
	`)}`)}function Ft(t,e,n,r,o,i,s,a){let l=o.type,c=i.map(h=>h.type);s===null&&(s=re.getEnv());let u,d;return n===ct?(u=s.vaMethod(l,c,a),d=s.nonvirtualVaMethod(l,c,a)):n===hn?(u=s.staticVaMethod(l,c,a),d=u):(u=s.constructor(c,a),d=u),Rh([t,e,n,r,o,i,u,d])}function Rh(t){let e=jh();return Object.setPrototypeOf(e,aa),e._p=t,e}function jh(){let t=function(){return t.invoke(this,arguments)};return t}aa=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return this._p[0]}},holder:{enumerable:!0,get(){return this._p[1]}},type:{enumerable:!0,get(){return this._p[2]}},handle:{enumerable:!0,get(){return this._p[3]}},implementation:{enumerable:!0,get(){let t=this._r;return t!==void 0?t:null},set(t){let e=this._p,n=e[1];if(e[2]===Go)throw new Error("Reimplementing $new is not possible; replace implementation of $init instead");let o=this._r;if(o!==void 0&&(n.$f._patchedMethods.delete(this),o._m.revert(re),this._r=void 0),t!==null){let[i,s,a,l,c,u]=e,d=ca(i,s,a,c,u,t,this),h=na(l);d._m=h,this._r=d,h.replace(d,a===ct,u,re,he),n.$f._patchedMethods.add(this)}}},returnType:{enumerable:!0,get(){return this._p[4]}},argumentTypes:{enumerable:!0,get(){return this._p[5]}},canInvokeWith:{enumerable:!0,value(t){let e=this._p[5];return t.length!==e.length?!1:e.every((n,r)=>n.isCompatible(t[r]))}},clone:{enumerable:!0,value(t){let e=this._p.slice(0,6);return Ft(...e,null,t)}},invoke:{value(t,e){let n=re.getEnv(),r=this._p,o=r[2],i=r[4],s=r[5],a=this._r,l=o===ct,c=e.length,u=2+c;n.pushLocalFrame(u);let d=null;try{let h;l?h=t.$getHandle():(d=t.$borrowClassHandle(n),h=d.value);let p,m=t.$t;a===void 0?p=r[3]:(p=a._m.resolveTarget(t,l,n,he),oa&&a._c.has(Kn())&&(m=ra));let f=[n.handle,h,p];for(let E=0;E!==c;E++)f.push(s[E].toJni(e[E],n));let g;m===Wn?g=r[6]:(g=r[7],l&&f.splice(2,0,t.$copyClassHandle(n)));let y=g.apply(null,f);return n.throwIfExceptionPending(),i.fromJni(y,n,!0)}finally{d!==null&&d.unref(n),n.popLocalFrame(NULL)}}},toString:{enumerable:!0,value(){return`function ${this.methodName}(${this.argumentTypes.map(t=>t.className).join(", ")}): ${this.returnType.className}`}}});function ca(t,e,n,r,o,i,s=null){let a=new Set,l=Fh([t,e,n,r,o,i,s,a]),c=new NativeCallback(l,r.type,["pointer","pointer"].concat(o.map(u=>u.type)));return c._c=a,c}function Fh(t){return function(){return Uh(arguments,t)}}function Uh(t,e){let n=new S(t[0],re),[r,o,i,s,a,l,c,u]=e,d=[],h;if(i===ct){let f=o.$C;h=new f(t[1],Wn,n,!1)}else h=o;let p=Kn();n.pushLocalFrame(3);let m=!0;re.link(p,n);try{u.add(p);let f;c===null||!Ut.has(p)?f=l:f=c;let g=[],y=t.length-2;for(let C=0;C!==y;C++){let U=a[C].fromJni(t[2+C],n,!1);g.push(U),d.push(U)}let E=f.apply(h,g);if(!s.isCompatible(E))throw new Error(`Implementation for ${r} expected return value compatible with ${s.className}`);let N=s.toJni(E,n);return s.type==="pointer"&&(N=n.popLocalFrame(N),m=!1,d.push(E)),N}catch(f){let g=f.$h;return g!==void 0?n.throw(g):Script.nextTick(()=>{throw f}),s.defaultValue}finally{re.unlink(p),m&&n.popLocalFrame(NULL),u.delete(p),d.forEach(f=>{if(f===null)return;let g=f.$dispose;g!==void 0&&g.call(f)})}}function Dh(t){let{holder:e,type:n}=t[0];t.some(o=>o.type===n&&o.argumentTypes.length===0)||t.push(Vh([e,n]))}function Vh(t){let e=$h();return Object.setPrototypeOf(e,la),e._p=t,e}function $h(){return function(){return this}}la=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return"valueOf"}},holder:{enumerable:!0,get(){return this._p[0]}},type:{enumerable:!0,get(){return this._p[1]}},handle:{enumerable:!0,get(){return NULL}},implementation:{enumerable:!0,get(){return null},set(t){}},returnType:{enumerable:!0,get(){let t=this.holder;return t.$f.use(t.$n)}},argumentTypes:{enumerable:!0,get(){return[]}},canInvokeWith:{enumerable:!0,value(t){return t.length===0}},clone:{enumerable:!0,value(t){throw new Error("Invalid operation")}}});function Gh(t,e,n,r,o){let i=e[2]==="s"?Vo:zo,s=ptr(e.substr(3)),{$f:a}=r,l,c=o.toReflectedField(n,s,i===Vo?1:0);try{l=o.vaMethod("pointer",[])(o.handle,c,o.javaLangReflectField().getGenericType),o.throwIfExceptionPending()}finally{o.deleteLocalRef(c)}let u;try{u=a._getType(o.getTypeName(l))}finally{o.deleteLocalRef(l)}let d,h,p=u.type;return i===Vo?(d=o.getStaticField(p),h=o.setStaticField(p)):(d=o.getField(p),h=o.setField(p)),zh([i,u,s,d,h])}function zh(t){return function(e){return new ua([e].concat(t))}}function ua(t){this._p=t}Object.defineProperties(ua.prototype,{value:{enumerable:!0,get(){let[t,e,n,r,o]=this._p,i=re.getEnv();i.pushLocalFrame(4);let s=null;try{let a;if(e===zo){if(a=t.$getHandle(),a===null)throw new Error("Cannot access an instance field without an instance")}else s=t.$borrowClassHandle(i),a=s.value;let l=o(i.handle,a,r);return i.throwIfExceptionPending(),n.fromJni(l,i,!0)}finally{s!==null&&s.unref(i),i.popLocalFrame(NULL)}},set(t){let[e,n,r,o,,i]=this._p,s=re.getEnv();s.pushLocalFrame(4);let a=null;try{let l;if(n===zo){if(l=e.$getHandle(),l===null)throw new Error("Cannot access an instance field without an instance")}else a=e.$borrowClassHandle(s),l=a.value;if(!r.isCompatible(t))throw new Error(`Expected value compatible with ${r.className}`);let c=r.toJni(t,s);i(s.handle,l,o,c),s.throwIfExceptionPending()}finally{a!==null&&a.unref(s),s.popLocalFrame(NULL)}}},holder:{enumerable:!0,get(){return this._p[0]}},fieldType:{enumerable:!0,get(){return this._p[1]}},fieldReturnType:{enumerable:!0,get(){return this._p[2]}},toString:{enumerable:!0,value(){let t=`Java.Field{holder: ${this.holder}, fieldType: ${this.fieldType}, fieldReturnType: ${this.fieldReturnType}, value: ${this.value}}`;return t.length<200?t:`Java.Field{
	holder: ${this.holder},
	fieldType: ${this.fieldType},
	fieldReturnType: ${this.fieldReturnType},
	value: ${this.value},
}`.split(`
`).map(n=>n.length>200?n.slice(0,n.indexOf(" ")+1)+"...,":n).join(`
`)}}});var qn=class t{static fromBuffer(e,n){let r=ta(n),o=r.getCanonicalPath().toString(),i=new File(o,"w");return i.write(e.buffer),i.close(),Bh(o,n),new t(o,r,n)}constructor(e,n,r){this.path=e,this.file=n,this._factory=r}load(){let{_factory:e}=this,{codeCacheDir:n}=e,r=e.use("dalvik.system.DexClassLoader"),o=e.use("java.io.File"),i=this.file;if(i===null&&(i=e.use("java.io.File").$new(this.path)),!i.exists())throw new Error("File not found");o.$new(n).mkdirs(),e.loader=r.$new(i.getCanonicalPath(),n,null,e.loader),re.preventDetachDueToClassLoader()}getClassNames(){let{_factory:e}=this,n=e.use("dalvik.system.DexFile"),r=ta(e),o=n.loadDex(this.path,r.getCanonicalPath(),0),i=[],s=o.entries();for(;s.hasMoreElements();)i.push(s.nextElement().toString());return i}};function ta(t){let{cacheDir:e,tempFileNaming:n}=t,r=t.use("java.io.File"),o=r.$new(e);return o.mkdirs(),r.createTempFile(n.prefix,n.suffix+".dex",o)}function Bh(t,e){e.use("java.io.File").$new(t).setWritable(!1,!1)}function Hh(){switch(Ie.state){case"empty":{Ie.state="pending";let t=Ie.factories[0],e=t.use("java.util.HashMap"),n=t.use("java.lang.Integer");Ie.loaders=e.$new(),Ie.Integer=n;let r=t.loader;return r!==null&&Jo(t,r),Ie.state="ready",Ie}case"pending":do Thread.sleep(.05);while(Ie.state==="pending");return Ie;case"ready":return Ie}}function Jo(t,e){let{factories:n,loaders:r,Integer:o}=Ie,i=o.$new(n.indexOf(t));r.put(e,i);for(let s=e.getParent();s!==null&&!r.containsKey(s);s=s.getParent())r.put(s,i)}function da(t){let e=Ut.get(t);e===void 0&&(e=0),e++,Ut.set(t,e)}function pa(t){let e=Ut.get(t);if(e===void 0)throw new Error(`Thread ${t} is not ignored`);e--,e===0?Ut.delete(t):Ut.set(t,e)}function Jh(t){return t.slice(t.lastIndexOf(".")+1)}function Zo(t,e){let n=[],r=t.getArrayLength(e);for(let o=0;o!==r;o++){let i=t.getObjectArrayElement(e,o);try{n.push(t.getTypeName(i))}finally{t.deleteLocalRef(i)}}return n}function Zh(t){let e=t.split(".");return e[e.length-1]+".java"}var Wh=4,ha=Process.pointerSize,Ko=class{ACC_PUBLIC=1;ACC_PRIVATE=2;ACC_PROTECTED=4;ACC_STATIC=8;ACC_FINAL=16;ACC_SYNCHRONIZED=32;ACC_BRIDGE=64;ACC_VARARGS=128;ACC_NATIVE=256;ACC_ABSTRACT=1024;ACC_STRICT=2048;ACC_SYNTHETIC=4096;constructor(){this.classFactory=null,this.ClassFactory=ft,this.vm=null,this.api=null,this._initialized=!1,this._apiError=null,this._wakeupHandler=null,this._pollListener=null,this._pendingMainOps=[],this._pendingVmOps=[],this._cachedIsAppProcess=null;try{this._tryInitialize()}catch{}}_tryInitialize(){if(this._initialized)return!0;if(this._apiError!==null)throw this._apiError;let e;try{e=cn(),this.api=e}catch(r){throw this._apiError=r,r}if(e===null)return!1;let n=new Xe(e);return this.vm=n,Ws(n),ft._initialize(n,e),this.classFactory=new ft,this._initialized=!0,!0}_dispose(){if(this.api===null)return;let{vm:e}=this;e.perform(n=>{ft._disposeAll(n),S.dispose(n)}),Script.nextTick(()=>{Xe.dispose(e)})}get available(){return this._tryInitialize()}get androidVersion(){return an()}synchronized(e,n){let{$h:r=e}=e;if(!(r instanceof NativePointer))throw new Error("Java.synchronized: the first argument `obj` must be either a pointer or a Java instance");let o=this.vm.getEnv();ke("VM::MonitorEnter",o.monitorEnter(r));try{n()}finally{o.monitorExit(r)}}enumerateLoadedClasses(e){this._checkAvailable();let{flavor:n}=this.api;n==="jvm"?this._enumerateLoadedClassesJvm(e):n==="art"?this._enumerateLoadedClassesArt(e):this._enumerateLoadedClassesDalvik(e)}enumerateLoadedClassesSync(){let e=[];return this.enumerateLoadedClasses({onMatch(n){e.push(n)},onComplete(){}}),e}enumerateClassLoaders(e){this._checkAvailable();let{flavor:n}=this.api;if(n==="jvm")this._enumerateClassLoadersJvm(e);else if(n==="art")this._enumerateClassLoadersArt(e);else throw new Error("Enumerating class loaders is not supported on Dalvik")}enumerateClassLoadersSync(){let e=[];return this.enumerateClassLoaders({onMatch(n){e.push(n)},onComplete(){}}),e}_enumerateLoadedClassesJvm(e){let{api:n,vm:r}=this,{jvmti:o}=n,i=r.getEnv(),s=Memory.alloc(Wh),a=Memory.alloc(ha);o.getLoadedClasses(s,a);let l=s.readS32(),c=a.readPointer(),u=[];for(let d=0;d!==l;d++)u.push(c.add(d*ha).readPointer());o.deallocate(c);try{for(let d of u){let h=i.getClassName(d);e.onMatch(h,d)}e.onComplete()}finally{u.forEach(d=>{i.deleteLocalRef(d)})}}_enumerateClassLoadersJvm(e){this.choose("java.lang.ClassLoader",e)}_enumerateLoadedClassesArt(e){let{vm:n,api:r}=this,o=n.getEnv(),i=r["art::JavaVMExt::AddGlobalRef"],{vm:s}=r;ze(n,o,a=>{let l=uo(c=>{let u=i(s,a,c);try{let d=o.getClassName(u);e.onMatch(d,u)}finally{o.deleteGlobalRef(u)}return!0});r["art::ClassLinker::VisitClasses"](r.artClassLinker.address,l)}),e.onComplete()}_enumerateClassLoadersArt(e){let{classFactory:n,vm:r,api:o}=this,i=r.getEnv(),s=o["art::ClassLinker::VisitClassLoaders"];if(s===void 0)throw new Error("This API is only available on Android >= 7.0");let a=n.use("java.lang.ClassLoader"),l=[],c=o["art::JavaVMExt::AddGlobalRef"],{vm:u}=o;ze(r,i,d=>{let h=po(p=>(l.push(c(u,d,p)),!0));co(()=>{s(o.artClassLinker.address,h)})});try{l.forEach(d=>{let h=n.cast(d,a);e.onMatch(h)})}finally{l.forEach(d=>{i.deleteGlobalRef(d)})}e.onComplete()}_enumerateLoadedClassesDalvik(e){let{api:n}=this,r=ptr("0xcbcacccd"),o=172,i=8,a=n.gDvm.add(o).readPointer(),l=a.readS32(),u=a.add(12).readPointer(),d=l*i;for(let h=0;h<d;h+=i){let m=u.add(h).add(4).readPointer();if(m.isNull()||m.equals(r))continue;let g=m.add(24).readPointer().readUtf8String();if(g.startsWith("L")){let y=g.substring(1,g.length-1).replace(/\//g,".");e.onMatch(y)}}e.onComplete()}enumerateMethods(e){let{classFactory:n}=this,r=this.vm.getEnv(),o=n.use("java.lang.ClassLoader");return Et.enumerateMethods(e,this.api,r).map(i=>{let s=i.loader;return i.loader=s!==null?n.wrap(s,o,r):null,i})}scheduleOnMainThread(e){this.performNow(()=>{this._pendingMainOps.push(e);let{_wakeupHandler:n}=this;if(n===null){let{classFactory:r}=this,o=r.use("android.os.Handler"),i=r.use("android.os.Looper");n=o.$new(i.getMainLooper()),this._wakeupHandler=n}this._pollListener===null&&(this._pollListener=Interceptor.attach(Process.getModuleByName("libc.so").getExportByName("epoll_wait"),this._makePollHook()),Interceptor.flush()),n.sendEmptyMessage(1)})}_makePollHook(){let e=Process.id,{_pendingMainOps:n}=this;return function(){if(this.threadId!==e)return;let r;for(;(r=n.shift())!==void 0;)try{r()}catch(o){Script.nextTick(()=>{throw o})}}}perform(e){if(this._checkAvailable(),!this._isAppProcess()||this.classFactory.loader!==null)try{this.vm.perform(e)}catch(n){Script.nextTick(()=>{throw n})}else this._pendingVmOps.push(e),this._pendingVmOps.length===1&&this._performPendingVmOpsWhenReady()}performNow(e){return this._checkAvailable(),this.vm.perform(()=>{let{classFactory:n}=this;if(this._isAppProcess()&&n.loader===null){let o=n.use("android.app.ActivityThread").currentApplication();o!==null&&fa(n,o)}return e()})}_performPendingVmOpsWhenReady(){this.vm.perform(()=>{let{classFactory:e}=this,n=e.use("android.app.ActivityThread"),r=n.currentApplication();if(r!==null){fa(e,r),this._performPendingVmOps();return}let o=this,i=!1,s="early",a=n.handleBindApplication;a.implementation=function(u){if(u.instrumentationName.value!==null){s="late";let h=e.use("android.app.LoadedApk").makeApplication;h.implementation=function(p,m){return i||(i=!0,ma(e,this),o._performPendingVmOps()),h.apply(this,arguments)}}a.apply(this,arguments)};let c=n.getPackageInfo.overloads.map(u=>[u.argumentTypes.length,u]).sort(([u],[d])=>d-u).map(([u,d])=>d)[0];c.implementation=function(...u){let d=c.call(this,...u);return!i&&s==="early"&&(i=!0,ma(e,d),o._performPendingVmOps()),d}})}_performPendingVmOps(){let{vm:e,_pendingVmOps:n}=this,r;for(;(r=n.shift())!==void 0;)try{e.perform(r)}catch(o){Script.nextTick(()=>{throw o})}}use(e,n){return this.classFactory.use(e,n)}openClassFile(e){return this.classFactory.openClassFile(e)}choose(e,n){this.classFactory.choose(e,n)}retain(e){return this.classFactory.retain(e)}cast(e,n){return this.classFactory.cast(e,n)}array(e,n){return this.classFactory.array(e,n)}backtrace(e){return ho(this.vm,e)}isMainThread(){let e=this.classFactory.use("android.os.Looper"),n=e.getMainLooper(),r=e.myLooper();return r===null?!1:n.$isSameObject(r)}registerClass(e){return this.classFactory.registerClass(e)}deoptimizeEverything(){let{vm:e}=this;return _o(e,e.getEnv())}deoptimizeBootImage(){let{vm:e}=this;return yo(e,e.getEnv())}deoptimizeMethod(e){let{vm:n}=this;return go(n,n.getEnv(),e)}_checkAvailable(){if(!this.available)throw new Error("Java API not available")}_isAppProcess(){let e=this._cachedIsAppProcess;if(e===null){if(this.api.flavor==="jvm")return e=!1,this._cachedIsAppProcess=e,e;let n=new NativeFunction(Module.getGlobalExportByName("readlink"),"pointer",["pointer","pointer","pointer"],{exceptions:"propagate"}),r=Memory.allocUtf8String("/proc/self/exe"),o=1024,i=Memory.alloc(o),s=n(r,i,ptr(o)).toInt32();if(s!==-1){let a=i.readUtf8String(s);e=/^\/system\/bin\/app_process/.test(a)}else e=!0;this._cachedIsAppProcess=e}return e}};function fa(t,e){let n=t.use("android.os.Process");t.loader=e.getClassLoader(),n.myUid()===n.SYSTEM_UID.value?(t.cacheDir="/data/system",t.codeCacheDir="/data/dalvik-cache"):"getCodeCacheDir"in e?(t.cacheDir=e.getCacheDir().getCanonicalPath(),t.codeCacheDir=e.getCodeCacheDir().getCanonicalPath()):(t.cacheDir=e.getFilesDir().getCanonicalPath(),t.codeCacheDir=e.getCacheDir().getCanonicalPath())}function ma(t,e){let n=t.use("java.io.File");t.loader=e.getClassLoader();let r=n.$new(e.getDataDir()).getCanonicalPath();t.cacheDir=r,t.codeCacheDir=r+"/cache"}var Yo=new Ko;Script.bindWeak(Yo,()=>{Yo._dispose()});var _=Yo;var b={Activity:_.use("android.app.Activity"),ActivityThread:_.use("android.app.ActivityThread"),AlertDialog_Builder:_.use("android.app.AlertDialog$Builder"),ArrayAdapter:_.use("android.widget.ArrayAdapter"),ArrayList:_.use("java.util.ArrayList"),Arrays:_.use("java.util.Arrays"),Base64:_.use("android.util.Base64"),BitmapFactory:_.use("android.graphics.BitmapFactory"),Build_VERSION:_.use("android.os.Build$VERSION"),Button:_.use("android.widget.Button"),Color:_.use("android.graphics.Color"),CompoundButton_OnCheckedChangeListener:_.use("android.widget.CompoundButton$OnCheckedChangeListener"),Configuration:_.use("android.content.res.Configuration"),DialogInterfaceOnClickListener:_.use("android.content.DialogInterface$OnClickListener"),EditText:_.use("android.widget.EditText"),FrameLayout:_.use("android.widget.FrameLayout"),GradientDrawable:_.use("android.graphics.drawable.GradientDrawable"),Gravity:_.use("android.view.Gravity"),HTML:_.use("android.text.Html"),ImageView:_.use("android.widget.ImageView"),InputType:_.use("android.text.InputType"),Intent:_.use("android.content.Intent"),JavaString:_.use("java.lang.String"),LinearLayout:_.use("android.widget.LinearLayout"),LinearLayout_Params:_.use("android.widget.LinearLayout$LayoutParams"),Mode:_.use("android.graphics.PorterDuff$Mode"),MotionEvent:_.use("android.view.MotionEvent"),OnClickListener:_.use("android.view.View$OnClickListener"),OnItemSelectedListener:_.use("android.widget.AdapterView$OnItemSelectedListener"),OnLongClickListener:_.use("android.view.View$OnLongClickListener"),OnSeekBarChangeListener:_.use("android.widget.SeekBar$OnSeekBarChangeListener"),OnTouchListener:_.use("android.view.View$OnTouchListener"),R_Attr:_.use("android.R$attr"),R_Layout:_.use("android.R$layout"),RadioButton:_.use("android.widget.RadioButton"),RadioGroup:_.use("android.widget.RadioGroup"),RelativeLayout:_.use("android.widget.RelativeLayout"),RelativeLayout_Params:_.use("android.widget.RelativeLayout$LayoutParams"),ScaleType:_.use("android.widget.ImageView$ScaleType"),ScrollView:_.use("android.widget.ScrollView"),SeekBar:_.use("android.widget.SeekBar"),Settings:_.use("android.provider.Settings"),Spinner:_.use("android.widget.Spinner"),Switch:_.use("android.widget.Switch"),TextUtils:_.use("android.text.TextUtils"),TextView:_.use("android.widget.TextView"),Toast:_.use("android.widget.Toast"),TruncateAt:_.use("android.text.TextUtils$TruncateAt"),TypedValue:_.use("android.util.TypedValue"),Typeface:_.use("android.graphics.Typeface"),Uri:_.use("android.net.Uri"),View:_.use("android.view.View"),ViewGroup:_.use("android.view.ViewGroup$LayoutParams"),ViewManager:_.use("android.view.ViewManager"),WebView:_.use("android.webkit.WebView"),WindowManager_Params:_.use("android.view.WindowManager$LayoutParams")},Qo=b.MotionEvent.ACTION_DOWN.value,Xo=b.MotionEvent.ACTION_MOVE.value,ei=b.MotionEvent.ACTION_UP.value,ga=b.RelativeLayout.ALIGN_PARENT_LEFT.value,Dt=b.RelativeLayout.ALIGN_PARENT_RIGHT.value,ge=b.Gravity.CENTER.value,_a=b.RelativeLayout.CENTER_HORIZONTAL.value,ti=b.TypedValue.COMPLEX_UNIT_DIP.value,Ze=b.View.GONE.value,mt=b.ViewGroup.MATCH_PARENT.value,ni=b.Configuration.ORIENTATION_LANDSCAPE.value,Yn=b.R_Layout.simple_spinner_dropdown_item.value,gt=b.Color.TRANSPARENT.value,ut=b.LinearLayout.VERTICAL.value,ri=b.LinearLayout.HORIZONTAL.value,Oe=b.View.VISIBLE.value,oi=b.Activity.WINDOW_SERVICE.value,_e=b.ViewGroup.WRAP_CONTENT.value;function At(t,...e){return t.replace(/\{\s*([^}\s]+)\s*\}/g,function(n,r,o,i){return e[r]})}function je(t){let e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let r=0;r<t;r++)e+=n.charAt(Math.floor(Math.random()*t));return e}async function ii(t=50){return new Promise(e=>setTimeout(e,t))}var J={get instance(){return b.ActivityThread.currentApplication()},get packageManager(){return this.instance.getPackageManager()},get packageName(){return this.instance.getPackageName()},get context(){return this.instance.getApplicationContext()},get orientation(){return this.instance.getResources().getConfiguration().orientation.value},get windowManager(){return _.cast(J.context.getSystemService(oi),b.ViewManager)}},fn=new Promise((t,e)=>{_.choose(b.Activity.$className,{onMatch:n=>{if(n.getComponentName().getClassName()==Qn)return t(_.retain(n)),"stop"},onComplete(){}})}),qh=_.androidVersion,mn=b.Build_VERSION.SDK_INT.value,Qn=J.packageManager.getLaunchIntentForPackage(J.packageName).resolveActivityInfo(J.packageManager,0).name.value;function Vt(t){return b.TypedValue.applyDimension(ti,t,J.context.getResources().getDisplayMetrics())}function ya(t){let e=b.Base64.decode(t,0);return b.BitmapFactory.decodeByteArray(e,0,e.length)}function _t(t){return typeof t=="number"?t:b.Color.parseColor(`${t}`)}function si(t){return`#${(t>>>0).toString(16).toUpperCase().padStart(8,"0")}`}var se=class t{instance;constructor(e){e&&(this.instance=_.cast(e,b.View))}get alpha(){return this.instance.getAlpha()}get background(){return this.instance.getBackground()}get layoutParams(){return this.instance.getLayoutParams()}get orientation(){return this.instance.getOrientation()}get padding(){return[this.instance.getPaddingLeft(),this.instance.getPaddingTop(),this.instance.getPaddingRight(),this.instance.getPaddingBottom()]}get text(){return _.cast(this.instance,b.TextView).getText().toString()}get textColor(){return this.instance.getTextColors()}get visibility(){return this.instance.getVisibility()}set alpha(e){this.instance.setAlpha(e)}set background(e){this.instance.setBackground(e instanceof t?e.instance:e)}set backgroundColor(e){this.instance.setBackgroundColor(_t(e))}set layoutParams(e){this.instance.setLayoutParams(e)}set orientation(e){this.instance.setOrientation(e)}set padding(e){this.instance.setPadding(...e)}set text(e){_.cast(this.instance,b.TextView).setText(Ke(e))}set textColor(e){_.cast(this.instance,b.TextView).setTextColor(_t(e))}set visibility(e){this.instance.setVisibility(e)}set onClickListener(e){_.perform(()=>{this.instance.setOnClickListener(_.registerClass({name:je(35),implements:[b.OnClickListener],methods:{onClick:()=>e.call(this)}}).$new())})}set onLongClickListener(e){_.perform(()=>{this.instance.setOnLongClickListener(_.registerClass({name:je(35),implements:[b.OnLongClickListener],methods:{onLongClick:n=>(e.call(this),!0),onLongClickUseDefaultHapticFeedback(n){return!1}}}).$new())})}set onTouchListener(e){_.perform(()=>{this.instance.setOnTouchListener(_.registerClass({name:je(35),implements:[b.OnTouchListener],methods:{onTouch:e}}).$new())})}destroy(){ii().then(()=>this.instance.$dispose())}};function Ke(t){return b.HTML.fromHtml(b.JavaString.$new(String(t)))}function $e(t,e){_.scheduleOnMainThread(()=>b.Toast.makeText(J.context,Ke(t),e).show())}var ai={name:"android.settings.action.MANAGE_OVERLAY_PERMISSION",ask(){$e(q.strings.noOverlayPermission,1);let t=b.Intent.$new(b.JavaString.$new(this.name));t.setFlags(b.Intent.FLAG_ACTIVITY_NEW_TASK.value),t.setData(b.Uri.parse("package:"+J.packageName)),J.context.startActivity(t)},check(){return!!b.Settings.canDrawOverlays(J.context)}};function li(t,e){let n=b.Activity[t];e?n.implementation=function(r){this.getComponentName().getClassName()==Qn&&e?.(this),r?n.call(this,r):n.call(this)}:n.implementation=null}function ci(t){li("onPause",t)}function ui(t){li("onResume",t)}function di(t){li("onDestroy",t)}var gn=class{instance;constructor(){this.instance=J.context.getSharedPreferences(J.packageName+"_menuprefs",J.context.MODE_PRIVATE.value)}getString(e){return this.instance.getString(b.JavaString.$new(e),b.JavaString.$new(""))}putString(e,n){this.instance.edit().putString(b.JavaString.$new(e),b.JavaString.$new(n)).apply()}getInt(e){return this.instance.getInt(b.JavaString.$new(e),-1)}putInt(e,n){this.instance.edit().putInt(b.JavaString.$new(e),n).apply()}getFloat(e){return this.instance.getFloat(b.JavaString.$new(e),-1)}putFloat(e,n){this.instance.edit().putFloat(b.JavaString.$new(e),n).apply()}getLong(e){return this.instance.getLong(b.JavaString.$new(e),-1)}putLong(e,n){this.instance.edit().putLong(b.JavaString.$new(e),n).apply()}getBool(e){return this.instance.getBoolean(b.JavaString.$new(e),!1)}putBool(e,n){this.instance.edit().putBoolean(b.JavaString.$new(e),n).apply()}getAll(){return this.instance.getAll()}contains(e){return!!this.instance.contains(e)}clear(){this.instance.edit().clear().apply()}};var _n=class{initialPosition;touchPosition;constructor(e){this.initialPosition={x:0,y:0},this.touchPosition={x:0,y:0},e.onTouchListener=(n,r)=>this.callback(n,r)}callback(e,n){switch(n.getAction()){case Qo:return this.initialPosition.x=Math.floor(X.layout.params.x.value),this.initialPosition.y=Math.floor(X.layout.params.y.value),this.touchPosition.x=Math.floor(n.getRawX()),this.touchPosition.y=Math.floor(n.getRawY()),!0;case ei:X.layout.me.alpha=1,X.$icon.alpha=X.$icon.instance.$className==b.ImageView.$className?255:1;let[r,o]=[Math.floor(n.getRawX()-this.touchPosition.x),Math.floor(n.getRawX()-this.touchPosition.y)];return X.$icon.visibility==Oe&&(J.orientation==ni?(X.$icon.visibility=Ze,X.layout.me.visibility=Oe):r<10&&o<10&&(X.$icon.visibility=Ze,X.layout.me.visibility=Oe)),!0;case Xo:return X.layout.me.alpha=.5,X.$icon.alpha=X.$icon.instance.$className==b.ImageView.$className?Math.round(q.icon.alpha/2):.5,X.layout.params.x.value=this.initialPosition.x+Math.floor(n.getRawX()-this.touchPosition.x),X.layout.params.y.value=this.initialPosition.y+Math.floor(n.getRawY()-this.touchPosition.y),_.scheduleOnMainThread(()=>{J.windowManager.updateViewLayout(X.rootFrame.instance,X.layout.params)}),!0;default:return!1}}};var ae=class extends se{static LinearLayoutParams=(e,n)=>b.LinearLayout_Params.$new(e,n);static RelativeLayoutParams=(e,n)=>b.RelativeLayout_Params.$new(e,n);constructor(e){super(),this.instance=e.$new(J.context)}get childCount(){return this.instance.getChildCount()}set gravity(e){this.instance.setGravity(e)}set verticalGravity(e){this.instance.setVerticalGravity(e)}child(e){return this.instance.getChildAt(e)}};var yn=class extends se{constructor(e,n){super(),this.instance=e=="Normal"?b.ImageView.$new(J.context):b.WebView.$new(J.context),n&&(this.image=n)}set imageForImageView(e){this.backgroundColor=gt,this.instance.setScaleType(b.ScaleType.FIT_XY.value),this.instance.setImageBitmap(ya(e)),q.icon.alpha=Math.round(q.icon.alpha*255)}set imageForWebView(e){this.instance.loadData(`<html><head></head><body style="margin: 0; padding: 0"><img src="${e}" width="${q.icon.size}" height="${q.icon.size}" ></body></html>`,"text/html","utf-8"),this.backgroundColor=gt,this.instance.getSettings().setAppCacheEnabled(!0)}set image(e){let n=this.instance.$className==b.ImageView.$className,r=Math.floor(Vt(q.icon.size));n?this.imageForImageView=e:this.imageForWebView=e,this.alpha=q.icon.alpha,this.layoutParams=ae.LinearLayoutParams(_e,_e),this.instance.getLayoutParams().height.value=r,this.instance.getLayoutParams().width.value=r}};var We=class extends se{constructor(e){super(),this.instance=b.TextView.$new(J.context),e&&(this.text=e)}get ellipsize(){return this.instance.getEllipsize()}get gravity(){return this.instance.getGravity()}get marqueeRepeatLimit(){return this.instance.getMarqueeRepeatLimit()}get textSize(){return this.instance.getTextSize()}get typeface(){return this.instance.getTypeface()}set ellipsize(e){this.instance.setEllipsize(e)}set gravity(e){this.instance.setGravity(e)}set marqueeRepeatLimit(e){this.instance.setMarqueeRepeatLimit(e)}set selected(e){this.instance.setSelected(e)}set singleLine(e){this.instance.setSingleLine(e)}set textSize(e){this.instance.setTextSize(e)}set typeface(e){this.instance.setTypeface(e)}};function pi(t){return new We(t)}var bn=class extends ae{settings;state;triggered;constructor(e,n=!1){super(b.LinearLayout);let r=ae.RelativeLayoutParams(_e,_e);r.addRule(Dt),this.settings=new We(e),this.settings.textColor=q.color.primaryText,this.settings.typeface=b.Typeface.DEFAULT_BOLD.value,this.settings.textSize=20,this.settings.layoutParams=r,this.settings.onClickListener=()=>this.handleState(),this.state=n,this.triggered=!1,this.state&&this.swapViews(this,X.layout.layout)}swapViews(e,n){let r=X.layout.proxy;Nt(n,r),H(e,r)}handleState(){this.visibility==Oe&&(this.triggered=!0),this.triggered&&(this.state=!this.state),this.state?this.swapViews(this,X.layout.layout):this.triggered&&this.swapViews(X.layout.layout,this)}};var X,q;function hi(t){q=t}var Ce=new gn,vn=class{rootFrame;$icon;layout;constructor(e,n,r){X=this,ai.check()||(ai.ask(),setTimeout(async()=>(await fn).finish(),3e3)),this.rootFrame=new ae(b.FrameLayout),this.layout=r,this.layout.title.text=e,this.layout.subtitle.text=n,this.layout.ensureInitialized(),this.layout.handleAdd(H),H(this.layout.me,this.rootFrame),di(()=>this.destroy),ci(()=>this.hide()),ui(()=>this.show())}icon(e,n="Normal"){_.scheduleOnMainThread(()=>{this.$icon=new yn(n,e),this.$icon.onClickListener=()=>{this.$icon.visibility=Ze,this.layout.me.visibility=Oe},this.$icon.visibility=Oe,this.layout.initializeIcon(),new _n(this.rootFrame),new _n(this.$icon),H(this.$icon,this.rootFrame)})}settings(e,n=!1){let r=new bn(e,n);return r.orientation=ut,H(r.settings,this.layout.titleLayout),r}hide(){_.scheduleOnMainThread(()=>{try{this.rootFrame.visibility=Ze,Nt(this.rootFrame,J.windowManager)}catch{globalThis.console.warn("Menu already destroyed, ignoring `destroy` call")}})}destroy(){ci(),ui(),di(),this.hide(),Nt(this.layout.me,this.rootFrame),this.layout.handleRemove(Nt),X=void 0}show(){_.scheduleOnMainThread(()=>{try{J.windowManager.addView(this.rootFrame.instance,this.layout.params),this.rootFrame.visibility=Oe}catch{globalThis.console.warn("Menu already showed, ignoring `show` call")}})}};function Xn(t){return t instanceof se?t.instance:t}function H(t,e=X.layout.layout){_.scheduleOnMainThread(()=>{Xn(e).addView(Xn(t))})}function Nt(t,e=X.layout.layout){_.scheduleOnMainThread(()=>{Xn(e).removeView(Xn(t))})}async function fi(t){return new Promise((e,n)=>{let r=setInterval(()=>{try{_.perform(()=>{J.instance&&(clearInterval(r),_.scheduleOnMainThread(()=>t()),e())})}catch{}},10)})}var Sn=class extends se{constructor(e){super(),this.instance=b.Button.$new(J.context),e&&(this.text=e)}get allCaps(){return!!this.instance.isAllCaps()}set allCaps(e){this.instance.setAllCaps(e)}};function mi(t,e,n){let r=new Sn(t);return e&&(r.onClickListener=e),n&&(r.onLongClickListener=n),r}function gi(t,e){let n=J.context.getResources(),r=b.TypedValue.$new(),o=J.context.getTheme(),i=n.getIdentifier(t,e,"android");return o.resolveAttribute(i,r,!0)?n.getColor(r.resourceId.value,o):i.value}function _i(t="#000000"){let e=gi("colorAccent","attr")||gi("colorControlActivated","attr")||_t(t);return si(e)}var er=class extends se{constructor(e,n,r){super(),this.instance=b.AlertDialog_Builder.$new(e),n&&(this.title=n),r&&(this.message=r)}set title(e){this.instance.setTitle(Ke(e))}set message(e){this.instance.setMessage(Ke(e))}set view(e){this.instance.setView(e)}setPositiveButton(e){_.perform(()=>{this.instance.setPositiveButton(Ke(e.label),_.registerClass({name:je(35),implements:[b.DialogInterfaceOnClickListener],methods:{getName:function(){return"OnClickListenerPositive"},onClick:(n,r)=>{e.fn.call(this)}}}).$new())})}setNegativeButton(e){_.perform(()=>{this.instance.setNegativeButton(Ke(e.label),_.registerClass({name:je(35),implements:[b.DialogInterfaceOnClickListener],methods:{getName:function(){return"OnClickListenerNegative"},onClick:()=>e.fn.call(this)}}).$new())})}create(){return this.instance.create()}show(e){let n=e??this.create();n.getWindow().setType(mn>=26?b.WindowManager_Params.TYPE_APPLICATION_OVERLAY.value:b.WindowManager_Params.TYPE_PHONE.value),n.show()}};async function yi(t,e,n,r,o){let i=new er(await fn,t,e);return o&&(o instanceof se?i.view=o.instance:i.view=o),n&&i.setPositiveButton(n),r&&i.setNegativeButton(r),i}var tr=class extends se{buttons;constructor(e){super(),this.instance=b.RadioGroup.$new(J.context),this.buttons=e}check(e){this.instance.check(e)}getChildAt(e){return this.instance.getChildAt(e)}};function bi(t,e){return t.map((n,r)=>{let o=new se(b.RadioButton.$new(J.context));return o.text=n,o.onClickListener=()=>{Ce.putInt(t.join(),r),e?.call(o,r)},o})}function vi(t){let e=new tr(t.map(r=>r.text));for(let r of t)e.instance.addView(r.instance,t.indexOf(r),ae.LinearLayoutParams(_e,_e));let n=Ce.getInt(t.join());return n>-1&&_.scheduleOnMainThread(()=>e.check(e.getChildAt(n).getId())),e}var nr=class extends se{constructor(e=0){super(),this.instance=b.SeekBar.$new(J.context),this.progress=e}get max(){return this.instance.getMax()}get min(){return this.instance.getMin()}get progress(){return this.instance.getProgress()}set max(e){this.instance.setMax(e)}set min(e){try{this.progress<e&&(this.progress=e,this.instance.setMin(e))}catch{throw Error("App running on android lower than 8; set min value failed")}}set onSeekBarChangeListener(e){_.perform(()=>{this.instance.setOnSeekBarChangeListener(_.registerClass({name:je(35),implements:[b.OnSeekBarChangeListener],methods:{onStartTrackingTouch:function(n){},onStopTrackingTouch:function(n){},onProgressChanged:(n,r)=>{n.setProgress(r),e.call(this,r)}}}).$new())})}set progress(e){this.instance.setProgress(e)}};function Si(t,e,n,r){let o=new nr(Ce.getInt(t));return o.max=e,n?o.min=n:o.min=0,r&&(o.onSeekBarChangeListener=r),o}var rr=class extends se{items;initialized;constructor(e){super(),this.instance=b.Spinner.$new(J.context),this.items=b.ArrayList.$new(b.Arrays.asList(_.array("java.lang.String",e))),this.initialized=!1;let n=b.ArrayAdapter.$new(J.context,Yn,this.items);n.setDropDownViewResource(Yn),this.adapter=n}get adapter(){return this.instance.getAdapter()}get selection(){return this.items.indexOf(this.instance.getSelectedView())}set adapter(e){this.instance.setAdapter(e)}set onItemSelectedListener(e){_.perform(()=>{this.instance.setOnItemSelectedListener(_.registerClass({name:je(35),implements:[b.OnItemSelectedListener],methods:{onItemSelected:(n,r,o,i)=>{if(!this.initialized){this.initialized=!0;return}Ce.putInt(b.JavaString.join(b.JavaString.$new(", "),this.items),o),new se(n.getChildAt(0)).textColor=q.color.secondaryText,e.call(this,o)},onNothingSelected:function(n){}}}).$new())})}set selection(e){this.instance.setSelection(e)}};function Ei(t,e){let n=new rr(t);e&&(n.onItemSelectedListener=e);let r=Ce.getInt(t.join());return r>-1&&_.scheduleOnMainThread(()=>n.selection=r),n}var or=class extends se{constructor(e,n=!1){super(),this.instance=b.Switch.$new(J.context),e&&(this.text=e),this.checked=n}set checked(e){this.instance.setChecked(e)}set onCheckedChangeListener(e){_.perform(()=>{this.instance.setOnCheckedChangeListener(_.registerClass({name:je(35),implements:[b.CompoundButton_OnCheckedChangeListener],methods:{onCheckedChanged:(n,r)=>{Ce.putBool(this.text,r),e.call(this,r)}}}).$new())})}};function wi(t,e){let n=new or(t);e&&(n.onCheckedChangeListener=e);let r=Ce.getBool(t);return r&&_.scheduleOnMainThread(()=>n.checked=r),n}var $t=class{params;me;proxy;layout;titleLayout;title;subtitle;buttonLayout;hide;close;constructor(e){hi(e)}initializeParams(){this.params=b.WindowManager_Params.$new(_e,_e,mn>=26?b.WindowManager_Params.TYPE_APPLICATION_OVERLAY.value:b.WindowManager_Params.TYPE_PHONE.value,8,-3)}initializeProxy(){this.proxy=new ae(b.ScrollView)}async inputNumber(e,n,r,o){let i=b.EditText.$new(J.context);return n>0&&i.setHint(b.JavaString.$new(`Max value: ${n}`)),i.setInputType(b.InputType.TYPE_CLASS_NUMBER.value),await this.dialog(e,"",{label:r?.label,fn:function(){let s=parseFloat(_.cast(i,b.TextView).getText().toString());Number.isNaN(s)?r?.fn.call(this,NaN):r?.fn.call(this,s<=n?s:n)}},o,i)}async inputText(e,n,r,o){let i=b.EditText.$new(J.context);return o&&i.setHint(Ke(o)),await this.dialog(e,"",{label:n.label,fn:function(){let s=_.cast(i,b.TextView).getText().toString();n?.fn.call(this,s)}},r,i)}};var ir=class extends se{constructor(){super(),this.instance=b.GradientDrawable.$new()}set color(e){this.instance.setColor(_t(e))}set cornerRadius(e){this.instance.setCornerRadius(e)}};var ba={color:{primaryText:"#78281F",secondaryText:"#5B2C6F",buttonBg:"#1D1D1D",layoutBg:"#111111",collapseBg:"#3B3B3B",categoryBg:"#296368",tabUnfocusedBg:"#3E3E3E",tabFocusedBg:"#454545",hideFg:"#1E75A4",closeFg:"#970000",menu:"#000000"},menu:{width:300,height:200,x:100,y:100,cornerRadius:45},icon:{size:35,alpha:.6},strings:{noOverlayPermission:"Overlay permission is needed to show the menu",hide:"<b>_</b>",close:"\u2716",hideCallback:"Icon hidden",killCallback:"Menu killed"}},En=class extends $t{buttonProxyLayout;constructor(e){super(e??ba);let n=ae.RelativeLayoutParams(_e,_e);n.addRule(b.RelativeLayout.CENTER_IN_PARENT.value),this.title=new We,this.title.textColor=q.color.primaryText,this.title.textSize=18,this.title.gravity=ge,this.title.layoutParams=n,this.subtitle=new We,this.subtitle.ellipsize=b.TruncateAt.MARQUEE.value,this.subtitle.marqueeRepeatLimit=-1,this.subtitle.singleLine=!0,this.subtitle.selected=!0,this.subtitle.textColor=q.color.primaryText,this.subtitle.textSize=10,this.subtitle.gravity=ge,this.subtitle.padding=[0,0,0,5]}roundedDrawable(){let e=new ir;return e.cornerRadius=q.menu.cornerRadius,e}initializeParams(){super.initializeParams(),this.params.gravity.value=51,this.params.x.value=q.menu.x,this.params.y.value=q.menu.y}initializeLayout(){let e=this.roundedDrawable();e.color=q.color.menu,this.me=new ae(b.LinearLayout),this.me.visibility=Ze,this.me.background=e,this.me.orientation=ut,this.me.layoutParams=ae.LinearLayoutParams(Math.floor(Vt(q.menu.width)),_e)}initializeIcon(){}initializeProxy(){super.initializeProxy();let e=this.roundedDrawable();e.color=q.color.layoutBg,this.proxy.layoutParams=ae.LinearLayoutParams(mt,Math.floor(Vt(q.menu.height))),this.proxy.background=e}initializeMainLayout(){this.layout=new ae(b.LinearLayout),this.layout.orientation=ut}initializeButtons(){let e=ae.RelativeLayoutParams(_e,_e);e.addRule(Dt),this.buttonProxyLayout=new ae(b.LinearLayout),this.buttonProxyLayout.orientation=ri,this.buttonProxyLayout.layoutParams=e,this.buttonLayout=new ae(b.RelativeLayout),this.buttonLayout.padding=[10,3,10,3],this.buttonLayout.verticalGravity=ge,this.hide=new We(q.strings.hide),this.hide.padding=[15,3,15,3],this.hide.backgroundColor=gt,this.hide.textColor=q.color.hideFg,this.hide.onClickListener=()=>{X.$icon.visibility=Oe,X.$icon.alpha=0,this.me.visibility=Ze,$e(q.strings.hideCallback,1)},this.hide.onLongClickListener=()=>{X.destroy(),$e(q.strings.killCallback,1)},this.close=new We(q.strings.close),this.close.padding=[15,3,15,3],this.close.backgroundColor=gt,this.close.textColor=q.color.closeFg,this.close.onClickListener=()=>{X.$icon.visibility=Oe,X.$icon.alpha=q.icon.alpha,this.me.visibility=Ze}}ensureInitialized(){this.initializeParams(),this.initializeLayout(),this.initializeProxy(),this.initializeMainLayout(),this.initializeButtons()}handleAdd(e){let n=this.textView("\u2800");n.textColor="#000000",e(this.buttonProxyLayout,this.buttonLayout),e(this.buttonLayout,this.me),e(this.title,this.buttonLayout),e(this.subtitle,this.me),e(this.layout,this.proxy),e(this.proxy,this.me),e(n,this.me),e(this.hide,this.buttonProxyLayout),e(this.close,this.buttonProxyLayout)}handleRemove(e){e(this.buttonProxyLayout,this.buttonLayout),e(this.buttonLayout,this.me),e(this.close,this.buttonProxyLayout),e(this.hide,this.buttonProxyLayout),e(this.proxy,this.me),e(this.layout,this.proxy),e(this.subtitle,this.me),e(this.title,this.buttonLayout)}button(e,n,r){let o=this.roundedDrawable();o.color=q.color.buttonBg;let i=ae.LinearLayoutParams(mt,mt);i.setMargins(7,5,7,5);let s=mi(e,n,r);return s.layoutParams=i,s.allCaps=!1,s.textColor=q.color.secondaryText,s.background=o,s}async dialog(e,n,r,o,i){return await yi(e,n,r,o,i)}radioGroup(e,n,r){let o=this.roundedDrawable(),i=this.textView(At(e,"")),s=ae.LinearLayoutParams(_e,_e),a=bi(n,function(c){i.text=At(e,this.text),r?.call(this,c)}).map(c=>(c.textColor=q.color.secondaryText,c)),l=vi(a);return l.padding=[10,5,10,5],l.orientation=ut,l.instance.addView(_.cast(i.instance,b.View),n.length,s),l.background=o,l}seekbar(e,n,r,o){let i=this.roundedDrawable(),s=Si(e,n,r,c=>{a.text=At(e,c),o?.call(s,c)});s.padding=[25,10,35,10];let a=this.textView(At(e,s.progress)),l=new ae(b.LinearLayout);return l.layoutParams=ae.LinearLayoutParams(mt,mt),l.orientation=ut,l.background=i,H(a,l),H(s,l),l}spinner(e,n){let r=this.roundedDrawable(),o=Ei(e,n);return o.background=r,o.background.setColorFilter(1,b.Mode.SRC_ATOP.value),o}toggle(e,n){let r=this.roundedDrawable(),o=wi(e,n);return o.textColor=q.color.secondaryText,o.background=r,o.padding=[10,5,10,5],o}textView(e){let n=this.roundedDrawable(),r=pi(e);return r.textColor=q.color.secondaryText,r.background=n,r.padding=[10,5,10,5],r}};var V=class{static Colors={RESET:"\x1B[0m",GRAY:"\x1B[90m",BLUE:"\x1B[34m",GREEN:"\x1B[32m",CYAN:"\x1B[36m",YELLOW:"\x1B[33m",RED:"\x1B[31m"};static getTime(){let e=new Date,n=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0"),o=e.getSeconds().toString().padStart(2,"0"),i=e.getMilliseconds().toString().padStart(3,"0");return`${this.Colors.GRAY}[${n}:${r}:${o}.${i}]${this.Colors.RESET}`}static info(...e){console.info(`${this.getTime()} ${this.Colors.BLUE}[INFO]${this.Colors.RESET}`,...e)}static infoGreen(...e){console.info(`${this.getTime()} ${this.Colors.GREEN}[INFO]`,...e,this.Colors.RESET)}static debug(...e){console.debug(`${this.getTime()} ${this.Colors.CYAN}[DEBUG]${this.Colors.RESET}`,...e)}static warn(...e){console.warn(`${this.getTime()} ${this.Colors.YELLOW}[WARN]${this.Colors.RESET}`,...e)}static error(...e){console.error(`${this.getTime()} ${this.Colors.RED}[ERROR]${this.Colors.RESET}`,...e)}static hook(...e){console.debug(`${this.getTime()} ${this.Colors.GRAY}[HOOK]`,...e,this.Colors.RESET)}static unity(e,...n){console.debug(`${this.getTime()} ${this.Colors.GRAY}[${e}:Unity]`,...n,this.Colors.RESET)}static errorToast(e,n=""){this.error(`${n} ${e.stack}`),$e(`${n} ${e.message}`,1)}};var te=class{static CoreModule;static TextMeshPro;static AssemblyCSharp;static Hazel;static init(){this.CoreModule=Il2Cpp.domain.assembly("UnityEngine.CoreModule").image,this.TextMeshPro=Il2Cpp.domain.assembly("Unity.TextMeshPro").image,this.AssemblyCSharp=Il2Cpp.domain.assembly("Assembly-CSharp").image,this.Hazel=Il2Cpp.domain.assembly("Hazel").image,V.info("[AssemblyHelper::init] Initialized")}};var ot=class{initHooks(){}};var Gt=class extends ot{name="Passive";Screen;ResolutionManager;ResolutionManager_SetResolution;HasResolutionBeenChanged;OriginalWidth;OriginalHeight;init(){this.Screen=te.CoreModule.class("UnityEngine.Screen"),this.ResolutionManager=te.AssemblyCSharp.class("ResolutionManager"),this.ResolutionManager_SetResolution=this.ResolutionManager.method("SetResolution",3),this.HasResolutionBeenChanged=!1}toggleFullResolution(e){let n=this;if(!this.HasResolutionBeenChanged){let r=n.Screen.method("get_currentResolution").invoke();n.OriginalWidth=r.method("get_width").invoke(),n.OriginalHeight=r.method("get_height").invoke(),V.debug(`[${n.name}::ToggleFullResolution] Original resolution: ${n.OriginalWidth}x${n.OriginalHeight}`)}if(this.HasResolutionBeenChanged=!0,e){let r=n.Screen.method("get_resolutions").invoke(),o=r.get(0).method("get_width").invoke(),i=r.get(0).method("get_height").invoke();V.debug(`[${n.name}::ToggleFullResolution] Setting resolution to ${i}x${o}`),n.ResolutionManager_SetResolution.invoke(i,o,!0)}else V.debug(`[${n.name}::ToggleFullResolution] Resetting resolution to ${n.OriginalWidth}x${n.OriginalHeight}`),n.ResolutionManager_SetResolution.invoke(n.OriginalWidth,n.OriginalHeight,!0)}};var de={noclip:!1,customSpeed:!1,speed:5,noShadows:!1,unlockVents:!1,walkInVents:!1,unlockCosmetics:!1,disableAnalytics:!1,uwuifyMode:!1};var oe=class t{static tag="UnityUtils";static Resources;static Vector3;static Vector2;static Object;static SceneManager;static SystemBoolean;static SystemString;static SystemInt;static SystemActionBool;static SystemActionBoolInt;static SystemActionBoolString;static GenericListString;static init(){this.Resources=te.CoreModule.class("UnityEngine.Resources"),this.Vector3=te.CoreModule.class("UnityEngine.Vector3"),this.Vector2=te.CoreModule.class("UnityEngine.Vector2"),this.Object=te.CoreModule.class("UnityEngine.Object"),this.SceneManager=te.CoreModule.class("UnityEngine.SceneManagement.SceneManager"),this.SystemBoolean=Il2Cpp.corlib.class("System.Boolean"),this.SystemString=Il2Cpp.corlib.class("System.String"),this.SystemInt=Il2Cpp.corlib.class("System.Int32"),this.SystemActionBool=Il2Cpp.corlib.class("System.Action`1").inflate(this.SystemBoolean),this.SystemActionBoolInt=Il2Cpp.corlib.class("System.Action`2").inflate(this.SystemBoolean,this.SystemInt),this.SystemActionBoolString=Il2Cpp.corlib.class("System.Action`2").inflate(this.SystemBoolean,this.SystemString),this.GenericListString=Il2Cpp.corlib.class("System.Collections.Generic.List`1").inflate(this.SystemString),V.info(`[${this.tag}::init] Initialized`)}static LoadScene(e){this.SceneManager.method("LoadScene",1).invoke(Il2Cpp.string(e))}static FindObjectsOfTypeAll(e){return this.Resources.method("FindObjectsOfTypeAll",1).invoke(e.type.object)}static FindObjectsOfType(e){return this.Object.method("FindObjectsOfType",1).invoke(e.type.object)}static GetInstanceID(e){return e.method("GetInstanceID").invoke()}static FindObjectFromInstanceID(e){let n=this.Object.method("FindObjectFromInstanceID",1).invoke(e);if(!n.isNull())return n}static getInstance(e){let n=e.tryMethod("get_Instance");if(!n){V.error(`[${this.tag}::getInstance] ${e.name} is missing get_Instance`);return}return n.invoke()}static createVector3(e,n,r){return this.createInstance(this.Vector3,e,n,r).unbox()}static createVector2(e,n){return this.createInstance(this.Vector2,e,n).unbox()}static createStringList(e){let n=t.createInstance(this.GenericListString),r=n.method("Add");for(let o of e)r.invoke(Il2Cpp.string(o));return n}static getTypeName(e){return e.constructor.name}static getGameObject(e){return e.method("get_gameObject").invoke()}static getTransform(e){return e.method("get_transform").invoke()}static setLocalScale(e,n){e.method("set_localScale").invoke(n)}static SetActive(e,n){e.method("SetActive").invoke(n)}static run(e){return(...n)=>{t.runInMain(()=>e(...n))}}static runInMain(e){return Il2Cpp.perform(e,"main")}static createInstance(e,...n){let r=e.alloc();return r.method(".ctor").invoke(...n),r}static getComponentFromObject(e,n){let r=n.type.object,o=e.method("GetComponent",1).invoke(r);if(!o.isNull())return o}static setEnabledComponent(e,n){return e.method("set_enabled").invoke(n)}static cachedPtr(e){return e.field("m_CachedPtr").value}};var zt=class extends ot{name="Player";Vector2;AmongUsClient;Constants;NetworkModes;PhysicsHelpers;PlayerControl;PlayerPhysics;PlayerPurchasesData;HudManager;Vent;Vector2_Distance;PhysicsHelpers_AnythingBetween;PlayerPhysics_LateUpdate;PlayerPurchasesData_GetPurchase;HudManager_Update;Vent_CanUse;init(){this.Vector2=te.CoreModule.class("UnityEngine.Vector2"),this.AmongUsClient=te.AssemblyCSharp.class("AmongUsClient"),this.Constants=te.AssemblyCSharp.class("Constants"),this.NetworkModes=te.AssemblyCSharp.class("NetworkModes"),this.PhysicsHelpers=te.AssemblyCSharp.class("PhysicsHelpers"),this.PlayerControl=te.AssemblyCSharp.class("PlayerControl"),this.PlayerPhysics=te.AssemblyCSharp.class("PlayerPhysics"),this.PlayerPurchasesData=te.AssemblyCSharp.class("PlayerPurchasesData"),this.HudManager=te.AssemblyCSharp.class("HudManager"),this.Vent=te.AssemblyCSharp.class("Vent"),this.Vector2_Distance=this.Vector2.method("Distance",2),this.PhysicsHelpers_AnythingBetween=this.PhysicsHelpers.method("AnythingBetween",5),this.PlayerPhysics_LateUpdate=this.PlayerPhysics.method("LateUpdate"),this.PlayerPurchasesData_GetPurchase=this.PlayerPurchasesData.method("GetPurchase"),this.HudManager_Update=this.HudManager.method("Update"),this.Vent_CanUse=this.Vent.method("CanUse",3)}initHooks(){let e=this;this.PlayerPhysics_LateUpdate.implementation=function(){let n=e.localPlayer,r;try{r=oe.cachedPtr(n)}catch(s){return V.debug(s+" (This error is expected due to m_CachedPtr not being set yet)"),this.method("LateUpdate").invoke()}if(n.isNull()||r.isNull())return this.method("LateUpdate").invoke();let o=n.field("Collider").value;de.noclip?o.method("set_enabled").invoke(!1):o.method("set_enabled").invoke(!0);let i=n.field("MyPhysics").value;return de.customSpeed?i.field("Speed").value=de.speed:i.field("Speed").value=2.5,this.method("LateUpdate").invoke()},this.PlayerPurchasesData_GetPurchase.implementation=function(n,r){return de.unlockCosmetics?!0:this.method("GetPurchase",2).invoke(n,r)},this.HudManager_Update.implementation=function(){let n=oe.getInstance(e.HudManager),r=e.localPlayer;if(n==null||r.isNull())return this.method("Update").invoke();let o=r.method("get_Data").invoke(),i=n.field("ImpostorVentButton").value,s=oe.getGameObject(i),a=n.field("ShadowQuad").value,l=oe.getGameObject(a);de.noShadows?l.method("SetActive",1).invoke(!1):l.method("SetActive",1).invoke(!0);let c,u;try{c=o.field("Role").value,u=c.field("CanVent").value}catch(h){return V.debug(h+" (This error is expected due to Role field not being set yet)"),this.method("Update").invoke()}let d=o.field("IsDead").value;return d&&l.method("SetActive",1).invoke(!1),!u&&!d&&s.method("SetActive",1).invoke(de.unlockVents),this.method("Update").invoke()},this.Vent_CanUse.implementation=function(n,r,o){if(!de.unlockVents)return this.method("CanUse",3).invoke(n,r,o);let i=e.localPlayer,s=i.method("get_Data").invoke();if(i.isNull()||s.isNull())return this.method("CanUse",3).invoke(n,r,o);let l=s.field("Role").value.field("CanVent").value,c=s.field("IsDead").value;if(l||c)return this.method("CanUse",3).invoke(n,r,o);let d=n.method("get_Object").invoke().field("Collider").value,p=d.method("get_bounds").invoke().method("get_center").invoke(),f=this.method("get_transform").invoke().method("get_position").invoke(),g=p.field("x").value,y=p.field("y").value,E=f.field("x").value,N=f.field("y").value,C=oe.createVector2(g,y),k=oe.createVector2(E,N),U=e.Vector2_Distance.invoke(C,k),P=this.method("get_UsableDistance").invoke(),O=e.Constants.field("ShipOnlyMask").value;return r.value=U<=P&&!e.PhysicsHelpers_AnythingBetween.invoke(d,C,k,O,!1),o.value=!0,U}}completeMyTasks(){let e=this,n=e.localPlayer;if(n.isNull()){V.warn(`[${e.name}::completeMyTasks] LocalPlayer is null`);return}let r=e.AmongUsClient.field("Instance").value;if(r==null){V.warn(`[${e.name}::completeMyTasks] AmongUsClient.Instance is null`);return}let o=n.field("myTasks").value,i=o.method("get_Count").invoke();for(let s=0;s<i;s++){let a=o.method("get_Item").invoke(s),l=a.method("get_Id").invoke(),c=r.field("NetworkMode").value,u=e.NetworkModes.field("FreePlay").value;if(c.toString()==u.toString()){n.method("RpcCompleteTask").invoke(l);continue}if(a.method("get_IsComplete").invoke())return;let h=r.method("GetHost").invoke();if(h==null){V.warn(`[${e.name}::completeMyTasks] GetHost is null`);return}if(h.field("Character").value.method("get_Data").invoke().field("Disconnected").value)return;let g=e.PlayerControl.field("AllPlayerControls").value,y=e.localPlayer.field("NetId").value,E=g.method("get_Count").invoke();for(let N=0;N<E;N++){let C=g.method("get_Item").invoke(N),k=r.method("GetClientIdFromCharacter").invoke(C),U=r.method("StartRpcImmediately").invoke(y,1,1,k);U.method("WritePacked").invoke(l),r.method("FinishRpcImmediately").invoke(U)}}}get localPlayer(){return this.PlayerControl.field("LocalPlayer").value}};var dt=class extends ot{name="Ship";HudManager;MapOptions;PlayerControl;ShipStatus;VentilationSystem;ShipStatus_FixedUpdate;init(){this.HudManager=te.AssemblyCSharp.class("HudManager"),this.MapOptions=te.AssemblyCSharp.class("MapOptions"),this.PlayerControl=te.AssemblyCSharp.class("PlayerControl"),this.ShipStatus=te.AssemblyCSharp.class("ShipStatus"),this.VentilationSystem=te.AssemblyCSharp.class("VentilationSystem"),this.ShipStatus_FixedUpdate=this.ShipStatus.method("FixedUpdate")}initHooks(){let e=this;this.ShipStatus_FixedUpdate.implementation=function(){if(de.walkInVents){let n=e.localPlayer;if(n.isNull())return this.method("FixedUpdate").invoke();n.field("inVent").value=!1,n.field("moveable").value=!0}return this.method("FixedUpdate").invoke()}}callMeeting(){let e=this;if(e.ShipStatus.field("Instance").value.isNull()){V.warn(`[${e.name}::callMeeting] ShipStatusInstance is null`);return}let r=e.localPlayer;if(r.isNull()){V.warn(`[${e.name}::callMeeting] LocalPlayer is null`);return}r.method("CmdReportDeadBody").invoke(NULL)}sabotageReactor(){let e=this,n=e.ShipStatus.field("Instance").value;if(n.isNull()){V.warn(`[${e.name}::sabotageReactor] ShipStatusInstance is null`);return}n.method("RpcUpdateSystem").invoke(3,128)}kickVents(){let e=this,n=e.ShipStatus.field("Instance").value;if(n.isNull()){V.warn(`[${e.name}::kickVents] ShipStatusInstance is null`);return}let r=n.method("get_AllVents").invoke();for(let o of r)e.VentilationSystem.method("Update",2).invoke(5,o.field("Id").value)}openSabotageMap(){let e=this;if(!e.HudManager.method("get_InstanceExists").invoke()){V.warn(`[${e.name}::openSabotageMap] HudManagerInstance does not exist`);return}let r=oe.getInstance(e.HudManager);if(r==null){V.warn(`[${e.name}::openSabotageMap] HudManagerInstance is null`);return}let o=oe.createInstance(e.MapOptions),s=e.MapOptions.nested("Modes").field("Sabotage");o.field("Mode").value=s.value,r.method("ToggleMapVisible",1).invoke(o)}get localPlayer(){return this.PlayerControl.field("LocalPlayer").value}};var Bt=class extends ot{name="UwUify";TMP_Text;set_text;originalStrings={};init(){this.TMP_Text=te.TextMeshPro.class("TMPro.TMP_Text"),this.set_text=this.TMP_Text.method("set_text")}initHooks(){let e=this;this.set_text.implementation=function(n){if(n.isNull()){this.method("set_text").invoke(n);return}if(de.uwuifyMode){let r=n.content;r&&r.length>0&&(n=Il2Cpp.string(e.createUwUifiedString(this,r)))}this.method("set_text").invoke(n)}}toggleUwUify(e){if(e){let n=oe.FindObjectsOfType(this.TMP_Text);for(let r of n){let o=r.method("get_text").invoke();r.method("set_text",1).invoke(o)}}else if(!e)for(let[n,r]of Object.entries(this.originalStrings)){let o=Number(n),i=oe.FindObjectFromInstanceID(o);i&&i.method("set_text").invoke(Il2Cpp.string(r))}}createUwUifiedString(e,n){let r=oe.GetInstanceID(e);return this.originalStrings[r]=n,this.uwuify(n)}uwuify(e){let n=["<3 ","0w0 ","H-hewwo?? ","HIIII! ","Haiiii! ","Huohhhh. ","OWO ","OwO ","UwU "],r=[" :3"," UwU"," \xD9\u03C9\xD9"," >_>"," ^_^",".."," Huoh."," ^-^"," ;_;"," ;-;"," xD"," x3"," :D"," :P"," ;3"," XDDD",", fwendo"," \u3147\u3145\u3147","\uFF08\uFF3E\uFF56\uFF3E\uFF09"," x3"," ._."," (\uFF1B\u03C9\uFF1B)"," >_<"," >w<"," ^w^"," Nyaa~"],o=[{reg:/r/g,val:"w"},{reg:/l/g,val:"w"},{reg:/R/g,val:"W"},{reg:/L/g,val:"W"},{reg:/no/g,val:"nu"},{reg:/has/g,val:"haz"},{reg:/have/g,val:"haz"},{reg:/you/g,val:"uu"},{reg:/the /g,val:"da "},{reg:/The /g,val:"Da "},{reg:/ove/g,val:"uv"},{reg:/n([aeiou])/g,val:"ny$1"},{reg:/N([aeiou])/g,val:"Ny$1"},{reg:/N([AEIOU])/g,val:"NY$1"}],i=c=>{let u=c;for(let d of o)u=u.replace(d.reg,d.val);return u};e=e.replace(/(<[^>]*>|[^<]+)/g,c=>c.startsWith("<")&&c.endsWith(">")?c:i(c));let s=(c,u)=>Math.random()>u?"":c[Math.floor(Math.random()*c.length)],a=s(n,.3),l=s(r,.3);return`${a}${e}${l}`}};var Fe=class{name="ModuleManager";static modules=[new Gt,new zt,new dt,new Bt];static initAll(){V.info(`[${this.name}::initAll] Initializing modules...`),this.modules.forEach(e=>{try{e.init(),e.initHooks(),V.debug(`[${this.name}::initAll] ${e.name} module loaded`)}catch(n){V.errorToast(n,`[${this.name}::InitAll] Failed to load ${e.name} module`)}}),V.info(`[${this.name}::initAll] All modules Initialized`)}static get(e){return this.modules.find(n=>n instanceof e)}};var qe={VERSION:"2.0.0",MOD_MENU_ICON_URL:"https://www.innersloth.com/wp-content/uploads/2022/11/ModStamp.png",GITHUB_URL:"https://github.com/astra1dev/MalumMenu-Android",GITHUB_RELEASES_URL:"https://github.com/astra1dev/MalumMenu-Android/releases/latest",GITHUB_CHANGELOG_URL:"https://github.com/astra1dev/MalumMenu-Android/blob/main/docs/CHANGELOG.md",DISCORD_URL:"https://discord.gg/ue9x6TnMC3",MALUMMENU_URL:"https://github.com/scp222thj/MalumMenu",UNITY_LOGGING:!1};var Ye=class{static tag="JavaUtils";static exitFromApp(){_.perform(()=>{V.debug(`[${this.tag}::exitFromApp] Exiting from app`),_.use("java.lang.System").exit(0)})}static getSystemLocale(){let n=_.use("java.util.Locale").getDefault().getLanguage().toLowerCase();return V.debug(`[${this.tag}::getSystemLocale] Got locale from system: ${n}`),n}static openURL(e){_.perform(()=>{try{V.debug(`[${this.tag}::OpenURL] Opening URL: ${e}`);let n=_.use("android.net.Uri").parse(e),r=_.use("android.content.Intent"),o=_.use("android.app.ActivityThread").currentApplication().getApplicationContext(),i=r.$new("android.intent.action.VIEW",n);i.addFlags(268435456),o.startActivity(i)}catch(n){V.errorToast(n)}})}static copyToClipboard(e){_.perform(()=>{try{let n=_.use("java.lang.String"),r=_.use("android.content.ClipData"),o=_.use("android.app.ActivityThread").currentApplication().getApplicationContext(),i=_.cast(o.getSystemService("clipboard"),_.use("android.content.ClipboardManager")),s=r.newPlainText(n.$new("label"),n.$new(e));i.setPrimaryClip(s),V.debug(`[${this.tag}::copyToClipboard] Copied to clipboard: ${e}`)}catch(n){V.errorToast(n)}})}static httpGet(e,n=()=>{}){_.perform(()=>{try{V.debug(`[${this.tag}::httpGet] HTTP GET to: ${e}`);let r=_.use("java.net.HttpURLConnection"),o=_.use("java.net.URL"),i=_.use("java.io.BufferedReader"),s=_.use("java.io.InputStreamReader"),a=_.use("java.lang.StringBuilder"),l=o.$new(e),c=_.cast(l.openConnection(),r);c.setRequestMethod("GET"),c.setConnectTimeout(5e3),c.setReadTimeout(5e3),c.setDoInput(!0),c.connect();let u=c.getResponseCode(),d;if(u===200){let h=c.getInputStream(),p=i.$new(s.$new(h)),m=a.$new(),f;for(;(f=p.readLine())!=null;)m.append(f);d=m.toString(),h.close(),p.close()}c.disconnect(),V.debug(`[${this.tag}::httpGet] HTTP GET response: ${d}`),n(d)}catch(r){V.errorToast(r,"HTTP GET"),n(void 0)}})}static httpPost(e,n,r={},o=()=>{}){_.perform(()=>{try{V.debug(`[${this.tag}::httpPost] HTTP POST to: ${e}`);let i=_.use("java.net.HttpURLConnection"),s=_.use("java.net.URL"),a=_.use("java.io.BufferedReader"),l=_.use("java.io.BufferedWriter"),c=_.use("java.io.InputStreamReader"),u=_.use("java.io.OutputStreamWriter"),d=_.use("java.lang.StringBuilder"),h=_.use("java.lang.String"),p=s.$new(e),m=_.cast(p.openConnection(),i);m.setRequestMethod("POST");let f=!1;for(let k in r){let U=r[k];m.setRequestProperty(k,U),k.toLowerCase()==="content-type"&&(f=!0)}f||m.setRequestProperty("Content-Type","application/json"),m.setConnectTimeout(5e3),m.setReadTimeout(5e3),m.setDoInput(!0),m.setDoOutput(!0);let g=m.getOutputStream(),y=l.$new(u.$new(g,h.$new("UTF-8"))),E=h.$new(n);y.write(E,0,E.length()),y.flush(),y.close(),g.close(),m.connect();let N=m.getResponseCode(),C;if(N===200||N===201){let k=m.getInputStream(),U=a.$new(c.$new(k)),P=d.$new(),O;for(;(O=U.readLine())!=null;)P.append(O);C=P.toString(),k.close(),U.close()}else V.warn(`[${this.tag}::httpPost] Failed with code: ${N}`);m.disconnect(),V.debug(`[${this.tag}::httpPost] HTTP POST response: ${C}`),o(C)}catch(i){V.errorToast(i,"HTTP POST"),o(void 0)}})}};var va={languages:{en:"English",de:"German"},menu:{info:{title:"MalumMenu",desc:"v{0} ({1}) \u2014 Created by Astral"},tabs:{debug:"<b>\u2014\u2014\u2014 Debug \u2014\u2014\u2014</b>",movement:"<b>\u2014\u2014\u2014 Movement \u2014\u2014\u2014</b>",esp:"<b>\u2014\u2014\u2014 ESP \u2014\u2014\u2014</b>",roles:"<b>\u2014\u2014\u2014 Roles \u2014\u2014\u2014</b>",ship:"<b>\u2014\u2014\u2014 Ship \u2014\u2014\u2014</b>",passive:"<b>\u2014\u2014\u2014 Passive \u2014\u2014\u2014</b>",other:"<b>\u2014\u2014\u2014 Other \u2014\u2014\u2014</b>"},functions:{go_to_main_menu:"Go to Main Menu",noclip:"NoClip",custom_speed:"Use Custom Speed",speed_val:"Custom Speed: {0} / 20",no_shadows:"No Shadows",complete_my_tasks:"Complete My Tasks",call_meeting:"Call Meeting",sabotage_reactor:"Sabotage Reactor",open_sabotage_map:"Open Sabotage Map",unlock_vents:"Unlock Vents",kick_vents:"Kick All From Vents",walk_in_vents:"Walk In Vents",unlock_cosmetics:"Unlock Cosmetics",full_resolution:"Full Resolution",disable_analytics:"Disable Analytics",uwuify:"UwU?",select_platform:"Select Platform"},other:{language:"Select Language",github_url:"GitHub Repository (Leave a star!)",discord_url:"Discord Server",malummenu_url:"Check Out MalumMenu for PC!",changelog:"Open Changelog"},toasts:{no_overlay_permission:"Overlay permission is needed to show the menu",hide_button:"Hide",close_button:"Close",hide_callback:"Icon hidden",kill_callback:"Menu killed",exit_game:"Long press button to exit game",on_locale_changed:"Changed mod menu language to {0}, restart game to apply"}}};var Sa={languages:{en:"Englisch",de:"Deutsch"},menu:{info:{title:"MalumMenu",desc:"v{0} ({1}) \u2014 Erstellt von Astral"},tabs:{debug:"<b>\u2014\u2014\u2014 Debug \u2014\u2014\u2014</b>",movement:"<b>\u2014\u2014\u2014 Bewegung \u2014\u2014\u2014</b>",esp:"<b>\u2014\u2014\u2014 ESP \u2014\u2014\u2014</b>",roles:"<b>\u2014\u2014\u2014 Roles \u2014\u2014\u2014</b>",ship:"<b>\u2014\u2014\u2014 Ship \u2014\u2014\u2014</b>",passive:"<b>\u2014\u2014\u2014 Passiv \u2014\u2014\u2014</b>",other:"<b>\u2014\u2014\u2014 Andere \u2014\u2014\u2014</b>"},functions:{go_to_main_menu:"Gehe zum Hauptmen\xFC",noclip:"NoClip",custom_speed:"Use Custom Speed",speed_val:"Custom Speed: {0} / 20",no_shadows:"Keine Schatten",complete_my_tasks:"Complete My Tasks",call_meeting:"Call Meeting",sabotage_reactor:"Sabotiere Reaktor",open_sabotage_map:"\xD6ffne Sabotage-Karte",unlock_vents:"Benutze Vents",kick_vents:"Kicke alle aus Vents",walk_in_vents:"In Vents laufen",unlock_cosmetics:"Unlock Cosmetics",full_resolution:"Volle Aufl\xF6sung",disable_analytics:"Disable Analytics",uwuify:"UwU?",select_platform:"Select Platform"},other:{language:"Select Language",github_url:"GitHub Repository (Leave a star!)",discord_url:"Discord Server",malummenu_url:"Check Out MalumMenu for PC!",changelog:"\xD6ffne Changelog"},toasts:{no_overlay_permission:"Overlay permission is needed to show the menu",hide_button:"Verstecken",close_button:"Schlie\xDFen",hide_callback:"Icon hidden",kill_callback:"Menu killed",exit_game:"Long press button to exit game",on_locale_changed:"Mod Men\xFC Sprache ge\xE4ndert zu {0}, Spiel neu starten um anzuwenden"}}};var Ea={en:va,de:Sa},B=class{static tag="I18n";static supportedLocales=Object.keys(Ea);static currentLocale="en";static init(){let e="en";_.perform(()=>{if(Ce.contains("locale")){let n=Ce.getString("locale");this.isLocaleSupported(n)?(e=n,V.debug(`[${this.tag}::init] Loaded locale from config: ${e}`)):V.warn(`[${this.tag}::init] Locale ${n} from config is not supported`)}else{let n=Ye.getSystemLocale();this.isLocaleSupported(n)?e=n:V.warn(`[${this.tag}::init] Locale ${n} from system is not supported`),Ce.putString("locale",e),V.info(`[${this.tag}::init] Saved ${e} locale to config`)}this.currentLocale=e,V.info(`[${this.tag}::init] Initialized with ${e} locale`)})}static isLocaleSupported(e){return this.supportedLocales.includes(e)}static resolveKey(e,n){return n.split(".").reduce((r,o)=>r?r[o]:void 0,e)}static format(e,...n){return n.length===0?e:e.replace(/{(\d+)}/g,(r,o)=>{let i=parseInt(o);return n[i]!==void 0?String(n[i]):r})}static t(e,...n){let r=this.resolveKey(Ea[this.currentLocale],e);return r?this.format(r,...n):`MISSING: ${e}`}static getLocalisedLanguages(){return this.supportedLocales.map(e=>this.t(`languages.${e}`))}static changeLocale(e){if(!this.isLocaleSupported(e)){V.warn(`[${this.tag}::changeLocale] Trying to apply unsupported locale ${e}`);return}_.perform(()=>{Ce.putString("locale",e)}),V.info(`[${this.tag}::changeLocale] Locale changed to: ${e}`)}};var sr=class{static Debug;static Log;static LogWarning;static LogError;static init(){this.Debug=te.CoreModule.class("UnityEngine.Debug"),this.Log=this.Debug.method("Log",1),this.LogWarning=this.Debug.method("LogWarning",1),this.LogError=this.Debug.method("LogError",1),this.initHooks()}static initHooks(){let e=this;qe.UNITY_LOGGING&&(this.Log.implementation=function(n){V.unity("INFO",n),e.Log.invoke(n)},this.LogWarning.implementation=function(n){V.unity("WARN",n),e.LogWarning.invoke(n)},this.LogError.implementation=function(n){V.unity("ERROR",n),e.LogError.invoke(n)})}};var wa={color:{primaryText:"#FFFFFF",secondaryText:"#FFFFFF",buttonBg:_i("#326647"),layoutBg:"#1C1C1C",collapseBg:"#3B3B3B",categoryBg:"#296368",menu:"#0D0D0D",tabFocusedBg:"#454545",tabUnfocusedBg:"#3E3E3E",hideFg:"#55514F",closeFg:"#751616"},menu:{width:350,height:200,x:100,y:100,cornerRadius:45},icon:{size:50,alpha:1},strings:{noOverlayPermission:B.t("menu.toasts.no_overlay_permission"),hide:B.t("menu.toasts.hide_button"),close:B.t("menu.toasts.close_button"),hideCallback:B.t("menu.toasts.hide_callback"),killCallback:B.t("menu.toasts.kill_callback")}};var ar=class{static draw(e){let n=e.textView(B.t("menu.tabs.debug"));n.gravity=ge,H(n);let r=[`Frida v${Frida.version} (runtime: ${Script.runtime})`,`Unity version: ${Il2Cpp.unityVersion}`,`Android version: ${_.androidVersion}`,`Architecture: ${Process.arch}`,`Platform: ${Process.platform}`,`PID: ${Process.id}`];for(let o of r)H(e.textView(o));H(e.button(B.t("menu.functions.go_to_main_menu"),()=>{oe.LoadScene("MainMenu")})),H(e.button("Exit game",()=>{$e(B.t("menu.toasts.exit_game"),0)},()=>{Ye.exitFromApp()}))}};var lr=class{static draw(e){let n=e.textView(B.t("menu.tabs.movement"));n.gravity=ge,H(n),H(e.toggle(B.t("menu.functions.noclip"),r=>{de.noclip=r})),H(e.seekbar(B.t("menu.functions.speed_val"),20,0,r=>{de.speed=r})),H(e.toggle(B.t("menu.functions.custom_speed"),r=>{de.customSpeed=r}))}};var cr=class{static draw(e){let n=e.textView(B.t("menu.tabs.esp"));n.gravity=ge,H(n),H(e.toggle(B.t("menu.functions.no_shadows"),r=>{de.noShadows=r}))}};var ur=class{static draw(e){let n=e.textView(B.t("menu.tabs.roles"));n.gravity=ge,H(n),H(e.button(B.t("menu.functions.complete_my_tasks"),oe.run(()=>Fe.get(zt)?.completeMyTasks())))}};var dr=class{static draw(e){let n=e.textView(B.t("menu.tabs.ship"));n.gravity=ge,H(n),H(e.button(B.t("menu.functions.call_meeting"),oe.run(()=>Fe.get(dt)?.callMeeting()))),H(e.button(B.t("menu.functions.sabotage_reactor"),oe.run(()=>Fe.get(dt)?.sabotageReactor()))),H(e.button(B.t("menu.functions.open_sabotage_map"),oe.run(()=>Fe.get(dt)?.openSabotageMap()))),H(e.toggle(B.t("menu.functions.unlock_vents"),r=>{de.unlockVents=r})),H(e.button(B.t("menu.functions.kick_vents"),oe.run(()=>Fe.get(dt)?.kickVents()))),H(e.toggle(B.t("menu.functions.walk_in_vents"),r=>{de.walkInVents=r}))}};var pr=class{static draw(e){let n=e.textView(B.t("menu.tabs.passive"));n.gravity=ge,H(n),H(e.toggle(B.t("menu.functions.unlock_cosmetics"),r=>{de.unlockCosmetics=r})),H(e.toggle(B.t("menu.functions.full_resolution"),oe.run(r=>{Fe.get(Gt)?.toggleFullResolution(r)}))),H(e.toggle(B.t("menu.functions.disable_analytics"),r=>{de.disableAnalytics=r})),H(e.toggle(B.t("menu.functions.uwuify"),oe.run(r=>{de.uwuifyMode=r,Fe.get(Bt)?.toggleUwUify(r)})))}};var hr=class{static draw(e){let n=e.textView(B.t("menu.tabs.other"));n.gravity=ge,H(n),H(e.radioGroup(B.t("menu.other.language"),B.getLocalisedLanguages(),r=>{let o=B.supportedLocales[r];B.changeLocale(o),$e(B.t("menu.toasts.on_locale_changed",B.getLocalisedLanguages()[r]),0)})),H(e.button(B.t("menu.other.github_url"),()=>Ye.openURL(qe.GITHUB_URL))),H(e.button(B.t("menu.other.discord_url"),()=>Ye.openURL(qe.DISCORD_URL))),H(e.button(B.t("menu.other.malummenu_url"),()=>Ye.openURL(qe.MALUMMENU_URL))),H(e.button(B.t("menu.other.changelog"),()=>Ye.openURL(qe.GITHUB_CHANGELOG_URL)))}};var fr=class t{static tag="MenuUI";static layout;static init(){_.available&&(_.perform(()=>{fi(t.build)}),V.info(`[${this.tag}::init] Initialized`))}static build(){t.layout=new En(wa);let e=B.t("menu.info.title"),n=B.t("menu.info.desc",qe.VERSION,Il2Cpp.application.version),r=new vn(e,n,t.layout);r.icon(qe.MOD_MENU_ICON_URL,"Web"),ar.draw(t.layout),lr.draw(t.layout),cr.draw(t.layout),ur.draw(t.layout),dr.draw(t.layout),pr.draw(t.layout),hr.draw(t.layout),r.show()}static addCenterText(e){if(t.layout){let n=t.layout.textView(e);n.gravity=ge,H(n)}}};var Ti=class{static init(){V.debug("Script Loaded"),Il2Cpp.perform(()=>{V.debug("IL2CPP Loaded"),V.infoGreen(`MalumMenu ${qe.VERSION}, Game Version: ${Il2Cpp.application.version}`),B.init(),te.init(),sr.init(),oe.init(),Fe.initAll(),fr.init()}).catch(e=>V.error(`Failed to initialize script: ${e}`))}};Ti.init();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
