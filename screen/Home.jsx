import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-paper";
import { MyFab } from "../conp/MyFab";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Home(props) {
  const { navigation } = props;
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  useEffect(() => {});
  return (
    <React.Fragment>
      <TextInput
        mode="outlined"
        value={text}
        label="新しいメモを作成"
        multiline={true}
        height={200}
        style={{ margin: 12, backgroundColor: "#ffffff" }}
        autoFocus
        onChangeText={(text) => {
          setText(text);
        }}
      />
      <DateTimePicker
        minuteInterval={10}
        value={date}
        mode="datetime"
        is24Hour={true}
        display="spinner"
        onChange={onChange}
        disabled={true}
        style={{ height: 100, width: 260, right: 0 }}
      />
      <MyFab nav={navigation} location={"MemoList"} nowLocation={"Home"} />
    </React.Fragment>
  );
}
