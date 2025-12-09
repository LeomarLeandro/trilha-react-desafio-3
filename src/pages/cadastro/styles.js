import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
  line-height: 44px;
  width: 500px;
`;

export const Subtitle = styled.p`
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  background-color: #1d1d1d;
  padding: 40px;
  border-radius: 8px;
  width: 380px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Row = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #fff;

  a {
    color: #23dd7a;
    font-weight: bold;
  }
`;
