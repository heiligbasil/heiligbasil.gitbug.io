(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0EVa":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n);t.a=function(e){let{data:t}=e,a=new Date(t),n=a.getDate(),r=a.getMonth(),s=a.getFullYear();return i.a.createElement("span",null,["January","February","March","April","May","June","July","August","September","October","November","December"][r]," ",n,", ",s)}},DmBy:function(e,t,a){},N2w8:function(e,t,a){},O0kv:function(e,t,a){},Po4D:function(e,t,a){},PqyB:function(e,t,a){"use strict";var n=a("dI71"),i=a("q1tI"),r=a.n(i),s=a("cGQ7"),l=a("Wbzz"),o=a("10BB"),c=a("cCxF");a("N2w8");let m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={submitDisabled:!1},a.textAreaInput=a.textAreaInput.bind(a),a.handleSubmit=a.handleSubmit.bind(a),a.showContactForm=!0,""===a.props.contact.api_url&&(a.showContactForm=!1),a}Object(n.a)(t,e);var a=t.prototype;return a.textAreaInput=function(e){e.target.style.height="auto",e.target.style.height=e.target.scrollHeight+"px"},a.handleSubmit=function(e){if(e.preventDefault(),!this.state.submitDisabled){this.setState({submitDisabled:!0});let e=`name=${encodeURI(this.dataName.value)}&email=${encodeURI(this.dataEmail.value)}&message=${encodeURI(this.dataMessage.value)}`;fetch(this.props.contact.api_url,{method:"post",body:e}).then((function(e){return e.json()})).then(e=>{this.setState({submitDisabled:!1}),this.resMessage.style.opacity=1,"error"===e.response?(this.resMessage.innerHTML="There was an error in sending the message",this.resMessage.classList.add("color-error")):(this.resMessage.innerHTML="Message sent succesfully",this.resMessage.classList.remove("color-error")),this.dataName.value="",this.dataEmail.value="",this.dataMessage.value="";let t=this;setTimeout((function(){t.resMessage.style.opacity=0}),5e3)},e=>{this.resMessage.innerHTML="Message sent succesfully",this.resMessage.classList.remove("color-error"),this.setState({submitDisabled:!1});let t=this;setTimeout((function(){t.resMessage.style.opacity=0}),5e3)})}},a.componentDidMount=function(){if(this.showContactForm){let e=window.getComputedStyle(this.btn,null).getPropertyValue("color");this.btn.querySelector("path").setAttribute("fill",e)}this.contactArea.querySelectorAll(".item").forEach((function(e,t){let a=e.querySelector("path");a&&a.setAttribute("fill",window.getComputedStyle(e,null).getPropertyValue("color"))}))},a.render=function(){return r.a.createElement("section",{id:"contact",className:"container"},r.a.createElement("div",{className:"section-title"},r.a.createElement(s.a,{title:"CONTACT"})),r.a.createElement("div",{className:"row"+(this.showContactForm?"":" no-form"),ref:e=>this.contactArea=e},this.showContactForm&&r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("form",null,r.a.createElement("div",{className:"field"},r.a.createElement("label",null,r.a.createElement("span",{className:"label text-tertiary"},"Name"),r.a.createElement("div",{className:"input-border"},r.a.createElement("input",{type:"text",ref:e=>this.dataName=e,className:"field-box",name:"name",id:"name",required:!0})))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,r.a.createElement("span",{className:"label text-tertiary"},"Email"),r.a.createElement("div",{className:"input-border"},r.a.createElement("input",{type:"email",ref:e=>this.dataEmail=e,className:"field-box",name:"email",id:"email",required:!0})))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,r.a.createElement("span",{className:"label text-tertiary"},"Message"),r.a.createElement("div",{className:"input-border"},r.a.createElement("textarea",{style:{overflowY:"hidden"},ref:e=>this.dataMessage=e,className:"field-box",onChange:this.textAreaInput,name:"message",id:"message",required:!0})))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"ib"},r.a.createElement("button",{className:"btn"+(this.state.submitDisabled?" disabled":""),onClick:this.handleSubmit,id:"submit",ref:e=>this.btn=e},"SEND"," ",r.a.createElement("span",{className:"icon paper-plane",style:{display:this.state.submitDisabled?"none":"inline-block"}},r.a.createElement(o.j,null)),r.a.createElement("span",{className:"icon loading",style:{display:this.state.submitDisabled?"inline-block":"none"}},r.a.createElement(o.f,null)))),r.a.createElement("label",null,r.a.createElement("p",{className:"res-message",ref:e=>this.resMessage=e}))))),r.a.createElement("div",{className:this.showContactForm?"col s12 m6 details":"col s12 details"},this.props.contact.description&&r.a.createElement("p",{className:"text-tertiary"},this.props.contact.description),r.a.createElement("ul",null,this.props.contact.mail&&r.a.createElement("li",{className:"text-secondary item"},r.a.createElement("span",{className:"icon"},r.a.createElement(o.d,null)),r.a.createElement("a",{href:"mailto:"+this.props.contact.mail},this.props.contact.mail)),this.props.contact.phone&&r.a.createElement("li",{className:"text-secondary item"},r.a.createElement("span",{className:"icon"},r.a.createElement(o.h,null)),r.a.createElement("a",{href:"tel:"+this.props.contact.phone},this.props.contact.phone)),this.props.contact.address&&r.a.createElement("li",{className:"text-tertiary item",style:{whiteSpace:"pre"}},r.a.createElement("span",{className:"icon"},r.a.createElement(o.g,null)),this.props.contact.address),r.a.createElement("li",null,r.a.createElement(c.a,null))))))},t}(r.a.Component);t.a=()=>r.a.createElement(l.b,{query:"4193577037",render:e=>r.a.createElement(m,{contact:e.site.siteMetadata.contact})})},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),i=a("q1tI"),r=a.n(i),s=a("Bl7J"),l=a("vrFN"),o=a("cCxF"),c=a("Wbzz"),m=(a("vuxH"),a("9eSz")),d=a.n(m),p=a("0EVa"),u=a("10BB");a("O0kv");r.a.Component;a("cGQ7"),a("PqyB"),a("Po4D");let h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={winHeight:"100vh"},a}Object(n.a)(t,e);var a=t.prototype;return a.createSVGElement=function(e,t){for(var a in e=document.createElementNS("http://www.w3.org/2000/svg",e),t)e.setAttributeNS(null,a,t[a]);return e},a.componentWillUnmount=function(){window.removeEventListener("resize",this.setWindowHeight)},a.componentDidMount=function(){this.setWindowHeight(),window.addEventListener("resize",this.setWindowHeight);let e=this.svg.clientWidth,t=this.svg.querySelector("text"),a=t.getBoundingClientRect().width;if(a>e){let n=t.innerHTML;if(n.split(" ").length>1)t.innerHTML="",n.split(" ").forEach((e,a)=>{let n=this.createSVGElement("tspan",{dy:0===a?"0em":".8em",x:"50"});n.innerHTML=e,t.appendChild(n)}),setTimeout(()=>{this.svg.style.height=t.getBoundingClientRect().height+70,this.svg.style.margin="15px auto"},250);else for(;a>e;){let e=parseInt(window.getComputedStyle(t,null).getPropertyValue("font-size"));t.style.fontSize=e-1+"px",a=t.getBoundingClientRect().width}}},a.setWindowHeight=function(){this.setState({winHeight:window.innerHeight})},a.render=function(){return r.a.createElement(s.a,{placeholder:!1},r.a.createElement(l.a,{lang:"en",title:this.props.data.site.siteMetadata.title}),r.a.createElement("div",{className:"wall",style:{height:this.state.winHeight+"px"}},r.a.createElement("div",{className:"intro container"},r.a.createElement("div",{className:"main-title text-primary"},r.a.createElement("svg",{width:"90%",height:"220px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice",ref:e=>this.svg=e},this.props.data.site.siteMetadata.capitalizeTitleOnHome?this.props.data.site.siteMetadata.title.toUpperCase():this.props.data.site.siteMetadata.title,r.a.createElement("pattern",{id:"wallPattern",patternUnits:"userSpaceOnUse",width:"100",height:"100"},r.a.createElement("rect",{x:"0",y:"0",className:"fill-primary",width:"100",height:"100"}),r.a.createElement("image",{xlinkHref:"/images/wall.jpg",height:"50",width:"86",y:"0",preserveAspectRatio:"none"})),r.a.createElement("text",{fill:"url(#wallPattern)",textAnchor:"middle",x:"50",y:"50"},this.props.data.site.siteMetadata.capitalizeTitleOnHome?this.props.data.site.siteMetadata.title.toUpperCase():this.props.data.site.siteMetadata.title))),r.a.createElement("p",{className:"tag-line text-secondary"},this.props.data.site.siteMetadata.introTag),r.a.createElement("p",{className:"caption text-tertiary"},this.props.data.site.siteMetadata.description),r.a.createElement("a",{href:"./portfolio",className:"btn"},"PORTFOLIO"),"   ",r.a.createElement("a",null),r.a.createElement("a",{href:"./about",className:"btn"},"ABOUT")),r.a.createElement("div",{className:"social-buttons"},r.a.createElement(o.a,null))))},t}(r.a.Component);t.default=h},cGQ7:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!=n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:t+""}function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}var s=a("dI71"),l=a("q1tI"),o=a.n(l);let c=function(e){function t(a){var n;return(n=e.call(this,a)||this).state={colorPrimary:"#00",colorSecondary:"#00"},n._id=t.counter,n}Object(s.a)(t,e);var a,n,i,l=t.prototype;return l.componentDidMount=function(){this.setState({colorPrimary:window.getComputedStyle(this.cp,null).getPropertyValue("color"),colorSecondary:window.getComputedStyle(this.cs,null).getPropertyValue("color")})},l.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{ref:e=>this.cp=e,className:"color-primary"}),o.a.createElement("span",{ref:e=>this.cs=e,className:"color-secondary"}),o.a.createElement("svg",{width:"100%",height:"150",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice"},o.a.createElement("linearGradient",{id:"primaryGradient"+this._id,x1:"0",x2:"100%",y1:"0",y2:"0",gradientUnits:"userSpaceOnUse"},o.a.createElement("stop",{stopColor:"#4CAF50",offset:"0%"}),o.a.createElement("stop",{stopColor:"#6888DF",offset:"85%"})),o.a.createElement("text",{textAnchor:"middle",x:"50",y:"52",fill:"url(#primaryGradient"+this._id+")"},this.props.title)))},a=t,i=[{key:"counter",get:function(){return t._counter=(t._counter||0)+1,t._counter}}],(n=null)&&r(a.prototype,n),i&&r(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}(o.a.Component);t.a=c},vuxH:function(e,t,a){"use strict";var n=a("dI71"),i=a("q1tI"),r=a.n(i),s=a("Wbzz"),l=a("9eSz"),o=a.n(l);a("DmBy");let c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",{className:"item col s12"},r.a.createElement("div",{className:"row flex"},r.a.createElement("div",{className:"col m6 image"},r.a.createElement(o.a,{fluid:this.props.data.node.frontmatter.image.childImageSharp.fluid}),r.a.createElement(s.a,{to:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title,"aria-label":this.props.data.node.frontmatter.title,className:"overlay-link",style:{opacity:0}},this.props.data.node.frontmatter.title)),r.a.createElement("div",{className:"col m6 content"},r.a.createElement("h2",{className:"text-primary pseudo-divider"},r.a.createElement(s.a,{to:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title,"aria-label":this.props.data.node.frontmatter.title},this.props.data.node.frontmatter.title)),r.a.createElement("p",{className:"text-tertiary"},this.props.data.node.frontmatter.description))))},t}(r.a.Component);t.a=function(e){const t=e.data.allMarkdownRemark.edges;let a=[];return t.forEach((function(e,t){a.push(r.a.createElement(c,{key:e.node.id,data:e}))})),r.a.createElement("div",{className:"row"},a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-3c5f86ec24b8346b2b43.js.map