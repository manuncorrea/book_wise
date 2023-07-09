import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '54',
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: 72,
  gap: '$5',
  padding: '0 $6',

  color: '$gray200',
  fontSize: '$lg',

  background: '$gray600',
  border: 'none',
  borderRadius: 8,

  marginTop: 16,

  '&:hover': {
    background: '$gray500',
  },
})
