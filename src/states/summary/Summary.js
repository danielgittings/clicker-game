import React, { Fragment } from 'react';
import GameTitle from '../../components/GameTitle';
import StartButton from '../../components/StartButton';
import HighScore from '../../components/HighScore';
import PreviousScores from '../../components/PreviousScores';
import FinalScore from '../../components/FinalScore';
import Centraliser from '../../components/Centraliser';

const Summary = ({ scores, startGame }) => (
  <React.Fragment>
    <Centraliser>
      <GameTitle title="Clicktangles" />
      <StartButton startGame={startGame} buttonText={'Play again'} />
      <FinalScore scores={scores} />

      {scores.length > 1 && (
        <Fragment>
          <HighScore scores={scores} />
          <PreviousScores scores={scores} />
        </Fragment>
      )}
    </Centraliser>
  </React.Fragment>
);

export default Summary;