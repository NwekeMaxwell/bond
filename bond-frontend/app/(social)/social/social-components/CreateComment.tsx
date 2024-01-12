import axios from 'axios';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type CreatingComment = {
  create_comment: boolean;
  setCreate_comment: Dispatch<SetStateAction<boolean>>;
  user_image: string;
  post_id: string;
};

export default function CreateComment({
  create_comment,
  setCreate_comment,
  user_image,
  post_id,
}: CreatingComment) {
  const [comment, setComment] = useState('');

  function handle_postData(e: any) {
    e.preventDefault();
    const data = localStorage.getItem('bond_user');
    let current_user_token;
    if (data) {
      current_user_token = JSON.parse(data).token;
    }

    async function makePost(current_user_token: string) {
      const bk_url = `https://bond-hs2g.onrender.com/api/v1/posts/${post_id}/comments`;
      const userComment_data = comment;
      console.log(userComment_data);

      try {
        await axios.post(bk_url, userComment_data);
      } catch (err) {
        console.log(err);
      }
    }
    makePost(current_user_token);
  }

  const exitDetailHandler = (e: any) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      setCreate_comment(!create_comment);
    }
  };

  return (
    <>
      <div className='flex fixed top-0 left-0 w-full h-[100vh] bg-black opacity-[0.5] items-center justify-center'></div>
      <div
        className='shadow flex fixed top-0 left-0 w-full h-[100vh] items-center justify-center '
        onClick={(e) => exitDetailHandler(e)}
      >
        <div className='w-[70vw] h-[80vh] bg-[#E8E8E6] rounded-xl overflow-hidden'>
          <div className='w-full pt-5 mb-5 border-b border-b-black'>
            <h4 className='text-center '>Create new comment</h4>
          </div>
          <div className='flex w-full'>
            <div className='w-[50%]'>
              <Image
                src={user_image}
                alt='user profile picture'
                className='h-full object-cover w-full'
                width={500}
                height={500}
              />
            </div>
            <div className='w-[50%]'>
              <form className='w-full px-5'>
                <input
                  type='text'
                  placeholder='Enter your comment'
                  onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={(e) => handle_postData(e)}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
