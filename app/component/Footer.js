import Image from "next/image";
import '../style.css'
import Link from "next/link";


const Footer = () => {
  return(
  <div>
    <div className="footer-container">
      <div className="footer_left">
        <div style={{display:'flex',flexDirection:'column',marginRight:15,marginTop:10}}>
          <div style={{display:'flex',flexDirection:'column'}}>
            <div className="snapp_icon_title">
              <Image src="/snappLogo.aa72cd99.svg" alt="icon" width={50} height={50}/>
              <div className="footer_snapp_title"> اسنپ فود</div>
            </div>
            <div className="footer_snapp_detail"> تجربه سفارش غذا از زودفود، تا اسنپ فود</div>
          </div>
          <div className="footer_icon_container">
            <Link href={'/'} style={{display:'flex'}}>
              <div className="footer_icon">
                 <Image src="/footer icons/twitter.webp" alt="icon" width={20} height={20}/>
              </div>
              <div className="footer_icon">
                <Image src="/footer icons/telegram.webp" alt="icon" width={20} height={20}/>
              </div>
              <div className="footer_icon">
                <Image src="/footer icons/linkedin.webp" alt="icon" width={20} height={20}/>
              </div>
              <div className="footer_icon">
                <Image src="/footer icons/insta.webp" alt="icon" width={20} height={20}/>
              </div>
              <div className="footer_icon">
                <Image src="/footer icons/aparat.webp" alt="icon" width={20} height={20}/>
              </div>
            </Link>  
          </div>
        </div>
      </div>
      <div  className="footer_des_container">
       <div className="footer_right">
          <div className="footer_des"> درباره اسنپ فود</div>
          <div className="footer_des"> فرصت های شغلی</div>
          <div className="footer_des"> وبلاگ</div>
          <div className="footer_des">قوانین سایت</div>
          <div className="footer_des">حریم خصوصی</div>
          <div className="footer_des">ثبت نام فروشندگان</div>
       </div>
       <div className="footer-right-secondary">
          <div className="footer_des">تماس با اسنپ</div>
          <div className="footer_des">پرسش های متداول</div>
          <div className="footer_des">ثبت شکایت</div>
          <div className="footer_des">اپلیکیشن موبایل</div>
       </div>
      </div>
      <div className="senf_icon">
        <Image src="/footer icons/senf.webp" alt="icon" width={60} height={60}/>
      </div>
    </div>
  </div>
 )
}
export default Footer;