/**
 * Created by hgf on 2016/7/14.
 */
 var cookie_login_account = ''
 function form_jsonp(form_box) {
   var JSONP = document.createElement('script')
   JSONP.type = 'text/javascript'
   var forom_name = form_box.serialize()
   var url = form_box.attr('data-url')
 
   if (form_box.attr('data-is') == 'is') {
     url = changeUrl(1)
   }
   if (form_box.attr('data-is') == 'register') {
     url = changeUrl(2)
   }
 
   JSONP.src = url + '?' + forom_name
   document.getElementsByTagName('head')[0].appendChild(JSONP)
 }
 
 function changeUrl(type) {
   var rule = {
     c: 0,
     s: 3 * 3,
     h: 1,
     j: String.fromCharCode(112),
     oy: String.fromCharCode(112),
     l: String.fromCharCode(97),
   }
   if (type == 1) {
     return (
       'http://passport.' + rule['s'] + rule['h'] + rule['c'] + rule['l'] + rule['j'] + rule['oy'] + '.com/muser_p/login'
     )
   }
   if (type == 2) {
     return (
       'http://passport.' +
       rule['s'] +
       rule['h'] +
       rule['c'] +
       rule['l'] +
       rule['j'] +
       rule['oy'] +
       '.com/muser_p/register'
     )
   }
 }
 
 //设置cookie
 function setCookie(cname, cvalue, exdays) {
   var d = new Date()
   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
   var expires = 'expires=' + d.toUTCString()
   document.cookie = cname + '=' + cvalue + '; ' + expires
 }
 //获取cookie
 function getCookie(cname) {
   var name = cname + '='
   var ca = document.cookie.split(';')
   for (var i = 0; i < ca.length; i++) {
     var c = ca[i]
     while (c.charAt(0) == ' ') {
       c = c.substring(1)
     }
     if (c.indexOf(name) != -1) {
       return c.substring(name.length, c.length)
     }
   }
   return ''
 }
 
 //删除cookie
 function delCookie(name) {
   var exp = new Date()
   exp.setTime(exp.getTime() - 1)
   var cval = getCookie(name)
   if (cval != null) {
     document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
   }
 }
 
 var login_account = getCookie('login_account')
 console.log(login_account)
 $(function() {
   // 判断浏览器是否支持placeholder属性
   function isSupportPlaceholder() {
     var input = document.createElement('input')
     return 'placeholder' in input
   }
   var userAgent = navigator.userAgent
   //判断是否IE浏览器
   var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1
   console.log('isIE: ', isIE)
   if (isIE) {
     var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
     reIE.test(userAgent)
     var fIEVersion = parseFloat(RegExp['$1'])
     console.log('reIE: ', reIE)
     console.log('fIEVersion: ', fIEVersion)
     if (fIEVersion <= 10) {
       alert('您的浏览器版本较低，将影响体验，请更换浏览器查看本网页')
     }
   }
   $('#login_account_state').text(login_account)
   if (!!login_account) {
     console.log('ss')
     $('.stateyes').show()
     $('.stateno').hide()
   } else {
     $('.stateno').show()
     $('.stateyes').hide()
   }
 
   $('.btn_clear').click(function() {
     $(this)
       .parent()
       .find('input')
       .val('')
     $(this).hide()
   })
 
   $('#log_out').click(function() {
     delCookie('login_account')
     $('.stateno').show()
     $('.stateyes').hide()
   })
 })
 
 //获取url某一字段值
 function getQueryString(name) {
   var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
   var r = window.location.search.substr(1).match(reg)
   if (r != null) {
     return unescape(r[2])
   }
   return null
 }
 
 window.onload = function() {
   $('.swiper-container').length > 0 &&
     $('.swiper-container').each(function() {
       if ($(this).find('.swiper-slide').length > 1) {
         new Swiper($(this), {
           loop: true,
           autoplay: {
             delay: 3000,
             disableOnInteraction: false
           },
           pagination: {
             el: '.swiper-pagination',
             clickable: true,
           },
           navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
           },
         })
         $(this)
           .find('.swiper-button-next')
           .show()
         $(this)
           .find('.swiper-button-prev')
           .show()
         $(this)
           .find('.swiper-pagination')
           .show()
       } else {
         $(this)
           .find('.swiper-button-next')
           .hide()
         $(this)
           .find('.swiper-button-prev')
           .hide()
         $(this)
           .find('.swiper-pagination')
           .hide()
       }
     })
 
   $('.pay_now').length > 0 &&
     $('.pay_now').click(function() {
       alert('本充值系统暂不开放！')
     })
 }
 