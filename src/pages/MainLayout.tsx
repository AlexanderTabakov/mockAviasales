import React, {useEffect, useLayoutEffect, useState} from 'react';
import FlightCard from "components/FlightCard/FlightCard";
import SideBar from "components/SideBar/SideBar";
import styled from "styled-components";
import useStore, {IState} from "store";
import {Button} from "antd";


const Container = styled.div `
    display: flex;
    flex-direction: row;
    
`

const TicketLayout = styled.div `
    display: flex;
    flex-direction: column;
`

const TicketOptions = styled.div `
    display: flex;
`


const MainLayout = () => {

    // const [order, setOrder] = useEffect(null)


    const { data,
        loading,
        hasErrors,
        fetch,
        sortByPrice,
        sortByFlightTime,
        copiedData,
        copyData,
           }:any= useStore()    // разобраться с типами


    // useLayoutEffect(()=> copyData(),[])


    useEffect(() => {
        setTimeout(copyData, 1000)
        fetch()


    }, []);


    const ticket:any = [...copiedData]


    console.log(ticket)

    if (hasErrors) {
        return <div>An Error Has Occurred</div>
    }

    if (loading) {
        return <div>...Loading</div>
    }


    console.log('ticket')

    return (
        <>
            <Container>

                <SideBar></SideBar>

                <TicketLayout>
                    <TicketOptions>

                        <Button onClick={sortByPrice}> Самый дешевый </Button>
                        <Button onClick={sortByFlightTime}> Самый быстрый </Button>

                    </TicketOptions>
                    {ticket.map((ticket:any) =>  <FlightCard
                        key={ticket.id}
                        price={ticket.price}
                        timeInFlight={ticket.timeInFlight}
                        airportArrival={ticket.airportArrival}
                        airportDeparture={ticket.airportDeparture}
                        arrivalAt={ticket.arrivalAt}
                        departureAt={ticket.departureAt}
                        transfer={ticket.transfer}
                        id={ticket.id}

                    />)}


                </TicketLayout>

            </Container>
        </>


    );
};

export default MainLayout;
