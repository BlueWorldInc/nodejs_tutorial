(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1868],{76999:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(70686),i=n(67294),a=n(74555);function o(e){var t=(0,a.v9)((function(e){return e.user})),n=(0,r.jl)(t);(0,i.useEffect)((function(){n&&e()}),[n])}},60436:function(e,t,n){"use strict";n.d(t,{$Y:function(){return i},oT:function(){return a},z8:function(){return o},MD:function(){return l},Jy:function(){return d},gX:function(){return c},_h:function(){return s},or:function(){return u},ad:function(){return m}});var r=n(76883),i=function(){r._q.cleanUtagData(),r._q.sendUnlimitedPageLoad({eventname:"employ",path:"edit_profile",step_name:"add_formation_entry",step_number:"1",step_status:"first_step"})},a=function(){r._q.cleanUtagData(),r._q.sendUnlimitedPageLoad({eventname:"employ",path:"edit_profile",step_name:"edit_formation_entry",step_number:"1",step_status:"first_step"})},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";r._q.cleanUtagData(),r._q.sendUnlimitedPageLoad({eventname:"employ",path:"edit_profile",step_name:"add_formation_entry_error",step_number:"1.1",step_status:"ongoing",error_status:e})},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";r._q.cleanUtagData(),r._q.sendUnlimitedPageLoad({eventname:"employ",path:"edit_profile",step_name:"edit_formation_entry_error",step_number:"1.1",step_status:"ongoing",error_status:e})},d=function(){r._q.cleanUtagData(),r._q.sendUnlimitedPageLoad({eventname:"employ",path:"edit_profile",step_name:"add_formation_confirmation",step_number:"2",step_status:"final_step"})},c=function(){r._q.cleanUtagData(),r._q.sendUnlimitedPageLoad({eventname:"employ",path:"edit_profile",step_name:"edit_formation_confirmation",step_number:"2",step_status:"final_step"})},s=function(){r._q.cleanUtagData(),r._q.sendUnlimitedPageLoad({eventname:"employ",path:"edit_profile",step_name:"delete_formation_entry",step_number:"1",step_status:"first_step"})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";r._q.cleanUtagData(),r._q.sendUnlimitedPageLoad({eventname:"employ",path:"edit_profile",step_name:"delete_formation_error",step_number:"1.1",step_status:"ongoing",error_status:e})},m=function(){r._q.cleanUtagData(),r._q.sendUnlimitedPageLoad({eventname:"employ",path:"edit_profile",step_name:"delete_formation_confirmation",step_number:"2",step_status:"final_step"})}},88626:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var r=n(50029),i=n(87794),a=n.n(i),o=n(51976),l=n(61148),d=n(26471),c=n(12904),s=n(97259),u=n(67294),m=n(31938),p=n(89271),f=n(31429),h=n(47943),_=n(90116),g=n(59499),v=n(67822),b=n(94184),y=n.n(b),j=n(55393),O=n(6872),x=n(25049),A=n(41602),E=n(28994),D=n(82175),Z=n(7258),w=n(5481),N=n(93162),T=n.n(N),P=n(85893);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,g.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t=e.action,n=e.index,r=void 0===n?0:n,i=e.educations,a=e.certifications,l=e.onSubmit,c=e.onCancel,s=e.onDelete,u=a.map((function(e){return M(M({},e),{},{value:e.id})})),m=(new Date).getFullYear(),f=Z.Ry().shape({diplomaName:Z.Z_().required(j.DIPLOMA_NAME.REQUIRED).min(j.DIPLOMA_NAME_MIN_LENGTH,j.DIPLOMA_NAME.TOO_SHORT).max(j.DIPLOMA_NAME_MAX_LENGTH,j.DIPLOMA_NAME.TOO_LONG),certificationLevelId:Z.Z_().required(j.CERTIFICATION.REQUIRED),organizationName:Z.Z_().min(j.ORGANIZATION_NAME_MIN_LENGTH,j.ORGANIZATION_NAME.TOO_SHORT).max(j.ORGANIZATION_NAME_MAX_LENGTH,j.ORGANIZATION_NAME.TOO_LONG),graduationYear:Z.Z_().required(j.YEAR.REQUIRED).min(j.YEAR_MIN_LENGTH,j.YEAR.INVALID_DATE_NUMBER).matches(/^\d+$/,j.YEAR.INVALID_FORMAT_DATE).test("graduationYear before current year",j.YEAR.INVALID_DATE,(function(e){return!!e&&parseInt(e,10)<=m}))}),b="add"===t?{diplomaName:"",certificationLevelId:"",organizationName:"",graduationYear:(new Date).getFullYear()}:i[r],N=(0,D.TA)({initialValues:b,validationSchema:f,onSubmit:function(e){var n="add"===t?[].concat((0,_.Z)(i),[e]):(0,v.Z)([r],e,i);l(n)}}),R=N.isValid,k=N.values,I=N.errors,S=N.touched,L=N.setFieldValue,C=N.handleBlur,q=N.handleChange,U=N.handleSubmit,V=y()(T().form,(0,g.Z)({},T().formWithBorderTop,"add"===t&&!(0,d.XY)(i)));return(0,P.jsxs)("form",{className:V,onSubmit:U,children:[(0,P.jsxs)("div",{className:T().inputs,children:[(0,P.jsx)(w.Z,{id:"diplomaName",name:"diplomaName",label:"Dipl\xf4me obtenu",placeholder:"Dipl\xf4me obtenu",value:null===k||void 0===k?void 0:k.diplomaName,width:{_:"full",small:"half"},onChange:q,onBlur:C,setFieldValue:L,touched:S,error:null===I||void 0===I?void 0:I.diplomaName,enterKeyHint:"next",required:!0,showEmptySuffix:!0,marginRight:{_:"none",small:"small"}}),(0,P.jsx)(O.Z,{id:"certificationLevelId",name:"certificationLevelId",label:"Niveau de certification",value:k.certificationLevelId,onChange:q,onBlur:C,defaultValue:"Choisissez votre niveau de certification",touched:S,error:I.certificationLevelId,options:u,enterKeyHint:"next",width:{_:"full",small:"half"},marginLeft:{_:"none",small:"small"},required:!0})]}),(0,P.jsxs)("div",{className:T().inputs,children:[(0,P.jsx)(w.Z,{id:"organizationName",name:"organizationName",label:"Organisme de formation",placeholder:"Organisme de formation",value:k.organizationName,width:{_:"full",small:"half"},onChange:q,onBlur:C,setFieldValue:L,touched:S,error:I.organizationName,enterKeyHint:"next",showEmptySuffix:!0,paddingRight:{_:"none",small:"small"},marginRight:{_:"none",small:"small"}}),(0,P.jsx)(x.Z,{id:"graduationYear",name:"graduationYear",label:"Ann\xe9e d'obtention",placeholder:"AAAA",value:k.graduationYear,width:{_:"half",small:"one-quarter"},onChange:q,onBlur:C,setFieldValue:L,touched:S,error:I.graduationYear,enterKeyHint:"done",inputMode:"numeric",maxLength:"4"})]}),(0,P.jsxs)("div",{className:T().buttons,children:[(0,P.jsxs)("div",{children:[(0,P.jsx)(o.Z,{width:"auto",disabled:!R,variant:"contained",type:"submit",marginRight:"large",children:"Valider"}),(0,P.jsx)(o.Z,{width:"auto",variant:"outlined",onClick:c,justifyContent:"flex-end",children:"Annuler"})]}),"edit"===t&&(0,P.jsx)("div",{children:(0,P.jsx)(h.Z,{variant:"outlined",color:"red",borderColor:{_:"red",small:"white"},width:"auto",paddingLeft:{_:"none",small:"medium"},paddingRight:{_:"none",small:"medium"},onClick:function(){return null===s||void 0===s?void 0:s(r)},title:"Supprimer cette formation",icon:(0,P.jsx)(E.Z,{title:"Supprimer"}),children:(0,P.jsx)(A.Z,{from:"medium",children:(0,P.jsx)(p.Z,{marginLeft:{small:"none",medium:"small"},color:"red",children:"Supprimer cette formation"})})})})]})]})},I=n(5242),S=n.n(I),L=function(e){var t=e.candidate,n=e.onUpdateEducations,i=e.certifications,_=void 0===i?[]:i,g=e.tracking,v=g.trackEnterAddEducation,b=g.trackErrorAddEducation,y=g.trackSubmitAddEducation,j=g.trackEnterEditEducation,O=g.trackErrorEditEducation,x=g.trackSubmitEditEducation,A=g.trackDeleteEducation,E=g.trackErrorDeleteEducation,D=g.trackSubmitDeleteEducation,Z=t.educations,w=(0,u.useState)(!1),N=w[0],T=w[1],R=(0,u.useState)(!1),M=R[0],I=R[1],L=(0,u.useState)(Z||[]),C=L[0],q=L[1],U=(0,u.useState)(null),V=U[0],Y=U[1],B=(0,u.useState)(!1),F=B[0],H=B[1],G=function(){var e=(0,r.Z)(a().mark((function e(t,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(C,r);case 3:q(r),Y(null),T(!1),I(!1),"edit"===t&&(null===x||void 0===x||x()),"delete"===t&&(null===D||void 0===D||D()),"add"===t&&(null===y||void 0===y||y(),H(!1)),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),"edit"===t&&(null===O||void 0===O||O((0,f.e)(e.t0))),"delete"===t&&(null===E||void 0===E||E((0,f.e)(e.t0))),"add"===t&&b((0,f.e)(e.t0));case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(e){G("edit",e)},X=function(e){null===A||void 0===A||A();var t=(0,m.Z)(e,1,C);G("delete",t)},z=function(){Y(null),T(!1),H(!1)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("div",{className:S().wrapperTitle,children:[(0,P.jsx)(p.Z,{as:"h2",variant:"title2",children:"Mes formations"}),!N&&!(0,d.XY)(C)&&(0,P.jsx)(o.Z,{disabled:M||F,onClick:function(){return I(!0)},variant:"link",paddingTop:"none",paddingRight:"none",as:"a",width:"auto",title:"Cliquer ici pour modifier vos formations",children:"Modifier"})]}),(0,P.jsxs)("div",{children:[!F&&(0,d.XY)(C)&&(0,P.jsx)(p.Z,{as:"p",children:"Vous n'avez pas encore renseign\xe9 de formation."}),null===C||void 0===C?void 0:C.map((function(e,t){var n,r=_.filter((function(t){return t.id===e.certificationLevelId}));return(0,P.jsxs)("div",{className:S().row,children:[!N&&V!==t&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("div",{children:[(0,P.jsxs)(p.Z,{as:"p",marginBottom:"x-small",children:[(0,P.jsx)(p.Z,{variant:"bodyImportant",children:e.diplomaName}),e.organizationName&&" - ".concat(e.organizationName)]}),e.graduationYear&&(0,P.jsxs)(p.Z,{as:"p",variant:"small",color:"greyDark",children:[null===(n=r[0])||void 0===n?void 0:n.label," - ",e.graduationYear]})]}),M&&(0,P.jsx)(h.Z,{color:"blue",paddingRight:"small",paddingLeft:"small",variant:"outlined",icon:(0,P.jsx)(s.Z,{title:"Modifier"}),onClick:function(){Y(t),T(!0),I(!1),j()},title:"Modifier cette formation",width:"auto"})]}),t===V&&!(0,d.XY)(_)&&(0,P.jsx)(k,{action:"edit",index:V,educations:C,certifications:_,onSubmit:Q,onCancel:z,onDelete:X})]},"candidateEducation_".concat(t))}))]}),M&&(0,P.jsx)("div",{children:(0,P.jsx)(p.Z,{as:"a",marginTop:"large",color:"blue",display:{_:"flex",small:"inline-flex"},justifyContent:"center",onClick:function(){z(),I(!1)},children:"Annuler la modification"})}),!F&&!M&&!N&&(0,P.jsxs)(o.Z,{onClick:function(){H(!0),v()},variant:"outlined",paddingRight:"medium",paddingLeft:"medium",marginTop:"large",as:"a",title:"Ajouter une formation",children:[(0,P.jsx)(l.ZP,{color:"blue",marginRight:"small",children:(0,P.jsx)(c.Z,{})}),(0,P.jsx)(p.Z,{children:"Ajouter une formation"})]}),F&&!(0,d.XY)(_)&&(0,P.jsx)(k,{action:"add",onSubmit:function(e){G("add",e)},onCancel:z,educations:C,certifications:_})]})}},41244:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var r=n(90116),i=n(59499),a=n(50029),o=n(87794),l=n.n(o),d=n(67822),c=n(51976),s=n(49319),u=n(61148),m=n(12904),p=n(97259),f=n(67294),h=n(89271),_=n(31429),g=n(88980),v=n(47943),b=n(39872),y=n(33693),j=n(55393),O=n(41602),x=n(28994),A=n(82175),E=n(7258),D=n(27862),Z=n(5481),w=n(85893);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P,R,M,k=function(e){var t=e.startedAt,n=e.endedAt;return T(T({},e),{},{startedAt:(0,g.Db)(t),endedAt:n?(0,g.Db)(n):void 0,isActual:!n})},I=function(e){var t,n=e.onSubmit,r=e.onCancel,i=e.onDelete,a=e.experience,o=new Date,l=E.Ry().shape({title:E.Z_().required(j.EXP_TITLE.REQUIRED).min(j.EXP_TITLE_MIN_LENGTH,j.EXP_TITLE.TOO_SHORT).max(j.EXP_TITLE_MAX_LENGTH,j.EXP_TITLE.TOO_LONG),companyName:E.Z_().required(j.company_name.REQUIRED).min(j.COMPANY_NAME_MIN_LENGTH,j.company_name.TOO_SHORT).max(j.COMPANY_NAME_MAX_LENGTH,j.company_name.TOO_LONG),startedAt:E.Z_().required(j.START_DATE.REQUIRED).test("startDate required",j.START_DATE.INVALID_FORMAT_DATE,(function(e){return 7===(null===e||void 0===e?void 0:e.length)&&(0,s.JY)((0,s.Qc)(e,"MM/yyyy"))})).test("startedAt before currentDate",j.START_DATE.INVALID_DATE,(function(e){return 7===(null===e||void 0===e?void 0:e.length)&&(0,s.RR)((0,s.Qc)(e,"MM/yyyy"),o)})),isActual:E.O7(),endedAt:E.Z_().when("isActual",{is:!1,then:E.Z_().required(j.END_DATE.REQUIRED).test("endDate required",j.END_DATE.INVALID_FORMAT_DATE,(function(e){return 7===(null===e||void 0===e?void 0:e.length)&&(0,s.JY)((0,s.Qc)(e,"MM/yyyy"))})).test("endDate after startDate",j.END_DATE.INVALID_START_DATE,(function(e){return 7===(null===e||void 0===e?void 0:e.length)&&(0,s.RR)((0,s.Qc)(this.resolve(E.iH("startedAt")),"MM/yyyy"),(0,s.Qc)(e,"MM/yyyy"))})).test("endedAt before currentDate",j.END_DATE.INVALID_CURRENT_DATE,(function(e){return 7===(null===e||void 0===e?void 0:e.length)&&(0,s.RR)((0,s.Qc)(e,"MM/yyyy"),o)})),otherwise:E.Z_()})}),d=(0,A.TA)({initialValues:a?k(a):{title:"",companyName:"",isActual:!1,startedAt:"",endedAt:""},validationSchema:l,onSubmit:function(e){var t=e.companyName,r=e.title,i=e.startedAt,a=e.endedAt,o=e.isActual;n({companyName:t,title:r,isActual:o,startedAt:i,endedAt:a})}}),u=d.isValid,m=d.values,p=d.errors,f=d.touched,_=d.setFieldValue,g=d.handleBlur,N=d.handleChange,T=d.handleSubmit;return(0,w.jsxs)(b.Z,{as:"form",onSubmit:T,width:"100%",children:[(0,w.jsxs)(b.Z,{width:"100%",display:{_:"block",small:"flex"},justifyContent:{_:"flex-start",small:"space-between"},children:[(0,w.jsx)(Z.Z,{id:"title",name:"title",label:"Titre du poste",placeholder:"Titre du poste",value:m.title,width:{_:"full",small:"half"},onBlur:g,onChange:N,touched:f,setFieldValue:_,error:p.title,required:!0,marginRight:{_:"none",small:"small"}}),(0,w.jsx)(Z.Z,{id:"companyName",name:"companyName",label:"Nom de la soci\xe9t\xe9",placeholder:"Nom de la soci\xe9t\xe9",value:m.companyName,width:{_:"full",small:"half"},onBlur:g,onChange:N,touched:f,setFieldValue:_,error:p.companyName,required:!0,marginLeft:{_:"none",small:"small"}})]}),(0,w.jsxs)(b.Z,{display:"flex",width:{_:"100%",small:"50%"},children:[(0,w.jsx)(D.Z,{id:"startedAt",name:"startedAt",label:"Date de d\xe9but",placeholder:"MM/AAAA",value:m.startedAt,onBlur:g,onChange:_,touched:f.startedAt,width:{_:"full",small:"half"},error:p.startedAt,marginRight:"small",marginBottom:"x-small",dataQaIds:{input:"job_start_date"}}),(0,w.jsx)(D.Z,{id:"endedAt",name:"endedAt",label:"Date de fin",placeholder:"MM/AAAA",value:m.endedAt,onBlur:g,onChange:_,touched:f.endedAt,width:{_:"full",small:"half"},error:p.endedAt,marginLeft:"small",marginRight:"small",disabled:m.isActual,dataQaIds:{input:"job_end_date"}})]}),(0,w.jsx)(b.Z,{my:"medium",children:(0,w.jsx)(y.Z,{dataQaIds:{cta:"job_check_current"},width:{_:"full",small:"half"},name:"isActual",onChange:function(e){_("endedAt",""),N(e)},touched:f.isActual,defaultChecked:m.isActual,value:null===(t=m.isActual)||void 0===t?void 0:t.toString(),label:"Ceci est mon poste actuel"})}),(0,w.jsxs)(b.Z,{display:"flex",justifyContent:"space-between",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)(c.Z,{width:"auto",disabled:!u,variant:"contained",type:"submit",marginRight:"medium",children:"Valider"}),(0,w.jsx)(c.Z,{width:"auto",variant:"outlined",onClick:r,justifyContent:"flex-end",children:"Annuler"})]}),!!a&&(0,w.jsx)("div",{children:(0,w.jsx)(v.Z,{variant:"outlined",color:"red",borderColor:{_:"red",small:"white"},width:"auto",paddingLeft:{_:"none",small:"medium"},paddingRight:{_:"none",small:"medium"},onClick:i,title:"Supprimer cette exp\xe9rience",icon:(0,w.jsx)(x.Z,{title:"Supprimer"}),children:(0,w.jsx)(O.Z,{from:"medium",children:(0,w.jsx)(h.Z,{marginLeft:{small:"none",medium:"small"},color:"red",children:"Supprimer cette exp\xe9rience"})})})})]})]})},S=n(71383),L=n(82297),C=n(50056),q=(0,L.Z)("div")(P||(P=(0,S.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),U=(0,L.Z)("hr")(R||(R=(0,S.Z)(["\n  background-color: ",";\n  margin-top: ",";\n  margin-bottom: 0;\n"])),(0,C.R)("colors.greyMedium"),(0,C.R)("space.large")),V=(0,L.Z)("div")(M||(M=(0,S.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: ",";\n  padding-bottom: ",";\n  border-bottom: 1px solid ",";\n\n  &:last-child {\n    border-bottom: 0;\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n"])),(0,C.R)("space.medium"),(0,C.R)("space.medium"),(0,C.R)("colors.greyMedium"));function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e){var t=e.candidate,n=e.onUpdateExperiences,i=e.tracking,o=i.trackEnterEditExperience,b=i.trackErrorEditExperience,y=i.trackSubmitEditExperience,j=i.trackEnterAddExperience,O=i.trackErrorAddExperience,x=i.trackSubmitAddExperience,A=i.trackDeleteExperience,E=i.trackErrorDeleteExperience,D=i.trackSubmitDeleteExperience,Z=(0,f.useState)(!1),N=Z[0],T=Z[1],P=(0,f.useState)(t.experiences||[]),R=P[0],M=P[1],k=(0,f.useState)(-1),S=k[0],L=k[1],C=-1!==S,Y=function(e){return(0,s.WU)(new Date(e.startedAt),"MMMM yyyy")+" - "+(e.isActual?"aujourd\u2019hui":e.endedAt&&(0,s.WU)(new Date(e.endedAt),"MMMM yyyy"))},F=function(e){"delete"===e&&(null===D||void 0===D||D()),"add"===e&&(null===x||void 0===x||x()),"edit"===e&&(null===y||void 0===y||y())},H=function(e,t){"delete"===e&&(null===E||void 0===E||E(t)),"add"===e&&(null===O||void 0===O||O(t)),"edit"===e&&(null===b||void 0===b||b(t))},G=function(){var e=(0,a.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(R,t);case 3:M(t),L(-1),T(!1),t.length===R.length?F("edit"):F(t.length<R.length?"delete":"add"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.length===R.length?H("edit",(0,_.e)(e.t0)):H(t.length<R.length?"delete":"add",(0,_.e)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){null===A||void 0===A||A();var e=R.filter((function(e,t){return t!==S}));G(e)},X=function(){var e=(0,a.Z)(l().mark((function e(t){var n,i,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=B(B({},t),{},{startedAt:(0,g.OS)(t.startedAt),endedAt:t.endedAt?(0,g.OS)(t.endedAt):void 0}),S===R.length?(i=[].concat((0,r.Z)(R),[n]),G(i)):(a=(0,d.Z)([S],n)(R),G(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){T(!1),L(-1)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(q,{children:[(0,w.jsx)(h.Z,{as:"h2",variant:"title2",children:"Mes exp\xe9riences professionnelles"}),!C&&!!R.length&&(0,w.jsx)(c.Z,{disabled:N,onClick:function(){return T(!0)},variant:"link",paddingTop:"none",paddingRight:"none",as:"a",width:"auto",title:"Cliquer ici pour modifier vos exp\xe9riences professionelles",children:"Modifier"})]}),(0,w.jsxs)("div",{children:[!C&&0===R.length&&(0,w.jsx)(h.Z,{as:"p",children:"Vous n'avez pas encore renseign\xe9 d'exp\xe9rience."}),R.map((function(e,t){return(0,w.jsxs)(V,{"data-qa-id":"jobs_exp",children:[S!==t&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{children:[(0,w.jsxs)(h.Z,{as:"p",variant:"body",marginBottom:"x-small",children:[(0,w.jsx)(h.Z,{variant:"bodyImportant",children:e.title})," -"," ",e.companyName]}),(0,w.jsx)(h.Z,{as:"p",variant:"small",color:"greyDark",children:Y(e)})]}),N&&(0,w.jsx)(v.Z,{color:"blue",paddingRight:"small",paddingLeft:"small",variant:"outlined",icon:(0,w.jsx)(p.Z,{title:"Modifier"}),onClick:function(){L(t),T(!1),null===o||void 0===o||o()},title:"Modifier cette exp\xe9rience",width:"auto"})]}),S===t&&(0,w.jsx)(I,{experience:R[S],onSubmit:X,onDelete:Q,onCancel:z})]},"candidateExperience_".concat(t))}))]}),N?(0,w.jsx)("div",{children:(0,w.jsx)(h.Z,{variant:"body",as:"a",marginTop:"large",color:"blue",display:{_:"flex",small:"inline-flex"},justifyContent:"center",onClick:z,children:"Annuler la modification"})}):C?null:(0,w.jsxs)(c.Z,{onClick:function(){L(R.length),null===j||void 0===j||j()},variant:"outlined",paddingRight:"medium",paddingLeft:"medium",marginTop:"large",as:"a",children:[(0,w.jsx)(u.ZP,{color:"blue",marginRight:"small",children:(0,w.jsx)(m.Z,{title:"Ajouter une exp\xe9rience"})}),(0,w.jsx)(h.Z,{children:"Ajouter une exp\xe9rience"})]}),S===R.length&&(0,w.jsxs)(w.Fragment,{children:[!!R.length&&(0,w.jsx)(U,{}),(0,w.jsx)(I,{onSubmit:X,onCancel:z,onDelete:Q})]})]})}},47943:function(e,t,n){"use strict";var r=n(59499),i=n(4730),a=n(51976),o=n(61148),l=(n(67294),n(85893)),d=["icon","children","color","borderColor"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.icon,n=e.children,r=e.color,c=e.borderColor,u=(0,i.Z)(e,d);return t?(0,l.jsxs)(a.Z,s(s({},u),{},{borderColor:c||r,justifyContent:"center",children:[(0,l.jsx)(o.ZP,{color:r,children:t}),n]})):(0,l.jsx)(a.Z,s(s({},u),{},{children:n}))}},5481:function(e,t,n){"use strict";var r=n(59499),i=n(4730),a=n(98360),o=n(61148),l=n(25049),d=n(67294),c=n(85893),s=["showEmptySuffix"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.showEmptySuffix,n=void 0===t||t,r=(0,i.Z)(e,s),u=(0,d.useRef)(null),p=(0,d.useCallback)((function(e){u.current=e}),[]),f=n?(0,c.jsx)(o.ZP,{color:"opacityBlack",display:"inline-block",size:"small",children:(0,c.jsx)(a.Z,{onClick:function(){var e;r.setFieldValue(r.name,""),null===u||void 0===u||null===(e=u.current)||void 0===e||e.focus()}})}):null;return(0,c.jsx)(l.Z,m(m({width:"half",suffix:f,onChange:r.handleChange,onBlur:r.handleBlur},r),{},{inputRef:p}))}},31429:function(e,t,n){"use strict";n.d(t,{e:function(){return i}});var r=n(19606),i=function(e){var t;return(0,r.gu)(e)?(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.errors[0].message)||"backend error":e instanceof Error?"".concat(e.name," : ").concat(e.message):"frontend error"}},22833:function(e,t,n){"use strict";n.d(t,{k:function(){return l},P:function(){return d}});var r=n(59499),i=n(34774);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function e(t){return Array.isArray(t)?t.map((function(t){return e(t)})):null!==t&&"object"===typeof t?Object.keys(t).reduce((function(n,a){return o(o({},n),{},(0,r.Z)({},(0,i.eV)(a),e(t[a])))}),{}):t},d=function e(t){return Array.isArray(t)?t.map((function(t){return e(t)})):null!==t&&"object"===typeof t?Object.keys(t).reduce((function(n,a){return o(o({},n),{},(0,r.Z)({},(0,i.O8)(a),e(t[a])))}),{}):t}},93162:function(e){e.exports={form:"styles_form__WVL9C",formWithBorderTop:"styles_formWithBorderTop__ti_TN",inputs:"styles_inputs__v8DUp",buttons:"styles_buttons__opqvf"}},5242:function(e){e.exports={wrapperTitle:"styles_wrapperTitle__c0_8C",row:"styles_row__Fskac"}}}]);