import React, { Component } from 'react';

import axios from 'axios';

import CharacterItem from '../../components/CharacterItem/CharacterItem';

class CharacterList extends Component {
    constructor(props){
        super(props);

        this.state = {
            characters: []
        }
    }

    componentDidMount(){
        axios.get('https://rickandmortyapi.com/api/character')
            .then( api => {
                console.log(api.data.results)
                this.setState({ characters: api.data.results })
            })
            .catch( err => console.log(err));
        
    }

    render(){
        return(
            <div className="grid">
                {
                    this.state.characters.map( 
                        item => <CharacterItem item={item} />
                    )
                }
            </div>
        )
    }
    
}

export default CharacterList;