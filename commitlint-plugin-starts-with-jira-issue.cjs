module.exports = {
	rules: {
		'starts-with-jira-issue': ({ subject }) => {
			const jiraIssuePattern = new RegExp(
				`^${process.env.VITE_JIRA_ISSUE_PREFIX}\\d+`
			)
			const isValid = jiraIssuePattern.test(subject)

			return [
				isValid,
				isValid
					? 'Commit message starts with a valid JIRA issue ID.'
					: 'Commit message must start with a JIRA issue ID (e.g., PROJ-123).',
			]
		},
	},
}
