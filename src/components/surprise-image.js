import React from 'react';

export default function SurpriseImage(props) {
    return <img onClick={props.onClick} src="https://media.giphy.com/media/10dV5LFkPenFxm/giphy.gif" alt="A surprising fig" />;
}
