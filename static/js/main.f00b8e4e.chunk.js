(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(31)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(7),r=n.n(s),c=(n(13),n(1)),i=n(2),l=n(4),u=n(3),p=n(5),d=(n(15),n(17),n(19),function(e){return a.a.createElement("header",{className:"FrameTitle"},a.a.createElement("h1",null,"things to do:"),a.a.createElement("h3",null,e.message))}),h=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="";return-1===this.props.rateOfDone?e="Hi, what must you do today?":0===this.props.rateOfDone?e="Let's get down to work!":this.props.rateOfDone<.3?e="Keep it going!":this.props.rateOfDone<.4?e="You're on a good way!":this.props.rateOfDone<.6?e="You're halfway there!":this.props.rateOfDone<1?e="Almost finished!":1===this.props.rateOfDone&&(e="Finished! I'm proud of you!"),a.a.createElement(d,{message:e})}}]),t}(o.Component),m=(n(21),function(e){return a.a.createElement("button",{onClick:e.onClick,className:"AddButton"},"Add")}),g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(m,{onClick:this.props.onClick})}}]),t}(o.Component),f=(n(23),function(e){return a.a.createElement("li",{className:"Form"},a.a.createElement("label",{htmlFor:"task"},"Enter new task: "),a.a.createElement("input",{type:"text",id:"task",name:"task"}))}),k=(n(25),n(27),function(e){return a.a.createElement("button",{onClick:function(){e.onClick(e.index)},className:"DeleteButton"},"X")}),y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(k,{onClick:this.props.onClick,index:this.props.index})}}]),t}(o.Component),O=function(e){var t=function(){document.getElementById(e.index).click()},n={},o={};return e.done?(n={textDecoration:"line-through",color:"#c2c2a3"},o={background:"#f5f5f0",color:"#33cc33",fontWeight:"bold"},a.a.createElement("li",{className:"ThingToDo"},a.a.createElement("span",{style:o,className:"customCheck",onClick:t},"\u2713"),a.a.createElement("label",{style:n,htmlFor:e.index},e.task),a.a.createElement("input",{type:"checkbox",id:e.index,name:e.index,onChange:e.handleChange}),a.a.createElement(y,{onClick:e.deleteNote,index:e.index}))):a.a.createElement("li",{className:"ThingToDo"},a.a.createElement("span",{style:o,className:"customCheck",onClick:t}," "),a.a.createElement("label",{style:n,htmlFor:e.index},e.task),a.a.createElement("input",{type:"checkbox",id:e.index,name:e.index,onChange:e.handleChange}))},E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){if(e.done!==this.props.done&&e.task===this.props.task){var t=new XMLHttpRequest,n=JSON.stringify({username:this.props.userName,text:this.props.task,done:this.props.done,_id:this.props._id});t.responseType="json",t.onreadystatechange=function(){t.readyState===XMLHttpRequest.DONE&&t.response&&t.response.ok&&console.log("zmieniono pomy\u015blnie")},t.open("PATCH","https://vast-wave-96184.herokuapp.com/api/updateTask"),t.setRequestHeader("Content-type","application/json"),t.send(n)}}},{key:"render",value:function(){return a.a.createElement(O,{handleChange:this.props.handleChange,done:this.props.done,task:this.props.task,index:this.props.index,deleteNote:this.props.deleteNote})}}]),t}(o.Component),b=function(e){var t=0,n=e.notes.map(function(n,o){return n.done&&t++,a.a.createElement(E,{userName:e.userName,key:o.toString(),index:o,done:n.done,task:n.task,_id:n._id,handleChange:e.handleCheckboxChange,deleteNote:e.deleteNote})});return e.notes.length>0?t/=e.notes.length:t=-1,a.a.createElement("section",{className:"Frame"},a.a.createElement("button",{onClick:e.logOut,className:"log-out"},"Log Out"),a.a.createElement(h,{rateOfDone:t}),a.a.createElement("ul",{className:"tasksList"},n,a.a.createElement(f,null)),a.a.createElement(g,{onClick:e.addNote}))},v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleCheckboxChange=function(e){var t=n.state.notes.slice(0),o=e.target.id;t[o].done=!t[o].done,t[o].done&&n.checkSound.play(),n.setState({notes:t})},n.addNote=function(){var e=document.getElementById("task");if(e.value){var t=new XMLHttpRequest,o=JSON.stringify({username:n.props.userName,text:e.value});t.responseType="json",t.onreadystatechange=function(){t.readyState===XMLHttpRequest.DONE&&t.response&&console.log("dodano pomy\u015blnie")},t.open("POST","https://vast-wave-96184.herokuapp.com/api/newTask"),t.setRequestHeader("Content-type","application/json"),t.send(o),n.createSound.play();var a={done:!1,task:e.value};e.value="";var s=n.state.notes.slice(0);s.push(a),n.setState({notes:s})}},n.deleteNote=function(e){n.deleteSound.play();var t=n.state.notes.slice(0),o=t.splice(e,1),a=JSON.stringify({userName:n.props.userName,text:o[0].task,_id:o[0]._id}),s=new XMLHttpRequest;s.responseType="json",s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&s.response&&console.log(s.response)},s.open("DELETE","".concat("https://vast-wave-96184.herokuapp.com/api/deleteTask")),s.setRequestHeader("Content-type","application/json"),s.send(a),n.setState({notes:t})},n.state={notes:[]},n.createSound=new Audio("soundOfPaper.mp3"),n.deleteSound=new Audio("paperTear.mp3"),n.deleteSound.volume=.3,n.checkSound=new Audio("checkSound.mp3"),n.checkSound.volume=.5,n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",function(e){"undefined"!==typeof e.key&&"enter"===e.key.toLowerCase()&&document.getElementsByClassName("AddButton")[0].click()},!1)}},{key:"componentWillMount",value:function(){var e=this,t=new XMLHttpRequest;t.responseType="json",t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE&&t.response){for(var n=[],o=0;o<t.response.length;o++){console.log(t.response[o]);var a={done:t.response[o].done,task:t.response[o].text,_id:t.response[o]._id};n.push(a)}e.setState({notes:n})}},t.open("GET","".concat("https://vast-wave-96184.herokuapp.com/api/getTasks/").concat(this.props.userName),!0),t.send()}},{key:"render",value:function(){return a.a.createElement(b,{userName:this.props.userName,addNote:this.addNote,notes:this.state.notes,handleCheckboxChange:this.handleCheckboxChange,deleteNote:this.deleteNote,logOut:this.props.logOut})}}]),t}(o.Component),C=function(e){return a.a.createElement("div",{className:"App"},a.a.createElement(v,{userName:e.userName,logOut:e.logOut}))},N=(n(29),function(e){var t={};return e.error&&(t={color:"red"}),a.a.createElement("form",{className:"LoginForm",onSubmit:function(t){t.preventDefault();var n=document.getElementById("nick").value;e.onSubmit(n)}},a.a.createElement("label",{style:t,htmlFor:"nick"},e.message),a.a.createElement("input",{type:"text",name:"nick",id:"nick",placeholder:"name"}),a.a.createElement("input",{type:"submit",value:"submit"}))}),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).logIn=function(e){e?(n.setState({logged:!0,user:e.toLowerCase(),error:!1,loginMessage:"Logged successfully"}),localStorage.user=e.toLowerCase()):n.setState({loginMessage:"I haven't found that account! Try again: ",error:!0})},n.logOut=function(){delete localStorage.user,n.setState({logged:!1,user:"",error:!1,loginMessage:"Who's there? Insert your name:"})},n.state={logged:!1,user:"",loginMessage:"Who's there? Insert your name:",error:!1},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){localStorage.user&&this.setState({logged:!0,user:localStorage.user.toLowerCase(),error:!1,loginMessage:"Logged successfully"})}},{key:"render",value:function(){return this.state.logged?a.a.createElement(C,{userName:this.state.user,logOut:this.logOut}):a.a.createElement(N,{error:this.state.error,message:this.state.loginMessage,onSubmit:this.logIn})}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.f00b8e4e.chunk.js.map