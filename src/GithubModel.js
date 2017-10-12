// import React from 'react';
// import Utils from './Utils';
class GithubModel {
  constructor() {
    this.notify = null;
  }
  subscribe (render) {
		this.notify = render;
	}
}
export default GithubModel;
