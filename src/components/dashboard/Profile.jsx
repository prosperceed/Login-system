import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { currentUser } = useAuth;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("profile");
    }
  }, [navigate]);

  return <div>profile. Yea thi is it</div>;
};

export default Profile;
