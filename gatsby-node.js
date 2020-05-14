const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.sourceNodes = async ({ actions, store, cache, createNodeId }) => {
  const { createNode } = actions

  await createRemoteFileNode({
    // The source url of the remote file
    url: `https://source.unsplash.com/user/jeremybishop/2000x2000`,
    cache,
    createNode,
    createNodeId,
    name: "random-unsplash",
    ext: ".jpg",
  })
}
