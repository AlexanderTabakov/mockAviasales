import React, {useEffect, useState} from 'react';
import FlightCard from "components/FlightCard/FlightCard";
import SideBar from "components/SideBar/SideBar";
import styled from "styled-components";
import useStore, {IState} from "store";
import Header from "components/Header";
import {Radio, type RadioChangeEvent, type SelectProps} from "antd";
type SelectCommonPlacement = SelectProps['placement'];



const Container = styled.div `
    display: flex;
    flex-direction: row;
    padding-top: 14vh;
    
`

const TicketLayout = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    .btnGroup{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        position: fixed;
        z-index: 3;
        width: 45vw;
        gap: 12px;
    }

    .RadioBtn{
        
        width: 34vw;
        padding: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    @media(max-width: 768px) {
        .RadioBtn{
            width: fit-content;
            height: 20px;
            font-size: 2vw;
            padding: 5px;
        }
    }
    
`

const Layout = styled.main`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        justify-content: flex-end;
        font-size: 2vw ;
    }
    @media (min-width: 1920px) {
        justify-content: center;
    }
`


const MainLayout = () => {
    const { data,         // разобраться с типами
        loading,
        hasErrors,
        fetch,
        copiedData,
        copyData,
        order,
        sortByPrice,
        sortByFlightTime

    }:any= useStore()

    const [search, setSearch] = useState('')

    const [placement, SetPlacement] = useState<SelectCommonPlacement>('topLeft');


    const placementChange = (e: RadioChangeEvent) => {
        SetPlacement(e.target.value);
    };



    function searchFn (e:React.ChangeEvent<HTMLInputElement>)  {
        e.preventDefault
        setSearch(e.target.value)
    }

    console.log('search', search)



    useEffect(() => {
        setTimeout(copyData, 1000) // костыль, который пришлось сделать из-за особенности работы mockApi
        fetch()

    }, []);


    const ticket:any = [...copiedData]

    console.log('testOrder', order)


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

            <Layout>

                <Header/>
                <SideBar></SideBar>
                <Container>

                    <TicketLayout>

                        <Radio.Group className={'btnGroup'} buttonStyle={'solid'} value={placement} onChange={placementChange}>
                            <Radio.Button  className={'RadioBtn'} onClick={sortByPrice} value="topLeft">Самый Дешевый</Radio.Button>
                            <Radio.Button className={'RadioBtn'} onClick={sortByFlightTime} value="topRight">Самый Быстрый</Radio.Button>
                        </Radio.Group>


                        {ticket.map((ticket: any) => <FlightCard
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

            </Layout>
        </>


    );
};

export default MainLayout;
