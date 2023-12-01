import styled from 'styled-components'

const Wrapper = styled.nav`
  background-color: var(--white);

  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    display: flex !important;
    flex-direction: column;
    margin: 0 auto;
    padding: 1.5rem 2rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 0.5rem;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 760px) {
    .nav-center {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      display: flex;
      flex-direction: row;
      margin-top: 0;
    }
  }
`

export default Wrapper
