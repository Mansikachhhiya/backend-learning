const readline = require("readline");

const showMenu = require("./menus/mainMenu");

async function app(){

    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    await showMenu(rl);

    rl.close();

}

module.exports=app;