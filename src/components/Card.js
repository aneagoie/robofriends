import React from 'react';
import placeholder from '../images/placeholder.jpg';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasImageLoaded: false
    };
  }

  setImageLoaded = () => {
    this.setState({ hasImageLoaded: true });
  }

  render() {
    const { name, email, id } = this.props;
    const robotImageUrl = `https://robohash.org/${id}?size=200x200`;

    const { hasImageLoaded } = this.state;

    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img
          src={hasImageLoaded ? robotImageUrl : placeholder}
          alt="robots"
          onLoad={this.setImageLoaded}
        />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Card;