"use client"
import IconSend from "@/app/icons/Send";
import { useState } from "react";

const InputBar = ({ text, icon = true, onSend, image = false }) => {
    const [keyword, setKeyword] = useState("");

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    const makePost = () => {
        setKeyword("");
    };

    return (
        <div className="relative h-[5%] min-h-[35px] max-h-fit w-full group" >
            <textarea
                placeholder={text}
                value={keyword}
                onChange={handleChange}
                maxLength={250}
                className="shadow appearance-none resize-none overflow-hidden border-2 border-mainBlack rounded-md w-[100%] h-full py-2 px-1 pr-[1.5rem] text-[.8rem] break-words text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:h-[85px]"
            />
            {icon ? (
                <button onClick={makePost} className="absolute mt-auto right-0 pr-[0.45rem] flex items-center focus:outline-none group-focus:inset-x-0  ">
                    <IconSend className="fill-[#FF9858] h-auto w-[1.5rem]"></IconSend>
                </button>
            ) : (
                <> </>
            )}
        </div>
    );
};

export default InputBar;