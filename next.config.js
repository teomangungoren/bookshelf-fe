/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["i.dr.com.tr"]
    },
    plugins:{
        "postcss-preset-mantine":{},
    },
    
}

module.exports = nextConfig
