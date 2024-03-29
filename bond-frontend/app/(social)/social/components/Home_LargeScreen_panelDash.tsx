'use client';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { BsChat } from 'react-icons/bs';
import CreateComment from './CreateComment';
import { Users_Data_from_db } from '../Types/UserDataTypes';
import { postsURL } from '../apis/routes';

export default function Home_LargeScreen_panelDash() {
  const [users_data, setUsers_data] = useState<[Users_Data_from_db] | null>(
    null
  );
  const [create_comment, setCreate_comment] = useState<boolean>(false);
  const [currentUserID, setCurrentUserId] = useState('');
  const [currentUserImg, setCurrentUserImg] = useState('');
  const [postAuthorID, setPostAuthorID] = useState('');

  useEffect(() => {
    function fetchdata_fromlocalstorage() {
      const data = localStorage.getItem('bond_user');
      if (data) {
        return JSON.parse(data).token;
      }
    }
    async function getUsersPosts(current_user_token: string) {
      // const bk_url = 'https://bond-hs2g.onrender.com/api/v1/posts';
      try {
        await axios
          .get(postsURL(), {
            headers: {
              Authorization: `Bearer ${current_user_token}`,
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            setUsers_data(response.data.data);
          });
      } catch (err) {
        console.log(err);
      }
    }
    getUsersPosts(fetchdata_fromlocalstorage());
  }, []);

  function handleCreateComment(
    postId: string,
    postImg: string,
    postAuthorId: string
  ) {
    setCurrentUserId(postId);
    setCurrentUserImg(postImg);
    setPostAuthorID(postAuthorId);
    setCreate_comment(!create_comment);
  }
  return (
    <section
      className={`max-h-[100vh] hidden md:grid bg-[#E8E8E6] border border-black overflow-y-auto`}
    >
      <div className='pt-5'>
        {users_data?.map((post, index) => (
          <div className='w-full flex p-5 border-t border-t-black' key={index}>
            <div className='rounded-full h-[40px] w-[40px] border border-black flex justify-center items-center'>
              <CiUser className='text-5xl p-2' />
            </div>
            <div className='pl-5 w-full'>
              <div className='flex items-center'>
                <p className='text-sm font-bold'>@{post.author.username}</p>
              </div>
              <div className='w-full mt-2'>
                <p className='text-sm'>{post.content}</p>
              </div>
              <div className='mt-5 w-full rounded-2xl overflow-hidden'>
                <div className='w-full h-full aspect-square overflow-hidden'>
                  <Image
                    src={post.image1}
                    alt='user profile picture'
                    className='h-full object-cover w-full'
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className='w-full flex px-3 py-5 items-center'>
                <CiHeart className='mr-5 text-[32px] cursor-pointer' />
                <div
                  className=''
                  onClick={() =>
                    handleCreateComment(post._id, post.image1, post.author._id)
                  }
                >
                  <BsChat className='mr-5 text-2xl cursor-pointer' />
                </div>
              </div>
              {create_comment && (
                <CreateComment
                  create_comment={create_comment}
                  setCreate_comment={setCreate_comment}
                  user_image={currentUserImg}
                  post_id={currentUserID}
                  post_author_id={postAuthorID}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
