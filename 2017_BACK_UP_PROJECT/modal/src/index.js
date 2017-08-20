;(function(window){
    class Modal {
        constructor(options) {
            this.options = options || ''


        }

        $tpl(status) {
            const tpl1 = `<div class="v-my-modal">
                            <div class="v-my-modal-corver">
                                </div><div class="v-my-modal-main">`
            const header = `<div class="v-my-title">
                                <span class="v-my-close">&times;</span>
                            </div>`
            const main1 = `<div class="v-my-con">`
            const main2 = ` ${status === 'error' ?
                            `<p class="v-detail-title">认证失败</p>
                            <p class="v-detail" style="text-align:left">支持手机和pad，所以修改为移动端</p>`
                            :`<p class="v-detail" style="text-align:center">支持手机和pad，所以修改为移动端</p>`}`
            const main3 = `</div>`
            const tips = `<div class="v-my-modal">
                                <div class="v-my-modal-main" style="width:200px;height:50px;text-align:center;line-height:50px;background-color:#79B9D1;color:#fff;">
                                <div class="v-my-modal-tips">操作成功</div>
                                </div>
                            </div>`
            const footer = `<div class="v-my-btn">
                                <span class="v-my-btn-item v-my-btnNo">取消</span>
                                <span class="v-my-btn-item v-my-btnOk">确定</span>
                            </div>`
            const tpl2 = `</div></div>`

            const main = main1+main2+main3
            if(status === 'error'){
                return tpl1+header+main+tpl2
            }
            if(status === 'tips'){
                return tips
            }
            if(status === 'success'){
                return tpl1+header+main+footer+tpl2
            }
        }

        $part() {
            const tpl = this.$tpl('error')
            this.renderHtml(tpl)
            $('.v-detail').text(this.options.tips)
            $('.v-detail-title').text(this.options.tipsTitle)
            this.bindEvents()
        }

        $all() {
            const tpl = this.$tpl('success')
            this.renderHtml(tpl)
            $('.v-detail').text(this.options.tips||'默认')
            $('.v-detail-title').text(this.options.tipsTitle||'默认')
            this.bindEvents()
        }

        $tips() {
            const tpl = this.$tpl('tips')
            this.renderHtml(tpl)
            const that = this;
            $('.v-my-modal-tips').text(this.options.tips||'默认')
            setTimeout(()=>{
                that.removeHtml()
            },this.options.timeout || 2000)
        }

        renderHtml(tpl) {
            $('body').append(tpl)
            $('.v-my-modal').addClass('active')
        }
        removeHtml() {
            $('.v-my-modal').removeClass('active')
            $('.v-my-modal').remove()
        }
        bindEvents() {
            const that = this;
            $('body').on('click','.v-my-close,.v-my-btnNo',function(){
                that.removeHtml()
            })

            $('.v-my-btnOk').on('click',function(){
                that.options.btnFn && that.options.btnFn()
                that.removeHtml()
            })
        }
    }

    window.Modal = (options)=>{
        return new Modal(options)
    }
})(window)
