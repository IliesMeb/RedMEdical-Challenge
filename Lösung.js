
import  fs  from 'fs';

const reducer = (accumulator, currentValue) => accumulator + currentValue;

async function ziffern(file) {
    let data = fs.readFileSync(file, 'utf-8');
    let number = [];
    let notANumber = []
    for (const char of data){
        isNaN(char) ? notANumber.push(char) : number.push(char);
    }
}

ziffern('clear_smaller.txt')