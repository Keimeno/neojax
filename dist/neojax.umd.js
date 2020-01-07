/* neojax version 2.1.4 Copyright (c) Keimeno
   licensed under Apache-2.0 http://www.apache.org/licenses/LICENSE-2.0 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).neojax=t()}(this,(function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function t(e,t,n,r){return new(n||(n=Promise))((function(o,s){function u(e){try{a(r.next(e))}catch(e){s(e)}}function i(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(u,i)}a((r=r.apply(e,t||[])).next())}))}function n(e,t){var n,r,o,s,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,r=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){u=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){u.label=s[1];break}if(6===s[0]&&u.label<o[1]){u.label=o[1],o=s;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(s);break}o[2]&&u.ops.pop(),u.trys.pop();continue}s=t.call(e,u)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}}return self.fetch||(self.fetch=function(e,t){return t=t||{},new Promise((function(n,r){var o=new XMLHttpRequest,s=[],u=[],i={},a=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:a,headers:{keys:function(){return s},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var c in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){s.push(t=t.toLowerCase()),u.push([t,n]),i[t]=i[t]?i[t]+","+n:n})),n(a())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(c,t.headers[c]);o.send(t.body||null)}))}),new(function(){function r(e){this._options={},e&&(this._options=e)}return r.prototype.create=function(e){return new r(e)},r.prototype.sendRequest=function(r,o,s,u){return t(this,void 0,Promise,(function(){var t,i,a,c,l;return n(this,(function(n){switch(n.label){case 0:return t=r,i=this._options.headers||{},this._options.baseUrl&&(t=this._options.baseUrl+r),u&&(u.baseUrl&&(t=u.baseUrl+r),u.headers&&(i=e(e({},i),u.headers))),a={method:o,headers:e({},i)},s&&(a.body=JSON.stringify(s)),[4,fetch(t,a)];case 1:c=n.sent(),i=this.parseHeadersToNeojaxHeaders(c.headers),n.label=2;case 2:return n.trys.push([2,4,,9]),[4,c.json()];case 3:return l=n.sent(),[3,9];case 4:n.sent(),n.label=5;case 5:return n.trys.push([5,7,,8]),[4,c.text()];case 6:return l=n.sent(),[3,8];case 7:return n.sent(),l={},[3,8];case 8:return[3,9];case 9:return[2,{status:c.status,headers:i,url:c.url,success:c.ok,message:c.statusText,data:l}]}}))}))},r.prototype.manageRequest=function(e,r,o,s){return void 0===o&&(o=null),t(this,void 0,Promise,(function(){var u=this;return n(this,(function(i){return[2,new Promise((function(i,a){return t(u,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return[4,this.sendRequest(r,e,o,s)];case 1:return(t=n.sent()).success?i(t):a({response:t,message:t.message}),[2]}}))}))}))]}))}))},r.prototype.parseHeadersToNeojaxHeaders=function(e){var t={};return e.forEach((function(e,n){t[n]=e})),t},r.prototype.get=function(e,t){return this.manageRequest("GET",e,null,t)},r.prototype.post=function(e,t,n){return void 0===t&&(t=null),this.manageRequest("POST",e,t,n)},r.prototype.put=function(e,t,n){return void 0===t&&(t=null),this.manageRequest("PUT",e,t,n)},r.prototype.delete=function(e,t,n){return void 0===t&&(t=null),this.manageRequest("DELETE",e,t,n)},Object.defineProperty(r.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),r}())}));