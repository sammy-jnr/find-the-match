

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}
let numberArrayTemp = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
export const  numbersArray = shuffle(numberArrayTemp);
let lettersArrayTemp = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
export const lettersArray = shuffle(lettersArrayTemp);
let numberArrayTempL = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18]
export const  numbersArrayL = shuffle(numberArrayTempL);
let lettersArrayTempL = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H',"I","I",'J',"J","k","k","L","L","M","M","O","O","P","P","Q","Q","R","R"]
export const lettersArrayL = shuffle(lettersArrayTempL);