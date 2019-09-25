import { observable, action } from 'mobx';

export default class Store {
    @observable isLogin = false;

    @action handleLogin = () => {
        this.isLogin = !this.isLogin;
    }
}

