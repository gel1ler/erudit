import React from 'react';
import Slider from 'react-slick';
import './SliderStyles.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'; // Если используете Next.js
import { VKAttachmentExp } from '@/globalTypes';

const PostSlider = ({ attachments }: { attachments: VKAttachmentExp[] }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerPadding: "60px",
    };

    return (
        <Slider {...settings} className="post-slider">
            {attachments.map((attachment, index) => (
                attachment.photo ?
                    <div key={index}>
                        <Image
                            className='rounded-lg mx-auto'
                            src={attachment.photo.sizes[3].url}
                            width={attachment.photo.sizes[3].width}
                            height={attachment.photo.sizes[3].height}
                            alt={`post-${index}`}
                        />
                    </div>
                    : null
            ))}
        </Slider>
    );
};

export default PostSlider