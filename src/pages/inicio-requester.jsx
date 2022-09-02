import './styles/inicio-requester.css';
import Select from '../components/select-directorios'
import Upload from '../components/upload'
import ListFiles from '../components/list-files'

const Inicio = () => {
    return (
        <div className="general">
            <div class="page-header">
                <div class="page-caption">
                    <h1 class="page-title">Bucket internship-project-21</h1>
                </div>
            </div>
            <div class="page-body cyan">
                <div className="contenedor con-select blue">
                    <div className="contenido">
                        <h2>Directorio</h2>
                        <p>Mira el listado y selecciona el directorio al que deseas entrar para subir o ver archivos.</p>
                        <Select/>
                    </div>
                </div>
                <div className="contenedor con-download orange">
                    <div className="contenido">
                        <h2>Archivos</h2>
                        <p>Mira el listado de los archivos que se encuentran en el directorio seleccionado.</p>
                        <ListFiles/>
                    </div>
                </div>     
                <div className="contenedor con-upload red">
                    <div className="contenido">
                        <h2>Solicitar Subir Archivos</h2>
                        <p>Selecciona los archivos que deseas subir al directorio seleccionado y solicita permisos para poder subirlos.</p>
                        <Upload/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio;