import styled from "styled-components";
import { Checkbox} from 'antd';
import useStore from "store";



const Container  = styled.div `
    display: flex;
    flex-direction: column;
    width: 300px;
    border: darkgreen solid;
    h5{
        color: black;
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

            <Checkbox onClick={reset} >Все</Checkbox>
            <Checkbox onClick={sortByTransferNumBy0}> Без пересадок </Checkbox>
            <Checkbox onClick={sortByTransferNumBy1}> 1 пересадка </Checkbox>
            <Checkbox onClick={sortByTransferNumBy2}> 2 пересадки </Checkbox>
            <Checkbox onClick={sortByTransferNumBy3}> 3 пересадки </Checkbox>
        </Container>
    );
};

export default SideBar;
