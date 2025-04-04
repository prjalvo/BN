import { Arrays, ArraysKey } from "../../helper/utils/getTextLabel.js";
import isEmpty from "../../helper/utils/isEmpty.js";
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";


const renderOptions = (props) => {
  const { options, isArray, isArrayKeys } = props;
  if (isArray) {
    if (!isEmpty(options)) {
      if (isArrayKeys) {
        return ArraysKey(options);
      }
      return Arrays(options);
    } else {
      return [];
    }
  } else {
    return options;
  }
};


export default function IntegrationReactSelect(props) {
  const {
    onChange,
    name,
    value,
    label,
    loading,
    disabled,
    classNames,
  } = props;

  return (
    <Select
      className={classNames}
      classNamePrefix="Project"
      isDisabled={disabled}
      isLoading={loading}
      value={value}
      isSearchable={true}
      //width= '100px'
      name={name}
      label={label}
      defaultValue={{label: label, value: value}} 
      options={renderOptions(props)}         
      onChange={(value, action) => {
        onChange(action.name, value);
      }}
    />
  );
}

IntegrationReactSelect.propTypes = {
  onChange:PropTypes.any,
  name:PropTypes.any,
  value:PropTypes.any,
  label:PropTypes.any,
  loading:PropTypes.any,
  disabled:PropTypes.any,
  classNames:PropTypes.any  
};
