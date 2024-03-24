
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import {Button} from "antd";



const FlightInfoLineStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;    
`


const FlightInfoElement = styled.div`
        display: flex;
        flex-direction: column;
`


interface IFlightCardProps {
    price:number,
    airportDeparture?:string;
    airportArrival?:string
    timeInFlight?:number;
    departureAt?:number;
    arrivalAt?:number;
    transfer?:string;
    numOfTransfer?:number,
    id:number
}

const Container = styled.div`
    display: flex;
    background-color: white;
    border-radius: 15px;
    width: 45vw;
    flex-direction: column;
    margin:2vw 1vw;
    
    .btn{
        width: fit-content;
        left:50%;
        transform:translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    
    @media (max-width: 768px) {
        font-size: 2vw;
        .btn{
            font-size: 3vw;
            //width: 30vw;
            //height: 5vw;
            width: fit-content;
        }

        @media (min-width: 320px) {
            font-size: 2vw;
            margin-top: 22px;
            .btn{
                font-size: 2vw;
                padding: 1px 0 1px 0;
                //width: 30vw;
                height: 15px;
                width: fit-content;
            }
    }
    
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
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
    numOfTransfer,
    id})  => {


    const router = useNavigate()

    return (

        <Container>
            <Header>
                <p>{price} Р    </p>
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
                    <p>{timeInFlight} Ч</p>
                </FlightInfoElement>
                <FlightInfoElement>
                    {/*<p>Пересадка</p>*/}
                    <p>{numOfTransfer ? "Пересадки" : "Пересадка"}</p>
                    <p>{transfer}</p>

                </FlightInfoElement>

            </FlightInfoLineStyle>

            <Button className={'btn'} onClick={()=>router(`/ticket/${id}`)}>Открыть Билет</Button>

        </Container>


    );


};
export default FlightCard;
