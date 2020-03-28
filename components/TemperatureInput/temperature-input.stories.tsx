import React, {useState} from "react";
import { TemperatureInputField } from "../index";

export default {
    title: 'Temperature Input Field',
};

export const temperatureInput = () => {
    const [inputText, setInputText] = useState({temperature: undefined, unit: 'F'});

    return (
        <TemperatureInputField
            onChange={(temperature) => setInputText(temperature)}
            value={inputText}
            label='What’s the highest temperature that you’ve measured?'
        />
    );
};
