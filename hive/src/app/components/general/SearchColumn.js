"use client"
import UserCard from "./UserCard"
import supabase from "@/app/supabaseClient"
import { useEffect, useState, useRef } from "react";
import IconNoResults from "@/app/icons/IconNoResults";


export default function SearchColumn() {
    const [results, setResults] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [loading, setLoading] = useState(false)
    const clicker = useRef(null)

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleSearch = async () => {
        setLoading(true)
        const { data, error } = await supabase.from("tbluser").select("*").ilike("username", keyword);
        setResults(data)
        setLoading(false)
    }

    function handleEnterClick(e) {
        if (e.key == "Enter") {
            clicker.current.click()
        }
    }

    return (
        <>
            <div className="relative h-[5%] min-h-[35px] max-h-[45px] w-full" >
                <input
                    type="text"
                    placeholder={"Search accounts"}
                    value={keyword}
                    onChange={handleChange}
                    maxLength={15}
                    onKeyDown={(e) => { handleEnterClick(e) }}
                    className="shadow appearance-none border-2 border-mainBlack rounded-md w-[100%] h-full py-2 px-1 text-[.8rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button ref={clicker} className="absolute inset-y-0 right-0 pr-[0.45rem] flex items-center focus:outline-none group" onClick={handleSearch} >
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
            </div>
            <div className='flex flex-col w-full h-full overflow-y-auto mt-4 gap-2 last group'>
                {
                    results.length < 1 ? loading ?
                        <div className="flex justify-center text-center" >looking....</div> : <div className="flex flex-col justify-center text-center items-center gap-2 p-2 text-[0.9rem]">
                            Looks like there&apos;re no results
                            <IconNoResults className="w-[3.8rem] h-[3.8rem] " />
                            <span className="text-[1rem] font-semibold">
                                Start Searching!
                            </span>
                        </div>
                        :
                        results.map((user, index) => (
                            <UserCard key={index} UserId={user.user_id} User={user.display_name} Username={user.username} />
                        ))


                }
            </div>
        </>
    );
}