import { Col, Row } from "antd";
import { useState } from "react";
import ContentWrapper from "../../../../../components/coreComponents/content/ContentWrapper";
import Input from "../../../../../components/coreComponents/input/Input";
import RadioButton from "../../../../../components/coreComponents/radioButton/RadioButton";
import { SPersonalInformation } from "./PersonalInformation.style";
import  Edit   from "./../../../../../assets/images/icons/Edit.svg";
import { SSectionsButtons } from "../../CreateResume.style";
import Button from "../../../../../components/coreComponents/button/Button";
import { theme } from "../../../../../theme/theme";

function PersonalInformation() {
  const [edit, setEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleSubmitBasicInfo = () => {
    setEdit(false);
  };

  return (
    <SPersonalInformation>
      <ContentWrapper title="اطلاعات فردی">
        {!edit && (
          <span className="edit-personal-information" onClick={handleEdit}>
            ویرایش <img src={Edit} alt="" />
          </span>
        )}

        {edit ? (
          <div className="personal-information-body">
            <Row gutter={24}>
              <Col span={12}>
                <Input label="سال تولد" />
              </Col>
              <Col span={12}>
                <Input label="استان محل سکونت" />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
                <div className="gender-section">
                  <p>وضعیت تاهل</p>
                  <RadioButton label="خانم" name="gender" id="female" />
                  <RadioButton label="آقا" name="gender" id="male" />
                </div>
              </Col>
              <Col span={12}>
                <div className="marital-status">
                  <p>جنسیت</p>

                  <RadioButton label="مجرد" name="gender" id="single" />
                  <RadioButton label="متاهل" name="gender" id="marrid" />
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div onClick={handleEdit} className="personal-information-body">
            <Row gutter={24}>
              <Col span={12}>
                <div className="personal-information-body-item">
                  <h3>استان محل سکونت</h3>
                  <p>خوزستان</p>
                </div>
              </Col>
              <Col span={12}>
                <div className="personal-information-body-item">
                  <h3>سال تولد</h3>
                  <p>1356</p>
                </div>
              </Col>
              <Col span={12}>
                <div className="personal-information-body-item">
                  <h3>جنسیت</h3>
                  <p>مرد</p>
                </div>
              </Col>
              <Col span={12}>
                <div className="personal-information-body-item">
                  <h3>وضعیت تاهل</h3>
                  <p>مجرد</p>
                </div>
              </Col>
            </Row>
          </div>
        )}

        {edit && (
          <SSectionsButtons>
            <Button onClick={handleSubmitBasicInfo}>ذخیره</Button>
            <Button
              background={theme.palette.white}
              color={theme.palette.secondary[700]}
              onClick={handleSubmitBasicInfo}
            >
              انصراف
            </Button>
          </SSectionsButtons>
        )}
      </ContentWrapper>
    </SPersonalInformation>
  );
}

export default PersonalInformation;
