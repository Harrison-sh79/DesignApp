import { View, Text } from "react-native";
import globalStyles from "../../styles/GlobalStyles";
import Button from "../../components/Button/Button";
import PasswordInput from "../../components/PasswordInput";
import PasswordValidator from "../../components/PasswordValidator";
import { useState } from "react";
import Label from "../../components/Form/Label";
import Form from "../../components/Form/Form";

const CreatePasswordScreen = ({ navigation, route }) => {
  const [password, setPassword] = useState("");
  const [isPasswordValid, setPasswordValid] = useState(false);
  const { email } = route.params;
  const handlePasswordChange = (password) => {
    setPassword(password);
  };
  const handlePasswordValid = (isValid) => {
    setPasswordValid(isValid);
  };
  const handleSubmit = () => {
    if (isPasswordValid) {
      navigation.navigate("ConfirmPassword", {
        email: email,
        password: password,
      });
    }
  };

  return (
    <Form>
      <View style={globalStyles.formWrapper} gap={16}>
        <View>
          <Label>Create Password</Label>
          <PasswordInput
            placeholder="New password"
            onChangeText={handlePasswordChange}
            value={password}
          />
          <View style={{ marginTop: 8 }}>
            <PasswordValidator
              password={password}
              isPasswordValid={handlePasswordValid}
            />
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 16 }}>
          <Button
            title="Continue"
            style="largeButton"
            onPress={handleSubmit}
            disabled={password && !isPasswordValid}
          />
        </View>
      </View>
    </Form>
  );
};

export default CreatePasswordScreen;
