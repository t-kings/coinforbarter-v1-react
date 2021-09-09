Hello! Thank you for choosing to help contribute to one of the CoinForBarter v1 React SDK open source libraries. There are many ways you can contribute and help is always welcome. We simply ask that you follow the following contribution policies.

All third party contributors acknowledge that any contributions they provide will be made under the same open source license that the open source project is provided under.

- [Feature Request](#feature-request)
- [Submit a Bug Report](#submit-a-bug-report)
- [Improvements to the Codebase](#improvements-to-the-codebase)
      - [Prerequisites](#prerequisites)
      - [Initial setup:](#initial-setup)
      - [Execute](#execute)
- [Style Guidelines & Naming Conventions](#style-guidelines--naming-conventions)
- [Creating a Pull Request](#creating-a-pull-request)
- [Code Reviews](#code-reviews)



There are a few ways to contribute, which we'll enumerate below:

## Feature Request

If you'd like to make a feature request, please read this section.

The GitHub issue tracker is the preferred channel for library feature requests, but please respect the following restrictions:

- Please **search for existing issues** in order to ensure we don't have duplicate bugs/feature requests.
- Please be respectful and considerate of others when commenting on issues

## Submit a Bug Report

Note: DO NOT include your credentials in ANY code examples, descriptions, or media you make public.

A software bug is a demonstrable issue in the code base. In order for us to diagnose the issue and respond as quickly as possible, please add as much detail as possible into your bug report.

Before you decide to create a new issue, please try the following:

1. Check the Github issues tab if the identified issue has already been reported, if so, please add a +1 to the existing post.
2. Update to the latest version of this code and check if issue has already been fixed


## Improvements to the Codebase

We welcome direct contributions to the coinforbarter-v1-react code base. Thank you!


##### Prerequisites #####

- Node >=14.x

##### Initial setup: 

```bash
git clone https://github.com/t-kings/coinforbarter-v1-react.git
npm install

# or 
yarn
```




##### Execute

See the [example](https://github.com/t-kings/coinforbarter-v1-react/tree/main/example) to get started quickly.




## Style Guidelines & Naming Conventions

Generally, we follow the style guidelines as suggested by the official language. However, we ask that you conform to the styles that already exist in the library. If you wish to deviate, please explain your reasoning.

## Creating a Pull Request

1. [Fork](https://help.github.com/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/t-kings/coinforbarter-v1-react
  
   
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/t-kings/coinforbarter-v1-react
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout <dev-branch>
   git pull upstream <dev-branch>
   ```

3. Create a new topic branch off the `development` branch to
   contain your feature, change, or fix:

   ```bash
   git checkout development
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely be merged into the main project. Use Git's
   [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.


5. Create or update the example code that demonstrates the functionality of this change to the code.

6. Locally merge (or rebase) the upstream `development` branch into your topic branch:

   ```bash
   git pull [--rebase] upstream development
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
	with a clear title and description against the `development` branch. 

If you have any additional questions, please feel free to [email](mailto:tochukwu@coinforbarter.com) us or create an issue in this repo.

## Code Reviews

If you can, please look at open PRs and review them. Give feedback and help us merge these PRs much faster! If you don't know how, Github has some [great information on how to review a Pull Request](https://help.github.com/articles/about-pull-request-reviews/).
