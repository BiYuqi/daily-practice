/**
*   真随机函数
*
*/
export default function shuffle(arr){
    const len = arr.length
    var a = 0
    for(let i=0;i<len;i++){
        const randomIndex = Math.floor(Math.random()*(i+1))
        const randomValue = arr[randomIndex]
        arr[randomIndex] = arr[i]
        arr[i] = randomValue
    }
    // for(let i = len-1;i >= 0;i--){
    //     let randomIndex = Math.floor(Math.random()*(i+1));
    //     [arr[randomIndex], arr[i]] = [arr[i], arr[randomIndex]]
    // }
    return arr
}
