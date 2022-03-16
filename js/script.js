class Start {
    constructor() {
        this.playerName = 'PLAYER',
            this.botName = 'BOT',
            this.playerOption,
            this.botOption,
            this.winner = "";
    }
    set setBotOption(option) {
        this.botOption = option;
    }

    get setBotoption() {
        return this.botOption;
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    get setPlayerOption() {
        return this.playerOption;
    }

    botBrain() {
        const option = ["🖐️", "✌️", "✊"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winCalculation() {
        if (this.botOption == "🖐️" && this.playerOption == "✌️") {
            return this.winner = this.playerName;
        } else if (this.botOption == "🖐️" && this.playerOption == "✊") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌️" && this.playerOption == "🖐️") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌️" && this.playerOption == "✊") {
            return this.winner = this.playerName;
        } else if (this.botOption == "✊" && this.playerOption == "🖐️") {
            return this.winner = this.playerName;
        } else if (this.botOption == "✊" && this.playerOption == "✌️") {
            return this.winner = this.botName;
        } else {
            return this.winner = "SERI";
        }
    }

    matchResult() {
        if (this.winner != "SERI") {
            return `${this.winner} MENANG `;
        } else {
            return `WAH ${this.winner}, TIDAK ADA YANG MENANG`;
        }
    }

}

function pickOption(params) {
    const start = new Start();
    start.setPlayerOption = params;
    start.setBotOption = start.botBrain();
    start.winCalculation();

    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");


    inGame.textContent = "..."
    result.textContent = "..."

    setTimeout(() => {
        inGame.textContent = `${start.playerOption} VS ${start.botOption}`;
        result.textContent = start.matchResult();
    }, 1500);


}