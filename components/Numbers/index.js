import { FlatList } from "react-native";
import Label from "../Label";
import styles from "./styles"

const Numbers = (props) => {
	const { numbers } = props;
	return (
		<FlatList style={styles.container}
			data={numbers}
			renderItem={({ item }) => <Label style={styles.number} text={item} />}
			showsVerticalScrollIndicator={true}
			numColumns={5}
			keyExtractor={(item, index) => index.toString()}
			decelerationRate="fast"
		/>
	);
};

export default Numbers;