"use client"

import Image from "next/image"
import Link from "next/link"
import Card from "@/app/components/general/Card"
import { placeholder } from "@/app/constants"
import { useRouter } from "next/navigation"
import UserImage from "@/app/components/general/UserImage"

export default function Page({ params }) {
    const router = useRouter();
    var user, joinDate = undefined

    function goToFolloweds() {
        router.push(`/profile/${params.profileId}/followed`)
    }

    function goToFollowing() {
        router.push(`/profile/${params.profileId}/following`)
    }

    return (
        <div>
            <div className="relative flex border-b border-[rgba(102,102,102,1)]">
                <div className=" w-[80%] p-2">
                    <div className="w-full">
                        <UserImage />
                    </div>
                    <div>
                        <h1 className='font-bold text-[1.8rem] py-2'>{params.profileId}</h1>
                        <span className="text-[0.85rem]">joined on {joinDate || "00/00/0000"}</span>
                    </div>
                </div>
                <div className="absolute flex flex-col w-[20%] h-fit self-center p-4 gap-2 right-0 rounded-l-md border border-white" >
                    <div className="h-1/2 group pt-2 pl-2 rounded-tl-md" onClick={goToFolloweds}>
                        <h3 className="font-bold text-[1.2rem] group-hover:text-[#FF9858] text-end">Followed</h3>
                        <h4 className="group-hover:text-[#FF9858] text-end">{user || 1000}</h4>
                    </div>
                    <div className="h-1/2 content-end group pb-2 pl-2 rounded-bl-md" onClick={goToFollowing}>
                        <h3 className="font-bold text-[1.2rem] group-hover:text-[#FF9858] text-end">Following</h3>
                        <h4 className="group-hover:text-[#FF9858] text-end">{user || 1000}</h4>
                    </div>
                </div>
            </div>
            <h2 className='font-bold text-[1rem] px-2 py-4'>{params.profileId}'s posts</h2>
            <div>
                {
                    placeholder.map((post, index) => (
                        <Card key={index} UserId={post.userId} PostId={post.postId} User={post.user} Message={post.message} HasImage={post.hasImage} ImageSrc={post.imageSrc} Username={post.user} />
                    ))
                }
            </div>
        </div>
    )
}