import React from "react";
import  {Image}  from "react-konva";
import useImage from 'use-image';

const url = 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

function Task() {
    const [image] = useImage(url);

    return (
        <Image image={image}
        x={image.x}
        y={image.y}
        offsetX={image ? image.width / 2 : 0}
        offsetY={image ? image.height / 2 : 0}
        />
    );
    
}


export default Task;