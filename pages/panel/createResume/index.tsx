import { Col, Row } from "antd";
import Container from "../../../components/coreComponents/container/Container";
import Navbar from "../../../components/coreComponents/navbar/Navbar";
import BasicInformation from "./components/basicInformation/BasicInformation";
import CommunicationWays from "./components/communicationWays/CommunicationWays";
import Education from "./components/education/Education";
import Languages from "./components/languages/Languages";
import PersonalInformation from "./components/personalInformation/PersonalInformation";
import Projects from "./components/projects/Projects";
import SetPrice from "./components/setPrice/SetPrice";
import Skills from "./components/skills/Skills";
import WorkExperience from "./components/workExperience/WorkExperience";
import { SCreateResume } from "./CreateResume.style";

function CreateResume() {
  return (
    <>

      <SCreateResume>
        <Container>
          <Row gutter={24}>
            <Col span={18}>
              <BasicInformation />
              <PersonalInformation />
              <Skills />
              <WorkExperience />
              <Projects />
              <Languages />
              <Education />
            </Col>
            <Col span={6}>
              <SetPrice />
              <CommunicationWays />
            </Col>
          </Row>
        </Container>
      </SCreateResume>
    </>
  );
}

export default CreateResume;
