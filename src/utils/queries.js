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
      description,
      homepageUrl,
      viewerHasStarred,
      viewerSubscription,
      id,
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

export function repositoryNextLayer(user, repo, id) {
  return (
    `{
      repository(owner:"${user}" name: "${repo}") {
      object(oid: "${id}") {
        ... on Tree{
          entries{
            name
            type
            oid
          }
        }
      }
      }
    }`);
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
              owner {
                login
              }
              name,
              description,
              viewerHasStarred,
              viewerSubscription,
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
              owner {
                login
              }
              name
              description
              viewerHasStarred,
              viewerSubscription,
              primaryLanguage {
                color
                name
              }
            }
          }
        }
      }
    }`)
}

export function addStar(repo) {
  return (
    `
  mutation{
    addStar(input:{starrableId:"${repo}"}){
      clientMutationId
    } 
    }
  `
  )
}

export function removeStar(repo) {
  return (
    `
  mutation{
    removeStar(input:{starrableId:"${repo}"}){
      clientMutationId
    } 
    }
  `
  )
}

export function updateWatch(repo, state) {
  return (
    `
  mutation{
    updateSubscription(input:{subscribableId:"${repo}", state: ${state}}){
      clientMutationId
    } 
    }
  `
  )
}