import './styles/inicio-requester.css';
import ListFilesAprobados from '../components/list-files-aprobados'
import ListFilesDenegados from '../components/list-files-denegados'

const Historiales = () => {
    return (
        <div className="general">
            <div className="page-header">
                <div className="page-caption">
                    <h1 className="page-title">Historiales</h1>
                </div>
            </div>
            <div className="page-body cyan">
                <div className="contenedor con-select blue">
                    <div className="contenido">
                        <h2>Historial de Aprobados</h2>
                        <p>Mira el historial de los datos que han sido aprobados mediante la solicitud de algún requester.</p>
                        <ListFilesAprobados/>
                    </div>
                </div>
                <div className="contenedor con-download red">
                    <div className="contenido">
                        <h2>Historial de Denegados</h2>
                        <p>Mira el historial de los datos que han sido denegados mediante la solicitud de algún requester.</p>
                        <ListFilesDenegados/>
                    </div>
                </div>     
            </div>
        </div>
    )
}

export default Historiales;