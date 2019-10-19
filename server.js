const test = {
  "type": "service_account",
  "project_id": "zemuldo-com-website-blog",
  "private_key_id": "44797d5d8804570deb7fb7472c94f0a7ba57b86c",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC8TDKgPRIsYdso\nhJdvrJUw1xBsPOEYeqs7TCc4J3bgg5rqgPJ/zJ8eSHZEW4J79p9wkC3VN9aQYinv\nsjCZkQ0V+Bnk5/ZIcvUIsssqmxlDCkU0Gf0aa04Zr8EnYjOmWYw2VJb6ubCd6SJ0\nYDMOI88natwLPP3y3s0Ej9u/x1nAStboT9DeMVOjdTIUUO94dCXkDXBgpkbPWQLt\nuYnDM45cAGhvX9E0njIJkoF9pQrhBMuaStdi34Ri7Mdf/FMN9X3P+q1kr++QUCmE\nPmCmLQ0jlv3Y6frPtYkC9RRzghNRwf0V6o8e+fYhZ9b0XHnWLBOIf/40QWbAEZ3O\n8EiFy5pnAgMBAAECggEAPa2L67b1a/pFyljcLeVPHSdlJr8uUFFmI09HjXpH0zTo\nmqXQSRJikI3Vx4BeFnLrOPjROoVG0BaHfA9XIgZETgztlnBw2LxnDQlbyUHynWYQ\n0wcsQ+ogNAPA9kCRgIzWg7ljlw8aDi+ebJZSQvBx24yCNWAuIs7eQv9IUOJgwL5z\nHwMp2qat8NpD5SIsu/ewTd63fldirgOmZipJyHF5cUpXMCv1dWyvPJgYMdSLHQ6w\nUdX64dcN/9PyaW4/hj1CEsqmOS3Ho2d/wrbaQ64RsRTjzC6JUAB9U+NOv/vq/Dxb\niquHECj4b7xjWxjoLC64HzDkvJk/pgT5tyE/t0V/+QKBgQDbrhlGaUmxoBXwLZUW\n6j5bLnmZs9a+rH3+434582O8RdUYDuUG/BCTQQ99VTqsV2KoGLLqqS9eeJvHM09g\nEqwLCmnHdUxzXhuoT1I/Fg2xqLKSOn/Pi9Kk8jQNRC5kR8ST6LVzIhjM0JghjbN0\nP8ZGUl0v2PQkVRf7ghE9icryuwKBgQDbbdibZIyEQ+KqREBA/tPSiZvWCtS+LUAd\nBo/7XDFxPoPXb74EY0qs/q8zsWR0fCLkNmanHp/ZITujv8Qby8d4kRwpU7EuNun4\nQRc9wonhpksZNtoCpClUX4x3OzhpNvS+aw0XXVGiLpBlbJ6n0WSwXYNXkzIdU7mu\njubnTDiqRQKBgEmR2K0X/bIa5r30xgVSlWd7/QVYkQZyRg/iqBdIR5J54I+aDWF1\ncSeflkxnCqtE6Kla/DBSUKbWxXTE3kRSfIOGDT7bLatFTQXk6qpt/FAPKx6FsOAU\n94p+AqieuNqknlTajknslVmiUhCKoBrCcOiEFOk9QyYXyVxVhuiRCQKZAoGAXaUe\neQrLUTMri+C+zz4xpjtmD03mBxeGshx33B03WI4GdC3TGUpKt1Ol79i392J2/ZAd\n9RqDu4WMT1Dq37Xy9ghvzU9TYVa8OV+GDKx2bZ+rkyIunkvy+3gfmU7jvztd7dn/\n50XDLgTTSQW3HAWoBACUqg4+p/dwWgfQkUudL0UCgYAxmHKHevZaVdMTCz+vKQth\nEtrtNHTEBfw5kZy/XQJ9f7ATzIzXCkvDojbK9VOCATG6lIBvV/q3Mh+9Dlp4laEe\n1K8IhsUy9B2EdSvnrnTUAbaLap17nWGIe9A+96oyeP8gWlRKxCXX5EOpRNilt3cm\npDWBV8mczCgww69rNaN1/Q==\n-----END PRIVATE KEY-----\n",
  "client_email": "github-ci-actions@zemuldo-com-website-blog.iam.gserviceaccount.com",
  "client_id": "113807807485681228196",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/github-ci-actions%40zemuldo-com-website-blog.iam.gserviceaccount.com"
}

var buff = new Buffer(JSON.stringify(test)).toString("base64");

console.log(buff)