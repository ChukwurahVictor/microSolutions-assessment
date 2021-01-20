//Question 2
const users = [
    {
        id: 1,
        email: 'jamesbell@gmail.com'
    },
    {
        id: 2,
        email: 'example@example.com'
    }
]
const evenBatch = [];
const oddBatch = [];
for (let i = 0; i < users.length; i++) {
    if(users[i].id % 2 === 0) {
        evenBatch.push(users[i]);
    }
    else oddBatch.push(users[i]);
}

console.log('even', evenBatch);
console.log('odd', oddBatch);

//RESULTS
// even: [ { id: 2, email: 'example@example.com' } ]
// odd: [ { id: 1, email: 'jamesbell@gmail.com' } ]