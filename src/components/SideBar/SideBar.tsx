import styled from "styled-components";
import { Checkbox} from 'antd';
import useStore from "store";



const Container  = styled.div `
    display: flex;
    flex-direction: column;
    width: 20vw;
    position: fixed;
    left: 5vw;
    margin-top: 20vh;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    h5{
        color: black;
    }
    
    .checkBox {
        width: 5vw;
    }
    
    @media (max-width: 768px) {
        width: 40vw;
        font-size: 2vw;
    }

    @media (max-width: 320px) {
        width: 40vw;
        font-size: 2vw;
    }
`


const SideBar = () => {
    const {
        sortByTransferNumBy0,
        sortByTransferNumBy1,
        sortByTransferNumBy2,
        sortByTransferNumBy3,
        reset   }:any= useStore()    // разобраться с типами


    return (
        <Container>

            <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>

            <Checkbox  defaultChecked={true} className={'checkBox'} onClick={reset} >Все</Checkbox>
            <Checkbox className={'checkBox'} onClick={sortByTransferNumBy0}> Без пересадок </Checkbox>
            <Checkbox className={'checkBox'} onClick={sortByTransferNumBy1}> 1 пересадка </Checkbox>
            <Checkbox className={'checkBox'} onClick={sortByTransferNumBy2}> 2 пересадки </Checkbox>
            <Checkbox className={'checkBox'} onClick={sortByTransferNumBy3}> 3 пересадки </Checkbox>
        </Container>
    );
};

export default SideBar;
