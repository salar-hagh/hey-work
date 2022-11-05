import Button from "../../../components/coreComponents/button/Button";
import Container from "../../../components/coreComponents/container/Container";
import ContentWrapper from "../../../components/coreComponents/content/ContentWrapper";
import Navbar from "../../../components/coreComponents/navbar/Navbar";
import { theme } from "../../../theme/theme";
import { SContactUs } from "./ContactUs.style";

function ContactUs() {
  return (
    <>

      <SContactUs>
        <Container>
          <ContentWrapper title="لیست تیکت ها">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>موضوع</th>
                    <th>وضعیت</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {" "}
                  <tr>
                    <td>1</td>
                    <td>موضوع</td>
                    <td>وضعیت</td>
                    <td>
                      <div className="show-message">
                        <Button
                          background={theme.palette.primary[100]}
                          color={theme.palette.primary[500]}
                        >
                          مشاهده
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>موضوع</td>
                    <td>وضعیت</td>
                    <td>
                      <div className="show-message">
                        <Button
                          background={theme.palette.primary[100]}
                          color={theme.palette.primary[500]}
                        >
                          مشاهده
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>موضوع</td>
                    <td>وضعیت</td>
                    <td>
                      <div className="show-message">
                        <Button
                          background={theme.palette.primary[100]}
                          color={theme.palette.primary[500]}
                        >
                          مشاهده
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>موضوع</td>
                    <td>وضعیت</td>
                    <td>
                      <div className="show-message">
                        <Button
                          background={theme.palette.primary[100]}
                          color={theme.palette.primary[500]}
                        >
                          مشاهده
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ContentWrapper>
        </Container>
      </SContactUs>
    </>
  );
}

export default ContactUs;
