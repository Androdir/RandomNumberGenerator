import { Pressable, Text, View } from 'react-native';

import styles from './styles';

const StyledButton = (props) => {
	const { title, onPress } = props;
	return (
		<View style={styles.container}>
			<Pressable
				style={styles.button}
				onPressIn={onPress}
				android_ripple={{ color: "#2a2a2a", borderless: true }}>
				<Text style={styles.text}>{title}</Text>
			</Pressable>
		</View>
	);
}

export default StyledButton;