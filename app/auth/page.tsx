import dynamic from 'next/dynamic';
const HankoAuth = dynamic(() => import('@/hanko'), { ssr: false })

export default function Page() {
    return<>
        <h1>Hello Auth</h1>
       <HankoAuth />
    </>
}