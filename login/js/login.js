// 保证页面DOM加载完成并且能够成功获取
; $(function ($) {
    // 点击验证码登录
    $(".isyancode").click(function () {
        $(this).hide();
        $(".pwd").hide();
        $(".ispwd").show();
        $(".yanzheng").show();
    });
    // 点击密码登录效果
    $(".ispwd").click(function () {
        $(this).hide();
        $(".yanzheng").hide();
        $(".isyancode").show();
        $(".pwd").show();
    });
    // 表单提交事件,获取表单序列化数据
    $("#sumbit").click(function (event) {
        event.preventDefault();
        console.log('表单数据', $("#form").serializeArray())
        $(this).hide();
        $(".logining").show();
    })
    // 倒计时显示处理
    function countDownText(s) {
        $("#timeCut").text(`${s}s后再获取`)
    };
    // 倒计时 60秒 不需要很精准
    function countDown(times) {
        const self = this;
        // 时间间隔 1秒
        const interval = 1000;
        let count = 0;
        self.timeCounter = setTimeout(countDownStart, interval);
        // 定时器中的方法
        function countDownStart() {
            if (self.timeCounter == null) {
                return false;
            }
            count++
            countDownText(times - count + 1);
            if (count > times) {
                $("#timeCut").hide();
                $("#getcode").show();
                clearTimeout(self.timeCounter)
            } else {
                self.timeCounter = setTimeout(countDownStart, interval)
            }
        }
    };
    // 
    $("#getcode").click(function () {
        $('#yancode').css({ width: '57%' })
        $("#timeCut").show();
        $(this).hide();
        countDown(60);
    });

})
