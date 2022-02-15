/* eslint-disable */
import React, { useState } from 'react';
import ResultText from '../../../components/ResultText';

function Password({ signupForm, handleInput }) {
  const reg_pwd = new RegExp(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  ); //
  const isValidPw = reg_pwd.test(signupForm.pwd);
  const passwordUse = () => {
    if (signupForm.pwd.length >= 1) {
      if (isValidPw) {
        return (
          <ResultText
            text="사용가능한 비밀번호 입니다"
            check="sucess"
            error="error"
          />
        );
      } else {
        return (
          <ResultText
            text="사용 불가능한 비밀번호 입니다"
            check="error"
            error="error"
          />
        );
      }
    } else {
      return null;
    }
  };

  const passwordSame = () => {
    if (signupForm.repwd.length >= 1) {
      if (signupForm.repwd === signupForm.pwd) {
        return (
          <ResultText
            text="비밀번호가 일치합니다"
            check="sucess"
            error="error"
          />
        );
      } else {
        return (
          <ResultText
            text="비밀번호가 일치하지 않습니다"
            check="error"
            error="error"
          />
        );
      }
    } else {
      return null;
    }
  };
  return (
    <>
      <input
        type="password"
        name="pwd"
        id="pw_input_large"
        className="input_large"
        placeholder="비밀번호 (영문,숫자,특수문자 포함 8자 이상)"
        autoComplete="off"
        required
        onChange={handleInput}
      />
      {passwordUse()}
      <input
        type="password"
        name="repwd"
        className="input_large"
        placeholder="비밀번호 재입력"
        autoComplete="off"
        required
        onChange={handleInput}
        disabled={isValidPw ? '' : 'disabled'}
      />
      {passwordSame()}
    </>
  );
}

export default Password;
