import React from 'react';
import styled from 'styled-components';
const ErrorBlock = styled.span`
    text-align: center;
    display: block;
    margin: 5px 0 15px 0;
    color: red;      
`;
const ErrorMessage = () => {
    return <ErrorBlock>Something goes wrong!</ErrorBlock>
};

export default ErrorMessage;