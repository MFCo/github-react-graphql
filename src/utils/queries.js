export function initialQuery() {
  return (
    `{
    viewer {
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
};

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