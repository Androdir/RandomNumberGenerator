import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		padding: 15,
		paddingBottom: 7.5,
		position: "relative",
		top: "25%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	text: {
		flex: 1,
		fontSize: 20,
		marginRight: 20,
	},
	reachLimitDecIcon: {
		color: "red",
	},
});

export default styles;