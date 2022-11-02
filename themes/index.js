import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Dark from './Dark';
import Light from './Light';

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(Light);
	const [isLoadingTheme, setIsLoadingTheme] = useState(true);

	const findOldTheme = async () => {
		const themeMode = await AsyncStorage.getItem('themeMode');
		if (themeMode !== null) {
			themeMode === 'default' ? setTheme(Light) : setTheme(Dark);
			setIsLoadingTheme(false);
		}
		setIsLoadingTheme(false);
	};

	useEffect(() => {
		findOldTheme();
	}, []);

	const updateTheme = currentThemeMode => {
		const newTheme = currentThemeMode === 'default' ? Dark : Light;
		setTheme(newTheme);
		AsyncStorage.setItem('themeMode', newTheme.themeMode);
	};

	return (
		<ThemeContext.Provider value={ { theme, isLoadingTheme, updateTheme } }>
			{ children }
		</ThemeContext.Provider>
	);
    };

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
