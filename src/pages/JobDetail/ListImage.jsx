import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function ListImage({ imageList }) {
    const onInit = () => {};
    return (
        <div>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <div className="flex w-full gap-5">
                    {imageList.map((item, index) => (
                        <a key={index} href={item}>
                            <img
                                className="size-40 rounded-lg object-cover"
                                alt=""
                                src={item}
                            />
                        </a>
                    ))}
                </div>
            </LightGallery>
        </div>
    );
}

export default ListImage;
