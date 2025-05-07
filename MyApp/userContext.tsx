import React, { createContext, useState, useContext, ReactNode } from 'react';

type UserContextType = {
  avatarUri: string;
  setAvatarUri: (uri: string) => void;
  nicknameProvider: string;
  setNicknameProvider: (name: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [avatarUri, setAvatarUri] = useState('');
  const [nicknameProvider, setNicknameProvider] = useState("");

  return (
    <UserContext.Provider value=
    {{ avatarUri,
      setAvatarUri,
      nicknameProvider,
      setNicknameProvider, }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};
