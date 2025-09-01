import { Client } from '@notionhq/client'

export interface NotionProject {
  id: string
  name: string
  description?: string
  url?: string
  tags: string[]
}

const notionToken = process.env.NOTION_TOKEN
const notionDbId = process.env.NOTION_PROJECTS_DB_ID

if (!notionToken) {
  console.warn('[notion] Falta NOTION_TOKEN en variables de entorno')
}

export const notion = new Client({ auth: notionToken })

export async function fetchProjectsFromNotion(): Promise<NotionProject[]> {
  if (!notionDbId || !notionToken) return []
  const response = await notion.databases.query({ database_id: notionDbId })
  return (response.results ?? []).map((page: any) => {
    const props = page.properties || {}
    const name = props.Name?.title?.[0]?.plain_text || 'Sin título'
    const description = props.Description?.rich_text?.[0]?.plain_text
    const url = props.URL?.url
    const tags = (props.Tags?.multi_select || []).map((t: any) => t.name)
    return {
      id: page.id,
      name,
      description,
      url,
      tags,
    }
  })
}
