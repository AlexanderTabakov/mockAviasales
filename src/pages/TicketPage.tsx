import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useStore from "store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "components/Header";
import {Button} from "antd";






const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    padding: 1vw;
    border-radius: 15px;
    width: 50vw;
    background-color: white;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    overflow: auto;
    
    
    
    .btn{
        width: fit-content;
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    @media (min-width: 320px) {
        margin-top: 20px;
        font-size: 2vw;
        width: 80vw;
        .btn{
            width: 33vw;
            font-size: 2vw;
        }
    }
    
    @media (max-width: 768px) {
        margin-top: 20px;
        overflow: auto;
    }
    
    
`
const TicketHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    
`

const FlightInfoLineStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
`


const FlightInfoElement = styled.div`
        display: flex;
        flex-direction: column;
    .ticketInfo{
        border: aliceblue solid 2px;
        border-radius: 10px;
        padding: 6px;
        margin: 10px;
        
    }
    
   
`


const TicketPage = (id:any) => {
    const params = useParams()
    const {loading, hasErrors, order, addOrder, removeOrder, setTotalPrice } = useStore()
    const router = useNavigate()



    const [ticket, setTicket] = useState({
        price:null,
        airportDeparture:null,
        airportArrival:null,
        timeInFlight:null,
        departureAt:null,
        arrivalAt:null,
        transfer:null,
        id:null
    })



    // const isAdded = useSelector(({cart}) => cart.list.find((product) => product.id === id ))

    const isAdded = order.find((t:any ) => t.id === id )   //  неплохо бы доделать функцию

    const [purchase, setPurchase] = useState(null)

    useEffect(() => {

        async function testPost (id:string) {
            const response = await axios.get(
                "https://65faa5a63909a9a65b1b056e.mockapi.io/ticket/" + id
            );
            setTicket(response.data)
            return response;

        }

        testPost(params.id)
            .then(({data})=> {
                setTicket(data)
            })

    }, []);

    const newOrder = () => {
        setPurchase(ticket)
        addOrder(ticket)
    }

    const removeTicket = (id:any) => {
        removeOrder(ticket.id)
        setTotalPrice()
    }

    console.log('  ticket 2 ', ticket)


    if(loading) {
        return <div>Loading...</div>
    }

    if(hasErrors) {
        return <div>An Error Has Occurred</div>
    }

    console.log('order', purchase)

    console.log('orderState', order)

    return (
        <>
            <Header/>

            <Container>

                <TicketHeader>
                    <p>{ticket.price} Р</p>
                    <img src="" alt="ssssssss"/>
                </TicketHeader>

                <Button className={'btn'} onClick={() => router(`/`)}>На Главную страницу</Button>

                <FlightInfoLineStyle>

                    <FlightInfoElement>

                        <div className={"ticketInfo"}> Аэропорт Отправления <p>{ticket.airportDeparture}</p> </div>
                        <div className={"ticketInfo"}> Аэропорт Прибытия <p>{ticket.airportArrival}</p> </div>
                        <div className={"ticketInfo"}> Отправление в  <p>{ticket.arrivalAt}</p> </div>
                        <div className={"ticketInfo"}> Прибытие в  <p>{ticket.departureAt}</p> </div>

                    </FlightInfoElement>

                    <FlightInfoElement>
                        <p>В пути</p>
                        <p>{ticket.timeInFlight} ч </p>
                    </FlightInfoElement>
                    <FlightInfoElement>
                        <p>Пересадка</p>
                        <p>{ticket.transfer}</p>
                    </FlightInfoElement>

                </FlightInfoLineStyle>



                <Button className={'btn'} onClick={()=> {newOrder(); setTotalPrice()}}>Купить билет</Button>
                <Button className={'btn'} onClick={removeTicket}>Удалить билет</Button>


            </Container>

        </>
    );

};

export default TicketPage;
