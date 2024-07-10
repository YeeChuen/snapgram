import { Models } from "appwrite";
import { Link, useParams } from "react-router-dom";

import { Button } from "../ui/button";
import {
  useDeleteFollowUser,
  useFollowUser,
  useGetUserById,
} from "../../lib/react-query/queriesAndMutations";
import { useEffect, useState } from "react";
import { useUserContext } from "../../context/AuthContext";

type UserCardProps = {
  user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="user-card">
      <Link to={`/profile/${user.$id}`}>
        <img
          src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
          alt="creator"
          className="rounded-full w-14 h-14"
        />

        <div className="flex-center flex-col gap-1">
          <p className="base-medium text-light-1 text-center line-clamp-1">
            {user.name}
          </p>
          <p className="small-regular text-light-3 text-center line-clamp-1">
            @{user.username}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
