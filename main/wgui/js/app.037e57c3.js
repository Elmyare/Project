(function(t){function e(e){for(var r,s,o=e[0],u=e[1],i=e[2],d=0,b=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&b.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(b.length)b.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},c=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var i=0;i<o.length;i++)e(o[i]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1656:function(t,e,n){},"1e83":function(t,e,n){"use strict";n("1656")},"2ba4":function(t,e,n){"use strict";n("69aa")},3168:function(t,e,n){"use strict";n("cc6e")},"3c44":function(t,e,n){},"479f":function(t,e,n){},"4bd1":function(t,e,n){"use strict";n("84fa")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"header"},c={id:"nav"},s=Object(r["f"])("Документация пользователя"),o=Object(r["f"])(" | "),u=Object(r["f"])("Тренировочный ружим"),i=Object(r["f"])(" | "),l=Object(r["f"])("Контрольный режим");function d(t,e,n,d,b,O){var p=Object(r["w"])("TestIndicator"),f=Object(r["w"])("router-link"),j=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])("div",a,[Object(r["D"])(Object(r["g"])("input",{type:"text",placeholder:"Фамилия Имя",id:"uname","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.uname=e})},null,512),[[r["A"],t.uname]]),Object(r["D"])(Object(r["g"])("input",{type:"text",placeholder:"Класс",id:"ugroup","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.ugroup=e})},null,512),[[r["A"],t.ugroup]]),t.runningTest?(Object(r["p"])(),Object(r["d"])(p,{key:0,timeElapsed:t._timeElapsed,timeTotal:t._timeTotal,tasksTotal:t.tasksTotal,tasksDone:t.tasksDone},null,8,["timeElapsed","timeTotal","tasksTotal","tasksDone"])):Object(r["e"])("",!0)]),Object(r["g"])("div",c,[Object(r["g"])(f,{to:"/",onClick:e[3]||(e[3]=function(e){return t.runningTest=!1})},{default:Object(r["C"])((function(){return[s]})),_:1}),o,Object(r["g"])(f,{to:"/test/train",onClick:e[4]||(e[4]=function(t){return O.startTest(!0)})},{default:Object(r["C"])((function(){return[u]})),_:1}),i,Object(r["g"])(f,{to:"/test/controll",onClick:e[5]||(e[5]=function(t){return O.startTest(!1)})},{default:Object(r["C"])((function(){return[l]})),_:1})]),Object(r["g"])(j,{_test:t.test,tasksDone:t.tasksDone,set:O.set,nextTask:O.nextTask,results:t.results,train:t.train},null,8,["_test","tasksDone","set","nextTask","results","train"])])}var b=n("1da1"),O=(n("ac1f"),n("5319"),n("96cf"),Object(r["E"])("data-v-7e9cc47c"));Object(r["s"])("data-v-7e9cc47c");var p={class:"timeIndicator"},f={class:"first"},j={class:"second"};Object(r["q"])();var m=O((function(t,e,n,a,c,s){return Object(r["p"])(),Object(r["d"])("div",p,[Object(r["g"])("div",f,"Времени прошло: "+Object(r["y"])(n.timeElapsed)+" / "+Object(r["y"])(n.timeTotal),1),Object(r["g"])("div",j,"Заданий сделано: "+Object(r["y"])(n.tasksDone)+" / "+Object(r["y"])(n.tasksTotal),1)])})),v={props:["timeElapsed","timeTotal","tasksTotal","tasksDone"]};n("847e");v.render=m,v.__scopeId="data-v-7e9cc47c";var g=v,h={data:function(){return{runningTest:!1,timeEnd:0,timeStart:0,tasksTotal:0,tasksDone:0,_timeElapsed:"00:00",_timeTotal:"00:00",train:!1,results:{tasks:[],mark:null,vmark:null},test:[{question:"1 2 3 + +",correctAnswer:"6",answer:null},{question:"1 2 3 - +",correctAnswer:"2",answer:null}],uname:"",ugroup:""}},methods:{formatTime:function(t){t/=1e3;var e=[parseInt(t/60),parseInt(t%60)],n=e[0],r=e[1];return(n<10?"0":"")+n+":"+(r<10?"0":"")+r},timeElapsed:function(t){return Date.now()-t},testNotOver:function(){return this.runningTest?(this.runningTest=Date.now()<this.timeEnd&&this.tasksDone<this.tasksTotal,this.runningTest||this.testOver(),this.runningTest):this.runningTest},set:function(t,e){this[t]=e},nextTask:function(){this.tasksDone++,this.testNotOver()},testOver:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$router.push("/end"),e.next=3,eel.Judge(t.test,t.train)();case 3:t.results=e.sent;case 4:case"end":return e.stop()}}),e)})))()},startTest:function(t){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.train=t,e.uname&&e.ugroup||t){n.next=6;break}return e.$router.replace("/"),e.runningTest=!1,alert('Требуется авторизация. Введите "Фимилию Имя" и "Класс" в соответствующие поля.'),n.abrupt("return");case 6:return n.next=8,eel.GenTest(e.uname,e.ugroup,t)();case 8:return e.test=n.sent,e.timeStart=Date.now(),n.t0=e.timeStart,n.t1=6e4,n.next=14,eel.GetTime()();case 14:n.t2=n.sent,n.t3=n.t1*n.t2,e.timeEnd=n.t0+n.t3,e.tasksTotal=e.test.length,e.tasksDone=0,e.runningTest=!0;case 20:case"end":return n.stop()}}),n)})))()}},components:{TestIndicator:g},mounted:function(){var t=this;setInterval((function(){t.runningTest&&t.testNotOver()&&(t._timeElapsed=t.formatTime(t.timeElapsed(t.timeStart)),t._timeTotal=t.formatTime(t.timeEnd-t.timeStart))}),1e3)},setup:function(){window.onclose=eel.WindowClose}};n("3168");h.render=d;var k=h,w=(n("7db0"),n("fb6a"),n("d81d"),n("a630"),n("3ca3"),n("159b"),n("b64b"),n("6c02")),T=n("cf05"),y=n.n(T),x=Object(r["E"])("data-v-2dd695e4");Object(r["s"])("data-v-2dd695e4");var _=Object(r["g"])("img",{alt:"Vue logo",src:y.a,style:{width:"800px"}},null,-1),A=Object(r["g"])("span",{style:{"font-size":"120pt"}},"",-1),D=Object(r["g"])("h1",null,"Доброе утро",-1),E=Object(r["f"])(" Сюда вставлять документацию юзера. ");Object(r["q"])();var I=x((function(t,e,n,a,c,s){return Object(r["p"])(),Object(r["d"])("div",null,[_,A,D,E])})),C={name:"Docs"};n("1e83");C.render=I,C.__scopeId="data-v-2dd695e4";var S=C,q=n("3835"),P=(n("4fad"),Object(r["E"])("data-v-8d127ae6"));Object(r["s"])("data-v-8d127ae6");var $={class:"test"};Object(r["q"])();var M=P((function(t,e,n,a,c,s){var o=Object(r["w"])("Task");return Object(r["p"])(),Object(r["d"])("div",$,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(Object.entries(n._test),(function(t){var e=Object(q["a"])(t,2),a=e[0],c=e[1];return Object(r["p"])(),Object(r["d"])(o,{key:a,n:a,task:c.question,text:c.text,hint:c.hint,correctAnswer:c.correctAnswer,currentTask:n.tasksDone,train:n.train,onAnswer:s.onAnswer},null,8,["n","task","text","hint","correctAnswer","currentTask","train","onAnswer"])})),128))])})),N=Object(r["E"])("data-v-1ea61e77");Object(r["s"])("data-v-1ea61e77");var R={key:0},V={class:"bigger"},J=Object(r["f"])(" ?"),U=Object(r["g"])("br",null,null,-1),G=Object(r["g"])("span",{class:"smaller"},"Каждое действие в инфиксной записи оборачивать скобками (кроме последнего). Для префиксной и постфиксной скобки не использовать. Порядок операций нужно сохранять.",-1),z={class:"flex"},K={key:0,style:{"margin-top":"8px"}},W={key:0};Object(r["q"])();var B=N((function(t,e,n,a,c,s){return n.currentTask==n.n?(Object(r["p"])(),Object(r["d"])("div",R,[Object(r["g"])("div",null,[Object(r["f"])(Object(r["y"])(n.text)+" ",1),Object(r["g"])("span",V,Object(r["y"])(n.task),1),J,U,G]),Object(r["g"])("div",z,[Object(r["D"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.answer=e}),placeholder:"Введите ответ",onKeydown:e[2]||(e[2]=function(e){return 13==e.which&&t.$emit("answer",t.answer)}),ref:"ans"},null,544),[[r["A"],t.answer]]),Object(r["g"])("input",{type:"button",value:"Далее",onClick:e[3]||(e[3]=function(e){return t.$emit("answer",t.answer)})}),n.train?(Object(r["p"])(),Object(r["d"])("input",{key:0,type:"button",value:t.showAnswer?"Скрыть ответ":"Посмотреть ответ",onClick:e[4]||(e[4]=function(e){return t.showAnswer=!t.showAnswer})},null,8,["value"])):Object(r["e"])("",!0)]),t.showAnswer?(Object(r["p"])(),Object(r["d"])("div",K,[Object(r["g"])("div",null,"Правильный ответ: "+Object(r["y"])(n.correctAnswer),1),n.hint?(Object(r["p"])(),Object(r["d"])("div",W,Object(r["y"])(n.hint),1)):Object(r["e"])("",!0)])):Object(r["e"])("",!0)])):Object(r["e"])("",!0)})),F={props:["task","n","currentTask","train","hint","correctAnswer","text"],data:()=>({answer:"",showAnswer:!1}),updated(){this.$refs.ans&&this.$refs.ans.focus()}};n("2ba4");F.render=B,F.__scopeId="data-v-1ea61e77";var H=F,L={props:["set","_test","tasksDone","nextTask","train"],methods:{onAnswer:function(t){var e=this._test;e[this.tasksDone].answer=t,this.set("test",e),this.nextTask()}},mounted:function(){this.$route.params.mode},components:{Task:H}};n("d948");L.render=M,L.__scopeId="data-v-8d127ae6";var Q=L,X=Object(r["E"])("data-v-a4b12948");Object(r["s"])("data-v-a4b12948");var Y=Object(r["g"])("table",null,[Object(r["g"])("tr",null,[Object(r["g"])("td",null,"Правильность"),Object(r["g"])("td",null,"Ваш ответ"),Object(r["g"])("td",null,"Правильный ответ")])],-1);Object(r["q"])();var Z=X((function(t,e,n,a,c,s){return Object(r["p"])(),Object(r["d"])("div",null,[Y,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(Object.entries(n.results.tasks),(function(t){var e=Object(q["a"])(t,2),n=e[0],a=e[1];return Object(r["p"])(),Object(r["d"])("table",{class:["result",{good:a.correct}],key:n},[Object(r["g"])("tr",null,[Object(r["g"])("td",null,Object(r["y"])(a.correct?"+":"-"),1),Object(r["g"])("td",null,Object(r["y"])(a.answer||"Ответ не дан"),1),Object(r["g"])("td",null,Object(r["y"])(a.correctAnswer),1)])],2)})),128)),Object(r["g"])("div",null,"Результат: "+Object(r["y"])(parseInt(100*n.results.mark))+"%",1),Object(r["g"])("div",null,"Оценка: "+Object(r["y"])(n.results.vmark),1)])})),tt={props:["results"]};n("4bd1");tt.render=Z,tt.__scopeId="data-v-a4b12948";var et=tt,nt="СтековыйКалькулятор - ",rt=[{path:"/",name:"Docs",component:S,meta:{title:nt+"Документация пользователя"}},{path:"/test/:mode",name:"Test",component:Q,meta:{title:nt+"Тестирование"}},{path:"/end",name:"End",component:et,meta:{title:nt+"Результаты теста"}}],at=Object(w["a"])({history:Object(w["b"])(),routes:rt});at.beforeEach((function(t,e,n){var r=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),a=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags})),c=e.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(r?document.title=r.meta.title:c&&(document.title=c.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!a)return n();a.meta.metaTags.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),e.setAttribute("data-vue-router-controlled",""),e})).forEach((function(t){return document.head.appendChild(t)})),n()}));var ct=at;Object(r["c"])(k).use(ct).mount("#app")},"69aa":function(t,e,n){},"847e":function(t,e,n){"use strict";n("3c44")},"84fa":function(t,e,n){},cc6e:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.96e5850d.png"},d948:function(t,e,n){"use strict";n("479f")}});
//# sourceMappingURL=app.037e57c3.js.map