
const  fs = require('fs');

const createElement = () => {
  const currentDate = new Date();
  const sendDate = `Date : ${currentDate.getDate()} / ${currentDate.getMonth()+1 } / ${currentDate.getFullYear()} \n Time : ${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`
  const pathName = currentDate.toISOString().replace(/[-T:.]/g, "_").slice(0, -5); // Format: YYYY-MM-DDTHH_MM_SS
  // fs.mkdirSync('./API')  //To Create Folder In Root Folder  ---> API
  fs.writeFileSync(`./API_KEY/${pathName}.txt`, pathName);  //Create file and addind inside API 
  return sendDate;
};
 module.exports = {createElement}       