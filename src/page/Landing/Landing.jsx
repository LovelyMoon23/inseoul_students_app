import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import '../../styles/styles.scss';

function Landing() {
  return (
    <div id="wrap" className="landing_page_wrap">
      <div id="header" className="brand_title">
        IN서울
      </div>
      <div id="container" className="landing_page_container">
        <div id="content">
          <ul>
            <li>
              공부는 집중력과 노력입니다. <br />
              누적 다운로드 4,000만의 유저의 선택
            </li>
            <li>
              공부는 집중력과 노력입니다.
              <br />
              누적 다운로드 4,000만의 유저의 선택
            </li>
            <li>
              공부는 집중력과 노력입니다.
              <br />
              누적 다운로드 4,000만의 유저의 선택
            </li>
          </ul>
        </div>
      </div>
      <div id="footer" className="landing_page_footer">
        <p>
          유능한 사람은 언제나 배우는 사람인 것이다.
          <br />
          -괴테-
        </p>

        <Link to="/login" className="link_to_login">
          <Button className="startBtn">시작하기</Button>
        </Link>
      </div>
    </div>
  );
}
export default Landing;
