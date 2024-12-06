import{d as N,K as k,M as C,o as B,c as I,F as w,aE as z,v as n,aF as f,aG as M,l as V,ad as $,aH as T}from"../modules/vue-Cf3ApFHG.js";import{ac as E,ai as F,aj as G,C as D}from"../index-CHksOiaA.js";import{u as L}from"./context-C2s-Q6ra.js";const K=N({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(l){const a=l,{$clicksContext:o}=L(),p=E();let c=+a.size;return Number.isNaN(c)&&(console.warn(`[slidev] Invalid size for VClickGap: ${a.size}`),c=1),k(()=>{const i=o.currentOffset+c-1;o.register(p,{max:i,delta:c})}),C(()=>{o.unregister(p)}),(i,r)=>(B(),I(w))}}),b=["ul","ol"],j=N({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var g,S;const l=+this.every,a=F(this.at),o=typeof a=="string";if(!a){console.warn("[slidev] Invalid at prop for v-clicks component:",a);return}const p=z("click"),c=(s,e)=>$(s,[[p,e,"",{hide:this.hide,fade:this.fade}]]),i=s=>s.flatMap(e=>f(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?i(e.children):[e]);let r=(S=(g=this.$slots).default)==null?void 0:S.call(g);if(!r)return;r=i(G(r));const x=(s,e=1)=>i(s).map(t=>{if(!f(t))return t;if(b.includes(t.type)&&Array.isArray(t.children)){const d=u(t.children,e+1);return n(t,{},d)}return n(t)});let A=1,h=0;const u=(s,e=1)=>i(s).map(t=>{if(!f(t)||t.type===M)return t;const d=+a+Math.ceil(A++/l)-1;let m;e<+this.depth&&Array.isArray(t.children)?m=n(t,{},x(t.children,e)):m=n(t);const v=d-h;return h=d,c(m,o?v>=0?`+${v}`:`${v}`:d)}),y=()=>V(K,{size:+a+Math.ceil((A-1)/l)-1-h});if(this.handleSpecialElements){if(r.length===1&&b.includes(r[0].type)&&Array.isArray(r[0].children))return n(r[0],{},[...u(r[0].children),y()]);if(r.length===1&&r[0].type==="table"){const s=r[0];if(Array.isArray(s.children))return n(s,{},s.children.map(e=>f(e)?e.type==="tbody"&&Array.isArray(e.children)?n(e,{},[...u(e.children),y()]):n(e):e))}}return[...u(r),y()]}}),U=N({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:l=>n("span",l)}},render(){return n(j,{every:D,at:this.at,hide:this.hide,fade:this.fade,handleSpecialElements:!1},{default:()=>{var l,a;return(a=(l=this.$slots).default)==null?void 0:a.call(l).map(o=>o.type===T?this.wrapText(o):o)}})}});export{U as _};