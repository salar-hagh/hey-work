import { useState } from "react";
import ContentWrapper from "../../../../../components/coreComponents/content/ContentWrapper";
import Input from "../../../../../components/coreComponents/input/Input";
import { SSetPrice } from "./SetPrice.style";
import  Edit  from "./../../../../../assets/images/icons/Edit.svg";
import { numberWithCommas } from "../../../../../utils/utils";
import { SSectionsButtons } from "../../CreateResume.style";
import Button from "../../../../../components/coreComponents/button/Button";
import { theme } from "../../../../../theme/theme";

function SetPrice() {
  const [edit, setEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleSubmitBasicInfo = () => {
    setEdit(false);
  };
  return (
    <SSetPrice>
      <ContentWrapper title="مبلغ مورد نظر برای هر ساعت کار">
        {!edit && (
          <span className="edit-set-price" onClick={handleEdit}>
            ویرایش <img src={Edit} alt="" />
          </span>
        )}
        {edit ? (
          <Input />
        ) : (
          <div className="set-price-body" onClick={handleEdit}>
            <p>
              <span> {numberWithCommas(43412)} </span>
              تومان
            </p>
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
    </SSetPrice>
  );
}

export default SetPrice;
