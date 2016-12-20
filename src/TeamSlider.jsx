import React, {Component} from 'react';
import '../styles/image-slider.css';
import '../styles/card.css';
import Slider from 'react-image-slider';
import TeamCards from './TeamCards.jsx'

// RB: This can be functional!
class TeamSlider extends Component {
  constructor(props) {
    super(props);
    this.state
  }
render () {
  return (
    <TeamCards conferenceValue={this.props.conferenceValue}  />
  )};
}
export default TeamSlider;

// render () {
//   return (
//     <Slider>
//       <TeamCards conferenceValue={this.props.conferenceValue}  />
//     </Slider>
//   )};
// }
