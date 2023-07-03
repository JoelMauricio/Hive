"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function AuthComp({ title, list_holder, bt_text, destination, message, msg_link }) {
    const [EmailController, setEmailController] = useState("")
    const [PasswordController, setPasswordController] = useState("")
    const [PasswordConfirmController, setPasswordConfirmController] = useState("")

    const handleEmail = (e) => {
        setEmailController(e.target.value)
    }

    const handlePassword = (e) => {
        setPasswordController(e.target.value)
    }

    const handlePasswordConfirm = (e) => {
        setPasswordConfirmController(e.target.value)
    }

    function validatePasswords() {
        if (PasswordController === PasswordConfirmController) {
            return true
        }
        return false
    }

    function handleAuthentication() {
        if (destination === "/register" && validatePasswords) {
            // code to send the registration data to the database through the API
        }
        if (destination === "/login") {
            // code to send the user data authenticate the user
        }
    }

    return (
        <div className="flex flex-col p-8 border rounded-md w-1/2 min-w-[350px] min-h-[500px] justify-around ">
            <div className="flex flex-col gap-4 ">
                <h1 className="self-center text-3xl">{title}</h1>
                <input onChange={handleEmail} type="email" name="email" placeholder={list_holder[0]} className="shadow appearance-none border-2 border-mainBlack rounded-md h-full max-h-[45px] w-[100%] p-4 text-[.8rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline " />
                <input onChange={handlePassword} type="text" name="password" placeholder={list_holder[1]} className="shadow appearance-none border-2 border-mainBlack rounded-md h-full max-h-[45px] w-[100%] p-4 text-[.8rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline " />
                {destination === "/login" ?
                    <input onChange={handlePasswordConfirm} type="text" name="password" placeholder={list_holder[2]} className="shadow appearance-none border-2 border-mainBlack rounded-md h-full max-h-[45px] w-[100%] p-4 text-[.8rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline " />
                    : null}
                <button className="w-full text-[0.9rem] bg-[#FF9858] hover:bg-opacity-[90] shadow appearance-none border-[bg-current] rounded-md h-full max-h-[45px] p-4 leading-tight focus:outline-none focus:shadow-outline ">{bt_text}</button>
            </div>
            <span className="self-center">{message} <Link href={destination} className="hover:text-[#FF9858]">{msg_link}</Link> </span>
        </div>
    )
}