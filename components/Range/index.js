import { View } from "react-native";
import NumericInput from "react-native-numeric-input";
import styles from "./styles";
import Label from "../Label";

const Range = props => {
	const { vals, onMinChange, onMaxChange } = props;
	return (
		<View style={styles.container}>
			<Label style={styles.text} text="Range" />
			<NumericInput reachMaxIncIconStyle={styles.reachLimitDecIcon} rounded={true} value={vals.min} maxValue={vals.max} type="plus-minus" onChange={onMinChange} />
			<Label text=" - " />
			<NumericInput reachMinDecIconStyle={styles.reachLimitDecIcon} rounded={true} value={vals.max} minValue={vals.min} type="plus-minus" onChange={onMaxChange} />
		</View>
	);
}

export default Range