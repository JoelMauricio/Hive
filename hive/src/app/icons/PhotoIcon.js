// icon:photo-plus | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconPhoto(props) {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M15 8h.01M12 20H7a3 3 0 01-3-3V7a3 3 0 013-3h10a3 3 0 013 3v5" />
            <path d="M4 15l4-4c.928-.893 2.072-.893 3 0l4 4" />
            <path d="M14 14l1-1c.617-.593 1.328-.793 2.009-.598M16 19h6M19 16v6" />
        </svg>
    );
}

export default IconPhoto;
