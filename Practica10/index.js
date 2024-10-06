

const os = require('os');
console.log('Sistema operativo:', os.platform());

const platform = os.platform();
console.log(platform);

const nameOs = os.type();
console.log(nameOs);

const uptime = os.uptime();
console.log(uptime);

const totalMemory = os.totalmem();  
console.log(totalMemory);

const cpuArch = os.arch();
console.log(cpuArch);

const cpuCoreLogic = os.cpus();
console.log(cpuCoreLogic);

const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);