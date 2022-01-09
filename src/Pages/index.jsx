import React, { useState } from "react";

import { Form, Radio, Input, Space,Tooltip, Button } from "antd";
import { Allquestions } from "../contstants/question";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import CountryDropdown from 'country-dropdown-with-flags-for-react';

import { Us } from 'react-flags-select';

import ReactFlagsSelect from 'react-flags-select';

function SurveyForm() {
  const [questions, setQuestions] = useState(Allquestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [radioOption, setRadioOption] = useState(1);

  const [showData, setShowData] = useState(false);

  const [selected, setSelected] = useState('');

  const showQuestionData = () => {
    setShowData(!showData);
  };

  const menu = (
    <Menu onClick={showQuestionData}>
      <Menu.Item key="0">  <div>
        <Us /> United States
      </div></Menu.Item>
    </Menu>
  );

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  console.log(":::", currentQuestion, ":::", radioOption);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setRadioOption({
      value: e.target.value,
    });
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSelection = (e) =>
  {
    setShowData(!showData);
    setSelected(e)
  }

  return (
    <div className="survey-wrapper">
      <div className="cards-section">
        <h2 className="title">Prefrence Wizard</h2>

        <div className="card-form">
          {currentQuestion < questions.length ? (
            <Form name="basic" onFinish={onFinish}  layout="vertical">
              {/* <Dropdown overlay={menu} trigger={["click"]}>
                <Button size="large">
                  bottomLeft <DownOutlined />
                </Button>
              </Dropdown> */}


              <ReactFlagsSelect
                countries={["US", "CA","MX"]}
        selected={selected}
        onSelect={handleSelection}
      />

              {showData && (
                <>
                  <div className="question">
                    <h2 className="label">Question: {currentQuestion + 1}</h2>

                    <h3 className="text">
                      {questions[currentQuestion]?.question}
                    </h3>
                    <Form.Item label="Answer"  tooltip="Input A Number">
                     
                        <Input
                          placeholder="Input a number"
                          size="large"
                          type='number'
                        />
                      
                    </Form.Item>
                  </div>
                </>
              )}
              <div className="form-buttons">
                <Button
                  type="primary"
                  className="nextBtn"
                  onClick={nextQuestion}
                >
                  Next
                </Button>
              </div>
            </Form>
          ) : (
            <h2 className="final-msg">Thank You....</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default SurveyForm;

// <div className="question">
// <h2 className="label">Question: {currentQuestion + 1}</h2>
// <h3 className="text">
//   {questions[currentQuestion]?.question}
// </h3>
// </div>
// <Form.Item name="radio">
// <Radio.Group onChange={onChange} value={radioOption}>
//   <Space direction="vertical">
//     {questions[currentQuestion]?.option1 && (
//       <Radio
//         className="radio-option"
//         value={questions[currentQuestion].option1}
//       >
//         {questions[currentQuestion].option1}
//       </Radio>
//     )}
//     {questions[currentQuestion]?.option2 && (
//       <Radio
//         className="radio-option"
//         value={questions[currentQuestion].option2}
//       >
//         {questions[currentQuestion].option2}
//       </Radio>
//     )}
//     {questions[currentQuestion]?.option3 && (
//       <Radio
//         className="radio-option"
//         value={questions[currentQuestion].option3}
//       >
//         {questions[currentQuestion].option3}
//       </Radio>
//     )}
//     {questions[currentQuestion]?.option4 && (
//       <Radio
//         className="radio-option"
//         value={questions[currentQuestion].option4}
//       >
//         {questions[currentQuestion].option4}
//       </Radio>
//     )}
//   </Space>
// </Radio.Group>
// </Form.Item>
