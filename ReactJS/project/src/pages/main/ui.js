import styled from 'styled-components';
import {Card} from 'antd';
export const Wrapper = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
  gap: 16px;
  padding: 10px;
  
  .header-space {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .header-space > * {
    min-width: 250px;
  }
`;

export const Loading = styled.div`
  margin: 30vh auto;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
  
  .ant-card-body {
    padding: 10px 24px;
  }
`;
