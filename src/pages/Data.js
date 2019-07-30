import React, { Component } from "react";
import config from '../config';

export default class Data extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoading: false,
        };
    }
    componentDidMount() {
        console.log(config);
        this.setState({ isLoading: true });  
        fetch('https://api.tasty.co/search/tags', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': true,
                'X-AUTH-TOKEN': 'f396a157-746d-47b9-b785-7d96ca18b007',
                'X-Tasty-User-Access-Token': 'f396a157-746d-47b9-b785-7d96ca18b007',
                'Accept': "application/json",
                "Content-Type": "application/json"
        },
    })

    .then(response => response.json())
    .then(responseJson => {
        this.setState(
            { 
                data: responseJson.results, 
                isLoading: false 
            }
        )
        console.log(responseJson)
    })
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







