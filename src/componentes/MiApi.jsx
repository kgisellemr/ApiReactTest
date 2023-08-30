import { useEffect, useState } from "react";
import CardApp from "./CardApp";
import { Button, ButtonGroup } from "react-bootstrap";

const MiApi = (props) => {
    const [info, setInfo] = useState([]);

    const consultarApi = async () => {
        const url = "https://api.victorsanmartin.com/feriados/en.json";
        const response = await fetch(url);
        const result = await response.json();
        setInfo(result.data);
        props.setCanReload(false);
    };

    const buscarFecha = (fecha) => {
        const data = info.filter((element) => element.date === fecha);
        setInfo(data);
        props.setCanReload(true);
    };

    const handleInverse = () => {
        const data = info.slice().reverse();
        setInfo(data);
    };

    const handleSort = () => {
        const data = info.slice().sort((a, b) => a.title.localeCompare(b.title));
        console.log(data);
        setInfo(data);
    };

    useEffect(() => {
        if (!props.canReload) {
            consultarApi();
        }
    }, [props.canReload]);

    useEffect(() => {
        buscarFecha(props.findDateState)
    }, [props.findDateState]);

    return (
        <>
            <div className="button-group-container">
                <ButtonGroup size="sm">
                    <Button onClick={handleInverse}>Invertir Resultados</Button>
                    <Button onClick={handleSort} variant="secondary">Ordenar</Button>
                </ButtonGroup>
            </div>
            <div className="main-card">
                {info.map((item, index) => <CardApp
                    key={index}
                    title={item.title}
                    type={item.type}
                    date={item.date}
                    extra={item.extra}
                    number={index + 1}
                />)}
            </div>
        </>
    )
}



export default MiApi;