import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className="banner">
            <img src={imageUrl} alt="aboutImg" />
        </div>
        <div className="banner">
            <p>Biography</p>
            <h3>Who We Are</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!
            </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt optio cumque porro minus corporis, facere nam maxime reiciendis dolorem distinctio corrupti vel nesciunt ratione? Praesentium culpa accusantium harum sed?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quos, neque, ducimus eligendi aliquid est accusamus et veritatis, nisi reprehenderit quis culpa? Dolores eveniet voluptate aliquam molestias, laborum culpa tempora.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe iste itaque recusandae quae repellendus error eos quia a illum deserunt, explicabo temporibus ducimus laboriosam quibusdam quos. Blanditiis neque fuga quisquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore in cum voluptatum amet nam, ullam similique eos enim ipsa omnis quasi iste commodi tempore, voluptatibus laboriosam eaque facilis totam.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat voluptate explicabo provident. In velit, quos ullam unde, facere quae facilis accusantium mollitia eaque molestias, quibusdam doloribus eligendi illo dolorem nemo?</p>
        </div>

    </div>
  )
}

export default Biography