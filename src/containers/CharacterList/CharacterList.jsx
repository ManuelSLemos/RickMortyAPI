import React, { Component, Fragment } from 'react';

import axios from 'axios';

import CharacterItem from '../../components/CharacterItem/CharacterItem';

import './CharacterList.css';

class CharacterList extends Component {
    constructor(props){
        super(props);

        this.state = {
            characters: [],
            search: [],
            page: 1,
            text: ''
        }
    }

    getCharacterServices = (page) => {
        axios.get('https://rickandmortyapi.com/api/character?page=' + page)
        .then( api => {
            console.log(api.data.results)
            this.setState({ characters: api.data.results })
        })
        .catch( err => console.log(err));
    }

    addCharacterServices = (page) => {
        axios.get('https://rickandmortyapi.com/api/character?page=' + page)
        .then( api => {
            console.log(api.data.results)
            this.setState( prevState => ({ characters: prevState.characters.concat(api.data.results) }))
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
        });
    }

    onViewMore = () => {
        this.setState( prevState => ({ page: prevState.page + 1}), () => {
            this.addCharacterServices(this.state.page);
            console.log(this.state.page)
        });
    }

    onHandleChange = (event) => {
        this.setState({ text: event.target.value }, () => {

            const data = this.state.characters
                .filter( item => item.name.toLowerCase().includes(this.state.text.toLowerCase()) );

            this.setState({ search: data});
        
        });
        
    }

    componentDidMount() {
        this.getCharacterServices(this.state.page);
    }

    render() {
        const { search, text, characters } = this.state;

        return(
            <Fragment>
                <div>
                    <button onClick={() => this.onBeforePage()}> Atras </button>
                    <input type="text" onChange={ event => this.onHandleChange(event) } />
                    <button onClick={() => this.onNextPage()}> Adelante </button>
                </div>
                <div className="grid">
                    {
                        search.length === 0 && text === ''
                            ? characters.map( item => <CharacterItem item={item} /> )
                            : search.map( item => <CharacterItem item={item} />  )
                    }
                </div>
                <button onClick={() => this.onViewMore()}> Ver Más </button>
            </Fragment>
        )
    }
    
}

export default CharacterList;