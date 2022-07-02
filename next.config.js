/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com'
    ]
  }
}

module.exports = nextConfig

const intercept = require("intercept-stdout")

// safely ignore recoil warning messages in dev (triggered by HMR)
function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return ""
  }
  return text
}

if (process.env.NODE_ENV === "development") {
  intercept(interceptStdout)
}