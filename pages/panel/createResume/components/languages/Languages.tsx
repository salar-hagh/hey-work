import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Button from "../../../../../components/coreComponents/button/Button";
import ContentWrapper from "../../../../../components/coreComponents/content/ContentWrapper";
import Input from "../../../../../components/coreComponents/input/Input";
import { SLanguages } from "./Languages.style";

function Languages() {
  const handleChangeLang = () => {};

  const handleChangeLevel = () => {};

  const handleAddNewLanguages = () => {};
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
      projectTitle: "پروژه فروشگاه زکسو",
      url: "https://aryan-arvin.com/",
      images: [
        {
          id: 1,
          url: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg",
        },
        {
          id: 2,
          url: "https://bukovskevrchy.pl/img/64c9c78b19101eadf6e459ddbb0fd69a.jpg",
        },
        {
          id: 3,
          url: "https://static.toiimg.com/thumb/msid-78322224,imgsize-128440,width-800,height-600,resizemode-75/78322224.jpg",
        },
      ],
    },
    {
      id: 2,
      projectTitle: "فروشگاه ارین اروین",
      url: "https://aryan-arvin.com/",
      images: [
        {
          id: 1,
          url: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg",
        },
        {
          id: 2,
          url: "https://bukovskevrchy.pl/img/64c9c78b19101eadf6e459ddbb0fd69a.jpg",
        },
        {
          id: 3,
          url: "https://static.toiimg.com/thumb/msid-78322224,imgsize-128440,width-800,height-600,resizemode-75/78322224.jpg",
        },
      ],
    },
    {
      id: 3,
      projectTitle: "ساخت لوگو پیلا پیل",
      url: "https://aryan-arvin.com/",
      images: [
        {
          id: 1,
          url: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg",
        },
        {
          id: 2,
          url: "https://bukovskevrchy.pl/img/64c9c78b19101eadf6e459ddbb0fd69a.jpg",
        },
        {
          id: 3,
          url: "https://static.toiimg.com/thumb/msid-78322224,imgsize-128440,width-800,height-600,resizemode-75/78322224.jpg",
        },
      ],
    },
  ];

  return (
    <SLanguages>
      <ContentWrapper title="زبان ها">
        <div className="language-section-edit">
          {works.map((res) => {
            return edit == res.id ? (
              <Row gutter={24}>
                <Col span={12}>
                  <Input onChange={handleChangeLang} label="زبان ها" />
                </Col>
                <Col span={12}>
                  <Input onChange={handleChangeLevel} label="سطح مهارت" />
                </Col>
              </Row>
            ) : (
              <div    data-id={res.id}
              onClick={handleEdit}>
1
              </div>
            );
          })}
        </div>

        <Button onClick={handleAddNewLanguages}>اضافه</Button>
      </ContentWrapper>
    </SLanguages>
  );
}

export default Languages;
