import { SocialLinks } from '../SocialLinks';
import * as S from './styles';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <S.FooterDescription>
          <p>Ready to bring your ideas to life? Get in touch!</p>
          <span>
            © All rights reserved - Cristian Sbardelotto {currentYear}
          </span>
        </S.FooterDescription>

        <SocialLinks />
      </S.Container>
    </S.Footer>
  );
}
