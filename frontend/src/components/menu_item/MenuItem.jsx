import React from 'react'

function MenuItem({ icon, caption, url }) {
    const styles = {
        div: "rounded-t-3xl bg-red-500 text-white sm:mx-1 sm:p-2 md:mx-3 md:py-3 md:px-5 lg:mx-2 lg:p-3",
        a: "flex justify-center items-center sm:flex-col md:flex-col lg:flex-row",
        icon: "sm:text-4xl md:text-4xl lg:text-6xl",
        caption: "sm:text-xss md:text-xss lg:text-xl"
    }

    return (
        <div className={styles.div}>
            <a href={url} className={styles.a}>
                <span className={styles.icon}>{icon}</span>
                <span className={styles.caption}>{caption}</span>
            </a>
        </div>
    )
}

export default MenuItem;