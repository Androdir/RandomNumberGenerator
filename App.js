import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import StyledButton from './components/StyledButton';
import Range from './components/Range';
import Amount from './components/Amount';
import Numbers from './components/Numbers';
import { useState, useEffect } from 'react';

export default function App() {
	const [vals, setVals] = useState({min: 1, max: 6, amount: 1, numbers: []});

	const generateNums = () => {
		let nums = [];
		for (let i = 0; i < vals.amount; i++) {
			nums.push(Math.floor(Math.random() * (vals.max - vals.min + 1) + vals.min));
		}
		setVals({...vals, numbers: nums});
	}

	const onAmountChange = value => {
		setVals({...vals, amount: value});
	}

	const onMinChange = value => {
		setVals({...vals, min: value});
	}

	const onMaxChange = value => {
		setVals({...vals, max: value});
	}
	
	useEffect(() => {
		generateNums();
	}, []);
	
	return (
		<View style={styles.container}>
			<Numbers numbers={vals.numbers} />
			<StyledButton title="Generate number" onPress={generateNums} />
			<Amount vals={vals} onAmountChange={onAmountChange} />
			<Range vals={vals} onMinChange={onMinChange} onMaxChange={onMaxChange} />

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#228ee6',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
