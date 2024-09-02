import Firstrestaurant from '../public/images/fastfood_image/FastFood-1.jpg'
import fastfoodicon from '../public/fastfood icon.jpg'
import Pizza from '../public/images/fastfood_image/pitza-margarita.jpg'
import Pasta from '../public/images/fastfood_image/past-pane-alferedo.jpg'
import Sandwich from '../public/images/fastfood_image/chicken sandwich.jpg'
import Sokhary from '../public/images/fastfood_image/sokhary.jpg'
import Stake from '../public/images/fastfood_image/stake.jpg'


import Secondrestaurant from '../public/images/traditinalfood/secondresturant.jpg'
import IraniIcon from '../public/irani icon.jpg'
import Gheime from '../public/images/traditinalfood/gheime.jpg'
import Fesenjan from '../public/images/traditinalfood/fesenjan.jpg'
import Ghelyemahi from '../public/images/traditinalfood/ghelye mahi.jpg'
import Lobiapolo from '../public/images/traditinalfood/lobia polo.jpg'
import Adaspolo from '../public/images/traditinalfood/adas polo.jpg'

import Thirdrestaurant from '../public/images/Kebeb/thirdresturant.jpg'
import kababicon from '../public/kabab icon.png'
import Bakhtiyari from '../public/images/Kebeb/bakhtiyari.jpg'
import Barg from '../public/images/Kebeb/barg.jpg'
import Chenje from '../public/images/Kebeb/chenje.jpg'
import Loghmeh from '../public/images/Kebeb/loghmeh.jpg'
import Soltani from '../public/images/Kebeb/soltani.jpg'

import Fourthrestaurant from '../public/images/Jegar/fourthresturant.jpg'
import jegaricon from '../public/jegar icon.jpg'
import Jegarpich from '../public/images/Jegar/jegarpich.jpg'
import Loghmemix from '../public/images/Jegar/loghme mix.jpg'
import Rolekababi from '../public/images/Jegar/role kababi.jpg'
import Delkababi from '../public/images/Jegar/del kababi.jpg'
import Delemorgh from '../public/images/Jegar/delemorgh.jpg'

import Fifthrestaurant from '../public/images/khanegi/fifthresturant.jpg'
import homestyleicon from '../public/home style icon.jpg'
import KofteTabrizi from '../public/images/khanegi/kofte tabrizi.jpg'
import DolmeBarg from '../public/images/khanegi/dolmeh.jpg'
import Kashkbademjan from '../public/images/khanegi/kashke bademjon.jpg'
import Kokosabzi from '../public/images/khanegi/kokosabzi.jpg'
import Kotlet from '../public/images/khanegi/kotlet.jpg'


export const Fast_Food = 'فست فود'

export const Iranian_Traditional_Food = 'ایرانی'

export const Kebab_Restaurant = ' کبابی'

export const Liver_House = 'جگر'

export const Home_style_Restaurante = 'غذای خانگی'


export const CATEGORIES = [Fast_Food,Iranian_Traditional_Food,Kebab_Restaurant,Liver_House,Home_style_Restaurante]

export const RESTAURANTS = [
  {
     id: 1,
     name: "کلین فود",
     description: "فست فود، ساندویچ، سوخاری، استیک",
     image: Firstrestaurant,
     icon: fastfoodicon,
     category :Fast_Food,
     rang_num: '4.3',
     rang_icon: '\u2605',
     menu: [
      {
         id: 1_1,
         name: "پیتزا مارگاریتا",
         description: "پیتزای کلاسیک با سس گوجه‌فرنگی و پنیر موزارلا.",
         price: 180000,
         image: Pizza
      },
      {
         id: 2_1,
         name: "پاستا آلفردو",
         description: "پاستای خامه‌ای با سس آلفردو.",
         price: 150000,
         image: Pasta
      },
      {
         id: 3_1,
         name: "ساندویچ مرغ",
         description: "ساندویچ با مرغ ریش ریش شده",
         price: 100000,
         image: Sandwich
      },
      {
         id: 4_1,
         name: "سوخاری",
         description: "مرغ سوخاری به همراه سیب زمینی سرخ کرده",
         price: 170000,
         image: Sokhary
      },
      {
         id: 5_1,
         name: "استیک گوشت",
         description: "استیک با گوشت خوشمزه",
         price: 200000,
         image: Stake
      }
    ]
  },
  {
     id: 2,
     name: "رستوران مزعفر",
     description: "ایرانی، چلو خورشت، چلو پلو ایرانی",
     image: Secondrestaurant,
     icon: IraniIcon,
     category:Iranian_Traditional_Food,
     rang_num: '4.2',
     rang_icon: '\u2605',
     menu: [
      {
         id: 1_2,
         name: "خورشت قیمه",
         description: "خورشت قیمه با گوشت تازه و فراوان",
         price: 90000,
         image: Gheime
      },
      {
         id: 2_2,
         name: "خورشت فسنجان",
         description: "خورشت فسنجان با گردو و رب انار محلی و تازه",
         price: 120000,
         image: Fesenjan
      },
      {
         id: 3_2,
         name: "قلیه ماهی",
         description: "قلیه ماهی با ماهی تازه و خوشمزه",
         price: 180000,
         image: Ghelyemahi
      },
      {
         id: 4_2,
         name: "لوبیا پلو",
         description: "لوبیا پلو با گوشت چرخ کرده و لوبیای تازه",
         price: 80000,
         image: Lobiapolo
      },
      {
         id: 5_2,
         name: "عدس پلو",
         description: "عدس پلو با گوشت چرخ کرده و کشمش پلویی",
         price: 80000,
         image: Adaspolo
      }
    ]
  },
  {
     id: 3,
     name: "کباب آبان",
     description: "نوشیدنی، کباب",
     image: Thirdrestaurant,
     icon : kababicon,
     category:Kebab_Restaurant,
     rang_num: '4.3',
     rang_icon: '\u2605',
     menu: [
      {
         id: 1_3,
         name: "بختیاری",
         description: "کباب بختیاری با گوشت تازه به همراه گوجه",
         price: 210000,
         image: Bakhtiyari
      },
      {
         id: 2_3,
         name: "کباب برگ",
         description: "کباب برگ نرم به همراه نوشیدنی",
         price: 230000,
         image: Barg
      },
      {
         id: 3_3,
         name: "چنجه",
         description: "کباب چنجه",
         price: 250000,
         image: Chenje
      },
      {
         id: 4_3,
         name: "کباب لقمه",
         description: "کباب لقمه",
         price: 200000,
         image: Loghmeh
      },
      {
         id: 5_3,
         name: "سلطانی",
         description: "کباب سلطانی",
         price: 210000,
         image: Soltani
      }
    ]
  },
  {
     id: 4,
     name: "جگرکی سید",
     description: "نوشیدنی، انواع جگر کبابی",
     image: Fourthrestaurant,
     icon : jegaricon,
     category:Liver_House,
     rang_num: '4.5',
     rang_icon: '\u2605',
     menu: [
      {
         id: 1_4,
         name: "جگر پیچ",
         description: "کباب جگر پیچ با دنبه نرم و خوش پخت",
         price: 180000,
         image: Jegarpich
      },
      {
         id: 2_4,
         name: "لقمه میکس",
         description: "لقمه میکس دارای جگر، دل، قلوه و دنبه کبابی",
         price: 250000,
         image: Loghmemix
      },
      {
         id: 3_4,
         name: "رول کبابی",
         description: "رول کبابی",
         price: 270000,
         image: Rolekababi
      },
      {
         id: 4_4,
         name: "دل کبابی",
         description: "کباب دل گوسفندی آبدار",
         price: 170000,
         image: Delkababi
      },
      {
         id: 5_4,
         name: "دل مرغ کبابی",
         description: "دل مرغ کبابی",
         price: 110000,
         image: Delemorgh
      }
    ]
  },
  {
     id: 5,
     name: "رستوران اجاق",
     description: "غذای سنتی و محلی، عصرانه",
     image: Fifthrestaurant,
     icon: homestyleicon,
     category:Home_style_Restaurante,
     rang_num: '4.4',
     rang_icon: '\u2605',
     menu: [
      {
         id: 1_5,
         name: "کوفته تبریزی",
         description: "کوفته تبریزی",
         price: 90000,
         image: KofteTabrizi
      },
      {
         id: 2_5,
         name: "دلمه برگ مو",
         description: "دلمه برگ مو",
         price: 80000,
         image : DolmeBarg
      },
      {
         id: 3_5,
         name: "کشک بادمجان",
         description: "کشک بادمجان با کشک مخصوص",
         price: 70000,
         image: Kashkbademjan
      },
      {
         id: 4_5,
         name: "کوکو سبزی",
         description: "کوکوسبزی با سبزی تازه",
         price: 60000,
         image: Kokosabzi
      },
      {
         id: 5_5,
         name: "کتلت",
         description: "کتلت به همراه سیب زمینی سرخ کرده",
         price: 80000,
         image: Kotlet
      }
    ]
  }
]

export const DATABASE = {
  categories : CATEGORIES,
  restaurants: RESTAURANTS,
}