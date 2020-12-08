const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'black', 'grey', 'turquoise'];
const genres = ['rock', 'pop', 'rnb', 'classical', 'jazz', 'funk', 'rap', 'blues', 'metal', 'electronica'];

const getRandomNumber = max => {
    return Math.floor(Math.random() * max);
}

const generateMessage = () => {
    let message = `Your favourite colour is ${colours[getRandomNumber(colours.length)]}.\n\nYour favourite music genre is ${genres[getRandomNumber(genres.length)]}.\n\nYour favourite number is ${getRandomNumber(101)}.`
    return message;
}

console.log(generateMessage());