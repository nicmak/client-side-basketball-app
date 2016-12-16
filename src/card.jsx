import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import '../styles/card.css'
class CardExampleWithAvatar extends Component {
render () {
  return (
<section className="teams">
  <div className = "team">
    <Card>
      <CardHeader
        title="RAPTORS"
      />
      <CardMedia
        overlay={<CardTitle title="TORONTO"/>}
      >
        <img src="https://images.trvl-media.com/hotels/15000000/14770000/14762000/14761971/14761971_1_z.jpg" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </div>
  <div className = "team">
    <Card>
      <CardHeader
        title="RAPTORS"
      />
      <CardMedia
        overlay={<CardTitle title="TORONTO"/>}
      >
        <img src="https://images.trvl-media.com/hotels/15000000/14770000/14762000/14761971/14761971_1_z.jpg" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </div>
  <div className = "team">
    <Card>
      <CardHeader
        title="RAPTORS"
      />
      <CardMedia
        overlay={<CardTitle title="TORONTO"/>}
      >
        <img src="https://images.trvl-media.com/hotels/15000000/14770000/14762000/14761971/14761971_1_z.jpg" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </div>
  <div className = "team">
    <Card>
      <CardHeader
        title="RAPTORS"
      />
      <CardMedia
        overlay={<CardTitle title="TORONTO"/>}
      >
        <img src="https://images.trvl-media.com/hotels/15000000/14770000/14762000/14761971/14761971_1_z.jpg" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </div>
</section>

  )};
}
export default CardExampleWithAvatar;
