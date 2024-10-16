import { useCallback, useEffect, useState } from "react";

function TodoList() {
    const [toDo, setToDo] = useState("");
    const [toDoList, setToDoList] = useState<string[]>([]);
    const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setToDo(e.target.value);
    }, []);
    const handleSubmit = useCallback((e:React.FormEvent) => {
        e.preventDefault()
        if (toDo === '') {
            return;
        }
        setToDoList((cur) => [toDo, ...cur]);
        setToDo("");
    }, [toDo]);

    return (
        <div>
            <h1>ToDo ({toDoList.length})</h1>
            <form onSubmit={handleSubmit}>
                <input
                onChange={handleChange}
                value={toDo}
                type="text"
                placeholder="Todo"
                />
                <button>
                    Submit
                </button>
            </form>
            <hr />
            <ul>
                {toDoList.map((str, idx) => (<li key={idx}>{str}</li>))}
            </ul>        
        </div>
    )
}

export default TodoList