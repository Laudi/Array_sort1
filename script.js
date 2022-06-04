let names = ['Hofstadter', 'Cooper', 'Wolowitz', 'Koothrappali'];
let sorted = names.sort((a, b) => {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }

    return 0;

})

console.log(sorted);

// Здесь будет ваш код
const sortByBirth = (arr) => {
    return arr.sort((a, b) => {
        aDob = a.split(', ')[1];
        bDob = b.split(', ')[1];
        return +aDob - +bDob;
    })
}



console.log(sortByBirth([
    'Nicola Tesla, 1856',
    'Alan Turing, 1912',
    'Ada Lovelace, 1815'
])) // ['Ada Lovelace, 1815', 'Nicola Tesla, 1856', 'Alan Turing, 1912']

