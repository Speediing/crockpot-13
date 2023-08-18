import { createClient } from 'next-sanity'
import { draftMode } from "next/headers";
import { QueryParams } from "sanity";
export const token = process.env.SANITY_API_READ_TOKEN
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]


const client = createClient({
  projectId,
  dataset,

  useCdn: false,
})






export async function sanityFetch<QueryResponse>({
    query,
    params = DEFAULT_PARAMS,
    tags = DEFAULT_TAGS,
  }: {
    query: string
    params?: QueryParams
    tags: string[]
  }): Promise<QueryResponse> {
    const isDraftMode = draftMode().isEnabled
    if (isDraftMode && !token) {
      throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.')
    }
  
    return client.fetch<QueryResponse>(query, params, {
      cache: 'force-cache',
      ...(isDraftMode && {
        cache: undefined,
        token: token,
        perspective: 'previewDrafts',
      }),
      next: {
        ...(isDraftMode && {revalidate: 30}),
        tags,
      },
    })
  }
