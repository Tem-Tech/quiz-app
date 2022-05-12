import React from "react";
export default function Scores(props) {
  class Score {
    constructor(username, date, score) {
      this.username = username;
      this.date = date;
      this.score = score;
    }
    //quiz results are logged on the scoreboard
    //scoreboard is updated with new scores
  }
  return (
    <table>
      <tr>
        <Columns />
      </tr>
    </table>
  );
}
