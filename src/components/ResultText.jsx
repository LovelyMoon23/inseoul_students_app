import React from 'react';
import cn from 'classnames';

function ResultText(props) {
  const { text, check, error } = props;
  const checked = check === error;
  return (
    <p className="check_text">
      <span className={cn('test3', { checked })}>{text}</span>
    </p>
  );
}

export default ResultText;
