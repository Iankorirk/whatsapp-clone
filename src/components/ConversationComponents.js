import styled from "styled-components";

const Container =styled.div`
display:flex;
flex-direction: column;
height:100%;
flex:2;
`


const ContainerComponents =() => {
    return (<Container>"ContainerComponent"</Container>)
};

export default ContainerComponents;