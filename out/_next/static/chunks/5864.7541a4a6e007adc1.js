(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5864],{86018:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(85893),o=n(28564);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"resetRequest",value:function(e,t){env.MOCKING_SERVER?setTimeout((function(){t(null,{result_code:env.SC.SUCCESS})}),2e3,t):o.Z.Post(o.Z.urls.MINFO_RESET_PASSWORD_REQUEST,e,{hideError:!0},(function(e,n){e?o.Z.ErrorHandler.type1(e):t(null,n)}))}},{key:"checkValidationCode",value:function(e,t){env.MOCKING_SERVER?setTimeout((function(){t(null,{result_code:env.SC.SUCCESS})}),2e3,t):o.Z.Post(o.Z.urls.MINFO_RESET_CHECK_VALIDATION,e,{hideError:!0,noToken:!0},(function(e,n){e?o.Z.ErrorHandler.type1(e):t(null,n)}))}},{key:"resetPassword",value:function(e,t){env.MOCKING_SERVER?setTimeout((function(){t(null,{result_code:env.SC.SUCCESS})}),2e3,t):o.Z.Post(o.Z.urls.MINFO_RESET_PASSWORD_RESET,e,{hideError:!0,noToken:!0},(function(e,n){e?o.Z.ErrorHandler.type1(e):t(null,n)}))}}])&&i(t.prototype,n),r&&i(t,r),e}(),a=n(26134),c=n(50515),l=n(57697);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.view=t,this.model=new s}var t,n,r;return t=e,(n=[{key:"setupPageTitle",value:function(){document.title="\u062a\u063a\u06cc\u06cc\u0631 \u0631\u0645\u0632\u0639\u0628\u0648\u0631 | \u0645\u06cc\u0646\u0641\u0648"}},{key:"onMobileConfirm",value:function(){if(this.step1InputCheck()){var e=this,t={phone_number:this.view.state.mobile};this.view.setState({loading:!0}),this.model.resetRequest(t,(function(t,n){n.result_code===env.SC.SUCCESS?(e.view.state.step=2,e.startCountdown()):n.result_code===env.SC.USER_NOT_FOUND?a.Z.openNotification("\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0627\u0634\u062a\u0628\u0627\u0647 \u0627\u0633\u062a.","error"):n.result_code===env.SC.PASSWORD_RESET_REQUEST_LIMIT_ERROR&&a.Z.openNotification("\u0628\u0631\u0627\u06cc \u062a\u0644\u0627\u0634 \u0645\u062c\u062f\u062f \u0644\u0637\u0641\u0627 \u0627\u0646\u062f\u06a9\u06cc \u0635\u0628\u0631 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f.","error"),e.view.setState({loading:!1})}))}}},{key:"step1InputCheck",value:function(){var e=l.ZP.phoneNumber(this.view.state.mobile);return e.valid?(this.view.setState({mobile_error:!1}),!0):(this.view.setState({mobile_error:e.message}),!1)}},{key:"onBacktoInsertPhonenumber",value:function(){this.lock||this.view.state.loading||this.view.setState({step:1})}},{key:"onSendSmsCode",value:function(){var e=this;if(!this.lock){this.lock=!0;var t={phone_number:this.view.state.mobile};this.model.resetRequest(t,(function(t,n){n.result_code===env.SC.SUCCESS?(e.view.state.show_timer_bar=!0,e.startCountdown()):n.result_code===env.SC.USER_NOT_FOUND?a.Z.openNotification("\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0627\u0634\u062a\u0628\u0627\u0647 \u0627\u0633\u062a.","error"):n.result_code===env.SC.PASSWORD_RESET_REQUEST_LIMIT_ERROR&&a.Z.openNotification("\u0628\u0631\u0627\u06cc \u062a\u0644\u0627\u0634 \u0645\u062c\u062f\u062f \u0644\u0637\u0641\u0627 \u0627\u0646\u062f\u06a9\u06cc \u0635\u0628\u0631 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f.","error"),e.lock=!1}))}}},{key:"startCountdown",value:function(){var e=this;this.clearSmsCountdown(),this.view.state.can_send_sms_again=!1,this.view.state.timer=env.SMS_TIMER,this.view.state.timer_text=(0,c.nH)(this.view.state.timer),this.view.setState({timer:this.view.state.timer,timer_text:(0,c.nH)(this.view.state.timer)}),this.view.sms_interval=setInterval((function(){e.view.state.timer?e.view.setState({timer:e.view.state.timer-1,timer_text:(0,c.nH)(e.view.state.timer-1)}):(e.view.setState({can_send_sms_again:!0}),e.clearSmsCountdown())}),env.TIMER_INTERVAL)}},{key:"clearSmsCountdown",value:function(){clearInterval(this.view.sms_interval)}},{key:"onSmsCodeConfirm",value:function(){if(!this.lock&&this.onStep2InputCheck()){var e=this;this.lock=!0,this.view.setState({loading:!0});var t={token:this.view.state.verification_code};this.model.checkValidationCode(t,(function(t,n){n.result_code===env.SC.SUCCESS?(e.clearSmsCountdown(),e.view.state.step=3):n.result_code===env.SC.INVALID_TOKEN?e.view.state.verification_code_error="\u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0627\u0634\u062a\u0628\u0627\u0647 \u0627\u0633\u062a.":n.result_code===env.SC.PASSWORD_RESET_REQUEST_LIMIT_ERROR&&a.Z.openNotification("\u0628\u0631\u0627\u06cc \u062a\u0644\u0627\u0634 \u0645\u062c\u062f\u062f \u0644\u0637\u0641\u0627 \u0627\u0646\u062f\u06a9\u06cc \u0635\u0628\u0631 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f.","error"),e.view.setState({loading:!1}),e.lock=!1}))}}},{key:"onStep2InputCheck",value:function(){var e=l.ZP.verificationCode(this.view.state.verification_code);return e.valid?(this.view.setState({verification_code_error:!1}),!0):(this.view.setState({verification_code_error:e.message}),!1)}},{key:"onPasswordConfirm",value:function(){if(!this.lock&&this.onStep3InputCheck()){var e=this,t=this.view.state;this.lock=!0,this.view.setState({loading:!0});var n={token:this.view.state.verification_code,password:t.password};this.model.resetPassword(n,(function(t,n){n.result_code===env.SC.SUCCESS?e.view.setState({step:4}):n.result_code===env.SC.INVALID_TOKEN?a.Z.openNotification("\u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0627\u0634\u062a\u0628\u0627\u0647 \u0627\u0633\u062a.","error"):n.result_code===env.SC.USER_NOT_FOUND&&a.Z.openNotification("\u0628\u0631\u0627\u06cc \u062a\u0644\u0627\u0634 \u0645\u062c\u062f\u062f \u0644\u0637\u0641\u0627 \u0627\u0646\u062f\u06a9\u06cc \u0635\u0628\u0631 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f.","error"),e.view.setState({loading:!1}),e.lock=!1}))}}},{key:"onStep3InputCheck",value:function(){var e=this.view.state,t=l.ZP.password(e.password),n={},r=!0;return t.valid?n.password_error=!1:(n.password_error=t.message,r=!1),t.valid&&e.password===e.password_confirm?n.password_confirm_error=!1:t.valid&&e.password_error!==e.password_confirm&&(n.password_confirm_error="\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u0627\u0634\u062a\u0628\u0627\u0647 \u0627\u0633\u062a.",r=!1),this.view.setState(n),r}},{key:"goToHomePage",value:function(){window.location.href=env.PATHS.USER_AUTHENTICATION}}])&&u(t.prototype,n),r&&u(t,r),e}(),f=n(87992),p=n(8424),_=n(67294),m=n(71245),v=n.n(m);function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t&&C(e.prototype,t),n&&C(e,n),e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function k(e,t){return!t||"object"!==P(t)&&"function"!==typeof t?h(e):t}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k(this,n)}}var N=function(e){y(n,e);var t=I(n);function n(e){var r;return w(this,n),b(h(r=t.call(this,e)),"onMobileInput",(function(e){r.setState({mobile:e,mobile_error:!1})})),b(h(r),"onMobileConfirm",(function(){r.controller.onMobileConfirm()})),b(h(r),"onBacktoInsertPhonenumber",(function(){r.controller.onBacktoInsertPhonenumber()})),b(h(r),"onVerificationCodeInput",(function(e){r.setState({verification_code:e,verification_code_error:!1})})),b(h(r),"onSendSmsCode",(function(){r.controller.onSendSmsCode()})),b(h(r),"onSmsCodeConfirm",(function(){r.controller.onSmsCodeConfirm()})),b(h(r),"onPasswordInput",(function(e){r.setState({password:e,password_error:!1})})),b(h(r),"onPasswordConfirmInput",(function(e){r.setState({password_confirm:e,password_confirm_error:!1})})),b(h(r),"onPasswordConfirm",(function(){r.controller.onPasswordConfirm()})),b(h(r),"goToHomePage",(function(){r.controller.goToHomePage()})),r.controller=new d(h(r)),r.state={loading:!1,step:1,show_timer_bar:!0,timer:0,timer_text:"",can_send_sms_again:!0,mobile:"",password:"",password_confirm:"",verification_code:"",mobile_error:!1,password_error:!1,password_confirm_error:!1,verification_code_error:!1},r}return S(n,[{key:"componentDidMount",value:function(){this.controller.setupPageTitle()}},{key:"render",value:function(){var e=this;return(0,r.jsx)("div",{className:v().con,children:(0,r.jsxs)("div",{className:v().wrapper_card+" sm_card_shd",children:[1===this.state.step?(0,r.jsx)(x,{ref:function(t){return e.InserPhonenumber=t},parent:this}):null,2===this.state.step?(0,r.jsx)(R,{ref:function(t){return e.InsertValidationCode=t},parent:this}):null,3===this.state.step?(0,r.jsx)(T,{ref:function(t){return e.SetNewPassword=t},parent:this}):null,4===this.state.step?(0,r.jsx)(O,{ref:function(t){return e.SuccessMessage=t},parent:this}):null]})})}}]),n}(_.Component),x=function(e){y(n,e);var t=I(n);function n(){return w(this,n),t.apply(this,arguments)}return S(n,[{key:"render",value:function(){var e=this,t=this.props.parent,n=t.state;return(0,r.jsxs)("div",{className:v().con1,children:[(0,r.jsx)("div",{className:v().title1,children:"\u062a\u063a\u06cc\u06cc\u0631 \u0631\u0645\u0632\u0639\u0628\u0648\u0631"}),(0,r.jsx)("div",{className:v().sub1,children:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f."}),(0,r.jsx)(p.Z,{placeholder:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644",ref:function(t){return e.TextInput=t},className:v().comp1+" blc2",value:n.mobile,error:n.mobile_error,maxLength:11,inputFilter:l.xo.phoneNumberInputFilter,onChange:t.onMobileInput,OnEnterKeyPressed:t.onMobileConfirm}),(0,r.jsx)(f.Z,{className:v().submit1,loading:n.loading,title:"\u062a\u0627\u06cc\u06cc\u062f",onClick:t.onMobileConfirm})]})}}]),n}(_.Component),R=function(e){y(n,e);var t=I(n);function n(){return w(this,n),t.apply(this,arguments)}return S(n,[{key:"render",value:function(){var e=this,t=this.props.parent,n=t.state;return(0,r.jsxs)("div",{className:v().con1,children:[(0,r.jsx)("div",{className:v().title1,children:"\u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f"}),(0,r.jsx)("div",{className:v().sub1,children:"\u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647 \u0628\u0647 \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 "+n.mobile+" \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"}),(0,r.jsx)("a",{className:v().back_link,onClick:t.onBacktoInsertPhonenumber,children:"\u0628\u0627\u0632\u06af\u0634\u062a"}),(0,r.jsx)(p.Z,{placeholder:"\u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f",className:v().comp2+" blc2",ref:function(t){return e.TextInput=t},inputStyle:{textAlign:"center",direction:"ltr"},value:n.sms_code,error:n.verification_code_error,inputFilter:l.xo.verificationCodeInputFilter,onChange:t.onVerificationCodeInput,OnEnterKeyPressed:t.onSmsCodeConfirm}),n.show_timer_bar?(0,r.jsx)("div",{style:{height:"3rem",display:"flex",alignItems:"center"},children:n.can_send_sms_again?(0,r.jsx)("a",{onClick:t.onSendSmsCode,children:"\u0627\u0631\u0633\u0627\u0644 \u0645\u062c\u062f\u062f"}):(0,r.jsxs)("div",{className:"cpnts",style:{display:"flex",direction:"rtl"},children:["\u0627\u0631\u0633\u0627\u0644 \u0645\u062c\u062f\u062f \u06a9\u062f \u062a\u0627 ",(0,r.jsx)("div",{style:{minWidth:"2.6rem",textAlign:"center",fontWeight:700},children:n.timer_text})," \u062f\u06cc\u06af\u0631"]})}):(0,r.jsx)("div",{style:{height:"3rem"}}),(0,r.jsx)(f.Z,{className:v().submit2,title:"\u062a\u0627\u06cc\u06cc\u062f",loading:n.loading,onClick:t.onSmsCodeConfirm})]})}}]),n}(_.Component),T=function(e){y(n,e);var t=I(n);function n(){var e;return w(this,n),b(h(e=t.apply(this,arguments)),"focusInput2",(function(){e.TextInput2.input.focus()})),e}return S(n,[{key:"render",value:function(){var e=this,t=this.props.parent,n=t.state;return(0,r.jsxs)("div",{className:v().con1,children:[(0,r.jsx)("div",{className:v().title1,children:"\u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f"}),(0,r.jsx)("div",{className:v().sub1,children:"\u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f."}),(0,r.jsx)(p.Z,{placeholder:"\u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f",ref:function(t){return e.TextInput1=t},className:v().comp1+" blc2",value:n.password,error:n.password_error,type:"password",maxLength:48,inputFilter:l.xo.passwordInputFilter,onChange:t.onPasswordInput,OnEnterKeyPressed:this.focusInput2}),(0,r.jsx)(p.Z,{placeholder:"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f",ref:function(t){return e.TextInput2=t},className:v().comp3+" blc2",type:"password",value:n.password_confirm,error:n.password_confirm_error,maxLength:48,inputFilter:l.xo.passwordInputFilter,onChange:t.onPasswordConfirmInput,OnEnterKeyPressed:t.onPasswordConfirm}),(0,r.jsx)(f.Z,{className:v().submit3,loading:n.loading,title:"\u062a\u0627\u06cc\u06cc\u062f",onClick:t.onPasswordConfirm})]})}}]),n}(_.Component),O=function(e){y(n,e);var t=I(n);function n(){return w(this,n),t.apply(this,arguments)}return S(n,[{key:"render",value:function(){var e=this.props.parent,t=e.state;return(0,r.jsxs)("div",{className:v().con1,children:[(0,r.jsx)("img",{className:v().img1,src:"/statics/svg2/success_green.svg"}),(0,r.jsx)("div",{className:v().title2,children:"\u062a\u063a\u06cc\u06cc\u0631 \u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f"}),(0,r.jsx)(f.Z,{className:v().submit4,loading:t.loading,title:"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc",onClick:e.goToHomePage})]})}}]),n}(_.Component)},71245:function(e){e.exports={con:"ChangePassword_con__bSfj7",wrapper_card:"ChangePassword_wrapper_card__mWPFt",con1:"ChangePassword_con1__FO7My",title1:"ChangePassword_title1__fYczH",sub1:"ChangePassword_sub1__DfvIL",back_link:"ChangePassword_back_link__sOg4a",comp1:"ChangePassword_comp1__uKR0h",comp2:"ChangePassword_comp2__m1H1B",comp3:"ChangePassword_comp3__NAFrm",submit1:"ChangePassword_submit1__U8p4D",submit2:"ChangePassword_submit2__LCsBN",submit3:"ChangePassword_submit3__Mnrm1",submit4:"ChangePassword_submit4__sIyHv",img1:"ChangePassword_img1__ba2M3",title2:"ChangePassword_title2__mViM0"}}}]);