import React from 'react';
import FlightCard from "components/FlightCard/FlightCard";
import SideBar from "components/SideBar/SideBar";
import styled from "styled-components";

const Container = styled.div `
    display: flex;
    
`

const MainLayout = () => {
    return (

        <Container>

            <SideBar></SideBar>

            <FlightCard></FlightCard>

        </Container>
    );
};

export default MainLayout;
