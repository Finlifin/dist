import{_ as L,u as U,r as i,c as B,o as W,a as y,b,d as t,n as J,e as H,f as E,t as $,p as j,g as z,i as M,h as K,j as X,E as N,k as G,l as P,m as Q,F as Y,q as Z,w as ee,v as te,s as se,x as oe,y as ae,z as R,A as D}from"./index-ede2aa18.js";const ne=a=>(j("data-v-8ce6bc45"),a=a(),z(),a),ce={class:"main"},le={class:"metainfo"},re={class:"username"},ie=ne(()=>t("div",{class:"decoration"},null,-1)),de={class:"content"},ue={class:"chat-message"},ge={class:"time-stamp"},me={class:"TimeLine"},pe={__name:"chatMessage",props:{avatarSelected:Number},emits:["messageHeight"],setup(a,{emit:p}){const C=a;U();const u=i(new Date),h=B(()=>{const o=u.value.getHours(),m=u.value.getMinutes(),I=u.value.getSeconds();return`${o}:${m<10?"0":""}${m}:${I<10?"0":""}${I}`}),k=B(()=>({width:"3rem",height:"3rem",background:`url(/头像${C.avatarSelected+1}.jpg) no-repeat center center`,backgroundSize:"cover",borderRadius:"50%"})),g=i(null);let v=0,c=0,_=0,l=0,f=0;const w=o=>{p("messageHeight",o)};W(()=>{if(g.value){const o=getComputedStyle(g.value);v=g.value.clientHeight,c=parseInt(o.marginTop),_=parseInt(o.marginBottom),l=parseInt(o.paddingTop),f=parseInt(o.paddingBottom),w(d())}});const d=()=>v+c+_+l+f;return(o,m)=>(y(),b("div",{class:"msg",ref_key:"chatMessage",ref:g},[t("div",ce,[t("div",le,[t("div",{style:J(H(k))},null,4),t("div",re,[E(o.$slots,"username",{},void 0,!0)])]),ie,t("div",de,[t("div",ue,[E(o.$slots,"msg",{},void 0,!0)])])]),t("div",ge,[t("div",me,"-"+$(H(h))+"-",1)])],512))}},he=L(pe,[["__scopeId","data-v-8ce6bc45"]]);const ve=a=>(j("data-v-2e3938f6"),a=a(),z(),a),_e={class:"room"},fe={class:"intent-area"},Se=ve(()=>t("div",null,"➠",-1)),ye=[Se],ke={__name:"ChatRoom",setup(a){let p=i(0);const{data:C,setOnlineCountData:u}=M("onlineCountData"),h=K(),k=X(),{data:g,setShow:v}=M("isShow");v(k.meta.isShow);const c=i(""),_=i(null),l=i(null),f=()=>{const e=l.value;e&&e.scrollTo({top:e.scrollHeight,behavior:"smooth"})};function w(){const e=l.value;return parseInt(e.scrollTop)==e.scrollHeight-e.clientHeight-S.value||parseInt(e.scrollTop)-1==e.scrollHeight-e.clientHeight-S.value||parseInt(e.scrollTop)+1==e.scrollHeight-e.clientHeight-S.value}const d=U();W(()=>{m(),o()});const o=()=>{N({type:"success",message:d.WelcomeUser,duration:1500})};function m(){let e=localStorage.getItem("username");e?(d.username=e,h.push("/chatRoom")):h.push("/Login")}G(()=>{w()&&(l.value.scrollTop=l.value.scrollHeight)});const T=`ws://chat.kexie.space/api/chat/${localStorage.getItem("username")}`,r=new WebSocket(T),{data:we,setEmitSocket:A}=M("EmitSocket");A(r),r.onopen=()=>{console.log("监听到打开事件---WebSocket链接建立成功!")},r.onmessage=O;function O(e){console.log("监听到消息事件---WebSocket消息接收成功!");const s=JSON.parse(e.data);if(s.data.type=="onlineCountChanged"&&(p.value=s.data.onlineCountNow,u(p.value)),s.data.type=="incomingMsg"){let n={message:s.data.content,avatarSelected:s.data.senderAvatarId,username:s.data.name};d.addMessage(n)}}function V(){console.log("监听到关闭事件---WebSocket链接关闭!")}r.onclose=V,P(()=>{r.close()}),Q(()=>{r.close()});const S=i(0),q=e=>{S.value=e};function x(){if(c.value.trim()==""){N({type:"error",message:"请不要输入空消息!!!",duration:1500});return}let e=c.value.trim(),s=JSON.stringify({type:"msg",msg:e,sender:localStorage.getItem("ID"),avatarSelected:localStorage.getItem("avatarSelected")});r.send(s),c.value=""}return(e,s)=>(y(),b("div",_e,[t("div",{class:"msg-stage",ref_key:"containerRef",ref:l},[(y(!0),b(Y,null,Z(H(d).messageList,(n,F)=>(y(),ae(he,{avatarSelected:n.avatarSelected,key:F,onMessageHeight:q},{msg:R(()=>[D($(n.message),1)]),username:R(()=>[D($(n.username),1)]),_:2},1032,["avatarSelected"]))),128)),t("div",{ref_key:"messagesEnd",ref:_},null,512)],512),t("div",fe,[ee(t("input",{inputmode:"text",class:"input input-alt",placeholder:"请发送你的消息!",required:"","onUpdate:modelValue":s[0]||(s[0]=n=>c.value=n),rows:2,type:"textarea",onKeyup:s[1]||(s[1]=se(n=>x(),["enter"]))},null,544),[[te,c.value]]),t("button",{class:"send-btn",onClick:s[2]||(s[2]=oe(n=>x(),["prevent"]))},ye)]),t("div",null,[t("button",{class:"scroll-to-bottom",onClick:f}," ↓ ")])]))}},Me=L(ke,[["__scopeId","data-v-2e3938f6"]]);export{Me as default};
