export type UserData = {
  createdAt: string;
  email: string;
  firstname: string;
  lastname: string;
  updatedAt: string;
  username: string;
  _v: number;
  _id: string;
};

export type UsersPost = {
  _id: string;
  author: {
    username: string;
    _id: string;
  };
  content: string;
  parentpost: {
    _id: string;
  };
  image1: string;
};

export type Users_Data_from_db = {
  author: { _id: string; username: string };
  content: string;
  createdAt: string;
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  updatedAt: string;
  _v: number;
  _id: string;
};
