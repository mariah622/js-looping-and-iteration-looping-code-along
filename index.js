
function writeCards(name, event){
    const thankYou = []
    for( let i = 0; i < name.length; i++) {
        thankYou.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return thankYou
}



function countDown() {
    let count = 10
    while (count >= 0 ) {
        console.log(count--)
    }

}
