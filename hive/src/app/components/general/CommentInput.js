"use client"
import { useRef, useState } from 'react';
import IconSend from "@/app/icons/Send";

export default function NewComment({ PostId, UserId, User, Message, action }) {
    const [keyword, setKeyword] = useState("");

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    const makePost = () => {
        setKeyword("");
    }


    return (<div className='flex flex-col min-w-[100%] h-fit px-2 rounded-b-md bg-[rgba(46,46,46,1)]'>
        <div className='flex flex-col min-w-[90%] gap-2 p-2 pr-4'>
            <div className="flex flex-col h-fit w-full gap-2 items-end focus:h-[85px]" >
                <textarea
                    placeholder={"Max 250 characters"}
                    value={keyword}
                    onChange={handleChange}
                    maxLength={250}
                    className="shadow appearance-none resize-none overflow-hidden border-2 border-mainBlack rounded-md w-[100%] h-full py-2 px-2 text-[.8rem] break-words text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:h-[75px]"
                />
            </div>
            <div className="flex h-fit w-full gap-2 justify-end focus:h-[85px]" >
                <button onClick={makePost} className="group pr-[0.45rem] flex items-center justify-self-end focus:outline-none gap-2">
                    <IconSend className="group-hover:fill-[#FF9858] h-auto w-[1.5rem]"></IconSend>
                </button>
            </div>
        </div >
    </div >);
}