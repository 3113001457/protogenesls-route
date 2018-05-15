//内容侧边烂
$(".contain_list li").eq(0).css("display","block")
$(".sidbar_list li").click(function (argument) {
    $(".contain_list li").eq($(this).index()).css("display","block").siblings().css("display","none")
})