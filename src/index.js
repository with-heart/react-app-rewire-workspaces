import paths from 'react-scripts/config/paths'
import {setLintInclude, setBabelInclude, setMainFields} from './webpack'
import * as workspaces from './workspaces'

const workspacesConfig = workspaces.init(paths)

const enableWorkspaces = () => (config, env) => {
  const isEnvDevelopment = env === 'development'
  const isEnvProduction = env === 'production'

  const workspacesMainFields = [workspacesConfig.packageEntry, 'main']
  const mainFields =
    isEnvDevelopment && workspacesConfig.development
      ? workspacesMainFields
      : isEnvProduction && workspacesConfig.production
      ? workspacesMainFields
      : undefined
  const include =
    isEnvDevelopment && workspacesConfig.development
      ? [paths.appSrc, workspacesConfig.paths]
      : isEnvProduction && workspacesConfig.production
      ? [paths.appSrc, workspacesConfig.paths]
      : paths.appSrc

  setLintInclude(config, include)
  setBabelInclude(config, include)
  setMainFields(config, mainFields)

  return config
}

module.exports = enableWorkspaces
