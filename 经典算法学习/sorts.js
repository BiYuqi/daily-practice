/**
*   冒泡排序
*/

const bubbleSorts = arr => {
    let len = arr.length
    for(let i=0;i<len-1;i++){
        for(let j=0;j<len-1-i;j++){
            if(arr[j] > arr[j+1]){
                let smaller = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = smaller
            }

        }
    }
    return arr
}

const arr = [2,4,22,65,78,21,9,100]
console.log(bubbleSorts(arr))

/**
*   洗牌算法 shuffler
*/
const shuffler = arr => {
    for(let i=arr.length-1;i>=0;i--){
        let randomIndex = ~~(Math.random()*(i+1))
        let randomVal = arr[randomIndex]

        arr[randomIndex] = arr[i]
        arr[i] = randomVal
    }
    return arr
}

const shuarr = [1,2,3,4,5,6,7,8,9]
console.log(shuffler(shuarr))
