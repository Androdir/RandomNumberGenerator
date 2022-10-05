import { Text } from "react-native";

import styles from "./styles";

const Label = (props) => {

	const { text, style } = props;

	return (
		<Text style={[styles.text, style]}>
			{text}
		</Text>
	);
}

export default Label;