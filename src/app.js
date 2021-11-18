import { LightningElement, track } from "lwc";

export default class App extends LightningElement {

@track gamesList = [];
gamesTitle = "Video Games";

connectedCallback() {
  fetch("https://api.rawg.io/api/games?key=0590cd86e8474101aa974211408dd90d&dates=2019-09-01,2019-09-30&platforms=18,1,7")
    .then(result => result.json())
    .then(data => {
        this.gamesList = data.results;
    })
}
}