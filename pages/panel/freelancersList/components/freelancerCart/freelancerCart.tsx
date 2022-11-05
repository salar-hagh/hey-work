import { SFreelancerCart } from "./freelancerCart.style";
import profile from "../../../../../assets/images/profile.svg";
import Job from "../../../../../assets/images/icons/job.svg";
import Dollar from "../../../../../assets/images/icons/dollar.svg";
import Close from "../../../../../assets/images/icons/close.svg";
import { FC } from "react";
import ContentWrapper from "../../../../../components/coreComponents/content/ContentWrapper";
import Button from "../../../../../components/coreComponents/button/Button";

interface IFreelancerCart {
  name?: string;
  price?: string;
  jobTitle?: string;
  skills: string[];
}

const FreelancerCart: FC<IFreelancerCart> = ({
  name,
  price,
  jobTitle,
  skills,
}) => {
  return (
    <SFreelancerCart>
      <ContentWrapper>
        <div>
          <div className="delete-profile">
            <span>
              <img src={Close} alt="" />
            </span>
          </div>
          <div className="profile-img">
            <img src={profile} alt="" />
          </div>
          <div className="profile-name">
            <p>{name}</p>
          </div>
          <div className="profile-specialty">
            <div>
              <span>
                {jobTitle} <img src={Job} alt="" />
              </span>
            </div>
            <div>
              <span>
                نرخ ساعتی :{price} <img src={Dollar} alt="" />
              </span>
            </div>
          </div>
          <div className="profile-skills">
            {skills.map((res) => {
              return <span>{res}</span>;
            })}
          </div>
          <div className="contact-info">
            <Button width="100%">اطلاعات تماس</Button>
          </div>
        </div>
      </ContentWrapper>
    </SFreelancerCart>
  );
};

export default FreelancerCart;
