'use client'

import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ARTICLES } from '../graphql/queries/articleQueries'
import { GET_SUBSCRIBERS } from '../graphql/queries/subscriberQueries'
import Link from 'next/link'

export default function Blogs_Subs() {
    const [blogs, setBlogs] = useState(0)
    const [subs, setSubs] = useState(0)

    const { data: articlesData, loading: articlesLoading, error: articlesError } = useQuery(GET_ARTICLES)
    const { data: subscribersData, loading: subscribersLoading, error: subscribersError } = useQuery(GET_SUBSCRIBERS)

    useEffect(() => {
        if (articlesData) {
            setBlogs(articlesData.articles.length)
        }

        if (subscribersData) {
            setSubs(subscribersData.subscribers.length)
        }
    }, [articlesData, subscribersData])

  return (
    <div className='w-full flex justify-center flex-wrap gap-8' >
        <Link href='/blog' className='flex-1' title='blog'>
            <div className="min-w-72  h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                <div className="text-6xl text-[#489b42] font-bold">{blogs}</div>
                <div className="text-2xl text-gray-600 text-center font-light">Blogs Written</div>
            </div>
        </Link>
        <Link href='/newsletter' className='flex-1' title='newsletter'>
            <div className="min-w-72  h-40 p-5 rounded-xl bg-white gap-3 hover:shadow-xl flex flex-col items-center justify-center">
                <div className="text-6xl text-[#489b42] font-bold">{subs}</div>
                <div className="text-2xl text-gray-600 text-center font-light">NewsLetter Subscribers</div>
            </div>
        </Link>
    </div>
  )
}
