"use client"

import { useRouter } from "next/navigation"
import AuthComp from "../components/general/auth"

export default function Page() {
    const router = useRouter();

    return (
        <div className="grid h-full w-full bg-[rgba(0,0,0,.2)] justify-center content-center">
            <AuthComp auth_type={"/login"} destination={"/register"} title={"Sign In"} bt_text={"Log In"} list_holder={["Email", "Password"]} message={"Don`t have an account? "} msg_link={"Sign Up"} />
        </div>
    )
}