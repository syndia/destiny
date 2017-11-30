/**
 * External dependencies
 */
const webpack = require(`webpack`)
//const path = require('path')
//const crypto = require('crypto')
//const fs = require(`fs-extra`)
//const _ = require('lodash')
//const Promise = require('bluebird')
//const select = require(`unist-util-select`)

/**
 * Internal dependencies
 */

exports.modifyWebpackConfig = ({ config }) =>
  config.plugin(`Glamor`, webpack.ProvidePlugin, [
    {
      Glamor: `glamor/react`,
    },
  ])

exports.modifyBabelrc = ({ babelrc }) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([
      [`transform-react-jsx`, { pragma: `Glamor.createElement` }],
      `glamor/babel-hoist`,
    ]),
  }
}

/*
function createContentDigest(content) {
  return crypto
    .createHash(`md5`)
    .update(JSON.stringify(content))
    .digest(`hex`)
}

let frontmatterEdges

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators

  const destinyMilestoneDefinition = await require(`./data/manifest/DestinyMilestoneDefinition.json`)
  const destinyInventoryItemDefinition = await require(`./data/manifest/DestinyInventoryItemDefinition.json`)
  const destinyAcivityDefinition = await require(`./data/manifest/DestinyActivityDefinition.json`)
  const destinyVendorDefinition = await require(`./data/manifest/DestinyVendorDefinition.json`)

  const createDestinyDefinitionNodes = (
    definitions,
    type,
    parent = {},
    depth = 0
  ) => {
    Object.entries(definitions).forEach(([hash, definition]) => {
      let quests = definition.quests

      let def = Object.keys(definition).map(key => {
        if (
          typeof definition[key] === `number` &&
          definition[key] !== 0 &&
          key.includes(`Hash`)
        ) {
          definition[key] === `${definition[key]}`
        }
      })

      let lessDefinition = _.omit(definition, [
        `hash`,
        `quests`,
        `rewards`,
        `activities`,
      ])

      let definitionNode = {
        id: `${hash}`,
        path: `/definition/${hash}/`,
        ...lessDefinition,
        parent: parent.id || `__SOURCE__`,
        children: [],
        internal: {
          type,
          contentDigest: createContentDigest(definition),
        },
      }

      if (quests) {
        createDestinyDefinitionNodes(
          quests,
          `DestinyMilestoneQuestDefinition`,
          definitionNode
        )
      }

      createNode(definitionNode)
    })
  }

  createDestinyDefinitionNodes(
    destinyMilestoneDefinition,
    `DestinyMilestoneDefinition`
  )

  createDestinyDefinitionNodes(
    destinyVendorDefinition,
    `DestinyVendorDefinition`
  )

  Object.entries(destinyMilestoneDefinition).forEach(
    ([milestoneHash, milestone]) => {
      Object.entries(milestone.quests).forEach(([questItemHash, quest]) => {
        createNode({
          id: `${questItemHash}`,
          path: `/definition/inventory/${questItemHash}`,
          displayProperties: quest.displayProperties,
          overrideImage: quest.overrideImage,
          hash: quest.hash,
          parent: `${milestoneHash}`,
          children: [],
          internal: {
            type: `DestinyInventoryItemDefinition`,
            contentDigest: createContentDigest(quest),
          },
        })
      })

    }
  )

  Object.entries(destinyAcivityDefinition).forEach(
    ([activityHash, activity]) => {
      createNode({
        id: `${activityHash}`,
        path: `/definition/activity/${activityHash}`,
        displayProperties: activity.displayProperties,
        image: activity.image,
        parent: null,
        children: [],
        internal: {
          type: `DestinyActivityDefinition`,
          contentDigest: createContentDigest(activity),
        },
      })
    }
  )
}

async function onCreateNode({ node, boundActionCreators, loadNodeContent }) {
  const { createNode, createParentChildLink } = boundActionCreators

  // We only care about JSON content
  if (node.internal.mediaType !== `application/json`) {
    return
  }

  const content = await loadNodeContent(node)
  const parsedContent = JSON.parse(content)

  parsedContent.map(obj => {
    if (_.has(obj, `items`)) {
      obj.items.map(hash => {
        console.log(hash)
      })
    }
  })
}
exports.onCreateNode = onCreateNode

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDestinyMilestoneDefinition {
          edges {
            node {
              id
              path
            }
          }
        }
        allDestinyVendorDefinition {
          edges {
            node {
              id
              path
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      result.data.allDestinyMilestoneDefinition.edges.forEach(edge => {
        createPage({
          path: edge.node.path,
          layout: `index`,
          component: path.resolve(
            `./src/templates/destiny-milestone-definition.js`
          ),
          context: {
            id: edge.node.id,
          },
        })
      })

      result.data.allDestinyVendorDefinition.edges.forEach(edge => {
        createPage({
          path: edge.node.path,
          layout: `index`,
          component: path.resolve(
            `./src/templates/destiny-vendor-definition.js`
          ),
          context: {
            id: edge.node.id,
          },
        })
      })

      resolve()
    })
  })
}

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    if (frontmatterEdges) {
      let frontmatter = frontmatterEdges.find(
        edge => edge.node.fileAbsolutePath === page.component
      )

      if (frontmatter) {
        page.layout = frontmatter.node.data.layout || `index`
      }

      page.context.slug = page.path
    }

    createPage(page)

    resolve()
  })
}
*/
