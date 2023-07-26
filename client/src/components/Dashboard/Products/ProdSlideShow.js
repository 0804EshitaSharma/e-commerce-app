// https://www.npmjs.com/package/react-image-gallery
// referenced from: https://www.youtube.com/watch?v=AnG7LMcX_z8
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
      original: 'https://cdn.roveconcepts.com/sites/default/files/styles/picture_768_2x/public/menu_assets/YVR-Showroom-Photoshoot_0021_0.jpg',
      thumbnail: 'https://cdn.roveconcepts.com/sites/default/files/styles/picture_768_2x/public/menu_assets/YVR-Showroom-Photoshoot_0021_0.jpg',
    },
    {
      original: 'https://theoneandonlyboutique.com/cdn/shop/files/minimalist-retail-clothing-display_1500x.jpg?v=1684160182',
      thumbnail: 'https://theoneandonlyboutique.com/cdn/shop/files/minimalist-retail-clothing-display_1500x.jpg?v=1684160182',
    },
    {
      original: 'https://media.istockphoto.com/id/501630964/photo/art-process.jpg?s=612x612&w=0&k=20&c=y2_i3_dB9ElUlLsM0vp9MDWX_f8a7VEX8OB_OX7ChFU=',
      thumbnail: 'https://media.istockphoto.com/id/501630964/photo/art-process.jpg?s=612x612&w=0&k=20&c=y2_i3_dB9ElUlLsM0vp9MDWX_f8a7VEX8OB_OX7ChFU=',
    },
    {
      original: 'https://www.abtasty.com/wp-content/uploads/Product-roadmap.jpg',
      thumbnail: 'https://www.abtasty.com/wp-content/uploads/Product-roadmap.jpg',
    },
  ];

export default function ProductSlideShow() {
    
    return (
        <ImageGallery 
        items={images} 
        // showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={3000}
        />
    )
}