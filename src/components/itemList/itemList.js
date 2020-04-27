import React, {Component} from 'react';

import styled from 'styled-components';
import gotService from "../../services/GotService";
import Spinner from "../spinner";
import ErrorMessage from "./../errorMessage"

const ListChar = styled.ul`
    .list-group-item {
        cursor: pointer;
    }
`;

const ListCharItem = styled.li`

`;

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null,
        error: false
    };

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            });
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id, name } = item;
            return (
                <ListCharItem key={id}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(id)}
                >
                    {name}
                </ListCharItem>
            )
        });
    }

    onError(){
        this.setState({
            error: true
        })
    }

    render() {
        const { charList } = this.state;

        if(this.state.error) {
            return <ErrorMessage/>
        }

        if(!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ListChar className="item-list list-group">
                {items}
            </ListChar>
        );
    }
}