const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method to return system uptime in sec
console.log("The System uptime is " + os.uptime() + " Seconds");

// creating Object having os info.
const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS);