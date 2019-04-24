import React from 'react';
import style from './NotFound.module.css'
import ImageNotFound from '../../assets/PageNotFound.png'
function NotFound() {
    return (

        <div className={style.text}>
            <br /><br />
            <img src={ImageNotFound} alt="ImageNotFound"
                 width={400}
                 height={400}
            />
            <br />
            <h1>Not found page</h1>
        </div>

            );
}

export default NotFound;
