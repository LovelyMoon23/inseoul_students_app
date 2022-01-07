import '../../styles/styles.scss';
import React from 'react';

function Signup() {
  return (
    <div id="wrap" className="wrap_type">
      <header>
        <div className="signup_title">회원가입</div>
        <h3>
          회원가입에 필요한 정보를
          <br />
          입력해 주세요.
        </h3>
      </header>
      <div id="container" className="signup_container">
        <div className="branch_select_box">
          <label htmlFor="branches">
            <select name="branch">
              지점 선택
              {/* 해당부분 지점 map 처리 가능 */}
              <option value="">지점 선택</option>
              <option value="목동">목동</option>
              <option value="대치동">대치동</option>
            </select>
            <span>상담 받은 지점 및 상담 받으실 지점을 선택해 주세요.</span>
          </label>
        </div>

        <div className="account_input_box">
          <label htmlFor="accounts">
            아이디 및 비밀번호
            <input type="text" placeholder="아이디 입력" />
            <input
              type="password"
              placeholder="비밀번호 입력 (영문, 숫자 포함 8자 이상)"
            />
            <input type="password" placeholder="비밀번호 재입력" />
          </label>
        </div>

        <div className="personal_info_select_box">
          <label htmlFor="personal info">
            개인정보
            <input type="text" placeholder="이름을 입력해 주세요." />
            <span>
              <select name="mobile_first_digit">
                <option value="011">011</option>
                <option value="010" selected>
                  010
                </option>
                <option value="070">070</option>
              </select>
              <input type="number" placeholder="연락처를 입력해 주세요." />
            </span>
            <span>
              <select name="age">
                <option value="중학생">중학생</option>
                <option value="고등학생" selected>
                  고등학생
                </option>
                <option value="재수생/N수생">재수생/N수생</option>
              </select>
              <input type="text" placeholder="학교를 입력해 주세요." />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
export default Signup;
