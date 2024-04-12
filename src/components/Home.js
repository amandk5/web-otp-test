import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import PinInput from "react-pin-input";
import OTPInput from "./OTPInput";

export default function Home() {
  const [otp, setOtp] = useState("");
  const [otpLength, setOtpLength] = useState("");

  const handleOtpInput = (value, index) => {
    setOtp(value);
    setOtpLength(index + 1);
  };

  const handleCompleteOtp = (value, index) => {
    alert("otp entered successfully");
  };

  useEffect(() => {
    setTimeout(() => {
      setOtp("123456");
    }, 500);
  }, []);

  return (
    <Box sx={{ textAlign: "center", mt: "50px" }}>
      <h1>Otp Test</h1>
      <br />
      <OTPInput />
      {/* <PinInput
        // ref={ref}
        length={6}
        initialValue={otp}
        focus="true"
        onChange={(value, index) => handleOtpInput(value, index)}
        type="numeric"
        inputMode="number"
        className="content-space-between"
        inputStyle={{ borderColor: "gainsboro" }}
        inputFocusStyle={{ borderColor: "green" }}
        onComplete={(value, index) => handleCompleteOtp(value, index)}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      /> */}
    </Box>
  );
}
