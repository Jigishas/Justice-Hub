import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './components/ui/button';
import { FaHandsHelping, FaPenFancy, FaHands, FaDonate, FaMicrophone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaBookOpen, FaPlay, FaBook, FaTools, FaSignOutAlt } from 'react-icons/fa';
import { Card, CardContent } from './components/ui/card';
import { Progress } from './components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';
import { useAuth } from './lib/auth-context-utils';

function App() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredActions, setFilteredActions] = useState([]);
  const [filteredCauses, setFilteredCauses] = useState([]);
  const [filteredResources, setFilteredResources] = useState({ articles: [], videos: [], podcasts: [], books: [], toolkits: [] });

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  // Searchable data with indexes
  const actionsData = [
    { index: 0, title: 'Sign Petitions', desc: 'Add your voice to campaigns calling for change on important issues.', category: 'action' },
    { index: 1, title: 'Volunteer', desc: 'Find local and virtual opportunities to support justice organizations.', category: 'action' },
    { index: 2, title: 'Donate', desc: 'Support organizations working on the frontlines of social justice.', category: 'action' },
    { index: 3, title: 'Amplify Voices', desc: 'Share stories and resources to raise awareness in your community.', category: 'action' },
  ];

  const causesData = [
    { index: 0, title: 'Racial Equality', desc: 'Working to eliminate systemic racism and promote equity for all racial and ethnic groups.', category: 'cause' },
    { index: 1, title: 'Gender Equity', desc: 'Advocating for equal rights, opportunities, and treatment regardless of gender identity.', category: 'cause' },
    { index: 2, title: 'Climate Justice', desc: 'Addressing the disproportionate impact of climate change on marginalized communities.', category: 'cause' },
    { index: 3, title: 'Economic Fairness', desc: "Fighting for fair wages, workers' rights, and economic opportunities for all.", category: 'cause' },
  ];

  const resourcesData = {
    articles: [
      { index: 0, title: 'Understanding Systemic Racism', desc: 'A comprehensive guide to how systemic racism operates in various institutions and what we can do to dismantle it.', category: 'article' },
      { index: 1, title: 'The History of Civil Rights', desc: 'Explore the key moments and figures in the American civil rights movement.', category: 'article' },
      { index: 2, title: 'Economic Inequality Explained', desc: 'Understanding the roots and impacts of economic disparities in society.', category: 'article' },
    ],
    videos: [
      { index: 0, title: 'Intersectionality 101', desc: 'Learn how different forms of discrimination intersect and compound to create unique experiences of oppression.', category: 'video' },
      { index: 1, title: 'Climate Justice Stories', desc: 'Real stories from communities affected by climate change and environmental injustice.', category: 'video' },
      { index: 2, title: 'Gender Equity in Action', desc: 'Documentary on the global fight for gender equality and women\'s rights.', category: 'video' },
    ],
    podcasts: [
      { index: 0, title: 'Justice Voices Podcast', desc: 'Hear from activists and experts on the frontlines of social justice movements.', category: 'podcast' },
      { index: 1, title: 'Voices of Change', desc: 'Conversations with leaders driving social change in their communities.', category: 'podcast' },
      { index: 2, title: 'Justice Talk', desc: 'Weekly discussions on current events and social justice topics.', category: 'podcast' },
    ],
    books: [
      { index: 0, title: 'The New Jim Crow', desc: 'A groundbreaking work on mass incarceration and racial justice in America.', category: 'book' },
      { index: 1, title: 'How to Be an Antiracist', desc: 'A guide to recognizing and dismantling racism in our daily lives.', category: 'book' },
      { index: 2, title: 'Caste: The Origins of Our Discontents', desc: 'An exploration of the unspoken caste system that has shaped America.', category: 'book' },
    ],
    toolkits: [
      { index: 0, title: 'Community Organizing Guide', desc: 'Practical steps for effective community organizing and building grassroots movements for change.', category: 'toolkit' },
      { index: 1, title: 'Digital Advocacy Toolkit', desc: 'Tools and strategies for effective online activism and social media campaigns.', category: 'toolkit' },
      { index: 2, title: 'Policy Advocacy Guide', desc: 'How to engage with policymakers and influence legislation for social change.', category: 'toolkit' },
    ],
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredActions([]);
      setFilteredCauses([]);
      setFilteredResources({ articles: [], videos: [], podcasts: [], books: [], toolkits: [] });
      return;
    }

    const query = searchQuery.toLowerCase();

    // Filter actions
    const filteredActionsResult = actionsData.filter(item =>
      item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)
    );
    setFilteredActions(filteredActionsResult);

    // Filter causes
    const filteredCausesResult = causesData.filter(item =>
      item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)
    );
    setFilteredCauses(filteredCausesResult);

    // Filter resources
    const filteredResourcesResult = {
      articles: resourcesData.articles.filter(item =>
        item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)
      ),
      videos: resourcesData.videos.filter(item =>
        item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)
      ),
      podcasts: resourcesData.podcasts.filter(item =>
        item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)
      ),
      books: resourcesData.books.filter(item =>
        item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)
      ),
      toolkits: resourcesData.toolkits.filter(item =>
        item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)
      ),
    };
    setFilteredResources(filteredResourcesResult);
  };


  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#333]">
      {/* Header */}
      <header className="bg-gradient-to-tr from-[#2a4d69] to-[#4b86b4] text-white shadow-md py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaHandsHelping className="text-[#e74c3c]" />
            <span>JusticeHub</span>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-6 font-medium">
              <li><Link to="/#home" className="hover:text-[#e7eff6] transition-colors">Home</Link></li>
              <li><Link to="/issues" className="hover:text-[#e7eff6] transition-colors">Issues</Link></li>
              <li><Link to="/actions" className="hover:text-[#e7eff6] transition-colors">Actions</Link></li>
              <li><Link to="/events" className="hover:text-[#e7eff6] transition-colors">Events</Link></li>
              <li><Link to="/resources" className="hover:text-[#e7eff6] transition-colors">Resources</Link></li>
              <li><Link to="/about" className="hover:text-[#e7eff6] transition-colors">About</Link></li>
            </ul>
          </nav>
          <div className="flex gap-3">
            {user === undefined ? (
              <div className="w-28 h-8 bg-white/10 rounded animate-pulse" />
            ) : user ? (
              <>
                <span className="text-white">Welcome, {user.name ?? user.email ?? "User"}!</span>
                <Button onClick={logout} variant="outline" className="border-white text-[#2a4d69] hover:bg-white hover:text-[#2a4d69]">
                  <FaSignOutAlt className="mr-2" /> Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="border-white text-[#2a4d69] hover:bg-white hover:text-[#2a4d69]">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-[#e74c3c] hover:bg-[#c0392b] text-white">Join Now</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white text-center py-20" style={{backgroundImage: "linear-gradient(rgba(42,77,105,0.8),rgba(75,134,180,0.8)),url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')"}}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">Together for a More Just World</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Join our community to learn, act, and make a difference on critical social justice issues affecting our society today.</p>
          <div className="max-w-xl mx-auto flex">
            <input
              type="text"
              placeholder="Search for causes, actions, or resources..."
              className="flex-1 p-4 rounded-l bg-white text-[#333] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button
              className="rounded-l-none bg-[#e74c3c] hover:bg-[#c0392b] text-white px-6"
              onClick={handleSearch}
            >
              <FaPenFancy />
            </Button>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="bg-[#e7eff6] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2a4d69] mb-2 relative">
            Take Action
            <span className="block mx-auto mt-2 w-20 h-1 bg-[#e74c3c] rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {(filteredActions.length > 0 ? filteredActions : actionsData).map((action) => (
              <Card key={action.index} className="text-center p-8 flex flex-col items-center shadow-md hover:shadow-lg transition-transform">
                {action.index === 0 && <FaPenFancy className="text-3xl text-[#4b86b4] mb-4 mx-auto" />}
                {action.index === 1 && <FaHands className="text-3xl text-[#4b86b4] mb-4 mx-auto" />}
                {action.index === 2 && <FaDonate className="text-3xl text-[#4b86b4] mb-4 mx-auto" />}
                {action.index === 3 && <FaMicrophone className="text-3xl text-[#4b86b4] mb-4 mx-auto" />}
                <h3 className="font-bold text-lg text-[#2a4d69] mb-2">{action.title}</h3>
                <p className="text-sm text-[#666] mb-4">{action.desc}</p>
                <Button onClick={() => window.open(action.index === 0 || action.index === 1 ? 'https://www.amnestykenya.org/' : action.index === 2 ? 'https://support.eji.org/give/153413/#!/donation/checkout' : 'https://www.change.org/c/ke', '_blank')} className="mt-auto">
                  {action.index === 0 ? 'Sign Petitions' : action.index === 1 ? 'Find Opportunities' : action.index === 2 ? 'Donate Now' : 'Share Content'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#2a4d69] mb-2 relative">
          Featured Causes
          <span className="block mx-auto mt-2 w-20 h-1 bg-[#e74c3c] rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {(filteredCauses.length > 0 ? filteredCauses : causesData).map((issue) => {
            const images = [
              'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
              'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            ];
            const percents = [65, 80, 45, 70];
            const raised = [32500, 40000, 22500, 35000];
            const goal = 50000;
            return (
              <Card key={issue.index} className="overflow-hidden shadow-md hover:shadow-lg transition-transform">
                <div className="h-40 bg-cover bg-center" style={{backgroundImage: `url('${images[issue.index]}')`}} />
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg text-[#2a4d69] mb-2">{issue.title}</h3>
                  <p className="text-sm text-[#666] mb-4">{issue.desc}</p>
                  <Progress value={percents[issue.index]} className="mb-2 h-2 bg-gray-200" />
                  <div className="flex justify-between text-xs text-[#666]">
                    <span>{percents[issue.index]}% funded</span>
                    <span>${raised[issue.index].toLocaleString()} / ${goal.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Justice Warriors Section */}
      <section className="w-full px-5 py-20 bg-gradient-to-br from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] rounded-xl shadow-2xl relative overflow-hidden text-white my-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-[#000080] opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Your Voice Can Change The World</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light">In a world where injustice persists, silence is not an option. Stand up, speak out, and be the change you wish to see. Together, we can build a future founded on equality, dignity, and justice for all.</p>

          <div className="flex justify-center flex-wrap gap-4 mb-12">
            <div className="flex-1 min-w-48 max-w-xs p-6 bg-black bg-opacity-20 rounded-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:bg-black hover:bg-opacity-30">
              <div className="text-4xl font-bold mb-2">76%</div>
              <div className="text-lg">Of social justice campaigns see real policy impact</div>
            </div>
            <div className="flex-1 min-w-48 max-w-xs p-6 bg-black bg-opacity-20 rounded-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:bg-black hover:bg-opacity-30">
              <div className="text-4xl font-bold mb-2">2.3M</div>
              <div className="text-lg">Activists joined global justice movements last year</div>
            </div>
            <div className="flex-1 min-w-48 max-w-xs p-6 bg-black bg-opacity-20 rounded-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:bg-black hover:bg-opacity-30">
              <div className="text-4xl font-bold mb-2">148</div>
              <div className="text-lg">Countries with active justice reform movements</div>
            </div>
          </div>

          <div className="mb-8">
            <a href="https://www.amnesty.org/get-involved/take-action/" className="inline-block px-10 py-4 bg-[#ff6b6b] text-white font-semibold text-lg rounded-full mr-2 transition-all duration-300 hover:bg-transparent hover:scale-105 shadow-lg hover:shadow-xl border-2 border-[#ff6b6b]" target="_blank" rel="noopener noreferrer">Join the Movement</a>
            <a href="#educational-resources" className="inline-block px-10 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-full transition-all duration-300 hover:bg-white hover:text-[#1a2a6c] hover:scale-105 shadow-lg hover:shadow-xl">Learn More</a>
          </div>

          <div className="max-w-3xl mx-auto p-8 italic text-lg border-l-4 border-[#ff6b6b] bg-black bg-opacity-20 rounded-r-lg text-left">
            "Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality, tied in a single garment of destiny. Whatever affects one directly, affects all indirectly."
            <div className="text-right mt-4 font-semibold not-italic">- Martin Luther King Jr.</div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="educational-resources" className="bg-gradient-to-br from-[#e7eff6] to-[#d4e4f7] py-16 shadow-inner">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2a4d69] mb-4 relative">
            Educational Resources
            <span className="block mx-auto mt-3 w-24 h-1.5 bg-[#e74c3c] rounded-full shadow-sm"></span>
          </h2>
          <p className="text-center text-[#666] mb-8 max-w-2xl mx-auto text-lg">Explore our curated collection of educational materials to deepen your understanding of social justice issues and learn how to take action.</p>
          <Tabs defaultValue="articles" className="w-full mt-10">
            <TabsList className="flex justify-center flex-wrap gap-3 mb-8 bg-white rounded-xl p-3 shadow-md border border-[#e7eff6]">
              <TabsTrigger value="articles" className="px-6 py-2 rounded-lg font-medium transition-all bg-gray-200 text-gray-800 data-[state=active]:bg-[#e74c3c] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:border-2 data-[state=active]:border-[#c0392b]">Articles</TabsTrigger>
              <TabsTrigger value="videos" className="px-6 py-2 rounded-lg font-medium transition-all bg-gray-200 text-gray-800 data-[state=active]:bg-[#4b86b4] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:border-2 data-[state=active]:border-[#2c5aa0]">Videos</TabsTrigger>
              <TabsTrigger value="podcasts" className="px-6 py-2 rounded-lg font-medium transition-all bg-gray-200 text-gray-800 data-[state=active]:bg-[#2a4d69] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:border-2 data-[state=active]:border-[#1a2a3a]">Podcasts</TabsTrigger>
              <TabsTrigger value="books" className="px-6 py-2 rounded-lg font-medium transition-all bg-gray-200 text-gray-800 data-[state=active]:bg-[#28a745] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:border-2 data-[state=active]:border-[#1e7e34]">Books</TabsTrigger>
              <TabsTrigger value="toolkits" className="px-6 py-2 rounded-lg font-medium transition-all bg-gray-200 text-gray-800 data-[state=active]:bg-[#fd7e14] data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:border-2 data-[state=active]:border-[#d8590c]">Toolkits</TabsTrigger>
            </TabsList>
            <TabsContent value="articles">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {(filteredResources.articles.length > 0 ? filteredResources.articles : resourcesData.articles).map((article) => (
                  <Card key={article.index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#e74c3c] rounded-full flex items-center justify-center mb-4">
                        <FaBookOpen className="text-white text-xl" />
                      </div>
                      <h3 className="font-bold text-xl text-[#2a4d69] mb-3">{article.title}</h3>
                      <p className="text-sm text-[#666] mb-5 leading-relaxed">{article.desc}</p>
                      <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all">
                        <a href={article.index === 0 ? "https://robertsmith.com/blog/systemic-racism-in-education/" : article.index === 1 ? "https://www.civilrightsmuseum.org/" : "https://ourworldindata.org/economic-inequality"} target="_blank" rel="noopener noreferrer">Read Article</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="videos">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {(filteredResources.videos.length > 0 ? filteredResources.videos : resourcesData.videos).map((video) => (
                  <Card key={video.index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#4b86b4] rounded-full flex items-center justify-center mb-4">
                        <FaPlay className="text-white text-xl" />
                      </div>
                      <h3 className="font-bold text-xl text-[#2a4d69] mb-3">{video.title}</h3>
                      <p className="text-sm text-[#666] mb-5 leading-relaxed">{video.desc}</p>
                      <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all">
                        <a href={video.index === 0 ? "https://youtu.be/w6dnj2IyYjE?si=w-rCONG3vZRSRSqI" : video.index === 1 ? "https://youtu.be/Y3s58Ang5qI?si=UrYXENLS19S-2DLM" : "https://youtu.be/9isVHRDeGis?si=JfUAOiQjtv8QxQtn"} target="_blank" rel="noopener noreferrer">Watch Video</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="podcasts">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {(filteredResources.podcasts.length > 0 ? filteredResources.podcasts : resourcesData.podcasts).map((podcast) => (
                  <Card key={podcast.index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#2a4d69] rounded-full flex items-center justify-center mb-4">
                        <FaMicrophone className="text-white text-xl" />
                      </div>
                      <h3 className="font-bold text-xl text-[#2a4d69] mb-3">{podcast.title}</h3>
                      <p className="text-sm text-[#666] mb-5 leading-relaxed">{podcast.desc}</p>
                      <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all">
                        <a href={podcast.index === 0 ? "https://open.spotify.com/show/7oxQpThXLAHKvZoFfhUOBz?si=c9ef7d7347254094" : podcast.index === 1 ? "https://open.spotify.com/show/2Is8N1JBnX0eCB1kUisBkV?si=bfb5126af0984a00" : "https://open.spotify.com/show/66XhGY5JJy6inJT2Refuoa?si=0a0ece3c0fef4a4b"} target="_blank" rel="noopener noreferrer">Listen Now</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="books">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#e74c3c] rounded-full flex items-center justify-center mb-4">
                      <FaBook className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">The New Jim Crow</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">A groundbreaking work on mass incarceration and racial justice in America.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://www.amazon.com/New-Jim-Crow-Incarceration-Colorblindness/dp/1595586431" target="_blank" rel="noopener noreferrer">View Book</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#e74c3c] rounded-full flex items-center justify-center mb-4">
                      <FaBook className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">How to Be an Antiracist</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">A guide to recognizing and dismantling racism in our daily lives.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://bookshop.org/p/books/how-to-be-an-antiracist-ibram-x-kendi/521ef65d5c2268ca?ean=9780525509288&next=t&next=t" target="_blank" rel="noopener noreferrer">View Book</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#e74c3c] rounded-full flex items-center justify-center mb-4">
                      <FaBook className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Caste: The Origins of Our Discontents</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">An exploration of the unspoken caste system that has shaped America.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://bookshop.org/p/books/caste-the-origins-of-our-discontents-isabel-wilkerson/ba07006a708c5070?ean=9780593230251&next=t&next=t" target="_blank" rel="noopener noreferrer">View Book</a></Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="toolkits">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#4b86b4] rounded-full flex items-center justify-center mb-4">
                      <FaTools className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Community Organizing Guide</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">Practical steps for effective community organizing and building grassroots movements for change.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://commonslibrary.org/tools-for-organising/" target="_blank" rel="noopener noreferrer">Download Toolkit</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#4b86b4] rounded-full flex items-center justify-center mb-4">
                      <FaTools className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Digital Advocacy Toolkit</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">Tools and strategies for effective online activism and social media campaigns.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://mobilisationlab.org/resources/" target="_blank" rel="noopener noreferrer">Download Toolkit</a></Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#4b86b4] rounded-full flex items-center justify-center mb-4">
                      <FaTools className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-xl text-[#2a4d69] mb-3">Policy Advocacy Guide</h3>
                    <p className="text-sm text-[#666] mb-5 leading-relaxed">How to engage with policymakers and influence legislation for social change.</p>
                    <Button asChild className="bg-[#e74c3c] hover:bg-[#c0392b] text-white w-full py-3 rounded-lg font-medium transition-all"><a href="https://www.unicef.org/evaluation/files/Advocacy_Toolkit.pdf" target="_blank" rel="noopener noreferrer">Download Toolkit</a></Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white pt-16 pb-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <h3 className="font-bold text-lg mb-4 relative pb-2">About JusticeHub
                <span className="absolute left-0 bottom-0 w-10 h-1 bg-[#e74c3c] rounded-full"></span>
              </h3>
              <p className="text-[#ccc] text-sm">JusticeHub is a platform dedicated to promoting social justice through education, community engagement, and actionable initiatives.</p>
              <div className="flex gap-3 mt-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#e74c3c] transition-colors"><FaFacebookF /></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#e74c3c] transition-colors"><FaTwitter /></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#e74c3c] transition-colors"><FaInstagram /></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#e74c3c] transition-colors"><FaLinkedinIn /></a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 relative pb-2">Quick Links
                <span className="absolute left-0 bottom-0 w-10 h-1 bg-[#e74c3c] rounded-full"></span>
              </h3>
              <ul className="text-[#ccc] text-sm space-y-2">
                <li><Link to="/#home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/issues">Campaigns</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/actions">Get Involved</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 relative pb-2">Issues
                <span className="absolute left-0 bottom-0 w-10 h-1 bg-[#e74c3c] rounded-full"></span>
              </h3>
              <ul className="text-[#ccc] text-sm space-y-2">
                <li><Link to="/issues">Racial Justice</Link></li>
                <li><Link to="/issues">Gender Equity</Link></li>
                <li><Link to="/issues">Climate Justice</Link></li>
                <li><Link to="/issues">Economic Fairness</Link></li>
                <li><Link to="/issues">LGBTQ+ Rights</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 relative pb-2">Contact Us
                <span className="absolute left-0 bottom-0 w-10 h-1 bg-[#e74c3c] rounded-full"></span>
              </h3>
              <ul className="text-[#ccc] text-sm space-y-2">
                <li className="flex items-center gap-2"><FaEnvelope /> info@justicehub.org</li>
                <li className="flex items-center gap-2"><FaPhone /> (555) 123-4567</li>
                <li className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Justice Ave, City, State 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-[#aaa] text-xs">
            <p>&copy; 2025 JusticeHub. All rights reserved. | <a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
