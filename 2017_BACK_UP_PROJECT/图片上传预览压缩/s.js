class CompressUpload {
    constructor(file,quality,callback) {
        const reader = new FileReader()
        reader.onload = this.createImage
        reader.readAsDataURL(file)
    }

    createImage() {
        const dataURI = this.result
        const img = new Image()
        img.onload = this.compressImg
        img.src = dataURI
    }
    compressImg() {
        let canvas = document.createElement('canvas'),
            base64,
            result;
        const width = this.naturalWidth
        const height = this.naturalHeight
        const ctx = canvas.getContext('2d')
        ctx.drawImage(this, 0, 0)
        base64 = canvas.toDataURL(this.file.type, this.quality)

        callback(base64ToBlob(base64))
    }

    base64ToBlob(base64) {
        const type = base64.match(/data:([^;]+)/)[1]
        const base = base64.split(',')[1]

        const baseSource = atob(base)

        const len = baseSource.length
        const blob = new Uint8Array(len)

        for(let i=0;i<len;i++){
            blob[i] = baseSource.charCodeAt(i)
        }
        return new Blob([blob],{type:type})
    }

}
