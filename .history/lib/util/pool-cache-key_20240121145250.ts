import { Protocol } from '@myunidavid/router-sdk'
import { ChainId } from '@myunidavid/sdk-core'

export const S3_POOL_CACHE_KEY = (baseKey: string, chain: ChainId, protocol: Protocol) =>
  `${baseKey}-${chain}-${protocol}`
