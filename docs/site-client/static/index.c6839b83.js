import{d as e,p as a,h as l,a as t,i as n,b as d,f as s,e as o,F as m,q as i,g as u,x as r,y as p}from"./vue.559c8990.js";const v=[{name:"001",display_name:"001",type:"string",data:[{name:"001",display_name:"001",type:"string",data:[{name:"001",display_name:"001",type:"string",data:[{name:"001",display_name:"001",type:"string"}]}]}]}],y=[{label:"string",value:"string"},{label:"string",value:"string"}];var c=e({name:"NodeItem",props:{list:{type:Array,default:()=>[]}},emits:["add","rm"],setup:(e,{emit:a})=>({addEvent:e=>{a("add",e)},removeEvent:(e,l)=>{a("rm",e,l)},typeOptions:y})});const V=u();a("data-v-08187607");const _={class:"item-content"},g=r("+"),E=r("-"),A={key:0};l();const f=V(((e,a,l,u,r,p)=>{const v=t("el-input"),y=t("el-option"),c=t("el-select"),f=t("el-button"),b=t("node-item",!0);return n(!0),d(m,null,s(e.list,((a,l)=>(n(),d("li",{key:l,class:"node-item"},[o("div",_,[o(v,{modelValue:a.name,"onUpdate:modelValue":e=>a.name=e},null,8,["modelValue","onUpdate:modelValue"]),o(v,{modelValue:a.display_name,"onUpdate:modelValue":e=>a.display_name=e},null,8,["modelValue","onUpdate:modelValue"]),o(c,{modelValue:a.type,"onUpdate:modelValue":e=>a.type=e,placeholder:"选择类型"},{default:V((()=>[(n(!0),d(m,null,s(e.typeOptions,(e=>(n(),d(y,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"]),o(f,{onClick:l=>e.addEvent(a)},{default:V((()=>[g])),_:2},1032,["onClick"]),o(f,{onClick:a=>e.removeEvent(e.list,l)},{default:V((()=>[E])),_:2},1032,["onClick"])]),Array.isArray(a.data)?(n(),d("ul",A,[o(b,{list:a.data,onAdd:e.addEvent,onRm:e.removeEvent},null,8,["list","onAdd","onRm"])])):i("",!0)])))),128)}));c.render=f,c.__scopeId="data-v-08187607";var b=e({components:{NodeItem:c},setup:()=>({list:p(v),addEvent:e=>{Array.isArray(e.data)||(e.data=[]),e.data.push({name:"+",display_name:"+",type:"string"})},removeEvent:(e,a)=>{e.splice(a,1)}})});b.render=function(e,a,l,s,m,i){const u=t("NodeItem");return n(),d("ul",null,[o(u,{list:e.list,onAdd:e.addEvent,onRm:e.removeEvent},null,8,["list","onAdd","onRm"])])};export default b;
