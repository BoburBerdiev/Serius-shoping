import Image from 'next/image'
import { useState } from 'react'

const ImageUI = ({src , alt , imgStyle ,priority,card}) => {

    const [loading , setLoading] = useState(true)

    return (
        <>
            <Image
                src={src}
                alt={alt}
                fill
                className={` w-full h-full  ${imgStyle} duration-200 ease-in-out  ${
                    loading ? 'scale-110 blur-2xl grayscale':
                        'scale-100  blur-0 grayscale-0'
                } `}
                priority={priority || false}
                onLoad={() => setLoading(false)}
                sizes={`${card ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' : '100vw'}`}
            />
        </>
    )
}

export default ImageUI