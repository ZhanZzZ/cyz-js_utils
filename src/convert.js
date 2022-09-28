/*
 * @Author: 厂言
 * @Date: 2022-09-28 22:13:18
 * @LastEditTime: 2022-09-28 22:32:22
 * @LastEditors: 厂言
 * @Description: 调整格式类方法
 * @Params: {*}
 */
const convert = {  // 转换函数容器
  /**
   * @description: 
   *    处理日期格式 Y-M-D h:m:s
   * @param {Date} dateParam
   * @param {String} format
   * @return {String}
   */
  date: (dateParam, format) => {
    let result = []
    // 处理时间格式 - 00:00:00
    const letterArr = ['Y', 'M', 'D', 'h', 'm', 's']
    let date = new Date(dateParam)
    const formatTime = (time) => String(time).padStart(2, 0)

    result.push(date.getFullYear())
    result.push(formatTime(date.getMonth() + 1))
    result.push(formatTime(date.getDate()))
    result.push(formatTime(date.getHours()))
    result.push(formatTime(date.getMinutes()))
    result.push(formatTime(date.getSeconds()))

    result.forEach((item, idx) => {
      format = format.replace(letterArr[idx], item)
    })
    return format
  },
  /**
   * @description: 
   *    将金额转换为千分位表示法
   *    如输入 1293213 ，输出 1,293,213
   * @param {Number} money
   * @return {String}
   */
  money: (money) => {
    // 小数点
    let [integer, decimal] = String.prototype.split.call(money, '.')
    let s = String(integer) // 数字一般都转字符操作
    let arr = []
    let j = 0; // 匹配当前循环的数字 是不是3的倍数
    // 倒序拼接
    for (var i = s.length - 1; i >= 0; i--) {
      arr.push(s[i])
      j++
      // 如果是3的倍数  并且前面还有数字的话 加一个,
      if (j % 3 == 0 && i !== 0) {
        arr.push(',')
      }
    }
    // 颠倒数组 转字符串
    integer = arr.reverse().join('')
    // 小数点
    if (decimal) {
      integer = `${integer}.${decimal}`
    }

    return integer
  }
}

export default convert