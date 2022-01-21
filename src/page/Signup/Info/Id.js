/* eslint-disable */
import React, { useState } from 'react';
import Button from '../../../components/Button';
import ResultText from '../../../components/ResultText';

function Id({ handleInput, signupForm }) {
  const reg_id = new RegExp(
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
  );

  const valid_id = reg_id.test(signupForm.id);
  const id = signupForm.id;
  const idUse = () => {
    if (id.length > 1) {
      if (valid_id) {
        return (
          <ResultText
            text="사용가능한 아이디 입니다"
            check="sucess"
            error="error"
          />
        );
      } else {
        return (
          <ResultText
            text="사용 불가능한 아이디 입니다"
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
    <div>
      <div className="duplicated_id_check_wrap">
        <input
          type="text"
          id="duplicated_id_check_input"
          className="input_small"
          placeholder="아이디 입력"
          autoComplete="off"
          name="id"
          required
          onChange={handleInput}
        />

        <button
          id="duplicated_id_check_btn"
          // onClick={handleClickIdCheck}
        >
          중복확인
        </button>
      </div>
      {idUse()}
    </div>
  );
}

export default Id;
