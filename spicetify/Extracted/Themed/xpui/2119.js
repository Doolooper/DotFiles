"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2119],{93500:(e,t,a)=>{a.d(t,{G:()=>r});var s=a(31417),i=a(57292),n=a(86070);function r({totalItems:e,containsTracks:t,containsEpisodes:a,containsAudiobooks:r}){if(0===e)return null;const l=a&&!r&&!t,o=r&&!t&&!a;let c;return c=t&&!a&&!r?s.Ru.get("tracklist-header.songs-counter",e):l?s.Ru.get("tracklist-header.episodes-counter",e):o?s.Ru.get("tracklist-header.audiobooks-counter",e):s.Ru.get("tracklist-header.items-counter",e),(0,n.jsx)(i.q,{children:c})}},23798:(e,t,a)=>{a.d(t,{N:()=>w});var s=a(97500),i=a.n(s),n=a(47422),r=a(17763),l=a(89887),o=a(422),c=a(44481),d=a(30758),u=a(77141);const m="pH79IoVAcUC3Hn_VbS3B",x="v24nSqF2h73Ep3EJNkNl",h="OPvfrmGjqSYso3Me5FCd",p="TCbF8QBxkRc0mqI5_lzg",j="ZYBmZ8ghf3oA7NH2mI7r",y="Jtt6TUrz6TioPQsKXIY7",b="yzZ_VZHrZBb3REPcU7tD";var g=a(86070);const v=({"aria-label":e,children:t})=>{const a=(0,d.useRef)(null),s=(0,r.Oj)();return(0,g.jsx)(u.s,{focusTrapOptions:{initialFocus:()=>a.current??!1,onPostDeactivate:()=>{s({type:"close"})}},children:(0,g.jsx)("div",{"aria-label":e,tabIndex:-1,ref:a,className:x,children:t})})},k=({title:e,body:t,cta:a,onClose:s})=>(0,g.jsxs)(v,{"aria-label":e,children:[(0,g.jsx)(o.E,{as:"div",variant:"bodyMediumBold",className:h,children:e}),(0,g.jsx)(o.E,{as:"div",variant:"bodySmall",className:p,children:t}),(0,g.jsx)("div",{className:j,children:(0,g.jsx)(c.$,{size:"small",colorSet:"invertedLight",onClick:s,children:a})})]});var C=a(93523),N=a(31417);const R=({onClose:e})=>{const t=N.Ru.get("paywalls.modal-heading"),a=(0,g.jsxs)(g.Fragment,{children:[N.Ru.get("paywalls.modal-body-p1"),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),N.Ru.get("paywalls.modal-body-p2"),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),N.Ru.get("paywalls.modal-body-p3")]});return(0,g.jsxs)(v,{"aria-label":t,children:[(0,g.jsx)(o.E,{as:"div",variant:"bodyMediumBold",className:h,children:t}),(0,g.jsx)(o.E,{as:"div",variant:"bodySmall",className:p,children:a}),(0,g.jsx)("div",{className:j,children:(0,g.jsx)(C.H,{size:"small",semanticColor:"textBase",onClick:e,children:N.Ru.get("close")})})]})};var E=a(86563),A=a(34766);const T=({upsellExplanation:e,gatedEntityRelations:t,onClose:a})=>{const s=e.title,n=t.entitiesWithValueProps.at(0),r=n?.summary?.forUserWithoutAccess,l=n?.valueProps.map((({displayText:e})=>e))??[],d=l?.length>1;return(0,g.jsxs)(v,{"aria-label":s,children:[(0,g.jsx)(o.E,{as:"div",variant:"bodyMediumBold",className:h,children:s}),(0,g.jsxs)(o.E,{as:"div",variant:"bodySmall",className:p,children:[r,l&&d&&(0,g.jsx)(E.j,{hasTextSeparator:!0,semanticColor:"textBase",children:l})]}),(0,g.jsxs)("div",{className:i()(j,y),children:[(0,g.jsx)(C.H,{size:"small",condensed:!0,onClick:a,children:N.Ru.get("action-trigger.button.not-now")}),(0,g.jsx)(c.$,{size:"small",colorSet:"invertedLight",href:e.url,iconTrailing:A.H,children:e.cta})]})]})},f=({title:e,body:t,cta:a,url:s,onClose:i})=>(0,g.jsxs)(v,{"aria-label":e,children:[(0,g.jsx)(o.E,{as:"div",variant:"bodyMediumBold",className:h,children:e}),(0,g.jsx)(o.E,{as:"div",variant:"bodySmall",className:p,children:t}),(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)(C.H,{size:"small",semanticColor:"textBase",onClick:i,children:N.Ru.get("close")}),(0,g.jsx)(c.$,{size:"small",colorSet:"invertedLight",href:s,children:a})]})]});var P=a(6038),U=a(62270);const I=({showUri:e})=>{const t=(0,r.Oj)(),a=function(e){const t=(0,U.T)(),[a,s]=(0,d.useState)(null);return(0,d.useEffect)((()=>{!async function(){try{const a=await t.getAccessInfo(e);s(a)}catch(e){console.error(e),s(void 0)}}()}),[t,e]),a}(e);if(null===a)return null;let s=(0,g.jsx)(R,{onClose:()=>t({type:"close"})});return a?.basic&&(s=(0,g.jsx)(k,{...a.basic,onClose:()=>t({type:"close"})})),a?.upsellLink&&(s=(0,g.jsx)(f,{...a.upsellLink,onClose:()=>t({type:"close"})})),a?.gatedEntityRelations&&a?.upsellLink&&(s=(0,g.jsx)(T,{upsellExplanation:a.upsellLink,gatedEntityRelations:a.gatedEntityRelations,onClose:()=>t({type:"close"})})),(0,g.jsxs)(n.A,{colorSet:"announcement",className:m,onClick:e=>{e.stopPropagation()},onContextMenu:e=>{e.stopPropagation()},children:[s,(0,g.jsx)("div",{"data-popper-arrow":"",className:i()(b)})]})},w=({children:e,enabled:t,showUri:a,renderInline:s=!0})=>t&&a?(0,g.jsx)(P.y,{trigger:"click",action:"toggle",offset:[-2,20],renderInline:s,content:(0,g.jsx)(I,{showUri:a}),children:e}):(0,l.d)(e)?e(!1,(()=>{}),{current:null}):e},550:(e,t,a)=>{a.d(t,{F:()=>l});var s=a(30758),i=a(31417),n=a(26344),r=a(86070);const l=s.memo((function({onClose:e,onRemove:t,isOpen:a,tracks:s,title:l}){return(0,r.jsx)(n.T,{"aria-label":l,titleText:l,onConfirm:a=>{t(s),e(a)},onClose:e,confirmText:i.Ru.get("remove"),descriptionText:i.Ru.get("playlist.remove_multiple_description"),cancelText:i.Ru.get("playlist.delete-cancel"),isOpen:a})}))},6966:(e,t,a)=>{a.d(t,{S:()=>l,z:()=>o});var s=a(30758),i=a(86070);const n=[0,()=>{}],r=(0,s.createContext)(n),l=({children:e})=>{const t=(0,s.useState)(0);return(0,i.jsx)(r.Provider,{value:t,children:e})},o=()=>{const e=(0,s.useContext)(r);if(!e)throw Error("useNrValidItemsContext must be used within a NrValidItemsProvider");return e}},82610:(e,t,a)=>{a.d(t,{W:()=>Me});var s=a(30758),i=a(62411),n=a(85387),r=a(25910),l=a(58920),o=a(17978),c=a(97106),d=a(422),u=a(14343),m=a(10611),x=a(91008),h=a(31417),p=a(98293),j=a(65462),y=a(47863),b=a(50496),g=a(76720),v=a(54622),k=a(28506),C=a(21082),N=a(23798),R=a(39795),E=a(92026),A=a(41616),T=a(84816),f=a(33329),P=a(14178),U=a(86070);const I=({uri:e,imageUrl:t,name:a,showAvatar:i,spec:n,isCompactMode:r=!1})=>{const l=(0,f.s)(),o=(0,s.useCallback)((()=>{n&&l.logInteraction(n.addedByLinkFactory({position:0,uri:e}).hitUiNavigate({destination:e}))}),[l,n,e]);return(0,U.jsx)(j.h,{menu:(0,U.jsx)(T.B,{uri:e}),children:(0,U.jsxs)(C.N,{className:P.A.addedBy,to:e,onClick:o,children:[i&&(0,U.jsx)(A.e,{images:[{url:t,width:null,height:null}],label:a,width:r?16:24,userIconSize:"small"}),(0,U.jsx)(d.E,{variant:"bodySmall",className:"standalone-ellipsis-one-line",children:a})]})})};var w=a(32183),S=a(14563),D=a(3068),B=a(79225);const F="zKHdfiQG6XifMqJCe1Xs",_="F01P0D1xtG9RO_uiHxBK",O="oGvEk0CK5XgIUe0vIgWL",L="aUGJu_1rkM7l_YNH3r86",M=({concertDate:e,concertURI:t,concertVenue:a,index:s,spec:i})=>{const n=(0,f.s)(),r=h.Ru.formatDate((0,B.ad)(e),{weekday:"short",month:"short",day:"numeric"});return(0,U.jsx)(d.E,{className:F,variant:"bodySmall",semanticColor:"textSubdued",children:(0,U.jsxs)(C.N,{to:t,onClick:()=>{const e=i.eventLinkFactory({position:s,uri:t,reason:"Concerts Near You Employee test"}).hitUiNavigate({destination:t});n.logInteraction(e)},className:_,children:[(0,U.jsx)("div",{className:O,children:(0,U.jsx)(D.T,{size:"small"})}),(0,U.jsx)("div",{className:L,children:[r,a].join(" • ")})]})})};var $=a(13083);const V=({dateAdded:e,prefix:t})=>{let a=e.getTime()>0&&h.Ru.formatRelativeDate(e,{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"});return a&&t&&(a=`${t} ${a}`),(0,U.jsx)(d.E,{variant:"bodySmall",semanticColor:"textSubdued",className:"standalone-ellipsis-one-line",children:a})};var z=a(20455),H=a(89402);const W=({eventDate:e,ticketingSiteURL:t})=>{const a=(0,H.W)(),s=h.Ru.formatDate((0,B.ad)(e),{year:"numeric",month:"short",day:"numeric"}),i=h.Ru.get("tracklist.livestream");return(0,B.ad)(e)<new Date?(0,U.jsx)(d.E,{className:P.A.eventDate,variant:"bodySmall",semanticColor:"textSubdued",children:`${i} • ${s}`}):(0,U.jsx)(d.E,{className:P.A.eventDate,variant:"bodySmall",semanticColor:"textSubdued",children:(0,U.jsxs)("a",{href:t,onClick:()=>{a({targetUri:t,intent:"navigate",type:"click"})},children:[(0,U.jsx)(D.T,{className:P.A.eventTicketIcon,height:19}),`${i} • ${s}`]})})},Z=({concertsCount:e="1",concertVenue:t,concertURI:a,index:s,spec:i})=>{const n=(0,f.s)(),r="1"===e?t:h.Ru.get("concerts_near_you.multiple_locations");return(0,U.jsx)(d.E,{className:P.A.eventVenue,variant:"bodySmall",semanticColor:"textSubdued",children:(0,U.jsx)(C.N,{to:a,onClick:()=>{const e=i.eventLinkFactory({position:s,uri:a,reason:"Concerts Near You Employee test"}).hitUiNavigate({destination:a});n.logInteraction(e)},children:r})})};var Y=a(63096);const q=({uri:e,imageUrl:t,displayName:a,username:s,piled:i,onClick:n})=>{const r=(0,U.jsx)(A.e,{images:[{url:t,width:null,height:null}],label:a,width:24,userIconSize:"small",piled:i,displayName:a,username:s,className:P.A.facepileAvatar});return e?(0,U.jsx)(j.h,{menu:(0,U.jsx)(T.B,{uri:e}),children:(0,U.jsx)(C.N,{className:P.A.facepile,to:e,onClick:n,children:r})}):(0,U.jsx)("span",{className:P.A.facepile,children:r})},G=({users:e,spec:t})=>{const a=(0,f.s)();return(0,U.jsx)(s.Fragment,{children:e.slice(0,5).map(((e,s)=>(0,U.jsx)(q,{uri:e.uri,imageUrl:(0,Y.g)(e.images)?.url||"",displayName:e.displayName,username:e.username,piled:s>0,onClick:()=>{if(!t||!e.uri)return;const i=t.addedByLinkFactory({position:s,uri:e.uri}).hitUiNavigate({destination:e.uri});a.logInteraction(i)}},e.uri||e.displayName)))})};var X=a(97500),K=a.n(X),Q=a(93240),J=a(64143),ee=a(60384);const te=({isDisliked:e,feedbackPath:t,feedbackUri:a,deleteFeedbackPath:i,spec:n,onClick:r,name:l,contextUri:o})=>{const c=(0,f.s)(),{enqueueSnackbar:d}=(0,Q.dh)(),{setDislikeFeedback:u,removeDislikeFeedback:m}=(0,ee.I)({uri:a,setFeedbackPath:t,removeFeedbackPath:i,contextUri:o}),x=(0,s.useCallback)((async()=>{m(),r?.(),n&&o&&c.logInteraction(n.addRecommendationButtonFactory().hitAddToPlaylist({playlist:o,itemToBeAdded:a}))}),[m,r,n,o,c,a]),p=(0,s.useCallback)((async()=>{u(),r?.(),d(h.Ru.get("feedback.hide-song",l)),n&&o&&c.logInteraction(n.removeRecommendationButtonFactory().hitRemoveRecommendation({recommendedItemUri:a,contextUri:o}))}),[u,r,d,l,n,o,c,a]);return(0,U.jsx)(J.O,{className:K()(P.A.rowFeedbackButton,P.A.rowFeedback),onClick:e?x:p,isDisliked:e,size:"small",label:e?h.Ru.get("playback-control.un-ban"):h.Ru.get("playback-control.ban")})};var ae=a(68118),se=a(27305),ie=a(87619),ne=a(591),re=a(95931),le=a(67799);const oe=({releaseDate:e})=>(0,U.jsx)(d.E,{variant:"bodySmall",children:(0,B.gD)((0,B.ad)(e))});var ce=a(93627),de=a(12499),ue=a(95797),me=a(76633),xe=a(35522),he=a(4266),pe=a(87732),je=a(33593),ye=a(44335),be=a(3436),ge=a(45807),ve=a(14409),ke=a(53133),Ce=a(55926),Ne=a(42621),Re=a(38501),Ee=a(99041),Ae=a(54003),Te=a(97253),fe=a(18663),Pe=a(44672),Ue=a(53377),Ie=a(57270),we=a(85346),Se=a(28340),De=a(21549),Be=a(7307),Fe=a(59029),_e=a(85907),Oe=a(15838);const Le=e=>e?.type===Be.c.SHOW,Me=s.memo((function({uri:e,uid:t,name:a,duration_ms:A,artists:T,albumOrShow:f,isMOGEFRestricted:D,isExplicit:B,isPlayable:F,isLocal:_=!1,isPaywalled:O,isUserSubscribed:L,index:H,playIndex:q=null,isMixedMedia:X,addedBy:K,hasDecoratedAddedBy:Q,dateAdded:J,release_date:ee,type:Be,imgUrl:Me,contextUri:$e,onMove:Ve,onInsert:ze,usePlayContextItem:He,allowedDropTypes:We,feedbackPath:Ze,feedbackUri:Ye,deleteFeedbackPath:qe,isDisliked:Ge,ticketingSiteURL:Xe="",eventDate:Ke,concertsCount:Qe,concertDate:Je,concertURI:et="",concertVenue:tt,isConcert:at,isBlend:st=!1,canRemove:it,playlistName:nt,authorName:rt,isOutOfMarket:lt,consumptionCapExplanation:ot,isOwnedBySelf:ct=!1,isCompactMode:dt=!1,hasAssociatedVideo:ut=!1,bpm:mt,musicKey:xt,gatedEntityRelations:ht,isBanned:pt}){const{spec:jt}=(0,De.r)(m.i,{data:{position:H,reason:"",uri:e}}),yt=(0,i.wA)(),bt=(0,n.Zp)(),{filter:gt}=(0,s.useContext)(R.g),vt=(0,u.NC)(Re.MCN),kt=(0,we.T)(e),Ct=(0,u.NC)(Re.enc),Nt=(0,Ie.b)($e,e,pt),Rt=(0,Ue.A)(e,$e,!!it,Nt),{isPlayable:Et,isAnyArtistBanned:At}=(0,Ne.g)(e,{isPlayable:F,isLocal:_,isOutOfMarket:lt,artistUris:T?.map((e=>e.uri)),hasContextualBan:Nt}),{unBanArtists:Tt}=(0,be.M)(T?.map((e=>e.uri))??[]),ft=(0,me.w)(),{enqueueSnackbar:Pt}=(0,ke.d)(),Ut="episode"===Be,It="audiobook"===Be,wt="track"!==Be&&Le(f)&&f.mediaType===Fe.Q.VIDEO,St=O&&!L,Dt=It&&St,{badges:Bt,hasBadges:Ft}=(0,Oe.b)({downloadAvailability:kt,isExplicit:B,isMOGEFRestricted:D,isPaywalled:O,hasAssociatedVideo:ut}),_t=(0,Ce.c)();let Ot=H+1;X&&(Ot=wt?(0,U.jsx)(r.B,{"data-testid":"video-icon",size:"small","aria-hidden":"true"}):Ut?(0,U.jsx)(l.L,{"data-testid":"podcast-icon",size:"small","aria-hidden":"true"}):It?(0,U.jsx)(o.l,{"data-testid":"audiobook-icon",size:"small","aria-hidden":"true"}):(0,U.jsx)(c.v,{"data-testid":"track-icon",size:"small","aria-hidden":"true"}));let Lt=(0,U.jsx)(v.P,{uri:e,uid:t,albumUri:f?.uri,artists:T,contextUri:$e,isBanned:Nt||Ge,canBan:Rt,canBeRemovedFromPlaylist:it,contextName:nt});Ut?Lt=(0,U.jsx)(b.b,{uri:e,uid:t,showUri:f?.uri,contextUri:$e,canBeRemovedFromPlaylist:it}):_?Lt=(0,U.jsx)(g.A,{uri:e,uid:t,contextUri:$e,canBeRemovedFromPlaylist:it}):It&&(Lt=(0,U.jsx)(y.p,{uri:e,uid:t,contextUri:$e,includeGoToAudiobook:!0,canBeRemovedFromPlaylist:it}));let Mt=T?.map((e=>e.name)).join(h.Ru.getSeparator())||"";Ut&&Le(f)?Mt=f.publisher:It&&(Mt=rt||"");const $t=K?.[0],Vt=(0,Y.g)($t?.images,{desiredWidth:24,desiredLabel:"small"}),zt=(0,Se.P)({uri:e},{featureIdentifier:"playlist"}),Ht=He({uid:t,uri:e,index:q??H}),{isActive:Wt,isPlaying:Zt,triggerPlay:Yt,togglePlay:qt}=It?zt:Ht,Gt=()=>(0,U.jsx)(ue.p,{titleText:a,children:(0,U.jsx)(k.M,{searchWords:[gt],textToHighlight:a})}),Xt=(0,s.useCallback)(((e,t)=>{It&&ot?yt((0,p._3)(ot)):Yt({loggingParams:t})}),[ot,yt,It,Yt]),Kt=(0,s.useCallback)(((t,a)=>{It&&ot?yt((0,p._3)(ot)):Dt?bt((0,x.o_h)(e).toURLPath(!0)):qt({loggingParams:a})}),[ot,yt,It,bt,qt,Dt,e]),Qt=vt&&(0,ge.v)(ht,e);return(0,U.jsx)(Pe.pZ,{value:"row",index:H,children:(0,U.jsx)(N.N,{renderInline:!1,enabled:!0,showUri:f?.uri,children:(t,s)=>(0,U.jsx)(j.h,{menu:Lt,children:(0,U.jsx)(xe.w,{uri:e,contextUri:$e,index:H,onTriggerPlay:Xt,isCompactMode:dt,onTriggerPaywall:t=>{Dt?bt((0,x.o_h)(e).toURLPath(!0)):s(t)},onDoubleClick:()=>{It?bt((0,x.o_h)(e).toURLPath(!0)):Pt(h.Ru.get("feedback.unable-to-play"))},isLocked:St,isActive:Wt,ariaRowIndex:H+1,isPlayable:Et,isAnyArtistBanned:At,isBannedInContext:Nt,contextName:nt,handleArtistBanUndoClick:Tt,ageRestricted:D,dragMetadata:{name:a,createdBy:Mt},onMove:Ve,onInsert:ze,allowedDropTypes:We,spec:jt,canRemovePlaylistItems:it,isExplicit:B,children:ft.map((({columnType:t,options:s},i)=>{const n=(0,pe.y)(i,t,ft);return(0,U.jsx)(n,{ariaColIndex:i,children:(()=>{switch(t){case he.$.INDEX:return(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(N.N,{showUri:f?.uri??"",renderInline:!1,enabled:St,children:(0,U.jsx)(ne.$,{uri:e,playAriaLabel:h.Ru.get("tracklist.a11y.play",a,Mt),onClick:Kt,isPlaying:Zt,isActive:Wt,isLocked:St,spec:jt,children:(0,U.jsx)(le.a,{children:Ot})})})});case he.$.TITLE_AND_ARTIST:case he.$.TITLE_AND_AUTHOR:return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(ae.e,{src:Me,isVideo:wt,isEpisode:Ut}),(0,U.jsxs)(se.l,{children:[_t||It?(0,U.jsx)(C.N,{to:e,className:P.A.rowTitle,"data-testid":"internal-track-link",children:Gt()}):Gt(),Ft&&(0,U.jsxs)(S.P,{children:[Bt.download&&(0,U.jsx)(Te._,{}),Bt.explicit&&(0,U.jsx)(Ee.U,{}),Qt?(0,U.jsx)(ve.x,{gatedEntityRelations:ht}):Bt.paid&&(0,U.jsx)(Ae.y,{}),Bt.nineteen&&(0,U.jsx)(fe.q,{className:P.A.nineteen,size:16}),Bt.hasAssociatedVideo&&(0,U.jsx)(je.l,{})]}),(0,U.jsxs)(ce.p,{children:[!Ut&&!wt&&T&&(0,U.jsx)(E.E,{nonInteractive:_,artists:T,filter:gt,spec:jt}),(Ut||It)&&!wt&&Mt]})]})]});case he.$.TITLE:return(0,U.jsxs)(ie.q,{children:[_t||It?(0,U.jsx)(C.N,{to:e,className:P.A.rowTitle,"data-testid":"internal-track-link",children:Gt()}):Gt(),Ft&&(0,U.jsxs)(S.P,{children:[Bt.download&&(0,U.jsx)(Te._,{}),Bt.explicit&&(0,U.jsx)(Ee.U,{}),Bt.paid&&(0,U.jsx)(Ae.y,{}),Bt.nineteen&&(0,U.jsx)(fe.q,{className:P.A.nineteen,size:16}),Bt.hasAssociatedVideo&&(0,U.jsx)(je.l,{separator:""})]})]});case he.$.ARTIST:case he.$.AUTHOR:return(0,U.jsxs)(de.Y,{children:[!Ut&&!wt&&T&&(0,U.jsx)(E.E,{nonInteractive:_,artists:T,filter:gt,spec:jt}),(Ut||It)&&!wt&&Mt]});case he.$.ALBUM_OR_PODCAST:case he.$.ALBUM:return f?(0,U.jsx)(w.g,{nonInteractive:_,uri:f.uri,name:f.name,creatorUri:T?.[0]?.uri,spec:jt,children:(0,U.jsx)(k.M,{searchWords:[gt],textToHighlight:f.name})}):null;case he.$.ADDED_BY:return(0,U.jsx)(U.Fragment,{children:st?(0,U.jsx)(G,{users:K,spec:jt}):(0,U.jsx)(I,{name:$t?.displayName||$t?.username||"",isCompactMode:dt,uri:$t?.uri||"",imageUrl:Vt?.url||"",showAvatar:Q,spec:jt})});case he.$.RELEASE_DATE:return(0,U.jsx)(U.Fragment,{children:Ut&&(0,U.jsx)(oe,{releaseDate:ee})});case he.$.EVENT_DATE:return(0,U.jsx)(U.Fragment,{children:Ke&&Xe?(0,U.jsx)(Pe.pZ,{value:"ticket-link",children:(0,U.jsx)(W,{eventDate:Ke,ticketingSiteURL:Xe})}):null});case he.$.CONCERT:return(0,U.jsx)(U.Fragment,{children:at&&Je&&tt?(0,U.jsx)(Pe.pZ,{value:"ticket-link",children:(0,U.jsx)(M,{concertsCount:Qe,concertDate:Je,concertURI:et,concertVenue:tt,index:H,spec:jt})}):null});case he.$.EVENT_INFO:return(0,U.jsx)(U.Fragment,{children:tt&&et?(0,U.jsx)(Pe.pZ,{value:"ticket-link",children:(0,U.jsx)(Z,{concertsCount:Qe,concertVenue:tt,concertURI:et,index:H,spec:jt})}):null});case he.$.CONCERT_VENUE:return(0,U.jsx)(U.Fragment,{children:tt&&et?(0,U.jsx)(Pe.pZ,{value:"ticket-link",children:(0,U.jsx)(Z,{concertURI:et,concertsCount:Qe,concertVenue:tt,index:H,spec:jt})}):null});case he.$.ADDED_AT:return(0,U.jsx)(U.Fragment,{children:J?(0,U.jsx)(V,{dateAdded:new Date(J)}):null});case he.$.DURATION:return(0,U.jsxs)(U.Fragment,{children:[Ct?Rt&&(0,U.jsx)($.A,{itemUri:e,contextUri:$e,isBanned:Nt||Ge,contextName:nt,spec:jt}):Ze&&qe&&(0,U.jsx)(te,{isDisliked:Ge,feedbackPath:Ze,deleteFeedbackPath:qe,feedbackUri:Ye||e,name:nt,contextUri:$e}),!wt&&!lt&&(0,U.jsx)(ye.d,{uri:e,spec:jt,type:Be,isOwnedBySelf:ct}),!s?.hideDuration&&(0,U.jsx)(z.P,{duration:A}),(0,U.jsx)(re.Y,{menu:Lt,label:h.Ru.get("more.label.track",a,Mt),spec:jt})]});case he.$.BPM:return mt?(0,U.jsx)(d.E,{variant:"bodySmall",semanticColor:"textSubdued",children:mt}):null;case he.$.KEY:return xt?(0,U.jsx)(d.E,{variant:"bodySmall",semanticColor:"textSubdued",children:xt}):null;case he.$.ACTIONS:case he.$.ADD:case he.$.ALBUM_OR_SHOW:case he.$.PLAYS:case he.$.VIBE:return null;default:(0,_e.d)(t)}return null})()},`column-${i}`)}))})})})})}),((e,t)=>e.uri===t.uri&&e.allowedDropTypes.length===t.allowedDropTypes.length&&e.isPlayable===t.isPlayable&&e.isMixedMedia===t.isMixedMedia&&e.consumptionCapExplanation===t.consumptionCapExplanation&&e.isCompactMode===t.isCompactMode))},14409:(e,t,a)=>{a.d(t,{x:()=>l});var s=a(99701),i=a(64281);const n="BO7X8b8_SQhDyCjS0EOv";var r=a(86070);const l=({gatedEntityRelations:e})=>{if(!e)return!1;const t=e?.entitiesWithValueProps?.at(0),a=t?.valueProps.at(0)?.displayText,l=t?.summary?.forUserWithoutAccess;if(!a||!t)return null;const o=(0,r.jsx)(i.E,{text:a,className:n});return l?(0,r.jsx)(s.Zp,{label:l||a,children:o}):o}},54003:(e,t,a)=>{a.d(t,{y:()=>r});var s=a(31417),i=a(64281),n=a(86070);const r=()=>(0,n.jsx)(i.E,{ariaLabel:s.Ru.get("paid"),text:s.Ru.get("paid")})},45807:(e,t,a)=>{a.d(t,{B:()=>s,v:()=>i});const s=(e,t)=>!!e&&e.uri===t.uri,i=(e,t)=>!!e&&e.entitiesWithValueProps.at(0)?.uri===t},60384:(e,t,a)=>{a.d(t,{I:()=>c});var s=a(30758),i=a(1599),n=a(72671);var r=a(87182),l=a(29074),o=a(2679);const c=({uri:e,setFeedbackPath:t,removeFeedbackPath:a,contextUri:c})=>{const d=(0,r.z)(),u=(0,l.m)(),{isPlaying:m}=(0,o.te)(e),x=(0,s.useCallback)((()=>{c&&u.resync(c)}),[c,u]);return{setDislikeFeedback:(0,s.useCallback)((async()=>{t&&(await((e,t,a)=>{const s=t.replace("<reason>","LOCAL_NOT_APPROPRIATE_FOR_CONTEXT").replace("<track-uri>",a);return e.build().withMethod("POST").withHost(n.L1).withPath(s).withEndpointIdentifier("/<feature>/feedback/").send()})(i.n.getInstance(),t,e),x(),m&&d.skipToNext())}),[t,e,x,m,d]),removeDislikeFeedback:(0,s.useCallback)((async()=>{a&&(await((e,t,a)=>{const s=t.replace("<reason>","LOCAL_NOT_APPROPRIATE_FOR_CONTEXT").replace("<track-uri>",a);return e.build().withMethod("DELETE").withHost(n.L1).withPath(s).withEndpointIdentifier("/<feature>/feedback/").send()})(i.n.getInstance(),a,e),x())}),[a,x,e])}}}}]);
//# sourceMappingURL=2119.js.map