import { createContext, useState } from 'react';
import Data from '../assets/data/data';
import { useEffect } from 'react';

export const QuesContext = createContext([]);

export const QuesProvider = ({ children }) => {
	const [data, setData] = useState(Data);

	useEffect(() => {
		if (!localStorage.getItem('data')) {
			setData(Data);
		} else {
			setData(JSON.parse(localStorage.getItem('data')));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(data));
	});

	return (
		<QuesContext.Provider value={{ data, setData }}>
			{children}
		</QuesContext.Provider>
	);
};
