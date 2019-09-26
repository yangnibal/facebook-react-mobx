import React from 'react';
import { observable, action } from 'mobx';

export default class Store {
    @observable id = 0;
    @observable isLogin = false;
    @observable isSignup = false;
    @observable name = '';
    @observable phone = '';
    @observable email = '';
    @observable password = '';
    @observable passwordcheck = '';

    @action handleLogintrue = () => {
        this.isLogin = true;
        console.warn(this.isLogin)
    }
    @action handleLoginfalse = ()=> {
        this.isLogin = false;
        console.warn(this.isLogin)
    }
    @action handletoHome = (e) => {
        e.preventDefault();
        window.location="/home";
    }
    @action handletoLogin = (e) => {
        e.preventDefault();
        window.location="/";
    }
    @action handletoSignup = (e) => {
        e.preventDefault();
        window.location="/signup"
    }
    @action handletoWritePost = (e) => {
        e.preventDefault();
        window.location="/add_post"
    }
    @action handleChange = (e) => {
        const { name, value } = e.target; 
        this[name] = value;
    }
    @action handletoProfile = (e) => {
        e.preventDefault();
        window.location="/profile/:user";
    }
    @action isPwChecked = () => {
        if(this.password!==this.passwordcheck) {
            alert('비밀번호가 일치하지 않습니다.')
        }
        return (
            alert('비밀번호가 일치합니다.')
        )
    }
}

