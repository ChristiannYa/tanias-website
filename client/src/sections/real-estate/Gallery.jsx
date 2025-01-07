import { reImages } from '../../constants/real-estate';

const Gallery = () => {
  return (
    <section className='screen1200 mx-auto'>
      <div className='columns-[300px]'>
        {reImages.map(img => (
          <img 
            key={img.id}
            src={img.default}
            className='mb-4 shadow-bs-1'
            alt="" 
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery