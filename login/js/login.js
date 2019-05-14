// 保证页面DOM加载完成并且能够成功获取
;$(function($){
    // 点击验证码登录
    $(".isyancode").click(function(){
        $(this).hide();
        $(".pwd").hide();
        $(".ispwd").show();
        $(".yanzheng").show();
    });
    // 点击密码登录效果
    $(".ispwd").click(function(){
        $(this).hide();
        $(".yanzheng").hide();
        $(".isyancode").show();
        $(".pwd").show();
    });
    // 表单提交事件,获取表单序列化数据
    $("#sumbit").click(function(event){
        event.preventDefault();
        console.log('表单数据',$("#form").serializeArray())
        $(this).hide();
        $(".logining").show();
    })
})