import Avatar from "./Avatar";
import Card from "./Card";

export default function Profile(props) {
  return (
    <div>
        {/* 스프레드 문법을 통해 props를 통쨰로 넘겨줄 수 있다 */}
      <Avatar
        {...props}
      />
      <Card>
        <Avatar
            size={80}
            person={{
            name: 'Aklilu Lemma', 
            imageId: 'OKS67lh'
            }}
        />
      </Card>
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}