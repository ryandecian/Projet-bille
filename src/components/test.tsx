import React from "react";

interface MyProps {
    title: string,
    age: number,
}

const Test: React.FC<MyProps> = function (Props) {
    const {title, age} = Props
    return (
        <div>
            <h1>{title}</h1>
            <p>{age}</p>
        </div>
    )
}

export default Test;