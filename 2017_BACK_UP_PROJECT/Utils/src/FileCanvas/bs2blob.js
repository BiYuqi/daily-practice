/**
*   base64图片转为blob文件 可用formdata进行上传操作
*   @param {bs64} {string}
*/
export const bstoblob = (bs64) => {
    const type = bs64.match(/data:([^;]+)/)[1]
    const bsstr = atob(bs64.split(',')[1])
    const len = bsstr.length

    const blob = new Uint8Array(len)

    for(let i=0; i<len;i++){
        blob[i] = bsstr.charCodeAt(i)
    }
    return new Blob([ blob ], { type: type })
}
