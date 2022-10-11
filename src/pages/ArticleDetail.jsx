import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function ArticleDetail () {
  const [article, setArticle] = useState({});
  const { articleId } = useParams();
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}api/react/article/${articleId}`)
      .then((response) => {
        setArticle(response.data.article);
      });
  }, [articleId])

  function handleChange(event) {
    const { id, value } = event.target;
    setArticle({
      ...article,
      [id]: value
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="card-title">{article.content}</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">文章名稱</label>
                  <input type="text" className="form-control" id="title" value={article.title} onChange={handleChange} />
               </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">文章作者</label>
                  <input type="text" className="form-control" id="author" value={article.author} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">文章描述</label>
                  <textarea className="form-control" id="description" value={article.description} onChange={handleChange} />
                </div>
                <div className="row gx-1 mb-3">
                  <div className="col-md-2 mb-1">
                    <div className="input-group input-group-sm">
                      <input type="text" className="form-control form-control" id="tag" placeholder="請輸入標籤" value={article.tag} onChange={handleChange} />
                      <button type="button" className="btn btn-outline-danger">x</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="card-title">文章圖片</h5>
            </div>
            <div className="card-body">
            <img src={article.image} className="image-fluid rounded mb-3" alt={article.title} />
            <label className="d-block" htmlFor="image">文章圖片連結</label>
            <input type="text" className="form-control" value={article.image} id="image" onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail;