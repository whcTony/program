// define(['jquery','cookie'], function($) {
//   // 实现登录功能
//   $('#login').click(function() {
//     var formdata = $('#loginForm').serialize();
//     $.ajax({
//       type: 'post',
//       url: '/api/login',
//       data: formdata,
//       dataType: 'json',
//       success: function(data) {
//         if (data.code == 200) {
//           // 先保存cookie
//           $.cookie('loginInfo',JSON.stringify(data.result),{path : '/'});
//           // 登录成功，跳转到主页面
//           location.href = '/main/index'
//         } else {
//           alert('用户名或者密码错误');
//         }
//       }
//     });
//     return false;
//   });
// });


define(['jquery','cookie'],function($){
  //实现登录功能
$('#login').click(function(){
       //serialize 获取页面中的表单元素
       var formdata = $('#loginForm').serialize();
       console.log(formdata);
        $.ajax({
            type:'post',
            url:'/api/login',
            data:formdata,//全选
            dataType:'json',
            success:function(data){
                   console.log(data);
                   if(data.code == 200){
                    //先保存cookie
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    //登陆成功,跳转到主页面
                    location.href ='/main/index';

                   }else{
                    alert('用户名或者密码错误');
                   }
            }
        });
        return false //阻止跳转
     });
});