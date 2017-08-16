'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function (window) {
    var Modal = function () {
        function Modal(options) {
            _classCallCheck(this, Modal);

            this.options = options || '';

            this.bindEvents();
        }

        _createClass(Modal, [{
            key: '$tpl',
            value: function $tpl(status) {
                var tpl1 = '<div class="v-my-modal">\n                            <div class="v-my-modal-corver">\n                                </div><div class="v-my-modal-main">';
                var header = '<div class="v-my-title">\n                                <span class="v-my-close">&times;</span>\n                            </div>';
                var main1 = '<div class="v-my-con">';
                var main2 = ' ' + (status === 'error' ? '<p class="v-detail-title">\u8BA4\u8BC1\u5931\u8D25</p>\n                            <p class="v-detail" style="text-align:left">\u652F\u6301\u624B\u673A\u548Cpad\uFF0C\u6240\u4EE5\u4FEE\u6539\u4E3A\u79FB\u52A8\u7AEF</p>' : '<p class="v-detail" style="text-align:center">\u652F\u6301\u624B\u673A\u548Cpad\uFF0C\u6240\u4EE5\u4FEE\u6539\u4E3A\u79FB\u52A8\u7AEF</p>');
                var main3 = '</div>';
                var tips = '<div class="v-my-modal">\n                                <div class="v-my-modal-main" style="width:200px;height:50px;text-align:center;line-height:50px;background-color:#79B9D1;color:#fff;">\n                                <div class="v-my-modal-tips">\u64CD\u4F5C\u6210\u529F</div>\n                                </div>\n                            </div>';
                var footer = '<div class="v-my-btn">\n                                <span class="v-my-btn-item v-my-btnNo">\u53D6\u6D88</span>\n                                <span class="v-my-btn-item v-my-btnOk">\u786E\u5B9A</span>\n                            </div>';
                var tpl2 = '</div></div>';

                var main = main1 + main2 + main3;
                if (status === 'error') {
                    return tpl1 + header + main + tpl2;
                }
                if (status === 'tips') {
                    return tips;
                }
                if (status === 'success') {
                    return tpl1 + header + main + footer + tpl2;
                }
            }
        }, {
            key: '$part',
            value: function $part() {
                var tpl = this.$tpl('error');
                this.renderHtml(tpl);
                $('.v-detail').text(this.options.tips);
                $('.v-detail-title').text(this.options.tipsTitle);
            }
        }, {
            key: '$all',
            value: function $all() {
                var tpl = this.$tpl('success');
                this.renderHtml(tpl);
                $('.v-detail').text(this.options.tips || '默认');
                $('.v-detail-title').text(this.options.tipsTitle || '默认');
            }
        }, {
            key: '$tips',
            value: function $tips() {
                var tpl = this.$tpl('tips');
                this.renderHtml(tpl);
                var that = this;
                $('.v-my-modal-tips').text(this.options.tips || '默认');
                setTimeout(function () {
                    that.removeHtml();
                }, this.options.timeout || 2000);
            }
        }, {
            key: 'renderHtml',
            value: function renderHtml(tpl) {
                $('body').append(tpl);
                $('.v-my-modal').addClass('active');
            }
        }, {
            key: 'removeHtml',
            value: function removeHtml() {
                $('.v-my-modal').removeClass('active');
                $('.v-my-modal').remove();
            }
        }, {
            key: 'bindEvents',
            value: function bindEvents() {
                var that = this;
                $('body').on('click', '.v-my-close,.v-my-btnNo', function () {
                    that.removeHtml();
                });

                $('body').on('click', '.v-my-btnOk', function () {
                    that.options.btnFn && that.options.btnFn();
                    that.removeHtml();
                });
            }
        }]);

        return Modal;
    }();

    window.Modal = function (options) {
        return new Modal(options);
    };
})(window);