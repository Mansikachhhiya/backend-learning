const askQuestion = require("./askQuestion");

async function pause(rl) {

    await askQuestion(
        rl,
        "\nPress Enter to continue..."
    );

}

module.exports = pause;