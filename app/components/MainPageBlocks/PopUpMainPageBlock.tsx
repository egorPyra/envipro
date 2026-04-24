'use client'
import { Dispatch, SetStateAction } from 'react'
import styles from './mainPageBlocks.module.css'
import { Content, content } from './PopUpContent';

interface IPopUpProps {
    close: Dispatch<SetStateAction<{
        show: boolean;
        contentName?: Content;
    }>>,
    contentName?: Content,
}

export default function PopUpMainPageBlock({ close, contentName }: IPopUpProps) {

    return (
        <div className={styles.popupOverlay} onClick={() => close({show: false})}>
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                <span className={styles.closeButton} onClick={() => close({show: false})}>&times;</span>
                <h2 dangerouslySetInnerHTML={{__html: content[contentName ?? 'ecoMonitoring'].title}} />
                <p dangerouslySetInnerHTML={{__html: content[contentName ?? 'ecoMonitoring'].body}} />
            </div>
        </div>
    )
}