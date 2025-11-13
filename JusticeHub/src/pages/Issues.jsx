import PageLayout from '../components/PageLayout';
import { Card, CardContent } from '../components/ui/card';
import { Progress } from '../components/ui/progress';

const issues = [
  {
    title: 'Racial Equality',
    desc: 'Working to eliminate systemic racism and promote equity for all racial and ethnic groups.',
    img: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    percent: 65,
    raised: 32500,
    goal: 50000,
  },
  {
    title: 'Gender Equity',
    desc: 'Advocating for equal rights, opportunities, and treatment regardless of gender identity.',
    img: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    percent: 80,
    raised: 40000,
    goal: 50000,
  },
  {
    title: 'Climate Justice',
    desc: 'Addressing the disproportionate impact of climate change on marginalized communities.',
    img: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    percent: 45,
    raised: 22500,
    goal: 50000,
  },
  {
    title: 'Economic Fairness',
    desc: "Fighting for fair wages, workers' rights, and economic opportunities for all.",
    img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    percent: 70,
    raised: 35000,
    goal: 50000,
  },
];

export default function Issues() {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold text-[#2a4d69] mb-8 text-center">Featured Causes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {issues.map((issue, i) => (
          <Card key={i} className="overflow-hidden shadow-md hover:shadow-lg transition-transform">
            <div className="h-40 bg-cover bg-center" style={{backgroundImage: `url('${issue.img}')`}} />
            <CardContent className="p-5">
              <h3 className="font-bold text-lg text-[#2a4d69] mb-2">{issue.title}</h3>
              <p className="text-sm text-[#666] mb-4">{issue.desc}</p>
              <Progress value={issue.percent} className="mb-2 h-2 bg-gray-200" />
              <div className="flex justify-between text-xs text-[#666]">
                <span>{issue.percent}% funded</span>
                <span>${issue.raised.toLocaleString()} / ${issue.goal.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}