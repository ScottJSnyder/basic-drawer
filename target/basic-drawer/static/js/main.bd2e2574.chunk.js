(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{154:function(e,t,n){e.exports=n(277)},159:function(e,t,n){},162:function(e,t,n){},277:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(98),c=n.n(o),i=(n(159),n(40)),l=n(41),u=n(43),s=n(42),m=(n(160),n(161),n(162),n(150)),h=n(99),p=n(151),d=n.n(p),b=n(29),f=Object(b.a)(),O=[{id:1,text:"Home",icon:"message",filePath:"home"},{id:2,text:"About",icon:"check",filePath:"about"}],v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).loadView=function(t){f.push(t.addedItems[0].filePath),e.props.stateHandler({isDrawerOpen:!1})},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{items:O,width:200,selectionMode:"single",onSelectionChanged:this.loadView}))}}]),n}(r.a.PureComponent),w=n(279),E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"HOME"))}}]),n}(r.a.Component),j=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"ABOUT"))}}]),n}(r.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).renderList=function(){return r.a.createElement(v,{stateHandler:function(e){return a.setState(e)}})},a.state={isDrawerOpen:!1},a.buttonOptions={icon:"menu",onClick:function(){a.setState({isDrawerOpen:!a.state.isDrawerOpen})}},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Toolbar,{id:"toolbar"},r.a.createElement(h.Item,{widget:"dxButton",options:this.buttonOptions,location:"before"})),r.a.createElement(m.Drawer,{minSize:37,height:250,revealMode:"expand",openedStateMode:"overlap",render:this.renderList,opened:this.state.isDrawerOpen},r.a.createElement("div",{id:"view"},r.a.createElement(w.b,{history:f},r.a.createElement("div",null,r.a.createElement(w.a,{exact:!0,path:"/home",component:E}),r.a.createElement(w.a,{exact:!0,path:"/about",component:j}))))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.bd2e2574.chunk.js.map