import { createContext, useState } from 'react';
import Data from '../assets/data/data';
import { useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
import { doc, getDoc, setDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
doc;

export const QuesContext = createContext([]);

export const QuesProvider = ({ children }) => {
	const [data, setData] = useState(Data);
	let user = useContext(UserContext);

	const setStatus = async (tin, qin) => {
		if (user) {
			const docRef = doc(db, 'users', user.uid);
			const docSnap = await getDoc(docRef);

			let newData = [...docSnap.data().data];
			newData[tin].problems[qin].status =
				!docSnap.data().data[tin].problems[qin].status;
			await updateDoc(docRef, {
				data: newData,
			});
		} else {
			let newData = [...data];
			newData[tin].problems[qin].status = !data[tin].problems[qin].status;
			setData(newData);
		}
	};

	useEffect(() => {
		let unsub;
		if (user) {
			const docRef = doc(db, 'users', user.uid);
			(async function () {
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					unsub = onSnapshot(docRef, (doc) => {
						if (doc.data()) {
							setData(doc.data().data);
						}
					});
				} else {
					await setDoc(docRef, {
						data: Data,
					});
				}
			})();
		}
		return unsub;
	}, [user]);

	return (
		<QuesContext.Provider value={{ data, setStatus }}>
			{children}
		</QuesContext.Provider>
	);
};
