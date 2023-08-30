import { useEffect, useState } from "react";
import CardApp from "./CardApp";

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
        const data = info.filter((element)=> element.date === fecha);
        setInfo(data);
        props.setCanReload(true);
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
        <div className="main-card">
            {
                info.map((item, index) => <CardApp
                    key={index}
                    title={item.title}
                    type={item.type}
                    date={item.date}
                    extra={item.extra}
                />)
            }

        </div>
    )
}



export default MiApi;