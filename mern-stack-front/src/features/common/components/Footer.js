import React from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import 'features/common/style/Footer.scss'

const Footer = () => {
  return (
    <footer >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}>
        <HR />
        <div id="foo" class="ft_bottom re">
          <ul class="ft_bottom_address font16">
            <li><span class="bold">jarviis</span> <span class="ft_inline-block">｜</span>서울 강남구 강남대로94길 20, 삼오빌딩(5층 ~ 9층)<span class="ft_inline-block">｜</span> 사업자등록번호 : 000-000-0000</li>
            <li>(주)자비스 짱짱맨<span class="ft_inline-block">｜</span> 문의 : 010-7382-0000 <span class="ft_inline-block">｜</span> 팩스 : 000-0000-000</li>
            <li>통신판매업 신고번호 : 제 자비스-00000호 <span class="ft_inline-block">｜</span> 개인정보보호관리책임자 : ???</li>
          </ul>
          <div class="ft_logo ab">
          </div>
          <div class="ft_bottom_copy after font16">
            <div class="w50 f-l">
              <a href="/content/privacy">개인정보처리방침</a>
              <a href="/content/provision">이용약관</a>
              <a href="/content/location_seocho">찾아오시는길</a>
            </div>
            <div class="w50 f-l t-r">
              Copyright (c) 비트캠프 All rights reserved.
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}


const HR = styled.hr`
  text-align: center;
`
export default Footer