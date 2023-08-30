import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import appIcon from '../assets/app-icon.png';

const Header = () => {


    const nowDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        let result = '';

        if (month < 10) {
            result = `${day}-0${month}-${year}`;
        } else {
            result = `${day}-${month}-${year}`
        }

        return result;
    };

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={appIcon} className='app-icon' />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Hoy es: <b>{nowDate()}</b>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header; 