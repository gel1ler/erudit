import type { Metadata } from 'next'
import PageLayout from '@/components/pages/ECenter/pageLayout'

export const metadata: Metadata = {
    title: 'Эрудит Центр - Эрудит для взрослых',
    description: 'Детский центр "Маленький Эрудит" - это свой маленький мир для каждого ребенка, где его искренне любят, уважают и всегда ждут!',
}

export default function Home() {
    return (
        <PageLayout id={0}>
            {""}
        </PageLayout>
    )
}
