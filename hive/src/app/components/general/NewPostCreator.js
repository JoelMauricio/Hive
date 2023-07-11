"use client"
import Image from 'next/image';
import { useRef, useState } from 'react';
import InputBar from './CustomInput';
import IconSend from "@/app/icons/Send";
import IconPhoto from '@/app/icons/PhotoIcon';
import IconPhotoDelete from '@/app/icons/PhotoIconDelete';
import supabase from "@/app/supabaseClient"

export default function NewPost({ PostId, UserId, User, Message, HasImage, ImageSrc }) {

    const [profile] = useAuthContext()
    const [keyword, setKeyword] = useState("");
    const [selectedImage, setSelectedImage] = useState();

    const imageInput = useRef(null);

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    async function makePost() {
        var testjajaja = 1
        const { data, error } = await supabase
            .from('tblpost')
            .insert([
                { author: testjajaja, content: keyword, photo: null, hasphoto: 0 },
            ])
            .select()

        setKeyword("");
    }


    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    }

    const handleClick = () => {
        imageInput.current.click();
    }

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    }

    return (<div className='flex flex-col min-w-[100%] h-fit py-1 px-2 '>
        < div className='flex '>
            < div className='min-w-[10%] items-center mx-auto' >
                <Image alt={`${User}'s photo`} src={"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} className='w-[50px] h-[50px] bg-red-200 rounded-full mx-auto mt-2' width={500} height={500} />
            </div >
            <div className='flex flex-col min-w-[90%] gap-2 p-2 pr-4'>
                <span className='font-medium text-[1rem]'>Write your thoughts...</span>
                <div className="flex flex-col h-fit w-full gap-2 items-end focus:h-[85px]" >
                    <textarea
                        placeholder={"Max 250 characters"}
                        value={keyword}
                        onChange={handleChange}
                        maxLength={250}
                        className="shadow appearance-none resize-none overflow-hidden border-2 border-mainBlack rounded-md w-[100%] h-full py-2 px-2 text-[.8rem] break-words text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:h-[75px]"
                    />
                    <input
                        ref={imageInput}
                        accept="image/*"
                        type="file"
                        onChange={imageChange}
                        className='hidden'
                    />

                    {selectedImage && (
                        <div>
                            <img
                                src={URL.createObjectURL(selectedImage)}
                                alt="Thumb"
                                className='rounded-sm border border-[rgba(70,70,70,1)]'
                            />
                        </div>
                    )}
                </div>
                <div className="flex h-fit w-full gap-2 justify-between focus:h-[85px]" >

                    {
                        selectedImage === undefined ? <button onClick={handleClick} className="group pr-[0.45rem] flex items-center justify-self-end focus:outline-none gap-2">
                            <IconPhoto className="group-hover:stroke-[#FF9858] h-auto w-[1.5rem]" />
                        </button>
                            : <button onClick={removeSelectedImage} className="group pr-[0.45rem] flex items-center justify-self-end focus:outline-none gap-2">
                                <IconPhotoDelete className="group-hover:stroke-[#FF0518] h-auto w-[1.5rem]" />
                            </button>
                    }

                    <button onClick={makePost} className="group pr-[0.45rem] flex items-center justify-self-end focus:outline-none gap-2">
                        <IconSend className="group-hover:fill-[#FF9858] h-auto w-[1.5rem]"></IconSend>
                    </button>
                </div>

            </div>
        </div >
    </div >);
}