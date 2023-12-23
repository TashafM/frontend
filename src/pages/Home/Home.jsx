import React from 'react'
import './home.scss'
import Topbar from '../../components/TopBar/Topbar'
import { Container } from 'react-bootstrap'
import AddBox from '../../components/AddBox/AddBox'
import './home.scss'

const Home = () => {
    return (
        <Container fluid className='home'>
            <AddBox />
        </Container>
    )
}

export default Home
