import{aA as et,Z as tt,r as P,b as ze,E as Be,d as Se,z as We,e as M,l as R,m as u,p as E,T as z,u as f,ah as g,q as C,U as d,O as _,W as Oe,M as k,aB as nt,Q as ie,R as I,aC as me,aD as _e,F as q,a7 as j,a2 as re,H as ue,a9 as ot,S as G,I as U,aE as He,w as de,aF as st,aG as Ue,c as qe,J as Xe,aH as ke,aI as xe,s as at,a8 as le,aJ as ne,n as lt,aK as rt,P as ve,V as he}from"./vue-Dve2Dm07.js";import{g as ct,S as Ke,D as Q,s as Le,a as it,u as ge,b as J,L as ee,_ as D,c as Ge,r as ut,d as Ce,e as dt}from"./index-DBdOCPoM.js";import{u as ft}from"./useWatermark-C5tfeNej.js";import{h as pt,j as mt,g as _t,k as vt,b as fe,l as ht,n as gt,o as Je,u as bt,r as yt,p as wt,q as St,s as kt,t as xt}from"./element-D97nkBxs.js";import{_ as Ct}from"./index.vue_vue_type_script_setup_true_lang-LY9QwYga.js";import"./vxe-D4242vD8.js";function Tt(n){n?Le(it):Le(Ke)}const oe=et("app",()=>{const n=tt({opened:ct()!==Ke,withoutAnimation:!1}),e=P(Q.Desktop);return ze(()=>n.opened,o=>Tt(o)),{device:e,sidebar:n,toggleSidebar:o=>{n.opened=!n.opened,n.withoutAnimation=o},closeSidebar:o=>{n.opened=!1,n.withoutAnimation=o},toggleDevice:o=>{e.value=o}}}),Et=992,$t=()=>{const n=oe(),{listenerRouteChange:e}=ge(),t=()=>document.body.getBoundingClientRect().width-1<Et,l=()=>{if(!document.hidden){const a=t();n.toggleDevice(a?Q.Mobile:Q.Desktop),a&&n.closeSidebar(!0)}};e(()=>{n.device===Q.Mobile&&n.sidebar.opened&&n.closeSidebar(!1)}),Be(()=>{window.addEventListener("resize",l)}),Se(()=>{t()&&(n.toggleDevice(Q.Mobile),n.closeSidebar(!0))}),We(()=>{window.removeEventListener("resize",l)})},Ye=oe(),Vt=M(()=>Ye.device===Q.Mobile),Mt=M(()=>Ye.device===Q.Desktop);function se(){return{isMobile:Vt,isDesktop:Mt}}const be=J(),At=M(()=>be.layoutMode===ee.Left),It=M(()=>be.layoutMode===ee.Top),Lt=M(()=>be.layoutMode===ee.LeftTop),Rt=n=>{be.layoutMode=n};function ae(){return{isLeft:At,isTop:It,isLeftTop:Lt,setLayoutMode:Rt}}const Dt={class:"layout-footer"},Pt=R({__name:"index",setup(n){const e="V3 Admin Vite";return(t,l)=>(u(),E("footer",Dt,"MIT © 2021-PRESENT "+z(f(e)),1))}}),Ft=D(Pt,[["__scopeId","data-v-18d14396"]]),Nt={class:"app-main"},zt={class:"app-scrollbar"},Bt=R({__name:"AppMain",setup(n){const e=Ge(),t=J();return(l,a)=>{const o=g("router-view"),s=g("el-backtop");return u(),E("section",Nt,[C("div",zt,[d(o,null,{default:_(({Component:r,route:c})=>[d(Oe,{name:"el-fade-in",mode:"out-in"},{default:_(()=>[(u(),k(nt,{include:f(e).cachedViews},[(u(),k(ie(r),{key:c.path,class:"app-container-grow"}))],1032,["include"]))]),_:2},1024)]),_:1}),f(t).showFooter?(u(),k(Ft,{key:0})):I("",!0)]),d(s),d(s,{target:".app-scrollbar"})])}}}),Te=D(Bt,[["__scopeId","data-v-e96aa434"]]),Wt=R({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(n,{emit:e}){const t=n,l=e,a=()=>{l("toggleClick")};return(o,s)=>{const r=g("el-icon");return u(),E("div",{onClick:a},[d(r,{size:20,class:"icon"},{default:_(()=>[t.isActive?(u(),k(f(pt),{key:0})):(u(),k(f(mt),{key:1}))]),_:1})])}}}),Ot=D(Wt,[["__scopeId","data-v-a21f53d4"]]);function Ht(n){for(var e=[],t=0;t<n.length;){var l=n[t];if(l==="*"||l==="+"||l==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(l==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(l==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(l==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(l===":"){for(var a="",o=t+1;o<n.length;){var s=n.charCodeAt(o);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){a+=n[o++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:a}),t=o;continue}if(l==="("){var r=1,c="",o=t+1;if(n[o]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<n.length;){if(n[o]==="\\"){c+=n[o++]+n[o++];continue}if(n[o]===")"){if(r--,r===0){o++;break}}else if(n[o]==="("&&(r++,n[o+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(o));c+=n[o++]}if(r)throw new TypeError("Unbalanced pattern at ".concat(t));if(!c)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:c}),t=o;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function Ut(n,e){e===void 0&&(e={});for(var t=Ht(n),l=e.prefixes,a=l===void 0?"./":l,o="[^".concat(Kt(e.delimiter||"/#?"),"]+?"),s=[],r=0,c=0,m="",p=function(y){if(c<t.length&&t[c].type===y)return t[c++].value},i=function(y){var T=p(y);if(T!==void 0)return T;var W=t[c],S=W.type,V=W.index;throw new TypeError("Unexpected ".concat(S," at ").concat(V,", expected ").concat(y))},b=function(){for(var y="",T;T=p("CHAR")||p("ESCAPED_CHAR");)y+=T;return y};c<t.length;){var v=p("CHAR"),h=p("NAME"),w=p("PATTERN");if(h||w){var x=v||"";a.indexOf(x)===-1&&(m+=x,x=""),m&&(s.push(m),m=""),s.push({name:h||r++,prefix:x,suffix:"",pattern:w||o,modifier:p("MODIFIER")||""});continue}var L=v||p("ESCAPED_CHAR");if(L){m+=L;continue}m&&(s.push(m),m="");var F=p("OPEN");if(F){var x=b(),B=p("NAME")||"",O=p("PATTERN")||"",A=b();i("CLOSE"),s.push({name:B||(O?r++:""),pattern:B&&!O?o:O,prefix:x,suffix:A,modifier:p("MODIFIER")||""});continue}i("END")}return s}function qt(n,e){return Xt(Ut(n,e),e)}function Xt(n,e){e===void 0&&(e={});var t=Gt(e),l=e.encode,a=l===void 0?function(c){return c}:l,o=e.validate,s=o===void 0?!0:o,r=n.map(function(c){if(typeof c=="object")return new RegExp("^(?:".concat(c.pattern,")$"),t)});return function(c){for(var m="",p=0;p<n.length;p++){var i=n[p];if(typeof i=="string"){m+=i;continue}var b=c?c[i.name]:void 0,v=i.modifier==="?"||i.modifier==="*",h=i.modifier==="*"||i.modifier==="+";if(Array.isArray(b)){if(!h)throw new TypeError('Expected "'.concat(i.name,'" to not repeat, but got an array'));if(b.length===0){if(v)continue;throw new TypeError('Expected "'.concat(i.name,'" to not be empty'))}for(var w=0;w<b.length;w++){var x=a(b[w],i);if(s&&!r[p].test(x))throw new TypeError('Expected all "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(x,'"'));m+=i.prefix+x+i.suffix}continue}if(typeof b=="string"||typeof b=="number"){var x=a(String(b),i);if(s&&!r[p].test(x))throw new TypeError('Expected "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(x,'"'));m+=i.prefix+x+i.suffix;continue}if(!v){var L=h?"an array":"a string";throw new TypeError('Expected "'.concat(i.name,'" to be ').concat(L))}}return m}}function Kt(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Gt(n){return n&&n.sensitive?"":"i"}const Jt={key:0,class:"no-redirect"},Yt=["onClick"],jt=R({__name:"index",setup(n){const e=me(),t=_e(),{listenerRouteChange:l}=ge(),a=P([]),o=()=>{a.value=e.matched.filter(c=>{var m,p;return((m=c.meta)==null?void 0:m.title)&&((p=c.meta)==null?void 0:p.breadcrumb)!==!1})},s=c=>qt(c)(e.params),r=c=>{const{redirect:m,path:p}=c;if(m){t.push(m);return}t.push(s(p))};return l(c=>{c.path.startsWith("/redirect/")||o()},!0),(c,m)=>{const p=g("el-breadcrumb-item"),i=g("el-breadcrumb");return u(),k(i,null,{default:_(()=>[(u(!0),E(q,null,j(a.value,(b,v)=>(u(),k(p,{key:b.path},{default:_(()=>[b.redirect==="noRedirect"||v===a.value.length-1?(u(),E("span",Jt,z(b.meta.title),1)):(u(),E("a",{key:1,onClick:re(h=>r(b),["prevent"])},z(b.meta.title),9,Yt))]),_:2},1024))),128))]),_:1})}}}),Zt=D(jt,[["__scopeId","data-v-5110efca"]]),pe=n=>/^(https?:|mailto:|tel:)/.test(n),Qt=["href"],en=R({__name:"SidebarItemLink",props:{to:{}},setup(n){const e=n;return(t,l)=>{const a=g("router-link");return f(pe)(e.to)?(u(),E("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[ue(t.$slots,"default")],8,Qt)):(u(),k(a,{key:1,to:e.to},{default:_(()=>[ue(t.$slots,"default")]),_:3},8,["to"]))}}});function K(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function Re(n,e){for(var t="",l=0,a=-1,o=0,s,r=0;r<=n.length;++r){if(r<n.length)s=n.charCodeAt(r);else{if(s===47)break;s=47}if(s===47){if(!(a===r-1||o===1))if(a!==r-1&&o===2){if(t.length<2||l!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var c=t.lastIndexOf("/");if(c!==t.length-1){c===-1?(t="",l=0):(t=t.slice(0,c),l=t.length-1-t.lastIndexOf("/")),a=r,o=0;continue}}else if(t.length===2||t.length===1){t="",l=0,a=r,o=0;continue}}e&&(t.length>0?t+="/..":t="..",l=2)}else t.length>0?t+="/"+n.slice(a+1,r):t=n.slice(a+1,r),l=r-a-1;a=r,o=0}else s===46&&o!==-1?++o:o=-1}return t}function tn(n,e){var t=e.dir||e.root,l=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+l:t+n+l:l}var te={resolve:function(){for(var e="",t=!1,l,a=arguments.length-1;a>=-1&&!t;a--){var o;a>=0?o=arguments[a]:(l===void 0&&(l=process.cwd()),o=l),K(o),o.length!==0&&(e=o+"/"+e,t=o.charCodeAt(0)===47)}return e=Re(e,!t),t?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(K(e),e.length===0)return".";var t=e.charCodeAt(0)===47,l=e.charCodeAt(e.length-1)===47;return e=Re(e,!t),e.length===0&&!t&&(e="."),e.length>0&&l&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return K(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,t=0;t<arguments.length;++t){var l=arguments[t];K(l),l.length>0&&(e===void 0?e=l:e+="/"+l)}return e===void 0?".":te.normalize(e)},relative:function(e,t){if(K(e),K(t),e===t||(e=te.resolve(e),t=te.resolve(t),e===t))return"";for(var l=1;l<e.length&&e.charCodeAt(l)===47;++l);for(var a=e.length,o=a-l,s=1;s<t.length&&t.charCodeAt(s)===47;++s);for(var r=t.length,c=r-s,m=o<c?o:c,p=-1,i=0;i<=m;++i){if(i===m){if(c>m){if(t.charCodeAt(s+i)===47)return t.slice(s+i+1);if(i===0)return t.slice(s+i)}else o>m&&(e.charCodeAt(l+i)===47?p=i:i===0&&(p=0));break}var b=e.charCodeAt(l+i),v=t.charCodeAt(s+i);if(b!==v)break;b===47&&(p=i)}var h="";for(i=l+p+1;i<=a;++i)(i===a||e.charCodeAt(i)===47)&&(h.length===0?h+="..":h+="/..");return h.length>0?h+t.slice(s+p):(s+=p,t.charCodeAt(s)===47&&++s,t.slice(s))},_makeLong:function(e){return e},dirname:function(e){if(K(e),e.length===0)return".";for(var t=e.charCodeAt(0),l=t===47,a=-1,o=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),t===47){if(!o){a=s;break}}else o=!1;return a===-1?l?"/":".":l&&a===1?"//":e.slice(0,a)},basename:function(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');K(e);var l=0,a=-1,o=!0,s;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var r=t.length-1,c=-1;for(s=e.length-1;s>=0;--s){var m=e.charCodeAt(s);if(m===47){if(!o){l=s+1;break}}else c===-1&&(o=!1,c=s+1),r>=0&&(m===t.charCodeAt(r)?--r===-1&&(a=s):(r=-1,a=c))}return l===a?a=c:a===-1&&(a=e.length),e.slice(l,a)}else{for(s=e.length-1;s>=0;--s)if(e.charCodeAt(s)===47){if(!o){l=s+1;break}}else a===-1&&(o=!1,a=s+1);return a===-1?"":e.slice(l,a)}},extname:function(e){K(e);for(var t=-1,l=0,a=-1,o=!0,s=0,r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(c===47){if(!o){l=r+1;break}continue}a===-1&&(o=!1,a=r+1),c===46?t===-1?t=r:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||a===-1||s===0||s===1&&t===a-1&&t===l+1?"":e.slice(t,a)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return tn("/",e)},parse:function(e){K(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;var l=e.charCodeAt(0),a=l===47,o;a?(t.root="/",o=1):o=0;for(var s=-1,r=0,c=-1,m=!0,p=e.length-1,i=0;p>=o;--p){if(l=e.charCodeAt(p),l===47){if(!m){r=p+1;break}continue}c===-1&&(m=!1,c=p+1),l===46?s===-1?s=p:i!==1&&(i=1):s!==-1&&(i=-1)}return s===-1||c===-1||i===0||i===1&&s===c-1&&s===r+1?c!==-1&&(r===0&&a?t.base=t.name=e.slice(1,c):t.base=t.name=e.slice(r,c)):(r===0&&a?(t.name=e.slice(1,s),t.base=e.slice(1,c)):(t.name=e.slice(r,s),t.base=e.slice(r,c)),t.ext=e.slice(s,c)),r>0?t.dir=e.slice(0,r-1):a&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};te.posix=te;var nn=te;const je=_t(nn),on={key:2},sn=R({__name:"SidebarItem",props:{item:{},basePath:{default:""}},setup(n){const e=n,t=M(()=>{var r;return(r=e.item.meta)==null?void 0:r.alwaysShow}),l=M(()=>{var r;return((r=e.item.children)==null?void 0:r.filter(c=>{var m;return!((m=c.meta)!=null&&m.hidden)}))??[]}),a=M(()=>l.value.length),o=M(()=>{const r=a.value;switch(!0){case r>1:return null;case r===1:return l.value[0];default:return{...e.item,path:""}}}),s=r=>{switch(!0){case pe(r):return r;case pe(e.basePath):return e.basePath;default:return je.resolve(e.basePath,r)}};return(r,c)=>{const m=g("SvgIcon"),p=g("el-menu-item"),i=g("SidebarItem",!0),b=g("el-sub-menu");return!t.value&&o.value&&!o.value.children?(u(),E(q,{key:0},[o.value.meta?(u(),k(en,{key:0,to:s(o.value.path)},{default:_(()=>[d(p,{index:s(o.value.path)},ot({default:_(()=>[o.value.meta.svgIcon?(u(),k(m,{key:0,name:o.value.meta.svgIcon},null,8,["name"])):o.value.meta.elIcon?(u(),k(ie(o.value.meta.elIcon),{key:1,class:"el-icon"})):I("",!0)]),_:2},[o.value.meta.title?{name:"title",fn:_(()=>[G(z(o.value.meta.title),1)]),key:"0"}:void 0]),1032,["index"])]),_:1},8,["to"])):I("",!0)],64)):(u(),k(b,{key:1,index:s(e.item.path),teleported:""},{title:_(()=>{var v,h,w;return[(v=e.item.meta)!=null&&v.svgIcon?(u(),k(m,{key:0,name:e.item.meta.svgIcon},null,8,["name"])):(h=e.item.meta)!=null&&h.elIcon?(u(),k(ie(e.item.meta.elIcon),{key:1,class:"el-icon"})):I("",!0),(w=e.item.meta)!=null&&w.title?(u(),E("span",on,z(e.item.meta.title),1)):I("",!0)]}),default:_(()=>[e.item.children?(u(!0),E(q,{key:0},j(l.value,v=>(u(),k(i,{key:v.path,item:v,"base-path":s(v.path)},null,8,["item","base-path"]))),128)):I("",!0)]),_:1},8,["index"]))}}}),an=D(sn,[["__scopeId","data-v-ed98da72"]]),ln="/v3-admin-vite/static/logo-BY3URNHQ.png",rn="/v3-admin-vite/static/logo-text-1-CHuEm79x.png",cn="/v3-admin-vite/static/logo-text-2-CVewf8RJ.png",un=["src"],dn=["src"],fn=R({__name:"index",props:{collapse:{type:Boolean,default:!0}},setup(n){const e=n,{isLeft:t,isTop:l}=ae();return(a,o)=>{const s=g("router-link");return u(),E("div",{class:U(["layout-logo-container",{collapse:e.collapse,"layout-mode-top":f(l)}])},[d(Oe,{name:"layout-logo-fade"},{default:_(()=>[e.collapse?(u(),k(s,{key:"collapse",to:"/"},{default:_(()=>[C("img",{src:f(ln),class:"layout-logo"},null,8,un)]),_:1})):(u(),k(s,{key:"expand",to:"/"},{default:_(()=>[C("img",{src:f(t)?f(rn):f(cn),class:"layout-logo-text"},null,8,dn)]),_:1}))]),_:1})],2)}}}),Ee=D(fn,[["__scopeId","data-v-52f1a9b3"]]),ce=n=>{let e="";try{e=getComputedStyle(document.documentElement).getPropertyValue(n)}catch(t){console.error(t)}return e},De=(n,e)=>{try{document.documentElement.style.setProperty(n,e)}catch(t){console.error(t)}},pn=()=>{ut(),location.reload()},mn=R({__name:"index",setup(n){He(y=>({"4ded6dc0":O.value,"61d38dec":A.value,"15ffc82c":F.value,"05d7b6d4":B.value,"632f5fe7":L.value}));const e=ce("--v3-sidebar-menu-bg-color"),t=ce("--v3-sidebar-menu-text-color"),l=ce("--v3-sidebar-menu-active-text-color"),{isMobile:a}=se(),{isLeft:o,isTop:s}=ae(),r=me(),c=oe(),m=Ce(),p=J(),i=M(()=>{const{meta:{activeMenu:y},path:T}=r;return y||T}),b=M(()=>m.routes.filter(y=>{var T;return!((T=y.meta)!=null&&T.hidden)})),v=M(()=>!c.sidebar.opened),h=M(()=>o.value&&p.showLogo),w=M(()=>o.value?e:void 0),x=M(()=>o.value?t:void 0),L=M(()=>o.value?l:void 0),F=M(()=>s.value?"var(--v3-navigationbar-height)":"var(--v3-sidebar-menu-item-height)"),B=M(()=>s.value?"transparent":"var(--v3-sidebar-menu-hover-bg-color)"),O=M(()=>s.value?"0px":"2px"),A=M(()=>s.value?"none":"block");return(y,T)=>{const W=g("el-menu"),S=g("el-scrollbar");return u(),E("div",{class:U({"has-logo":h.value})},[h.value?(u(),k(Ee,{key:0,collapse:v.value},null,8,["collapse"])):I("",!0),d(S,{"wrap-class":"scrollbar-wrapper"},{default:_(()=>[d(W,{"default-active":i.value,collapse:v.value&&!f(s),"background-color":w.value,"text-color":x.value,"active-text-color":L.value,"unique-opened":!0,"collapse-transition":!1,mode:f(s)&&!f(a)?"horizontal":"vertical"},{default:_(()=>[(u(!0),E(q,null,j(b.value,V=>(u(),k(an,{key:V.path,item:V,"base-path":V.path},null,8,["item","base-path"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color","mode"])]),_:1})],2)}}}),$e=D(mn,[["__scopeId","data-v-4b030497"]]),_n={class:"card-header"},vn={class:"card-title"},hn={class:"card-time"},gn={key:0,class:"card-avatar"},bn=["src"],yn={class:"card-body"},wn=R({__name:"NotifyList",props:{list:{}},setup(n){const e=n;return(t,l)=>{const a=g("el-empty"),o=g("el-tag"),s=g("el-card");return e.list.length===0?(u(),k(a,{key:0})):(u(!0),E(q,{key:1},j(e.list,(r,c)=>(u(),k(s,{key:c,shadow:"never",class:"card-container"},{header:_(()=>[C("div",_n,[C("div",null,[C("span",null,[C("span",vn,z(r.title),1),r.extra?(u(),k(o,{key:0,type:r.status,effect:"plain",size:"small"},{default:_(()=>[G(z(r.extra),1)]),_:2},1032,["type"])):I("",!0)]),C("div",hn,z(r.datetime),1)]),r.avatar?(u(),E("div",gn,[C("img",{src:r.avatar,width:"34"},null,8,bn)])):I("",!0)])]),default:_(()=>[C("div",yn,z(r.description??"No Data"),1)]),_:2},1024))),128))}}}),Sn=D(wn,[["__scopeId","data-v-c0dacc5d"]]),kn=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin Vite 上线啦",datetime:"一年前",description:"一个免费开源的中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin 上线啦",datetime:"两年前",description:"一个中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus 和 Pinia"}],xn=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自楚门的世界",description:"如果再也不能见到你，祝你早安、午安和晚安",datetime:"1998-06-05"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自大话西游",description:"如果非要在这份爱上加上一个期限，我希望是一万年",datetime:"1995-02-04"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自龙猫",description:"心存善意，定能途遇天使",datetime:"1988-04-16"}],Cn=[{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"未开始",status:"info"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"进行中",status:"primary"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"已超时",status:"danger"}],Tn={class:"notify"},En={class:"notify-history"},Pe=99,$n=350,Vn=R({__name:"index",setup(n){const e=M(()=>l.value.reduce((o,s)=>o+s.list.length,0)),t=P("通知"),l=P([{name:"通知",type:"primary",list:kn},{name:"消息",type:"danger",list:xn},{name:"待办",type:"warning",list:Cn}]),a=()=>{fe.success(`跳转到${t.value}历史页面`)};return(o,s)=>{const r=g("el-icon"),c=g("el-tooltip"),m=g("el-badge"),p=g("el-scrollbar"),i=g("el-tab-pane"),b=g("el-tabs"),v=g("el-button"),h=g("el-popover");return u(),E("div",Tn,[d(h,{placement:"bottom",width:$n,trigger:"click"},{reference:_(()=>[d(m,{value:e.value,max:Pe,hidden:e.value===0},{default:_(()=>[d(c,{effect:"dark",content:"消息通知",placement:"bottom"},{default:_(()=>[d(r,{size:20},{default:_(()=>[d(f(vt))]),_:1})]),_:1})]),_:1},8,["value","hidden"])]),default:_(()=>[d(b,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=w=>t.value=w),class:"demo-tabs",stretch:""},{default:_(()=>[(u(!0),E(q,null,j(l.value,(w,x)=>(u(),k(i,{name:w.name,key:x},{label:_(()=>[G(z(w.name)+" ",1),d(m,{value:w.list.length,max:Pe,type:w.type},null,8,["value","type"])]),default:_(()=>[d(p,{height:"400px"},{default:_(()=>[d(Sn,{list:w.list},null,8,["list"])]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),C("div",En,[d(v,{link:"",onClick:a},{default:_(()=>[G("查看"+z(t.value)+"历史",1)]),_:1})])]),_:1})])}}}),Mn=D(Vn,[["__scopeId","data-v-a5fd6355"]]),Fe=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Y=(()=>{if(typeof document>"u")return!1;const n=Fe[0],e={};for(const t of Fe)if((t==null?void 0:t[1])in document){for(const[a,o]of t.entries())e[n[a]]=o;return e}return!1})(),Ne={change:Y.fullscreenchange,error:Y.fullscreenerror};let H={request(n=document.documentElement,e){return new Promise((t,l)=>{const a=()=>{H.off("change",a),t()};H.on("change",a);const o=n[Y.requestFullscreen](e);o instanceof Promise&&o.then(a).catch(l)})},exit(){return new Promise((n,e)=>{if(!H.isFullscreen){n();return}const t=()=>{H.off("change",t),n()};H.on("change",t);const l=document[Y.exitFullscreen]();l instanceof Promise&&l.then(t).catch(e)})},toggle(n,e){return H.isFullscreen?H.exit():H.request(n,e)},onchange(n){H.on("change",n)},onerror(n){H.on("error",n)},on(n,e){const t=Ne[n];t&&document.addEventListener(t,e,!1)},off(n,e){const t=Ne[n];t&&document.removeEventListener(t,e,!1)},raw:Y};Object.defineProperties(H,{isFullscreen:{get:()=>!!document[Y.fullscreenElement]},element:{enumerable:!0,get:()=>document[Y.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[Y.fullscreenEnabled]}});Y||(H={isEnabled:!1});const Z=H,An=R({__name:"index",props:{element:{default:"html"},openTips:{default:"全屏"},exitTips:{default:"退出全屏"},content:{type:Boolean,default:!1}},setup(n){const e=n,t=P(!1),l=M(()=>t.value?e.exitTips:e.openTips),a=M(()=>t.value?"fullscreen-exit":"fullscreen"),o=()=>{const b=document.querySelector(e.element)||void 0;Z.isEnabled?Z.toggle(b):fe.warning("您的浏览器无法工作")},s=()=>{t.value=Z.isFullscreen,t.value||(document.body.className="")};de(b=>{Z.isEnabled&&Z.on("change",s),b(()=>{Z.isEnabled&&Z.off("change",s)})});const r=P(!1),c=M(()=>r.value?"内容区复原":"内容区放大"),m=M(()=>r.value?"fullscreen-exit":"fullscreen"),p=()=>{r.value=!r.value,document.body.className=r.value?"content-large":""},i=()=>{r.value&&p(),document.body.className="content-full",o()};return(b,v)=>{const h=g("SvgIcon"),w=g("el-tooltip"),x=g("el-dropdown-item"),L=g("el-dropdown-menu"),F=g("el-dropdown");return u(),E("div",null,[b.content?(u(),k(F,{key:1,disabled:t.value},{dropdown:_(()=>[d(L,null,{default:_(()=>[d(x,{onClick:p},{default:_(()=>[G(z(c.value),1)]),_:1}),d(x,{onClick:i},{default:_(()=>[G("内容区全屏")]),_:1})]),_:1})]),default:_(()=>[d(h,{name:m.value},null,8,["name"])]),_:1},8,["disabled"])):(u(),k(w,{key:0,effect:"dark",content:l.value,placement:"bottom"},{default:_(()=>[d(h,{name:a.value,onClick:o},null,8,["name"])]),_:1},8,["content"]))])}}}),Ze=D(An,[["__scopeId","data-v-889fe0df"]]),In=["onMouseenter"],Ln={class:"result-item-title"},Rn=R({__name:"SearchResult",props:st({list:{},isPressUpOrDown:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n,{expose:e}){const t=Ue(n,"modelValue"),l=n,a=qe(),o=P(0),s=p=>{const i=p.name===t.value;return{background:i?"var(--el-color-primary)":"",color:i?"#ffffff":""}},r=p=>{l.isPressUpOrDown||(t.value=p.name)},c=()=>{o.value=Number((window.innerHeight*.4).toFixed(1))},m=p=>{var h;const i=(h=a==null?void 0:a.proxy)==null?void 0:h.$refs[`resultItemRef${p}`];if(!i)return 0;const v=i[0].offsetTop+128;return v>o.value?v-o.value:0};return Be(()=>{window.addEventListener("resize",c)}),Se(()=>{c()}),We(()=>{window.removeEventListener("resize",c)}),e({getScrollTop:m}),(p,i)=>{const b=g("SvgIcon");return u(),E("div",null,[(u(!0),E(q,null,j(p.list,(v,h)=>{var w,x,L;return u(),E("div",{key:h,ref_for:!0,ref:`resultItemRef${h}`,class:"result-item",style:Xe(s(v)),onMouseenter:F=>r(v)},[(w=v.meta)!=null&&w.svgIcon?(u(),k(b,{key:0,name:v.meta.svgIcon},null,8,["name"])):(x=v.meta)!=null&&x.elIcon?(u(),k(ie(v.meta.elIcon),{key:1,class:"el-icon"})):I("",!0),C("span",Ln,z((L=v.meta)==null?void 0:L.title),1),t.value&&t.value===v.name?(u(),k(b,{key:2,name:"keyboard-enter"})):I("",!0)],44,In)}),128))])}}}),Dn=D(Rn,[["__scopeId","data-v-8cd47626"]]),Ve=n=>(ke("data-v-8dce46e8"),n=n(),xe(),n),Pn={class:"search-footer"},Fn={class:"search-footer-item"},Nn=Ve(()=>C("span",null,"确认",-1)),zn={class:"search-footer-item"},Bn=Ve(()=>C("span",null,"切换",-1)),Wn={class:"search-footer-item"},On=Ve(()=>C("span",null,"关闭",-1)),Hn={class:"search-footer-total"},Un=R({__name:"SearchFooter",props:{total:{}},setup(n){const e=n,{isMobile:t}=se();return(l,a)=>{const o=g("SvgIcon");return u(),E("div",Pn,[f(t)?I("",!0):(u(),E(q,{key:0},[C("span",Fn,[d(o,{name:"keyboard-enter"}),Nn]),C("span",zn,[d(o,{name:"keyboard-up"}),d(o,{name:"keyboard-down"}),Bn]),C("span",Wn,[d(o,{name:"keyboard-esc"}),On])],64)),C("span",Hn,"共 "+z(e.total)+" 项",1)])}}}),qn=D(Un,[["__scopeId","data-v-8dce46e8"]]),Xn=C("p",null,"搜索结果",-1),Kn=R({__name:"SearchModal",props:{modelValue:{type:Boolean,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(n){const e=Ue(n,"modelValue"),t=_e(),{isMobile:l}=se(),a=P(null),o=P(null),s=P(null),r=P(""),c=at([]),m=P(void 0),p=P(!1),i=M(()=>l.value?"80vw":"40vw"),b=M(()=>ht(Ce().routes)),v=gt(()=>{var T;const A=h(b.value);c.value=A.filter(W=>{var S,V;return r.value?(V=(S=W.meta)==null?void 0:S.title)==null?void 0:V.toLocaleLowerCase().includes(r.value.toLocaleLowerCase().trim()):!1});const y=(T=c.value)==null?void 0:T.length;m.value=y>0?c.value[0].name:void 0},500),h=(A,y=[])=>(A.forEach(T=>{y.push(T),T.children&&h(T.children,y)}),y),w=()=>{e.value=!1,setTimeout(()=>{r.value="",c.value=[]},200)},x=A=>{var T;if(!s.value)return;const y=s.value.getScrollTop(A);(T=o.value)==null||T.setScrollTop(y)},L=()=>{p.value=!0;const{length:A}=c.value;if(A===0)return;const y=c.value.findIndex(T=>T.name===m.value);if(y===0){const T=c.value[A-1].name;m.value===T&&A>1?(m.value=c.value[A-2].name,x(A-2)):(m.value=T,x(A-1))}else m.value=c.value[y-1].name,x(y-1)},F=()=>{p.value=!0;const{length:A}=c.value;if(A===0)return;const y=c.value.map(T=>T.name).lastIndexOf(m.value);if(y===A-1){const T=c.value[0].name;m.value===T&&A>1?(m.value=c.value[1].name,x(1)):(m.value=T,x(0))}else m.value=c.value[y+1].name,x(y+1)},B=()=>{var W;const{length:A}=c.value;if(A===0)return;const y=m.value,T=(W=c.value.find(S=>S.name===y))==null?void 0:W.path;if(T&&pe(T)){window.open(T,"_blank","noopener, noreferrer");return}if(!y){fe.warning("无法通过搜索进入该菜单，请为对应的路由设置唯一的 Name");return}try{t.push({name:y})}catch{fe.error("该菜单有必填的动态参数，无法通过搜索进入");return}w()},O=()=>{p.value=!1};return(A,y)=>{const T=g("SvgIcon"),W=g("el-input"),S=g("el-empty"),V=g("el-dialog");return u(),k(V,{modelValue:e.value,"onUpdate:modelValue":y[2]||(y[2]=N=>e.value=N),onOpened:y[3]||(y[3]=N=>{var $;return($=a.value)==null?void 0:$.focus()}),onClosed:y[4]||(y[4]=N=>{var $;return($=a.value)==null?void 0:$.blur()}),onKeydown:[le(L,["up"]),le(F,["down"]),le(B,["enter"])],onKeyup:le(O,["up","down"]),"before-close":w,width:i.value,top:"5vh",class:"search-modal__private","append-to-body":""},{footer:_(()=>[d(qn,{total:c.value.length},null,8,["total"])]),default:_(()=>[d(W,{ref_key:"inputRef",ref:a,modelValue:r.value,"onUpdate:modelValue":y[0]||(y[0]=N=>r.value=N),onInput:f(v),placeholder:"搜索菜单",size:"large",clearable:""},{prefix:_(()=>[d(T,{name:"search"})]),_:1},8,["modelValue","onInput"]),c.value.length===0?(u(),k(S,{key:0,description:"暂无搜索结果","image-size":100})):(u(),E(q,{key:1},[Xn,d(f(Je),{ref_key:"scrollbarRef",ref:o,"max-height":"40vh",always:""},{default:_(()=>[d(Dn,{ref_key:"searchResultRef",ref:s,modelValue:m.value,"onUpdate:modelValue":y[1]||(y[1]=N=>m.value=N),list:c.value,isPressUpOrDown:p.value,onClick:B},null,8,["modelValue","list","isPressUpOrDown"])]),_:1},512)],64))]),_:1},8,["modelValue","width"])}}}),Gn=R({__name:"index",setup(n){const e=P(!1),t=()=>{e.value=!0};return(l,a)=>{const o=g("SvgIcon"),s=g("el-tooltip");return u(),E("div",null,[d(s,{effect:"dark",content:"搜索菜单",placement:"bottom"},{default:_(()=>[d(o,{name:"search",onClick:t})]),_:1}),d(Kn,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value=r)},null,8,["modelValue"])])}}}),Jn=D(Gn,[["__scopeId","data-v-dc5accb4"]]),Yn=n=>(ke("data-v-1ee6dd91"),n=n(),xe(),n),jn={class:"navigation-bar"},Zn={class:"right-menu"},Qn={class:"right-menu-avatar"},eo={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},to={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},no=Yn(()=>C("span",{style:{display:"block"}},"退出登录",-1)),oo=R({__name:"index",setup(n){const{isMobile:e}=se(),{isTop:t}=ae(),l=_e(),a=oe(),o=dt(),s=J(),{showNotify:r,showThemeSwitch:c,showScreenfull:m,showSearchMenu:p}=ne(s),i=()=>{a.toggleSidebar(!1)},b=()=>{o.logout(),l.push("/login")};return(v,h)=>{const w=g("el-avatar"),x=g("el-dropdown-item"),L=g("el-dropdown-menu"),F=g("el-dropdown");return u(),E("div",jn,[!f(t)||f(e)?(u(),k(Ot,{key:0,"is-active":f(a).sidebar.opened,class:"hamburger",onToggleClick:i},null,8,["is-active"])):I("",!0),!f(t)||f(e)?(u(),k(Zt,{key:1,class:"breadcrumb"})):I("",!0),f(t)&&!f(e)?(u(),k($e,{key:2,class:"sidebar"})):I("",!0),C("div",Zn,[f(p)?(u(),k(Jn,{key:0,class:"right-menu-item"})):I("",!0),f(m)?(u(),k(Ze,{key:1,class:"right-menu-item"})):I("",!0),f(c)?(u(),k(Ct,{key:2,class:"right-menu-item"})):I("",!0),f(r)?(u(),k(Mn,{key:3,class:"right-menu-item"})):I("",!0),d(F,{class:"right-menu-item"},{dropdown:_(()=>[d(L,null,{default:_(()=>[C("a",eo,[d(x,null,{default:_(()=>[G("GitHub")]),_:1})]),C("a",to,[d(x,null,{default:_(()=>[G("Gitee")]),_:1})]),d(x,{divided:"",onClick:b},{default:_(()=>[no]),_:1})]),_:1})]),default:_(()=>[C("div",Qn,[d(w,{icon:f(bt),size:30},null,8,["icon"]),C("span",null,z(f(o).username),1)])]),_:1})])])}}}),Me=D(oo,[["__scopeId","data-v-1ee6dd91"]]),so={class:"select-layout-mode"},ao=R({__name:"SelectLayoutMode",setup(n){const{isLeft:e,isTop:t,isLeftTop:l,setLayoutMode:a}=ae();return(o,s)=>{const r=g("el-aside"),c=g("el-header"),m=g("el-main"),p=g("el-container"),i=g("el-tooltip");return u(),E("div",so,[d(i,{content:"左侧模式"},{default:_(()=>[d(p,{class:U(["layout-mode left",{active:f(e)}]),onClick:s[0]||(s[0]=b=>f(a)(f(ee).Left))},{default:_(()=>[d(r),d(p,null,{default:_(()=>[d(c),d(m)]),_:1})]),_:1},8,["class"])]),_:1}),d(i,{content:"顶部模式"},{default:_(()=>[d(p,{class:U(["layout-mode top",{active:f(t)}]),onClick:s[1]||(s[1]=b=>f(a)(f(ee).Top))},{default:_(()=>[d(c),d(m)]),_:1},8,["class"])]),_:1}),d(i,{content:"混合模式"},{default:_(()=>[d(p,{class:U(["layout-mode left-top",{active:f(l)}]),onClick:s[2]||(s[2]=b=>f(a)(f(ee).LeftTop))},{default:_(()=>[d(c),d(p,null,{default:_(()=>[d(r),d(m)]),_:1})]),_:1},8,["class"])]),_:1})])}}}),lo=D(ao,[["__scopeId","data-v-b859d856"]]),Qe=n=>(ke("data-v-107157f3"),n=n(),xe(),n),ro={class:"setting-container"},co=Qe(()=>C("h4",null,"布局配置",-1)),io=Qe(()=>C("h4",null,"功能配置",-1)),uo={class:"setting-name"},fo=R({__name:"index",setup(n){const{isLeft:e}=ae(),t=J(),{showTagsView:l,showLogo:a,fixedHeader:o,showFooter:s,showNotify:r,showThemeSwitch:c,showScreenfull:m,showSearchMenu:p,cacheTagsView:i,showWatermark:b,showGreyMode:v,showColorWeakness:h}=ne(t),w={显示标签栏:l,"显示 Logo":a,"固定 Header":o,"显示页脚 Footer":s,显示消息通知:r,显示切换主题按钮:c,显示全屏按钮:m,显示搜索按钮:p,是否缓存标签栏:i,开启系统水印:b,显示灰色模式:v,显示色弱模式:h};return de(()=>{!e.value&&(o.value=!0)}),(x,L)=>{const F=g("el-divider"),B=g("el-switch"),O=g("el-button");return u(),E("div",ro,[co,d(lo),d(F),io,(u(),E(q,null,j(w,(A,y,T)=>C("div",{class:"setting-item",key:T},[C("span",uo,z(y),1),d(B,{modelValue:A.value,"onUpdate:modelValue":W=>A.value=W,disabled:!f(e)&&y==="固定 Header"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),64)),d(O,{type:"danger",icon:f(yt),onClick:f(pn)},{default:_(()=>[G("重 置")]),_:1},8,["icon","onClick"])])}}}),po=D(fo,[["__scopeId","data-v-107157f3"]]),mo={class:"scroll-container"},_o=200,vo=R({__name:"ScrollPane",props:{tagRefs:{}},setup(n){const e=n,t=me(),l=J(),{listenerRouteChange:a}=ge(),o=P(),s=P();let r=0;const c=({scrollLeft:v})=>{r=v},m=({deltaY:v})=>{/^-/.test(v.toString())?i("left"):i("right")},p=()=>{const v=s.value.clientWidth,h=o.value.wrapRef.clientWidth,w=v-h-r;return{scrollbarContentRefWidth:v,scrollbarRefWidth:h,lastDistance:w}},i=(v,h=_o)=>{let w=0;const{scrollbarContentRefWidth:x,scrollbarRefWidth:L,lastDistance:F}=p();L>x||(v==="left"?w=Math.max(0,r-h):w=Math.min(r+h,r+F),o.value.setScrollLeft(w))},b=()=>{const v=e.tagRefs;for(let h=0;h<v.length;h++)if(t.path===v[h].$props.to.path){const w=v[h].$el,x=w.offsetWidth,L=w.offsetLeft,{scrollbarRefWidth:F}=p();if(L<r){const O=r-L;i("left",O);return}const B=F+r-x;if(L>B){const O=L-B;i("right",O);return}}};return a(()=>{lt(b)}),(v,h)=>{const w=g("el-icon");return u(),E("div",mo,[d(w,{class:"arrow left",onClick:h[0]||(h[0]=x=>i("left"))},{default:_(()=>[d(f(wt))]),_:1}),d(f(Je),{ref_key:"scrollbarRef",ref:o,onWheelPassive:m,onScroll:c},{default:_(()=>[C("div",{ref_key:"scrollbarContentRef",ref:s,class:"scrollbar-content"},[ue(v.$slots,"default",{},void 0,!0)],512)]),_:3},512),d(w,{class:"arrow right",onClick:h[1]||(h[1]=x=>i("right"))},{default:_(()=>[d(f(St))]),_:1}),f(l).showScreenfull?(u(),k(Ze,{key:0,content:!0,class:"screenfull"})):I("",!0)])}}}),ho=D(vo,[["__scopeId","data-v-5784e87c"]]),go={class:"tags-view-container"},bo=R({__name:"index",setup(n){const e=qe(),t=_e(),l=me(),a=Ge(),o=Ce(),{listenerRouteChange:s}=ge(),r=P([]),c=P(!1),m=P(0),p=P(0),i=P({});let b=[];const v=S=>S.path===l.path,h=S=>{var V;return(V=S.meta)==null?void 0:V.affix},w=(S,V="/")=>{const N=[];return S.forEach($=>{if(h($)){const X=je.resolve(V,$.path);N.push({fullPath:X,path:X,name:$.name,meta:{...$.meta}})}if($.children){const X=w($.children,$.path);N.push(...X)}}),N},x=()=>{b=w(o.routes);for(const S of b)S.name&&a.addVisitedView(S)},L=S=>{S.name&&(a.addVisitedView(S),a.addCachedView(S))},F=S=>{a.delCachedView(S),t.replace({path:"/redirect"+S.path,query:S.query})},B=S=>{a.delVisitedView(S),a.delCachedView(S),v(S)&&y(a.visitedViews,S)},O=()=>{const S=i.value.fullPath;S!==l.path&&S!==void 0&&t.push(S),a.delOthersVisitedViews(i.value),a.delOthersCachedViews(i.value)},A=S=>{a.delAllVisitedViews(),a.delAllCachedViews(),!b.some(V=>V.path===l.path)&&y(a.visitedViews,S)},y=(S,V)=>{const N=S.slice(-1)[0],$=N==null?void 0:N.fullPath;$!==void 0?t.push($):V.name==="Dashboard"?t.push({path:"/redirect"+V.path,query:V.query}):t.push("/")},T=(S,V)=>{const $=e.proxy.$el.getBoundingClientRect().left,ye=e.proxy.$el.offsetWidth-105,Ie=V.clientX-$+15;p.value=Ie>ye?ye:Ie,m.value=V.clientY,c.value=!0,i.value=S},W=()=>{c.value=!1};return ze(c,S=>{S?document.body.addEventListener("click",W):document.body.removeEventListener("click",W)}),Se(()=>{x(),s(async S=>{L(S)},!0)}),(S,V)=>{const N=g("el-icon");return u(),E("div",go,[d(ho,{class:"tags-view-wrapper","tag-refs":r.value},{default:_(()=>[(u(!0),E(q,null,j(f(a).visitedViews,$=>(u(),k(f(rt),{ref_for:!0,ref_key:"tagRefs",ref:r,key:$.path,class:U([{active:v($)},"tags-view-item"]),to:{path:$.path,query:$.query},onMouseup:re(X=>!h($)&&B($),["middle"]),onContextmenu:re(X=>T($,X),["prevent"])},{default:_(()=>{var X;return[G(z((X=$.meta)==null?void 0:X.title)+" ",1),h($)?I("",!0):(u(),k(N,{key:0,size:12,onClick:re(ye=>B($),["prevent","stop"])},{default:_(()=>[d(f(kt))]),_:2},1032,["onClick"]))]}),_:2},1032,["class","to","onMouseup","onContextmenu"]))),128))]),_:1},8,["tag-refs"]),ve(C("ul",{class:"contextmenu",style:Xe({left:p.value+"px",top:m.value+"px"})},[C("li",{onClick:V[0]||(V[0]=$=>F(i.value))},"刷新"),h(i.value)?I("",!0):(u(),E("li",{key:0,onClick:V[1]||(V[1]=$=>B(i.value))},"关闭")),C("li",{onClick:O},"关闭其它"),C("li",{onClick:V[2]||(V[2]=$=>A(i.value))},"关闭所有")],4),[[he,c.value]])])}}}),Ae=D(bo,[["__scopeId","data-v-6f2c645d"]]),yo=R({__name:"index",props:{buttonTop:{default:350}},setup(n){He(a=>({"79e23a76":t}));const t=n.buttonTop+"px",l=P(!1);return(a,o)=>{const s=g("el-icon"),r=g("el-drawer");return u(),E(q,null,[C("div",{class:"handle-button",onClick:o[0]||(o[0]=c=>l.value=!0)},[d(s,{size:24},{default:_(()=>[d(f(xt))]),_:1})]),d(r,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=c=>l.value=c),size:"300px","with-header":!1},{default:_(()=>[ue(a.$slots,"default",{},void 0,!0)]),_:3},8,["modelValue"])],64)}}}),wo=D(yo,[["__scopeId","data-v-e47107a1"]]),So=R({__name:"LeftMode",setup(n){const{isMobile:e}=se(),t=oe(),l=J(),{showTagsView:a,fixedHeader:o}=ne(l),s=M(()=>({hideSidebar:!t.sidebar.opened,openSidebar:t.sidebar.opened,withoutAnimation:t.sidebar.withoutAnimation,mobile:e.value})),r=()=>{t.closeSidebar(!1)};return(c,m)=>(u(),E("div",{class:U([s.value,"app-wrapper"])},[s.value.mobile&&s.value.openSidebar?(u(),E("div",{key:0,class:"drawer-bg",onClick:r})):I("",!0),d(f($e),{class:"sidebar-container"}),C("div",{class:U([{hasTagsView:f(a)},"main-container"])},[C("div",{class:U([{"fixed-header":f(o)},"layout-header"])},[d(f(Me)),ve(d(f(Ae),null,null,512),[[he,f(a)]])],2),d(f(Te),{class:"app-main"})],2)],2))}}),ko=D(So,[["__scopeId","data-v-79281f6e"]]),xo={class:"app-wrapper"},Co={class:"fixed-header layout-header"},To={class:"content"},Eo=R({__name:"TopMode",setup(n){const e=J(),{showTagsView:t,showLogo:l}=ne(e);return(a,o)=>(u(),E("div",xo,[C("div",Co,[C("div",To,[f(l)?(u(),k(f(Ee),{key:0,collapse:!1,class:"logo"})):I("",!0),d(f(Me),{class:"navigation-bar"})]),ve(d(f(Ae),null,null,512),[[he,f(t)]])]),C("div",{class:U([{hasTagsView:f(t)},"main-container"])},[d(f(Te),{class:"app-main"})],2)]))}}),$o=D(Eo,[["__scopeId","data-v-da4d3997"]]),Vo={class:"fixed-header layout-header"},Mo={class:"content"},Ao=R({__name:"LeftTopMode",setup(n){const e=oe(),t=J(),{showTagsView:l,showLogo:a}=ne(t),o=M(()=>({hideSidebar:!e.sidebar.opened}));return(s,r)=>(u(),E("div",{class:U([o.value,"app-wrapper"])},[C("div",Vo,[f(a)?(u(),k(f(Ee),{key:0,collapse:!1,class:"logo"})):I("",!0),C("div",Mo,[d(f(Me)),ve(d(f(Ae),null,null,512),[[he,f(l)]])])]),C("div",{class:U([{hasTagsView:f(l)},"main-container"])},[d(f($e),{class:"sidebar-container"}),d(f(Te),{class:"app-main"})],2)],2))}}),Io=D(Ao,[["__scopeId","data-v-b05e214b"]]),we="--v3-tagsview-height",Lo=R({__name:"index",setup(n){$t();const{setWatermark:e,clearWatermark:t}=ft(),{isMobile:l}=se(),{isLeft:a,isTop:o,isLeftTop:s}=ae(),r=J(),{showSettings:c,showTagsView:m,showWatermark:p,showGreyMode:i,showColorWeakness:b}=ne(r),v=M(()=>({showGreyMode:i.value,showColorWeakness:b.value})),h=ce(we);return de(()=>{m.value?De(we,h):De(we,"0px")}),de(()=>{p.value?e("V3 Admin Vite"):t()}),(w,x)=>(u(),E("div",{class:U(v.value)},[f(a)||f(l)?(u(),k(ko,{key:0})):f(o)?(u(),k($o,{key:1})):f(s)?(u(),k(Io,{key:2})):I("",!0),f(c)?(u(),k(f(wo),{key:3},{default:_(()=>[d(f(po))]),_:1})):I("",!0)],2))}}),Bo=D(Lo,[["__scopeId","data-v-f8f963f5"]]);export{Bo as default};
