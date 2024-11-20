function isFalsy(num, idx){
    if(num ){
        return false;
    }
    return true;
}
function filter(arr, fn){
    let n=arr.length;
    const newArr = [];
    for(let i=0; i<n; i++){
        if(fn.name === "greaterThan10"){
            if(!isFalsy(arr[i],i) && fn(arr[i])){newArr.push(arr[i]);}
        }
        else if(fn.name === "firstIndex"){
            if(!isFalsy(arr[i],i) && fn(i)){newArr.push(arr[i]);}
        }
        else{
            arr[i]=fn(arr[i]);
            if(!isFalsy(arr[i],i)){newArr.push(arr[i]);}
        }
    }
    return newArr;
}
function ex1(){
    let arr = [0,10,20,30];
    let fn = function greaterThan10(n){ return n > 10; }
    const newArray = filter(arr, fn);
    console.log(newArray);
}
function ex2(){
    let arr = [1,2,3];
    let fn = function firstIndex(i) { return i === 0; }
    const newArray = filter(arr, fn);
    console.log(newArray);
}
function ex3(){
    let arr = [-2,-1,0,1,2];
    let fn = function plusOne(n) { return n + 1 ;}
    const newArray = filter(arr, fn);
    console.log(newArray);
}
ex1();
ex2();
ex3();