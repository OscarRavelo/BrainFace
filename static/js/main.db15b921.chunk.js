(this.webpackJsonpfacedetection=this.webpackJsonpfacedetection||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){},110:function(e,t,n){},346:function(e,t,n){},347:function(e,t,n){},386:function(e,t,n){"use strict";n.r(t);var a=n(11),i=n.n(a),s=n(50),c=n.n(s),o=(n(107),n(100)),r=n(96),l=n(97),b=n(102),d=n(101),u=(n(108),n(2)),h=function(e){var t=e.onRouteChange;return Object(u.jsx)("nav",{style:{display:" flex",justifyContent:"flex-end"},children:Object(u.jsx)("p",{onClick:t,className:"f3 link dim black pa3 pointer",children:"Sign Out"})})},p=n(98),m=n.n(p),j=(n(110),n.p+"static/media/brain.b6394610.png"),g=function(){return Object(u.jsx)("div",{className:"m4 mt0",children:Object(u.jsx)(m.a,{className:"Tilt b2 shadow-2",options:{max:55},style:{height:150,width:150},children:Object(u.jsxs)("div",{className:"Tilt-inner p3",children:[" ",Object(u.jsx)("img",{style:{paddingTop:"20px",width:"100px"},src:j,alt:"brain"})," "]})})})},f=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"white f3",children:"Punkki, your current Rank is..."}),Object(u.jsx)("div",{className:"white f1",children:"#1"})]})},x=n(99),v=n.n(x),O=(n(346),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"f3",children:"this Magic Brain will detect faces in your pictures. give it a try"}),Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"pa4 br3 shadow-5 form center",children:[Object(u.jsx)("input",{onChange:t,className:"f4 pa2 w-70 center",type:"text"}),Object(u.jsx)("button",{onClick:n,className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",children:"Detect"})]})})]})}),w=(n(347),function(e){var t=e.imageUrl,n=e.box;return Object(u.jsx)("div",{className:"center ma",children:Object(u.jsxs)("div",{className:"absolute mt2",children:[Object(u.jsx)("img",{id:"inputimage",src:t,alt:"the face ",width:"500px",height:"auto"}),n.map((function(e){return Object(u.jsx)("div",{style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol},className:"bounding-box"})}))]})})}),y=n(51),N=n.n(y),C=function(e){var t=e.onRouteChange;return Object(u.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(u.jsx)("main",{className:"pa4 black-80",children:Object(u.jsxs)("form",{className:"measure ",children:[Object(u.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{className:"f4 fw6 ph0 mh0",children:"click sign in to join"}),Object(u.jsxs)("div",{className:"mt3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",for:"email-address",children:"Email"}),Object(u.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(u.jsxs)("div",{className:"mv3",children:[Object(u.jsx)("label",{className:"db fw6 lh-copy f6",for:"password",children:"Password"}),Object(u.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(u.jsx)("div",{class:"",children:Object(u.jsx)("input",{onClick:t,class:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(u.jsx)("div",{class:"lh-copy mt3",children:Object(u.jsx)("a",{href:"#0",class:"f6 link dim black db",children:"Register"})})]})})})},k={particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:6,direction:"bottom",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:.5}},bubble:{distance:400,size:4,duration:.3,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}}},_=new N.a.App({apiKey:"8e7e8838754f4e2b99db3ce163ff12b3"}),R=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onRouteChange=function(t){e.setState({route:t})},e.calculateFaceLocation=function(e){console.log(e);var t=e.region_info.bounding_box;console.log(t);var n=document.getElementById("inputimage"),a=Number(n.width),i=Number(n.height);return console.log(a,i),{leftCol:t.left_col*a,topRow:t.top_row*i,bottomRow:i-t.bottom_row*i,rightCol:a-t.right_col*a}},e.displayFaceBox=function(t){e.setState({box:[].concat(Object(o.a)(e.state.box),[t])})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input},(function(){e.setState({box:[]})})),_.models.predict(N.a.FACE_DETECT_MODEL,e.state.input).then((function(t){t.outputs[0].data.regions.map((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))}))})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:[],route:"sigin"},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(v.a,{className:"particles",params:k}),Object(u.jsx)(h,{onRouteChange:function(){return e.onRouteChange("sigin")}}),"sigin"===this.state.route?Object(u.jsx)(C,{onRouteChange:function(){return e.onRouteChange("Home")}}):Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{}),Object(u.jsx)(f,{}),Object(u.jsx)(O,{onButtonSubmit:this.onButtonSubmit,onInputChange:this.onInputChange}),Object(u.jsx)(w,{box:this.state.box,imageUrl:this.state.imageUrl})]})]})}}]),n}(i.a.Component),S=(n(385),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,387)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))});c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root")),S()}},[[386,1,2]]]);
//# sourceMappingURL=main.db15b921.chunk.js.map