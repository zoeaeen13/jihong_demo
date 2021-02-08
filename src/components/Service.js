import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "../constants/style";

const Section = styled.section`
  display: flex;
  justify-items: center;
  align-items: center;
  background: rgba(104,100,102, .1);

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
transition: ease-in 0.18s all;
cursor: pointer;

&:hover {
  transform: scale(1.02);
}

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
  border-bottom: 50vw solid rgba(104,100,102, .65);

  ${MEDIA_QUERY_LG} {
    width: 100vw;
    border: none;
    padding: 20px;
  }
}


h3 {
  color: rgba(238,238,238, .65);
  font-size: 36px;
  font-weight: 600;
  z-index: 10;

  ${MEDIA_QUERY_LG} {
    color: #515151;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 24px;
  }
}

p {
  color: #eeeeee;
  margin: 20px 0;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  z-index: 10;

  ${MEDIA_QUERY_LG} {
    color: #515151;
  }

  span {
    display: block;
    margin-top: 20px;
    font-weight: 400;
    font-size: 16px;
    color: rgba(238,238,238, .8);

    ${MEDIA_QUERY_LG} {
      color: #444444;
    }
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
  box-shadow: 0px 10px 23px -4px #e0e0e0;
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
