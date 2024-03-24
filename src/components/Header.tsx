import {Button, Input} from "antd";
import React, {useState} from "react";
import useStore from "store";
import styled from "styled-components";
import type { RadioChangeEvent, SelectProps } from 'antd';
import { Radio, Modal } from 'antd';

type SelectCommonPlacement = SelectProps['placement'];


const HeaderLayout = styled.header `
    
    display: flex;
    background-color: white;
    border-radius: 15px;
    
    
    
`

const TicketOptions = styled.div `
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    //left: 32vw;
    left: 0;
    right: 0;
    top: 0;
    margin: 2vh auto;
    padding: 10px;
    //width: 50%;
    height: 50px;
    background-color: white;
    border-radius: 15px;
    z-index: 3 ;
    
    .btn{
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 320px) {
        font-size: 3vw  ;
        //flex-wrap: wrap;
        .btn{
            font-size: 3vw;
            width: fit-content;
            height: 15px;
        }
        .search{
            width: 20vw;
            height: 15px;
            display: flex;
        }
        
        .searchInput {
            width: 15vw;
            height: 5vw;
        }
    }
    
    
`


const Header = () => {

    const {
        sortByPrice,
        sortByFlightTime,             // разобраться с типами
        searchItem,
        order,
        sendingOrder,
        setTotalPrice,
        totalPrice

    }:any= useStore()


    console.log('Total Price', totalPrice )


    const [search, setSearch] = useState('')
    const [placement, SetPlacement] = useState<SelectCommonPlacement>('topLeft');


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const placementChange = (e: RadioChangeEvent) => {
        SetPlacement(e.target.value);
    };


    const setCheckedBtn = (e:any ) => {


        let isClicked = false

        if (e) {
            isClicked = true
        }
        console.log('eee',e)
    }



    function searchFn (e:React.ChangeEvent<HTMLInputElement>)  {
        e.preventDefault
        setSearch(e.target.value)
    }

    // const sumOfTicket = (t) => {
    //     t.reduce(())
    // }

    return (

        <HeaderLayout>

            <TicketOptions>

                <Modal  title="Заказ Отправлен" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Заказ Отправлен!</p>

                </Modal>

                <div>
                    Стоимость билетов :  {totalPrice}
                </div>

                <div> Билетов в заказе: {order.length}</div>

                <Button className={'btn'} onClick={()=>{sendingOrder(); showModal(); setTotalPrice()}}>Отправить заказ</Button>


                <div className={'search'}>
                    <Input className={'searchInput'} type="text" onChange={searchFn}/>
                </div>
                <Button className={'btn'} onClick={() => searchItem(search)}>Поиск</Button>


            </TicketOptions>

        </HeaderLayout>
    )
}

export default Header
