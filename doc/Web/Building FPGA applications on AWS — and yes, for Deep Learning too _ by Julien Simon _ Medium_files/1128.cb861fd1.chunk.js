(self.webpackChunklite=self.webpackChunklite||[]).push([[1128],{98598:(e,n,t)=>{"use strict";t.d(n,{g:()=>l});var i=t(87329),o=t(84683),a=t(19308),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionTooltip_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"subscriberCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionFollowButton_collection"}}]}}].concat((0,i.Z)(o.d.definitions),(0,i.Z)(a.I.definitions))}},18978:(e,n,t)=>{"use strict";t.d(n,{L:()=>s});var i=t(67294),o=t(71652),a=t(82405),l=t(77355),r=t(20113),d=t(87691),c=t(21372),s=function(e){var n=e.collection,t=e.buttonSize,s=e.buttonStyleFn,m=n.name,u=n.description;return i.createElement(l.x,{padding:"15px",display:"flex",flexDirection:"column",width:"300px"},i.createElement(l.x,{display:"flex",flexDirection:"row",justifyContent:"space-between",whiteSpace:"normal",borderBottom:"neutral.primary",paddingBottom:"10px",marginBottom:"10px"},i.createElement(l.x,{display:"flex",flexDirection:"column",paddingRight:"5px"},i.createElement(r.X6,{scale:"S"},m),i.createElement(d.F,{scale:"S"},u)),i.createElement(l.x,null,i.createElement(o.v,{collection:n,link:!0}))),i.createElement(l.x,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},i.createElement(d.F,{scale:"M"},"Followed by ",(0,c.pY)(n.subscriberCount||0)," people"),i.createElement(a.F,{collection:n,buttonSize:t,buttonStyleFn:s,susiEntry:"follow_card"})))}},7675:(e,n,t)=>{"use strict";t.d(n,{J:()=>s,r:()=>u});var i=t(96156),o=t(67294),a=t(14646),l=t(77241);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c=function(){return{width:"100%","& a":{position:"relative",zIndex:l.ZP.elevatedLink},"& button":{position:"relative",zIndex:l.ZP.elevatedLink}}},s=function(e){var n=e.rules,t=e.children,i=(0,a.I)();return o.createElement("div",{className:i([n,c])},t)},m=function(e){return{"& a":d({position:"static","&::before":{content:'""',position:"absolute",zIndex:l.ZP.expandedLink,top:0,left:0,bottom:0,right:0}},e)}},u=function(e){var n=e.anchorStyles,t=e.children,i=(0,a.I)();return o.createElement("div",{className:i(m(n))},t)}},14524:(e,n,t)=>{"use strict";t.d(n,{xO:()=>c});var i=t(87329),o=t(89748),a=t(8994),l=t(89080),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewByLine_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ExpandablePostByline_user"}}]}}].concat((0,i.Z)(o.br.definitions),(0,i.Z)(a.A.definitions))},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewByLine_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionLinkWithPopover_collection"}}]}}].concat((0,i.Z)(o.We.definitions),(0,i.Z)(l.W.definitions))},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewByLine_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewByLine_user"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewByLine_collection"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_post"}}]}}].concat((0,i.Z)(r.definitions),(0,i.Z)(d.definitions),(0,i.Z)(o.yu.definitions))}},9842:(e,n,t)=>{"use strict";t.d(n,{G:()=>r});var i=t(67294),o=t(68717),a=t(36764),l=t(77355),r=function(e){var n=e.post,t=e.showAuthor,r=void 0===t||t,d=e.showCollectionName,c=void 0===d||d,s=e.marginBottom,m=n.collection||n.creator,u="User"===(null==m?void 0:m.__typename)&&n.collection?n.collection:n.creator;return r?i.createElement(l.x,{marginBottom:s,display:"flex",alignItems:"center"},n.creator?i.createElement(a.h,{author:n.creator,collection:c?n.collection:void 0,includeAvatar:!0,includeVerifiedAuthorBadge:!0,skipTab:!0}):u&&i.createElement(o.u,{publisher:u,publishedAt:void 0,post:n,isOneLine:!0})):null}},3105:(e,n,t)=>{"use strict";t.d(n,{J:()=>l});var i=t(87329),o=t(69724),a=t(4088),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewContainer_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"extendedPreviewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isFullContent"}}]}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"pinnedAt"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostScrollTracker_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"usePostUrl_post"}}]}}].concat((0,i.Z)(o.k.definitions),(0,i.Z)(a.u.definitions))}},69935:(e,n,t)=>{"use strict";t.d(n,{V:()=>k});var i=t(96156),o=t(67294),a=t(25145),l=t(77355),r=t(66411),d=t(14646),c=t(68821),s=t(13663);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e){var n=e.post,t=e.index,i=e.presentationTrackerReferrerSource,m=e.children,p=e.isFullHeight,k=u(u({},(0,r.Lk)()),{},{index:t}),v=(0,a.D)()(n),f=o.useRef(null);(0,c.V)(f,n);var g=n.pinnedAt,S=n.extendedPreviewContent,w=!(null==S||!S.isFullContent),E=(0,d.I)(),y=p?"100%":void 0;return o.createElement(r.cW,{source:k},o.createElement("article",{className:E({height:y})},o.createElement(l.x,{boxSizing:"content-box",height:y},o.createElement(s.o,{post:u(u({},n),{},{previewContent:{isFullContent:w}}),presentationContext:"POST_PREVIEW",isDisplayingFullPost:w,suppressedEvents:w?"VIEWED":void 0,shouldReportClientViewed:!1,reportClientViewedOnFullPost:!0,postClientViewedContext:2,pinned:!!g,referrerSource:i},o.createElement(l.x,{ref:f,height:y},m({postUrl:v}))))))}var k=(0,o.memo)(p,(function(e,n){return e.post.id===n.post.id&&e.index===n.index}))},38004:(e,n,t)=>{"use strict";t.d(n,{w:()=>k,d:()=>v});var i=t(87329),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"StreamPostPreviewImage_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"StreamPostPreviewImage_imageMetadata"}}]}}]}}].concat((0,i.Z)([{kind:"FragmentDefinition",name:{kind:"Name",value:"StreamPostPreviewImage_imageMetadata"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ImageMetadata"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"focusPercentX"}},{kind:"Field",name:{kind:"Name",value:"focusPercentY"}},{kind:"Field",name:{kind:"Name",value:"alt"}}]}}]))},a=t(8607),l=t(14524),r=t(63009),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"StreamPostPreviewContent_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"extendedPreviewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subtitle"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"StreamPostPreviewImage_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewFooter_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewByLine_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewInformation_post"}}]}}].concat((0,i.Z)(o.definitions),(0,i.Z)(a.m1.definitions),(0,i.Z)(l.xO.definitions),(0,i.Z)(r.u.definitions))},c=t(3105),s=t(68216),m=t(54341),u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewReason_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}}].concat((0,i.Z)(s.$m.definitions),(0,i.Z)(m.O.definitions))},p={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewReason_postProviderExplanation"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostProviderExplanation"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"reason"}},{kind:"Field",name:{kind:"Name",value:"interactedUsers"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewReason_user"}}]}},{kind:"Field",name:{kind:"Name",value:"tagObject"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewReason_tag"}}]}}]}}].concat((0,i.Z)(u.definitions),(0,i.Z)([{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewReason_tag"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Tag"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"normalizedTagSlug"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"displayTitle"}}]}}]))},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"StreamPostPreview_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"StreamPostPreviewContent_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewContainer_post"}}]}}].concat((0,i.Z)(d.definitions),(0,i.Z)(c.J.definitions))},v={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"StreamPostPreview_postProviderExplanation"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostProviderExplanation"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewReason_postProviderExplanation"}}]}}].concat((0,i.Z)(p.definitions))}},16517:(e,n,t)=>{"use strict";t.d(n,{j:()=>ne});var i=t(67294),o=t(66604),a=t.n(o),l=t(599),r=t(77355),d=t(93310),c=t(18634),s=t(52069),m=t(90586),u=t(87691),p=t(66411),k=t(78870),v=t(97480),f=t(31889),g=t(36001),S={S:"24px",M:"32px",L:"32px"},w={S:"12px",M:"20px",L:"20px"};function E(e){var n=e.scales,t=e.dividerColor,o=(0,f.F)(),a=(0,l.a)()?w:S,r=(0,g.L)(a,n);return i.createElement(v.E,{marginTop:r,borderColor:null!=t?t:o.colorTokens.border.neutral.primary.base})}var y=t(4381),h=t(46696),x=function(e){return{backgroundColor:e.colorTokens.background.neutral.tertiary.base,borderRadius:"2px"}},N={S:{height:53,width:80},M:{height:53,width:80},L:{height:107,width:160}},F=function(e){var n=e.post,t=e.scales,o=e.webp,a=void 0!==o&&o,l=(0,g.Il)(t),r=n.previewImage,d=n.title,s=null==r?void 0:r.id;if(!s)return null;var m=r.alt||d||"";return i.createElement("div",{"aria-label":m||"Post Preview Image"},Object.keys(l).map((function(e){var n=l[e];return n.length?i.createElement(c.y,{xs:n.includes("xs"),sm:n.includes("sm"),md:n.includes("md"),lg:n.includes("lg"),xl:n.includes("xl"),key:"stream-image-".concat(e)},i.createElement(y.UV,{alt:m,miroId:s,width:N[e].width,height:N[e].height,strategy:h._S.Crop,focusPercentX:r.focusPercentX,focusPercentY:r.focusPercentY,rules:x,webp:a})):null})))},b=t(7675),P=t(9842),C=t(27128),_=t(63254),D=function(e,n,t){return e?2:t?n>104?1:n>52?2:3:n>140?1:n>70?2:3},O=function(e){var n,t,o,v=e.post,f=e.postUrl,S=e.scales,w=e.showDivider,y=e.showCollectionName,h=e.showAuthor,x=e.dividerColor,O=e.prependOverflowMenuItems,T=e.webp,L=void 0!==T&&T,I=e.children,R=v.title,Z=null==v||null===(n=v.extendedPreviewContent)||void 0===n?void 0:n.subtitle,B=null===(t=v.previewImage)||void 0===t?void 0:t.id,j=(0,l.a)(),U=(0,p.pK)(),A=(0,g.L)({S:{footerLocation:(o=j)?"content":"bottom",showSubtitle:!1,bylineSpacing:"12px",titleScale:"XS",titleClamp:o?4:2,imageMarginLeft:"24px",footerSpacing:"0",footerWidth:"100%"},M:{footerLocation:"bottom",showSubtitle:!0,bylineSpacing:"16px",titleScale:"S",titleClamp:o?4:2,imageMarginLeft:"24px",footerSpacing:"2px",footerWidth:"100%"},L:{footerLocation:"content",showSubtitle:!0,bylineSpacing:o?"16px":"20px",titleScale:"M",titleClamp:3,imageMarginLeft:"56px",footerSpacing:"10px",footerWidth:B?"100%":"calc(100% - (".concat(N.L.width,"px + 56px))")}},S),M=a()(A,(function(e){return e.bylineSpacing})),V=a()(A,(function(e){return e.footerSpacing})),W=a()(A,(function(e){return e.titleScale})),z=a()(A,(function(e){return e.titleClamp})),Y=a()(A,(function(e){return e.imageMarginLeft})),G=a()(A,(function(e){return e.footerWidth}));return i.createElement(r.x,{width:"100%"},i.createElement("div",{style:{position:"relative",display:"flex"},role:"link","data-href":f,tabIndex:0,onKeyDown:function(e){e&&"Enter"===e.key&&window.location.assign((0,k.Rk)(f,{source:U}))}},i.createElement(b.J,null,i.createElement(i.Fragment,null,i.createElement(r.x,{display:"flex"},i.createElement(P.G,{post:v,marginBottom:M,showCollectionName:y,showAuthor:h})),i.createElement(r.x,{display:"flex"},i.createElement(r.x,{flexGrow:"1",flexShrink:"1",wordBreak:"break-word"},i.createElement(b.r,{anchorStyles:{display:"flex",flexDirection:"column"}},i.createElement(d.r,{href:f},R&&i.createElement(s.Dx,{scale:W,clamp:z},R),Z&&i.createElement(c.y,{xs:A.xs.showSubtitle,sm:A.sm.showSubtitle,md:A.md.showSubtitle,lg:A.lg.showSubtitle,xl:A.xl.showSubtitle,paddingTop:"8px"},i.createElement(m.QE,{scale:"S",clamp:D(j,(null==R?void 0:R.length)||0,!!B)},Z)))),i.createElement(c.y,{xs:"content"===A.xs.footerLocation,sm:"content"===A.sm.footerLocation,md:"content"===A.md.footerLocation,lg:"content"===A.lg.footerLocation,xl:"content"===A.xl.footerLocation},j?i.createElement(r.x,{paddingTop:V,width:G},i.createElement(u.F,{scale:"S",tag:"span"},i.createElement(C.uo,{type:C.th.STREAM,post:v,postUrl:f,scales:S,prependOverflowMenuItems:O,isCondensedFooter:!0}))):i.createElement(i.Fragment,null,i.createElement(d.r,{href:f},i.createElement(u.F,{scale:"S",tag:"span"},i.createElement(r.x,{display:"flex",alignItems:"center",paddingTop:M},i.createElement(_.O,{post:v})))),i.createElement(r.x,{paddingTop:"24px"},i.createElement(C.uo,{type:C.th.STREAM,post:v,postUrl:f,scales:S,prependOverflowMenuItems:O}))))),!!B&&i.createElement(r.x,{marginLeft:Y},i.createElement(F,{post:v,scales:S,webp:L}))),i.createElement(c.y,{xs:"bottom"===A.xs.footerLocation,sm:"bottom"===A.sm.footerLocation,md:"bottom"===A.md.footerLocation,lg:"bottom"===A.lg.footerLocation,xl:"bottom"===A.xl.footerLocation,paddingTop:j?"12px":"16px"},j?i.createElement(u.F,{scale:"S",tag:"span"},i.createElement(C.uo,{type:C.th.STREAM,post:v,postUrl:f,scales:S,prependOverflowMenuItems:O,isCondensedFooter:!0})):i.createElement(C.uo,{type:C.th.STREAM,post:v,postUrl:f,scales:S,prependOverflowMenuItems:O}))))),I,w&&i.createElement(E,{scales:S,dividerColor:x}))},T=t(69935),L=t(84739),I=t(28695),R=t(69992),Z=t(30020),B=t(92780),j=t(14646),U=t(75221),A=t(43487),M=t(59922);function V(){return V=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},V.apply(this,arguments)}var W=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.96 10.85l4.27-7.7L9.36 1 5.09 8.7l3.87 2.15zm-.4.73l-1.08 1.94-1.02.44L5.88 15l-3.11-.71 1-1.82-.16-1.1 1.08-1.95 3.87 2.15z",fill:"currentColor"});const z=function(e){return i.createElement("svg",V({width:16,height:16,viewBox:"0 0 16 16",fill:"none"},e),W)};var Y=t(77692),G=t(50458);function H(e){var n=e.reason;switch(n.reason){case U.YV.CLAPPED_BY_NETWORK:return i.createElement(J,{users:n.interactedUsers,reason:n.reason,interaction:"clapped"});case U.YV.HIGHLIGHTED_BY_NETWORK:return i.createElement(J,{users:n.interactedUsers,reason:n.reason,interaction:"highlighted"});case U.YV.CURATED_IN_TAG:if(n.tagObject)return i.createElement(K,{reason:n.reason},i.createElement(r.x,{flexShrink:"0"},"Because you follow "),i.createElement(Q,{tag:n.tagObject}))}return null}function K(e){var n=e.reason,t=e.children,o=(0,j.I)(),a=(0,B.n)({name:"detail",scale:"S",color:"LIGHTER"});return i.createElement(i.Fragment,null,i.createElement(r.x,{marginLeft:"2px",display:"flex",gap:"10px",alignItems:"center"},i.createElement($,{reason:n}),i.createElement("div",{className:o([a,{display:"flex",whiteSpace:"pre-wrap",overflow:"hidden"}])},t)),i.createElement(r.x,{margin:"12px 0",width:"20px",display:"flex",justifyContent:"center"},i.createElement(r.x,{borderLeft:"neutral.tertiary",height:"12px"})))}var X=function(e){return{color:e.colorTokens.foreground.neutral.secondary.base,flex:"0 0 auto"}};function $(e){var n=e.reason,t=(0,j.I)();switch(n){case U.YV.CLAPPED_BY_NETWORK:return i.createElement(M.Z,{className:t(X)});case U.YV.HIGHLIGHTED_BY_NETWORK:return i.createElement(z,{className:t(X)});case U.YV.CURATED_IN_TAG:return i.createElement(Y.Z,{className:t(X)})}return null}function J(e){var n=e.users,t=e.reason,o=e.interaction;return null!=n&&n.length&&n[0]?i.createElement(K,{reason:t},i.createElement(q,{user:n[0]}),i.createElement(r.x,{flexShrink:"0"}," ".concat(o))):null}function q(e){var n=e.user,t=(0,L.B)(n),o=(0,i.useCallback)((function(){return i.createElement(I.K,{user:n})}),[n]);return i.createElement(R.$,{targetDistance:15,mouseLeaveDelay:100,mouseEnterDelay:Z.w,placement:"top",role:"tooltip",display:"block",hoverableRules:{overflow:"hidden"},popoverRenderFn:o},i.createElement(ee,{href:t},n.name))}function Q(e){var n=e.tag,t=(0,A.v9)((function(e){return e.config.authDomain})),o=(0,G.Ih)(n.normalizedTagSlug||"",t);return i.createElement(ee,{href:o},n.displayTitle)}function ee(e){var n=e.href,t=e.children;return i.createElement(d.r,{display:"block",href:n,color:"NORMAL",linkStyle:"SUBTLE",inline:!0,rules:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}},t)}function ne(e){var n=e.post,t=e.index,o=e.presentationTrackerReferrerSource,a=e.scale,l=e.lastIndex,r=e.showCollectionName,d=e.showAuthor,c=e.dividerColor,s=e.prependOverflowMenuItems,m=e.webp,u=e.reason,p=e.children,k="string"==typeof a?(0,g.n0)(a):a;return i.createElement(T.V,{post:n,index:t,presentationTrackerReferrerSource:o},(function(e){var o=e.postUrl;return i.createElement(i.Fragment,null,u&&i.createElement(H,{reason:u}),i.createElement(O,{post:n,postUrl:o,scales:k,showDivider:t!==l,showCollectionName:r,showAuthor:d,dividerColor:c,prependOverflowMenuItems:s,webp:m},p))}))}},19308:(e,n,t)=>{"use strict";t.d(n,{b:()=>l,I:()=>r});var i=t(87329),o=t(68216),a=t(98007),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]},r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_collection"}}]}}].concat((0,i.Z)(o.nf.definitions),(0,i.Z)(a.Os.definitions))}},82405:(e,n,t)=>{"use strict";t.d(n,{F:()=>h});var i=t(34699),o=t(21919),a=t(67294),l=t(51615),r=t(77520),d=t(20297),c=t(25550),s=t(25267),m=t(39727),u=t(26350),p=t(50563),k=t(93310),v=t(77355),f=t(47230),g=t(18627),S=t(66411),w=t(92661),E=t(43487),y=t(50458),h=function(e){var n,t=e.buttonSize,y=e.buttonStyleFn,h=e.collection,N=e.post,F=e.simpleLink,b=e.susiEntry,P=void 0===b?"follow_card":b,C=e.preventParentClick,_=e.width,D=(0,E.v9)((function(e){return e.config.authDomain})),O=(0,c.r)().viewerId,T=(0,g.A)(),L=(0,S.pK)(),I=(0,l.TH)(),R=(0,w.$B)(I.pathname),Z=null==R||null===(n=R.route)||void 0===n?void 0:n.name,B=(0,m.g)(h),j=B.viewerEdge,U=B.loading,A=function(e,n){var t=(0,o.D)(d.e),l=(0,i.Z)(t,1)[0];return a.useCallback((function(){return l({variables:{id:e.id},optimisticResponse:{followCollection:{__typename:"Collection",id:e.id,name:e.name,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e.id,"-viewerId:").concat(n),isFollowing:!0}}},update:function(t){t.modify({id:"User:".concat(n),fields:{missionControl:(0,p.im)("followedCollections",!0),followingCollectionConnection:(0,p.Hc)(e.id)}})}})}),[e.id])}(h,O),M=function(e,n){var t=(0,o.D)(d.X),l=(0,i.Z)(t,1)[0];return a.useCallback((function(){return l({variables:{id:e.id},optimisticResponse:{unfollowCollection:{__typename:"Collection",id:e.id,name:e.name,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e.id,"-viewerId:").concat(n),isFollowing:!1}}},update:function(e){e.modify({id:"User:".concat(n),fields:{missionControl:(0,p.im)("followedCollections",!1)}})}})}),[e.id])}(h,O),V=a.useCallback((function(e){C&&e.preventDefault(),T.event("collection.followed",{collectionId:h.id,followSource:L}),A()}),[h,C,L,T]),W=a.useCallback((function(e){C&&e.preventDefault(),T.event("collection.unfollowed",{collectionId:h.id,followSource:L}),M()}),[C,L,T]),z=!(null==j||!j.isFollowing),Y=y?y(!!z):z?"OBVIOUS":"STRONG";return F?a.createElement(k.r,{onClick:z?W:V},a.createElement(v.x,{display:"flex",flexDirection:"row"},z?"Unfollow publication":"Follow publication")):a.createElement(s.I,null,(function(e){return e?a.createElement(f.zx,{size:t,onClick:z?W:V,buttonStyle:Y,loading:U,width:_},z?"Following":"Follow"):a.createElement(u.R,{collection:h,buttonStyle:Y,isButton:!0,buttonSize:t,operation:"register",actionUrl:x(D,h,N)||"",susiEntry:P,pageSource:(0,r.x)(Z,"register"),buttonWidth:_},z?"Following":"Follow")}))},x=function(e,n,t){return n.slug&&(t&&t.id?(0,y.TA)(e,n.slug,t.id):(0,y.Ll)(e,n.slug))}},89080:(e,n,t)=>{"use strict";t.d(n,{W:()=>l});var i=t(87329),o=t(68216),a=t(98598),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionLinkWithPopover_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionTooltip_collection"}}]}}].concat((0,i.Z)(o.nf.definitions),(0,i.Z)(a.g.definitions))}},26700:(e,n,t)=>{"use strict";t.d(n,{q:()=>s});var i=t(67294),o=t(18978),a=t(68427),l=t(69992),r=t(93310),d=t(30020),c=t(87691),s=function(e){var n=e.collection,t=e.clamp,s=e.popoverPlacement,m=void 0===s?"bottom":s,u=e.scale,p=void 0===u?"M":u,k=e.testId,v=(0,a.R)(n);return i.createElement(l.$,{placement:m,targetDistance:10,mouseLeaveDelay:100,mouseEnterDelay:d.w,popoverRenderFn:function(){return i.createElement(o.L,{collection:n})},display:"block"},i.createElement(r.r,{inline:!0,href:v,linkStyle:"SUBTLE",display:"flex",rules:{alignItems:"center"},"data-testid":k},i.createElement(c.F,{scale:p,color:"DARKER",clamp:t},n.name)))}},36764:(e,n,t)=>{"use strict";t.d(n,{h:()=>f});var i=t(67294),o=t(84739),a=t(65968),l=t(64238),r=t(26700),d=t(17193),c=t(28695),s=t(77355),m=t(69992),u=t(93310),p=t(30020),k=t(87691),v=function(e){var n=e.author;return(0,l.o)(n)?i.createElement(s.x,{marginLeft:"2px",marginTop:"2px"},i.createElement(a._,{size:"S"})):null},f=function(e){var n,t=(0,o.I)()(e.author),a=(0,i.useCallback)((function(){return e.author&&i.createElement(c.K,{user:e.author})}),[e.author]);return i.createElement(i.Fragment,null,e.includeAvatar&&i.createElement(s.x,{marginRight:"8px"},i.createElement(m.$,{targetDistance:15,mouseLeaveDelay:100,mouseEnterDelay:p.w,placement:"top",role:"tooltip",popoverRenderFn:a,display:"block"},i.createElement(d.Yt,{scale:"XXXS",user:e.author,link:!0,showHoverState:!0,skipTab:e.skipTab}))),i.createElement(s.x,{paddingRight:"4px"},i.createElement(m.$,{targetDistance:15,mouseLeaveDelay:100,mouseEnterDelay:p.w,placement:"top",role:"tooltip",popoverRenderFn:a,display:"block"},i.createElement(u.r,{href:t,linkStyle:"SUBTLE",inline:!0,display:"flex",rules:{alignItems:"center"}},i.createElement(k.F,{scale:"S",color:"DARKER",clamp:1},e.author.name),e.includeVerifiedAuthorBadge&&i.createElement(v,{author:e.author})))),(null===(n=e.collection)||void 0===n?void 0:n.name)&&i.createElement(i.Fragment,null,i.createElement(s.x,{paddingRight:"4px"},i.createElement(k.F,{scale:"S",color:"LIGHTER"},"in")),i.createElement(s.x,null,i.createElement(r.q,{collection:e.collection,clamp:1,popoverPlacement:"top",scale:"S"}))))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1128.cb861fd1.chunk.js.map