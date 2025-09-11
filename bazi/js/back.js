document.write("<a style='right:13px;bottom:13px;position:fixed;opacity:0.31;z-index:311;cursor:default;' href='javascript:history.back(-1);'><img src='img/app_back2.png'></a>");

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




