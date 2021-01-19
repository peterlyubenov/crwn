import React from "react";

import { connect } from "react-redux";
import { decreaseValue, increaseValue } from "../../redux/test/test.actions";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./test.styles.scss";

const TestPage = ({ testValue, increaseValue, decreaseValue }) => (
  <div className="test">
    <h1>Test page</h1>
    <p>Place anything you want to test here</p>
    <hr />

    <CustomButton onClick={decreaseValue}>-</CustomButton>
    {testValue}
    <CustomButton onClick={increaseValue}>+</CustomButton>
  </div>
);

const mapStateToProps = ({ test: { testValue } }) => ({
  testValue,
});
const mapDispatchToProps = (dispatch) => ({
  increaseValue: () => dispatch(increaseValue()),
  decreaseValue: () => dispatch(decreaseValue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
