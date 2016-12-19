import React, {Component} from 'react';
// import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import {Card, CardMedia,CardTitle, CardActions, FlatButton} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import '../styles/image-slider.css';
import '../styles/card.css';
import Slider from 'react-image-slider';

class TeamCards extends Component {


render () {
  const teams = [
    {
      locationImg:"https://images.trvl-media.com/hotels/15000000/14770000/14762000/14761971/14761971_1_z.jpg",
      logo:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/tor.png",
      title:"Toronto"
    },
    {
      locationImg:"http://www.quinceanera.com/wp-content/uploads/2015/03/griffith-observatory-at-night-los-feliz-los-angeles.jpg",
      logo:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/lal.png",
      title:"Los Angeles"
    },
    {
      locationImg:"http://static.panoramio.com/photos/large/14958187.jpg",
      logo:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/chi.png",
      title:"Chicago"
    },
    {
      locationImg:"http://static.panoramio.com/photos/large/47344885.jpg",
      logo:"http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcle.png",
      title:"Cleveland"
    },
    {
      locationImg:"http://traveldigg.com/wp-content/uploads/2016/05/Times-Square-New-York-City-At-Night.jpg",
      logo:"http://4.bp.blogspot.com/-rukBOVnZI4w/UT4iMqZnjqI/AAAAAAAAfmg/ZOVIrHf1NRA/s1600/New+York+Knicks+Club+Logo+2013+04.png",
      title:"New York"
    },
    {
      locationImg:"https://w-dog.net/wallpapers/0/53/337092311092055/night-town-bridge-from-san-francisco-to-oakland-san-francisco-united-states-california.jpg",
      logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/838px-Golden_State_Warriors_logo.svg.png",
      title:"Golden State"
    }
  ]
  return (

    <Slider>
      {teams.map((team,key) =>
        <Card key={key} onClick={this.props.playerShow}>
          <img className="logo" src={team.logo}/>
          <img role="presentation" src={team.locationImg}/>
          <CardMedia className ="cardmedia" overlay={<CardTitle title ={team.title}/>}>
          </CardMedia>
        </Card>)}
    </Slider>
  )};
}
export default TeamCards;
