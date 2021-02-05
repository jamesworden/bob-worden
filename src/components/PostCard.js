import ArrowLink from "./ArrowLink"
import Line from "./Line"
import React from "react"
import { navigate } from "gatsby"
import sanitize from "sanitize-html"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  max-width: 25rem;
  margin-top: 1rem;
`

const Date = styled.span`
  font-size: 12px;
  margin: 0;
`

const Excerpt = styled.div`
  padding-bottom: 2rem;

  * {
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    margin: -0.7rem 0;
    width: 90%;
  }
`

const ArrowText = styled.span`
  font-size: 14px;
  font-family: "Lato" sans-serif;
  font-weight: bolder;
`

const PostContainer = styled.div`
  margin: 1rem 0rem;
  cursor: pointer;
  transition: ease-in-out 0.3s;
  max-width: 40rem;
  background-color: var(--white);
  outline: none;
  box-shadow: ${({ featured }) =>
    featured
      ? "0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07);"
      : "none"};
  padding: ${({ featured }) => (featured ? "1rem" : 0)};

  &:hover {
    transform: scale(1.02);
    transition: ease-in-out 0.3s;
  }
`

export default ({
  title,
  date,
  excerpt,
  slug,
  externalUrl,
  external,
  featured,
}) => {
  const handleClick = () => {
    external ? window.open(externalUrl, "_self") : navigate("/" + slug)
  }

  return (
    <PostContainer
      featured={featured}
      date={date}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      <Date>{date}</Date>
      <section>
        {/* Section is here for Accessibiity. Title should be at the top */}
        <Title>{title}</Title>
        <Excerpt dangerouslySetInnerHTML={{ __html: sanitize(excerpt) }} />
        <ArrowLink>
          <ArrowText>Read More</ArrowText>
        </ArrowLink>
        {!featured ? <Line color="var(--gray)" space /> : null}
      </section>
    </PostContainer>
  )
}
