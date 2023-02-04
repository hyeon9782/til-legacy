import { useRecoilValue } from "recoil";
import { todoListState } from "../../states/todoList/todoListState";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilter from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);

    return (
        <>
            <TodoListStats />
            <TodoListFilter />
            <TodoItemCreator />
            {todoList.map((todoItem) => {
                return <TodoItem key={todoItem.id} item={todoItem} />
            })}
        </>
    )
}

export default TodoList;