import axios from 'axios';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type CreatingPost = {
  createPost: boolean;
  setCreatePost: Dispatch<SetStateAction<boolean>>;
};

export default function CreatePost({
  createPost,
  setCreatePost,
}: CreatingPost) {
  type UsersData = {
    content: string;
    image1: File;
  };
  const [userPost, setUserPost] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    setSelectedFile(file || null);
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        setImagePreview(result);
      };

      reader.readAsDataURL(file);
    } else {
      setImagePreview('');
    }
  };

  function handle_postData(e: any) {
    e.preventDefault();
    const data = localStorage.getItem('bond_user');
    let current_user_token;
    if (data) {
      current_user_token = JSON.parse(data).token;
    }

    const formData = new FormData();
    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    const userPostDatat = {
      content: userPost,
      image1: `${formData}`,
    };

    async function makePost(current_user_token: string) {
      const bk_url = 'https://bond-hs2g.onrender.com/api/v1/posts';
      try {
        await axios.post(bk_url, userPostDatat, {
          headers: {
            Authorization: `Bearer ${current_user_token}`,
            'Content-Type': 'application/json',
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
    makePost(current_user_token);
  }

  function handleCloseCreatePost(e: any) {
    setCreatePost(!createPost);
    e.stopPropagation();
  }

  const route = useRouter();
  const pathname = usePathname();
  const exitDetailHandler = (e: any) => {
    const element = e.target;
    console.log(element.classList);

    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      setCreatePost(!createPost);
    }
  };

  return (
    <>
      <div className='flex fixed top-0 left-0 w-full h-[100vh] bg-black opacity-[0.5] items-center justify-center'></div>
      <div
        className='shadow flex fixed top-0 left-0 w-full h-[100vh] items-center justify-center '
        onClick={(e) => exitDetailHandler(e)}
      >
        <div className='w-[500px] h-[500px] bg-[#E8E8E6]'>
          <div className='w-full pt-5 mb-5 border-b border-b-black'>
            <h4 className='text-center '>Create new post</h4>
          </div>
          <form className='w-full px-5'>
            <textarea
              className='h-[100px] w-full resize-none bg-inherit border border-black p-3'
              placeholder="What's on your mind?"
              onChange={(e) => setUserPost(e.target.value)}
            />
            {imagePreview && (
              <div className='h-[250px] overflow-hidden'>
                <Image
                  src={imagePreview}
                  alt='selected image'
                  width={100}
                  height={100}
                  className='w-full object-cover'
                />
              </div>
            )}
            <input
              type='file'
              onChange={(e) => handleFileChange(e)}
              className='mt-5'
            />
            <button onClick={(e) => handle_postData(e)}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
