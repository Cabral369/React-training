import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const LogoLink = ({ text, image = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {image ? <img src={image} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  image: P.string,
  text: P.string.isRequired,
  link: P.string.isRequired,
};
