import React, {Component} from 'react';

import styled from 'styled-components';

const ListChar = styled.ul`
    .list-group-item {
        cursor: pointer;
    }
`;

const ListCharItem = styled.li`

`;

export default class ItemList extends Component {

    render() {
        return (
            <ListChar className="item-list list-group">
                <ListCharItem className="list-group-item">
                    John Snow
                </ListCharItem>
                <ListCharItem className="list-group-item">
                    Brandon Stark
                </ListCharItem>
                <ListCharItem className="list-group-item">
                    Geremy
                </ListCharItem>
            </ListChar>
        );
    }
}