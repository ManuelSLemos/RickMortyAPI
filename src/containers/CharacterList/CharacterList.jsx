import React, { Component } from 'react';

import axios from 'axios';

class CharacterList extends Component {
    constructor(props){
        super(props);

        this.state = {
            character: []
        }
    }

    componentDidMount(){
        axios.get('https://rickandmortyapi.com/api/character')
            .then( api => {
                console.log(api.data.results)
                this.setState({ character: api.data.results })
            })
            .catch( err => console.log(err));
        
    }

    render(){
        return(
            <div>
                CharacterList
            </div>
        )
    }
    
}

export default CharacterList;