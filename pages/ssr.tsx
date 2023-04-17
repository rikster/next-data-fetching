// server side rendering
import { GetServerSideProps, NextPage } from 'next';
const YOUR_API_URL = 'https://5d89d8a5b2568e0014d87f6a.mockapi.io/api/v1/users';

interface DataType {
    id: string;
    name: string;
}

interface ServerSideRenderedProps {
    data: DataType[];
}

const ServerSideRendered: NextPage<ServerSideRenderedProps> = ({ data }) => {
    return (
        <>
            {data.map((e) => (
                <h2 key={e.id}>{e.name}</h2>
            ))}
        </>
    );
};

export default ServerSideRendered;

export const getServerSideProps: GetServerSideProps<ServerSideRenderedProps> = async () => {
    const res = await fetch(YOUR_API_URL);
    const data: DataType[] = await res.json();

    return {
        props: {
            data, // will be passed to the page component as props
        },
    };
};
