import React from 'react';
import {battle, fetchPopularRepos} from './GitHubApi';
// import React from 'react';
// import Utils from './Utils';
class GithubModel {
  constructor() {
    this.user = {
      player1 : null,
      player2 : null
    };
    this.notify = null;
  }
  subscribe (render) {
		this.notify = render;
	}
  searchPlayer (){
    let player1 = this.user.player1;
    let player2 = this.user.player2;
    console.log(player1, player2)
    battle([
       player1, // https://github.com/ivanseidel
       player2]  // https://github.com/honcheng
     ).then((results) => {
       if (results === null){
          console.log ('Looks like there was an error!\nCheck that both users exist on github.');
       }
       console.log ("battle result:", results[0], results[1]);
    });
  }
}
export default GithubModel;
