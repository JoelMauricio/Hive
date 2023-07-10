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
import supabase from '@/app/supabaseClient'
import { AuthContext, useAuthContext } from '@/app/context/authentication';



export default function Card({ PostId, UserId, User, Message, HasImage, ImageSrc, Username, unclickable, isFavorite = false }) {

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
    const [avatar, setAvatar] = useState(`https://nbeavztkonchgnujeqve.supabase.co/storage/v1/object/public/Profiles/UserPhotos/${UserId}/avatar`);
    if (UserId == undefined ) {
        setAvatar('https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=')
    }


    const router = useRouter();
    var actionHandler = false;

    const [likeState, setLikeState] = useState(false)
    const [saveState, setSaveState] = useState(isFavorite)
    const [isCommenting, setCommenting] = useState(false)
    function handleAction() {
        if (actionHandler) {
            setCommenting(!isCommenting);
        }
    }

    async function likePost() { 
        var user_id = 2
        setLikeState(!likeState)
        if (likeState) {

        }
        else {
            const { data, error } = await supabase
            .from('tbllike')
            .insert([
              { user_liked: user_id, liked_post: PostId },
            ])
            .select()
          
        }
    }
    
    async function savePost() { 
        setSaveState(!saveState)
        if (saveState == true) {
            // Elimina
        } else {
            const { data, error } = await supabase
            .from('tblbookmark')
            .insert([
              { user_bookmarked: 1, bookmarked_post: PostId },
            ])
            .select()
        } 
    }
    function openComment() { setCommenting(!isCommenting) }
    function openPost() { router.push(`/profile/${UserId}/posts/${PostId}`) }

    return (<>
        <div className='flex flex-col min-w-[100%] min-h-[100px] p-2 border-y border-y-[rgba(102,102,102,1)] hover:bg-[rgba(46,46,46,.3)]'  >
            < div className='flex' onClick={unclickable == false ? openPost : null}>
                < div className='min-w-[10%]' >
                    <Image alt={`${User}'s profile photo`} src={avatar || "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} className='w-[50px] h-[50px] bg-white rounded-full mx-auto mt-2 ' width={500} height={500} />
                </div >
                <div className='flex flex-col min-w-[90%] p-2 pr-4 gap-2'>
                    <div className='flex gap-2 items-baseline'>
                        <span className='font-medium text-2xl'>{User}</span>
                        <span className='font-medium text-sm'>{Username}</span>
                    </div>
                    <p className='text-justify text-[12px]'>{Message}</p>

                    {HasImage ? <div className='w-full h-fit'>
                        <Image alt={`${User}'s profile photo`} className='aspect-auto w-full h-full' src={ImageSrc} width={450} height={450} />
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
