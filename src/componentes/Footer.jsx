import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <>
            <Navbar fixed="bottom" className='bg-body-tertiary'>
                <Container>
                    <div className="footer">Hecho por Karim Mazzone - @feriadosChile</div>
                </Container>
            </Navbar>

        </>
    )
}

export default Footer;