import React, {Component} from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import '../styles/card.css'
class TeamCards extends Component {
render () {
  return (
<section className="teams">
  <div className="team">
    <Card expandable={this.teamCardsTog}>
      <div className="cardheader">
        RAPTORS
      </div>
      <CardMedia className="cardmedia"
        overlay={<CardTitle  title="TORONTO"/>}
      >
        <img role="presentation" src="https://images.trvl-media.com/hotels/15000000/14770000/14762000/14761971/14761971_1_z.jpg" />
      </CardMedia>
      {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
      <div className="cardtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </div>
      <CardActions>
        <FlatButton label="Add" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </div>
  <div className="team">
    <Card>
      <div className="cardheader">
        RAPTORS
      </div>
      <CardMedia className="cardmedia"
        overlay={<CardTitle title="TORONTO"/>}
      >
        <img role="presentation" src="https://images.trvl-media.com/hotels/15000000/14770000/14762000/14761971/14761971_1_z.jpg" />
      </CardMedia>
      {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
      <div className="cardtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </div>
      <CardActions>
        <FlatButton label="Add" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </div>
  <div className="team">
    <Card>
      <div className="cardheader">
        RAPTORS
      </div>
      <CardMedia className="cardmedia"
        overlay={<CardTitle title="TORONTO"/>}
      >
        <img role="presentation" src="https://images.trvl-media.com/hotels/15000000/14770000/14762000/14761971/14761971_1_z.jpg" />
      </CardMedia>
      {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
      <div className="cardtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </div>
      <CardActions>
        <FlatButton label="Add" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </div>
  <div className = "team">
    <Card>
      <div className = "cardheader">
        RAPTORS
      </div>
      <CardMedia className="cardmedia"
        overlay={<CardTitle title="TORONTO"/>}
      >
        <img role="presentation" src="https://images.trvl-media.com/hotels/15000000/14770000/14762000/14761971/14761971_1_z.jpg" />
      </CardMedia>
      {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
      <div className="cardtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </div>
      <CardActions>
        <FlatButton label="Add" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </div>
</section>

  )};
}
export default TeamCards;
