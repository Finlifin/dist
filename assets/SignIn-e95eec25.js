import{_ as R,C,j as k,i as D,o as E,k as M,u as B,r as l,h as K,a as L,b as q,d as t,w as A,v as N,x as O,E as u,p as T,g as U}from"./index-5413ef58.js";const V="/头像1.jpg",z="/头像2.jpg",J="/头像3.jpg",Z="/头像4.jpg",$="/头像5.jpg",F="/头像6.jpg",G="/头像7.jpg",H="/头像8.jpg",P="/头像9.jpg",h="/头像10.jpg";const Q=n=>(T("data-v-b363b41b"),n=n(),U(),n),W={class:"allin"},X={style:{position:"relative"}},Y={class:"view"},ee=["src"],ae=Q(()=>t("p",null,"点击可以ROLL不同头像哦~",-1)),te=["onKeydown"],se={__name:"SignIn",setup(n){C(),console.log("avatar9::: ",h);const b=k(),{data:oe,setShow:S}=D("isShow");S(b.meta.isShow),E(()=>{if(s.value=localStorage.getItem("username"),s.value){v.push("/chatRoom");return}});const f=M.create({baseURL:"/api",timeout:3e3,withCredentials:!0}),d=B(),I=l(""),s=l(""),m=l(""),v=K(),w=/^[\u4e00-\u9fa5a-zA-Z0-9]{2,8}$/;function j(o,a){return o.test(a)}function p(o){o.preventDefault();const a=s.value.trim(),c=i[r].number;if(!j(w,a)){m.value="请输入正确的用户名,应该是2-8个英文,中文,或者数字的组合,不要有符号!!!",u({type:"error",message:m,duration:5e3});return}localStorage.setItem("username",a),localStorage.setItem("avatarSelected",c),d.avatarSelected=c,I.value="",d.username=a,s.value="";let y={name:localStorage.getItem("username"),avatarSelected:localStorage.getItem("avatarSelected")};f.post("/login",y).then(e=>{console.log(e),e.data.statuts=="sucessed"?(localStorage.setItem("username",e.data.name),localStorage.setItem("avatarSelected",e.data.avatarSelected),localStorage.setItem("ID",e.data.id),setTimeout(()=>{v.push("/chatRoom")},500)):e.data.statuts=="failedAtDuplicationOfName"&&u({type:"error",message:"你取得用户名和别人重名了",duration:2e3})}).catch(e=>{console.log(e),e.message=="Request failed with status code 500"?u({type:"error",message:"服务器响应失败!!!",duration:3e3}):e.message=="timeout of 3000ms exceeded"&&u({type:"error",message:"服务器响应时间过长,失败!!!",duration:3e3})})}const i=[{avatar:V,number:"0"},{avatar:z,number:"1"},{avatar:J,number:"2"},{avatar:Z,number:"3"},{avatar:$,number:"4"},{avatar:F,number:"5"},{avatar:G,number:"6"},{avatar:H,number:"7"},{avatar:P,number:"8"},{avatar:h,number:"9"}],g=o=>Math.floor(Math.random()*o);let r=g(10);const _=l(i[r].avatar),x=()=>{r=g(10),_.value=i[r].avatar};return(o,a)=>(L(),q("div",W,[t("form",null,[t("div",X,[t("div",Y,[t("img",{class:"preview",ref:"preview",onClick:x,src:_.value},null,8,ee)]),ae]),A(t("input",{class:"name",type:"text",name:"userID","onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c),placeholder:"在这里设置你的聊天室ID😎",onKeydown:O(p,["enter"])},null,40,te),[[N,s.value]]),t("button",{class:"btn",type:"submit",onClick:p}," ✨加入聊天室✨ ")])]))}},re=R(se,[["__scopeId","data-v-b363b41b"]]);export{re as default};
