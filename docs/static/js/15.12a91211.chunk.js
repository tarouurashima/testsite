(this["webpackJsonptomb.finance"]=this["webpackJsonptomb.finance"]||[]).push([[15],{1612:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ge}));var a,r,i,c,u,o,s,l,p,m,d,b,y,f,v,h=n(97),O=n(44),E=n(0),j=n.n(E),x=n(59),g=n(218),w=n.n(g),T=n(37),k=n(846),M=n(1614),S=n(1602),C=n(994),A=n(1593),R=n(732),P=n(771),N=n(782),D=n(847),F=n(803),H=n(36),z=n(227),I=function(){var e=Object(E.useState)({from:new Date,to:new Date}),t=Object(H.a)(e,2),n=t[0],a=t[1],r=Object(z.a)();return Object(E.useEffect)((function(){r&&r.getUserClaimRewardTime().then(a)}),[r]),n},B=n(2),V=n.n(B),U=n(14),W=n(750),_=function(){var e=Object(W.a)().slowRefresh,t=Object(E.useState)(!1),n=Object(H.a)(t,2),a=n[0],r=n[1],i=Object(z.a)(),c=null===i||void 0===i?void 0:i.isUnlocked;return Object(E.useEffect)((function(){function e(){return(e=Object(U.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,i.canUserClaimRewardFromMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}c&&function(){e.apply(this,arguments)}()}),[c,e,i]),a},L=n(1167),G=T.d.p(a||(a=Object(O.a)(["\n  // font-size: 14px;\n  font-weight: 700;\n  // color: ",";\n  margin: 0 0 6px 0;\n"])),(function(e){return e.theme.color.grey[100]})),K=T.d.div(r||(r=Object(O.a)(["\n  width: 100%;\n  height: 8px;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.theme.color.grey[700]})),q=T.d.div(i||(i=Object(O.a)(["\n  width: ","%;\n  height: 100%;\n  border-radius: 3px;\n  background: ",";\n"])),(function(e){return e.progress}),(function(e){return e.theme.color.grey[100]})),J=T.d.div(c||(c=Object(O.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  // padding: ","px ","px;\n"])),(function(e){return e.theme.spacing[2]}),(function(e){return e.theme.spacing[4]})),$=function(e){var t=e.base,n=e.deadline,a=e.hideBar,r=(e.description,Date.now()>=n.getTime()?100:(Date.now()-t.getTime())/(n.getTime()-t.getTime())*100);return j.a.createElement(J,null,j.a.createElement(L.a,{key:(new Date).getTime(),date:n,renderer:function(e){var t=e.days,n=e.hours,a=e.minutes,r=e.seconds,i=String(24*t+n),c=String(a),u=String(r);return j.a.createElement(G,null,i.padStart(2,"0"),":",c.padStart(2,"0"),":",u.padStart(2,"0"))}}),a?"":j.a.createElement(K,null,j.a.createElement(q,{progress:r})))},Q=n(765),X=function(){var e=Object(z.a)(),t=Object(Q.a)();return{onReward:Object(E.useCallback)((function(){t(e.harvestCashFromMasonry(),"Claim 3OMB from the 3Room ")}),[e,t])}},Y=n(28),Z=function(){var e=Object(W.a)().slowRefresh,t=Object(E.useState)(Y.a.from(0)),n=Object(H.a)(t,2),a=n[0],r=n[1],i=Object(z.a)(),c=null===i||void 0===i?void 0:i.isUnlocked;return Object(E.useEffect)((function(){function e(){return(e=Object(U.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,i.getEarningsOnMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}c&&function(){e.apply(this,arguments)}()}),[c,i,e]),a},ee=n(808),te=n(24),ne=T.d.div(u||(u=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),ae=T.d.div(o||(o=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[6]})),re=T.d.div(s||(s=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),ie=function(){var e=Object(ee.a)(),t=X().onReward,n=Z(),a=_(),r=Object(E.useMemo)((function(){return e?Number(e.priceInDollars).toFixed(2):null}),[e]),i=(Number(r)*Number(Object(te.a)(n))).toFixed(2),c=I(),u=c.from,o=c.to;return j.a.createElement(M.a,null,j.a.createElement(S.a,null,j.a.createElement(C.a,null,j.a.createElement(re,null,j.a.createElement(ne,null,j.a.createElement(F.a,null,j.a.createElement(P.a,{symbol:"TEST"})),j.a.createElement(D.a,{value:Object(te.a)(n)}),j.a.createElement(N.a,{text:"\u2248 $".concat(i)}),j.a.createElement(N.a,{text:"TEST Earned"})),j.a.createElement(ae,null,j.a.createElement(A.a,{onClick:t,color:"primary",variant:"contained",disabled:n.eq(0)||!a},"Claim Reward"))))),j.a.createElement(M.a,{mt:2,style:{color:"#FFF"}},a?"":j.a.createElement(S.a,null,j.a.createElement(C.a,null,j.a.createElement(R.a,{style:{textAlign:"center"}},"Claim possible in"),j.a.createElement($,{hideBar:!0,base:u,deadline:o,description:"Claim available in"})))))},ce=n(977),ue=n(979),oe=n(809),se=n(806),le=n(785),pe=function(){var e=Object(E.useState)(!1),t=Object(H.a)(e,2),n=t[0],a=t[1],r=Object(z.a)(),i=Object(W.a)().slowRefresh,c=null===r||void 0===r?void 0:r.isUnlocked;return Object(E.useEffect)((function(){function e(){return(e=Object(U.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.canUserUnstakeFromMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}c&&function(){e.apply(this,arguments)}()}),[c,r,i]),n},me=n(780),de=n(804),be=n(783),ye=n(802),fe=function(e){var t=e.max,n=e.onConfirm,a=(e.onDismiss,e.tokenName),r=void 0===a?"":a,i=Object(E.useState)(""),c=Object(H.a)(i,2),u=c[0],o=c[1],s=Object(E.useMemo)((function(){return Object(te.b)(t,"USDC"===r?6:18)}),[t,r]),l=Object(E.useCallback)((function(e){o(e.currentTarget.value)}),[o]),p=Object(E.useCallback)((function(){o(s)}),[s,o]);return j.a.createElement(me.a,null,j.a.createElement(be.a,{text:"Deposit ".concat(r)}),j.a.createElement(ye.a,{value:u,onSelectMax:p,onChange:l,max:s,symbol:r}),j.a.createElement(de.a,null,j.a.createElement(A.a,{color:"primary",variant:"contained",onClick:function(){return n(u)}},"Confirm")))},ve=function(e){var t=e.onConfirm,n=(e.onDismiss,e.max),a=e.tokenName,r=void 0===a?"":a,i=Object(E.useState)(""),c=Object(H.a)(i,2),u=c[0],o=c[1],s=Object(E.useMemo)((function(){return Object(te.b)(n)}),[n]),l=Object(E.useCallback)((function(e){o(e.currentTarget.value)}),[o]),p=Object(E.useCallback)((function(){o(s)}),[s,o]);return j.a.createElement(me.a,null,j.a.createElement(be.a,{text:"Withdraw ".concat(r)}),j.a.createElement(ye.a,{onSelectMax:p,onChange:l,value:u,max:s,symbol:r}),j.a.createElement(de.a,null,j.a.createElement(A.a,{color:"primary",variant:"contained",onClick:function(){return t(u)}},"Confirm")))},he=function(){var e=Object(W.a)().slowRefresh,t=Object(E.useState)(Y.a.from(0)),n=Object(H.a)(t,2),a=n[0],r=n[1],i=Object(z.a)(),c=null===i||void 0===i?void 0:i.isUnlocked;return Object(E.useEffect)((function(){function e(){return(e=Object(U.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,i.getStakedSharesOnMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}c&&function(){e.apply(this,arguments)}()}),[e,c,i]),a},Oe=n(906),Ee=function(){var e=Object(E.useState)({from:new Date,to:new Date}),t=Object(H.a)(e,2),n=t[0],a=t[1],r=Object(z.a)();return Object(E.useEffect)((function(){r&&r.getUserUnstakeTime().then(a)}),[r]),n},je=function(){var e=Object(z.a)(),t=Object(Q.a)();return{onStake:Object(E.useCallback)((function(n){t(e.stakeShareToMasonry(n),"Stake ".concat(n," 3SHARES to the 3Room "))}),[e,t])}},xe=function(){var e=Object(z.a)(),t=Object(Q.a)();return{onWithdraw:Object(E.useCallback)((function(n){t(e.withdrawShareFromMasonry(n),"Withdraw ".concat(n," 3SHARES from the 3Room "))}),[e,t])}},ge=T.d.div(l||(l=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),we=T.d.div(p||(p=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  width: 100%;\n"]))),Te=T.d.div(m||(m=Object(O.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),ke=T.d.div(d||(d=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),Me=function(){var e=Object(z.a)(),t=Object(oe.b)(e.TSHARE,e.contracts.Masonry.address),n=Object(H.a)(t,2),a=n[0],r=n[1],i=Object(le.a)(e.TSHARE),c=he(),u=Ee(),o=u.from,s=u.to,l=Object(Oe.a)("TSHARES",e.TSHARE),p=Object(E.useMemo)((function(){return l?(Number(l)*Number(Object(te.a)(c))).toFixed(2).toString():null}),[l,c]),m=je().onStake,d=xe().onWithdraw,b=pe(),y=Object(se.a)(j.a.createElement(fe,{max:i,onConfirm:function(e){m(e),h()},tokenName:"TSHARES"})),f=Object(H.a)(y,2),v=f[0],h=f[1],O=Object(se.a)(j.a.createElement(ve,{max:c,onConfirm:function(e){d(e),w()},tokenName:"TSHARES"})),x=Object(H.a)(O,2),g=x[0],w=x[1];return j.a.createElement(M.a,null,j.a.createElement(S.a,null,j.a.createElement(C.a,null,j.a.createElement(ke,null,j.a.createElement(ge,null,j.a.createElement(F.a,null,j.a.createElement(P.a,{symbol:"TSHARES"})),j.a.createElement(D.a,{value:Object(te.a)(c)}),j.a.createElement(N.a,{text:"\u2248 $".concat(p)}),j.a.createElement(N.a,{text:"TSHARES Staked"})),j.a.createElement(we,null,a!==oe.a.APPROVED?j.a.createElement(A.a,{disabled:a!==oe.a.NOT_APPROVED,variant:"contained",color:"primary",style:{marginTop:"20px"},onClick:r},"Approve TSHARES"):j.a.createElement(j.a.Fragment,null,j.a.createElement(ue.a,{disabled:!b,onClick:g},j.a.createElement(ce.b,null)),j.a.createElement(Te,null),j.a.createElement(ue.a,{onClick:v},j.a.createElement(ce.a,null))))))),j.a.createElement(M.a,{mt:2,style:{color:"#FFF"}},b?"":j.a.createElement(S.a,null,j.a.createElement(C.a,null,j.a.createElement(R.a,{style:{textAlign:"center"}},"Withdraw possible in"),j.a.createElement($,{hideBar:!0,base:o,deadline:s,description:"Withdraw available in"})))))},Se=n(1588),Ce=n(824),Ae=n(1590),Re=n(974),Pe=n(781),Ne=n(818),De=function(e){var t=Object(z.a)(),n=Object(Q.a)();return{onRedeem:Object(E.useCallback)((function(){var a=e||"Redeem 3SHARES from 3Room ";n(t.exitFromMasonry(),a)}),[t,e,n])}},Fe=function(){var e=Object(E.useState)(Y.a.from(0)),t=Object(H.a)(e,2),n=t[0],a=t[1],r=Object(z.a)(),i=Object(W.a)().slowRefresh;return Object(E.useEffect)((function(){function e(){return(e=Object(U.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getCurrentEpoch();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,r,i]),n},He=function(){var e=Object(E.useState)(0),t=Object(H.a)(e,2),n=t[0],a=t[1],r=Object(z.a)(),i=Object(W.a)().slowRefresh;return Object(E.useEffect)((function(){function e(){return(e=Object(U.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getMasonryAPR();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,r,i]),n},ze=n(908),Ie=function(){var e=Object(W.a)().slowRefresh,t=Object(E.useState)({from:new Date,to:new Date}),n=Object(H.a)(t,2),a=n[0],r=n[1],i=Object(z.a)();return Object(E.useEffect)((function(){i&&i.getTreasuryNextAllocationTime().then(r)}),[i,e]),a},Be=function(){var e=Object(E.useState)(Y.a.from(0)),t=Object(H.a)(e,2),n=t[0],a=t[1],r=Object(z.a)(),i=Object(W.a)().slowRefresh,c=null===r||void 0===r?void 0:r.isUnlocked;return Object(E.useEffect)((function(){function e(){return(e=Object(U.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getTotalStakedInMasonry();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}c&&function(){e.apply(this,arguments)}()}),[c,i,r]),n},Ve=Object(T.c)(b||(b=Object(O.a)(["\n  body {\n    background-color: var(--black);\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%231D1E1F' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n* {\n    border-radius: 0 !important;\n    box-shadow: none !important;\n}\n"]))),Ue=Object(Se.a)((function(e){return{gridItem:Object(h.a)({height:"100%"},e.breakpoints.up("md"),{height:"90px"})}})),We=T.d.div(y||(y=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),_e=T.d.div(f||(f=Object(O.a)(["\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),Le=T.d.div(v||(v=Object(O.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),Ge=function(){var e=Ue(),t=Object(x.b)().account,n=De().onRedeem,a=he(),r=Fe(),i=Object(ze.a)(),c=Be(),u=He(),o=_(),s=pe(),l=(Object(E.useMemo)((function(){return i?Number(i.priceInDollars).toFixed(4):null}),[i]),Ie().to),p=Object(Ce.a)();return j.a.createElement(Ne.a,null,j.a.createElement(Ve,null),t?j.a.createElement(j.a.Fragment,null,j.a.createElement(R.a,{color:"textPrimary",align:"center",variant:"h3",gutterBottom:!0},"MoonRoom"),j.a.createElement(M.a,{mt:5},j.a.createElement(Ae.a,{container:!0,justify:"center",spacing:3},j.a.createElement(Ae.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},j.a.createElement(S.a,{className:e.gridItem},j.a.createElement(C.a,null,j.a.createElement(R.a,{style:{textAlign:"center"}},"Next Epoch"),j.a.createElement($,{base:w()().toDate(),hideBar:!0,deadline:l,description:"Next Epoch"})))),j.a.createElement(Ae.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},j.a.createElement(S.a,{className:e.gridItem},j.a.createElement(C.a,{align:"center"},j.a.createElement(R.a,null,"Current Epoch"),j.a.createElement(R.a,null,Number(r))))),j.a.createElement(Ae.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},j.a.createElement(S.a,{className:e.gridItem},j.a.createElement(C.a,{align:"center"},j.a.createElement(R.a,null,"Moon Price",j.a.createElement("small",null," (TWAP)")),j.a.createElement(R.a,null,p.tombPrice.toFixed(4)," FTM")))),j.a.createElement(Ae.a,{item:!0,xs:12,md:2,lg:2,className:e.gridItem},j.a.createElement(S.a,{className:e.gridItem},j.a.createElement(C.a,{align:"center"},j.a.createElement(R.a,null,"APR"),j.a.createElement(R.a,null,u.toFixed(2),"%")))),j.a.createElement(Ae.a,{item:!0,xs:12,md:2,lg:2},j.a.createElement(S.a,{className:e.gridItem},j.a.createElement(C.a,{align:"center"},j.a.createElement(R.a,null,"MSHARES Staked"),j.a.createElement(R.a,null,Object(te.a)(c)))))),j.a.createElement(Ae.a,{container:!0,justify:"center"},j.a.createElement(M.a,{mt:3,style:{width:"525px"}},j.a.createElement(Re.a,{variant:"transparent",severity:"info"},"Staked MSHARES can only be withdrawn after 3 epochs since deposit."))),j.a.createElement(M.a,{mt:4},j.a.createElement(We,null,j.a.createElement(_e,null,j.a.createElement(Le,null,j.a.createElement(ie,null)),j.a.createElement(k.a,null),j.a.createElement(Le,null,j.a.createElement(Me,null)))))),j.a.createElement(M.a,{mt:5},j.a.createElement(Ae.a,{container:!0,justify:"center",spacing:3,mt:10},j.a.createElement(A.a,{disabled:a.eq(0)||!s&&!o,onClick:n,color:"primary",variant:"contained"},"Claim and Withdraw")))):j.a.createElement(Pe.a,null))}},765:function(e,t,n){"use strict";var a=n(0),r=n(775),i=n(103);t.a=function(){var e=Object(r.b)(),t=Object(i.b)();return Object(a.useCallback)((function(n,a){n.then((function(t){return e(t,{summary:a})})).catch((function(e){if(!e.message.includes("User denied")){var n="Unable to ".concat(a[0].toLowerCase()).concat(a.slice(1));console.error("".concat(n,": ").concat(e.message||e.stack)),t({error:{message:n,stack:e.message||e.stack}})}}))}),[t,e])}},781:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a),i=n(1614),c=n(886),u=function(){return r.a.createElement(i.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(c.a,null))}},803:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a,r=n(44),i=n(0),c=n.n(i),u=n(37).d.div(a||(a=Object(r.a)(["\n  background-color: none;\n  font-size: 36px;\n  height: 95px;\n  width: 95px;\n  border-radius: 40px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  box-shadow: none !important;\n  margin: 0 auto ","px;\n"])),(function(e){return e.theme.spacing[3]})),o=function(e){var t=e.children;return c.a.createElement(u,null,t)}},808:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(14),c=n(36),u=n(0),o=n(227),s=n(750);t.a=function(){var e=Object(u.useState)(),t=Object(c.a)(e,2),n=t[0],a=t[1],l=Object(s.a)().fastRefresh,p=Object(o.a)();return Object(u.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,p.getTombStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,p,l]),n}},809:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a,r=n(2),i=n.n(r),c=n(14),u=n(95),o=n(28),s=n(0),l=n(775),p=n(859),m=u.a.constants.MaxUint256,d=o.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={})),t.b=function(e,t){var n=Object(l.a)(e.address,t),r=Object(p.a)(e,t,n),u=Object(s.useMemo)((function(){return r?r.lt(d)?n?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[r,n]),o=Object(l.b)(),b=Object(s.useCallback)(Object(c.a)(i.a.mark((function n(){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u===a.NOT_APPROVED){n.next=3;break}return console.error("approve was called unnecessarily"),n.abrupt("return");case 3:return n.next=5,e.approve(t,m);case 5:r=n.sent,o(r,{summary:"Approve ".concat(e.symbol),approval:{tokenAddress:e.address,spender:t}});case 7:case"end":return n.stop()}}),n)}))),[u,e,t,o]);return[u,b]}},824:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(14),c=n(36),u=n(0),o=n(177),s=new(n.n(o).a)("https://rpc.ftm.tools"),l=new s.eth.Contract([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"DENOMINATOR",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"Tomb",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"TombOracle",outputs:[{internalType:"contract IOracle",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"Treasury",outputs:[{internalType:"contract ITreasury",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"WFTM",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"assets",outputs:[{internalType:"bool",name:"isAdded",type:"bool"},{internalType:"uint256",name:"multiplier",type:"uint256"},{internalType:"address",name:"oracle",type:"address"},{internalType:"bool",name:"isLP",type:"bool"},{internalType:"address",name:"pair",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"bond",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"bondFactor",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bondThreshold",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bondVesting",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"buybackAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address payable",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"call",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"payable",type:"function"},{inputs:[],name:"claimRewards",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"claimableTomb",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBondPremium",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"getTokenPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTombPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"getTombReturn",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lastBuyback",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"tokens",type:"address[]"}],name:"redeemAssetsForBuyback",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"secondaryFactor",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"secondaryThreshold",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"bool",name:"isAdded",type:"bool"},{internalType:"uint256",name:"multiplier",type:"uint256"},{internalType:"address",name:"oracle",type:"address"},{internalType:"bool",name:"isLP",type:"bool"},{internalType:"address",name:"pair",type:"address"}],name:"setAsset",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"primaryThreshold",type:"uint256"},{internalType:"uint256",name:"primaryFactor",type:"uint256"},{internalType:"uint256",name:"secondThreshold",type:"uint256"},{internalType:"uint256",name:"secondFactor",type:"uint256"},{internalType:"uint256",name:"vestingPeriod",type:"uint256"}],name:"setBondParameters",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tomb",type:"address"}],name:"setTomb",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"oracle",type:"address"}],name:"setTombOracle",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"treasury",type:"address"}],name:"setTreasury",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalVested",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"vesting",outputs:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"period",type:"uint256"},{internalType:"uint256",name:"end",type:"uint256"},{internalType:"uint256",name:"claimed",type:"uint256"},{internalType:"uint256",name:"lastClaimed",type:"uint256"}],stateMutability:"view",type:"function"}],"0x8f555E00ea0FAc871b3Aa70C015915dB094E7f88"),p=new s.eth.Contract([{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],"0x14DEf7584A6c52f470Ca4F4b9671056b22f4FfDE"),m=["0xc54A1684fD1bef1f077a336E6be4Bd9a3096a6Ca","0x6398ACBBAB2561553a9e458Ab67dCFbD58944e52","0x83A52eff2E9D112E9B022399A9fD22a9DB7d33Ae","0x6437ADAC543583C4b31Bf0323A0870430F5CC2e7","0xd352daC95a91AfeFb112DBBB3463ccfA5EC15b65","0x04068DA6C83AFCFA0e13ba15A6696662335D5B75"];t.a=function(){var e=Object(u.useState)(0),t=Object(c.a)(e,2),n=t[0],a=t[1],o=Object(u.useState)(0),d=Object(c.a)(o,2),b=d[0],y=d[1],f=Object(u.useState)(0),v=Object(c.a)(f,2),h=v[0],O=v[1],E=Object(u.useState)(0),j=Object(c.a)(E,2),x=j[0],g=j[1],w=Object(u.useState)(m.map((function(e){return{token:e,params:{multiplier:0,isLP:!1},price:0}}))),T=Object(c.a)(w,2),k=T[0],M=T[1];function S(){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(r.a.mark((function e(){var t,n,i,u,o,d,b,f,v,h,E;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([l.methods.getTombPrice().call(),p.methods.balanceOf(l._address).call(),l.methods.totalVested().call(),l.methods.getBondPremium().call(),l.methods.bondVesting().call(),Promise.all(m.map((function(e){return l.methods.assets(e).call()}))),Promise.all(m.map((function(e){return l.methods.getTokenPrice(e).call()})))]);case 2:for(t=e.sent,n=Object(c.a)(t,7),i=n[0],u=n[1],o=n[2],d=n[3],b=n[4],f=n[5],v=n[6],a(+s.utils.fromWei(i)),y(+s.utils.fromWei(u)-+s.utils.fromWei(o)),O(+d/1e4),g(+b/1e4),h=[],E=0;E<m.length;E++)h.push({token:m[E],params:{multiplier:f[E].multiplier,isLP:f[E].isLP},price:+s.utils.fromWei(v[E])});M(h);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){S();var e=setInterval(S,1e4);return function(){return clearInterval(e)}}),[]),{RebateTreasury:l,tombPrice:n,bondPremium:h,bondVesting:x,tombAvailable:b,assets:k}}},846:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a,r=n(44),i=n(0),c=n.n(i),u=n(37),o=u.d.div(a||(a=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),s=function(e){var t,n=e.size,a=void 0===n?"md":n,r=Object(i.useContext)(u.a).spacing;switch(a){case"lg":t=r[6];break;case"sm":t=r[2];break;case"md":default:t=r[4]}return c.a.createElement(o,{size:t})}},847:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a,r=n(44),i=n(0),c=n.n(i),u=n(37).d.div(a||(a=Object(r.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))),o=function(e){var t=e.value;return c.a.createElement(u,null,t)}},906:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(14),c=n(36),u=n(0),o=n(227),s=n(38);t.a=function(e,t){var n=Object(u.useState)("0"),a=Object(c.a)(n,2),l=a[0],p=a[1],m=Object(o.a)(),d=null===m||void 0===m?void 0:m.isUnlocked,b=Object(u.useCallback)(Object(i.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.getDepositTokenPriceInDollars(e,t);case 2:a=n.sent,p(a);case 4:case"end":return n.stop()}}),n)}))),[t,e,m]);return Object(u.useEffect)((function(){if(d){b().catch((function(e){return console.error(e.stack)}));var e=setInterval(b,s.b.refreshInterval);return function(){return clearInterval(e)}}}),[d,p,m,b]),l}},908:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(14),c=n(36),u=n(0),o=n(227),s=n(750);t.a=function(){var e=Object(u.useState)(),t=Object(c.a)(e,2),n=t[0],a=t[1],l=Object(o.a)(),p=Object(s.a)().slowRefresh;return Object(u.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,l.getTombStatInEstimatedTWAP();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,l,p]),n}},977:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var a,r=n(0),i=n.n(r),c=n(37),u=n(44),o=c.d.div(a||(a=Object(u.a)([""]))),s=function(e){var t=e.children;return i.a.createElement(o,null,t)},l=function(e){var t=e.color,n=Object(r.useContext)(c.a).color;return i.a.createElement(s,null,i.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),i.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:t||n.grey[400]})))},p=function(e){var t=e.color,n=Object(r.useContext)(c.a).color;return i.a.createElement(s,null,i.a.createElement("svg",{viewBox:"0 0 24 24",fill:t||n.grey[400],width:"18px",height:"18px"},i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),i.a.createElement("path",{d:"M19 13H5v-2h14v2z"})))}},979:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a,r,i=n(44),c=n(0),u=n.n(c),o=n(37),s=n(230),l=o.d.button(a||(a=Object(i.a)(["\n  align-items: center;\n  // background-color: ",";\n  background-color: ",";\n  border: 0;\n  border-radius: 10px !important;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ",";\n  text-transform: uppercase;\n  width: 56px;\n  &:hover {\n    // background-color: ",";\n    background-color: #ff6464;\n  }\n"])),(function(e){return e.theme.color.grey[e.disabled?900:700]}),(function(e){return e.disabled?e.theme.color.grey[900]:"#FF4949"}),(function(e){return e.disabled?e.theme.color.grey[500]:e.theme.color.primary.main}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.theme.color.grey[800]})),p=Object(o.d)(s.b)(r||(r=Object(i.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),m=function(e){var t=e.children,n=e.disabled,a=e.onClick,r=e.to;return u.a.createElement(l,{disabled:n,onClick:a},r?u.a.createElement(p,{to:r},t):t)}}}]);