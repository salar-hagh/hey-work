import React, { FC } from "react";
import { theme } from "../../../theme/theme";
import Button from "../button/Button";
import { SContent } from "./ContentWrapper.style";

interface IContentWrapper {
  children: React.ReactNode;
  title?: string;
  onSubmit?: () => void;
  onCancle?: () => void;
  background?: string;
}

const ContentWrapper: FC<IContentWrapper> = ({
  children,
  title,
  background,
  onSubmit,
  onCancle,
}) => {
  return (
    <SContent background={background}>
      <h2>{title}</h2>

      {children}

      <div className="content-buttons">
        {onSubmit && <Button>ذخیره</Button>}
        {onCancle && (
          <Button
            background={theme.palette.white}
            color={theme.palette.background}
          >
            انصراف
          </Button>
        )}
      </div>
    </SContent>
  );
};

export default ContentWrapper;
