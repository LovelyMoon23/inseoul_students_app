/* eslint-disable */
import React, { useState } from 'react';
import Button from '../../components/Button';
import Id from './Info/Id';
import Password from './Info/Password';
import Address from './Info/Address';
import { ReactComponent as LeftArrow } from '../../assets/arrow_left.svg';
import { ReactComponent as CheckedRadioBtn } from '../../assets/checked.svg';
import { ReactComponent as UncheckedRadioBtn } from '../../assets/unchecked.svg';
import '../../styles/styles.scss';
import ResultText from '../../components/ResultText';

function Signup() {
  const [isTermsCheck, SetIsTermsCheck] = useState(false); //약관 전체동의
  const [address, setAddress] = useState(''); // 주소
  const [isOpenPost, setIsOpenPost] = useState(false); //카카오 주소 api 오픈
  const [signupForm, setSignupForm] = useState({
    id: '',
    pwd: '',
    repwd: '',
    name: '',
    birth: '',
    month: '',
    day: '',
    mobile: '',
    school: '',
    address: '',
  });

  const handleInput = e => {
    const { value, name } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const handleAllTermsCheck = () => {
    SetIsTermsCheck(!isTermsCheck);
  };

  // 검색된 주소를 인풋창에 디스플레이

  return (
    <div id="wrap" className="wrap_type">
      <div className="signin_wrap">
        <div className="signin_title_wrap">
          <p className="right_arrow_btn">
            <LeftArrow />
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
              <select id="branch" className="select_large">
                지점 선택
                <option value="" disabled selected>
                  지점 선택
                </option>
                <option value="목동">목동</option>
                <option value="대치동">대치동</option>
              </select>
              <p className="find_branch_caption">
                상담 받은 지점 및 상담 받으실 지점을 선택해 주세요.
              </p>
            </label>
          </div>
          {/* 이부분은 map 돌리기 (input 3개 연속) */}
          <div className="account_input_box">
            <label htmlFor="accounts" className="accounts_label">
              아이디 및 비밀번호
              <Id signupForm={signupForm} handleInput={handleInput} />
              <Password signupForm={signupForm} handleInput={handleInput} />
            </label>
            {/* 이부분은 map 돌리기 (input 3개 연속) */}
          </div>

          <div className="personal_info_select_box">
            <label htmlFor="personal info" className="personal_info_label">
              개인정보
              <input
                type="text"
                name="name"
                id="name_input"
                className="input_large"
                placeholder="이름을 입력해 주세요."
                autoComplete="off"
                required
              />
              <div className="birth_and_gender_wrap">
                <div
                  className="birth_day_input_box"
                  className="input_small"
                  id="birth_day_input_wrap"
                >
                  <input
                    type="number"
                    name="birth"
                    pattern="[0-9]*"
                    name="birth_year"
                    size="4"
                    maxLength="4"
                    placeholder="YYYY"
                    autoComplete="off"
                    required
                  />

                  <span className="bar">/</span>
                  <input
                    type="number"
                    name="month"
                    pattern="[0-9]*"
                    name="birth_month"
                    size="2"
                    maxLength="2"
                    placeholder="MM"
                    autoComplete="off"
                    required
                  />
                  <span className="bar">/</span>
                  <input
                    type="number"
                    name="day"
                    pattern="[0-9]*"
                    name="birth_date"
                    size="2"
                    maxLength="2"
                    placeholder="DD"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="gender_select_box">
                  <select id="gender_select" className="select_small">
                    성별
                    <option value="" disabled selected>
                      성별
                    </option>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                  </select>
                </div>
              </div>
              <div className="mobile_select_content">
                <select name="mobile_first_digit" className="select_small">
                  <option value="011">011</option>
                  <option value="010" selected>
                    010
                  </option>
                  <option value="070">070</option>
                </select>
                <input
                  type="number"
                  name="mobile"
                  className="input_small"
                  placeholder="연락처를 입력해 주세요."
                  autoComplete="off"
                />
              </div>
              <div className="age_select_content">
                <select name="age" className="select_small">
                  <option value="mid_schooler">중학생</option>
                  <option value="high_schooler" selected>
                    고등학생
                  </option>
                  <option value="gap_year">N수생</option>
                </select>
                <input
                  type="text"
                  name="school"
                  className="input_small"
                  placeholder="학교를 입력해 주세요."
                  autoComplete="off"
                />
              </div>
            </label>
            <div className="address_input_content">
              <div className="test">
                {/* >>>>>>>>>>>>>여기 className변경! */}
                <Address
                  address={address}
                  isOpenPost={isOpenPost}
                  setIsOpenPost={setIsOpenPost}
                  address={address}
                  setAddress={setAddress}
                />
              </div>
            </div>
            <div id="terms_check_box">
              <label>약관 동의</label>
              <div id="flex" className="input_large">
                <div className="test">
                  <input
                    type="checkbox"
                    id="terms_all_check"
                    onChange={() => handleAllTermsCheck()}
                    checked={isTermsCheck}
                    //나중에 체크가 안되어있으면 alert창으로 동의하지 않으면 가입 안된다고 할때 쓸 checked임
                  />
                  <label htmlFor="terms_check">
                    {isTermsCheck ? <CheckedRadioBtn /> : <UncheckedRadioBtn />}
                    <span> 전체 동의하기 </span>
                  </label>
                </div>
                <span>약관확인하기</span>
              </div>
            </div>
            <Button
              type="submit"
              // disabled={signupBtn ? '' : 'disabled'}
            >
              가입하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
