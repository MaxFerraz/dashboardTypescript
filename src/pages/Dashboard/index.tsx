import React from 'react';
import ContentHeader from '../../components/ComponentsGerais/ContentHeader';
import SelectInput from '../../components/ComponentsGerais/SelectInput';
import { Container } from './styles';

const Dashboard: React.FC = () =>{

    // aqui são os valores que serão exibidos no selectinput
    const options = [
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Maria', label: 'Maria'}
    ]

    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;