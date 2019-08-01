import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default class Carousel extends React.Component {
  state = {
    pictures: []
  };

  componentDidMount() {
    const data = Array(7)
      .fill()
      .map((item, i) => `http://placehold.it/300x100`);
      // console.log(JSON.parse(this.props.authorData[0].internal.content).link);

    Promise.resolve(data).then(result => {
      const pictures = this.renderImages(result);
      setTimeout(() => this.setState({ pictures }), 500);
    });
  }

  renderImages(pictures = []) {
    const handleOnDragStart = e => e.preventDefault();
    return pictures.map(picture => {
      return (
        <img
          alt=""
          key={picture}
          src={picture}
          style={{ width: "100%" }}
          onDragStart={handleOnDragStart}
        />
      );
    });
  }

  render() {
    const stagePadding = {
      paddingLeft: 50,
      paddingRight: 100
    };
    return (
      <AliceCarousel
        mouseDragEnabled
        duration={400}
        stagePadding={stagePadding}
        items={this.state.pictures}
      />
    );
  }
}
