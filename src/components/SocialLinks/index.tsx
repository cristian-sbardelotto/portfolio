import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import * as S from './styles';

export function SocialLinks() {
  return (
    <S.SocialLinks>
      <S.Item
        href='https://github.com/cristian-sbardelotto'
        target='_blank'
        title='My Github'
      >
        <Github size={20} />
      </S.Item>

      <S.Item
        href='https://linkedin.com/in/cristian-k-sbardelotto'
        target='_blank'
        title='My LinkedIn'
      >
        <Linkedin size={20} />
      </S.Item>

      <S.Item
        href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cristian.k.sbardelotto@gmail.com'
        target='_blank'
        title='Send me an email'
      >
        <Mail size={20} />
      </S.Item>

      <S.Item
        href='/contact'
        title='Contact me'
      >
        <Phone size={20} />
      </S.Item>
    </S.SocialLinks>
  );
}
