import PageLayout from '../components/PageLayout';

export default function About() {
  return (
    <PageLayout>
      <div className="min-h-screen flex flex-col">
        <div className="w-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-[#2a4d69] to-[#4b86b4] text-white">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold mb-4">About JusticeHub</h1>
            <p className="text-lg mb-8">
              JusticeHub is a platform dedicated to promoting social justice through education, community engagement, and actionable initiatives.
            </p>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-base mb-4">
                To empower individuals and communities to learn, act, and advocate for justice across all areas of society.
              </p>
              <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
              <p className="text-base">
                A world where equity, dignity, and opportunity are realities for everyone, regardless of background or identity.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#e7eff6]/20 mb-2"></div>
                  <h3 className="font-semibold text-base">Alex Kim</h3>
                  <p className="text-sm opacity-90">Founder & Executive Director</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#e7eff6]/20 mb-2"></div>
                  <h3 className="font-semibold text-base">Maria Lopez</h3>
                  <p className="text-sm opacity-90">Community Engagement Lead</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#e7eff6]/20 mb-2"></div>
                  <h3 className="font-semibold text-base">Joseph Gachuru</h3>
                  <p className="text-sm opacity-90">Education & Outreach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center p-8">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"
            alt="Justice team collaboration"
            className="w-full max-w-md h-auto rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </PageLayout>
  );
}