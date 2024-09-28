class GuessingGame {

    constructor() {
        this.minimum = 0;
        this.maximum = 0;
        this.lastAnswer = 0;
    }

    setRange(min, max) {
        this.minimum = min;
        this.maximum = max;
    }

    guess() {
        this.lastAnswer = this.minimum + Math.ceil((this.maximum - this.minimum) / 2);
        return this.lastAnswer;
    }

    lower() {
        this.maximum = this.lastAnswer;
    }

    greater() {
        this.minimum = this.lastAnswer;
        }
}

module.exports = GuessingGame;
