import { connect } from 'react-redux'
import { assets, rates } from '../../state'
import { HomePage } from './page'

const mapStateToProps = (state) => ({
  assets: assets.selectors.getSortedAssets(state),
  meta: assets.selectors.getAssetsMeta(state),
  rate: rates.selectors.getActiveRate(state)
})

const mapDispatchToProps = {
  getAssets: assets.actions.getAssets,
  sortAssets: assets.actions.sortAssets
}

const container = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export {
  container
}
