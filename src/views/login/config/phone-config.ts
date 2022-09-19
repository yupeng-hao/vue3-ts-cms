export const rules = {
  number: [
    {
      required: true,
      message: 'Please input your phone number',
      trigger: 'blur'
    },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: 'Please input correct phone number',
      trigger: 'blur'
    }
  ],
  authCode: [
    {
      required: true,
      message: 'Please input your authCode',
      trigger: 'blur'
    },
    {
      pattern: /^\d{6}$/,
      message: 'AuthCode Length should be 6',
      trigger: 'blur'
    }
  ]
}
