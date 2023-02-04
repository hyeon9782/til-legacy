import { act, fireEvent, render, screen } from "@testing-library/react";
import Button from './Button';

describe("Button 컴포넌트 (@testing-library/react", () => {
    it('컴포넌트가 정상적으로 실행된다.', () => {
        const view = render(<Button />);
        expect(view).not.toBe(null);
    });

    it("'button'이라고 쓰여있는 엘리먼트는 HTMLButtonElement이다.", () => {
        render(<Button />);
        const buttonElement = screen.getByText("button");
        expect(buttonElement).toBeInstanceOf(HTMLButtonElement)
    });

    it("버튼을 클릭하면, p 태그 안에 “버튼이 방금 눌렸다.”라고 쓰여진다.", () => {
        render(<Button />);

        const buttonElement = screen.getByText("button");
        // fireEvent를 사용하요 buttonElement click
        fireEvent.click(buttonElement);

        const p = screen.getByText("버튼이 방금 눌렸다.");
        expect(p).not.toBeNull();
        expect(p).toBeInstanceOf(HTMLParagraphElement)
    });

    it('버튼을 클릭하기 전에는, p 태그 안에 “버튼이 눌리지 않았다.”라고 쓰여진다.', () => {
        render(<Button />);
        const p = screen.getByText("버튼이 눌리지 않았다.");
        expect(p).not.toBeNull();
        expect(p).toBeInstanceOf(HTMLParagraphElement);

    })

    it('버튼을 클릭하고 5초 뒤에는, p 태그 안에 “버튼이 눌리지 않았다.”라고 쓰여진다.', () => {
        // jest에서 지원하는 실제 시간이 아닌 프로그래밍안에서의 시간
        jest.useFakeTimers();
        render(<Button />);

        const buttonElement = screen.getByText("button");
        fireEvent.click(buttonElement);

        // 5초 흐른다
        act(()=> {
            jest.advanceTimersByTime(5000);
        })
        
        const p = screen.getByText("버튼이 눌리지 않았다.");
        expect(p).not.toBeNull();
        expect(p).toBeInstanceOf(HTMLParagraphElement);
    })

    it("버튼을 클릭하면, 5초 동안 버튼이 비활성화 된다.", () => {
        jest.useFakeTimers();
        render(<Button />);

        const buttonElement = screen.getByText("button");
        fireEvent.click(buttonElement);

        // 비활성화
        expect(buttonElement).toBeDisabled();

        // 5초 흐른다
        act(() => {
          jest.advanceTimersByTime(5000);
        });

        // 활성화
        expect(buttonElement).not.toBeDisabled();
    });
})