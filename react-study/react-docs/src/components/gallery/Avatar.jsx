import { getImageUrl } from './utils.js';

const Avatar = ({ 
    person,
    person: { name },
    size = 150
}) => {
    const sizeValue = size < 90 ? 's' : 'b'
    // props 기본값은 값이 없을 때와 undefined일 때만 작동한다 (null은 작동 X)
    // null을 구분할 때는 ??
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={name}
            width={size}
            height={size}
        />
    )
}

export default Avatar;