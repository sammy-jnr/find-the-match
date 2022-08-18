

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
let randomArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
let lettersArray = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
export const  finalArray = shuffle(lettersArray);