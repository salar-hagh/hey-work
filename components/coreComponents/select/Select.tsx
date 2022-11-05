import React, { FC, useState } from "react";
import ReactSelect, { ActionMeta, SingleValue } from "react-select";
import { theme } from "../../../theme/theme";
import { SSelect } from "./Select.style";

interface ISelect {
  options: selectValue[];
  label?: string;
}

interface selectValue {
  value: string;
  label: string;
}

const Select: FC<ISelect> = ({ options, label }) => {
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<selectValue>
  >(options[0]);

  const handleChangeSelect = (newValue: SingleValue<selectValue>) => {
    setSelectedOption(newValue);
  };

  const customStyles = {
    option: (provided: any, state: any) => ({
    }),
    control: () => ({

    }),
    menu: (provided: any, state: any) => ({
 
    }),
    singleValue: (provided: any, state: any) => {
      return {};
    },
  };

  return (
    <SSelect>
      <label>{label}</label>

      <ReactSelect
        defaultValue={selectedOption}
        onChange={handleChangeSelect}
        options={options}
        isSearchable
        // styles={customStyles}
      />
    </SSelect>
  );
};

export default Select;
