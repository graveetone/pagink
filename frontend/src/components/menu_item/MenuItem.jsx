import React from 'react'

function MenuItem({ icon, caption, url }) {
    const styles = {
        div: "rounded-t-3xl bg-black text-white xs:mx-1 xs:p-2 sm:mx-3 sm:py-3 sm:px-5 lg:mx-2 lg:p-2 lg:px-10",
        a: "flex justify-center items-center xs:flex-col sm:flex-col lg:flex-col",
        icon: "",
        caption: "xs:text-xss sm:text-xss lg:text-xl"
    }

    return (
        <a href={url} className={styles.div}>
            <div className={styles.a}>
                <span className={styles.icon}>{icon}</span>
                <span className={styles.caption}>{caption}</span>
            </div>
        </a>
    )
}

export default MenuItem;
