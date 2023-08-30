import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Buscador = (props) => {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onEnter = (e) => {
        if (e.key === "Enter") {
            props.searchDate(text);
        }
    }

    return (
        <>
            <div className='search-container'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Selecciona una fecha</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Selecciona una fecha"
                            value={text}
                            onKeyDown={onEnter}
                            onChange={onChange} />
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default Buscador;