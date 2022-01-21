import TodoItems from './TodoItems';
import '../../styles/styles.scss';

function TodoList({ todos, onRemove, onEdit }) {
  return (
    <div className="todo_list_wrap">
      {todos.map(todo => (
        <TodoItems
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
export default TodoList;
