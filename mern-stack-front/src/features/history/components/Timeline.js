import React, { memo, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import TimelineAdd from './TimelineAdd';
import TimelineLog from './TimelineLog';
import TimelineModify from './TimelineModify';
// 참고한 블로그 : https://code-masterjung.tistory.com/99

export default function Timeline() {
  return (
    <Container>
      <TimelineList>
        <TimelineItemContainer>
          <TimelineAdd/>
          {/* <TimelineLog/>를 for문으로 돌려서 뽑아야할것같슘댱 */}
          <TimelineLog/>
        </TimelineItemContainer>
      </TimelineList>
    </Container>
  );
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

const Title = styled.h3`
  margin: 16px 0 0;
  padding: 0;
  color: dimgray;
  opacity: 0.8;
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