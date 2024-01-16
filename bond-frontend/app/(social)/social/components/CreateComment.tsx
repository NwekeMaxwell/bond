import axios from 'axios';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { LuPen } from 'react-icons/lu';

type CreatingComment = {
  create_comment: boolean;
  setCreate_comment: Dispatch<SetStateAction<boolean>>;
  user_image: string;
  post_id: string;
  post_author_id: string;
};

type PostComments_ = {
  _id: string;
  author: {
    username: string;
    _id: string;
  };
  content: string;
  parentpost: {
    _id: string;
  };
};

export default function CreateComment({
  create_comment,
  setCreate_comment,
  user_image,
  post_id,
  post_author_id,
}: CreatingComment) {
  const [comment, setComment] = useState('');
  const [postComments, setPostComments] = useState<[PostComments_] | null>(
    null
  );
  console.log(post_id);

  const [madeComment, setMadeComment] = useState(false);
  const [editComment, setEditComment] = useState(false);
  const [commentContent, setCommentContent] = useState('');
  const [commentId, setCommentId] = useState('');
  const [loggedInUserId, setLoggedInUserId] = useState('');

  useEffect(() => {
    async function getComments() {
      const data = localStorage.getItem('bond_user');
      let current_user_token;
      if (data) {
        current_user_token = JSON.parse(data).token;
        setLoggedInUserId(JSON.parse(data).user._id);
      }
      const bk_url = `https://bond-hs2g.onrender.com/api/v1/comment/posts/${post_id}/comments`;

      try {
        await axios
          .get(bk_url, {
            headers: {
              Authorization: `Bearer ${current_user_token}`,
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            setPostComments(response.data.data);
          });
      } catch (err) {
        console.log(err);
      }
    }
    getComments();
  }, [madeComment]);

  // Add a comment
  async function handle_comment(e: any) {
    e.preventDefault();
    const data = localStorage.getItem('bond_user');
    let current_user_token;
    if (data) {
      current_user_token = JSON.parse(data).token;
    }
    const bk_url = `https://bond-hs2g.onrender.com/api/v1/comment/posts/${post_id}/comments`;

    try {
      await axios.post(
        bk_url,
        { content: comment },
        {
          headers: {
            Authorization: `Bearer ${current_user_token}`,
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    setComment('');
    setMadeComment(!madeComment);
  }

  // Delete a comment
  async function handle_delete_comment(e: any, comment_id: string) {
    e.preventDefault();
    const data = localStorage.getItem('bond_user');
    let current_user_token;
    if (data) {
      current_user_token = JSON.parse(data).token;
    }
    const bk_url = `https://bond-hs2g.onrender.com/api/v1/comment/posts/${post_id}/comments/${comment_id}`;

    try {
      await axios.delete(bk_url, {
        headers: {
          Authorization: `Bearer ${current_user_token}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }
    setMadeComment(!madeComment);
  }

  // Edit Comment
  async function handle_editComment(e: any, comment_id: string) {
    e.preventDefault();
    const data = localStorage.getItem('bond_user');
    let current_user_token;
    if (data) {
      current_user_token = JSON.parse(data).token;
    }
    const bk_url = `https://bond-hs2g.onrender.com/api/v1/comment/posts/${post_id}/comments/${comment_id}`;

    try {
      await axios.put(
        bk_url,
        {
          content: commentContent,
        },
        {
          headers: {
            Authorization: `Bearer ${current_user_token}`,
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    setComment('');
    setMadeComment(!madeComment);
    setEditComment(!editComment);
  }

  const exitDetailHandler = (e: any) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      setCreate_comment(!create_comment);
    }
  };
  const exitEditCommentHandler = (e: any) => {
    const element = e.target;
    if (element.classList.contains('shadowing')) {
      document.body.style.overflow = 'auto';
      setEditComment(!create_comment);
    }
  };

  const handleEditComment = (content: string, comment_ID: string) => {
    setCommentId(comment_ID);
    setCommentContent(content);
    setEditComment(!editComment);
  };

  return (
    <>
      <div className='flex fixed top-0 left-0 w-full h-[100vh] bg-black opacity-[0.5] items-center justify-center'></div>
      <div
        className='shadow flex fixed top-0 left-0 w-full h-[100vh] items-center justify-center '
        onClick={(e) => exitDetailHandler(e)}
      >
        <div className='w-[70vw] h-[80vh] bg-[#E8E8E6] rounded-xl '>
          <div className='w-full pt-5 mb-5 border-b border-b-black'>
            <h4 className='text-center h-[10vh]'>Create new comment</h4>
          </div>
          <div className='flex w-full overflow-hidden '>
            <div className='w-[50%] h-[60vh] overflow-hidden'>
              <Image
                src={user_image}
                alt='user profile picture'
                className='h-full object-cover w-full'
                width={500}
                height={500}
              />
            </div>
            <div className='w-[50%] h-[60vh] relative'>
              <div className='h-full overflow-auto w-full pl-5 pb-[100px]'>
                {postComments?.map((current_comment, index) => (
                  <div key={index}>
                    {current_comment.parentpost._id === post_id && (
                      <>
                        <div className='mb-5 flex pr-5'>
                          <div className='rounded-full h-[30px] w-[30px] border border-black flex justify-center items-center'>
                            <CiUser className='text-5xl p-2' />
                          </div>
                          <div className='ml-3 text-sm'>
                            <p className='text-black font-semibold'>
                              {current_comment.author.username}
                            </p>
                            <div className='flex items-center'>
                              <p className='mr-5'>{current_comment.content}</p>
                              {/* <div>
                                <p>not post id {current_comment.author._id}</p>
                                <p>delete</p>
                                <p>post id {post_author_id}</p>
                              </div> */}
                              {current_comment?.author._id ===
                                // post_author_id && (
                                loggedInUserId && (
                                <>
                                  <div
                                    className='cursor-pointer mr-5'
                                    onClick={(e) =>
                                      handle_delete_comment(
                                        e,
                                        current_comment._id
                                      )
                                    }
                                  >
                                    <RiDeleteBin7Line />
                                  </div>
                                  <div
                                    className='cursor-pointer'
                                    onClick={() =>
                                      handleEditComment(
                                        current_comment.content,
                                        current_comment._id
                                      )
                                    }
                                  >
                                    <LuPen />
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          {editComment && (
                            <>
                              <div className='flex fixed top-0 left-0 w-full h-[100vh] bg-black opacity-[0.5] items-center justify-center z-[1000]'></div>
                              <div
                                className='shadowing flex fixed top-0 left-0 w-full h-[100vh] items-center justify-center z-[50000] '
                                onClick={(e) => exitEditCommentHandler(e)}
                              >
                                <div className='w-[50vw] h-[50vh] bg-[#E8E8E6] rounded-xl '>
                                  <textarea
                                    name=''
                                    id=''
                                    className='w-full h-[40vh] resize-none p-3'
                                    value={commentContent}
                                    onChange={(e) =>
                                      setCommentContent(e.target.value)
                                    }
                                  ></textarea>
                                  <div className='flex justify-center w-full my-2'>
                                    <button
                                      className='bg-black text-white h-10 w-[200px] rounded-lg'
                                      onClick={(e) =>
                                        handle_editComment(e, commentId)
                                      }
                                    >
                                      Edit Comment
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <form className='w-full px-5 py-10 absolute bottom-0 left-0 z-[500] h-[100px] bg-[#E8E8E6]'>
                <input
                  type='text'
                  value={comment}
                  placeholder='Enter your comment'
                  className='bg-inherit border border-black rounded-lg h-10 w-[300px] mr-5 px-3'
                  onChange={(e) => setComment(e.target.value)}
                />
                <button
                  className='bg-black h-10 w-[100px] rounded-lg text-white'
                  onClick={(e) => handle_comment(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
