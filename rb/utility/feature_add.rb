# TheOffice SDK utility: feature_add
module TheOfficeUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
