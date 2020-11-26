import React, { Component } from 'react';

class CharacterItem extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <img src={this.props.item.image} alt={this.props.item.name} />
                <p>ID: {this.props.item.id} </p>
                <p>Name: {this.props.item.name} </p>
            </div>
        )
    }
}

export default CharacterItem;