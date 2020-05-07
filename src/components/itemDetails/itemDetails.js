import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/';
import ErrorMessage from "./../errorMessage"

const SelectMessage = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 26px;
  color: #fff;
`;

const CharDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 0 15px 0;
    margin-bottom: 40px;

    h4 {
        margin-bottom: 20px;
        text-align: center;
    }

    .select-error {
        color: #fff;
        text-align: center;
        font-size: 26px;
    }
`;

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Field
}

export default class ItemDetails extends Component {

    state = {
        item: null,
        error: false,
        loading: true,
    };

    componentDidMount() {
        this.updateItem();
    };

    componentDidUpdate(prevProps) {
        if(this.props.itemId != prevProps.itemId) {
            this.updateItem();
        }
    };

    onCharDetailsLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
    };

    updateItem() {
        const {itemId, getData} = this.props;

        if(!itemId) {
            return
        }

        this.setState({
            loading: true
        });

        // this.gotService.getCharacter(itemId)
        getData(itemId)
            .then(this.onCharDetailsLoaded)
            .catch( () => this.onError());
    };

    onError(){
        this.setState({
            item: null,
            error: true
        })
    };

    render() {

        if (!this.state.item && this.state.error) {
            return <ErrorMessage/>
        } else if (!this.state.item) {
            return <span className="select-error">Please select a item</span>
        }

        const {item} = this.state;

        const {name} = item;

        if(this.state.loading) {
            return (
                <CharDetailsBlock className="rounded">
                    <Spinner/>
                </CharDetailsBlock>
            )
        }

        return (
            <CharDetailsBlock className="rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </CharDetailsBlock>
        );
    }
}