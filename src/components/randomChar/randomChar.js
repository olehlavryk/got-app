import React, {Component} from 'react';

import styled from 'styled-components';

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

    render() {

        return (
            <RandomCharBlock>
                <h4>Random Character: John</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </RandomCharBlock>
        );
    }
}
