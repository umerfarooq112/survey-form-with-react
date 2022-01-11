import React, { useState } from "react";

import { Form, InputNumber, Button } from "antd";
import { AllquestionsDataOne } from "../contstants/question";

import { Menu, Dropdown } from "antd";
import {
  DownOutlined,
  LineChartOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import SurveyResult from "./Result";
import SurveyForm2 from "./Form";

function SurveyForm() {
  const [form] = Form.useForm();
  const [questions, setQuestions] = useState(AllquestionsDataOne);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
    console.log(value, "is the value");
    setInputAnswer(value);
  };
  const nextQuestion = () => {
    if (questions[currentQuestion].mandatory == true) {
      if (inputAnswer) {
        setCurrentQuestion(currentQuestion + 1);
        setInputAnswer("");
        setError(false);
        form.resetFields();
      } else {
        setError(true);
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
      form.resetFields();

      // setError(true);
    }
  };

  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    form.resetFields();
  };

  return (
    <>
      {currentQuestion < questions.length ? (
        <div className="survey-wrapper">
          <h1 className="wizard-title  ">Preference Wizard </h1>
          <div
            className={`cards-section ${
              currentQuestion == questions.length && `card-width`
            }`}
          >
            <h2 className="title">Survey Form 1 </h2>

            <div className="card-form">
              <Form onFinish={onFinish} layout="vertical" form={form}>
                <h2 className="label">Question: {currentQuestion + 1}</h2>
                <Dropdown overlay={menu}>
                  <Button style={{ width: "100%" }} size="large">
                    <div className="dropdown-button">
                      <div style={{ textAlign: "right" }}>
                        {questions[currentQuestion]?.question}
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
                      <p className="answer">
                        Answer
                        {questions[currentQuestion]?.mandatory ? (
                          <span className="mandatory"> (Mandatory)</span>
                        ) : (
                          <span className="optional"> (Optional)</span>
                        )}
                      </p>
                      <Form.Item tooltip="Input Number Here." name="input">
                        <InputNumber
                          placeholder="99.99"
                          size="large"
                          type="number"
                          style={{ width: "100%" }}
                          onChange={onChangeValue}
                        />
                        {error && <p className="error">* Input is Required</p>}
                      </Form.Item>
                      <div className="form-buttons">
                        {currentQuestion > 0 && (
                          <Button
                            type="primary"
                            className="prevBtn"
                            size="large"
                            onClick={prevQuestion}
                          >
                            Previous
                          </Button>
                        )}
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
            </div>
          </div>
        </div>
      ) : (
        <SurveyForm2 />
      )}
    </>
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
