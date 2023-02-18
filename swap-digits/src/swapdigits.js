const swapDigits = (number)=>{
    let swappedNumber = 0
    if(number > 0){
        let digits = number.toString().split('');
    if(digits.length % 2 == 0){
        for (let i = 0; i < digits.length - 1; i += 2) {
            let temp = digits[i];
            digits[i] = digits[i + 1];
            digits[i + 1] = temp;
          }
    }else{
        for (let i = 1; i < digits.length - 1; i += 2) {
            let temp = digits[i];
            digits[i] = digits[i + 1];
            digits[i + 1] = temp;
          }
    } 
    swappedNumber= parseInt(digits.join('')); 
    console.log(swappedNumber) 
    return swappedNumber;
    }else{
        return 0
    }
        
    
    
}

swapDigits(12345)
module.exports = swapDigits
