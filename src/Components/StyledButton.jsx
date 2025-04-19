import React from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const StyledButton = ({href,className,text1,text2}) => {
    return (
        <StyledWrapper>
            <button>
                <div className="default-btn">
                    
                    <span className={` ${className}`}>{text1}</span>
                </div>
                <div className="hover-btn">
                    
                    <Link to={href} className={`flex gap-4 items-center ${className}`}>
                        <span>{text2}</span>
                        <FaArrowRight className="text-[#59815B]" />
                    </Link>
                </div>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  button {
   position: relative;
   overflow: hidden;
   outline: none;
   cursor: pointer;
   font-family: inherit;
  }

  .default-btn,.hover-btn {
   display: -webkit-box;
   display: -moz-box;
   display: -ms-flexbox;
   display: -webkit-flex;
   display: flex;
   align-items: center;
   gap: 15px;
   padding: 15px 20px;
   border-radius: 50px;
   font-size: 17px;
   font-weight: 500;
   text-transform: uppercase;
   transition: all .3s ease;
  }

  .hover-btn {
   position: absolute;
   inset: 0;
   transform: translate(0%,100%);
  }

  .default-btn span {
   color: #59815B;
  }

  .hover-btn span {
   color: #59815B;
  }

  button:hover .default-btn {
   transform: translate(0%,-100%);
  }

  button:hover .hover-btn {
   transform: translate(0%,0%);
  }`;

export default StyledButton;
