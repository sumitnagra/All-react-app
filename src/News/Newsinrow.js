import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import Navbar from './NewsNavbar';
import LoadingBar from 'react-top-loading-bar';

const GroupNews = (props) => {
    const [loading, setLoading] = useState(false)
    const pageSize = 10;
    const [page,setPage]=useState(1)
    const [Articles, setArticles] = useState([])
    const [progress,setProgress]=useState(0)

    const Update = async () => {
        setProgress(50)
        setLoading(true)
        const news = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.catagory}&apiKey=f09658a908f741b0bec7e726f0c4f8c2&pagesize=${pageSize}&page=${page}`).then(res => res.json())
            .then(data => setArticles(data.articles));
            setProgress(100)
        setLoading(false)
    }
    useEffect(() => {
        Update()
    }, [props.catagory])

  const  fetchMoreData=async()=>{
     setPage(page+1)
   const news =  await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.catagory}&apiKey=f09658a908f741b0bec7e726f0c4f8c2&pagesize=${pageSize}&page=${page}`).then(res => res.json()).then(data=>setArticles(Articles.concat(data.articles)))
  }
    return (
        <>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
            <div className='container my-5 '>
                <h3 className='my-2' style={{ padding: "10px" }}><span style={{ color: "red", fontSize: "35px" }}>NDTV</span> -Top Headline</h3>

                <InfiniteScroll
                    dataLength={Articles.length}
                    next={fetchMoreData}
                    hasMore={Articles.length!==100}
                    loader={<Loading />}
                >
                    <div className='row container'>
                        {
                            Articles.map((element) =>
                                <div className='col-md-4' key={element.url} >
                                    {!loading &&
                                        <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} Url={element.url} source={element.source.name} Date={element.publishedAt} />
                                    }
                                </div>
                            )
                        }
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}
export default GroupNews;