export function initialQuery() {
  return (
    `{
    viewer {
      login
    }
  }`)
};

export function repositoryFirstLayer(user, repo) {
  return (
    `{
      repository(owner:"${user}" name: "${repo}") {
      name,
      description,
      homepageUrl,
      object(expression: "master:") {
        ... on Tree{
          entries{
            name
            type
            oid
          }
        }
        }
      }
    }`)
};

export function nextRepositoryPage(user, endPage) {
  return (
    `{
      user(login:"${user}") {
        repositories(first: 6, after: ${endPage}) {
          pageInfo {
            hasNextPage
            endCursor
            startCursor
          }
          edges {
            node {
              name
              description
              forkCount
              primaryLanguage {
                color
                name
              }
              homepageUrl
            }
          }
        }
      }
    }`)
}

export function searchQuery(user) {
  return (
    `{
      user(login:"${user}") {
        name,
        login,
        avatarUrl,
        name,
        bio,
        company,
        email,
        location,
        websiteUrl,
        repositories(first: 6) {
          pageInfo {
            hasNextPage
            endCursor
            startCursor
          }
          edges {
            node {
              name
              description
              forkCount
              primaryLanguage {
                color
                name
              }
              homepageUrl
            }
          }
        }
      }
    }`)
}