import { Col, Row } from "antd";
import { useState } from "react";
import Button from "../../../components/coreComponents/button/Button";
import Container from "../../../components/coreComponents/container/Container";
import ContentWrapper from "../../../components/coreComponents/content/ContentWrapper";
import Input from "../../../components/coreComponents/input/Input";
import Navbar from "../../../components/coreComponents/navbar/Navbar";
import { SCategory } from "./category.style";

function Category() {
  const [categoryTaitle, setCategoryTaitle] = useState<string>();
  const [categoryParent, setCategoryParent] = useState<string>();
  const handleChangeCategoryTitle = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    //  const value = e.target.value
    const { value } = e.target;

    setCategoryTaitle(value);
  };

  const handleChangeCategoryParent = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;

    setCategoryParent(value);
  };

  const handleCreateCategory = () => {
    console.log(categoryTaitle);
    console.log(categoryParent);
  };

  return (
    <>
      <SCategory>
        <Container>
          <ContentWrapper title="دسته جدید">
            <Row gutter={24}>
              <Col span={12}>
                <Input
                  onChange={handleChangeCategoryTitle}
                  label="عنوان دسته"
                />
              </Col>
              <Col span={12}>
                <Input
                  onChange={handleChangeCategoryParent}
                  label="انتخاب والد"
                />
              </Col>
            </Row>
            <div className="creat-category-button">
              <Button onClick={handleCreateCategory}> ساخت دسته</Button>
            </div>
          </ContentWrapper>
        </Container>
      </SCategory>
    </>
  );
}

export default Category;
