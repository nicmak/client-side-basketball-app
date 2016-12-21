import React, {Component} from 'react';
import {Card, CardMedia,CardTitle, CardActions, CardText} from 'material-ui/Card';
import Slider from 'react-image-slider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import '../styles/image-slider.css';
import '../styles/card.css';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};


class playerCards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open:false,
      slideIndex: 0
    }
  }

  handler = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleTab = (value) => {
   this.setState({
     slideIndex: value,
   });
 };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary = {true}
        onClick = {this.handler}
      />,
      <FlatButton
        label = "Add"
      />
    ]

    return (
      <Slider>
        {this.props.playerData.map((player,key) =>
          <Card key={key} onClick={this.props.playerShow}>
            <img role="presentation" src={player.head_shot}/>
            <CardMedia className ="cardmedia2" overlay={<CardTitle title ={`${player.first_name} ${player.last_name}`}/>}/>
              <FlatButton onClick={this.props.addPlayer(player.id)} className="FlatButton" label="Add"/>
              <FlatButton onClick={this.handler}   label="Statistics"/>
                <Dialog className="views"
                  title="Statistics"
                  autoScrollBodyContent={true}
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handler}
                >
                  <Tabs className="tabs"
                    onChange = {this.handleTab}
                    value = {this.state.slideIndex}
                  >
                    <Tab label="BIO" value={0}/>
                    <Tab label="Statistics" value={1}/>
                    <Tab label="Other" value={2}/>
                  </Tabs>
                  <SwipeableViews className="views"
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleTab}
                  >
                    <div className="Biology">
                      <img src={player.head_shot}/>
                      <div className="playerInfo">
                        Name: {`${player.first_name} ${player.last_name}`}<br/><br/>
                        College: {player.college}<br/><br/>
                        Height: {player.height}<br/><br/>
                        Weight: {player.weight}
                      </div>
                      <table>
                        <tr>
                          <th>Game</th>
                          <th>FGA</th>
                          <th>FGM</th>
                          <th>FTA</th>
                          <th>FTM</th>
                        </tr>
                        <tr></tr>
                      </table>
                    </div>

                    <div>
                      eofjhwosdifaoifjdsoif
                    </div>

                  </SwipeableViews>
                </Dialog>
          </Card>)}
      </Slider>
    );
  }
}
export default playerCards;
