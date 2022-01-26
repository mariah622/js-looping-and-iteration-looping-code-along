
// function writeCards(name, event){
//     const thankYou = []
//     for( let i = 0; i < name.length; i++) {
//         thankYou.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
//     }
//     return thankYou
// }



// function countDown() {
//     let count = 10
//     while (count >= 0 ) {
//         console.log(count--)
//     }

// }

function writeCards(name, event){
    const messages = []
    for(let i = 0; i < name.length; i++){
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)

    }
    return messages
    

}

function countDown(){
    for (let count = 10; count >= 0; count--){
        console.log(count)
    }
    

}
