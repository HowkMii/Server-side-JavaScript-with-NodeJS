// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve, reject) => {
        // Check if any of the input values are not numbers
        if (
          typeof math !== "number" ||
          typeof english !== "number" ||
          typeof science !== "number" ||
          typeof social !== "number" ||
          typeof language !== "number"
        ) {
            reject("Null values for marks");
        }
    
        // Calculate the total marks
        const totalMarks = math + english + science + social + language;
    
        // Resolve the Promise with the total marks
        resolve(totalMarks);
      });
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve, reject) => {
        // Check if the input value is not a number
        if (typeof totalMarks !== "number") {
            reject("Null values for marks");
        }
    
        // Calculate the average marks
        const averageMarks = totalMarks / 5;
    
        // Resolve the Promise with the average marks
        resolve(averageMarks);
      });
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>{
    return new Promise((resolve, reject) => {
        // Check if the input value is not a number
        if (typeof averageMarks !== "number") {
          reject("Null values for marks");
        }
    
        // Calculate the grade based on the average marks
        let grade;
        if (averageMarks >= 90) {
          grade = "A+";
        } else if (averageMarks >= 80) {
          grade = "A";
        } else if (averageMarks >= 70) {
          grade = "B";
        } else if (averageMarks >= 60) {
          grade = "C";
        } else if (averageMarks >= 50) {
          grade = "E";
        } else {
          grade = "F";
        }
    
        // Resolve the Promise with the grade
        resolve(grade);
      });
    };

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
