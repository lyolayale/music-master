import React from "react";

// *** Internal Imports ***
import Header from "./components/Header";
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
    artistImage: null,
    spotifyUrl: null,
    artistName: null,
  };

  // *** Method Start ***
  handleArtistQuery = e => {
    let { value } = e.target;

    this.setState(prev => ({ ...prev, artistQuery: value }));
  };

  handleSearchArtist = () => {
    // *** 1st fetch -> fetch artist ***
    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
      .then(res => res.json())
      .then(res => {
        // *** Check if the object is not empty ***
        if (res.artists.total > 0) {
          // *** Destructure to simplify ***
          const artist = res.artists.items[0];
          const image = artist.images[0].url;
          const spotifyUrl = artist.external_urls.spotify;
          const artistName = artist.name;

          console.log("Artist", artist);

          this.setState(prev => ({
            ...prev,
            artist: artist,
            artistImage: image,
            spotifyUrl,
            artistName,
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

  // *** Method End ***

  render() {
    return (
      <section className="music-form w-100 text-center d-flex flex-column justify-content-center align-items-center m-auto w-100 gap-4 p-2">
        <Header />
        <input
          className="form-control w-75 p-2 fs-5"
          onChange={this.handleArtistQuery}
          onKeyDown={this.handleKeyDown}
          type="text"
          placeholder="Search for an Artist"
        />
        <button
          onClick={this.handleSearchArtist}
          className="btn btn-dark w-75 p-2 shadow-lg fs-5"
        >
          Search
        </button>
        <section className="image-container d-flex flex-column justify-content-center align-items-center m-auto mt-4 w-90 p-3">
          <h2 className="fs-1 mb-5">
            {this.state.artistName === null
              ? ""
              : "🎤 " + this.state.artistName}
          </h2>
          <img
            className="rounded object-fit-cover m-auto w-100"
            src={this.state.artistImage ? this.state.artistImage : musicImage}
            alt="Artist, cover image"
            onError={this.handleImageError}
          />
        </section>
        <section className="spotify-url pb-4">
          {this.state.spotifyUrl === null ? (
            ""
          ) : (
            <a
              className="btn btn-dark p-2 shadow-lg"
              href={this.state.spotifyUrl}
              target="_blank"
            >
              Check out {this.state.artistName}'s popular tracks at Spotify
            </a>
          )}
        </section>
        <Footer />
      </section>
    );
  }
}
