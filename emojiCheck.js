import emoji from 'emoji-regex'

const emojiRegex = emoji()

/**
 * 校验emoji表情
 * @param str 待校验字符串
 * @returns 校验结果
 */
export const emojiCheck = (str) => new RegExp(emojiRegex).test(str)