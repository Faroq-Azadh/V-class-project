import logo from '../../../public/images/logo.png'
import Rectangle9 from '../../../public/images/Rectangle 9.png'
import Rectangle8 from '../../../public/images/Rectangle 8.png'
import Rectangle7 from '../../../public/images/Rectangle 7.png'
import './Login.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'

function Login() {

   const basicSchema = yup.object().shape({
      username: yup.string().max(12, 'نام کاربری بیشتر از حد مجاز می‌باشد!').required('لطفا نام کاربری خود را وارد کنید!'),
      password: yup.string().required('لطفا کلمه عبور را وارد کنید!')
   })

   const formik = useFormik({
      initialValues: {
         username: '',
         password: ''
      },
      validationSchema: basicSchema,
   })

   let inputDefaultClass = 'text-xs md:text-base tracking-[2px] placeholder:tracking-normal rounded-[10px] w-full py-[7px] md:py-[10px] ps-14 IRANYEKAN placeholder:text-GREY-LIGHT leading-[20px] md:leading-[28px] transition-all duration-200 cursor-pointer outline focus:outline-[2px] md:focus:outline-[3px]'
   let inputClassCorrect = 'outline-1 outline-GREY-LIGHT focus:outline-INPUT-BLUE'
   let inputClassError = 'outline-1 md:outline-2 outline-ERROR'

   let [inputUserType, setInputUserType] = useState(false)
   let [temp, setTemp] = useState(0)

   function setShowPassword() {
      if (temp % 2 == 0) {
         setInputUserType(inputUserType = !inputUserType)
      }
      setTemp(temp + 1)
   }

   function inputErrorUserName() {
      if (formik.errors.username && formik.touched.username) {
         return (`${inputDefaultClass} ${inputClassError}`)
      } else {
         return (`${inputDefaultClass} ${inputClassCorrect}`)
      }
   }

   function inputErrorPassword() {
      if (formik.errors.password && formik.touched.password) {
         return (`${inputDefaultClass} ${inputClassError}`)
      } else {
         return (`${inputDefaultClass} ${inputClassCorrect}`)
      }
   }

   return (
      <section className="flex justify-center" dir="rtl">
         <div className="flex flex-col-reverse xl:flex-row gap-[116px] md:p-[30px] max-w-7xl relative">
            {/* right section (form) */}
            <div className="flex flex-col items-center mt-[-80px] xl:mt-[40px] xl:ms-[116px]">
               {/* title */}
               <div className="text-[20px] md:text-[36px] text-BLUE md:leading-[62px] whitespace-nowrap IRANYEKAN-EXTRABOLD">سامانه آموزش مجازی</div>
               {/* uok name */}
               <div className="mt-4 text-[14px] md:text-2xl text-GOLD md:leading-[41px] whitespace-nowrap IRANYEKAN">دانشگاه کردستان</div>
               {/* form */}
               <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col w-[260px] md:w-[328px] mt-[66px]">
                  {/* username */}
                  <label className="flex items-center gap-6 relative">
                     <small className="absolute  text-GREY bg-white -top-2 right-4 px-1 w-fit h-fit text-[10px] md:text-xs IRANYEKAN-BOLD">نام کاربری</small>
                     <span className="flex-none absolute right-4 cursor-pointer">
                        <svg className="max-md:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle cx="12" cy="6" r="4" fill="#5B5B5B" />
                           <ellipse cx="12" cy="17" rx="7" ry="4" fill="#5B5B5B" />
                        </svg>
                        <svg className="md:hidden" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle cx="9" cy="4.5" r="3" fill="#5B5B5B" />
                           <ellipse cx="9" cy="12.75" rx="5.25" ry="3" fill="#5B5B5B" />
                        </svg>
                     </span>
                     <div className="w-full">
                        <input
                           name="username"
                           value={formik.values.username}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           className={inputErrorUserName()}
                           type="text"
                           placeholder="نام کاربری خود را وارد کنید" />
                     </div>
                     {/* error */}
                     {
                        formik.errors.username &&
                        formik.touched.username &&
                        <div className='absolute leading-[18px] IRANYEKAN -bottom-6 right-3 pe-5 text-[8px] md:text-[10px] text-ERROR bg-opacity-70 w-full'>
                           <span className="float-start">{formik.errors.username}</span>
                           {/* <span className="float-end">{formik.values.username.length}/11</span> */}
                        </div>
                     }
                  </label>
                  {/* passwoed */}
                  <label className="flex items-center gap-6 relative mt-12">
                     <small className="absolute  text-GREY bg-white -top-2 right-4 px-1 w-fit h-fit text-[10px] md:text-xs IRANYEKAN-BOLD">کلمه عبور</small>
                     <span className="flex-none absolute right-4 cursor-pointer">
                        <svg className="max-md:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8ZM8 17C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17ZM17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z" fill="#5B5B5B" />
                        </svg>
                        <svg className="md:hidden" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9375 7.54096V6C3.9375 3.20406 6.20406 0.9375 9 0.9375C11.7959 0.9375 14.0625 3.20406 14.0625 6V7.54096C14.8986 7.6034 15.443 7.76104 15.841 8.15901C16.5 8.81802 16.5 9.87868 16.5 12C16.5 14.1213 16.5 15.182 15.841 15.841C15.182 16.5 14.1213 16.5 12 16.5H6C3.87868 16.5 2.81802 16.5 2.15901 15.841C1.5 15.182 1.5 14.1213 1.5 12C1.5 9.87868 1.5 8.81802 2.15901 8.15901C2.55698 7.76104 3.10143 7.6034 3.9375 7.54096ZM5.0625 6C5.0625 3.82538 6.82538 2.0625 9 2.0625C11.1746 2.0625 12.9375 3.82538 12.9375 6V7.50268C12.6502 7.5 12.3386 7.5 12 7.5H6C5.66136 7.5 5.34976 7.5 5.0625 7.50268V6ZM6 12.75C6.41421 12.75 6.75 12.4142 6.75 12C6.75 11.5858 6.41421 11.25 6 11.25C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75ZM9 12.75C9.41421 12.75 9.75 12.4142 9.75 12C9.75 11.5858 9.41421 11.25 9 11.25C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75ZM12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12Z" fill="#5B5B5B" />
                        </svg>
                     </span>
                     <div className="w-full">
                        <input
                           name="password"
                           value={formik.values.password}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           className={inputErrorPassword()}
                           type={inputUserType ? 'text' : 'password'}
                           placeholder="کلمه عبور را وارد کنید" />
                     </div>
                     {/* change eye */}
                     <label onClick={() => { setShowPassword() }} className="flex-none absolute cursor-pointer ">
                        <input className="w-0 peer" name="r" type="checkbox" />
                        <svg className="absolute top-1 md:top-0 right-[230px] md:right-72 transition-all duration-500 peer-checked:opacity-0 peer-checked:invisible size-[18px] md:size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M1.60608 6.08085C2.11371 5.8633 2.70159 6.09845 2.91914 6.60608L2 7C2.91914 6.60608 2.91928 6.6064 2.91914 6.60608L2.91863 6.60488C2.91835 6.60423 2.91855 6.6047 2.91863 6.60488L2.92254 6.61374C2.92655 6.62276 2.93344 6.63807 2.94323 6.65928C2.96283 6.7017 2.99401 6.76758 3.037 6.85356C3.12307 7.02569 3.25598 7.27745 3.43742 7.58226C3.80142 8.19378 4.35444 9.00824 5.10779 9.81955C5.28536 10.0108 5.47328 10.2011 5.67177 10.388C5.68007 10.3956 5.68828 10.4033 5.69638 10.4112C7.18106 11.8014 9.25231 13 12 13C13.209 13 14.2784 12.7692 15.2209 12.3982C16.4469 11.9156 17.4746 11.1891 18.3156 10.3997C19.2652 9.50838 19.9628 8.55004 20.4233 7.81099C20.6526 7.44291 20.8207 7.13317 20.9299 6.91908C20.9844 6.81215 21.0241 6.72942 21.0492 6.6756C21.0617 6.64871 21.0706 6.62906 21.0759 6.61727L21.0809 6.60608C21.2985 6.09872 21.8864 5.86335 22.3939 6.08085C22.9015 6.29841 23.1367 6.88629 22.9191 7.39392L22 7C22.9191 7.39392 22.9192 7.39369 22.9191 7.39392L22.917 7.39894L22.9134 7.40716L22.902 7.433C22.8924 7.45433 22.8791 7.48377 22.8619 7.52071C22.8274 7.59457 22.7775 7.69854 22.7116 7.82773C22.5799 8.08589 22.384 8.44607 22.1207 8.86867C21.7181 9.51483 21.1521 10.3162 20.4097 11.1243L21.2071 11.9217C21.5976 12.3123 21.5976 12.9454 21.2071 13.3359C20.8166 13.7265 20.1834 13.7265 19.7929 13.3359L18.9527 12.4958C18.3885 12.9515 17.757 13.3814 17.0558 13.7522L17.8382 14.9546C18.1394 15.4175 18.0083 16.037 17.5454 16.3382C17.0825 16.6394 16.463 16.5083 16.1618 16.0454L15.1764 14.5309C14.4974 14.739 13.772 14.8865 13 14.9557V16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5V14.9558C10.2254 14.8866 9.50019 14.7388 8.82339 14.5313L7.83818 16.0454C7.53698 16.5083 6.91753 16.6394 6.45461 16.3382C5.9917 16.037 5.86061 15.4175 6.16181 14.9546L6.94422 13.7522C6.2441 13.3816 5.6125 12.9518 5.04751 12.4955L4.20711 13.3359C3.81658 13.7265 3.18342 13.7265 2.79289 13.3359C2.40237 12.9454 2.40237 12.3123 2.79289 11.9217L3.59033 11.1243C2.74534 10.2045 2.12776 9.29223 1.71883 8.60523C1.50964 8.25379 1.35349 7.95868 1.24815 7.74799C1.19544 7.64257 1.15534 7.55806 1.12757 7.49794C1.11368 7.46788 1.10287 7.44389 1.09509 7.42641L1.08571 7.40513L1.08272 7.39824L1.08165 7.39576L1.08121 7.39476C1.08103 7.39432 1.08085 7.39392 2 7L1.08121 7.39476C0.863659 6.88713 1.09845 6.29841 1.60608 6.08085Z" fill="#B0B0B0" />
                        </svg>
                        <svg className="absolute top-1 md:top-0 right-[230px] md:right-72 transition-all duration-500 invisible opacity-0 peer-checked:opacity-100 peer-checked:visible size-[18px] md:size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#5B5B5B" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z" fill="#5B5B5B" />
                        </svg>
                     </label>
                     {/* error */}
                     {
                        formik.errors.password &&
                        formik.touched.password &&
                        <div className='absolute leading-[18px] IRANYEKAN -bottom-6 right-3 text-[8px] md:text-[10px] text-ERROR bg-opacity-70'>{formik.errors.password}</div>
                     }
                  </label>
                  {/* radio button */}
                  <div className="flex items-center gap-4 mt-8">
                     <label className="size-4 md:size-5 border border-GREY rounded flex justify-center items-center cursor-pointer relative">
                        <input className="w-0 peer" type="checkbox" />
                        <span className="absolute size-2 md:size-3 rounded-sm transition-all duration-500 peer-checked:bg-BLUE"></span>
                        <div className="text-GREY IRANYEKAN-BOLD text-[10px] md:text-xs w-[100px] absolute right-6 md:right-8">مرا به خاطر بسپار</div>
                     </label>
                  </div>
                  {/* sign in */}
                  <button className="text-sm h-[36px] md:h-12 md:text-xl text-white leading-6 md:leading-[35px] rounded-[10px] mt-[34px] md:py-2 IRANYEKAN bg-BLUE hover:bg-GOLD transition-all duration-300" type="submit">ورود</button>
               </form>
               {/* forgot password */}
               <div className="text-GREY-LIGHT text-xs md:text-base hover:text-gray-800 transition-all duration-300 leading-7 cursor-pointer mt-10 IRANYEKAN">فراموشی کلمه عبور</div>
               {/* tag */}
               <div className="text-GREY-LIGHT text-[8px] md:text-xs leading-5 mt-[71px] mb-4 IRANYEKAN">University Of Kurdistan 2023 ©</div>
            </div>
            {/* left section */}
            <div className="relative">
               {/* bg blue */}
               <div className="flex flex-col justify-between w-[320px] h-[320px] md:w-[660px] md:h-[660px] mt-14 md:mt-0 mx-auto md:mx-0 bgImage rounded-[20px] md:p-9 ps-6 p-6">
                  {/* logo & guest */}
                  <div className="flex justify-between">
                     {/* logo */}
                     <div className="w-[123px] md:w-[240px] -mt-[7px] md:-mt-3">
                        <img src={logo} alt="" />
                     </div>
                     {/* guest button */}
                     <button className="max-md:h-[25px] w-[68px] md:w-[95px] md:py-1 md:px-[26px] h-fit rounded-md md:rounded-[10px] text-white text-xs md:text-lg cursor-pointer leading-[20px] IRANYEKAN-LIGHT md:IRANYEKAN bg-gradient-to-l from-[#FFB81C] to-[#FFD068]">مهمان</button>
                  </div>
                  {/* message */}
                  <div className="h-full mt-[40px] md:mt-[185px]">
                     <div className="flex gap-2 md:ms-[14px] md:me-[10px]">
                        {/* message icon */}
                        <div className="flex-none w-[30px] md:w-10 h-[30px] md:h-10 p-[6px] md:p-2 rounded-md backdrop-blur-[5px] bg-white bg-opacity-30 cursor-pointer">
                           <svg className="max-md:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M13.6288 20.4718L13.0867 21.3877C12.6035 22.204 11.3965 22.204 10.9133 21.3877L10.3712 20.4718C9.95073 19.7614 9.74049 19.4063 9.40279 19.2098C9.06509 19.0134 8.63992 19.0061 7.78958 18.9915C6.53422 18.9698 5.74689 18.8929 5.08658 18.6194C3.86144 18.1119 2.88807 17.1386 2.3806 15.9134C2 14.9946 2 13.8297 2 11.5V10.5C2 7.22657 2 5.58985 2.7368 4.38751C3.14908 3.71473 3.71473 3.14908 4.38751 2.7368C5.58985 2 7.22657 2 10.5 2H13.5C16.7734 2 18.4101 2 19.6125 2.7368C20.2853 3.14908 20.8509 3.71473 21.2632 4.38751C22 5.58985 22 7.22657 22 10.5V11.5C22 13.8297 22 14.9946 21.6194 15.9134C21.1119 17.1386 20.1386 18.1119 18.9134 18.6194C18.2531 18.8929 17.4658 18.9698 16.2104 18.9915C15.36 19.0061 14.9349 19.0134 14.5972 19.2098C14.2595 19.4062 14.0492 19.7614 13.6288 20.4718ZM8 11.75C7.58579 11.75 7.25 12.0858 7.25 12.5C7.25 12.9142 7.58579 13.25 8 13.25H13.5C13.9142 13.25 14.25 12.9142 14.25 12.5C14.25 12.0858 13.9142 11.75 13.5 11.75H8ZM7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H16C16.4142 8.25 16.75 8.58579 16.75 9C16.75 9.41421 16.4142 9.75 16 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9Z" fill="white" />
                           </svg>
                           <svg className="md:hidden" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2216 15.3539L9.81499 16.0408C9.45262 16.653 8.54735 16.653 8.18498 16.0408L7.7784 15.3539C7.46305 14.8211 7.30537 14.5547 7.05209 14.4074C6.79882 14.2601 6.47994 14.2546 5.84218 14.2436C4.90066 14.2274 4.31017 14.1697 3.81494 13.9645C2.89608 13.5839 2.16605 12.8539 1.78545 11.9351C1.5 11.2459 1.5 10.3723 1.5 8.625V7.875C1.5 5.41993 1.5 4.19239 2.0526 3.29063C2.36181 2.78605 2.78605 2.36181 3.29063 2.0526C4.19239 1.5 5.41993 1.5 7.875 1.5H10.125C12.5801 1.5 13.8076 1.5 14.7094 2.0526C15.214 2.36181 15.6382 2.78605 15.9474 3.29063C16.5 4.19239 16.5 5.41993 16.5 7.875V8.625C16.5 10.3723 16.5 11.2459 16.2145 11.9351C15.8339 12.8539 15.1039 13.5839 14.1851 13.9645C13.6898 14.1697 13.0993 14.2274 12.1578 14.2436C11.52 14.2546 11.2011 14.2601 10.9479 14.4074C10.6946 14.5547 10.5369 14.8211 10.2216 15.3539ZM6 8.8125C5.68934 8.8125 5.4375 9.06434 5.4375 9.375C5.4375 9.68566 5.68934 9.9375 6 9.9375H10.125C10.4357 9.9375 10.6875 9.68566 10.6875 9.375C10.6875 9.06434 10.4357 8.8125 10.125 8.8125H6ZM5.4375 6.75C5.4375 6.43934 5.68934 6.1875 6 6.1875H12C12.3107 6.1875 12.5625 6.43934 12.5625 6.75C12.5625 7.06066 12.3107 7.3125 12 7.3125H6C5.68934 7.3125 5.4375 7.06066 5.4375 6.75Z" fill="white" />
                           </svg>
                        </div>
                        {/* message */}
                        <p className="IRANYEKAN text-white text-[8px] md:text-xs leading-[14px] md:leading-6 text-justify rounded-md backdrop-blur-[5px] bg-white bg-opacity-30 py-1 px-2 md:py-[13px] md:px-5">
                           به اطلاع دانشجویان گرامی می‌رساند که سامانه گفتینو برای پاسخگویی به سوالات و مشکلات دانشجویان باز می باشد. دانشجویان می‌توانند از شنبه 5 شهریور(ساعت 10 الی 12) درخواست خود را از طریق ابزارک گفتینو برای کارشناس مورد نظر ارسال نمایند.
                        </p>
                     </div>
                  </div>
                  {/* information icon */}
                  <div className="flex-none flex flex-col-reverse gap-2 md:gap-3 md:ms-[14px] mt-1 relative">
                     <button className="w-[30px] md:w-10 h-[30px] md:h-10 p-[6px] md:p-2 rounded-md backdrop-blur-[5px] bg-white bg-opacity-30 cursor-pointer peer">
                        <svg className="max-md:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="white" />
                        </svg>
                        <svg className="md:hidden" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16.5C5.46447 16.5 3.6967 16.5 2.59835 15.4017C1.5 14.3033 1.5 12.5355 1.5 9C1.5 5.46447 1.5 3.6967 2.59835 2.59835C3.6967 1.5 5.46447 1.5 9 1.5C12.5355 1.5 14.3033 1.5 15.4017 2.59835C16.5 3.6967 16.5 5.46447 16.5 9C16.5 12.5355 16.5 14.3033 15.4017 15.4017C14.3033 16.5 12.5355 16.5 9 16.5ZM9 13.3125C9.31066 13.3125 9.5625 13.0607 9.5625 12.75V8.25C9.5625 7.93934 9.31066 7.6875 9 7.6875C8.68934 7.6875 8.4375 7.93934 8.4375 8.25V12.75C8.4375 13.0607 8.68934 13.3125 9 13.3125ZM9 5.25C9.41421 5.25 9.75 5.58579 9.75 6C9.75 6.41421 9.41421 6.75 9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25Z" fill="white" />
                        </svg>
                     </button>
                     <div className="flex flex-col gap-2 md:gap-4 w-[30px] md:w-10 px-[6px] md:px-[9px] py-1 md:py-2  rounded-md backdrop-blur-[5px] bg-white bg-opacity-30 invisible opacity-0 peer-focus:visible peer-focus:opacity-100 transition-all duration-500 hover:visible hover:opacity-100">
                        <div className="transition-all duration-200 cursor-pointer peer/a">
                           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22=" fill="white"
                              className="bi bi-mortarboard-fill max-md:hidden" viewBox="0 0 16 16">
                              <path
                                 d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                              <path
                                 d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                           </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18=" fill="white"
                              className="bi bi-mortarboard-fill md:hidden" viewBox="0 0 16 16">
                              <path
                                 d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                              <path
                                 d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                           </svg>
                        </div>
                        <div className="transition-all duration-200 cursor-pointer">
                           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white"
                              className="bi bi-duffle-fill max-md:hidden" viewBox="0 0 16 16">
                              <path
                                 d="M5.007 4.097c.008-.097.016-.197.027-.298.05-.464.141-.979.313-1.45.169-.465.432-.933.853-1.249 1.115-.836 2.485-.836 3.6 0 .42.316.684.784.853 1.25.171.47.263.985.313 1.449.01.1.02.2.027.298 1.401.194 2.65.531 3.525 1.012 2.126 1.169 1.446 6.095 1.089 8.018a.954.954 0 0 1-.95.772H1.343a.954.954 0 0 1-.95-.772c-.357-1.923-1.037-6.85 1.09-8.018.873-.48 2.123-.818 3.524-1.012ZM4.05 5.633a21.876 21.876 0 0 0-1.565.352l-.091.026-.034.01a.5.5 0 0 0 .282.959l.005-.002.02-.005.08-.023a20.874 20.874 0 0 1 1.486-.334A20.942 20.942 0 0 1 8 6.25c1.439 0 2.781.183 3.767.367a20.854 20.854 0 0 1 1.567.356l.02.005.004.001a.5.5 0 0 0 .283-.959h-.003l-.006-.002-.025-.007a14.787 14.787 0 0 0-.43-.113 21.87 21.87 0 0 0-1.226-.265A21.939 21.939 0 0 0 8 5.25c-1.518 0-2.926.192-3.95.383M6.8 1.9c-.203.153-.377.42-.513.791a5.258 5.258 0 0 0-.265 1.292 34.54 34.54 0 0 1 1.374-.076c.866-.022 1.742.003 2.584.076a5.258 5.258 0 0 0-.266-1.292c-.135-.372-.309-.638-.513-.791-.76-.57-1.64-.57-2.4 0Z" />
                           </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white"
                              className="bi bi-duffle-fill md:hidden" viewBox="0 0 16 16">
                              <path
                                 d="M5.007 4.097c.008-.097.016-.197.027-.298.05-.464.141-.979.313-1.45.169-.465.432-.933.853-1.249 1.115-.836 2.485-.836 3.6 0 .42.316.684.784.853 1.25.171.47.263.985.313 1.449.01.1.02.2.027.298 1.401.194 2.65.531 3.525 1.012 2.126 1.169 1.446 6.095 1.089 8.018a.954.954 0 0 1-.95.772H1.343a.954.954 0 0 1-.95-.772c-.357-1.923-1.037-6.85 1.09-8.018.873-.48 2.123-.818 3.524-1.012ZM4.05 5.633a21.876 21.876 0 0 0-1.565.352l-.091.026-.034.01a.5.5 0 0 0 .282.959l.005-.002.02-.005.08-.023a20.874 20.874 0 0 1 1.486-.334A20.942 20.942 0 0 1 8 6.25c1.439 0 2.781.183 3.767.367a20.854 20.854 0 0 1 1.567.356l.02.005.004.001a.5.5 0 0 0 .283-.959h-.003l-.006-.002-.025-.007a14.787 14.787 0 0 0-.43-.113 21.87 21.87 0 0 0-1.226-.265A21.939 21.939 0 0 0 8 5.25c-1.518 0-2.926.192-3.95.383M6.8 1.9c-.203.153-.377.42-.513.791a5.258 5.258 0 0 0-.265 1.292 34.54 34.54 0 0 1 1.374-.076c.866-.022 1.742.003 2.584.076a5.258 5.258 0 0 0-.266-1.292c-.135-.372-.309-.638-.513-.791-.76-.57-1.64-.57-2.4 0Z" />
                           </svg>
                        </div>
                        <div className="transition-all duration-200 cursor-pointer peer/b">
                           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white"
                              className="bi bi-chat-square-text max-md:hidden" viewBox="0 0 16 16">
                              <path
                                 d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                              <path
                                 d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                              100%
                           </svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white"
                              className="bi bi-chat-square-text md:hidden" viewBox="0 0 16 16">
                              <path
                                 d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                              <path
                                 d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                              100%
                           </svg>
                        </div>
                        <div className="absolute flex flex-col gap-1 md:gap-2 w-48 md:w-64 py-2 md:py-3 px-2 md:px-4 h-[78px] md:h-[120px] rounded-md backdrop-blur-[5px] bg-white bg-opacity-30 text-[8px] md:text-xs right-[38px] md:right-[52px] top-0 invisible opacity-0 peer-hover/a:visible peer-hover/a:opacity-100 transition-all duration-500 hover:visible hover:opacity-100">
                           <a className="text-white hover:text-GOLD IRANYEKAN-LIGHT transition-all duration-300" href="">راهنما و دستورالعمل آموزش مجازی</a>
                           <a className="text-white hover:text-GOLD IRANYEKAN-LIGHT transition-all duration-300" href="">مجموعه راهنماهای ویدئویی</a>
                           <a className="text-white hover:text-GOLD IRANYEKAN-LIGHT transition-all duration-300" href="">مجموعه راهنماهای تصویری</a>
                           <a className="text-white hover:text-GOLD IRANYEKAN-LIGHT transition-all duration-300" href="">راه حل مشکل اینترنت نقاط روستایی</a>
                        </div>
                        <div className="absolute flex flex-col gap-1 md:gap-2 w-48 md:w-64 py-2 md:py-3 px-2 md:px-4 h-[78px] md:h-[120px] rounded-md backdrop-blur-[5px] bg-white bg-opacity-30 text-[8px] md:text-xs right-[38px] md:right-[52px] top-0 invisible opacity-0 peer-hover/b:visible peer-hover/b:opacity-100 transition-all duration-500 hover:visible hover:opacity-100">
                           <a className="text-white hover:text-GOLD IRANYEKAN-LIGHT transition-all duration-300" href="">دانشجویان</a>
                           <a className="text-white hover:text-GOLD IRANYEKAN-LIGHT transition-all duration-300" href="">اساتید</a>
                        </div>
                     </div>
                  </div>
               </div>
               {/* bg gold */}
               <div className="w-[282px] md:w-[600px] h-[282px] md:h-[600px] bg-GOLD absolute top-[50px] md:top-[30px] left-[20px] md:left-[68px] -z-10 rounded-[20px]"></div>
               {/* bg red */}
               <div className="w-[240px] md:w-[540px] h-[240px] md:h-[540px] bg-CRIMSON absolute top-[45px] md:top-[60px] left-[42px] md:left-[136px] -z-20 rounded-[20px]"></div>
            </div>
         </div>
         {/* red,blue,yellow lines */}
         <div className='absolute right-0 top-[430px] md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="152" viewBox="0 0 80 152" fill="none">
               <g id="Group 1">
                  <rect id="Rectangle 7" x="23.8347" y="48.4623" width="5.21808" height="145.454" rx="2.60904" transform="rotate(-45 23.8347 48.4623)" fill="#FFB81C" />
                  <rect id="Rectangle 8" x="10.9206" y="14.3322" width="5.21808" height="145.454" rx="2.60904" transform="rotate(-45 10.9206 14.3322)" fill="#A32638" />
                  <rect id="Rectangle 9" x="33.9814" y="16.1771" width="5.21808" height="145.454" rx="2.60904" transform="rotate(-45 33.9814 16.1771)" fill="#0077C0" />
               </g>
            </svg>
         </div>
         <div className='hidden md:block'>
            <div className="absolute md:top-[850px] xl:top-[308px] right-0"><img src={Rectangle9} alt="" /></div>
            <div className="absolute md:top-[899px] xl:top-[357px] right-0"><img src={Rectangle7} alt="" /></div>
            <div className="absolute md:top-[847px] xl:top-[305px] right-0"><img src={Rectangle8} alt="" /></div>
         </div>
      </section>
   )
}
export default Login