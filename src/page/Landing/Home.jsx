/* eslint-disable */
import Button from '../../components/Button';
import { ReactComponent as BrandImg } from '../../assets/bi.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="wrap">
      <div id="container" className="brand_img_container">
        <BrandImg width="180" height="140" />
      </div>
      <div id="footer" className="home_footer">
        <Link to="/landing" className="link_to_landing">
          <Button className="startBtn">시작하기</Button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
