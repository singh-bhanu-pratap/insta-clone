import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";
import React, { useState } from "react";

function Timeline() { 
  const [posts, setposts] =useState([
    {
      user: "pilot_",
      postImage: "https://images7.alphacoders.com/131/thumbbig-1319066.webp",
      likes: 56,
      timestamp: "1d",
    },
    {
      user: "mukulzz",
      postImage: "https://w0.peakpx.com/wallpaper/118/14/HD-wallpaper-anime-attack-on-titan-eren-yeager.jpg",
      likes: 79,
      timestamp: "2d",
    },
    {
      user: "raaj",
      postImage: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      likes: 65,
      timestamp: "12h",
    },
    {
      user: "amitballer",
      postImage: "https://imgs.search.brave.com/lYgrH3jqRBTTg0YiselFsKy8IPovzRsSSIxk6ysA8jk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci80My85/MjAvSEQtd2FsbHBh/cGVyLW1hbi1raWNr/aW5nLXNvY2Nlci1i/YWxsLW9uLWZpZWxk/LmpwZw",
      likes: 146,
      timestamp: "30min",
    },
    {
      user: "prince",
      postImage: "https://img.mensxp.com/media/content/2020/Sep/6_5f6b17229d4cc.jpeg",
      likes: 132,
      timestamp: "2d",
    },
    {
      user: "gill_uu",
      postImage: "https://imgs.search.brave.com/VgzN6UXaSXTI-3nvodrq4lpW8F6ixllT0SGY5CVprFA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8yNTIv/Mzc4L0hELXdhbGxw/YXBlci1rZWRhcm5h/dGgtbWFuZGlyLXRl/bXBsZS1iaG9sZS5q/cGc",
      likes: 156,
      timestamp: "3d",
    },
    {
      user: "avinav",
      postImage: "https://imgs.search.brave.com/Kcm8tJ1RlT9p7gPj3E4gKFyUxgihnAnHdFsxmcQV9iM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTAz/NDE2ODYyL3Bob3Rv/L21hbi1yZWFkeS10/by1leGVyY2lzZS13/aXRoLWtldHRsZS1i/ZWxsLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1MT1A3VlpV/cTEtQTdDdDRrTWt4/WHA4VVY1aFVhaGV0/Q2xpd2VmOXRpUW9J/PQ",
      likes: 122,
      timestamp: "4d",
    },
    
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
         {posts.map(post =>(
          <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp} />
         ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
  }

export default Timeline;
