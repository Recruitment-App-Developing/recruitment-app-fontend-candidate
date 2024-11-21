const images = {
    logo: new URL('~/assets/images/logo.svg', import.meta.url).href,
    avatar: new URL('~/assets/images/unnamed1.jpg', import.meta.url).href,
    noImage: new URL('~/assets/images/no-image.png', import.meta.url).href,
    company_billBoard: new URL(
        '~/assets/images/company-billBoard.png',
        import.meta.url,
    ).href,
};

export default images;
