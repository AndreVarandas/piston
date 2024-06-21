import commitAnalyzer from '@semantic-release/commit-analyzer'
import releaseNotesGenerator from '@semantic-release/release-notes-generator'
import changelog from '@semantic-release/changelog'
import npm from '@semantic-release/npm'
import github from '@semantic-release/github'
import git from '@semantic-release/git'

export default {
  branches: ['main'],
  repositoryUrl: 'https://github.com/AndreVarandas/piston',
  plugins: [commitAnalyzer, releaseNotesGenerator, changelog, npm, github, git],
}
