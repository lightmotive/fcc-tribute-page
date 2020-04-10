# freeCodeCamp Project - Tribute Page
**[View demo online](https://d2uu9b7sr6nrxo.cloudfront.net/fcc-tribute-page/)**

[Project instructions: Build a Tribute Page](https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page)

## A responsive web page created with the following concepts

* CSS variables and functions
* display: flex and grid
* Responsive images and iframes for embedded video
* Accessibility
* Media queries for enhanced responsiveness
* NPM + Webpack to securely automate build and publish processes
* [Readmore.js library](https://github.com/jedfoster/Readmore.js) for expand/collapse functionality.

## Hosting

* [Amazon S3 - Configuring a Static Website](https://docs.aws.amazon.com/AmazonS3/latest/dev/HostingWebsiteOnS3Setup.html)
* [Use CloudFront to serve a static website hosted on Amazon S3](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/)

## Publish requirements
* Add a secure-config.js file (ignored) that exports the following secrets:
```javascript
module.exports = {
  AWS_ACCESS_KEY_ID: 'yourKeyHere',
  AWS_SECRET_ACCESS_KEY: 'yourKeyHere',
  AWS_BUCKET_REGION: 'bucket-here',
  AWS_BUCKET_NAME: 'bucket-name-here',
  AWS_BUCKET_FOLDER: 'bucket-folder-name-here-or-empty-string'
};
```