import React, { Component } from "react";
import "./../assets/css/Intro.css";
class Intro extends Component {
  btnClick() {
    window.open(
      "https://www.dropbox.com/s/2wkudf8iyra6ckz/Diana%20Pinto%20CV.pdf?dl=0"
    );
  }
  render() {
    return (
      <div>
        <div className="profile">
          <img
            src={require("./../assets/images/profile2.jpeg")}
            alt="Profile"
          />
          <button id="cv" onClick={this.btnClick.bind(this)} type="button">
            CV
          </button>
        </div>
      </div>
    );
  }
}
export default Intro;
