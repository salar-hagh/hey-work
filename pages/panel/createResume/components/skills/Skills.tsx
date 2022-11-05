import { SSkils } from "./Skills.style";
import { MultiValue, OnChangeValue } from "react-select";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import ContentWrapper from "../../../../../components/coreComponents/content/ContentWrapper";

interface ISelectOption {
  value: string;
  label: string;
}

function Skills() {
  const [selectOption, setSelectOption] = useState<MultiValue<ISelectOption>>([
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]);

  const handleChange = (newValue: OnChangeValue<ISelectOption, true>) => {
    setSelectOption(newValue);
  };

  return (
    <SSkils>
      <ContentWrapper title="مهارت های اصلی" >
        <label htmlFor="">مهارت</label>
        <CreatableSelect
          isMulti
          onChange={handleChange}
          options={selectOption}
          placeholder="انتخاب"
        />
      </ContentWrapper>
    </SSkils>
  );
}

export default Skills;
