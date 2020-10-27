import { gql } from '@apollo/client'

export const GET = {
  COMPANIES: gql`
    {
      companies {
        slug
        name
        websiteUrl
        logoUrl
        twitter
        jobs {
          slug
          title
          cities {
            name
            country {
              name
              isoCode
            }
          }
          remotes {
            slug
          }
          commitment {
            title
          }
        }
      }
    }
  `,
  JOB: (companySlug, jobSlug) => gql`
    {
      job(input: { 
        companySlug: "${companySlug}", 
        jobSlug: "${jobSlug}" 
      }) {
        id
        slug
        company {
          slug
          name
          logoUrl
        }
        title
        description
        cities {
          name
          country {
            name
            isoCode
          }
        }
        remotes {
          name
        }
        commitment {
          title
        }
        tags {
          name
        }
        applyUrl
        userEmail
      }
    }
  `
}
