import {Button} from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import '../../src/App.css'

const HistoryButton = () => {
  return (
    <>
        <Button className="button-historial" size="large" type="primary" href="/historiales">
            <EyeOutlined />Historiales
        </Button>
    </>
  )
}

export default HistoryButton;
