export const rules = {
  name: [
    {
      required: true,
      message: 'Please input your name',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,18}$/,
      message: 'Length should be 5 to 18',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input your password',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,18}$/,
      message: 'Length should be 6 to 18',
      trigger: 'blur'
    }
  ]
}
