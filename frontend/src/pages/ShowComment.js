import React from 'react'

const ShowComment = ({ allcomment }) => {
    console.log(allcomment.length);
    if (allcomment.length === 0) {
        return (
            <>
                <div className="container">No Coments</div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="container">
                    {allcomment.map((comment, index) => (
                        <div className="my-4" key={index}>
                            <p className="p-2 bg-primary d-inline text-white">{comment.comment}</p>
                        </div>
                    ))}
                </div>

            </>

        )
    }
}
export default ShowComment
