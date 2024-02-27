import { TouchableWithoutFeedback, Keyboard } from "react-native";

/**
 * For input blur after clicking places outside inputs
 */

const Form = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default Form;
