"use client"

import { useRouter } from "next/navigation"
import AuthComp from "../components/general/auth"

export default function Page() {
    const router = useRouter();

    return (
        <div className="grid h-full w-full bg-[rgba(0,0,0,.2)] justify-center content-center">
            <AuthComp destination={"/login"} title={"Sign Up"} bt_text={"Create account"} list_holder={["Email", "Password", "Confirm password"]} message={"Already have an account? "} msg_link={"Sign In"} />
        </div>
    )
}