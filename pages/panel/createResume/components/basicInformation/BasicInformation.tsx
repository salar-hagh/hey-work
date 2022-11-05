import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../../../components/coreComponents/content/ContentWrapper";
import Input from "../../../../../components/coreComponents/input/Input";
import Textarea from "../../../../../components/coreComponents/textarea/Textarea";
import { SBasicInformation } from "./BasicInformation.style";
import Edit from "./../../../../../assets/images/icons/Edit.svg";
import { SSectionsButtons } from "../../CreateResume.style";
import Button from "../../../../../components/coreComponents/button/Button";
import { theme } from "../../../../../theme/theme";

function BasicInformation() {
  const [edit, setEdit] = useState<boolean>(false);
  const [preview, setPreview] = useState<string>();
  const [selectedAvatar, setSelectedAvatar] = useState<any>();

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleSubmitBasicInfo = () => {
    setEdit(false);
  };

  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files?.[0]) {
      setSelectedAvatar(files?.[0]);
    }
  };

  useEffect(() => {
    if (!selectedAvatar) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedAvatar);

    setPreview(objectUrl);
  }, [selectedAvatar]);

  const handleRemoveAvatar = () => {
    setSelectedAvatar(null);
    setPreview("");
  };
  return (
    <SBasicInformation>
      <ContentWrapper>
        {!edit && (
          <span className="edit-basic-information" onClick={handleEdit}>
            ویرایش  <img src={Edit} alt="" />
          </span>
        )}

        <Row gutter={24}>
          <Col span={6}>
            <div className="avatar-section">
              <div>
                <label htmlFor="avatar">
                  <div
                    style={{ background: `url(${preview})` }}
                    className="upload-avatar"
                  >
                    {preview ? <></> : <span>آپلود عکس</span>}
                  </div>
                </label>
                <input
                  onChange={handleChangeAvatar}
                  id="avatar"
                  type="file"
                  hidden
                />
              </div>
              <div className="change-avatar">
                <label htmlFor="avatar">
                  <p>تغییر عکس</p>
                </label>

                <p onClick={handleRemoveAvatar}>حذف عکس</p>
              </div>
            </div>
          </Col>
          <Col span={18}>
            {edit ? (
              <div className="basic-information-body-edit">
                <Row gutter={40}>
                  <Col span={12}>
                    <Input label="نام ونام خانوادگی" />
                  </Col>
                  <Col span={12}>
                    <Input label="تخصص اصلی" />
                  </Col>
                </Row>
                <Textarea placeholder="درباره خود بنویسید ..." />
              </div>
            ) : (
              <div className="basic-information-body" onClick={handleEdit}>
                <h3>salar hagh</h3>
                <h4>تخصص اصلی: React Developer</h4>
                <p>
                  سالار حقیقت نیا هستم برنامه نویس ری اکت بیش از ۲ سال هست که در
                  حوزه فرانت اند فعالیت دارم و تمایل دارم با شرکتی با افراد
                  متخصص به صورت دورکار همکاری داشته باشم. ***برای کار حضوری در
                  تهران مشکلی ندارم البته دو ماه اول کار رو به صورت دورکاری
                  میتونم فعالیت داشته باشم و پس از آن توانایی حضور در شرکت را به
                  صورت تمام وقت دارم.***
                </p>
              </div>
            )}
          </Col>
        </Row>

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
    </SBasicInformation>
  );
}

export default BasicInformation;
