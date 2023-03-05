import styled from "styled-components";
import { BiMessageDetail } from 'react-icons/fa';
class Question extends React.Component {
    render() {
        return <h3> Lets go for a <BiMessageDetail />? </h3>
    }
}

const Container = styled.div`
display:flex;
flex-direction:column;
height:100%;
flex: 0.8;
`
function ContactListComponents () {
    return <Container>'ContactListComponent'</Container>;
}

export default ContactListComponents;
