import Image from 'next/image'
import Link from 'next/link'
import { NoticePill } from '@/ksh-components'
import {
  Section,
  Heading,
  Frame,
  Item,
  Group,
  ImageWrapper,
  ContentWrapper,
  Content,
  MyanmarName,
  EnglishName,
  PreviousPrice,
  Price,
  Button,
  InfoBar,
  CategoryName,
  Count,
  PriceWrapper,
} from './ProductCard-styles'
import { API_URL } from '@/ksh-config/index'

export default function ProductCard({ medicine }) {
  const {
    product_images,
    product_other_names,
    product_name_eng,
    product_quantity,
    product_price,
    product_previous_price,
    product_unit,
    slug,
    categories,
  } = medicine
  const isAvailable = product_quantity > 0

  return (
    <Item>
      <ImageWrapper>
        <Image
          src={`${API_URL}${product_images[Math.floor(Math.random() * 3)].formats.medium.url}`}
          alt={`${product_name_eng} - ${product_other_names.mm} - ${product_other_names.nicknames}`}
          layout='fill'
        />
      </ImageWrapper>
      <ContentWrapper>
        <Content>
          <MyanmarName>{product_other_names.mm}</MyanmarName>
          <Group>
            <EnglishName>{product_name_eng}</EnglishName>
            <NoticePill availability={isAvailable}>{isAvailable ? 'ပစ္စည်း ရှိ' : 'ပစ္စည်း ကုန်'}</NoticePill>
          </Group>
          <Group>
            <PriceWrapper>
              <Price>
                <span>{product_price}</span> ကျပ်/ <span>၁</span> {product_unit}
              </Price>
              <PreviousPrice>
                <span>{product_previous_price}</span> ကျပ်
              </PreviousPrice>
            </PriceWrapper>
          </Group>
        </Content>
        <Link href={`/categories/${categories[0].slug}/${slug}`} passHref>
          <Button>အသေးစိတ် ကြည့်မယ်</Button>
        </Link>
      </ContentWrapper>
    </Item>
  )
}

ProductCard.Section = function ProductCardSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>
}

ProductCard.Heading = function ProductCardHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>
}

ProductCard.Frame = function ProductCardFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

ProductCard.InfoBar = function ProductCardInfoBar({ children, ...restProps }) {
  return <InfoBar {...restProps}>{children}</InfoBar>
}

ProductCard.CategoryName = function ProductCardCategoryName({ children, ...restProps }) {
  return <CategoryName {...restProps}>{children}</CategoryName>
}

ProductCard.Count = function ProductCardCount({ children, ...restProps }) {
  return <Count {...restProps}>{children}</Count>
}
