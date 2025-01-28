"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2032],{50635:(e,t,n)=>{n.d(t,{w:()=>r});var a=n(30758),o=n(4414),c=n(21549);const r=({seeAllUri:e,index:t,id:n})=>{const{spec:r,logger:i}=(0,c.r)(o.f,{data:{identifier:n,position:t,uri:e??""}}),s=(0,a.useCallback)((()=>{const e=r.swipeUiReveal();i.logInteraction(e)}),[i,r]),l=(0,a.useCallback)((e=>{const t=r.shelfHeaderFactory().shelfCarouselControlsFactory(),n="next"===e?t.shelfCarouselControlsNextFactory():t.shelfCarouselControlsPreviousFactory();i.logInteraction(n.hitUiReveal())}),[i,r]);return{onClickShelfTitle:(0,a.useCallback)((()=>{const t=r.shelfHeaderFactory().shelfHeaderTitleFactory().hitUiNavigate({destination:e??""});i.logInteraction(t)}),[i,e,r]),onClickShelfSeeAll:(0,a.useCallback)((()=>{const t=r.shelfHeaderFactory().shelfHeaderSeeAllFactory().hitUiNavigate({destination:e??""});i.logInteraction(t)}),[i,e,r]),onSwipe:s,onClickCarouselControls:l,spec:r}}},18278:(e,t,n)=>{n.d(t,{A:()=>je});var a=n(30758),o=n(62411),c=n(56515),r=n(40938),i=n(45415),s=n(44481),l=n(14343),d=n(31417),u=n(93523),m=n(47186),h=n(85961),g=n(422),f=n(49863),x=n(66371),v=n(78141),j=n(44971);const y=["Escape","ArrowDown","ArrowUp","Tab"],b=e=>y.includes(e);var C=n(57776),p=n(59147);const R=new C.l("searchConcertLocations","query","43ededefcba8b3f519fd0c2d6c025dfeec9f742cf47d04a3c3711d95b27deda3",null);var _=n(37178),w=n(62021);const N="pdkMNbSQl8Yi5tl0iOF9",k="lbKmnVjXCdZ3kRBxjKQZ",D="VAJ54U4IyPKmKRWXweMn",S="r3oh3bOf2I7DZQEND5Uz",L="XwomR4z9c60ph1tYBcdm",I="bQATTxDxEbS7xXRsr_Mt",M="wFdZQwoko8rVRTLeFG5G",E="jcDbJiJUoAVWZ7h1Rhhy",F="UkSUgC7NQnYbptBJEAM9",Z="xfncDja0wZotJaVS3aq9",B="gJedMi0s8_RQ4d2aWYzI";var A=n(86070);const T=({onCancel:e,onChange:t,onBack:n,title:o,children:c})=>{const[r,s]=(0,w.x)("recent-locations",[]),[l,y]=(0,a.useState)(""),C=(0,_.W)(),T=(0,a.useRef)(null),U=(0,a.useRef)(null),V=(0,a.useRef)(-1),{data:O}=(H={query:l},(0,p.I)(R,H,q));var H,q;const z=(e=>"items"in(e?.concertLocations??{}))(O)?O.concertLocations.items:[];return(0,A.jsx)("div",{onKeyDown:e=>{const t=e.key;if(!b(t))return;e.preventDefault();const n=((e,t,n)=>{switch(n){case"ArrowDown":case"Tab":return Math.min(e+1,t);case"ArrowUp":return Math.max(e-1,-1);default:return e}})(V?.current??-1,z.length,t),a=T.current?.childNodes[n]?.firstChild;n>=0&&a instanceof HTMLButtonElement&&a.focus(),-1===n&&U.current?.focus(),V.current=n},"data-interaction-context":"location-selector",children:(0,A.jsx)(j.A,{isOpen:!0,onRequestClose:e,children:(0,A.jsxs)("section",{className:N,children:[n&&(0,A.jsx)("div",{className:S,children:(0,A.jsx)(u.H,{iconOnly:C?m.V:h.g,size:"small",onClick:n,"aria-label":d.Ru.get("navbar.go-back")})}),(0,A.jsx)("div",{className:D,children:(0,A.jsx)(u.H,{iconOnly:i.M,size:"small",onClick:e,"aria-label":d.Ru.get("close")})}),(0,A.jsxs)("div",{className:k,children:[(0,A.jsxs)("div",{className:L,children:[(0,A.jsx)(g.E,{as:"h3",variant:"bodyMediumBold",children:o??d.Ru.get("concert.location.search.header")}),(0,A.jsx)(f.E,{iconLeading:(0,A.jsx)(x.C,{}),children:(0,A.jsx)(v.Z,{placeholder:d.Ru.get("concert.location.search.placeholder"),onChange:e=>y(e.currentTarget.value),value:l,ref:U,autoFocus:!0})})]}),!l&&(0,A.jsx)(A.Fragment,{children:c}),l&&O?.concertLocations&&0===z.length&&(0,A.jsx)(g.E,{as:"p",variant:"bodyMedium",children:d.Ru.get("concert.error.no_locations_found_subtitle")}),l&&(0,A.jsx)("ol",{className:I,ref:T,children:z.map(((e,n)=>(0,A.jsx)("li",{children:(0,A.jsx)("button",{tabIndex:n+1,className:Z,onClick:()=>{const n={geonameId:Number(e.geonameId),name:e.name,country:e.country,geohash:e.geoHash,fullName:e.fullName};r.find((e=>e.geonameId===n.geonameId))||s([...r,n]),t(n)},children:e.fullName})},e.geonameId)))}),!!r?.length&&!l&&(0,A.jsxs)("div",{className:M,children:[(0,A.jsx)("div",{className:E,children:(0,A.jsx)(g.E,{as:"h3",variant:"bodyMediumBold",children:d.Ru.get("concert.location.search.recent")})}),(0,A.jsx)("ol",{children:r.map(((e,n)=>(0,A.jsxs)("li",{className:F,children:[(0,A.jsx)("button",{tabIndex:n+1,className:Z,onClick:()=>t({geonameId:Number(e.geonameId),name:e.name,country:e.country,geohash:e.geohash}),children:(0,A.jsx)("div",{className:B,children:e.fullName??[e.name,e.country].join(d.Ru.getSeparator())})}),(0,A.jsx)(u.H,{"aria-label":d.Ru.get("remove"),iconOnly:i.M,size:"small",onClick:t=>{t.stopPropagation(),s(r.filter((t=>t.geonameId!==e.geonameId)))}})]},e.geonameId)))})]})]})]})})})};var U=n(49971);const V=new C.l("saveLocation","mutation","5502351e9f201ae29014ca55d3b24b755ba261a1a9eb35fb498cb4c7df419353",null);var O=n(29195);const H="WZzy7tMC5xlIMwoZ32JU",q="LkdC_QJiLoD0OTOWnkJV",z="WqruN54NvYqlA2XlTJ0Z",W="GS4yLEr0XMj8kw2iMAd8",J="prICvcudVq_SL6dqkZBw",$="YLM_DWbpYGBpvqtDEhum",G="h8jjXJERT64OZi2sHCbi",K=(e,t)=>e(V,{geonameId:t}),P=({onCancel:e,onSave:t,location:n,storeConcertLocation:o=K})=>{const[c,l]=(0,a.useState)(!1),[m,h]=(0,a.useState)(!1),{getGraphQLLoader:g}=(0,O.mv)(),f=g();return(0,A.jsx)("div",{onKeyDown:t=>{const n=t.key;b(n)&&"Escape"===n&&e()},"data-interaction-context":"location-selector",children:(0,A.jsx)(j.A,{isOpen:!0,onRequestClose:e,children:(0,A.jsxs)("section",{className:H,children:[(0,A.jsx)("div",{className:z,children:(0,A.jsx)(u.H,{iconOnly:i.M,size:"medium",onClick:e,"aria-label":d.Ru.get("close")})}),(0,A.jsxs)("div",{className:q,children:[(0,A.jsx)("div",{className:W,children:(0,A.jsx)(U.Z,{variant:"celloCanon",children:d.Ru.get("concerts.location.change.confirm",n.name)})}),(0,A.jsx)("div",{className:J,children:(0,A.jsx)(r.t,{size:"xlarge"})}),(0,A.jsx)("div",{className:$,children:(0,A.jsx)(U.Z,{semanticColor:"textSubdued",children:d.Ru.get("concerts.location.change.info")})}),(0,A.jsx)(s.$,{onClick:async()=>{l(!0),h(!1);try{const a=await o(f,String(n.geonameId));if(e=a?.data?.storeUserLocation,void 0===e||!("success"in e)||!0!==e.success)throw Error();t()}catch{h(!0),l(!1)}var e},disabled:c,children:d.Ru.get("concerts.location.change.button")}),m&&(0,A.jsx)("div",{className:G,children:(0,A.jsx)(U.Z,{semanticColor:"textWarning",children:d.Ru.get("concerts.location.change.error")})})]})]})})})};var Q=n(16273),X=n(92415);const Y=()=>(0,A.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,A.jsx)("path",{d:"M6.94875 9.48555V14.9935C6.94875 15.5494 7.42943 16 8.02239 16C8.42905 16 8.80081 15.7846 8.98268 15.4436L15.6347 2.9711L15.9539 2.07322C16.1803 1.43663 15.5343 0.830999 14.8552 1.0432L13.8975 1.34249L0.593494 7.57874C0.229762 7.74924 0 8.09776 0 8.47901C0 9.03491 0.480685 9.48555 1.07364 9.48555H6.94875Z",fill:"currentColor"})}),ee=new C.l("concertLocationsByLatLon","query","8a059d072a17a1199feb21fe846271f1680eda87010c832852ced0c55c6c7c96",null);var te=n(81834),ne=n(27963),ae=n(50671);const oe="LUZuAtOgmXbneOoxnP8P",ce="dIOLAcD26GH01pNjZHBL",re="tXNcvSNL8Kx6wKUOej2I",ie="XZ1RzeF1kz6ch8idhAAD",se="GQeQjsi5dPF4PFO7BzvL",le=e=>{const[t,n]=(0,a.useState)(!1),[o,c]=(0,a.useState)(!1),r=(()=>{const e=ee,{name:t,sha256Hash:n}=e,o=(0,Q.jE)(),{request:c}=(0,a.useContext)(te.j);return a=>o.ensureQueryData({queryFn:()=>(0,ne.c)(c,e,a),queryKey:[t,a,n]})})(),i=(0,ae.t)(e.spec);return(0,A.jsxs)(A.Fragment,{children:[t&&(0,A.jsx)("div",{children:d.Ru.get("concert.location.search.current_location.error")}),(0,A.jsx)("button",{ref:i,className:re,onClick:async()=>{c(!0),e.getCurrentPosition((async t=>{const a=await r({lat:t.coords.latitude,lon:t.coords.longitude});if(o=a?.data?.concertLocations,void 0===o||!("items"in o))return c(!1),n(!0);var o;const[i]=a.data.concertLocations.items;return e.onChange({geonameId:Number(i.geonameId),name:i.name})}))},children:(0,A.jsx)(g.E,{semanticColor:"textSubdued",className:se,children:o?(0,A.jsx)(X.U,{}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Y,{})," ",d.Ru.get("concert.location.search.current_location")]})})})]})},de=new C.l("userLocation","query","079939378ca79b67c6d047be9152ea940d21f10bbfa2f5d4cf4d8320d87774c2",null),ue=(e,t)=>(0,p.I)(de,e,t),me="Hj5kpRfIocJic5jcxsW_",he="aJduGcVsoCwJvV1jVqjl",ge=({onClick:e})=>{const{data:t}=ue({});return t?(0,A.jsxs)("div",{className:me,children:[(0,A.jsxs)("div",{className:he,children:[(0,A.jsx)(r.t,{size:"small"}),(0,A.jsxs)("div",{children:[(0,A.jsx)(U.Z,{as:"div",semanticColor:"textPositive",variant:"ballad",children:t.me?.profile?.location?.name}),(0,A.jsx)(U.Z,{as:"div",semanticColor:"textSubdued",children:d.Ru.get("concerts.location.preferred")})]}),(0,A.jsx)(c.n,{onClick:e,size:"small",children:d.Ru.get("concerts.location.change")})]}),(0,A.jsx)(U.Z,{semanticColor:"textSubdued",variant:"finale",children:d.Ru.get("concerts.location.preferred.info")})]}):null};var fe=n(38501),xe=n(36061),ve=n(33329);const je=e=>{const{isAnonymous:t}=(0,o.d4)(xe.Ht),{data:n,invalidate:u}=ue({}),m=n?.me?.profile?.location,[h,g]=(0,a.useState)(),{handleLocationChange:f,locationStr:x,headerSpec:v}=e,[j,y]=(0,a.useState)(e.isDialogDefaultOpen??!1),[b,C]=(0,a.useState)(e.dialog??"browse"),[p,R]=(0,a.useState)();(0,a.useEffect)((()=>{h||g(m?.name)}),[m?.name,g,h]);const _=(0,a.useMemo)((()=>v?.changeLocationButtonFactory()),[v]),w=(0,a.useMemo)((()=>v?.changeLocationUiFactory({identifier:x})),[v,x]),N=(0,a.useMemo)((()=>w&&"currentLocationButtonFactory"in w?w?.currentLocationButtonFactory():void 0),[w]),k=(0,ve.s)(),D=(0,l.NC)(fe.tE2),S=()=>{_&&!j&&k.logInteraction(_.hitUiReveal()),y(!j)},L=()=>{y(!1),C(e.dialog??"browse"),R(void 0)},I=e=>{f(e),L()},M=void 0!==h&&e.locationStr!==d.Ru.get("concerts.default_location")&&h!==e.locationStr;h!==m?.name&&e.locationStr===m?.name&&g(m.name);const E=M?(0,A.jsxs)("div",{className:ce,children:[m&&(0,A.jsx)(c.n,{size:"small",iconOnly:i.M,"aria-label":d.Ru.get("close"),onClick:()=>f({geonameId:Number(m.geonameId),name:m.name})}),(0,A.jsx)(s.$,{size:"small",iconTrailing:i.M,onClick:()=>y(!0),className:ie,children:x})]}):(0,A.jsx)(c.n,{iconLeading:r.t,onClick:S,size:"small",className:ie,children:x}),F=e.action?(0,a.cloneElement)(e.action,{onClick:S}):E;return(0,A.jsxs)("div",{className:oe,children:[F,j&&"browse"===b&&(0,A.jsx)(T,{title:d.Ru.get("concert.location.search.header"),onChange:I,onCancel:L,spec:w,children:!t&&(0,A.jsx)(ge,{onClick:()=>C("preferred")})}),j&&"preferred"===b&&(0,A.jsx)(T,{title:d.Ru.get("concerts.location.preferred"),onChange:e=>{C("confirm"),R(e)},onCancel:L,onBack:e.dialog?void 0:()=>C("browse"),spec:w,children:D&&"geolocation"in navigator&&(0,A.jsx)(le,{spec:N,getCurrentPosition:navigator.geolocation.getCurrentPosition.bind(navigator.geolocation),onChange:e=>{N?.hitUiReveal(),C("confirm"),R(e)}})}),j&&"confirm"===b&&p&&(0,A.jsx)(P,{location:p,onCancel:L,onSave:async()=>{g(void 0),await u(),I(p)}})]})}},7834:(e,t,n)=>{n.d(t,{k:()=>f});var a=n(422),o=n(44481),c=n(61759),r=n(31417),i=n(18278),s=n(57776),l=n(59147);const d=new s.l("inferredUserLocation","query","5db4c507ea735d2a1f37bd1166eca2c1a0e3387bb875ebca5d6031b6eccceeba",null);var u=n(50671),m=n(21549);const h="g8vV54lx3mRkeseb5Bf2";var g=n(86070);const f=e=>{const{data:t}=(n={},(0,l.I)(d,n,s));var n,s;const{spec:f}=(0,m.r)(c.F,{}),x=(0,u.t)(f);return t&&t.me?.profile?.location?.isInferred?(0,g.jsxs)("div",{className:h,ref:x,children:[(0,g.jsx)(a.E,{as:"h2",variant:"titleSmall",semanticColor:"textBase",children:r.Ru.get("concert.feed.set_location")}),(0,g.jsx)(a.E,{paddingBottom:"tighter-2",children:r.Ru.get("concert.feed.set_location_description")}),(0,g.jsx)(i.A,{locationStr:"london",dialog:"preferred",headerSpec:f,handleLocationChange:e.onLocationChange,action:(0,g.jsx)(o.$,{children:r.Ru.get("concert.feed.set_location_button")})})]}):null}},21113:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(30758),o=n(422),c=n(38219),r=n(21082),i=n(54926);const s="D_V60ibMxH9Vy7kyvWvc",l="anRK1X9LKn5HxZQJB5Tl",d="shUifmqVle_F5ILRpCqe",u="_WibGTg4OzGdsTf18zK1",m="LHhL2094jqvK0MNwlGAu",h="yRQGIh3Y05BG51IHUW2b",g="fT86P9Div4C8GXI9hZ36",f="G8sU0RZZT_ZhaEv7B26V";var x=n(86070);const v=(0,a.memo)((({date:e,image:t,title:n,subTitle:a,dateRange:v,uri:j,onClick:y})=>{const b=e?(0,i.l4)(e):void 0;return(0,x.jsxs)(r.N,{to:j,className:s,"data-testid":"concert-row",onClick:y,children:[(0,x.jsx)("time",{dateTime:e,className:l,children:b&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o.E,{as:"div",variant:"bodySmall",children:(0,i.tj)(b)}),(0,x.jsx)(o.E,{variant:"bodyMediumBold",children:(0,i.Py)(b)})]})}),t?(0,x.jsx)(c._,{src:t,alt:"",role:"presentation",className:d}):(0,x.jsx)("div",{className:d}),(0,x.jsxs)("div",{className:m,children:[(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)(o.E,{variant:"bodyMedium",className:u,children:n}),(0,x.jsx)(o.E,{variant:"bodySmall","data-testid":"event-venue",semanticColor:"textSubdued",children:a})]}),(0,x.jsx)(o.E,{as:"span",variant:"bodyMedium",semanticColor:"textSubdued",className:g,children:v}),(0,x.jsx)("div",{className:f,children:b&&(0,x.jsx)(o.E,{variant:"bodyMedium",semanticColor:"textSubdued",children:(0,i.WB)(b)})})]})]})}))},15558:(e,t,n)=>{n.d(t,{$V:()=>a,Bw:()=>l,Lw:()=>s,V5:()=>u,dR:()=>r,eO:()=>i,m4:()=>m,se:()=>c,w1:()=>d,ys:()=>o});const a=e=>"data"in e&&Object.keys(e.data).length>0,o=e=>"concerts"in(e??{}),c=e=>null!=e,r=e=>"__typename"in e&&"AllEvents"===e.__typename,i=e=>"__typename"in e,s=e=>"__typename"in e,l=e=>!!e&&"sections"in e,d=e=>"__typename"in e,u=e=>Object.keys(e).includes("data"),m=e=>void 0!==e&&Object.keys(e).includes("uri")},54926:(e,t,n)=>{n.d(t,{Fn:()=>m,MW:()=>h,Py:()=>d,VJ:()=>u,Vi:()=>v,WB:()=>g,WZ:()=>f,Y:()=>i,dp:()=>s,l4:()=>r,m7:()=>x,tX:()=>y,tj:()=>l});var a=n(12058),o=n(31417),c=n(15558);const r=e=>new Date(e.substring(0,16)),i=e=>o.Ru.formatDate(e,{weekday:"short",month:"short",day:"numeric"}),s=e=>o.Ru.formatDate(e,{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}),l=e=>o.Ru.formatDate(e,{month:"short"}),d=e=>o.Ru.formatDate(e,{day:"numeric"}),u=e=>o.Ru.formatDate(e,{weekday:"short"}),m=e=>o.Ru.formatDate(e,{month:"short",day:"numeric"}),h=e=>o.Ru.formatDate(e,{weekday:"short",hour:"numeric",minute:"numeric"}),g=e=>o.Ru.formatDate(e,{hour:"numeric",minute:"numeric"}),f=(e,t)=>{if(e.toDateString()===t.toDateString())return i(e);if(e.getMonth()===t.getMonth()){return`${o.Ru.formatDate(e,{day:"numeric",month:"short"})}–${o.Ru.formatDate(t,{day:"numeric"})}`}return`${o.Ru.formatDate(e,{day:"numeric",month:"short"})}–${o.Ru.formatDate(t,{day:"numeric",month:"short"})}`},x=e=>{if(!e)return!1;const t=new Date(e);return new Date>t},v=e=>{const[t]=e,n=e[e.length-1];return(0,c.$V)(t)&&(0,c.$V)(n)?{startDate:r(t.data.startDateIsoString),endDate:r(n.data.startDateIsoString)}:{startDate:new Date,endDate:new Date}},j={month:"short",day:"numeric"},y=e=>{if((0,a.r)(e.from,e.to))return o.Ru.formatDate(e.from,j);return`${o.Ru.formatDate(e.from,j).replace(/ /g," ")} - ${o.Ru.formatDate(e.to,j).replace(/ /g," ")}`}},73812:(e,t,n)=>{n.d(t,{Ac:()=>c,a9:()=>r,i3:()=>l,im:()=>s,re:()=>i,tI:()=>o});var a=n(31417);const o=(e,t,n)=>!!e&&(t||!n.length),c=e=>1===e.length?a.Ru.get("concert.header.upcoming_concert_title_1",...e):2===e.length?a.Ru.get("concert.header.upcoming_concert_title_2",...e):3===e.length?a.Ru.get("concert.header.upcoming_concert_title_3",...e):4===e.length?a.Ru.get("concert.header.upcoming_concert_title_4",...e):e.length>4?a.Ru.get("concert.header.upcoming_concert_title_more",...e):"",r=e=>{const t=(e=>e.artists.map((e=>e.name)))(e);return o(e.title,e.festival,t)?e.title:c(t)},i=e=>1===e.length?a.Ru.get("concert.header.entity_title_1",...e):2===e.length?a.Ru.get("concert.header.entity_title_2",...e):3===e.length?a.Ru.get("concert.header.entity_title_3",...e):4===e.length?a.Ru.get("concert.header.entity_title_4",...e):e.length>4?a.Ru.get("concert.header.entity_title_more",...e):"",s=({name:e,city:t,region:n,country:o})=>[e,t,n,o].filter((e=>!!e&&"unknown"!==e.toLowerCase())).join(a.Ru.getSeparator()),l=e=>{if(!e.artists||0===e.artists.items.length)return e.title;if(e.festival)return e.title;const t=e.artists.items.map((e=>e.profile.name));return i(t)}},10266:(e,t,n)=>{n.d(t,{K9:()=>c,gq:()=>r,zV:()=>i});const a=(e,t)=>t.formatDate(e,{year:"numeric",month:"numeric",day:"numeric"}),o=(e,t)=>t.formatDate(e,{hour:"numeric",minute:"numeric"}),c=(e,t,n,c,r)=>{if(!e||!r)return"";if(e&&t&&n&&c){const i=a(c,r),s=o(c,r);return r.get("concert.entity_metadata.title_with_date_and_time",e,t,n,i,s)}return r.get("concert.entity_metadata.title",e,t,n)},r=e=>{if(!e)return"";return`${e} Tickets - ${(new Date).getFullYear()} Concert Tour Dates | Spotify`},i=e=>`Concert Tickets & Tour Dates for you${e?` in ${e}`:""} | Spotify`}}]);
//# sourceMappingURL=2032.js.map