import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Component.module.scss'
import Link from 'next/link'

interface btn {
    fontSize: string,
    width: number,
    height: number
}

function ExploreBtn(props:btn) {

    const {fontSize, width, height} = props
    

    return (
        <Link href={'/explore'}>
            <button className={styles.explore_btn} style={{fontSize: fontSize}} >
                <Image
                    src="/compass.png"
                    alt="rankboost logo"
                    width={width}
                    height={height}
                />
                Explore
            </button>
        </Link>
    )
}

export default ExploreBtn