"use client"

import Card from "../components/general/Card"
import { useState, useEffect } from "react"
import supabase from "../supabaseClient"
import { useAuthContext } from "../context/authentication"
import NotResultsComp from "../components/general/NoResultsComponent"

export default function Page() {
    const [profile, useProfile] = useAuthContext()
    const [favorites, setFavorites] = useState([])
    const [isLoading, setLoading] = useState(false)


    async function getFavorites() {
        if (favorites?.length < 1) {
            const { data, error } = await supabase.from("tblbookmark").select("*,tblpost(*),tbluser(*)").eq("user_bookmarked", profile)
            setFavorites(data)
            setLoading(false)
            if (error) {
                console.error(error);
            }
        }
    }
    useEffect(() => {
        setLoading(true)
        getFavorites();
    }, [])

    return (
        <>
            <h1 className='font-bold text-[1.2rem] px-2'>Favorites</h1>
            <div>
                {isLoading ? <div className="flex justify-center">Loading...</div> : favorites.length < 1 ? <NotResultsComp favorites={true} userId={profile} /> :
                    favorites?.map((post, index) => (
                        <Card key={index} UserId={post.tbluser.user_id} PostId={post.tblpost.post_id} User={post.tbluser.display_name} Username={post.tbluser.username} Message={post.tblpost.content} HasImage={post.tblpost.hasphoto} ImageSrc={post.tblpost.photo} unclickable={false} isFavorite={true} />
                    ))
                }
            </div>
        </>
    )
}