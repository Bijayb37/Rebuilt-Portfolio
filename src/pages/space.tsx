import axios from "axios"
import React, { useEffect, useState } from "react"

export default function space() {
  const headers = {
    "content-type": "application/json",
  }

  const dumbQuery = {
    operationName: "spaceX",
    variables: {},
    query: `
    query fetchLaunch { 
      launches(limit: 1) { 
        id
      }
    }
    `,
  }

  async function AxiosFetch() {
    const response = await axios({
      url: "https://api.spacexdata.com",
      method: "post",
      headers: headers,
      data: dumbQuery,
    })
    return response
  }
  AxiosFetch().then(res => console.log(res))

  // const {
  //   isLoading,
  //   error,
  //   data: firstData,
  //   isFetching,
  // } = useQuery(["repoData"], () => AxiosFetch())
  // console.log(firstData)

  return <div>BASIC LOADING DIV</div>
}
