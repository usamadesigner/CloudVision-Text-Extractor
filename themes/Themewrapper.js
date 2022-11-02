import { useTheme } from './index';

const ThemeWrapper = ({ children }) => {
	const { isLoadingTheme } = useTheme();
	if (isLoadingTheme) return null;
	return children;
};

export default ThemeWrapper;
