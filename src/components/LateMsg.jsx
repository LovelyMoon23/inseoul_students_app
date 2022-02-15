import { ReactComponent as UncheckedRadioBtn } from '../assets/unchecked.svg';
import { ReactComponent as CheckedRadioBtn } from '../assets/checked.svg';
import { ReactComponent as Bookmark } from '../assets/bi_bookmark-star-fill.svg';
function LateMsg({
  openMsg,
  setOpenMsg,
  isReasonCheck,
  setIsReasonCheck,
  test5,
  setTest5,
}) {
  const handleArrivalTimeSubmit1 = () => {
    setIsReasonCheck(!isReasonCheck);
  };
  const handleArrivalTimeSubmit2 = () => {
    setTest5(!test5);
  };

  return (
    <ul
      className="late_msg_wrap"
      // onClick={() => {
      //   setOpenMsg(!openMsg);
      // }}
    >
      <ul className="msg_header">
        <li className="noti_subtitle">등원 시간이 지났습니다.</li>
        <Bookmark width="24" height="24" alt="bookmark" />
      </ul>
      <hr />
      <ul className="late_caption">
        <li>정해진 등원 시간이 지났습니다. </li>
        <li>2022.01.04 오전 11:27:30</li>
      </ul>
      <hr />
      <div className="arrival_time_select_wrap">
        사유입력
        {/* <input
          type="checkbox"
          id="reason_check"
          onChange={() => handleArrivalTimeSubmit1()}
          // 지각 예정시간 체크
          checked={isReasonCheck}
        /> */}
        <label htmlFor="arrival_time_check">
          {isReasonCheck ? <CheckedRadioBtn /> : <UncheckedRadioBtn />}
          <p>곧 도착 예정</p>
        </label>
        {/* <input
          type="checkbox"
          id="reason_check"
          onChange={() => handleArrivalTimeSubmit2()}
          // 지각 예정시간 체크
          checked={test5}
        /> */}
        <label htmlFor="arrival_time_check">
          {test5 ? <CheckedRadioBtn /> : <UncheckedRadioBtn />}
          <p>30분 지각 예정</p>
        </label>
      </div>
      <hr />
      <button
        className="submit_arrival_time_btn"
        onClick={() => {
          console.log('close');
        }}
        //handleFormSubmit
      >
        입력 완료
      </button>
    </ul>
  );
}
export default LateMsg;
