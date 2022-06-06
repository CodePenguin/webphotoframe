import type IPhoto from './IPhoto'

export default interface IConfig {
  configRefreshIntervalSeconds: number
  photos: Array<IPhoto>
  photoSwitchIntervalSeconds: number
}
