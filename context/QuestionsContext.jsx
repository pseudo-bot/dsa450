import { createContext, useState } from 'react';
import Status from '../assets/data/status';
import { useContext, useEffect } from 'react';
import { UserContext } from './UserContext';
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
doc;

export const QuesContext = createContext([]);

export const QuesProvider = ({ children }) => {
	let user = useContext(UserContext);
	const [status, setStatus] = useState(Status);

	const changeStatus = async (topic_index, question_index) => {
		if (user) {
			const docRef = doc(db, 'users', user.uid);

			let newStatus = [...status];
			newStatus[topic_index][0][question_index] =
				!status[topic_index][0][question_index];

			await updateDoc(docRef, {
				status: newStatus,
			});
		} else {
			let newStatus = [...status];
			newStatus[topic_index][0][question_index] =
				!status[topic_index][0][question_index];
			setStatus(newStatus);
		}
	};

	useEffect(() => {
		let unsub;
		if (user) {
			const docRef = doc(db, 'users', user.uid);
			(async function () {
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					unsub = onSnapshot(docRef, doc => {
						if (doc.data()) {
							setStatus(doc.data().status)
						}
					})
				} else {
					await setDoc(docRef, {
						status,
					});
				}
			})();
		}
		return unsub;
	}, [user]);

	return (
		<QuesContext.Provider value={{ status, changeStatus }}>
			{children}
		</QuesContext.Provider>
	);
};
