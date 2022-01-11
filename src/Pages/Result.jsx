import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

function SurveyResult({ answers }) {
  return (
    <div className="survey-result">
      <div className="cards-section text-center">
        <h2 className="result-title">Survey Result</h2>
        <CheckCircleOutlined className="svg-img" />
      </div>
    </div>
  );
}

export default SurveyResult;
