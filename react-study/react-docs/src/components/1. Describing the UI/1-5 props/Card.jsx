const Card = ({ children }) => {
    return (
        // children을 사용하지 않고 props를 게속 전달하면
        // props가 변경되었을 때 리랜더링되는 컴포넌트가 많아져 성능이 저하된다.
        // 또한 데이터가 어디서 사용되는지 트래킹하는데 어려움이 있다.
        <div className="card">
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}

export default Card;