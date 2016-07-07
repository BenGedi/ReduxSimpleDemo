import React, { Component } from 'react';

class  SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input
                    value={ this.state.term }
                    placeholder="Search for a video"
                    onChange={ event => this.setState({ term: event.target.value }) } />
            </div>
        );
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;


/**
class  SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input
                    value={ this.state.term }
                    placeholder="Search for a video"
                    onChange={ event => this.setState({ term: event.target.value }) } />;
            </div>
        );
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

*/
