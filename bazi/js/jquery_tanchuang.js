/**
 * @file        基于jQuery的弹窗组件
 * @author      龙泉 <yangtuan2009@126.com>
 * @version     1.0.0
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD module
    define(['jquery'], factory);
  } else if (typeof module !== "undefined" && module.exports) {
    // Node/CommonJS
    // Seajs build
    factory(require('jquery'));
  } else {
    // 浏览器全局模式
    factory(jQuery);
  }
})(function($) {
  var closeClass = '.j_dialogClose';

  // 默认参数配置
  var dialogDef = {
    id: '', // 如果页面中存在多个样式的弹窗，可用ID区别样式
    title: 'Title',
    isFixed: true,
    hideHeader: false,
    hideClose: false,
    content: null,
    callback: null,
    withNoPadding: false, // 是否不设置padding
    withNoMinWidth: false, // 是否不设置最小宽度
    bgHide: true, // 点击背景是否隐藏
    escHide: true // 按ESC按键是否隐藏
  };

  // 全局变量
  var dialogConfig = {
    windows: $(window),
    lightbox: '.tanchuang-background',
    section: '.tanchuang-section',
    imageTag: '.dialog-imageitem',
    imageData: {},
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    paddingWidth: 0,
    paddingHeight: 0,
    resizeParams: ['.tanchuang-section']
  };

  // 用户传递过来的参数集
  var dialogOpts = {};

  // 基础实现
  var Dialog = {
    /**
     * 显示dialog弹窗
     * @param  {Object} opts 配置选项
     * @return {undefined}
     */
    show: function(opts) {
      dialogOpts = $.extend({}, dialogDef, opts || {});

      if (opts.content) {
        Dialog.dialog(opts);
      } else {
        Dialog.lightbox(opts);
      }

      // 初始化时执行的回调函数
      typeof dialogOpts.onInit === 'function' && dialogOpts.onInit();

      // 改变浏览器大小时，动态改变内容显示盒子的位置
      dialogConfig.windows.on('resize', function() {
        Dialog.settings.apply(window, dialogConfig.resizeParams);
      });
    },

    /**
     * 关闭dialog弹窗
     * @param  {Function} callback 回调函数
     * @return {undefined}
     */
    hide: function(callback) {
      var oLightBox = $(dialogConfig.lightbox);
      var oSection = $(dialogConfig.section);

      if (dialogOpts.isFixed) {
        oSection.animate({
          marginTop: -(dialogConfig.top - 150),
          opacity: 0
        });
      } else {
        oSection.animate({
          top: (dialogConfig.top + 150),
          opacity: 0
        });
      }

      oLightBox.fadeOut(function() {
        oLightBox.remove();
        oSection.remove();
        callback && callback();
      });
    },

    dialog: function(opts) {
      Dialog.install(opts);
      dialogConfig.resizeParams = [dialogConfig.section, true, true];
      Dialog.settings.apply(window, dialogConfig.resizeParams);
    },

    lightbox: function(opts) {
      var clickObj_src = opts.clickObj.attr('data-src') || opts.clickObj.attr('data-image');
      dialogConfig.now = 0;
      Dialog.getImages_src(dialogOpts.imagelist);
      Dialog.loadImage(clickObj_src, true, Dialog.settings);
      Dialog.getNow(clickObj_src);
    },

    install: function(opts) {
      var oBody = $('body');
      var headerHtml = '<div class="dialog-header">' + dialogOpts.title + '</div>';
      var closeHtml = '<div class="tanchuang-close j_dialogClose"></div>';
      var markId = '';
      var addClass = '';
      var $background = oBody.find(dialogConfig.lightbox);

      if (!dialogOpts.content) {
        var content = '<div class="tanchuang-imagelist">' + '  <img src="" class="dialog-imageitem" />' + '</div>' + '  ' + '<span class="dialog-btnPrev">&lt;</span>' + '<span class="dialog-btnNext">&gt;</span>';
      } else {
        var content = dialogOpts.content;
      }

      if (dialogOpts.hideHeader) {
        headerHtml = '';
      }

      if (dialogOpts.hideClose) {
        closeHtml = '<div class="tanchuang-close j_dialogClose" style="display: none;"></div>';
      }

      if (dialogOpts.id) {
        markId = ' id="' + dialogOpts.id + '"';
      }

      var plugs_lightbox = '<div class="tanchuang-background' + (dialogOpts.bgHide ? ' j_bgHide' : '') + '"></div>';
      var plugs_lightbox_section = '<div class="tanchuang-section' + (dialogOpts.escHide ? ' j_escHide' : '') + '" ' + markId + '>' + headerHtml + '<div class="tanchuang-body' + (dialogOpts.withNoPadding ? ' withNoPadding' : '') + (dialogOpts.withNoMinWidth ? ' withNoMinWidth' : '') + '">' + content + '</div>' + closeHtml + '</div>';

      // 如果之前有打开弹窗，先将其关闭
      if ($background.length) {
        $background.stop().fadeIn();
        oBody.find(dialogConfig.section).remove();
      } else {
        oBody.append(plugs_lightbox)
      }

      oBody.append(plugs_lightbox_section);
      $(dialogConfig.lightbox).fadeIn();
      $(dialogConfig.section).show();

      var iPaddingWidth = $(dialogConfig.section).outerWidth() - $(dialogConfig.section).width();
      var iPaddingHeight = $(dialogConfig.section).outerHeight() - $(dialogConfig.section).height();

      dialogConfig.paddingWidth = iPaddingWidth;
      dialogConfig.paddingHeight = iPaddingHeight;
      dialogOpts.callback && dialogOpts.callback();
    },

    getNow: function(loadImage_src) {
      for (var i = 0, len = dialogConfig.images.length; i < len; i++) {
        if (loadImage_src === dialogConfig.images[i]) {
          dialogConfig.now = i;
        }
      }
    },

    getImages_src: function(images) {
      var images = (typeof images == 'string') ? $(images) : images;
      dialogConfig.images = [];

      for (var i = 0, len = images.length; i < len; i++) {
        var currentImage = images.eq(i);
        var currentImage_src = currentImage.attr('data-src') || currentImage.attr('data-image');
        var currentImage_src = $.trim(currentImage_src);
        if (currentImage_src !== '') {
          dialogConfig.images.push(currentImage_src);
        }
      }
    },

    loadImage: function(loadImage_src, isMove, callback) {
      var image = new Image();
      image.onload = function() {
        if ($('.tanchuang-section').length === 0) {
          Dialog.install(dialogOpts);
          $('.dialog-btnPrev').on('click', function() {
            Dialog.switchImage(false, false);
          });
          $('.dialog-btnNext').on('click', function() {
            Dialog.switchImage(true, false);
          });
        }

        Dialog.setBtnSate();

        var section = $(dialogConfig.section);
        var imageTag = $(dialogConfig.imageTag);

        dialogConfig.imageData = {
          width: this.width,
          height: this.height,
          src: loadImage_src
        };

        dialogConfig.resizeParams = [section, imageTag, isMove];
        callback && callback.apply(window, dialogConfig.resizeParams);
      }
      image.src = loadImage_src;
    },

    switchImage: function(d, isMove) {
      if (d) {
        dialogConfig.now++;
      } else {
        dialogConfig.now--;
      }

      if (dialogConfig.now < 0) {
        dialogConfig.now = dialogConfig.images.length - 1;
      }

      if (dialogConfig.now > dialogConfig.images.length - 1) {
        dialogConfig.now = 0;
      }

      var loadImage_src = dialogConfig.images[dialogConfig.now];
      Dialog.loadImage(loadImage_src, isMove, Dialog.settings);
    },

    setBtnSate: function() {
      if (dialogConfig.images.length < 2) {
        $('.dialog-btnPrev, .dialog-btnNext').hide();
      }
    },

    // 设置内容显示盒子的大小，位置
    settings: function(section, imageTag, isMove) {
      var section = (typeof section == 'string') ? $(section) : section;
      var winHeight = $(window).height();

      if (!dialogOpts.content) {
        var sectionHeight = 116, // 外围容器默认的高度，为了方便，这里暂时使用固定值，后期改版再做调整
          configWidth = dialogConfig.imageData.width,
          configHeight = dialogConfig.imageData.height;
        dialogConfig.width = configWidth;
        dialogConfig.height = configHeight;
        if (sectionHeight + dialogConfig.height > winHeight) {
          dialogConfig.height = winHeight - sectionHeight - 50;
          dialogConfig.height = dialogConfig.height < 500 ? 500 : dialogConfig.height;
          dialogConfig.width = Math.round(dialogConfig.width * (dialogConfig.height / configHeight));
        }
      } else {
        section.css({
          left: '0px'
        }); // 固定布局时，容器的left应该为0，样式文件不好修改，暂时在这里调整
        dialogConfig.width = section.width();
        dialogConfig.height = section.height();
      }

      var outerWidth = dialogConfig.width + dialogConfig.paddingWidth;
      var outerHeight = dialogConfig.height + dialogConfig.paddingHeight + $('.dialog-header').outerHeight();

      if (typeof imageTag === 'object') {
        imageTag.hide().attr('src', dialogConfig.imageData.src).css({
          width: dialogConfig.width,
          height: dialogConfig.height
        }).fadeIn();
      }

      if (dialogOpts.isFixed) {
        dialogConfig.left = Math.floor(outerWidth / 2);
        dialogConfig.top = Math.floor(outerHeight / 2);
        section.css({
          position: 'fixed',
          left: '50%'
        });

        if (isMove) {
          section.css({
            marginLeft: -dialogConfig.left,
            marginTop: -dialogConfig.top
          });
        } else {
          section.animate({
            marginLeft: -dialogConfig.left,
            marginTop: -dialogConfig.top
          }, {
            queue: false
          });
        }
      } else {
        var scrollLeft = dialogConfig.windows.scrollLeft();
        var scrollTop = dialogConfig.windows.scrollTop();
        var windowWidth = $(dialogConfig.lightbox).width();

        dialogConfig.left = Math.floor((windowWidth - outerWidth) / 2) + scrollLeft;
        dialogConfig.top = Math.floor((winHeight - outerHeight) / 2) + scrollTop;
        section.css({
          position: 'absolute',
          marginLeft: 0,
          marginTop: 0
        });

        if (isMove) {
          section.css({
            left: dialogConfig.left,
            top: dialogConfig.top
          });
        } else {
          section.animate({
            left: dialogConfig.left,
            top: dialogConfig.top
          }, {
            queue: false
          });
        }
      }

      if (imageTag) {
        Dialog.move(section, isMove);
      }
    },

    // 显示时的动画效果
    move: function(section, isMove) {
      if (dialogOpts.isFixed && isMove) {
        section.css({
          marginTop: -(dialogConfig.top - 150)
        }).animate({
          marginTop: -dialogConfig.top,
          opacity: 1
        }, function() {
          section.css('overflow', 'visible');
        });
      } else if (isMove) {
        section.css({
          top: (dialogConfig.top + 150)
        }).animate({
          top: dialogConfig.top,
          opacity: 1
        }, function() {
          section.css('overflow', 'visible');
        });
      }

      section.animate({
        width: dialogConfig.width
      }, {
        queue: false
      });
    },

    // 取消默认事件
    cancelDefault: function(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // 弹窗类公共处理函数封装
  $.extend({

    sendMsg: function(msg, duration, callback, iconStr) {
      // 缺省duration参数
      if ($.isFunction(duration)) {
        callback = duration;
        duration = undefined;
      }

      var content = '<div class="dialog-msg">' + '    <div class="dialog-msg-text">' + (iconStr || '') + msg + '</div>' + '</div>';

      var _options = {
        id: 'dialogTipBox',
        title: ' ',
        hideHeader: true,
        hideClose: false,
        content: content,
        callback: duration === false ? null : function() {
          // 自动隐藏
          clearTimeout(window.timerDialogHide);
          window.timerDialogHide = setTimeout(function() {
            $(closeClass).trigger('click');
          }, duration || 3000);
        },
        onClose: function() {
          typeof callback === 'function' && callback();
        }
      };

      Dialog.show(_options);
    },


    /**
     * 发送确认提示框
     * @param  {Object} options 配置选项
     * @return {undefined}
     */
    sendConfirm: function(options) {



      // 弹窗内容
      var content = '<div class="dialog-confirm' + appendClass + '"' + appendStyle + '>' + (options.msg === '' ? '' : '<div class="dialog-msg">' + options.msg + '</div>') + (options.desc === '' ? '' : '<div class="dialog-desc">' + options.desc + '</div>') + (options.content === '' ? '' : '<div class="dialog-content">' + options.content + '</div>') + (buttonContent) + '</div>';
      options.content = content;

      // 自动隐藏选项
      if (options.autoClose) {
        var _callbackCopy = options.callback || $.noop;
        options.callback = function() {
          _callbackCopy();
          // 自动隐藏
          clearTimeout(window.timerDialogHide);
          window.timerDialogHide = setTimeout(function() {
            $(closeClass).trigger('click');
          }, options.timeout);
        };
      }

      Dialog.show(options);
    }
  });

  // 相关事件绑定
  (function() {
    var $doc = $(document);

    // 绑定：用于关闭对话弹窗
    $doc.on('click', closeClass, function() {
      var $that = $(this), beforeReturn;

      // 如果返回false，则表示中断关闭弹窗
      typeof dialogOpts.onBeforeClose === 'function' && (beforeReturn = dialogOpts.onBeforeClose($that));
      if (beforeReturn === false) return;

      clearTimeout(window.timerDialogHide);
      Dialog.hide(function() {
        if (typeof dialogOpts.onClose === 'function') {
          dialogOpts.onClose($that, beforeReturn);
        }
      });
    });


    // 绑定：用于执行弹窗的取消操作
    $doc.on('click', '.j_dialogCancel', function() {
      var $that = $(this), beforeReturn;

      // 如果返回false，则表示中断关闭弹窗
      typeof dialogOpts.onBeforeCancel === 'function' && (beforeReturn = dialogOpts.onBeforeCancel($that));
      if (beforeReturn === false) return;

      clearTimeout(window.timerDialogHide);
      Dialog.hide(function() {
        if (typeof dialogOpts.onCancel === 'function') {
          dialogOpts.onCancel($that, beforeReturn);
        }
      });
    });

    // 绑定：点击弹窗遮罩层关闭弹窗
    $doc.on('click', '.j_bgHide', function() {
      $(closeClass).trigger('click');
    });

    // 绑定：按ESC按键关闭弹窗
    $doc.on('keyup', function(ev) {
      if (ev.keyCode == 27 && $('.j_escHide').length) {
        $(closeClass).trigger('click').removeClass('j_dialogClose');
      }
    });
  })();

  // 使用$.dialog()进行访问
  $.dialog = Dialog.show;
  $.dialogClose = Dialog.hide;
});