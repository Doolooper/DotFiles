"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9033],{30343:(e,r,n)=>{n.d(r,{o:()=>h});var s=n(31417),a=n(75134),t=n(43743),i=n(38996),o=n(89994),d=n(81288),l=n(65462),c=n(70275),u=n(59029),m=n(86070);const h=({images:e,name:r,uri:n,publisher:h,sharingInfo:p,mediaType:g,isHero:f=!1,onClick:x,testId:I,index:b,requestId:j,color:w,variant:k,logCardImpressions:y=!1})=>{let C;const v=g===u.Q.MIXED?s.Ru.get("type.show"):s.Ru.get("card.tag.show");return C=f?(0,m.jsx)(o.A,{index:b,onClick:x,delegatePlayback:!0,headerText:r,featureIdentifier:"show",uri:n,isPlayable:!1,renderCardImage:()=>(0,m.jsx)(t.M,{isHero:!0,images:e,color:w}),renderSubHeaderContent:()=>(0,m.jsxs)(i.c,{isHero:!0,children:[(0,m.jsx)(d.t,{children:v}),h&&(0,m.jsx)("span",{children:h})]}),testId:I,requestId:j,logCardImpressions:y}):(0,m.jsx)(a.Z,{variant:k,onClick:x,isPlayable:!1,delegatePlayback:!0,headerText:r,featureIdentifier:"show",uri:n,index:b,renderCardImage:()=>(0,m.jsx)(t.M,{isHero:f,images:e,color:w}),renderSubHeaderContent:()=>(0,m.jsx)(i.c,{children:h&&(0,m.jsx)("span",{children:h})}),testId:I,requestId:j,logCardImpressions:y}),(0,m.jsx)(l.h,{menu:(0,m.jsx)(c.H,{uri:n,sharingInfo:p}),children:C})}},5522:(e,r,n)=>{n.d(r,{ShowMoreLikeThis:()=>p});var s=n(30758),a=n(85387),t=n(6772),i=n(31417),o=n(30343),d=n(15292),l=n(41755),c=n(80895),u=n(92255),m=n(16717),h=n(86070);const p=s.memo((function(){const{showId:e=""}=(0,a.g)(),r=(e=>`spotify:show:${e}`)(e),{data:n}=(0,l.v)({uri:r}),p=n?.seoRecommendedPodcast.totalCount,g=n?.seoRecommendedPodcast.items;return(0,h.jsxs)("div",{className:"contentSpacing",children:[(0,h.jsx)(d.Q,{children:i.Ru.get("internal-link-recommender.more-podcasts-like-this")}),(0,h.jsx)(u.$,{title:i.Ru.get("internal-link-recommender.more-podcasts-like-this"),total:p,showAll:!0,fullPage:!0,rowGap:t.lT,children:g?.map(((e,r)=>{if(!(0,c.K)(e.data))return(0,h.jsx)(s.Fragment,{},r);const n=e.data;return(0,h.jsx)(o.o,{uri:n.uri,name:n.name,images:n.coverArt?.sources||[],publisher:n.publisher?.name??"",sharingInfo:null,mediaType:(0,m.w)(n.mediaType),index:r},n.uri)}))})]})}))},41755:(e,r,n)=>{n.d(r,{v:()=>i});var s=n(57776),a=n(59147);const t=new s.l("internalLinkRecommenderShow","query","6c369ff272a666b31fef1629c169925a1bd80f372195396c82304142cacd89e8",null),i=(e,r)=>(0,a.I)(t,e,r)},80895:(e,r,n)=>{n.d(r,{K:()=>s});const s=e=>{return r=e,"NotFound"!==r?.__typename&&"GenericError"!==r?.__typename&&"Podcast"===e.__typename;var r}}}]);
//# sourceMappingURL=xpui-routes-show-more-like-this.js.map