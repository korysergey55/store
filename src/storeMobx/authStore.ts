import { makeAutoObservable, observable, action, reaction, toJS } from 'mobx';
import axios from 'axios';
import { toast } from 'react-toastify';

class AuthStore {
  token: any = localStorage.getItem('token') ? localStorage.getItem('token') : null;
  user: any = null;
  registUser: any = null;
  modal: boolean = false;
  antModal: boolean = false;
  forgotPassword: boolean = false;

  subscribeData: string = '';
  contactForm: any = [];

  constructor() {
    makeAutoObservable(this),
      {
        token: observable,
        user: observable,
        registUser: observable,
        modal: observable,
        antModal: observable,
        forgotPassword: observable,

        loginUserAction: action,
        logoutUserAction: action,
        registerUserAction: action,
        setForgotPasswordAction: action,
        resetForgotPasswordAction: action,
        toggleModalAction: action,
        toggleAntModalAction: action,
        setSubscribeData: action,
        setContactForm: action,
        setSubscribeOperationAPI: action,
      };
  }
  //Login-Registration
  loginUserAction(token: any) {
    this.token = token;
    localStorage.setItem('token', JSON.stringify(token));
  }
  logoutUserAction() {
    this.token = null;
    localStorage.setItem('token', '');
  }
  registerUserAction(data: any) {
    this.registUser = data;
  }
  setForgotPasswordAction() {
    this.forgotPassword = true;
  }
  resetForgotPasswordAction() {
    this.forgotPassword = false;
  }
  //Modal
  toggleModalAction() {
    this.modal = !this.modal;
  }
  toggleAntModalAction() {
    this.antModal = !this.antModal;
  }
  //Forms
  setSubscribeData(email: string) {
    this.subscribeData = email;
  }
  setContactForm(data: any) {
    this.contactForm = [...this.contactForm, data];
  }
  // API
  setSubscribeOperationAPI = async (email: string) => {
    this.setSubscribeData(email);
    try {
      const response = await axios.post(process.env.REACT_APP_BASE_URL + `subscribe/.json`, JSON.stringify(email));
      if (response && response.status === 200) {
        toast.success('Form was successfuly sent!', {
          theme: 'colored',
        });
      }
      return response;
    } catch (error) {
      throw new Error();
    }
  };
}
export default new AuthStore();
