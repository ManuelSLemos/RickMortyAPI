import React, { Component } from 'react';

import axios from 'axios';

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
            <div>
                {
                    this.state.characters.map( 
                        item => <div key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <p>ID: {item.id} </p>
                                <p>Name: {item.name} </p>
                            </div>
                    )
                }
            </div>
        )
    }
    
}

export default CharacterList;