import { SocialLinks } from '../SocialLinks';
import * as S from './styles';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <S.Footer>
      <S.Container>
        <S.FooterDescription>
          <p>Ready to bring your ideas to life? Get in touch!</p>
          <span>
            © All rights reserved - Cristian Sbardelotto {currentYear}
          </span>
        </S.FooterDescription>

        <div className='social-links'>
          <SocialLinks />
        </div>
      </S.Container>
    </S.Footer>
  );
}
