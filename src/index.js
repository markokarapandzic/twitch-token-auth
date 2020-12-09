class TwitchTokenAuth {
  constructor() {
    this._clientId = "Client ID";
    this._clientSecret = "Client Secret";
    this._redirectUri = "Redirect URI";
  }

  printValues() {
    console.log(
      `Client ID: ${this._clientId}, Secret: ${this._clientSecret}, Redirect URI: ${this._redirectUri}`
    );
  }
}

module.exports = TwitchTokenAuth;
