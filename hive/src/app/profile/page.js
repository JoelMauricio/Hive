"use client"

import Image from "next/image"
import Link from "next/link"
import Card from "../components/general/Card"
import { useRouter } from "next/navigation"
import { useAuthContext } from "../context/authentication"
import { useEffect, useState } from "react"
import supabase from "../supabaseClient"
import NotResultsComp from "../components/general/NoResultsComponent"

export default function Page() {
    const [ profile, useProfile ] = useAuthContext()
    const [userPosts, setUserPosts] = useState([])
    const [isLoading, setLoading] = useState(false)
    const router = useRouter();
    const [user, setUser] = useState(null)
    const [follows, setFollows] = useState(0)
    const [following, setFollowing] = useState(0)
    async function getUserData() {
        if (user == null) {
            const { data, error } = await supabase.from("tbluser").select("*").eq("user_id", profile)
            if (error) {
                console.log(error)
            }
            setUser(data[0])
        }
    }


    async function getfollows() {
        if (userPosts.length < 1) {
            const { error, count } = await supabase.from("tblfollow").select("*,tbluser!user_followed(*)", { count: "exact" }).eq("follower", profile)
            setFollows(count)
        }
    }

    async function getfollowing() {
        if (userPosts.length < 1) {
            const { count, error } = await supabase.from("tblfollow").select("*,tbluser!user_that_followed(*)", { count: "exact" }).eq("followed", profile)
            setFollowing(count)
        }
    }


    async function getUserPosts() {
        if (userPosts.length < 1) {
            const { data, error } = await supabase.from("tblpost").select("*,tbluser!tblpost_author_fkey(*)").eq("author", profile)
            setUserPosts(data)
            getUserData()

            setLoading(false)
        }
    }

    function goToFolloweds() {
        router.push(`/profile/${profile}/followed`)
    }

    function goToFollowing() {
        router.push(`/profile/${profile}/following`)
    }

    useEffect(() => {
        setLoading(true)
        getfollowing()
        getfollows()
        getUserData()
        getUserPosts()
    }, [])
    return (
        <div>
            <div className="relative flex border-b border-[rgba(102,102,102,1)]">
                <div className=" w-[80%] p-2">
                    <div className="w-full">
                        <Image className='w-[125px] h-[125px] bg-white rounded-full' src={""} alt="user photo" height={500} width={500} />
                    </div>
                    <div>
                        <h1 className='font-bold text-[1.8rem] py-2'>{user?.display_name}</h1>
                        <span className="text-[0.85rem]">joined on {user?.joined?.split("T")[0]}</span>
                    </div>
                </div>
                <div className="absolute flex flex-col w-[20%] h-fit self-center p-4 gap-2 right-0 rounded-l-md border border-white" >
                    <div className="h-1/2 group pt-2 pl-2 rounded-tl-md" onClick={goToFolloweds}>
                        <h3 className="font-bold text-[1.2rem] group-hover:text-[#FF9858] text-end">Followed</h3>
                        <h4 className="group-hover:text-[#FF9858] text-end">{follows}</h4>
                    </div>
                    <div className="h-1/2 content-end group pb-2 pl-2 rounded-bl-md" onClick={goToFollowing}>
                        <h3 className="font-bold text-[1.2rem] group-hover:text-[#FF9858] text-end">Following</h3>
                        <h4 className="group-hover:text-[#FF9858] text-end">{following}</h4>
                    </div>
                </div>
            </div>
            <h2 className='font-bold text-[1rem] px-2 py-4 gap-2'>{user?.display_name}&apos;s posts</h2>
            <div className="overflow-y-auto">
                {isLoading ? <div className="flex justify-center">Loading...</div> : userPosts.length < 1 ? <NotResultsComp userId={profile} /> :
                    userPosts?.map((post, index) => (
                        <Card key={index} UserId={profile} PostId={post.post_id} User={post.tbluser.display_name} Message={post.content} HasImage={post.hasphoto} ImageSrc={post.photo} Username={post.tbluser.username} unclickable={false} />
                    ))
                }
            </div>
        </div>
    )
}