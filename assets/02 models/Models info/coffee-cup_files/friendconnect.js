window.google = window["google"] || {};google.friendconnect = google.friendconnect_ || {};if (!window['__ps_loaded__']) {var gadgets=gadgets||{},shindig=shindig||{};
;
gadgets.config=function(){var A=[];
var B;
return{register:function(E,D,C){var F=A[E];
if(!F){F=[];
A[E]=F
}F.push({validators:D||{},callback:C})
},get:function(C){if(C){return B[C]||{}
}return B
},init:function(E,L){B=E;
for(var C in A){if(A.hasOwnProperty(C)){var D=A[C],I=E[C];
for(var H=0,G=D.length;
H<G;
++H){var J=D[H];
if(I&&!L){var F=J.validators;
for(var K in F){if(F.hasOwnProperty(K)){if(!F[K](I[K])){throw new Error('Invalid config value "'+I[K]+'" for parameter "'+K+'" in component "'+C+'"')
}}}}if(J.callback){J.callback(E)
}}}}},EnumValidator:function(F){var E=[];
if(arguments.length>1){for(var D=0,C;
(C=arguments[D]);
++D){E.push(C)
}}else{E=F
}return function(H){for(var G=0,I;
(I=E[G]);
++G){if(H===E[G]){return true
}}}
},RegExValidator:function(C){return function(D){return C.test(D)
}
},ExistsValidator:function(C){return typeof C!=="undefined"
},NonEmptyStringValidator:function(C){return typeof C==="string"&&C.length>0
},BooleanValidator:function(C){return typeof C==="boolean"
},LikeValidator:function(C){return function(E){for(var F in C){if(C.hasOwnProperty(F)){var D=C[F];
if(!D(E[F])){return false
}}}return true
}
}}
}();;
gadgets.log=(function(){var E=1;
var A=2;
var F=3;
var C=4;
var D=function(I){B(E,I)
};
gadgets.warn=function(I){B(A,I)
};
gadgets.error=function(I){B(F,I)
};
gadgets.setLogLevel=function(I){H=I
};
function B(J,I){if(J<H||!G){return 
}if(J===A&&G.warn){G.warn(I)
}else{if(J===F&&G.error){G.error(I)
}else{if(G.log){G.log(I)
}}}}D.INFO=E;
D.WARNING=A;
D.NONE=C;
var H=E;
var G=window.console?window.console:window.opera?window.opera.postError:undefined;
return D
})();;
var tamings___=tamings___||[];
tamings___.push(function(A){___.grantRead(gadgets.log,"INFO");
___.grantRead(gadgets.log,"WARNING");
___.grantRead(gadgets.log,"ERROR");
___.grantRead(gadgets.log,"NONE");
caja___.whitelistFuncs([[gadgets,"log"],[gadgets,"warn"],[gadgets,"error"],[gadgets,"setLogLevel"],[gadgets.log,"logAtLevel"]])
});;
if(window.JSON&&window.JSON.parse&&window.JSON.stringify){gadgets.json={parse:function(B){try{return window.JSON.parse(B)
}catch(A){return false
}},stringify:function(B){try{return window.JSON.stringify(B)
}catch(A){return null
}}}
}else{gadgets.json=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function stringify(value){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;
switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];
if(c){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"':'"'+value+'"';
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}a=[];
if(typeof value.length==="number"&&!value.propertyIsEnumerable("length")){l=value.length;
for(i=0;
i<l;
i+=1){a.push(stringify(value[i])||"null")
}return"["+a.join(",")+"]"
}for(k in value){if(k.match("___$")){continue
}if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);
if(v){a.push(stringify(k)+":"+v)
}}}}return"{"+a.join(",")+"}"
}}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")
}return false
}}
}()
};;
var tamings___=tamings___||[];
tamings___.push(function(A){caja___.whitelistFuncs([[gadgets.json,"parse"],[gadgets.json,"stringify"]])
});;
gadgets.util=function(){function G(L){var M;
var K=L;
var I=K.indexOf("?");
var J=K.indexOf("#");
if(J===-1){M=K.substr(I+1)
}else{M=[K.substr(I+1,J-I-1),"&",K.substr(J+1)].join("")
}return M.split("&")
}var E=null;
var D={};
var C={};
var F=[];
var A={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true};
function B(I,J){return String.fromCharCode(J)
}function H(I){D=I["core.util"]||{}
}if(gadgets.config){gadgets.config.register("core.util",null,H)
}return{getUrlParameters:function(Q){if(E!==null&&typeof Q==="undefined"){return E
}var M={};
E={};
var J=G(Q||document.location.href);
var O=window.decodeURIComponent?decodeURIComponent:unescape;
for(var L=0,K=J.length;
L<K;
++L){var N=J[L].indexOf("=");
if(N===-1){continue
}var I=J[L].substring(0,N);
var P=J[L].substring(N+1);
P=P.replace(/\+/g," ");
M[I]=O(P)
}if(typeof Q==="undefined"){E=M
}return M
},makeClosure:function(L,N,M){var K=[];
for(var J=2,I=arguments.length;
J<I;
++J){K.push(arguments[J])
}return function(){var O=K.slice();
for(var Q=0,P=arguments.length;
Q<P;
++Q){O.push(arguments[Q])
}return N.apply(L,O)
}
},makeEnum:function(J){var L={};
for(var K=0,I;
(I=J[K]);
++K){L[I]=I
}return L
},getFeatureParameters:function(I){return typeof D[I]==="undefined"?null:D[I]
},hasFeature:function(I){return typeof D[I]!=="undefined"
},getServices:function(){return C
},registerOnLoadHandler:function(I){F.push(I)
},runOnLoadHandlers:function(){for(var J=0,I=F.length;
J<I;
++J){F[J]()
}},escape:function(I,M){if(!I){return I
}else{if(typeof I==="string"){return gadgets.util.escapeString(I)
}else{if(typeof I==="array"){for(var L=0,J=I.length;
L<J;
++L){I[L]=gadgets.util.escape(I[L])
}}else{if(typeof I==="object"&&M){var K={};
for(var N in I){if(I.hasOwnProperty(N)){K[gadgets.util.escapeString(N)]=gadgets.util.escape(I[N],true)
}}return K
}}}}return I
},escapeString:function(M){if(!M){return M
}var J=[],L,N;
for(var K=0,I=M.length;
K<I;
++K){L=M.charCodeAt(K);
N=A[L];
if(N===true){J.push("&#",L,";")
}else{if(N!==false){J.push(M.charAt(K))
}}}return J.join("")
},unescapeString:function(I){if(!I){return I
}return I.replace(/&#([0-9]+);/g,B)
}}
}();
gadgets.util.getUrlParameters();;
var tamings___=tamings___||[];
tamings___.push(function(A){caja___.whitelistFuncs([[gadgets.util,"escapeString"],[gadgets.util,"getFeatureParameters"],[gadgets.util,"getUrlParameters"],[gadgets.util,"hasFeature"],[gadgets.util,"registerOnLoadHandler"],[gadgets.util,"unescapeString"]])
});;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.wpm){gadgets.rpctx.wpm=function(){var A;
return{getCode:function(){return"wpm"
},isParentVerifiable:function(){return true
},init:function(B,C){A=C;
var D=function(E){B(gadgets.json.parse(E.data))
};
if(typeof window.addEventListener!="undefined"){window.addEventListener("message",D,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onmessage",D)
}}A("..",true);
return true
},setup:function(C,B){if(C===".."){gadgets.rpc.call(C,gadgets.rpc.ACK)
}return true
},call:function(C,G,F){var E=gadgets.rpc._getTargetWin(C);
var D=gadgets.rpc.getRelayUrl(C)||gadgets.util.getUrlParameters()["parent"];
var B=gadgets.rpc.getOrigin(D);
if(B){E.postMessage(gadgets.json.stringify(F),B)
}else{gadgets.error("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message")
}return true
}}
}()
};;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.frameElement){gadgets.rpctx.frameElement=function(){var E="__g2c_rpc";
var B="__c2g_rpc";
var D;
var C;
function A(G,K,J){try{if(K!==".."){var F=window.frameElement;
if(typeof F[E]==="function"){if(typeof F[E][B]!=="function"){F[E][B]=function(L){D(gadgets.json.parse(L))
}
}F[E](gadgets.json.stringify(J));
return 
}}else{var I=document.getElementById(G);
if(typeof I[E]==="function"&&typeof I[E][B]==="function"){I[E][B](gadgets.json.stringify(J));
return 
}}}catch(H){}return true
}return{getCode:function(){return"fe"
},isParentVerifiable:function(){return false
},init:function(F,G){D=F;
C=G;
return true
},setup:function(J,F){if(J!==".."){try{var I=document.getElementById(J);
I[E]=function(K){D(gadgets.json.parse(K))
}
}catch(H){return false
}}if(J===".."){C("..",true);
var G=function(){window.setTimeout(function(){gadgets.rpc.call(J,gadgets.rpc.ACK)
},500)
};
gadgets.util.registerOnLoadHandler(G)
}return true
},call:function(F,H,G){A(F,H,G)
}}
}()
};;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.nix){gadgets.rpctx.nix=function(){var C="GRPC____NIXVBS_wrapper";
var D="GRPC____NIXVBS_get_wrapper";
var F="GRPC____NIXVBS_handle_message";
var B="GRPC____NIXVBS_create_channel";
var A=10;
var J=500;
var I={};
var H;
var G=0;
function E(){var L=I[".."];
if(L){return 
}if(++G>A){gadgets.warn("Nix transport setup failed, falling back...");
H("..",false);
return 
}if(!L&&window.opener&&"GetAuthToken" in window.opener){L=window.opener;
if(L.GetAuthToken()==gadgets.rpc.getAuthToken("..")){var K=gadgets.rpc.getAuthToken("..");
L.CreateChannel(window[D]("..",K),K);
I[".."]=L;
window.opener=null;
H("..",true);
return 
}}window.setTimeout(function(){E()
},J)
}return{getCode:function(){return"nix"
},isParentVerifiable:function(){return false
},init:function(L,M){H=M;
if(typeof window[D]!=="unknown"){window[F]=function(O){window.setTimeout(function(){L(gadgets.json.parse(O))
},0)
};
window[B]=function(O,Q,P){if(gadgets.rpc.getAuthToken(O)===P){I[O]=Q;
H(O,true)
}};
var K="Class "+C+"\n Private m_Intended\nPrivate m_Auth\nPublic Sub SetIntendedName(name)\n If isEmpty(m_Intended) Then\nm_Intended = name\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\n If isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Sub SendMessage(data)\n "+F+"(data)\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub CreateChannel(channel, auth)\n Call "+B+"(m_Intended, channel, auth)\nEnd Sub\nEnd Class\nFunction "+D+"(name, auth)\nDim wrap\nSet wrap = New "+C+"\nwrap.SetIntendedName name\nwrap.SetAuth auth\nSet "+D+" = wrap\nEnd Function";
try{window.execScript(K,"vbscript")
}catch(N){return false
}}return true
},setup:function(O,K){if(O===".."){E();
return true
}try{var M=document.getElementById(O);
var N=window[D](O,K);
M.contentWindow.opener=N
}catch(L){return false
}return true
},call:function(K,N,M){try{if(I[K]){I[K].SendMessage(gadgets.json.stringify(M))
}}catch(L){return false
}return true
}}
}()
};;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.rmr){gadgets.rpctx.rmr=function(){var G=500;
var E=10;
var H={};
var B;
var I;
function K(P,N,O,M){var Q=function(){document.body.appendChild(P);
P.src="about:blank";
if(M){P.onload=function(){L(M)
}
}P.src=N+"#"+O
};
if(document.body){Q()
}else{gadgets.util.registerOnLoadHandler(function(){Q()
})
}}function C(O){if(typeof H[O]==="object"){return 
}var P=document.createElement("iframe");
var M=P.style;
M.position="absolute";
M.top="0px";
M.border="0";
M.opacity="0";
M.width="10px";
M.height="1px";
P.id="rmrtransport-"+O;
P.name=P.id;
var N=gadgets.rpc.getRelayUrl(O);
if(!N){N=gadgets.rpc.getOrigin(gadgets.util.getUrlParameters()["parent"])+"/robots.txt"
}H[O]={frame:P,receiveWindow:null,relayUri:N,searchCounter:0,width:10,waiting:true,queue:[],sendId:0,recvId:0};
if(O!==".."){K(P,N,A(O))
}D(O)
}function D(O){var Q=null;
H[O].searchCounter++;
try{var N=gadgets.rpc._getTargetWin(O);
if(O===".."){Q=N.frames["rmrtransport-"+gadgets.rpc.RPC_ID]
}else{Q=N.frames["rmrtransport-.."]
}}catch(P){}var M=false;
if(Q){M=F(O,Q)
}if(!M){if(H[O].searchCounter>E){return 
}window.setTimeout(function(){D(O)
},G)
}}function J(N,P,T,S){var O=null;
if(T!==".."){O=H[".."]
}else{O=H[N]
}if(O){if(P!==gadgets.rpc.ACK){O.queue.push(S)
}if(O.waiting||(O.queue.length===0&&!(P===gadgets.rpc.ACK&&S&&S.ackAlone===true))){return true
}if(O.queue.length>0){O.waiting=true
}var M=O.relayUri+"#"+A(N);
try{O.frame.contentWindow.location=M;
var Q=O.width==10?20:10;
O.frame.style.width=Q+"px";
O.width=Q
}catch(R){return false
}}return true
}function A(N){var O=H[N];
var M={id:O.sendId};
if(O){M.d=Array.prototype.slice.call(O.queue,0);
M.d.push({s:gadgets.rpc.ACK,id:O.recvId})
}return gadgets.json.stringify(M)
}function L(X){var U=H[X];
var Q=U.receiveWindow.location.hash.substring(1);
var Y=gadgets.json.parse(decodeURIComponent(Q))||{};
var N=Y.d||[];
var O=false;
var T=false;
var V=0;
var M=(U.recvId-Y.id);
for(var P=0;
P<N.length;
++P){var S=N[P];
if(S.s===gadgets.rpc.ACK){I(X,true);
if(U.waiting){T=true
}U.waiting=false;
var R=Math.max(0,S.id-U.sendId);
U.queue.splice(0,R);
U.sendId=Math.max(U.sendId,S.id||0);
continue
}O=true;
if(++V<=M){continue
}++U.recvId;
B(S)
}if(O||(T&&U.queue.length>0)){var W=(X==="..")?gadgets.rpc.RPC_ID:"..";
J(X,gadgets.rpc.ACK,W,{ackAlone:O})
}}function F(P,S){var O=H[P];
try{var N=false;
N="document" in S;
if(!N){return false
}N=typeof S.document=="object";
if(!N){return false
}var R=S.location.href;
if(R==="about:blank"){return false
}}catch(M){return false
}O.receiveWindow=S;
function Q(){L(P)
}if(typeof S.attachEvent==="undefined"){S.onresize=Q
}else{S.attachEvent("onresize",Q)
}if(P===".."){K(O.frame,O.relayUri,A(P),P)
}else{L(P)
}return true
}return{getCode:function(){return"rmr"
},isParentVerifiable:function(){return true
},init:function(M,N){B=M;
I=N;
return true
},setup:function(O,M){try{C(O)
}catch(N){gadgets.warn("Caught exception setting up RMR: "+N);
return false
}return true
},call:function(M,O,N){return J(M,N.s,O,N)
}}
}()
};;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.ifpc){gadgets.rpctx.ifpc=function(){var E=[];
var D=0;
var C;
function B(H){var F=[];
for(var I=0,G=H.length;
I<G;
++I){F.push(encodeURIComponent(gadgets.json.stringify(H[I])))
}return F.join("&")
}function A(I){var G;
for(var F=E.length-1;
F>=0;
--F){var J=E[F];
try{if(J&&(J.recyclable||J.readyState==="complete")){J.parentNode.removeChild(J);
if(window.ActiveXObject){E[F]=J=null;
E.splice(F,1)
}else{J.recyclable=false;
G=J;
break
}}}catch(H){}}if(!G){G=document.createElement("iframe");
G.style.border=G.style.width=G.style.height="0px";
G.style.visibility="hidden";
G.style.position="absolute";
G.onload=function(){this.recyclable=true
};
E.push(G)
}G.src=I;
window.setTimeout(function(){document.body.appendChild(G)
},0)
}return{getCode:function(){return"ifpc"
},isParentVerifiable:function(){return true
},init:function(F,G){C=G;
C("..",true);
return true
},setup:function(G,F){C(G,true);
return true
},call:function(F,K,I){var J=gadgets.rpc.getRelayUrl(F);
++D;
if(!J){gadgets.warn("No relay file assigned for IFPC");
return 
}var H=null;
if(I.l){var G=I.a;
H=[J,"#",B([K,D,1,0,B([K,I.s,"","",K].concat(G))])].join("")
}else{H=[J,"#",F,"&",K,"@",D,"&1&0&",encodeURIComponent(gadgets.json.stringify(I))].join("")
}A(H);
return true
}}
}()
};;
if(!gadgets.rpc){gadgets.rpc=function(){var T="__cb";
var S="";
var G="__ack";
var R=500;
var J=10;
var B={};
var C={};
var X={};
var K={};
var N=0;
var i={};
var W={};
var D={};
var f={};
var L={};
var V={};
var M=(window.top!==window.self);
var O=window.name;
var g=(function(){function j(k){return function(){gadgets.log("gadgets.rpc."+k+"("+gadgets.json.stringify(Array.prototype.slice.call(arguments))+"): call ignored. [caller: "+document.location+", isChild: "+M+"]")
}
}return{getCode:function(){return"noop"
},isParentVerifiable:function(){return true
},init:j("init"),setup:j("setup"),call:j("call")}
})();
if(gadgets.util){f=gadgets.util.getUrlParameters()
}var a=(f.rpc_earlyq==="1");
function A(){return typeof window.postMessage==="function"?gadgets.rpctx.wpm:typeof window.postMessage==="object"?gadgets.rpctx.wpm:window.ActiveXObject?gadgets.rpctx.nix:navigator.userAgent.indexOf("WebKit")>0?gadgets.rpctx.rmr:navigator.product==="Gecko"?gadgets.rpctx.frameElement:gadgets.rpctx.ifpc
}function b(o,m){var k=c;
if(!m){k=g
}L[o]=k;
var j=V[o]||[];
for(var l=0;
l<j.length;
++l){var n=j[l];
n.t=Y(o);
k.call(o,n.f,n)
}V[o]=[]
}function U(k){if(k&&typeof k.s==="string"&&typeof k.f==="string"&&k.a instanceof Array){if(K[k.f]){if(K[k.f]!==k.t){throw new Error("Invalid auth token. "+K[k.f]+" vs "+k.t)
}}if(k.s===G){window.setTimeout(function(){b(k.f,true)
},0);
return 
}if(k.c){k.callback=function(l){gadgets.rpc.call(k.f,T,null,k.c,l)
}
}var j=(B[k.s]||B[S]).apply(k,k.a);
if(k.c&&typeof j!=="undefined"){gadgets.rpc.call(k.f,T,null,k.c,j)
}}}function e(l){if(!l){return""
}l=l.toLowerCase();
if(l.indexOf("//")==0){l=window.location.protocol+l
}if(l.indexOf("://")==-1){l=window.location.protocol+"//"+l
}var m=l.substring(l.indexOf("://")+3);
var j=m.indexOf("/");
if(j!=-1){m=m.substring(0,j)
}var o=l.substring(0,l.indexOf("://"));
var n="";
var p=m.indexOf(":");
if(p!=-1){var k=m.substring(p+1);
m=m.substring(0,p);
if((o==="http"&&k!=="80")||(o==="https"&&k!=="443")){n=":"+k
}}return o+"://"+m+n
}function I(k){if(typeof k==="undefined"||k===".."){return window.parent
}k=String(k);
var j=window.frames[k];
if(j){return j
}j=document.getElementById(k);
if(j&&j.contentWindow){return j.contentWindow
}return null
}var c=A();
B[S]=function(){gadgets.warn("Unknown RPC service: "+this.s)
};
B[T]=function(k,j){var l=i[k];
if(l){delete i[k];
l(j)
}};
function P(l,j){if(W[l]===true){return 
}if(typeof W[l]==="undefined"){W[l]=0
}var k=document.getElementById(l);
if(l===".."||k!=null){if(c.setup(l,j)===true){W[l]=true;
return 
}}if(W[l]!==true&&W[l]++<J){window.setTimeout(function(){P(l,j)
},R)
}else{L[l]=g;
W[l]=true
}}function F(k,n){if(typeof D[k]==="undefined"){D[k]=false;
var m=gadgets.rpc.getRelayUrl(k);
if(e(m)!==e(window.location.href)){return false
}var l=I(k);
try{D[k]=l.gadgets.rpc.receiveSameDomain
}catch(j){gadgets.error("Same domain call failed: parent= incorrectly set.")
}}if(typeof D[k]==="function"){D[k](n);
return true
}return false
}function H(k,j,l){C[k]=j;
X[k]=!!l
}function Y(j){return K[j]
}function E(j,k){k=k||"";
K[j]=String(k);
P(j,k)
}function Q(j){function l(o){var q=o?o.rpc:{};
var n=q.parentRelayUrl;
if(n.substring(0,7)!=="http://"&&n.substring(0,8)!=="https://"&&n.substring(0,2)!=="//"){if(typeof f.parent==="string"&&f.parent!==""){if(n.substring(0,1)!=="/"){var m=f.parent.lastIndexOf("/");
n=f.parent.substring(0,m+1)+n
}else{n=e(f.parent)+n
}}}var p=!!q.useLegacyProtocol;
H("..",n,p);
if(p){c=gadgets.rpctx.ifpc;
c.init(U,b)
}E("..",j)
}var k={parentRelayUrl:gadgets.config.NonEmptyStringValidator};
gadgets.config.register("rpc",k,l)
}function Z(l,j){var k=j||f.parent;
if(k){H("..",k);
E("..",l)
}}function d(j,n,p){if(!gadgets.util){return 
}var m=document.getElementById(j);
if(!m){throw new Error("Cannot set up gadgets.rpc receiver with ID: "+j+", element not found.")
}var k=n||m.src;
H(j,k);
var o=gadgets.util.getUrlParameters(m.src);
var l=p||o.rpctoken;
E(j,l)
}function h(j,l,m){if(j===".."){var k=m||f.rpctoken||f.ifpctok||"";
if(window.__isgadget===true){Q(k)
}else{Z(k,l)
}}else{d(j,l,m)
}}return{register:function(k,j){if(k===T||k===G){throw new Error("Cannot overwrite callback/ack service")
}if(k===S){throw new Error("Cannot overwrite default service: use registerDefault")
}B[k]=j
},unregister:function(j){if(j===T||j===G){throw new Error("Cannot delete callback/ack service")
}if(j===S){throw new Error("Cannot delete default service: use unregisterDefault")
}delete B[j]
},registerDefault:function(j){B[S]=j
},unregisterDefault:function(){delete B[S]
},forceParentVerifiable:function(){if(!c.isParentVerifiable()){c=gadgets.rpctx.ifpc
}},call:function(j,k,p,n){j=j||"..";
var o="..";
if(j===".."){o=O
}++N;
if(p){i[N]=p
}var m={s:k,f:o,c:p?N:0,a:Array.prototype.slice.call(arguments,3),t:K[j],l:X[j]};
if(j!==".."&&!document.getElementById(j)){gadgets.log("WARNING: attempted send to nonexistent frame: "+j);
return 
}if(F(j,m)){return 
}var l=L[j]?L[j]:c;
if(!l){if(!V[j]){V[j]=[m]
}else{V[j].push(m)
}return 
}if(X[j]){l=gadgets.rpctx.ifpc
}if(l.call(j,o,m)===false){L[j]=g;
c.call(j,o,m)
}},getRelayUrl:function(k){var j=C[k];
if(j&&j.indexOf("//")==0){j=document.location.protocol+j
}return j
},setRelayUrl:H,setAuthToken:E,setupReceiver:h,getAuthToken:Y,getRelayChannel:function(){return c.getCode()
},receive:function(j){if(j.length>4){U(gadgets.json.parse(decodeURIComponent(j[j.length-1])))
}},receiveSameDomain:function(j){j.a=Array.prototype.slice.call(j.a);
window.setTimeout(function(){U(j)
},0)
},getOrigin:e,init:function(){if(c.init(U,b)===false){c=g
}if(M){h("..")
}},_getTargetWin:I,ACK:G,RPC_ID:O}
}();
gadgets.rpc.init()
};;
var friendconnect_serverBase = "http://www.google.com";var friendconnect_loginUrl = "https://www.google.com/accounts";var friendconnect_gadgetPrefix = "http://www.a.friendconnect.gmodules.com/gadgets";
var friendconnect_serverVersion = "0.537.6";
var friendconnect_imageUrl = "http://www.google.com/friendconnect/scs/images";
var friendconnect_lightbox = true;
function fca(a){throw a;}var fcb=true,fcc=null,fcd=false,fce=gadgets,fcf=undefined,fcg=friendconnect_serverBase,fch=encodeURIComponent,fcaa=parseInt,fci=String,fcj=window,fcba=setTimeout,fcca=Object,fck=document,fcl=Math;function fcda(a,b){return a.toString=b}function fcea(a,b){return a.length=b}function fcfa(a,b){return a.className=b}function fcm(a,b){return a.width=b}function fcn(a,b){return a.innerHTML=b}function fco(a,b){return a.height=b}
var fcp="appendChild",fcq="push",fcga="toString",fcr="length",fcha="propertyIsEnumerable",fcia="stringify",fc="prototype",fcja="test",fcs="width",fct="round",fcu="slice",fcv="replace",fcw="document",fcka="data",fcx="split",fcy="getElementById",fcla="offsetWidth",fcz="charAt",fcA="location",fcB="getUrlParameters",fcC="indexOf",fcma="Dialog",fcD="style",fcna="body",fcE="left",fcF="call",fcG="match",fcH="options",fcoa="random",fcI="createElement",fcpa="json",fcqa="addEventListener",fcra="bottom",fcJ=
"setAttribute",fcsa="href",fcK="util",fcta="maxHeight",fcua="type",fcL="apply",fcva="auth",fcwa="reset",fcxa="getSecurityToken",fcM="name",fcN="parentNode",fcya="display",fcO="height",fcza="offsetHeight",fcP="register",fcQ="join",fcAa="toLowerCase",fcR="right",goog=goog||{},fcS=this,fcCa=function(a,b,c){a=a[fcx](".");c=c||fcS;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a[fcr]&&(d=a.shift());)if(!a[fcr]&&fcBa(b))c[d]=b;else c=c[d]?c[d]:(c[d]={})},fcDa=function(a){var b=typeof a;
if(b=="object")if(a){if(a instanceof Array||!(a instanceof fcca)&&fcca[fc][fcga][fcF](a)=="[object Array]"||typeof a[fcr]=="number"&&typeof a.splice!="undefined"&&typeof a[fcha]!="undefined"&&!a[fcha]("splice"))return"array";if(!(a instanceof fcca)&&(fcca[fc][fcga][fcF](a)=="[object Function]"||typeof a[fcF]!="undefined"&&typeof a[fcha]!="undefined"&&!a[fcha]("call")))return"function"}else return"null";else if(b=="function"&&typeof a[fcF]=="undefined")return"object";return b},fcBa=function(a){return a!==
fcf},fcEa=function(a){var b=fcDa(a);return b=="array"||b=="object"&&typeof a[fcr]=="number"},fcT=function(a){return typeof a=="string"},fcFa=function(a){a=fcDa(a);return a=="object"||a=="array"||a=="function"};"closure_hashCode_"+fcl.floor(fcl[fcoa]()*2147483648)[fcga](36);
var fcU=function(a){var b=fcDa(a);if(b=="object"||b=="array"){if(a.clone)return a.clone[fcF](a);b=b=="array"?[]:{};for(var c in a)b[c]=fcU(a[c]);return b}return a},fcV=function(a,b){var c=b||fcS;if(arguments[fcr]>2){var d=Array[fc][fcu][fcF](arguments,2);return function(){var e=Array[fc][fcu][fcF](arguments);Array[fc].unshift[fcL](e,d);return a[fcL](c,e)}}else return function(){return a[fcL](c,arguments)}},fcGa=function(a){var b=Array[fc][fcu][fcF](arguments,1);return function(){var c=Array[fc][fcu][fcF](arguments);
c.unshift[fcL](c,b);return a[fcL](this,c)}},fcHa=function(a,b){for(var c in b)a[c]=b[c]},fcIa=Date.now||function(){return+new Date},fcW=function(a,b,c){fcCa(a,b,c)},fcX=function(a,b){function c(){}c.prototype=b[fc];a.Jc=b[fc];a.prototype=new c;a[fc].constructor=a};SHA1=function(){this.c=new Array(5);this.ba=new Array(64);this.Ac=new Array(80);this.qa=new Array(64);this.qa[0]=128;for(var a=1;a<64;++a)this.qa[a]=0;this[fcwa]()};SHA1[fc].reset=function(){this.c[0]=1732584193;this.c[1]=4023233417;this.c[2]=2562383102;this.c[3]=271733878;this.c[4]=3285377520;this.wa=this.z=0};SHA1[fc].va=function(a,b){return(a<<b|a>>>32-b)&4294967295};
SHA1[fc].L=function(a){for(var b=this.Ac,c=0;c<64;c+=4){var d=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];b[c/4]=d}for(c=16;c<80;++c)b[c]=this.va(b[c-3]^b[c-8]^b[c-14]^b[c-16],1);a=this.c[0];d=this.c[1];var e=this.c[2],i=this.c[3],h=this.c[4],j,k;for(c=0;c<80;++c){if(c<40)if(c<20){j=i^d&(e^i);k=1518500249}else{j=d^e^i;k=1859775393}else if(c<60){j=d&e|i&(d|e);k=2400959708}else{j=d^e^i;k=3395469782}j=this.va(a,5)+j+h+k+b[c]&4294967295;h=i;i=e;e=this.va(d,30);d=a;a=j}this.c[0]=this.c[0]+a&4294967295;this.c[1]=
this.c[1]+d&4294967295;this.c[2]=this.c[2]+e&4294967295;this.c[3]=this.c[3]+i&4294967295;this.c[4]=this.c[4]+h&4294967295};SHA1[fc].update=function(a,b){if(!b)b=a[fcr];var c=0;if(this.z==0)for(;c+64<b;){this.L(a[fcu](c,c+64));c+=64;this.wa+=64}for(;c<b;){this.ba[this.z++]=a[c++];++this.wa;if(this.z==64){this.z=0;for(this.L(this.ba);c+64<b;){this.L(a[fcu](c,c+64));c+=64;this.wa+=64}}}};
SHA1[fc].digest=function(){var a=new Array(20),b=this.wa*8;this.z<56?this.update(this.qa,56-this.z):this.update(this.qa,64-(this.z-56));for(var c=63;c>=56;--c){this.ba[c]=b&255;b>>>=8}this.L(this.ba);for(c=b=0;c<5;++c)for(var d=24;d>=0;d-=8)a[b++]=this.c[c]>>d&255;return a};G_HMAC=function(a,b,c){if(!a||typeof a!="object"||!a[fcwa]||!a.update||!a.digest)fca(new Error("Invalid hasher object. Hasher unspecified or does not implement expected interface."));if(b.constructor!=Array)fca(new Error("Invalid key."));if(c&&typeof c!="number")fca(new Error("Invalid block size."));this.k=a;this.aa=c||16;this.Qb=new Array(this.aa);this.Pb=new Array(this.aa);if(b[fcr]>this.aa){this.k.update(b);b=this.k.digest()}for(c=0;c<this.aa;c++){a=c<b[fcr]?b[c]:0;this.Qb[c]=a^G_HMAC.OPAD;this.Pb[c]=
a^G_HMAC.IPAD}};G_HMAC.OPAD=92;G_HMAC.IPAD=54;G_HMAC[fc].reset=function(){this.k[fcwa]();this.k.update(this.Pb)};G_HMAC[fc].update=function(a){if(a.constructor!=Array)fca(new Error("Invalid data. Data must be an array."));this.k.update(a)};G_HMAC[fc].digest=function(){var a=this.k.digest();this.k[fcwa]();this.k.update(this.Qb);this.k.update(a);return this.k.digest()};G_HMAC[fc].Eb=function(a){this[fcwa]();this.update(a);return this.digest()};var fcJa=function(a){for(var b=[],c=0,d=0;d<a[fcr];d++){for(var e=a.charCodeAt(d);e>255;){b[c++]=e&255;e>>=8}b[c++]=e}return b};var fcKa=fcc,fcLa=fcc,fcMa=fcc,fcNa=fcc,fcPa=function(a,b){if(!fcEa(a))fca(Error("encodeByteArray takes an array as a parameter"));fcOa();b=b?fcMa:fcKa;for(var c=[],d=0;d<a[fcr];d+=3){var e=a[d],i=d+1<a[fcr],h=i?a[d+1]:0,j=d+2<a[fcr],k=j?a[d+2]:0,l=e>>2;e=(e&3)<<4|h>>4;h=(h&15)<<2|k>>6;k=k&63;if(!j){k=64;i||(h=64)}c[fcq](b[l],b[e],b[h],b[k])}return c[fcQ]("")},fcQa=function(a,b){if(a[fcr]%4)fca(Error("Length of b64-encoded data must be zero mod four"));fcOa();b=b?fcNa:fcLa;for(var c=[],d=0;d<a[fcr];d+=
4){var e=b[a[fcz](d)],i=b[a[fcz](d+1)],h=b[a[fcz](d+2)],j=b[a[fcz](d+3)];if(e==fcc||i==fcc||h==fcc||j==fcc)fca(Error());e=e<<2|i>>4;c[fcq](e);if(h!=64){i=i<<4&240|h>>2;c[fcq](i);if(j!=64){h=h<<6&192|j;c[fcq](h)}}}return c},fcOa=function(){if(!fcKa){fcKa={};fcLa={};fcMa={};fcNa={};for(var a=0;a<65;a++){fcKa[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[fcz](a);fcLa[fcKa[a]]=a;fcMa[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[fcz](a);fcNa[fcMa[a]]=
a}}};var fcRa=function(a){return a[fcv](/^[\s\xa0]+|[\s\xa0]+$/g,"")},fcSa=function(a,b){a=fci(a)[fcAa]();b=fci(b)[fcAa]();return a<b?-1:a==b?0:1},fcYa=function(a,b){if(b)return a[fcv](fcTa,"&amp;")[fcv](fcUa,"&lt;")[fcv](fcVa,"&gt;")[fcv](fcWa,"&quot;");else{if(!fcXa[fcja](a))return a;if(a[fcC]("&")!=-1)a=a[fcv](fcTa,"&amp;");if(a[fcC]("<")!=-1)a=a[fcv](fcUa,"&lt;");if(a[fcC](">")!=-1)a=a[fcv](fcVa,"&gt;");if(a[fcC]('"')!=-1)a=a[fcv](fcWa,"&quot;");return a}},fcTa=/&/g,fcUa=/</g,fcVa=/>/g,fcWa=/\"/g,
fcXa=/[&<>\"]/,fc_a=function(a,b){var c=0;a=fcRa(fci(a))[fcx](".");b=fcRa(fci(b))[fcx](".");for(var d=fcl.max(a[fcr],b[fcr]),e=0;c==0&&e<d;e++){var i=a[e]||"",h=b[e]||"",j=new RegExp("(\\d*)(\\D*)","g"),k=new RegExp("(\\d*)(\\D*)","g");do{var l=j.exec(i)||["","",""],f=k.exec(h)||["","",""];if(l[0][fcr]==0&&f[0][fcr]==0)break;c=l[1][fcr]==0?0:fcaa(l[1],10);var g=f[1][fcr]==0?0:fcaa(f[1],10);c=fcZa(c,g)||fcZa(l[2][fcr]==0,f[2][fcr]==0)||fcZa(l[2],f[2])}while(c==0)}return c},fcZa=function(a,b){if(a<
b)return-1;else if(a>b)return 1;return 0};fcIa();var fc0a,fc1a,fc2a,fc3a,fc4a,fc5a,fc6a,fc7a,fc8a,fc9a=function(){return fcS.navigator?fcS.navigator.userAgent:fcc},fc$a=function(){return fcS.navigator},fcab=function(){fc4a=fc3a=fc2a=fc1a=fc0a=fcd;var a;if(a=fc9a()){var b=fc$a();fc0a=a[fcC]("Opera")==0;fc1a=!fc0a&&a[fcC]("MSIE")!=-1;fc3a=(fc2a=!fc0a&&a[fcC]("WebKit")!=-1)&&a[fcC]("Mobile")!=-1;fc4a=!fc0a&&!fc2a&&b.product=="Gecko"}};fcab();
var fcbb=fc0a,fcY=fc1a,fccb=fc4a,fcdb=fc2a,fceb=fc3a,fcfb=function(){var a=fc$a();return a&&a.platform||""},fcgb=fcfb(),fchb=function(){fc5a=fcgb[fcC]("Mac")!=-1;fc6a=fcgb[fcC]("Win")!=-1;fc7a=fcgb[fcC]("Linux")!=-1;fc8a=!!fc$a()&&(fc$a().appVersion||"")[fcC]("X11")!=-1};fchb();
var fcib=function(){var a="",b;if(fcbb&&fcS.opera){a=fcS.opera.version;a=typeof a=="function"?a():a}else{if(fccb)b=/rv\:([^\);]+)(\)|;)/;else if(fcY)b=/MSIE\s+([^\);]+)(\)|;)/;else if(fcdb)b=/WebKit\/(\S+)/;if(b)a=(a=b.exec(fc9a()))?a[1]:""}return a},fcjb=fcib(),fckb={},fclb=function(a){return fckb[a]||(fckb[a]=fc_a(fcjb,a)>=0)};var fcmb=/\s*;\s*/,fcnb=function(a,b,c,d,e){if(/[;=]/[fcja](a))fca(Error('Invalid cookie name "'+a+'"'));if(/;/[fcja](b))fca(Error('Invalid cookie value "'+b+'"'));fcBa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";if(c<0)c="";else if(c==0){c=new Date(1970,1,1);c=";expires="+c.toUTCString()}else{c=new Date((new Date).getTime()+c*1E3);c=";expires="+c.toUTCString()}fck.cookie=a+"="+b+e+d+c},fcob=function(a,b){a=a+"=";for(var c=fci(fck.cookie)[fcx](fcmb),d=0,e;e=c[d];d++)if(e[fcC](a)==0)return e.substr(a[fcr]);
return b},fcpb=function(a,b,c){var d=fcBa(fcob(a));fcnb(a,"",0,b,c);return d};var fcZ=Array[fc],fcqb=fcZ[fcC]?function(a,b,c){return fcZ[fcC][fcF](a,b,c)}:function(a,b,c){c=c==fcc?0:c<0?fcl.max(0,a[fcr]+c):c;if(fcT(a)){if(!fcT(b)||b[fcr]!=1)return-1;return a[fcC](b,c)}for(c=c;c<a[fcr];c++)if(c in a&&a[c]===b)return c;return-1},fcrb=fcZ.forEach?function(a,b,c){fcZ.forEach[fcF](a,b,c)}:function(a,b,c){for(var d=a[fcr],e=fcT(a)?a[fcx](""):a,i=0;i<d;i++)i in e&&b[fcF](c,e[i],i,a)},fcsb=function(a,b){return fcqb(a,b)>=0},fctb=function(){return fcZ.concat[fcL](fcZ,arguments)},fcub=
function(a){if(fcDa(a)=="array")return fctb(a);else{for(var b=[],c=0,d=a[fcr];c<d;c++)b[c]=a[c];return b}},fcvb=function(a,b,c){return arguments[fcr]<=2?fcZ[fcu][fcF](a,b):fcZ[fcu][fcF](a,b,c)};var fcwb=function(a,b){this.x=fcBa(a)?a:0;this.y=fcBa(b)?b:0};fcwb[fc].clone=function(){return new fcwb(this.x,this.y)};fcda(fcwb[fc],function(){return"("+this.x+", "+this.y+")"});var fc_=function(a,b){fcm(this,a);fco(this,b)};fc_[fc].clone=function(){return new fc_(this[fcs],this[fcO])};fcda(fc_[fc],function(){return"("+this[fcs]+" x "+this[fcO]+")"});fc_[fc].ceil=function(){fcm(this,fcl.ceil(this[fcs]));fco(this,fcl.ceil(this[fcO]));return this};fc_[fc].floor=function(){fcm(this,fcl.floor(this[fcs]));fco(this,fcl.floor(this[fcO]));return this};fc_[fc].round=function(){fcm(this,fcl[fct](this[fcs]));fco(this,fcl[fct](this[fcO]));return this};
fc_[fc].scale=function(a){this.width*=a;this.height*=a;return this};var fcxb=function(a,b,c){for(var d in a)b[fcF](c,a[d],d,a)},fcyb=function(a){var b=[],c=0;for(var d in a)b[c++]=a[d];return b},fczb=function(a){var b=[],c=0;for(var d in a)b[c++]=d;return b},fcAb=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],fcBb=function(a){for(var b,c,d=1;d<arguments[fcr];d++){c=arguments[d];for(b in c)a[b]=c[b];for(var e=0;e<fcAb[fcr];e++){b=fcAb[e];if(fcca[fc].hasOwnProperty[fcF](c,b))a[b]=c[b]}}};var fcCb=function(a){return(a=a.className)&&typeof a[fcx]=="function"?a[fcx](/\s+/):[]},fcEb=function(a){var b=fcCb(a),c=fcvb(arguments,1);c=fcDb(b,c);fcfa(a,b[fcQ](" "));return c},fcDb=function(a,b){for(var c=0,d=0;d<b[fcr];d++)if(!fcsb(a,b[d])){a[fcq](b[d]);c++}return c==b[fcr]};var fcFb=function(a){return fcT(a)?fck[fcy](a):a},fcGb=fcFb,fcHb=function(a,b,c,d){d=d||a;b=b&&b!="*"?b.toUpperCase():"";if(d.querySelectorAll&&(b||c)&&(!fcdb||a.compatMode=="CSS1Compat"||fclb("528"))){c=b+(c?"."+c:"");return d.querySelectorAll(c)}if(c&&d.getElementsByClassName){a=d.getElementsByClassName(c);if(b){d={};for(var e=0,i=0,h;h=a[i];i++)if(b==h.nodeName)d[e++]=h;fcea(d,e);return d}else return a}a=d.getElementsByTagName(b||"*");if(c){d={};for(i=e=0;h=a[i];i++){b=h.className;if(typeof b[fcx]==
"function"&&fcsb(b[fcx](/\s+/),c))d[e++]=h}fcea(d,e);return d}else return a},fcJb=function(a,b){fcxb(b,function(c,d){if(d=="style")a[fcD].cssText=c;else if(d=="class")fcfa(a,c);else if(d=="for")a.htmlFor=c;else if(d in fcIb)a[fcJ](fcIb[d],c);else a[d]=c})},fcIb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",type:"type"},fcKb=function(a){var b=a[fcw];if(fcdb&&!fclb("500")&&
!fceb){if(typeof a.innerHeight=="undefined")a=fcj;b=a.innerHeight;var c=a[fcw].documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;return new fc_(a.innerWidth,b)}a=b.compatMode=="CSS1Compat"&&(!fcbb||fcbb&&fclb("9.50"))?b.documentElement:b[fcna];return new fc_(a.clientWidth,a.clientHeight)},fc0=function(){return fcLb(fck,arguments)},fcLb=function(a,b){var c=b[0],d=b[1];if(fcY&&d&&(d[fcM]||d[fcua])){c=["<",c];d[fcM]&&c[fcq](' name="',fcYa(d[fcM]),'"');if(d[fcua]){c[fcq](' type="',fcYa(d[fcua]),'"');
d=fcU(d);delete d[fcua]}c[fcq](">");c=c[fcQ]("")}var e=a[fcI](c);if(d)if(fcT(d))fcfa(e,d);else fcJb(e,d);if(b[fcr]>2){d=function(h){if(h)e[fcp](fcT(h)?a.createTextNode(h):h)};for(c=2;c<b[fcr];c++){var i=b[c];fcEa(i)&&!(fcFa(i)&&i.nodeType>0)?fcrb(fcMb(i)?fcub(i):i,d):d(i)}}return e},fcNb=function(a,b){a[fcp](b)},fcOb=function(a){return a&&a[fcN]?a[fcN].removeChild(a):fcc},fcPb=function(a,b){var c=b[fcN];c&&c.replaceChild(a,b)},fcQb=function(a,b){if(a.contains&&b.nodeType==1)return a==b||a.contains(b);
if(typeof a.compareDocumentPosition!="undefined")return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b[fcN];return b==a},fcMb=function(a){if(a&&typeof a[fcr]=="number")if(fcFa(a))return typeof a.item=="function"||typeof a.item=="string";else if(fcDa(a)=="function")return typeof a.item=="function";return fcd},fcRb=function(a){this.sb=a||fcS[fcw]||fck};fcRb[fc].createElement=function(a){return this.sb[fcI](a)};fcRb[fc].createTextNode=function(a){return this.sb.createTextNode(a)};
fcRb[fc].appendChild=fcNb;fcRb[fc].removeNode=fcOb;fcRb[fc].replaceNode=fcPb;fcRb[fc].contains=fcQb;var fcSb="StopIteration"in fcS?fcS.StopIteration:Error("StopIteration"),fcTb=function(){};fcTb[fc].next=function(){fca(fcSb)};fcTb[fc].__iterator__=function(){return this};var fc1=function(a){this.i={};this.e=[];var b=arguments[fcr];if(b>1){if(b%2)fca(Error("Uneven number of arguments"));for(var c=0;c<b;c+=2)this.set(arguments[c],arguments[c+1])}else a&&this.ib(a)};fc1[fc].q=0;fc1[fc].J=0;fc1[fc].Ja=function(){return this.q};fc1[fc].ja=function(){this.K();for(var a=[],b=0;b<this.e[fcr];b++){var c=this.e[b];a[fcq](this.i[c])}return a};fc1[fc].P=function(){this.K();return this.e.concat()};fc1[fc].pb=function(a){return fcUb(this.i,a)};
fc1[fc].clear=function(){this.i={};fcea(this.e,0);this.J=this.q=0};fc1[fc].remove=function(a){if(fcUb(this.i,a)){delete this.i[a];this.q--;this.J++;this.e[fcr]>2*this.q&&this.K();return fcb}return fcd};fc1[fc].K=function(){if(this.q!=this.e[fcr]){for(var a=0,b=0;a<this.e[fcr];){var c=this.e[a];if(fcUb(this.i,c))this.e[b++]=c;a++}fcea(this.e,b)}if(this.q!=this.e[fcr]){var d={};for(b=a=0;a<this.e[fcr];){c=this.e[a];if(!fcUb(d,c)){this.e[b++]=c;d[c]=1}a++}fcea(this.e,b)}};
fc1[fc].get=function(a,b){if(fcUb(this.i,a))return this.i[a];return b};fc1[fc].set=function(a,b){if(!fcUb(this.i,a)){this.q++;this.e[fcq](a);this.J++}this.i[a]=b};fc1[fc].ib=function(a){var b;if(a instanceof fc1){b=a.P();a=a.ja()}else{b=fczb(a);a=fcyb(a)}for(var c=0;c<b[fcr];c++)this.set(b[c],a[c])};fc1[fc].clone=function(){return new fc1(this)};
fc1[fc].__iterator__=function(a){this.K();var b=0,c=this.e,d=this.i,e=this.J,i=this,h=new fcTb;h.next=function(){for(;;){if(e!=i.J)fca(Error("The map has changed since the iterator was created"));if(b>=c[fcr])fca(fcSb);var j=c[b++];return a?j:d[j]}};return h};var fcUb=function(a,b){return fcca[fc].hasOwnProperty[fcF](a,b)};var fcVb=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};fcVb[fc].clone=function(){return new fcVb(this.top,this[fcR],this[fcra],this[fcE])};fcda(fcVb[fc],function(){return"("+this.top+"t, "+this[fcR]+"r, "+this[fcra]+"b, "+this[fcE]+"l)"});fcVb[fc].contains=function(a){return fcWb(this,a)};fcVb[fc].expand=function(a,b,c,d){if(fcFa(a)){this.top-=a.top;this.right+=a[fcR];this.bottom+=a[fcra];this.left-=a[fcE]}else{this.top-=a;this.right+=b;this.bottom+=c;this.left-=d}return this};
var fcWb=function(a,b){if(!a||!b)return fcd;if(b instanceof fcVb)return b[fcE]>=a[fcE]&&b[fcR]<=a[fcR]&&b.top>=a.top&&b[fcra]<=a[fcra];return b.x>=a[fcE]&&b.x<=a[fcR]&&b.y>=a.top&&b.y<=a[fcra]};var fcXb=function(a,b,c,d){this.left=a;this.top=b;fcm(this,c);fco(this,d)};fcXb[fc].clone=function(){return new fcXb(this[fcE],this.top,this[fcs],this[fcO])};fcda(fcXb[fc],function(){return"("+this[fcE]+", "+this.top+" - "+this[fcs]+"w x "+this[fcO]+"h)"});fcXb[fc].contains=function(a){return a instanceof fcXb?this[fcE]<=a[fcE]&&this[fcE]+this[fcs]>=a[fcE]+a[fcs]&&this.top<=a.top&&this.top+this[fcO]>=a.top+a[fcO]:a.x>=this[fcE]&&a.x<=this[fcE]+this[fcs]&&a.y>=this.top&&a.y<=this.top+this[fcO]};var fcZb=function(a,b,c){fcT(b)?fcYb(a,c,b):fcxb(b,fcGa(fcYb,a))},fcYb=function(a,b,c){a[fcD][fc_b(c)]=b},fc0b=function(a,b){var c=a.nodeType==9?a:a.ownerDocument||a[fcw];if(c.defaultView&&c.defaultView.getComputedStyle)if(a=c.defaultView.getComputedStyle(a,""))return a[b];return fcc},fc1b=function(a,b,c){if(b instanceof fc_){c=b[fcO];b=b[fcs]}else{if(c==fcf)fca(Error("missing height argument"));c=c}fcm(a[fcD],typeof b=="number"?fcl[fct](b)+"px":b);fco(a[fcD],typeof c=="number"?fcl[fct](c)+"px":c)},
fc2b=function(a){var b=fcbb&&!fclb("10");if((fc0b(a,"display")||(a.currentStyle?a.currentStyle[fcya]:fcc)||a[fcD][fcya])!="none")return b?new fc_(a[fcla]||a.clientWidth,a[fcza]||a.clientHeight):new fc_(a[fcla],a[fcza]);var c=a[fcD],d=c[fcya],e=c.visibility,i=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";if(b){b=a[fcla]||a.clientWidth;a=a[fcza]||a.clientHeight}else{b=a[fcla];a=a[fcza]}c.display=d;c.position=i;c.visibility=e;return new fc_(b,a)},fc3b={},fc_b=function(a){return fc3b[a]||
(fc3b[a]=fci(a)[fcv](/\-([a-z])/g,function(b,c){return c.toUpperCase()}))},fc4b=function(a,b){a[fcD].display=b?"":"none"};var fc5b={},fc6b={};var fc7b=function(a,b,c,d){b=b||"800";c=c||"550";d=d||"friendconnect";a=fcj.open(a,d,"menubar=no,toolbar=no,dialog=yes,location=yes,alwaysRaised=yes,width="+b+",height="+c+",resizable=yes,scrollbars=1,status=1");fcj.focus&&a&&a.focus()},fc8b=function(a,b){var c=fce[fcK][fcB]().communityId;fce.rpc[fcF](fcc,"signin",fcc,c,a,b)};fcW("goog.peoplesense.util.openPopup",fc7b);fcW("goog.peoplesense.util.finishSignIn",fc8b);var fcac=function(a,b){var c=fc9b()+"/friendconnect/invite/friends",d=fch(shindig[fcva][fcxa]());fc$b(c,d,a,b)},fc$b=function(a,b,c,d){a+="?st="+b;if(c)a+="&customMessage="+fch(c);if(d)a+="&customInviteUrl="+fch(d);b=760;if(fcY)b+=25;fc7b(a,fci(b),"515","friendconnect_invite")};fcW("goog.peoplesense.util.invite",fcac);fcW("goog.peoplesense.util.inviteFriends",fc$b);var fcbc=function(a){this.url=a};fcbc[fc].l=function(a,b){if(this.url[fcC]("?"+a+"=")>=0||this.url[fcC]("&"+a+"=")>=0)fca(new Error("duplicate: "+a));if(b===fcc||b===fcf)return this;var c=this.url[fcC]("?")>=0?"&":"?";this.url+=c+a+"="+fch(b);return this};fcda(fcbc[fc],function(){return this.url});var fc9b=function(){return fcj.friendconnect_serverBase},fccc=function(a,b,c,d,e,i,h){b=b||"800";c=c||"550";d=d||"friendconnect";i=i||fcd;fce.rpc[fcF](fcc,"openLightboxIframe",h,a,shindig[fcva][fcxa](),b,c,d,e,fcc,fcc,fcc,i)},fcdc=function(a,b){var c=fce[fcK][fcB]().psinvite||"",d=new fcbc(fc9b()+"/friendconnect/signin/home");d.l("st",fcj.shindig[fcva][fcxa]());d.l("psinvite",c);d.l("iframeId",a);d.l("loginProvider",b);d.l("subscribeOnSignin","1");fc7b(d[fcga]());return fcd},fcec=function(){var a=
fce[fcK][fcB]().communityId;fce.rpc[fcF](fcc,"signout",fcc,a)},fcgc=function(a,b){a=fc9b()+"/friendconnect/settings/edit?st="+fch(shindig[fcva][fcxa]())+(a?"&iframeId="+fch(a):"");if(b)a=a+"&"+b;fcfc(a)},fchc=function(a){a=fc9b()+"/friendconnect/settings/siteProfile?st="+fch(a);fcfc(a)},fcfc=function(a){var b=800,c=510;if(fcY)b+=25;fc7b(a,fci(b),fci(c))},fcic=function(a,b,c,d){d=d||2;var e=fcc;if(b=="text"){e=fc0("div",{"class":"gfc-button-text"},fc0("div",{"class":"gfc-icon"},fc0("a",{href:"javascript:void(0);"},
c)));a[fcp](e)}else if(b=="long"||b=="standard"){e=d==1?fc0("div",{"class":"gfc-inline-block gfc-primaryactionbutton gfc-button-base"},fc0("div",{"class":"gfc-inline-block gfc-button-base-outer-box"},fc0("div",{"class":"gfc-inline-block gfc-button-base-inner-box"},fc0("div",{"class":"gfc-button-base-pos"},fc0("div",{"class":"gfc-button-base-top-shadow",innerHTML:"&nbsp;"}),fc0("div",{"class":"gfc-button-base-content"},fc0("div",{"class":"gfc-icon"},c)))))):fc0("table",{"class":"gfc-button-base-v2 gfc-button",
cellpadding:"0",cellspacing:"0"},fc0("tbody",{"class":""},fc0("tr",{"class":""},fc0("td",{"class":"gfc-button-base-v2 gfc-button-1"}),fc0("td",{"class":"gfc-button-base-v2 gfc-button-2"},c),fc0("td",{"class":"gfc-button-base-v2 gfc-button-3"}))));a[fcp](e);if(b=="standard"){b=fc0("div",{"class":"gfc-footer-msg"},"with Google Friend Connect");d==1&&a[fcp](fc0("br"));a[fcp](b)}}return e},fcjc=function(a,b){if(!a)fca("google.friendconnect.renderSignInButton: missing options");var c=a[fcD]||"standard",
d=a.text,e=a.version;if(c=="standard")d=a.text||"Sign in";else if(c=="text"||c=="long")d=a.text||"Sign in with Friend Connect";var i=a.element;if(!i){i=a.id;if(!i)fca("google.friendconnect.renderSignInButton: options[id] and options[element] == null");i=fcGb(i);if(!i)fca("google.friendconnect.renderSignInButton: element "+a.id+" not found")}fcn(i,"");a=fcic(i,c,d,e);fcj[fcqa]?a[fcqa]("click",b,fcd):a.attachEvent("onclick",b)},fckc=function(a,b){b=b||fcV(fcdc,fcc,fcc,fcc,fcc);fcjc(a,b)},fclc=function(a,
b){fce.rpc[fcF](fcc,"putReloadViewParam",fcc,a,b);var c=fce.views.getParams();c[a]=b},fcmc=function(a,b){var c=new fcbc("/friendconnect/gadgetshare/friends");c.l("customMessage",a);c.l("customInviteUrl",b);c.l("container","glb");a=310;if(fcY)a+=25;fccc(c[fcga](),fci(a),"370")};fcW("goog.peoplesense.util.getBaseUrl",fc9b);fcW("goog.peoplesense.util.finishSignIn",fc8b);fcW("goog.peoplesense.util.signout",fcec);fcW("goog.peoplesense.util.signin",fcdc);fcW("goog.peoplesense.util.editSettings",fcgc);
fcW("goog.peoplesense.util.editSSProfile",fchc);fcW("goog.peoplesense.util.setStickyViewParamToken",fclc);fcW("google.friendconnect.renderSignInButton",fckc);fcW("goog.peoplesense.util.share",fcmc);fcW("goog.peoplesense.util.userAgent.IE",fcY);var fcnc={},fcoc={},fc2=function(a){this.h=new fc1;this.snippetId=a.id;this.site=a.site;a=a["view-params"];var b=a.skin;this.ac=(b?b.POSITION:"top")||"top";this.Bc={allowAnonymousPost:a.allowAnonymousPost||fcd,scope:a.scope||"SITE",docId:a.docId||"",features:a.features||"video,comment",startMaximized:"true",disableMinMax:"true",skin:b};this.absoluteBottom=fcY&&!fclb("7");this.fixedIeSizes=fcY;fcj[fcqa]?fcj[fcqa]("resize",fcV(this.Za,this),fcd):fcj.attachEvent("onresize",fcV(this.Za,this));this.nb()};
fc2[fc].nb=function(){if(!this.site)fca(new Error("Must supply site ID."));if(!this.snippetId)fca(new Error("Must supply a snippet ID."))};fc2[fc].b=10;fc2[fc].za=1;fc2[fc].p="fc-friendbar-";fc2[fc].t=fc2[fc].p+"outer";fc2[fc].bb=fc2[fc].t+"-shadow";fc2[fc].render=function(){fck.write(this.wb());var a=fcFb(this.snippetId);fcn(a,this.N())};fc2[fc].xb=function(){var a=fcFb(this.t);return a=fc2b(a)[fcs]};
fc2[fc].Za=function(){for(var a=this.h.P(),b=0;b<a[fcr];b++)this.mc(a[b]);goog&&fc5b&&fc6b&&fcpc&&fcqc("resize")};fc2[fc].n=function(){return this.ac};fc2[fc].d=function(a){return this.p+"shadow-"+a};fc2[fc].ha=function(a){return this.p+"menus-"+a};fc2[fc].Q=function(a){return this.p+a+"Target"};fc2[fc].fa=function(a){return this.p+a+"Drawer"};fc2[fc].Oa=function(){return this.Q("")};fc2[fc].Pa=function(){return this.p+"wallpaper"};fc2[fc].Ka=function(){return this.fa("")};
fc2[fc].wb=function(){var a=fcj.friendconnect_imageUrl+"/",b=a+"shadow_tc.png",c=a+"shadow_bc.png",d=a+"shadow_bl.png",e=a+"shadow_tl.png",i=a+"shadow_tr.png",h=a+"shadow_br.png";a=a+"shadow_cr.png";var j=function(m,r){return fcY?'filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+m+'", sizingMethod="scale");':"background-image: url("+m+");background-repeat: "+r+"; "},k="position:absolute; top:";if(this.n()!="top"){k="position:fixed; bottom:";if(this.absoluteBottom)k="position:absolute; bottom:"}var l=
c;if(this.n()!="top")l=b;var f=0,g=[];g[f++]='<style type="text/css">';if(this.n()!="top"&&this.absoluteBottom)g[f++]="html, body {height: 100%; overflow: auto; };";g[f++]="#"+this.t+" {";g[f++]="background:#E0ECFF;";g[f++]="left:0;";g[f++]="height: "+(fcY?"35px;":"36px;");if(this.n()!="top"&&this.absoluteBottom)g[f++]="margin-right: 20px;";g[f++]="padding:0;";g[f++]=k+" 0;";g[f++]="width:100%;";g[f++]="z-index:5000;";g[f++]="}";g[f++]="#"+this.bb+" {";g[f++]=j(l,"repeat-x");g[f++]="left:0;";g[f++]=
"height:"+this.b+"px;";if(this.n()!="top"&&this.absoluteBottom)g[f++]="margin-right: 20px;";g[f++]="padding:0;";g[f++]=k+(fcY?"35px;":"36px;");g[f++]="width:100%;";g[f++]="z-index:4998;";g[f++]="}";g[f++]="."+this.Ka()+" {";g[f++]="display: block;";g[f++]="padding:0;";g[f++]=k+(fcY?"34px;":"35px;");g[f++]="z-index:4999;";g[f++]="}";g[f++]="."+this.Pa()+" {";g[f++]="background: white;";g[f++]="height: 100%;";g[f++]="margin-right: "+this.b+"px;";g[f++]="}";g[f++]="."+this.Oa()+" {";g[f++]="border: "+
this.za+"px solid #ccc;";g[f++]="height: 100%;";g[f++]="left: 0;";g[f++]="background-image: url("+fcj.friendconnect_imageUrl+"/loading.gif);";g[f++]="background-position: center;";g[f++]="background-repeat: no-repeat;";g[f++]="}";g[f++]="."+this.d("cr")+" {";g[f++]=j(a,"repeat-y");g[f++]="height: 100%;";g[f++]="position:absolute;";g[f++]="right: 0;";g[f++]="top: 0;";g[f++]="width:"+this.b+"px;";g[f++]="}";g[f++]="."+this.d("bl")+" {";g[f++]=j(d,"no-repeat");g[f++]="height: "+this.b+"px;";g[f++]="position:absolute;";
g[f++]="width:"+this.b+"px;";g[f++]="}";g[f++]="."+this.d("tl")+" {";g[f++]=j(e,"no-repeat");g[f++]="height: "+this.b+"px;";g[f++]="position:absolute;";g[f++]="left:0px;";g[f++]="width:"+this.b+"px;";g[f++]="}";g[f++]="."+this.d("bc")+" {";g[f++]=j(c,"repeat-x");g[f++]="height: "+this.b+"px;";g[f++]="left: "+this.b+"px;";g[f++]="position:absolute;";g[f++]="right: "+this.b+"px;";g[f++]="}";g[f++]="."+this.d("tc")+" {";g[f++]=j(b,"repeat-x");g[f++]="height: "+this.b+"px;";g[f++]="left: "+this.b+"px;";
g[f++]="margin-left: "+this.b+"px;";g[f++]="margin-right: "+this.b+"px;";g[f++]="right: "+this.b+"px;";g[f++]="}";g[f++]="."+this.d("br")+" {";g[f++]=j(h,"no-repeat");g[f++]="height: "+this.b+"px;";g[f++]="position:absolute;";g[f++]="right: 0;";g[f++]="width: "+this.b+"px;";g[f++]="}";g[f++]="."+this.d("tr")+" {";g[f++]=j(i,"no-repeat");g[f++]="height: "+this.b+"px;";g[f++]="position:absolute;";g[f++]="right: 0;";g[f++]="top: 0;";g[f++]="width: "+this.b+"px;";g[f++]="}";g[f++]="</style>";return g[fcQ]("")};
fc2[fc].N=function(){var a=['<div id="'+this.t+'"></div>','<div id="'+this.bb+'"></div>','<div id="'+this.ha(this.h.Ja())+'"></div>'];return a[fcQ]("")};fc2[fc].qb=function(a,b,c,d){if(!this.h.pb(a)){b=new fc3(this,a,b,c,d);c=this.h.Ja();d=fcFb(this.ha(c));fcn(d,b.N()+'<div id="'+this.ha(c+1)+'"></div>');this.h.set(a,b)}};fc2[fc].la=function(a){(a=this.h.get(a))&&a.drawer&&fc4b(a.drawer,fcd)};fc2[fc].cc=function(a){if(a=this.h.get(a))a.rendered=fcd};
fc2[fc].refresh=function(){for(var a=this.h.P(),b=0;b<a[fcr];b++){var c=a[b];this.la(c);this.cc(c)}};fc2[fc].Xb=function(a){for(var b=this.h.ja(),c=0;c<b[fcr];c++){var d=b[c];if(d.id==a){d.yc();break}}};fc2[fc].Wb=function(a){for(var b=this.h.ja(),c=0;c<b[fcr];c++){var d=b[c];if(d.id==a){d.Tb();break}}};fc2[fc].mc=function(a){if((a=this.h.get(a))&&a.drawer&&a.na()){a.da();a.Ga();a.ya()}};
fc2[fc].xc=function(a,b){var c=this.h.get(a);if(c){if(!c.drawer){c.drawer=fcFb(this.fa(c[fcM]));c.target=fcFb(this.Q(c[fcM]));c.sha_bc=fcHb(fck,"div",this.n()=="top"?this.d("bc"):this.d("tc"),c.drawer)[0];c.sha_cr=fcHb(fck,"div",this.d("cr"),c.drawer)[0]}for(var d=this.h.P(),e=0;e<d[fcr];e++){var i=d[e];a!==i&&this.la(i)}c.da(b);fc4b(c.drawer,fcb);fcj.setTimeout(function(){c.ya();c.Ga();c.render()},0)}};
var fc3=function(a,b,c,d,e){this.id=-1;this.bar=a;this.name=b;this.constraints=d;this.skin=e||{};fco(this,this.skin.HEIGHT||"0");this.url=fcj.friendconnect_serverBase+c;this.sha_bc=this.target=this.drawer=fcc;this.loaded=this.rendered=fcd;this.da()};
fc3[fc].da=function(a){fcBb(this.constraints,a||{});fcBb(this.skin,this.constraints);if(this.bar.fixedIeSizes&&this.constraints[fcE]&&this.constraints[fcR]){a=this.bar.xb();var b=this.constraints[fcE],c=this.constraints[fcR];a=a-(b+c);if(a%2){a-=1;this.skin.right+=1}fcm(this.skin,a);delete this.skin[fcE]}};
fc3[fc].ya=function(){if(this.drawer){if(this.skin[fcs]){var a=this.bar.za,b=this.bar.b,c=fcY?2:0;fc1b(this.target,this.skin[fcs],"");fc1b(this.sha_bc,this.skin[fcs]-b+2*a-c,"");this.skin.rightShadow?fc1b(this.drawer,this.skin[fcs]+b+2*a-c,""):fc1b(this.drawer,this.skin[fcs]+2*a-c,"")}if(this.skin[fcR])this.drawer[fcD].right=this.skin[fcR]+0+"px"}};
fc3[fc].Ga=function(){if(fcY&&this.drawer){var a=fc2b(this.target),b=a[fcs]-this.bar.b;a=a[fcO];if(b<0)b=0;this.sha_bc&&this.sha_bc[fcD]&&fc1b(this.sha_bc,b,"");this.sha_cr&&this.sha_cr[fcD]&&fc1b(this.sha_cr,"",a)}};
fc3[fc].N=function(){var a="display:none;",b="position: relative; ",c="",d="",e="",i="",h=!!this.skin.rightShadow;if(!h){c+="display: none; ";e+="display: none; ";d+="right: 0px; ";i+="margin-right: 0px; "}for(var j in this.skin){var k=Number(this.skin[j]);if(h&&fcSa(j,"width")==0)k+=this.bar.b;if(fcSa(j,"height")==0)b+=j+": "+k+"px; ";if(j!="rightShadow"){if(fcSa(j,"height")==0)k+=this.bar.b;if(fcSa(j,"width")==0)k+=2;a+=j+": "+k+"px; "}if(fcY&&fcSa(j,"width")==0){k-=h?2*this.bar.b:this.bar.b;d+=
j+": "+k+"px; "}}if(fcY&&(this[fcO]|0)>0){h=(this[fcO]|0)+2;c+="height: "+h+"px; "}h=0;j=[];j[h++]='<div id="'+this.bar.fa(this[fcM])+'"class="'+this.bar.Ka()+'"style="'+a+'"> ';if(this.bar.n()=="bottom")j[h++]='<div class="'+this.bar.d("tl")+'"></div> <div class="'+this.bar.d("tc")+'"style="'+d+'"></div> <div class="'+this.bar.d("tr")+'"style="'+e+'"></div> ';j[h++]='<div style="'+b+'"> <div class="'+this.bar.Pa()+'"style="'+i+'"><div id="'+this.bar.Q(this[fcM])+'"class="'+this.bar.Oa()+'"></div> <div class="'+
this.bar.d("cr")+'"style="'+c+'"></div> </div> </div> ';if(this.bar.n()=="top")j[h++]='<div class="'+this.bar.d("bl")+'"></div> <div class="'+this.bar.d("bc")+'"style="'+d+'"></div> <div class="'+this.bar.d("br")+'"style="'+e+'"></div> ';j[h++]="</div> ";return j[fcQ]("")};fc3[fc].yc=function(){this.rendered=this.na()};fc3[fc].Tb=function(){this.loaded=this.na()};fc3[fc].na=function(){return!!this.drawer&&this.drawer[fcD][fcya]!="none"};
fc3[fc].render=function(){if(this.rendered==fcd){var a={};a.url=this.url;a.id=this.bar.Q(this[fcM]);a.site=this.bar.site;a["view-params"]=fcU(this.bar.Bc);if(this[fcM]=="profile")a["view-params"].profileId="VIEWER";this.skin&&fcBb(a["view-params"].skin,this.skin);a["view-params"].menuName=this[fcM];a["view-params"].opaque="true";a["view-params"].menuPosition=this.bar.ac;fco(a,"1px");if(fcnc&&fcoc&&fc4)this.id=fc4.render(a)}};fcW("google.friendconnect.FriendBar",fc2);var fcrc="0123456789abcdefghijklmnopqrstuv",fctc=function(a){a=new fcsc(a);if(a.pa()%5)fca(Error());for(var b=[],c=0;a.pa()>0;c++)b[c]=fcrc[fcz](a.Zb(5));return b[fcQ]("")},fcsc=function(a){this.D=this.r=0;this.ca=a};fcsc[fc].pa=function(){return 8*(this.ca[fcr]-this.D)-this.r};
fcsc[fc].Zb=function(a){var b=0;if(a>this.pa())fca(Error());if(this.r>0){b=255>>this.r&this.ca[this.D];var c=8-this.r,d=fcl.min(a%8,c);c=c-d;b=b>>c;a-=d;this.r+=d;if(this.r==8){this.r=0;this.D++}}for(;a>=8;){b<<=8;b|=this.ca[this.D];this.D++;a-=8}if(a>0){b<<=a;b|=this.ca[this.D]>>8-a;this.r=a}return b};var fcuc=function(){};fcuc[fc].F=function(){};fcuc[fc].I=function(){};var fc5=function(){},fcvc=function(){},fcwc=function(){},fcxc=function(){};fcX(fcxc,fcwc);var fcyc=function(a){if(a)for(var b in a)if(a.hasOwnProperty(b))this[b]=a[b];if(this.viewParams)for(var c in this.viewParams)if(/^FC_RELOAD_.*$/[fcja](c))this.viewParams[c]=fcc};fcyc[fc].render=function(a){var b=this;if(a){b.zc();this.zb(function(c){fcZb(a,"visibility","hidden");fcn(a,c);b.refresh(a,c);c=function(d){fcZb(d,"visibility","visible")};c=fcGa(c,a);fcba(c,500);b.chrome=a})}};fcyc[fc].zb=function(a){return this.Fb(a)};
var fc6=function(a){fcyc[fcF](this,a);this.U="../../";this.rpcToken=fci(fcl[fct](2147483647*fcl[fcoa]()))};fcX(fc6,fcyc);fc6[fc].gb="gfc_iframe_";fc6[fc].hb="friendconnect";fc6[fc].Ha="";fc6[fc].nc="rpc_relay.html";fc6[fc].X=function(a){this.U=a};fc6[fc].zc=function(){return this.Ha=fci(fcl[fct](2147483647*fcl[fcoa]()))};fc6[fc].ga=function(){return this.gb+this.Ha+"_"+this.id};
fc6[fc].refresh=function(a,b){var c=fc4.Ec,d,e={},i=fc4.Ia(this.communityId),h=i[fcx]("~"),j=fc4.rb;if(j&&h[fcr]>1){d=h[2];h=h[1];var k=[this.specUrl,this.communityId,h,j][fcQ](":");e.sig=fc4.hash(d,k);e.userId=h;e.dateStamp=j}e.container=this.hb;e.mid=this.id;e.nocache=fc4.$b;e.view=this.Z;e.parent=fc4.S;if(this.debug)e.debug="1";if(this.specUrl)e.url=this.specUrl;if(this.communityId){j=fce[fcK][fcB]().profileId;e.communityId=this.communityId;if(d=fce[fcK][fcB]().psinvite)e.psinvite=d;if(j)e.profileId=
j}e.caller=fczc();e.rpctoken=this.rpcToken;j=fcd;d="";h=/Version\/3\..*Safari/;if((h=fcdb&&fc9a()[fcG](h))||!fc4.R[this.specUrl]&&this.viewParams){e["view-params"]=fce[fcpa][fcia](this.viewParams);d="?viewParams="+fch(e["view-params"]);j=fcb}if(this.prefs)e.prefs=fce[fcpa][fcia](this.prefs);if(this.viewParams&&this.sendViewParamsToServer)e["view-params"]=fce[fcpa][fcia](this.viewParams);if(this.locale)e.locale=this.locale;if(this.secureToken)e.st=this.secureToken;h=fc4.Na(this.specUrl);d=h+"ifr"+
d+(this.hashData?"&"+this.hashData:"");if(fc4.Dc!=1||j||i||this.secureToken){if(i&&!e.sig)e.fcauth=i}else e.sig||(c="get");i=this.ga();fcAc(i,d,c,e,a,b,this.rpcToken)};var fc7=function(){this.j={};this.S="http://"+fck[fcA].host;this.Z="default";this.$b=1;this.Ic=0;this.Fc="US";this.Gc="en";this.Hc=2147483647};fcX(fc7,fcvc);fc7[fc].v=fcyc;fc7[fc].A=new fcxc;fc7[fc].ab=function(a){this.$b=a};fc7[fc].Fa=function(a){this.Dc=a};fc7[fc].Ma=function(a){return"gadget_"+a};fc7[fc].w=function(a){return this.j[this.Ma(a)]};
fc7[fc].M=function(a){return new this.v(a)};fc7[fc].jb=function(a){a.id=this.Gb();this.j[this.Ma(a.id)]=a};fc7[fc].Yb=0;fc7[fc].Gb=function(){return this.Yb++};var fcCc=function(){fc7[fcF](this);this.A=new fcBc};fcX(fcCc,fc7);fcCc[fc].v=fc6;fcCc[fc].W=function(a){a[fcG](/^http[s]?:\/\//)||(a=fck[fcA][fcsa][fcG](/^[^?#]+\//)[0]+a);this.S=a};fcCc[fc].H=function(a){var b=this.A.La(a);a.render(b)};var fcBc=function(){this.vb={}};fcX(fcBc,fcwc);
fcBc[fc].kb=function(a,b){this.vb[a]=b;a=fck[fcy](b).className;if(!a&&a[fcr]==0)fcfa(fck[fcy](b),"gadgets-gadget-container")};fcBc[fc].La=function(a){return(a=this.vb[a.id])?fck[fcy](a):fcc};var fc8=function(a){fc6[fcF](this,a);a=a||{};this.Z=a.view||"profile"};fcX(fc8,fc6);fc8[fc].mb="canvas.html";fc8[fc].tb="/friendconnect/embed/";
var fczc=function(){var a=fce[fcK][fcB]().canvas=="1"||fce[fcK][fcB]().embed=="1",b=fcc;if(a)b=fce[fcK][fcB]().caller;if(!b){a=fck[fcA];b=a.search[fcv](/([&?]?)psinvite=[^&]*(&?)/,function(c,d,e){return e?d:""});b=a.protocol+"//"+a.hostname+(a.port?":"+a.port:"")+a.pathname+b}return b};fc8[fc].vc=function(a){this.Z=a};fc8[fc].ka=function(){return this.Z};fc8[fc].getBodyId=function(){return this.ga()+"_body"};
fc8[fc].Fb=function(a){var b=(fc4.Na(this.specUrl)||this.U)+this.nc,c=this.ga();fce.rpc.setRelayUrl(c,b);b='<div id="'+this.getBodyId()+'"><iframe id="'+c+'" name="'+c;b+=this[fcO]==0?'" style="width:1px; height:1px;':'" style="width:100%;';if(this.viewParams.opaque)b+="background-color:white;";b+='"';b+=' frameborder="0" scrolling="no"';this.viewParams.opaque||(b+=' allowtransparency="true"');b+=this[fcO]?' height="'+this[fcO]+'"':"";b+=this[fcs]?' width="'+this[fcs]+'"':"";b+="></iframe>";if(this.showEmbedThis)b+=
'<a href="javascript:void(0);" onclick="google.friendconnect.container.showEmbedDialog(\''+this.divId+"'); return false;\">Embed this</a>";b+="</div>";a(b)};
fc8[fc].yb=function(){var a=fczc();a="canvas=1&caller="+fch(a);var b=fce[fcK][fcB]().psinvite;if(b)a+="&psinvite="+fch(b);a+="&site="+fch(this.communityId);b=fcU(this.viewParams);if(b.skin!=fcc)for(var c=["BG_IMAGE","BG_COLOR","FONT_COLOR","BG_POSITION","BG_REPEAT","ANCHOR_COLOR","FONT_FACE","BORDER_COLOR","CONTENT_BG_COLOR","CONTENT_HEADLINE_COLOR","CONTENT_LINK_COLOR","CONTENT_SECONDARY_TEXT_COLOR","CONTENT_SECONDARY_LINK_COLOR","CONTENT_TEXT_COLOR","ENDCAP_BG_COLOR","ENDCAP_LINK_COLOR","ENDCAP_TEXT_COLOR",
"CONTENT_VISITED_LINK_COLOR","ALTERNATE_BG_COLOR"],d=0;d<c[fcr];d++)delete b.skin[c[d]];b=fch(fce[fcpa][fcia](b));b=b[fcv]("\\","%5C");return fc4.S+this.mb+"?url="+fch(this.specUrl)+(a?"&"+a:"")+"&view-params="+b};fc8[fc].C=function(a){a=a||fcg+this.tb+this.communityId;return this.Ab(a,"embed=1")};fc8[fc].B=function(a){return'<iframe src="'+this.C(a)+'" style="height:500px" scrolling="no" allowtransparency="true" border="0" frameborder="0" ></iframe>'};
fc8[fc].Ab=function(a,b){var c=fch(fce[fcpa][fcia](this.viewParams));c=c[fcv]("\\","%5C");return a+"?url="+fch(this.specUrl)+(b?"&"+b:"")+"&view-params="+c};fc8[fc].Jb=function(){var a=fce[fcK][fcB]().canvas=="1"||fce[fcK][fcB]().embed=="1",b=fcc;if(a)(b=fce[fcK][fcB]().caller)||(b="javascript:history.go(-1)");return b};fc8[fc].Kb=function(a){var b=fcc;if(a=="canvas")b=this.yb();else if(a=="profile")b=this.Jb();return b};
var fc9=function(){fcCc[fcF](this);fce.rpc[fcP]("signin",fc5[fc].signin);fce.rpc[fcP]("signout",fc5[fc].signout);fce.rpc[fcP]("resize_iframe",fc5[fc].$a);fce.rpc[fcP]("set_title",fc5[fc].setTitle);fce.rpc[fcP]("requestNavigateTo",fc5[fc].Ya);fce.rpc[fcP]("api_loaded",fc5[fc].xa);fce.rpc[fcP]("createFriendBarMenu",fc5[fc].Ca);fce.rpc[fcP]("showFriendBarMenu",fc5[fc].cb);fce.rpc[fcP]("hideFriendBarMenu",fc5[fc].Qa);fce.rpc[fcP]("putReloadViewParam",fc5[fc].Ua);fce.rpc[fcP]("getViewParams",fc5[fc].Ea);
fce.rpc[fcP]("openLightboxIframe",fc5[fc].Ta);fce.rpc[fcP]("showMemberProfile",fc5[fc].eb);fce.rpc[fcP]("closeLightboxIframe",fcV(this.u,this));fce.rpc[fcP]("setLightboxIframeTitle",fcV(this.rc,this));fce.rpc[fcP]("refreshAndCloseIframeLightbox",fcV(this.bc,this));var a=fcDc;a[fcP]();a.fb(this,"load",this.Mb);a.fb(this,"start",this.Nb);this.U="../../";this.W("");this.ab(0);this.Fa(1);this.oa=fcc;this.apiVersion="0.8";this.openSocialSecurityToken=fcc;this.V="";this.Da={};this.Sb=fcc;this.Rb=fcd;this.rb=
this.Vb=this.lastIframeLightboxOpenArguments=this.lastLightboxCallback=this.lastLightboxDialog=fcc;this.Ec="post"};fcX(fc9,fcCc);fc9[fc].pc=function(a){this.rb=a};fc9[fc].v=fc8;fc9[fc].R={};fc9[fc].tc=function(a){this.oa=a};fc9[fc].Na=function(a){var b=fc9[fc].R[a];if(!b)if(this.oa[fcC]("http://")!==0){a=this.ob(a);b=["http://",a,this.oa][fcQ]("")}else b=this.oa;return b};fc9[fc].ob=function(a){var b=new SHA1;a=fcJa(a);b.update(a);b=b.digest();return b=fctc(b)};
var fcEc=function(a,b){var c=b?b:fcj.top;b=c.frames;try{if(c.frameElement.id==a)return c}catch(d){}for(c=0;c<b[fcr];++c){var e=fcEc(a,b[c]);if(e)return e}return fcc},fcAc=function(a,b,c,d,e,i,h){var j="gfc_load_"+a;b='<html><head><style type="text/css">body {background:transparent;}</style>'+(fcY?'<script type="text/javascript">window.goback=function(){history.go(-1);};setTimeout("goback();", 0);<\/script>':"")+"</head><body><form onsubmit='window.goback=function(){};return false;' style='margin:0;padding:0;' id='"+
j+"' method='"+c+"' ' action='"+fce[fcK].escapeString(b)+"'>";for(var k in d)b+="<input type='hidden' name='"+k+"' value='' >";b+="</form></body></html>";c=fcEc(a);var l;try{l=c[fcw]||c.contentWindow[fcw]}catch(f){if(e&&i){fcn(e,"");fcn(e,i);c=fcEc(a);l=c[fcw]||c.contentWindow[fcw]}}h&&fce.rpc.setAuthToken(a,h);l.open();l.write(b);l.close();a=l[fcy](j);for(k in d)a[k].value=d[k];fcY&&a.onsubmit();a.submit()};
fc9[fc].ub=function(){var a=fce[fcK][fcB]().fcsite,b=fce[fcK][fcB]().fcprofile;a&&b&&fc4.I(b,a)};fc9[fc].qc=function(a,b){this.R[a]=b};fc9[fc].T=function(){var a=/Version\/3\..*Safari/;if(a=fcdb&&fc9a()[fcG](a))fck[fcA].reload();else{fc4.g!=fcc&&fc4.g.refresh();for(var b in fc4.j){a=fc4.j[b];this.H(a)}if(this.lastIframeLightboxOpenArguments!=fcc){b=this.lastIframeLightboxOpenArguments;this.u();this.F[fcL](this,b)}}};
fc9[fc].W=function(a){a[fcG](/^http[s]?:\/\//)||(a=a&&a[fcr]>0&&a.substring(0,1)=="/"?fck[fcA][fcsa][fcG](/^http[s]?:\/\/[^\/]+\//)[0]+a.substring(1):fck[fcA][fcsa][fcG](/^[^?#]+\//)[0]+a);this.S=a};fc9[fc].ea=function(a){return"fcauth"+a};fc9[fc].ia=function(a){return"fcauth"+a+"-s"};fc9[fc].hash=function(a,b){var c=new SHA1;a=fcQa(a,fcb);c=new G_HMAC(c,a,64);b=fcJa(b);b=c.Eb(b);(new Date).getTime();return fcPa(b,fcb)};
fc9[fc].Ia=function(a){return a=fcob(this.ea(a))||fcob(this.ia(a))||this.Da[a]||""};fc9[fc].X=function(a){this.U=a};fc9[fc].uc=function(a){this.V=a};fc9[fc].M=function(a){a=new this.v(a);a.X(this.U);return a};fc9[fc].ka=function(){return this.Z};fc9[fc].sc=function(a){this.Vb=a};var fc$=function(a){return(a=a[fcG](/_([0-9]+)$/))?fcaa(a[1],10):fcc};
fc9[fc].Y=function(a,b,c,d,e,i){if(!this.Cc){this.$(fcj.friendconnect_serverBase+"/friendconnect/styles/container.css?d="+this.V);this.Cc=fcb}var h=fcFc(d);if(this.Sb!=(h?"rtl":"ltr")){this.$(fcj.friendconnect_serverBase+"/friendconnect/styles/lightbox"+(h?"-rtl":"")+".css?d="+this.V);this.Sb=h?"rtl":"ltr"}if(!this.Rb){this.lb(fcj.friendconnect_serverBase+"/friendconnect/script/lightbox.js?d="+this.V);this.Rb=fcb}b=b||0;if(goog.ui&&goog.ui[fcma]){this.u();b=new goog.ui[fcma]("lightbox-dialog",fcb);
var j=this;goog.events.listen(b,goog.ui[fcma].EventType.AFTER_HIDE,function(){j.lastLightboxCallback&&j.lastLightboxCallback();j.Ba()});b.setDraggable(fcb);b.setDisposeOnHide(fcb);b.setBackgroundElementOpacity(0.5);b.setButtonSet(new goog.ui[fcma].ButtonSet);this.lastLightboxDialog=b;this.lastLightboxCallback=c||fcc;c=b.getDialogElement();e=e||702;fcZb(c,"width",fci(e)+"px");i&&fcZb(c,"height",fci(i)+"px");a(b);b.getDialogElement()[fcD].direction=h?"rtl":"ltr"}else if(b<5){b++;a=fcV(this.Y,this,a,
b,c,d,e,i);fcba(a,1E3)}else{this.Ba();fca(Error("lightbox.js failed to load"))}};fc9[fc].u=function(a){var b=this.lastLightboxDialog,c=this.lastLightboxCallback;this.lastLightboxCallback=fcc;if(b!=fcc){this.lastLightboxDialog.dispatchEvent(goog.ui[fcma].EventType.AFTER_HIDE);b.dispose();c!=fcc&&c(a)}};fc9[fc].Ba=function(){this.lastIframeLightboxOpenArguments=this.lastLightboxCallback=this.lastLightboxDialog=fcc};fc9[fc].rc=function(a){this.lastLightboxDialog&&this.lastLightboxDialog.setTitle(a)};
fc9[fc].bc=function(){this.u();this.T()};fc5[fc].Ya=function(a,b){var c=fc$(this.f);c=fc4.w(c);var d=fcU(c.originalParams);if(b){d["view-params"]=d["view-params"]||{};d["view-params"]=b}d.locale=c.locale;if(c.useLightBoxForCanvas){d.presentation=a;fc4.lastLightboxDialog!=fcc?fc4.u():fc4.db(d)}else if((a=c.Kb(a))&&fck[fcA][fcsa]!=a)if(fce[fcK][fcB]().embed=="1")try{fcj.parent.location=a}catch(e){fcj.top.location=a}else fck[fcA].href=a};
fc9[fc].db=function(a,b){a=a||{};var c=a.locale,d=fcFc(c),e=this;this.u();this.Y(function(i){var h=fc0("div",{},fc0("div",{id:"gadget-signin",style:"background-color:#ffffff;height:32px;"}),fc0("div",{id:"gadget-lb-canvas",style:"background-color:#ffffff;"}));i.getTitleTextElement()[fcp](fc0("div",{id:"gfc-canvas-title",style:"color:#000000;"})),i.getContentElement()[fcp](h);i.setVisible(fcb);h=fcU(a);var j=fcKb(fcj),k=fcl[fct](j[fcO]*0.7);j={};j.BORDER_COLOR="#cccccc";j.ENDCAP_BG_COLOR="#e0ecff";
j.ENDCAP_TEXT_COLOR="#333333";j.ENDCAP_LINK_COLOR="#0000cc";j.ALTERNATE_BG_COLOR="#ffffff";j.CONTENT_BG_COLOR="#ffffff";j.CONTENT_LINK_COLOR="#0000cc";j.CONTENT_TEXT_COLOR="#333333";j.CONTENT_SECONDARY_LINK_COLOR="#7777cc";j.CONTENT_SECONDARY_TEXT_COLOR="#666666";j.CONTENT_HEADLINE_COLOR="#333333";h.id="gadget-lb-canvas";fco(h,fcl.min(498,k)+"px");h.maxHeight=k;if(h.keepMax){fco(h,k);fcZb(i.getContentElement(),"height",k+35+"px")}h["view-params"]=h["view-params"]||{};h["view-params"].opaque=fcb;h["view-params"].skin=
h["view-params"].skin||{};fcHa(h["view-params"].skin,j);e.render(h);k={};k.id="gadget-signin";k.presentation="canvas";k.site=h.site;k.titleDivId="gfc-canvas-title";k["view-params"]={};k["view-params"].opaque=fcb;k.keepMax=h.keepMax;if(h.securityToken)k.securityToken=h.securityToken;h=fcU(j);h.ALIGNMENT=d?"left":"right";e.Wa(k,h);i.reposition()},fcf,b,c)};fc5[fc].cb=function(a,b){fc4.g!=fcc&&fc4.g.xc(a,b)};fc5[fc].Qa=function(a){fc4.g!=fcc&&fc4.g.la(a)};
fc5[fc].Ta=function(a,b,c,d,e,i,h,j,k,l){var f=this.f;a=a+(a[fcC]("?")>=0?"&":"?")+"iframeId="+f;fc4.F(a,b,c,d,e,i,h,j,k,l,this.callback)};
fc9[fc].F=function(a,b,c,d,e,i,h,j,k,l,f){var g=fcKb(fcj);d!=fcc||(d=fcl[fct](g[fcO]*0.7));c!=fcc||(c=fcl[fct](g[fcs]*0.7));var m=[];for(g=0;g<arguments[fcr]&&g<10;g++)m[fcq](arguments[g]);if(!a[0]=="/")fca(new Error("lightbox iframes must be relative to fc server"));var r=this,n=i?fcU(i):{},s=fci(fcl[fct](2147483647*fcl[fcoa]())),o="gfc_lbox_iframe_"+s;fce.rpc.setAuthToken(o,s);if(!b)b=fc4.openSocialSecurityToken;var t=fc4.openSocialSiteId;fc4.Y(function(p){r.lastIframeLightboxOpenArguments=m;var v=
"st="+fch(b)+"&parent="+fch(fc4.S)+"&rpctoken="+fch(s);if(!j){n.iframeId=o;n.iurl=a;a=fcg+"/friendconnect/lightbox"}var q=d-54;fco(n,q);var u='<iframe id="'+o;u+='" width="100%" height="'+q+'" frameborder="0" scrolling="auto"></iframe>';p.setContent(u);if(e){p.setTitle(e);if(l){q=p.getTitleTextElement();fcEb(q,"lightbox-dialog-title-small-text")}}p.setVisible(fcb);k||(n.fcauth=fc4.Ia(t));a+=(a[fcC]("?")>=0?"&":"?")+v+"&communityId="+t;fcAc(o,a,"POST",n,fcc,fcc,fcc)},fcf,f,fcf,c,d)};
fc5[fc].Ea=function(){var a=fc$(this.f);a=fc4.w(a);return a.viewParams};fc5[fc].Ua=function(a,b){var c=fc$(this.f);c=fc4.w(c);c.viewParams[a]=b};fc9[fc].Mb=function(a,b){fc4.g!=fcc&&fc4.g.Wb(b)};fc9[fc].Nb=function(a,b){fc4.g!=fcc&&fc4.g.Xb(b)};fc5[fc].Ca=function(a,b,c,d){fc4.g!=fcc&&fc4.g.qb(a,b,c,d)};fc9[fc].H=function(a){var b=this.A.La(a);a.render(b);this.A.postProcessGadget&&this.A.postProcessGadget(a)};fc5[fc].signout=function(a){fc4.Va(fc4.ea(a));fc4.Va(fc4.ia(a));fc4.Da={};fc4.T();return fcd};
fc9[fc].Va=function(a){var b=fck[fcA].pathname;b=b[fcx]("/");for(var c=0;c<b[fcr];c++){for(var d=new Array(c+1),e=0;e<c+1;e++)d[e]=b[e];fcpb(a,d[fcQ]("/")+"/")}};
fc5[fc].$a=function(a){var b=fck[fcy](this.f);if(b&&a>0)fco(b[fcD],a+"px");if((b=fck[fcy](this.f+"_body"))&&a>0)fco(b[fcD],a+"px");if(b=fc$(this.f)){var c=fc4.w(b);if(c){if((b=fck[fcy](c.divId))&&a>0){if(c&&c[fcta]&&c[fcta]<a){a=c[fcta];b[fcD].overflowY="auto"}fco(b[fcD],a+"px")}!c.keepMax&&c.ka()=="canvas"&&fc4.lastLightboxDialog&&fc4.lastLightboxDialog.reposition();fcZb(c.chrome,"visibility","visible")}}};
fc5[fc].setTitle=function(a){var b=fc$(this.f);b=fc4.w(b);if(b=b.titleDivId)fcn(fck[fcy](b),fce[fcK].escapeString(a))};fc5[fc].signin=function(a,b,c){fcnb(fc4.ea(a),b,31104E3,c);fcnb(fc4.ia(a),b,-1,c);fc4.Da[a]=b;fc4.T()};var fcHc=function(a){fcjc(a,fcGc)};fc9[fc].hc=function(a,b){b&&this.m(b,a);b={};b.url=fcg+"/friendconnect/gadgets/members.xml";this.render(this.s(a,b))};
fc9[fc].jc=function(a,b){b&&this.m(b,a);b={};b.url=fcg+"/friendconnect/gadgets/review.xml";b["view-params"]={startMaximized:"true",disableMinMax:"true",features:"review"};this.render(this.s(a,b))};fc9[fc].ra=function(a,b){b&&this.m(b,a);b={};b.url=fcg+"/friendconnect/gadgets/wall.xml";b["view-params"]={startMaximized:"true",disableMinMax:"true",features:"comment"};this.render(this.s(a,b))};
fc9[fc].Wa=function(a,b){b&&this.m(b,a);b={};b.url=fcg+"/friendconnect/gadgets/signin.xml";fco(b,32);this.render(this.s(a,b))};fc9[fc].ec=function(a,b){b&&this.m(b,a);a.prefs=a.prefs||{};a.sendViewParamsToServer=fcb;a.prefs.hints=fcj.google_hints;b={};b.url=fcg+"/friendconnect/gadgets/ads.xml";fco(b,90);this.render(this.s(a,b))};
fc9[fc].ua=function(a,b){if(a.id){b&&this.m(b,a);a["view-params"]=a["view-params"]||{};a["view-params"].opaque="true";this.g=new fc2(a);this.g.render();b={};b.url=fcg+"/friendconnect/gadgets/friendbar.xml";a.id=this.g.t;fco(a,"1");this.render(this.s(a,b))}};fc9[fc].gc=fc9[fc].ua;fc9[fc].ta=function(a,b){a=a||{};a.url=fcg+"/friendconnect/gadgets/signin.xml";a.site=a.site||fce[fcK][fcB]().site;fco(a,32);this.sa(a,b)};fc9[fc].fc=fc9[fc].ta;fc9[fc].lc=fc9[fc].ra;
fc9[fc].m=function(a,b){var c=b["view-params"];if(!c){c={};b["view-params"]=c}c.skin=a};fc9[fc].s=function(a,b){var c=this.Sa(b,a);if(b["view-params"]){b=b["view-params"];if(a["view-params"])b=this.Sa(b,a["view-params"]);c["view-params"]=b}return c};fc9[fc].ic=function(a,b){b&&this.m(b,a);this.render(a)};fc9[fc].Sa=function(a,b){var c={},d;for(d in b)c[d]=b[d];for(d in a)if(typeof c[d]=="undefined")c[d]=a[d];return c};
fc9[fc].render=function(a){this.openSocialSiteId=a.site;a["view-params"]=a["view-params"]||{};var b=this.M({divId:a.id,specUrl:a.url,communityId:a.site,height:a[fcO],locale:a.locale||this.Vb,secureToken:a.securityToken,titleDivId:a.titleDivId,showEmbedThis:a.showEmbedThis,useLightBoxForCanvas:a.useLightBoxForCanvas||typeof a.useLightBoxForCanvas=="undefined"&&fcj.friendconnect_lightbox,viewParams:a["view-params"],prefs:a.prefs,originalParams:a,debug:a.debug,maxHeight:a[fcta],sendViewParamsToServer:a.sendViewParamsToServer,
keepMax:a.keepMax});a.presentation&&b.vc(a.presentation);this.jb(b);this.A.kb(b.id,a.id);fcba(function(){fc4.H(b)},0);return b.id};fc9[fc].kc=function(a,b){a=a||{};a.presentation="canvas";this.Xa(a,b)};
fc9[fc].Xa=function(a,b,c){a=a||{};a.url=fce[fcK][fcB]().url;a.site=fce[fcK][fcB]().site||a.site;var d=fce[fcK][fcB]()["view-params"];if(d)a["view-params"]=fce[fcpa].parse(decodeURIComponent(d));if(c){a["view-params"]=a["view-params"]||{};a["view-params"].useFixedHeight=fcb;fco(a["view-params"],c);b=b||{};b.HEIGHT=fci(c)}this.sa(a,b)};fc9[fc].sa=function(a,b){a=a||{};b&&this.m(b,a);if(fce[fcK][fcB]().canvas=="1")a.presentation="canvas";else if(fce[fcK][fcB]().embed=="1")a.presentation="embed";fc4.render(a)};
fc9[fc].Lb=function(){var a=fce[fcK][fcB]().caller;if(a&&fck[fcA][fcsa]!=a&&a[fcr]>8&&(a.substr(0,7)[fcAa]()=="http://"||a.substr(0,8)[fcAa]()=="https://"))fck[fcA].href=a;else if(a=fce[fcK][fcB]().site)fck[fcA].href=fcg+"/friendconnect/directory/site?id="+a;else fcj.history.go(-1)};fc9[fc].G="";fc9[fc].Hb=function(){return this.G};fc9[fc].oc=function(a){this.apiVersion=a};fc9[fc].$=function(a){var b=fck[fcI]("link");b[fcJ]("rel","stylesheet");b[fcJ]("type","text/css");b[fcJ]("href",a);fck.getElementsByTagName("head")[0][fcp](b)};
fc9[fc].lb=function(a){var b=fck[fcI]("script");b[fcJ]("src",a);b[fcJ]("type","text/javascript");fck.getElementsByTagName("head")[0][fcp](b)};fc9[fc].Aa=function(a){if(fck[fcna])a();else fcj[fcqa]?fcj[fcqa]("load",a,fcd):fcj.attachEvent("onload",a)};
fc9[fc].ma=function(a){if(!a.site)fca("API not loaded, please pass in a 'site'");this.$(fcj.friendconnect_serverBase+"/friendconnect/styles/container.css?d="+this.V);this.openSocialSiteId=a.site;this.apiLoadedCallback=a.onload;this.Aa(fcV(this.Ra,this,a,"fc-opensocial-api"))};fc9[fc].Ub=fc9[fc].ma;fc9[fc].Ob=function(a){var b={};b.site=this.openSocialSiteId;b["view-params"]={txnId:a};this.Ra(b,"gfc-"+a)};
fc9[fc].dc=function(a){var b={};for(var c in this.j){var d=this.j[c];if(d.viewParams&&d.viewParams.txnId==a)break;else b[c]=d}this.j=b;(a=fck[fcy]("gfc-"+a))&&a[fcN]&&a[fcN].removeChild&&a[fcN].removeChild(a)};fc9[fc].Bb=function(){return"<Templates xmlns:fc='http://www.google.com/friendconnect/makeThisReal'>  <Namespace prefix='fc' url='http://www.google.com/friendconnect/makeThisReal'/>  <Template tag='fc:signIn'>    <div onAttach='google.friendconnect.renderSignInButton({element: this})'></div>  </Template></Templates>"};
fc9[fc].Ib=function(){return"<Templates xmlns:os='http://ns.opensocial.org/2008/markup'><Namespace prefix='os' url='http://ns.opensocial.org/2008/markup'/><Template tag='os:Name'>  <span if='${!My.person.profileUrl}'>${My.person.displayName}</span>  <a if='${My.person.profileUrl}' href='${My.person.profileUrl}'>      ${My.person.displayName}</a></Template><Template tag='os:Badge'>  <div><img if='${My.person.thumbnailUrl}' src='${My.person.thumbnailUrl}'/>   <os:Name person='${My.person}'/></div></Template><Template tag='os:PeopleSelector'>  <select onchange='google.friendconnect.PeopleSelectorOnChange(this)' name='${My.inputName}'          multiple='${My.multiple}' x-var='${My.var}' x-max='${My.max}'          x-onselect='${My.onselect}'>    <option repeat='${My.group}' value='${Cur.id}' selected='${Cur.id == My.selected}'>        ${Cur.displayName}    </option>  </select></Template></Templates>"};
var fcIc=function(a){var b;if(a.multiple){b=[];for(var c=0;c<a[fcH][fcr];c++)a[fcH][c].selected&&b[fcq](a[fcH][c].value);c=a.getAttribute("x-max");try{c=1*c}catch(d){c=0}if(c&&b[fcr]>c&&a["x-selected"]){b=a["x-selected"];for(c=0;c<a[fcH][fcr];c++){a[fcH][c].selected=fcd;for(var e=0;e<b[fcr];e++)if(a[fcH][c].value==b[e]){a[fcH][c].selected=fcb;break}}}}else b=a[fcH][a.selectedIndex].value;a["x-selected"]=b;(c=a.getAttribute("x-var"))&&fcj.opensocial[fcka]&&fcj.opensocial[fcka].getDataContext().putDataSet(c,
b);if(c=a.getAttribute("x-onselect"))if(fcj[c]&&typeof fcj[c]=="function")fcj[c](b);else if(a["x-onselect-fn"])a["x-onselect-fn"][fcL](a);else a["x-onselect-fn"]=new Function(c)};
fc9[fc].Ra=function(a,b){fcj.opensocial.template.Loader.loadContent(this.Ib());fcj.opensocial.template.Loader.loadContent(this.Bb());fcj.opensocial[fcka].processDocumentMarkup();var c=fck[fcI]("div");c.id=b;fco(c[fcD],"0px");fcm(c[fcD],"0px");c[fcD].position="absolute";c[fcD].visibility="hidden";fck[fcna][fcp](c);b={};b.url=fcg+"/friendconnect/gadgets/osapi-"+this.apiVersion+".xml";fco(b,0);b.id=c.id;b.site=a.site;b["view-params"]=a["view-params"];this.render(b)};
fc5[fc].xa=function(){fc4.G=this.f;fc4.openSocialSecurityToken=this.a[0];var a=fc4.openSocialSecurityToken;fcj.opensocial[fcka].executeRequests();fcj.opensocial.template.process();if(fc4.apiLoadedCallback){a=fcGa(fc4.apiLoadedCallback,a);fcba(a,0)}};fc9[fc].O=function(a){var b=fcc;for(var c in this.j)if(this.j[c].divId==a){b=this.j[c];break}return b};fc9[fc].C=function(a,b){a=this.O(a);var c=fcc;if(a)c=a.C(b);return c};fc9[fc].B=function(a,b){a=this.O(a);var c=fcc;if(a)c=a.B(b);return c};
fc9[fc].wc=function(a,b){this.Y(function(c){var d=fck.createTextNode("Copy & paste this code into your site.");c.getContentElement()[fcp](d);c.getContentElement()[fcp](fck[fcI]("br"));d=fc4.B(a,b);var e=fck[fcI]("textarea");fcn(e,d);e[fcJ]("style","width:500px;");c.getContentElement()[fcp](e);c.setVisible(fcb)})};
var fcJc=["ar","dv","fa","iw","he","ku","pa","sd","tk","ug","ur","yi"],fcFc=function(a){a=a;var b=fcd;if(a){a=a[fcx]("_")[0];b=fcsb(fcJc,a)}else b=(a=fc0b(fck[fcna],"direction"))&&a=="rtl";return b};fc5[fc].eb=function(a,b){var c=0,d=fcc;try{var e=fc$(this.f),i=fc4.w(e);d=i.secureToken;c=i.communityId}catch(h){}if(b)c=b;fc4.I(a,c,this.callback,d)};
fc9[fc].I=function(a,b,c,d){b=b||this.openSocialSiteId;a={keepMax:fcb,presentation:"canvas",url:fcg+"/friendconnect/gadgets/members.xml",site:b,"view-params":{profileId:a}};if(d)a.securityToken=d;this.db(a,c)};fc9[fc].Db=function(a){var b=fcc;if((a=this.O(a))&&a.secureToken)b=a.secureToken;return b};fc9[fc].Cb=function(a){var b=fcc;if((a=this.O(a))&&a.communityId)b=a.communityId;return b};
var fcGc=function(a){fc4.G&&fcdc(fc4.G,a)},fcKc=function(){fc5[fc].signout(fc4.openSocialSiteId)},fcLc=function(){fcgc(fc4.G)},fcMc=function(a,b){fcac(a,b)},fcpc=function(){this.o={}};fcpc[fc].register=function(){fce.rpc[fcP]("subscribeEventType",fc5[fc].subscribe);fce.rpc[fcP]("publishEvent",fc5[fc].publish)};fc5[fc].subscribe=function(a){var b=fcDc;b.o[a]=b.o[a]||[];a=b.o[a];a[a[fcr]]={frameId:this}};fcpc[fc].fb=function(a,b,c){var d=this;d.o[b]=d.o[b]||[];b=d.o[b];b[b[fcr]]={container:a,callback:c}};
fc5[fc].publish=function(a){var b=fcDc,c=0;if(this.f)c=fc$(this.f);b.o[a]=b.o[a]||[];b=b.o[a];for(var d=0;d<b[fcr];d++)b[d].container?b[d].callback[fcF](b[d].container,a,c):fce.rpc[fcF](b[d].frameId,a,fcc,a,c)};var fcqc=fcV(fc5[fc].publish,new fc5),fcDc=new fcpc,fc4=new fc9;fc4.Aa(fc4.ub);fcW("google.friendconnect.container",fc4);fcW("google.friendconnect.container.refreshGadgets",fc4.T);fcW("google.friendconnect.container.setParentUrl",fc4.W);fcW("google.friendconnect.container.setServerBase",fc4.X);
fcW("google.friendconnect.container.setServerVersion",fc4.uc);fcW("google.friendconnect.container.createGadget",fc4.M);fcW("google.friendconnect.container.openLightboxIframe",fc4.F);fcW("google.friendconnect.container.renderGadget",fc4.H);fcW("google.friendconnect.container.render",fc4.render);fcW("google.friendconnect.container.goBackToSite",fc4.Lb);fcW("google.friendconnect.container.renderMembersGadget",fc4.hc);fcW("google.friendconnect.container.renderReviewGadget",fc4.jc);
fcW("google.friendconnect.container.renderCommentsGadget",fc4.ra);fcW("google.friendconnect.container.renderSignInGadget",fc4.Wa);fcW("google.friendconnect.container.renderFriendBar",fc4.gc);fcW("google.friendconnect.container.renderSocialBar",fc4.ua);fcW("google.friendconnect.container.renderCanvasSignInGadget",fc4.fc);fcW("google.friendconnect.container.renderUrlCanvasGadget",fc4.kc);fcW("google.friendconnect.container.renderEmbedSignInGadget",fc4.ta);
fcW("google.friendconnect.container.renderUrlEmbedGadget",fc4.Xa);fcW("google.friendconnect.container.renderEmbedGadget",fc4.sa);fcW("google.friendconnect.container.renderWallGadget",fc4.lc);fcW("google.friendconnect.container.renderAdsGadget",fc4.ec);fcW("google.friendconnect.container.renderOpenSocialGadget",fc4.ic);fcW("google.friendconnect.container.setNoCache",fc4.ab);fcW("google.friendconnect.container.enableProxy",fc4.Fa);fcW("google.friendconnect.container.setDomain",fc4.qc);
fcW("google.friendconnect.container.setLockedDomainSuffix",fc4.tc);fcW("google.friendconnect.container.setLocale",fc4.sc);fcW("google.friendconnect.container.loadOpenSocialApi",fc4.Ub);fcW("google.friendconnect.container.initOpenSocialApi",fc4.ma);fcW("google.friendconnect.container.getOpenSocialApiIframeId",fc4.Hb);fcW("google.friendconnect.container.setApiVersion",fc4.oc);fcW("google.friendconnect.container.getEmbedUrl",fc4.C);fcW("google.friendconnect.container.getEmbedHtml",fc4.B);
fcW("google.friendconnect.container.getGadgetSecurityToken",fc4.Db);fcW("google.friendconnect.container.getGadgetCommunityId",fc4.Cb);fcW("google.friendconnect.container.showEmbedDialog",fc4.wc);fcW("google.friendconnect.container.showMemberProfile",fc4.I);fcW("google.friendconnect.requestSignIn",fcGc);fcW("google.friendconnect.requestSignOut",fcKc);fcW("google.friendconnect.requestSettings",fcLc);fcW("google.friendconnect.requestInvite",fcMc);fcW("google.friendconnect.renderSignInButton",fcHc);
fcW("google.friendconnect.container.invokeOpenSocialApiViaIframe",fc4.Ob);fcW("google.friendconnect.container.removeOpenSocialApiViaIframe",fc4.dc);fcW("google.friendconnect.userAgent.WEBKIT",fcdb);fcW("google.friendconnect.userAgent.IE",fcY);fcW("google.friendconnect.PeopleSelectorOnChange",fcIc);fcW("google.friendconnect.container.setDateStamp_",fc4.pc);
google.friendconnect.container.setServerBase('http://www.a.friendconnect.gmodules.com/ps/');google.friendconnect.container.setServerVersion('0.537.6');google.friendconnect.container.setApiVersion('0.8');
google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/activities.xml', 'http://q8j0igk2u2f6kf7jogh6s66md2d7r154.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/ads.xml', 'http://t767uouk8skpac15v8ue0n16regb3m2t.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/ask.xml', 'http://uofgf6lm45rimd9jp6hn983ul6n2en81.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/friendbar.xml', 'http://p7rjrrl49ose4gob99eonlvp0drmce3d.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/content_reveal.xml', 'http://n0mc7q283f00tpk3uifa7sjv4hmrults.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/chat.xml', 'http://4mmefl67as0q39gf1o4pnocubqmdgei0.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/donate.xml', 'http://7v4nflqvq38notsghmcr5a9t6o9g6kn4.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/lamegame.xml', 'http://ffbrstu9puk7qmt45got9mqe5k7ijrs4.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/map.xml', 'http://k0dfp8trn0hi5d2spmo7jmc88n6kr1cc.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/members.xml', 'http://r1rk9np7bpcsfoeekl0khkd2juj27q3o.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/newsletterSubscribe.xml', 'http://k830suiki828goudg9448o6bp0tpu5r3.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/poll.xml', 'http://1ivjd75aqp679vbgohjv74tlhn13rgdu.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/recommended_pages.xml', 'http://iqavu79a908u5vcecp0pq80hhbhkv33b.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/review.xml', 'http://r85jiaoot111joesr8bilfhfeslcc496.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/sample.xml', 'http://785aoao97uti9iqffknjp5e0kn2ljlm4.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/signin.xml', 'http://8fkcem1ves287v3g5lu9gep1j91p3kk1.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/wall.xml', 'http://o29lt44ell30t7ljcdfr8lq2mjakv2co.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/osapi-0.8.xml', 'http://mc8tdi0ripmbpds25eboaupdulritrp6.a.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setLockedDomainSuffix('.a.friendconnect.gmodules.com/ps/');
window['__ps_loaded__'] = true; 
 }google.friendconnect_ = google.friendconnect;
google.friendconnect.container.setDateStamp_('12722e8e2ec');