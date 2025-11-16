import { Modal } from "antd";

type DeleteModalType = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
const DeleteModal = ({ open, setOpen }: DeleteModalType) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal open={open} onCancel={handleClose}>
      <div>delete me</div>
    </Modal>
  );
};

export default DeleteModal;
