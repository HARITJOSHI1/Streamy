import React, { Component } from "react";

export default class GoogleAuth extends Component {
  state = { isSignedIn: null, auth: null };

  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "5895724673-h11pnogplo16jaj5s4iu6med1133hdau.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.auth.isSignedIn.listen(() =>
            this.setState({
              isSignedIn: this.auth.isSignedIn.get(),
              auth: this.auth,
            })
          );
          this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
            auth: this.auth,
          });
        });
    });
  }

  renderSignIn() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={() => this.state.auth.signOut()}
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className="ui red google button"
          onClick={() => this.state.auth.signIn()}
        >
          <i className="google icon" />
          Sign in with google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderSignIn()}</div>;
  }
}
