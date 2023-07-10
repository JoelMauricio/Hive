"use client"
import IconPhoto from '@/app/icons/PhotoIcon';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import supabase from '@/app/supabaseClient';
import { useAuthContext } from '@/app/context/authentication';

export default function UserImage({ User, UserId }) {
    const imageInput = useRef(null);
    const { profile, useProfile } = useAuthContext()
    const [selectedImage, setSelectedImage] = useState();
    if (profile != User) {
        return <>
            <div className='w-[125px] h-[125px] rounded-full flex relative'>
                <Image className='w-[125px] h-[125px] rounded-full self-center' src={selectedImage ? URL.createObjectURL(selectedImage) : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} alt="user photo" height={150} width={150} />
            </div>
        </>
    }

    // This function will be triggered when the file field change

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const avatarFile = e.target.files[0]
            setSelectedImage(avatarFile);
            confirmUpload(avatarFile);
        }
    }

    const handleClick = () => {
        imageInput.current.click();
    }

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    }

    const confirmUpload = async (file) => {
        const { data, error } = await supabase
            .storage
            .from('Profiles')
            .update(`UserPhotos/${User}/avatar`, file, {
                cacheControl: '3600',
                upsert: true
            })
    }


    return (
        <div className='w-[125px] h-[125px] rounded-full flex relative'>
            <input
                ref={imageInput}
                accept="image/*"
                type="file"
                onChange={imageChange}
                style={{ display: "none" }}
            />
            <div className='z-30 absolute flex w-[125px] h-[125px] rounded-full justify-center items-center transition-opacity ease-in-out opacity-0 hover:opacity-100' onClick={handleClick} >
                <IconPhoto className='w-[65px] h-[65px] stroke-[#FF9858]' />
            </div>
            <Image className='w-[125px] h-[125px] rounded-full self-center' src={selectedImage != undefined ? URL.createObjectURL(selectedImage) : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} alt="user photo" height={150} width={150} />

        </div>
    );
}