import styled from "styled-components"

export const Main = styled.div`
    display : flex;
    justify-content : space-evenly;

     @media(max-width : 560px){
        flex-direction   : column;
        align-content : center;
        align-items : center;
    }
`

export const MainBody = styled.div`
    background-color : #F8F9FF;
    height : 100vh;

`