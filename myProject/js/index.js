$(function () {
//轮播图
//搜索框绑定事件
    $("div.nav>ul>li:last-child>:first-child").click(function () {
        if($(this).html()==="SEARCH&gt;&gt;") {
            $(this).css("background","red")
            $("div.search>input").css("opacity", 1)
            $(this).html("SEARCH&lt;&lt;")
        }else{
            $(this).css("background","0")
            $("div.search>input").css("opacity", 0)
            $(this).html("SEARCH&gt;&gt;")
        }
    })

//导航栏下拉菜单
  
//登录页面
    $("[data-btn=login]").click(Show)
    $("div.login-page>button").click(Hidden)
    //显示
    function Show() {
        $("div.container").children().css("opacity", 0.4)
        $("div.login-page").css({
            "margin-top": 0,
            "opacity": 1,
            "zIndex": 10
        })
    }
     //隐藏
    function Hidden() {
        $("div.container").children().css("opacity", 1)
        $("div.login-page").css({
            "margin-top": -900,
            "opacity": 0,
        })
    }
//注册页面
    $("[data-btn=reg]").click(Showreg)
    $("div.reg-pag>button").click(Hiddenreg)
    //显示
    function Showreg() {
        $("div.container").children().css("opacity", 0.4)
        $("div.reg-pag").css({
            "margin-top": 0,
            "opacity": 1,
            "zIndex": 10
        })
    }
    //隐藏
    function Hiddenreg() {
        $("div.container").children().css("opacity", 1)
        $("div.reg-pag").css({
            "margin-top": -900,
            "opacity": 0,
        })
    }

})