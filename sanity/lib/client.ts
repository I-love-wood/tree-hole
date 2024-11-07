import { createClient } from 'next-sanity' //next-sanity 创建一个与 Sanity.io 通信的客户端。Sanity.io 是一个基于云的内容管理系统（CMS）

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
