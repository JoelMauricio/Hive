"use client"
import Image from 'next/image'
import ChatIcon from "@/app/icons/ChatIcon"
import IconHeart from '@/app/icons/Like';
import IconBookmark from '@/app/icons/save';
import { useState } from 'react';
import IconBookmarkFill from '@/app/icons/Saved';
import IconHeartFill from '@/app/icons/LikeFill';
import { useRouter } from 'next/navigation';
import IconSend from "@/app/icons/Send";



export default function Card({ PostId, UserId, User, Message, HasImage, ImageSrc }) {
    function NewComment({ PostId, UserId, User, Message, action }) {
        const [keyword, setKeyword] = useState("");

        const handleChange = (e) => {
            setKeyword(e.target.value);
        }

        const makePost = () => {
            setCommenting(!isCommenting);
            setKeyword("");
        }


        return (<div className='flex flex-col min-w-[100%] h-fit px-2 rounded-b-md bg-[rgba(46,46,46,1)]'>
            <div className='flex flex-col min-w-[90%] gap-2 p-2 pr-4'>
                <div className="flex flex-col h-fit w-full gap-2 items-end focus:h-[85px]" >
                    <textarea
                        placeholder={"Max 250 characters"}
                        value={keyword}
                        onChange={handleChange}
                        maxLength={250}
                        className="shadow appearance-none resize-none overflow-hidden border-2 border-mainBlack rounded-md w-[100%] h-full py-2 px-2 text-[.8rem] break-words text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:h-[75px]"
                    />
                </div>
                <div className="flex h-fit w-full gap-2 justify-end focus:h-[85px]" >
                    <button onClick={makePost} className="group pr-[0.45rem] flex items-center justify-self-end focus:outline-none gap-2">
                        <IconSend className="group-hover:fill-[#FF9858] h-auto w-[1.5rem]"></IconSend>
                    </button>
                </div>

            </div >
        </div >);
    }


    const router = useRouter();
    var actionHandler = false;

    const [likeState, setLikeState] = useState(false)
    const [saveState, setSaveState] = useState(false)
    const [isCommenting, setCommenting] = useState(false)
    function handleAction() {
        if (actionHandler) {
            setCommenting(!isCommenting);
        }
    }

    function likePost() { setLikeState(!likeState) }
    function savePost() { setSaveState(!saveState) }
    function openComment() { setCommenting(!isCommenting) }
    function openPost() { router.push(`/profile/${UserId}/posts/${PostId}`) }

    return (<>
        <div className='flex flex-col min-w-[100%] min-h-[100px] p-2 border-y border-y-[rgba(102,102,102,1)] hover:bg-[rgba(46,46,46,.3)]'  >
            < div className='flex' onClick={openPost}>
                < div className='min-w-[10%]' >
                    <Image className='w-[50px] h-[50px] bg-white rounded-full mx-auto mt-2 ' />
                </div >
                <div className='flex flex-col min-w-[90%] p-2 pr-4 gap-2'>
                    <span className='font-medium text-2xl'>{User}</span>
                    <p className='text-justify text-[12px]'>{Message}</p>

                    {HasImage ? <div className='w-full h-fit'>
                        <Image className='aspect-auto w-full h-full' src={ImageSrc} width={450} height={450} />
                    </div> : null}
                </div>
            </div >
            <div className='flex w-[100%] justify-end gap-4 p-2 align-middle'>
                {/* buttons for interaction */}
                <div className='flex gap-2'><span>1000</span><button className='focus:outline-none' onClick={openComment}><ChatIcon className="h-[20px] w-[20px]" /></button></div>
                <div className='flex gap-2'><span>1000</span><button className='focus:outline-none' onClick={likePost}>
                    {likeState === false ? <IconHeart className="h-[20px] w-[20px]" /> : <IconHeartFill className="h-[20px] w-[20px] stroke-white" />}
                </button></div>
                <button className='focus:outline-none' onClick={savePost}>
                    {saveState === false ? <IconBookmark className="h-[20px] w-[20px]" /> : <IconBookmarkFill className="h-[20px] w-[20px]" />}
                </button>
            </div>
        </div >
        {
            isCommenting ?
                <div className='flex flex-col min-w-[100%] min-h-[75px] pt-0 p-2 '>
                    <NewComment action={actionHandler} />
                </div>
                : null
        }
    </>);
}
