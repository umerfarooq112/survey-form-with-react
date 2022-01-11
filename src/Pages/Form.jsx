import React, { useState } from "react";

import { Form, Radio, Input, InputNumber, Space, Tooltip, Button } from "antd";
import { AllquestionsDataTwo } from "../contstants/question";

import { Menu, Dropdown } from "antd";
import {
  DownOutlined,
  LineChartOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import SurveyResult from "./Result";

function SurveyForm2() {
  const [form] = Form.useForm();
  const [questions, setQuestions] = useState(AllquestionsDataTwo);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [error, setError] = useState(false);

  const [showData, setShowData] = useState(false);

  const [inputAnswer, setInputAnswer] = useState("");

  const showQuestionData = () => {
    setShowData(true);
  };

  React.useEffect(() => {
    setCurrentQuestion(0);
  }, []);

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
            <h2 className="title">Survey Form 2 </h2>

            <div className="card-form">
              <Form onFinish={onFinish} layout="vertical" form={form}>
                <h2 className="label">Question: {currentQuestion + 6}</h2>
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
        <SurveyResult />
      )}
    </>
  );
}

export default SurveyForm2;
