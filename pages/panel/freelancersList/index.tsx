import { Col, Row } from "antd";
import Container from "../../../components/coreComponents/container/Container";
import Navbar from "../../../components/coreComponents/navbar/Navbar";
import FreelancerCart from "./components/freelancerCart/freelancerCart";
import { SFreelancersList } from "./freelancersList.style";
function FreelancersList() {
  return (
    <>
          <SFreelancersList>

<Container>
  <h2>لیست فریلنسر</h2>
  <Row gutter={24}>
    <Col span={8}>
      <FreelancerCart skills={["ali", "reza"]} />
    </Col>
  </Row>
</Container>
</SFreelancersList>
    </>
    
  );
}

export default FreelancersList;
