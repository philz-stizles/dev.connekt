import React from 'react'

const UserItem = ({user}) => {
    const { login, avatar_url, html_url } = user

    return (
        <div className="card">
            <div class="card-content center-align">
                <div className="row">
                    <div class="col s4 offset-s4">
                        <img src={avatar_url} alt={login} class="circle responsive-img" />
                    </div>
                </div>
                <h5 style={headerStyle}>{login}</h5>
                <button class="waves-effect waves-light btn">More</button>
            </div>
        </div>
    )
}

const headerStyle = {
    margin: '0 0 2rem 0'
}

export default UserItem

