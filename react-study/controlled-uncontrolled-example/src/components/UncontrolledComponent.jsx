import React from 'react';

class UncontrolledComponent extends React.Component {

    inputRef = React.createRef();

    render() {
        console.log("initial render", this.inputRef);
        return (
            <div>
                <input id="my-input" ref={this.inputRef}/>
                <button onClick={this.click}>전송</button>
            </div>
        )
    }

    componentDidMount(){
        console.log("componentDidMount", this.inputRef);
    }

    click = () => {
        // input 엘리먼트의 현재 상태 값 (value)를 꺼내서 전송
        // const input = document.querySelector("#my-input");
        // console.log(input.value);
        // 이런식으로 리얼 DOM을 사용하여 input의 value를 가져올 수 있지만
        // 이러한 방식은 리엑트에서는 지양하는 방법이다.
        console.log(this.inputRef.current.value);
        // 이런식으로 리얼 DOM을 직접 사용하는 것 보다는 React에서 지원하는 createRef()라는
        // 함수를 사용하여 레퍼런스를 참조하여 값을 얻어오는 것이 더 좋다.
        // 만약 데이터가 변경됨에 따라서 매번 화면을 변경해야하는 상황 (비밀번호 규칙 등)
        // 이러한 경우는 해당 방식보다 ControlledComponent를 사용하는 것이 효율적이다.
        // 그리고 특정 이벤트가 발생했을 때 동작을 해야하는 경우에는 위에 방식처럼 ref를 사용하는 것이 더 효율적이다.


    }
}

export default UncontrolledComponent;