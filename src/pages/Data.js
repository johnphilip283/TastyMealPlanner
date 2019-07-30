import React, {Component} from "react";
import config from '../config';

export default class Data extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:5000/api/tags')
    .then(res => res.json())
    .then(res => console.log(JSON.parse(res.text)))
    .catch(err => console.log(err))

    // .then(res => JSON.parse(JSON.stringify(res)));

    // fetch('https://api.tasty.co/search/tags', {
    //   method: 'GET',
    //   headers: {
    //     'X-AUTH-TOKEN': config.config,
    //     'X-Tasty-User-Access-Token': config.config,
    //     'Accept': "application/json",
    //     "Content-Type": "application/json",
    //     "Fastly": 1
    //   }
    // }).then(response => response.json())
    // .then(responseJson => {
    //   this.setState({
    //     data: responseJson.results,
    //     isLoading: false
    //   });
    //   console.log(responseJson);
    // })
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="container">
        <p>Hello: {this.state.data}</p>
      </div>
    );
  }
}







