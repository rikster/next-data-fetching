// client side rendered
import { useEffect, useState, FC } from 'react';
const YOUR_API_URL = 'https://5d89d8a5b2568e0014d87f6a.mockapi.io/api/v1/users';

interface DataType {
    id: string;
    name: string;
}

const ClientSideRendered: FC = () => {
    const [state, setState] = useState<DataType[]>([]);

    async function getData() {
        const res = await fetch(YOUR_API_URL);
        const data: DataType[] = await res.json();
        setState(data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {state.map((e) => (
                <h2 key={e.id}>{e.name}</h2>
            ))}
        </>
    );
};

export default ClientSideRendered;
