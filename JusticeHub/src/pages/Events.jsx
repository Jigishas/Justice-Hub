import PageLayout from '../components/PageLayout';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { FaMapMarkerAlt } from 'react-icons/fa';

const events = [
  {
    day: '15', month: 'June', title: 'Community Forum on Police Reform', location: 'City Hall, Downtown', desc: 'Join community leaders and policymakers for a discussion on implementing meaningful police reform in our city.'
  },
  {
    day: '22', month: 'June', title: 'Youth Climate Strike', location: 'Central Park', desc: 'Youth-led demonstration demanding urgent action on climate change and environmental justice.'
  },
  {
    day: '30', month: 'June', title: 'Pride Month Celebration', location: 'LGBTQ+ Community Center', desc: 'Annual celebration of LGBTQ+ rights and recognition of the ongoing fight for equality.'
  },
  {
    day: '05', month: 'July', title: 'Voting Rights Workshop', location: 'Public Library - Main Branch', desc: 'Learn about voting rights, voter suppression, and how to protect democracy in your community.'
  },
];

export default function Events() {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold text-[#2a4d69] mb-8 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, i) => (
          <Card key={i} className="overflow-hidden shadow-md hover:shadow-lg transition-transform">
            <div className="bg-[#2a4d69] text-white text-center py-4">
              <div className="text-3xl font-bold">{event.day}</div>
              <div className="uppercase tracking-widest">{event.month}</div>
            </div>
            <CardContent className="p-5">
              <h3 className="font-bold text-lg text-[#2a4d69] mb-2">{event.title}</h3>
              <div className="flex items-center gap-2 text-[#666] text-sm mb-2">
                <FaMapMarkerAlt />
                <span>{event.location}</span>
              </div>
              <p className="text-sm text-[#666] mb-4">{event.desc}</p>
              <Button className="bg-blue-500 hover:bg-[#c0392b] text-white w-full">RSVP</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}