import { CacheToFile } from '../../../../core/decorators/cacheToFile'
import {
  AssetType,
  PositionType,
  ProtocolDetails,
} from '../../../../types/adapter'
import { MorphoBasePoolAdapter } from '../../common/morphoBasePoolAdapter'

export class MorphoCompoundV2OptimizerSupplyAdapter extends MorphoBasePoolAdapter {
  productId = 'optimizer-supply'

  getProtocolDetails(): ProtocolDetails {
    return {
      protocolId: this.protocolId,
      name: 'MorphoCompoundV2',
      description: 'MorphoCompoundV2 defi adapter on the supply side',
      siteUrl: 'https://compound.morpho.org/',
      iconUrl: 'https://cdn.morpho.org/images/v2/morpho/favicon.png',
      positionType: PositionType.Supply,
      chainId: this.chainId,
      productId: this.productId,
      assetDetails: {
        type: AssetType.NonStandardErc20,
      },
    }
  }

  @CacheToFile({ fileKey: 'optimizer-supply' })
  async buildMetadata() {
    return super.buildMetadata()
  }
}
