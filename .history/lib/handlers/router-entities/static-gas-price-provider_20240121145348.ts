import { GasPrice, IGasPriceProvider } from '@myunidavid/smartorderrouter'
import { BigNumber } from 'ethers'

export class StaticGasPriceProvider implements IGasPriceProvider {
  constructor(private gasPriceWei: BigNumber) {}
  async getGasPrice(): Promise<GasPrice> {
    return { gasPriceWei: this.gasPriceWei }
  }
}
