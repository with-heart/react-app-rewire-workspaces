function setLintInclude(config, include) {
  // Find the eslint loader
  const condition = u =>
    typeof u === 'object' && u.loader && u.loader.includes('eslint-loader')

  // Find the eslint loader rule
  const idx = config.module.rules.findIndex(
    rule => rule.use && rule.use.some(condition),
  )

  if (idx >= 0) {
    // Replace the rule's include with our own
    const rule = config.module.rules[idx]
    rule.include = include
    config.module.rules[idx] = rule
  }

  return config
}

function setBabelInclude(config, include) {
  // Find the babel loader
  const babelLoaderFilter = rule =>
    rule.loader &&
    rule.loader.includes('babel') &&
    rule.options &&
    rule.options.plugins

  // Find a rule specifying oneOf
  const loadersIndex = config.module.rules.findIndex(rule =>
    Array.isArray(rule.oneOf),
  )

  if (loadersIndex >= 0) {
    // Find the babel loader rule
    const loaderIndex = config.module.rules[loadersIndex].oneOf.findIndex(
      babelLoaderFilter,
    )

    if (loaderIndex >= 0) {
      // Replace the rule's include with our own
      const loader = config.module.rules[loadersIndex].oneOf[loaderIndex]
      loader.include = include
      config.module.rules[loadersIndex].oneOf[loaderIndex] = loader
    }
  }

  return config
}

function setMainFields(config, mainFields) {
  const resolve = config.resolve
  resolve.mainFields = mainFields
  return config
}

module.exports = {
  setLintInclude,
  setBabelInclude,
  setMainFields,
}
