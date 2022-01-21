import { useCallback, useState } from 'react';
import '../../styles/styles.scss';

function TodoInsert({ onInsert }) {
  const [planValue, setPlanValue] = useState('');

  const handlePlanInput = useCallback(e => {
    const { value } = e.target;
    setPlanValue(value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(planValue);
      setPlanValue('');
      e.preventDefault();
    },
    [onInsert, planValue]
  );

  return (
    <form onSubmit={onSubmit}>
      <div className="todo_insert_wrap">
        <input
          className="input_large"
          placeholder="오늘의 일정을 등록해 주세요"
          onChange={handlePlanInput}
          value={planValue}
        />
        <img
          src="../assets/plus.png"
          width="14"
          height="14"
          alt="button for adding plans "
        />
      </div>
    </form>
  );
}
export default TodoInsert;
