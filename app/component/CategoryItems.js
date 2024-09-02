
export const CategoryItems = () => {
  return(
    <div style={{display:'flex',flexDirection:'column'}}>
      <div>
        <h2>
          دسته بندی
        </h2>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex', justifyContent:'space-between',marginTop:30}}>
          <div style={{position:'relative',cursor:'pointer'}}>
            <img className="category_image" src="./images/traditinalfood/secondresturant.jpg" alt="traditional food"/>
            <div className="text"> ایرانی
              <img src='./arrow_back_ios_16dp_FF00A6_FILL0_wght400_GRAD0_opsz20.svg' width={10}/>
            </div>
          </div>
          <div style={{position:'relative',cursor:'pointer'}}>
            <img className="category_image" src="./images/fastfood_image/FastFood-1.jpg" alt="fastfood" />
            <div className="text"> فست فود 
              <img src='./arrow_back_ios_16dp_FF00A6_FILL0_wght400_GRAD0_opsz20.svg' width={10}/>
            </div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:30}}>
          <div style={{position:'relative',cursor:'pointer'}}>
            <img className="category_image" src="./images/Kebeb/thirdresturant.jpg" alt="Kebeb"/>
            <div className="text"> کباب 
              <img src='./arrow_back_ios_16dp_FF00A6_FILL0_wght400_GRAD0_opsz20.svg' width={10}/>
            </div>
          </div>
          <div style={{position:'relative',cursor:'pointer'}}>
            <img className="category_image" src="./images/fastfood_image/pitza-margarita.jpg" alt="pitza"/>
            <div className="text"> پیتزا 
              <img src='./arrow_back_ios_16dp_FF00A6_FILL0_wght400_GRAD0_opsz20.svg' width={10}/>
            </div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:30}}>
          <div style={{position:'relative',cursor:'pointer'}}>
            <img className="category_image" src="./images/fastfood_image/chicken sandwich.jpg" alt="chicken sandwich" />
            <div className="text"> ساندویچ 
              <img src='./arrow_back_ios_16dp_FF00A6_FILL0_wght400_GRAD0_opsz20.svg' width={10}/>
            </div>
          </div>
          <div style={{position:'relative',cursor:'pointer'}}>
            <img className="category_image" src="./images/Jegar/fourthresturant.jpg" alt="Jegar"/>
            <div className="text"> جگر 
              <img src='./arrow_back_ios_16dp_FF00A6_FILL0_wght400_GRAD0_opsz20.svg' width={10}/>
            </div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:30}}>
          <div style={{position:'relative',cursor:'pointer'}}>
            <img className="category_image" src="./images/fastfood_image/past-pane-alferedo.jpg" alt="past-pane"/>
            <div className="text"> پاستا 
              <img src='./arrow_back_ios_16dp_FF00A6_FILL0_wght400_GRAD0_opsz20.svg' width={10}/>
            </div>
          </div>
          <div style={{position:'relative',cursor:'pointer'}}>
            <img className="category_image" src="./images/fastfood_image/sokhary.jpg" alt="sokhary"/>
            <div className="text"> سوخاری 
              <img src='./arrow_back_ios_16dp_FF00A6_FILL0_wght400_GRAD0_opsz20.svg' width={10}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}