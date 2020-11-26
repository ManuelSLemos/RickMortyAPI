import React, { Component } from 'react';

import axios from 'axios';

class CharacterList extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios.get('https://rickandmortyapi.com/api/character')
            .then( api => console.log(api.data.results))
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