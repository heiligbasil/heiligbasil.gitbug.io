(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{cGQ7:function(e,t,r){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:t+""}function a(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}var i=r("dI71"),l=r("q1tI"),c=r.n(l);let s=function(e){function t(r){var o;return(o=e.call(this,r)||this).state={colorPrimary:"#00",colorSecondary:"#00"},o._id=t.counter,o}Object(i.a)(t,e);var r,o,n,l=t.prototype;return l.componentDidMount=function(){this.setState({colorPrimary:window.getComputedStyle(this.cp,null).getPropertyValue("color"),colorSecondary:window.getComputedStyle(this.cs,null).getPropertyValue("color")})},l.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{ref:e=>this.cp=e,className:"color-primary"}),c.a.createElement("span",{ref:e=>this.cs=e,className:"color-secondary"}),c.a.createElement("svg",{width:"100%",height:"150",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice"},c.a.createElement("linearGradient",{id:"primaryGradient"+this._id,x1:"0",x2:"100%",y1:"0",y2:"0",gradientUnits:"userSpaceOnUse"},c.a.createElement("stop",{stopColor:"#4CAF50",offset:"0%"}),c.a.createElement("stop",{stopColor:"#6888DF",offset:"85%"})),c.a.createElement("text",{textAnchor:"middle",x:"50",y:"52",fill:"url(#primaryGradient"+this._id+")"},this.props.title)))},r=t,n=[{key:"counter",get:function(){return t._counter=(t._counter||0)+1,t._counter}}],(o=null)&&a(r.prototype,o),n&&a(r,n),Object.defineProperty(r,"prototype",{writable:!1}),r}(c.a.Component);t.a=s},w2l6:function(e,t,r){"use strict";r.r(t);var o=r("q1tI"),n=r.n(o),a=r("cGQ7"),i=r("Bl7J"),l=r("vrFN");t.default=()=>n.a.createElement(i.a,null,n.a.createElement(l.a,{title:"404: Not found"}),n.a.createElement("section",{id:"404",className:"container",style:{minHeight:"600px"}},n.a.createElement("div",{className:"section-title"},n.a.createElement(a.a,{title:"404"}),n.a.createElement("p",{class:"text-primary"},"The page you are looking for doesn't exist, or has been removed."))))}}]);
//# sourceMappingURL=component---src-pages-404-js-e0c914d11f9240b704a1.js.map