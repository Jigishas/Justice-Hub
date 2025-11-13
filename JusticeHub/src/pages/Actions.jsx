import PageLayout from '../components/PageLayout';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { FaPenFancy, FaHands, FaDonate, FaMicrophone } from 'react-icons/fa';

const actions = [
  {
    icon: <FaPenFancy className="text-3xl text-[#4b86b4] mb-4 mx-auto" />, title: 'Sign Petitions', desc: 'Add your voice to campaigns calling for change on important issues.', btn: 'Sign Petitions', link: 'https://www.amnestykenya.org/'
  },
  {
    icon: <FaHands className="text-3xl text-[#4b86b4] mb-4 mx-auto" />, title: 'Volunteer', desc: 'Find local and virtual opportunities to support justice organizations.', btn: 'Find Opportunities', link: 'https://www.amnestykenya.org/'
  },
  {
    icon: <FaDonate className="text-3xl text-[#4b86b4] mb-4 mx-auto" />, title: 'Donate', desc: 'Support organizations working on the frontlines of social justice.', btn: 'Donate Now', link: 'https://support.eji.org/give/153413/#!/donation/checkout'
  },
  {
    icon: <FaMicrophone className="text-3xl text-[#4b86b4] mb-4 mx-auto" />, title: 'Amplify Voices', desc: 'Share stories and resources to raise awareness in your community.', btn: 'Share Content', link: 'https://www.change.org/'
  },
];

export default function Actions() {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold text-[#2a4d69] mb-8 text-center">Take Action</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((action, i) => (
          <Card key={i} className="text-center p-8 flex flex-col items-center shadow-md hover:shadow-lg transition-transform">
            {action.icon}
            <h3 className="font-bold text-lg text-[#2a4d69] mb-2">{action.title}</h3>
            <p className="text-sm text-[#666] mb-4">{action.desc}</p>
            <Button onClick={() => window.open(action.link, '_blank')} className="bg-[#e74c3c] hover:bg-[#c0392b] text-white mt-auto">{action.btn}</Button>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}