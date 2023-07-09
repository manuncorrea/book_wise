import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button, Container } from './styles'
import { AuthButtonsProps } from './types'

export default function AuthButtons({
  canGuest,
  callBackUrl = '/',
}: AuthButtonsProps) {
  const router = useRouter()

  const handleSignIn = (provider?: string) => {
    if (!provider) {
      router.push('/')
    }

    signIn(provider, {
      callBackUrl,
    })
  }
  return (
    <Container>
      <Button onClick={() => handleSignIn('google')}>
        <Image
          src="/images/icons/google.svg"
          alt="Google Logo"
          width={32}
          height={32}
        />
        Entrar com Google
      </Button>

      <Button onClick={() => handleSignIn('github')}>
        <Image
          src="/images/icons/github.svg"
          alt="Github Logo"
          width={32}
          height={32}
        />
        Entrar com Github
      </Button>

      {canGuest && (
        <Button onClick={() => handleSignIn()}>
          <Image
            src="/images/icons/rocket-launch.svg"
            alt="Rocket Icon"
            width={32}
            height={32}
          />
          Acessar como visitante
        </Button>
      )}
    </Container>
  )
}
