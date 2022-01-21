import { ReactComponent as Bell } from '../../assets/bell.svg';
import { ReactComponent as UserDefaultImg } from '../../assets/user_profile.svg';
import { ReactComponent as RightBlueArrow } from '../../assets/rignt_arrow_blue.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import PushMessage from '../../components/PushMessage';
import SubtitleText from './SubtitleText';
import '../../styles/styles.scss';

function Main() {
  return (
    <div className="main_wrap">
      <div id="header" className="main_page_header">
        <p>INSEOUL</p>
        <Bell />
      </div>
      <div id="container">
        <div className="user_wrap">
          <UserDefaultImg alt="user default pic" width="40" height="40" />
          <div className="user_area">
            <p>홍길동</p>
            <p>나의 다짐을 입력해 주세요.</p>
          </div>
        </div>
        <div className="go_to_schedule">
          <ul>
            <Calendar />
            <li>주간 일정 계획표</li>
          </ul>
          {/* 하단 작성하기 클릭 후, 주간 일정계획표로 연결 필요 */}
          <ul>
            <li>작성하기</li>
            <RightBlueArrow />
          </ul>
        </div>
        <div id="content">
          <div className="daily_schedule_wrap">
            <SubtitleText
              to="schedule"
              subtitle="오늘의 일정"
              content="일정 보기"
            />
          </div>
          <div className="today_schedule">등록된 일정이 없습니다.</div>

          <div className="check_msg_wrap">
            <SubtitleText
              to="notify"
              subtitle="알림 내역"
              content="내용 보기"
            />
            <PushMessage />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
