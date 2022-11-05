import { Col, Row } from "antd";
import React from "react";
import Button from "../../components/coreComponents/button/Button";
import Checkbox from "../../components/coreComponents/checkbox/Checkbox";
import Container from "../../components/coreComponents/container/Container";
import { theme } from "../../theme/theme";
 

import { SFreelancerList } from "./freelancerList.style";

function FreelancerList() {
  return (
    <SFreelancerList>
      <Container>
        <div className="search-section"></div>

        <div className="freelancer-body">
          <Row gutter={24}>
            <Col span={6}>
              <div className="freelancer-sidebar">
                <div className="freelancer-sidebar-section">
                  <h3> حداقل حقوق</h3>
                  <div className="freelancer-sidebar-section-checkboxs">
                    <Checkbox label="تست" name="test" id="d-1" />
                    <Checkbox label="تست" name="test" id="d-2" />
                    <Checkbox label="تست" name="test" id="d-3" />
                    <Checkbox label="تست" name="test" id="d-4" />
                  </div>
                </div>

                <div className="freelancer-sidebar-section">
                  <h3>دسته بندی شغلی</h3>
                  <div className="freelancer-sidebar-section-checkboxs">
                    <Checkbox label="تست" name="test" id="d-1" />
                    <Checkbox label="تست" name="test" id="d-2" />
                    <Checkbox label="تست" name="test" id="d-3" />
                    <Checkbox label="تست" name="test" id="d-4" />
                  </div>
                </div>
                <div className="freelancer-sidebar-section">
                  <h3> نوع قرارداد</h3>
                  <div className="freelancer-sidebar-section-checkboxs">
                    <Checkbox label="تست" name="test" id="d-1" />
                    <Checkbox label="تست" name="test" id="d-2" />
                    <Checkbox label="تست" name="test" id="d-3" />
                    <Checkbox label="تست" name="test" id="d-4" />
                  </div>
                </div>
                <div className="freelancer-sidebar-section">
                  <h3> استان</h3>
                  <div className="freelancer-sidebar-section-checkboxs">
                    <Checkbox label="تست" name="test" id="d-1" />
                    <Checkbox label="تست" name="test" id="d-2" />
                    <Checkbox label="تست" name="test" id="d-3" />
                    <Checkbox label="تست" name="test" id="d-4" />
                  </div>
                </div>
              </div>
            </Col>

            <Col span={18}>
              <div className="freelancer-list">
                <div className="freelancer-card">
                  <div className="freelancer-card-avatar-wrapper">
                    <div className="freelancer-card-avatar"></div>
                  </div>

                  <div className="freelancer-card-body">
                    <p>سالار حقیقت نیا</p>
                    <div>متخصص وب</div>
                    <div>as as as as</div>

                    <div className="freelancer-card-price">نرخ ساعتی: ۶۵</div>
                    <div className="freelancer-card-button">
                      <Button
                        background={theme.palette.primary[300]}
                        color={theme.palette.white}
                      >
                        مشاهده
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="freelancer-card"></div>

                <div className="freelancer-card"></div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </SFreelancerList>
  );
}

export default FreelancerList;
