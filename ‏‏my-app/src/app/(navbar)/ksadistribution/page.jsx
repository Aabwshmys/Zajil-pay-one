import styles from './ksadistribution.module.css'
import Image from 'next/image'
import image2 from '../../../../public/image4.png'
import image3 from '../../../../public/receve.webp'

const Ksadistribution = () => {
  return (
    <div className={styles.main}>
         <Image
                    src={image2}
                    width={412}
                />
        <div className={styles.back}></div>
        <div className={styles.continer}>
            <div className={styles.sec}>
                <h1>حلول توزيع مثالية داخل المملكة من زاجل</h1>
                <p>اغتنم الفرص الهائلة في السوق السعودي مع شبكة التوزيع الأكثر موثوقية في المملكة</p>
            </div>
            <div className={styles.sec2}>
                <h1>أول شركة خاصة يُصرح لها بتقديم خدمات البريد بالمملكة والحاصلة على المركز الأول من حيث جودة الخدمة...

</h1>
                <p>تفخر زاجل بأن لديها من الموارد والقدرات ما يمكِّنها من تلبية الطلب المتزايد على الخدمات اللوجستية في ظل النشاط الاقتصادي الهائل الذي تشهده المملكة. وتقدم الشركة حلولًا متنوعة لتوفير الاحتياجات المختلفة للعملاء، ومنها: التوصيل في نفس اليوم، الشحن الثقيل، إحالة الشحن، التوصيل من الباب للباب (توصيل الشحنة من المخزن حتى باب العميل). فمع زاجل، تضمن اغتنام الفرص الجديدة التي تظهر على الساحة كل يوم. ابدأ الآن!

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

export default Ksadistribution