import { createContext, useState, useEffect } from "react";
import { getProfile } from "../config/getProfile";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [loadingProfile, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      //Verificamos si ya hay datos
      if (Object.keys(profile).length > 0) return;

      //Obtenemos los datos de la API
      const data = await getProfile();
      
      if(Object.keys(data).length <= 0) return;
      setProfile(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        loadingProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext };

export default ProfileProvider;
