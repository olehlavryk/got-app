import React, {Component} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "reactstrap";
import RandomChar from "../../randomChar";

const ButtonToggle = styled.button`
    padding: 7px 20px;
    color: white;
    background: #244151;
    border: none;
    margin: 0 0 20px 0;
    border-radius: 5px;
    transition: background-color 300ms ease-in-out;
    outline: none;
    
    :hover {
      background: #4982a2;
    }
`;
export default class HomePage extends Component{
    state = {
        toggleRandomChar: true,
        error: false,
        selectedChar: 130,
    };

    toggleRandomChar = () => {
        this.setState({
            toggleRandomChar: !this.state.toggleRandomChar
        })
    };

    render() {
        const randomChar = this.state.toggleRandomChar ?  <RandomChar/> : null;

        return (
            <>
                <Row>
                    <Col lg={{size: 6, offset: 3}}>
                        <ButtonToggle onClick={this.toggleRandomChar}>Toggle random character</ButtonToggle>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{size: 6, offset: 3}}>
                        { randomChar }
                    </Col>
                </Row>

            </>
        )
    }
}