"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1408,6266],{89645:(e,t,a)=>{a.d(t,{j:()=>o});var r=a(75134),s=a(43743),n=a(38996),i=a(86070);const o=({name:e,uri:t,images:a,isHero:o,testId:c,description:l,index:d,requestId:u,color:m,variant:p})=>(0,i.jsx)(r.Z,{variant:p,index:d,featureIdentifier:"artist_concerts",headerText:e,uri:t,isPlayable:!1,renderCardImage:()=>(0,i.jsx)(s.M,{isHero:o,images:a,color:m}),renderSubHeaderContent:()=>(0,i.jsx)(n.c,{isHero:o,children:(0,i.jsx)("span",{children:l||""})}),testId:c,requestId:u})},68769:(e,t,a)=>{a.d(t,{I:()=>k});var r=a(30758),s=a(422),n=a(87560),i=a(7145),o=a(11966),c=a(73203),l=a(35498),d=a(47315),u=a(43182),m=a(31417),p=a(21549),g=a(63096);const x="qFPnB4YPwJKBtmDadHJw",h="L1GB_UgpHH55rJC7bJSu",f="lwTOVx_hzbLLqRQNjpWq",w="fBzAZ8QqBJZ7jOCE9rR0",b="Cy4PWlzIF5qb7_LdHssZ";var I=a(86070);const j=({contentV2:e})=>(0,I.jsxs)(s.E,{as:"p",semanticColor:"textBrightAccent",className:b,children:[(0,I.jsx)(n.D,{size:"small"}),e]}),C=({contentV2:e})=>(0,I.jsxs)(s.E,{as:"p",semanticColor:"textBrightAccent",className:b,children:[(0,I.jsx)(i.M,{size:"small"}),e]}),y=({contentV2:e})=>(0,I.jsx)(s.E,{as:"p",className:b,children:e}),S=e=>{switch(e.typeV2){case"SPOTIFY_EXCLUSIVE":return(0,I.jsx)(j,{...e});case"TOP_FANS_EXCLUSIVE":case"TOP_FANS_DISCOUNT":case"LIMITED_EDITION":return(0,I.jsx)(C,{...e});default:return(0,I.jsx)(y,{...e})}},v=({price:e,salePrice:t})=>t?(0,I.jsxs)("div",{children:[(0,I.jsxs)(s.E,{variant:"bodySmall",semanticColor:"textBrightAccent",children:[t," "]}),(0,I.jsx)(s.E,{variant:"bodySmall",style:{textDecoration:"line-through"},children:e})]}):(0,I.jsx)(s.E,{variant:"bodySmall",children:e}),k=({name:e,uri:t,href:a,images:s,index:n,price:i,testId:b,salePrice:j,label:C,artists:y})=>{const k=(0,r.useMemo)((()=>y.items.map((e=>"profile"in e.data?e.data.profile.name:"")).join(m.Ru.getSeparator())),[y.items]),{spec:_,logger:P}=(0,p.r)(u.y,{data:{position:n,uri:t,reason:C?.typeV2||""}}),R=(0,g.g)(s,{desiredSize:300}),N=(0,r.useCallback)((()=>{P.logInteraction(_.cardLinkFactory({position:0}).hitNavigateToExternalUri({destination:a})),window.open(a,"_blank")}),[a,P,_]);return(0,I.jsx)(o.Z,{id:t,"data-testid":b,title:(0,I.jsx)(c.Z,{className:w,children:e}),pretitle:C&&(0,I.jsx)(S,{typeV2:C.typeV2,contentV2:C.contentV2}),media:(0,I.jsx)("div",{className:x,children:R?(0,I.jsx)(l.M,{size:"sm",src:R?.url,alt:e??""}):(0,I.jsx)("div",{className:h,children:(0,I.jsx)("div",{className:f,children:(0,I.jsx)(d.E,{size:"xxlarge","aria-hidden":!0,"data-testid":"card-image-fallback"})})})}),onClick:N,size:"md",subtitle:(0,I.jsx)(v,{price:i,salePrice:j}),body:k},t)}},40855:(e,t,a)=>{a.d(t,{a:()=>g});var r=a(30758),s=a(90694),n=a(31417),i=a(75134),o=a(43743),c=a(38996),l=a(89994),d=a(81288),u=a(65462),m=a(84816),p=a(86070);const g=r.memo((function({images:e,name:t,uri:a,onClick:g,isHero:x,testId:h,index:f,requestId:w,color:b,variant:I,logCardImpressions:j=!1}){let C;const y=(0,r.useCallback)((()=>(0,p.jsx)(o.M,{isCircular:!0,isHero:x,images:e,color:b,FallbackComponent:e=>(0,p.jsx)(s.r,{size:"xxlarge",...e})})),[b,e,x]),S=(0,r.useCallback)((()=>(0,p.jsx)(c.c,{isHero:x,children:x?(0,p.jsx)(d.t,{children:n.Ru.get("card.tag.profile")}):n.Ru.get("card.tag.profile")})),[x]);return C=x?(0,p.jsx)(l.A,{index:f,onClick:g,headerText:t,featureIdentifier:"profile",uri:a,isPlayable:!1,renderCardImage:y,renderSubHeaderContent:S,testId:h,requestId:w,logCardImpressions:j}):(0,p.jsx)(i.Z,{variant:I,index:f,onClick:g,headerText:t,featureIdentifier:"profile",uri:a,isPlayable:!1,renderCardImage:y,renderSubHeaderContent:S,testId:h,requestId:w,logCardImpressions:j}),(0,p.jsx)(u.h,{menu:(0,p.jsx)(m.B,{uri:a}),children:C})}))},33712:(e,t,a)=>{a.d(t,{p:()=>d});var r=a(92255),s=a(50635),n=a(44875),i=a(98811),o=a(83327),c=a(50671),l=a(86070);const d=({index:e,logShelfImpressions:t=!1,...a})=>{const{id:d,seeAllUri:u,title:m}=a,{onClickShelfTitle:p,onClickShelfSeeAll:g,spec:x}=(0,s.w)({seeAllUri:u,index:e,id:d}),h=(0,c.t)(x),f=(0,n.a)(u,m),w=(0,i.O)(u,m);return(0,l.jsx)(o.r,{spec:x,children:(0,l.jsx)(r.$,{...a,elementRef:t?h:void 0,onClickShelfTitle:()=>{p(),f({category:n.w.TitleClicks}),w({category:i.U.TitleClicks})},onClickShelfSeeAll:()=>{g(),f({category:n.w.ShowAll}),w({category:i.U.ShowAll})}})})}},50635:(e,t,a)=>{a.d(t,{w:()=>i});var r=a(30758),s=a(4414),n=a(21549);const i=({seeAllUri:e,index:t,id:a})=>{const{spec:i,logger:o}=(0,n.r)(s.f,{data:{identifier:a,position:t,uri:e??""}}),c=(0,r.useCallback)((()=>{const e=i.swipeUiReveal();o.logInteraction(e)}),[o,i]),l=(0,r.useCallback)((e=>{const t=i.shelfHeaderFactory().shelfCarouselControlsFactory(),a="next"===e?t.shelfCarouselControlsNextFactory():t.shelfCarouselControlsPreviousFactory();o.logInteraction(a.hitUiReveal())}),[o,i]);return{onClickShelfTitle:(0,r.useCallback)((()=>{const t=i.shelfHeaderFactory().shelfHeaderTitleFactory().hitUiNavigate({destination:e??""});o.logInteraction(t)}),[o,e,i]),onClickShelfSeeAll:(0,r.useCallback)((()=>{const t=i.shelfHeaderFactory().shelfHeaderSeeAllFactory().hitUiNavigate({destination:e??""});o.logInteraction(t)}),[o,e,i]),onSwipe:c,onClickCarouselControls:l,spec:i}}},83044:(e,t,a)=>{a.d(t,{y:()=>d});var r=a(30758),s=a(65462),n=a(7520),i=a(21082),o=a(27012),c=a(33065),l=a(86070);const d=({children:e,uri:t,name:a,onClick:d,index:u})=>{const{draggable:m,onDragStart:p}=(0,o.P)({itemUris:[t],dragLabelText:a}),g=(0,r.useCallback)((()=>{d?.(t,u)}),[d,t,u]);return(0,c.s)({uri:t})?(0,l.jsx)(s.h,{menu:(0,l.jsx)(n.t,{uri:t}),children:(0,l.jsx)(i.N,{draggable:m,to:t,onDragStart:p,dir:"auto",onClick:g,children:e})}):(0,l.jsx)(l.Fragment,{children:e})}},60053:(e,t,a)=>{a.r(t),a.d(t,{BrowsePage:()=>Q});var r=a(30758),s=a(97500),n=a.n(s),i=a(88297),o=a(31417),c=a(62538),l=a(15292),d=a(92202),u=a(85505),m=a(422),p=a(25577),g=a(88711),x=a(46110),h=a(1246),f=a(62986),w=a(84291);const b="Liif5fNYkY903HPAQd1N",I="OjUWe9nnXRVfiwFlk0WM",j="N_8iI7NKHP0iG2jp3g0R",C="xkCWPUwdmCt8oQvZqtyL";var y=a(86070);const S=({images:e,color:t=u.vyq,title:a,subtitle:r})=>{const s=0===e.length?p.K.SMALL:p.K.DEFAULT;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(p.z,{backgroundImages:e,backgroundColor:t,size:s,children:[(0,y.jsx)(x.h,{children:a?(0,y.jsx)(h.X,{text:a}):null}),(0,y.jsxs)(g.Y,{children:[a?(0,y.jsx)(f.mm,{children:a}):null,r&&(0,y.jsx)(m.E,{variant:"bodySmall",className:C,children:r})]})]}),(0,y.jsx)(w.f,{color:t})]})};var v=a(33712),k=a(3520),_=a(49971),P=a(47186),R=a(21082),N=a(32408);const E={chips:"FvuGb_9dchkiN5fJY0SI",chip:"KxlMRH95uJIcfJiNcZgg"};function B({section:e}){return(0,y.jsx)("div",{className:E.chips,children:e.sectionItems.items.map((e=>function(e){return"BrowseSectionContainerWrapper"===e.content.__typename&&"BrowseSectionContainer"===e.content.data.__typename&&e.content.data.data?.cardRepresentation?.title?.transformedLabel?(0,y.jsx)(R.N,{to:(0,N.K)(e.uri)||"",children:(0,y.jsxs)(k.v,{className:E.chip,children:[(0,y.jsx)(_.Z,{variant:"mestoBold",children:e.content.data.data.cardRepresentation.title.transformedLabel}),(0,y.jsx)(P.V,{size:"xsmall"})]},e.uri)}):null}(e)))})}var A=a(67510),T=a(91008);function L(e){const t=(0,T.o_h)(e,{parseUnknown:!0}),[a,r]=t?.args??[];if(r&&"section"===a)return`/genre/section${r}`}var O=a(20489),V=a(42795),M=a(13719),U=a(85907);const D=({section:e,position:t,showAll:a})=>{const s=(0,r.useMemo)((()=>e.sectionItems.items.map(((e,t)=>(0,A.W)(e,t))).filter(M.P)),[e.sectionItems.items]);switch(e.data?.__typename){case"BrowseGenericSectionData":return(0,y.jsx)(v.p,{title:e.data?.title?.transformedLabel??"",subtitle:e.data?.subtitle?.transformedLabel??"",total:e.sectionItems.totalCount,seeAllUri:L(e.uri),index:t,id:e.uri,showAll:a,children:s});case"BrowseGridSectionData":return(0,y.jsx)(O.x,{config:(0,V.s1)(V.yV.BROWSE),children:(0,y.jsx)(v.p,{title:e.data?.title?.transformedLabel??"",subtitle:e.data?.subtitle?.transformedLabel??"",total:e.sectionItems.totalCount,index:t,id:e.uri,seeAllUri:e.targetLocation?(0,N.K)(e.targetLocation):void 0,showAll:!0,children:s})});case"BrowseRelatedSectionData":return(0,y.jsx)(B,{section:e},e.uri);case"BrowseSingleItemSectionData":case"BrowseUnsupportedSectionData":case void 0:return null;default:return(0,U.k)(e.data),null}};var q=a(38868),z=a(6444);const W=({uri:e,fallback:t})=>{const{section:a,error:r,fetchNextItems:s}=(0,q.D)(e),n=a?.data?.title?.transformedLabel,i=a?.data?.subtitle?.transformedLabel,o=a?.sectionItems.items??[];return 0===o.length||null!==r?t():(0,y.jsx)(z._,{onReachBottom:s,children:(0,y.jsx)(O.x,{config:(0,V.s1)(V.yV.HOME_REGULAR_DENSITY),children:(0,y.jsx)(v.p,{title:n,subtitle:i,index:0,id:e,showAll:!0,children:o.map(((e,t)=>(0,A.W)(e,t)))})})})};var H=a(5993),F=a(78052),Z=a(87246),J=a(57776);a(59147);const K=new J.l("browsePage","query","b9536ef5690f504c38fc5bda38483a2abf19948169605391b4868fe3dcfd6a25",null);var G=a(81834),Y=a(27963);var X=a(21549);const Q=({uri:e})=>{const{header:t,sections:a,error:s,fetchNextSections:u}=(e=>{const{request:t}=(0,r.useContext)(G.j),{data:a,isLoading:s,error:n,fetchNextPage:i}=(0,H.q)({queryKey:["browse","page",e,{numberOfSections:10,numberOfItems:10}],queryFn:({pageParam:a})=>(0,Y.c)(t,K,function(e,t,a,r){return{pagePagination:{offset:t,limit:10},sectionPagination:{offset:0,limit:10},uri:e}}(e,a)),initialPageParam:0,gcTime:F.s8,staleTime:F.f8,getNextPageParam:e=>{if("BrowseSectionContainer"===e?.data?.browse?.__typename)return e.data.browse.sections?.pagingInfo.nextOffset??void 0}}),o=(0,r.useCallback)((async()=>{await i()}),[i]),c=(0,r.useMemo)((()=>a?.pages?a.pages.reduce(((e,t)=>"BrowseSectionContainer"===t?.data?.browse?.__typename&&t.data.browse.sections?.items?[...e,...t.data.browse.sections.items]:e),[]):[]),[a?.pages]);return{header:(0,r.useMemo)((()=>{if(a?.pages)for(const e of a.pages)if("BrowseSectionContainer"===e?.data?.browse?.__typename)return{title:e.data.browse.header?.title?.transformedLabel??void 0,color:e.data.browse.header?.color?.hex??void 0,images:e.data.browse.header?.backgroundImage?.sources.map(Z.RS)??[],subtitle:e.data.browse.header?.subtitle?.transformedLabel??void 0}}),[a?.pages]),sections:c,error:n,loading:s,fetchNextSections:o}})(e),{spec:m,UBIFragment:p}=(0,X.r)(i.M,{data:{identifier:e,uri:e}}),g=(0,r.useMemo)((()=>m.shelvesFactory()),[m]);if(0===a.length||null!==s)return(0,y.jsx)(d.LoadingPage,{hasError:null!==s,errorMessage:o.Ru.get("error.generic")});const x=t?.title;return(0,y.jsxs)(p,{spec:m,children:[(0,y.jsx)(l.Q,{children:t?.title??o.Ru.get("browse")}),x?(0,y.jsx)("div",{className:b,children:(0,y.jsx)(S,{title:t.title,subtitle:t.subtitle,color:t.color,images:t.images})}):null,(0,y.jsx)(p,{spec:g,children:(0,y.jsxs)("div",{className:j,children:[x&&(0,y.jsx)(c.K,{backgroundColor:t.color}),(0,y.jsx)("div",{className:n()("contentSpacing",I),children:1===a.length?(0,y.jsx)(W,{uri:a[0].uri,fallback:()=>(0,y.jsx)(D,{section:a[0],position:0,showAll:!0})}):(0,y.jsx)(z._,{onReachBottom:u,children:a.map(((e,t)=>(0,y.jsx)(D,{section:e,position:t,showAll:!1},e.uri)))})})]})})]})}},48226:(e,t,a)=>{a.r(t),a.d(t,{BrowseSection:()=>w});var r=a(30758),s=a(97500),n=a.n(s),i=a(6772),o=a(88297),c=a(31417),l=a(15292),d=a(92202),u=a(33712),m=a(67510),p=a(38868),g=a(6444),x=a(21549);const h="aPpfDTG5LqJdHqdwKljP";var f=a(86070);const w=({uri:e})=>{const{section:t,error:a,fetchNextItems:s}=(0,p.D)(e),{spec:w,UBIFragment:b}=(0,x.r)(o.M,{data:{identifier:e,uri:e}}),I=(0,r.useMemo)((()=>w.shelvesFactory()),[w]),j=t?.data?.title?.transformedLabel,C=t?.data?.subtitle?.transformedLabel,y=t?.sectionItems.items??[];return 0===y.length||null!==a?(0,f.jsx)(d.LoadingPage,{hasError:null!==a,errorMessage:c.Ru.get("error.generic")}):(0,f.jsxs)(b,{spec:w,children:[(0,f.jsx)(l.Q,{children:j??c.Ru.get("browse")}),(0,f.jsx)(b,{spec:I,children:(0,f.jsx)("div",{className:n()("contentSpacing",h),children:(0,f.jsx)(g._,{onReachBottom:s,children:(0,f.jsx)(u.p,{title:j??"",subtitle:C??"",index:0,id:e,rowGap:i.lT,showAll:!0,fullPage:!0,children:y.map(((e,t)=>(0,m.W)(e,t)))})})})})]})}},7356:(e,t,a)=>{a.d(t,{r:()=>w});var r=a(30758),s=a(71416),n=a(422),i=a(84509),o=a(91008),c=a(21082),l=a(22984),d=a(21549);const u="CqCtb3wr4SK8AiZwxeH0",m="IGCDq9qa08JVVY3mcy7Y",p="Vn9yz8P5MjIvDT8c0U6w",g="MtV402NmdUF5mceSD0Dy",x="WDC2Yzs811n7JCYtYQzc";var h=a(86070);const f=s.l0o,w=({title:e,imageUrl:t,viewId:a,pageId:s,color:w=f,href:b,index:I,ubiId:j})=>{const C=a&&`/genre/${a}`||b||"#",{spec:y,logger:S}=(0,d.r)(i.b,{data:{position:I,identifier:j}}),v=(0,r.useCallback)((()=>{const e=(0,o.o_h)(C)?.toURI();e&&S.logInteraction(y.hitUiNavigate({destination:e}))}),[S,y,C]);return(0,h.jsx)("div",{className:m,children:(0,h.jsx)(c.N,{to:C,pageId:s,className:u,onClick:v,children:(0,h.jsxs)("div",{className:p,style:{backgroundColor:w},children:[t?(0,h.jsx)(l._,{loading:"lazy",src:t,className:x}):null,(0,h.jsx)(n.E,{variant:"titleSmall",className:g,children:e})]})})})}},67510:(e,t,a)=>{a.d(t,{W:()=>V});var r=a(91008),s=a(31417),n=a(90139),i=a(10831),o=a(89645),c=a(89519),l=a(30758),d=a(5765),u=a(84509),m=a(75134),p=a(43743),g=a(21082),x=a(50671),h=a(21549);const f="wuuw429FZl5mL_INxPTs";var w=a(86070);const b=({title:e,uri:t,images:a,href:s,index:n,ubiId:i,variant:o})=>{const{spec:c,logger:b}=(0,h.r)(u.b,{data:{position:n,identifier:i}}),I=(0,l.useCallback)((()=>{const e=(0,r.o_h)(s)?.toURI();e&&b.logInteraction(c.hitUiNavigate({destination:e}))}),[b,c,s]),j=(0,x.t)(c);return(0,w.jsx)(g.N,{to:s,onClick:I,ref:j,children:(0,w.jsx)(m.Z,{variant:o,index:n,onClick:I,headerText:e,featureIdentifier:"unknown",isPlayable:!1,delegateNavigation:!0,uri:t,className:f,renderCardImage:()=>(0,w.jsx)(p.M,{images:a,FallbackComponent:e=>(0,w.jsx)(d.e,{size:"xxlarge",...e})})})})};var I=a(86573),j=a(68769),C=a(80809),y=a(40855),S=a(30343),v=a(84779),k=a(7356),_=a(87246),P=a(32408),R=a(61714),N=a(16157),E=a(63775),B=a(53149),A=a(75049),T=a(16717),L=a(1103),O=a(85907);function V(e,t){switch(e.content.__typename){case"AlbumResponseWrapper":case"ArtistResponseWrapper":case"EpisodeOrChapterResponseWrapper":case"PlaylistResponseWrapper":case"PodcastOrAudiobookResponseWrapper":case"TrackResponseWrapper":case"UserResponseWrapper":case"BrowseXlinkResponseWrapper":case"BrowseSectionContainerWrapper":case"MerchResponseWrapper":case"ArtistConcertsResponseWrapper":return function(e,t,a){if("GenericError"===e.__typename||"NotFound"===e.__typename||"RestrictedContent"===e.__typename)return null;const l=(0,_.f0)(e);switch(e.__typename){case"Album":return(0,w.jsx)(n.a,{uri:e.uri,name:e.name,images:l,sharingInfo:null,artists:(0,E.K)(e.artists),index:t},e.uri);case"Artist":return(0,w.jsx)(i.a,{uri:e.uri,name:e.profile.name,images:l,index:t},e.uri);case"Audiobook":return(0,w.jsx)(c.M,{uri:e.uri,signifierText:e.accessInfo?.signifier?.text??void 0,name:e.name,images:l,isPlayable:e.accessInfo?.isUserMemberOfAtLeastOneGroup??!1,authorName:e.authors?.map((e=>e?.name)).join(s.Ru.getSeparator())??"",index:t},e.uri);case"Chapter":return(0,w.jsx)(I.U,{uri:e.uri,name:e.name,images:l,showImages:l,description:"",durationMilliseconds:e.duration.totalMilliseconds,releaseDate:"Audiobook"===e.audiobookV2.data.__typename?(0,A.JO)(e.audiobookV2.data.publishDate):null,resume_point:{resume_position_ms:e.playedState.playPositionMilliseconds,fully_played:e.playedState.state===N._w.Completed},isExplicit:(0,B.V)(e.contentRating),is19PlusOnly:(0,B.r)(e.contentRating),sharingInfo:null,index:t},e.uri);case"Episode":return(0,w.jsx)(I.U,{uri:e.uri,name:e.name,images:l,showImages:(0,_.o8)(e),description:e.description??"",durationMilliseconds:e.duration.totalMilliseconds,releaseDate:(0,A.JO)(e.releaseDate),resume_point:{resume_position_ms:e.playedState.playPositionMilliseconds,fully_played:e.playedState.state===N._w.Completed},isExplicit:(0,B.V)(e.contentRating),is19PlusOnly:(0,B.r)(e.contentRating),sharingInfo:null,index:t},e.uri);case"Playlist":{let a="";return"User"===e.ownerV2.data.__typename&&(a=e.ownerV2.data.name),(0,w.jsx)(C.B,{uri:e.uri,name:e.name,images:l,description:e.description,authorName:a,index:t,isPlayable:!(0,R.p)(e?.attributes)},e.uri)}case"Podcast":return(0,w.jsx)(S.o,{uri:e.uri,name:e.name,images:l,publisher:e.publisher?.name??"",sharingInfo:null,mediaType:(0,T.w)(e.mediaType),index:t},e.uri);case"Track":return(0,w.jsx)(v.w,{uri:e.uri,name:e.name,images:l,artists:(0,L.S)(e.artists),album:e.albumOfTrack?{uri:e.albumOfTrack.uri,name:e.albumOfTrack.name}:null,isExplicit:(0,B.V)(e.contentRating),is19PlusOnly:(0,B.r)(e.contentRating),sharingInfo:null,index:t},e.uri);case"User":return(0,w.jsx)(y.a,{uri:e.uri,name:e.name,images:l,index:t},e.uri);case"BrowseSectionContainer":return(0,w.jsx)(k.r,{title:e.data?.cardRepresentation?.title?.transformedLabel??"",pageId:"search",href:(0,P.K)(a),color:e.data?.cardRepresentation?.backgroundColor?.hex,imageUrl:l[0]?.url,ubiId:a,index:t},a);case"BrowseClientFeature":return(0,w.jsx)(b,{uri:a,title:e.title?.transformedLabel??"",href:`/${(0,r.o_h)(e?.featureUri,{parseUnknown:!0})?.toURLPath()}`,images:e.iconOverlay?.sources??[],ubiId:a,index:t},a);case"Merch":return(0,w.jsx)(j.I,{name:e.nameV2,uri:e.uri,href:e.url||e.uri,index:t,images:l,price:e.price||"",artists:e.artists,salePrice:e.salePrice,label:e.label},a);case"ArtistConcerts":{const r=e.mainArtist.data;return"Artist"!==r.__typename?null:(0,w.jsx)(o.j,{uri:a,name:r.profile.name,images:l,description:s.Ru.get("concerts.count",e.concerts.totalCount),index:t},a)}case"BrowseSpacesHub":case"BrowseExternalHref":return null;default:return(0,O.k)(e),null}}(e.content.data,t,e.uri);case"UnknownType":case"NoContent":case"ConcertResponseWrapper":break;default:(0,O.k)(e.content)}return null}},32408:(e,t,a)=>{a.d(t,{K:()=>s});var r=a(91008);function s(e){const t=(0,r.o_h)(e,{parseUnknown:!0}),[a,s]=t?.args??[];if(s&&"page"===a)return`/genre/${s}`}},6444:(e,t,a)=>{a.d(t,{_:()=>d});var r=a(30758),s=a(21743),n=a(97500),i=a.n(n);const o="eqw9lvuoZHrkWMTdyTpY",c="lb08f71wES9AQnKx6e0R";var l=a(86070);const d=(0,r.memo)((function(e){const{triggerOnInitialLoad:t=!1,onReachBottom:a,showScrollbar:n=!0,horizontalScroll:d=!1,className:u}=e,{ref:m,inView:p}=(0,s.Wx)({initialInView:t});return(0,r.useLayoutEffect)((()=>{p&&a&&a()}),[p,a]),(0,l.jsxs)("div",{className:i()({[c]:!n,[o]:d},u),"data-testid":"infinite-scroll-list",children:[e.children,(0,l.jsx)("div",{ref:m})]})}))},78052:(e,t,a)=>{a.d(t,{PG:()=>s,f8:()=>i,oC:()=>r,s8:()=>n});const r=o(120),s=o(30),n=o(60),i=o(15);function o(e){return 60*e*1e3}},87246:(e,t,a)=>{a.d(t,{RS:()=>s,f0:()=>i,o8:()=>n});var r=a(85907);function s(e){return{url:e.url,width:e.width,height:e.height}}function n(e){if("Episode"===e.__typename){const t=e.podcastV2.data;return"Podcast"!==t.__typename?[]:t.coverArt?.sources.map(s)??[]}return[]}function i(e){switch(e.__typename){case"Artist":return e.visuals.avatarImage?.sources.map(s)??[];case"Album":case"Audiobook":case"Podcast":case"Episode":case"Chapter":return e.coverArt?.sources.map(s)??[];case"Track":return e.albumOfTrack?.coverArt?.sources.map(s)??[];case"Playlist":return e.images.items[0]?.sources.map(s)??[];case"User":return e.avatar?.sources.map(s)??[];case"Merch":return e.image?.sources.map(s)??[];case"ArtistConcerts":{const t=e.mainArtist.data;return"Artist"!==t.__typename?[]:t.visuals.avatarImage?.sources.map(s)??[]}case"BrowseSectionContainer":return e.data?.cardRepresentation?.artwork?.sources.map(s)??[];case"BrowseClientFeature":return e.artwork?.sources.map(s)??e.iconOverlay?.sources.map(s)??[];case"GenericError":case"NotFound":case"RestrictedContent":case"BrowseSpacesHub":case"BrowseExternalHref":return[];default:return(0,r.k)(e),[]}}},38868:(e,t,a)=>{a.d(t,{D:()=>m});var r=a(30758),s=a(5993),n=a(78052),i=a(57776);a(59147);const o=new i.l("browseSection","query","99fdcc86e99562e6577c74643e17d9283e22bc6e38122993370d105309be7de6",null);var c=a(81834),l=a(27963),d=a(85907),u=a(61979);const m=e=>{const{request:t}=(0,r.useContext)(c.j),{data:a,isLoading:i,error:m,fetchNextPage:p}=(0,s.q)({queryKey:["browse","section",e,{numberOfItems:20}],queryFn:({pageParam:a})=>(0,l.c)(t,o,function(e,t,a){return{pagination:{offset:t,limit:a},uri:e}}(e,a,20)),gcTime:n.s8,staleTime:n.f8,initialPageParam:0,getNextPageParam:e=>{if("BrowseSection"===e?.data?.browseSection?.__typename){return e.data.browseSection.sectionItems.pagingInfo.nextOffset&&e.data.browseSection.sectionItems.pagingInfo.nextOffset>0?e.data.browseSection.sectionItems.pagingInfo.nextOffset:void 0}}}),g=(0,r.useCallback)((async()=>{await p()}),[p]);return{section:(0,r.useMemo)((()=>a?.pages?a.pages.reduce(((e,t)=>{if(!t?.data?.browseSection)return e;switch(t.data.browseSection.__typename){case"BrowseSection":return null===e?(0,u.h)(t.data.browseSection):(e.sectionItems.items=[...e.sectionItems.items,...t.data.browseSection.sectionItems.items],e);case"GenericError":case"NotFound":return e;default:return(0,d.k)(t.data.browseSection),e}}),null):null),[a?.pages]),error:m,loading:i,fetchNextItems:g}}},33065:(e,t,a)=>{a.d(t,{s:()=>r});const r=e=>"spotify:artist:0LyfQWJT6nXafLPZqxe9Of"!==e.uri},84291:(e,t,a)=>{a.d(t,{f:()=>o,z:()=>i});var r=a(30758),s=a(85505),n=a(47095);function i(e,t=s.l0o){const a=(0,n.as)();return(0,r.useEffect)((()=>(e&&a((0,n.Mo)(e)),()=>{a((0,n.Hf)())})),[e,a]),e||t}const o=({color:e,fallbackColor:t})=>(i(e,t),null)},61979:(e,t,a)=>{a.d(t,{h:()=>r});a(1903),a(40098);function r(e){return"object"!=typeof e||null===e?e:window.structuredClone?window.structuredClone(e):JSON.parse(JSON.stringify(e))}},15838:(e,t,a)=>{a.d(t,{b:()=>n});var r=a(16157),s=a(35035);const n=({downloadAvailability:e,isExplicit:t,isMOGEFRestricted:a,contentRating:n,isPaywalled:i,isEnhanced:o,hasAssociatedVideo:c})=>{let l=0;const d={download:!1,explicit:!1,nineteen:!1,paid:!1,enhanced:!1,hasAssociatedVideo:!1};return e===s.kw.YES&&(d.download=!0,l++),(t&&!a||n===r.x7.Explicit)&&(d.explicit=!0,l++),(a||n===r.x7.NineteenPlus)&&(d.nineteen=!0,l++),i&&(d.paid=!0,l++),o&&(d.enhanced=!0,l++),c&&(d.hasAssociatedVideo=!0,l++),{badges:d,hasBadges:l>0}}},14178:(e,t,a)=>{a.d(t,{A:()=>r});const r={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",TRACKLIST_HEADER_HEIGHT:"36px",MINMIMUM_COLUMN_WIDTH:"120px",trackList:"main-trackList-trackList",trackListCompactMode:"main-trackList-trackListCompactMode",indexable:"main-trackList-indexable",trackListRowGrid:"main-trackList-trackListRowGrid",rowSectionVariable:"main-trackList-rowSectionVariable",rowSectionStart:"main-trackList-rowSectionStart",rowSectionEnd:"main-trackList-rowSectionEnd",rowFeedback:"ShIWVpkzx2OXiZd_ZLBG",queuePanelTracklist:"nMl3YzolLHtRl3ke__NI",isRecommendedTrackListRow:"main-trackList-isRecommendedTrackListRow",chartTrackList:"UqzBuREVmvcEOZYWEGCM",rowChartStatus:"main-trackList-icon",concertTrackList:"inI9bKU9cOLscnVsSVEV",trackListHeader:"main-trackList-trackListHeader",trackListHeaderRow:"main-trackList-trackListHeaderRow",trackListHeaderStuck:"main-trackList-trackListHeaderStuck",headerRowWrapper:"zN5uJXoHaPYcyQUL0fHb",columnToggleButton:"DxgEznYnAMopcCeLv9Tz",trackListRow:"main-trackList-trackListRow",isPreviousRowSelected:"QG4EBrO5IfDeT2JjN9ZQ",isNextRowSelected:"Y5tI0kOsmxcdcipn3RVA",dropTargetBefore:"B8Vman5wYvaxDg4pc1OU",dropTargetAfter:"PQJowUUOfMLl0BzbnRCi",rowHeartButton:"main-trackList-rowHeartButton",curationButton:"main-trackList-curationButton",rowFeedbackButton:"h2UiWIoFN5fXUDD8pzfk",rowMoreButton:"main-trackList-rowMoreButton",disabled:"tH1iuxCV8NexP4pzEBa4",rowPlayPauseButton:"main-trackList-rowImagePlayButton",rowSubTitle:"UudGCx16EmBkuFPllvss",text:"W676nknusnBt8sz19YVV",number:"main-trackList-number",icon:"JqSFL4jZMK1MYKDI8G4R",playingIcon:"main-trackList-playingIcon",selected:"main-trackList-selected",rowMarker:"main-trackList-rowMarker",active:"main-trackList-active",rowTitle:"main-trackList-rowTitle",rowSectionIndex:"main-trackList-rowSectionIndex",showDisabledAsEnabled:"uOmRewhkzJocvvWeWWcF",playsHeader:"main-trackList-playsHeader",column:"main-trackList-column",sortable:"main-trackList-sortable",arrow:"OQc9_giz7hbNqHLZODIx",durationHeader:"main-trackList-durationHeader",actionsHeader:"SLiV_gdSoRxpqv9dgYbw",rowMainContent:"main-trackList-rowMainContent",rowCompactMode:"main-trackList-rowCompactMode",rowMainContentCompact:"main-trackList-rowMainContentCompact",facepile:"t4hXvJdn4nsT3Ub3k5IX",rowBadges:"main-trackList-rowBadges",rowDuration:"main-trackList-rowDuration",nineteen:"Ivj0vCd2s5rj3jsFoYHO",enhanced:"_jJo_XO5bEM6orhffUTw",rowMarkerChartStatus:"main-trackList-rowMarkerChartStatus",statusChangeDown:"main-trackList-statusChangeDown",statusChangeUp:"main-trackList-statusChangeUp",statusChangeNew:"V5ugN_Skngj14FpjqF41",rowImageWithPlay:"main-trackList-rowImageWithPlay",rowImagePlayPauseButton:"main-trackList-rowImagePlayPauseButton",rowPlayCount:"main-trackList-rowPlayCount",ownedBySelf:"main-trackList-ownedBySelf",rowImage:"main-trackList-rowImage",rowImageVideo:"DpagSkj9rm01H_aKy_Dw",rowImageFallback:"main-trackList-rowImageFallback",rowPlayPauseIcon:"main-trackList-rowPlayPauseIcon",placeholder:"T7WHRub8pynnWPXERh8e",placeholderIndex:"teK8wl2D50LT1eQXuxn_",placeholderStart:"jIkZ2Rh9EgRcaDgFo59w",placeholderStartWithCoverImage:"eClbBuaiGMZaigA4bp4e",placeholderEnd:"mfcu2ThWztZhPLI4BmQ7",placeholderVariable:"zhE9ZlvEhcGV1bDmBswy",discTitle:"EWbk59j3MnuB295CqiFg",discRow:"KAmWjX7nGmYCEtoR0EU2",addedBy:"HNrWEnhz87x0iBSI5PCH",facepileAvatar:"CaDisXZP6FboPwLkSkZ4",delayedVisibility:"knVQBhgo7WtejzqNn9SX",eventDate:"FI1uq8ux_Y_ZTzjibtKP",eventVenue:"nmaSdzB7DjwyT2i5C5Ec",eventTicketIcon:"zs8AulJGrH8lvWJ2qUrg",talkIcon:"z412ZWZNa5d7T1QcdK7m",talkSegmentDuration:"_tkrsP9r4Fxm3pP9GaZq",notificationDot:"main-trackList-statusChangeNew",resizeHandle:"I7SbihsVaE4CAUqLMa45",columnResizing:"x15L1JFSJDsSz7tzE69K"}}}]);
//# sourceMappingURL=browse-v2.js.map