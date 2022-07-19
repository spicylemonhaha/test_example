import { emojiCheck } from './emojiCheck'
for (let i = 0; i < 1900; i++) {
    test('does no have emoji', () => {
      expect(emojiCheck('hello world')).toBe(false)
    })
  
    test('has emoji', () => {
      expect(emojiCheck('😀')).toBe(true)
    })
  
    test('has emoji', () => {
      expect(emojiCheck('😒 😳 😈')).toBe(true)
    })
  
    test('has emoji', () => {
      expect(emojiCheck('hello world 😹 😬 ')).toBe(true)
    })
  }