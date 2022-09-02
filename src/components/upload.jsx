import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const fileList = [

];

const upload = () => {
  return (
    <>
      <Upload 
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        defaultFileList={[...fileList]}
        className="upload-list-inline"
      >
        <Button size="large" danger icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      <br></br>
      <Button size="large" type="primary" danger>Solicitar Permiso</Button>
    </>
    
  )
}

export default upload;