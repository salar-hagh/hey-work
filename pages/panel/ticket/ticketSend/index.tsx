import { useState } from "react";
import Button from "../../../../components/coreComponents/button/Button";
import Container from "../../../../components/coreComponents/container/Container";
import ContentWrapper from "../../../../components/coreComponents/content/ContentWrapper";
import Input from "../../../../components/coreComponents/input/Input";
import Textarea from "../../../../components/coreComponents/textarea/Textarea";
import { STcketSend } from "./TicketSend.style";

interface ITicketSend {
  ticketTitle: string;
  titcketMassage: string;
  ticketFile: any;
}

function TicketSend() {
  const [ticketSendData, setTicketSendData] = useState<ITicketSend>({
    ticketTitle: "",
    titcketMassage: "",
    ticketFile: "",
  });

  const handleChangeTicketTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTicketSendData((prevState) => ({
      ...prevState,
      ticketTitle: value,
    }));
  };

  const handleChangeTicketMessage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setTicketSendData((prevState) => ({
      ...prevState,
      titcketMassage: value,
    }));
  };

  const handleChangeTicketFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setTicketSendData((prevState) => ({
      ...prevState,
      ticketFile: file,
    }));
  };

  const submitSendTicket = () => {
    console.log(ticketSendData);
  };

  return (
    <>
      <STcketSend>
        <Container>
          <ContentWrapper>
            <h2>اطلاعات فردی</h2>
            <Input label="عنوان تیکت" onChange={handleChangeTicketTitle} />
            <Textarea label="توضیحات" onChange={handleChangeTicketMessage} />
            <div className="ticket-file-wrapper">
              <span>فایل ضمیمه</span>
              <label htmlFor="ticket-file" className="upload-file">
                آپلود
              </label>
              <input
                type="file"
                id="ticket-file"
                hidden
                onChange={handleChangeTicketFile}
              />
            </div>
            <div className="ticket-send-button">
              <Button onClick={submitSendTicket}>ارسال تیکت</Button>
            </div>
          </ContentWrapper>
        </Container>
      </STcketSend>
    </>
  );
}
export default TicketSend;
