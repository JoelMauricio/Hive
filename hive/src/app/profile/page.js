"use client"

import Image from "next/image"
import Link from "next/link"
import Card from "../components/general/Card"
import { placeholder } from "../constants"

export default function Page() {
    var user = undefined

    return (<>
        <h1 className='font-bold text-[1.2rem] px-2'>{user || "Usuario"}</h1>
        <Image src={""} alt="User image" width={150} height={100} />
        <div >
            <h2 className='font-bold text-[1rem] px-2 py-4'>{user || "Usuario"}'s posts</h2>
            <div>
                {
                    placeholder.map((post, index) => (
                        <Card key={index} User={post.user} Message={post.message} HasImage={post.hasImage} ImageSrc={post.imageSrc} />
                    ))
                }
            </div>
        </div>
    </>
    )
}