import { useState, useCallback, useRef } from 'react';
import PageHeader from '../../components/PageHeader';
import TodoInsert from '../Main/TodoInsert';
import TodoList from '../Main/TodoList';
import '../../styles/styles.scss';

function TodoTemplate() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '공부하기',
      checked: true,
    },
  ]);

  const nextId = useRef(2);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  const onEdit = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div className="todo_template_wrap">
      <PageHeader title="일정 등록" />
      <div id="container">
        <TodoInsert todos={todos} setTodos={setTodos} onInsert={onInsert} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      </div>
    </div>
  );
}
export default TodoTemplate;
