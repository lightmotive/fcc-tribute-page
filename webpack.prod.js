const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const secureConfig = require('./secure-config');
const S3Uploader = require('webpack-s3-uploader');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new S3Uploader({
            s3Options: {
                accessKeyId: secureConfig.AWS_ACCESS_KEY_ID,
                secretAccessKey: secureConfig.AWS_SECRET_ACCESS_KEY,
                region: secureConfig.AWS_BUCKET_REGION
            },
            s3UploadOptions: {
                Bucket: secureConfig.AWS_BUCKET_NAME
            },
            basePath: secureConfig.AWS_BUCKET_FOLDER
        })
    ]
});