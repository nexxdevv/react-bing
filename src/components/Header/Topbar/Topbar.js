import { useEffect } from "react";
import styled from "styled-components";
import logo from "../../../assets/b-logo.png";
import { BiMicrophone } from "react-icons/bi";

const StyledTopbar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  top: -100%;
  left: 0;
  right: 0;
  height: 60px;
  background-color: var(--navBGC);
  z-index: 10;
  visibility: ${props => (!props.open ? 'visible' : 'hidden')};
  
  img {
    max-width: 24px;
    margin-right: 1rem;
    
  }

  #searchBar {
    position: relative;
    border-radius: 99999px;
    height: 90%;
    /* border: 2px solid white; */
    display: flex;
    align-items: center;
    flex-grow: 1;
    input {
      border: none;
      border-radius: 99999px;
      background-color: rgba(50, 50, 50, 0.8);
      padding: 12px 1.25rem;
      color: white;
      width: 100%;
      font-size: 1.1rem;
    }
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: var(--svgSize);
      color: #8abae6;
      &:first-of-type {
        right: 4rem;
      }
      &:last-of-type {
        right: 1.25rem;
      }
    }
  }
 
`;

const Topbar = ({open}) => {

  useEffect(() => {
		let prev = window.pageYOffset
		const see = () => {
			var current = window.pageYOffset
			if (prev > current) {
				document.getElementById('topbar').style.top = '0'
			} else {
				document.getElementById('topbar').style.top = '-100%'
			}
			prev = current
		}

		window.addEventListener('scroll', see)
		return () => window.removeEventListener('scroll', see)
	}, [])
  return (
    <StyledTopbar id="topbar" open={open}>
      <img src={logo} alt="" />

      <div id="searchBar">
        <input type="search" placeholder="Search or type URL" />
      
        <BiMicrophone />
      </div>
    </StyledTopbar>
  );
};

export default Topbar;
