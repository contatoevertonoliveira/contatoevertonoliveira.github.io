import React from 'react';
import moment from 'moment';
import { Grid, Segment, Image, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Fixture = props => {
  let fixtureStatus;
  if (props.status === 'FINISHED') {
    fixtureStatus = (
      <div className="fixture-status">
        <div className="fixture-status-score">{props.result.goalsHomeTeam}</div>
        <div className="fixture-status-score">-</div>
        {/* <div>{moment(props.date).format('MM/DD/YYYY hh:mm A')}</div> */}
        <div className="fixture-status-score">{props.result.goalsAwayTeam}</div>
      </div>
    );
  } else if (props.status === 'TIMED' || props.status === 'SCHEDULED') {
    fixtureStatus = (
      <div className="fixture-status">
        <div className="fixture-status-score">
          {moment(props.date).format('hh:mm A')}
        </div>
      </div>
    );
  } else if (props.status === 'IN_PLAY') {
    fixtureStatus = (
      <div className="fixture-live fixture-status">
        <div className="fixture-status-score">{props.result.goalsHomeTeam}</div>
        <div className="fixture-status-score">-</div>
        <div className="fixture-status-score">{props.result.goalsAwayTeam}</div>
      </div>
    );
  }
  return (
    <div className="match-fixture">
      <div className="fixture-team">
        <div className="team-label team-label--reverse">
          <Image
            className="team-label-image"
            height="64"
            src={props.homeTeam.crestUrl}
          />
          <div className="team-label-name">{props.homeTeamName}</div>
        </div>
      </div>
      {fixtureStatus}
      <div className="fixture-team">
        <div className="team-label">
          <Image
            className="team-label-image"
            height="64"
            src={props.awayTeam.crestUrl}
          />
          <div className="team-label-name">{props.awayTeamName}</div>
        </div>
      </div>
    </div>
  );
};

Fixture.defaultProps = {
  homeTeam: {},
  awayTeam: {}
};

Fixture.propTypes = {
  homeTeamName: PropTypes.string.isRequired,
  awayTeamName: PropTypes.string.isRequired,
  homeTeam: PropTypes.shape({ crestUrl: PropTypes.string }),
  awayTeam: PropTypes.shape({ crestUrl: PropTypes.string }),
  result: PropTypes.shape({
    goalsHomeTeam: PropTypes.number,
    goalsAwayTeam: PropTypes.number
  }).isRequired,
  status: PropTypes.string.isRequired
  //  date: PropTypes.string.isRequired
};

export default Fixture;