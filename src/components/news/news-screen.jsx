"use client"

import { useState } from 'react'
import { NewsList } from './news-list'
import { ArticleView } from './article-view'

export function NewsScreen() {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  if (selectedArticle) {
    return (
      <ArticleView 
        articleId={selectedArticle}
        onBack={() => setSelectedArticle(null)}
        onHashtagClick={(tag) => {
          setSearchQuery(tag)
          setSelectedArticle(null)
        }}
      />
    )
  }

  return (
    <NewsList 
      searchQuery={searchQuery}
      onSelectArticle={setSelectedArticle}
      onHashtagClick={setSearchQuery}
    />
  )
}
