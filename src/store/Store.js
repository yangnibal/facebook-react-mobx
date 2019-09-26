import { observable, action } from 'mobx';

export default class Store {
    @observable id = 0;
    @observable isLogin = false;
    @observable isSignup = false;
    info = observable([
        { id: this.id++, title: this.title, passage: this.passage, name: this.name },
    ])
    @observable name = "";
    @observable phone = "";
    @observable email = "";
    @observable password = "";
    @observable passwordcheck = "";
    @observable passage = "";
    @observable title = "";

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
    @action isPwChecked = (e) => {
        e.preventDefault();
        if(this.password!==this.passwordcheck) {
            alert('비밀번호가 일치하지 않습니다.')
        }
        return (
            alert('비밀번호가 일치합니다.')
        )
    }
    @action handleKeyPress = (e) => {
        if(e.key==='Enter') {
            this.handleCreate();
        }
    }
    @action handleCreate = (data) => {
        this.info = this.info.concat({id: this.id++, ...data})
    }
}

