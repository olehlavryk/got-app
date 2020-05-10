import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundBlock = styled.div`
  text-align: center;
  color: #fff;
  
  a {
    text-decoration: underline;
  }
`;
export default class NotFoundPage extends React.Component{
    render(){
        return (
            <NotFoundBlock>
                <h1>Page Not Found!</h1>
                <p>
                    <Link to="/">Go to Home </Link>
                </p>
            </NotFoundBlock>
        );
    }
}