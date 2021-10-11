import { createContext } from 'react';
import { doc, onSnapshot } from '@firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../lib/firebase';
import { useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user] = useAuthState(auth);
	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
