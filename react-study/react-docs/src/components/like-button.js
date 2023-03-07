import React from 'react';

function LikeButton() {
    const [liked, setLiked] = React.useState(false)

    return React.createElement(
        'button',
        {
            onClick: () => setLiked(true),
        },
        'Like'
    )
}