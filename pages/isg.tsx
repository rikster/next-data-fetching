// incremental static generation
import { GetStaticProps, NextPage } from 'next';
const YOUR_API_URL = 'https://5d89d8a5b2568e0014d87f6a.mockapi.io/api/v1/users';

interface DataType {
    id: string;
    name: string;
}

interface IncrementalStaticRegenerationProps {
    data: DataType[];
}

const IncrementalStaticRegeneration: NextPage<IncrementalStaticRegenerationProps> = ({ data }) => {
    return (
        <>
            {data.map((e) => (
                <h2 key={e.id}>{e.name}</h2>
            ))}
        </>
    );
};

export default IncrementalStaticRegeneration;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export const getStaticProps: GetStaticProps<IncrementalStaticRegenerationProps> = async () => {
    const res = await fetch(YOUR_API_URL);
    const data: DataType[] = await res.json();

    return {
        props: {
            data, // will be passed to the page component as props
        },

        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
        revalidate: 100, // In seconds
    };
};
