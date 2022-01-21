import { ReactComponent as LeftArrow } from '../assets/arrow_left.svg';

function PageHeader({ title }) {
  return (
    <div id="header" className="page_header">
      <LeftArrow />
      <p>{title}</p>
    </div>
  );
}

export default PageHeader;
