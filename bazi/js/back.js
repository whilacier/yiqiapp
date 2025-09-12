

var style = document.createElement('style');
style.innerHTML = ''+
''+
'';
document.head.appendChild(style);




$('#buttontz1').on('click', function() {
$('#buttontz2').click();
}); //点击id=buttontz1会自动触发id=buttontz2， scrollIntoView(); 不一定是按钮，别的 div span td 等其他的都可以测试

const loadMoreButton = document.getElementById('bottom');
function scrollToLoadMore() {
loadMoreButton.scrollIntoView({ behavior: 'smooth', block: 'end' });
}  //onclick=scrollIntoView(); 点击转到页面最底部



function sqanniu(){document.getElementById('anniuclose').style.display='';document.getElementById('anniuneirong').style.display='none';document.getElementById('anniuopen').style.display='none';}
function ckanniu(){document.getElementById('anniuclose').style.display='none';document.getElementById('anniuneirong').style.display='';document.getElementById('anniuopen').style.display='';}
document.write("<span id='anniuopen' onclick='sqanniu();' style='display:none;'>");
document.write("<a style='right:3.1px;bottom:3.1px;position:fixed;opacity:0.68;z-index:319;cursor:default;'><img src='img/app_caidan.png'></a>");
document.write("<div style='width:78%;margin-left:13px;bottom:13px;position:fixed;background-color: white; box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.13);'><iframe name='container_ifranme2' width='100%' height='150.86px' style='margin:0px;' id='iframeIds' scrolling='yes' frameborder='no' border='0' src='save_menu.html' onLoad='iFrameHeight()' ></iframe></div>");
document.write("</span>");

document.write("<span id='anniuclose' onclick='ckanniu();' style='right:3.1px;bottom:3.1px;position:fixed;opacity:0.31;z-index:319;cursor:default;'><img src='img/app_caidan.png'></span>");

document.write("<span id='anniuneirong' style='display: none'>");
document.write("<a style='right:3.1px;bottom:239px;position:fixed;opacity:0.68;z-index:319;cursor:default;' onclick=copy();testApp('weixin://');><img src='img/app_share.png'></a>");
document.write("<a style='right:3.1px;bottom:178px;position:fixed;opacity:0.68;z-index:319;cursor:default;' onclick='javascript:history.back(-1);'><img src='img/app_back2.png'></a>");
document.write("<a style='right:3.1px;bottom:119px;position:fixed;opacity:0.68;z-index:319;cursor:default;' target='container_ifranme2' href='save_menu.html' onclick=saveindex('skyx_index100','list100',100)><img src='img/app_jia.png'></a>");
document.write("<div class='jishibenclick' style='right:3.1px;bottom:62px;position:fixed;opacity:0.68;z-index:319;cursor:default;'><a style='cursor:default;' href='javascript:void(13);'><img src='img/app_input_2.png'></a></div>");
document.write("</span>");






document.write("<div style='opacity:0;display:none;'><img src='img/app_input.png'></div>");

document.write("<div style='height:0px;position:relative;bottom:55px;right:1.3px;z-index:113;'>");
document.write("<textarea id='copy-one' style='width:0.1px;height:0.1px;border:0px solid #FFF;' readonly='readonly'>");
document.write("一、预测排盘（直接给结果）无需费脑测算\n");
document.write("二、穴位计算（直接给穴位）时辰干支配穴\n");
document.write("三、健康调理（直接给方法）各种民间绝技\n");
document.write("四、风水堪舆（布局给方法）无需东掐西算\n");
document.write("五、易医工具（数百个工具）很多民间方法\n");
document.write("六、养生万年历时刻关注您身体需要做什么\n");
document.write("七、查先天疾患→测后天体质→调身体疾病\n");
document.write("\n");
document.write("关注公众号下载免费使用 ➜ #时空易学\n");
document.write("https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5NDgxNTkyNw==");
document.write("\n");
document.write("\n");
document.write("https://pan.baidu.com/s/1HkEAtePz0FZyZkMmROpOjA?pwd=1319");
document.write("\n");
document.write("百度网盘App，操作更方便哦");
document.write("\n");
document.write("\n");
document.write("中医大师，易经大师必备App");
document.write("</textarea>");
document.write("</div>");


    function copy() {
        const input = document.getElementById('copy-one')
        input.select() // 选中内容
        document.execCommand('Copy') // 执行浏览器复制命令
        alert("✅复制成功！可以去微信 [粘贴] 分享功德无量！")
    }

     function testApp(url) { 
           var timeout, t = 1000, hasApp = true; 
           setTimeout(function () { 
             if (!hasApp) { 
                 //没有安装微信
                 //var r=confirm("您没有安装微信，请先安装微信!");
                 //if (r==true){
                 //    location.href="http://weixin.qq.com/"
                 //}
             }else{
                 //安装微信
             }
             document.body.removeChild(ifr); 
           }, 2000) 
           var t1 = Date.now(); 
           var ifr = document.createElement("iframe"); 
           ifr.setAttribute('src', url); 
           ifr.setAttribute('style', 'display:none'); 
           document.body.appendChild(ifr); 
           timeout = setTimeout(function () { 
              var t2 = Date.now(); 
              if (!t1 || t2 - t1 < t + 100) { 
                hasApp = false; 
              } 
           }, t); 
         } 









$(function () {
    H_login = {};
    H_login.openLogin = function(){
        $('.jishibenclick a').click(function(){
            $('.loginjishiben').show();
            $('.login-bg').show();
        });
    };
    H_login.closeLogin = function(){
        $('.close-loginjishiben').click(function(){
            $('.loginjishiben').hide();
            $('.login-bg').hide();
        });
    };

    H_login.run = function () {
        this.closeLogin();
        this.openLogin();
        this.loginForm();
    };
    H_login.run();
});
var style = document.createElement('style');
style.innerHTML = ''+
'.loginjishiben{width:95%;position:fixed;border:#ebebeb solid 1px;height:600px;top:86px;left:2%;display:none;background:#ffffff;box-shadow:0px 0px 20px #ddd;z-index:9999;}'+
'.loginjishiben-title{width:97%;margin:10px 0px 0px 0px;text-align:center;line-height:40px;height:40px;font-size:18px;position:relative;font-weight:900;}'+
'.loginjishiben-title span{position:absolute;font-size:12px;right:-20px;top:-30px;background:#ffffff;border:#ebebeb solid 1px;width:40px;height:40px;border-radius:20px;}'+
'.loginjishiben-title span a{display:block;}'+

'.back-loginjishiben{position:absolute;font-size:12px;left:20px;top:0px;background:#ffffff;border:#ebebeb solid 1px;border-radius:20px;}'+
'.jishibenclick{font-size:14px;}';
document.head.appendChild(style);
document.write("<div class='loginjishiben'><div class='loginjishiben-title'>&emsp;记事本<span><a href='javascript:void(13);' class='close-loginjishiben' style='color:#000;font-size:12px;text-align:center;'>关闭</a></span></div><iframe name='container_ifranme' width='100%' height='550px' style='padding:0;' id='iframeIds' scrolling='yes' frameborder='no' border='0' src='save.html' onLoad='iFrameHeight()' ></iframe></div>");
















document.addEventListener('plusready', function() {
var webview = plus.webview.currentWebview();
plus.key.addEventListener('backbutton', function() {
webview.canBack(function(e) {
if (e.canBack) {
webview.back();
} else {
//webview.close(); //hide,quit
//plus.runtime.quit();
//首页返回键处理
//处理逻辑：1秒内，连续两次按返回键，则退出应用；
var first = null;
plus.key.addEventListener('backbutton', function() {
//首次按键，提示‘再按一次退出应用’
if (!first) {
first = new Date().getTime();
console.log('再按一次退出应用');
setTimeout(function() {
first = null;
}, 1000);
} else {
if (new Date().getTime() - first < 1500) {
plus.runtime.quit();
}
}
}, false);
}
})
});
});
$(function() {
//alert($(window).height());
$('#ClickMe').click(function() {
$('#code').center();
$('#goodcover').show();
$('#code').fadeIn();
});
$('#closebt').click(function() {
$('#code').hide();
$('#goodcover').hide();
});
$('#goodcover').click(function() {
$('#code').hide();
$('#goodcover').hide();
});
/*var val=$(window).height();
var codeheight=$("#code").height();
var topheight=(val-codeheight)/2;
$('#code').css('top',topheight);*/
jQuery.fn.center = function(loaded) {
var obj = this;
body_width = parseInt($(window).width());
body_height = parseInt($(window).height());
block_width = parseInt(obj.width());
block_height = parseInt(obj.height());

left_position = parseInt((body_width / 2) - (block_width / 2) + $(window).scrollLeft());
if (body_width < block_width) {
left_position = 0 + $(window).scrollLeft();
};

top_position = parseInt((body_height / 2) - (block_height / 2) + $(window).scrollTop());
if (body_height < block_height) {
top_position = 0 + $(window).scrollTop();
};

if (!loaded) {

obj.css({
'position': 'absolute'
});
obj.css({
'top': ($(window).height() - $('#code').height()) * 0.5,
'left': left_position
});
$(window).bind('resize', function() {
obj.center(!loaded);
});
$(window).bind('scroll', function() {
obj.center(!loaded);
});

} else {
obj.stop();
obj.css({
'position': 'absolute'
});
obj.animate({
'top': top_position
}, 200, 'linear');
}
}

})




