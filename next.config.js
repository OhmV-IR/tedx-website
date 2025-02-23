module.exports = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.picsum.photos',
              port: '',
            },
            {
                protocol: 'http',
                hostname: 'www.picsum/photos',
                port: '',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '',
            }
        ]
    }
}