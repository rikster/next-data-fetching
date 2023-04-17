// static site generation
import { GetStaticProps, NextPage } from 'next';
const YOUR_API_URL = 'https://5d89d8a5b2568e0014d87f6a.mockapi.io/api/v1/users';

interface DataType {
    id: string;
    name: string;
}

interface StaticSiteGenerationProps {
    data: DataType[];
}

const StaticSiteGeneration: NextPage<StaticSiteGenerationProps> = ({ data }) => {
    return (
        <>
            {data.map((e) => (
                <h2 key={e.id}>{e.name}</h2>
            ))}
        </>
    );
};

export default StaticSiteGeneration;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps<StaticSiteGenerationProps> = async () => {
    const res = await fetch(YOUR_API_URL);
    const data: DataType[] = await res.json();

    return {
        props: {
            data, // will be passed to the page component as props
        },
    };
};
