import React from 'react';
import arrow_left from '../../assets/arrow_left.svg';
import '../../styles/styles.scss';

function Signup() {
  return (
    <div id="wrap" className="wrap_type">
      <div className="signin_wrap">
        <div className="signin_title_wrap">
          <p className="right_arrow_btn">
            <img src={arrow_left} alt="left arrow" />
          </p>
          <p className="signup_title">회원가입</p>
          <p className="signup_subtitle">
            회원가입에 필요한 정보를
            <br />
            입력해 주세요.
          </p>
        </div>
        <div id="container" className="signup_container">
          <div className="branch_select_box">
            <label htmlFor="branch" className="branch_label">
              지점 선택
              <select id="branch" className="select_small">
                지점 선택
                {/* >>>>>>>>>>>> 해당부분 하드코딩? or api?  */}
                <option value="">지점 선택</option>
                <option value="목동">목동</option>
                <option value="대치동">대치동</option>
              </select>
              <p className="find_branch_caption">
                상담 받은 지점 및 상담 받으실 지점을 선택해 주세요.
              </p>
            </label>
          </div>

          <div className="account_input_box">
            <label htmlFor="accounts" className="accounts_label">
              아이디 및 비밀번호
              <input
                type="text"
                className="input_large"
                placeholder="아이디 입력"
                autoComplete="off"
                required
              />
              <input
                type="password"
                className="input_large"
                placeholder="비밀번호 입력 (영문, 숫자 포함 8자 이상)"
                required
              />
              <input
                type="password"
                className="input_large"
                placeholder="비밀번호 재입력"
                required
              />
            </label>
          </div>

          <div className="personal_info_select_box">
            <label htmlFor="personal info" className="personal_info_label">
              개인정보
              <input
                type="text"
                className="input_large"
                placeholder="이름을 입력해 주세요."
                required
              />
              <div className="mobile_select_content">
                <select name="mobile_first_digit" className="select_small">
                  {/* >>>>>>>>>>>> 해당부분 하드코딩? or api?  */}
                  <option value="011">011</option>
                  <option value="010" selected>
                    010
                  </option>
                  <option value="070">070</option>
                </select>
                <input type="number" placeholder="연락처를 입력해 주세요." />
              </div>
              <div className="age_select">
                <select name="age" className="select_small">
                  {/* >>>>>>>>>>>> 해당부분 하드코딩? or api?  */}
                  <option value="중학생">중학생</option>
                  <option value="고등학생" selected>
                    고등학생
                  </option>
                  <option value="재수생/N수생">재수생/N수생</option>
                </select>
                <input type="text" placeholder="학교를 입력해 주세요." />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
