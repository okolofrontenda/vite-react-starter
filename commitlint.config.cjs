require('dotenv').config();

const startsWithJiraIssuePlugin = require('./commitlint-plugin-starts-with-jira-issue.cjs')

const jiraIssuePrefix = process.env.VITE_JIRA_ISSUE_PREFIX

module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		// 'type-empty': [0, 'never'],
		// 'subject-empty': [0, 'never'],
		'subject-case': [2, 'always', 'sentence-case'],
		'references-empty': [2, 'never'],
		'starts-with-jira-issue': [2, 'never'],
	},
	parserPreset: {
		parserOpts: {
			issuePrefixes: [jiraIssuePrefix],
		},
	},
	plugins: [startsWithJiraIssuePlugin],
}
