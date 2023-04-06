import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Wissal El Jirari',
      bio: 'The Full-Stack Javascript Bootcamp.',
      imgSrc: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjIwMy10YW5nLTYwLXdvcmtzcGFjZV8yLmpwZw.jpg',
      profession: 'Developer',
    },
    shows: true,
    mountedAt: new Date(),
    timeElapsed: 0,
  };

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.shows !== this.state.shows) {
      this.resetTimer();
      this.startTimer();
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  //timer

  startTimer() {
    this.intervalId = setInterval(() => {
      this.setState({ elapsedTime: this.state.elapsedTime + 1 });
    }, 1000);
  }

  resetTimer() {
    this.setState({ elapsedTime: 0 });
    clearInterval(this.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, elapsedTime } = this.state;

    return (
      <div className="container">
        <button className="btn" onClick={() => this.setState({ shows: !shows })}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <img className="profile-img" src={imgSrc} alt={fullName} />
            <h1 className="profile-name">{fullName}</h1>
            <h2 className="profile-title">{profession}</h2>
            <p className="profile-bio">{bio}</p>
          </div>
        )}

        <p className="elapsed-time">Elapsed Time: {elapsedTime}s</p>
      </div>
    );
  }
}

export default App;

