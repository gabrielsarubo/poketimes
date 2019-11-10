import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    // initially it is empty and will be filled with data
    // so we can cycle through inside the template and output it
    posts: [ ]
  }
  
  componentDidMount() {
    // this below is asyincronous, ie it takes some time to go and do! it is not automatic
    // we dont know when this is done so we can use the posts
    // .then() fires once .get() is completed
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
        this.setState({
          // dont get all the 100 elements, only the first 10
          posts: res.data.slice(0,10)
        })
      })
  }
  
  render() {
    // simply get the posts property from the state
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        // return a snippet of JSX for each individual post
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )
    
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}        
      </div>
    )
  }
}

export default Home;