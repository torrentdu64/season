import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {

  state = { lat: null, errorMessage: '' };


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude}),
      (err) => this.setState({ errorMessage: err.message})
    );
  }

  render(){

    if( this.state.errorMessage && !this.state.lat ) {
      return <div>message => {this.this.state.errorMessage }</div>;
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Allow the location request" />;

  }

}

ReactDOM.render( <App />, document.querySelector('#root'))
