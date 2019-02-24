import {setLintInclude, setBabelInclude, setMainFields} from './webpack'

test('setLintInclude', () => {
  const config = setLintInclude(
    require('../fixtures/webpack.config.eslint'),
    'include',
  )
  expect(config.module.rules[0].include).toBe('include')
})

test('setBabelInclude', () => {
  const config = setBabelInclude(
    require('../fixtures/webpack.config.babel'),
    'include',
  )
  expect(config.module.rules[0].oneOf[0].include).toBe('include')
})

test('setMainFields', () => {
  const config = setMainFields(
    require('../fixtures/webpack.config.resolve'),
    'mainFields',
  )
  expect(config.resolve.mainFields).toBe('mainFields')
})
