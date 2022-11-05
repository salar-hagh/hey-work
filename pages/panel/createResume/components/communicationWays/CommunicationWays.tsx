import React, { useState } from "react";
import ContentWrapper from "../../../../../components/coreComponents/content/ContentWrapper";
import Input from "../../../../../components/coreComponents/input/Input";
import { SCommunicationWays } from "./CommunicationWays.style";
import Edit from "./../../../../../assets/images/icons/Edit.svg";
import Button from "../../../../../components/coreComponents/button/Button";
import { SSectionsButtons } from "../../CreateResume.style";
import { theme } from "../../../../../theme/theme";

function CommunicationWays() {
  const [edit, setEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleSubmitBasicInfo = () => {
    setEdit(false);
  };

  return (
    <SCommunicationWays>
      <ContentWrapper title="راه های ارتباطی">
        {!edit && (
          <span className="edit-communication-ways" onClick={handleEdit}>
            ویرایش <img src={Edit} alt="" />
          </span>
        )}
        {edit ? (
          <div className="communication-ways-body-edit">
            <Input label="موبایل" />
            <Input label="ایمیل" />
            <Input label="اینستاگرام" />
            <Input label="لینک دلخواه (وب سایت)" />
          </div>
        ) : (
          <div className="communication-ways-body">
            <div className="communication-ways-body-item">
              <h3>موبایل</h3>
              <p>09106486676</p>
            </div>
            <div className="communication-ways-body-item">
              <h3>ایمیل</h3>
              <p>sallar.hagh@gmail.com</p>
            </div>
            <div className="communication-ways-body-item">
              <h3>اینستاگرام</h3>
              <a href="#">
                <p>https://www.instagram.com/salar_hagh</p>
              </a>
            </div>
            <div className="communication-ways-body-item">
              <h3>لینک دلخواه (وب سایت)</h3>
              <a href="#">
                <p>https://www.instagram.com/salar_hagh</p>
              </a>
            </div>
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
    </SCommunicationWays>
  );
}

export default CommunicationWays;
