import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import FlightInfoLine from "components/FlightInfoElement/FlightInfoLine";
import {IProps} from "components/FlightInfoElement/FlightInfoLine";
import useStore from "store";
import { useNavigate } from "react-router-dom";
import path from "path";
import {date} from "yup";


const FlightInfoLineStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;    
`


const FlightInfoElement = styled.div`
        display: flex;
        flex-direction: column;
`


export interface IFlightCardProps {
    price:number,
    airportDeparture?:string;
    airportArrival?:string
    timeInFlight?:number;
    departureAt?:number;
    arrivalAt?:number;
    transfer?:string;
    id:number
}

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



const FlightCard:React.FC<IFlightCardProps> = ({
    price,
    airportDeparture,
    airportArrival,
    departureAt,
    arrivalAt,
    timeInFlight,
    transfer,
    id})  => {

    // const [ticket, setTicket] = useState(null)

    // const {data,copyData} = useStore()
    // useEffect(() => {
    //     setTimeout(copyData, 1000)
    //
    //
    //
    // }, []);

    // console.log('DATA',data)

    const router = useNavigate()

    return (

        <Container>
            <Header>
                <p>{price}</p>
                <img src="" alt="ssssssss"/>
            </Header>

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

            <button onClick={()=>router(`/ticket/${id}`)}>Кнопка билета</button>
            {/*<button onClick={()=>router(`/ticket`,{state:{data:id}})}>Кнопка билета</button>*/}

        </Container>


    );


};
export default FlightCard;
