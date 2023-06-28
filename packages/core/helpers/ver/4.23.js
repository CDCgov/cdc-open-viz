const update_4_23 = async config => {
  const ver = 4.23

  let newConfig = { ...config }

  newConfig.validated = ver
  return newConfig
}

export default update_4_23
