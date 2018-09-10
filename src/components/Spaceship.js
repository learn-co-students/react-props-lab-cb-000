export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <p>"this.props.name"</p>
        <p>"this.props.speed"</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
      </div>
    )
  }
  this.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
  }
}
