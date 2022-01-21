import { Link } from 'react-router-dom';
import { ReactComponent as SmBlueArrow } from '../../assets/right_arrow_sm_blue.svg';
import '../../styles/styles.scss';

function SubtitleText({ to, subtitle, content }) {
  return (
    <div className="main_page_subtitle">
      <p>{subtitle}</p>
      <div>
        <Link to={`/${to}`}>{content} </Link>
        <SmBlueArrow />
      </div>
    </div>
  );
}

export default SubtitleText;
