"use client"
import { useState } from "react";

const SearchBar = ({ text, icon = true, onSearch }) => {
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
                maxLength={15}
                className="shadow appearance-none border-2 border-mainBlack rounded-md w-[100%] h-full py-2 px-1 text-[.8rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {icon ? (
                <button className="absolute inset-y-0 right-0 pr-[0.45rem] flex items-center focus:outline-none group">
                    <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-200 stroke-2 group-hover:fill-[#FF8958]"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
                            ></path>
                        </g>
                    </svg>
                </button>
            ) : (
                <> </>
            )}
        </div>
    );
};

export default SearchBar;