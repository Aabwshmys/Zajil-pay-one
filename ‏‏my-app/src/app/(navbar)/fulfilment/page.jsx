import styles from './fulfilment.module.css'
import image2 from '../../../../public/image3.png'
import image3 from '../../../../public/image4.png'
import Image from 'next/image'

const Fulfilment = () => {
  return (
    <div className={styles.main}>
        <Image
            src={image2}
            width={412}
        />
        <div className={styles.back}></div>
        <div className={styles.continer}>
            <div className={styles.sec}>
                <h1>خدمات زاجل لإدارة المخزون والتوزيع</h1>
                <p>انطلق بشركتك لآفاق جديدة مع حلول زاجل المتطورة لإدارة المخزون وعمليات التوزيع</p>
            </div>
            <div className={styles.sec2}>
                <h1>خبرات وإمكانات استثنائية تدعم</h1>
                <p>توظف زاجل مرافقها الحديثة وتقنياتها المتطورة وشبكتها اللوجستية الواسعة لمساعدة الشركات السعودية على التنافس بقوة في الأسواق العالمية وتجاوز توقعات العملاء وتحقيق النمو الذي تطمح إليه، حيث تقدم الشركة مجموعة متكاملة من حلول التخزين والتوزيع التي تساعد الشركات على الوصول لآفاق جديدة وتقديم تجربة أفضل للعملاء. اكتشف المعنى الحقيقي لشعارنا: لا تشيل هم، وصلت!

</p>
            </div>
            <div className={styles.sec3}>
                 <Image
                     src={image3}
                     width={350}
                 />
            </div>
        </div>
    </div>
  )
}

export default Fulfilment