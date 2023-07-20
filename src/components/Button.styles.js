import styled from "styled-components";


export const Button = styled.button`
    background-color : ${({backgroundColor}) => backgroundColor  ? '#E13E00' : '#245EC7' };
    color: white;
    padding : 16px;
    border-radius: 10px;
    border-color : transparent;
    margin : 20px 0;
    font-family : 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif

`

export const TransactionButton = styled.button`
    background-color : #F8F9FF;
    color: ${({backgroundColor}) => backgroundColor  ? '#E13E00' : '#245EC7' };
    padding : 10px;
    border-radius: 5px;
    border-color : ${({backgroundColor}) => backgroundColor  ? '#E13E00' : '#245EC7' };
    margin : 20px 10px;
    font-family : 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
`

