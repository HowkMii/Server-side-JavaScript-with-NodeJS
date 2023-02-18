const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;

   // write logic here 
   if(cycling <=0 || running <=0|| swimming <=0|| extraCalorieInTake <=0){
      return -1
   }else{
      let weightLostInAWeek = (cycling*2)+(running*2)+(swimming*2)
      weightLostInAMonth = ((weightLostInAWeek*4)-(extraCalorieInTake*30))/1000
      console.log('result=',weightLostInAMonth)
      return weightLostInAMonth;

   }
   
   
}

calculateWeightLostInAMonth(500,300,400,100)
module.exports = calculateWeightLostInAMonth

