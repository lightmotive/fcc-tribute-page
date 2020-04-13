# freeCodeCamp Project - Tribute Page
**[View demo online](https://lightmotive.pro/fcc-tribute-page/)**

[Project instructions: Build a Tribute Page](https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page)

## A responsive web page created with the following concepts

* CSS variables and functions
* display: flex and grid
* Responsive images and iframes for embedded video
* Accessibility
* Media queries for enhanced responsiveness
* NPM + Webpack to securely automate build, test, and publish processes
  * Webpack with multiple configuration files for dev and prod builds.
  * Webpack dev server with watch and npm-run-all for concurrent process local discovery testing (automated testing coming soon).
  * [webpack-s3-uploader](https://www.npmjs.com/package/webpack-s3-uploader) for automated publish to AWS S3 bucket as web server (AWS CloudFront, Route 53, and Certificate Manager complete DNS and secure server functionality).
* [Readmore.js library](https://github.com/jedfoster/Readmore.js) for expand/collapse functionality.

## Hosting

* [Amazon S3 - Configuring a Static Website](https://docs.aws.amazon.com/AmazonS3/latest/dev/HostingWebsiteOnS3Setup.html)
* [Configuring a Static Website Using a Custom Domain Registered with Route 53](https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html)
* [Use CloudFront to serve a static website hosted on Amazon S3](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/)
* [CloudFront - Using Alternate Domain Names and HTTPS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html) | [Configuring Alternate Domain Names and HTTPS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-procedures.html)

## Project config
* Run `npm install`
* View available scripts in package.json.

### Publish requirements
* Add a *config-secure.js* file (ignored) that exports the following secrets:
```javascript
module.exports = {
  AWS_ACCESS_KEY_ID: 'yourAccessKey',
  AWS_SECRET_ACCESS_KEY: 'yourSecretAccessKey',
  AWS_BUCKET_REGION: 'bucket-region',
  AWS_BUCKET_NAME: 'bucket-name',
  AWS_BUCKET_BASE_PATH: 'bucket-folder-name-or-/path/to/-or-empty-string'
};
```