import{_ as N,u as E,r as c,c as $,o as U,a as I,b as M,d as t,n as K,e as b,f as B,t as k,p as O,g as W,h as X,i as x,j as G,k as P,E as R,l as Q,m as Y,F as Z,q as ee,w as te,v as se,s as oe,x as ae,y as ne,z as le,A as D,B as L}from"./index-d8dbe141.js";const re=l=>(O("data-v-91294f22"),l=l(),W(),l),ce={class:"main"},ie={class:"metainfo"},ue={class:"username"},de=re(()=>t("div",{class:"decoration"},null,-1)),ge={class:"content"},me={class:"chat-message"},pe={class:"time-stamp"},he={class:"TimeLine"},ve={__name:"chatMessage",props:{avatarSelected:Number},emits:["messageHeight"],setup(l,{emit:m}){const C=l;E();const i=c(new Date),p=$(()=>{const s=i.value.getHours(),d=i.value.getMinutes(),S=i.value.getSeconds();return`${s}:${d<10?"0":""}${d}:${S<10?"0":""}${S}`}),y=$(()=>({width:"3rem",height:"3rem",background:`url(/头像${C.avatarSelected+1}.jpg) no-repeat center center`,backgroundSize:"cover",borderRadius:"50%"})),u=c(null);let h=0,r=0,v=0,n=0,_=0;const w=s=>{m("messageHeight",s)};U(()=>{if(u.value){const s=getComputedStyle(u.value);h=u.value.clientHeight,r=parseInt(s.marginTop),v=parseInt(s.marginBottom),n=parseInt(s.paddingTop),_=parseInt(s.paddingBottom),w(H())}});const H=()=>h+r+v+n+_;return(s,d)=>(I(),M("div",{class:"msg",ref_key:"chatMessage",ref:u},[t("div",ce,[t("div",ie,[t("div",{style:K(b(y))},null,4),t("div",ue,[B(s.$slots,"username",{},void 0,!0)])]),de,t("div",ge,[t("div",me,[B(s.$slots,"msg",{},void 0,!0)])])]),t("div",pe,[t("div",he,"-"+k(b(p))+"-",1)])],512))}},_e=N(ve,[["__scopeId","data-v-91294f22"]]);const Se=l=>(O("data-v-7be46e79"),l=l(),W(),l),fe={class:"room"},Ie={class:"intent-area"},ye=Se(()=>t("div",null,"➠",-1)),we=[ye],He={__name:"ChatRoom",setup(l){X();let m=c(0);const{data:C,setOnlineCountData:i}=x("onlineCountData"),p=G(),y=P(),{data:u,setShow:h}=x("isShow");h(y.meta.isShow);const r=c(""),v=c(null),n=c(null),_=()=>{const e=n.value;e&&e.scrollTo({top:e.scrollHeight,behavior:"smooth"})};function w(){const e=n.value;return parseInt(e.scrollTop)==e.scrollHeight-e.clientHeight-g.value||parseInt(e.scrollTop)-1==e.scrollHeight-e.clientHeight-g.value||parseInt(e.scrollTop)+1==e.scrollHeight-e.clientHeight-g.value}function H(){const e=n.value;if(e.scrollHeight<=e.clientHeight+g.value)return!0}const s=E();U(()=>{S(),d(),n.value.scrollTop=n.value.scrollHeight});const d=()=>{R({type:"success",message:s.WelcomeUser,duration:1500})};function S(){let e=localStorage.getItem("username");e?(s.username=e,p.push("/chatRoom")):p.push("/Login")}Q(()=>{(w()||H())&&(n.value.scrollTop=n.value.scrollHeight)});let q=`ws://chat.kexie.space/api/chat/${localStorage.getItem("username")}`;const f=new WebSocket(q);f.onopen=()=>{console.log("监听到打开事件---WebSocket链接建立成功!")},f.onmessage=z;function z(e){console.log("监听到消息事件---WebSocket消息接收成功!");let o=JSON.parse(e.data);if(o.data.type==="onlineCountChanged"&&(m=o.data.onlineCountNow,i(m)),o.data.type=="incomingMsg"){let a={message:o.data.content,avatarSelected:o.data.senderAvatarId,username:o.data.name};s.addMessage(a)}}f.onclose=A;function A(){console.log("监听到关闭事件---WebSocket链接关闭!")}function F(){let e={type:"SignOut",sender:localStorage.getItem("ID")};ne.create({baseURL:"/api",timeout:3e3,withCredentials:!0}).post("/login",e).then(a=>{console.log(a.data)}).catch(a=>{console.log(a)}),localStorage.removeItem("username"),localStorage.removeItem("avatarSelected"),localStorage.removeItem("ID")}Y(()=>{window.addEventListener("beforeunload",F)});const g=c(0),V=e=>{g.value=e};function T(){if(r.value.trim()==""){R({type:"error",message:"请不要输入空消息!!!",duration:1500});return}let e=r.value.trim(),o=JSON.stringify({type:"msg",msg:e,sender:localStorage.getItem("ID"),avatarSelected:localStorage.getItem("avatarSelected")});f.send(o),r.value=""}return(e,o)=>(I(),M("div",fe,[t("div",{class:"msg-stage",ref_key:"containerRef",ref:n},[(I(!0),M(Z,null,ee(b(s).messageList,(a,J)=>(I(),le(_e,{avatarSelected:a.avatarSelected,key:J,onMessageHeight:V},{msg:D(()=>[L(k(a.message),1)]),username:D(()=>[L(k(a.username),1)]),_:2},1032,["avatarSelected"]))),128)),t("div",{ref_key:"messagesEnd",ref:v},null,512)],512),t("div",Ie,[te(t("input",{inputmode:"text",class:"input input-alt",placeholder:"请发送你的消息!",required:"","onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),rows:2,type:"textarea",onKeyup:o[1]||(o[1]=oe(a=>T(),["enter"]))},null,544),[[se,r.value]]),t("button",{class:"send-btn",onClick:o[2]||(o[2]=ae(a=>T(),["prevent"]))},we)]),t("div",null,[t("button",{class:"scroll-to-bottom",onClick:_}," ↓ ")])]))}},be=N(He,[["__scopeId","data-v-7be46e79"]]);export{be as default};
