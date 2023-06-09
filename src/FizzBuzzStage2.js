export default class FizzBuzzStage2 {
    check(numb) {
        const numberAsString = numb.toString();
        if(numb % 3 == 0 && numb % 5 == 0){
            return "FizzBuzz"
        }else if (numb % 3 == 0 || numberAsString.includes("3") ){
            return  "Fizz"
        }else if(numb % 5 == 0 || numberAsString.includes("5")){
            return  "Buzz"
        }else{
            return numb
        }
    }
    
    FizzBuzzArray() {
        const result = [];
        for (let i = 1; i <= 100; i++) {
            result.push(this.check(i));
        }
        return result;
    }
  
}