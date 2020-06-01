import { connect } from 'react-redux'
import { asset, rates } from '../../state'
import { AssetPage } from './page'

const mapStateToProps = (state, ownProps) => ({
  assetId: decodeURI(ownProps.match.params.assetId),
  asset: asset.selectors.getAsset(state),
  meta: asset.selectors.getAssetMeta(state),
  rate: rates.selectors.getActiveRate(state)
})

const mapDispatchToProps = {
  getAsset: asset.actions.getAsset
}

const container = connect(mapStateToProps, mapDispatchToProps)(AssetPage)

export {
  container
}
