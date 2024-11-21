import styles from './detail-company.module.scss';

export default function CompanyIntro({ content }) {
    return (
        <section className={styles['box-infor']}>
            <h2 className={styles.title}>Giới thiệu công ty</h2>
            <div className="px-5 pb-7 pt-5">
                <div
                    className="transition-height relative overflow-hidden duration-200 ease-in-out"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </section>
    );
}
