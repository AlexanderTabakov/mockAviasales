import React from 'react';
import styled from "styled-components";
import { Checkbox } from 'antd';
import type { GetProp } from 'antd';


const Container  = styled.div `
    display: flex;
    flex-direction: column;
    width: 300px;
    border: darkgreen solid;
    h5{
        color: black;
    }
`

const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
    console.log('checked = ', checkedValues);
};



const options = [
    { label: 'Apple1', value: 'Apple1' },
    { label: 'Apple2', value: 'Apple2' },
    { label: 'Apple3', value: 'Apple3' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];

const SideBar = () => {
    return (
        <Container>
            <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
            <Checkbox.Group style={{flexDirection:"column"}} options={options} defaultValue={['Pear']} onChange={onChange} />
        </Container>
    );
};

export default SideBar;
