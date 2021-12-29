import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import { LayOut } from 'features/common'
import 'features/user/style/UserLayout.scss'
import "features/user/style/UserRegister.scss"
import 'features/user/style/Check.scss'
import { existRequest, joinRequest } from '../reducer/userSlice';

/**
 * 생년월일/나이/핸드폰번호 추가하기. 
 * Form Validation Schema
 */
const schema = yup.object().shape({
  username: yup.string().required('You must enter your name'),
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
 
  birth: yup.string().required('주민번호 앞 6 자리')
            .min(6, '너무 짧습니다.'),
  address: yup.string().required('거주 도시명 까지만 적어주세요!')
              .min(2, '너무 짧습니다.')

});

const defaultValues = {
  username: 'admin',
  email: 'admin@admin.com',
  phone: '000-0000-0000',
  birth: '1993-08-23',
  password: '123123123',
  address: 'seoul',
  user_interests:'',
  job:''

};


export default function Register3Page() {
  const { control, formState, handleSubmit, reset, getValues } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch()

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit() {
    reset(defaultValues);
  }

  return (
    <LayOut>
      <div className="User-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card
              square
            >
              <CardContent >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.2 } }}
                >
                  <div className="flex items-center mb-48">
                    <img className='login-img' src={require("features/user/images/paper-pencil.png").default} />
                    <div className="border-l-1 mr-4 w-1 h-40" />
                    <div>
                      <Typography className="text-24 font-semibold logo-text" color="inherit">
                      </Typography>
                      <Typography
                        class="text-16 tracking-widest -mt-8 font-700"
                        color="textSecondary"
                      >
                        회원가입
                      </Typography>
                    </div>
                  </div>
                </motion.div>
                <form
                  name="registerForm"
                  noValidate
                  className="flex flex-col justify-center w-full"
                  onSubmit={handleSubmit(async (data) => { await dispatch(joinRequest({
                     ...data,
                    //  user_interests: document.getElementsByName('user_interests'),
                    // job:document.getElementsByName('job')
                    })) })}
                >
                  <Controller
                    name="username"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-16"
                        label="Name"
                        name='admin'
                        autoFocus
                        type="username"
                        error={!!errors.username}
                        helperText={errors?.username?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                  <Controller
                    id='email'
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-16"
                        label="Email"
                        type="email"
                        name='admin@admin.com'
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                {/* <button onClick={handleSubmit(async (data) => {await dispatch(existRequest(data))})}>중복체크</button> */}
                <button type="button" onClick={async ()=>{await dispatch(existRequest(getValues().email))}}>중복체크</button>
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
                        name='000-0000-0000'
                        error={!!errors.phone}
                        helperText={errors?.phone?.message}
                        variant="outlined"
                        required
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
                        name='1993-08-23'
                        error={!!errors.birth}
                        helperText={errors?.birth?.message}
                        variant="outlined"
                        required
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
                        name='seoul'
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
                        name='123123123'
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
                  <label component="legend">관심있는 직업이 무엇입니까?</label><br/>
                  <Controller
                    name="job"
                    control={control}
                    render={({ field }) => (
                      <>
                      <input className="checkbox"
                        {...field}
                        label="job"
                        type="radio"
                        value= "운동선수"
                        id="select0"
                        
                      />
                      <label for="select0" className="input-label checkbox"  value= "운동선수">운동선수</label>
                      <>
                      <input className="checkbox"
                        {...field}
                        label="job"
                        type="radio"
                        value= "화가"
                        id="select1"
                      />
                     <label for="select1" className="input-label checkbox" value= "화가">화가</label>
                    </>
                    <>
                      <input className="checkbox"
                        {...field}
                        label="job"
                        type="radio"
                        value= "개발자"
                        id="select2"
                        for="select2" className="input-label checkbox"
                      />
                     <label for="select2" className="input-label checkbox"  value= "개발자">개발자</label>
                    </>
                    </>)}
                  />
                
                  <div>
                  <label component="legend">취미가 무엇입니까?</label><br/>
                   <Controller
                    name="user_interests"
                    control={control}
                    render={({ field }) => (
                      <>
                      <input className="checkbox"
                        {...field}
                        label="user_interests"
                        type="radio"
                        value= "공연보기"
                        id="select3"
                        
                      />
                      <label for="select3" className="input-label checkbox" value= "공연보기">공연보기</label>
                      <>
                      <input className="checkbox"
                        {...field}
                        label="user_interests"
                        type="radio"
                        value= "다이어트"
                        id="select4"
                      />
                      <label for="select4" className="input-label checkbox"  value= "다이어트">다이어트</label>
                      </>
                      <>
                      <input className="checkbox"
                        {...field}
                        label="user_interests"
                        type="radio"
                        value= "영화보기"
                        id="select5"
                        
                      />
                        <label for="select5" className="input-label checkbox" value= "영화보기">영화보기</label>
                      </>
                      </>
                      
                    )}
                  />
                  </div>
                  </div>
              
        
                    <Button style={{'margin-top' : '60px'}}
                    variant="contained"
                    color="primary"
                    className="w-full mx-auto mt-16"
                    aria-label="Register"
                    disabled={_.isEmpty(dirtyFields) || !isValid}
                    type="submit"
                  >
                    Create an account
                  </Button>
                </form>
              </CardContent>



              <div className="flex flex-col items-center justify-center pb-32">
                <span className="font-normal">이미 회원이신가요?</span>
                <Link className="font-normal" to="/users/Login">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  로그인하기
                </Link>
              
              </div>
              
            </Card>


            <div className="Register3-rightSection hidden md:flex flex-1 items-center justify-center p-64">
              <div className="max-w-320">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                >
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.3 } }}
                >
                </motion.div>
                
              </div>
            </div>
          </motion.div>
        </div>
    </LayOut>
  );
}

