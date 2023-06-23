"use client"
import IconSend from "@/app/icons/Send";
import { useState } from "react";

const InputBar = ({ text, icon = true, onSend }) => {
    const [keyword, setKeyword] = useState("");

    const handleChange = (e) => {
        setKeyword(e.target.value);
        console.log(keyword);
    };

    return (
        <div className="relative h-[5%] min-h-[35px] max-h-[45px] w-full">
            <input
                type="text"
                placeholder={text}
                value={keyword}
                onChange={handleChange}
                maxLength={250}
                className="shadow appearance-none border-2 border-mainBlack rounded-md w-[100%] h-full py-2 px-1 text-[.8rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {icon ? (
                <button className="absolute inset-y-0 right-0 pr-[0.45rem] flex items-center focus:outline-none">
                    <IconSend className="fill-[#FF9858] h-auto w-[1.5rem]"></IconSend>
                </button>
            ) : (
                <> </>
            )}
        </div>
    );
};

export default InputBar;