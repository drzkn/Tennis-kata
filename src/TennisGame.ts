class Player {
    name : string;
    score : 0;

    constructor(name: string){
        this.name = name;
        this.score = 0;
    }
}

class TennisGame {

    player1 : Player;
    player2 : Player;

    matchPossibleScore : Array<String>;
    anyoneHasWon : boolean;

    constructor(playerOneName : string = "player 1" , playerTwoName : string = "player 2"){
        this.player1 = new Player(playerOneName);
        this.player2 = new Player(playerTwoName);
        this.matchPossibleScore = ["Love", "Fifteen", "Thirty", "Forty"];
        this.anyoneHasWon = false;
    }

    get name1() : string{
        return this.player1.name;
    }

    get name2() : string{
        return this.player2.name;
    }

    get score1() : number {
        return this.player1.score;
    }

    get score2() : number {
        return this.player2.score;
    }

    tie = () : boolean => {
        return this.score1 === this.score2;
    };

    tieAt40 = () : boolean => {
        return (this.score1 >= 3 && this.score2 >= 3 && this.score1 === this.score2);
    };

    anybodyHasAdvantage = () : boolean => {
        if ((this.score1 === this.score2 + 1 && this.score1 > 3) || (this.score2 === this.score1 + 1 && this.score2 > 3)){
            return true;
        }
        return false;
    }

    anybodyHasWon = () : boolean => {
        if ((this.score1 >= this.score2 + 2 && this.score1 > 3) || (this.score2 >= this.score1 + 2 && this.score2 > 3)){
            this.anyoneHasWon = true;
            return true;
        }

        return false;
    }

    wonPoint = ( playerName : String) => {
        if (this.name1 === playerName) {
            this.player1.score++;
        }

        if (this.name2 === playerName) {
            this.player2.score++;
        }
    };

    getScore = () : string => {
        if (this.tieAt40()) {
            return "Deuce";;
        }

        if (this.tie()) {
            return `${this.matchPossibleScore[this.player1.score]}-All`;
        }

        if (this.anybodyHasWon()){
            if (this.score1 > this.score2){
                return `Win for ${this.player1.name}`;
            }

            if (this.score1 < this.score2){
                return `Win for ${this.player2.name}`;
            }
        }

        if (this.anybodyHasAdvantage()){
            if(this.score1 > this.score2){
            return `Advantage ${this.player1.name}`;
            }

            if (this.score1 < this.score2){
            return `Advantage ${this.player2.name}`;
            }
        }

        return `${this.matchPossibleScore[this.player1.score]}-${this.matchPossibleScore[this.player2.score]}`;
    }

}

export default TennisGame;