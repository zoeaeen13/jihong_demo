import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "../constants/style";

const Section = styled.section`
  display: flex;
  justify-items: center;
  align-items: center;
  background: #f6f9f9;

  ${MEDIA_QUERY_LG} {
    flex-direction: column;
  }
`;

const AboutWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position:relative;
width: 50vw;
height: 70vh;
overflow: hidden;

${MEDIA_QUERY_LG} {
  width: 100vw;
  height: 30vh;
}

&::before {
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  width: 50vw;
  height:0;
  margin:0 auto;
  border-right: 45vh solid transparent;
  border-bottom: 50vw solid rgba(150,206,180, .15);

  ${MEDIA_QUERY_LG} {
    display: none;
  }
}


h3 {
  color: #3d3d3d;
  font-size: 36px;
  font-weight: 800;
  z-index: 10;

  ${MEDIA_QUERY_MD} {
    font-size: 24px;
  }
}

p {
  color: #444444;
  margin: 20px 0;
  text-align: left;
  font-size: 24px;
  font-weight: 600;
  z-index: 10;

  span {
    font-size: 20px;
    color: #8e8e8e;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 14px;
  }
}
`


const ServiceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${MEDIA_QUERY_MD} {
    flex-direction: column;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  margin: 20px;
  padding: 50px;
  background: white;
  transition: ease-in 0.2s all;
  box-shadow: 0px 2px 23px -4px #e0e0e0;
  cursor: pointer;

  ${MEDIA_QUERY_LG} {
    margin: 20px 10px;
    padding: 2rem;
    }

  &:hover {
    transform: scale(1.02);
    filter: brightness(1.03);
  }

  h5 {
    font-weight: bold;
    font-size: 20px;
    color: #222222;
  }

  p {
    font-size: 14px;
    color: #4a4a4a;
  }
`;

function Service() {
  return (
    <Section id="service">
      <AboutWrapper>
        <h3>我們的願景</h3>
        <p>從事室內裝修 20 餘年，<br/>總是盡心盡力完成每一次的工程。<br/>因為我們知道，<br/>每個釘上的木板、每道漆上的油漆，<br/>都是為客戶實現對家的美好想像。<br/><span>– 創辦人 邱繼德</span></p>
      </AboutWrapper>
      <ServiceWrapper>
        <ServiceCard>
          <h5>室內設計</h5>
          <p>空間規劃、設計、3D 建模</p>
        </ServiceCard>
        <ServiceCard>
          <h5>室內裝修</h5>
          <p>新屋裝修、木工、舊屋修繕</p>
        </ServiceCard>
      </ServiceWrapper>
    </Section>
  );
}

export default Service;
