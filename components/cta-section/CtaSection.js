import Link from 'next/link'
import { Section, Content, Heading } from './CtaSection-styles'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { Button } from '@/ksh-components'

export default function CtaSection() {
  return (
    <Section>
      <GlobalContainer>
        <Content>
          <Heading>ဆေးတွေ ကြည့် ကြည့်တော့မလား</Heading>
          <Link href='/categories/all' passHref>
            <Button.White>
              <span>ကြည့် ကြည့်မယ်</span>
            </Button.White>
          </Link>
        </Content>
      </GlobalContainer>
    </Section>
  )
}
