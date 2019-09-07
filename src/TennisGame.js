"use strict";
exports.__esModule = true;
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.score = 0;
    }
    return Player;
}());
var TennisGame = /** @class */ (function () {
    function TennisGame(playerOneName, playerTwoName) {
        var _this = this;
        this.tie = function () {
            return _this.score1 === _this.score2;
        };
        this.tieAt40 = function (playerWon, playerLost) {
            return (playerWon.score >= 3 && playerLost.score >= 3 && playerLost.score === playerWon.score);
        };
        this.anybodyHasAdvantage = function () {
            if (_this.score1 === _this.score2 + 1 && _this.score1 > 3) {
                return 1;
            }
            if (_this.score2 === _this.score1 + 1 && _this.score2 > 3) {
                return 2;
            }
            return 0;
        };
        this.anybodyHasWon = function () {
            if (_this.score1 >= _this.score2 + 2 && _this.score1 > 3) {
                return 1;
            }
            if (_this.score2 >= _this.score1 + 2 && _this.score2 > 3) {
                return 2;
            }
            return 0;
        };
        this.wonPoint = function (playerName) {
            if (_this.player1.name === playerName) {
                _this.player1.score++;
            }
            if (_this.player2.name === playerName) {
                _this.player2.score++;
            }
        };
        this.getScore = function () {
            if (_this.tieAt40(_this.player1, _this.player2)) {
                return "Deuce";
                ;
            }
            if (_this.tie()) {
                return _this.matchPossibleScore[_this.player1.score] + "-All";
            }
            if (_this.anybodyHasWon()) {
                if (_this.anybodyHasWon() === 1) {
                    return "Win for " + _this.player1.name;
                }
                if (_this.anybodyHasWon() === 2) {
                    return "Win for " + _this.player2.name;
                }
            }
            if (_this.anybodyHasAdvantage()) {
                if (_this.anybodyHasAdvantage() === 1) {
                    return "Advantage " + _this.player1.name;
                }
                if (_this.anybodyHasAdvantage() === 2) {
                    return "Advantage " + _this.player2.name;
                }
            }
            return _this.matchPossibleScore[_this.player1.score] + "-" + _this.matchPossibleScore[_this.player2.score];
        };
        this.player1 = new Player(playerOneName);
        this.player2 = new Player(playerTwoName);
        this.matchPossibleScore = ["Love", "Fifteen", "Thirty", "Forty"];
        this.anyoneHasWon = false;
    }
    Object.defineProperty(TennisGame.prototype, "name1", {
        get: function () {
            return this.player1.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TennisGame.prototype, "name2", {
        get: function () {
            return this.player2.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TennisGame.prototype, "score1", {
        get: function () {
            return this.player1.score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TennisGame.prototype, "score2", {
        get: function () {
            return this.player2.score;
        },
        enumerable: true,
        configurable: true
    });
    return TennisGame;
}());
exports["default"] = TennisGame;
