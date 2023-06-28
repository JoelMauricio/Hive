"use client"

import Card from "@/app/components/general/Card"
import CommentCard from "@/app/components/general/Comment"
import { placeholder } from "@/app/constants"

export default function Page({ params }) {
    return (<>
        <Card User={params.postId} />
        <div className='grid w-full h-full items-center overflow-y-auto'>
            <div className='flex flex-col w-[80%] h-full m-auto gap-2'>
                {
                    placeholder.map((user, index) => (
                        <CommentCard key={index} User={user.user} Message={user.message} />
                    ))
                }
            </div>
        </div>
    </>)
}