const postcss = require('postcss')

module.exports = function() {
    return function({ addVariant }) {
        addVariant('pointer-coarse', ({ container, separator }) => {
            const supportsRule = postcss.atRule({ name: 'media', params: '(pointer: coarse)' })
            supportsRule.nodes = container.nodes
            container.nodes = [supportsRule]
            supportsRule.walkRules(rule => {
                rule.selector = `.pointer-coarse${separator}${rule.selector.slice(1)}`
            })
        })
        addVariant('pointer-fine', ({ container, separator }) => {
            const supportsRule = postcss.atRule({ name: 'media', params: '(pointer: fine)' })
            supportsRule.nodes = container.nodes
            container.nodes = [supportsRule]
            supportsRule.walkRules(rule => {
                rule.selector = `.pointer-fine${separator}${rule.selector.slice(1)}`
            })
        })
        addVariant('pointer-none', ({ container, separator }) => {
            const supportsRule = postcss.atRule({ name: 'media', params: '(pointer: none)' })
            supportsRule.nodes = container.nodes
            container.nodes = [supportsRule]
            supportsRule.walkRules(rule => {
                rule.selector = `.pointer-none${separator}${rule.selector.slice(1)}`
            })
        })
        addVariant('hover-hover', ({ container, separator }) => {
            const supportsRule = postcss.atRule({ name: 'media', params: '(hover: hover)' })
            supportsRule.nodes = container.nodes
            container.nodes = [supportsRule]
            supportsRule.walkRules(rule => {
                rule.selector = `.hover-hover${separator}${rule.selector.slice(1)}`
            })
        })
        addVariant('hover-none', ({ container, separator }) => {
            const supportsRule = postcss.atRule({ name: 'media', params: '(hover: none)' })
            supportsRule.nodes = container.nodes
            container.nodes = [supportsRule]
            supportsRule.walkRules(rule => {
                rule.selector = `.hover-none${separator}${rule.selector.slice(1)}`
            })
        })
    }
}
