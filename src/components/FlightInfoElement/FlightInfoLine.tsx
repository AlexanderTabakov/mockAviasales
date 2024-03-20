import React from 'react';
import styled from "styled-components";


const FlightInfoLine = () => {

    const FlightInfoLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;    
`


    const FlightInfoElement = styled.div`
        display: flex;
        flex-direction: column;
`

    return (

        <FlightInfoLine >

            <FlightInfoElement>
                <p>Направление</p>
                1045-0800
            </FlightInfoElement>

            <FlightInfoElement>
                <p>В пути</p>
                21 15 ч
            </FlightInfoElement>
            <FlightInfoElement>
                <p>Пересадка</p>
                HKG, JNB
            </FlightInfoElement>

        </FlightInfoLine>
    );
};

export default FlightInfoLine;
