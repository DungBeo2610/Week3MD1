function minArray(arr) {
    if(arr.length ==0)
        return -1;
    let min = arr[0];
    for(let i = 1; i < arr,length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
        return min;
}
let arr1 = [1,4,2,6,8,-2];
let min = minArray(arr1);
alert(min);
