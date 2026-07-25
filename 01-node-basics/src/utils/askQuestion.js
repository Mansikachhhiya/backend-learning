function askQuestion(rl, question){
    return new Promise((resolve, reject)=> {
        rl.question(question, (answer)=>{
            resolve(answer.trim())
        })
    })
}

module.exports = askQuestion