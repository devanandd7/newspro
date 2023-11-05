import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { title, description, ImageUrl ,readMoreUrl,author ,date} = this.props;//this is de-Structureing
        return (
            <div className='container'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={ImageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={readMoreUrl} target='_blank' className="btn sm btn-primary">read more</a>
                        <p class="card-text"><small class="text-muted">{!author? "Unknown":author} <br /> {new Date(date).toGMTString()}</small></p>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems