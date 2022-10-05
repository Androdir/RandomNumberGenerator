import { View } from "react-native";
import NumericInput from "react-native-numeric-input";
import styles from "./styles"
import Label from "../Label";

const Amount = props => {
	const { vals, onAmountChange } = props
	return (
		<View style={styles.container}>
			<Label style={styles.text} text="Amount of numbers" />
			<NumericInput
				rounded={true}
				reachMinDecIconStyle={styles.reachLimitDecIcon}
				type="plus-minus"
				onChange={onAmountChange}
				minValue={1}
				value={vals.amount}
				valueType="real" />
		</View>
	);
}

export default Amount