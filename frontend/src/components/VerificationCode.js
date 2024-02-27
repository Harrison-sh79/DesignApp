import { StyleSheet, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Text } from "react-native-paper";
import { BUTTON_RADIUS, TEXT_LARGER } from "../styles/GlobalStyles";

const VerificationCode = ({ value, setValue }) => {
  const CELL_COUNT = 6;
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <View key={index} style={[styles.cell, isFocused && styles.focusCell]}>
          <Text onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 20 },
  cell: {
    flex: 1,
    width: "13%",
    aspectRatio: 1 / 1,
    margin: 5,
    fontSize: TEXT_LARGER,
    borderRadius: BUTTON_RADIUS,
    borderWidth: 1,
    borderColor: "#00000030",
    justifyContent: "center",
    alignItems: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});

export default VerificationCode;
