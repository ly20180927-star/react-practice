import React from 'react';
import SonDemo from './SonDemo';


function ParentDemo() {
    const user = {
        name: "Alice",
        age: 25,
        avatar: "https://i.pravatar.cc/150?img=1"
    }

    function handleFollow() {
        console.log("关注用户")
        user.age = user.age + 1;
    }


    return <SonDemo userData={user} onFollow={handleFollow} />;
}

export default ParentDemo;
