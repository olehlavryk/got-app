import React, {Component} from 'react';

import styled from 'styled-components';
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

    state = {
        itemList: null,
        error: false
    };

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            });
    }

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.renderItem(item);
            return (
                <ListCharItem key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    { label }
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
        const { itemList } = this.state;

        if(this.state.error) {
            return <ErrorMessage/>
        }

        if(!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ListChar className="item-list list-group">
                {items}
            </ListChar>
        );
    }
}