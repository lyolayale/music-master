import React from "react";

// *** Internal Imports ***
import Header from "./components/Header";
import Search from "./components/Search";
import Artist from "./components/Artist";
import Footer from "./components/Footer";

// *** Music image ***
import musicImage from "../src/resources/images/music.avif";

// *** Spotify API Wrapper ***
const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

export default class App extends React.Component {
  // *** State ***
  state = {
    artistQuery: "",
    artist: null,
    isArtist: false,
  };

  // *** Methods Start ***
  handleArtistQuery = e => {
    let { value } = e.target;

    this.setState(prev => ({ ...prev, artistQuery: value }));
  };

  handleSearchArtist = () => {
    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
      .then(res => res.json())
      .then(res => {
        // *** Check if the object is not empty ***
        if (res.artists.total > 0) {
          // *** Destructure to simplify ***
          const artist = res.artists.items[0];

          console.log("Artist", artist);

          this.setState(prev => ({
            ...prev,
            artist: artist,
          }));
        }
      })
      .catch(err => alert.error(err.message));
  };

  handleKeyDown = e => {
    const { key } = e;

    if (key === "Enter") {
      this.handleSearchArtist();
    }
  };

  handleImageError = e => {
    e.target.src = musicImage;
  };

  // *** Methods End ***

  render() {
    return (
      <section className="music-form w-100 text-center d-flex flex-column justify-content-center align-items-center m-auto w-100 gap-4 p-2">
        <Header />
        <Search
          handleArtistQuery={this.handleArtistQuery}
          handleKeyDown={this.handleKeyDown}
          handleSearchArtist={this.handleSearchArtist}
        />
        {this.state.artist === null ? (
          <img
            className="rounded shadow-lg"
            src={musicImage}
            alt="Placeholder image, concert"
          />
        ) : (
          <Artist
            artist={this.state.artist}
            handleImageError={this.handleImageError}
          />
        )}
        <Footer />
      </section>
    );
  }
}
