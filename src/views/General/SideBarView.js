import React from "react";

const SideBarView = ({posts, goToBlog, goToBlogPost}) => {

    const postItem = (post, index) => {
        return (
         <>
             <button name={index} className="blog-btn clickable-component rounded border-0 mt-3" onClick={() => goToBlogPost(index)}>
             <p className="fw-bold mt-1">{post.title}</p>
             <p>{post.subtitle}</p>
             </button>
         </>
        )
    }

    return (
        <div className="sticky-top p-3">
            <h4 className="clickable-component" onClick={goToBlog}>Knižné novinky a recenzie:</h4>
            <>
                {posts.map((post, index) => (postItem(post, index)))}
            </>
        </div>
    )
}

export default SideBarView