import AuthButtons from '@/components/AuthButtons'
import Image from 'next/image'
import { Container, LoginSection, SectionLogo, WelcomeText } from './styles'

export default function Login() {
  return (
    <Container>
      <SectionLogo>
        <Image
          src="/images/logo.svg"
          alt="BookWise Logo"
          width={232}
          height={58}
        />
      </SectionLogo>

      <LoginSection>
        <WelcomeText>
          <h2>Boas vindas!</h2>
          <span>Faça seu login ou acesse como visitante.</span>
          <AuthButtons />
        </WelcomeText>
      </LoginSection>
    </Container>
  )
}
