import { Row } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import { SNavbar } from "./Navbar.style";
import Profile from "./../../../assets/images/me.jpg";
import Image from "next/image";
 function Navbar() {
  const [profileOpen, setProfileOpen] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      // setProfileOpen(false);
      setTimeout(() => {
        // profileOpen && setProfileOpen(false);
      }, 300);
    });
  });

  return (
    <SNavbar>
      <Container>
        <Row justify="space-between" align="middle">
          <div className="navbar-menu">
            <nav>
              <ul>
                <li>
                  <Link href="/freelancer-list">لیست فریلنسرها</Link>
                </li>
                <li>
                  <Link href="/contact-us">تماس با ما</Link>
                </li>
                <li>
                  <Link href="/about">درباره</Link>
                </li>
                <li>
                  <Link href="/FAQ">سوالات متداول</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className="user-profile"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            سالار حقیقت نیا
            <div className="user-avatar">
              <Image src={Profile} alt="" />
            </div>
            {profileOpen && (
              <div className="user-profile-nav">
                <ul>
                  <li>
                    <Link href="/panel/createResume">ساخت رزومه</Link>
                  </li>
                  <li>
                    <Link href="/panel/ticket/ticketist">تیکت</Link>
                  </li>

                  <li>
                    <Link href="/panel/freelancersList">فریلنسرها</Link>
                  </li>
                  <li>
                    <Link href="/panel/editInformation">ویرایش اطلاعات</Link>
                  </li>
                  <li>
                    <Link href="/panel/category">دسته ها</Link>
                  </li>
                  <li>
                    <Link href="/panel/contactUs">تماس با ما</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </Row>
      </Container>
    </SNavbar>
  );
}

export default Navbar;
