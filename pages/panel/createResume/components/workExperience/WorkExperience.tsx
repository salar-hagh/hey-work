import { Col, Row } from "antd";
import moment from "jalali-moment";
import React, { useState } from "react";
import Checkbox from "../../../../../components/coreComponents/checkbox/Checkbox";
import ContentWrapper from "../../../../../components/coreComponents/content/ContentWrapper";
import Input from "../../../../../components/coreComponents/input/Input";
import Select from "../../../../../components/coreComponents/select/Select";
import { centuryFromNow } from "../../../../../utils/date";
import { SWorkExperience } from "./WorkExperience.style";
import Edit from "./../../../../../assets/images/icons/Edit.svg";
import Button from "../../../../../components/coreComponents/button/Button";
import { theme } from "../../../../../theme/theme";
import { SSectionsButtons } from "../../CreateResume.style";

function WorkExperience() {
  const months = [
    { value: "1", label: "فروردین" },
    { value: "2", label: "اردیبهشت" },
    { value: "3", label: "خرداد" },
    { value: "4", label: "تیر" },
    { value: "5", label: "مرداد" },
    { value: "6", label: "شهریور" },
    { value: "7", label: "مهر" },
    { value: "8", label: "آبان" },
    { value: "9", label: "آذر" },
    { value: "10", label: "دی" },
    { value: "11", label: "بهمن" },
    { value: "12", label: "اسفند" },
  ];

  const years = centuryFromNow(moment().locale("fa").format("YYYY"));

  const [create, setCreate] = useState<boolean>(false);
  const [edit, setEdit] = useState<any>();

  const handleCreate = () => {
    setCreate(!create);
  };

  const handleCancleAddWorkExperience = () => {
    setCreate(false);
  };

  const handleSubmitBasicInfo = () => {};

  const handleEdit = (e: React.MouseEvent) => {
    const value = e.currentTarget.getAttribute("data-id");
    console.log(value);

    setEdit(value);
  };

  const handleCancleEdit = () => {
    setEdit(null);
  };

  let works = [
    {
      id: 1,
      jobTitle: "React Developer",
      compony: "شرکت شتا",
      date: "از اردیبهشت 1400 تا مرداد 1400",
    },
    {
      id: 2,
      jobTitle: "React Developer",
      compony: "شرکت شتا",
      date: "از اردیبهشت 1400 تا مرداد 1400",
    },
  ];
  return (
    <SWorkExperience>
      <ContentWrapper title="سوابغ شغلی">
        <div className="work-experience-list">
          {works.map((res) => (
            <>
              {edit == res.id ? (
                <div className="edit-work-experience">
                  <Row gutter={24}>
                    <Col span={12}>
                      <Input label="عنوان شغلی" />
                    </Col>
                    <Col span={12}>
                      <Input label="نام شرکت" />
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col span={8}>
                      <Select options={months} label="از ماه" />
                    </Col>
                    <Col span={8}>
                      <Select options={years} label="از سال" />
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col span={8}>
                      <Select options={months} label="تا ماه" />
                    </Col>
                    <Col span={8}>
                      <Select options={years} label="تا سال" />
                    </Col>
                    <Col span={8}>
                      <div className="checkbox-wrapper">
                        <Checkbox label="هنوز مشغولم" id="stil-working" />
                      </div>
                    </Col>
                  </Row>

                  <div>
                    <Button onClick={handleSubmitBasicInfo}>ذخیره</Button>
                    <Button
                      background={theme.palette.white}
                      color={theme.palette.secondary[500]}
                      onClick={handleCancleEdit}
                    >
                      انصراف
                    </Button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={handleEdit}
                  data-id={res.id}
                  className="work-experience-item"
                >
                  {!edit && (
                    <span className="edit-set-price" onClick={handleEdit}>
                      ویرایش <img src={Edit} alt="" />
                    </span>
                  )}
                  <h3>{res.jobTitle}</h3>
                  <h4>{res.compony}</h4>
                  <p>{res.date}</p>
                </div>
              )}
            </>
          ))}
        </div>

        {!create && (
          <div className=" work-experience-add-btn">
            <Button
              onClick={handleCreate}
              background={theme.palette.secondary[500]}
            >
              اضافه کردن
            </Button>
          </div>
        )}

        {create && (
          <div className="add-work-experience">
            <Row gutter={24}>
              <Col span={12}>
                <Input label="عنوان شغلی" />
              </Col>
              <Col span={12}>
                <Input label="نام شرکت" />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Select options={months} label="از ماه" />
              </Col>
              <Col span={8}>
                <Select options={years} label="از سال" />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Select options={months} label="تا ماه" />
              </Col>
              <Col span={8}>
                <Select options={years} label="تا سال" />
              </Col>
              <Col span={8}>
                <div className="checkbox-wrapper">
                  <Checkbox label="هنوز مشغولم" id="stil-working" />
                </div>
              </Col>
            </Row>

            <SSectionsButtons>
              <Button onClick={handleSubmitBasicInfo}>ذخیره</Button>
              <Button
                background={theme.palette.white}
                color={theme.palette.secondary[700]}
                onClick={handleCancleAddWorkExperience}
              >
                انصراف
              </Button>
            </SSectionsButtons>
          </div>
        )}
      </ContentWrapper>
    </SWorkExperience>
  );
}

export default WorkExperience;
