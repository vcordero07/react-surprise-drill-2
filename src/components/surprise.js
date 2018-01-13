import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          on: false
        }
    }

    _onClick = () => {
      this.setState({
        on: !this.state.on
      });
    }

    render() {
      console.log(this)
        // Show the button to start with
        if (this.state.on) {
          return <SurpriseImage onClick={this._onClick}/>;
        }
        else {
          return <SurpriseButton onClick={this._onClick}/>;
        }
    }
}
