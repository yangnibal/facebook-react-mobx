import { observable, action } from 'mobx';

export default class Store {
    @observable postlist = [];
    @observable id = 0;
    @observable key = 0;
    @observable isLogin = false;
    @observable isSignup = false;
    @observable isPwChecked = false;
    @observable name = "";
    @observable phone = "";
    @observable email = "";
    @observable password = "";
    @observable passwordcheck = "";
    @observable signupname = "";
    @observable signupphone = "";
    @observable signupemail = "";
    @observable signuppassword = "";
    @observable signuppasswordcheck = "";
    @observable passage = "";
    @observable title = "";

    @action handleLogintrue = () => {
        if(this.name==="양원준"){
            this.isLogin = true;
        }
        else if(this.name===this.signupname&&this.email===this.signupemail&&this.password===this.signuppassword){
            this.isLogin = true;
            alert("로그인에 성공하였습니다.")
            this.name = this.signupname;
            this.phone = this.signupphone;
            this.email = this.signupemail;
            this.password = this.signuppassword;
            this.signupname = "";
            this.signupphone = "";
            this.signupemail = "";
            this.signuppassword = "";
            this.signuppasswordcheck = "";
            this.name = "";
            this.email = "";
            this.password = "";
        }  
        else if(this.name===""||this.email===""||this.password===""){
            alert("입력란을 확인해 주세요.");
        }
        else if(this.name!==this.signupname){
            alert("이름이 일치하지 않습니다.")
        }
        else if(this.email!==this.signupemail){
            alert("이메일이 일치하지 않습니다.")
        }
        else if(this.password!==this.signuppassword){
            alert("비밀번호가 일치하지 않습니다.")
        }
         
        console.warn(this.isLogin)
    }
    @action handleLoginfalse = () => {
        this.isLogin = false;
        this.name = ""
        console.warn(this.isLogin)
    }
    @action handleSignuptrue = () => {
        if(this.isPwChecked===true){
            if(this.signupname===""||this.signupphone===""||this.signupemail==="") {
                alert("입력란을 확인해 주세요.");
            }
            else {
                alert("회원가입이 성공적으로 처리되었습니다.");
            }
        }
        else {
            alert("비밀번호를 확인해 주세요.");
        }
        
        console.warn(this.isLogin)
    }   
    
    @action handleChange = (e) => {
        const { name, value } = e.target; 
        this[name] = value;
    }
    @action handletoProfile = (e) => {
        e.preventDefault();
        window.location="/profile/:user";
    }
    @action handlePwChecked = (e) => {
        if(this.signuppassword==="") {
            alert('비밀번호를 입력해 주세요.')
        }
        else if(this.signuppassword!==this.signuppasswordcheck) {
            alert('비밀번호가 일치하지 않습니다.')
        }
        else if(this.signuppassword===this.signuppasswordcheck) {
            alert('비밀번호가 일치합니다.')
            this.isPwChecked = true;
        }
        if(this.signupname!==""||this.signupphone!==""||this.signupemail!=="") {
            this.isLogin = true;
        }
    }
    @action handleKeyPress = (e) => {
        if(e.key==='Enter') {
            this.handleUpload();
        }
    }
    @action handleUpload = () => {
        this.postlist.push({
            id: this.id,
            name: this.name,
            title: this.title,
            passage: this.passage
        });    
        this.id++;
        this.key++;
        this.title = ""
        this.passage = ""
        
    }
    @action handleRemove = (id) => {
        this.postlist = this.postlist.filter(post => post.id !== id)
    }
}

