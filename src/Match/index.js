import React from "react";
import Button from "../Button";
import Label from "../Label";
import Table from "../Table";
import { Link } from "react-router-dom";


const Match = ({onWonPlayer1,
    onWonPlayer2,
    namePlayer1,
    namePlayer2,
    anyoneHasWon,
    score
  }) => {

  return (
    <div className="App">
      <Label className="title_header">Tennis game</Label>

      <div className="body_container">
        <div className="label_container">
          <Label className="label_for_input">{namePlayer1}</Label>
          <Label className="label_for_input">{namePlayer2}</Label>
        </div>
        <div className="button_container">
            {!anyoneHasWon
                ? <Button
                    onClick={() =>
                      onWonPlayer1()
                    }
                    className="point"
                  >
                    Player1
                  </Button>
                : ""
            }
            {!anyoneHasWon
                ?<Button
                    onClick={() =>
                      onWonPlayer2()
                    }
                    className="point"
                  >
                    Player2
                  </Button>
                : ""
            }
        </div>
      </div>

      <div className="table_container">
        <Table list={score} />
      </div>

      <div className="button_container">
        <Link to="/">
          <Button
            className="new_player"
          >
            Nuevo partido
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Match;