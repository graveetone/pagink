import React from 'react'
import { NavLink } from 'react-router-dom';

function MenuItem({ icon, caption, url }) {
    const styles = {
        div: "rounded-t-2xl bg-black text-white xs:p-3 sm:px-2 sm:py-3 lg:px-6 lg:py-2 sm:flex-grow hover:text-ruby-red",
        divActive: "rounded-t-2xl bg-black text-ruby-red xs:p-3 sm:px-2 sm:py-3 lg:px-6 lg:py-2 sm:flex-grow",
        a: "flex justify-center items-center flex-col",
        icon: "",
        caption: "sm:text-md lg:text-lg sm:block xs:hidden"
    }

    return (
        <NavLink to={url} className={({ isActive }) =>
            isActive ? styles.divActive: styles.div}>
            <div className={styles.a}>
                <span className={styles.icon}>{icon}</span>
                <span className={styles.caption}>{caption}</span>
            </div>
        </NavLink>
    )
}

export default MenuItem;
