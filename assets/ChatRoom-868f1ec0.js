import{_ as D,u as L,r as d,c as B,o as U,a as y,b as C,d as s,n as K,e as H,f as R,t as T,p as W,g as q,i as b,h as X,j as G,k as P,E as r,l as Q,m as Y,q as Z,F as ee,s as te,w as se,v as oe,x as ae,y as ne,z as ce,A as E,B as N}from"./index-6761040d.js";const le=a=>(W("data-v-8ce6bc45"),a=a(),q(),a),ie={class:"main"},re={class:"metainfo"},de={class:"username"},ue=le(()=>s("div",{class:"decoration"},null,-1)),ge={class:"content"},me={class:"chat-message"},pe={class:"time-stamp"},he={class:"TimeLine"},ve={__name:"chatMessage",props:{avatarSelected:Number},emits:["messageHeight"],setup(a,{emit:p}){const $=a;L();const g=d(new Date),h=B(()=>{const o=g.value.getHours(),m=g.value.getMinutes(),f=g.value.getSeconds();return`${o}:${m<10?"0":""}${m}:${f<10?"0":""}${f}`}),k=B(()=>({width:"3rem",height:"3rem",background:`url(/头像${$.avatarSelected+1}.jpg) no-repeat center center`,backgroundSize:"cover",borderRadius:"50%"})),u=d(null);let w=0,v=0,c=0,_=0,l=0;const I=o=>{p("messageHeight",o)};U(()=>{if(u.value){const o=getComputedStyle(u.value);w=u.value.clientHeight,v=parseInt(o.marginTop),c=parseInt(o.marginBottom),_=parseInt(o.paddingTop),l=parseInt(o.paddingBottom),I(M())}});const M=()=>w+v+c+_+l;return(o,m)=>(y(),C("div",{class:"msg",ref_key:"chatMessage",ref:u},[s("div",ie,[s("div",re,[s("div",{style:K(H(k))},null,4),s("div",de,[R(o.$slots,"username",{},void 0,!0)])]),ue,s("div",ge,[s("div",me,[R(o.$slots,"msg",{},void 0,!0)])])]),s("div",pe,[s("div",he,"-"+T(H(h))+"-",1)])],512))}},_e=D(ve,[["__scopeId","data-v-8ce6bc45"]]);const fe=a=>(W("data-v-f0c55ea5"),a=a(),q(),a),Se={class:"room"},ye={class:"intent-area"},ke=fe(()=>s("div",null,"➠",-1)),we=[ke],Ie={__name:"ChatRoom",setup(a){let p=d(0);const{data:$,setOnlineCountData:g}=b("onlineCountData"),h=X(),k=G(),u=P.create({baseURL:"/api",timeout:3e3,withCredentials:!0}),{data:w,setShow:v}=b("isShow");v(k.meta.isShow);const c=d(""),_=d(null),l=d(null),I=()=>{const e=l.value;e&&e.scrollTo({top:e.scrollHeight,behavior:"smooth"})};function M(){const e=l.value;return parseInt(e.scrollTop)==e.scrollHeight-e.clientHeight-S.value||parseInt(e.scrollTop)-1==e.scrollHeight-e.clientHeight-S.value||parseInt(e.scrollTop)+1==e.scrollHeight-e.clientHeight-S.value}const o=L();U(()=>{f(),m()});const m=()=>{r({type:"success",message:o.WelcomeUser,duration:1500})};function f(){let e=localStorage.getItem("username");e?(u.post("/login",request).then(t=>{console.log(t),t.data.statuts=="sucessed"?setTimeout(()=>{h.push("/chatRoom")},500):t.data.statuts=="failedAtDuplicationOfName"&&r({type:"error",message:"你取得用户名和别人重名了",duration:2e3})}).catch(t=>{console.log(t),t.message=="Request failed with status code 500"?r({type:"error",message:"服务器响应失败!!!",duration:3e3}):t.message=="timeout of 3000ms exceeded"&&r({type:"error",message:"服务器响应时间过长,失败!!!",duration:3e3})}),o.username=e):h.push("/Login")}Q(()=>{M()&&(l.value.scrollTop=l.value.scrollHeight)});const O=`ws://chat.kexie.space/api/chat/${localStorage.getItem("username")}`,i=new WebSocket(O),{data:Me,setEmitSocket:j}=b("EmitSocket");j(i),i.onopen=()=>{console.log("监听到打开事件---WebSocket链接建立成功!")},i.onmessage=z;function z(e){console.log("监听到消息事件---WebSocket消息接收成功!");const t=JSON.parse(e.data);if(t.data.type=="onlineCountChanged"&&(p.value=t.data.onlineCountNow,g(p.value)),t.data.type=="incomingMsg"){let n={message:t.data.content,avatarSelected:t.data.senderAvatarId,username:t.data.name};o.addMessage(n)}}function J(){console.log("监听到关闭事件---WebSocket链接关闭!")}i.onclose=J,Y(()=>{i.close(),r({type:"error",message:"你已经离开聊天室!",duration:1500})}),Z(()=>{r({type:"error",message:"你已经离开聊天室!",duration:1500}),i.close()});const S=d(0),V=e=>{S.value=e};function x(){if(c.value.trim()==""){r({type:"error",message:"请不要输入空消息!!!",duration:1500});return}let e=c.value.trim(),t=JSON.stringify({type:"msg",msg:e,sender:localStorage.getItem("ID"),avatarSelected:localStorage.getItem("avatarSelected")});i.send(t),c.value=""}return(e,t)=>(y(),C("div",Se,[s("div",{class:"msg-stage",ref_key:"containerRef",ref:l},[(y(!0),C(ee,null,te(H(o).messageList,(n,F)=>(y(),ce(_e,{avatarSelected:n.avatarSelected,key:F,onMessageHeight:V},{msg:E(()=>[N(T(n.message),1)]),username:E(()=>[N(T(n.username),1)]),_:2},1032,["avatarSelected"]))),128)),s("div",{ref_key:"messagesEnd",ref:_},null,512)],512),s("div",ye,[se(s("input",{inputmode:"text",class:"input input-alt",placeholder:"请发送你的消息!",required:"","onUpdate:modelValue":t[0]||(t[0]=n=>c.value=n),rows:2,type:"textarea",onKeyup:t[1]||(t[1]=ae(n=>x(),["enter"]))},null,544),[[oe,c.value]]),s("button",{class:"send-btn",onClick:t[2]||(t[2]=ne(n=>x(),["prevent"]))},we)]),s("div",null,[s("button",{class:"scroll-to-bottom",onClick:I}," ↓ ")])]))}},Ce=D(Ie,[["__scopeId","data-v-f0c55ea5"]]);export{Ce as default};
