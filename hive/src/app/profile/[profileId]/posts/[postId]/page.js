"use client"

import Card from "@/app/components/general/Card"
import CommentCard from "@/app/components/general/Comment"
import NotResultsComp from "@/app/components/general/NoResultsComponent"
import supabase from "@/app/supabaseClient"
import { useState, useEffect } from "react"

export default function Page({ params }) {
    const [post_data, setPostData] = useState({})
    const [comments, setComments] = useState([])

    async function getPostData() {
        if (post_data) {
            const { data, error } = await supabase.from("vw_post_info").select("*").eq("post_id", params.postId)
            setPostData(data[0])
            console.log(post_data)
            if (error) {
                console.log(error)
            }
        }
    }

    async function getComments() {
        if (comments.length < 1) {
            const { data, error } = await supabase.from("tblreply").select("*,tbluser(*)").eq("post_id", params.postId)
            setComments(data)
        }
    }

    useEffect(() => {
        // setLoading(true)
        getPostData()
        getComments()
    }, [comments])

    return (<>
        <div className='grid w-full h-fit'>

            <Card PostId={post_data.post_id} User={post_data?.display_name} Username={post_data?.username} postId={post_data?.post_id} Message={post_data?.content} unclickable={true} />
        </div>
        <div className='grid w-full h-full items-center overflow-y-auto'>
            <div className='flex flex-col w-[80%] h-full m-auto gap-2'>
                {comments.length < 1 ? <NotResultsComp CustomText={"There a no comments"} /> :
                    comments?.map((user, index) => (
                        <CommentCard key={index} User={user?.tbluser?.username} Message={user?.content} UserId={user?.tbluser?.user_id} />
                    ))
                }
            </div>
        </div>
    </>)
}