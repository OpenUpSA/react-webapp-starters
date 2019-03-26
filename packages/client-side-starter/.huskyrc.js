/**
 * Configures Husky to enfore the condition that `yarn test:husky` needs to pass before a
 * contributor is allowed to push their code.
 */
module.exports = {
  husky: {
    hooks: {
      'pre-push': 'yarn test:husky'
    }
  },
}
