import React, { useState } from "react";

import { Form, Radio, Input, Space, Tooltip, Button } from "antd";
import { Allquestions } from "../contstants/question";

import { Menu, Dropdown } from "antd";
import {
  DownOutlined,
  LineChartOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import SurveyResult from "./Result";

function SurveyForm() {
  const [form] = Form.useForm();
  const [questions, setQuestions] = useState(Allquestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [radioOption, setRadioOption] = useState(1);
  const [answers, setAnswer] = useState([]);
  const [error, setError] = useState(false);

  const [showData, setShowData] = useState(false);

  const [inputAnswer, setInputAnswer] = useState("");

  const showQuestionData = () => {
    setShowData(true);
  };

  const menu = (
    <Menu onClick={showQuestionData}>
      <Menu.Item key="0">Option 1</Menu.Item>
      <Menu.Item key="1">Option 2</Menu.Item>
    </Menu>
  );

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onChangeValue = (value) => {
    console.log(value.target.value, "is the value");
    setInputAnswer(value.target.value);
  };
  const nextQuestion = () => {
    if (inputAnswer) {
      const objofAnswers = {
        index: currentQuestion + 1,
        currentQuestion: questions[currentQuestion]?.question,
        Answer: inputAnswer,
      };
      // console.log(inputAnswer)
      setAnswer([...answers, objofAnswers]);
      setCurrentQuestion(currentQuestion + 1);
      console.log(answers, ":::: is the obj Answer");
      setInputAnswer("");
      setError(false);
      form.resetFields();
    } else {
      setError(true);
    }
  };

  return (
    <div className="survey-wrapper">
      
        <h1 className="wizard-title color-white ">Prefrence Wizard </h1>
        <div
          className={`cards-section ${
            currentQuestion == questions.length && `card-width`
          }`}
        >
          <h2 className="title">Survey Form </h2>

          <div className="card-form">
            {currentQuestion < questions.length ? (
              <Form
                name="basic"
                onFinish={onFinish}
                layout="vertical"
                form={form}
              >
                <Dropdown overlay={menu}>
                  <Button style={{ width: "100%" }} size="large">
                    <div className="dropdown-button">
                      <div style={{ textAlign: "right" }}>
                        Select the Options first
                      </div>
                      <div>
                        <DownOutlined style={{ textAlign: "right" }} />
                      </div>
                    </div>
                  </Button>
                </Dropdown>

                {showData && (
                  <>
                    <div className="question">
                      <h2 className="label">Question: {currentQuestion + 1}</h2>

                      <h3 className="text">
                        {questions[currentQuestion]?.question}
                      </h3>
                      <Form.Item
                        label="Answer"
                        name="inputField"
                        tooltip="Input A Number"
                      >
                        <Input
                          placeholder="99.99"
                          type="number"
                          size="large"
                          onChange={onChangeValue}
                        />
                        {error && <p className="error">* Input is Required</p>}
                      </Form.Item>
                      <div className="form-buttons">
                        <Button
                          type="primary"
                          className="nextBtn"
                          size="large"
                          onClick={nextQuestion}
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </Form>
            ) : (
              <SurveyResult answers={answers} />
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
