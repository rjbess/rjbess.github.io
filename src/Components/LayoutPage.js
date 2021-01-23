import React from 'react'
import Container from 'react-bootstrap/Container'

class LayoutPage extends React.Component{
   render(){
        return(
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default LayoutPage;