//home page  "/"
import './homePage.css'
import Products from './products/page';




const csArr = [
  {
    title: "Clothes",
    imgurl: "https://c4.wallpaperflare.com/wallpaper/261/611/600/deepika-padukone-indian-actress-hd-women-s-white-floral-long-sleeve-dress-wallpaper-preview.jpg"
  },
  {
    title: "Electronics",
    imgurl: "https://c4.wallpaperflare.com/wallpaper/261/611/600/deepika-padukone-indian-actress-hd-women-s-white-floral-long-sleeve-dress-wallpaper-preview.jpg"
  },
  {
    title: "Shoes",
    imgurl: "https://c4.wallpaperflare.com/wallpaper/261/611/600/deepika-padukone-indian-actress-hd-women-s-white-floral-long-sleeve-dress-wallpaper-preview.jpg"
  }
]

export default function Home() {
  return (



    <main className="home">


     <div className='cs-div'>
     {
        csArr.map(card =>
          <div className="style-card">
            <img className='cs-img' src={card.imgurl} />
            <h1 className='cs-title'>{card.title}</h1>
          </div>

        )

      }
     </div>
      <div className='products-div'>
      < Products />
      </div>




    </main>
  );
}
