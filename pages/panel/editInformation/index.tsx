import { Col, Row } from "antd";
import { useState } from "react";
import Button from "../../../components/coreComponents/button/Button";
import Container from "../../../components/coreComponents/container/Container";
import ContentWrapper from "../../../components/coreComponents/content/ContentWrapper";
import { SInput } from "../../../components/coreComponents/input/Input.style";
import Navbar from "../../../components/coreComponents/navbar/Navbar";
import { SEditInformation } from "./editInformation.style";

interface IEditInformation {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
  uploadPhoto: any;
}

function EditInformation() {
  const [editInformation, setEditInformation] = useState<IEditInformation>({
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
    uploadPhoto: "",
  });

  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditInformation((prevState) => ({
      ...prevState,
      fullName: value,
    }));
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditInformation((prevState) => ({
      ...prevState,
      email: value,
    }));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditInformation((prevState) => ({
      ...prevState,
      password: value,
    }));
  };

  const handleChangeRepeatPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setEditInformation((prevState) => ({
      ...prevState,
      repeatPassword: value,
    }));
  };
  const handleChangeUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setEditInformation((prevState) => ({
      ...prevState,
      uploadPhoto: file,
    }));
  };

  const handleChangeSaveInformation = () => {
    console.log(editInformation);
  };

  return (
    <>
 

      <SEditInformation>
        <Container>
          <ContentWrapper>
            <h2>ویرایش اطلاعات</h2>
            <SInput>
              <Row gutter={24}>
                <Col span={20}>
                  <Row gutter={24}>
                    <Col span={12}>
                      <label htmlFor="">ایمیل </label>
                      <input type="text" onChange={handleChangeEmail} />
                    </Col>
                    <Col span={12}>
                      <label htmlFor="">نام و نام خانوادگی</label>
                      <input type="text" onChange={handleChangeFullName} />
                    </Col>
                    <Col span={12}>
                      <label htmlFor="">تکرار رمز عبور</label>
                      <input
                        type="text"
                        onChange={handleChangeRepeatPassword}
                      />
                    </Col>
                    <Col span={12}>
                      <label htmlFor="">رمز عبور</label>
                      <input type="text" onChange={handleChangePassword} />
                    </Col>
                  </Row>
                </Col>
                <Col span={4}>
                  <div className="upload-file">
                    <SInput>
                      <label htmlFor="upload-img-edit-information">
                        آپلود عکس
                      </label>
                      <input
                        type="file"
                        id="upload-img-edit-information"
                        hidden
                        onChange={handleChangeUploadPhoto}
                      />
                    </SInput>
                  </div>
                </Col>
              </Row>
            </SInput>
          </ContentWrapper>
          <div className="save-information-btn">
            <Button onClick={handleChangeSaveInformation}>ذخیره</Button>
          </div>
        </Container>
      </SEditInformation>
    </>
  );
}

export default EditInformation;
