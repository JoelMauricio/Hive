"use client"

import Card from "../components/general/Card"
import { placeholder } from "../constants"


export default function Page() {
    return (
        <>
            <h1 className='font-bold text-[1.2rem] px-2'>Favorites</h1>
            <div>
                {
                    placeholder.map((post, index) => (
                        <Card key={index} User={post.user} Message={post.message} HasImage={post.hasImage} ImageSrc={post.imageSrc} />
                    ))
                }
            </div>
        </>
    )
}