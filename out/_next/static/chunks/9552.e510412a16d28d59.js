(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9552],{47088:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var o=t(85893),r=t(28564);function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,o;return n=e,(t=[{key:"getData",value:function(e,n){env.MOCKING_SERVER?setTimeout((function(){n(null,{result_code:env.SC.SUCCESS})}),2e3,n):r.Z.Post(r.Z.urls.STD_LOAD_FOOTER,e,{},(function(e,t){e?r.Z.ErrorHandler.type1(e):n(null,t)}))}}])&&s(n.prototype,t),o&&s(n,o),e}(),a=t(91281),c=t(82854);function l(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var _=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.view=n,this.model=new i}var n,t,o;return n=e,(t=[{key:"fetchData",value:function(){var e=c.Z.get("footer");if(e){var n={links:JSON.parse(e.footer_links),numbers:JSON.parse(e.footer_telephones),app_links:e.footer_app_links};a.Z.execute("onFooterChange",n)}else this.model.getData(null,(function(n,t){if(!n){var o={footer_app_links:t.footer_app_links,footer_links:t.footer_links,footer_telephones:t.footer_telephones};c.Z.store("footer",o);var r={links:JSON.parse(o.footer_links),numbers:JSON.parse(o.footer_telephones),app_links:e.footer_app_links};a.Z.execute("onFooterChange",r)}}))}}])&&l(n.prototype,t),o&&l(n,o),e}(),u=t(69215),d=t(67294),f=t(83353),m=t.n(f);function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,n){return!n||"object"!==y(n)&&"function"!==typeof n?h(e):n}function x(e,n){return(x=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var y=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function j(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=b(e);if(n){var r=b(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return v(this,t)}}var k=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&x(e,n)}(i,e);var n,t,r,s=j(i);function i(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),g(h(n=s.call(this,e)),"fetchData",(function(){n.controller.fetchData()})),g(h(n),"loadFooter",(function(e){var t=S(e),o=N(e);n.setState({loading:!1,social_links:t,contact_numbers:o})})),n.controller=new _(h(n)),n.state={loading:!0,social_links:[],contact_numbers:[]},n}return n=i,(t=[{key:"componentDidMount",value:function(){a.Z.add("onFooterChange",this.loadFooter),this.props.autoLoad&&this.fetchData()}},{key:"componentWillUnmount",value:function(){a.Z.remove("onFooterChange",this.loadFooter)}},{key:"render",value:function(){var e=this.state.contact_numbers,n=this.state.social_links;return(0,o.jsxs)("div",{className:m().con+" bgw md_card_shd",children:[(0,o.jsxs)("div",{className:m().contact_numbers,children:[e.length?"\u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633: ":null,e.map((function(e,n,t){return(0,o.jsxs)(d.Fragment,{children:[(0,o.jsx)("div",{className:m().number,children:e}),n!=t.length-1?(0,o.jsx)("div",{className:m().numbers_sep,children:"|"}):null]},n)}))]}),(0,o.jsx)("div",{className:m().social_links_con,children:n.map((function(e,n){return(0,o.jsx)("a",{className:m().social_link,href:e.url,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(u.u,{title:e.tooltip,children:(0,o.jsx)("img",{className:m().social_img,src:e.icon})})},"soc"+n)}))}),(0,o.jsx)("div",{className:m().footer_minfo+" bdyt fdc2",children:(0,o.jsxs)("span",{children:["\u0628\u0627",(0,o.jsx)("a",{href:"https://minfo.ir",children:" \u0645\u06cc\u0646\u0641\u0648 "}),"\u0633\u0627\u06cc\u062a\u062a \u0631\u0648 \u0628\u0647 \u0633\u0627\u062f\u06af\u06cc \u0628\u0633\u0627\u0632 \u0648 \u062f\u0648\u0631\u0647\u200c\u200c\u0647\u0627\u062a \u0631\u0648 \u0628\u0641\u0631\u0648\u0634"]})})]})}}])&&p(n.prototype,t),r&&p(n,r),i}(d.Component),N=function(e){var n=[],t=e.numbers;return t?(t.mobile1&&n.push(t.mobile1),t.mobile2&&n.push(t.mobile2),t.telephone1&&n.push(t.telephone1),t.telephone2&&n.push(t.telephone2),n):n},S=function(e){var n=e.links,t=[];return n?(n.email&&t.push({icon:"/statics/svg2/footer_email.svg",url:"mailto:"+n.email,tooltip:"\u0627\u06cc\u0645\u06cc\u0644"}),n.instagram&&t.push({icon:"/statics/svg2/footer_instagram.svg",url:n.instagram,tooltip:"\u0627\u06cc\u0646\u0633\u062a\u0627\u06af\u0631\u0627\u0645"}),n.linkedin&&t.push({icon:"/statics/svg2/footer_linkedin.svg",url:n.linkedin,tooltip:"\u0644\u06cc\u0646\u06a9\u062f\u06cc\u0646"}),n.telegram&&t.push({icon:"/statics/svg2/footer_telegram.svg",url:n.telegram,tooltip:"\u062a\u0644\u06af\u0631\u0627\u0645"}),n.whatsapp&&t.push({icon:"/statics/svg2/footer_whatsapp.svg",url:"https://wa.me/"+n.whatsapp,tooltip:"\u0648\u0627\u062a\u0633 \u0627\u067e"}),t):t}},82747:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var o=t(85893),r=t(67294),s=t(91217),i=t.n(s),a=t(26134),c=t(73985),l=t(91281),_=t(19899),u=t(11837),d=t(28564),f=t(82854);function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n){return!n||"object"!==x(n)&&"function"!==typeof n?m(e):n}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var x=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function y(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=g(e);if(n){var r=g(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return b(this,t)}}var j=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(g,e);var n,t,r,s=y(g);function g(e){var n;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,g),p(m(n=s.call(this,e)),"getStudent",(function(e,t){if(t.result_code===env.SC.SUCCESS){var o=t.data;n.changeInfo(o)}else(0,u.kT)(env.STUDENT_TOKEN_KEY)})),p(m(n),"changeInfo",(function(e){n.setState({logedin:1,username:e.first_name+" "+e.last_name})})),p(m(n),"onStudentAuthModal",(function(){l.Z.add("onStudentChange",n.onStudentLogin),a.Z.ModalLayout.setModal(1,(0,o.jsx)(c.Z,{}),(function(){a.Z.ModalLayout.visibleToggle(1,!0)}))})),p(m(n),"onStudentLogin",(function(e){n.setState({logedin:1,username:e.first_name+" "+e.last_name})})),p(m(n),"onSiteInfoChange",(function(e){n.setState({logo:d.Z.MediaFiles.publicImage(e.page_logo,"header_logo")})})),p(m(n),"onStudentDashboard",(function(){window.location.href=env.PATHS.STUDENT_COURSES})),p(m(n),"openSideMenu",(function(){n.SideMenu.style.transform="translateX(-16rem)"})),p(m(n),"closeSideMenu",(function(){n.SideMenu.style.transform="translateX(0)"})),n.state={logedin:0,username:"",logo:null};var t=f.Z.get("site_info");return t&&(n.state.logo=d.Z.MediaFiles.publicImage(t.page_logo,"header_logo")),l.Z.add("onAuthenticate",n.changeInfo),l.Z.add("onStudentChange",n.changeInfo),l.Z.add("onSiteInfoChange",n.onSiteInfoChange),n}return n=g,(t=[{key:"componentDidMount",value:function(){(0,u.ej)(env.STUDENT_TOKEN_KEY)&&(0,_.u6)(this.getStudent)}},{key:"render",value:function(){var e=this;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:i().plchldr_con}),(0,o.jsxs)("div",{className:i().header_con+" bgw sm_card_shd",children:[(0,o.jsxs)("div",{className:i().desktop_con,children:[(0,o.jsxs)("div",{className:i().dt_wrapper1,children:[(0,o.jsx)("div",{className:i().dt_logo_con,children:(0,o.jsx)("img",{className:i().dt_logo_img,onClick:function(){return window.location.href=env.PATHS.HOMEPAGE},src:this.state.logo})}),(0,o.jsxs)("div",{className:i().dt_links_con,children:[(0,o.jsx)("a",{className:i().dt_link+" fdc1i bdyt",href:"/store",children:"\u0641\u0631\u0648\u0634\u06af\u0627\u0647"}),(0,o.jsx)("a",{className:i().dt_link+" fdc1i bdyt",href:"/help",children:"\u0631\u0627\u0647\u0646\u0645\u0627"}),(0,o.jsx)("a",{className:i().dt_link+" fdc1i bdyt",href:"/contactUs",children:"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"})]})]}),(0,o.jsx)("div",{className:i().dt_login_sec,children:this.state.logedin?(0,o.jsxs)("div",{className:i().dt_logedin_btn+" amp_btn bgtc1",onClick:this.onStudentDashboard,children:[(0,o.jsx)("img",{className:i().dt_login_user_icon,src:"/statics/svg2/user.svg"}),(0,o.jsx)("div",{className:i().dt_login_t+" fdc1",children:this.state.username})]}):(0,o.jsxs)("div",{className:i().dt_login_btn+" amp_btn bdc2",onClick:this.onStudentAuthModal,children:[(0,o.jsx)("img",{className:i().dt_login_user_icon,src:"/statics/svg2/user.svg"}),(0,o.jsx)("div",{className:i().dt_login_t+" fdc1",children:"\u0648\u0631\u0648\u062f / \u062b\u0628\u062a \u0646\u0627\u0645"})]})})]}),(0,o.jsxs)("div",{className:i().mobile_con,children:[(0,o.jsx)("img",{className:i().mob_menu_btn,onClick:this.openSideMenu,src:"/statics/svg2/menu.svg"}),(0,o.jsx)("img",{className:i().mob_logo_img,src:this.state.logo})]}),(0,o.jsxs)("div",{ref:function(n){return e.SideMenu=n},className:i().side_menu_con+" md_card_shd",children:[(0,o.jsx)("img",{className:i().sm_close_btn,onClick:this.closeSideMenu,src:"/statics/svg2/close.svg"}),(0,o.jsx)("div",{className:i().sm_divider+" bgtc1"}),this.state.logedin?(0,o.jsxs)("div",{className:i().sm_logedin_btn+" amp_btn bgtc1",onClick:this.onStudentDashboard,children:[(0,o.jsx)("img",{className:i().dt_login_user_icon,src:"/statics/svg2/user.svg"}),(0,o.jsx)("div",{className:i().dt_login_t+" fdc1",children:this.state.username})]}):(0,o.jsxs)("div",{className:i().sm_login_btn+" amp_btn bdc2",onClick:this.onStudentAuthModal,children:[(0,o.jsx)("img",{className:i().dt_login_user_icon,src:"/statics/svg2/user.svg"}),(0,o.jsx)("div",{className:i().dt_login_t,children:"\u0648\u0631\u0648\u062f / \u062b\u0628\u062a \u0646\u0627\u0645"})]}),(0,o.jsx)("div",{className:i().sm_divider+" bgtc1"}),(0,o.jsx)("a",{className:i().sm_link+" fdc1i bdyt",href:"/store",children:"\u0641\u0631\u0648\u0634\u06af\u0627\u0647"}),(0,o.jsx)("a",{className:i().sm_link+" fdc1i bdyt",href:"/help",children:"\u0631\u0627\u0647\u0646\u0645\u0627"}),(0,o.jsx)("a",{className:i().sm_link+" fdc1i bdyt",href:"/contactUs",children:"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"}),(0,o.jsx)("div",{className:i().sm_divider+" bgtc1"})]})]})]})}}])&&h(n.prototype,t),r&&h(n,r),g}(r.Component)},83353:function(e){e.exports={con:"IndexFooter_con__5j7kR",contact_numbers:"IndexFooter_contact_numbers__9Tr9D",number:"IndexFooter_number__4BOvo",social_links_con:"IndexFooter_social_links_con__bR596",social_link:"IndexFooter_social_link__193ch",footer_minfo:"IndexFooter_footer_minfo__inRh3",numbers_sep:"IndexFooter_numbers_sep__PPN7J"}},91217:function(e){e.exports={header_con:"IndexHeader_header_con__1M0Kp",plchldr_con:"IndexHeader_plchldr_con__3Zb6K",desktop_con:"IndexHeader_desktop_con__Hh0xm",mobile_con:"IndexHeader_mobile_con__3DUbO",dt_wrapper1:"IndexHeader_dt_wrapper1__Ki7lY",dt_logo_con:"IndexHeader_dt_logo_con__pSwn0",dt_logo_img:"IndexHeader_dt_logo_img__BiUXP",dt_links_con:"IndexHeader_dt_links_con___crCn",dt_link:"IndexHeader_dt_link__GBv6i",dt_login_btn:"IndexHeader_dt_login_btn__95yLh",dt_logedin_btn:"IndexHeader_dt_logedin_btn__EN2mD",dt_login_user_icon:"IndexHeader_dt_login_user_icon__n5o06",dt_login_t:"IndexHeader_dt_login_t__E6iDA",side_menu_con:"IndexHeader_side_menu_con__n0kZB",mob_menu_btn:"IndexHeader_mob_menu_btn__zjFQR",mob_logo_img:"IndexHeader_mob_logo_img__8m_P9",sm_close_btn:"IndexHeader_sm_close_btn__9_l_i",sm_divider:"IndexHeader_sm_divider__73P_q",sm_login_btn:"IndexHeader_sm_login_btn__Wd4gw",sm_logedin_btn:"IndexHeader_sm_logedin_btn__7_b8k",sm_link:"IndexHeader_sm_link__r8RSC"}}}]);