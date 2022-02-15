import { ReactComponent as Bookmark } from '../assets/bi_bookmark-star-fill.svg';

function PushMessage({ openMsg, setOpenMsg }) {
  return (
    <div className="push_msg_wrap">
      <ul
        className="msg_wrap"
        onClick={() => {
          setOpenMsg(!openMsg);
        }}
      >
        {/* 아래 두가지는 상황에 따라 title과 content로 children처럼 받아서 사용하면 될듯 함 */}
        <ul className="msg_header">
          <li className="subtitle">등원 시간이 지났습니다.</li>
          <Bookmark width="24" height="24" alt="bookmark" />
        </ul>
        <li>정해진 등원 시간이 지났습니다. </li>
        <li>2022.01.04 오전 11:27:30</li>
      </ul>
    </div>
  );
}

export default PushMessage;
