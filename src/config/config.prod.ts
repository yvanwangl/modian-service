let {
    MONGODB_HOST,
    MONGODB_DATABASE,
    MONGODB_PORT,
    MONGODB_USER,
    MONGODB_PWD,
    REDIS_HOST,
    REDIS_PORT,
    REDIS_PASSWORD,
    SERVER_HOST,
    SERVER_PORT,
    QINIU_DOUPLOAD,
    QINIU_PUBLIC_BUCKET_DOMAIN,
    QINIU_ACCESS_KEY,
    QINIU_SECRET_KEY,
    QINIU_BUCKET,
    EMAIL_HOST,
    EMAIL_PORT,
    EMAIL_USER,
    EMAIL_PASS,
    REGISTOR
} = process.env;

export default {
    mongodb: {
        host: MONGODB_HOST,
        database: MONGODB_DATABASE,
        port: MONGODB_PORT,
        user: MONGODB_USER,
        pwd: MONGODB_PWD,
    },
    redis: {
        host: REDIS_HOST,
        port: REDIS_PORT,
        password: REDIS_PASSWORD
    },
    server: {
        host: SERVER_HOST,
        port: SERVER_PORT
    },
    qiniu: {
        //由于docker配置环境变量为字符串，此处做兼容处理
        doUpload: String(QINIU_DOUPLOAD) == 'true',
        publicBucketDomain: QINIU_PUBLIC_BUCKET_DOMAIN,
        accessKey: QINIU_ACCESS_KEY,
        secretKey: QINIU_SECRET_KEY,
        bucket: QINIU_BUCKET
    },
    emial: {
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        user: EMAIL_USER,
        pass: EMAIL_PASS
    },
    //由于docker配置环境变量为字符串，此处做兼容处理
    registor: String(REGISTOR) == 'true'
};