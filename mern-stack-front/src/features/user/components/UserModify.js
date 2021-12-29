import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import _ from "@lodash";
import "features/user/style/UserModify.scss";
import { modifyRequest } from "../reducer/userSlice";
import { useState } from "react";

export default function UserModify() {
  const sessionUser = JSON.parse(window.localStorage.getItem("sessionUser"));
  var radio = document.getElementsByName("job");
  // var radioDefault; // 여기에 선택된 radio 버튼의 값이 담기게 된다.
  // for (var i = 0; i < radio.length; i++) {
  //   if (radio[i].checked) {
  //     radioDefault += radio[i].value;
  //   }
  // }

  const defaultValues = {
    username: sessionUser.username,
    email: sessionUser.email,
    phone: sessionUser.phone,
    birth: sessionUser.birth,
    password: sessionUser.password,
    address: sessionUser.address,
    user_interests: sessionUser.user_interests,
    job: sessionUser.job,
  };
  const {job, user_interests} = defaultValues

  const { control, formState, handleSubmit, reset, getValues } = useForm({
    mode: "onChange",
    defaultValues,
  });
  const dispatch = useDispatch();

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit() {
    reset(defaultValues);
  }

  return (
    <div className="Modify-sc">
      <Card square>
        <CardContent>
          <Typography
            class="text-16 tracking-widest -mt-8 font-700"
            color="textSecondary"
          >
            회원정보 수정하기
            {/* <p>{defaultValues.username}</p> */}
          </Typography>
          <form
            name="modifyForm"
            noValidate
            className="flex flex-col justify-center w-full"
            onSubmit={handleSubmit(async (data) => {
              dispatch(
                modifyRequest({
                  ...data,
                  email: sessionUser.email,
                })
              );
            })}
          >
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-16"
                  label="Name"
                  autoFocus
                  type="username"
                  error={!!errors.username}
                  helperText={errors?.username?.message}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Controller
              id="email"
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-16"
                  label="Email"
                  type="email"
                  value={sessionUser.email}
                  fullWidth
                />
              )}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-16"
                  label="Phone"
                  type="text"
                  error={!!errors.phone}
                  helperText={errors?.phone?.message}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Controller
              name="birth"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-16"
                  label="Birth"
                  type="text"
                  error={!!errors.birth}
                  helperText={errors?.birth?.message}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-16"
                  label="address"
                  type="address"
                  error={!!errors.address}
                  helperText={errors?.address?.message}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-16"
                  label="Password"
                  type="password"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Controller
              name="passwordConfirm"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-16"
                  label="passwordConfirm"
                  type="passwordConfirm"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="wrap">
              <h4>Check List 작성하기</h4>
              <label component="legend">관심있는 직업이 무엇입니까?</label>
              <br />
              <Controller
                name="job"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      className="checkbox"
                      {...field}
                      label="job"
                      type="radio"
                      value="운동선수"
                      id="select0"
                      defaultChecked={job == "운동선수"}
                    />
                    <label
                      for="select0"
                      className="input-label checkbox"
                      value="운동선수"
                    >
                      운동선수
                    </label>
                    <>
                      <input
                        className="checkbox"
                        {...field}
                        label="job"
                        type="radio"
                        value="화가"
                        id="select1"
                        defaultChecked={job == "화가"}
                      />
                      <label
                        for="select1"
                        className="input-label checkbox"
                        value="화가"
                      >
                        화가
                      </label>
                    </>
                    <>
                      <input
                        className="checkbox"
                        {...field}
                        label="job"
                        type="radio"
                        value="개발자"
                        id="select2"
                        defaultChecked={job == "개발자"}
                      />
                      <label
                        for="select2"
                        className="input-label checkbox"
                        value="개발자"
                      >
                        개발자
                      </label>
                    </>
                  </>
                )}
              />

              <div>
                <label component="legend">취미가 무엇입니까?</label>
                <br />
                <Controller
                  name="user_interests"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        className="checkbox"
                        {...field}
                        label="user_interests"
                        type="radio"
                        value="공연보기"
                        id="select3"
                        defaultChecked={user_interests == "공연보기"}
                      />
                      <label
                        for="select3"
                        className="input-label checkbox"
                        value="공연보기"
                      >
                        공연보기
                      </label>
                      <>
                        <input
                          className="checkbox"
                          {...field}
                          label="user_interests"
                          type="radio"
                          value="다이어트"
                          id="select4"
                          defaultChecked={user_interests == "다이어트"}
                        />
                        <label
                          for="select4"
                          className="input-label checkbox"
                          value="다이어트"
                        >
                          다이어트
                        </label>
                      </>
                      <>
                        <input
                          className="checkbox"
                          {...field}
                          label="user_interests"
                          type="radio"
                          value="영화보기"
                          id="select5"
                          defaultChecked={user_interests == "영화보기"}
                          
                        />
                        <label
                          for="select5"
                          className="input-label checkbox"
                          value="영화보기"
                        >
                          영화보기
                        </label>
                      </>
                    </>
                  )}
                />
              </div>
            </div>
            <Button
              style={{ "margin-top": "60px" }}
              variant="contained"
              color="primary"
              className="w-full mx-auto mt-16"
              type="submit"
            >
              수정 하기
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
