import { ThemeContext } from '@emotion/react';
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { randomId } from '~/utils/randomId';

export const AddressContext = createContext();

export default function AddressProvider({ children }) {
    const [addressTemp, setAddressTemp] = useState([]);

    console.log(addressTemp);

    const addProvince = () => {
        setAddressTemp((prev) => {
            return [
                ...prev,
                {
                    id: randomId(),
                    province: '',
                    items: [
                        {
                            id: randomId(),
                            district: '',
                            ward: '',
                            detail: '',
                        },
                    ],
                },
            ];
        });
    };

    if (addressTemp.length < 1) addProvince();

    return (
        <AddressContext.Provider
            value={{
                addressTemp,
                setAddressTemp,
                addProvince,
            }}
        >
            {children}
        </AddressContext.Provider>
    );
}
