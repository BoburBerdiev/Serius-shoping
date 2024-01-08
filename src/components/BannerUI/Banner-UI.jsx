import { ImageUI } from '..'

const BannerUI = ({src, height, alt}) => {
  return (
    <div className={`relative w-full ${height}`}>
      <ImageUI src={src} alt={alt} imgStyle={'object-cover'}/>
    </div>
  )
}

export default BannerUI