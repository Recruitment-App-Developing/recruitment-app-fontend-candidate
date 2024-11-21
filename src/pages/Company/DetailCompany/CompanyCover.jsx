import clsx from 'clsx';
import styles from './detail-company.module.scss';
import WhiteButton from '~/components/Button/WhiteButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuilding,
    faGlobe,
    faPlus,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { GrayBox } from '~/components/Box';

export default function CompanyCover({ data }) {
    return (
        <div className={clsx(styles['cover-inner'])}>
            <div className="h-56 overflow-hidden">
                <img
                    className="h-full w-full object-cover object-center"
                    src={data?.logo?.imageUrl}
                    alt=""
                />
            </div>
            <div className="relative">
                <div
                    className="flex-center absolute left-10 top-[-90px] h-44 w-44 overflow-hidden
                        rounded-[99px] border-[4.5px] border-solid border-white bg-white"
                >
                    <img
                        className="h-[80%] w-[80%] object-contain"
                        src={data?.logo?.imageUrl}
                        alt=""
                    />
                </div>
            </div>
            <div className="flex-between relative my-8 pl-64 pr-10">
                <div className="block flex-1">
                    <h1 className="medium-2xl mb-4 text-white">{data?.name}</h1>
                    <div className="flex gap-5">
                        <GrayBox
                            iconLeft={<FontAwesomeIcon icon={faGlobe} />}
                            content={data.urlCom}
                            className="bg-none p-0"
                            classIcon="text-white mr-4"
                            classContent="text-white"
                        />
                        <GrayBox
                            iconLeft={<FontAwesomeIcon icon={faBuilding} />}
                            content={data?.numberOfFollow}
                            className="bg-none p-0"
                            classIcon="text-white mr-4"
                            classContent="text-white"
                        />
                        <GrayBox
                            iconLeft={<FontAwesomeIcon icon={faUsers} />}
                            content={data?.urlCom}
                            className="bg-none p-0"
                            classIcon="text-white mr-4"
                            classContent="text-white"
                        />
                    </div>
                </div>
                <div>
                    <WhiteButton
                        className="h-12 w-48"
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                        content="Theo dõi công ty"
                    />
                </div>
            </div>
        </div>
    );
}
