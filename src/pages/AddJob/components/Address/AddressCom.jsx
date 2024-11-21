import AreaItem from './AreaItem';
import useAddress from '../../../../hooks/useAddress';
import { useEffect } from 'react';

export default function AddressCom({ onChange }) {
    const { addressTemp, addProvince } = useAddress();

    useEffect(() => {
        // const temp = addressTemp.map((item) => {
        //     item.items.map((subItem) => `${subItem.detail};${subItem.ward}`);
        // });
        console.log('addressTemp: ', addressTemp);
        const temp = addressTemp.flatMap((item) =>
            item.items.map((subItem) => `${subItem.detail};${subItem.ward}`),
        );

        console.log('Temp', temp);
        onChange?.(temp);
    }, [addressTemp]);

    return (
        <div className="item-center">
            <div>
                {addressTemp.map((item) => (
                    <AreaItem key={item.id} province={item} />
                ))}
            </div>
            <button type="button" onClick={addProvince}>
                Thêm khu vực mới
            </button>
        </div>
    );
}
