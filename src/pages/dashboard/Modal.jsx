import { Modal as AntdModal, Button, Typography } from "antd";
import "./modal.scss";

const { Text } = Typography;

const Modal = ({ show, onClose, onConfirm }) => {
  return (
    <AntdModal
      visible={show}
      onCancel={onClose}
      onOk={onConfirm}
      okText="Yes"
      cancelText="No"
      title="Confirm Delete"
      centered
    >
      <Text>Do you want to delete this course?</Text>
    </AntdModal>
  );
};

export default Modal;
