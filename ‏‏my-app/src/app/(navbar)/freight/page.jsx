import styles from './freight.module.css'
import Image from 'next/image'
import back from '../../../../public/back.jpg'
import image2 from '../../../../public/image2.jpg'
const Freight = () => {
  return (
    <div className={styles.main}>
         <Image
                    src={back}
                    width={412}
                />
        <div className={styles.back}></div>
        <div className={styles.continer}>
            <div className={styles.sec}>
               
               
                    <h1>خدمات شحن البضائع من زاجل</h1>
                    <p>نتولى عنك مشقة شحن البضائع الثقيلة لأي مكان في العالم</p>
                
            </div>
            <div className={styles.sec2}>
                <h1>أضف لشركتك خبرات وإمكانات</h1>
                <p>من خلال خبرتنا الطويلة وتقنياتنا المتطورة وشبكتنا اللوجستية العالمية، يمكننا توفير حلول الشحن المناسبة لاحتياجات شركتك، بدايةً من نقل البضائع لمسافة قصيرة داخل المملكة حتى شحنها إلى أي مكان آخر في العالم باستخدام وسائل نقل متعددة، حيث توفر زاجل مراكز توزيع وخبراء جمركيين في جميع الوجهات الاقتصادية الرئيسية على مستوى العالم. اكتشف كيف يمكننا مساعدتك على توسيع نطاق أعمالك، وتلبية طلبات عملائك، وتعزيز المكانة العالمية لشركتك. تواصل مع أحد مصممي حلول شحن البضائع لدينا اليوم.

</p>
            </div>
            <div className={styles.sec3}>
                <Image 
                    src={image2}
                    width={350}
                />
            </div>

        </div>
    </div>
  )
}

export default Freight