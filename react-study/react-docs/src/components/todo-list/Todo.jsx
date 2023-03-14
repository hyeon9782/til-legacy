const Todo = ({item: {text = "이름 없어!", id}}) => {
    return (
        <div>
            <div>{text}</div>
            <div>{id}</div>
        </div>
    )
}

// 구조 분해 할당
// default parameter 기본 파라미터

export default Todo;