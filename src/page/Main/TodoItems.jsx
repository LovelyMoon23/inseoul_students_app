import cn from 'classnames';
import { ReactComponent as UncheckedRadioBtn } from '../../assets/unchecked.svg';
import { ReactComponent as CheckedRadioBtn } from '../../assets/checked.svg';
import '../../styles/styles.scss';

function TodoItems({ todo, onRemove, onEdit }) {
  const { id, text, checked } = todo;
  return (
    <div className="plan_checkbox_wrap">
      <div className={cn('checkbox', { checked })} onClick={() => onEdit(id)}>
        {checked ? <CheckedRadioBtn /> : <UncheckedRadioBtn />}
        <div className="plan_text">{text}</div>
      </div>
      <div onClick={() => onRemove(id)}>remove</div>
    </div>
  );
}
export default TodoItems;
