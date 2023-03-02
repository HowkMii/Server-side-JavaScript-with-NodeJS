
//import OS module
const os = require('os');
//Create a function to get the name of the operating system of host machine.​
function getOSName() {
  return os.platform();
}
//Create a function to get returns the number of free memory of the system in bytes.​
 function getFreeMemory(){
  return os.freemem();
 }
//Create a function to get the information about current user of the system.​
function getCurrentUser(){
  return os.userInfo();
}
//Create a function to get the information of the hostname.
 function getHostName(){
  return os.hostname();
 }
//Create a function to get the information about the CPU.
function getCPUDetails(){
  const cpus = os.cpus();
  const cpuDetails = [];

  for (let i = 0; i < cpus.length; i++) {
    const cpuInfo = cpus[i];

    cpuDetails.push({
      model: cpuInfo.model,
      speed: cpuInfo.speed,
      times: cpuInfo.times,
    });
  }

  return cpuDetails;
}


module.exports = {
  getOSName,
  getFreeMemory,
  getCurrentUser,
  getHostName,
  getCPUDetails 
}