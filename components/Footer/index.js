import { withRouter } from 'next/router';
import styled from 'styled-components';
import { Icon } from 'antd';

import Link from 'Components/shared/Link';

const FooterElem = styled.footer`
  text-align: center;
  padding-top: ${({ stickyFooter }) => (stickyFooter ? '0' : '30px')};
  padding-bottom: ${({ stickyFooter }) => (stickyFooter ? '0' : '30px')};
  background-color: ${({ stickyFooter, theme }) =>
    stickyFooter ? 'rgba(255,255,255,0.7)' : theme.backgrounds.primary};
  color: ${({ theme }) => theme.colors.link};
  font-size: ${({ theme, stickyFooter }) => (stickyFooter ? '15px' : theme.fontSizes.default)};
  position: ${({ stickyFooter }) => (stickyFooter ? 'fixed' : 'static')};
  bottom: ${({ stickyFooter }) => (stickyFooter ? '0' : 'auto')};
  width: ${({ stickyFooter }) => (stickyFooter ? '100%' : 'auto')};
`;

const Footer = ({ stickyFooter }) => {
  return (
    <FooterElem stickyFooter={stickyFooter}>
      <Link href="https://www.democracy-deutschland.de" external>
        DEMOCRACY Deutschland e.V.
      </Link>
      &nbsp; <Icon type="minus" /> &nbsp;
      <Link href="https://www.democracy-deutschland.de/#!impressum" external>
        Impressum
      </Link>
      &nbsp; <Icon type="minus" /> &nbsp;
      <Link href="https://www.democracy-deutschland.de/#!agbs" external>
        Nutzungsbedingungen
      </Link>
      &nbsp; <Icon type="minus" /> &nbsp;
      <Link href="https://www.democracy-deutschland.de/#!datenschutz" external>
        Datenschutz
      </Link>
    </FooterElem>
  );
};

export default withRouter(Footer);
