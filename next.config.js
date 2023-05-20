/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
  },
  // images: {
  //   protocol: "https",
  //   loader: "cloudinary",
  //   pathname: "https://api.cloudinary.com/v1_1/dfjttf1x6/image/upload",
  // },
};

module.exports = nextConfig;
