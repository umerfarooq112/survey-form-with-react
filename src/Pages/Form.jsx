import React, { useState, useEffect } from "react";

import { Form, Button, Menu, Dropdown, Input, InputNumber } from "antd";
import { DownOutlined } from "@ant-design/icons";

function SurveyFormAnt() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    form.resetFields();
  };

  const [showquestion, setShowQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setTotalQuestions] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const [answers, setAnswers] = useState([]);

  const showQuestionData = (e) => {
    // setShowData(!showData);
    // console.log(e,'is the field')
    setShowQuestion(true);
  };

  const onChange = (value) => {
    console.log(value, "input number value");
  };
  const nextQuestion = () => {
    // setAnswers([...answers]);
    setCurrentQuestion(currentQuestion + 1);
    // form.clear()
    form.resetFields();
  };

  const menu = (
    <Menu onClick={showQuestionData}>
      <Menu.Item key="0">Option 1</Menu.Item>
      <Menu.Item key="1">Option 2</Menu.Item>
    </Menu>
  );
  return (
    <div className="survey-wrapper">
      <div className="cards-section">
        <h2 className="title">Prefrence Wizard</h2>

        <div className="card-form">
          <Form name="basic" onFinish={onFinish} layout="vertical" form={form}>
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

            {showquestion && (
              <div className="question">
                <h2 className="label">Question: </h2>

                <h3 className="text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Perferendis, ipsam.
                </h3>
                <Form.Item label="Answer" name='inputfield' tooltip="Input A Decimal Number">
                  <InputNumber
                    placeholder="99.99"
                    size="large"
                    type="number"
                    
                    onChange={onChange}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
                <div className="form-buttons">
                  <Button
                    type="primary"
                    className="nextBtn"
                    onClick={nextQuestion}
                    // htmlType="submit"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SurveyFormAnt;
