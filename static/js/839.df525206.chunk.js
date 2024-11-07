"use strict";(self.webpackChunkportfolio_website_viraj=self.webpackChunkportfolio_website_viraj||[]).push([[839],{1839:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var o=r(5043),i=r(1529);class a{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=t}}const n={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},s=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},l=async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=await fetch(n.origin+e,{method:"POST",headers:r,body:t}),i=await o.text(),s=new a(o.status,i);if(o.ok)return s;throw s},d=(e,t,r)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!==typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!==typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},c=e=>e.webdriver||!e.languages||0===e.languages.length,p=()=>new a(451,"Unavailable For Headless Browser"),m=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const r=(o=t,i=e.watchVariable,o instanceof FormData?o.get(i):o[i]);var o,i;return"string"===typeof r&&e.list.includes(r)},h=()=>new a(403,"Forbidden"),u=async(e,t,r)=>{if(!t.throttle||!r)return!1;((e,t)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!==typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const o=t.id||e,i=await(async(e,t,r)=>{const o=Number(await r.get(e)||0);return t-Date.now()+o})(o,t.throttle,r);return i>0||(await r.set(o,Date.now().toString()),!1)},x=()=>new a(429,"Too Many Requests"),f=async(e,t,r,o)=>{const i=s(o),a=i.publicKey||n.publicKey,f=i.blockHeadless||n.blockHeadless,g=n.storageProvider||i.storageProvider,b={...n.blockList,...i.blockList},y={...n.limitRate,...i.limitRate};if(f&&c(navigator))return Promise.reject(p());const w=(e=>"string"===typeof e?document.querySelector(e):e)(r);d(a,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(w);const v=new FormData(w);return m(b,v)?Promise.reject(h()):await u(location.pathname,y,g)?Promise.reject(x()):(v.append("lib_version","4.4.1"),v.append("service_id",e),v.append("template_id",t),v.append("user_id",a),l("/api/v1.0/email/send-form",v))};var g=r(579);const b=i.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`,y=i.Ay.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,w=i.Ay.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,v=i.Ay.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,j=i.Ay.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`,k=i.Ay.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
`,_=i.Ay.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_secondary+50}};
  outline: none;
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,A=i.Ay.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_secondary+50}};
  outline: none;
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,S=i.Ay.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-size: 18px;
  font-weight: 600;
`,T=()=>{const e=(0,o.useRef)();return(0,g.jsxs)(b,{id:"Contact",children:[(0,g.jsxs)(y,{children:[(0,g.jsx)(w,{children:"Contact"}),(0,g.jsx)(v,{style:{marginBottom:"40px"},children:"Feel free to reach out to me for any questions or opportunities!"}),(0,g.jsxs)(j,{ref:e,onSubmit:t=>{t.preventDefault(),f("service_dajb0zk","template_7jfjrw4",e.current,"3cc1UkFouImnoC5vc").then((t=>{alert("Message Sent"),e.current.reset()}),(e=>{alert("An error occurred: "+e.text)}))},children:[(0,g.jsx)(k,{children:"Email Me \ud83d\ude80"}),(0,g.jsx)(_,{placeholder:"Your Email",name:"from_email",required:!0}),(0,g.jsx)(_,{placeholder:"Your Name",name:"from_name",required:!0}),(0,g.jsx)(_,{placeholder:"Subject",name:"subject",required:!0}),(0,g.jsx)(A,{placeholder:"Message",name:"message",rows:4,required:!0}),(0,g.jsx)(S,{type:"submit",value:"Send"})]})]}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{})]})}}}]);
//# sourceMappingURL=839.df525206.chunk.js.map