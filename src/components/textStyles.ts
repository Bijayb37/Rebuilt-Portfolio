import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 4em;
  text-indent: -4em;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`
type sizeProp = {
  size?: string
}
export const Paragraph = styled.p`
  text-indent: 1em;
  font-size: ${(props: sizeProp) => props.size};
`