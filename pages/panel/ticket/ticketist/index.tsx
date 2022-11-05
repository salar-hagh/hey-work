import Link from "next/link";
import React from "react";
import Container from "../../../../components/coreComponents/container/Container";
import ContentWrapper from "../../../../components/coreComponents/content/ContentWrapper";
import Navbar from "../../../../components/coreComponents/navbar/Navbar";
import { STicketList } from "./TicketList.style";

function TicketList() {
  return (
    <>
      <STicketList>
        <Container>
          <div className="new-ticket">
            <Link href="/ticket/ticket-send">تیکت جدید </Link>
          </div>

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
                      <div className="show-ticket">
                        {" "}
                        <Link href="/ticket/chat/1">مشاهده </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>موضوع</td>
                    <td>وضعیت</td>
                    <td>
                      <div className="show-ticket">
                        {" "}
                        <Link href="/ticket/chat/2">مشاهده </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>موضوع</td>
                    <td>وضعیت</td>
                    <td>
                      <div className="show-ticket">
                        {" "}
                        <Link href="/ticket/chat/3">مشاهده </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>موضوع</td>
                    <td>وضعیت</td>
                    <td>
                      <div className="show-ticket">
                        {" "}
                        <Link href="/ticket/chat/4">مشاهده </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ContentWrapper>
        </Container>
      </STicketList>
    </>
  );
}

export default TicketList;
