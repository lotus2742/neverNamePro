
module.exports = {
  extends:['@sfe/eslint-config-sgfe/eslintrc.vue.js'],
  rules: {
    'vue/require-prop-type-constructor': 0, // 会修改代码，不能使用
    'vue/use-v-on-exact': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-template-shadow': 0,
    'vue/no-spaces-around-equal-signs-in-attribute':0,
    'vue/singleline-html-element-content-newline':0
  }
}
