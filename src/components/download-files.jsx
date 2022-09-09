import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const DownloadFiles = () => {
  return (
    <>
        <Button size="large" type="primary" icon={<DownloadOutlined />}>
            Download
        </Button>
    </>
  )
}

export default DownloadFiles;