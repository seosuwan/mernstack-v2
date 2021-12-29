import React, { useEffect, useState } from "react";
import sunny from "features/diary/images/sunny.png";
import diary from "features/diary/images/a.png";
import "features/common/font/font.scss";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { LayOut } from "features/common";
import "features/diary/style/Diary.scss";
import { DatePicker } from "@mui/lab";
import Test from "./Test";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function DiaryTest() {
  const [test, setTest] = useState(new Date());
  const today = new Date();
  const dateToString = (day) => day.toISOString().substring(0, 10);
  return (
    <LayOut>
          <div className="dp">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow></TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center" style={{ width: "15vw" }}>
                      <img
                        class="wobble-hor-bottom"
                        style={{ width: "4vw", cursor: "pointer" }}
                        src={
                          require("features/diary/images/fingerl.png").default
                        }
                        onClick={() =>
                          setTest(new Date(test.setDate(test.getDate() - 1)))
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <div className="Watch">
                        <div style={{ borderCollapse: "collapse" }}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              views={["day"]}
                              label="날짜 이동"
                              value={test}
                              maxDate={today}
                              onChange={(newValue) => {
                                setTest(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} helperText={null} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="center" style={{ width: "30%" }}>
                      <DiarySmallText>
                        {test.toLocaleString("ko-KR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          weekday: "long",
                        })}
                      </DiarySmallText>
                    </TableCell>
                    <TableCell style={{ textAlign: "center", width: "15%" }}>
                      <img
                        style={{ width: "16vw", cursor: "pointer" }}
                        src={require("features/diary/images/today.png").default}
                        onClick={() => setTest(today)}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <DiarySmallText>맑음</DiarySmallText>
                      <img style={{ width: "5vw" }} src={sunny} />
                    </TableCell>
                    <TableCell align="center" style={{ width: "15%" }}>
                      {test.toISOString().substring(0, 10) <
                        today.toISOString().substring(0, 10)}
                      {dateToString(test) < dateToString(today) ? (
                        <>
                          <img
                            class="wobble-hor-bottom"
                            style={{
                              width: "4vw",
                              cursor: "pointer",
                              visibility: "visible",
                            }}
                            src={
                              require("features/diary/images/fingerr.png")
                                .default
                            }
                            onClick={() =>
                              setTest(
                                new Date(test.setDate(test.getDate() + 1))
                              )
                            }
                          />
                        </>
                      ) : (
                        <img
                          class="wobble-hor-bottom"
                          style={{
                            width: "20%",
                            cursor: "pointer",
                            visibility: "hidden",
                          }}
                          src={
                            require("features/diary/images/fingerr.png").default
                          }
                        />
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 0, textAlign: "center" }}>
                    <TableCell
                      component="td"
                      colSpan="6"
                      style={{ textAlign: "center" }}
                    >
                      <DiarySmallText>제목 : 안주현의 그림 일기</DiarySmallText>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 0 }}>
                    <TableCell
                      component="td"
                      colSpan="6"
                      style={{ textAlign: "center" }}
                    >
                      <DiarySmallText>
                        <img class="diary-img" src={diary} />
                      </DiarySmallText>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 0 }}>
                    <TableCell
                      component="td"
                      colSpan="6"
                      style={{ textAlign: "center" }}
                    >
                      <Test />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* <Test/> */}
          </div>
    </LayOut>
  );
}

const DiaryText = styled.div`
  font-family: "UhBeeRami";
  font-size: 2vw;
  font-weight: bold;
`;
const DiarySmallText = styled.div`
  font-family: "UhBeeRami";
  font-size: 2vw;
  font-weight: bold;
`
const TR = styled.tr`
  width: 50%;
`;
