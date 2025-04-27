import { blogContents } from '@/types'
import React from 'react'

interface blogPageProps{
    blogContents : blogContents
}

const BlogPage = ({blogContents}:blogPageProps) => {
  return (
    <div>{blogContents.tag}</div>
  )
}

export default BlogPage