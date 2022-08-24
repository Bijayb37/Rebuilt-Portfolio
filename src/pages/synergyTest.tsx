import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import React from "react"

export default function tute() {
  const headers = {
    "content-type": "application/json",
    Authorization: "Bearer BFxSCyRFvQdBym6eDRw-eGV2F51UrAN3",
  }

  async function axis() {
    const result = await axios({
      method: "post",
      url: "http://caid-fax.com.au/api",
      headers: headers,
      data: {
        query: `
        query firstQuery {
          entries {
            ... on testingdata_default_Entry {
              boolie
              fullname
              title
              age
              lastvisit
            }
          }
        }
        `,
      },
    })
    return await result.data.data.entries
  }

  const { isLoading, error, data: fullData, isFetching } = useQuery(["repoData"], () =>
    axis()
  )
  if (isLoading) return <div>...Loading</div>
  let data = fullData[0]
  console.log(data)
  return (
    <div>
      <h1>Fullname: {data.fullname}</h1>
      <p>boolean: {data.boolie.toString()}</p>
      <p>Age: {data.age}</p>
    </div>
  )

  return <div>This is basic state</div>
}
