
const PerformanceCalculator=(runs,balls)=>{
      // Write the Logic here
      let percent = 0;
      if (runs > 30 && balls < 15) {
      percent += 0.01;
      }
      if (runs > 50 && balls < 20) {
      percent += 0.1;
      }
      if (runs > 100 && balls < 50) {
      percent += 0.2;
      }
      let average = runs / balls;
      average *= (1 + percent);

      return average

}

module.exports={PerformanceCalculator}
