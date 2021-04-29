import React, {useState, useEffect} from 'react';
import Img from "gatsby-image"
import { Flex, Box } from 'rebass';
import ImageZoom from "react-image-zooom";

const Gallery = ({ product, chosen }) => {

    const [currentImage, setCurrentImage] = useState(chosen?.image?.originalSrc);
    useEffect(() => {
        setCurrentImage(() => {return (<ImageZoom key={`${chosen?.shopifyId}`} src={`${chosen?.image?.originalSrc}`} alt={`${product?.title} image`} zoom="200"/>)})
    },[chosen])
    return (
        <>
            <Box
                width={[5 / 5, null, 3 / 5]}
                style={{ marginTop: "0" }}
                py={2}
                px={[2, null, 3]}
                order={[1, null, 2]}
                className="img-hover-zoom--zoom-n-rotate img-hover-zoom"
            >
                {currentImage}
               
            </Box>
            {/*
            <Box
                width={[1 / 2, null, .5 / 5]}
                py={2}
                px={[2, null, 0]}
                order={[2, null, 1]}
            >
                <Box
                    width={1}
                    aria-hidden
                    style={{ overflow: 'auto' }}
                >
                    <Box
                        flexDirection={['row', null, 'column']}
                    >
                        {product.images.map((x, i) => (
                            currentImage === product.images[i] ?
                                <Box
                                    key={i}
                                    style={{ marginBottom: "10px", border: "3px solid black" }}
                                    width={['400px', null, 'auto']}
                                    ml={[0, null, 2]}
                                    mr={[2, null, 0]}
                                    my={1}
                                >
                                    <Img
                                        fluid={x.localFile.childImageSharp.fluid}
                                        alt={product.title}
                                        fadeIn={false} 
                                        loading="eager"
                                        imgStyle={{ WebkitFilter: "blur(1px)", marginBorder: "10px solid black" }}
                                    />
                                </Box>
                                :
                                <Box
                                    onMouseOver={e => setCurrentImage(product.images[i])} style={{ marginBottom: "10px" }}
                                    key={i}
                                    width={['400px', null, 'auto']}
                                    ml={[0, null, 2]}
                                    mr={[2, null, 0]}
                                    my={1}
                                >
                                    <Img
                                        fluid={x.localFile.childImageSharp.fluid}
                                        fadeIn={false} 
                                        loading="eager"
                                        durationFadeIn={500 * i}
                                        alt={product.title}
                                    />
                                </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
                        */}

            {/*
            <Box
                width={[1 / 2, null, .5 / 5]}
                py={2}
                px={[2, null, 0]}
                order={[2, null, 1]}
            >
                <Box
                    width={1}
                    aria-hidden
                    style={{ overflow: 'auto' }}
                >
                    <ThumbnailFlex
                        flexDirection={['row', null, 'column']}
                    >
                        {product.images.map((x, i) => (
                            currentImage === product.images[i] ?
                                <ThumbnailBox
                                    key={i}
                                    style={{ marginBottom: "10px", border: "3px solid black" }}
                                    width={['400px', null, 'auto']}
                                    ml={[0, null, 2]}
                                    mr={[2, null, 0]}
                                    my={1}
                                >
                                    <Img
                                        fluid={x.localFile.childImageSharp.fluid}
                                        alt={product.title}
                                        fadeIn={false} 
                                        loading="eager"
                                        imgStyle={{ WebkitFilter: "blur(1px)", marginBorder: "10px solid black" }}
                                    />
                                </ThumbnailBox>
                                :
                                <ThumbnailBox
                                    onMouseOver={e => setCurrentImage(product.images[i])} style={{ marginBottom: "10px" }}
                                    key={i}
                                    width={['400px', null, 'auto']}
                                    ml={[0, null, 2]}
                                    mr={[2, null, 0]}
                                    my={1}
                                >
                                    <Img
                                        fluid={x.localFile.childImageSharp.fluid}
                                        fadeIn={false} 
                                        loading="eager"
                                        durationFadeIn={500 * i}
                                        alt={product.title}

                                    />
                                </ThumbnailBox>
                        ))}
                    </ThumbnailFlex>
                </Box>
            </Box>
            */}
        </>
    );
};

export default Gallery;