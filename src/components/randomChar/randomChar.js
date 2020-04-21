import React, {Component} from 'react';

import styled from 'styled-components';

import gotService from "../../services/GotService";
import Spinner from "../spinner";
import ErrorMessage from '../errorMessage';


const RandomCharBlock = styled.div`
    background-color: #fff;
    padding: 25px 0 15px 0;
    margin-bottom: 40px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.125);

    h4 {
        margin-bottom: 20px;
        text-align: center;
    }

    .term {
        font-weight: bold; 
    }
`;

export default class RandomChar extends Component {

    gotService = new gotService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    constructor(props) {
        super(props);

        this.updateChar();
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        });
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    updateChar() {
        const id = Math.floor(Math.random() * 140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const { char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error ) ? <View char={char} /> : null;

        return (
           <RandomCharBlock>
               { errorMessage }
               { spinner }
               { content }
            </RandomCharBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    );
};
