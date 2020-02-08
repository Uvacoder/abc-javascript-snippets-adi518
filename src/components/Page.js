import styled from 'styled-components';

const Page = styled.div`
  padding: 4rem 14rem;
  min-height: 100vh;

  @media (max-width: 1024px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export default Page;
