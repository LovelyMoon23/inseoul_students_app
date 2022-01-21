/* eslint-disable */
import React, { useState } from 'react';
// import Instance from '../../axios';
import { Link } from 'react-router-dom';
import { ReactComponent as UncheckedRadioBtn } from '../../assets/unchecked.svg';
import { ReactComponent as CheckedRadioBtn } from '../../assets/checked.svg';
import Button from '../../components/Button';
import '../../styles/styles.scss';

function Login() {
  const [isCheck, setIsCheck] = useState(false); //로그인 유지
  const [idValue, setIdValue] = useState(''); //로그인 유지
  const [signinForm, setSigninForm] = useState({
    id: '', //원래 email이였음
    password: '',
  });
  const handleLoginStateCheck = () => {
    setIsCheck(!isCheck);
  };

  // const signinBtn = isValidId && signinForm.password.length >= 1;

  return (
    <div id="wrap" className="login_page_wrap">
      <div id="header" className="login_title">
        <p>로그인</p>
        <div className="login_subtitle">
          <p>
            아이디와 비밀번호를 입력해 주세요.
            <br />
            회원이 아니시라면 회원가입을 진행해 주세요.
          </p>
        </div>
        <div />
      </div>
      <div id="container">
        <div id="content">
          <div className="input_box">
            <input
              type="text"
              id="login_id_input"
              className="input_large"
              placeholder="아이디 입력"
              autoComplete="off"
              required
            />
            <input
              type="password"
              id="login_pw_input"
              className="input_large"
              placeholder="비밀번호 입력"
              autoComplete="off"
              required
            />
          </div>
          <div className="login_state">
            <input
              type="checkbox"
              id="state_check"
              onChange={() => handleLoginStateCheck()}
              // 자동로그인 체크
              checked={isCheck}
            />
            <label htmlFor="state_check">
              {isCheck ? <CheckedRadioBtn /> : <UncheckedRadioBtn />}
              <span> 자동 로그인 </span>
            </label>
          </div>
          <ul className="find_account_info">
            <Link to="/findpassword" className="findpw">
              아이디 찾기
            </Link>
            <Link to="/findpassword" className="findpw">
              비밀번호 찾기
            </Link>
            <Link to="/signup" className="findpw">
              회원가입
            </Link>
          </ul>
          <Button>로그인</Button>
        </div>
      </div>
    </div>
  );
}
export default Login;
