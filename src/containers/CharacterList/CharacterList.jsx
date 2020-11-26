import React, { Component } from 'react';

import axios from 'axios';

import CharacterItem from '../../components/CharacterItem/CharacterItem';

import './CharacterList.css';

class CharacterList extends Component {
    constructor(props){
        super(props);

        this.state = {
            characters: [],
            page: 1
        }
    }

    componentDidMount(){
        this.getCharacterServices(this.state.page);
    }

    getCharacterServices(page){
        axios.get('https://rickandmortyapi.com/api/character?page=' + page)
        .then( api => {
            console.log(api.data.results)
            this.setState({ characters: api.data.results })
        })
        .catch( err => console.log(err));
    }


    onBeforePage = () => {
        this.setState( prevState => ({ page: prevState.page - 1}), () => {
            this.getCharacterServices(this.state.page);
            console.log(this.state.page)
        })

    }

    onNextPage = () => {
        this.setState( prevState => ({ page: prevState.page + 1}), () => {
            this.getCharacterServices(this.state.page);
            console.log(this.state.page)
        })

    }


    render(){
        return(
            <div>
                <div>
                    <button onClick={() => this.onBeforePage()}> Atras </button>
                    <button onClick={() => this.onNextPage()}> Adelante </button>
                </div>
                <div className="grid">
                    {
                        this.state.characters.map( 
                            item => <CharacterItem item={item} />
                        )
                    }
                </div>
            </div>
        )
    }
    
}

export default CharacterList;