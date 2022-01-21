import { Link } from 'react-router-dom';
import { ReactComponent as UserDefaultProfile } from '../../assets/user_profile.svg';
import { ReactComponent as RedDot } from '../../assets/red_dot.svg';
import PageHeader from '../../components/PageHeader';
import '../../styles/styles.scss';

function MyPage() {
  return (
    <div id="wrap" className="mypage_wrap">
      <div id="header">
        <PageHeader title="마이페이지" />
      </div>
      <div className="user_area_wrap">
        <UserDefaultProfile />
        <p>미래의 장래희망을 설정해 주세요.</p>
        <p>나의 다짐을 입력해 주세요.</p>
      </div>
      <div className="seat_number">
        <p>좌석 번호</p>
        <p>
          <RedDot /> A열 01번
        </p>
      </div>
      <div id="content" className="mypage_personal_info">
        <div>
          <p>내정보</p>
          <Link to="/edit">수정하기</Link>
        </div>
        <div>
          <p>이름</p>
          <p>홍길동</p>
        </div>
        <div>
          <p>생년월일</p>
          <p>1991.02.03</p>
        </div>
      </div>
    </div>
  );
}
export default MyPage;
