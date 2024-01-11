import axios from 'axios';
import { useState } from 'react';

export default function CreatePost() {
  type UsersData = {
    content: string;
    image1: File;
  };
  const [userPost, setUserPost] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
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
      image1: formData,
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

  return (
    <>
      <div className='flex fixed top-0 left-0 w-full h-[100vh] bg-black opacity-[0.5] items-center justify-center'></div>
      <div className='flex fixed top-0 left-0 w-full h-[100vh] items-center justify-center'>
        <div className='w-[500px] h-[500px] bg-[#E8E8E6]'>
          <form>
            <input
              type='text'
              placeholder="What's on your mind?"
              onChange={(e) => setUserPost(e.target.value)}
            />
            <input type='file' onChange={(e) => handleFileChange(e)} />
            <button onClick={(e) => handle_postData(e)}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
