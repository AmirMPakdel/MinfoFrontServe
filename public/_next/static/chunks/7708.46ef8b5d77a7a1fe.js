(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7708],{73082:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(85893);n(90380);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"sendVerificationCode",value:function(e,t){return env.MOCKING_SERVER,void setTimeout((function(){t(null,{result_code:env.SC.SUCCESS})}),2e3,t)}},{key:"verifyCode",value:function(e,t){return env.MOCKING_SERVER,void setTimeout((function(){t(null,{result_code:env.SC.SUCCESS})}),2e3,t)}},{key:"saveNewPassword",value:function(e,t){return env.MOCKING_SERVER,void setTimeout((function(){t(null,{result_code:env.SC.SUCCESS})}),2e3,t)}}])&&o(t.prototype,n),r&&o(t,r),e}(),s=n(50515),a=n(57697);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.view=t,this.model=new i}var t,n,r;return t=e,(n=[{key:"onMobileConfirm",value:function(){this.step1InputCheck()&&this.view.setState({step:2})}},{key:"step1InputCheck",value:function(){var e=a.ZP.phoneNumber(this.view.state.mobile);return e.valid?(this.view.setState({mobile_error:!1}),!0):(this.view.setState({mobile_error:e.message}),!1)}},{key:"onBacktoInsertPhonenumber",value:function(){this.lock||this.view.state.loading||this.view.setState({step:1})}},{key:"onSendSmsCode",value:function(){var e=this;if(!this.lock){this.lock=!0;var t={phone_number:this.view.state.mobile};this.model.sendVerificationCode(t,(function(t,n){"function"===typeof cb&&cb(),e.view.state.show_timer_bar=!0,n.result_code===env.SC.SUCCESS?e.startCountdown():(n.result_code,env.SC.USER_ALREADY_VERIFIED,e.view.setState({loading:!1})),e.lock=!1}))}}},{key:"startCountdown",value:function(){var e=this;this.clearSmsCountdown(),this.view.state.can_send_sms_again=!1,this.view.state.timer=env.SMS_TIMER,this.view.state.timer_text=(0,s.nH)(this.view.state.timer),this.view.setState({timer:this.view.state.timer,timer_text:(0,s.nH)(this.view.state.timer)}),this.view.sms_interval=setInterval((function(){e.view.state.timer?e.view.setState({timer:e.view.state.timer-1,timer_text:(0,s.nH)(e.view.state.timer-1)}):(e.view.setState({can_send_sms_again:!0}),e.clearSmsCountdown())}),80)}},{key:"clearSmsCountdown",value:function(){clearInterval(this.view.sms_interval)}},{key:"onSmsCodeConfirm",value:function(){if(!this.lock&&this.onStep2InputCheck()){var e=this;this.lock=!0,this.view.setState({loading:!0});var t={code:this.view.state.verification_code,phone_number:this.view.state.mobile};this.model.verifyCode(t,(function(t,n){n.result_code===env.SC.SUCCESS?(e.clearSmsCountdown(),e.view.setState({loading:!1,step:3})):n.result_code===env.SC.INVALID_VERIFICATION_CODE?e.view.setState({loading:!1,verification_code_error:"\u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0627\u0634\u062a\u0628\u0627\u0647 \u0627\u0633\u062a."}):e.view.setState({loading:!1}),e.lock=!1}))}}},{key:"onStep2InputCheck",value:function(){var e=a.ZP.verificationCode(this.view.state.verification_code);return e.valid?(this.view.setState({verification_code_error:!1}),!0):(this.view.setState({verification_code_error:e.message}),!1)}},{key:"onPasswordConfirm",value:function(){if(!this.lock&&this.onStep3InputCheck()){var e=this,t=this.view.state;this.lock=!0,this.view.setState({loading:!0});var n={password:t.password};this.model.saveNewPassword(n,(function(t,n){n.result_code===env.SC.SUCCESS&&e.view.setState({step:4}),e.view.setState({loading:!1}),e.lock=!1}))}}},{key:"onStep3InputCheck",value:function(){var e=this.view.state,t=a.ZP.password(e.password),n={},r=!0;return t.valid?n.password_error=!1:(n.password_error=t.message,r=!1),t.valid&&e.password===e.password_confirm?n.password_confirm_error=!1:t.valid&&e.password_error!==e.password_confirm&&(n.password_confirm_error="\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u0627\u0634\u062a\u0628\u0627\u0647 \u0627\u0633\u062a.",r=!1),this.view.setState(n),r}},{key:"goToHomePage",value:function(){window.location.href="/"}}])&&c(t.prototype,n),r&&c(t,r),e}(),l=n(87992),d=n(8424),f=n(67294),m=n(74370),p=n.n(m);function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function g(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?h(e):t}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}var P=function(e){S(n,e);var t=x(n);function n(e){var r;return v(this,n),C(h(r=t.call(this,e)),"onMobileInput",(function(e){r.setState({mobile:e,mobile_error:!1})})),C(h(r),"onMobileConfirm",(function(){r.controller.onMobileConfirm()})),C(h(r),"onBacktoInsertPhonenumber",(function(){r.controller.onBacktoInsertPhonenumber()})),C(h(r),"onVerificationCodeInput",(function(e){r.setState({verification_code:e,verification_code_error:!1})})),C(h(r),"onSendSmsCode",(function(){r.controller.onSendSmsCode()})),C(h(r),"onSmsCodeConfirm",(function(){r.controller.onSmsCodeConfirm()})),C(h(r),"onPasswordInput",(function(e){r.setState({password:e,password_error:!1})})),C(h(r),"onPasswordConfirmInput",(function(e){r.setState({password_confirm:e,password_confirm_error:!1})})),C(h(r),"onPasswordConfirm",(function(){r.controller.onPasswordConfirm()})),C(h(r),"goToHomePage",(function(){r.controller.goToHomePage()})),r.controller=new u(h(r)),r.state={loading:!1,step:1,show_timer_bar:!0,timer:0,timer_text:"",can_send_sms_again:!0,mobile:"",password:"",password_confirm:"",verification_code:"",mobile_error:!1,password_error:!1,password_confirm_error:!1,verification_code_error:!1},r}return w(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return(0,r.jsx)("div",{className:p().con,children:(0,r.jsxs)("div",{className:p().wrapper_card+" sm_card_shd",children:[1===this.state.step?(0,r.jsx)(I,{ref:function(t){return e.InserPhonenumber=t},parent:this}):null,2===this.state.step?(0,r.jsx)(j,{ref:function(t){return e.InsertValidationCode=t},parent:this}):null,3===this.state.step?(0,r.jsx)(N,{ref:function(t){return e.SetNewPassword=t},parent:this}):null,4===this.state.step?(0,r.jsx)(E,{ref:function(t){return e.SuccessMessage=t},parent:this}):null]})})}}]),n}(f.Component),I=function(e){S(n,e);var t=x(n);function n(){return v(this,n),t.apply(this,arguments)}return w(n,[{key:"render",value:function(){var e=this,t=this.props.parent,n=t.state;return(0,r.jsxs)("div",{className:p().con1,children:[(0,r.jsx)("div",{className:p().title1,children:"\u0641\u0631\u0627\u0645\u0648\u0634\u06cc \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"}),(0,r.jsx)("div",{className:p().sub1,children:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f."}),(0,r.jsx)(d.Z,{placeholder:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644",ref:function(t){return e.TextInput=t},className:p().comp1+" blc2",value:n.mobile,error:n.mobile_error,maxLength:11,inputFilter:a.xo.phoneNumberInputFilter,onChange:t.onMobileInput,OnEnterKeyPressed:t.onMobileConfirm}),(0,r.jsx)(l.Z,{className:p().submit1,loading:n.loading,title:"\u062a\u0627\u06cc\u06cc\u062f",onClick:t.onMobileConfirm})]})}}]),n}(f.Component),j=function(e){S(n,e);var t=x(n);function n(){return v(this,n),t.apply(this,arguments)}return w(n,[{key:"componentDidMount",value:function(){var e=this.props.parent;e.state.can_send_sms_again&&e.onSendSmsCode()}},{key:"render",value:function(){var e=this,t=this.props.parent,n=t.state;return(0,r.jsxs)("div",{className:p().con1,children:[(0,r.jsx)("div",{className:p().title1,children:"\u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f"}),(0,r.jsx)("div",{className:p().sub1,children:"\u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647 \u0628\u0647 \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 "+n.mobile+" \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"}),(0,r.jsx)("a",{className:p().back_link,onClick:t.onBacktoInsertPhonenumber,children:"\u0628\u0627\u0632\u06af\u0634\u062a"}),(0,r.jsx)(d.Z,{placeholder:"\u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f",className:p().comp2+" blc2",ref:function(t){return e.TextInput=t},inputStyle:{textAlign:"center",direction:"ltr"},value:n.sms_code,error:n.verification_code_error,inputFilter:a.xo.verificationCodeInputFilter,onChange:t.onVerificationCodeInput,OnEnterKeyPressed:t.onSmsCodeConfirm}),n.show_timer_bar?(0,r.jsx)("div",{style:{height:"3rem",display:"flex",alignItems:"center"},children:n.can_send_sms_again?(0,r.jsx)("a",{onClick:t.onSendSmsCode,children:"\u0627\u0631\u0633\u0627\u0644 \u0645\u062c\u062f\u062f"}):(0,r.jsxs)("div",{className:"cpnts",style:{display:"flex",direction:"rtl"},children:["\u0627\u0631\u0633\u0627\u0644 \u0645\u062c\u062f\u062f \u06a9\u062f \u062a\u0627 ",(0,r.jsx)("div",{style:{minWidth:"2.6rem",textAlign:"center",fontWeight:700},children:n.timer_text})," \u062f\u06cc\u06af\u0631"]})}):(0,r.jsx)("div",{style:{height:"3rem"}}),(0,r.jsx)(l.Z,{className:p().submit2,title:"\u062a\u0627\u06cc\u06cc\u062f",loading:n.loading,onClick:t.onSmsCodeConfirm})]})}}]),n}(f.Component),N=function(e){S(n,e);var t=x(n);function n(){var e;return v(this,n),C(h(e=t.apply(this,arguments)),"focusInput2",(function(){e.TextInput2.input.focus()})),e}return w(n,[{key:"render",value:function(){var e=this,t=this.props.parent,n=t.state;return(0,r.jsxs)("div",{className:p().con1,children:[(0,r.jsx)("div",{className:p().title1,children:"\u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f"}),(0,r.jsx)("div",{className:p().sub1,children:"\u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f."}),(0,r.jsx)(d.Z,{placeholder:"\u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f",ref:function(t){return e.TextInput1=t},className:p().comp1+" blc2",value:n.password,error:n.password_error,type:"password",maxLength:48,inputFilter:a.xo.passwordInputFilter,onChange:t.onPasswordInput,OnEnterKeyPressed:this.focusInput2}),(0,r.jsx)(d.Z,{placeholder:"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f",ref:function(t){return e.TextInput2=t},className:p().comp3+" blc2",type:"password",value:n.password_confirm,error:n.password_confirm_error,maxLength:48,inputFilter:a.xo.passwordInputFilter,onChange:t.onPasswordConfirmInput,OnEnterKeyPressed:t.onPasswordConfirm}),(0,r.jsx)(l.Z,{className:p().submit3,loading:n.loading,title:"\u062a\u0627\u06cc\u06cc\u062f",onClick:t.onPasswordConfirm})]})}}]),n}(f.Component),E=function(e){S(n,e);var t=x(n);function n(){return v(this,n),t.apply(this,arguments)}return w(n,[{key:"render",value:function(){var e=this.props.parent,t=e.state;return(0,r.jsxs)("div",{className:p().con1,children:[(0,r.jsx)("img",{className:p().img1,src:"/statics/svg2/success_green.svg"}),(0,r.jsx)("div",{className:p().title2,children:"\u062a\u063a\u06cc\u06cc\u0631 \u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f"}),(0,r.jsx)(l.Z,{className:p().submit4,loading:t.loading,title:"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc",onClick:e.goToHomePage})]})}}]),n}(f.Component)},74370:function(e){e.exports={con:"ChangePassword_con__oHvQf",wrapper_card:"ChangePassword_wrapper_card__phokq",con1:"ChangePassword_con1__SHhKw",title1:"ChangePassword_title1__QTrF1",sub1:"ChangePassword_sub1__UV5DO",back_link:"ChangePassword_back_link__2usOJ",comp1:"ChangePassword_comp1__3QSF_",comp2:"ChangePassword_comp2__kSwe3",comp3:"ChangePassword_comp3__e6R4_",submit1:"ChangePassword_submit1__NF2pb",submit2:"ChangePassword_submit2__UxaCS",submit3:"ChangePassword_submit3__Y5MHM",submit4:"ChangePassword_submit4__hKOhN",img1:"ChangePassword_img1__wNxVY",title2:"ChangePassword_title2__FmXhb"}}}]);