import { useStore } from '../../storeMobx';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { pathes } from '../../utils/pathes';

import styles from './styles.module.scss';
import { Modal } from 'antd';

const ModalAnt = observer(({ title, visible, children, width }) => {
  const { AuthStore } = useStore();
  const navigate = useNavigate();

  const handleOk = () => {
    AuthStore.toggleAntModalAction();
  };
  const handleCancel = () => {
    AuthStore.toggleAntModalAction();
    navigate(pathes.home);
    AuthStore.resetForgotPasswordAction();
  };

  return (
    <Modal
      title={title}
      className={styles.modal}
      width={width}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={true}
    >
      {children}
    </Modal>
  );
});

export default ModalAnt;
