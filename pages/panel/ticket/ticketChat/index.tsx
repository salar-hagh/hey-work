import React, { useState } from "react";
import Button from "../../../../components/coreComponents/button/Button";
import Container from "../../../../components/coreComponents/container/Container";
import ContentWrapper from "../../../../components/coreComponents/content/ContentWrapper";
import Navbar from "../../../../components/coreComponents/navbar/Navbar";
import Textarea from "../../../../components/coreComponents/textarea/Textarea";
import { STicketChat } from "./TicketChat.style";

interface ITicketSend {
  message: string;
  file: any;
}

function TicketChat() {
  const [ticketSend, setTicketSend] = useState<ITicketSend>({
    message: "",
    file: null,
  });

  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTicketSend((prevState) => ({
      ...prevState,
      message: value,
    }));
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setTicketSend((prevState) => ({
      ...prevState,
      file: file,
    }));
  };

  const handleSendTicket = () => {
    console.log(ticketSend);
  };

  return (
    <>
      <STicketChat>
        <Container>
          <ContentWrapper title="چت با سایت">
            <div className="chat-wrapper"></div>

            <div className="chat-send-wrapper">
              <Textarea onChange={handleChangeMessage} label="پاسخ" />

              <div className="chat-send-file">
                <p>فایل ضمیمه</p>
                <label htmlFor="file">آپلود</label>
                <input
                  onChange={handleChangeFile}
                  id="file"
                  type="file"
                  hidden
                />
              </div>

              <div className="chat-send-btn">
                <Button onClick={handleSendTicket}>ارسال پاسخ</Button>
              </div>
            </div>
          </ContentWrapper>
        </Container>
      </STicketChat>
    </>
  );
}

export default TicketChat;
