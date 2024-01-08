/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(resolve=> {
        setTimeout(function(){
            resolve()
        } , milliseconds)
    })
}

function highWork (){
    let num = 0
    for (let index = 0; index < Date.now; index++) {
        num = num + index
    }
}

highWork()

module.exports = sleep;
