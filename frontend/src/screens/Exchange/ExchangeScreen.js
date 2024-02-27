import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import globalStyles from "../../styles/GlobalStyles";
import Button from "../../components/Button/Button";
import axios from "axios";
import Form from "../../components/Form/Form";
import debounce from "lodash.debounce";

const baseUrl = "http://hero-finance-api-dev.v-max.ca";

const ExchangeScreen = () => {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [rate, setRate] = useState("");
  const cancelTokenSourceRef = useRef(null);

  useEffect(() => {
    const debouncedFetchConversionRate = debounce(fetchConversionRate, 20);

    if (amount !== "") {
      debouncedFetchConversionRate(amount);
    } else {
      // if amount is empty, reset converted_amount and rate
      setConvertedAmount("");
      setRate("");
    }
    // cancel debounce when unmounted
    return () => {
      debouncedFetchConversionRate.cancel();
      if (cancelTokenSourceRef.current) {
        cancelTokenSourceRef.current.cancel();
      }
    };
  }, [amount]);

  const fetchConversionRate = async (inputAmount) => {
    // cancel previous request
    if (cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel();
    }
    // create a new CancelTokenfor newest request
    cancelTokenSourceRef.current = axios.CancelToken.source();

    const params = {
      country_pay_from: "CN",
      payment_amount: inputAmount,
    };

    try {
      const response = await axios.get(
        `${baseUrl}/exchange/education/fx_conversion`,
        { params, cancelToken: cancelTokenSourceRef.current.token }
      );
      if (response.data && response.data.data) {
        const fetchedRate = response.data.data.Rates.Rate[0];
        setRate(fetchedRate.fx_rate);
        setConvertedAmount(fetchedRate.converted_amount.toString());
      } else {
        setRate("");
        setConvertedAmount("");
        Alert.alert("Error", "Received invalid conversion rate data");
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else {
        console.error("Error fetching conversion rate:", error);
        Alert.alert("Error", "Unable to fetch conversion rate.");
      }
    }
  };

  const handleAmountChange = (inputAmount) => {
    setAmount(inputAmount);
    fetchConversionRate(inputAmount);
  };

  const lockRate = () => {};

  const handleMakePayment = async () => {
    const data = {
      country_pay_from: "CN",
      payment_amount: 10000.0,
      payment_purpose: "Tuition Fee",
      payment_method: 11,
      edu_institute_name: "University of British Columbia",
      who_is_making_the_payment: "Parent of Student",
      payer_name: "Larry Doe",
      payer_chinese_name: "张大伟",
      payer_nationality: "CN",
      payer_city: "Beijing",
      payer_address: "Zhongguancun, Haidian",
      payer_postal_code: 100000,
      payer_phone_number: "+8617109835678",
      payer_email: "pay1@gmail.com",
      payer_unique_id: 123,
      payer_document: "110101202401225415",
      student_name: "Tom Zhang",
      student_chinese_name: "张小伟",
      student_country: "CN",
      student_city: "Beijng",
      student_address: "Zhongguancun, Haidian",
      student_postal_code: 100000,
      student_phone_number: "12345678912",
      student_dob: "2000-04-23",
      student_number: "S1234",
      student_email: "stu1@gmail.com",
      student_unique_id: 456,
      student_document: "110101202401228018",
    };
    if (convertedAmount && rate) {
      try {
        const response = await axios.post(
          `${baseUrl}/exchange/education/make_payment`,
          data,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
        alert("Error", "Unable to make payment.");
      }
    } else {
      alert("Error", "Invalid amount or rate.");
    }
  };

  return (
    <Form>
      <ScrollView>
        <View style={globalStyles.formWrapper}>
          <Text style={globalStyles.formTitle}>Exchange</Text>
          <View style={{ marginBottom: 40 }}>
            <View style={{ marginBottom: 40 }}>
              <TextInput
                style={globalStyles.input}
                value={amount}
                onChangeText={handleAmountChange}
                placeholder="Enter Amount (CAD)"
                keyboardType="numeric"
              />
              <Text>{rate}</Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Exchange Currency"
                value={convertedAmount}
                editable={false}
              />
            </View>
            <Button
              title="Lock your rate"
              style="largeButton"
              onPress={lockRate}
            />
          </View>
          <Button
            title="Exchange via Transfermate"
            style="largeButton"
            onPress={handleMakePayment}
          />
        </View>
      </ScrollView>
    </Form>
  );
};

export default ExchangeScreen;
