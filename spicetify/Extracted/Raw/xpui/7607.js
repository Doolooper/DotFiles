"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7607],{27607:(e,t,a)=>{a.d(t,{z2:()=>$});var i=a(30758),r=a(97500),n=a.n(r),s=a(96111),l=a(40638),o=a(27102);function c(e,t,a){const i=e.current;if(null===i)return 0;const r=i.getBoundingClientRect();return"vertical"===a?1-Math.max(0,Math.min((t.clientY-r.top)/r.height,1)):Math.max(0,Math.min((t.clientX-r.left)/r.width,1))}var h=a(68815),u=a(14343),d=a(77567);const f=20,g=[{name:"dark",frames:f},{name:"normal",frames:f},{name:"dark",frames:f},{name:"normal",frames:f},{name:"dark",frames:320},{name:"dark",frames:80,isStartOfFlashlightEnter:!0},{name:"flashlight-on",frames:f},{name:"dark",frames:f},{name:"flashlight-on",frames:f},{name:"dark",frames:40},{name:"flashlight-on",isInfinite:!0},{name:"dark",frames:f,isStartOfExit:!0},{name:"flashlight-on",frames:f},{name:"dark",frames:f},{name:"flashlight-on",frames:f},{name:"dark",frames:f},{name:"normal",isInfinite:!0,isEndOfExit:!0}],m=200;function b(e,t){const a=document.createElement("canvas"),i=a.getContext("2d");if(null===i)return null;const r=Math.sqrt(e**2+t**2),n=m;return a.width=r/1.5+2*n,a.height=r+2*n,i.translate(n,n),{canvas:a,context:i,width:a.width-2*n,height:a.height-2*n,padding:n}}function v(e,t,a,i,r=0){const n=i/2*Math.PI/180,s=a/Math.cos(n),l=Math.sin(n)*s*2;e.beginPath(),e.moveTo((t-l)/2,r),e.lineTo(t/2,r+a),e.lineTo((t-l)/2+l,r),e.closePath()}function p(e,t){const a=function(e,t){const a=(0,i.useMemo)((()=>{const e=new Image;return e.src=(0,d.b)("images/stranger-things-nether-bottom-left.png"),e}),[]),r=(0,i.useMemo)((()=>{const e=new Image;return e.src=(0,d.b)("images/stranger-things-nether-bottom-right.png"),e}),[]);return function(i){if(r){const a=e-r.naturalWidth,n=t-r.naturalHeight;i.drawImage(r,0,0,r.naturalWidth,r.naturalHeight,a,n,r.naturalWidth,r.naturalHeight)}if(a){const e=0,r=t-a.naturalHeight;i.drawImage(a,0,0,a.naturalWidth,a.naturalHeight,e,r,a.naturalWidth,a.naturalHeight)}}}(e,t),[r,n]=(0,i.useState)(y(e,t)),[s,l]=(0,i.useState)(w(e,t));return(0,i.useEffect)((()=>{n(y(e,t)),l(w(e,t))}),[e,t]),(i,n,l,o)=>{if(!r||!s)return;const c=l/100,h=n.left+n.width*c,u=n.top+n.height/2;let d=0;d=c>.5?(c-.5)/.5*-60:60-c/.5*60;const f=r.width,m=r.height,b=-r.width/2,v=-r.height,p=f,y=m;i.save(),i.fillStyle="rgba(0, 0, 0, 0.85)",i.fillRect(0,0,e,t);const w=i.createLinearGradient(e/2,0,e/2,t);w.addColorStop(0,"rgba(57, 139, 216, 0.3)"),w.addColorStop(1,"rgba(0, 29, 62, 0.15)"),i.fillStyle=w,i.fillRect(0,0,e,t),"flashlight-on"===g[o].name?(i.save(),i.translate(h,u),i.rotate(d*Math.PI/180),i.globalCompositeOperation="destination-out",i.drawImage(r,0,0,f,m,b,v+100,p,y),i.restore(),a(i),i.save(),i.translate(h,u),i.rotate(d*Math.PI/180),i.globalCompositeOperation="source-over",i.drawImage(s,0,0,f,m,b,v+100,p,y),i.restore()):a(i),i.restore()}}function y(e,t){const a=b(e,t);if(!a)return null;const{canvas:i,context:r,width:n,height:s,padding:l}=a,o=r.createLinearGradient(n/2,0,n/2,s);o.addColorStop(0,"rgba(0, 0, 0, 1)"),o.addColorStop(1,"rgba(0, 0, 0, 0)");const c=r.createLinearGradient(n/2,0,n/2,s);return c.addColorStop(.7,"rgba(0, 0, 0, 1)"),c.addColorStop(1,"rgba(0, 0, 0, 0)"),r.save(),r.fillStyle="rgba(0, 0, 0, 1)",v(r,n,s,30,120),r.filter="blur(10px)",r.fill(),r.restore(),r.globalCompositeOperation="destination-out",r.fillStyle=c,r.fillRect(-l,-l,n+2*l,s+2*l),r.globalCompositeOperation="source-over",r.fillStyle="rgba(0, 0, 0, 1)",v(r,n,s,5,40),r.filter="blur(30px)",r.fill(),r.fillStyle="rgba(0, 0, 0, 1)",v(r,n,s,30,80),r.filter="blur(40px)",r.fill(),r.restore(),r.globalCompositeOperation="destination-out",r.fillStyle=o,r.fillRect(-l,-l,n+2*l,s+2*l),i}function w(e,t){const a=b(e,t);if(!a)return null;const{canvas:i,context:r,width:n,height:s,padding:l}=a;r.save(),r.fillStyle="rgba(80, 170, 255, 0.6)",v(r,n,s,30,120),r.filter="blur(10px)",r.fill(),r.restore();const o=r.createLinearGradient(n/2,0,n/2,s);o.addColorStop(.7,"rgba(0, 0, 0, 1)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),r.globalCompositeOperation="destination-out",r.fillStyle=o,r.fillRect(-l,-l,n+2*l,s+2*l),r.globalCompositeOperation="source-over",r.fillStyle="rgba(80, 170, 255, 0.8)",v(r,n,s,5,40),r.filter="blur(30px)",r.fill(),r.fillStyle="rgba(80, 170, 255, 0.4)",v(r,n,s,30,150),r.filter="blur(40px)",r.fill(),r.restore(),r.save(),r.translate(n/2,s-140),r.scale(1,10),r.fillStyle="rgba(198, 238, 251, 0.2)",r.filter="blur(24px)",r.beginPath(),r.arc(0,0,22,0,2*Math.PI),r.fill(),r.fillStyle="rgba(234, 255, 255, 0.2)",r.filter="blur(18px)",r.beginPath(),r.arc(0,0,20,0,2*Math.PI),r.fill(),r.restore(),r.save(),r.translate(n/2,s-70),r.scale(1,5),r.fillStyle="rgba(198, 238, 251, 0.1)",r.filter="blur(14px)",r.beginPath(),r.arc(0,0,18,0,2*Math.PI),r.fill(),r.fillStyle="rgba(234, 255, 255, 0.1)",r.filter="blur(8px)",r.beginPath(),r.arc(0,0,20,0,2*Math.PI),r.fill(),r.restore(),r.fillStyle="rgba(100, 190, 255, 1)",r.filter="blur(22px)",r.beginPath(),r.arc(n/2,s+100,20,0,2*Math.PI),r.fill(),r.fillStyle="rgba(198, 238, 251, 1)",r.filter="blur(4px)",r.beginPath(),r.arc(n/2,s+100,14,0,2*Math.PI),r.fill(),r.fillStyle="rgba(234, 255, 255, 1)",r.filter="blur(1px)",r.beginPath(),r.arc(n/2,s+100,12,0,2*Math.PI),r.fill();const c=r.createLinearGradient(n/2,0,n/2,s);return c.addColorStop(0,"rgba(0, 0, 0, 1)"),c.addColorStop(1,"rgba(0, 0, 0, 0)"),r.globalCompositeOperation="destination-out",r.fillStyle=c,r.fillRect(-l,-l,n+2*l,s+2*l),r.globalCompositeOperation="source-over",i}const S=100,x=[{size:6,alpha:.5},{size:6,alpha:.4},{size:12,alpha:.3},{size:12,alpha:.3},{size:12,alpha:.3},{size:14,alpha:.2},{size:20,alpha:.2},{size:30,alpha:.2},{size:40,alpha:.1}],M=64,E=8,C=2;function I(e,t){const a=(0,i.useMemo)((()=>{const e=new Image;return e.src=(0,d.b)("images/stranger-things-spores.png"),e}),[]),[r,n]=(0,i.useState)(k(e,t));return(0,i.useEffect)((()=>{r?function(e,t,a){e.forEach((e=>{e.x=Math.random()*t,e.y=Math.random()*a}))}(r,e,t):n(k(e,t))}),[e,t,r]),function(i){null!==a&&r.forEach((r=>{r.x-=r.directionX*r.velocityX,r.y-=r.directionY*r.velocityY,r.y>t+10?(r.x=Math.random()*e,r.y=-10):r.x<-10&&(r.x=e+10,r.y=Math.random()*t);const n=r.spriteSheetX,s=r.spriteSheetY,l=M,o=M,c=r.x-r.size/2,h=r.y-r.size/2,u=r.size,d=r.size;i.save(),i.globalAlpha*=r.alpha,i.drawImage(a,n,s,l,o,c,h,u,d),i.restore()}))}}function k(e,t){const a=[];for(let i=0;i<S;i++){const i=Math.floor(Math.random()*x.length),r=Math.floor(Math.random()*E),n=Math.floor(Math.random()*C),s=x[i].size,l=x[i].alpha;a.push({alpha:l,size:s,spriteSheetX:r*M,spriteSheetY:n*M,x:Math.random()*e,y:Math.random()*t,directionX:Math.random()>.5?1:-1,directionY:Math.random()>.5?1:-1,velocityX:s/300,velocityY:s/400})}return a}class P{_subscribers=[];_active=!1;unsubscribeToActivity(e){const t=this._subscribers.findIndex((t=>t.fn===e));-1!==t&&(clearTimeout(this._subscribers[t].inactiveTimeout),this._subscribers.splice(t,1))}subscribeToActivity(e,t){this._subscribers.push({fn:t,msInactive:e,isActive:!1})}enableActivityMonitor(){window.addEventListener("mousemove",this._onActivity),window.addEventListener("mouseup",this._onActivity),window.addEventListener("keydown",this._onActivity),window.addEventListener("scroll",this._onActivity,!0)}disableActivityMonitor(){window.removeEventListener("mousemove",this._onActivity),window.removeEventListener("mouseup",this._onActivity),window.removeEventListener("keydown",this._onActivity),window.removeEventListener("scroll",this._onActivity,!0),this._subscribers.forEach((e=>clearTimeout(e.inactiveTimeout))),this._subscribers=[]}_onActivity=()=>{this._subscribers.forEach((e=>{this._active||(this._active=!0,e.fn(this._active)),clearTimeout(e.inactiveTimeout),e.inactiveTimeout=setTimeout((()=>{this._active=!1,e.fn(this._active)}),e.msInactive)}))}}class T{frame=0;lastPhaseFrame=0;phase=0;animationFrameRequestId=null;flickerTimerId=null;isPlaying=!0;start(){this.lastPhaseFrame=this.frame,this.phase=0;const e=()=>setTimeout((()=>{this.flickerTimerId=e(),this.isPlaying&&g[this.phase].isInfinite&&this.setPhase(g.findIndex((e=>e.isStartOfFlashlightEnter)))}),15e3*Math.random()+5e3);this.flickerTimerId=e()}stop(){const e=g.findIndex((e=>e.isStartOfExit));this.phase<e&&this.setPhase(e),null!==this.flickerTimerId&&clearTimeout(this.flickerTimerId)}setPhase(e){this.lastPhaseFrame=this.frame,this.phase=e}}const D="TNGv07zrye9gB_3ukweR";var _=a(86070);const R=e=>{const{getPercentage:t,isDragging:a=!1,isPlayingStrangerThings:r=!1,progressBar:n}=e,s=(0,i.useMemo)((()=>new P),[]),l=(0,i.useMemo)((()=>new T),[]),o=(0,i.useRef)(null),[c,h]=(0,i.useState)(null),[u,d]=(0,i.useState)(window.innerHeight),[f,m]=(0,i.useState)(window.innerWidth),[b,v]=(0,i.useState)(!1),[y,w]=(0,i.useState)(!1),S=I(f,u),x=p(f,u),M=(0,i.useCallback)((e=>{!a&&r&&(e?l.stop():(l.start(),w(!0)))}),[a,r,l]),E=(0,i.useCallback)((()=>{r&&(l.setPhase(g.findIndex((e=>e.isStartOfFlashlightEnter))),w(!0))}),[r,l]),C=(0,i.useCallback)((()=>{l.stop()}),[l]),k=(0,i.useCallback)((()=>{if(!y)return void v(!0);v(!1);const e=window.innerHeight,t=window.innerWidth;m(t),d(e)}),[y]),R=(0,i.useCallback)((()=>{if(!o.current)return;const{frame:e,lastPhaseFrame:a,phase:i}=l;if(l.frame=e+1,g[i].isEndOfExit)w(!1);else{if(g[i].isInfinite||e-a===g[i].frames&&l.setPhase(i+1),o.current.width=f,o.current.height=u,"normal"!==g[i].name){const e=o.current.getContext("2d");if(!e||!c)return;const a=t();x(e,c,a,i),S(e)}l.animationFrameRequestId=requestAnimationFrame(R)}}),[u,f,x,S,t,c,l]);return(0,i.useEffect)((()=>{window.addEventListener("resize",k);const e=s;return e.enableActivityMonitor(),e.subscribeToActivity(5e3,M),()=>{window.removeEventListener("resize",k),e.disableActivityMonitor(),e.unsubscribeToActivity(M)}}),[s,M,k]),(0,i.useEffect)((()=>{r||l.stop()}),[r,l]),(0,i.useEffect)((()=>{a?E():a||C()}),[a,E,C]),(0,i.useEffect)((()=>{y?(b&&k(),l.animationFrameRequestId=requestAnimationFrame(R)):l.animationFrameRequestId&&cancelAnimationFrame(l.animationFrameRequestId)}),[y,R,k,b,l]),(0,i.useEffect)((()=>{n.current&&h(n.current.getBoundingClientRect())}),[f,u,n]),y?(0,_.jsx)("canvas",{className:D,ref:o,width:f,height:u}):null};var A=a(38501);const O=e=>(0,u.NC)(A.c3z,{loadingValue:!1})&&e.isPlayingStrangerThings?(0,_.jsx)(R,{...e}):null;var z=a(44074),F=a(82935);const L="playback-progressbar",q="playback-progressbar-isInteractive",N="progress-bar",j="x-progressBar-progressBarBg",W="x-progressBar-sliderArea",B="oShi2lRbnhFkEr2LlUqC",H="ZqlJ1uWjMeen9ye7Y7GC",X="i_sFCqXc9E62sDov95kp",Y="x-progressBar-fillColor",K="VI_bMRxDl9fS6qksct7W",G="sW0M_K97doEB3B4Ts58i",V="progress-bar--isDragging",Q="progress-bar__slider",Z="GfN5haHC77OxfQqkHlIi",U="OVsKgmQSwhS2WVE1B9Kc",$=({value:e,max:t,step:a,labelText:r,isInteractive:u=!0,forceActiveStyles:d=!1,onDragStart:f,onDragMove:g,onDragEnd:m,saberConfig:b=null,isPlayingStrangerThings:v=!1,isAttackOnTitanEasterEggActive:p,direction:y="horizontal",enableAnimation:w,updateFrequency:S,offFrequencyUpdate:x,className:M,showValueAsTimeOverHandle:E=!1,...C})=>{const I=(0,i.useRef)(null),{isDragging:k,onMouseDown:P}=(({progressBarRef:e,onDragStart:t,onDragMove:a,onDragEnd:r,direction:n="horizontal"})=>{const[s,h]=(0,i.useState)(!1),u=(0,i.useRef)(!1),d=(0,o.ZY)(),f=(0,i.useRef)(t),g=(0,i.useRef)(a),m=(0,i.useRef)(r);f.current=t,g.current=a,m.current=r;const b=(0,l.YQ)((t=>{g.current(c(e,t,n)),u.current=!0}),20,{leading:!0,maxWait:20});return{isDragging:s,onMouseDown:(0,i.useCallback)((t=>{const a=t=>{h(!1),b.cancel(),m.current(c(e,t,n),{wasDraggedBeforeReleased:u.current}),d?.removeEventListener("pointermove",b),u.current=!1};0===t.button&&(f.current(c(e,t,n)),h(!0),d?.addEventListener("pointermove",b),d?.addEventListener("pointerup",a,{once:!0}),u.current=!1)}),[b,e,n,d])}})({progressBarRef:I,onDragStart:f,onDragMove:g,onDragEnd:m,direction:y}),T=(0,i.useRef)(null),[D,R]=(0,i.useState)(0),A=(0,i.useCallback)((e=>{if(T.current){const t=e.clientX-T.current.getBoundingClientRect().left;t>=0&&R(t/T.current.clientWidth*100)}}),[]),$=u?100*Math.max(0,Math.min(1,e/t)):0,J=d||k,ee=u&&null!==b,te=u&&!(0,z.n)(),{isSeekingWithKeyboard:ae,handleKeyboardProgressStepping:ie}=(({onDragStart:e,onDragMove:t,onDragEnd:a})=>{const[r,n]=(0,i.useState)(!1),s=(0,l.YQ)((e=>{a(e,{wasDraggedBeforeReleased:!1}),n(!1)}),500,{leading:!1,trailing:!0}),o=(0,i.useCallback)((a=>{r||(e(a),n(!0)),t(a),s(a)}),[r,e,t,s]);return{isSeekingWithKeyboard:r,handleKeyboardProgressStepping:o}})({onDragStart:f,onDragMove:g,onDragEnd:m}),re=(0,i.useCallback)((e=>{const t=e.key;if(/^[0-9]$/.test(t)){const e=parseInt(t,10)/10;m(e,{wasDraggedBeforeReleased:!1})}}),[m]),ne=(0,i.useCallback)((()=>$),[$]),se=(0,o.ZY)(),le=(0,i.useRef)(se?.visibilityState),oe=se?.visibilityState,ce=k||x||"hidden"===oe||"hidden"===le.current||ae||0===e;le.current=oe;const he=w?B:"",ue=D/100*t;return(0,_.jsxs)("div",{className:n()(L,M,{[q]:u,[H]:ce}),"data-testid":C["data-testid"],children:[(0,_.jsx)(s.o,{disabled:!u,type:"range",min:0,max:t,value:e,step:a,onChange:e=>{ie(parseFloat(e.target.value)/t)},onKeyDown:re,"aria-valuetext":C["aria-valuetext"],children:r}),(0,_.jsxs)("div",{className:n()(N,{[K]:null!==b,[V]:J}),style:{...ee?b:null,"--progress-bar-transform":`${$}%`,"--hover-bar-transform":`${D}%`,"--progress-bar-duration":`${Number(S)}ms`,...p?{"--fg-color":h.q,"--is-active-fg-color":h.q}:null},ref:T,onPointerDown:P,onMouseMove:E?A:void 0,"data-testid":"progress-bar",children:[ee?(0,_.jsx)("div",{className:G,"data-testid":"progress-bar-saber-overlay"}):null,(0,_.jsxs)("div",{ref:I,className:j,"data-testid":"progress-bar-background",children:[(0,_.jsx)("div",{className:W,children:(0,_.jsx)("div",{className:X})}),(0,_.jsx)("div",{className:W,children:(0,_.jsx)("div",{className:n()(Y,he)})}),(0,_.jsx)("div",{className:n()(Q,he),children:E&&k&&(0,_.jsx)("div",{className:Z,children:(0,F.f)(e)})}),E&&!k&&(0,_.jsx)("div",{className:U,children:(0,F.f)(ue)})]}),te&&(0,_.jsx)("div",{style:{width:"100%"},children:(0,_.jsx)(O,{getPercentage:ne,progressBar:I,isPlayingStrangerThings:v,isDragging:k})})]})]})}},68815:(e,t,a)=>{a.d(t,{q:()=>n,O:()=>s});var i=a(2679);const r="spotify:playlist:37i9dQZF1DWXkVfVmXHa7l",n="#D4000E";function s(){const{isActive:e}=(0,i.l_)(r);return e}}}]);
//# sourceMappingURL=7607.js.map