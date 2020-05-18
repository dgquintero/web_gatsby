import React from 'react';

export default (props) => (
    <li className="flex items-center">
        <div className="flex-1">
            <h4 className="text-pink-500 font-bold">{props.repo.name}</h4>
<p className="text-sm text-gray-800 everflow-y-hidden" style={{height:"1.5em"}}>{props.repo.description}</p>
        </div>

    </li>
);
