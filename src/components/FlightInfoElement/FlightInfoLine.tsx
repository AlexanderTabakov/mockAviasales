import React from 'react';
import styled from "styled-components";
import useStore from "store";


export interface IProps {
    airportDeparture?:string;
    airportArrival?:string
    timeInFlight?:number;
    departureAt?:number;
    arrivalAt?:number;
    transfer?:string
}

const FlightInfoLineStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;    
`


const FlightInfoElement = styled.div`
        display: flex;
        flex-direction: column;
`

const FlightInfoLine:React.FC <IProps>= ({airportDeparture,airportArrival, departureAt,arrivalAt, timeInFlight,transfer}) => {

    const { data }:any= useStore()



    return (

        <FlightInfoLineStyle >

            <FlightInfoElement>
                <div>
                    <p>{airportDeparture}</p> - <p>{airportArrival}</p>
                    <p>{departureAt}</p> - <p>{arrivalAt}</p>
                </div>
            </FlightInfoElement>

            <FlightInfoElement>
                <p>В пути</p>
                <p>{timeInFlight}</p>
            </FlightInfoElement>
            <FlightInfoElement>
                <p>Пересадка</p>
                <p>{transfer}</p>
            </FlightInfoElement>

        </FlightInfoLineStyle>
    );
};


export default FlightInfoLine;
