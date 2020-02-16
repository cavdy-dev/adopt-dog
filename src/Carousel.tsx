import React, { Component } from "react";
import { Photo } from "@frontendmasters/pet";

interface IProps {
  media: Photo[];
}

interface IState {
  active: number;
  photos: string[];
}

class Carousel extends Component<IProps, IState> {
  public state = {
    photos: [],
    active: 0
  };

  public static getDerivedStateFromProps({ media }: IProps) {
    let photos = ["https://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  public handleClickIndex = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.target.dataset.index) {
      this.setState({ active: +event.target.dataset.index });
    }
  };

  public render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              data-index={index}
              onClick={this.handleClickIndex}
              alt=""
              src={photo}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
