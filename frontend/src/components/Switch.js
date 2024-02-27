import { Switch as RNSwitch } from "react-native-paper";

const Switch = ({ value, onValueChangeHandler }) => {
  return (
    <RNSwitch
      value={value}
      onValueChange={onValueChangeHandler}
      trackColor={{ false: "#767577", true: "#d1d1d1" }}
      thumbColor={value ? "#919191" : "#f4f3f4"}
    />
  );
};

export default Switch;
