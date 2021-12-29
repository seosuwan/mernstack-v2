import React, {useEffect} from "react";

/*
  id : 그리드 ID
  parentid : 그리드가 표출될 div의 ID
  jsonref : 그리드에 바인딩 될 데이터
  columns : 그리드 컬럼 타입 및 속성 설정
  style : 그리드DIV에 적용 될 스타일
  options : 그리드 속성 
  setDatagrid : 그리드 변경 여부를 알기 state 관리 

*/
const SBGrid = ({
  id,
  parentid,
  jsonref,
  columns,
  style,
  options,
  setDatagrid,
}) => {
  useEffect(() => {
    const SBGridProperties = {
      id,
      parentid,
      jsonref,
      columns,
      options: { ...options },
    };
    setDatagrid(window._SBGrid.create(SBGridProperties));
  }, []);

  return (
    <>
      <div id={parentid} style={style}></div>
    </>
  );
};

export default SBGrid;
