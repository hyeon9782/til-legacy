export function Modal() {}
Modal.Header = function() {
    return <div>Header</div>
}

Modal.Content = function() {
    return <div>Content</div>
}

Modal.Footer = function() {
    return <div>Footer</div>
}

/*
한 파일 내에서 여러 컴포넌트를 선언해도 좋은 경우

1. 오직 한 컴포넌트 내에서만 쓸게 99% 확실한 내부 컴포넌트
2. 하나의 묶음으로 처리하는 것이 좋을 경우 (예: Modal)

*/