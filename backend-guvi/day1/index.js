/* SYNCHRONOUR CODE
const fs = require('fs');

const content = new Date().toString();

try {
  fs.writeFileSync('./files/time1.txt', content);
  // file written successfully
} catch (err) {
  console.error(err);
}
*/

const fs = require('fs/promises');

async function displayCurrentTime() {
  try {
    const content = new Date().toString();
    await fs.writeFile('./files/time1.txt', content);
  } catch (err) {
    console.log(err);
  }
}
displayCurrentTime();