class Calculator{
    constructor(ini){
        this.ini= ini;
    }
    add(val){
        this.ini = this.ini+val;
        return this;
    }
    subtract(val){
        this.ini = this.ini-val;
        return this;
    }
    multiply(val){
        this.ini = this.ini*val;
        return this;
    }
    divide(val){
        if (val === 0) {
            console.log("Division by zero is not allowed.");
            this.ini = NaN; 
            return this; 
        }
        this.ini /= val;
        return this;
    }
    power(val){
        this.ini = this.ini**val;
        return this;
    }
    getResult(){
        if (isNaN(this.ini)) {
            return; 
        }
        console.log(this.ini);
        return this;
    }
}
function operate(actions, values)
{
    var obj1 = new Calculator(values[0]);
    for(let i=1;i<actions.length;i++ ){
        if(actions[i]==="add"){
            obj1 = obj1.add(values[i]);
        }
        else if(actions[i]==="subtract"){
            obj1 = obj1.subtract(values[i]);
        }
        else if(actions[i]==="multiply"){
            obj1 = obj1.multiply(values[i]);
        }
        else if(actions[i]==="getResult"){
            obj1 = obj1.getResult();
        }
        else if(actions[i]==="divide"){
            obj1 = obj1.divide(values[i]);
        }else if(actions[i]==="power"){
            obj1 = obj1.power(values[i]);
        }else{
            console.log("not proper method hence stopped !!!")
            return;
        }
    }

}
// Example 1
operate(["Calculator", "add", "subtract", "getResult"], [10, 5, 7]);
// Example 2
operate(["Calculator", "multiply", "power", "getResult"], [2, 5, 2]);
// Example 3
operate(["Calculator", "divide", "getResult"], [20, 0]);