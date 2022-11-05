import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import Button from "../../../../../components/coreComponents/button/Button";
import ContentWrapper from "../../../../../components/coreComponents/content/ContentWrapper";
import Input from "../../../../../components/coreComponents/input/Input";
import { theme } from "../../../../../theme/theme";
import { SSectionsButtons } from "../../CreateResume.style";
import { SProjects } from "./Projects.style";

function Projects() {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [preview, setPreview] = useState<any>();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview([]);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview([...preview, objectUrl]);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
  console.log(preview);

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
    <SProjects>
      <ContentWrapper title="پروژه ها">
        <div className="project-body">
          {works.map((res) => (
            <>
              {edit == res.id ? (
                <>
                  <Row gutter={24}>
                    <Col span={8}>
                      <Input label="نام پروژه" />
                    </Col>
                    <Col span={8}>
                      <Input label="لینک پروژه" />
                    </Col>
                    <Col span={8}>
                      <div className="upload-section">
                        <input
                          id="upload"
                          type="file"
                          hidden
                          onChange={onSelectFile}
                        />
                        <span style={{ marginBottom: "5px" }}>
                          (عکس، PDF)آپلود{" "}
                        </span>
                        <label htmlFor="upload">
                          <div className="upload-box">آپلود</div>
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <div className="uploded-images">
                    {preview?.map((res: any) => (
                      <img src={res} alt="" />
                    ))}
                  </div>
                  <SSectionsButtons>
                    <Button onClick={handleCancleEdit}>ذخیره</Button>
                    <Button
                      background={theme.palette.white}
                      color={theme.palette.secondary[700]}
                      onClick={handleCancleEdit}
                    >
                      انصراف
                    </Button>
                  </SSectionsButtons>
                </>
              ) : (
                <div
                  data-id={res.id}
                  onClick={handleEdit}
                  className="project-body-item"
                >
                  <h3>{res.projectTitle}</h3>

                  <p>
                    <a href="#">{res.url}</a> :لینک پروژه
                  </p>

                  <div className="project-body-item-images">
                    {res.images.map((image) => (
                      <img src={image.url} alt="" />
                    ))}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>

        {create && (
          <>
            <Row gutter={24}>
              <Col span={8}>
                <Input label="نام پروژه" />
              </Col>
              <Col span={8}>
                <Input label="لینک پروژه" />
              </Col>
              <Col span={8}>
                <div className="upload-section">
                  <input
                    id="upload"
                    type="file"
                    hidden
                    onChange={onSelectFile}
                  />
                  <span style={{ marginBottom: "5px" }}>(عکس، PDF)آپلود </span>
                  <label htmlFor="upload">
                    <div className="upload-box">آپلود</div>
                  </label>
                </div>
              </Col>
            </Row>
            <div className="uploded-images">
              {preview?.map((res: any) => (
                <img src={res} alt="" />
              ))}
            </div>
            <SSectionsButtons>
              <Button onClick={handleCancleAddWorkExperience}>ذخیره</Button>
              <Button
                background={theme.palette.white}
                color={theme.palette.secondary[700]}
                onClick={handleCancleAddWorkExperience}
              >
                انصراف
              </Button>
            </SSectionsButtons>
          </>
        )}

        {!create && (
          <div className="project-add-btn">
            <Button
              onClick={handleCreate}
              background={theme.palette.secondary[500]}
            >
              اضافه کردن
            </Button>
          </div>
        )}
      </ContentWrapper>
    </SProjects>
  );
}

export default Projects;
