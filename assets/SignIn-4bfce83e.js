import{_ as k,h as B,k as C,i as D,o as E,y as A,u as O,r as l,j as K,a as L,b as P,d as s,w as q,v as z,s as N,n as S,E as i,p as T,g as U}from"./index-d8dbe141.js";const V="/头像1.jpg",J="/头像2.jpg",Z="/头像3.jpg",$="/头像4.jpg",F="/头像5.jpg",G="/头像6.jpg",H="/头像7.jpg",Q="/头像8.jpg",W="/头像9.jpg",f="/头像10.jpg";const X=n=>(T("data-v-7c6dbe0e"),n=n(),U(),n),Y={style:{position:"relative"}},ee={class:"view"},ae=["src"],te=X(()=>s("p",null,"点击可以ROLL不同头像哦~",-1)),se=["onKeydown"],oe={__name:"SignIn",setup(n){B(),console.log("avatar9::: ",f);const b=C(),{data:ne,setShow:I}=D("isShow");I(b.meta.isShow),E(()=>{if(o.value=localStorage.getItem("username"),o.value){v.push("/chatRoom");return}});const y=A.create({baseURL:"/api",timeout:3e3,withCredentials:!0}),d=O(),w=l(""),o=l(""),m=l(""),v=K(),j=/^[\u4e00-\u9fa5a-zA-Z0-9]{2,8}$/;function x(t,e){return t.test(e)}function p(t){t.preventDefault();const e=o.value.trim(),c=u[r].number;if(!x(j,e)){m.value="请输入正确的用户名,应该是2-8个英文,中文,或者数字的组合,不要有符号!!!",i({type:"error",message:m,duration:5e3});return}localStorage.setItem("username",e),localStorage.setItem("avatarSelected",c),d.avatarSelected=c,w.value="",d.username=e,o.value="";let R={name:localStorage.getItem("username"),avatarSelected:localStorage.getItem("avatarSelected")};y.post("/login",R).then(a=>{console.log(a),a.data.statuts=="sucessed"?(localStorage.setItem("username",a.data.name),localStorage.setItem("avatarSelected",a.data.avatarSelected),localStorage.setItem("ID",a.data.id),setTimeout(()=>{v.push("/chatRoom")},500)):a.data.statuts=="failedAtDuplicationOfName"&&i({type:"error",message:"你取得用户名和别人重名了",duration:2e3})}).catch(a=>{console.log(a),a.message=="Request failed with status code 500"?i({type:"error",message:"服务器响应失败!!!",duration:3e3}):a.message=="timeout of 3000ms exceeded"&&i({type:"error",message:"服务器响应时间过长,失败!!!",duration:3e3})})}const u=[{avatar:V,number:"0"},{avatar:J,number:"1"},{avatar:Z,number:"2"},{avatar:$,number:"3"},{avatar:F,number:"4"},{avatar:G,number:"5"},{avatar:H,number:"6"},{avatar:Q,number:"7"},{avatar:W,number:"8"},{avatar:f,number:"9"}],g=t=>Math.floor(Math.random()*t);let r=g(10);const _=l(u[r].avatar),M=()=>{r=g(10),_.value=u[r].avatar};function h(t){let e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(e&&t==1)return{height:"80vh"};if(e&&t==2)return{"margin-bottom":"150px"}}return(t,e)=>(L(),P("div",{class:"allin",style:S(h(1))},[s("form",{style:S(h(2))},[s("div",Y,[s("div",ee,[s("img",{class:"preview",ref:"preview",onClick:M,src:_.value},null,8,ae)]),te]),q(s("input",{class:"name",type:"text",name:"userID","onUpdate:modelValue":e[0]||(e[0]=c=>o.value=c),placeholder:"在这里设置你的聊天室ID😎",onKeydown:N(p,["enter"])},null,40,se),[[z,o.value]]),s("button",{class:"btn",type:"submit",onClick:p}," ✨加入聊天室✨ ")],4)],4))}},ce=k(oe,[["__scopeId","data-v-7c6dbe0e"]]);export{ce as default};
