import React from 'react'
import "../../css/myQueue.css"

const trash = "https://www.flaticon.com/svg/static/icons/svg/753/753345.svg"

export default function QueueItems (props) {
    const items = props.items
    const listItems = items.map((item) => {
        return <div className="queueList" key={item.key}>
            <p>
                {/* <input
                    type="text"
                    id={item.key}
                    value={item}
                    onChange={(e) => props.setUpdate(e.target.value, item.key)}
                /> */}
                {item}
                <img
                    onClick={() => props.deleteItem(item)}
                    src={trash}
                    alt=""/>
            </p>
        </div>
    })
    return (
        <div>{listItems}</div>
    )
}