import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Octokit } from 'octokit';

@ApiTags('Github')
@Controller('github')
export class GithubController {
  // It's ok to access GitHub API without token, but it's limited to 60 requests per hour.
  // TODO: maybe caching the response to help this limit.
  gh_token = process.env.GITHUB_TOKEN;

  @Get()
  getOrganizationInfo() {
    const octokit = new Octokit({ auth: this.gh_token });
    return octokit.request('GET /orgs/poapper');
  }

  @Get('member')
  getGithubMembers() {
    const octokit = new Octokit({ auth: this.gh_token });
    return octokit.request('GET /orgs/poapper/public_members');
  }

  @Get('repo')
  getGithubRepositories() {
    const octokit = new Octokit({ auth: this.gh_token });
    return octokit.request('GET /orgs/poapper/repos');
  }

  @Get('event')
  getGithubEvent() {
    const octokit = new Octokit({ auth: this.gh_token });
    return octokit.request('GET /orgs/poapper/events?per_page=10');
  }
}
