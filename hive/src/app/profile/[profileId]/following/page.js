"use client"

import UserCard2 from "@/app/components/general/UserCard2"
import Image from "next/image"
import { useEffect, useState } from "react"
import supabase from "@/app/supabaseClient"
import { useAuthContext } from "@/app/context/authentication"
import NotResultsComp from "@/app/components/general/NoResultsComponent"
import { Average } from "next/font/google"

export default function Page({ params }) {
    const [profile, useProfile] = useAuthContext()
    const [isLoading, setLoading] = useState(true)
    const [avatar, setAvatar] = useState("https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=");


    const [followingAccounts, setFollowingAccounts] = useState([])
    const [user, setUser] = useState(null)
    async function getUserData() {
        if (user == null) {
            const { data, error } = await supabase.from("tbluser").select("*").eq("user_id", params.profileId)
            if (error) {
                console.log(error)
            }
            console.log(data)
            setUser(data[0])
            getUserPhoto()

        }
    }
    async function getUserPhoto() {
        const { data, error } = await supabase.storage.from("Profiles").list(`UserPhotos/${params.profileId}`)
        if (data[0]?.name == "avatar") {
            setAvatar(`https://nbeavztkonchgnujeqve.supabase.co/storage/v1/object/public/Profiles/UserPhotos/${params.profileId}/avatar`)
        }
        else {
            setAvatar("https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=")
        }

    }


    async function getFollowing() {
        const { data, error } = await supabase.from("tblfollow").select("*,tbluser!user_followed(*)").eq("follower", params.profileId)
        if (error) {
            console.log(error)
        }
        setFollowingAccounts(data)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        getUserData()
        getFollowing()
    }, [])


    return (<>
        <div className="relative flex border-b border-[rgba(102,102,102,1)]">

            <div className=" w-[80%] p-2">
                <div className="w-full">
                    <Image className='w-[125px] h-[125px] bg-white rounded-full' src={avatar} alt="user photo" height={500} width={500} />
                </div>
                {isLoading ? <div>Loading...</div> :
                    <div>
                        <h1 className='font-bold text-[1.8rem] py-2'>{user?.display_name}</h1>
                    </div>}
            </div>

        </div>
        <h1 className='font-bold text-[1.2rem] px-2'>Following</h1>
        <div className='grid w-full h-full overflow-y-auto'>
            {isLoading ? <div className="p-2">Loading...</div> : followingAccounts.length < 1 ? <NotResultsComp CustomText={"This user does not follow any account"} /> :
                <div className='grid grid-flow-row grid-cols-3 w-full h-full m-auto gap-2 p-2'>
                    {followingAccounts?.map((user, index) => (
                        <UserCard2 key={index} UserId={user.tbluser.user_id} User={user.tbluser.display_name} Username={user.tbluser.username} isFollowed={true} />
                    ))}
                </div>
            }
        </div>
    </>)
}