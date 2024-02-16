import { useCallback, useEffect, useRef, useState } from "react";

export default function InfiniteScroll(props) {

    const {query, listData, getData, renderListItem} = props;
    const pageNumber = useRef(1);
    const [loading, setLoading] = useState(false);
    const observer = useRef(null);
    const lastObserver = useCallback((node)=> {
        if(loading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                pageNumber.current += 1;
                fetchData()
            }
        })

        if(node) observer.current.observe(node)
    })

   const renderList =()=>{
       
        return listData.map((item, index)=>{
            if(index==listData.length-1) {
                return renderListItem(item, index, lastObserver)
            }
            return renderListItem(item, index, null)
        })
    }

    const fetchData = useCallback(()=>{
        setLoading(true);
        getData(query, pageNumber.current).finally(()=> setLoading(false))
    }, [query])

    useEffect(()=>{
        fetchData()
    }, [fetchData])


    return (
        <>
            {renderList()}
            {loading && "Loading..."}
        </>
    )
}