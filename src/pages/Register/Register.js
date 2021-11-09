import React, { Component } from 'react';
import Inputs from './Inputs';
import './Register.scss';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      inputList: [],
      userID: '',
      password: '',
      name: '',
      nickname: '',
      email: '',
      contact: '',
      address: '',
    };
  }

  componentDidMount() {
    fetch('./Data/InputList.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          inputList: res,
        });
      });
  }

  submitForm = () => {
    const { userID, password, name, nickname, email, contact, address } =
      this.state;
    fetch('http://10.58.2.138:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        user_name: userID,
        password: password,
        name: name,
        nickname: nickname,
        email: email,
        contact: contact,
        address: address,
      }),
    }).then(res => res.json());
    // .then(result => if(result === "invaild"){alert("snow")}console.log('결과: ', result.ACCESS_TOKEN));
  };

  distributeValueToKey = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    // this.validateId();
    this.validatePw(e);
    // this.validateEmail(e);
  };

  validatePw = e => {
    const regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (e.target.name === 'password') {
      const testPw = regExp.test(e.target.name);
      return !testPw ? false : true;
    }
    this.setState({
      password: '',
    });
    console.log(regExp.test(e.target.name));
  };

  goToMain = () => {
    const { history } = this.props;
    history.push('/productList');
  };

  render() {
    const { inputList } = this.state;
    return (
      <main className="register">
        <div className="registerBox">
          <div className="header">
            <div className="joinUs">JOIN US</div>
            <div className="inputInfo">정보입력</div>
          </div>
          <div className="titleBar">
            <div className="title">기본정보</div>
            <div className="titleRight">
              <span className="smallSquare">▪</span> 표시는 반드시 입력하셔야
              하는 항목입니다.
            </div>
          </div>
          <form className="formList">
            {inputList.map(input => {
              return (
                <Inputs
                  key={input.id}
                  name={input.name}
                  content={input.content}
                  inputType={input.inputType}
                  isNecessary={input.isNecessary}
                  placeholder={input.placeholder}
                  distributeValueToKey={this.distributeValueToKey}
                />
              );
            })}
          </form>
          <div className="registerBtnWrapper">
            <button
              className="registerBtn"
              type="button"
              onClick={this.submitForm}
            >
              회원가입
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default Register;
