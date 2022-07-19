// import emoji from require('emoji-regex')
const emoji = require('emoji-regex')

const emojiRegex = emoji()

/**
 * 校验emoji表情
 * @param str 待校验字符串
 * @returns 校验结果
 */
// export const emojiCheck = (str) => new RegExp(emojiRegex).test(str)
const emojiCheck = (str) => new RegExp(emojiRegex).test(str)
module.exports = {
    emojiCheck
}