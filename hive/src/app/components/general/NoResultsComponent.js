"use client"
import IconNoPosts from "@/app/icons/NotResults"
import IconBookmark from "@/app/icons/save"
import { useAuthContext } from "@/app/context/authentication"

export default function NotResultsComp({ favorites = false, userId, CustomText }) {
    const [profile] = useAuthContext()
    const iconFormat = "w-[4.5rem] h-[4.5rem]"

    return <div className="flex flex-col items-center p-8">
        {
            favorites ? <IconBookmark className={iconFormat} /> :
                <IconNoPosts className={iconFormat} />
        }
        <span>{CustomText != undefined ? CustomText : favorites == true ? "There are no favorites posts" : "There are no posts"}</span>
        {userId === profile ? <span className="text-xl font-semibold">{favorites == true ? "GO and ADD your favorite posts!" : "GO and POST something!"}</span> : null}
    </div>
}