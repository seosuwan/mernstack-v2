import SBGrid from "./SBGrid";
import { useEffect, useState } from "react";
import SBChart from "./SBChart";

function SBChartTest() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [datagrid, setDatagrid] = useState(null);
  // const [datagrid2, setDatagrid2] = useState(null);
  const [chart, setChartData] = useState(null);
  const tempData1 = [
    { col0: "한국", col1: "홍길동", col2: "1900-04-21", col3: "2011-01-01", col4: "010-1234-5678", col5: "admin@admin.com" },
    { col0: "한국", col1: "김 구",  col2: "1876-08-29", col3: "2012-01-01", col4: "010-1212-5876", col5: "kim@admin.com" },
    { col0: "한국", col1: "윤봉길", col2: "1908-06-21", col3: "2010-01-01", col4: "010-9426-2312", col5: "yoon@admin.com" },
    { col0: "한국", col1: "유관순", col2: "1902-12-16", col3: "2019-01-01", col4: "010-3425-6943", col5: "you@admin.com" },
    { col0: "한국", col1: "안창호", col2: "1879-11-02", col3: "1999-11-21", col4: "010-9087-1436", col5: "an@admin.com" },
    { col0: "한국", col1: "한용운", col2: "1879-08-29", col3: "2014-03-31", col4: "010-1964-3680", col5: "han@admin.com" },
    { col0: "한국", col1: "서수완", col2: "1993-08-23", col3: "2022-01-01", col4: "010-1234-5678", col5: "seo@admin.com" }
  
  ];
  // const tempData2 = [{ col0: "데이터2" }];
  //차트데이터
  const chart_Data = [
    { 'city': '전국', '2015': 3.51, '2016': '0.71', '2017': '1.48', 'type': 'pub', 'project': 'KCC(금강고려화학) APIS시스템 구축', 'date': '20180810', 'percentage': '10'},
    { 'city': '서울', '2015': 4.6, '2016': '2.14', '2017': '3.64', 'type': 'com', 'project': '서울시 생활복지시스템 사업용 UI툴', 'date': '20180810', 'percentage': '50'},
    { 'city': '부산', '2015': 3.43, '2016': '3.18', '2017': '2.35', 'type': 'ban', 'project': '과학기술정책연구원 통합정보시스템 고도화 및 전산장비 구축', 'date': '20180810', 'percentage': '100'},
    { 'city': '대구', '2015': 7.96, '2016': '-1.84', '2017': '1.29', 'type': 'pub', 'project': '농림수산식품교육문화정보원 농식품 맞춤형 통합정보시스템 구축', 'date': '20180810 ', 'percentage': '0'},
    { 'city': '인천', '2015': 3.37, '2016': '0.79', '2017': '1.42', 'type': 'com', 'project': '한국한의학연구원\'web UI tool\'(SBGIRD조달납품)-SBUx 납품', 'date': '20180810', 'percentage': '80'},
    { 'city': '광주', '2015': 5.83, '2016': '0.35', '2017': '1.34', 'type': 'ban', 'project': '한국교육개발원 학교시설통합정보시스템 구축 사업', 'date': '20180810', 'percentage': '20'},
    { 'city': '대전', '2015': 0.35, '2016': '0.28', '2017': '1.51', 'type': 'pub', 'project': '한국환경공단 폐기물부담금 인프라 개선 사업', 'date': '20180810', 'percentage': '60'},
    { 'city': '울산', '2015': 3.23, '2016': '0.44', '2017': '-1.08', 'type': 'com', 'project': '중소기업기술정보진흥원 경영혁신 플랫폼 구축사업', 'date': '20180810', 'percentage': '10'},
    { 'city': '세종', '2015': -0.09, '2016': '0.79', '2017': '4.29', 'type': 'ban', 'project': '질병관리본부 프로그램개발용 소프트웨어 구매감염병관리부 추가납품', 'date': '20180810', 'percentage': '90'},
    { 'city': '경기', '2015': 4.47, '2016': '0.84', '2017': '1.67', 'type': 'pub', 'project': '경제인문사회연구회 출연연 재정정보시스템 구축 관련 SBGrid', 'date': '20180810', 'percentage': '50'},
    { 'city': '강원', '2015': 2.21, '2016': '1.33', '2017': '2.4', 'type': 'com', 'project': '다이이찌산쿄 SBGrid (상시감시 모니터링 시스템용)', 'date': '20180810', 'percentage': '100'},
    { 'city': '충북', '2015': 1.13, '2016': '-0.7', '2017': '-0.36', 'type': 'ban', 'project': '인천국제공항공사 감사실 SBGrid(e-감사 시스템용)', 'date': '20180810', 'percentage': '80'},
    { 'city': '충남', '2015': 0.77, '2016': '-1.51', '2017': '-0.53', 'type': 'pub', 'project': 'KCC(금강고려화학) APIS시스템 구축', 'date': '20180810', 'percentage': '30'},
    { 'city': '전북', '2015': 0.35, '2016': '0.09', '2017': '1.98', 'type': 'com', 'project': '농식품 맞춤형 통합정보시스템 구축', 'date': '20180810', 'percentage': '20'},
    { 'city': '전남', '2015': 0.92, '2016': '1.05', '2017': '2.23', 'type': 'ban', 'project': '한국정보화진흥원 NIA 차세대 업무시스템 구축사업', 'date': '20180810', 'percentage': '70'},
    { 'city': '경북', '2015': 2.65, '2016': '-1.66', '2017': '-0.09', 'type': 'pub', 'project': '한국씨티은행 모바일뱅킹 전면구축', 'date': '20180810', 'percentage': '70'},
    { 'city': '경남', '2015': 1.64, '2016': '-0.58', '2017': '-1.62', 'type': 'com', 'project': '북경오토에버계통집성유한공사 SBUx 공급', 'date': '20180810', 'percentage': '50'},
    { 'city': '제주', '2015': 8.08, '2016': '4.63', '2017': '1.66', 'type': 'ban', 'project': '2017 교과서검정 전산시스템 재구축', 'date': '20180810', 'percentage': '100'},
    
]

  useEffect(() => {
    if (datagrid) {
      console.log(datagrid);
    }
  }, [datagrid]);

  
  // useEffect(() => {
  //   if (datagrid2) {
  //     console.log(datagrid2);
  //   }
  // }, [datagrid2]);


  useEffect(() => {
    if (chart) {
      //차트 div가 그려진 뒤 render 함수를 통해 차트를 생성
      chart.render();
    }
  }, [chart]);
  return (
    <div className="App">
      <SBGrid
        id={`datagrid`}
        jsonref={tempData1}
        columns={[
          {
            caption: "국적",
            ref: "col0",
            style: "text-align:center;",
            type: "input",
            
          },
          {
            caption: "이름",
            ref: "col1",
            style: "text-align:center;",
            type: "input",
          },
          {
            caption: "생년월일",
            ref: "col2",
            style: "text-align:center;",
            type: "input",
          },
          {
            caption: "입사일",
            ref: "col3",
            style: "text-align:center;",
            type: "input",
          },
          {
            caption: "전화번호",
            ref: "col4",
            style: "text-align:center;",
            type: "input",
          },
          {
            caption: "이메일",
            ref: "col5",
            style: "text-align:center;",
            type: "input",
          },
        ]}
        options={{
          rowheader: ["seq", "update"],
          selectmode: "free",
        }}
        parentid={`SBGridArea`}
        style={{ height: "200px" }}
        setDatagrid={setDatagrid}
        
      />
      {/* <SBGrid
        id={`datagrid2`}
        jsonref={tempData2}
        columns={[
          {
            caption: "col0",
            ref: "col0",
            style: "text-align:center;",
            type: "input",
          },
        ]}
        options={{
          rowheader: ["seq", "update"],
          selectmode: "free",
        }}
        parentid={`SBGridArea2`}
        style={{ height: "350px" }}
        setDatagrid={setDatagrid2}
      /> */}
      <SBChart
        parentid={`chartArea`}
        style={{width:"100%",height: "350px"}}
        config={{
          data : {
            keys: {
            x: "city",
            value: ["2015", "2016", "2017"]
            },
            json : chart_Data,
            type : 'bar',
            noData : '데이터가 없습니다'
        },
        axis : {
            x : {
                type: "category"
            },
            y : {
                label : {text : '변동률(%)'}
            }
        }
        }}
        setChartData={setChartData}
      />
    </div>
  );
}

export default SBChartTest;
