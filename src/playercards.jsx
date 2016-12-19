import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import '../styles/card.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const playerData = [
  {
    headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201942.png",
    name:"DeMar DeRozan",
    team:"Raptors"
  },
  {
    headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200768.png",
    name:"Kyle Lowry",
    team:"Raptors"
  },
  {
    headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202685.png",
    name:"Jonas Valanciunas",
    team:"Raptors"
  },
  {
    headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203512.png",
    name:"Lucas Nogueira",
    team:"Raptors"
  },
]

class playerCards extends Component {
  render() {
    return (
      <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {playerData.map((player) => (
        <GridTile
          key={player.headShot}
          title={player.name}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img role="presentation" src={player.headShot} />
        </GridTile>
      ))}
    </GridList>
  </div>
    );
  }
}

export default playerCards;
