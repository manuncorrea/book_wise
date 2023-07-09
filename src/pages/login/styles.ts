import { styled } from '@/styles'

export const Container = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1.1fr 1fr',

  padding: 20,
  minHeight: '100vh',
})

export const SectionLogo = styled('section', {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',

  width: '100%',
  height: '100%',

  background: 'url(/images/logo-section-bg.png) no-repeat center',
  display: 'flex',

  borderRadius: 10,
})

export const LoginSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  width: '100%',
  maxWidth: '372px',

  margin: '0 auto',
  paddingLeft: 20,

  section: {
    marginTop: 40,
  },
})

export const WelcomeText = styled('div', {
  h2: {
    fontWeight: 700,
    color: '$gray200',
  },
})
