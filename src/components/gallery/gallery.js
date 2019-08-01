import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default class Carousel extends React.Component {
  state = {
    currentIndex: 0,
    pictures: []
  };

  slideTo = i => {
    return this.setState({ currentIndex: i });
  };

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  thumbItem = (item, i) => {
    return (
      <img
        src={item.key}
        class="gallery-item"
        alt=""
        onClick={() => this.slideTo(i)}
      />
    );
  };

  componentDidMount() {
    const data = Array(7)
      .fill()
      .map((item, i) => `http://placehold.it/300x100`);

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
    const { currentIndex } = this.state;
    return (
      <div>
        <AliceCarousel
          items={this.state.pictures}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
          mouseDragEnabled
          duration={400}
        />

        <div class="gallery-items">
          {this.state.pictures.map(this.thumbItem)}
        </div>
      </div>
    );
  }
}
