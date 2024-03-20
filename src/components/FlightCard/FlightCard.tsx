import React from 'react';
import styled from "styled-components";
import FlightInfoLine from "components/FlightInfoElement/FlightInfoLine";

const Container = styled.div`
    display: flex;
    border: red solid;
    width: 500px;
    flex-direction: column;
    
`
const Header = styled.div`
    display: flex;
    align-items: center;
    border: blue solid;
    justify-content: space-evenly;
    
`

const FlightInfo = styled.div`
    display: flex;
    border: aqua solid;
    flex-direction: row;
    justify-content: space-around;
`


const FlightCard = () => {
    return (
        <Container>
            <Header>
                <p>PRISE</p>
                <img src="" alt="ssssssss"/>
            </Header>

            <FlightInfoLine/>

        </Container>


    );
};

export default FlightCard;
