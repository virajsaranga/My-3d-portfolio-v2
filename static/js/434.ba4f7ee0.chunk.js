"use strict";(self.webpackChunkportfolio_website_viraj=self.webpackChunkportfolio_website_viraj||[]).push([[434],{9434:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var i=r(5043),n=r(1529),o=r(7272),a=r(579);const d=n.Ay.div`
  width: ${e=>{let{isExpanded:t}=e;return t?"90%":"330px"}};
  height: ${e=>{let{isExpanded:t}=e;return t?"auto":"490px"}};
  background-color: ${e=>{let{theme:t}=e;return t.card}};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: ${e=>{let{isExpanded:t}=e;return t?"none":"translateY(-10px)"}};
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: ${e=>{let{isExpanded:t}=e;return t?"none":"brightness(1.1)"}};
  }
`,p=n.Ay.img`
  width: 100%;
  height: ${e=>{let{isExpanded:t}=e;return t?"auto":"180px"}};
  background-color: ${e=>{let{theme:t}=e;return t.white}};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`,l=n.Ay.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`,x=n.Ay.span`
  background-color: ${e=>{let{theme:t}=e;return t.primary}};
  color: ${e=>{let{theme:t}=e;return t.text_on_primary}};
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 12px;
`,s=n.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`,c=n.Ay.div`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: ${e=>{let{isExpanded:t}=e;return t?"none":2}};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,h=n.Ay.div`
  font-weight: 400;
  color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: ${e=>{let{isExpanded:t}=e;return t?"none":3}};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,m=n.Ay.a`
  color: ${e=>{let{theme:t}=e;return t.primary}};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`,u=n.Ay.button`
  background-color: ${e=>{let{theme:t}=e;return t.primary}};
  color: ${e=>{let{theme:t}=e;return t.text_on_primary}};
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 12px;
  align-self: flex-end;
`,g=e=>{var t;let{project:r}=e;const[n,o]=(0,i.useState)(!1),g=()=>{o(!n)};return(0,a.jsxs)(d,{isExpanded:n,onClick:g,children:[(0,a.jsx)(p,{src:r.image,alt:r.title,isExpanded:n}),(0,a.jsxs)(s,{children:[(0,a.jsx)(c,{isExpanded:n,children:r.title}),(0,a.jsx)(h,{isExpanded:n,children:r.description})]}),(0,a.jsx)(l,{children:null===(t=r.tags)||void 0===t?void 0:t.map(((e,t)=>(0,a.jsx)(x,{children:e},t)))}),(0,a.jsx)(m,{href:r.github,target:"_blank",children:"Click Here"}),n&&(0,a.jsx)(u,{onClick:g,children:"Close"})]})},f=n.Ay.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: rlative;
  z-index: 1;
  align-items: center;
`,w=n.Ay.div`
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
`,y=n.Ay.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,b=n.Ay.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,j=n.Ay.div`
  display: flex;
  border: 1.5px solid ${e=>{let{theme:t}=e;return t.primary}};
  color: ${e=>{let{theme:t}=e;return t.primary}};
  font-size: 16px;
  border-radius: 12px;
font-weight 500;
margin: 22px 0;
@media (max-width: 768px){
    font-size: 12px;
}
`,v=n.Ay.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${e=>{let{theme:t}=e;return t.primary+20}};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${e=>{let{active:t,theme:r}=e;return t&&`\n  background:  ${r.primary+20};\n  `}}
`,k=n.Ay.div`
  width: 1.5px;
  background: ${e=>{let{theme:t}=e;return t.primary}};
`,$=n.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`,A=()=>{const[e,t]=(0,i.useState)("all");return(0,a.jsxs)(f,{id:"Projects",children:[(0,a.jsxs)(w,{children:[(0,a.jsx)(y,{children:"Projects"}),(0,a.jsx)(b,{style:{marginBottom:"40px"},children:"I've worked on a variety of projects, from web apps to Android apps, each aimed at solving real-world challenges. Here are some highlights."}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{active:"all"===e,onClick:()=>t("all"),children:"ALL"}),(0,a.jsx)(k,{}),(0,a.jsx)(v,{active:"web app"===e,onClick:()=>t("web app"),children:"Internship Projects"}),(0,a.jsx)(k,{}),(0,a.jsx)(v,{active:"android app"===e,onClick:()=>t("android app"),children:"My Projects"}),(0,a.jsx)(k,{}),(0,a.jsx)(v,{active:"machine learning"===e,onClick:()=>t("machine learning"),children:"MACHINE LEARNING"})]}),(0,a.jsxs)($,{children:["all"===e&&o.dt.map((e=>(0,a.jsx)(g,{project:e}))),o.dt.filter((t=>t.category===e)).map((e=>(0,a.jsx)(g,{project:e})))]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}}}]);
//# sourceMappingURL=434.ba4f7ee0.chunk.js.map