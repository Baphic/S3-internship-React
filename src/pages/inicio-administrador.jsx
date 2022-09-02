import './styles/inicio-requester.css';
import SelectSolicitud from '../components/select-solicitudes'
import DownloadFiles from '../components/download-files'
import ListFilesSolicitud from '../components/list-solicitud-files'

const InicioAdministrador = () => {
    return (
        <div className="general">
            <div class="page-header">
                <div class="page-caption">
                    <h1 class="page-title">Bucket internship-project-21</h1>
                </div>
            </div>
            <div class="page-body cyan">
                <div className="contenedor con-select red">
                    <div className="contenido">
                        <h2>Solicitud</h2>
                        <p>Mira el listado y selecciona una solicitud para poder ver los datos que contiene y decide aprobarla o denegarla.</p>
                        <SelectSolicitud/>
                    </div>
                </div>
                <div className="contenedor con-download orange">
                    <div className="contenido">
                        <h2>Datos</h2>
                        <p>Mira el listado de los datos que se encuentran en la solicitud seleccionada.</p>
                        <ListFilesSolicitud/>
                    </div>
                </div>     
                <div className="contenedor con-upload blue">
                    <div className="contenido">
                        <h2>Descarga de Archivos</h2>
                        <p>Selecciona y descarga el archivo que desees de la solicitud.</p>
                        <DownloadFiles/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InicioAdministrador;