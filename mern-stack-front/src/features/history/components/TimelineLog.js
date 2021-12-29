import { values } from 'lodash';
import React, { memo, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import TimelineModify from './TimelineModify';
// 참고한 블로그 : https://code-masterjung.tistory.com/99

export default function TimelineLog() {
  const juudata = [
    {
      "id": "25",
      "location": "비트캠프",
      "address": "서울 강남구 강남대로94길 20",
      "x": "127.029037792462",
      "y": "37.4994078625536",
      "log_date": "2021-12-20 05:06:55+00:00",
      "weather": "맑음",
      "log_type": "normal",
      "contents": "밥을 먹어요",
      "user_id": "1"
    },
    {
      "id": "26",
      "location": "비트캠프",
      "address": "서울 강남구 강남대로94길 20",
      "x": "127.029037792462",
      "y": "37.4994078625536",
      "log_date": "2021-12-20 04:08:39+00:00",
      "weather": "흐림",
      "log_type": "normal",
      "contents": "자바 공부했습니다",
      "user_id": "1"
    },
    {
      "id": "27",
      "location": "비트캠프",
      "address": "서울 강남구 강남대로94길 20",
      "x": "127.029037792462",
      "y": "37.4994078625536",
      "log_date": "2021-12-20 08:24:00+00:00",
      "weather": "맑음",
      "log_type": "study",
      "contents": "파이썬 알고리즘 공부를 했다",
      "user_id": "1"
    }
  ]

  const test = juudata.map((value, index, array) => {
    return (
      <TimelineItem>
        <Date>{value.log_date} ..<b>{value.weather}</b></Date>
        <Title>{value.log_type}</Title>
        <Contents>
          <p><b>{value.location}</b>에서 {value.contents}</p>
          <TimelineModify />
        </Contents>
      </TimelineItem>
    )

  })

  return (<>
    {test}
  </>);
};

const Container = styled.div`
 
`

const TimelineList = styled.ul`

  border-left: 2px solid ;
  list-style: none;
`

const TimelineItemContainer = styled.li`
  list-style: none;
`;

const Date = styled.span`
  padding: 4px 12px;
  background: wheat;
  color: gray;
  border-radius: 16px;
`;

const Title = styled.h4`
  margin: 16px 0 0;
  padding: 0;
  color: dimgray;
  opacity: 0.8;
  text-align:left;
`;

const Contents = styled.p`
  margin: 8px 0 0;
  color: dimgray;
`;

const animate = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding: 28px 20px;
  &:hover {
    background: rgba(105, 105, 105, 0.2);
    ${Date} {
      background: seagreen;
      color: white;
      font-weight: bold;
    }
    ${Title} {
      color: lime;
      font-weight: bold;
    }
    ${Contents} {
      color: gray;
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 32px;
    left: -7px;
    width: 12px;
    height: 12px;
    background: dimgray;
    border-radius: 50%;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
  }
  &::after {
    content: '';
    position: absolute;
    top: 32px;
    left: -6px;
    width: 12px;
    height: 12px;
    background: lime;
    border-radius: 50%;
    box-shadow: inset 0 0 10px rgba(0, 255, 0, 1);
    opacity: 0;
  }
  &:hover::after {
    animation: ${animate} 0.5s linear infinite;
  }
`;