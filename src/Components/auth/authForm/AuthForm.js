import { useState } from 'react';
import { useStore } from '../../../storeMobx';
import { observer } from 'mobx-react';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { pathes } from '../../../utils/pathes';
import { signInWithEmailAndPassword, registerWithEmailAndPassword } from '../../../Firebase/signInMetods.js';

import styles from './styles.module.scss';
import classNames from 'classnames';
import { Form, Input, Button, Checkbox } from 'antd';

const AuthForm = observer(() => {
  const { AuthStore } = useStore();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [login, setLogin] = useState(true);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const setUser = async () => {
    if (login) {
      const res = await signInWithEmailAndPassword(formData.email, formData.password);
      if (res) {
        AuthStore.toggleModalAction();
        navigate(pathes.home);
      }
    } else {
      registerWithEmailAndPassword(formData.name, formData.email, formData.password);
      navigate(pathes.login);
      AuthStore.toggleModalAction();
    }
  };

  const onChange = evt => {
    const { value, name } = evt.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onFinish = () => {
    setUser();
    setLogin(true);
    form.setFieldsValue({
      name: '',
      email: '',
      password: '',
    });
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.authForm}>
      <Form
        form={form}
        name="AuthForm"
        className={styles.form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className={styles.btnContainer}>
          <Button
            className={classNames(styles.btnChange, { [styles.activ]: login })}
            type="primary"
            onClick={() => setLogin(true)}
          >
            {t('loginPage.sign_in')}
          </Button>

          <Button
            className={classNames(styles.btnChange, { [styles.activ]: !login })}
            type="primary"
            onClick={() => setLogin(false)}
          >
            {t('loginPage.registration')}
          </Button>
        </div>

        {!login && (
          <Form.Item
            label={t('loginPage.name')}
            name="name"
            rules={[{ required: true, message: t('loginPage.enter_your_name_please') }]}
          >
            <Input name="name" value={formData.name} onChange={e => onChange(e)} />
          </Form.Item>
        )}
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: t('loginPage.enter_your_email_please') }]}
        >
          <Input name="email" value={formData.email} onChange={onChange} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: t('loginPage.enter_your_password_please') }]}
        >
          <Input.Password name="password" value={formData.password} onChange={onChange} />
        </Form.Item>
        {login && (
          <p
            className={styles.forgotPassword}
            type="button"
            onClick={() => {
              AuthStore.setForgotPasswordAction();
            }}
          >
            {t('loginPage.forgot_password')} ?
          </p>
        )}
        <Form.Item
          className={styles.chekbox}
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>{t('loginPage.remember_me')}</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {t('loginPage.confirm')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});

export default AuthForm;
