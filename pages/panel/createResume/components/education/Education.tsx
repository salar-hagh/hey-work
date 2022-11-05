import { Col, Row } from "antd";
import React from "react";
import Checkbox from "../../../../../components/coreComponents/checkbox/Checkbox";
import ContentWrapper from "../../../../../components/coreComponents/content/ContentWrapper";
import Input from "../../../../../components/coreComponents/input/Input";

function Education() {
  return (
    <div>
      <ContentWrapper
        title="سوابغ تحصیلی"
       
      >
        <Row gutter={24}>
          <Col span={8}>
            <Input label="مقطع" />
          </Col>
          <Col span={8}>
            <Input label="رشته تحصیلی" />
          </Col>
          <Col span={8}>
            <Input label="عنوان موسسه آموزشی" />
          </Col>
          <Col span={6}>
            <Checkbox label="مشغول به تحصیل" />
          </Col>
          <Col span={6}>
            <Checkbox label="فارغ التحصیل" />
          </Col>
        </Row>
      </ContentWrapper>
    </div>
  );
}

export default Education;
