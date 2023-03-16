import Avatar from "./Avatar";
import Card from "./Card";
import { getImageUrl } from './utils.js';

const Profile = (props, { name, imgUrl, profession, awards, discovered }) => {
    return (
        // 반복되는 props는 굳이 구조 분해를 할 필요가 없다.
        // <Card>
        //     <Avatar {...props} /> 
        // </Card>
        // ES6의 스프레드 문법으로 보는 것이 아니라 jsx의 예외적인 문법
        // <Avatar {props}/> 파싱 불가
        // <Avatar props/> props를 html 어트리뷰트로 파싱한다
        <section className="profile">
            <h2>{name}</h2>
            <img
            className="avatar"
            src={getImageUrl(imgUrl)}
            alt={name}
            width={70}
            height={70}
            />
            <ul>
            <li>
                <b>Profession: </b> 
                physicist and chemist
            </li>
            <li>
                <b>Awards: {awards.length} </b> 
                {(awards.join('.'))}
            </li>
            <li>
                <b>Discovered: </b>
                polonium (element)
            </li>
            </ul>
      </section>
    )
}

export default Profile;