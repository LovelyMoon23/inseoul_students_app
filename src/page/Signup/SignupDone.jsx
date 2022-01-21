import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import '../../styles/styles.scss';

function SignupDone() {
  return (
    <div id="wrap" className="landing_page_wrap">
      <div id="header" className="signup_done_noti">
        회원가입이 <br />
        완료되었습니다.
      </div>
      <div id="container">
        <p>
          회원가입을 축하드립니다.
          <br />
          인서울로 간편하게 스케쥴을 관리하세요!
        </p>
      </div>
      <div id="footer" className="signup_done_page_footer">
        <Link to="/login" className="link_to_login">
          <Button className="signup_done_complete_btn">완료</Button>
        </Link>
      </div>
    </div>
  );
}
export default SignupDone;
