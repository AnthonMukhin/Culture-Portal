import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import '../gallery/gallery.css';

export default class Carousel extends React.Component {

  state = {
    currentIndex: 0,
    pictures: []
  };

  slideTo = i => {
    this.setActiveSlide(i);

    this.setState({ currentIndex: i });

    return this.setState({ currentIndex: i });
  };

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () => {
    return this.setState({ currentIndex: this.state.currentIndex - 1 });
  };

  setActiveSlide(i) {
    const itemss = document.querySelectorAll(".gallery-item");
    itemss.forEach(elem => {
      if (elem.classList.contains("active-slide")) {
        elem.classList.remove("active-slide");
      }
    });
    itemss[i].classList.add("active-slide");
  }

  thumbItem = (item, i) => {
    const divStyle = {
      backgroundImage: `${item.props.style.backgroundImage}`
    };

    const url = item.props.style.backgroundImage.substring(4, item.props.style.backgroundImage.length - 1);

    return (
        <div
          className="gallery-item col-xl-2 col-lg-3 col-md-4"
          key={i}
          style={divStyle}
          onClick={() => this.slideTo(i)}
        >
          <img
            src={url}
            className="gallery-image"
            alt=""
          />
        </div>
    );
  };

  componentDidMount() {
    const data = Array(this.props.photos.length)
      .fill()
      .map((item, i) => this.props.photos[i].link);

    Promise.resolve(data).then(result => {
      const pictures = this.renderImages(result);
      setTimeout(() => this.setState({ pictures }), 500);
    });
  }

  renderImages(pictures = []) {
    const handleOnDragStart = e => e.preventDefault();

    return pictures.map(picture => {
      const divStyle = {
        backgroundImage: `url(${picture})`
      };

      return (
        <div
          className="slide"
          style={divStyle}
          onDragStart={handleOnDragStart}
        >
          <img
            src={picture}
             className="slide-image"
            alt=""
          />
        </div>
      );
    });
  }

  render() {
    const { currentIndex } = this.state;
    return (
      <div className="container">
        <AliceCarousel
          items={this.state.pictures}
          slideToIndex={currentIndex}
          buttonsDisabled={true}
          onSlideChanged={this.onSlideChanged}
          mouseDragEnabled
          duration={400}
        />

        <div className="buttons-container">
          <button className="slider-button" onClick={() => this.slidePrev()}>
            ←
          </button>
          <button className="slider-button" onClick={() => this.slideNext()}>
            →
          </button>
        </div>

        <div className="gallery-items row">
          {this.state.pictures.map(this.thumbItem)}
        </div>
      </div>
    );
  }
}

